const links = [
  ["Explore Inside AI", "https://somilsin.github.io/Artificial-Intelligence/Inside-AI/"],
  ["Medium", "https://medium.com/@thesomilsinghofficial"],
  ["Substack", "https://thesomilsingh.substack.com/"],
  ["X Articles", "https://x.com/Skywalkerlyzv"],
  ["LinkedIn company", "https://www.linkedin.com/company/inside-ai-by-somil/"],
  ["Graphite reels", "https://www.instagram.com/yours_trulyhq/"],
  ["Newsletter", "https://www.linkedin.com/newsletters/7511777490416250880/"],
];

const reading = [
  { part: "01", title: "How VAEs learn to generate new images", topic: "VAE · Overview", href: "https://medium.com/@thesomilsinghofficial/how-vaes-learn-to-generate-new-images-9ebfd7a6a508" },
  { part: "02", title: "Why a VAE needs KL divergence and a little noise", topic: "VAE · Foundations", href: "https://medium.com/@thesomilsinghofficial/why-a-vae-needs-kl-divergence-variational-inference-and-a-little-noise-e29c5932d597" },
  { part: "03", title: "How a VQ VAE learns a dictionary of image codes", topic: "VQ VAE · Overview", href: "https://medium.com/@thesomilsinghofficial/how-a-vq-vae-turns-an-image-into-a-code-from-a-learned-dictionary-c5b0e0b96c64" },
  { part: "04", title: "The VQ VAE gradient trick: what learns when a code is selected?", topic: "VQ VAE · Foundations", href: "https://medium.com/@thesomilsinghofficial/the-vq-vae-gradient-trick-what-learns-when-a-code-is-selected-b7f4a54db78d" },
];

export default function InsideAIShowcase() {
  const media = `${import.meta.env.BASE_URL}media/`;
  return (
    <section id="inside-ai" aria-labelledby="inside-ai-title" className="relative px-6 pt-24 md:px-12">
      <div className="mx-auto max-w-[1400px] border-t border-[color:var(--color-border)] pt-10">
        <div className="reveal grid items-end gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="eyebrow text-[color:var(--color-primary)]">My learning in public · Founded October 2026</p>
            <h2 id="inside-ai-title" className="serif-display mt-5 text-5xl leading-[1.02] md:text-7xl">Inside <em className="text-[color:var(--color-primary)]">AI</em>.</h2>
            <p className="serif-italic-accent mt-5 text-xl md:text-2xl">Learn it. Build it. Explain it.</p>
          </div>
          <p className="prose-editorial max-w-xl md:col-span-5">I turn my study notes into visual explanations of what happens under the hood. Follow the intuition, work through the maths and try the code with me.</p>
        </div>

        <figure className="reveal mt-10">
          <video controls playsInline preload="none" poster={`${media}inside-ai-trailer-poster.jpg`} aria-label="Inside AI introduction trailer, 32 seconds" className="aspect-video w-full rounded-sm border border-[color:var(--color-border)] bg-[#07131f]">
            <source src={`${media}inside-ai-trailer.mp4`} type="video/mp4" />
            <track kind="captions" src={`${media}inside-ai-trailer.vtt`} srcLang="en" label="English" />
            Your browser does not support video. <a href={`${media}inside-ai-trailer.mp4`}>Watch the Inside AI trailer</a>.
          </video>
          <figcaption className="mt-4 flex flex-wrap justify-between gap-3 text-sm text-[color:var(--color-foreground)]/65">
            <span>32 second introduction · original motion graphics · instrumental soundtrack</span>
            <a href={`${media}inside-ai-trailer-transcript.txt`} className="underline underline-offset-4">Read the trailer transcript ↗</a>
          </figcaption>
        </figure>

        <div className="reveal mt-8 flex flex-wrap gap-3" aria-label="Inside AI channels">
          {links.map(([label, href], i) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" className={`rounded-sm border px-5 py-3 eyebrow transition-opacity hover:opacity-75 ${i === 0 ? "border-[color:var(--color-primary)] bg-[color:var(--color-primary)] text-[color:var(--color-primary-foreground)]" : "border-[color:var(--color-border)] text-[color:var(--color-foreground)]"}`}>{label} ↗</a>
          ))}
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-3">
          <div className="reveal border-t border-[color:var(--color-border)] pt-6 lg:col-span-2">
            <p className="eyebrow text-[color:var(--color-primary)]">Deep Learning Models · Published Parts 01 to 04</p>
            <div className="mt-5 grid gap-x-8 sm:grid-cols-2">
              {reading.map((item) => (
                <a key={item.part} href={item.href} target="_blank" rel="noopener noreferrer" className="group border-b border-[color:var(--color-border)] py-6">
                  <p className="eyebrow text-[color:var(--color-foreground)]/55">Part {item.part} · {item.topic}</p>
                  <h3 className="serif-display mt-3 text-2xl transition-colors group-hover:text-[color:var(--color-primary)]">{item.title} ↗</h3>
                </a>
              ))}
            </div>
          </div>
          <div className="reveal border-t border-[color:var(--color-border)] pt-6">
            <p className="eyebrow text-[color:var(--color-primary)]">World AI facts</p>
            <h3 className="serif-display mt-5 text-3xl">The developments behind the headlines.</h3>
            <p className="prose-editorial mt-4">Sourced AI and technology updates with original announcement dates, practical context and links to the primary sources.</p>
            <a href="https://somilsin.github.io/Artificial-Intelligence/Inside-AI/#news" target="_blank" rel="noopener noreferrer" className="mt-6 inline-block eyebrow text-[color:var(--color-primary)]">Read the published updates ↗</a>
            <p className="mt-7 text-sm leading-relaxed text-[color:var(--color-foreground)]/65">Alongside the articles, I create detailed AI video explainers and graphite space reels for YoursTrulyHQ. The next model notes explore GANs and diffusion.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
