export type SourceRef = {
  /** The exact claim made elsewhere on the page. */
  claim: string;
  evidenceNote?: string;
  /** Where on the page the claim appears. */
  section: "Hero" | "Metrics" | "Experience" | "Work" | "Stack" | "Credentials" | "Inside AI" | "Creator";
  /** GitHub evidence: full repo name (owner/repo) and optional PR / file path. */
  repo?: string;
  repoPath?: string;
  repoLabel?: string;
  /** Non-GitHub primary source (DOI, lab page, employer). */
  external?: { label: string; href: string };
  /** The CV section that states this claim, linked to the matching page anchor. */
  cv: { label: string; anchor: string };
};

export const GITHUB_USER = "somilsin";

export const SOURCES: SourceRef[] = [
  {
    claim: "YoursTrulyHQ creator portfolio with visual stories, public videos and collaboration details.",
    section: "Creator",
    external: { label: "My Creator Portfolio", href: "https://somilsin.github.io/Artificial-Intelligence/my-creator-portfolio/" },
    evidenceNote: "The creator portfolio labels its audience snapshot as checked on 2 November 2026.",
    cv: { label: "Creator showcase and trailer", anchor: "#creator" },
  },
  {
    claim: "Deep Learning 05 on GANs was published on LinkedIn on 30 October 2026.",
    section: "Inside AI",
    external: { label: "Read the published GAN article", href: "https://www.linkedin.com/pulse/deep-learning-05-gan-spots-every-fake-how-does-its-learn-singh--sydof/" },
    cv: { label: "Published model reading", anchor: "#inside-ai" },
  },
  {
    claim: "My professional timeline follows the roles and dates on my LinkedIn profile, including Oracle, IISc, Samsung, Solar Secure, Wipro and my founder experience.",
    evidenceNote: "Current role details were rechecked against my live LinkedIn experience on 1 November 2026. Professional performance figures are profile statements rather than public benchmarks. Separately documented research retains its own source note.",
    section: "Experience",
    external: { label: "My LinkedIn experience", href: "https://www.linkedin.com/in/somil-singh/details/experience/" },
    cv: { label: "Professional timeline", anchor: "#experience" },
  },
  {
    claim: "TensorTonic solutions cover core probability, vector operations and sample statistics with problem notes and source credit.",
    section: "Work",
    repo: "somilsin/Machine-Learning",
    repoPath: "/tree/main/TensorTonic-Solutions",
    repoLabel: "TensorTonic solutions",
    cv: { label: "Machine learning practice", anchor: "#work" },
  },
  {
    claim: "My cybersecurity reconnaissance toolkit is a record of Python networking practice with a SQLite port mapping database.",
    section: "Work",
    repo: "somilsin/Learning-Archive",
    repoPath: "/tree/main/Cybersecurity-Reconnaissance-Tools",
    repoLabel: "Reconnaissance tools",
    cv: { label: "Networking and security practice", anchor: "#work" },
  },
  {
    claim: "Ivy is a study of an existing open source codebase for framework interoperability and API design, with original attribution and licence retained.",
    section: "Work",
    repo: "somilsin/Learning-Archive",
    repoPath: "/tree/main/ivy",
    repoLabel: "Ivy codebase study",
    cv: { label: "Framework codebase study", anchor: "#work" },
  },
{
  "claim": "Founder of Inside AI. Five published LinkedIn model articles cover VAE, VQ VAE and GANs.",
  "section": "Inside AI",
  "repo": "somilsin/Artificial-Intelligence",
  "repoPath": "/tree/main/Inside-AI",
  "repoLabel": "Inside AI source",
  "cv": {
    "label": "Inside AI trailer and published reading",
    "anchor": "#inside-ai"
  }
},
{
  "claim": "Part 04: The VQ VAE gradient trick, published 5 October 2026.",
  "section": "Inside AI",
  "external": {
    "label": "Read the published Part 04 article",
    "href": "https://medium.com/@thesomilsinghofficial/the-vq-vae-gradient-trick-what-learns-when-a-code-is-selected-b7f4a54db78d"
  },
  "cv": {
    "label": "Inside AI articles",
    "anchor": "#inside-ai"
  }
},
{
  "claim": "Previously documented machine learning research at Strand Life Sciences on early cancer detection.",
  "section": "Experience",
  "evidenceNote": "Research was documented on my profile on 6 October 2026. The position was absent from the live experience page checked on 1 November 2026, so this portfolio does not assert current employment or an unverified end date. Private clinical data and benchmarks are not published here.",
  "external": {
    "label": "My LinkedIn experience",
    "href": "https://www.linkedin.com/in/somil-singh/details/experience/"
  },
  "cv": {
    "label": "Experience · Strand Life Sciences",
    "anchor": "#experience"
  }
},
{
  "claim": "Best All Rounder Student Award in 2015 and 2016, chess, spelling bee and sports distinctions.",
  "section": "Credentials",
  "evidenceNote": "Personal honours as listed on my public profile.",
  "external": {
    "label": "My LinkedIn honours",
    "href": "https://www.linkedin.com/in/somil-singh/details/honors/"
  },
  "cv": {
    "label": "Education and recognition",
    "anchor": "#credentials"
  }
},
  {
    claim:
      "NeRF with plenoptic 7D scene representations, +25% reconstruction fidelity (Blender, LLFF, DTU) at IISc VAL.",
    evidenceNote: "Professional experience as described on my LinkedIn profile. The organisation link provides context.",
    section: "Experience",
    external: { label: "IISc Visual AI & Learning Lab", href: "https://val.cds.iisc.ac.in/" },
    cv: { label: "CV · Experience § IISc Bangalore, VAL", anchor: "#experience" },
  },
  {
    claim:
      "Reduced mean joint position error 18% using Gaussian splatting, supersampling and custom BVH.",
    evidenceNote: "Professional experience as described on my LinkedIn profile. The organisation link provides context.",
    section: "Experience",
    external: { label: "IISc Visual AI & Learning Lab", href: "https://val.cds.iisc.ac.in/" },
    cv: { label: "CV · Experience § IISc Bangalore, VAL", anchor: "#experience" },
  },
  {
    claim: "Multi agent LLM ecosystem triaging 150 to 200 bugs/week; 45 minutes to 2 minutes resolution.",
    evidenceNote: "Professional result reported on my LinkedIn profile. No public benchmark is linked.",
    section: "Experience",
    external: {
      label: "Oracle Primavera Cloud",
      href: "https://www.oracle.com/construction-engineering/primavera-cloud/",
    },
    cv: { label: "CV · Experience § Oracle, Primavera Cloud", anchor: "#experience" },
  },
  {
    claim: "RAG over a 100k+ vector knowledge base, 500+ RFP documents/day, under 1.5 seconds retrieval.",
    evidenceNote: "Professional experience as described on my LinkedIn profile. The organisation link provides context.",
    section: "Experience",
    external: {
      label: "Oracle Vector 23ai",
      href: "https://www.oracle.com/database/ai-vector-search/",
    },
    cv: { label: "CV · Experience § Oracle, Primavera Cloud", anchor: "#experience" },
  },
  {
    claim: "$1.1M projected savings from org wide agentic SDLC adoption.",
    evidenceNote: "Professional result reported on my LinkedIn profile. No public benchmark is linked.",
    section: "Experience",
    cv: { label: "CV · Experience § Oracle, Primavera Cloud", anchor: "#experience" },
  },
  {
    claim:
      "BehaviorAI · top 5 winner of 1,000+ applicants, Softway LoveXAI Hackathon 2026, built solo in a 2 hour sprint.",
    section: "Work",
    repo: "somilsin/Artificial-Intelligence",
    repoPath: "/tree/main/behaviorai-lovexai",
    repoLabel: "Source repository",
    cv: { label: "CV · Awards § LoveXAI Hackathon", anchor: "#credentials" },
  },
  {
    claim:
      "Coauthored object detection, classification and tracking research using YOLOv4, TensorFlow and OpenCV. The paper identifies occlusion handling as a limitation.",
    section: "Work",
    external: {
      label: "doi.org/10.5281/zenodo.8330641",
      href: "https://doi.org/10.5281/zenodo.8330641",
    },
    cv: { label: "CV · Publications § IJISRT Vol. 8 Issue 8", anchor: "#credentials" },
  },
  {
    claim:
      "Digit classification and debiasing VAE notebooks, with recorded runs and a NumPy/SciPy nnkit engine using explicit backward passes.",
    section: "Work",
    repo: "somilsin/Machine-Learning",
    repoPath: "/tree/main/Deep-Learning_Computer-Vision",
    repoLabel: "Source repository",
    cv: { label: "CV · Projects § Deep Learning & Computer Vision", anchor: "#work" },
  },
  {
    claim:
      "Recorded LSTM music generation and LoRA adaptation experiments with clearly labelled reduced local runs.",
    section: "Work",
    repo: "somilsin/Machine-Learning",
    repoPath: "/tree/main/Transformers_Large-Language-Models",
    repoLabel: "Source repository",
    cv: { label: "CV · Projects § Transformers & LLMs", anchor: "#work" },
  },
  {
    claim:
      "Indian ANPR · plate recognition with pytesseract, MySQL registration checks, Twilio SMS alerts for invalid registrations.",
    section: "Work",
    repo: "somilsin/Computer-Vision",
    repoPath: "/tree/main/Indian-ANPR",
    repoLabel: "Source repository",
    cv: { label: "CV · Projects § Indian ANPR", anchor: "#work" },
  },
  {
    claim:
      "Customised SSD + FPN for autonomous driving · 55 to 75% mAP on the WIRIN dataset (Wipro PARI).",
    evidenceNote: "Professional experience as described on my LinkedIn profile. The organisation link provides context.",
    section: "Experience",
    repo: "somilsin/Computer-Vision",
    repoPath: "/tree/main/Object-Detection-using-SSD",
    repoLabel: "Source repository",
    cv: { label: "CV · Experience § Wipro PARI", anchor: "#experience" },
  },
  {
    claim: "Continuous self directed ML practice and academic explorations.",
    section: "Stack",
    repo: "somilsin/Learning-Archive",
    repoLabel: "Source repository",
    cv: { label: "CV · Skills § Machine Learning", anchor: "#stack" },
  },
  {
    claim: "B.E. Computer Science & Engineering, RVCE (Dec 2020 · Jun 2024).",
    section: "Credentials",
    external: { label: "rvce.edu.in", href: "https://www.rvce.edu.in/" },
    cv: { label: "CV · Education § RVCE", anchor: "#credentials" },
  },
];

const TAG_RULES: Array<[string, RegExp]> = [
  [
    "computer vision",
    /nerf|gaussian|detection|tracking|yolo|opencv|anpr|ssd|plenoptic|joint-position/i,
  ],
  ["llm", /llm|rag|transformer|agent|attention|token/i],
  ["research", /nerf|gaussian|publish|doi|ijisrt|iisc/i],
  ["production", /oracle|savings|week|latency|retrieval|sdlc/i],
  ["award", /winner|hackathon/i],
  ["education", /b\.e\.|rvce|education/i],
  ["github", /repo/i],
];

/** Derives filter tags for a claim from its section, evidence and wording. */
export function tagsFor(s: SourceRef): string[] {
  const hay = `${s.claim} ${s.section} ${s.repo ?? ""} ${s.external?.label ?? ""} ${s.cv.label}`;
  const tags = new Set<string>([s.section.toLowerCase()]);
  for (const [tag, re] of TAG_RULES) if (re.test(hay)) tags.add(tag);
  if (s.repo) tags.add("github");
  if (s.external?.href.includes("doi.org")) tags.add("doi");
  return [...tags];
}

export const ALL_TAGS = [...new Set(SOURCES.flatMap(tagsFor))].sort();

export function evidenceUrl(s: SourceRef): string | null {
  if (s.repo) return `https://github.com/${s.repo}${s.repoPath ?? ""}`;
  return s.external?.href ?? null;
}

export type ExportRow = {
  section: string;
  claim: string;
  evidence_type: string;
  evidence_label: string;
  evidence_url: string;
  evidence_note: string;
  cv_section: string;
  cv_anchor: string;
  tags: string;
};

export function buildExportRows(origin = ""): ExportRow[] {
  return SOURCES.map((s) => ({
    section: s.section,
    claim: s.claim,
    evidence_type: s.repo
      ? "github"
      : s.external?.href.includes("doi.org")
        ? "doi"
        : s.external
          ? "web"
          : "cv-only",
    evidence_label: s.repoLabel ?? s.external?.label ?? "CV only",
    evidence_url: evidenceUrl(s) ?? "",
    evidence_note: s.evidenceNote ?? "Public project or publication reference",
    cv_section: s.cv.label,
    cv_anchor: `${origin}${s.cv.anchor}`.replace(/([^:])\/\/+/g, "$1/"),
    tags: tagsFor(s).join("|"),
  }));
}

export function rowsToCsv(rows: ExportRow[]): string {
  const headers = Object.keys(rows[0] ?? {}) as Array<keyof ExportRow>;
  const esc = (v: string) => `"${String(v).replace(/"/g, '""')}"`;
  return [headers.join(","), ...rows.map((r) => headers.map((h) => esc(r[h])).join(","))].join(
    "\n",
  );
}

export type RepoFacts = {
  full_name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  pushed_at: string;
};

/** Fetches the latest public facts for the repos referenced above. */
export async function fetchRepoFacts(signal?: AbortSignal): Promise<Record<string, RepoFacts>> {
  const res = await fetch(
    `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=pushed`,
    {
      headers: { Accept: "application/vnd.github+json" },
      signal,
    },
  );
  if (!res.ok) {
    const hint =
      res.status === 403 || res.status === 429
        ? "GitHub rate limit reached · wait a minute and retry."
        : res.status === 404
          ? "GitHub user not found."
          : "GitHub is unreachable right now.";
    throw new Error(`${res.status} · ${hint}`);
  }
  const list = (await res.json()) as RepoFacts[];
  const map: Record<string, RepoFacts> = {};
  for (const r of list) map[r.full_name.toLowerCase()] = r;
  return map;
}
