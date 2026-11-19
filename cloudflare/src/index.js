const OWNER = "imu31465";
const ENTRIES_REPO = "Bloxd-Entries-Data";
const MONITOR_REPO = "Bloxd-Build-Monitor";
const API = "https://api.github.com";
const RAW = "https://raw.githubusercontent.com";
const UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36";
const BOT_NAME = "Bloxd Monitor";
const HOSTS = ["bloxd.io", "preprod.bloxd.io", "staging.bloxd.io"];

const COLORS = {
  blue: 0x3498db,
  orange: 0xe67e22,
  gray: 0x95a5a6,
  red: 0xe74c3c,
  green: 0x2ecc71,
  purple: 0x9b59b6,
};

const CONFIG = {
  updateLogForceMinutes: 60,
  maxChunkFetches: 50,
  chunkBatchSize: 5,
  chunkFallbackPerRun: 1,
  chunkWalkCooldownMs: 6 * 60 * 60 * 1000,
  socialShardCount: 29,
  socialProbesPerRun: 5,
  socialEveryRuns: 3,
  downAlertThreshold: 2,
  probeSlowMs: 12000,
  singleAlertMinutes: 5,
  blipCooldownMinutes: 30,
  blockAlertMinutes: 60,
  reAlertMinutes: 30,
  homeDownAlertThreshold: 2,
  requestTimeoutMs: 15000,
  stateTtlSeconds: 60 * 60 * 24 * 180,
};

const KV = {
  ops: "v3:ops",
  production: "v3:update:production",
  preprod: "v3:update:preprod",
  entriesData: "v3:entries:data",
  entriesWorkflowRuns: "v3:entries:workflow-runs",
  buildWorkflowRuns: "v3:build:workflow-runs",
};

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function truncate(value, length) {
  const text = String(value ?? "");
  return text.length > length ? text.slice(0, length - 1) + "…" : text;
}

export function safeEndpoint(value) {
  try {
    const url = new URL(String(value));
    let path = url.pathname;
    if ((url.hostname === "discord.com" || url.hostname === "discordapp.com") &&
        path.startsWith("/api/webhooks/")) {
      path = "/api/webhooks/[redacted]";
    }
    return url.origin + path;
  } catch {
    return truncate(String(value).split("?")[0], 180);
  }
}

export function entriesDiffNotification(updateState) {
  if (!updateState?.lastRunAt) return null;
  const diff = updateState.lastDiff || {};
  if (diff.firstRun) return null;

  const countKeys = ["added", "removed", "idChanged", "entryFilesChanged"];
  const hasCompleteDiff = countKeys.every(key =>
    diff[key] !== undefined && diff[key] !== null && diff[key] !== "" &&
    Number.isFinite(Number(diff[key])),
  );
  if (!hasCompleteDiff) return null;

  const added = Math.max(0, Number(diff.added) || 0);
  const removed = Math.max(0, Number(diff.removed) || 0);
  const idChanged = Math.max(0, Number(diff.idChanged) || 0);
  const propertyFiles = Math.max(0, Number(diff.entryFilesChanged) || 0);
  const hasChanges = added + removed + idChanged + propertyFiles > 0;
  const hasRegistryChanges = added + removed + idChanged > 0;
  const title = !hasChanges
    ? "ブロック・アイテム変更なし"
    : hasRegistryChanges
      ? (propertyFiles ? "エントリ・プロパティ更新" : "エントリ更新")
      : "プロパティ更新";
  const lines = [
    Number.isFinite(Number(diff.prevCount)) && Number.isFinite(Number(diff.nextCount))
      ? "Entries: " + Number(diff.prevCount).toLocaleString("ja-JP") +
        " → " + Number(diff.nextCount).toLocaleString("ja-JP") + "件"
      : null,
  ];
  if (!hasChanges) {
    lines.push("ブロック・アイテムの追加・削除・ID変更・プロパティ変更はありません");
  } else {
    if (hasRegistryChanges) {
      lines.push("追加 " + added + " · 削除 " + removed + " · ID変更 " + idChanged);
    }
    if (propertyFiles) lines.push("プロパティ変更 " + propertyFiles + "ファイル");
  }
  const timestamp = Date.parse(updateState.lastRunAt);
  if (Number.isFinite(timestamp)) lines.push("抽出: " + formatDate(timestamp));
  return { signature: String(updateState.lastRunAt), title, description: lines.filter(Boolean).join("\n") };
}

export function buildDiscordPayload(embed) {
  return {
    username: BOT_NAME,
    embeds: [embed],
    allowed_mentions: { parse: [] },
  };
}

function normalizedWorkflowFailureState(state = {}) {
  const pending = Array.from(new Set(
    (Array.isArray(state.pending) ? state.pending : [])
      .map(Number)
      .filter(id => Number.isSafeInteger(id) && id > 0),
  )).sort((a, b) => a - b).slice(-30);
  return {
    initialized: state.initialized === true,
    baselineRunId: Math.max(0, Number(state.baselineRunId) || 0),
    pending,
  };
}

export function workflowFailureStateChanged(previous, next) {
  return JSON.stringify(normalizedWorkflowFailureState(previous)) !==
    JSON.stringify(normalizedWorkflowFailureState(next));
}

export function describeFailure(error, task = "監視全体") {
  const message = truncate(error?.message || error, 300);
  const statusMatch = message.match(/\bHTTP\s+(\d{3})\b/);
  const urlMatch = message.match(/https?:\/\/[^\s)>]+/);
  const endpoint = urlMatch
    ? safeEndpoint(urlMatch[0].replace(/[),.;]+$/, ""))
    : (/Discord webhook/i.test(message) ? "Discord webhook" : null);
  return {
    task,
    message,
    status: statusMatch ? Number(statusMatch[1]) : null,
    endpoint,
  };
}

function makeEmbed(title, description, color) {
  return {
    title: truncate(title, 256),
    description: truncate(description || "", 4000),
    color,
  };
}

async function getState(env, key, fallback = {}) {
  const raw = await env.NOTIFICATION_STATE.get(key);
  if (!raw) return structuredClone(fallback);
  try {
    return JSON.parse(raw);
  } catch {
    console.error("KV state JSON is invalid: " + key);
    return structuredClone(fallback);
  }
}

async function putState(env, key, value) {
  await env.NOTIFICATION_STATE.put(key, JSON.stringify(value), {
    expirationTtl: CONFIG.stateTtlSeconds,
  });
}

export async function getText(url, headers = {}, timeoutMs = CONFIG.requestTimeoutMs) {
  const target = safeEndpoint(url);
  const maxAttempts = 2;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    let response;
    try {
      response = await fetch(url, {
        headers: {
          "User-Agent": UA,
          "Accept": "text/html,application/javascript,application/json,*/*;q=0.8",
          "Cache-Control": "no-cache",
          ...headers,
        },
        cache: "no-store",
        signal: AbortSignal.timeout(timeoutMs),
      });
    } catch (error) {
      if (attempt < maxAttempts) {
        console.warn("GET retry after network error: " + target + " (attempt " + attempt + ")");
        await sleep(500);
        continue;
      }
      throw new Error("GET " + target + " network error: " +
        truncate(error?.message || error, 160));
    }

    if (!response.ok) {
      const retryable = response.status === 408 || response.status === 425 ||
        response.status === 429 || response.status >= 500;
      if (retryable && attempt < maxAttempts) {
        let delayMs = 500;
        const retryAfter = Number(response.headers.get("retry-after"));
        if (Number.isFinite(retryAfter) && retryAfter > 0) {
          delayMs = Math.min(3000, Math.max(delayMs, retryAfter * 1000));
        }
        try {
          await response.body?.cancel();
        } catch {}
        console.warn(
          "GET retry after HTTP " + response.status + ": " + target +
          " (attempt " + attempt + ")",
        );
        await sleep(delayMs);
        continue;
      }

      let detail = "";
      try {
        detail = truncate((await response.text()).replace(/\\s+/g, " "), 160);
      } catch {}
      throw new Error("HTTP " + response.status + " GET " + target +
        (detail ? ": " + detail : ""));
    }

    try {
      return await response.text();
    } catch (error) {
      if (attempt < maxAttempts) {
        console.warn("GET retry after response-body error: " + target + " (attempt " + attempt + ")");
        await sleep(500);
        continue;
      }
      throw new Error("GET " + target + " response body error: " +
        truncate(error?.message || error, 160));
    }
  }

  throw new Error("GET " + target + " failed after retry");
}

async function getOptionalText(url, timeoutMs = 7000) {
  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent": UA,
        "Accept": "application/javascript,*/*;q=0.8",
        "Cache-Control": "no-cache",
      },
      cache: "no-store",
      signal: AbortSignal.timeout(timeoutMs),
    });
    if (!response.ok) return null;
    const text = await response.text();
    return text || null;
  } catch {
    return null;
  }
}

async function getJson(url, headers = {}) {
  const text = await getText(url, headers);
  try {
    return JSON.parse(text);
  } catch (error) {
    throw new Error("Invalid JSON from GET " + safeEndpoint(url) + ": " +
      truncate(error?.message || error, 120));
  }
}

async function readRepoJson(repo, path) {
  return getJson(RAW + "/" + OWNER + "/" + repo + "/main/" + path);
}

function githubHeaders(token) {
  return {
    Authorization: "Bearer " + token,
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "User-Agent": "bloxd-build-dispatcher/3.0",
  };
}

export function mainJsName(html) {
  const match = String(html || "").match(/\/static\/js\/([a-z0-9]+\.main\.[0-9a-f]{8}\.js)/i);
  return match ? match[1] : null;
}

function bundleFilename(url) {
  try {
    return new URL(url).pathname.split("/").pop() || url;
  } catch {
    return url || "unknown";
  }
}

function buildLabel(url) {
  const filename = bundleFilename(url);
  const match = filename.match(/^(.+?)\.main\.([^.]+)\.js$/);
  return match ? match[1] + "." + match[2] : filename;
}

function buildId(mainName) {
  return (String(mainName || "").match(/^([a-z0-9]+)\.main\./i) || [])[1] || "";
}

async function fetchHome(host) {
  try {
    const html = await getText("https://" + host + "/", {
      "Accept": "text/html,application/xhtml+xml,*/*;q=0.8",
    });
    const name = mainJsName(html);
    if (!name) {
      console.error(JSON.stringify({
        event: "home_probe_invalid_html",
        host,
        status: 200,
        detail: "main bundle filename not found",
      }));
      return { ok: false, status: 200, host, html, mainName: null, url: null };
    }
    return {
      ok: true,
      status: 200,
      host,
      html,
      mainName: name,
      url: "https://" + host + "/static/js/" + name,
    };
  } catch (error) {
    const match = String(error).match(/HTTP (\d+)/);
    const status = match ? Number(match[1]) : 0;
    console.error(JSON.stringify({
      event: "home_probe_failed",
      host,
      status,
      error: truncate(error?.message || error, 240),
    }));
    return {
      ok: false,
      status,
      host,
      html: "",
      mainName: null,
      url: null,
      error: String(error),
    };
  }
}

function mapFrom(source) {
  const map = {};
  const regex = /(\d+):"([0-9a-f]{8})"/gi;
  let match;
  while ((match = regex.exec(source)) !== null) {
    if (!map[match[1]]) map[match[1]] = match[2];
  }
  return Object.keys(map).length ? map : null;
}

function extractChunkHashMap(mainJs) {
  const match = mainJs.match(
    /"static\/js\/([a-z0-9]+)\."\+\(\{([^{}]*)\}\[\w+\]\|\|\w+\)\+"\."\+\{([^{}]*)\}\[\w+\]\+"\.chunk\.js/i,
  );
  if (match) return mapFrom(match[3]);
  return mapFrom(mainJs);
}

export function resolveUpdateLogChunkId(mainJs) {
  if (!mainJs) return null;
  const index = mainJs.indexOf("updateLogsData");
  if (index < 0) return null;
  const segment = mainJs.slice(Math.max(0, index - 400), index + 100);
  const match = segment.match(/\.e\((\d{1,3})\)\s*\.then/);
  return match ? match[1] : null;
}

export function buildVarDateTable(mainJs, now = Date.now()) {
  if (!mainJs) return null;
  const regex = /[A-Za-z$_][\w$]*\.d\([A-Za-z$_][\w$]*,\{(\w+):\(\)=>([A-Za-z$_][\w$]*)\}\);const \2=new Date\("([^"]+)"\)\}/g;
  const table = {};
  const ambiguous = {};
  let match;
  while ((match = regex.exec(mainJs)) !== null) {
    const prop = match[1];
    if (table[prop] && table[prop] !== match[3]) ambiguous[prop] = true;
    table[prop] = match[3];
  }
  for (const prop of Object.keys(ambiguous)) delete table[prop];
  for (const prop of Object.keys(table)) {
    const timestamp = new Date(table[prop]).getTime();
    if (!Number.isFinite(timestamp) || Math.abs(timestamp - now) > 180 * 86400000) {
      delete table[prop];
    }
  }
  return Object.keys(table).length ? table : null;
}

function unescapeJs(value) {
  try {
    return JSON.parse('"' + value + '"');
  } catch {
    return value;
  }
}

export function parseUpdateLogs(js, mainJs, now = Date.now()) {
  const entries = [];
  const dateTable = buildVarDateTable(mainJs, now);
  const regex = /date:(new Date\("([^"]+)"\)|[A-Za-z$_][\w$]*(?:\.[A-Za-z$_][\w$]*)*),title:"((?:[^"\\]|\\.)*)"/g;
  let match;
  while ((match = regex.exec(js)) !== null) {
    let date = match[2] || "";
    if (!date && dateTable) {
      const property = match[1].split(".").pop();
      if (dateTable[property]) date = dateTable[property];
    }
    let tail = js.slice(match.index, match.index + 4000);
    const cut = tail.indexOf(",{author:", 10);
    if (cut > 0) tail = tail.slice(0, cut);
    const descriptionMatch = tail.match(/description:"((?:[^"\\]|\\.)*)"/);
    entries.push({
      date,
      title: unescapeJs(match[3]),
      description: descriptionMatch ? unescapeJs(descriptionMatch[1]) : "",
    });
  }
  return entries.length ? entries : null;
}

async function collectUpdateLogs(host, home, state) {
  try {
    if (!home?.ok || !home.url) {
      return { entries: null, error: "ホームページ取得失敗（HTTP " + (home?.status || 0) + "）", state };
    }
    const mainJs = await getText(home.url, {
      "Accept": "application/javascript,*/*;q=0.8",
    });
    const chunkMap = extractChunkHashMap(mainJs);
    if (!chunkMap) {
      return { entries: null, error: "チャンクマップ抽出失敗", state };
    }

    const resolved = resolveUpdateLogChunkId(mainJs);
    const primaryIds = [];
    if (resolved && chunkMap[resolved]) primaryIds.push(String(resolved));
    if (chunkMap["100"] && !primaryIds.includes("100")) primaryIds.push("100");

    const now = Date.now();
    const inCooldown = now < Number(state.walkCoolUntil || 0);
    const build = home.mainName;
    if (state.walkBuild !== build) {
      state.walkBuild = build;
      state.walkCursor = 0;
      state.walkCoolUntil = 0;
    }

    const maximumFallback = Math.max(0, CONFIG.maxChunkFetches - primaryIds.length);
    const fallbackOrder = Object.keys(chunkMap)
      .filter(id => !primaryIds.includes(id))
      .slice(0, maximumFallback);
    const cursor = Math.min(Number(state.walkCursor || 0), fallbackOrder.length);
    const fallbackLimit = inCooldown
      ? 0
      : Math.min(CONFIG.chunkFallbackPerRun, Math.max(0, fallbackOrder.length - cursor));
    const ids = primaryIds.concat(fallbackOrder.slice(cursor, cursor + fallbackLimit));

    let chunk = null;
    for (const id of ids) {
      const url = "https://" + host + "/static/js/" + buildId(home.mainName) + "." +
        id + "." + chunkMap[id] + ".chunk.js";
      const text = await getOptionalText(url);
      if (text && text.includes("updateLogsData")) {
        chunk = text;
        break;
      }
    }

    if (!chunk) {
      if (!inCooldown && fallbackLimit > 0) {
        state.walkCursor = cursor + fallbackLimit;
        if (state.walkCursor >= fallbackOrder.length) {
          state.walkCursor = 0;
          state.walkCoolUntil = now + CONFIG.chunkWalkCooldownMs;
          console.log(host + ": fallback Update Log scan exhausted; cooling down for six hours");
        } else {
          console.log(host + ": Update Log fallback scan progress " +
            state.walkCursor + "/" + fallbackOrder.length);
        }
      }
      const reason = inCooldown
        ? "チャンク走査クールダウン中"
        : "Update Logチャンク未発見（次回実行で探索を継続）";
      return {
        entries: null,
        error: reason + "（解決先 " + (resolved || "?") + "、今回 " + ids.length + " 件確認）",
        state,
      };
    }

    const entries = parseUpdateLogs(chunk, mainJs);
    if (!entries) {
      return { entries: null, error: "エントリ抽出0件", state };
    }
    state.walkCursor = 0;
    state.walkCoolUntil = 0;
    return { entries, error: "", state };
  } catch (error) {
    return {
      entries: null,
      error: "解析例外: " + truncate(error?.message || error, 240),
      state,
    };
  }
}

function entryKey(entry) {
  return String(entry.date || "") + "|" + String(entry.title || "");
}

function formatDate(value) {
  const timestamp = value instanceof Date ? value.getTime() : new Date(value).getTime();
  if (!Number.isFinite(timestamp)) return String(value || "日付未記載");
  return new Intl.DateTimeFormat("ja-JP", {
    timeZone: "Asia/Tokyo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(new Date(timestamp));
}

function formatDuration(ms) {
  const seconds = Math.max(0, Math.round(ms / 1000));
  if (seconds < 60) return seconds + "秒";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return minutes + "分" + (seconds % 60 ? seconds % 60 + "秒" : "");
  const hours = Math.floor(minutes / 60);
  return hours + "時間" + (minutes % 60 ? minutes % 60 + "分" : "");
}

function formatDelay(minutes) {
  if (minutes < 60) return minutes + "分";
  const hours = Math.floor(minutes / 60);
  return hours + "時間" + (minutes % 60 ? minutes % 60 + "分" : "");
}

function capObject(object, maximum) {
  const keys = Object.keys(object).sort();
  while (keys.length > maximum) {
    delete object[keys.shift()];
  }
  return object;
}

function githubHeadersForDispatch(token) {
  return {
    Authorization: "Bearer " + token,
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "User-Agent": "bloxd-build-dispatcher/3.0",
  };
}

async function getRecentDispatch(repo, token) {
  const url = API + "/repos/" + OWNER + "/" + repo +
    "/actions/runs?event=repository_dispatch&per_page=10";
  const runs = await getJson(url, githubHeadersForDispatch(token));
  return (runs.workflow_runs || [])
    .sort((a, b) => Date.parse(b.created_at) - Date.parse(a.created_at))[0] || null;
}

async function dispatchIfNeeded(repo, reason, token) {
  const latest = await getRecentDispatch(repo, token);
  if (latest) {
    const ageMs = Date.now() - Date.parse(latest.created_at);
    const active = ["queued", "in_progress", "waiting", "requested", "pending"].includes(latest.status);
    const cooldownMs = active ? 20 * 60 * 1000 : 5 * 60 * 1000;
    if (ageMs >= 0 && ageMs < cooldownMs) {
      console.log("skip " + repo + ": recent " + latest.status + " dispatch (" +
        Math.round(ageMs / 1000) + "s old)");
      return false;
    }
  }

  const response = await fetch(API + "/repos/" + OWNER + "/" + repo + "/dispatches", {
    method: "POST",
    headers: { ...githubHeadersForDispatch(token), "Content-Type": "application/json" },
    body: JSON.stringify({
      event_type: "bloxd-build-changed",
      client_payload: {
        source: "cloudflare-cron",
        reason: truncate(reason, 1000),
        detected_at: new Date().toISOString(),
      },
    }),
  });
  if (response.status !== 204) {
    throw new Error("GitHub API POST " + API + "/repos/" + OWNER + "/" + repo +
      "/dispatches returned HTTP " + response.status);
  }
  console.log("dispatched " + repo + ": " + truncate(reason, 180));
  return true;
}

async function postDiscord(webhook, embed) {
  if (!webhook) throw new Error("Discord webhook secret is not configured");
  const delays = [0, 500, 1000, 2000, 4000];
  let lastStatus = 0;

  for (let attempt = 0; attempt < delays.length; attempt++) {
    if (delays[attempt]) await sleep(delays[attempt]);
    try {
      const payload = buildDiscordPayload(embed);

      const response = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      lastStatus = response.status;
      if (response.ok) return true;

      if (response.status === 429) {
        let retryMs = 0;
        try {
          const body = await response.json();
          if (body?.retry_after) retryMs = Number(body.retry_after) * 1000;
        } catch {}
        if (!retryMs) {
          const header = response.headers.get("Retry-After");
          if (header) retryMs = Number(header) * 1000;
        }
        if (attempt < delays.length - 1 && retryMs > 0) {
          await sleep(Math.min(retryMs, 15000));
          continue;
        }
      }

      if (response.status >= 500 && attempt < delays.length - 1) continue;
      throw new Error("Discord webhook returned HTTP " + response.status);
    } catch (error) {
      if (attempt === delays.length - 1 || /HTTP 4\d\d/.test(String(error))) {
        throw error;
      }
      console.error("Discord delivery attempt " + (attempt + 1) + " failed: " +
        truncate(error?.message || error, 160));
    }
  }
  throw new Error("Discord webhook failed after retries (HTTP " + lastStatus + ")");
}

async function notifyOnce(env, key, signature, webhook, embed) {
  const storageKey = "sent:" + key;
  const previous = await env.NOTIFICATION_STATE.get(storageKey);
  if (previous === signature) return false;
  await postDiscord(webhook, embed);
  await env.NOTIFICATION_STATE.put(storageKey, signature, {
    expirationTtl: CONFIG.stateTtlSeconds,
  });
  console.log("Discord notification sent: " + key);
  return true;
}

async function notifyError(env, error, opsState = null, task = "監視全体") {
  try {
    const ops = opsState || await getState(env, KV.ops, {});
    const now = Date.now();
    const detail = describeFailure(error, task);
    ops.lastError = { at: now, ...detail };
    if (opsState) opsState._stateDirty = true;
    else await putState(env, KV.ops, ops);

    if (env.DISCORD_BUNDLE_WEBHOOK) {
      const key = [
        detail.task,
        detail.status || "unknown",
        detail.endpoint || "unknown",
      ].join("-").replace(/[^a-zA-Z0-9._-]/g, "_").slice(0, 180);
      const window = String(Math.floor(now / (30 * 60 * 1000)));
      const description = [
        "処理: " + detail.task,
        "HTTP: " + (detail.status || "不明"),
        "接続先: " + (detail.endpoint || "特定できず"),
        "詳細: " + detail.message,
        "時刻: " + formatDate(now),
      ].join("\n");
      await notifyOnce(
        env,
        "monitor-error:" + key,
        window,
        env.DISCORD_BUNDLE_WEBHOOK,
        makeEmbed("監視エラー", description, COLORS.gray));
    }
  } catch (notifyFailure) {
    console.error("Internal error notification failed: " +
      truncate(notifyFailure?.message || notifyFailure, 180));
  }
}

async function checkEntriesBundle(env, updateState, home, token) {
  if (!home?.ok) return;
  const previousUrl = updateState?.lastBundle?.url || null;
  if (home.url === previousUrl) return;

  const signature = previousUrl + "=>" + home.url;
  const embed = makeEmbed(
    "Entries: 新しいビルド",
    buildLabel(previousUrl) + " → [" + buildLabel(home.url) + "](" + home.url + ")",
    COLORS.blue,
  );

  let dispatchError = null;
  try {
    await dispatchIfNeeded(ENTRIES_REPO,
      "bloxd.io " + (previousUrl || "(no saved build)") + " -> " + home.url, token);
  } catch (error) {
    dispatchError = error;
    console.error("Entries GitHub dispatch failed: " + truncate(error?.message || error, 300));
  }
  try {
    await notifyOnce(env, "entries-bloxd-io", signature,
      env.DISCORD_ENTRIES_WEBHOOK, embed);
  } catch (error) {
    console.error("Entries Discord notification failed: " + truncate(error?.message || error, 300));
  }
  if (dispatchError) throw dispatchError;
}

async function checkEntriesDataChanges(env) {
  const updateState = await readRepoJson(ENTRIES_REPO, "update-state.json");
  const runAt = String(updateState?.lastRunAt || "");
  if (!runAt) return;

  const cursor = await getState(env, KV.entriesData, {
    initialized: false,
    lastRunAt: null,
  });
  if (!cursor.initialized) {
    await putState(env, KV.entriesData, { initialized: true, lastRunAt: runAt });
    console.log("Entries data notification baseline initialized: " + runAt);
    return;
  }

  const currentTime = Date.parse(runAt);
  const previousTime = Date.parse(String(cursor.lastRunAt || ""));
  if (runAt === cursor.lastRunAt ||
      (Number.isFinite(currentTime) && Number.isFinite(previousTime) && currentTime <= previousTime)) {
    return;
  }

  const notification = entriesDiffNotification(updateState);
  if (notification) {
    await notifyOnce(
      env,
      "entries-data-diff",
      notification.signature,
      env.DISCORD_ENTRIES_WEBHOOK,
      makeEmbed(notification.title, notification.description, COLORS.green),
    );
    console.log("Entries data extraction notified: " + notification.signature);
  } else {
    console.log("Entries data diff unavailable or first extraction; no status notification: " + runAt);
  }

  await putState(env, KV.entriesData, { initialized: true, lastRunAt: runAt });
}

async function checkWorkflowFailures(env, repo, key, token) {
  const state = await getState(env, key, {
    initialized: false,
    baselineRunId: 0,
    pending: [],
  });
  const url = API + "/repos/" + OWNER + "/" + repo + "/actions/runs?per_page=20";
  const response = await getJson(url, githubHeadersForDispatch(token));
  const runs = Array.isArray(response.workflow_runs) ? response.workflow_runs : [];
  const ids = runs.map(run => Number(run.id)).filter(id => Number.isFinite(id) && id > 0);
  const newestId = ids.length ? Math.max(...ids) : Number(state.baselineRunId || 0);

  if (!state.initialized) {
    const activeRunIds = runs
      .filter(run => run.status !== "completed")
      .map(run => Number(run.id))
      .filter(id => Number.isSafeInteger(id) && id > 0)
      .slice(-30);
    const nextState = {
      initialized: true,
      baselineRunId: newestId,
      pending: activeRunIds,
    };
    if (workflowFailureStateChanged(state, nextState)) {
      await putState(env, key, nextState);
    }
    console.log("GitHub Actions failure monitor baseline initialized: " + repo + " #" + newestId);
    return;
  }

  const pending = new Set((state.pending || []).map(Number));
  for (const run of runs.slice().reverse()) {
    const id = Number(run.id);
    if (!Number.isFinite(id) || id <= 0) continue;
    if (id <= Number(state.baselineRunId || 0) && !pending.has(id)) continue;

    if (run.status !== "completed") {
      pending.add(id);
      continue;
    }

    const conclusion = String(run.conclusion || "unknown");
    if (!["success", "cancelled", "skipped", "neutral"].includes(conclusion)) {
      await notifyOnce(
        env,
        "workflow-failure:" + repo + ":" + id,
        id + ":" + conclusion,
        env.DISCORD_BUNDLE_WEBHOOK,
        makeEmbed(
          "GitHub Actions失敗",
          "**" + repo + "** · " + (run.name || "workflow") +
            "\nRun #" + (run.run_number || id) + " · " + conclusion +
            "\n[実行ログ](" + run.html_url + ")",
          COLORS.red,
        ),
      );
    }
    pending.delete(id);
  }

  const nextState = {
    initialized: true,
    baselineRunId: Math.max(Number(state.baselineRunId || 0), newestId),
    pending: Array.from(pending).sort((a, b) => a - b).slice(-30),
  };
  // Cron runs every minute, but the failure cursor only needs a KV write when
  // a new run appears, changes completion state, or leaves the pending set.
  if (workflowFailureStateChanged(state, nextState)) {
    await putState(env, key, nextState);
  }
}

async function checkBuildMonitor(env, monitorState, homes, token) {
  const changes = [];
  let successes = 0;
  for (const host of HOSTS) {
    const home = homes[host];
    if (!home?.ok) {
      console.error("monitor probe failed: " + host + " status=" + (home?.status || 0));
      continue;
    }
    successes++;
    const previousUrl = monitorState?.[host]?.build_url || null;
    if (home.url !== previousUrl) changes.push({ host, previousUrl, currentUrl: home.url });
  }
  if (successes === 0) {
    const failures = HOSTS.map(host => {
      const result = homes[host];
      return host + "=HTTP " + (result?.status || 0);
    }).join(", ");
    throw new Error("Could not retrieve a bundle filename from any monitored environment; " + failures);
  }
  if (!changes.length) return;

  let dispatchError = null;
  try {
    await dispatchIfNeeded(MONITOR_REPO, changes.map(change =>
      change.host + ": " + (change.previousUrl || "(no saved build)") + " -> " + change.currentUrl
    ).join("; "), token);
  } catch (error) {
    dispatchError = error;
    console.error("Build Monitor GitHub dispatch failed: " + truncate(error?.message || error, 300));
  }

  const description = changes.map(change =>
    change.host.replace(".bloxd.io", "") + ": " + buildLabel(change.previousUrl) +
    " → [" + buildLabel(change.currentUrl) + "](" + change.currentUrl + ")"
  ).join("\n");
  const signature = changes.map(change =>
    change.host + ":" + (change.previousUrl || "(no saved build)") + "=>" + change.currentUrl
  ).sort().join("|");
  try {
    await notifyOnce(env, "bundle-batch", signature, env.DISCORD_BUNDLE_WEBHOOK,
      makeEmbed("ビルド更新", description, COLORS.green));
  } catch (error) {
    console.error("Bundle Discord notification failed: " + truncate(error?.message || error, 300));
  }
  if (dispatchError) throw dispatchError;
}

function seedEntries(entries, state, now) {
  state.seen = state.seen || {};
  state.live = state.live || {};
  for (const entry of entries.slice(0, 60)) {
    const key = entryKey(entry);
    state.seen[key] = true;
    const timestamp = entry.date ? new Date(entry.date).getTime() : NaN;
    if (Number.isFinite(timestamp) && timestamp <= now) state.live[key] = true;
  }
  capObject(state.seen, 60);
  capObject(state.live, 60);
}

async function sendUpdateEntry(env, entry, soon, delayNote = "") {
  const scheduledAt = entry.date ? formatDate(entry.date) : "";
  let description = "**" + truncate(entry.title, 180) + "**";
  if (entry.description) description += "\n" + truncate(entry.description, 350);
  if (scheduledAt) description += "\n" + (soon ? "予定: " : "公開: ") + scheduledAt;
  if (delayNote) description += "\n遅延: " + delayNote;

  const timestamp = entry.date ? new Date(entry.date).getTime() : NaN;
  const dateSignature = Number.isFinite(timestamp) ? String(timestamp) : "undated";
  const signature = entryKey(entry) + (soon ? "|soon" : "|live");
  await notifyOnce(env, "update-entry:" + signature, signature,
    env.DISCORD_BUNDLE_WEBHOOK,
    makeEmbed(soon ? "New Update (soon)" : "New Update", description,
      soon ? COLORS.orange : COLORS.blue));
  return dateSignature;
}

function markEntryLive(entry, state, now) {
  state.live = state.live || {};
  state.scheduled = state.scheduled || {};
  state.seen = state.seen || {};
  const key = entryKey(entry);
  state.live[key] = true;
  state.seen[key] = true;
  let delayNote = "";
  const scheduled = state.scheduled[key];
  if (scheduled?.at) {
    const delayMinutes = Math.round((now - scheduled.at) / 60000);
    if (delayMinutes > 0) delayNote = "予定より +" + formatDelay(delayMinutes);
    state.updateDelay = state.updateDelay || [];
    state.updateDelay.push({
      title: entry.title,
      scheduledAt: scheduled.at,
      liveAt: now,
      delayMinutes,
    });
    while (state.updateDelay.length > 15) state.updateDelay.shift();
    delete state.scheduled[key];
  }
  return delayNote;
}

async function checkOverdueSchedules(env, state, now) {
  state.scheduled = state.scheduled || {};
  state.live = state.live || {};
  let changed = false;
  for (const [key, scheduled] of Object.entries(state.scheduled)) {
    if (state.live[key] || now - scheduled.at > 7 * 86400000) {
      delete state.scheduled[key];
      changed = true;
      continue;
    }
    if (!scheduled.reminded && now >= scheduled.at) {
      await notifyOnce(env, "overdue:" + key, String(scheduled.at),
        env.DISCORD_BUNDLE_WEBHOOK,
        makeEmbed("公開予定時刻",
          "**" + truncate(scheduled.title, 180) + "**\n予定: " + formatDate(scheduled.at),
          COLORS.orange));
      scheduled.reminded = true;
      changed = true;
    }
  }
  return changed;
}

async function checkProductionUpdates(env, home) {
  if (!home?.ok) return;
  const now = Date.now();
  const state = await getState(env, KV.production, {
    initialized: false,
    lastMain: null,
    seen: {},
    live: {},
    scheduled: {},
    updateDelay: [],
    lastLogCheckAt: 0,
    walkCoolUntil: 0,
  });
  state.seen = state.seen || {};
  state.live = state.live || {};
  state.scheduled = state.scheduled || {};

  const buildChanged = Boolean(state.lastMain && state.lastMain !== home.mainName);
  const pending = Boolean(state.pending && state.pending.mainName === home.mainName);
  const forced = state.initialized &&
    now - Number(state.lastLogCheckAt || 0) >= CONFIG.updateLogForceMinutes * 60000;

  if (!state.initialized || buildChanged || pending || forced) {
    const stateBeforeParse = JSON.stringify(state);
    const result = await collectUpdateLogs("bloxd.io", home, state);
    state.walkCoolUntil = result.state.walkCoolUntil || 0;
    if (!result.entries) {
      if (!state.initialized) {
        state.pending = { mainName: home.mainName, error: result.error };
        if (JSON.stringify(state) !== stateBeforeParse) {
          await putState(env, KV.production, state);
        }
        console.error("Production Update Log baseline unavailable: " + result.error);
        return;
      }

      if (buildChanged && !pending) {
        await notifyOnce(
          env,
          "production-log-parse-failed:" + home.mainName,
          home.mainName + "|" + result.error,
          env.DISCORD_BUNDLE_WEBHOOK,
          makeEmbed(
            "Update Log解析失敗",
            (state.lastMain || "unknown") + " → " + home.mainName +
              "\n" + truncate(result.error, 180),
            COLORS.gray,
          ));
      }
      state.lastMain = home.mainName;
      state.pending = { mainName: home.mainName, error: result.error };
      if (JSON.stringify(state) !== stateBeforeParse) {
        await putState(env, KV.production, state);
      }
      console.error("Production Update Log parse failed: " + result.error);
      return;
    }

    state.walkCoolUntil = result.state.walkCoolUntil || 0;
    const entries = result.entries;
    if (!state.initialized) {
      seedEntries(entries, state, now);
      state.initialized = true;
      state.lastMain = home.mainName;
      state.entryCount = entries.length;
      state.lastLogCheckAt = now;
      state.pending = null;
      await putState(env, KV.production, state);
      console.log("Production Update Log baseline initialized: " + entries.length + " entries");
      return;
    }

    const scan = entries.slice(0, 10);
    const newEntries = scan.filter(entry => !state.seen[entryKey(entry)]);
    if (buildChanged && newEntries.length === 0) {
      await notifyOnce(
        env,
        "production-hotfix:" + home.mainName,
        (state.lastMain || "") + "=>" + home.mainName,
        env.DISCORD_BUNDLE_WEBHOOK,
        makeEmbed(
          "Hotfix",
          (state.lastMain || "unknown") + " → " + home.mainName +
            "\nUpdate Log: no new entries",
          COLORS.gray,
        ));
    }

    for (const entry of newEntries.slice().reverse()) {
      const key = entryKey(entry);
      const timestamp = entry.date ? new Date(entry.date).getTime() : NaN;
      if (Number.isFinite(timestamp) && timestamp > now) {
        await sendUpdateEntry(env, entry, true);
        state.seen[key] = true;
        state.scheduled[key] = {
          title: entry.title,
          at: timestamp,
          reminded: false,
        };
      } else {
        const delayNote = markEntryLive(entry, state, now);
        await sendUpdateEntry(env, entry, false, delayNote);
      }
      capObject(state.seen, 60);
      capObject(state.live, 60);
      await putState(env, KV.production, state);
      await sleep(700);
    }

    for (const entry of scan) {
      const key = entryKey(entry);
      const timestamp = entry.date ? new Date(entry.date).getTime() : NaN;
      if (state.seen[key] && !state.live[key] &&
          state.scheduled[key] && Number.isFinite(timestamp) && timestamp <= now) {
        const delayNote = markEntryLive(entry, state, now);
        await sendUpdateEntry(env, entry, false, delayNote);
        await putState(env, KV.production, state);
        await sleep(700);
      }
    }

    state.lastMain = home.mainName;
    state.entryCount = entries.length;
    state.lastLogCheckAt = now;
    state.pending = null;
    capObject(state.seen, 60);
    capObject(state.live, 60);
    const schedulesChanged = await checkOverdueSchedules(env, state, now);
    await putState(env, KV.production, state);
    console.log("Production Update Log checked: " + entries.length + " entries; " +
      newEntries.length + " new");
    return;
  }

  if (await checkOverdueSchedules(env, state, now)) {
    await putState(env, KV.production, state);
  }
}

async function checkPreprodUpdates(env, home, monitorState = null) {
  if (!home?.ok) return;
  const now = Date.now();
  const state = await getState(env, KV.preprod, {
    initialized: false, lastMain: null, seen: {}, pending: null, walkCoolUntil: 0,
  });
  state.seen = state.seen || {};
  const changed = Boolean(state.lastMain && state.lastMain !== home.mainName);
  const pending = Boolean(state.pending && state.pending.mainName === home.mainName);
  if (state.initialized && !changed && !pending) return;

  const stateBeforeParse = JSON.stringify(state);
  const result = await collectUpdateLogs("preprod.bloxd.io", home, state);
  if (!result.entries) {
    if (!state.initialized) {
      state.pending = { mainName: home.mainName, error: result.error };
      if (JSON.stringify(state) !== stateBeforeParse) await putState(env, KV.preprod, state);
      console.error("Preprod Update Log baseline unavailable: " + result.error);
      return;
    }
    if (changed && !pending) {
      await notifyOnce(env, "preprod-build:" + home.mainName,
        (state.lastMain || "") + "=>" + home.mainName + "|parse-failed",
        env.DISCORD_BUNDLE_WEBHOOK,
        makeEmbed("Preprod Update Log解析失敗",
          (state.lastMain || "unknown") + " → " + home.mainName +
            "\n" + truncate(result.error, 180), COLORS.purple));
    }
    state.lastMain = home.mainName;
    state.pending = { mainName: home.mainName, error: result.error };
    state.walkCoolUntil = result.state.walkCoolUntil || 0;
    if (JSON.stringify(state) !== stateBeforeParse) await putState(env, KV.preprod, state);
    console.error("Preprod Update Log parse failed: " + result.error);
    return;
  }

  state.walkCoolUntil = result.state.walkCoolUntil || 0;
  const scan = result.entries.slice(0, 10);
  if (!state.initialized) {
    const archivedUrl = monitorState?.["preprod.bloxd.io"]?.build_url || null;
    if (archivedUrl && archivedUrl !== home.url) {
      await notifyOnce(env, "preprod-first-baseline:" + home.mainName,
        archivedUrl + "=>" + home.url, env.DISCORD_BUNDLE_WEBHOOK,
        makeEmbed("Preprodビルド更新",
          buildLabel(archivedUrl) + " → " + buildLabel(home.url), COLORS.purple));
    }
    for (const entry of result.entries.slice(0, 60)) state.seen[entryKey(entry)] = true;
    state.initialized = true;
    state.lastMain = home.mainName;
    state.pending = null;
    capObject(state.seen, 60);
    await putState(env, KV.preprod, state);
    console.log("Preprod Update Log baseline initialized: " + result.entries.length + " entries");
    return;
  }

  const fresh = scan.filter(entry => !state.seen[entryKey(entry)]);
  const isRescan = pending && !changed;
  if (changed || (isRescan && fresh.length)) {
    const lines = fresh.slice(0, 5).map(entry => {
      const date = entry.date ? formatDate(entry.date) : "";
      return truncate(entry.title, 100) + (date ? " · " + date : "");
    });
    if (fresh.length > lines.length) lines.push("+" + (fresh.length - lines.length) + " more");
    const description = (changed
      ? buildLabel(state.lastMain) + " → " + buildLabel(home.url)
      : "Retry: " + buildLabel(home.url)) +
      (lines.length ? "\n" + lines.join("\n") : "\nNo new Update Log entries");
    await notifyOnce(env, "preprod-update:" + home.mainName + (isRescan ? ":rescan" : ""),
      home.mainName + "|" + fresh.map(entryKey).join(",") + "|" + (isRescan ? "rescan" : "build"),
      env.DISCORD_BUNDLE_WEBHOOK,
      makeEmbed(isRescan ? "Preprod Update Log再確認" : "Preprod更新", description, COLORS.purple));
    for (const entry of fresh) state.seen[entryKey(entry)] = true;
  }
  state.lastMain = home.mainName;
  state.pending = null;
  capObject(state.seen, 60);
  await putState(env, KV.preprod, state);
  console.log("Preprod Update Log checked: " + result.entries.length + " entries; " + fresh.length + " new");
}

async function probeShard(number) {
  const started = Date.now();
  try {
    const response = await fetch(
      "https://social" + number + ".bloxd.io/social/get-game-ccus",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json,*/*",
          "User-Agent": UA,
        },
        body: "{}",
        cache: "no-store",
        signal: AbortSignal.timeout(CONFIG.probeSlowMs + 3000),
      },
    );
    const ms = Date.now() - started;
    const code = response.status;
    if (code === 401 || code === 400) {
      return { number, down: false, soft: false, code, ms, detail: String(code) };
    }
    if (code >= 500) {
      return { number, down: true, soft: false, code, ms, detail: String(code) };
    }
    if (code === 403 || code === 429) {
      return { number, down: false, soft: true, code, ms, detail: String(code) };
    }
    return { number, down: false, soft: false, code, ms, detail: String(code) };
  } catch {
    return {
      number,
      down: true,
      soft: false,
      code: 0,
      ms: Date.now() - started,
      detail: "timeout/connection error",
    };
  }
}

function emptyProbe() {
  return { fails: [], softs: [], slows: [], recovered: [], probed: 0 };
}

async function probeShards(numbers, state) {
  const results = [];
  const batchSize = 5;
  for (let offset = 0; offset < numbers.length; offset += batchSize) {
    const batch = numbers.slice(offset, offset + batchSize);
    const batchResults = await Promise.all(batch.map(number => probeShard(number)));
    results.push(...batchResults);
  }

  const output = emptyProbe();
  output.probed = results.length;
  for (const result of results) {
    const key = String(result.number);
    const shard = state[key] || {
      down: 0,
      alerted: false,
      since: 0,
      singleNotified: false,
    };

    if (result.down) {
      shard.down = Math.min(shard.down + 1, CONFIG.downAlertThreshold);
      if (shard.down === 1) shard.since = Date.now();
      state[key] = shard;
      output.fails.push(result);
    } else if (result.soft) {
      state[key] = shard;
      output.softs.push(result);
    } else {
      if (shard.alerted || shard.down >= CONFIG.downAlertThreshold) {
        output.recovered.push("social" + result.number);
      }
      shard.down = 0;
      shard.alerted = false;
      shard.since = 0;
      shard.singleNotified = false;
      state[key] = shard;
    }

    if (result.ms >= CONFIG.probeSlowMs && !result.down) {
      output.slows.push({
        number: result.number,
        detail: "応答遅延 " + (result.ms / 1000).toFixed(1) +
          "秒（HTTP " + result.code + "）",
      });
    }
  }
  return output;
}

async function postSocialNotice(env, title, description, color, key, signature) {
  return notifyOnce(
    env,
    "social:" + key,
    signature,
    env.DISCORD_BUNDLE_WEBHOOK,
    makeEmbed(title, description, color),
  );
}

async function checkHomeAvailability(env, home, ops) {
  const now = Date.now();
  const bad = !home?.ok && (
    !home || home.status === 0 || home.status === 403 ||
    home.status === 429 || home.status >= 500
  );
  if (bad) {
    if (!Number(ops.homeFails || 0)) {
      ops.homeFails = 1;
      ops.homeDownAt = now;
      ops._stateDirty = true;
    } else if (Number(ops.homeFails) < CONFIG.homeDownAlertThreshold) {
      ops.homeFails = Number(ops.homeFails) + 1;
      ops._stateDirty = true;
    }
    if (ops.homeFails >= CONFIG.homeDownAlertThreshold && !ops.homeAlerted) {
      await postSocialNotice(
        env,
        "bloxd.io 応答異常",
        "HTTP " + (home?.status || "no response") + " · " + ops.homeFails + " consecutive failures",
        COLORS.red,
        "home-down",
        String(ops.homeDownAt));
      ops.homeAlerted = true;
      ops._stateDirty = true;
    }
    return;
  }

  if (Number(ops.homeFails || 0) > 0) {
    if (ops.homeAlerted) {
      await postSocialNotice(
        env,
        "bloxd.io 復旧",
        "Downtime: " + formatDuration(now - Number(ops.homeDownAt || now)),
        COLORS.green,
        "home-recovered",
        String(ops.homeDownAt || now));
      ops.downtimeLog = ops.downtimeLog || [];
      ops.downtimeLog.push({
        type: "web",
        start: Number(ops.homeDownAt || now),
        end: now,
        downMs: now - Number(ops.homeDownAt || now),
        detail: "bloxd.io frontend",
      });
      while (ops.downtimeLog.length > 20) ops.downtimeLog.shift();
    }
    ops.homeFails = 0;
    ops.homeDownAt = 0;
    ops.homeAlerted = false;
    ops._stateDirty = true;
  }
}

async function checkSocial(env, ops, minuteIndex) {
  const pendingNumbers = Array.isArray(ops.pendingRecheck)
    ? ops.pendingRecheck.map(Number).filter(number => number >= 1 && number <= CONFIG.socialShardCount)
    : [];
  const pendingPass = !ops.fleetDown && pendingNumbers.length > 0;
  if (!pendingPass && minuteIndex % CONFIG.socialEveryRuns !== 0 && !ops.fleetDown) return;

  const opsBefore = JSON.stringify(ops);
  const state = ops.socialState || {};
  const all = Array.from({ length: CONFIG.socialShardCount }, (_, index) => index + 1);
  let initial;
  if (pendingPass) {
    initial = pendingNumbers;
    ops.pendingRecheck = [];
  } else if (ops.fleetDown) {
    initial = all;
    ops.pendingRecheck = [];
  } else {
    const cursor = Number(ops.probeCursor || 0) % all.length;
    initial = [];
    for (let index = 0; index < Math.min(CONFIG.socialProbesPerRun, all.length); index++) {
      initial.push(all[(cursor + index) % all.length]);
    }
    ops.probeCursor = (cursor + CONFIG.socialProbesPerRun) % all.length;
  }

  const first = await probeShards(initial, state);
  let second = emptyProbe();
  let third = emptyProbe();
  let fleetFails = first.fails.filter(result => {
    const shard = state[String(result.number)];
    return (shard && shard.down >= CONFIG.downAlertThreshold) || result.code === 0;
  });
  let blips = [];
  let softs = first.softs.slice();

  if (pendingPass) {
    const stillDown = new Set(fleetFails.map(result => result.number));
    const softByNumber = new Map(softs.map(result => [result.number, result.code]));
    blips = pendingNumbers
      .filter(number => !stillDown.has(number))
      .map(number => ({
        number,
        detail: softByNumber.has(number)
          ? "再確認でHTTP " + softByNumber.get(number)
          : "再確認で復帰",
      }));
    ops.pendingRecheck = [];
  } else if (!ops.fleetDown &&
      (first.fails.length || first.softs.length || first.slows.length)) {
    const remaining = all.filter(number => !initial.includes(number));
    second = await probeShards(remaining, state);
    softs = first.softs.concat(second.softs);
    const failures = first.fails.concat(second.fails);

    if (failures.length >= 12) {
      fleetFails = failures;
      ops.pendingRecheck = [];
    } else {
      fleetFails = failures.filter(result => result.code === 0);
      ops.pendingRecheck = Array.from(new Set(
        failures.filter(result => result.code !== 0).map(result => result.number),
      ));
    }
  }

  const probedTotal = first.probed + second.probed;
  const downShards = fleetFails.map(result =>
    "social" + result.number + "（" + result.detail + "）",
  );

  const descriptions = [];
  for (const result of fleetFails) {
    descriptions.push("social" + result.number + "=" + result.detail);
  }
  for (const result of blips) {
    descriptions.push("social" + result.number + "=" + result.detail);
  }
  for (const result of softs) {
    descriptions.push("social" + result.number + "=HTTP" + result.code);
  }
  for (const result of first.slows.concat(second.slows)) {
    descriptions.push("social" + result.number + "=" + result.detail);
  }

  const now = Date.now();
  const issueText = truncate(descriptions.join(", "), 180);
  const probeLog = ops.probeLog || [];
  const lastProbeLogAt = Number(ops.lastProbeLogAt || 0);
  if (descriptions.length &&
      (now - lastProbeLogAt >= 5 * 60 * 1000 || issueText !== ops.lastProbeIssue)) {
    probeLog.push({ at: now, probed: probedTotal, issue: issueText });
    while (probeLog.length > 10) probeLog.shift();
    ops.lastProbeLogAt = now;
    ops.lastProbeIssue = issueText;
  }
  ops.probeLog = probeLog;
  if (descriptions.length) {
    console.log("social probe (" + probedTotal + " shards): " +
      truncate(descriptions.join(", "), 300));
  }

  const blockThreshold = Math.max(3, Math.ceil(probedTotal * 0.6));
  if (!pendingPass && softs.length >= blockThreshold &&
      now >= Number(ops.blockCoolUntil || 0)) {
    const codes = Array.from(new Set(softs.map(result => result.code))).join("/");
    await postSocialNotice(
      env,
      "socialプローブ一斉ブロックの可能性",
      softs.length + "/" + probedTotal + " shards · HTTP " + codes,
      COLORS.red,
      "probe-blocked",
      String(Math.floor(now / (CONFIG.blockAlertMinutes * 60000))));
    ops.blockCoolUntil = now + CONFIG.blockAlertMinutes * 60000;
  }

  if (downShards.length >= CONFIG.downAlertThreshold) {
    for (const result of fleetFails) {
      const shard = state[String(result.number)];
      if (shard) shard.alerted = true;
    }
    if (!ops.fleetDown) {
      const earliest = fleetFails.reduce((value, result) => {
        const shard = state[String(result.number)];
        return Math.min(value, Number(shard?.since || now));
      }, now);
      await postSocialNotice(
        env,
        "social基盤 異常",
        "Affected: " + downShards.map(item => item.split("（")[0]).join(", ") + "\nSince: " + formatDate(earliest),
        COLORS.red,
        "fleet-down",
        String(earliest));
      ops.fleetDown = true;
      ops.fleetDownAt = earliest;
      ops.fleetLastAlertAt = now;
      console.error("social fleet outage detected: " + downShards.length + " shards");
    } else if (CONFIG.reAlertMinutes > 0 &&
      now - Number(ops.fleetLastAlertAt || 0) >= CONFIG.reAlertMinutes * 60000) {
      await postSocialNotice(
        env,
        "social基盤 異常継続",
        "Duration: " + formatDuration(now - Number(ops.fleetDownAt || now)) +
          "\nAffected: " + downShards.map(item => item.split("（")[0]).join(", "),
        COLORS.red,
        "fleet-still-down",
        String(Math.floor(now / (CONFIG.reAlertMinutes * 60000))));
      ops.fleetLastAlertAt = now;
    }
  } else if (ops.fleetDown && downShards.length <= 1) {
    await postSocialNotice(
      env,
      "social基盤 復旧",
      "Downtime: " + formatDuration(now - Number(ops.fleetDownAt || now)) +
        (downShards.length ? "\nStill affected: " + downShards.map(item => item.split("（")[0]).join(", ") : ""),
      COLORS.green,
      "fleet-recovered",
      String(ops.fleetDownAt || now));
    ops.downtimeLog = ops.downtimeLog || [];
    ops.downtimeLog.push({
      type: "social",
      start: Number(ops.fleetDownAt || now),
      end: now,
      downMs: now - Number(ops.fleetDownAt || now),
      detail: downShards.join(", "),
    });
    while (ops.downtimeLog.length > 20) ops.downtimeLog.shift();
    ops.fleetDown = false;
    ops.fleetDownAt = 0;
    ops.fleetLastAlertAt = 0;
  } else if (!ops.fleetDown && downShards.length === 1) {
    const number = fleetFails[0].number;
    const shard = state[String(number)];
    if (shard && shard.since &&
        now - shard.since >= CONFIG.singleAlertMinutes * 60000 &&
        !shard.singleNotified) {
      await postSocialNotice(
        env,
        "social" + number + " 単独異常継続",
        "Duration: " + formatDuration(now - shard.since) + "\n" + downShards[0],
        COLORS.gray,
        "single-down-" + number,
        String(shard.since));
      shard.singleNotified = true;
    } else if (shard && shard.down === 1 &&
        now >= Number(ops.blipCoolUntil || 0)) {
      await postSocialNotice(
        env,
        "social" + number + " 短時間の異常",
        downShards[0],
        COLORS.gray,
        "short-issue",
        String(Math.floor(now / (CONFIG.blipCooldownMinutes * 60000))));
      ops.blipCoolUntil = now + CONFIG.blipCooldownMinutes * 60000;
    }
  } else if (!ops.fleetDown && !downShards.length &&
      (blips.length || (softs.length && softs.length < blockThreshold) ||
       first.slows.length || second.slows.length) &&
      now >= Number(ops.blipCoolUntil || 0)) {
    const details = blips.map(result =>
      "social" + result.number + ": " + result.detail,
    ).concat(softs.slice(0, 6).map(result =>
      "social" + result.number + ": HTTP " + result.code,
    )).concat(first.slows.concat(second.slows).map(result =>
      "social" + result.number + ": " + result.detail,
    ));
    await postSocialNotice(
      env,
      "social 短時間の異常",
      truncate(details.join("\n"), 900),
      COLORS.gray,
      "short-issue",
      String(Math.floor(now / (CONFIG.blipCooldownMinutes * 60000))));
    ops.blipCoolUntil = now + CONFIG.blipCooldownMinutes * 60000;
  }

  ops.socialState = state;
  if (!ops.lastRunAt || now - Number(ops.lastRunAt) >= 3 * 60 * 1000) {
    ops.lastRunAt = now;
  }
  if (JSON.stringify(ops) !== opsBefore) ops._stateDirty = true;
}

async function getStats(env) {
  const [ops, production, preprod] = await Promise.all([
    getState(env, KV.ops, {}),
    getState(env, KV.production, {}),
    getState(env, KV.preprod, {}),
  ]);
  const social = ops.socialState || {};
  const shardState = {};
  for (const [key, value] of Object.entries(social)) {
    if (value?.down) shardState["social" + key] = {
      consecutiveFailures: value.down,
      since: value.since || null,
      singleAlerted: Boolean(value.singleNotified),
    };
  }
  return {
    worker: "bloxd-build-dispatcher",
    version: "3.0",
    generatedAt: new Date().toISOString(),
    lastRunAt: ops.lastRunAt || null,
    production: {
      mainBundle: production.lastMain || null,
      initialized: Boolean(production.initialized),
      entryCount: production.entryCount || 0,
      scheduledUpdates: Object.keys(production.scheduled || {}).length,
      updateDelaySamples: production.updateDelay || [],
    },
    preprod: {
      mainBundle: preprod.lastMain || null,
      initialized: Boolean(preprod.initialized),
      pendingAnalysis: Boolean(preprod.pending),
    },
    social: {
      fleetDown: Boolean(ops.fleetDown),
      fleetDownAt: ops.fleetDownAt || null,
      shardFailures: shardState,
      recentProbeIssues: (ops.probeLog || []).filter(item => item.issue),
      downtimeLog: ops.downtimeLog || [],
    },
    lastError: ops.lastError || null,
  };
}

async function runChecks(env) {
  if (!env.GITHUB_TOKEN) {
    console.error("GITHUB_TOKEN secret is not configured; checks are paused.");
    return;
  }
  if (!env.NOTIFICATION_STATE) {
    throw new Error("NOTIFICATION_STATE KV binding is missing");
  }

  const now = Date.now();
  const ops = await getState(env, KV.ops, {
    lastRunAt: 0,
    probeCursor: 0,
    fleetDown: false,
    homeFails: 0,
    socialState: {},
  });
  const previousRun = Number(ops.lastRunAt || 0);

  if (previousRun && now - previousRun > 45 * 60000) {
    try {
      await notifyOnce(
        env,
        "monitor-gap",
        String(previousRun),
        env.DISCORD_BUNDLE_WEBHOOK,
        makeEmbed(
          "監視再開",
          "Gap: " + formatDuration(now - previousRun),
          COLORS.gray,
        ));
    } catch (error) {
      console.error("Monitoring gap notification failed: " + String(error));
    }
  }

  const homes = {};
  const homeResults = await Promise.all(HOSTS.map(host => fetchHome(host)));
  for (let index = 0; index < HOSTS.length; index++) {
    homes[HOSTS[index]] = homeResults[index];
  }

  let failed = false;
  const runTask = async (label, task) => {
    try {
      await task();
    } catch (error) {
      failed = true;
      ops._stateDirty = true;
      const contextualError = new Error(label + ": " +
        truncate(error?.message || error, 400));
      const detail = describeFailure(contextualError, label);
      console.error(JSON.stringify({
        event: "monitor_task_failed",
        at: new Date().toISOString(),
        ...detail,
      }));
      await notifyError(env, contextualError, ops, label);
    }
  };

  await runTask("Entries bundle monitor", async () => {
    const entriesState = await readRepoJson(ENTRIES_REPO, "update-state.json");
    await checkEntriesBundle(
      env,
      entriesState,
      homes["bloxd.io"],
      env.GITHUB_TOKEN,
    );
  });

  await runTask("Entries data diff monitor", async () => {
    await checkEntriesDataChanges(env);
  });

  await runTask("GitHub Actions failure monitor", async () => {
    await checkWorkflowFailures(env, ENTRIES_REPO, KV.entriesWorkflowRuns, env.GITHUB_TOKEN);
    await checkWorkflowFailures(env, MONITOR_REPO, KV.buildWorkflowRuns, env.GITHUB_TOKEN);
  });

  await runTask("Build Monitor bundle and Preprod monitor", async () => {
    const monitorState = await readRepoJson(MONITOR_REPO, ".monitor-state.json");
    await checkBuildMonitor(
      env,
      monitorState,
      homes,
      env.GITHUB_TOKEN,
    );
    await checkPreprodUpdates(
      env,
      homes["preprod.bloxd.io"],
      monitorState,
    );
  });

  await runTask("Production Update Log monitor", async () => {
    await checkProductionUpdates(env, homes["bloxd.io"]);
  });

  await runTask("Bloxd frontend availability monitor", async () => {
    await checkHomeAvailability(env, homes["bloxd.io"], ops);
  });

  await runTask("Social shard monitor", async () => {
    await checkSocial(env, ops, Math.floor(now / 60000));
  });

  if (ops._stateDirty) {
    delete ops._stateDirty;
    await putState(env, KV.ops, ops);
  }

  if (failed) {
    console.error("Scheduled monitoring completed with one or more task failures.");
  }
}

export default {
  async scheduled(_controller, env, ctx) {
    ctx.waitUntil(runChecks(env).catch(async error => {
      const detail = describeFailure(error, "Cron handler");
      console.error(JSON.stringify({
        event: "scheduled_monitor_failed",
        at: new Date().toISOString(),
        ...detail,
      }));
      await notifyError(env, error, null, "Cron handler");
    }));
  },

  async fetch(request, env) {
    const url = new URL(request.url);
    if (request.method === "GET" && url.pathname === "/health") {
      return new Response("Bloxd monitor v3 is online.\n", {
        headers: { "Content-Type": "text/plain; charset=utf-8" },
      });
    }
    if (request.method === "GET" && url.pathname === "/stats") {
      try {
        const stats = await getStats(env);
        return Response.json(stats, {
          headers: { "Cache-Control": "no-store" },
        });
      } catch (error) {
        return Response.json(
          { error: truncate(error?.message || error, 300) },
          { status: 500, headers: { "Cache-Control": "no-store" } },
        );
      }
    }
    return new Response("Not found\n", { status: 404 });
  },
};
