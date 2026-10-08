# Five additional research notes: robots, evidence and agents

Preprints submitted 7 October 2026 and surfaced in the 8 October feed. This extra edition preserves the earlier 8 October release. These are author-reported research findings, with limits stated in each note.

## 1. A robot can plan toward a picture without predicting every pixel

![Original concept schematic by Inside AI, not a benchmark plot](assets/news-2026-10-08-extra/robojepa.png)

### What changed

RoboJEPA is a new JEPA world model trained across 12 robotic embodiments. The authors report predictable scaling of latent rollout error and a strong relationship between that error and planning performance. The largest predictor has 8 billion parameters.

### How it works

An encoder turns observations into representations. The world model predicts how those representations change under actions. A planner searches for actions that bring the predicted state closer to a goal image. It does not have to render a complete future video to make that comparison.

### Picture the task

Imagine a block on the left and a goal photo showing it on the right. A planning system can compare possible action sequences against the target representation. That’s an illustration of the idea, not a new experiment from Inside AI.

### Why I’m watching it

For builders, a cheap offline signal could help choose which world model deserves an expensive hardware test. My takeaway: measure whether better prediction also improves the action you need. A nicer imagined future alone is not enough.

### Access and limits

The paper links training and robot deployment code at https://github.com/facebookresearch/robo_jepa and says checkpoints are released. These are author-reported research results, not an independent reproduction. The visual encoder is frozen and the study uses a fixed corpus. Its scaling fit does not establish universal robot capability.

### Date and source

Submitted 7 October 2026; surfaced in the 8 October arXiv feed. Primary paper: https://arxiv.org/abs/2610.10515

[Primary paper](https://arxiv.org/abs/2610.10515) · [Full X Article](https://x.com/Skywalkerlyzv/article/2108183622465515802) · [Inside AI company summary](https://www.linkedin.com/feed/update/urn:li:share:7513949663830482944?actorCompanyId=143953415)

## 2. Sometimes the answer needs computation before it needs more retrieval

![Original concept schematic by Inside AI, not a benchmark plot](assets/news-2026-10-08-extra/recast.png)

### What changed

RECAST treats evidence construction as a sequence of decisions. A trained RouterLM chooses retrieval or computation operations. For custom operations, a frozen CompilerLM produces executable code. A frozen AnswerLM answers once the router accepts the evidence.

### What the paper reports

Across six benchmark families, the authors report a 75.6% mean success rate. That is a benchmark result under their setup, not a guarantee for a company’s data or tools.

### A small example

Suppose a table lists support tickets opened and resolved each week. The question is which week had the largest unresolved backlog increase. Searching for a similar sentence won’t necessarily find that answer. You first need to calculate the weekly change. This example is mine, not a reported test.

### Why it matters

For an AI app, “more context” can hide a missing operation. I’d first check whether the evidence contains the answer or only the ingredients. That changes which tool the system needs and makes the answer easier to audit.

### Access and limits

The full preprint and method are publicly readable. I have not verified a separate runnable release, so this is a research note rather than an install recommendation. Learned routing, generated code and evidence acceptance each need evaluation. All performance here is author-reported, not reproduced by Inside AI.

### Date and source

Submitted 7 October 2026; surfaced in the 8 October arXiv feed. Primary paper: https://arxiv.org/abs/2610.10507

[Primary paper](https://arxiv.org/abs/2610.10507) · [Full X Article](https://x.com/Skywalkerlyzv/article/2108184227195879666) · [Inside AI company summary](https://www.linkedin.com/feed/update/urn:li:share:7513950267353165824?actorCompanyId=143953415)

## 3. A base model can fail the agent harness and still be worth training

![Original concept schematic by Inside AI, not a benchmark plot](assets/news-2026-10-08-extra/coding-potential.png)

### What changed

Before They Can Solve proposes three ways to screen a base model’s coding-agent potential. The researchers replay successful agent trajectories and rerun repository tests after edits. They find the decisive step: the first cumulative patch that turns failure into a pass.

### Three checks at that step

They measure the model’s likelihood on the working action, ask it to choose a patch among verifier-rejected alternatives and sample continuations from the same prior context. These checks let the base checkpoint use an existing trajectory prefix instead of operating the whole tool harness from scratch.

### What they found

Across ten public base/post-trained model pairs, the authors report that the screens rank models closely with post-training SWE-bench Verified performance. This is a cohort-level relationship, not a promise about an unseen model.

### Think of the decision

Imagine two base models that both struggle to format tool calls. One may still consistently recognise the edit needed after seeing the repository context. A screen at that point could help decide where to spend training effort. That is an illustrative use case, not my measured result.

### Access and limits

The paper and evaluation protocol are public. A successful trace and the benchmark verifier are prerequisites. Test acceptance only establishes success under that verifier. I have not independently reproduced the results or verified a standalone release. My takeaway: separate coding ability from the ability to drive today’s harness.

### Date and source

Submitted 7 October 2026; surfaced in the 8 October arXiv feed. Primary paper: https://arxiv.org/abs/2610.10478

[Primary paper](https://arxiv.org/abs/2610.10478) · [Full X Article](https://x.com/Skywalkerlyzv/article/2108184856266211519) · [Inside AI company summary](https://www.linkedin.com/feed/update/urn:li:activity:7513951169099014144/)

## 4. An agent staying on time does not prove it kept working

![Original concept schematic by Inside AI, not a benchmark plot](assets/news-2026-10-08-extra/agenttime.png)

### What changed

AgentTime evaluates whether agents follow a requested working duration, forecast runtime and estimate elapsed time. It contains 222 tasks from 18 sources, including coding, computer use and research.

### The distinction that matters

The authors found that matching a requested runtime can include explicit waiting after an agent appears to finish. Their evaluation separates the clock from what happened during the run. Completing a task and controlling its duration are different capabilities.

### A familiar situation

Imagine asking for another thirty minutes of testing. A useful continuation explores an unresolved failure, runs a relevant check or improves the result. Sleeping for thirty minutes produces a very different transcript even if the wall clock matches. This is an example, not an Inside AI experiment.

### Why I’m watching it

For long-running automation, I want to know what the extra time bought. A duration budget needs progress evidence and a useful outcome. My takeaway: record the actions as well as the start and finish times.

### Access and limits

The paper links a public benchmark website and code. Model comparisons reflect the tested harnesses and settings. Most task/duration conditions were run once and the study covers three agents from two labs. Serving speed and instruction wording also matter. These are author-reported findings, not an independent reproduction or a universal product ranking.

### Date and source

Submitted 7 October 2026; surfaced in the 8 October arXiv feed. Primary paper: https://arxiv.org/abs/2610.09944

[Primary paper](https://arxiv.org/abs/2610.09944) · [Full X Article](https://x.com/Skywalkerlyzv/article/2108198953095463183) · [Inside AI company summary](https://www.linkedin.com/feed/update/urn:li:share:7513964806048190465?actorCompanyId=143953415)

## 5. Agent memory can retrieve the right fact and still give you a bad prompt

![Original concept schematic by Inside AI, not a benchmark plot](assets/news-2026-10-08-extra/memory-validity.png)

### What changed

A new Personal Fact Memory study inspects the memory block before generation. It separates outdated values, facts about the wrong person and evidence that arrives after the serving deadline. A final-answer score can hide those different failures.

### What the controlled study found

With correctly assigned slot keys, serving only active values removed observed stale exposure. Without update resolution, 70.3% of prompts in the controlled revision benchmark included a superseded value. That number belongs to this benchmark, not to all agent memory systems.

### A small example

Suppose a project changes its deployment region from A to B. A retriever that returns both records has found the current fact, but it has also handed the model a conflict. Add two projects with the same short name and identity becomes a separate problem. This is my illustration.

### Why it matters

My takeaway for builders: test the memory block itself. Is the value current? Is it attached to the right entity? Did it arrive in time to be used? Measuring only whether a generated answer happened to be correct can miss a fragile setup.

### Access and limits

The full preprint is public. Correct keys are an important condition, not a solved extraction problem: missed merges can retain stale values and false merges can remove valid ones. The paper also studies public corpora. I have not independently reproduced it or verified a packaged release. Keep the benchmark’s construction and latency environment in mind.

### Date and source

Submitted 7 October 2026; surfaced in the 8 October arXiv feed. Primary paper: https://arxiv.org/abs/2610.10265

[Primary paper](https://arxiv.org/abs/2610.10265) · [Full X Article](https://x.com/Skywalkerlyzv/article/2108199464804798816) · [Inside AI company summary](https://www.linkedin.com/feed/update/urn:li:share:7513965486624346112?actorCompanyId=143953415)


