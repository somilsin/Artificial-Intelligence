<div align="center">

# 🧭 BehaviorAI

### From employee evidence to a coaching design

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

[Open this project](https://github.com/somilsin/Artificial-Intelligence/tree/main/behaviorai-lovexai) · [My GitHub](https://github.com/somilsin) · [Main Portfolio](https://somilsin.github.io/Artificial-Intelligence/portfolio/)

</div>

---

## 📖 About This Repository

I built BehaviorAI during the Softway LoveXAI Hackathon and was selected as one of five winners. The brief was to help employees use what they learn at work. I had two hours to turn that into a working prototype.

[Try the demo](https://somilsin.github.io/Artificial-Intelligence/behaviorai-lovexai/)

---

## 🚀 Key Implementations

* Evidence analysis and coaching design
* Browser interface with a demonstration input
* Report export and review controls

---

## 🎓 Project Guide

### The hackathon

I built and presented BehaviorAI in two hours at the Softway LoveXAI Hackathon. I was selected as one of five winners from more than 1,000 applicants.

### The problem

The brief was about helping 10,000 employees use what they learn at work. Courses and quizzes were measuring completion, while the challenge asked for a way to support changes in day to day behaviour.

### Live demo

[Open BehaviorAI](https://somilsin.github.io/Artificial-Intelligence/behaviorai-lovexai/)

### What it does

Add a problem statement and some employee evidence. The app works through the barriers, people and constraints, then puts together a coaching plan for review.

| View | What it shows |
| :--- | :--- |
| Behavior Gap | The problem identified in the evidence. |
| Behavioral Barriers | Barriers with the evidence that supports them. |
| Change Resistance | A resistance score with an explanation. |
| People in the Change | The people involved in the problem. |
| AI Must Never Replace | Constraints and points where people need to stay involved. |
| Evidence | The chunks used in the analysis. |
| Coaching Design | Suggested interventions. |
| Rollout | A timeline, success measures and a pitch for the plan. |
| Quality Gates | Checks on grounding, behaviour, surveillance risk and human escalation. |

### Architecture

The interface is in `index.html`, the styling is in `styles.css` and `app.js` handles the two agents, evidence chunks and results. It uses plain HTML, CSS and JavaScript with no build step.

### The agent pipeline

Add a problem statement and some employee evidence, such as survey responses, manager notes or a rollout plan. Two Claude agents work through it:

| Agent | Its job |
| :--- | :--- |
| Evidence Analyst | Finds the barriers, people and constraints in the evidence. |
| Coaching Design Strategist | Uses that analysis to suggest interventions, a rollout plan and measures of progress. |

The interface shows the evidence behind the analysis and lets you review and export the plan.

### Sample evidence

The files in [sample-evidence/](sample-evidence/) cover survey signals, manager notes, completion data, vendor audits and a rollout plan. They are demo material, not results from a company rollout.

### Coaching architecture

The wider design is a coaching loop: take in role context and goals, suggest small actions, deliver them where people work and check whether behaviour changes. Stalled cases go to a human coach or manager. The Teams, Outlook and employee delivery loop are design ideas beyond this browser prototype.

### What I presented

I walked through the problem, the agent pipeline and the coaching design. I also discussed consent, human review, rollout constraints and how progress could be measured.

### What I worked on

I used the challenge to bring together the interface, the model calls and the coaching plan in one working prototype.

### Author

Somil Singh · [Main Portfolio](https://somilsin.github.io/Artificial-Intelligence/portfolio/)

---

## 🛠️ Tech Stack

<p align="center">
<img src="https://skillicons.dev/icons?i=html,css,js&theme=dark" alt="HTML, CSS, JavaScript" />
</p>

`HTML` · `CSS` · `JavaScript`

---

## ⚙️ Getting Started

1. Open the demo and use **Load Greg demo** to fill in the sample scenario or add your own evidence.
2. Add your Anthropic API key in settings.
3. Run the analysis and review the findings before using the plan.

The example files are in [sample-evidence/](sample-evidence/). They are demo material, not results from a company rollout.

Your API key is stored in your browser's `localStorage` and sent to `api.anthropic.com` for the model calls. Those calls use your API credits.

### Run locally

The app uses HTML, CSS and JavaScript with no build step. From this folder:

```bash
python -m http.server 8000
```

Open [localhost:8000](http://localhost:8000), then follow the demo steps above.

---

## 📚 References and Credit

Built with the Claude API for the two agents. The hackathon context is Softway's LoveXAI challenge.

---

<div align="center">

### Get In Touch

If you'd like to chat about the work, you can reach me on [LinkedIn](https://linkedin.com/in/somil-singh).

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/somil-singh)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:somils@andrew.cmu.edu)
[![X](https://img.shields.io/badge/X-000000?style=for-the-badge&logo=x&logoColor=white)](https://x.com/Skywalkerlyzv)
[![Medium](https://img.shields.io/badge/Medium-000000?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@thesomilsinghofficial)
[![Substack](https://img.shields.io/badge/Substack-FF6719?style=for-the-badge&logo=substack&logoColor=white)](https://thesomilsingh.substack.com/)

*Thanks for stopping by!*

</div>
