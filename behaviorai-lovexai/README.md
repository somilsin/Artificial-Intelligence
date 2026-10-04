<!-- Shared decorative layout inspired by my original vision README and profile README. -->
<div align="center">

<h1>🧭 BehaviorAI</h1>
<h3><code>From employee evidence to a coaching design</code></h3>

<img src="https://readme-typing-svg.demolab.com/?font=Fira+Code&weight=500&size=22&pause=1000&color=58A6FF&center=true&vCenter=true&width=900&lines=From%20employee%20evidence%20to%20a%20coaching%20design;Learn+it.+Build+it.+Explain+it." alt="From employee evidence to a coaching design" />

<p>
<img src="https://img.shields.io/badge/Artificial%20Intelligence-6E40C9?style=for-the-badge" alt="Artificial Intelligence" />
<img src="https://img.shields.io/badge/Maintained%20by%20Somil%20Singh-58A6FF?style=for-the-badge&logo=github&logoColor=white" alt="Maintained by Somil Singh" />

<img src="https://img.shields.io/badge/HTML-E34F26?style=for-the-badge" alt="HTML" />
<img src="https://img.shields.io/badge/CSS-1572B6?style=for-the-badge" alt="CSS" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge" alt="JavaScript" />
</p>

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/somil-singh)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:somils@andrew.cmu.edu)
[![X](https://img.shields.io/badge/X-000000?style=for-the-badge&logo=x&logoColor=white)](https://x.com/Skywalkerlyzv)
[![Medium](https://img.shields.io/badge/Medium-000000?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@thesomilsinghofficial)
[![Substack](https://img.shields.io/badge/Substack-FF6719?style=for-the-badge&logo=substack&logoColor=white)](https://thesomilsingh.substack.com/)

[Open this project](https://github.com/somilsin/Artificial-Intelligence/tree/main/behaviorai-lovexai) · [My GitHub](https://github.com/somilsin) · [My portfolio](https://somilsin.github.io/Artificial-Intelligence/portfolio/)

</div>

<br>

## 📖 About This Repository

---

I built BehaviorAI for the Softway LoveXAI Hackathon. Its two agent workflow turns employee evidence into a behavioral change plan with human review.

<br>

## 🚀 Key Implementations

---

* Evidence analysis and coaching design
* Browser interface with a demonstration input
* Report export and review controls

<br>

## 🎓 Project Guide

---

### Overview

<div align="center">

**🏆 Top 5 Winner · Softway LoveXAI Hackathon · Bangalore, June 2026**

*Shortlisted from 1,000+ applicants → 20 finalists → 5 winners*

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-brightgreen?style=for-the-badge)](https://somilsin.github.io/Artificial-Intelligence/behaviorai-lovexai/)
[![Built with Claude](https://img.shields.io/badge/Built%20with-Claude%20AI-orange?style=for-the-badge)](https://anthropic.com)
[![Vanilla JS](https://img.shields.io/badge/Stack-Vanilla%20JS-yellow?style=for-the-badge)]()
[![Zero Dependencies](https://img.shields.io/badge/Dependencies-Zero-blue?style=for-the-badge)]()

</div>

---

### The Hackathon

**Softway LoveXAI Hackathon** is one of the most competitive AI engineering challenges in Bangalore. organised by Softway, a global human first transformation firm behind the *Love as a Business Strategy* framework.
* **1,000+ candidates** applied
* **20 finalists** were shortlisted after a rigorous screening process
* **5 winners** were announced at the end of the event
* I was one of the **5 winners**, selected from 20 finalists
* Final demos were presented and defended **live in front of the Managing Director and VP of Softway**
* Built and demonstrated **end to end within 2 hours**. from blank page to live deployed product

The challenge: build an AI product that drives real **behavioral change** at scale. not just content delivery. The winning constraint: every design decision must answer *"does this change on the floor behavior?"* not *"does this improve completion rates?"*

---

### The Problem Statement

> Greg is leading a massive AI transformation for a Fortune 500 client, aiming to upskill 10,000 global employees. Traditional LMS video courses and quizzes are failing to drive actual behavioral change on the floor. Greg is frustrated because vendors keep pitching basic chatbots that just link to PDFs. He needs a scalable AI product that acts as a behavioral change engine. his firm cannot physically or financially deploy human coaches to 10,000 employees across 40 countries.

This is not a training problem. It is a behavioral change problem. BehaviorAI was built to solve it.

---

### Live Demo

**[→ Open BehaviorAI](https://somilsin.github.io/Artificial-Intelligence/behaviorai-lovexai/)**

1. Click the **⚙ settings** icon top right and paste an Anthropic API key (get one at [console.anthropic.com](https://console.anthropic.com/settings/keys)). The key is stored only in your browser's local storage and is sent only to `api.anthropic.com`.
2. Click **"Load Greg demo"** to see the full agent pipeline run on a real scenario
3. Or drag any file from `sample-evidence/` into the drop zone
4. Click **Run analysis**. the Analyst and Strategist agents read your actual text and generate a fresh design, live
5. Try uploading different files. each run reasons fresh from whatever you gave it

---

### What It Does

Upload any employee evidence file (survey data, manager notes, CSV, vendor audits, rollout plans) and two live Claude agents read it and generate a complete behavioral change design:

| Panel | What it shows |
|---|---|
| **Behavior Gap** | Core problem written by the Analyst agent from your actual text |
| **Behavioral Barriers** | 3 6 barriers the Analyst agent identifies in your evidence, each citing the specific evidence chunk that grounds it |
| **Change Resistance** | Resistance score + explanation generated by the Analyst agent from your concern signals |
| **People in the Change** | Stakeholders the Analyst agent identifies as actually implicated by your problem/evidence |
| **AI Must Never Replace** | Guardrails the Analyst agent extracts from constraint language in your file |
| **Evidence tab** | The evidence chunks the Analyst agent itself judged most relevant, with its own relevance scores |
| **Coaching Design tab** | 3 intervention stack the Strategist agent designs specifically for your analysis |
| **Rollout tab** | Timeline + behavioral success metrics + room ready pitch, written by the Strategist agent |
| **Quality Gates** | 4 point eval the Strategist agent scores and explains: behavior grounding, knowing doing gap, surveillance risk, human escalation |

Every run is a live model call grounded directly in the problem statement and evidence you provide.

---

### Architecture

```
behaviorai-lovexai/
├── index.html                          # 3-panel layout: Intake | Analysis | Guardrails + settings modal
├── app.js                              # Two-agent Claude pipeline: chunking, orchestration, rendering
├── styles.css                          # Full design system, warm professional aesthetic
├── README.md
└── sample-evidence/                    # 5 demo files for the Greg use case
    ├── 01-employee-survey-signals.txt  # 2,847-respondent global pulse survey
    ├── 02-manager-listening-notes.md   # 34-manager listening session notes
    ├── 03-lms-completion-data.csv      # Structured completion + behavior data
    ├── 04-vendor-audit-notes.txt       # 6-vendor competitive evaluation
    └── 05-90day-rollout-plan.json      # Operational rollout plan with constraints
```

**Stack:** Vanilla HTML + CSS + JavaScript. Zero external dependencies. Zero build step. Runs entirely client side and calls the Claude API (`/v1/messages`) directly from the browser using Anthropic's CORS support (`anthropic-dangerous-direct-browser-access`). Bring your own key: each person supplies their own Anthropic API key, stored only in their browser's `localStorage`.

**AI layer:** Two Claude agents handle the analysis. an Evidence Analyst and a Coaching Design Strategist.

---

### The Agent Pipeline

Two Claude agents run in sequence, chained so the Strategist's prompt includes the Analyst's structured output:

| Agent | What it does |
|---|---|
| **Evidence Analyst** | Reads the problem statement plus every evidence chunk (each individually addressable, e.g. `[E7]`) and returns structured JSON: core problem, human summary, resistance ("tone") score, stakeholders, behavioral barriers, change risks, guardrails and which evidence chunks actually matter and why. It is instructed never to invent facts not present in the input and to say plainly when evidence is thin rather than fabricate specifics. |
| **Coaching Design Strategist** | Takes the Analyst's structured findings and designs the actual intervention: the 3 part solution stack, rollout timeline, success metrics, a 4 point quality gate eval, confidence/grounding scores and the room ready pitch. every recommendation grounded in what the Analyst found. |
| **Evidence retrieval** | The Analyst agent judges which evidence chunks are most relevant and assigns the relevance score shown in the Evidence tab. |

Analyst output feeds directly into the Strategist's prompt, so each run reasons fresh from the current problem statement and evidence.

---

### The 5 Sample Evidence Files

All built for the Greg use case. 10,000 employee Fortune 500 AI transformation:

| File | What it surfaces when uploaded |
|---|---|
| `01-employee-survey-signals.txt` | Knowing doing gap, fear of judgment, manager invisibility, 84%/11% stat, consent constraints |
| `02-manager-listening-notes.md` | Tool fragmentation, manager behavior gap, no safe practice space, Teams only constraint |
| `03-lms-completion-data.csv` | Peer/manager correlation with real adoption vs. quiz score correlation |
| `04-vendor-audit-notes.txt` | Vendor dependency risk, solution mismatch barrier, Greg's verdict on each vendor |
| `05-90day-rollout-plan.json` | Phase timeline, 11%→35% behavioral target, "what does not get automated" guardrails |

---

### Production Coaching Architecture

In production this extends to a full behavioral coaching loop:

1. **Ingest** role context, past behavior and goals per employee
2. **Generate** personalized micro coaching nudges via Claude API
3. **Deliver** nudges in the flow of work (Microsoft Teams, Outlook, email). no new app installs
4. **Track** behavior signals: did the employee act differently after the nudge?
5. **Escalate** stalled employees to human coaches or managers. AI does not replace that conversation

---

### What I Demonstrated to the MD and VP

In the live defence in front of Softway's Managing Director and VP:
* **Why** the knowing doing gap exists and why every other vendor misses it
* **How** the local signal extraction engine reads real employee evidence and generates a different output for every file
* **What** the 5 step production coaching architecture looks like in Microsoft Teams and Outlook
* **Why** the design is opt in, consent based and never used for individual performance scoring
* **How** ROI evidence can be delivered within 90 days. measured in real behavior shift, not completion rates

The defence covered technical architecture, human first design decisions, scalability constraints, ethical guardrails and commercial viability.

---

### Context and Significance

This project sits at the intersection of everything I have been building toward:
* **Production AI engineering** (Oracle. multi agent systems, RAG pipelines)
* **Research depth** (IISc Bangalore. NeRF, Gaussian splatting; Wipro PARI. autonomous driving perception)
* **Human centered AI design** (Softway's LoveXAI framework)
* **End to end build velocity**. from problem statement to defended live product in 2 hours

Built with Claude (Anthropic) as the primary development partner. Every architectural decision, every iteration, every patch was directed through precise prompting. not autocomplete.

---

### Author

**Somil Singh**
AI/ML Engineer · Oracle
Incoming MS AI Systems · Carnegie Mellon University (August 2026)
IISc Bangalore Visual AI Lab (NeRF, Gaussian splatting) · Wipro PARI (Autonomous Driving)

[somils@andrew.cmu.edu](mailto:somils@andrew.cmu.edu) · [linkedin.com/in/somil singh](https://linkedin.com/in/somil-singh) · [github.com/somilsin](https://github.com/somilsin)

---

*Shortlisted: 20 of 1,000+ · Winners: 5 of 20 · Defended live in front of MD and VP · Built end to end in 2 hours*

<br>

## 🛠️ Tech Stack

---

<p align="center">
<img src="https://skillicons.dev/icons?i=html,css,js&theme=dark" alt="HTML, CSS, JavaScript" />
</p>

`HTML` · `CSS` · `JavaScript`

<br>

## ⚙️ Getting Started

---

```bash
git clone https://github.com/somilsin/Artificial-Intelligence.git
cd Artificial-Intelligence/behaviorai-lovexai
```

I read the project notes and dependency files before choosing its runtime.

<br>

## 📝 My Notes and Results

---

I use this folder to revisit the implementation choices and explain what I learned. The source is preserved here; I make execution claims only where I have recorded the outputs.

<br>

## 📚 References and Credit

---

I retain the source context and any existing licenses with the project. The category move changes the location of the files rather than their ownership.

<br>

<div align="center">

### Get In Touch

I share my learning and projects here. Connect with me on [LinkedIn](https://linkedin.com/in/somil-singh) or explore [my portfolio](https://somilsin.github.io/Artificial-Intelligence/portfolio/).

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/somil-singh)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:somils@andrew.cmu.edu)
[![X](https://img.shields.io/badge/X-000000?style=for-the-badge&logo=x&logoColor=white)](https://x.com/Skywalkerlyzv)
[![Medium](https://img.shields.io/badge/Medium-000000?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@thesomilsinghofficial)
[![Substack](https://img.shields.io/badge/Substack-FF6719?style=for-the-badge&logo=substack&logoColor=white)](https://thesomilsingh.substack.com/)

*Thanks for stopping by!*

</div>
