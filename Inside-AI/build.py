"""Build a portable static site. Unapproved content is preview only."""
import argparse
import html
import json
from pathlib import Path
import re
import shutil

ROOT = Path(__file__).resolve().parent
parser = argparse.ArgumentParser()
parser.add_argument('--preview', action='store_true')
args = parser.parse_args()
data = json.loads((ROOT / 'content/site.json').read_text(encoding='utf-8'))
out = ROOT / ('preview' if args.preview else 'dist')
out.mkdir(exist_ok=True)
for old_news in out.glob('news-*.html'):
    old_news.unlink()
shutil.copytree(ROOT / 'assets', out / 'assets', dirs_exist_ok=True)
for file in ('styles.css', 'script.js'):
    shutil.copy2(ROOT / file, out / file)
(out / '.nojekyll').write_text('', encoding='utf-8')
esc = html.escape
links = data['links']

def head(title, description, canonical):
    return f'''<!doctype html><html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{esc(title)}</title><meta name="description" content="{esc(description)}">
<link rel="canonical" href="{esc(canonical)}"><meta name="theme-color" content="#0E0C09">
<meta property="og:title" content="{esc(title)}"><meta property="og:description" content="{esc(description)}">
<meta property="og:type" content="website"><meta property="og:url" content="{esc(canonical)}">
<meta property="og:image" content="{esc(data['proposed_site_url'])}assets/linkedin-banner.png">
<link rel="icon" href="assets/inside-ai-logo.png"><link rel="stylesheet" href="styles.css"></head><body>'''

def footer():
    return f'''<footer class="footer"><div class="wrap"><span class="label">Inside AI · Somil Singh · 2026</span>
<nav class="footer-nav" aria-label="More links"><a href="{links['github']}">GitHub</a><a href="{links['portfolio']}">Portfolio</a>
<a href="{links['linkedin']}">LinkedIn profile</a><a href="{links['email']}">Reach me / collab</a></nav></div></footer>'''

cards = []
article_urls = []
for item in data['articles']:
    if not item['published']:
        continue
    reading_links = []
    if item.get('source'):
        file = item['page']
        article_urls.append(data['proposed_site_url'] + file)
        body = (ROOT / 'content' / item['source']).read_text(encoding='utf-8')
        article_page = head(item['title'] + ' | Inside AI', item['description'], item['medium'])
        article_page += '<main class="reader"><a class="back label" href="index.html#library">← Back to the library</a>'
        article_page += '<p class="article-date">' + esc(item['date']) + ' · Somil Singh</p>' + body
        article_page += '<p>Also read this article on <a href="' + esc(item['medium']) + '">Medium</a> or <a href="' + esc(item['substack']) + '">Substack</a>.</p>'
        article_page += '</main>' + footer() + '</body></html>'
        (out / file).write_text(article_page, encoding='utf-8')
        reading_links.append('<a href="' + esc(file) + '">Read here ↗</a>')
    for key, label in [('medium', 'Medium'), ('substack', 'Substack'), ('x', 'X'), ('company', 'LinkedIn')]:
        if item.get(key):
            reading_links.append('<a href="' + esc(item[key]) + '">' + label + ' ↗</a>')
    cards.append(f'''<article class="article-card" data-article data-type="{esc(item['type'])}">
<img class="article-art" src="{esc(item['image'])}" alt="{esc(item['image_alt'])}" loading="lazy" width="640" height="360">
<div class="article-copy"><div class="part-label label"><span>Part {item['part']} · Deep Learning Models</span><span class="type">{item['type']}</span></div>
<h3>{esc(item['title'])}</h3><p>{esc(item['description'])}</p><nav class="reading" aria-label="Read Part {item['part']}">
{''.join(reading_links)}</nav></div></article>''')

def inline(text):
    text = esc(text)
    text = re.sub(r'\[([^\]]+)\]\((https?://[^\s)]+)\)', r'<a href="\2">\1</a>', text)
    return re.sub(r'`([^`]+)`', r'<code>\1</code>', text)

def markdown(text):
    parts = []
    for block in re.split(r'\n\s*\n', text.strip()):
        if block.startswith('# '):
            parts.append('<h1>' + inline(block[2:]) + '</h1>')
        elif block.startswith('## '):
            parts.append('<h2>' + inline(block[3:]) + '</h2>')
        elif block.startswith('### '):
            parts.append('<h3>' + inline(block[4:]) + '</h3>')
        elif re.fullmatch(r'!\[[^\]]*\]\(assets/[^\s)]+\)', block):
            media = re.fullmatch(r'!\[([^\]]*)\]\((assets/[^\s)]+)\)', block)
            parts.append('<figure><img src="' + esc(media.group(2)) + '" alt="' + esc(media.group(1)) + '" loading="lazy"><figcaption>' + esc(media.group(1)) + '</figcaption></figure>')
        else:
            parts.append('<p>' + inline(block.replace('\n', ' ')) + '</p>')
    return '\n'.join(parts)

news = data['news']
visible = [item for item in news if item['approval'] == 'approved' or args.preview]
news_html = '<p class="empty-news">New research notes are on the way. For now, start with the model library.</p>'
if visible:
    item = visible[-1]
    file = 'news-' + item['id'] + '.html'
    news_html = f'''<article class="news-entry"><div class="news-summary"><span class="label">{esc(item['date'])}</span>
<h3>{esc(item['title'])}</h3><p>{esc(item.get('description', 'What changed, what you can use and what I’d check before building. Original sources are linked in every update.'))}</p>
<a class="button" href="{file}">{esc(item.get('reading_label', 'Read the updates ↗'))}</a></div><ol class="news-list">{''.join('<li>'+esc(topic)+'</li>' for topic in item['topics'])}</ol></article>'''
    if len(visible) > 1:
        news_html += '<nav class="news-archive reading" aria-label="Earlier world AI editions">' + ''.join('<a href="news-' + esc(previous['id']) + '.html">' + esc(previous['date'] + ' · ' + previous['title']) + ' ↗</a>' for previous in reversed(visible[:-1])) + '</nav>'
for item in visible:
    file = 'news-' + item['id'] + '.html'
    text = (ROOT / 'content' / item['source']).read_text(encoding='utf-8')
    page = head(item['title'] + ' | Inside AI', item.get('description', 'Sourced AI updates for builders, with availability, limitations and practical context.'), data['proposed_site_url'] + file)
    page += '<main class="reader"><a class="back label" href="index.html#news">← Back to Inside AI</a>' + markdown(text) + '</main>' + footer() + '</body></html>'
    (out / file).write_text(page, encoding='utf-8')

page = head('Inside AI | Model Explainers and AI Study Notes', data['description'], data['proposed_site_url'])
page += f'''<a class="skip" href="#main">Skip to content</a>
<header class="topbar"><nav class="wrap nav" aria-label="Main navigation"><a class="brand" href="#main"><img src="assets/inside-ai-logo.png" alt="" width="49" height="49">Inside AI</a>
<div class="navlinks"><a href="#library">Library</a><a href="#news">World AI</a><a href="#services">Services</a><a href="#about">About</a><a class="outline" href="#channels">Find me ↗</a></div></nav></header>
<main id="main"><section class="hero" aria-labelledby="hero-title"><div class="hero-inner"><div class="label">A public learning journal · Somil Singh</div>
<h1 class="display" id="hero-title"><span>Learn it.</span><span>Build it.</span><span><em>Explain it.</em></span></h1>
<p>I’m upskilling in AI, ML, DL, CV and robotics and bringing you all along. Notes from my research, diagrams and code to help you build projects and prep for interviews (sharing is caring.)</p>
<div class="actions"><a class="button primary" href="#library">Read the model notes ↗</a><a class="button" href="#news">Explore world AI ↓</a></div>
<a class="scroll-note label" href="#library">Step inside ↓</a></div></section>
<div class="topic-ribbon" aria-label="Topics"><b>AI</b><span>Machine learning</span><span>Deep learning</span><span>Computer vision</span><span>Robotics</span></div>
<section class="section library" id="library" aria-labelledby="library-title"><div class="wrap"><div class="section-head"><div><span class="label">01 / The model library</span><h2 class="display" id="library-title">One model. Two ways in.</h2></div><p class="section-note">Start with the overview and code. Then dig into the concepts behind them.</p></div>
<div class="tools"><div class="filters" role="group" aria-label="Filter model notes"><button data-filter="All" aria-pressed="true">All notes</button><button data-filter="Overview" aria-pressed="false">Overview</button><button data-filter="Foundations" aria-pressed="false">Foundations</button></div>
<label class="search" for="article-search">Search <input id="article-search" type="search" placeholder="Try KL divergence" autocomplete="off"></label></div>
<p id="result-count" class="label" aria-live="polite">{len(cards)} notes</p><div class="cards">{''.join(cards)}</div><p id="no-results" class="empty" hidden>No notes match that search. Try VAE or clear the filter.</p>
<div class="path"><span class="label">Inside AI series</span><p>Starting with generative AI. VAE, VQ VAE and GAN notes are in the library; diffusion is next on the learning path.</p></div></div></section>
<section class="section news" id="news" aria-labelledby="news-title"><div class="wrap"><div class="section-head"><div><span class="label">02 / World AI</span><h2 class="display" id="news-title">Research moves fast.<br>Let’s make sense of it.</h2></div><p class="section-note">Selected AI updates with links to the original research and announcements.</p></div>{news_html}</div></section>
<section class="section about" id="about" aria-labelledby="about-title"><div class="wrap"><span class="label">03 / Why Inside AI exists</span><div class="about-grid"><h2 class="display" id="about-title">Learning in public.<br>Bringing you all along.</h2><div class="about-copy"><p>I’m an AI engineer @ Oracle and I’m actively upskilling in the fields I’m passionate about. Inside AI is where I share what I learn, from foundational models to new research.</p><p><strong>From my notes to your next project.</strong> Expect model explainers, diagrams and code for projects and interview prep. Questions are welcome. If something clicks, share it with a friend ❤️</p></div></div>
<div class="principles"><div><span class="label">Understand</span><p>Build intuition before diving into the maths.</p></div><div><span class="label">Try</span><p>Connect the ideas to runnable code and actual output.</p></div><div><span class="label">Check</span><p>Read the sources and separate reported claims from verified results.</p></div></div>
<img class="banner" src="assets/linkedin-banner.png" alt="Inside AI. Learn it. Build it. Explain it. AI, ML, DL, computer vision and robotics. Daily notes, diagrams and code. Reach me or collaborate: thesomilsinghofficial@gmail.com." loading="lazy" width="2171" height="724"></div></section>
<section class="section services" id="services" aria-labelledby="services-title"><div class="wrap"><span class="label">04 / Work with Inside AI</span><div class="section-head"><div><h2 class="display" id="services-title">Built something useful?<br>Let’s explain it clearly.</h2></div><p class="section-note">Content and marketing support for AI and tech brands. Project scope and pricing are agreed individually.</p></div>
<div class="principles"><div><span class="label">Strategy</span><p>Brand positioning, audience research, content strategy and editorial planning.</p></div><div><span class="label">Content</span><p>X and LinkedIn launch copy, technical explainers, product stories and article repurposing.</p></div><div><span class="label">Review</span><p>Analytics reviews and content improvements, with clear metric definitions and honest result reporting.</p></div></div>
<div class="newsletter-card"><p>For a content project or brand collaboration, share your product, audience, goal and timeline. We can discuss a suitable scope before quoting. Sponsored work will be clearly disclosed.</p><a class="button primary" href="https://www.linkedin.com/services/page/94058134774a3686b1/">Explore company services ↗</a><a class="button" href="https://www.linkedin.com/company/inside-ai-by-somil/">Message Inside AI ↗</a><a class="button" href="{links['email']}">Email a project brief ↗</a></div></div></section>
<section class="channels" id="channels" aria-labelledby="channels-title"><div class="wrap"><span class="label">05 / Keep in touch</span><h2 id="channels-title">Same curiosity. More places to learn.</h2><p class="muted">Follow me on all my socials to stay up to date with every post and the fun ❤️</p>
<div class="channel-grid"><a class="channel-link" href="{links['medium']}"><span>Medium ↗</span><small>Model explainers and practical notes</small></a><a class="channel-link" href="{links['substack']}"><span>Substack ↗</span><small>The articles, delivered to your inbox</small></a><a class="channel-link" href="{links['x']}"><span>X ↗</span><small>Quick notes, questions and conversation</small></a><a class="channel-link" href="{links['newsletter']}"><span>LinkedIn newsletter ↗</span><small>Inside AI on LinkedIn</small></a></div>
<div class="newsletter-card"><p>Got a question or an idea to build together? Come say hey. I’d love to hear what you’re working on.</p><a class="button" href="{links['email']}">Reach me / collab ↗</a></div></div></section></main>'''
page += footer() + '<script src="script.js" defer></script></body></html>'
(out / 'index.html').write_text(page, encoding='utf-8')
(out / 'robots.txt').write_text('User-agent: *\nAllow: /\nSitemap: ' + data['proposed_site_url'] + 'sitemap.xml\n', encoding='utf-8')
urls = [data['proposed_site_url']] + article_urls + [data['proposed_site_url'] + 'news-' + x['id'] + '.html' for x in visible]
(out / 'sitemap.xml').write_text('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' + ''.join('<url><loc>'+esc(url)+'</loc></url>' for url in urls) + '</urlset>', encoding='utf-8')
print(json.dumps({'mode': 'preview' if args.preview else 'production', 'output': str(out), 'published_articles': len(cards), 'news_editions': len(visible), 'pending_news_included': args.preview}, indent=2))
