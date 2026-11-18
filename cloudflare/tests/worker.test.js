import test from "node:test";
import assert from "node:assert/strict";
import {
  mainJsName,
  parseUpdateLogs,
  resolveUpdateLogChunkId,
  buildVarDateTable,
  safeEndpoint,
  describeFailure,
  entriesDiffNotification,
  buildDiscordPayload,
  workflowFailureStateChanged,
} from "../src/index.js";

test("mainJsName extracts the exact hashed main bundle", () => {
  assert.equal(
    mainJsName('<script src="/static/js/tykq5g.main.937fd517.js"></script>'),
    "tykq5g.main.937fd517.js",
  );
  assert.equal(mainJsName("<html>no bundle</html>"), null);
});

test("resolveUpdateLogChunkId follows the updateLogsData lazy import", () => {
  const main = 'SL.e(105).then(()=>SL(28924)).then(({updateLogsData:oL})=>oL)';
  assert.equal(resolveUpdateLogChunkId(main), "105");
});

test("buildVarDateTable resolves unambiguous exported date constants", () => {
  const main = 'x.d(y,{e:()=>Tb});const Tb=new Date("2026-11-18T12:00:00Z")}';
  assert.deepEqual(
    buildVarDateTable(main, Date.parse("2026-11-16T00:00:00Z")),
    { e: "2026-11-18T12:00:00Z" },
  );
});

test("parseUpdateLogs supports inline dates, variable dates, and descriptions", () => {
  const now = Date.parse("2026-11-16T00:00:00Z");
  const main = 'x.d(y,{e:()=>Tb});const Tb=new Date("2026-11-20T12:00:00Z")}';
  const chunk =
    '({date:new Date("2026-11-15T12:00:00Z"),title:"Published update",description:"Line one\\nLine two"},{author:"A"}),' +
    '({date:Tb.e,title:"Upcoming update",description:"Soon"},{author:"B"})';
  const entries = parseUpdateLogs(chunk, main, now);
  assert.equal(entries.length, 2);
  assert.equal(entries[0].title, "Published update");
  assert.equal(entries[0].description, "Line one\nLine two");
  assert.equal(entries[1].date, "2026-11-20T12:00:00Z");
  assert.equal(entries[1].title, "Upcoming update");
});

test("ambiguous date exports are not guessed", () => {
  const now = Date.parse("2026-11-16T00:00:00Z");
  const main =
    'x.d(y,{e:()=>Tb});const Tb=new Date("2026-11-20T12:00:00Z")}' +
    'z.d(w,{e:()=>Ub});const Ub=new Date("2026-11-21T12:00:00Z")}';
  assert.equal(buildVarDateTable(main, now), null);
  const entries = parseUpdateLogs(
    '({date:Tb.e,title:"Ambiguous",description:"No guessed date"},{author:"A"})',
    main,
    now,
  );
  assert.equal(entries[0].date, "");
});


test("safeEndpoint removes query strings and redacts Discord webhook paths", () => {
  assert.equal(
    safeEndpoint("https://api.github.com/repos/owner/repo?token=secret"),
    "https://api.github.com/repos/owner/repo",
  );
  assert.equal(
    safeEndpoint("https://discord.com/api/webhooks/12345/secret-token?wait=true"),
    "https://discord.com/api/webhooks/[redacted]",
  );
});

test("describeFailure captures task, HTTP status, and sanitized endpoint", () => {
  assert.deepEqual(
    describeFailure(
      new Error("HTTP 503 GET https://raw.githubusercontent.com/owner/repo/main/state.json?x=secret"),
      "Entries bundle monitor",
    ),
    {
      task: "Entries bundle monitor",
      message: "HTTP 503 GET https://raw.githubusercontent.com/owner/repo/main/state.json?x=secret",
      status: 503,
      endpoint: "https://raw.githubusercontent.com/owner/repo/main/state.json",
    },
  );
});


test("entriesDiffNotification reports only actual data changes", () => {
  assert.equal(entriesDiffNotification({
    lastRunAt: "2026-11-18T01:00:00.000Z",
    lastDiff: { firstRun: true, added: 10, removed: 0, idChanged: 0, entryFilesChanged: 0 },
  }), null);
  const unchanged = entriesDiffNotification({
    lastRunAt: "2026-11-18T01:00:00.000Z",
    lastDiff: {
      firstRun: false, prevCount: 10081, nextCount: 10081,
      added: 0, removed: 0, idChanged: 0, entryFilesChanged: 0,
    },
  });
  assert.equal(unchanged.title, "ブロック・アイテム変更なし");
  assert.match(unchanged.description, /追加・削除・ID変更・プロパティ変更はありません/);
  assert.match(unchanged.description, /ブロック・アイテムの追加・削除・ID変更・プロパティ変更はありません/);
  const result = entriesDiffNotification({
    lastRunAt: "2026-11-18T01:00:00.000Z",
    lastDiff: {
      firstRun: false, prevCount: 10080, nextCount: 10081,
      added: 1, removed: 0, idChanged: 3, entryFilesChanged: 2,
    },
  });
  assert.equal(result.title, "エントリ・プロパティ更新");
  assert.match(result.description, /追加 1 · 削除 0 · ID変更 3/);
  assert.match(result.description, /プロパティ変更 2ファイル/);
  assert.equal(result.signature, "2026-11-18T01:00:00.000Z");
  assert.equal(entriesDiffNotification({
    lastRunAt: "2026-11-18T01:00:00.000Z",
    lastDiff: { firstRun: false, added: 0, removed: 0 },
  }), null);
});

test("Discord payload disables all mention parsing", () => {
  const payload = buildDiscordPayload({ title: "New Update", description: "<@&123> @everyone" });
  assert.deepEqual(payload.allowed_mentions, { parse: [] });
  assert.equal(Object.hasOwn(payload, "content"), false);
});


test("GitHub Actions failure cursor is persisted only when its state changes", () => {
  const current = {
    initialized: true,
    baselineRunId: 100,
    pending: [101, 102],
  };
  assert.equal(workflowFailureStateChanged(current, {
    initialized: true,
    baselineRunId: 100,
    pending: [101, 102],
  }), false);
  assert.equal(workflowFailureStateChanged(current, {
    initialized: true,
    baselineRunId: 100,
    pending: [102, 101],
  }), false);
  assert.equal(workflowFailureStateChanged(current, {
    initialized: true,
    baselineRunId: 103,
    pending: [101, 102, 103],
  }), true);
  assert.equal(workflowFailureStateChanged(current, {
    initialized: true,
    baselineRunId: 102,
    pending: [101],
  }), true);
  assert.equal(workflowFailureStateChanged({
    initialized: false,
    baselineRunId: 0,
    pending: [],
  }, {
    initialized: true,
    baselineRunId: 100,
    pending: [],
  }), true);
});
