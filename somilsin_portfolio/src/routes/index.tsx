import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import ParticleHead from "@/components/fx/ParticleHead";
import SourcesPanel from "@/components/SourcesPanel";
import InsideAIShowcase from "@/components/InsideAIShowcase";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Somil Singh · AI & Computer Vision Engineer" },
      {
        name: "description",
        content:
          "AI and Computer Vision Engineer, Inside AI founder and machine learning researcher at Strand Life Sciences. Visual study notes, code and published computer vision research.",
      },
      { property: "og:title", content: "Somil Singh · AI & Computer Vision Engineer" },
      {
        property: "og:description",
        content:
          "AI engineering at Oracle, cancer detection research at Strand Life Sciences and earlier 3D perception research at IISc. Founder of Inside AI and coauthor of computer vision research in IJISRT.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const NAV = [
  { id: "inside-ai", label: "Inside AI" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "stack", label: "Stack" },
  { id: "credentials", label: "Credentials" },
  { id: "sources", label: "Sources" },
  { id: "contact", label: "Contact" },
];

const METRICS = [
  {
    "value": "04",
    "label": "published Inside AI model articles"
  },
  {
    "value": "04",
    "label": "GitHub categories for AI, ML, vision and learning"
  },
  {
    "value": "01",
    "label": "coauthored computer vision paper in IJISRT"
  },
  {
    "value": "08 min",
    "label": "completed VAE video explainer"
  }
];

const EXPERIENCE = [
  {
    "role": "Founder and Creator",
    "name": "Inside AI",
    "tag": "October 2026 to present",
    "points": [
      "Building Inside AI, a public AI learning initiative with an open source focus. I share research notes, diagrams and code across AI, machine learning, deep learning, computer vision and robotics.",
      "Published the first four Deep Learning Models articles on VAE and VQ VAE. I also curate sourced world AI updates and develop educational videos. Learning in public, because sharing is caring."
    ],
    "link": {
      "label": "View my LinkedIn experience ↗",
      "href": "https://www.linkedin.com/in/somil-singh/details/experience/"
    }
  },
  {
    "role": "Machine Learning Researcher",
    "name": "Strand Life Sciences",
    "tag": "September 2026 to present · Part time",
    "points": [
      "Research deep learning methods and build predictive pipelines for early cancer detection using clinical blood data, with a focus on limited samples and data bias.",
      "Developed a variational autoencoder (VAE) to debias tabular cancer data, outperforming the previous model for early detection across 10 cancer types."
    ],
    "link": {
      "label": "View my research experience ↗",
      "href": "https://www.linkedin.com/in/somil-singh/details/experience/"
    }
  },
  {
    "role": "Full Stack AI Engineer",
    "name": "Oracle · Primavera Cloud",
    "tag": "August 2025 to present",
    "points": [
      "Specialise in agentic AI and LLM orchestration, leading adoption of agentic tools across Oracle Primavera Cloud.",
      "Engineered compositional SQL mapping for Text to SQL RAG agents, consolidating complex routing into a relational table and accelerating fetch queries by 75%.",
      "Automated code generation, test verification and GitLab and SmartBear reviews through Cline, Kilo Code and Codex, with $1.1M in projected savings.",
      "Built a multi agent LLM ecosystem across MCP, PL/SQL, Jira and the codebase to triage 150 to 200 bugs per week. Reduced resolution time from 45 minutes to 2 minutes and saved more than 120 engineering hours monthly.",
      "Built RAG pipelines processing more than 500 RFP documents daily over a knowledge base of more than 100,000 vectors using LangChain and Oracle Vector 23ai. Achieved retrieval latency under 1.5 seconds and improved throughput by 35%.",
      "Led a proof of concept for an agentic low code framework through Oracle Integration Cloud and coordinated team upskilling with organisation directors."
    ],
    "link": {
      "label": "View my LinkedIn experience ↗",
      "href": "https://www.linkedin.com/in/somil-singh/details/experience/"
    }
  },
  {
    "role": "Associate Software Engineer",
    "name": "Oracle · Primavera Cloud",
    "tag": "July 2024 to July 2025",
    "points": [
      "Owned design and development of more than 30 React frontend features with Java and Spring backends, improving workflow responsiveness by 28%.",
      "Learned the React and Redux ecosystem within 72 hours to deliver a schedule interface for stakeholders and was selected for the organisation wide AI and SDLC overhaul.",
      "Resolved more than 25 priority performance and architecture issues and delivered more than 2,500 lines of production code with CI/CD ownership.",
      "Owned the Code Smells epic to reduce automation debt and maintained a zero defect record after fixes across AI augmented deployments."
    ],
    "link": {
      "label": "View my LinkedIn experience ↗",
      "href": "https://www.linkedin.com/in/somil-singh/details/experience/"
    }
  },
  {
    "role": "Project Intern",
    "name": "Oracle",
    "tag": "January 2024 to June 2024 · Internship",
    "points": [
      "Developed experience in Java and full stack software development before moving into a core engineering role at Oracle."
    ],
    "link": {
      "label": "View my LinkedIn experience ↗",
      "href": "https://www.linkedin.com/in/somil-singh/details/experience/"
    }
  },
  {
    "role": "Founder",
    "name": "Stealth AI Startup",
    "tag": "July 2026 to September 2026 · Paused",
    "points": [
      "Explored an early AI startup idea. The initiative is paused while I focus on research and learn from startup founders."
    ],
    "link": {
      "label": "View my LinkedIn experience ↗",
      "href": "https://www.linkedin.com/in/somil-singh/details/experience/"
    }
  },
  {
    "role": "Founder",
    "name": "BehaviorAI (v1)",
    "tag": "June 2026 · Part time",
    "points": [
      "Built a working AI product for an enterprise behaviour change challenge covering 10,000 employees in a two hour sprint using Claude.",
      "Selected as one of five Star Builders from more than 1,000 applicants at the Softway LoveXAI Hackathon.",
      "Presented the product design, ethics and commercial case to Softway leadership, securing possible corporate interest in an enterprise rollout."
    ],
    "link": {
      "label": "View my LinkedIn experience ↗",
      "href": "https://www.linkedin.com/in/somil-singh/details/experience/"
    }
  },
  {
    "role": "AI Research Assistant",
    "name": "Indian Institute of Science (IISc) Bangalore",
    "tag": "July 2023 to December 2023 · Internship",
    "points": [
      "Researched Neural Radiance Fields and plenoptic functions for 7D scene representations and human pose estimation. Improved reconstruction fidelity by 25% on benchmarks across Blender, LLFF and DTU.",
      "Integrated SfM and SLAM camera calibration with differentiable ray tracing for 3D scene reconstruction, maintaining real time inference at 12 fps.",
      "Used Gaussian splatting, supersampling and custom BVH acceleration structures to reduce mean joint position error by 18% on out of distribution datasets.",
      "Built a volumetric rendering and lightfield modelling pipeline in PyTorch on Ubuntu spanning more than 1,000 lines of code."
    ],
    "link": {
      "label": "View my LinkedIn experience ↗",
      "href": "https://www.linkedin.com/in/somil-singh/details/experience/"
    }
  },
  {
    "role": "Computer Vision Research Intern",
    "name": "Samsung R&D Institute India",
    "tag": "May 2023 to October 2023 · Internship",
    "points": [
      "Led a team of four to build a deep neural network pipeline for video frame interpolation and smoother slow motion playback.",
      "Benchmarked on Vimeo90K, improving PSNR and SSIM over DAIN and SepConv by 8.5% with CUDA optimised inference.",
      "Coordinated task delegation and communication with the company as the student team representative."
    ],
    "link": {
      "label": "View my LinkedIn experience ↗",
      "href": "https://www.linkedin.com/in/somil-singh/details/experience/"
    }
  },
  {
    "role": "Data Science Intern",
    "name": "Solar Secure Solutions",
    "tag": "January 2023 to March 2023 · Internship",
    "points": [
      "Built regression and classification models in Python, improving predictive accuracy by 20% and reducing manual preprocessing effort by 30%.",
      "Developed data cleaning, feature engineering and visualisation pipelines with Pandas, NumPy, scikit learn and Matplotlib."
    ],
    "link": {
      "label": "View my LinkedIn experience ↗",
      "href": "https://www.linkedin.com/in/somil-singh/details/experience/"
    }
  },
  {
    "role": "AI Research Intern",
    "name": "Wipro PARI",
    "tag": "November 2022 to March 2023 · Internship",
    "points": [
      "Trained a customised Single Shot Detector on the WIRIN dataset for autonomous driving, achieving 55 to 75% mAP on real world traffic data.",
      "Integrated Feature Pyramid Networks for multi scale feature fusion to improve detection of small and overlapping objects in dense traffic frames."
    ],
    "link": {
      "label": "View my LinkedIn experience ↗",
      "href": "https://www.linkedin.com/in/somil-singh/details/experience/"
    }
  }
];

type WorkItem = {
  n: string;
  title: string;
  meta: string;
  body: string;
  href: string;
  hrefLabel: string;
  secondary?: { href: string; label: string };
};

const WORK: WorkItem[] = [
  {
    "n": "01",
    "title": "Object Detection, Classification & Tracking of Everyday Common Objects",
    "meta": "Published · IJISRT Vol. 8 Issue 8, Aug 2023",
    "body": "Coauthored a paper on YOLOv4 object detection and video processing with TensorFlow and OpenCV. The implementation includes class filtering, object counting and periodic cropping. The paper reports variable detection performance and identifies occlusion handling as a limitation.",
    "href": "https://doi.org/10.5281/zenodo.8330641",
    "hrefLabel": "doi.org/10.5281/zenodo.8330641 ↗",
    "secondary": {
      "href": "https://github.com/somilsin/Computer-Vision/tree/main/Object-Tracking-with-Boundary-edge-detection-using-yolov4",
      "label": "Explore the YOLOv4 project on GitHub ↗"
    }
  },
  {
    "n": "02",
    "title": "Deep Learning and Computer Vision Experiments",
    "meta": "Course adaptations and original experiments · Python and TensorFlow",
    "body": "I adapted MIT Introduction to Deep Learning exercises to study digit classification and face classification with adaptive sampling. My recorded runs include 97.38% test accuracy for digit classification and 99.76% accuracy on sampled training data in a separate CNN run. I also maintain a NumPy and SciPy neural network engine with explicit gradients and finite difference checks. I retain the course credit and distinguish training measurements from independent evaluation.",
    "href": "https://github.com/somilsin/Machine-Learning/tree/main/Deep-Learning_Computer-Vision",
    "hrefLabel": "Explore deep learning and vision on GitHub ↗"
  },
  {
    "n": "03",
    "title": "Transformers and Large Language Models Experiments",
    "meta": "Sequence modelling · LSTM and LoRA experiments",
    "body": "I explore character level music generation with an RNN/LSTM and language model adaptation with LoRA. The latest READMEs include generated text and audio, execution notes and clearly labelled reduced runs, including a 600 step music experiment and a 20 step LFM2 350M adaptation.",
    "href": "https://github.com/somilsin/Machine-Learning/tree/main/Transformers_Large-Language-Models",
    "hrefLabel": "Explore transformers and language models on GitHub ↗"
  },
  {
    "n": "04",
    "title": "BehaviorAI",
    "meta": "Top 5 winner · Softway LoveXAI Hackathon 2026",
    "body": "I built BehaviorAI at the Softway LoveXAI Hackathon and was selected as one of five winners. An Evidence Analyst and a Coaching Design Strategist use employee evidence to produce a behaviour change plan. I built the interface with HTML, CSS and JavaScript and connected the two agents to the Claude API. The project includes example evidence and a live browser demo.",
    "href": "https://github.com/somilsin/Artificial-Intelligence/tree/main/behaviorai-lovexai",
    "hrefLabel": "Explore BehaviorAI on GitHub ↗",
    "secondary": {
      "href": "https://somilsin.github.io/Artificial-Intelligence/behaviorai-lovexai/",
      "label": "Explore the live demo ↗"
    }
  },
  {
    "n": "05",
    "title": "Indian ANPR",
    "meta": "OCR · MySQL · Twilio",
    "body": "Automatic number plate recognition for Indian vehicles · plate extraction with pytesseract, owner, model and registration validity checks against a MySQL database and Twilio SMS alerts for expired or invalid registrations.",
    "href": "https://github.com/somilsin/Computer-Vision/tree/main/Indian-ANPR",
    "hrefLabel": "Explore Indian ANPR on GitHub ↗"
  },
  {
    "n": "06",
    "title": "Object Detection using SSD",
    "meta": "COCO class labels · Image inference notebook",
    "body": "An image inference notebook for exploring Single Shot Detector object detection, with example images, model configuration and a TensorFlow graph conversion helper. This is part of my computer vision learning and autonomous driving research background.",
    "href": "https://github.com/somilsin/Computer-Vision/tree/main/Object-Detection-using-SSD",
    "hrefLabel": "Explore SSD on GitHub ↗"
  },
  {
    "n": "07",
    "title": "Learning Archive",
    "meta": "Jupyter · self directed",
    "body": "A curated archive of practice projects and academic explorations · continuous experimentation across programming and computer science.",
    "href": "https://github.com/somilsin/Learning-Archive",
    "hrefLabel": "Explore the learning archive on GitHub ↗"
  },
  {
    "n": "08",
    "title": "Inside AI",
    "meta": "Public AI learning and research · October 2026",
    "body": "My public learning initiative. Published Parts 01 to 04 explain VAE and VQ VAE through colourful diagrams, maths, runnable code and recorded outputs. Sourced world AI updates and a completed eight minute VAE explainer extend the written notes.",
    "href": "https://somilsin.github.io/Artificial-Intelligence/Inside-AI/",
    "hrefLabel": "Visit Inside AI ↗",
    "secondary": {
      "href": "https://www.linkedin.com/newsletters/7511777490416250880/",
      "label": "Inside AI newsletter ↗"
    }
  },
  {
    "n": "09",
    "title": "TensorTonic Machine Learning Solutions",
    "meta": "May 2026 to present · Probability and linear algebra",
    "body": "I practise core machine learning mathematics through small Python implementations of dot products, cosine similarity, matrix transpose, expected value, Bernoulli probability and sample statistics. I keep each problem statement beside its implementation with source credit.",
    "href": "https://github.com/somilsin/Machine-Learning/tree/main/TensorTonic-Solutions",
    "hrefLabel": "Explore TensorTonic solutions on GitHub ↗"
  },
  {
    "n": "10",
    "title": "Cybersecurity Reconnaissance Tools",
    "meta": "May 2023 to August 2023 · Networking and security practice",
    "body": "I explored remote operating system discovery and open port detection through a Python reconnaissance toolkit with a SQLite port mapping database. I keep it in my Learning Archive as a record of my networking and security practice.",
    "href": "https://github.com/somilsin/Learning-Archive/tree/main/Cybersecurity-Reconnaissance-Tools",
    "hrefLabel": "Explore reconnaissance tools on GitHub ↗"
  },
  {
    "n": "11",
    "title": "Ivy | Framework Codebase Study",
    "meta": "January 2021 to December 2021 · Codebase study",
    "body": "I studied the Ivy codebase to understand framework interoperability and API design. This is a study of an existing open source project and I retain the original attribution and licence.",
    "href": "https://github.com/somilsin/Learning-Archive/tree/main/ivy",
    "hrefLabel": "Explore the Ivy codebase study on GitHub ↗"
  }
];

const STACK = [
  {
    "n": "01",
    "title": "3D Perception & Robotics",
    "body": "Neural Radiance Fields, Gaussian splatting, SLAM/SfM, camera calibration, differentiable ray tracing, volumetric rendering, BVH acceleration."
  },
  {
    "n": "02",
    "title": "Vision & Multimodal Models",
    "body": "CNNs, Vision Transformers (ViT), Vision Language Models, Vision Language Action models, diffusion models, world models (JEPA)."
  },
  {
    "n": "03",
    "title": "Agent & LLM Infrastructure",
    "body": "Multi agent orchestration over MCP, agent evals and harnesses, fine tuning, pre/post training, RAG, LangChain, LlamaIndex, Vector 23ai."
  },
  {
    "n": "04",
    "title": "Systems & AIOps",
    "body": "Python, Java, JavaScript, C, MATLAB · PyTorch, TensorFlow, HuggingFace, CUDA · Spring, Hibernate, Docker, Redis, CI/CD, quantisation and inference optimisation."
  }
];

const CREDENTIALS = [
  {
    "title": "Bachelor of Engineering, Computer Science",
    "meta": "RV College of Engineering · First Class with Distinction · Scholaro GPA 3.74/4.0"
  },
  {
    "title": "High School Diploma · 96.8%",
    "meta": "National Public School, Indiranagar · CBSE 10th boards"
  },
  {
    "title": "National Talent Search Examination (NTSE) Scholar | Top 800 All India Rank",
    "meta": "National Talent Search Examination"
  },
  {
    "title": "Winner · Softway LoveXAI Hackathon 2026",
    "meta": "Solo entry · BehaviorAI"
  },
  {
    "title": "Published author · IJISRT 2023",
    "meta": "Object Detection, Classification and Tracking of Everyday Common Objects"
  },
  {
    "title": "Best All Rounder Student Award (2015, 2016)",
    "meta": "Campion School, Mumbai · 2015 and 2016"
  },
  {
    "title": "FIDE Rated Chess Player | 8th Place, Maharashtra State Championship",
    "meta": "Maharashtra State Championship · More than 25 chess accolades"
  },
  {
    "title": "MaRRS Spelling Bee | State Level Finalist",
    "meta": "Qualified for the final round"
  },
  {
    "title": "District Level Badminton | 4th Place, Mumbai DSO Competition",
    "meta": "Mumbai DSO competition · Campion School"
  },
  {
    "title": "Sports and Co Curricular Distinctions",
    "meta": "State level football and basketball · District level cricket, tennis and athletics"
  },
  {
    "title": "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    "meta": "Oracle · Issued April 2025"
  },
  {
    "title": "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
    "meta": "Oracle · Issued March 2025 · Expires March 2027"
  },
  {
    "title": "GRE · 335/340",
    "meta": "December 2025 · Quantitative 166 · Verbal 169"
  },
  {
    "title": "TOEFL iBT · 116/120",
    "meta": "August 2025 · C2 level proficiency"
  },
  {
    "title": "Team Antariksh · Core Electronics Engineer",
    "meta": "March 2022 to November 2022 · RVSAT1 payload circuitry"
  },
  {
    "title": "National Service Scheme · Design Team Member",
    "meta": "November 2022 to June 2024 · Innovation with a purpose"
  }
];

function useActiveSection() {
  const [active, setActive] = useState<string>("top");
  useEffect(() => {
    const ids = ["top", ...NAV.map((n) => n.id)];
    const onScroll = () => {
      const y = window.scrollY + window.innerHeight * 0.35;
      let current = "top";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return active;
}

function useReveal() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    if (reduce) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    // Auto-stagger reveals grouped by their nearest <section>, so each act
    // plays its heading → paragraph → cards in the same smooth cadence.
    const groups = new Map<Element, HTMLElement[]>();
    els.forEach((el) => {
      const key = el.closest("section, header, footer") ?? document.body;
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key)!.push(el);
    });
    groups.forEach((list) => {
      list.forEach((el, i) => {
        if (el.dataset.revealDelay === undefined) {
          el.dataset.revealDelay = String(i * 110);
        }
      });
    });
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const el = e.target as HTMLElement;
            const delay = Number(el.dataset.revealDelay || 0);
            window.setTimeout(() => el.classList.add("is-visible"), delay);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -6% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Index() {
  const active = useActiveSection();
  useReveal();

  return (
    <div id="top" className="page-in relative min-h-screen text-[color:var(--color-foreground)]">
      {/* Top nav */}
      <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-6 md:px-12">
          <a href="#top" className="flex flex-col leading-none">
            <span className="serif-display text-2xl tracking-[0.35em]">SOMIL</span>
            <span className="mt-1 eyebrow text-[color:var(--color-primary)]">
              AI · COMPUTER VISION · ROBOTICS
            </span>
          </a>
          <nav className="hidden gap-6 md:flex">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className={`eyebrow transition-colors ${
                  active === n.id
                    ? "text-[color:var(--color-primary)]"
                    : "text-[color:var(--color-foreground)]/70 hover:text-[color:var(--color-foreground)]"
                }`}
              >
                {n.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Right side scroll dots */}
      <nav
        className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-4 md:flex"
        aria-label="Section progress"
      >
        {["top", ...NAV.map((n) => n.id)].map((id) => (
          <a
            key={id}
            href={`#${id}`}
            aria-label={id}
            className={`h-2 w-2 rounded-full border transition-all ${
              active === id
                ? "border-[color:var(--color-primary)] bg-[color:var(--color-primary)] scale-125"
                : "border-[color:var(--color-foreground)]/40 bg-transparent hover:border-[color:var(--color-foreground)]"
            }`}
          />
        ))}
      </nav>

      {/* HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden pt-32">
        {/* Particle portrait · full-viewport-bleed. Particles fly across the
            entire width and pass behind the left-anchored text column. */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <ParticleHead />
        </div>

        <div className="relative z-10 grid w-full grid-cols-1 gap-16 px-6 md:grid-cols-12 md:px-12">
          <div className="md:col-span-6 lg:col-span-5 xl:col-span-4">
            <p className="reveal serif-italic-accent text-lg md:text-xl">
              Founder of Inside AI · Cloud and AI at Oracle.
            </p>
            <h1
              className="reveal serif-display mt-8 text-[3.25rem] leading-[0.98] tracking-[-0.015em] md:mt-10 md:text-[5.5rem] lg:text-[6.25rem]"
              data-reveal-delay="80"
            >
              Somil <em>Singh</em>.
            </h1>
            <div
              className="reveal prose-editorial mt-10 max-w-[26rem] border-l border-[color:var(--color-border)] pl-6"
              data-reveal-delay="160"
            >
              I love exploring AI and the universe and using what I learn to solve complex problems.
              That curiosity has taken me from AI engineering at Oracle to NeRF research at IISc
              and early cancer detection at Strand Life Sciences. I am also the founder of Inside AI,
              where I share visual study notes, code and what I learn along the way.
            </div>

            <div className="reveal mt-10 flex flex-col gap-3" data-reveal-delay="240">
              <a
                href="mailto:thesomilsinghofficial@gmail.com"
                className="inline-flex w-full items-center justify-center rounded-sm bg-[color:var(--color-primary)] px-6 py-4 eyebrow text-[color:var(--color-primary-foreground)] transition-all hover:opacity-90 sm:w-[360px]"
              >
                Get in touch
              </a>
              <a
                href="#work"
                className="inline-flex w-full items-center justify-center rounded-sm border border-[color:var(--color-foreground)]/40 px-6 py-4 eyebrow text-[color:var(--color-foreground)] transition-all hover:border-[color:var(--color-primary)] hover:text-[color:var(--color-primary)] sm:w-[360px]"
              >
                See the work
              </a>
            </div>

            <div className="reveal mt-10 flex items-center gap-8" data-reveal-delay="320">
              <a
                href="https://www.linkedin.com/in/somil-singh/"
                target="_blank"
                rel="noreferrer"
                className="eyebrow border-b border-[color:var(--color-foreground)]/40 pb-1 transition-colors hover:border-[color:var(--color-primary)] hover:text-[color:var(--color-primary)]"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/somilsin"
                target="_blank"
                rel="noreferrer"
                className="eyebrow border-b border-[color:var(--color-foreground)]/40 pb-1 transition-colors hover:border-[color:var(--color-primary)] hover:text-[color:var(--color-primary)]"
              >
                GitHub
              </a>
              <a
                href="mailto:thesomilsinghofficial@gmail.com"
                className="eyebrow border-b border-[color:var(--color-foreground)]/40 pb-1 transition-colors hover:border-[color:var(--color-primary)] hover:text-[color:var(--color-primary)]"
              >
                Email
              </a>
            </div>

            <p
              className="reveal mt-10 text-sm text-[color:var(--color-foreground)]/60"
              data-reveal-delay="400"
            >
              Bengaluru, India · +91 991 690 6693
            </p>
          </div>
          <div className="hidden md:col-span-6 md:block lg:col-span-7 xl:col-span-8" />
        </div>

        <div className="pointer-events-none absolute bottom-8 right-16 hidden items-center gap-4 md:flex">
          <span className="h-px w-16 bg-[color:var(--color-foreground)]/40" />
          <span className="eyebrow text-[color:var(--color-foreground)]/60">Scroll</span>
        </div>
      </section>

      <InsideAIShowcase />

      {/* METRICS */}
      <section className="relative px-6 pt-24 md:px-12">
        <div className="mx-auto grid max-w-[1400px] gap-8 border-t border-[color:var(--color-border)] pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {METRICS.map((m, i) => (
            <div key={m.value} className="reveal" data-reveal-delay={i * 90}>
              <p className="serif-display text-4xl text-[color:var(--color-primary)] md:text-5xl">
                {m.value}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[color:var(--color-foreground)]/70">
                {m.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <SectionDivider numeral="I" kicker="Where the work happens" index="01" />

      {/* EXPERIENCE */}
      <section id="experience" className="relative px-6 py-24 md:px-12">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="reveal serif-display max-w-4xl text-4xl leading-[1.02] md:text-6xl lg:text-7xl">
            Research, engineering and <em className="text-[color:var(--color-primary)]">learning</em>{" "}
            in public.
          </h2>
          <p className="reveal prose-editorial mt-6 max-w-xl" data-reveal-delay="100">
            My work spans AI infrastructure at Oracle, early cancer detection at Strand and earlier
            research in 3D perception at IISc. Inside AI is where I turn that curiosity into shared learning.
          </p>

          <div className="mt-16 space-y-14">
            {EXPERIENCE.map((c) => (
              <article
                key={c.name}
                className="reveal grid gap-8 border-t border-[color:var(--color-border)] pt-10 md:grid-cols-12"
              >
                <div className="md:col-span-3">
                  <p className="eyebrow text-[color:var(--color-foreground)]/60">{c.role}</p>
                  <p className="eyebrow mt-3 text-[color:var(--color-primary)]">{c.tag}</p>
                </div>
                <div className="md:col-span-9">
                  <h3 className="serif-display text-3xl md:text-4xl">{c.name}</h3>
                  <ul className="mt-5 max-w-3xl space-y-3">
                    {c.points.map((p) => (
                      <li
                        key={p}
                        className="flex gap-3 border-l border-[color:var(--color-border)] pl-5 text-[15px] leading-relaxed text-[color:var(--color-foreground)]/80"
                      >
                        <span aria-hidden="true" className="text-[color:var(--color-primary)]">→</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={c.link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-block eyebrow text-[color:var(--color-primary)] transition-opacity hover:opacity-70"
                  >
                    {c.link.label}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider numeral="II" kicker="Shipped and published" index="02" />

      {/* WORK */}
      <section id="work" className="relative px-6 py-24 md:px-12">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="reveal serif-display max-w-4xl text-4xl leading-[1.02] md:text-6xl lg:text-7xl">
            The <em className="text-[color:var(--color-primary)]">work</em> itself.
          </h2>
          <p className="reveal prose-editorial mt-6 max-w-xl" data-reveal-delay="100">
            One coauthored publication and four organised GitHub categories. Explore the code,
            study notes and recorded experiments behind the work.
          </p>

          <div className="mt-16 space-y-0">
            {WORK.map((p) => (
              <article
                key={p.n}
                className="reveal grid gap-8 border-t border-[color:var(--color-border)] py-10 md:grid-cols-12"
              >
                <div className="md:col-span-2">
                  <span className="serif-display text-5xl text-[color:var(--color-primary)]">
                    {p.n}
                  </span>
                </div>
                <div className="md:col-span-7">
                  <h3 className="serif-display text-2xl md:text-3xl">{p.title}</h3>
                  <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-[color:var(--color-foreground)]/80">
                    {p.body}
                  </p>
                </div>
                <div className="md:col-span-3">
                  <p className="eyebrow text-[color:var(--color-foreground)]/60">{p.meta}</p>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-block break-all eyebrow text-[color:var(--color-primary)] transition-opacity hover:opacity-70"
                  >
                    {p.hrefLabel}
                  </a>
                  {p.secondary && (
                    <a
                      href={p.secondary.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 block break-all eyebrow text-[color:var(--color-primary)] transition-opacity hover:opacity-70"
                    >
                      {p.secondary.label}
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider numeral="III" kicker="What I build with" index="03" />

      {/* STACK */}
      <section id="stack" className="relative px-6 py-24 md:px-12">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="reveal serif-display max-w-4xl text-4xl leading-[1.02] md:text-6xl lg:text-7xl">
            The <em className="text-[color:var(--color-primary)]">stack</em>.
          </h2>

          <div className="mt-16 grid gap-10 md:grid-cols-2">
            {STACK.map((p, i) => (
              <div
                key={p.n}
                className="reveal border-t border-[color:var(--color-border)] pt-8"
                data-reveal-delay={i * 80}
              >
                <span className="serif-display text-5xl text-[color:var(--color-primary)]">
                  {p.n}
                </span>
                <h3 className="serif-display mt-6 text-2xl">{p.title}</h3>
                <p className="prose-editorial mt-4">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider numeral="IV" kicker="Education & recognition" index="04" />

      {/* CREDENTIALS */}
      <section id="credentials" className="relative px-6 py-24 md:px-12">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="reveal serif-display max-w-4xl text-4xl leading-[1.02] md:text-6xl lg:text-7xl">
            On <em className="text-[color:var(--color-primary)]">record</em>.
          </h2>

          <div className="mt-16 divide-y divide-[color:var(--color-border)]">
            {CREDENTIALS.map((c) => (
              <div
                key={c.title}
                className="reveal flex flex-wrap items-baseline justify-between gap-4 py-7"
              >
                <h3 className="serif-display text-2xl md:text-3xl">{c.title}</h3>
                <p className="eyebrow text-[color:var(--color-foreground)]/60">{c.meta}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider numeral="V" kicker="Receipts" index="05" />

      {/* SOURCES */}
      <section id="sources" className="relative px-6 py-24 md:px-12">
        <SourcesPanel />
      </section>

      <SectionDivider numeral="VI" kicker="Let's talk" index="06" />

      {/* CONTACT */}
      <section id="contact" className="relative px-6 py-32 md:px-12">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="reveal serif-display max-w-4xl text-4xl leading-[1.02] md:text-6xl lg:text-7xl">
            Open to <em className="text-[color:var(--color-primary)]">computer vision, robotics</em>{" "}
            and AI engineering roles.
          </h2>
          <p className="reveal prose-editorial mt-6 max-w-xl" data-reveal-delay="100">
            Interested in visual intelligence, robotics and AI infrastructure? I am also open to
            educational collaborations through Inside AI. Send me a note.
          </p>

          <div className="reveal mt-12 flex flex-col gap-3 sm:max-w-md" data-reveal-delay="200">
            <a
              href="mailto:thesomilsinghofficial@gmail.com"
              className="inline-flex items-center justify-center rounded-sm bg-[color:var(--color-primary)] px-6 py-4 eyebrow text-[color:var(--color-primary-foreground)] transition-opacity hover:opacity-90"
            >
              Email · thesomilsinghofficial@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/somil-singh/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-sm border border-[color:var(--color-foreground)]/40 px-6 py-4 eyebrow transition-all hover:border-[color:var(--color-primary)] hover:text-[color:var(--color-primary)]"
            >
              Message on LinkedIn
            </a>
            <a
              href="https://github.com/somilsin"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-sm border border-[color:var(--color-foreground)]/40 px-6 py-4 eyebrow transition-all hover:border-[color:var(--color-primary)] hover:text-[color:var(--color-primary)]"
            >
              github.com/somilsin
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-[color:var(--color-border)] px-6 py-10 md:px-12">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-4">
          <p className="eyebrow text-[color:var(--color-foreground)]/60">
            SOMIL SINGH · {new Date().getFullYear()}
          </p>
          <p className="eyebrow text-[color:var(--color-foreground)]/60">
            AI &amp; Computer Vision Engineer
          </p>
        </div>
      </footer>
    </div>
  );
}

function SectionDivider({
  numeral,
  kicker,
  index,
}: {
  numeral: string;
  kicker: string;
  index: string;
}) {
  return (
    <div className="px-6 pt-24 md:px-12">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between border-t border-[color:var(--color-border)] pt-6">
        <p className="serif-display italic text-lg text-[color:var(--color-foreground)]/60">
          {numeral}
        </p>
        <p className="eyebrow text-[color:var(--color-foreground)]/60">
          <span className="serif-display text-base not-italic tracking-normal text-[color:var(--color-foreground)]">
            SOMIL
          </span>{" "}
          <span className="mx-3">{kicker}</span>
          <span className="text-[color:var(--color-primary)]">✶ {index}</span>
        </p>
      </div>
    </div>
  );
}
