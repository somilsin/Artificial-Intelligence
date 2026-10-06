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
    "status": "LIVE · 11 ROLES",
    "blurb": "AI engineering at Oracle, machine learning research at Strand Life Sciences, earlier 3D perception research at IISc and public learning through Inside AI.",
    "entries": [
      {
        "title": "Inside AI · Founder and Creator",
        "meta": "October 2026 to present",
        "body": "Building Inside AI, a public AI learning initiative with an open source focus. I share research notes, diagrams and code across AI, machine learning, deep learning, computer vision and robotics. Published the first four Deep Learning Models articles on VAE and VQ VAE. I also curate sourced world AI updates and develop educational videos. Learning in public, because sharing is caring."
      },
      {
        "title": "Strand Life Sciences · Machine Learning Researcher",
        "meta": "September 2026 to present · Part time",
        "body": "Research deep learning methods and build predictive pipelines for early cancer detection using clinical blood data, with a focus on limited samples and data bias. Developed a variational autoencoder (VAE) to debias tabular cancer data, outperforming the previous model for early detection across 10 cancer types."
      },
      {
        "title": "Oracle · Primavera Cloud · Full Stack AI Engineer",
        "meta": "August 2025 to present",
        "body": "Specialise in agentic AI and LLM orchestration, leading adoption of agentic tools across Oracle Primavera Cloud. Engineered compositional SQL mapping for Text to SQL RAG agents, consolidating complex routing into a relational table and accelerating fetch queries by 75%. Automated code generation, test verification and GitLab and SmartBear reviews through Cline, Kilo Code and Codex, with $1.1M in projected savings. Built a multi agent LLM ecosystem across MCP, PL/SQL, Jira and the codebase to triage 150 to 200 bugs per week. Reduced resolution time from 45 minutes to 2 minutes and saved more than 120 engineering hours monthly. Built RAG pipelines processing more than 500 RFP documents daily over a knowledge base of more than 100,000 vectors using LangChain and Oracle Vector 23ai. Achieved retrieval latency under 1.5 seconds and improved throughput by 35%. Led a proof of concept for an agentic low code framework through Oracle Integration Cloud and coordinated team upskilling with organisation directors."
      },
      {
        "title": "Oracle · Primavera Cloud · Associate Software Engineer",
        "meta": "July 2024 to July 2025",
        "body": "Owned design and development of more than 30 React frontend features with Java and Spring backends, improving workflow responsiveness by 28%. Learned the React and Redux ecosystem within 72 hours to deliver a schedule interface for stakeholders and was selected for the organisation wide AI and SDLC overhaul. Resolved more than 25 priority performance and architecture issues and delivered more than 2,500 lines of production code with CI/CD ownership. Owned the Code Smells epic to reduce automation debt and maintained a zero defect record after fixes across AI augmented deployments."
      },
      {
        "title": "Oracle · Project Intern",
        "meta": "January 2024 to June 2024 · Internship",
        "body": "Developed experience in Java and full stack software development before moving into a core engineering role at Oracle."
      },
      {
        "title": "Stealth AI Startup · Founder",
        "meta": "July 2026 to September 2026 · Paused",
        "body": "Explored an early AI startup idea. The initiative is paused while I focus on research and learn from startup founders."
      },
      {
        "title": "BehaviorAI (v1) · Founder",
        "meta": "June 2026 · Part time",
        "body": "Built a working AI product for an enterprise behaviour change challenge covering 10,000 employees in a two hour sprint using Claude. Selected as one of five Star Builders from more than 1,000 applicants at the Softway LoveXAI Hackathon. Presented the product design, ethics and commercial case to Softway leadership, securing possible corporate interest in an enterprise rollout."
      },
      {
        "title": "Indian Institute of Science (IISc) Bangalore · AI Research Assistant",
        "meta": "July 2023 to December 2023 · Internship",
        "body": "Researched Neural Radiance Fields and plenoptic functions for 7D scene representations and human pose estimation. Improved reconstruction fidelity by 25% on benchmarks across Blender, LLFF and DTU. Integrated SfM and SLAM camera calibration with differentiable ray tracing for 3D scene reconstruction, maintaining real time inference at 12 fps. Used Gaussian splatting, supersampling and custom BVH acceleration structures to reduce mean joint position error by 18% on out of distribution datasets. Built a volumetric rendering and lightfield modelling pipeline in PyTorch on Ubuntu spanning more than 1,000 lines of code."
      },
      {
        "title": "Samsung R&D Institute India · Computer Vision Research Intern",
        "meta": "May 2023 to October 2023 · Internship",
        "body": "Led a team of four to build a deep neural network pipeline for video frame interpolation and smoother slow motion playback. Benchmarked on Vimeo90K, improving PSNR and SSIM over DAIN and SepConv by 8.5% with CUDA optimised inference. Coordinated task delegation and communication with the company as the student team representative."
      },
      {
        "title": "Solar Secure Solutions · Data Science Intern",
        "meta": "January 2023 to March 2023 · Internship",
        "body": "Built regression and classification models in Python, improving predictive accuracy by 20% and reducing manual preprocessing effort by 30%. Developed data cleaning, feature engineering and visualisation pipelines with Pandas, NumPy, scikit learn and Matplotlib."
      },
      {
        "title": "Wipro PARI · AI Research Intern",
        "meta": "November 2022 to March 2023 · Internship",
        "body": "Trained a customised Single Shot Detector on the WIRIN dataset for autonomous driving, achieving 55 to 75% mAP on real world traffic data. Integrated Feature Pyramid Networks for multi scale feature fusion to improve detection of small and overlapping objects in dense traffic frames."
      }
    ]
  },
  {
    "slug": "projects",
    "numeral": "II",
    "title": "Publications & Projects",
    "subtitle": "Chapter II",
    "status": "LIVE · 11 PROJECTS",
    "blurb": "Coauthored computer vision research and public source code, with recorded learning experiments and Inside AI visual notes.",
    "entries": [
      {
        "title": "Object Detection, Classification & Tracking of Everyday Common Objects",
        "meta": "Published · IJISRT Vol. 8 Issue 8, Aug 2023",
        "body": "Coauthored a paper on YOLOv4 object detection and video processing with TensorFlow and OpenCV. The implementation includes class filtering, object counting and periodic cropping. The paper reports variable detection performance and identifies occlusion handling as a limitation."
      },
      {
        "title": "Deep Learning and Computer Vision Experiments",
        "meta": "Course adaptations and original experiments · Python and TensorFlow",
        "body": "I adapted MIT Introduction to Deep Learning exercises to study digit classification and face classification with adaptive sampling. My recorded runs include 97.38% test accuracy for digit classification and 99.76% accuracy on sampled training data in a separate CNN run. I also maintain a NumPy and SciPy neural network engine with explicit gradients and finite difference checks. I retain the course credit and distinguish training measurements from independent evaluation."
      },
      {
        "title": "Transformers and Large Language Models Experiments",
        "meta": "Sequence modelling · LSTM and LoRA experiments",
        "body": "I explore character level music generation with an RNN/LSTM and language model adaptation with LoRA. The latest READMEs include generated text and audio, execution notes and clearly labelled reduced runs, including a 600 step music experiment and a 20 step LFM2 350M adaptation."
      },
      {
        "title": "BehaviorAI",
        "meta": "Top 5 winner · Softway LoveXAI Hackathon 2026",
        "body": "I built BehaviorAI at the Softway LoveXAI Hackathon and was selected as one of five winners. An Evidence Analyst and a Coaching Design Strategist use employee evidence to produce a behaviour change plan. I built the interface with HTML, CSS and JavaScript and connected the two agents to the Claude API. The project includes example evidence and a live browser demo."
      },
      {
        "title": "Indian ANPR",
        "meta": "OCR · MySQL · Twilio",
        "body": "Automatic number plate recognition for Indian vehicles · plate extraction with pytesseract, owner, model and registration validity checks against a MySQL database and Twilio SMS alerts for expired or invalid registrations."
      },
      {
        "title": "Object Detection using SSD",
        "meta": "COCO class labels · Image inference notebook",
        "body": "An image inference notebook for exploring Single Shot Detector object detection, with example images, model configuration and a TensorFlow graph conversion helper. This is part of my computer vision learning and autonomous driving research background."
      },
      {
        "title": "Learning Archive",
        "meta": "Jupyter · self directed",
        "body": "A curated archive of practice projects and academic explorations · continuous experimentation across programming and computer science."
      },
      {
        "title": "Inside AI",
        "meta": "Public AI learning and research · October 2026",
        "body": "My public learning initiative. Published Parts 01 to 04 explain VAE and VQ VAE through colourful diagrams, maths, runnable code and recorded outputs. Sourced world AI updates and a completed eight minute VAE explainer extend the written notes."
      },
      {
        "title": "TensorTonic Machine Learning Solutions",
        "meta": "May 2026 to present · Probability and linear algebra",
        "body": "I practise core machine learning mathematics through small Python implementations of dot products, cosine similarity, matrix transpose, expected value, Bernoulli probability and sample statistics. I keep each problem statement beside its implementation with source credit."
      },
      {
        "title": "Cybersecurity Reconnaissance Tools",
        "meta": "May 2023 to August 2023 · Networking and security practice",
        "body": "I explored remote operating system discovery and open port detection through a Python reconnaissance toolkit with a SQLite port mapping database. I keep it in my Learning Archive as a record of my networking and security practice."
      },
      {
        "title": "Ivy | Framework Codebase Study",
        "meta": "January 2021 to December 2021 · Codebase study",
        "body": "I studied the Ivy codebase to understand framework interoperability and API design. This is a study of an existing open source project and I retain the original attribution and licence."
      }
    ]
  },
  {
    "slug": "education",
    "numeral": "III",
    "title": "Education & Recognition",
    "subtitle": "Chapter III",
    "status": "LIVE · 16 ENTRIES",
    "blurb": "Education, published research, hackathon recognition and personal honours.",
    "entries": [
      {
        "title": "Bachelor of Engineering, Computer Science",
        "meta": "RV College of Engineering · First Class with Distinction · Scholaro GPA 3.74/4.0",
        "body": ""
      },
      {
        "title": "High School Diploma · 96.8%",
        "meta": "National Public School, Indiranagar · CBSE 10th boards",
        "body": ""
      },
      {
        "title": "National Talent Search Examination (NTSE) Scholar | Top 800 All India Rank",
        "meta": "National Talent Search Examination",
        "body": ""
      },
      {
        "title": "Winner · Softway LoveXAI Hackathon 2026",
        "meta": "Solo entry · BehaviorAI",
        "body": ""
      },
      {
        "title": "Published author · IJISRT 2023",
        "meta": "Object Detection, Classification and Tracking of Everyday Common Objects",
        "body": ""
      },
      {
        "title": "Best All Rounder Student Award (2015, 2016)",
        "meta": "Campion School, Mumbai · 2015 and 2016",
        "body": ""
      },
      {
        "title": "FIDE Rated Chess Player | 8th Place, Maharashtra State Championship",
        "meta": "Maharashtra State Championship · More than 25 chess accolades",
        "body": ""
      },
      {
        "title": "MaRRS Spelling Bee | State Level Finalist",
        "meta": "Qualified for the final round",
        "body": ""
      },
      {
        "title": "District Level Badminton | 4th Place, Mumbai DSO Competition",
        "meta": "Mumbai DSO competition · Campion School",
        "body": ""
      },
      {
        "title": "Sports and Co Curricular Distinctions",
        "meta": "State level football and basketball · District level cricket, tennis and athletics",
        "body": ""
      },
      {
        "title": "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
        "meta": "Oracle · Issued April 2025",
        "body": ""
      },
      {
        "title": "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
        "meta": "Oracle · Issued March 2025 · Expires March 2027",
        "body": ""
      },
      {
        "title": "GRE · 335/340",
        "meta": "December 2025 · Quantitative 166 · Verbal 169",
        "body": ""
      },
      {
        "title": "TOEFL iBT · 116/120",
        "meta": "August 2025 · C2 level proficiency",
        "body": ""
      },
      {
        "title": "Team Antariksh · Core Electronics Engineer",
        "meta": "March 2022 to November 2022 · RVSAT1 payload circuitry",
        "body": ""
      },
      {
        "title": "National Service Scheme · Design Team Member",
        "meta": "November 2022 to June 2024 · Innovation with a purpose",
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
    body: "CNNs, Vision Transformers, Vision Language Models, Vision Language Action models, diffusion models, world models (JEPA).",
  },
  {
    n: "03",
    title: "Agent & LLM Infrastructure",
    body: "Multi agent orchestration over MCP, agent evals and harnesses, fine tuning, pre/post training, RAG, LangChain, LlamaIndex, Vector 23ai.",
  },
  {
    n: "04",
    title: "Systems & AIOps",
    body: "Python, Java, JavaScript, C, MATLAB. PyTorch, TensorFlow, HuggingFace, CUDA, Spring, Docker, Redis, CI/CD, quantisation and inference optimisation.",
  },
];
