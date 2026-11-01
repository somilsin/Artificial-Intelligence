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

[Open this project](https://github.com/somilsin/Artificial-Intelligence/tree/main/behaviorai-lovexai) · [My GitHub](https://github.com/somilsin) · [Main Portfolio](https://somilsin.github.io/Artificial-Intelligence/portfolio/)

</div>

<br>

I built BehaviorAI during the Softway LoveXAI Hackathon and was selected as one of five winners. The brief was to help employees use what they learn at work. I had two hours to turn that into a working prototype.

[Try the demo](https://somilsin.github.io/Artificial-Intelligence/behaviorai-lovexai/)

## 🧠 How it works

Add a problem statement and some employee evidence, such as survey responses, manager notes or a rollout plan. Two Claude agents work through it:

| Agent | Its job |
| :--- | :--- |
| Evidence Analyst | Finds the barriers, people and constraints in the evidence. |
| Coaching Design Strategist | Uses that analysis to suggest interventions, a rollout plan and measures of progress. |

The interface shows the evidence behind the analysis and lets you review and export the plan.

## ⚙️ Try it

1. Open the demo and use **Load Greg demo** to fill in the sample scenario or add your own evidence.
2. Add your Anthropic API key in settings.
3. Run the analysis and review the findings before using the plan.

The example files are in [sample-evidence/](sample-evidence/). They are demo material, not results from a company rollout.

Your API key is stored in your browser's `localStorage` and sent to `api.anthropic.com` for the model calls. Those calls use your API credits.

## 💻 Run locally

The app uses HTML, CSS and JavaScript with no build step. From this folder:

```bash
python -m http.server 8000
```

Open [localhost:8000](http://localhost:8000), then follow the demo steps above.
