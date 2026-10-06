export type Chapter = {
  slug: string;
  numeral: string;
  title: string;
  subtitle: string;
  status: string;
  blurb: string;
  entries: { title: string; meta: string; body: string }[];
};

export const chapters: Chapter[] = [
  {
    "slug": "experience",
    "numeral": "I",
    "title": "Experience",
    "subtitle": "Chapter I",
    "status": "LIVE · 6 ROLES",
    "blurb": "AI engineering at Oracle, 3D perception research at IISc VAL, machine learning research at Strand Life Sciences and public learning through Inside AI.",
    "entries": [
      {
        "title": "Inside AI · Founder",
        "meta": "October 2026 to present",
        "body": "I share what I am learning in AI, machine learning, deep learning, computer vision and robotics through visual study notes, diagrams and runnable code. Published the first four Deep Learning Models articles on VAE and VQ VAE. I also curate sourced world AI updates and develop educational videos."
      },
      {
        "title": "Strand Life Sciences · Machine Learning Researcher",
        "meta": "September 2026 to present · Part time",
        "body": "Research deep learning methods and build predictive pipelines for early cancer detection using clinical blood data, with a focus on limited samples and data bias. Developed a variational autoencoder to debias tabular cancer data, outperforming the previous model for early detection across 10 cancer types."
      },
      {
        "title": "IISc Bangalore — Visual AI & Learning Lab (VAL) · Computer Vision Research Assistant",
        "meta": "Sep 2026 — Present · Jul 2023 — Dec 2023",
        "body": "Neural Radiance Fields with plenoptic functions modelling 7D scene representations for human pose estimation — +25% reconstruction fidelity, validated on Blender, LLFF and DTU. SfM/SLAM camera calibration for 3D reconstruction with differentiable ray tracing at 12 fps real time inference; volumetric rendering and lightfield pipelines (1000+ LoC, PyTorch/Ubuntu). Reduced mean joint position error 18% on out of distribution data using Gaussian splatting, supersampling and custom BVH acceleration structures."
      },
      {
        "title": "Oracle — Primavera Cloud · Full Stack AI Engineer",
        "meta": "Jan 2024 — Present",
        "body": "Engineered a multi agent LLM ecosystem (MCP, PL/SQL DB, Jira, codebase) that autonomously triages 150–200 bugs per week — resolution time from 45 min to under 2 min, 120+ engineering hours saved monthly. Built RAG pipelines over a 100k+ vector knowledge base processing 500+ RFP documents daily with LangChain and Oracle Vector 23ai — sub-1.5s retrieval, +35% throughput. Drove organisation wide adoption of agentic tooling (Cline, Kilo Code, Codex), turning the enterprise SDLC into model agnostic, OS independent AI infrastructure — $1.1M projected savings. Owned 19 full stack features across React and Java/Spring (+28% responsiveness); resolved 40+ high priority bugs with a zero defect post fix record."
      },
      {
        "title": "Softway LoveXAI Hackathon · Founder — BehaviorAI · Winner",
        "meta": "Jun 2026",
        "body": "Built a functional AI behavioural change product in a two hour sprint, scoped for 10,000 employees. Won the hackathon and secured corporate interest for enterprise rollout after a live executive defence."
      },
      {
        "title": "Wipro PARI — Autonomous Driving · Deep Learning Research Assistant",
        "meta": "Nov 2022 — Mar 2023",
        "body": "Trained a customised Single Shot Detector with Feature Pyramid Networks for multi scale perception in dense driving scenes — 55–75% mAP on the real world WIRIN traffic dataset."
      }
    ]
  },
  {
    "slug": "projects",
    "numeral": "II",
    "title": "Publications & Projects",
    "subtitle": "Chapter II",
    "status": "LIVE · 8 PROJECTS",
    "blurb": "Coauthored computer vision research and public source code, with recorded learning experiments and Inside AI visual notes.",
    "entries": [
      {
        "title": "Object Detection, Classification & Tracking of Everyday Common Objects",
        "meta": "Published · IJISRT Vol. 8 Issue 8, Aug 2023 · ISSN 2456-2165",
        "body": "Coauthored a paper on YOLOv4 object detection and video processing with TensorFlow and OpenCV. The implementation includes class filtering, object counting and periodic cropping. The paper reports variable detection performance and identifies occlusion handling as a limitation."
      },
      {
        "title": "Deep Learning & Computer Vision",
        "meta": "Course adaptations and original experiments · Python and TensorFlow",
        "body": "My learning notebooks cover digit classifiers and facial detection with a debiasing VAE. Recorded local runs include 97.38% test accuracy for the fully connected digit model and 99.76% accuracy on sampled training data for the CNN. I also built nnkit with NumPy and SciPy and checked its backward passes using finite differences."
      },
      {
        "title": "Transformers & Large Language Models",
        "meta": "Sequence modelling · LSTM and LoRA experiments",
        "body": "I explore character level music generation with an RNN/LSTM and language model adaptation with LoRA. The latest READMEs include generated text and audio, execution notes and clearly labelled reduced runs, including a 600 step music experiment and a 20 step LFM2 350M adaptation."
      },
      {
        "title": "BehaviorAI",
        "meta": "Top 5 winner · Softway LoveXAI Hackathon 2026",
        "body": "A browser prototype built with Claude during the Softway LoveXAI Hackathon. An Analyst and a Strategist work sequentially to turn workplace survey evidence into a behaviour change plan. A hackathon winner, with a proposed enterprise coaching extension."
      },
      {
        "title": "Indian ANPR",
        "meta": "OCR · MySQL · Twilio",
        "body": "Automatic number plate recognition for Indian vehicles — plate extraction with pytesseract, owner, model and registration validity checks against a MySQL database, and Twilio SMS alerts for expired or invalid registrations."
      },
      {
        "title": "Object Detection using SSD",
        "meta": "Wipro PARI · WIRIN dataset",
        "body": "An image inference notebook for exploring Single Shot Detector object detection, with example images, model configuration and a TensorFlow graph conversion helper. This is part of my computer vision learning and autonomous driving research background."
      },
      {
        "title": "Learning Archive",
        "meta": "Jupyter · self-directed",
        "body": "A curated archive of practice projects and academic explorations — continuous experimentation across programming and computer science."
      },
      {
        "title": "Inside AI",
        "meta": "Public AI learning and research · October 2026",
        "body": "My public learning initiative. Published Parts 01 to 04 explain VAE and VQ VAE through colourful diagrams, maths, runnable code and recorded outputs. Sourced world AI updates and a completed eight minute VAE explainer extend the written notes."
      }
    ]
  },
  {
    "slug": "education",
    "numeral": "III",
    "title": "Education & Recognition",
    "subtitle": "Chapter III",
    "status": "LIVE · 10 ENTRIES",
    "blurb": "Education, published research, hackathon recognition and personal honours.",
    "entries": [
      {
        "title": "B.E. Computer Science & Engineering",
        "meta": "Rashtreeya Vidyalaya College of Engineering · Dec 2020 — Jun 2024",
        "body": ""
      },
      {
        "title": "High School Diploma — 96.8% aggregate",
        "meta": "National Public School, Indiranagar · Sep 2016 — Jun 2020",
        "body": ""
      },
      {
        "title": "NTSE Scholar — All India Rank within Top 800",
        "meta": "National Talent Search Examination",
        "body": ""
      },
      {
        "title": "Winner — Softway LoveXAI Hackathon 2026",
        "meta": "Solo entry · BehaviorAI",
        "body": ""
      },
      {
        "title": "Published author — IJISRT 2023",
        "meta": "Object Detection, Classification and Tracking of Everyday Common Objects",
        "body": ""
      },
      {
        "title": "Best All Rounder Student Award",
        "meta": "Campion School, Mumbai · 2015 and 2016",
        "body": ""
      },
      {
        "title": "FIDE rated chess player · 8th place at state level",
        "meta": "Maharashtra State Championship · More than 25 chess accolades",
        "body": ""
      },
      {
        "title": "MaRRS Spelling Bee · State level finalist",
        "meta": "Qualified for the final round",
        "body": ""
      },
      {
        "title": "District level badminton · 4th place",
        "meta": "Mumbai DSO competition · Campion School",
        "body": ""
      },
      {
        "title": "Sports and co curricular distinctions",
        "meta": "State level football and basketball · District level cricket, tennis and athletics",
        "body": ""
      }
    ]
  }
];

export const skills = [
  "Neural Radiance Fields",
  "Gaussian Splatting",
  "SLAM / SfM",
  "Camera Calibration",
  "Vision Transformers",
  "VLMs",
  "VLA Models",
  "World Models (JEPA)",
  "Diffusion Models",
  "PyTorch",
  "TensorFlow",
  "HuggingFace",
  "CUDA",
  "LangChain",
  "LlamaIndex",
  "Vector 23ai",
  "MCP",
  "RAG",
  "Python",
  "Java / Spring",
  "JavaScript",
  "C",
  "MATLAB",
  "Docker",
  "Redis",
];

export const disciplines = [
  {
    n: "01",
    title: "3D Perception & Robotics",
    body: "NeRF, Gaussian splatting, SLAM/SfM, camera calibration, differentiable ray tracing, volumetric rendering, BVH acceleration.",
  },
  {
    n: "02",
    title: "Vision & Multimodal Models",
    body: "CNNs, Vision Transformers, Vision-Language Models, Vision-Language-Action models, diffusion models, world models (JEPA).",
  },
  {
    n: "03",
    title: "Agent & LLM Infrastructure",
    body: "Multi-agent orchestration over MCP, agent evals and harnesses, fine-tuning, pre/post-training, RAG, LangChain, LlamaIndex, Vector 23ai.",
  },
  {
    n: "04",
    title: "Systems & AIOps",
    body: "Python, Java, JavaScript, C, MATLAB. PyTorch, TensorFlow, HuggingFace, CUDA, Spring, Docker, Redis, CI/CD, quantisation and inference optimisation.",
  },
];
