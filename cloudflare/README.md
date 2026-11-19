# External Bloxd monitor (Cloudflare Worker v3)

Cloudflare Cron Triggers run once per minute. The Worker checks live bundle files, parses Bloxd Update Logs, tracks scheduled releases, monitors preprod and the social shard fleet, and dispatches GitHub Actions only when an archived build differs.

## Monitored sources

- `bloxd.io`: production main bundle and Update Log.
- `preprod.bloxd.io`: preprod main bundle and Update Log differences.
- `staging.bloxd.io`: main bundle changes.
- `social1.bloxd.io` through `social29.bloxd.io`: availability probes.

## Discord notifications

The Worker uses exactly two Discord webhook secrets:

- `DISCORD_ENTRIES_WEBHOOK`: Entries-related notifications, including Entries bundle/build transitions and every successful extraction result from `Bloxd-Entries-Data/update-state.json` (additions, removals, ID changes, property changes, or an explicit no-changes status).
- `DISCORD_BUNDLE_WEBHOOK`: all other build and monitoring notifications, including production/preprod Update Log announcements and reminders, hotfixes, GitHub Actions failures, frontend/social incidents, recovery, and monitoring errors.

GitHub Actions performs extraction and commits the diff state; it does not send Discord messages directly. On each newly observed extraction, the Worker sends either the change summary or an explicit no-changes status to the Entries webhook. The Worker polls workflow runs and sends failure alerts through the Build webhook. All messages disable Discord mentions; channel-level notifications are managed in Discord.

Embeds use color to distinguish event types. Notification titles and descriptions avoid decorative emoji.

Discord delivery retries transient errors and honors the `retry_after` value on HTTP 429. State is marked as delivered only after Discord accepts the message. Discord webhook payloads disable all mention parsing; no role or user is pinged. GitHub Actions dispatches are handled independently: a Discord delivery failure is logged but does not block the Entries-Data or Build-Monitor update workflow.

## Update Log processing

The Worker follows the Webpack lazy-chunk reference from the production/preprod main bundle to find `updateLogsData`. If direct resolution fails, it checks one fallback chunk candidate per Cron run, retaining its cursor in KV until it finds the log chunk or reaches the 50-candidate ceiling. An exhausted scan applies a six-hour cooldown; direct chunk references are still checked during that period.

Production notifications:

- `New Update`: a newly published Update Log entry.
- `New Update (soon)`: a new entry whose resolved date is in the future.
- `公開予定時刻です`: the scheduled time passed but the production build has not moved to the update.
- `Hotfix`: the production bundle changed without a new Update Log entry.
- Update Log parsing failures are reported and retried on following runs.

Preprod notifications report newly added Update Log entries. Failed analyses are retained as pending work and retried, so an initial CDN propagation failure does not permanently lose the diff.

Update Log data is force-rechecked every 60 minutes even if the production main bundle filename remains unchanged. Scheduled-release reminders are checked every minute.

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

A social POST to `/social/get-game-ccus` normally returns HTTP 401/400 when the service is reachable without authentication. HTTP 5xx and connection timeouts are considered failures.

## State, retries, and diagnostics

The existing `NOTIFICATION_STATE` Workers KV namespace stores monitoring state, notification fingerprints, scheduled-release reminders, social shard state, and short incident history. Operational and social state share one KV record to reduce writes; routine state is persisted on its three-minute probe cadence and on state transitions, while repeated parse failures do not rewrite unchanged state. Webhook URLs and GitHub tokens are never stored in KV.

- `GET /health`: basic Worker health.
- `GET /stats`: read-only current monitor state, update-delay samples, social incidents, and last internal error.
- Internal error notifications identify the failed monitoring task, HTTP status, sanitized endpoint, and error detail. Identical task/status/endpoint failures are rate-limited to one notification per 30 minutes.
- Outbound GET requests retry once after network errors/timeouts or HTTP 408/425/429/5xx responses; permanent 4xx responses fail immediately.
- GitHub Actions failure cursors are written to KV only when their baseline or pending-run set changes; the once-per-minute poll does not cause a KV write by itself.
- Worker Logs, invocation logs, and Issues detection are enabled with full sampling. Query strings are redacted; Discord webhook URLs and credentials are never written to logs.
- A gap longer than 45 minutes between successful Cron executions is reported when monitoring resumes.

## Required bindings and secrets

Secrets (never commit their values):

- `GITHUB_TOKEN`: fine-grained token scoped to `Bloxd-Entries-Data` and `Bloxd-Build-Monitor`, with Contents read/write and Actions read.
- `DISCORD_BUNDLE_WEBHOOK`: Discord incoming webhook for bundle/incident alerts.
- `DISCORD_ENTRIES_WEBHOOK`: Discord incoming webhook for Entries alerts.

KV binding:

- `NOTIFICATION_STATE`: the existing `bloxd-dispatcher-notifications` namespace.

## Deploy

The Worker is deployed as `bloxd-build-dispatcher`, with a one-minute Cron Trigger. The configuration is in `wrangler.jsonc`.

```sh
npm install
npm test
npx wrangler deploy
```

Cloudflare Cron keeps running independently of GitHub Actions. The GitHub Actions schedule remains a six-hour fallback; change-triggered dispatches are used for prompt archive updates.
