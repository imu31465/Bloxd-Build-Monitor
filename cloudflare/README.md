# External Bloxd monitor (Cloudflare Worker v3)

Cloudflare Cron Triggers run once per minute. The Worker checks live bundle files, parses Bloxd Update Logs, tracks scheduled releases, monitors preprod and the social shard fleet, and dispatches GitHub Actions when an archived build differs.

## Monitored sources

- \`bloxd.io\`: production main bundle and Update Log.
- \`preprod.bloxd.io\`: preprod main bundle and Update Log differences.
- \`staging.bloxd.io\`: main bundle changes.
- \`social1.bloxd.io\` through \`social29.bloxd.io\`: availability probes.

## Discord notifications

The Worker uses exactly two Discord webhook secrets:

- \`DISCORD_ENTRIES_WEBHOOK\`: Entries-specific notifications: changes to the \`bloxd.io\` Entries bundle URL and data-diff summaries from \`Bloxd-Entries-Data/update-state.json\`, when a complete, non-baseline diff is available.
- \`DISCORD_BUNDLE_WEBHOOK\`: other build and monitoring notifications, including production/preprod Update Log notices and scheduled-release reminders, Build Monitor bundle-change batches, GitHub Actions failures, frontend/social incidents and recovery, and monitoring errors.

The Entries-Data GitHub Actions workflow performs extraction and commits the resulting \`update-state.json\`; it does not send Discord messages. The Worker reads that file and decides whether the diff is eligible for a notification. Build Monitor repository dispatches and Discord delivery are separate operations.

The Worker stores a notification fingerprint in KV only after Discord accepts the message. A repeated key/signature pair is suppressed; a failed delivery is not marked as sent and can be retried. Discord delivery retries transient errors and honors \`retry_after\` for HTTP 429. All webhook payloads disable mention parsing, so no role or user is pinged.

Embeds use color to distinguish event types. Notification titles and descriptions avoid decorative emoji.

### Entries data-diff notification conditions

The Entries data-diff cursor is based on \`lastRunAt\` in \`update-state.json\`:

- The first observation initializes the cursor and does not send a notification.
- An unchanged or older \`lastRunAt\` is ignored.
- A later extraction with \`lastDiff.firstRun === true\` does not send a notification.
- A normal diff is eligible only when all four counters are present and finite: \`added\`, \`removed\`, \`idChanged\`, and \`entryFilesChanged\`.
- If all four counters are zero, the Worker sends an explicit no-change notification.
- If one or more counters are non-zero, the Worker reports the corresponding additions, removals, ID changes, and property-file changes.
- A first-run or incomplete diff sends no status notification. The cursor still advances to that \`lastRunAt\`, so the Worker does not keep retrying that same incomplete result. If Discord delivery itself fails, the cursor is not advanced and the notification remains eligible for retry.

Entries bundle-change notifications are separate: when the current \`bloxd.io\` bundle URL differs from the last URL recorded by the Entries monitor, the Worker attempts the Entries-Data repository dispatch and sends an Entries webhook notification.

## Update Log processing

The Worker follows the Webpack lazy-chunk reference from the production/preprod main bundle to find \`updateLogsData\`. If direct resolution fails, it checks one fallback chunk candidate per Cron run, retaining its cursor in KV until it finds the log chunk or reaches the 50-candidate ceiling. An exhausted scan applies a six-hour cooldown; direct chunk references are still checked during that period.

### Production notifications

Production Update Log analysis runs on the initial baseline, when the production main-bundle filename changes, while a previous analysis is pending, and on a forced refresh every 60 minutes after initialization. New-entry detection examines only the latest 10 Update Log entries.

- \`New Update\`: a newly detected entry whose resolved date is current or in the past.
- \`New Update (soon)\`: a newly detected entry whose resolved date is in the future.
- \`No Update Log\`: the production main bundle changed, but no unseen entry was found among the latest 10 Update Log entries. This describes the Update Log scan only; it does not claim that the game had no code changes or that a hotfix occurred.
- \`公開予定時刻\`: a scheduled entry reached its planned time but is still not marked live by the Worker. These reminders are checked on each successful production-monitoring Cron run and are sent at most once per scheduled entry.

The first successful parse seeds the existing entries as a baseline and does not announce them as new updates. If the initial baseline cannot be parsed, the Worker retains it as pending and retries without sending a baseline-failure notification. After initialization, a parse failure associated with a changed production build is reported; the failed analysis remains pending and is retried on following Cron runs. A successful forced refresh also updates the latest-entry baseline.

### Preprod notifications

Preprod analysis runs when its main-bundle filename changes or when an earlier analysis is pending; it does not use the production 60-minute forced-refresh interval. New-entry detection examines the latest 10 entries.

- The first successful analysis records the existing entries as a baseline. If the archived preprod URL in \`.monitor-state.json\` differs from the current preprod URL, it also sends a \`Preprodビルド更新\` notice.
- After initialization, a successfully analyzed preprod build change always sends a \`Preprod更新\` notice, even when no new Update Log entry is found. In that case the description explicitly says \`No new Update Log entries\`.
- Newly found entries are included in the notice (up to five titles, with a count for any additional entries).
- If parsing a changed preprod build fails, the Worker sends a parse-failure notice and keeps the analysis pending. When a retry succeeds, newly found entries can produce a \`Preprod Update Log再確認\` notice; if no new entry is found on that retry, no separate success notice is sent.
- A failed initial baseline is retained and retried without a baseline notification.

## Build Monitor bundle notifications

The Worker compares the live main-bundle URL for each of \`bloxd.io\`, \`preprod.bloxd.io\`, and \`staging.bloxd.io\` with the corresponding \`build_url\` in the archived \`.monitor-state.json\`.

When one or more environments differ, the Worker:

1. Attempts a \`repository_dispatch\` to \`Bloxd-Build-Monitor\` with event type \`bloxd-build-changed\`, so GitHub Actions can archive the new bundle state.
2. Sends one combined \`ビルド更新\` Discord notification listing the changed environments.

The dispatch and Discord notification are attempted independently: a dispatch failure does not prevent the Worker from attempting the Discord notice, and a Discord delivery failure does not cancel the dispatch. Recent workflow activity is used to suppress duplicate dispatches. If all monitored bundle probes fail, the Worker reports a monitoring error instead of treating the failure as a build change. The GitHub Actions workflow also runs on a six-hour schedule as a fallback.

## Social availability monitoring

- Normal mode probes five shards every three minutes, rotating through all 29 shards.
- A detected failure, slow response, HTTP 403, or HTTP 429 escalates to a full-fleet check in the same run.
- Failed shards are rechecked on the following Cron run, so the full scan and confirmation probes do not exceed the Free plan's external subrequest budget in one invocation.
- Two or more persistent shard failures trigger a fleet incident alert.
- A single persistent shard is reported after five minutes.
- Short interruptions/slow responses are rate-limited to one alert per 30 minutes.
- A fleet incident is re-alerted every 30 minutes until recovery.
- HTTP 403/429 responses are treated as possible probe blocking, not as healthy responses; a broad block is reported every 60 minutes.
- The main Bloxd frontend is monitored separately for repeated HTTP 403/429/5xx/timeouts and recovery.

A social POST to \`/social/get-game-ccus\` normally returns HTTP 401/400 when the service is reachable without authentication. HTTP 5xx and connection timeouts are considered failures.

## State, retries, and diagnostics

The existing \`NOTIFICATION_STATE\` Workers KV namespace stores monitoring state, notification fingerprints, scheduled-release reminders, social shard state, and short incident history. Operational and social state share one KV record to reduce writes; routine state is persisted on its three-minute probe cadence and on state transitions, while repeated parse failures do not rewrite unchanged state. Webhook URLs and GitHub tokens are never stored in KV.

- \`GET /health\`: basic Worker health.
- \`GET /stats\`: read-only current monitor state, update-delay samples, social incidents, and last internal error.
- Internal error notifications identify the failed monitoring task, HTTP status, sanitized endpoint, and error detail. Identical task/status/endpoint failures are rate-limited to one notification per 30 minutes.
- The shared \`getText()\` GET helper retries once after network errors/timeouts or HTTP 408/425/429/5xx responses; permanent 4xx responses fail immediately.
- GitHub Actions failure cursors are written to KV only when their baseline or pending-run set changes; the once-per-minute poll does not cause a KV write by itself.
- Worker Logs, invocation logs, and Issues detection are enabled with full sampling. Query strings are redacted; Discord webhook URLs and credentials are never written to logs.
- A gap longer than 45 minutes in the recorded monitoring-cycle timestamp is reported when monitoring resumes. The timestamp is advanced by the social-monitor state cycle, not on every one-minute Cron invocation.

## Required bindings and secrets

Secrets (never commit their values):

- \`GITHUB_TOKEN\`: fine-grained token scoped to \`Bloxd-Entries-Data\` and \`Bloxd-Build-Monitor\`, with Contents read/write and Actions read.
- \`DISCORD_BUNDLE_WEBHOOK\`: Discord incoming webhook for bundle/incident alerts.
- \`DISCORD_ENTRIES_WEBHOOK\`: Discord incoming webhook for Entries alerts.

KV binding:

- \`NOTIFICATION_STATE\`: the existing \`bloxd-dispatcher-notifications\` namespace.

## Deploy

The Worker is deployed as \`bloxd-build-dispatcher\`, with a one-minute Cron Trigger. The configuration is in \`wrangler.jsonc\`.

\`\`\`sh
npm install
npm test
npx wrangler deploy
\`\`\`

Cloudflare Cron keeps running independently of GitHub Actions. The GitHub Actions schedule remains a six-hour fallback; change-triggered dispatches are used for prompt archive updates.
