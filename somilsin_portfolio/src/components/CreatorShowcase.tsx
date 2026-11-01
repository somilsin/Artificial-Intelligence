const creatorUrl = "https://yours-trulyhq-portfolio-updated.icybasin.chatgpt.site/";

export default function CreatorShowcase() {
  const media = `${import.meta.env.BASE_URL}media/`;
  const links = [["Explore my creator portfolio", creatorUrl], ["Instagram", "https://www.instagram.com/yours_trulyhq/"], ["YouTube", "https://www.youtube.com/@YoursTrulyHQ"], ["AI explainer", "https://www.youtube.com/watch?v=Dd-k03EHi2s"], ["Brand collaborations", `${creatorUrl}#contact`]];
  return (
    <section id="creator" aria-labelledby="creator-title" className="relative scroll-mt-36 px-6 pt-24 md:px-12">
      <div className="mx-auto max-w-[1400px] border-t border-[color:var(--color-border)] pt-10">
        <div className="reveal grid items-end gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="eyebrow text-[color:var(--color-primary)]">My creator portfolio · Visual stories and explainers</p>
            <h2 id="creator-title" className="serif-display mt-5 text-5xl leading-[1.02] md:text-7xl">Yours<em className="text-[color:var(--color-primary)]">TrulyHQ</em>.</h2>
            <p className="serif-italic-accent mt-5 text-xl md:text-2xl">A world worth feeling.</p>
          </div>
          <p className="prose-editorial max-w-xl md:col-span-5">I make visual stories about the worlds around us and the feelings within us. Explore the graphite worlds, watch an AI explainer or find a story we could make together.</p>
        </div>
        <figure className="reveal mt-10">
          <video controls playsInline preload="none" poster={`${media}creator-trailer-poster.jpg`} aria-label="YoursTrulyHQ creator portfolio trailer, 24 seconds, silent" className="aspect-video w-full rounded-sm border border-[color:var(--color-border)] bg-[#181813]">
            <source src={`${media}creator-trailer.mp4`} type="video/mp4" />
            <track kind="captions" src={`${media}creator-trailer.vtt`} srcLang="en" label="English titles" />
            <a href={`${media}creator-trailer.mp4`}>Watch the creator trailer</a>
          </video>
          <figcaption className="mt-4 flex flex-wrap justify-between gap-3 text-sm text-[color:var(--color-foreground)]/65">
            <span>24 second visual introduction · silent reel montage · digitally created visuals with generative assistance</span>
            <a href={`${media}creator-trailer-transcript.txt`} className="underline underline-offset-4">Read the trailer transcript ↗</a>
          </figcaption>
        </figure>
        <div className="reveal mt-8 flex flex-wrap gap-3" aria-label="Creator portfolio destinations">
          {links.map(([label, href], i) => <a key={label} href={href} target="_blank" rel="noopener noreferrer" className={`rounded-sm border px-5 py-3 eyebrow transition-opacity hover:opacity-75 ${i === 0 ? "border-[color:var(--color-primary)] bg-[color:var(--color-primary)] text-[color:var(--color-primary-foreground)]" : "border-[color:var(--color-border)] text-[color:var(--color-foreground)]"}`}>{label} ↗</a>)}
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {[["Emotions", "Small stories about connection, solitude and finding the courage to keep going."], ["Space", "Cosmic scale and familiar feelings, brought together through a graphite aesthetic."], ["Curiosity", "AI and science explainers on Pencil Science by YoursTrulyHQ."]].map(([title, text]) => <div key={title} className="reveal border-t border-[color:var(--color-border)] pt-6"><h3 className="serif-display text-3xl">{title}</h3><p className="prose-editorial mt-4">{text}</p></div>)}
        </div>
        <p className="reveal mt-8 text-sm leading-relaxed text-[color:var(--color-foreground)]/65">The creator portfolio includes an audience snapshot checked on 31 October 2026, selected public videos and contact details for collaborations.</p>
      </div>
    </section>
  );
}
