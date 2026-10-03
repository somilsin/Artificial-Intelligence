// ─── DEMO DATA ────────────────────────────────────────────────────────────────
const demoProblem = `Greg is leading a massive AI transformation for a Fortune 500 client, aiming to upskill 10,000 global employees. Traditional LMS video courses and quizzes are failing to drive actual behavioral change on the floor. Greg is frustrated because vendors keep pitching basic chatbots that just link to PDFs. He needs a scalable AI product that acts as a behavioral-change engine — his firm cannot physically or financially deploy human coaches to 10,000 employees across 40 countries.`;

const demoEvidence = `Client listening data (global survey, n=2,400):
- 78% of employees say they completed the LMS modules but don't know how to apply AI tools to their actual daily tasks.
- 61% say they feel "watched" when using new AI tools and are afraid of making mistakes in front of managers.
- Managers report that team behavior hasn't changed 6 weeks after course completion.
- Only 12% of employees say they've used a new AI tool at least once since the training.

Vendor audit notes:
- Three vendors pitched chatbots that answer FAQ questions and link to policy PDFs.
- None of the vendors addressed the gap between knowing and doing.
- No vendor proposed a feedback loop to measure actual behavior change.

Greg's constraints:
- Cannot deploy human coaches at scale — too expensive, too slow.
- Must work across 40 countries and 6 languages.
- Must integrate with existing tools: Microsoft Teams, Outlook, SAP.
- Budget requires ROI evidence within 90 days.
- Legal requires no personal performance data stored without consent.

What behavioral change actually looks like (Greg's definition):
- Employee uses an AI tool unprompted, without being told to.
- Employee applies a skill to a real task, not a training exercise.
- Employee shares what they learned with a peer (knowledge propagation).
- Manager notices the change without being prompted to look for it.`;

// ─── SETTINGS (BYO Anthropic API key, stored only in this browser) ────────────
const SETTINGS_KEYS = { apiKey: "behaviorai_api_key", model: "behaviorai_model" };
const DEFAULT_MODEL = "claude-sonnet-4-6";
const MODEL_OPTIONS = [
  { id: "claude-sonnet-4-6", label: "Claude Sonnet 4.6 — recommended" },
  { id: "claude-opus-4-8", label: "Claude Opus 4.8 — highest quality, slower" },
  { id: "claude-haiku-4-5-20251001", label: "Claude Haiku 4.5 — fastest" },
];

function getApiKey() {
  return (localStorage.getItem(SETTINGS_KEYS.apiKey) || "").trim();
}
function setApiKey(value) {
  if (value) localStorage.setItem(SETTINGS_KEYS.apiKey, value);
  else localStorage.removeItem(SETTINGS_KEYS.apiKey);
}
function getModel() {
  return localStorage.getItem(SETTINGS_KEYS.model) || DEFAULT_MODEL;
}
function setModel(value) {
  localStorage.setItem(SETTINGS_KEYS.model, value || DEFAULT_MODEL);
}

// ─── STATE ────────────────────────────────────────────────────────────────────
const state = {
  report: null,
  documents: [],
  analyzing: false,
};

// ─── DOM REFS ─────────────────────────────────────────────────────────────────
const els = {
  problem:    document.querySelector("#problemInput"),
  evidence:   document.querySelector("#evidenceInput"),
  industry:   document.querySelector("#industryInput"),
  risk:       document.querySelector("#riskInput"),
  file:       document.querySelector("#fileInput"),
  fileStatus: document.querySelector("#fileStatus"),
  sourceList: document.querySelector("#sourceList"),
  runStatus:  document.querySelector("#runStatus"),
  run:        document.querySelector("#runButton"),
  demo:       document.querySelector("#demoButton"),
  clear:      document.querySelector("#clearButton"),
  copy:       document.querySelector("#copyButton"),
  export:     document.querySelector("#exportButton"),
  empty:      document.querySelector("#emptyState"),
  results:    document.querySelector("#results"),
  coreProblem:    document.querySelector("#coreProblem"),
  humanSummary:   document.querySelector("#humanSummary"),
  toneMeter:      document.querySelector("#toneMeter span"),
  toneLabel:      document.querySelector("#toneLabel"),
  stakeholders:   document.querySelector("#stakeholders"),
  doNotAutomate:  document.querySelector("#doNotAutomate"),
  behaviorBarriers: document.querySelector("#behaviorBarriers"),
  coachingIntro:  document.querySelector("#coachingIntro"),
  evidenceList:   document.querySelector("#evidenceList"),
  solutionCards:  document.querySelector("#solutionCards"),
  timeline:       document.querySelector("#timeline"),
  metrics:        document.querySelector("#metricsList"),
  pitch:          document.querySelector("#pitchText"),
  confidence:     document.querySelector("#confidenceScore"),
  grounding:      document.querySelector("#groundingScore"),
  evalList:       document.querySelector("#evalList"),
  riskTags:       document.querySelector("#riskTags"),
  // Settings / agent status
  settingsButton:      document.querySelector("#settingsButton"),
  llmStatusPill:       document.querySelector("#llmStatusPill"),
  settingsModal:       document.querySelector("#settingsModal"),
  settingsBackdrop:    document.querySelector("#settingsBackdrop"),
  settingsClose:       document.querySelector("#settingsClose"),
  settingsSave:        document.querySelector("#settingsSave"),
  settingsClear:       document.querySelector("#settingsClear"),
  settingsKeyInput:    document.querySelector("#settingsKeyInput"),
  settingsModelSelect: document.querySelector("#settingsModelSelect"),
};

// ─── UTILITY FUNCTIONS ────────────────────────────────────────────────────────
function clamp(v, min, max) {
  const n = Number(v);
  if (Number.isNaN(n)) return min;
  return Math.max(min, Math.min(max, n));
}

function unique(items) {
  return [...new Set(items)];
}

function shorten(value, maxLength = 150) {
  const text = String(value ?? "").trim();
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength - 3).trim() + "...";
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function chip(label, className = "chip") {
  return `<span class="${className}">${escapeHtml(label)}</span>`;
}

function formatBytes(bytes) {
  return bytes < 1024 ? `${bytes} B` : `${(bytes / 1024).toFixed(1)} KB`;
}

// ─── TEXT CHUNKING (feeds evidence to the agents as addressable, citable chunks) ─
function chunkText(text) {
  const lines = text.split(/\n+/).map(l => l.trim()).filter(Boolean);
  if (lines.length >= 3) {
    return lines.map((line, i) => ({ id: `E${i + 1}`, text: line.replace(/^[-*]\s*/, "") }));
  }
  const tokens = text.split(/\s+/).filter(Boolean);
  const chunks = [];
  for (let i = 0; i < tokens.length; i += 55) {
    chunks.push({ id: `E${chunks.length + 1}`, text: tokens.slice(i, i + 70).join(" ") });
  }
  return chunks;
}

function buildEvidenceChunks(evidenceText) {
  if (!evidenceText.trim()) return [];
  return chunkText(evidenceText)
    .slice(0, 90)
    .map(c => ({ id: c.id, text: shorten(c.text, 320) }));
}

// ─── ANTHROPIC API ──────────────────────────────────────────────────────────
async function callClaude({ system, userContent, maxTokens = 2200 }) {
  const apiKey = getApiKey();
  if (!apiKey) throw new Error("NO_API_KEY");

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
      "anthropic-dangerous-direct-browser-access": "true",
    },
    body: JSON.stringify({
      model: getModel(),
      max_tokens: maxTokens,
      system,
      messages: [{ role: "user", content: userContent }],
    }),
  });

  if (!response.ok) {
    let detail = "";
    try {
      const errJson = await response.json();
      detail = errJson?.error?.message || "";
    } catch { /* ignore parse failure */ }
    throw new Error(`API_ERROR:${response.status}:${detail}`);
  }

  const data = await response.json();
  const textBlock = (data.content || []).find(b => b.type === "text");
  if (!textBlock || !textBlock.text) throw new Error("EMPTY_RESPONSE");
  return textBlock.text;
}

function parseJsonResponse(raw) {
  let text = raw.trim().replace(/^```(?:json)?/i, "").replace(/```$/, "").trim();
  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");
  if (start !== -1 && end !== -1 && end > start) text = text.slice(start, end + 1);
  return JSON.parse(text);
}

// ─── AGENT 1: EVIDENCE ANALYST ─────────────────────────────────────────────────
// Reads the raw problem + evidence chunks and produces a grounded, structured
// read of the situation.
async function runAnalystAgent({ problem, chunks, industryOptions, scaleOptions }) {
  const chunkList = chunks.length
    ? chunks.map(c => `[${c.id}] ${c.text}`).join("\n")
    : "(no evidence text or files were provided — infer as little as possible and say so honestly)";

  const system = `You are the Evidence Analyst agent inside BehaviorAI, a workspace that helps transformation leads design AI-driven behavioral-change programs (not just training/LMS content delivery).

Read the transformation problem and the evidence chunks below (each tagged with an ID like [E3]) and produce a structured, evidence-grounded analysis.

Rules:
- Never invent statistics, quotes, or facts that are not supported by the problem statement or the evidence chunks.
- If little or no evidence was provided, say so plainly in "humanSummary" and keep "tone.score" and confidence-adjacent language modest — do not fabricate specifics to sound impressive.
- Every entry in "behaviorBarriers" and "evidenceRetrieval" that claims evidence support must reference a real chunk ID from the list given. Use an empty string for "evidenceHit" if a barrier is inferred from the problem statement rather than a specific evidence chunk.
- "industry" must be exactly one of: ${industryOptions.join(" | ")}
- "scale" must be exactly one of: ${scaleOptions.join(" | ")}
- Output ONLY a single valid JSON object. No markdown code fences, no prose before or after it.

JSON schema:
{
  "scenarioLabel": "short label naming the type of behavioral-change challenge this is — write your own, do not pick from a fixed list",
  "coreProblem": "one sharp sentence naming the real behavior-change problem",
  "humanSummary": "2-3 sentences summarizing the human situation, grounded in the evidence",
  "industry": "one of the allowed industry values above",
  "scale": "one of the allowed scale values above",
  "primaryGoal": "the single most important behavior goal, in the evidence's own terms where possible",
  "primaryConcern": "the single biggest human concern or fear surfaced in the evidence",
  "primaryConstraint": "the single most important guardrail or constraint",
  "tone": { "score": 0-100 (higher = more resistance/friction), "label": "1-2 sentences explaining the resistance level, referencing real evidence where possible" },
  "stakeholders": ["3 to 7 stakeholder groups actually implicated by this problem or evidence"],
  "behaviorBarriers": [ { "barrier": "short name", "description": "one sentence", "evidenceHit": "a chunk ID like E3, or an empty string" } ] (3 to 6 items),
  "risks": ["3 to 6 named change-risk labels tailored to this specific problem, not generic filler"],
  "doNotAutomate": ["3 to 5 things the AI system must never do, grounded in stated constraints where they exist"],
  "evidenceRetrieval": [ { "id": "a real chunk ID from the list", "relevance": 1-10 } ] (up to 6, most relevant first)
}`;

  const userContent = `TRANSFORMATION PROBLEM:
${problem || "(not provided — infer a plausible one from the evidence below and say so in humanSummary)"}

EVIDENCE CHUNKS:
${chunkList}

Return ONLY the JSON object described in the system prompt.`;

  const raw = await callClaude({ system, userContent, maxTokens: 2200 });
  return parseJsonResponse(raw);
}

// ─── AGENT 2: COACHING DESIGN STRATEGIST ───────────────────────────────────────
// Takes the Analyst's structured findings and designs the actual coaching
// intervention, rollout plan, metrics, and pitch — grounded in what the
// Analyst found.
async function runStrategistAgent({ problem, analysis }) {
  const system = `You are the Coaching Design Strategist agent inside BehaviorAI. You receive the transformation problem and a structured analysis produced by the Analyst agent. Design the actual AI coaching intervention.

Rules:
- Ground every recommendation in the analysis provided (primaryGoal, primaryConcern, primaryConstraint, behaviorBarriers, risks). Reference them concretely instead of writing generic advice.
- "confidence" and "grounding" scores (0-100) must reflect how much real evidence backs the analysis — be honest. A thin problem statement with no uploaded evidence should score modestly (roughly 40-65), not high.
- Output ONLY a single valid JSON object. No markdown code fences, no prose before or after it.

JSON schema:
{
  "coachingIntro": "1-2 sentences framing the design philosophy for this specific problem",
  "solutions": [ { "name": "...", "fit": "Core product | Behavior amplifier | Accountability layer | Control option — pick the most apt", "detail": "2-3 sentences, concrete, references the analysis", "stack": "short tech stack line" } ] (exactly 3 items),
  "timeline": [ { "phase": "e.g. Day 0 / Week 1 / Week 4 / Week 8, or your own phase labels appropriate to the scale", "title": "short title", "body": "1-2 sentences" } ] (exactly 4 items, in order),
  "metrics": ["4 to 6 concrete behavioral success metrics, specific to this problem"],
  "evals": [ { "name": "short eval name", "status": "pass" or "warn", "detail": "one sentence, grounded and honest" } ] (exactly 4 items, covering: evidence grounding quality, whether this is truly a knowing-doing behavior gap and not just content delivery, privacy/surveillance safety, and the human escalation path),
  "scores": { "confidence": 0-100, "grounding": 0-100 },
  "pitch": "one tight, room-ready paragraph pitching the design back to the stakeholder, grounded in their actual language where possible"
}`;

  const userContent = `TRANSFORMATION PROBLEM:
${problem}

ANALYST FINDINGS (JSON):
${JSON.stringify(analysis, null, 2)}

Return ONLY the JSON object described in the system prompt.`;

  const raw = await callClaude({ system, userContent, maxTokens: 2200 });
  return parseJsonResponse(raw);
}

// ─── HELPERS ────────────────────────────────────────────────────────────────
function matchSelectOption(selectEl, value) {
  if (!value) return;
  const target = String(value).trim().toLowerCase();
  const match = [...selectEl.options].find(o => o.value.trim().toLowerCase() === target);
  if (match) selectEl.value = match.value;
}

function uploadedEvidence() {
  return state.documents.filter(d => d.text.trim()).map(d => `Source: ${d.name}\n${d.text}`).join("\n\n");
}

function setRunStatus(message, tone = "neutral") {
  els.runStatus.textContent = message;
  if (tone === "neutral") els.runStatus.removeAttribute("data-tone");
  else els.runStatus.dataset.tone = tone;
}

function setRunButtonLoading(loading) {
  els.run.disabled = loading;
  els.run.textContent = loading ? "Agents working..." : "Run analysis";
  els.run.classList.toggle("is-loading", loading);
}

function resetEmptyState() {
  els.results.classList.add("hidden");
  els.empty.classList.remove("hidden");
  els.confidence.textContent = "--";
  els.grounding.textContent = "--";
  els.evalList.innerHTML = "";
  els.riskTags.innerHTML = "";
}

function handleAnalysisError(err) {
  console.error(err);
  const msg = String(err?.message || err);

  if (msg === "NO_API_KEY") {
    setRunStatus("Add your Anthropic API key in Settings to run the agentic analysis.", "warn");
    openSettingsModal();
    return;
  }
  if (msg.startsWith("API_ERROR:401")) {
    setRunStatus("Anthropic rejected the API key (401 unauthorized). Check the key in Settings.", "warn");
    return;
  }
  if (msg.startsWith("API_ERROR:429")) {
    setRunStatus("Rate limited by the Anthropic API. Wait a moment and run analysis again.", "warn");
    return;
  }
  if (msg.startsWith("API_ERROR")) {
    const detail = msg.split(":").slice(2).join(":").trim();
    setRunStatus(`Anthropic API error${detail ? `: ${detail}` : "."} Try again in a moment.`, "warn");
    return;
  }
  if (err instanceof SyntaxError || msg === "EMPTY_RESPONSE") {
    setRunStatus("The agent response could not be read. Click Run analysis to try again.", "warn");
    return;
  }
  setRunStatus(`Analysis failed: ${msg}`, "warn");
}

// ─── ANALYSIS ORCHESTRATOR (the two-agent pipeline) ────────────────────────────
async function analyze(options = {}) {
  const manual = options.manual === true;
  if (state.analyzing) return;

  let problem = els.problem.value.trim();
  const evidence = [els.evidence.value.trim(), uploadedEvidence()].filter(Boolean).join("\n\n");

  if (!problem && !evidence.trim()) {
    setRunStatus("Add a transformation challenge or upload evidence before running analysis.", "warn");
    resetEmptyState();
    if (options.focusIfMissing !== false) els.problem.focus();
    return;
  }

  if (!getApiKey()) {
    setRunStatus("Add your Anthropic API key in Settings to run the agentic analysis.", "warn");
    openSettingsModal();
    return;
  }

  state.analyzing = true;
  setRunButtonLoading(true);

  try {
    setRunStatus("Analyst agent reading evidence and identifying signals...", "neutral");
    const chunks = buildEvidenceChunks(evidence);
    const industryOptions = [...els.industry.options].map(o => o.value);
    const scaleOptions = [...els.risk.options].map(o => o.value);

    const analysis = await runAnalystAgent({ problem, chunks, industryOptions, scaleOptions });

    if (!problem) {
      problem = analysis.coreProblem || analysis.humanSummary || "Behavioral change challenge inferred from evidence.";
      els.problem.value = problem;
    }
    matchSelectOption(els.industry, analysis.industry);
    matchSelectOption(els.risk, analysis.scale);

    setRunStatus("Strategist agent designing the coaching engine and rollout plan...", "neutral");
    const strategy = await runStrategistAgent({ problem, analysis });

    const evidenceItems = (analysis.evidenceRetrieval || [])
      .map(e => {
        const chunk = chunks.find(c => c.id === e.id);
        if (!chunk) return null;
        return { id: chunk.id, text: chunk.text, score: Math.round(clamp(e.relevance ?? e.score ?? 0, 0, 10)) };
      })
      .filter(Boolean)
      .sort((a, b) => b.score - a.score)
      .slice(0, 6);

    state.report = {
      createdAt: new Date().toISOString(),
      problem,
      detectedScenario: analysis.scenarioLabel || "Behavioral change engine",
      industry: els.industry.value,
      scale: els.risk.value,
      coreProblem: analysis.coreProblem || problem,
      humanSummary: analysis.humanSummary || "",
      signals: {
        primaryGoal: analysis.primaryGoal || "",
        primaryConcern: analysis.primaryConcern || "",
        primaryConstraint: analysis.primaryConstraint || "",
      },
      stakeholders: unique(analysis.stakeholders || []).slice(0, 7),
      risks: unique(analysis.risks || []).slice(0, 6),
      tone: {
        score: clamp(analysis.tone?.score, 0, 100),
        label: analysis.tone?.label || "",
      },
      behaviorBarriers: (analysis.behaviorBarriers || []).slice(0, 6),
      doNotAutomate: unique(analysis.doNotAutomate || []).slice(0, 5),
      coachingIntro: strategy.coachingIntro || "",
      evidence: evidenceItems,
      solutions: (strategy.solutions || []).slice(0, 3),
      timeline: (strategy.timeline || []).slice(0, 4),
      metrics: unique(strategy.metrics || []).slice(0, 6),
      evals: (strategy.evals || []).slice(0, 4),
      scores: {
        confidence: clamp(strategy.scores?.confidence, 0, 100),
        grounding: clamp(strategy.scores?.grounding, 0, 100),
      },
      pitch: strategy.pitch || "",
      sources: state.documents.map(d => ({ name: d.name, type: d.type, status: d.status, characters: d.text.length })),
    };

    renderReport(state.report);
    if (manual) activateTab("human");

    const srcCount = state.documents.filter(d => d.text.trim()).length;
    setRunStatus(
      `${state.report.detectedScenario} — analysis complete at ${new Date().toLocaleTimeString()} — ${srcCount} source${srcCount === 1 ? "" : "s"} · ${state.report.scale} · confidence: ${state.report.scores.confidence}%`,
      "success",
    );
  } catch (err) {
    handleAnalysisError(err);
  } finally {
    state.analyzing = false;
    setRunButtonLoading(false);
  }
}

// ─── RENDERING ────────────────────────────────────────────────────────────────
function renderReport(r) {
  els.empty.classList.add("hidden");
  els.results.classList.remove("hidden");

  els.coreProblem.textContent = r.coreProblem;
  els.humanSummary.textContent = r.humanSummary ||
    [r.detectedScenario,
     r.signals.primaryGoal ? `Behavior goal: ${shorten(r.signals.primaryGoal, 90)}.` : "",
     r.signals.primaryConcern ? `Human concern: ${shorten(r.signals.primaryConcern, 90)}.` : "",
    ].filter(Boolean).join(" ");

  els.toneMeter.style.width = `${r.tone.score}%`;
  els.toneLabel.textContent = r.tone.label;

  els.stakeholders.innerHTML = r.stakeholders.length
    ? r.stakeholders.map(s => chip(s)).join("")
    : chip("No stakeholders detected — add evidence");

  els.doNotAutomate.innerHTML = r.doNotAutomate.length
    ? r.doNotAutomate.map(i => `<li>${escapeHtml(i)}</li>`).join("")
    : `<li class="muted">No explicit constraints detected — upload evidence files with guardrail language.</li>`;

  els.behaviorBarriers.innerHTML = r.behaviorBarriers.length
    ? r.behaviorBarriers.map(b => `
        <div class="barrier-item">
          <strong>${escapeHtml(b.barrier)}</strong>
          <p>${escapeHtml(b.description)}</p>
          ${b.evidenceHit ? `<span class="barrier-hit">detected: ${escapeHtml(b.evidenceHit)}</span>` : ""}
        </div>
      `).join("")
    : `<div class="barrier-item barrier-empty"><p>No specific barriers detected yet — add a problem statement or upload evidence files.</p></div>`;

  els.evidenceList.innerHTML = r.evidence.length
    ? r.evidence.map(item => `
        <article class="evidence-item">
          <strong>${escapeHtml(item.id)} — relevance ${item.score}</strong>
          <p>${escapeHtml(item.text)}</p>
        </article>
      `).join("")
    : `<article class="evidence-item"><strong>No evidence retrieved</strong><p>Add listening data, survey results, or manager observations to ground the coaching design.</p></article>`;

  els.coachingIntro.textContent = r.coachingIntro;
  els.solutionCards.innerHTML = r.solutions.map(sol => `
    <article class="result-card solution-card">
      <span class="fit">${escapeHtml(sol.fit)}</span>
      <h3>${escapeHtml(sol.name)}</h3>
      <p class="muted">${escapeHtml(sol.detail)}</p>
      <p><strong>Stack:</strong> ${escapeHtml(sol.stack)}</p>
    </article>
  `).join("");

  els.timeline.innerHTML = r.timeline.map(item => `
    <article class="timeline-item">
      <span>${escapeHtml(item.phase)}</span>
      <div>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.body)}</p>
      </div>
    </article>
  `).join("");

  els.metrics.innerHTML = r.metrics.map(m => `<li>${escapeHtml(m)}</li>`).join("");
  els.pitch.textContent = r.pitch;

  els.confidence.textContent = `${r.scores.confidence}%`;
  els.grounding.textContent  = `${r.scores.grounding}%`;
  els.evalList.innerHTML = r.evals.map(evalRow).join("");
  els.riskTags.innerHTML = r.risks.map(risk => chip(risk, "risk-tag")).join("");
}

function evalRow(item) {
  const mark = item.status === "pass" ? "OK" : item.status === "warn" ? "!" : "x";
  return `
    <div class="eval-row ${escapeHtml(item.status)}">
      <span>${mark}</span>
      <div>
        <strong>${escapeHtml(item.name)}</strong>
        <small>${escapeHtml(item.detail)}</small>
      </div>
    </div>
  `;
}

// ─── DEMO / CLEAR / FILE ACTIONS ──────────────────────────────────────────────
function loadDemo() {
  els.problem.value  = demoProblem;
  els.evidence.value = demoEvidence;
  els.industry.value = "AI upskilling & transformation";
  els.risk.value     = "Global (5,000+ employees)";
  state.documents    = [];
  els.file.value     = "";
  els.fileStatus.textContent = "Demo evidence loaded";
  renderSources();
  analyze({ manual: true });
}

function isDemoLoaded() {
  return els.problem.value.trim() === demoProblem && els.evidence.value.trim() === demoEvidence;
}

function clearAll() {
  state.report = null;
  state.documents = [];
  els.problem.value  = "";
  els.evidence.value = "";
  els.file.value     = "";
  els.fileStatus.textContent = "TXT, PDF, CSV, JSON, or MD";
  renderSources();
  resetEmptyState();
  setRunStatus("Cleared. Add a transformation challenge or upload evidence to begin.");
}

async function readFiles(files) {
  const selected = [...files];
  if (!selected.length) return;
  els.fileStatus.textContent = "Reading files...";
  if (isDemoLoaded()) { els.problem.value = ""; els.evidence.value = ""; }
  state.documents = await Promise.all(selected.map(parseUploadedFile));
  renderSources();
  const parsedCount = state.documents.filter(d => d.status === "parsed").length;
  els.fileStatus.textContent = `${parsedCount} of ${selected.length} file${selected.length === 1 ? "" : "s"} parsed`;
  setRunStatus(`${parsedCount} source${parsedCount === 1 ? "" : "s"} ready. Click Run analysis to have the agents read them.`);
}

async function parseUploadedFile(file) {
  const ext  = file.name.split(".").pop().toLowerCase();
  const base = { name: file.name, type: ext.toUpperCase(), size: file.size, text: "", status: "parsed", note: "Ready" };
  try {
    if (ext === "pdf") {
      const text = extractPdfText(await file.arrayBuffer());
      return text
        ? { ...base, text, note: "PDF text extracted" }
        : { ...base, status: "warning", note: "No readable text found. Paste content instead." };
    }
    const raw = await file.text();
    if (ext === "json") return { ...base, text: JSON.stringify(JSON.parse(raw), null, 2), note: "JSON formatted" };
    return { ...base, text: raw, note: "Text loaded" };
  } catch (err) {
    return { ...base, status: "warning", note: err.message || "Could not parse file" };
  }
}

function extractPdfText(buffer) {
  const raw = new TextDecoder("latin1").decode(buffer);
  const snippets = [];
  for (const m of raw.matchAll(/(\((?:\\.|[^\\)])*\))\s*Tj/g)) snippets.push(decodePdfString(m[1]));
  for (const m of raw.matchAll(/\[((?:.|\n|\r){0,3000}?)\]\s*TJ/g)) {
    for (const s of m[1].matchAll(/\((?:\\.|[^\\)])*\)/g)) snippets.push(decodePdfString(s[0]));
  }
  return snippets.map(t => t.trim()).filter(t => t.length > 1).join("\n");
}

function decodePdfString(token) {
  return token.slice(1, -1)
    .replace(/\\([0-7]{1,3})/g, (_, o) => String.fromCharCode(parseInt(o, 8)))
    .replace(/\\n/g, "\n").replace(/\\r/g, "\n").replace(/\\t/g, "\t")
    .replace(/\\b/g, "\b").replace(/\\f/g, "\f")
    .replace(/\\\(/g, "(").replace(/\\\)/g, ")").replace(/\\\\/g, "\\");
}

function renderSources() {
  els.sourceList.innerHTML = state.documents.map(doc => {
    const preview = doc.text ? doc.text.replace(/\s+/g, " ").slice(0, 130) : doc.note;
    return `
      <article class="source-card">
        <header>
          <strong title="${escapeHtml(doc.name)}">${escapeHtml(doc.name)}</strong>
          <span class="source-status ${doc.status === "parsed" ? "" : "warn"}">${escapeHtml(doc.status)}</span>
        </header>
        <small>${escapeHtml(doc.type)} — ${formatBytes(doc.size)} — ${escapeHtml(doc.note)}</small>
        <p>${escapeHtml(preview)}</p>
      </article>
    `;
  }).join("");
}

async function copyPitch() {
  if (!state.report) return;
  await navigator.clipboard.writeText(state.report.pitch);
  els.copy.setAttribute("title", "Copied!");
  setTimeout(() => els.copy.setAttribute("title", "Copy pitch"), 1400);
}

function exportReport() {
  if (!state.report) return;
  const blob = new Blob([JSON.stringify(state.report, null, 2)], { type: "application/json" });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement("a");
  a.href = url; a.download = "behaviorai-report.json";
  document.body.appendChild(a); a.click(); a.remove();
  URL.revokeObjectURL(url);
}

function activateTab(tabName) {
  document.querySelectorAll(".tab").forEach(t => t.classList.toggle("active", t.dataset.tab === tabName));
  document.querySelectorAll(".tab-panel").forEach(p => p.classList.toggle("active", p.dataset.panel === tabName));
}

// ─── SETTINGS MODAL ─────────────────────────────────────────────────────────
function populateModelSelect() {
  if (!els.settingsModelSelect) return;
  els.settingsModelSelect.innerHTML = MODEL_OPTIONS.map(
    m => `<option value="${escapeHtml(m.id)}">${escapeHtml(m.label)}</option>`
  ).join("");
}

function updateLlmStatusPill() {
  if (!els.llmStatusPill) return;
  const connected = !!getApiKey();
  els.llmStatusPill.textContent = connected ? "Agents: connected" : "Agents: add API key";
  els.llmStatusPill.classList.toggle("connected", connected);
}

function openSettingsModal() {
  if (!els.settingsModal) return;
  els.settingsKeyInput.value = getApiKey();
  els.settingsModelSelect.value = getModel();
  els.settingsModal.classList.remove("hidden");
  els.settingsKeyInput.focus();
}

function closeSettingsModal() {
  els.settingsModal?.classList.add("hidden");
}

function saveSettings() {
  const key = els.settingsKeyInput.value.trim();
  const model = els.settingsModelSelect.value;
  setApiKey(key);
  setModel(model);
  updateLlmStatusPill();
  closeSettingsModal();
  setRunStatus(
    key ? "API key saved in this browser's local storage. Ready to run analysis." : "API key cleared.",
    key ? "success" : "neutral",
  );
}

function clearSettingsKey() {
  els.settingsKeyInput.value = "";
}

// ─── BOOT ─────────────────────────────────────────────────────────────────────
function initializeApp() {
  renderSources();
  populateModelSelect();
  updateLlmStatusPill();
  if (getApiKey()) {
    setRunStatus("Ready. Click 'Load Greg demo' to see the agentic engine in action, or enter your own challenge.");
  } else {
    setRunStatus("Add your Anthropic API key in Settings to enable the agentic analysis engine.", "warn");
  }
}

els.run.addEventListener("click",    () => analyze({ manual: true }));
els.demo.addEventListener("click",   loadDemo);
els.clear.addEventListener("click",  clearAll);
els.copy.addEventListener("click",   copyPitch);
els.export.addEventListener("click", exportReport);
els.file.addEventListener("change",  e => readFiles(e.target.files));
document.querySelectorAll(".tab").forEach(tab => tab.addEventListener("click", () => activateTab(tab.dataset.tab)));

els.settingsButton?.addEventListener("click", openSettingsModal);
els.settingsClose?.addEventListener("click", closeSettingsModal);
els.settingsBackdrop?.addEventListener("click", closeSettingsModal);
els.settingsSave?.addEventListener("click", saveSettings);
els.settingsClear?.addEventListener("click", clearSettingsKey);
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && !els.settingsModal?.classList.contains("hidden")) closeSettingsModal();
});

initializeApp();
