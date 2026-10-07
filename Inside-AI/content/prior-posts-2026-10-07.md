# The policy update is small. The checkpoint transfer may not be.

Somil Singh · Inside AI

In agentic reinforcement learning, the cluster updating a policy and the cluster generating its rollouts can be separate. A new policy then has to reach the rollout workers before the next batch.

Sending an entire checkpoint every time can make that synchronization expensive. NeMo-DCR, a paper submitted on 6 October and surfaced on Hugging Face on 7 October, asks what happens if we send the changes instead.

![A changed-weight payload reaches the rollout model through its native loader](assets/nemo-dcr-cover.svg)

*Original mechanism schematic. It is not a benchmark measurement.*

The authors report that roughly 1% of stored BF16 weight values change per update in their measurements. Their design maps changes into canonical checkpoint coordinates and lets the serving runtime's native loader place them. XOR masks carry changes whose loading preserves the stored bits. Other changes use overwrites.

The goal is bit exact refit: the receiver should end with the same parameter and buffer bits as a full update. Sending fewer values is useful only if the receiver puts them in the right place and recovers correctly from interruptions. The paper describes retries and a joint commit that ties the policy to its next delta baseline.

In the reported 1T model relay tree test at a 3% change rate, refit took 150 seconds against 87.5 minutes for a transport-only full checkpoint reference. That comparison is about synchronization in a specified setup. It is not a claim that model reasoning or every RL run becomes 35 times faster. We have not reproduced the benchmark.

The practical limit matters too. NVIDIA's current nightly guide lists sparse delta refit for vLLM with a Megatron policy, unquantized BF16/FP16 rollout and GRPO. A published paper and nightly documentation do not establish compatibility with every deployment.

My takeaway is to measure what moves between systems, not just what runs on a GPU. A small policy update can still create a large transfer if the system always sends the whole checkpoint.

Sources: [paper and submission date](https://arxiv.org/abs/2610.08430), [NVIDIA refit guide](https://docs.nvidia.com/nemo/rl/nightly/guides/refit.html), [linked implementation PR](https://github.com/NVIDIA-NeMo/RL/pull/2444).

Come read the source with me. Which part of your training loop waits on a transfer?


Published reading link: [Native X Article](https://x.com/Skywalkerlyzv/article/2107826868632358963).

[Inside AI company summary](https://www.linkedin.com/feed/update/urn:li:activity:7513593754755276802/).
