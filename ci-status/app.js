const statusUrl = document.currentScript?.dataset.statusUrl || "data/status.json";

function formatDuration(seconds) {
  if (seconds === null || seconds === undefined) return "-";
  if (seconds < 60) return `${seconds}s`;
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  if (minutes < 60) return remainingSeconds ? `${minutes}m ${remainingSeconds}s` : `${minutes}m`;
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return remainingMinutes ? `${hours}h ${remainingMinutes}m` : `${hours}h`;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function metric(label, value, detail) {
  return `
    <article class="metric">
      <div class="label">${escapeHtml(label)}</div>
      <div class="value">${escapeHtml(value)}</div>
      <div class="detail">${escapeHtml(detail || "")}</div>
    </article>
  `;
}

function renderSummary(data) {
  const summary = data.summary || {};
  const queued = summary.queued_jobs || {};
  const progress = summary.in_progress_jobs || {};
  const runners = summary.self_hosted_runners || {};
  const recent = summary.recent || {};
  const queue = recent.queue_seconds || {};
  const successRate = recent.success_rate === null || recent.success_rate === undefined
    ? "-"
    : `${Math.round(recent.success_rate * 100)}%`;

  document.getElementById("summary").innerHTML = [
    metric("Queued", queued.total ?? 0, Object.entries(queued.by_label || {}).map(([k, v]) => `${k}: ${v}`).join(" | ")),
    metric("In Progress", progress.total ?? 0, Object.entries(progress.by_label || {}).map(([k, v]) => `${k}: ${v}`).join(" | ")),
    metric("Self-hosted Idle", runners.idle ?? "-", `${runners.online ?? "-"} online / ${runners.total ?? "-"} total`),
    metric("Recent Success", successRate, `${recent.sample_size ?? 0} completed jobs sampled`),
    metric("Queue p95", formatDuration(queue.p95), `p50 ${formatDuration(queue.p50)} | max ${formatDuration(queue.max)}`),
  ].join("");
}

function renderWarnings(data) {
  const warnings = data.warnings || [];
  const target = document.getElementById("warnings");
  if (!warnings.length) {
    target.innerHTML = "";
    return;
  }
  target.innerHTML = `
    <div class="warning-list">
      ${warnings.map((warning) => `
        <div class="warning ${warning.level === "notice" ? "notice" : ""}">
          ${warning.url ? `<a href="${escapeHtml(warning.url)}">` : ""}
          ${escapeHtml(warning.message)}
          ${warning.url ? "</a>" : ""}
        </div>
      `).join("")}
    </div>
  `;
}

function renderRunnerPools(data) {
  const pools = data.self_hosted?.pools || [];
  const target = document.getElementById("runner-pools");
  const githubHosted = `
    <article class="panel">
      <h3>GitHub-hosted</h3>
      <p class="job-meta">${escapeHtml(data.github_hosted?.note || "")}</p>
      <div class="pool-stats">
        <div class="pool-stat"><b>Inferred</b><span>capacity</span></div>
        <div class="pool-stat"><b>${escapeHtml(data.summary?.queued_jobs?.by_label?.["ubuntu-latest"] ?? 0)}</b><span>ubuntu queue</span></div>
        <div class="pool-stat"><b>${escapeHtml(data.summary?.queued_jobs?.by_label?.["macos-latest"] ?? 0)}</b><span>macOS queue</span></div>
        <div class="pool-stat"><b>${escapeHtml(data.summary?.queued_jobs?.by_label?.["windows-latest"] ?? 0)}</b><span>Windows queue</span></div>
      </div>
    </article>
  `;

  const poolCards = pools.map((pool) => `
    <article class="panel">
      <h3>${escapeHtml(pool.label)}</h3>
      <div class="pool-stats">
        <div class="pool-stat"><b>${escapeHtml(pool.idle)}</b><span>idle</span></div>
        <div class="pool-stat"><b>${escapeHtml(pool.busy)}</b><span>busy</span></div>
        <div class="pool-stat"><b>${escapeHtml(pool.online)}</b><span>online</span></div>
        <div class="pool-stat"><b>${escapeHtml(pool.offline)}</b><span>offline</span></div>
      </div>
    </article>
  `);

  target.innerHTML = [...poolCards, githubHosted].join("") || githubHosted;
}

function outcomeClass(job) {
  const conclusion = job.conclusion || job.status;
  if (conclusion === "success") return "success";
  if (["failure", "timed_out", "action_required"].includes(conclusion)) return "failure";
  if (["cancelled", "skipped", "neutral"].includes(conclusion)) return "cancelled";
  return "neutral";
}

function renderJobs(targetId, jobs, options = {}) {
  const target = document.getElementById(targetId);
  if (!jobs || !jobs.length) {
    target.innerHTML = `<div class="empty">${escapeHtml(options.empty || "No jobs in this bucket.")}</div>`;
    return;
  }

  const rows = jobs.map((job) => {
    const waitOrDuration = job.status === "queued"
      ? formatDuration(job.queued_seconds)
      : formatDuration(job.duration_seconds);
    const runner = job.runner_name || (job.status === "queued" ? "unassigned" : "-");
    const status = job.conclusion || job.status;
    return `
      <tr>
        <td>
          <div class="job-name"><a href="${escapeHtml(job.url || job.run_url || "#")}">${escapeHtml(job.name)}</a></div>
          <div class="job-meta">${escapeHtml(job.workflow_name || "")} | ${escapeHtml(job.head_branch || "")} | ${escapeHtml(job.head_sha || "")}</div>
        </td>
        <td><span class="pill">${escapeHtml(job.primary_label || "-")}</span></td>
        <td>${escapeHtml(runner)}</td>
        <td class="${outcomeClass(job)}">${escapeHtml(status)}</td>
        <td>${escapeHtml(waitOrDuration)}</td>
      </tr>
    `;
  }).join("");

  target.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>Job</th>
          <th>Label</th>
          <th>Runner</th>
          <th>Status</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  `;
}

async function load() {
  try {
    const response = await fetch(`${statusUrl}?t=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();

    renderSummary(data);
    renderWarnings(data);
    renderRunnerPools(data);
    renderJobs("queued-jobs", data.jobs?.queued, { empty: "No queued jobs." });
    renderJobs("in-progress-jobs", data.jobs?.in_progress, { empty: "No in-progress jobs." });
    renderJobs("gpu-jobs", data.jobs?.latest_gpu, { empty: "No recent CUDA/GPU jobs in the sample." });
    renderJobs("recent-jobs", data.jobs?.recent_completed, { empty: "No completed jobs in the sample." });

    document.getElementById("generated-at").textContent = `Generated ${data.generated_at}`;
  } catch (error) {
    if (statusUrl !== "data/status.json") {
      try {
        const response = await fetch(`data/status.json?t=${Date.now()}`, { cache: "no-store" });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();
        renderSummary(data);
        renderWarnings(data);
        renderRunnerPools(data);
        renderJobs("queued-jobs", data.jobs?.queued, { empty: "No queued jobs." });
        renderJobs("in-progress-jobs", data.jobs?.in_progress, { empty: "No in-progress jobs." });
        renderJobs("gpu-jobs", data.jobs?.latest_gpu, { empty: "No recent CUDA/GPU jobs in the sample." });
        renderJobs("recent-jobs", data.jobs?.recent_completed, { empty: "No completed jobs in the sample." });
        document.getElementById("generated-at").textContent = `Generated ${data.generated_at}`;
        return;
      } catch (fallbackError) {
        document.getElementById("summary").innerHTML = `<div class="error">Failed to load dashboard data: ${escapeHtml(error.message)}; fallback failed: ${escapeHtml(fallbackError.message)}</div>`;
        return;
      }
    }
    document.getElementById("summary").innerHTML = `<div class="error">Failed to load dashboard data: ${escapeHtml(error.message)}</div>`;
  }
}

load();
