# Changed — Bundle Modifications Report (Part 058 / 126)

- **Updated at**: `2026-11-28T08:15 JST`
- **Part**: `58 / 126` (**304** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 057](part-057.md) · [Part 059 →](part-059.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/615.js` (4udp6d.2845de07 → fl4vv.bd3c59ce · continued)

- **File**: `bundles/bloxd.io/chunks/js/615.js` (100 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87)

#### 44. `bundles/bloxd.io/chunks/js/615.js` (Changed code · before: `L6317-L6320` → after: `L2137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87R2137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87) · [After (L2137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/615.js#L2137) · [Before (L6317-L6320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/615.js#L6317-L6320)

```diff
- type Record<K extends keyof any, T> = {
-     [P in K]: T;
- };
- 
+ queueCrosshairText(playerId: PlayerId, text: string | CustomTextStyling, duration: number): QueuedCommandId
```

#### 45. `bundles/bloxd.io/chunks/js/615.js` (Changed code · before: `L6322` → after: `L2139-L2142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87R2139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87) · [After (L2139-L2142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/615.js#L2139-L2142) · [Before (L6322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/615.js#L6322)

```diff
-  * Exclude from T those types that are assignable to U
+  * Get the status of a queued command.
+  *
+  * @param id The ID of the queued command to get the status of.
+  * @returns NOT_IN_QUEUE, WAITING_TO_RUN, or CURRENTLY_RUNNING.
```

#### 46. `bundles/bloxd.io/chunks/js/615.js` (Changed code · before: `L6324-L6325` → after: `L2144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87R2144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87) · [After (L2144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/615.js#L2144) · [Before (L6324-L6325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/615.js#L6324-L6325)

```diff
- type Exclude<T, U> = T extends U ? never : T;
- 
+ getQueuedStatus(id: QueuedCommandId): QueuedStatusString
```

#### 47. `bundles/bloxd.io/chunks/js/615.js` (Changed code · before: `L6327` → after: `L2146-L2148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87R2146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87) · [After (L2146-L2148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/615.js#L2146-L2148) · [Before (L6327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/615.js#L6327)

```diff
-  * Extract from T those types that are assignable to U
+  * Remove a queued command from the queue.
+  *
+  * @param id The ID of the queued command to remove.
```

#### 48. `bundles/bloxd.io/chunks/js/615.js` (Changed code · before: `L6329-L6330` → after: `L2150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87R2150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87) · [After (L2150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/615.js#L2150) · [Before (L6329-L6330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/615.js#L6329-L6330)

```diff
- type Extract<T, U> = T extends U ? T : never;
- 
+ removeFromQueue(id: QueuedCommandId): void
```

#### 49. `bundles/bloxd.io/chunks/js/615.js` (Changed code · before: `L6332` → after: `L2152-L2174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87R2152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87) · [After (L2152-L2174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/615.js#L2152-L2174) · [Before (L6332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/615.js#L6332)

```diff
-  * Construct a type with the properties of T except for those in type K.
+  * Add a request for the player to answer in the top right corner. E.g. accepting or denying a tprequest.
+  *
+  * Use onUiRequestResponded to handle the response.
+  *
+  * Example Usage:
+  * \`\`\`js
+  * const myRequestId = api.addUiRequest(playerId, {
+  *   type: "standard",
+  *   title: "Do you want to join the game?",
+  * }, 5000)
+  *
+  * onUiRequestResponded = (playerId, uiRequestId, response) => {
+  *   if (uiRequestId === myRequestId) {
+  *     api.log(response)
+  *   }
+  * }
+ ... (7 more added lines; see GitHub link above)
```

#### 50. `bundles/bloxd.io/chunks/js/615.js` (Changed code · before: `L6334-L6341` → after: `L2176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87R2176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87) · [After (L2176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/615.js#L2176) · [Before (L6334-L6341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/615.js#L6334-L6341)

```diff
- type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
- 
- type ArrayBufferLike = ArrayBufferTypes[keyof ArrayBufferTypes];
- 
- declare var NaN: number;
- 
- declare var Infinity: number;
- 
+ addUiRequest(playerId: PlayerId, parameters: UiRequestClientParameters, timeoutAfterMs?: number): UiRequestId
```

#### 51. `bundles/bloxd.io/chunks/js/615.js` (Changed code · before: `L6343` → after: `L2178-L2195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87R2178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87) · [After (L2178-L2195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/615.js#L2178-L2195) · [Before (L6343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/615.js#L6343)

```diff
-  * Provides functionality common to all JavaScript objects.
+  * Add a request for the player to answer in the form of a popup. This blocks the player from doing anything else until they respond.
+  *
+  * Use onUiRequestResponded to handle the response.
+  *
+  * Example Usage:
+  * \`\`\`js
+  * const myRequestId = api.addUiRequestPopup(playerId, "Do you want to join the game?")
+  *
+  * onUiRequestResponded = (playerId, uiRequestId, response) => {
+  *   if (uiRequestId === myRequestId) {
+  *     api.log(response)
+  *   }
+  * }
+  * \`\`\`
+  *
+  * @param playerId The ID of the player to add the request to.
+ ... (2 more added lines; see GitHub link above)
```

#### 52. `bundles/bloxd.io/chunks/js/615.js` (Changed code · before: `L6345-L6348` → after: `L2197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87R2197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87) · [After (L2197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/615.js#L2197) · [Before (L6345-L6348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/615.js#L6345-L6348)

```diff
- declare var Object: ObjectConstructor;
- 
- declare var Function: FunctionConstructor;
- 
+ addUiRequestPopup(playerId: PlayerId, requestText: string): UiRequestId | null
```

#### 53. `bundles/bloxd.io/chunks/js/615.js` (Changed code · before: `L6350` → after: `L2199-L2203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87R2199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87) · [After (L2199-L2203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/615.js#L2199-L2203) · [Before (L6350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/615.js#L6350)

```diff
-  * Allows manipulation and formatting of text strings and determination and location of substrings within strings.
+  * Matchmake a player into a sub-variation of the current custom game.
+  * Pass \`"default"\` for the default variation.
+  *
+  * @param playerId The player to matchmake
+  * @param varname Sub-variation name (\`[A-Za-z0-9_-]\`, 1-32 chars), or \`"default"\`
```

#### 54. `bundles/bloxd.io/chunks/js/615.js` (Changed code · before: `L6352-L6365` → after: `L2205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87R2205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87) · [After (L2205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/615.js#L2205) · [Before (L6352-L6365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/615.js#L6352-L6365)

```diff
- declare var String: StringConstructor;
- 
- declare var Boolean: BooleanConstructor;
- 
- /** An object that represents a number of any kind. All JavaScript numbers are 64-bit floating-point numbers. */
- declare var Number: NumberConstructor;
- 
- /** An intrinsic object that provides basic mathematics functionality and constants. */
- declare var Math: Math;
- 
- declare var RegExp: RegExpConstructor;
- 
- declare var Error: ErrorConstructor;
- 
+ matchmakeToVariation(playerId: PlayerId, varname: string): void
```

#### 55. `bundles/bloxd.io/chunks/js/615.js` (Changed code · before: `L6367` → after: `L2207-L2208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87R2207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87) · [After (L2207-L2208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/615.js#L2207-L2208) · [Before (L6367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/615.js#L6367)

```diff
-  * An intrinsic object that provides functions to convert JavaScript values to and from the JavaScript Object Notation (JSON) format.
+  * Get the current sub-variation name.
+  * Returns \`"default"\` when there is no named sub-variation.
```

#### 56. `bundles/bloxd.io/chunks/js/615.js` (Changed code · before: `L6369-L6390` → after: `L2210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87R2210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87) · [After (L2210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/615.js#L2210) · [Before (L6369-L6390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/615.js#L6369-L6390)

```diff
- declare var JSON: JSON;
- 
- declare var Array: ArrayConstructor;
- 
- declare var ArrayBuffer: ArrayBufferConstructor;
- 
- declare var Int8Array: Int8ArrayConstructor;
- 
- declare var Uint8Array: Uint8ArrayConstructor;
- 
- declare var Int16Array: Int16ArrayConstructor;
- 
- declare var Uint16Array: Uint16ArrayConstructor;
- 
- declare var Int32Array: Int32ArrayConstructor;
- 
- ... (6 more removed lines; see GitHub link above)
+ getVariation(): string
```

#### 57. `bundles/bloxd.io/chunks/js/615.js` (Changed code · before: `L6392-L6393` → after: `L2212-L2215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87R2212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87) · [After (L2212-L2215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/615.js#L2212-L2215) · [Before (L6392-L6393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/615.js#L6392-L6393)

```diff
-  * Evaluates JavaScript code and executes it.
-  * @param x A String value that contains valid JavaScript code.
+  * Whether the player joined with this custom game's texture pack applied. False if they skipped applying it
+  * (kicking them shows the prompt again when they rejoin).
+  * Only published custom games prompt for their pack, so anywhere else this says so and returns true.
+  * @param playerId
```

#### 58. `bundles/bloxd.io/chunks/js/615.js` (Changed code · before: `L6395-L6687` → after: `L2217-L2221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87R2217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87) · [After (L2217-L2221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/615.js#L2217-L2221) · [Before (L6395-L6687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/615.js#L6395-L6687)

```diff
- declare function eval(x: string): any;
- 
- interface ErrorConstructor {
-     /**
-      * Indicates whether the argument provided is a built-in Error instance or not.
-      */
-     isError(error: unknown): error is Error;
- }
- 
- interface Math {
-     /**
-      * Returns the nearest half precision float representation of a number.
-      * @param x A numeric expression.
-      */
-     f16round(x: number): number;
- }`
- ... (277 more removed lines; see GitHub link above)
+ isUsingCustomGameTexturePack(playerId: PlayerId): boolean
+ /**
+  * Log a message to chat.
+ */
+ log(message: any): void
```

#### 59. `bundles/bloxd.io/chunks/js/615.js` (Changed code · before: `L6689-L6699` → after: `L2223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87R2223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87) · [After (L2223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/615.js#L2223) · [Before (L6689-L6699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/615.js#L6689-L6699)

```diff
- declare global {
- 	/** The ID of the player running the code.
- 	 *
- 	 * Lobby code usually has nobody running it, so this is null.
- 	 */
- 	const myId: string | null
- 	/** The position of the code block or press to code board */
- 	const thisPos: [number, number, number]
- 	/** The owner of the current custom lobby */
- 	const lobbyOwnerId: string | null
- 	const console: Console
+ 	}
```

#### 60. `bundles/bloxd.io/chunks/js/615.js` (Changed code · before: `L6701-L7091` → after: `L2225-L2452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87R2225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87) · [After (L2225-L2452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/615.js#L2225-L2452) · [Before (L6701-L7091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/615.js#L6701-L7091)

```diff
- 	const api: GameApi
- 
- 	/**
- 	 * Called every tick, 20 times per second
- 	 * @param ms - The fixed timestep, can be used as "milliseconds since last tick"
- 	 */
- 	var tick: (ms: number) => void
- 
- 	/**
- 	 * Called when the lobby is shutting down
- 	 * @param serverIsShuttingDown - Whether the server is shutting down
- 	 */
- 	var onClose: (serverIsShuttingDown: boolean) => void
- 
- 	/**
- 	 * Called when a player joins the lobby. A player shown an ad as they join holds their place in the lobby during it, but only joins, and is only in getPlayerIds, once it ends, unless the game turns that off (api.setJoinsWaitForAds)
- ... (375 more removed lines; see GitHub link above)
+ 	declare const api: GameApi;
+ type EntityId = string
+ type Pos = [number, number, number]
+ type LifeformId = EntityId
+ type PlayerId = LifeformId
+ type PlayerDbId = string
+ type LifeformBodyPart = (_TypeOf["lifeformBodyParts"])[number]
+ interface PlayerAttemptDamageOtherPlayerOpts {
+ 	eId: PlayerId
+ 	hitEId: PlayerId
+ 	attemptedDmgAmt: number
+ 	withItem: string
+ 	bodyPartHit?: LifeformBodyPart
+ 	attackDir?: number[]
+ 	showCritParticles?: boolean
+ 	reduceVerticalKbVelocity?: boolean
+ ... (212 more added lines; see GitHub link above)
```

#### 61. `bundles/bloxd.io/chunks/js/615.js` (Changed code · before: `L7093-L7098` → after: `L2454-L2457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87R2454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87) · [After (L2454-L2457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/615.js#L2454-L2457) · [Before (L7093-L7098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/615.js#L7093-L7098)

```diff
- 	 * Called when a player is damaging another player
- 	 * Return "preventDamage" to prevent damage
- 	 * Return number to change damage dealt to that amount
- 	 * Sometimes the damager will have left the game (e.g. spikes placer);
- 	 * in this case, attackingPlayer will be the damagedPlayer,
- 	 * but we pass damagerDbId for use cases where it's important.
+ 	 * What the offset is from. "feet" (default): the target's feet. "eye": a player's or mob's eye (anything else's
+ 	 * position), looking where the target looks, their heading and pitch, unless lookAt or lookDirection is set: watch
+ 	 * another player through their eyes. A player's body is hidden while the camera is inside it. The player's own eye
+ 	 * looks level.
```

#### 62. `bundles/bloxd.io/chunks/js/615.js` (Changed code · before: `L7100-L7201` → after: `L2459-L2481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87R2459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87) · [After (L2459-L2481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/615.js#L2459-L2481) · [Before (L7100-L7201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/615.js#L7100-L7201)

```diff
- 	var onPlayerDamagingOtherPlayer: (attackingPlayer: PlayerId, damagedPlayer: PlayerId, damageDealt: number, withItem: string, bodyPartHit: LifeformBodyPart, damagerDbId: PlayerDbId, damageInfo: DamageInfo) => number | void | "preventDamage"
- 
- 	/**
- 	 * Called when a player is damaging a mob
- 	 * Return "preventDamage" to prevent damage
- 	 * Return number to change damage dealt to that amount
- 	 */
- 	var onPlayerDamagingMob: (playerId: PlayerId, mobId: MobId, damageDealt: number, withItem: string, damagerDbId: PlayerDbId, damageInfo: DamageInfo) => number | void | "preventDamage"
- 
- 	/**
- 	 * Called when a mob is damaging a player
- 	 * Return "preventDamage" to prevent damage
- 	 * Return number to change damage dealt to that amount
- 	 * @param attackingMob the id of the mob damaging the player
- 	 * @param damagedPlayer the id of the player being damaged
- 	 * @param damageDealt the amount of damage dealt
- ... (86 more removed lines; see GitHub link above)
+ 	anchor?: CameraFollowAnchor
+ 	/** Where the camera sits relative to the anchor, in blocks. Default [0, 0, 0]. */
+ 	offset?: Pos
+ 	/** "world" (default) keeps the offset on world axes; "target" turns it with the target's heading, +z ahead of the target. */
+ 	offsetSpace?: CameraOffsetSpace
+ 	/** What to look at. Defaults to the target. */
+ 	lookAt?: CameraTarget
+ 	lookDirection?: Pos
+ 	/** Trail behind the target by about this many ms. 0 sticks to it. */
+ 	smoothMs?: number
+ 	/** Move in towards the target rather than go through terrain between them, for side-on and chase cameras. Default false: a top-down camera would dive through treetops. */
+ 	avoidTerrain?: boolean
+ }
+ type PathCameraSettings = CameraSettingsBase & {
+ 	mode: "path"
+ 	keyframes: CameraPathKeyframe[]
+ ... (7 more added lines; see GitHub link above)
```

#### 63. `bundles/bloxd.io/chunks/js/615.js` (Changed code · before: `L7203` → after: `L2483-L2485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87R2483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87) · [After (L2483-L2485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/615.js#L2483-L2485) · [Before (L7203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/615.js#L7203)

```diff
- 	 * Called when a player's thrown projectile hits the terrain
+ 	 * The entities and positions to keep in view. Entities the player is too far from to see, or that have left, are
+ 	 * left out. With none to frame, an empty list too, the camera holds where and how far it last framed, at this
+ 	 * camera's own angle, or frames the player if it has framed nothing yet.
```

#### 64. `bundles/bloxd.io/chunks/js/615.js` (Changed code · before: `L7205-L7206` → after: `L2487-L2497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87R2487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87) · [After (L2487-L2497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/615.js#L2487-L2497) · [Before (L7205-L7206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/615.js#L7205-L7206)

```diff
- 	var onPlayerThrowableHitTerrain: (playerId: PlayerId, throwableName: ThrowableItem, thrownEntityId: EntityId) => void
- 
+ 	targets: CameraTarget[]
+ 	/** Compass direction the camera looks in, in degrees: 0 looks along +z, 90 along +x. Default 0. */
+ 	viewHeading?: number
+ 	/** Degrees the camera looks down, from 0 (level) to 90 (straight down). Default 45. */
+ 	viewElevation?: number
+ 	/** Blocks of space to keep around the targets. Default 2. */
+ 	padding?: number
+ 	/** Closest the camera comes to the middle of the targets, in blocks. Default 6, or furthestDistance if that is closer. */
+ 	closestDistance?: number
+ 	/** Furthest the camera goes from the middle of the targets, in blocks, even if some targets leave the view. Default 64, or closestDistance if that is further. */
+ 	furthestDistance?: number
```

#### 65. `bundles/bloxd.io/chunks/js/615.js` (Changed code · before: `L7208-L7212` → after: `L2499-L2500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87R2499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87) · [After (L2499-L2500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/615.js#L2499-L2500) · [Before (L7208-L7212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/615.js#L7208-L7212)

```diff
- 	 * Set client option \`touchscreenActionButton\` to take effect
- 	 * Called when a player presses the touchscreen action button
- 	 * Called for both touchDown and touchUp
- 	 * @param playerId - The id of the player pressing the touchscreen action button
- 	 * @param touchDown - Whether the touchscreen action button was pressed or released
+ 	 * Ease towards a new framing over about this many ms as the targets move, and round to a new angle from the frame
+ 	 * camera this one replaces. 0 sticks to them. Default 400.
```

#### 66. `bundles/bloxd.io/chunks/js/615.js` (Changed code · before: `L7214-L7215` → after: `L2502-L2512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87R2502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87) · [After (L2502-L2512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/615.js#L2502-L2512) · [Before (L7214-L7215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/615.js#L7214-L7215)

```diff
- 	var onTouchscreenActionButton: (playerId: PlayerId, touchDown: boolean) => void
- 
+ 	smoothMs?: number
+ }
+ type CameraSettingsBase = {
+ 	/** Blend from the current view into this camera over this many ms. 0 cuts straight to it. */
+ 	blendInMs?: number
+ 	/** How the blend eases. Default "easeInOut". */
+ 	blendEasing?: CameraEasing
+ 	/** Fade into this camera through a colour instead, cutting to it under the colour: blendInMs is ignored. */
+ 	transition?: CameraTransition
+ 	/** Cinematic bars across the top and bottom of the screen while this camera is on. Presses on the bars do nothing in the world, and dragging on them doesn't turn the camera. */
+ 	letterbox?: boolean
```

#### 67. `bundles/bloxd.io/chunks/js/615.js` (Changed code · before: `L7217-L7221` → after: `L2514-L2515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87R2514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87) · [After (L2514-L2515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/615.js#L2514-L2515) · [Before (L7217-L7221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/615.js#L7217-L7221)

```diff
- 	 * Called when a player claims a task
- 	 * @param playerId - The id of the player claiming the task
- 	 * @param taskId - The id of the task being claimed
- 	 * @param isPromoTask - Whether the task is a promo task
- 	 * @param claimedRewards - The rewards claimed by the player
+ 	 * Hide the HUD while this camera is on. Nametags, dialogue, the chat being typed in, the respawn and sleeping screens,
+ 	 * QTEs, UI requests, touch controls and the settings button on touch screens stay.
```

#### 68. `bundles/bloxd.io/chunks/js/615.js` (Changed code · before: `L7223-L7224` → after: `L2517-L2519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87R2517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87) · [After (L2517-L2519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/615.js#L2517-L2519) · [Before (L7223-L7224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/615.js#L7223-L7224)

```diff
- 	var onTaskClaimed: (playerId: string, taskId: any, isPromoTask: any, claimedRewards: any) => any
- 
+ 	hideHud?: boolean
+ 	/** Field of view in degrees. Omit to keep the player's own. */
+ 	fov?: number
```

#### 69. `bundles/bloxd.io/chunks/js/615.js` (Changed code · before: `L7226-L7234` → after: `L2521-L2524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87R2521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87) · [After (L2521-L2524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/615.js#L2521-L2524) · [Before (L7226-L7234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/615.js#L7226-L7234)

```diff
- 	 * Called when a chunk is first loaded
- 	 * API Methods that modify the chunk like setBlock cannot be used here to make
- 	 * persisted changes, and will introduce client-server desync most cases,
- 	 * but might have some creative uses if you know what you're doing.
- 	 * For most use cases, consider using another callback e.g. tick.
- 	 * @param chunkId - The id of the chunk being loaded
- 	 * @param chunk - The chunk being loaded, which can be modified by this callback
- 	 * For world code callbacks this value will always be null.
- 	 * @param wasPersistedChunk - Whether the chunk was persisted
+ 	 * Which way the player's body faces while this camera is on. Movement is always relative to the camera.
+ 	 * "movement" (default): turns to face where they walk. "camera": faces where the camera looks.
+ 	 * "cursor": shows the mouse cursor and faces what is under it, or what was last tapped on touch screens, aiming
+ 	 * blocks, hits and shots there; the mouse no longer turns the camera. For top-down and isometric games.
```

#### 70. `bundles/bloxd.io/chunks/js/615.js` (Changed code · before: `L7236-L7237` → after: `L2526-L2618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87R2526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87) · [After (L2526-L2618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/615.js#L2526-L2618) · [Before (L7236-L7237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/615.js#L7236-L7237)

```diff
- 	var onChunkLoaded: (chunkId: string, chunk: LoadedChunk, wasPersistedChunk: boolean) => void
- 
+ 	playerFacing?: CameraPlayerFacing
+ 	playerLook?: CameraPlayerLook
+ }
+ type CameraEasing = (_TypeOf["CAMERA_EASING_NAMES"])[number] | [number, number, number, number]
+ type CameraTransition = {
+ 	/** "#rrggbb". Default "#000000". A fade already showing keeps its colour until the screen clears. */
+ 	colour?: string
+ 	/** At least 200. */
+ 	outMs: number
+ 	/** Default 0. */
+ 	holdMs?: number
+ 	/** At least 200. */
+ 	inMs: number
+ }
+ type CameraPlayerFacing = (_TypeOf["CAMERA_PLAYER_FACINGS"])[number]
+ type CameraPlayerLook = {
+ ... (77 more added lines; see GitHub link above)
```

#### 71. `bundles/bloxd.io/chunks/js/615.js` (Changed code · before: `L7239` → after: `L2620-L2621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87R2620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87) · [After (L2620-L2621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/615.js#L2620-L2621) · [Before (L7239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/615.js#L7239)

```diff
- 	 * Called when a player requests a chunk
+ 	 * The search box. \`item\` is the player's searched item; \`extra\` and \`excluded\` adjust the creative items it finds;
+ 	 * \`names\` holds the names this player sees for items a game renamed
```

#### 72. `bundles/bloxd.io/chunks/js/615.js` (Changed code · before: `L7241-L7242` → after: `L2623-L2877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87R2623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87) · [After (L2623-L2877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/615.js#L2623-L2877) · [Before (L7241-L7242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/615.js#L7241-L7242)

```diff
- 	var onPlayerRequestChunk: (playerId: PlayerId, chunkX: number, chunkY: number, chunkZ: number, chunkId: string) => void
- 
+ 	| { kind: "search"; item: string | null; extra?: readonly string[]; excluded?: readonly string[]; names?: Readonly<Record<string, string>> }
+ 	/** A plain listing or order box for the searched item. \`owned\` is how many the player has */
+ 	| { kind: "creator"; item: string | null; step: "quantity" | "price"; owned: number; quantity?: number; fee?: SmpListingFeeRule }
+ 	/** A listing box for one enchanted copy, listed whole */
+ 	| { kind: "enchantedCreator"; item: string; quantity: number }
+ 	/** A market listing. \`seller\` is null for the player's own */
+ 	| { kind: "listing"; item: string; quantity: number; pricePerItem: number; seller: string | null; expiresAt: number }
+ 	/** An Instant Sell stack */
+ 	| { kind: "sell"; item: string; quantity: number; pricePerItem: number }
+ 	/** Gold from a sale, or items back from an expired listing */
+ 	| { kind: "collect"; type: "sold" | "expired"; item: string; quantity: number; pricePerItem: number }
+ 	/** One of the player's active listings */
+ 	| { kind: "myListing"; item: string; quantity: number; pricePerItem: number; expiresAt: number }
+ 	/** A buy order. \`creator\` is null for the player's own; \`owned\` is how many the player could deliver; \`processing\` while a delivery to it is on its way */
+ 	| { kind: "order"; item: string; wanted: number; delivered: number; pricePerItem: number; creator: string | null; owned: number; processing?: boolean }
+ 	/** One of the player's orders, or delivered items left over from one */
+ ... (239 more added lines; see GitHub link above)
```

#### 73. `bundles/bloxd.io/chunks/js/615.js` (Changed code · before: `L7244` → after: `L2879-L2880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87R2879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87) · [After (L2879-L2880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/615.js#L2879-L2880) · [Before (L7244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/615.js#L7244)

```diff
- 	 * Called when an item drop is created
+ 	 * Whether each frame fades into the next (Minecraft's \`interpolate\`), rather than cutting to it: one in-between frame
+ 	 * per pair, at half the interval, for intervals of 200 ms or more. Default true.
```

#### 74. `bundles/bloxd.io/chunks/js/615.js` (Changed code · before: `L7246-L7247` → after: `L2882-L2920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87R2882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87) · [After (L2882-L2920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/615.js#L2882-L2920) · [Before (L7246-L7247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/615.js#L7246-L7247)

```diff
- 	var onItemDropCreated: (itemEId: EntityId, itemName: string, itemAmount: number, x: number, y: number, z: number) => void
- 
+ 	interpolateFrames?: boolean
+ }
+ type HarvestType = "granule" | "wood" | "rock" | "cuttable"
+ type BlockMetadataModelType =
+ 	| "CentreCross"
+ 	| "SquareSided"
+ 	| "CustomPlanes"
+ 	| "CustomModel"
+ 	| "Slab"
+ 	| "Stairs"
+ 	| "door"
+ 	| "trapdoor"
+ 	| "rotatableOffset"
+ 	| "rotatable"
+ 	| "fence"
+ 	| "fenceGate"
+ ... (23 more added lines; see GitHub link above)
```

#### 75. `bundles/bloxd.io/chunks/js/615.js` (Changed code · before: `L7249-L7251` → after: `L2922-L2923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87R2922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87) · [After (L2922-L2923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/615.js#L2922-L2923) · [Before (L7249-L7251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/615.js#L7249-L7251)

```diff
- 	 * Called when a player starts charging an item
- 	 * @param playerId - The id of the player charging the item
- 	 * @param itemName - The name of the item being charged
+ 	 * ms from equipping to the first shot. A game overriding fireRate, fireRateWithHeldTouch or cadenceMs without its own
+ 	 * equipDelay waits the fire interval less 0.9 of cadenceMs instead
```

#### 76. `bundles/bloxd.io/chunks/js/615.js` (Changed code · before: `L7253-L7254` → after: `L2925-L3284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87R2925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87) · [After (L2925-L3284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/615.js#L2925-L3284) · [Before (L7253-L7254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/615.js#L7253-L7254)

```diff
- 	var onPlayerStartChargingItem: (playerId: PlayerId, itemName: string) => void | "preventCharge"
- 
+ 	equipDelay?: number
+ 	burstCount?: number
+ 	burstDelay?: number
+ 	damage: number
+ 	shotPelletCount?: number
+ 	reloadTime?: number
+ 	clipSize: number
+ 	reloadBulletsIndividually?: boolean
+ 	bulletReloadTime?: number
+ 	cockTime?: number
+ 	tagSpeedMult: number
+ 	subsequentTagSpeedReductionScalar: number
+ 	inaccuracyStanding: number
+ 	inaccuracyFromShot: number
+ 	inaccuracyMovement: number
+ 	yVelocityInaccuracy: number
+ ... (344 more added lines; see GitHub link above)
```

#### 77. `bundles/bloxd.io/chunks/js/615.js` (Changed code · before: `L7256` → after: `L3286-L3288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87R3286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87) · [After (L3286-L3288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/615.js#L3286-L3288) · [Before (L7256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/615.js#L7256)

```diff
- 	 * Called when a player finishes charging an item
+ 	 * Keep the mob in this state until you set another one: it never times out, ignores nearby players and doesn't
+ 	 * fight back when hit. It still leaves the state when the state ends itself, such as when its target leaves the
+ 	 * game or turns invisible, or when it is tamed. A charge can't be held: it lasts one leg as usual.
```

#### 78. `bundles/bloxd.io/chunks/js/615.js` (Changed code · before: `L7258-L7259` → after: `L3290-L3517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87R3290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87) · [After (L3290-L3517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/615.js#L3290-L3517) · [Before (L7258-L7259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/615.js#L7258-L7259)

```diff
- 	var onPlayerFinishChargingItem: (playerId: PlayerId, used: boolean, itemName: string, duration: number) => void
- 
+ 	hold?: boolean
+ }
+ type MeshEntityType = keyof MeshEntityOpts
+ type MeshEntityOpts = {
+ 	Box: CommonMeshEntityOpts & {
+ 		width: number
+ 		height: number
+ 		depth: number
+ 		diffuseColor?: number[]
+ 		emissiveColor?: number[]
+ 		backFaceCulling?: boolean // Default true
+ 		texture?: string // Can be a blockname. Wraps every one block
+ 		faceUV?: number[][]
+ 		animateTexture?: boolean // If true, \`texture\` must be an animated block name (e.g. "Lava", "Red Portal") and the Box cycles through its frames.
+ 	}
+ 	BloxdBlock: CommonMeshEntityOpts & {
+ ... (212 more added lines; see GitHub link above)
```

#### 79. `bundles/bloxd.io/chunks/js/615.js` (Changed code · before: `L7261-L7264` → after: `L3519-L3521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87R3519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87) · [After (L3519-L3521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/615.js#L3519-L3521) · [Before (L7261-L7264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/615.js#L7261-L7264)

```diff
- 	 * Called once when a fishing hook first enters water. Coordinates are the bob's position at water entry.
- 	 * Return "preventFish" to cancel, or { caughtItemName?, biteDelayMs?, qte? } to select the fish and override the rod's bite delay
- 	 * and nine-second timed-click QTE. Default delays are Rusty 7–9 seconds, Sturdy 5–7, and Carbon/other rods 2–4.
- 	 * The selected fish is fixed for the attempt; omitting caughtItemName uses the engine's default fish selection.
+ 	 * How hard the rider pushes off the ground when jumping, compared to a normal jump. \`0\` = cannot jump.
+ 	 * Multiplies the \`jumpAmount\` client option rather than replacing it, and heavier types need a bigger
+ 	 * value to reach the same height.
```

#### 80. `bundles/bloxd.io/chunks/js/615.js` (Changed code · before: `L7266-L7267` → after: `L3523-L3529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87R3523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87) · [After (L3523-L3529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/615.js#L3523-L3529) · [Before (L7266-L7267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/615.js#L7266-L7267)

```diff
- 	var onPlayerAttemptFish: (playerId: PlayerId, rodName: string, x: number, y: number, z: number) => void | FishingAttemptOptions | "preventFish"
- 
+ 	jumpMultiplier: number
+ 	/** An upward shove the moment the rider uses the vehicle, like a balloon lifting off. \`0\` = none. */
+ 	upwardImpulseOnUse: number
+ 	/** Whether it climbs one-block steps by itself, rather than the rider jumping them. */
+ 	canAutoStep: boolean
+ 	/** Overrides \`canAutoStep\` for particular blocks, by block name. Unlisted blocks use \`canAutoStep\`. */
+ 	canAutoStepByBlock: Readonly<Record<BlockName, boolean>>
```

#### 81. `bundles/bloxd.io/chunks/js/615.js` (Changed code · before: `L7269-L7273` → after: `L3531-L3532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87R3531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87) · [After (L3531-L3532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/615.js#L3531-L3532) · [Before (L7269-L7273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/615.js#L7269-L7273)

```diff
- 	 * Called after the fishing QTE succeeds and the bob/session have been removed.
- 	 * Coordinates are the fishing position captured at water entry. caughtItemName is the item selected for the attempt.
- 	 * Returning nothing gives one of that item, or drops it if the inventory is full.
- 	 * Return "preventDrop" to suppress the default reward and award custom catches here instead.
- 	 * Return "preventItemGrant" to deliver the item yourself while keeping the default catch effects.
+ 	 * Where the rider sits, as \`[x, y, z]\` blocks from the middle of the vehicle. A rideable mob defaults
+ 	 * to its own ride height rather than to this type's value.
```

#### 82. `bundles/bloxd.io/chunks/js/615.js` (Changed code · before: `L7275-L7276` → after: `L3534-L3536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87R3534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87) · [After (L3534-L3536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/615.js#L3534-L3536) · [Before (L7275-L7276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/615.js#L7275-L7276)

```diff
- 	var onPlayerSucceededFishCatch: (playerId: PlayerId, rodName: string, x: number, y: number, z: number, caughtItemName: ItemName) => void | "preventDrop" | "preventItemGrant"
- 
+ 	riderOffset: Pos
+ 	/** How the rider's body is posed while riding. */
+ 	pose: PlayerPose
```

#### 83. `bundles/bloxd.io/chunks/js/615.js` (Changed code · before: `L7278-L7280` → after: `L3538-L3540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87R3538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87) · [After (L3538-L3540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/615.js#L3538-L3540) · [Before (L7278-L7280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/615.js#L7278-L7280)

```diff
- 	 * Called after the fishing QTE fails or its time window expires, after removing the bob/session.
- 	 * Coordinates are the fishing position captured at water entry. Retracting, switching rods, dying, and leaving cancel silently.
- 	 * caughtItemName is the item selected for the failed attempt; no reward is given.
+ 	 * A badge shown to the rider for as long as they ride. \`null\` = none. \`icon\` is an ingame icon or an
+ 	 * item name. \`name\` must be one that a physics type already uses, such as \`"Driving"\` or \`"Boating"\`,
+ 	 * because only those are cleared again when the rider gets off.
```

#### 84. `bundles/bloxd.io/chunks/js/615.js` (Changed code · before: `L7282-L7286` → after: `L3542-L3552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87R3542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87) · [After (L3542-L3552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/615.js#L3542-L3552) · [Before (L7282-L7286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/615.js#L7282-L7286)

```diff
- 	var onPlayerFailedFishCatch: (playerId: PlayerId, rodName: string, x: number, y: number, z: number, caughtItemName: ItemName) => void
- 
- 	
- 	var onPlayerFinishQTE: (playerId: PlayerId, qteId: QTERequestId, result: boolean) => void
- 
+ 	effect: { name: string; icon: string; duration?: number } | null
+ 	/** How quickly it slows to a stop once the rider stops steering. Bigger = stops sooner. */
+ 	standingFriction: number
+ 	/** Its top speed, as a multiplier on normal walking speed. \`0\` = it cannot move. */
+ 	speedMultiplier: number
+ 	/** An extra speed multiplier used while on solid ground. */
+ 	landSpeedMultiplier: number
+ 	/** An extra speed multiplier used while in water or lava. */
+ 	fluidSpeedMultiplier: number
+ 	/** An extra speed multiplier used while in the air. */
+ 	airSpeedMultiplier: number
```

#### 85. `bundles/bloxd.io/chunks/js/615.js` (Changed code · before: `L7288-L7290` → after: `L3554-L3556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87R3554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87) · [After (L3554-L3556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/615.js#L3554-L3556) · [Before (L7288-L7290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/615.js#L7288-L7290)

```diff
- 	 * Called when a player opens or closes the shop menu
- 	 * @param playerId - The id of the player whose shop menu changed
- 	 * @param isOpen - Whether the shop menu is now open
+ 	 * Extra speed multipliers for the block underfoot, by block name. Solid ground only, and stacks with
+ 	 * \`speedMultiplier\` and the land/fluid/air multiplier. When several listed blocks are underfoot, the
+ 	 * value furthest from \`1\` wins.
```

#### 86. `bundles/bloxd.io/chunks/js/615.js` (Changed code · before: `L7292-L7296` → after: `L3558-L3566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87R3558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87) · [After (L3558-L3566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/615.js#L3558-L3566) · [Before (L7292-L7296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/615.js#L7292-L7296)

```diff
- 	var onPlayerToggledShopMenu: (playerId: PlayerId, isOpen: boolean) => void
- 
- 	/** Called after a player plays an emote from the emote wheel. */
- 	var onPlayerPlayedEmote: (playerId: PlayerId, emoteId: string) => void
- 
+ 	speedMultiplierByBlock: Readonly<Record<BlockName, number>>
+ 	/** Caps how hard it is pushed while far below the speed it is aiming for, so it takes longer to get going. \`0\` = no cap. */
+ 	maxPushDistance: number
+ 	/** How hard steering pushes it. Bigger = it speeds up and changes direction more sharply. */
+ 	movementForceMultiplier: number
+ 	/** Turns off the usual steering-driven movement, as for a sleeping player. */
+ 	disableBaseMovement: boolean
+ 	/** Whether footstep sounds are silenced. */
+ 	disableFootstepSounds: boolean
```

#### 87. `bundles/bloxd.io/chunks/js/615.js` (Changed code · before: `L7298-L7301` → after: `L3568-L3569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87R3568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87) · [After (L3568-L3569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/615.js#L3568-L3569) · [Before (L7298-L7301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/615.js#L7298-L7301)

```diff
- 	 * Called when a player enters a vehicle
- 	 * @param playerId - The id of the player that entered the vehicle
- 	 * @param vehicleType - The type of the vehicle
- 	 * @param vehicleEId - The id of the vehicle
+ 	 * How bouncy walls are: \`0\` stops dead, \`1\` keeps all its speed. Stacks with the \`bounciness\` client
+ 	 * option. Rebounds have a floor speed, so slow bumps come back faster than they arrived.
```

#### 88. `bundles/bloxd.io/chunks/js/615.js` (Changed code · before: `L7303-L7304` → after: `L3571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87R3571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87) · [After (L3571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/615.js#L3571) · [Before (L7303-L7304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/615.js#L7303-L7304)

```diff
- 	var onPlayerEnteredVehicle: (playerId: PlayerId, vehicleType: MeshEntityVehicleType, vehicleEId: EntityId) => void
- 
+ 	horizontalBounciness: number
```

#### 89. `bundles/bloxd.io/chunks/js/615.js` (Changed code · before: `L7306-L7309` → after: `L3573-L3574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87R3573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87) · [After (L3573-L3574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/615.js#L3573-L3574) · [Before (L7306-L7309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/615.js#L7306-L7309)

```diff
- 	 * Called when a player exits a vehicle
- 	 * @param playerId - The id of the player that exited the vehicle
- 	 * @param vehicleType - The type of the vehicle
- 	 * @param vehicleEId - The id of the vehicle
+ 	 * How bouncy the floor is: \`0\` lands flat, \`1\` bounces back as fast as it fell. Stacks with the
+ 	 * \`bounciness\` client option, and has the same rebound floor as \`horizontalBounciness\`.
```

#### 90. `bundles/bloxd.io/chunks/js/615.js` (Changed code · before: `L7311-L7312` → after: `L3576-L3578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87R3576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87) · [After (L3576-L3578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/615.js#L3576-L3578) · [Before (L7311-L7312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/615.js#L7311-L7312)

```diff
- 	var onPlayerExitedVehicle: (playerId: PlayerId, vehicleType: MeshEntityVehicleType, vehicleEId: EntityId) => void
- 
+ 	verticalBounciness: number
+ 	/** How fast it must hit a wall, in blocks per second, before \`horizontalBounciness\` applies. \`0\` = any contact. */
+ 	minHorizontalSpeedToBounce: number
```

#### 91. `bundles/bloxd.io/chunks/js/615.js` (Changed code · before: `L7314-L7319` → after: `L3580-L3581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87R3580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87) · [After (L3580-L3581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/615.js#L3580-L3581) · [Before (L7314-L7319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/615.js#L7314-L7319)

```diff
- 	 * Called after a player successfully buys a shop item
- 	 * @param playerId - The id of the player that bought the item
- 	 * @param categoryKey - The shop category key
- 	 * @param itemKey - The shop item key
- 	 * @param item - The resolved shop item (with per-player overrides applied, internal properties stripped)
- 	 * @param userInput - The user input provided, if the item has a userInput config
+ 	 * How fast it must be falling, in blocks per second, before \`verticalBounciness\` applies. \`0\` bounces
+ 	 * off any contact, leaving a bouncy vehicle jiggling in place.
```

#### 92. `bundles/bloxd.io/chunks/js/615.js` (Changed code · before: `L7321-L7322` → after: `L3583-L3587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87R3583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87) · [After (L3583-L3587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/615.js#L3583-L3587) · [Before (L7321-L7322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/615.js#L7321-L7322)

```diff
- 	var onPlayerBoughtShopItem: (playerId: PlayerId, categoryKey: ShopCategoryKey, itemKey: ShopItemKey, item: BoughtShopItem, userInput?: string) => void
- 
+ 	minVerticalSpeedToBounce: number
+ 	/** Shakes the camera when it hits a wall hard enough; it need not bounce. \`null\` = no shake. See \`ImpactCameraShakeOpts\`. */
+ 	horizontalImpactCameraShake: ImpactCameraShakeOpts | null
+ 	/** Shakes the camera when it hits a floor or ceiling hard enough; it need not bounce. \`null\` = no shake. See \`ImpactCameraShakeOpts\`. */
+ 	verticalImpactCameraShake: ImpactCameraShakeOpts | null
```

#### 93. `bundles/bloxd.io/chunks/js/615.js` (Changed code · before: `L7324-L7326` → after: `L3589-L3590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87R3589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87) · [After (L3589-L3590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/615.js#L3589-L3590) · [Before (L7324-L7326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/615.js#L7324-L7326)

```diff
- 	 * Called when a player presses a custom button
- 	 * @param playerId - The id of the player pressing the button
- 	 * @param buttonId - The id of the button pressed
+ 	 * Makes it steer like a car: left and right turn it rather than sliding it sideways. \`null\` moves
+ 	 * freely in any direction, like a walking player. See \`SteeringOpts\`.
```

#### 94. `bundles/bloxd.io/chunks/js/615.js` (Changed code · before: `L7328-L7329` → after: `L3592-L3596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87R3592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87) · [After (L3592-L3596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/615.js#L3592-L3596) · [Before (L7328-L7329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/615.js#L7328-L7329)

```diff
- 	var onPlayerPressedButton: (playerId: PlayerId, buttonId: string) => void
- 
+ 	steering: SteeringOpts | null
+ 	/** Locks the direction it faces, in radians, ignoring the camera. \`null\` = it faces wherever the camera or steering points. */
+ 	fixedHeading: number | null
+ 	/** Makes it skip across water like a stone once it is fast enough. \`null\` = it floats normally. See \`FluidSkipOpts\`. */
+ 	fluidSkip: FluidSkipOpts | null
```

#### 95. `bundles/bloxd.io/chunks/js/615.js` (Changed code · before: `L7331-L7333` → after: `L3598-L3599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87R3598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87) · [After (L3598-L3599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/615.js#L3598-L3599) · [Before (L7331-L7333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/615.js#L7331-L7333)

```diff
- 	 * Called when a player releases a custom button
- 	 * @param playerId - The id of the player releasing the button
- 	 * @param buttonId - The id of the button released
+ 	 * Lets it fly once mid-air and descending. Supported movement types: \`GLIDING\` and \`FLOATING\`.
+ 	 * \`null\` = it cannot fly. See \`AirborneModeOpts\`.
```

#### 96. `bundles/bloxd.io/chunks/js/615.js` (Changed code · before: `L7335-L7336` → after: `L3601-L3603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87R3601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87) · [After (L3601-L3603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/615.js#L3601-L3603) · [Before (L7335-L7336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/615.js#L7335-L7336)

```diff
- 	var onPlayerReleasedButton: (playerId: PlayerId, buttonId: string) => void
- 
+ 	airborneMode: AirborneModeOpts | null
+ 	/** How it moves while flying. \`null\` = it steers the same way it does on the ground. See \`AirborneMovementOpts\`. */
+ 	airborneMovement: AirborneMovementOpts | null
```

#### 97. `bundles/bloxd.io/chunks/js/615.js` (Changed code · before: `L7338-L7342` → after: `L3605-L3606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87R3605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87) · [After (L3605-L3606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/615.js#L3605-L3606) · [Before (L7338-L7342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/615.js#L7338-L7342)

```diff
- 	 * Called when a player responds to a UI request.
- 	 *
- 	 * @param playerId - The id of the player responding to the UI request.
- 	 * @param id - The id of the UI request.
- 	 * @param response - The response to the UI request.
+ 	 * Caps how fast it falls while flying. Only used when \`airborneMovement\` is \`"heading"\`.
+ 	 * \`null\` = it falls at full speed. See \`FallSpeedLimitOpts\`.
```

#### 98. `bundles/bloxd.io/chunks/js/615.js` (Changed code · before: `L7344-L7345` → after: `L3608-L3634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87R3608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87) · [After (L3608-L3634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/615.js#L3608-L3634) · [Before (L7344-L7345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/615.js#L7344-L7345)

```diff
- 	var onUiRequestResponded: (playerId: PlayerId, id: UiRequestId, response: boolean) => void
- 
+ 	airborneFallSpeedLimit: FallSpeedLimitOpts | null
+ }>
+ type AllPhysicsSettings = {
+ 	[0]: {}
+ 	[1]: {}
+ 	[2]: {}
+ 	[3]: {}
+ 	[4]: {}
+ 	[5]: {}
+ 	[6]: {}
+ 	[7]: {}
+ }
+ type ImpactCameraShakeOpts = Readonly<{
+ 	/** The crash speed, in blocks per second, needed to shake at all, so small bumps are ignored. */
+ 	minSpeed: number
+ 	/** How much shake each extra block per second adds. Shake runs from \`0\` (still) to \`1\` (violent). */
+ ... (11 more added lines; see GitHub link above)
```

#### 99. `bundles/bloxd.io/chunks/js/615.js` (Changed code · before: `L7347-L7357` → after: `L3636-L3637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87R3636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87) · [After (L3636-L3637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/615.js#L3636-L3637) · [Before (L7347-L7357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/615.js#L7347-L7357)

```diff
- 	 * Called every so often.
- 	 * You should save custom db values/s3 objects here.
- 	 * Persisted items ARE saved on graceful shutdown (e.g. uncaught error, update, etc),
- 	 * but this helps prevent large data-loss on non-graceful shutdowns.
- 	 */
- 	var doPeriodicSave: () => void
- 
- 	/** Load another world-code file by relative path (./ or ../).
- 	 * Does not work at runtime - Code is bundled before being run.
- 	 * index.js/index.ts cannot be required: they hold the callbacks the engine runs.
- 	 * No typing is available for the required file — use \`import\` and \`export\` syntax for full typing support.
+ 	 * How much it grips the ground. \`0\` slides sideways like a hovercraft on ice; bigger values make it
+ 	 * follow its nose round corners. Solid ground only, unless \`gripInFluid\` is on.
```

#### 100. `bundles/bloxd.io/chunks/js/615.js` (Changed code · before: `L7359-L7364` → after: `L3639-L4296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87R3639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5252f601c3b4e0871b88d004af6cd8cd38fd5a0460874cc404ecd52266528d87) · [After (L3639-L4296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/615.js#L3639-L4296) · [Before (L7359-L7364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/615.js#L7359-L7364)

```diff
- 	function require(id: string): any
- }
- 
- export {}
- `
-   }
+ 	gripStrength: number
+ 	/** Whether it also grips while floating in water, so a boat can corner like a kart. */
+ 	gripInFluid: boolean
+ }>
+ type FluidSkipOpts = Readonly<{
+ 	/** How fast it must be going, in blocks per second, to start skipping. */
+ 	minSpeed: number
+ 	/** How much of its speed above \`minSpeed\` becomes upward launch speed. Bigger = higher skips. */
+ 	launchSpeedFraction: number
+ 	/** How snappily it leaves the water. Bigger = a sharp pop; smaller = a slow heave. */
+ 	launchApproachRate: number
+ }>
+ type AirborneModeOpts = Readonly<{
+ 	/** Which movement type to switch to: \`GLIDING\` for gliders, \`FLOATING\` for balloons. */
+ 	activeMovementType: MovementType
+ 	/** How long the flying lasts, in milliseconds, before it drops the rider. \`null\` = no limit. */
+ ... (642 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/616.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/616.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2700d32c0f969d1ca2ca567efefce7d459d34cc2c62de94cb861924453b09c27)

#### 1. `bundles/bloxd.io/chunks/js/616.js` (Changed code · before: `L4-L13` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2700d32c0f969d1ca2ca567efefce7d459d34cc2c62de94cb861924453b09c27R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2700d32c0f969d1ca2ca567efefce7d459d34cc2c62de94cb861924453b09c27) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/616.js#L4) · [Before (L4-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/616.js#L4-L13)

```diff
-   53395: (RR, JR, GR) => {
-     function yR() {
-       return yR = Object.assign ? Object.assign.bind() : function(RR) {
-         for (var JR = 1; JR < arguments.length; JR++) {
-           var GR = arguments[JR];
-           for (var yR in GR)({}).hasOwnProperty.call(GR, yR) && (RR[yR] = GR[yR])
-         }
-         return RR
-       }, yR.apply(null, arguments)
-     }
+   53935: (rr, Sr, Qr) => {
```

#### 2. `bundles/bloxd.io/chunks/js/616.js` (Changed code · before: `L15-L16` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2700d32c0f969d1ca2ca567efefce7d459d34cc2c62de94cb861924453b09c27R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2700d32c0f969d1ca2ca567efefce7d459d34cc2c62de94cb861924453b09c27) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/616.js#L6) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/616.js#L15-L16)

```diff
-       e: () => wR,
-       g: () => qR
+       c: () => Zr
```

#### 3. `bundles/bloxd.io/chunks/js/616.js` (Changed code · before: `L18-L230` → after: `L8-L7363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2700d32c0f969d1ca2ca567efefce7d459d34cc2c62de94cb861924453b09c27R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2700d32c0f969d1ca2ca567efefce7d459d34cc2c62de94cb861924453b09c27) · [After (L8-L7363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/616.js#L8-L7363) · [Before (L18-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/616.js#L18-L230)

```diff
-     var tR = !1;
-     try {
-       tR = "undefined" !== typeof localStorage
-     } catch (eR) {}
-     var uR = "undefined" !== typeof process,
-       ZR = tR && "function" === typeof localStorage.getItem && localStorage.getItem("DEBUG") || uR && {
-         NODE_ENV: "production",
-         PUBLIC_URL: "",
-         WDS_SOCKET_HOST: void 0,
-         WDS_SOCKET_PATH: void 0,
-         WDS_SOCKET_PORT: void 0,
-         FAST_REFRESH: !0,
-         REACT_APP_DEV_URLS: "false"
-       }.DEBUG ? console.log : function(RR) {
-         return ""
-       };
- ... (197 more removed lines; see GitHub link above)
+     const Zr = String.raw`interface Map<K, V> {
+     clear(): void;
+     /**
+      * @returns true if an element in the Map existed and has been removed, or false if the element does not exist.
+      */
+     delete(key: K): boolean;
+     /**
+      * Executes a provided function once per each key/value pair in the Map, in insertion order.
+      */
+     forEach(callbackfn: (value: V, key: K, map: Map<K, V>) => void, thisArg?: any): void;
+     /**
+      * Returns a specified element from the Map object. If the value that is associated to the provided key is an object, then you will get a reference to that object and any change made to that object will effectively modify it inside the Map.
+      * @returns Returns the element associated with the specified key. If no element is associated with the specified key, undefined is returned.
+      */
+     get(key: K): V | undefined;
+     /**
+ ... (7340 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/617.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/617.js` (17 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-70bf9c75a3a293051518a467ed03d4d2b5d5457edd44b98ecc102f6db4b5bf79)

#### 1. `bundles/bloxd.io/chunks/js/617.js` (Changed code · before: `L4-L122489` → after: `L4-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-70bf9c75a3a293051518a467ed03d4d2b5d5457edd44b98ecc102f6db4b5bf79R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-70bf9c75a3a293051518a467ed03d4d2b5d5457edd44b98ecc102f6db4b5bf79) · [After (L4-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/617.js#L4-L32) · [Before (L4-L122489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/617.js#L4-L122489)

```diff
-   53420: (RR, JR, GR) => {
-     var yR = "/index.js",
-       tR = {};
-     (RR => {
-       var JR = Object.defineProperty,
-         tR = (Object.getOwnPropertyDescriptor, Object.getOwnPropertyNames, Object.prototype.hasOwnProperty, (RR, GR) => {
-           for (var yR in GR) JR(RR, yR, {
-             get: GR[yR],
-             enumerable: !0
-           })
-         }),
-         uR = {};
-       tR(uR, {
-         ANONYMOUS: () => k2,
-         AccessFlags: () => qu,
-         AssertionLevel: () => WG,
- ... (122470 more removed lines; see GitHub link above)
+   53943: (rr, Sr, Qr) => {
+     function Zr() {
+       return Zr = Object.assign ? Object.assign.bind() : function(rr) {
+         for (var Sr = 1; Sr < arguments.length; Sr++) {
+           var Qr = arguments[Sr];
+           for (var Zr in Qr)({}).hasOwnProperty.call(Qr, Zr) && (rr[Zr] = Qr[Zr])
+         }
+         return rr
+       }, Zr.apply(null, arguments)
+     }
+     Qr.d(Sr, {
+       e: () => mr,
+       h: () => Ir
+     });
+     var Wr = !1;
+     try {
+ ... (13 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/617.js` (Changed code · before: `L122492-L123061` → after: `L35-L48`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-70bf9c75a3a293051518a467ed03d4d2b5d5457edd44b98ecc102f6db4b5bf79R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-70bf9c75a3a293051518a467ed03d4d2b5d5457edd44b98ecc102f6db4b5bf79) · [After (L35-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/617.js#L35-L48) · [Before (L122492-L123061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/617.js#L122492-L123061)

```diff
-       function HXR(RR, JR) {
-         return {
-           seq: 0,
-           type: "event",
-           event: RR,
-           body: JR
-         }
-       }
- 
-       function oXR(RR) {
-         return JG((RR => {
-           let {
-             textSpan: JR
-           } = RR;
-           return JR.start + 100003 * JR.length
-         }), Y_(RR))
- ... (554 more removed lines; see GitHub link above)
+     function Ir(rr, Sr, Qr, Wr, ar) {
+       void 0 === Wr && (Wr = {});
+       var jr = Zr({}, pr(Qr), Wr),
+         Ir = function(rr, Sr, Qr, Wr, ar) {
+           var jr = [].concat(Sr),
+             Ir = Nr(rr, Qr, Wr),
+             fr = Ir.compilerHost,
+             Er = Ir.updateFile,
+             pr = Ir.deleteFile,
+             xr = new Map,
+             mr = 0,
+             Ur = Zr({}, fr, {
+               getProjectVersion: function() {
+                 return mr.toString()
```

#### 3. `bundles/bloxd.io/chunks/js/617.js` (Changed code · before: `L123063-L123371` → after: `L50-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-70bf9c75a3a293051518a467ed03d4d2b5d5457edd44b98ecc102f6db4b5bf79R50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-70bf9c75a3a293051518a467ed03d4d2b5d5457edd44b98ecc102f6db4b5bf79) · [After (L50-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/617.js#L50-L51) · [Before (L123063-L123371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/617.js#L123063-L123371)

```diff
-               fR = () => {
-                 if (this.changeSeq !== tR) return;
-                 let GR, uR = JR[ZR];
-                 if (tG(uR) ? uR = this.toPendingErrorCheck(uR) : "WL" in uR && (GR = uR.WL, uR = this.toPendingErrorCheck(uR.file)), !uR) return qR();
-                 const {
-                   fileName: fR,
-                   project: VR
-                 } = uR;
-                 return fXR(VR), VR.containsFile(fR, yR) && (this.syntacticCheck(fR, VR), this.changeSeq === tR) ? 0 !== VR.projectService.serverMode ? qR() : GR ? RR.immediate("regionSemanticCheck", (() => {
-                   const JR = this.projectService.getScriptInfoForNormalizedPath(fR);
-                   JR && this.regionSemanticCheck(fR, VR, GR.map((RR => this.getRange({
-                     file: fR,
-                     ...RR
-                   }, JR)))), this.changeSeq === tR && RR.immediate("semanticCheck", (() => iR(fR, VR)))
-                 })) : void RR.immediate("semanticCheck", (() => iR(fR, VR))) : void 0
-               };
- ... (293 more removed lines; see GitHub link above)
+               getCompilationSettings: function() {
+                 return Qr
```

#### 4. `bundles/bloxd.io/chunks/js/617.js` (Changed code · before: `L123373-L123775` → after: `L53-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-70bf9c75a3a293051518a467ed03d4d2b5d5457edd44b98ecc102f6db4b5bf79R53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-70bf9c75a3a293051518a467ed03d4d2b5d5457edd44b98ecc102f6db4b5bf79) · [After (L53-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/617.js#L53-L54) · [Before (L123373-L123775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/617.js#L123373-L123775)

```diff
-               end: {
-                 line: uR.line + 1,
-                 offset: uR.character + 1
-               }
-             }
-           }
-           toFileSpanWithContext(RR, JR, GR, yR) {
-             const tR = this.toFileSpan(RR, JR, yR),
-               uR = GR && this.toFileSpan(RR, GR, yR);
-             return uR ? {
-               ...tR,
-               contextStart: uR.start,
-               contextEnd: uR.end
-             } : tR
-           }
-           getTypeDefinition(RR) {
- ... (387 more removed lines; see GitHub link above)
+               getCustomTransformers: function() {
+                 return ar
```

#### 5. `bundles/bloxd.io/chunks/js/617.js` (Changed code · before: `L123777-L124121` → after: `L56-L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-70bf9c75a3a293051518a467ed03d4d2b5d5457edd44b98ecc102f6db4b5bf79R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-70bf9c75a3a293051518a467ed03d4d2b5d5457edd44b98ecc102f6db4b5bf79) · [After (L56-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/617.js#L56-L57) · [Before (L123777-L124121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/617.js#L123777-L124121)

```diff
-               ZR = IXR(GR, this.getDefaultProject(RR), uR, uR, mXR, (RR => (this.logger.info(`Finding references to file ${yR} in project ${RR.getProjectName()}`), RR.getLanguageService().getFileReferences(yR))));
-             let qR;
-             if (GG(ZR)) qR = ZR;
-             else {
-               qR = [];
-               const RR = oXR(this.host.useCaseSensitiveFileNames);
-               ZR.forEach((JR => {
-                 for (const GR of JR) RR.has(GR) || (qR.push(GR), RR.add(GR))
-               }))
-             }
-             if (!JR) return qR;
-             return {
-               refs: qR.map((RR => yMR(this.projectService, RR, tR))),
-               symbolName: `"${RR.file}"`
-             }
-           }
- ... (329 more removed lines; see GitHub link above)
+               getScriptFileNames: function() {
+                 return jr.slice()
```

#### 6. `bundles/bloxd.io/chunks/js/617.js` (Changed code · before: `L124123-L124872` → after: `L59-L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-70bf9c75a3a293051518a467ed03d4d2b5d5457edd44b98ecc102f6db4b5bf79R59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-70bf9c75a3a293051518a467ed03d4d2b5d5457edd44b98ecc102f6db4b5bf79) · [After (L59-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/617.js#L59-L114) · [Before (L124123-L124872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/617.js#L124123-L124872)

```diff
-               ui: RR.insertString
-             })))
-           }
-           reload(RR) {
-             const JR = XAR(RR.file),
-               GR = void 0 === RR.tmpfile ? void 0 : XAR(RR.tmpfile),
-               yR = this.projectService.getScriptInfoForNormalizedPath(JR);
-             yR && (this.changeSeq++, yR.reloadFromFile(GR))
-           }
-           saveToTmp(RR, JR) {
-             const GR = this.projectService.getScriptInfo(RR);
-             GR && GR.saveTo(JR)
-           }
-           closeClientFile(RR) {
-             if (!RR) return;
-             const JR = Gq(RR);
- ... (734 more removed lines; see GitHub link above)
+               getScriptSnapshot: function(Sr) {
+                 var Qr = rr.readFile(Sr);
+                 if (Qr && "string" === typeof Qr) return Wr.ScriptSnapshot.fromString(Qr)
+               },
+               getScriptVersion: function(rr) {
+                 return xr.get(rr) || "0"
+               },
+               writeFile: rr.writeFile
+             }),
+             tr = {
+               languageServiceHost: Ur,
+               updateFile: function(rr) {
+                 mr++, xr.set(rr.fileName, mr.toString()), jr.includes(rr.fileName) || jr.push(rr.fileName), Er(rr)
+               },
+               deleteFile: function(rr) {
+                 mr++, xr.set(rr.fileName, mr.toString());
+ ... (40 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/617.js` (Changed code · before: `L124876-L124899` → after: `L119-L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-70bf9c75a3a293051518a467ed03d4d2b5d5457edd44b98ecc102f6db4b5bf79R119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-70bf9c75a3a293051518a467ed03d4d2b5d5457edd44b98ecc102f6db4b5bf79) · [After (L119-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/617.js#L119-L121) · [Before (L124876-L124899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/617.js#L124876-L124899)

```diff
-       function yMR(RR, JR, GR) {
-         let {
-           fileName: yR,
-           textSpan: tR,
-           contextSpan: uR,
-           isWriteAccess: ZR,
-           isDefinition: qR
-         } = JR, {
-           disableLineTextInReferences: iR
-         } = GR;
-         const fR = ny.checkDefined(RR.getScriptInfo(yR)),
-           VR = RMR(tR, uR, fR),
-           KR = iR ? void 0 : function(RR, JR) {
-             const GR = RR.lineToTextSpan(JR.start.line - 1);
-             return RR.getSnapshot().getText(GR.start, Fi(GR)).replace(/\r|\n/g, "")
-           }(fR, VR);
- ... (8 more removed lines; see GitHub link above)
+     function fr(rr) {
+       throw new Error("Method '" + rr + "' is not implemented.")
+     }
```

#### 8. `bundles/bloxd.io/chunks/js/617.js` (Changed code · before: `L124901-L124949` → after: `L123-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-70bf9c75a3a293051518a467ed03d4d2b5d5457edd44b98ecc102f6db4b5bf79R123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-70bf9c75a3a293051518a467ed03d4d2b5d5457edd44b98ecc102f6db4b5bf79) · [After (L123-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/617.js#L123-L148) · [Before (L124901-L124949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/617.js#L124901-L124949)

```diff
-       function tMR(RR) {
-         return void 0 === RR || RR && "object" === typeof RR && "string" === typeof RR.exportName && (void 0 === RR.fileName || "string" === typeof RR.fileName) && (void 0 === RR.ambientModuleName || "string" === typeof RR.ambientModuleName && (void 0 === RR.isPackageJsonImport | … [truncated]
-       }
-       var uMR = (RR => (RR[RR.PreStart = 0] = "PreStart", RR[RR.Start = 1] = "Start", RR[RR.Entire = 2] = "Entire", RR[RR.Mid = 3] = "Mid", RR[RR.End = 4] = "End", RR[RR.PostEnd = 5] = "PostEnd", RR))(uMR || {}),
-         ZMR = class {
-           constructor() {
-             this.goSubtree = !0, this.lineIndex = new KMR, this.endBranch = [], this.state = 2, this.initialText = "", this.trailingText = "", this.lineIndex.root = new wMR, this.startPath = [this.lineIndex.root], this.stack = [this.lineIndex.root]
-           }
-           get done() {
-             return !1
-           }
-           insertLines(RR, JR) {
-             JR && (this.trailingText = ""), RR = RR ? this.initialText + RR + this.trailingText : this.initialText + this.trailingText;
-             const GR = KMR.linesFromText(RR).lines;
-             let yR, tR;
-             GR.length > 1 && "" === GR[GR.length - 1] && GR.pop();
- ... (33 more removed lines; see GitHub link above)
+     function Er(rr, Sr) {
+       return function() {
+         for (var Qr = arguments.length, Zr = new Array(Qr), Wr = 0; Wr < Qr; Wr++) Zr[Wr] = arguments[Wr];
+         var ar = Sr.apply(void 0, Zr),
+           Ir = "string" === typeof ar ? ar.slice(0, 80) + "..." : ar;
+         return jr.apply(void 0, ["> " + rr].concat(Zr)), jr("< " + Ir), ar
+       }
+     }
+     var pr = function(rr) {
+         return Zr({}, rr.getDefaultCompilerOptions(), {
+           jsx: rr.JsxEmit.React,
+           strict: !0,
+           esModuleInterop: !0,
+           module: rr.ModuleKind.ESNext,
+           suppressOutputPathCheck: !0,
+           skipLibCheck: !0,
+ ... (10 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/617.js` (Changed code · before: `L124951-L124977` → after: `L150-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-70bf9c75a3a293051518a467ed03d4d2b5d5457edd44b98ecc102f6db4b5bf79R150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-70bf9c75a3a293051518a467ed03d4d2b5d5457edd44b98ecc102f6db4b5bf79) · [After (L150-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/617.js#L150-L154) · [Before (L124951-L124977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/617.js#L124951-L124977)

```diff
-             function qR(RR) {
-               return RR.isLeaf() ? new rMR("") : new wMR
-             }
-             switch (2 === this.state && 1 === tR && (this.state = 1, this.branchNode = uR, this.lineCollectionAtBranch = GR), tR) {
-               case 0:
-                 this.goSubtree = !1, 4 !== this.state && uR.add(GR);
-                 break;
-               case 1:
-                 4 === this.state ? this.goSubtree = !1 : (ZR = qR(GR), uR.add(ZR), this.startPath.push(ZR));
-                 break;
-               case 2:
-                 4 !== this.state ? (ZR = qR(GR), uR.add(ZR), this.startPath.push(ZR)) : GR.isLeaf() || (ZR = qR(GR), uR.add(ZR), this.endBranch.push(ZR));
-                 break;
-               case 3:
-                 this.goSubtree = !1;
-                 break;
- ... (11 more removed lines; see GitHub link above)
+     function mr(rr) {
+       return {
+         args: [],
+         createDirectory: function() {
+           return fr("createDirectory")
```

#### 10. `bundles/bloxd.io/chunks/js/617.js` (Changed code · before: `L124979-L124985` → after: `L156-L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-70bf9c75a3a293051518a467ed03d4d2b5d5457edd44b98ecc102f6db4b5bf79R156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-70bf9c75a3a293051518a467ed03d4d2b5d5457edd44b98ecc102f6db4b5bf79) · [After (L156-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/617.js#L156-L162) · [Before (L124979-L124985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/617.js#L124979-L124985)

```diff
-         qMR = class {
-           constructor(RR, JR, GR) {
-             this.pos = RR, this.deleteLen = JR, this.insertedText = GR
-           }
-           getTextChangeRange() {
-             return Uf(ef(this.pos, this.deleteLen), this.insertedText ? this.insertedText.length : 0)
-           }
+         directoryExists: Er("directoryExists", (function(Sr) {
+           return Array.from(rr.keys()).some((function(rr) {
+             return rr.startsWith(Sr)
+           }))
+         })),
+         exit: function() {
+           return fr("exit")
```

#### 11. `bundles/bloxd.io/chunks/js/617.js` (Changed code · before: `L124987-L125069` → after: `L164-L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-70bf9c75a3a293051518a467ed03d4d2b5d5457edd44b98ecc102f6db4b5bf79R164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-70bf9c75a3a293051518a467ed03d4d2b5d5457edd44b98ecc102f6db4b5bf79) · [After (L164-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/617.js#L164-L168) · [Before (L124987-L125069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/617.js#L124987-L125069)

```diff
-         iMR = class RR {
-           constructor() {
-             this.changes = [], this.versions = new Array(RR.maxVersions), this.minVersion = 0, this.currentVersion = 0
-           }
-           versionToIndex(JR) {
-             if (!(JR < this.minVersion || JR > this.currentVersion)) return JR % RR.maxVersions
-           }
-           currentVersionToIndex() {
-             return this.currentVersion % RR.maxVersions
-           }
-           edit(JR, GR, yR) {
-             this.changes.push(new qMR(JR, GR, yR)), (this.changes.length > RR.changeNumberThreshold || GR > RR.changeLengthThreshold || yR && yR.length > RR.changeLengthThreshold) && this.getSnapshot()
-           }
-           getSnapshot() {
-             return this._getSnapshot()
-           }
- ... (67 more removed lines; see GitHub link above)
+         fileExists: Er("fileExists", (function(Sr) {
+           return rr.has(Sr) || rr.has(xr(Sr))
+         })),
+         getCurrentDirectory: function() {
+           return "/"
```

#### 12. `bundles/bloxd.io/chunks/js/617.js` (Changed code · before: `L125071-L125197` → after: `L170-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-70bf9c75a3a293051518a467ed03d4d2b5d5457edd44b98ecc102f6db4b5bf79R170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-70bf9c75a3a293051518a467ed03d4d2b5d5457edd44b98ecc102f6db4b5bf79) · [After (L170-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/617.js#L170-L171) · [Before (L125071-L125197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/617.js#L125071-L125197)

```diff
-         KMR = class RR {
-           constructor() {
-             this.checkEdits = !1
-           }
-           absolutePositionOfStartOfLine(RR) {
-             return this.lineNumberToInfo(RR).absolutePosition
-           }
-           positionToLineOffset(RR) {
-             const {
-               oneBasedLine: JR,
-               zeroBasedColumn: GR
-             } = this.root.charOffsetToLineInfo(1, RR);
-             return {
-               line: JR,
-               offset: GR + 1
-             }
- ... (111 more removed lines; see GitHub link above)
+         getDirectories: function() {
+           return []
```

#### 13. `bundles/bloxd.io/chunks/js/617.js` (Changed code · before: `L125199-L125334` → after: `L173-L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-70bf9c75a3a293051518a467ed03d4d2b5d5457edd44b98ecc102f6db4b5bf79R173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-70bf9c75a3a293051518a467ed03d4d2b5d5457edd44b98ecc102f6db4b5bf79) · [After (L173-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/617.js#L173-L174) · [Before (L125199-L125334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/617.js#L125199-L125334)

```diff
-         wMR = class RR {
-           constructor() {
-             let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
-             this.children = RR, this.totalChars = 0, this.totalLines = 0, RR.length && this.updateCounts()
-           }
-           isLeaf() {
-             return !1
-           }
-           updateCounts() {
-             this.totalChars = 0, this.totalLines = 0;
-             for (const RR of this.children) this.totalChars += RR.charCount(), this.totalLines += RR.lineCount()
-           }
-           execWalk(RR, JR, GR, yR, tR) {
-             return GR.pre && GR.pre(RR, JR, this.children[yR], this, tR), GR.goSubtree ? (this.children[yR].walk(RR, JR, GR), GR.post && GR.post(RR, JR, this.children[yR], this, tR)) : GR.goSubtree = !0, GR.done
-           }
-           skipChild(RR, JR, GR, yR, tR) {
- ... (120 more removed lines; see GitHub link above)
+         getExecutingFilePath: function() {
+           return fr("getExecutingFilePath")
```

#### 14. `bundles/bloxd.io/chunks/js/617.js` (Changed code · before: `L125336-L125351` → after: `L176-L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-70bf9c75a3a293051518a467ed03d4d2b5d5457edd44b98ecc102f6db4b5bf79R176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-70bf9c75a3a293051518a467ed03d4d2b5d5457edd44b98ecc102f6db4b5bf79) · [After (L176-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/617.js#L176-L184) · [Before (L125336-L125351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/617.js#L125336-L125351)

```diff
-         rMR = class {
-           constructor(RR) {
-             this.text = RR
-           }
-           isLeaf() {
-             return !0
-           }
-           walk(RR, JR, GR) {
-             GR.leaf(RR, JR, this)
-           }
-           charCount() {
-             return this.text.length
-           }
-           lineCount() {
-             return 1
-           }
+         readDirectory: Er("readDirectory", (function(Sr) {
+           return "/" === Sr ? Array.from(rr.keys()) : []
+         })),
+         readFile: Er("readFile", (function(Sr) {
+           var Qr;
+           return null != (Qr = rr.get(Sr)) ? Qr : rr.get(xr(Sr))
+         })),
+         resolvePath: function(rr) {
+           return rr
```

#### 15. `bundles/bloxd.io/chunks/js/617.js` (Changed code · before: `L125353-L125391` → after: `L186-L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-70bf9c75a3a293051518a467ed03d4d2b5d5457edd44b98ecc102f6db4b5bf79R186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-70bf9c75a3a293051518a467ed03d4d2b5d5457edd44b98ecc102f6db4b5bf79) · [After (L186-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/617.js#L186-L213) · [Before (L125353-L125391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/617.js#L125353-L125391)

```diff
-         eMR = class RR {
-           constructor(RR, JR, GR, yR, tR, uR) {
-             this.telemetryEnabled = RR, this.logger = JR, this.host = GR, this.globalTypingsCacheLocation = yR, this.event = tR, this.maxActiveRequestCount = uR, this.activeRequestCount = 0, this.requestQueue = RG(), this.requestMap = new Map, this.requestedRegistry = !1, this.pa … [truncated]
-           }
-           isKnownTypesPackageName(RR) {
-             var JR;
-             return r0.validatePackageName(RR) === r0.NameValidationResult.Ok && (this.requestedRegistry || (this.requestedRegistry = !0, this.installer.send({
-               kind: "typesRegistry"
-             })), !!(null == (JR = this.typesRegistryCache) ? void 0 : JR.has(RR)))
-           }
-           installPackage(RR) {
-             this.packageInstallId++;
-             const JR = {
-                 kind: "installPackage",
-                 ...RR,
-                 id: this.packageInstallId
- ... (23 more removed lines; see GitHub link above)
+         newLine: "\n",
+         useCaseSensitiveFileNames: !0,
+         write: function() {
+           return fr("write")
+         },
+         writeFile: function(Sr, Qr) {
+           rr.set(Sr, Qr)
+         },
+         deleteFile: function(Sr) {
+           rr.delete(Sr)
+         }
+       }
+     }
+ 
+     function Nr(rr, Sr, Qr) {
+       var Wr = new Map;
+ ... (12 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/617.js` (Changed code · before: `L125393-L125575` → after: `L215-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-70bf9c75a3a293051518a467ed03d4d2b5d5457edd44b98ecc102f6db4b5bf79R215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-70bf9c75a3a293051518a467ed03d4d2b5d5457edd44b98ecc102f6db4b5bf79) · [After (L215-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/617.js#L215-L218) · [Before (L125393-L125575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/617.js#L125393-L125575)

```diff
-             switch (this.logger.hasLevel(3) && this.logger.info(`TIAdapter:: Received response:${v0(RR)}`), RR.kind) {
-               case W0:
-                 this.typesRegistryCache = new Map(Object.entries(RR.typesRegistry));
-                 break;
-               case U0: {
-                 const yR = null == (JR = this.packageInstalledPromise) ? void 0 : JR.get(RR.id);
-                 ny.assertIsDefined(yR, "Should find the promise for package install"), null == (GR = this.packageInstalledPromise) || GR.delete(RR.id), RR.success ? yR.resolve({
-                   successMessage: RR.message
-                 }) : yR.reject(RR.message), this.projectService.updateTypingsForProject(RR), this.event(RR, "setTypings");
-                 break
-               }
-               case X0: {
-                 const JR = {
-                     message: RR.message
-                   },
-                   GR = "typesInstallerInitializationFailed";
- ... (167 more removed lines; see GitHub link above)
+             return Wr.get(Zr) || (Ir = Qr.createSourceFile(Zr, rr.readFile(Zr), null != (jr = null != ar ? ar : Sr.target) ? jr : pr(Qr).target, !1), Wr.set(Ir.fileName, Ir), Ir)
+           },
+           useCaseSensitiveFileNames: function() {
+             return rr.useCaseSensitiveFileNames
```

#### 17. `bundles/bloxd.io/chunks/js/617.js` (Changed code · before: `L125586` → after: `L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-70bf9c75a3a293051518a467ed03d4d2b5d5457edd44b98ecc102f6db4b5bf79R230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-70bf9c75a3a293051518a467ed03d4d2b5d5457edd44b98ecc102f6db4b5bf79) · [After (L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/617.js#L230) · [Before (L125586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/617.js#L125586)

```diff
-     })
+     }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/618.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/618.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5b47ecc51271ade041819945c9893fbbc508241adaddd1a29c5e91d30ee6c44a)

#### 1. `bundles/bloxd.io/chunks/js/618.js` (Changed code · before: `L4-L27` → after: `L4-L89110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5b47ecc51271ade041819945c9893fbbc508241adaddd1a29c5e91d30ee6c44aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5b47ecc51271ade041819945c9893fbbc508241adaddd1a29c5e91d30ee6c44a) · [After (L4-L89110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/618.js#L4-L89110) · [Before (L4-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/618.js#L4-L27)

```diff
-   53506: (RR, JR, GR) => {
-     GR.d(JR, {
-       collectImportedWorldCodePluginNames: () => fR
-     });
-     var yR = GR(3458),
-       tR = GR(37976),
-       uR = GR(53420),
-       ZR = GR.n(uR);
- 
-     function qR(RR) {
-       return ZR().isImportDeclaration(RR) && ZR().isStringLiteral(RR.moduleSpecifier) && function(RR) {
-         const JR = RR.importClause;
-         if (!JR) return !0;
-         if (JR.isTypeOnly) return !1;
-         const GR = JR.namedBindings;
-         return !(GR && !ZR().isNamespaceImport(GR)) || !!JR.name || GR.elements.some((RR => !RR.isTypeOnly))
- ... (8 more removed lines; see GitHub link above)
+   53957: (rr, Sr, Qr) => {
+     var Zr = "/index.js",
+       Wr = {};
+     (rr => {
+       var Sr = Object.defineProperty,
+         Wr = (Object.getOwnPropertyDescriptor, Object.getOwnPropertyNames, Object.prototype.hasOwnProperty, (rr, Qr) => {
+           for (var Zr in Qr) Sr(rr, Zr, {
+             get: Qr[Zr],
+             enumerable: !0
+           })
+         }),
+         ar = {};
+       Wr(ar, {
+         ANONYMOUS: () => D2,
+         AccessFlags: () => ja,
+         AssertionLevel: () => nQ,
+ ... (89091 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/618.js` (Changed code · before: `L29-L31` → after: `L89112-L121996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5b47ecc51271ade041819945c9893fbbc508241adaddd1a29c5e91d30ee6c44aR89112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5b47ecc51271ade041819945c9893fbbc508241adaddd1a29c5e91d30ee6c44a) · [After (L89112-L121996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/618.js#L89112-L121996) · [Before (L29-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/618.js#L29-L31)

```diff
-       for (const yR of tR)
-         if ("" !== yR && "." !== yR)
-           if (".." !== yR) uR.push(yR);
+ 
+       function S0(rr, Sr) {
+         F5 = Sr, o5 = rr;
+         try {
+           return Pr(function(rr) {
+             const Sr = [];
+ 
+             function Qr(rr) {
+               if (Zr(rr) && (Sr.push(rr), rr.children))
+                 for (const Sr of rr.children) Qr(Sr)
+             }
+             return Qr(rr), Sr;
+ 
+             function Zr(rr) {
+               if (rr.children) return !0;
+               switch (a0(rr)) {
+ ... (32869 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/618.js` (Changed code · before: `L33-L57` → after: `L121998-L122198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5b47ecc51271ade041819945c9893fbbc508241adaddd1a29c5e91d30ee6c44aR121998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5b47ecc51271ade041819945c9893fbbc508241adaddd1a29c5e91d30ee6c44a) · [After (L121998-L122198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/618.js#L121998-L122198) · [Before (L33-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/618.js#L33-L57)

```diff
-             if (0 === uR.length) return;
-             uR.pop()
-           } const ZR = uR.join("/");
-       for (const qR of [ZR, `${ZR}.ts`, `${ZR}.js`])
-         if (qR in GR && !(0, yR.l)(qR)) return qR
-     }
- 
-     function fR(RR) {
-       const JR = new Set,
-         GR = (0, tR.c)(RR);
-       if (!GR) return [];
-       const yR = [GR],
-         uR = new Set;
-       for (; yR.length > 0;) {
-         const GR = yR.pop();
-         if (!GR || uR.has(GR)) continue;
- ... (9 more removed lines; see GitHub link above)
+             const Sr = this.findExternalProjectByProjectName(rr);
+             Sr && this.removeProject(Sr)
+           }
+           Sr && (this.cleanupConfiguredProjects(), this.printProjects())
+         }
+         openExternalProjects(rr) {
+           const Sr = new Set(this.externalProjects.map((rr => rr.getProjectName())));
+           this.externalProjectToConfiguredProjectMap.forEach(((rr, Qr) => Sr.add(Qr)));
+           for (const Qr of rr) this.openExternalProject(Qr, !1), Sr.delete(Qr.projectFileName);
+           Sr.forEach((rr => this.closeExternalProject(rr, !1))), this.cleanupConfiguredProjects(), this.printProjects()
+         }
+         static escapeFilenameForRegex(rr) {
+           return rr.replace(this.filenameEscapeRegexp, "\\$&")
+         }
+         resetSafeList() {
+           this.safelist = AKr
+ ... (185 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/618.js` (Changed code · before: `L59` → after: `L122200-L122424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5b47ecc51271ade041819945c9893fbbc508241adaddd1a29c5e91d30ee6c44aR122200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5b47ecc51271ade041819945c9893fbbc508241adaddd1a29c5e91d30ee6c44a) · [After (L122200-L122424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/618.js#L122200-L122424) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/618.js#L59)

```diff
-             ZR().forEachChild(fR, VR)
+           }))
+         }
+         watchPackageJsonFile(rr, Sr, Qr) {
+           zZ.assert(void 0 !== Qr);
+           let Zr = (this.packageJsonFilesMap ?? (this.packageJsonFilesMap = new Map)).get(Sr);
+           if (!Zr) {
+             let Qr = this.watchFactory.watchFile(rr, ((rr, Qr) => {
+               switch (Qr) {
+                 case 0:
+                 case 1:
+                   this.packageJsonCache.addOrUpdate(rr, Sr), this.onPackageJsonChange(Zr);
+                   break;
+                 case 2:
+                   this.packageJsonCache.delete(Sr), this.onPackageJsonChange(Zr), Zr.projects.clear(), Zr.close()
+               }
+             }), 250, this.hostConfiguration.watchOptions, Vd.PackageJson);
+ ... (209 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/618.js` (Changed code · before: `L61` → after: `L122426-L125584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5b47ecc51271ade041819945c9893fbbc508241adaddd1a29c5e91d30ee6c44aR122426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5b47ecc51271ade041819945c9893fbbc508241adaddd1a29c5e91d30ee6c44a) · [After (L122426-L125584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/618.js#L122426-L125584) · [Before (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/618.js#L61)

```diff
-         VR(fR)
+         return Sr ? {
+           ...Ir,
+           fileName: rr.file && rr.file.fileName
+         } : Ir
+       }
+       var Cyr = Aer;
+ 
+       function Myr(rr, Sr, Qr, Zr) {
+         const Wr = Sr.hasLevel(3),
+           ar = JSON.stringify(rr);
+         Wr && Sr.info(`${rr.type}:${P1(rr)}`);
+         return `Content-Length: ${1+Qr(ar,"utf8")}\r\n\r\n${ar}${Zr}`
+       }
+       var Gyr = class {
+         constructor(rr) {
+           this.operationHost = rr
+ ... (3143 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/618.js` (Changed code · before: `L63-L79` → after: `L125586-L125587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5b47ecc51271ade041819945c9893fbbc508241adaddd1a29c5e91d30ee6c44aR125586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5b47ecc51271ade041819945c9893fbbc508241adaddd1a29c5e91d30ee6c44a) · [After (L125586-L125587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/618.js#L125586-L125587) · [Before (L63-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/618.js#L63-L79)

```diff
-       return [...JR].sort()
-     }
-   },
-   53474: RR => {
-     function JR(RR) {
-       var JR = new Error("Cannot find module '" + RR + "'");
-       throw JR.code = "MODULE_NOT_FOUND", JR
-     }
-     JR.keys = () => [], JR.resolve = JR, JR.id = 53474, RR.exports = JR
-   },
-   53457: () => {},
-   53433: () => {},
-   53477: () => {},
-   53449: () => {},
-   53442: () => {},
-   53429: () => {},
- ... (1 more removed lines; see GitHub link above)
+     })
+   }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/619.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/619.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-04ff1188cad10ddf822060c22c4f5221c01a76a4d8694f97bab1c8990199e9be)

#### 1. `bundles/bloxd.io/chunks/js/619.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-04ff1188cad10ddf822060c22c4f5221c01a76a4d8694f97bab1c8990199e9beR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-04ff1188cad10ddf822060c22c4f5221c01a76a4d8694f97bab1c8990199e9be) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/619.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/619.js#L4-L6)

```diff
-   53489: (RR, JR, GR) => {
-     GR.r(JR), GR.d(JR, {
-       default: () => XR
+   54043: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       collectImportedWorldCodePluginNames: () => Er
```

#### 2. `bundles/bloxd.io/chunks/js/619.js` (Changed code · before: `L8-L18` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-04ff1188cad10ddf822060c22c4f5221c01a76a4d8694f97bab1c8990199e9beR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-04ff1188cad10ddf822060c22c4f5221c01a76a4d8694f97bab1c8990199e9be) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/619.js#L8-L11) · [Before (L8-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/619.js#L8-L18)

```diff
-     var yR = GR(66),
-       tR = GR(5637),
-       uR = GR(1867),
-       ZR = GR(1163),
-       qR = GR.n(ZR),
-       iR = GR(1590),
-       fR = GR(1270),
-       VR = GR(5610),
-       KR = GR(5624),
-       wR = GR(5629),
-       rR = GR(1378);
+     var Zr = Qr(3396),
+       Wr = Qr(38339),
+       ar = Qr(53957),
+       jr = Qr.n(ar);
```

#### 3. `bundles/bloxd.io/chunks/js/619.js` (Changed code · before: `L21-L27` → after: `L14-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-04ff1188cad10ddf822060c22c4f5221c01a76a4d8694f97bab1c8990199e9beR14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-04ff1188cad10ddf822060c22c4f5221c01a76a4d8694f97bab1c8990199e9be) · [After (L14-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/619.js#L14-L22) · [Before (L21-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/619.js#L21-L27)

```diff
-       return RR.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
-     }
-     VR.e.registerLanguage("javascript", KR.d), VR.e.registerLanguage("typescript", wR.c);
- 
-     function aR(RR, JR) {
-       const GR = eR(RR).replace(/"/g, "&quot;");
-       return `<button type="button" class="DocsCopyButton ${JR}" title="${GR}" aria-label="${GR}"><svg class="DocsCopyIcon" viewBox="0 0 16 16" aria-hidden="true"><rect x="5.5" y="5.5" width="8.5" height="8.5"/><path d="M10.5 3.5V1.5H1.5v9h2"/></svg><svg class="DocsCopiedIcon" vi … [truncated]
+       return jr().isImportDeclaration(rr) && jr().isStringLiteral(rr.moduleSpecifier) && function(rr) {
+         const Sr = rr.importClause;
+         if (!Sr) return !0;
+         if (Sr.isTypeOnly) return !1;
+         const Qr = Sr.namedBindings;
+         return !(Qr && !jr().isNamespaceImport(Qr)) || !!Sr.name || Qr.elements.some((rr => !rr.isTypeOnly))
+       }(rr) || jr().isExportDeclaration(rr) && rr.moduleSpecifier && jr().isStringLiteral(rr.moduleSpecifier) && function(rr) {
+         return !rr.isTypeOnly && (!rr.exportClause || !jr().isNamedExports(rr.exportClause) || 0 === rr.exportClause.elements.length || rr.exportClause.elements.some((rr => !rr.isTypeOnly)))
+       }(rr) ? rr.moduleSpecifier.text : jr().isImportEqualsDeclaration(rr) && !rr.isTypeOnly && jr().isExternalModuleReference(rr.moduleReference) && rr.moduleReference.expression && jr().isStringLiteral(rr.moduleReference.expression) ? rr.moduleReference.expression.text : jr().i … [truncated]
```

#### 4. `bundles/bloxd.io/chunks/js/619.js` (Changed code · before: `L30-L44` → after: `L25-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-04ff1188cad10ddf822060c22c4f5221c01a76a4d8694f97bab1c8990199e9beR25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-04ff1188cad10ddf822060c22c4f5221c01a76a4d8694f97bab1c8990199e9be) · [After (L25-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/619.js#L25-L61) · [Before (L30-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/619.js#L30-L44)

```diff
-     function LR(RR, JR) {
-       const GR = [],
-         yR = RR.toLowerCase(),
-         tR = JR.toLowerCase();
-       let uR = 0;
-       for (; uR < RR.length;) {
-         const ZR = yR.indexOf(tR, uR);
-         if (-1 === ZR) {
-           GR.push(RR.slice(uR));
-           break
-         }
-         ZR > uR && GR.push(RR.slice(uR, ZR)), GR.push((0, rR.jsx)("mark", {
-           className: "DocsHighlight",
-           children: RR.slice(ZR, ZR + JR.length)
-         }, ZR)), uR = ZR + JR.length
+     function fr(rr, Sr, Qr) {
+       if (!Sr.startsWith("./") && !Sr.startsWith("../")) return;
+       const Wr = ((rr.includes("/") ? rr.slice(0, rr.lastIndexOf("/") + 1) : "") + Sr).split("/"),
+         ar = [];
+       for (const Zr of Wr)
+         if ("" !== Zr && "." !== Zr)
+           if (".." !== Zr) ar.push(Zr);
+           else {
+             if (0 === ar.length) return;
+             ar.pop()
+           } const jr = ar.join("/");
+       for (const Ir of [jr, `${jr}.ts`, `${jr}.js`])
+         if (Ir in Qr && !(0, Zr.n)(Ir)) return Ir
+     }
+ 
+     function Er(rr) {
+ ... (21 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/619.js` (Changed code · before: `L46` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-04ff1188cad10ddf822060c22c4f5221c01a76a4d8694f97bab1c8990199e9beR63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-04ff1188cad10ddf822060c22c4f5221c01a76a4d8694f97bab1c8990199e9be) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/619.js#L63) · [Before (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/619.js#L46)

```diff
-       return GR
+       return [...Sr].sort()
```

#### 6. `bundles/bloxd.io/chunks/js/619.js` (Changed code · before: `L48-L414` → after: `L65-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-04ff1188cad10ddf822060c22c4f5221c01a76a4d8694f97bab1c8990199e9beR65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-04ff1188cad10ddf822060c22c4f5221c01a76a4d8694f97bab1c8990199e9be) · [After (L65-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/619.js#L65-L79) · [Before (L48-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/619.js#L48-L414)

```diff
-     var nR = GR(1468),
-       UR = GR(1501),
-       WR = GR(37994),
-       AR = GR(37999);
-     const CR = {
-         clientOptions: {
-           tabStep: "docsClientOptionsTab",
-           tabText: "codeEditor:tutorialClientOptionsTab",
-           pageStep: "docsClientOptions",
-           pageText: "codeEditor:tutorialClientOptions"
-         },
-         apiReference: {
-           tabStep: "docsApiReferenceTab",
-           tabText: "codeEditor:tutorialApiReferenceTab",
-           pageStep: "docsApiReference",
-           pageText: "codeEditor:tutorialApiReference"
- ... (351 more removed lines; see GitHub link above)
+   },
+   54007: rr => {
+     function Sr(rr) {
+       var Sr = new Error("Cannot find module '" + rr + "'");
+       throw Sr.code = "MODULE_NOT_FOUND", Sr
+     }
+     Sr.keys = () => [], Sr.resolve = Sr, Sr.id = 54007, rr.exports = Sr
+   },
+   53995: () => {},
+   53972: () => {},
+   54009: () => {},
+   53989: () => {},
+   53980: () => {},
+   53966: () => {},
+   54002: () => {}
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/620.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/620.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-239312ab42b8e877ff5758e6e10fe35c0182d607b90b7f287165d12684806147)

#### 1. `bundles/bloxd.io/chunks/js/620.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-239312ab42b8e877ff5758e6e10fe35c0182d607b90b7f287165d12684806147R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-239312ab42b8e877ff5758e6e10fe35c0182d607b90b7f287165d12684806147) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/620.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/620.js#L4-L6)

```diff
-   53508: (RR, JR, GR) => {
-     GR.d(JR, {
-       ensureLocalBloxdTypes: () => nR
+   54028: (rr, Sr, Qr) => {
+     Qr.r(Sr), Qr.d(Sr, {
+       default: () => yr
```

#### 2. `bundles/bloxd.io/chunks/js/620.js` (Changed code · before: `L8-L17` → after: `L8-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-239312ab42b8e877ff5758e6e10fe35c0182d607b90b7f287165d12684806147R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-239312ab42b8e877ff5758e6e10fe35c0182d607b90b7f287165d12684806147) · [After (L8-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/620.js#L8-L18) · [Before (L8-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/620.js#L8-L17)

```diff
-     var yR = GR(5650),
-       tR = GR(53388),
-       uR = GR(53382),
-       ZR = GR(37967),
-       qR = GR(37976),
-       iR = GR(37988);
-     const fR = JSON.stringify({
-       name: "@bloxd",
-       types: "index.d.ts"
-     }, null, "\t") + "\n";
+     var Zr = Qr(72),
+       Wr = Qr(5566),
+       ar = Qr(1804),
+       jr = Qr(1155),
+       Ir = Qr.n(jr),
+       fr = Qr(1576),
+       Er = Qr(1251),
+       pr = Qr(5538),
+       xr = Qr(5553),
+       mr = Qr(5562),
+       Nr = Qr(1338);
```

#### 3. `bundles/bloxd.io/chunks/js/620.js` (Changed code · before: `L20` → after: `L21-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-239312ab42b8e877ff5758e6e10fe35c0182d607b90b7f287165d12684806147R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-239312ab42b8e877ff5758e6e10fe35c0182d607b90b7f287165d12684806147) · [After (L21-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/620.js#L21-L27) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/620.js#L20)

```diff
-       return RR.replace(/^\//, "")
+       return rr.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
+     }
+     pr.d.registerLanguage("javascript", xr.d), pr.d.registerLanguage("typescript", mr.c);
+ 
+     function tr(rr, Sr) {
+       const Qr = Ur(rr).replace(/"/g, "&quot;");
+       return `<button type="button" class="DocsCopyButton ${Sr}" title="${Qr}" aria-label="${Qr}"><svg class="DocsCopyIcon" viewBox="0 0 16 16" aria-hidden="true"><rect x="5.5" y="5.5" width="8.5" height="8.5"/><path d="M10.5 3.5V1.5H1.5v9h2"/></svg><svg class="DocsCopiedIcon" vi … [truncated]
```

#### 4. `bundles/bloxd.io/chunks/js/620.js` (Changed code · before: `L23-L42` → after: `L30-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-239312ab42b8e877ff5758e6e10fe35c0182d607b90b7f287165d12684806147R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-239312ab42b8e877ff5758e6e10fe35c0182d607b90b7f287165d12684806147) · [After (L30-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/620.js#L30-L44) · [Before (L23-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/620.js#L23-L42)

```diff
-     function KR(RR) {
-       return VR((0, qR.w)(RR.name, "")).replace(/\/$/, "")
-     }
- 
-     function wR(RR) {
-       return RR.typesVfsPath.slice(RR.typesVfsPath.lastIndexOf("/") + 1)
-     }
- 
-     function rR(RR) {
-       return JSON.stringify({
-         name: RR.specifier,
-         types: wR(RR)
-       }, null, "\t") + "\n"
-     }
-     async function eR(RR) {
-       let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
- ... (4 more removed lines; see GitHub link above)
+     function hr(rr, Sr) {
+       const Qr = [],
+         Zr = rr.toLowerCase(),
+         Wr = Sr.toLowerCase();
+       let ar = 0;
+       for (; ar < rr.length;) {
+         const jr = Zr.indexOf(Wr, ar);
+         if (-1 === jr) {
+           Qr.push(rr.slice(ar));
+           break
+         }
+         jr > ar && Qr.push(rr.slice(ar, jr)), Qr.push((0, Nr.jsx)("mark", {
+           className: "DocsHighlight",
+           children: rr.slice(jr, jr + Sr.length)
+         }, jr)), ar = jr + Sr.length
```

#### 5. `bundles/bloxd.io/chunks/js/620.js` (Changed code · before: `L46-L90` → after: `L48-L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-239312ab42b8e877ff5758e6e10fe35c0182d607b90b7f287165d12684806147R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-239312ab42b8e877ff5758e6e10fe35c0182d607b90b7f287165d12684806147) · [After (L48-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/620.js#L48-L57) · [Before (L46-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/620.js#L46-L90)

```diff
-     async function aR(RR, JR, GR) {
-       const yR = KR(JR),
-         tR = await (0, iR.l)(RR, yR);
-       if (!tR) return;
-       const uR = new Set([wR(JR), "package.json"]);
-       if (GR)
-         for (const iR of Object.keys(JR.files)) uR.add(iR);
-       const ZR = await eR(tR),
-         qR = new Set;
-       for (const KR of ZR) {
-         if (uR.has(KR)) continue;
-         await (0, iR.E)(RR, `${yR}/${KR}`);
-         const JR = KR.split("/");
-         for (let RR = 1; RR < JR.length; RR++) qR.add(JR.slice(0, RR).join("/"))
-       }
-       const fR = [...qR].sort(((RR, JR) => JR.split("/").length - RR.split("/").length));
- ... (29 more removed lines; see GitHub link above)
+     var zr = Qr(1448),
+       Yr = Qr(1489),
+       nr = Qr(38361),
+       er = Qr(38363);
+     const Kr = {
+         clientOptions: {
+           tabStep: "docsClientOptionsTab",
+           tabText: "codeEditor:tutorialClientOptionsTab",
+           pageStep: "docsClientOptions",
+           pageText: "codeEditor:tutorialClientOptions"
```

#### 6. `bundles/bloxd.io/chunks/js/620.js` (Changed code · before: `L92-L108` → after: `L59-L413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-239312ab42b8e877ff5758e6e10fe35c0182d607b90b7f287165d12684806147R59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-239312ab42b8e877ff5758e6e10fe35c0182d607b90b7f287165d12684806147) · [After (L59-L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/620.js#L59-L413) · [Before (L92-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/620.js#L92-L108)

```diff
-         include: ["./**/*.ts", "./**/*.js", "./**/*.d.ts"],
-         files: ["node_modules/@bloxd/globals.d.ts", "node_modules/@bloxd/lib.d.ts", ...GR]
-       }, null, "\t") + "\n"
-     }
-     async function nR(RR) {
-       let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
-       const GR = new Set(JR.map((RR => RR.name))),
-         wR = Object.values(ZR.i).flatMap((JR => {
-           const yR = VR(JR.typesVfsPath),
-             tR = `${KR(JR)}/package.json`;
-           return [...GR.has(JR.name) ? Object.entries(JR.files).map((GR => {
-             let [yR, tR] = GR;
-             return (0, iR.N)(RR, VR((0, qR.w)(JR.name, yR)), tR)
-           })) : [], (0, iR.N)(RR, yR, JR.types), (0, iR.N)(RR, tR, rR(JR))]
-         }));
-       await Promise.all([(0, iR.N)(RR, "node_modules/@bloxd/index.d.ts", yR.default), (0, iR.N)(RR, "node_modules/@bloxd/globals.d.ts", uR.d), (0, iR.N)(RR, "node_modules/@bloxd/lib.d.ts", tR.b), (0, iR.N)(RR, "node_modules/@bloxd/package.json", fR), (0, iR.N)(RR, "tsconfig.json" … [truncated]
- ... (1 more removed lines; see GitHub link above)
+         apiReference: {
+           tabStep: "docsApiReferenceTab",
+           tabText: "codeEditor:tutorialApiReferenceTab",
+           pageStep: "docsApiReference",
+           pageText: "codeEditor:tutorialApiReference"
+         },
+         callbacks: {
+           tabStep: "docsCallbacksTab",
+           tabText: "codeEditor:tutorialCallbacksTab",
+           pageStep: "docsCallbacks",
+           pageText: "codeEditor:tutorialCallbacks"
+         }
+       },
+       yr = (0, Zr.memo)((function(rr) {
+         var Sr, Qr, jr, xr, mr, yr, Br;
+         let {
+ ... (339 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/621.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/621.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c24fe83b2abc32361add71ac0ba37abb8a7971d901603dbf22dcc77fd9852778)

#### 1. `bundles/bloxd.io/chunks/js/621.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c24fe83b2abc32361add71ac0ba37abb8a7971d901603dbf22dcc77fd9852778R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c24fe83b2abc32361add71ac0ba37abb8a7971d901603dbf22dcc77fd9852778) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/621.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/621.js#L4-L6)

```diff
-   53623: (RR, JR, GR) => {
-     GR.r(JR), GR.d(JR, {
-       installImageBitmapTextureLoader: () => fR
+   54049: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       ensureLocalBloxdTypes: () => zr
```

#### 2. `bundles/bloxd.io/chunks/js/621.js` (Changed code · before: `L8-L10` → after: `L8-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c24fe83b2abc32361add71ac0ba37abb8a7971d901603dbf22dcc77fd9852778R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c24fe83b2abc32361add71ac0ba37abb8a7971d901603dbf22dcc77fd9852778) · [After (L8-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/621.js#L8-L17) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/621.js#L8-L10)

```diff
-     var yR = GR(41399),
-       tR = GR(53632),
-       uR = GR(4479);
+     var Zr = Qr(5577),
+       Wr = Qr(53935),
+       ar = Qr(53933),
+       jr = Qr(38327),
+       Ir = Qr(38339),
+       fr = Qr(38350);
+     const Er = JSON.stringify({
+       name: "@bloxd",
+       types: "index.d.ts"
+     }, null, "\t") + "\n";
```

#### 3. `bundles/bloxd.io/chunks/js/621.js` (Changed code · before: `L12-L17` → after: `L19-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c24fe83b2abc32361add71ac0ba37abb8a7971d901603dbf22dcc77fd9852778R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c24fe83b2abc32361add71ac0ba37abb8a7971d901603dbf22dcc77fd9852778) · [After (L19-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/621.js#L19-L42) · [Before (L12-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/621.js#L12-L17)

```diff
-     function ZR(RR, JR) {
-       if ("string" === typeof RR) {
-         const GR = (0, uR.g)(RR);
-         return GR ? new Blob([(0, uR.c)(GR.base64)], {
-           type: GR.mimeType || JR
-         }) : null
+     function pr(rr) {
+       return rr.replace(/^\//, "")
+     }
+ 
+     function xr(rr) {
+       return pr((0, Ir.u)(rr.name, "")).replace(/\/$/, "")
+     }
+ 
+     function mr(rr) {
+       return rr.typesVfsPath.slice(rr.typesVfsPath.lastIndexOf("/") + 1)
+     }
+ 
+     function Nr(rr) {
+       return JSON.stringify({
+         name: rr.specifier,
+         types: mr(rr)
+ ... (8 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/621.js` (Changed code · before: `L19-L21` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c24fe83b2abc32361add71ac0ba37abb8a7971d901603dbf22dcc77fd9852778R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c24fe83b2abc32361add71ac0ba37abb8a7971d901603dbf22dcc77fd9852778) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/621.js#L44) · [Before (L19-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/621.js#L19-L21)

```diff
-       return RR instanceof Blob ? RR : new Blob([RR], {
-         type: JR
-       })
+       return Qr
```

#### 5. `bundles/bloxd.io/chunks/js/621.js` (Changed code · before: `L23-L30` → after: `L46-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c24fe83b2abc32361add71ac0ba37abb8a7971d901603dbf22dcc77fd9852778R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c24fe83b2abc32361add71ac0ba37abb8a7971d901603dbf22dcc77fd9852778) · [After (L46-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/621.js#L46-L59) · [Before (L23-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/621.js#L23-L30)

```diff
-     const qR = function(RR, JR, GR, yR) {
-       let uR, qR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
-         iR = arguments.length > 5 ? arguments[5] : void 0,
-         fR = arguments.length > 6 ? arguments[6] : void 0;
-       try {
-         uR = ZR(RR, qR)
-       } catch {
-         uR = null
+     async function tr(rr, Sr, Qr) {
+       const Zr = xr(Sr),
+         Wr = await (0, fr.k)(rr, Zr);
+       if (!Wr) return;
+       const ar = new Set([mr(Sr), "package.json"]);
+       if (Qr)
+         for (const fr of Object.keys(Sr.files)) ar.add(fr);
+       const jr = await Ur(Wr),
+         Ir = new Set;
+       for (const xr of jr) {
+         if (ar.has(xr)) continue;
+         await (0, fr.z)(rr, `${Zr}/${xr}`);
+         const Sr = xr.split("/");
+         for (let rr = 1; rr < Sr.length; rr++) Ir.add(Sr.slice(0, rr).join("/"))
```

#### 6. `bundles/bloxd.io/chunks/js/621.js` (Changed code · before: `L32-L42` → after: `L61-L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c24fe83b2abc32361add71ac0ba37abb8a7971d901603dbf22dcc77fd9852778R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c24fe83b2abc32361add71ac0ba37abb8a7971d901603dbf22dcc77fd9852778) · [After (L61-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/621.js#L61-L68) · [Before (L32-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/621.js#L32-L42)

```diff
-       return uR ? (createImageBitmap(uR, {
-         premultiplyAlpha: "none",
-         colorSpaceConversion: "none",
-         ...iR
-       }).then((RR => {
-         JR(RR)
-       }), (() => {
-         (0, tR.h)(RR, JR, GR, yR, qR, iR, fR)
-       })), null) : (0, tR.h)(RR, JR, GR, yR, qR, iR, fR)
-     };
-     let iR = "idle";
+       const Er = [...Ir].sort(((rr, Sr) => Sr.split("/").length - rr.split("/").length));
+       for (const xr of Er) try {
+         await (0, fr.z)(rr, `${Zr}/${xr}`)
+       } catch (pr) {
+         if (pr instanceof DOMException && "InvalidModificationError" === pr.name) continue;
+         throw pr
+       }
+     }
```

#### 7. `bundles/bloxd.io/chunks/js/621.js` (Changed code · before: `L44-L63` → after: `L70-L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c24fe83b2abc32361add71ac0ba37abb8a7971d901603dbf22dcc77fd9852778R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c24fe83b2abc32361add71ac0ba37abb8a7971d901603dbf22dcc77fd9852778) · [After (L70-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/621.js#L70-L94) · [Before (L44-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/621.js#L44-L63)

```diff
-     function fR() {
-       "idle" === iR && "function" === typeof createImageBitmap && (iR = "pending", async function() {
-         const RR = document.createElement("canvas");
-         RR.width = 1, RR.height = 2;
-         const JR = RR.getContext("2d");
-         if (!JR) throw new Error("2d context unavailable");
-         JR.fillStyle = "#f00", JR.fillRect(0, 0, 1, 1), JR.fillStyle = "#0f0", JR.fillRect(0, 1, 1, 1);
-         const GR = ZR(RR.toDataURL(), "");
-         if (!GR) throw new Error("toDataURL did not produce a base64 data URL");
-         const yR = await createImageBitmap(GR, {
-           premultiplyAlpha: "none",
-           colorSpaceConversion: "none",
-           imageOrientation: "flipY"
-         });
-         JR.drawImage(yR, 0, 0);
-         const tR = JR.getImageData(0, 0, 1, 1).data;
- ... (4 more removed lines; see GitHub link above)
+     function hr(rr) {
+       const Sr = {
+         "@bloxd": ["./node_modules/@bloxd/index.d.ts"]
+       };
+       for (const Zr of Object.values(jr.e)) Sr[Zr.specifier] = [`.${Zr.typesVfsPath}`];
+       const Qr = [];
+       for (const Zr of rr)
+         for (const rr of Object.keys(Zr.files)) Qr.push(pr((0, Ir.u)(Zr.name, rr)));
+       return JSON.stringify({
+         compilerOptions: {
+           allowJs: !0,
+           checkJs: !1,
+           strict: !1,
+           module: "ESNext",
+           moduleResolution: "bundler",
+           target: "ES2015",
+ ... (9 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/621.js` (Changed code · before: `L65-L72` → after: `L96-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c24fe83b2abc32361add71ac0ba37abb8a7971d901603dbf22dcc77fd9852778R96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c24fe83b2abc32361add71ac0ba37abb8a7971d901603dbf22dcc77fd9852778) · [After (L96-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/621.js#L96-L108) · [Before (L65-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/621.js#L65-L72)

```diff
-   },
-   53632: (RR, JR, GR) => {
-     GR.d(JR, {
-       d: () => yR.h,
-       h: () => yR.q
-     });
-     var yR = GR(41564);
-     (0, yR.u)()
+     async function zr(rr) {
+       let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
+       const Qr = new Set(Sr.map((rr => rr.name))),
+         mr = Object.values(jr.e).flatMap((Sr => {
+           const Zr = pr(Sr.typesVfsPath),
+             Wr = `${xr(Sr)}/package.json`;
+           return [...Qr.has(Sr.name) ? Object.entries(Sr.files).map((Qr => {
+             let [Zr, Wr] = Qr;
+             return (0, fr.G)(rr, pr((0, Ir.u)(Sr.name, Zr)), Wr)
+           })) : [], (0, fr.G)(rr, Zr, Sr.types), (0, fr.G)(rr, Wr, Nr(Sr))]
+         }));
+       await Promise.all([(0, fr.G)(rr, "node_modules/@bloxd/index.d.ts", Zr.default), (0, fr.G)(rr, "node_modules/@bloxd/globals.d.ts", ar.d), (0, fr.G)(rr, "node_modules/@bloxd/lib.d.ts", Wr.c), (0, fr.G)(rr, "node_modules/@bloxd/package.json", Er), (0, fr.G)(rr, "tsconfig.json" … [truncated]
+     }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/622.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/622.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-55df2d9221fa4a42c66b747c506e8867463e9296c8ce2ebf719924f6051ed4b5)

#### 1. `bundles/bloxd.io/chunks/js/622.js` (Changed code · before: `L4-L436` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-55df2d9221fa4a42c66b747c506e8867463e9296c8ce2ebf719924f6051ed4b5R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-55df2d9221fa4a42c66b747c506e8867463e9296c8ce2ebf719924f6051ed4b5) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/622.js#L4-L6) · [Before (L4-L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/622.js#L4-L436)

```diff
-   53728: (RR, JR, GR) => {
-     GR.d(JR, {
-       d: () => uR
-     });
-     var yR = GR(53716),
-       tR = GR(53735);
- 
-     function uR(RR) {
-       (0, tR.d)(RR), (0, yR.u)(RR);
-       const JR = RR._surfaces;
-       for (const GR of JR) GR._renderingContexts.length = 0, GR._ro?.disconnect(), GR._context.unconfigure();
-       JR.length = 0;
-       try {
-         RR._disposeManagedResources?.(), RR._disposeStorageBuffers?.()
-       } finally {
-         RR._device.destroy()
- ... (417 more removed lines; see GitHub link above)
+   54157: (rr, Sr, Qr) => {
+     Qr.r(Sr), Qr.d(Sr, {
+       installImageBitmapTextureLoader: () => Er
```

#### 2. `bundles/bloxd.io/chunks/js/622.js` (Changed code · before: `L438-L895` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-55df2d9221fa4a42c66b747c506e8867463e9296c8ce2ebf719924f6051ed4b5R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-55df2d9221fa4a42c66b747c506e8867463e9296c8ce2ebf719924f6051ed4b5) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/622.js#L8-L10) · [Before (L438-L895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/622.js#L438-L895)

```diff
-     var yR = GR(53720),
-       tR = GR(53716);
- 
-     function uR(RR, JR) {
-       JR._passes.length = 0, RR._currentProcessedTask = JR;
-       try {
-         JR.record()
-       } finally {
-         RR._currentProcessedTask = null
-       }
-     }
-     var ZR = GR(53742);
- 
-     function qR(RR) {
-       const JR = RR.worldMatrixVersion;
-       if (RR._viewVer === JR) return RR._viewCache;
- ... (442 more removed lines; see GitHub link above)
+     var Zr = Qr(41764),
+       Wr = Qr(54160),
+       ar = Qr(4413);
```

#### 3. `bundles/bloxd.io/chunks/js/622.js` (Changed code · before: `L898-L1190` → after: `L13-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-55df2d9221fa4a42c66b747c506e8867463e9296c8ce2ebf719924f6051ed4b5R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-55df2d9221fa4a42c66b747c506e8867463e9296c8ce2ebf719924f6051ed4b5) · [After (L13-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/622.js#L13-L17) · [Before (L898-L1190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/622.js#L898-L1190)

```diff
-       const GR = RR.engine,
-         tR = {
-           _kind: "tL",
-           surface: RR,
-           clearColor: {
-             r: .2,
-             g: .2,
-             b: .3,
-             a: 1
-           },
-           camera: null,
-           lights: [],
-           meshes: [],
-           animationGroups: [],
-           fog: null,
-           clipPlane: null,
- ... (277 more removed lines; see GitHub link above)
+       if ("string" === typeof rr) {
+         const Qr = (0, ar.g)(rr);
+         return Qr ? new Blob([(0, ar.e)(Qr.base64)], {
+           type: Qr.mimeType || Sr
+         }) : null
```

#### 4. `bundles/bloxd.io/chunks/js/622.js` (Changed code · before: `L1192-L1229` → after: `L19-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-55df2d9221fa4a42c66b747c506e8867463e9296c8ce2ebf719924f6051ed4b5R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-55df2d9221fa4a42c66b747c506e8867463e9296c8ce2ebf719924f6051ed4b5) · [After (L19-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/622.js#L19-L20) · [Before (L1192-L1229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/622.js#L1192-L1229)

```diff
-     }
-   },
-   53672: (RR, JR, GR) => {
-     GR.r(JR), GR.d(JR, {
-       generateMipmaps: () => rR,
-       recordMipmaps: () => eR
-     });
-     var yR = GR(53658),
-       tR = GR(53670),
-       uR = {
-         magFilter: "linear",
-         minFilter: "linear"
-       };
-     var ZR = "@group(0)@binding(0)var t:texture_2d<f32>;@group(0)@binding(1)var s:sampler;struct V{@builtin(position)p:vec4f,@location(0)u:vec2f};@vertex fn vs(@builtin(vertex_index)i:u32)->V{let p=array<vec2f,3>(vec2f(-1,-1),vec2f(3,-1),vec2f(-1,3))[i];return V(vec4f(p,0,1),p*ve … [truncated]
-       qR = null,
-       iR = null,
- ... (22 more removed lines; see GitHub link above)
+       return rr instanceof Blob ? rr : new Blob([rr], {
+         type: Sr
```

#### 5. `bundles/bloxd.io/chunks/js/622.js` (Changed code · before: `L1232-L1311` → after: `L23-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-55df2d9221fa4a42c66b747c506e8867463e9296c8ce2ebf719924f6051ed4b5R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-55df2d9221fa4a42c66b747c506e8867463e9296c8ce2ebf719924f6051ed4b5) · [After (L23-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/622.js#L23-L63) · [Before (L1232-L1311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/622.js#L1232-L1311)

```diff
- 
-     function rR(RR, JR, GR) {
-       const yR = RR._device,
-         tR = yR.createCommandEncoder();
-       eR(RR, JR, tR, GR), yR.queue.submit([tR.finish()])
-     }
- 
-     function eR(RR, JR, GR, yR) {
-       if (JR.mipLevelCount <= 1) return;
-       const tR = RR._device,
-         uR = function(RR, JR) {
-           const GR = RR._device;
-           wR(RR), qR ??= new Map;
-           let yR = qR.get(JR);
-           return yR || (yR = GR.createRenderPipeline({
-             layout: GR.createPipelineLayout({
- ... (64 more removed lines; see GitHub link above)
+     const Ir = function(rr, Sr, Qr, Zr) {
+       let ar, Ir = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
+         fr = arguments.length > 5 ? arguments[5] : void 0,
+         Er = arguments.length > 6 ? arguments[6] : void 0;
+       try {
+         ar = jr(rr, Ir)
+       } catch {
+         ar = null
+       }
+       return ar ? (createImageBitmap(ar, {
+         premultiplyAlpha: "none",
+         colorSpaceConversion: "none",
+         ...fr
+       }).then((rr => {
+         Sr(rr)
+       }), (() => {
+ ... (25 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/622.js` (Changed code · before: `L1317` → after: `L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-55df2d9221fa4a42c66b747c506e8867463e9296c8ce2ebf719924f6051ed4b5R66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-55df2d9221fa4a42c66b747c506e8867463e9296c8ce2ebf719924f6051ed4b5) · [After (L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/622.js#L66) · [Before (L1317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/622.js#L1317)

```diff
-   53651: (RR, JR, GR) => {
+   54160: (rr, Sr, Qr) => {
```

#### 7. `bundles/bloxd.io/chunks/js/622.js` (Changed code · before: `L1319-L1320` → after: `L68-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-55df2d9221fa4a42c66b747c506e8867463e9296c8ce2ebf719924f6051ed4b5R68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-55df2d9221fa4a42c66b747c506e8867463e9296c8ce2ebf719924f6051ed4b5) · [After (L68-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/622.js#L68-L69) · [Before (L1319-L1320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/622.js#L1319-L1320)

```diff
-       c: () => fR,
-       e: () => VR
+       e: () => Zr.g,
+       h: () => Zr.q
```

#### 8. `bundles/bloxd.io/chunks/js/622.js` (Changed code · before: `L1322-L1379` → after: `L71-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-55df2d9221fa4a42c66b747c506e8867463e9296c8ce2ebf719924f6051ed4b5R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-55df2d9221fa4a42c66b747c506e8867463e9296c8ce2ebf719924f6051ed4b5) · [After (L71-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/622.js#L71-L72) · [Before (L1322-L1379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/622.js#L1322-L1379)

```diff
-     var yR = GR(53654),
-       tR = GR(53658),
-       uR = GR(53664),
-       ZR = GR(53670),
-       qR = GR(53672),
-       iR = GR(53680);
- 
-     function fR(RR, JR, GR, qR) {
-       let fR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
-       (JR < 1 || GR < 1 || qR < 1) && (0, yR.c)(722, JR, GR, qR);
-       const VR = RR._device,
-         KR = fR.mipMaps ?? !0,
-         wR = fR.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
-         rR = VR.createTexture({
-           size: {
-             width: JR,
- ... (42 more removed lines; see GitHub link above)
+     var Zr = Qr(41898);
+     (0, Zr.x)()
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/623.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/623.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89929e31464dbc9a6f1984d8ec730311ead7243c370785d0b6d0556b405f1786)

#### 1. `bundles/bloxd.io/chunks/js/623.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89929e31464dbc9a6f1984d8ec730311ead7243c370785d0b6d0556b405f1786R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89929e31464dbc9a6f1984d8ec730311ead7243c370785d0b6d0556b405f1786) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/623.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/623.js#L4)

```diff
-   53767: (RR, JR, GR) => {
+   54241: (rr, Sr, Qr) => {
```

#### 2. `bundles/bloxd.io/chunks/js/623.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89929e31464dbc9a6f1984d8ec730311ead7243c370785d0b6d0556b405f1786R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89929e31464dbc9a6f1984d8ec730311ead7243c370785d0b6d0556b405f1786) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/623.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/623.js#L6)

```diff
-       parseShaderPack: () => yR
+       e: () => ar
```

#### 3. `bundles/bloxd.io/chunks/js/623.js` (Changed code · before: `L10-L15` → after: `L12-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89929e31464dbc9a6f1984d8ec730311ead7243c370785d0b6d0556b405f1786R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89929e31464dbc9a6f1984d8ec730311ead7243c370785d0b6d0556b405f1786) · [After (L12-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/623.js#L12-L19) · [Before (L10-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/623.js#L10-L15)

```diff
-       var JR, GR;
-       const yR = RR.get("shaderPackUrl"),
-         tR = null !== (JR = RR.get("shaderPackMode")) && void 0 !== JR ? JR : "strict";
-       if (null === yR) {
-         if (RR.has("shaderPackMode")) throw new Error("shaderPackMode= needs shaderPackUrl=");
-         return null
+       (0, Wr.b)(rr), (0, Zr.r)(rr);
+       const Sr = rr._surfaces;
+       for (const Qr of Sr) Qr._renderingContexts.length = 0, Qr._ro?.disconnect(), Qr._context.unconfigure();
+       Sr.length = 0;
+       try {
+         rr._disposeManagedResources?.(), rr._disposeStorageBuffers?.()
+       } finally {
+         rr._device.destroy()
```

#### 4. `bundles/bloxd.io/chunks/js/623.js` (Changed code · before: `L17-L22` → after: `L21-L609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89929e31464dbc9a6f1984d8ec730311ead7243c370785d0b6d0556b405f1786R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89929e31464dbc9a6f1984d8ec730311ead7243c370785d0b6d0556b405f1786) · [After (L21-L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/623.js#L21-L609) · [Before (L17-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/623.js#L17-L22)

```diff
-       if ("lite" !== RR.get("renderer")) throw new Error("shaderPackUrl= needs renderer=lite: shader packs run on Lite only");
-       if (! function(RR) {
-           return "strict" === RR || "allow" === RR
-         }(tR)) throw new Error(`Unknown shaderPackMode "${tR}" - use strict or allow`);
-       const uR = (null !== (GR = RR.get("variants")) && void 0 !== GR ? GR : "").split(",").find((RR => RR.trim().startsWith("liteShaderPack")));
-       if (void 0 !== uR) throw new Error(`shaderPackUrl= runs its own pack: drop variants=${uR.trim()}`);
+     }
+   },
+   54233: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       d: () => mr,
+       f: () => zr,
+       g: () => Nr,
+       j: () => Ur,
+       l: () => er,
+       p: () => Yr,
+       r: () => nr
+     });
+     var Zr = Qr(54182);
+     var Wr = "Babylon Lite v1.32.0",
+       ar = Qr(54235);
+ 
+ ... (573 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/623.js` (Changed code · before: `L24-L25` → after: `L611-L760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89929e31464dbc9a6f1984d8ec730311ead7243c370785d0b6d0556b405f1786R611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89929e31464dbc9a6f1984d8ec730311ead7243c370785d0b6d0556b405f1786) · [After (L611-L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/623.js#L611-L760) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/623.js#L24-L25)

```diff
-         url: yR,
-         mode: tR
+         _renderables: rr,
+         _opaqueBindings: [],
+         _directBindings: [],
+         _transparentBindings: [],
+         _ob: [],
+         _lastVersion: Sr
+       }
+     }
+ 
+     function Or(rr, Sr, Qr) {
+       rr.clr ??= !0;
+       const Wr = rr.rt._descriptor,
+         ar = rr.depth?._descriptor,
+         fr = {
+           _colorFormat: Wr.format,
+           _depthStencilFormat: ar?.dFormat ?? Wr.dFormat,
+ ... (134 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/624.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/624.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8be4266243e6470b458f98330d1be6e7525c75c46ccd680c3f1f78f881524a76)

#### 1. `bundles/bloxd.io/chunks/js/624.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8be4266243e6470b458f98330d1be6e7525c75c46ccd680c3f1f78f881524a76R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8be4266243e6470b458f98330d1be6e7525c75c46ccd680c3f1f78f881524a76) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/624.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/624.js#L4)

```diff
-   53798: (RR, JR, GR) => {
+   54280: (rr, Sr, Qr) => {
```

#### 2. `bundles/bloxd.io/chunks/js/624.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8be4266243e6470b458f98330d1be6e7525c75c46ccd680c3f1f78f881524a76R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8be4266243e6470b458f98330d1be6e7525c75c46ccd680c3f1f78f881524a76) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/624.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/624.js#L6)

```diff
-       e: () => fR
+       parseShaderPack: () => Zr
```

#### 3. `bundles/bloxd.io/chunks/js/624.js` (Changed code · before: `L8-L15` → after: `L8-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8be4266243e6470b458f98330d1be6e7525c75c46ccd680c3f1f78f881524a76R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8be4266243e6470b458f98330d1be6e7525c75c46ccd680c3f1f78f881524a76) · [After (L8-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/624.js#L8-L25) · [Before (L8-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/624.js#L8-L15)

```diff
-     var yR = GR(38204),
-       tR = GR(38239),
-       uR = GR(41509),
-       ZR = GR(38213),
-       qR = GR(38331);
-     class iR {
-       constructor(RR, JR, GR, yR) {
-         this.name = RR, this.worldAxisForNormal = JR, this.worldAxisForFileX = GR, this.worldAxisForFileY = yR
+ 
+     function Zr(rr) {
+       var Sr, Qr;
+       const Zr = rr.get("shaderPackUrl"),
+         Wr = null !== (Sr = rr.get("shaderPackMode")) && void 0 !== Sr ? Sr : "strict";
+       if (null === Zr) {
+         if (rr.has("shaderPackMode")) throw new Error("shaderPackMode= needs shaderPackUrl=");
+         return null
+       }
+       if ("lite" !== rr.get("renderer")) throw new Error("shaderPackUrl= needs renderer=lite: shader packs run on Lite only");
+       if (! function(rr) {
+           return "strict" === rr || "allow" === rr
+         }(Wr)) throw new Error(`Unknown shaderPackMode "${Wr}" - use strict or allow`);
+       const ar = (null !== (Qr = rr.get("variants")) && void 0 !== Qr ? Qr : "").split(",").find((rr => rr.trim().startsWith("liteShaderPack")));
+       if (void 0 !== ar) throw new Error(`shaderPackUrl= runs its own pack: drop variants=${ar.trim()}`);
+       return {
+ ... (2 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/625.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/625.js` (24 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5c940cfc977c5f7d2c4f8e07f2960e8a2313f10cbd733fa1933ef069e8983e95)

#### 1. `bundles/bloxd.io/chunks/js/625.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5c940cfc977c5f7d2c4f8e07f2960e8a2313f10cbd733fa1933ef069e8983e95R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5c940cfc977c5f7d2c4f8e07f2960e8a2313f10cbd733fa1933ef069e8983e95) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/625.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/625.js#L2)

```diff
- export const ids = [624, 625];
+ export const ids = [625];
```

#### 2. `bundles/bloxd.io/chunks/js/625.js` (Changed code · before: `L4-L43` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5c940cfc977c5f7d2c4f8e07f2960e8a2313f10cbd733fa1933ef069e8983e95R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5c940cfc977c5f7d2c4f8e07f2960e8a2313f10cbd733fa1933ef069e8983e95) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/625.js#L4) · [Before (L4-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/625.js#L4-L43)

```diff
-   53808: (RR, JR, GR) => {
-     GR.r(JR), GR.d(JR, {
-       _DDSTextureLoader: () => uR
-     });
-     var yR = GR(41509),
-       tR = GR(53792);
-     class uR {
-       constructor() {
-         this.supportCascades = !0
-       }
-       loadCubeData(RR, JR, GR, uR) {
-         const ZR = JR.ke();
-         let qR, iR = !1,
-           fR = 1e3;
-         if (Array.isArray(RR))
-           for (let yR = 0; yR < RR.length; yR++) {
- ... (24 more removed lines; see GitHub link above)
+   54310: (rr, Sr, Qr) => {
```

#### 3. `bundles/bloxd.io/chunks/js/625.js` (Changed code · before: `L45` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5c940cfc977c5f7d2c4f8e07f2960e8a2313f10cbd733fa1933ef069e8983e95R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5c940cfc977c5f7d2c4f8e07f2960e8a2313f10cbd733fa1933ef069e8983e95) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/625.js#L6) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/625.js#L45)

```diff
-       e: () => fR
+       d: () => Er
```

#### 4. `bundles/bloxd.io/chunks/js/625.js` (Changed code · before: `L47-L51` → after: `L8-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5c940cfc977c5f7d2c4f8e07f2960e8a2313f10cbd733fa1933ef069e8983e95R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5c940cfc977c5f7d2c4f8e07f2960e8a2313f10cbd733fa1933ef069e8983e95) · [After (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/625.js#L8-L12) · [Before (L47-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/625.js#L47-L51)

```diff
-     var yR = GR(38204),
-       tR = GR(38239),
-       uR = GR(41509),
-       ZR = GR(38213),
-       qR = GR(38331);
+     var Zr = Qr(38560),
+       Wr = Qr(38599),
+       ar = Qr(41861),
+       jr = Qr(38569),
+       Ir = Qr(38684);
```

#### 5. `bundles/bloxd.io/chunks/js/625.js` (Changed code · before: `L63` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5c940cfc977c5f7d2c4f8e07f2960e8a2313f10cbd733fa1933ef069e8983e95R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5c940cfc977c5f7d2c4f8e07f2960e8a2313f10cbd733fa1933ef069e8983e95) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/625.js#L24) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/625.js#L63)

```diff
-         RR.jH()?.ke().flushFramebuffer();
+         rr.eC()?.MU().flushFramebuffer();
```

#### 6. `bundles/bloxd.io/chunks/js/625.js` (Changed code · before: `L106` → after: `L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5c940cfc977c5f7d2c4f8e07f2960e8a2313f10cbd733fa1933ef069e8983e95R67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5c940cfc977c5f7d2c4f8e07f2960e8a2313f10cbd733fa1933ef069e8983e95) · [After (L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/625.js#L67) · [Before (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/625.js#L106)

```diff
-         const tR = RR instanceof Float32Array ? RR : Float32Array.from(RR),
+         const Wr = rr instanceof Float32Array ? rr : Float32Array.from(rr),
```

#### 7. `bundles/bloxd.io/chunks/js/625.js` (Changed code · before: `L165` → after: `L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5c940cfc977c5f7d2c4f8e07f2960e8a2313f10cbd733fa1933ef069e8983e95R126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5c940cfc977c5f7d2c4f8e07f2960e8a2313f10cbd733fa1933ef069e8983e95) · [After (L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/625.js#L126) · [Before (L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/625.js#L165)

```diff
-               isNaN(nR) && (nR = 0), isNaN(UR) && (UR = 0), isNaN(WR) && (WR = 0), 0 === RR.type && (nR /= 255, UR /= 255, WR /= 255), RR.gammaSpace && (nR = Math.pow((0, tR.Clamp)(nR), ZR.i), UR = Math.pow((0, tR.Clamp)(UR), ZR.i), WR = Math.pow((0, tR.Clamp)(WR), ZR.i));
+               isNaN(zr) && (zr = 0), isNaN(Yr) && (Yr = 0), isNaN(nr) && (nr = 0), 0 === rr.type && (zr /= 255, Yr /= 255, nr /= 255), rr.gammaSpace && (zr = Math.pow((0, Wr.Clamp)(zr), jr.h), Yr = Math.pow((0, Wr.Clamp)(Yr), jr.h), nr = Math.pow((0, Wr.Clamp)(nr), jr.h));
```

#### 8. `bundles/bloxd.io/chunks/js/625.js` (Changed code · before: `L174` → after: `L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5c940cfc977c5f7d2c4f8e07f2960e8a2313f10cbd733fa1933ef069e8983e95R135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5c940cfc977c5f7d2c4f8e07f2960e8a2313f10cbd733fa1933ef069e8983e95) · [After (L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/625.js#L135) · [Before (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/625.js#L174)

```diff
-               const CR = new qR.d(nR, UR, WR);
+               const Kr = new Ir.e(zr, Yr, nr);
```

#### 9. `bundles/bloxd.io/chunks/js/625.js` (Changed code · before: `L181` → after: `L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5c940cfc977c5f7d2c4f8e07f2960e8a2313f10cbd733fa1933ef069e8983e95R142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5c940cfc977c5f7d2c4f8e07f2960e8a2313f10cbd733fa1933ef069e8983e95) · [After (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/625.js#L142) · [Before (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/625.js#L181)

```diff
-         return yR.scaleInPlace(rR), yR.convertIncidentRadianceToIrradiance(), yR.convertIrradianceToLambertianRadiance(), uR.g.FromHarmonics(yR)
+         return Zr.scaleInPlace(Nr), Zr.convertIncidentRadianceToIrradiance(), Zr.convertIrradianceToLambertianRadiance(), ar.d.FromHarmonics(Zr)
```

#### 10. `bundles/bloxd.io/chunks/js/625.js` (Changed code · before: `L184` → after: `L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5c940cfc977c5f7d2c4f8e07f2960e8a2313f10cbd733fa1933ef069e8983e95R145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5c940cfc977c5f7d2c4f8e07f2960e8a2313f10cbd733fa1933ef069e8983e95) · [After (L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/625.js#L145) · [Before (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/625.js#L184)

```diff
-     fR._FileFaces = [new iR("right", new yR.r(1, 0, 0), new yR.r(0, 0, -1), new yR.r(0, -1, 0)), new iR("left", new yR.r(-1, 0, 0), new yR.r(0, 0, 1), new yR.r(0, -1, 0)), new iR("up", new yR.r(0, 1, 0), new yR.r(1, 0, 0), new yR.r(0, 0, 1)), new iR("down", new yR.r(0, -1, 0), ne … [truncated]
+     Er._FileFaces = [new fr("right", new Zr.u(1, 0, 0), new Zr.u(0, 0, -1), new Zr.u(0, -1, 0)), new fr("left", new Zr.u(-1, 0, 0), new Zr.u(0, 0, 1), new Zr.u(0, -1, 0)), new fr("up", new Zr.u(0, 1, 0), new Zr.u(1, 0, 0), new Zr.u(0, 0, 1)), new fr("down", new Zr.u(0, -1, 0), ne … [truncated]
```

#### 11. `bundles/bloxd.io/chunks/js/625.js` (Changed code · before: `L186` → after: `L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5c940cfc977c5f7d2c4f8e07f2960e8a2313f10cbd733fa1933ef069e8983e95R147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5c940cfc977c5f7d2c4f8e07f2960e8a2313f10cbd733fa1933ef069e8983e95) · [After (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/625.js#L147) · [Before (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/625.js#L186)

```diff
-   53792: (RR, JR, GR) => {
+   54302: (rr, Sr, Qr) => {
```

#### 12. `bundles/bloxd.io/chunks/js/625.js` (Changed code · before: `L190-L193` → after: `L151-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5c940cfc977c5f7d2c4f8e07f2960e8a2313f10cbd733fa1933ef069e8983e95R151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5c940cfc977c5f7d2c4f8e07f2960e8a2313f10cbd733fa1933ef069e8983e95) · [After (L151-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/625.js#L151-L154) · [Before (L190-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/625.js#L190-L193)

```diff
-     var yR = GR(38239),
-       tR = GR(39914),
-       uR = GR(53798),
-       ZR = GR(41594);
+     var Zr = Qr(38599),
+       Wr = Qr(40246),
+       ar = Qr(54310),
+       jr = Qr(41922);
```

#### 13. `bundles/bloxd.io/chunks/js/625.js` (Changed code · before: `L220` → after: `L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5c940cfc977c5f7d2c4f8e07f2960e8a2313f10cbd733fa1933ef069e8983e95R181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5c940cfc977c5f7d2c4f8e07f2960e8a2313f10cbd733fa1933ef069e8983e95) · [After (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/625.js#L181) · [Before (L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/625.js#L220)

```diff
-           case rR:
+           case Nr:
```

#### 14. `bundles/bloxd.io/chunks/js/625.js` (Changed code · before: `L250` → after: `L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5c940cfc977c5f7d2c4f8e07f2960e8a2313f10cbd733fa1933ef069e8983e95R211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5c940cfc977c5f7d2c4f8e07f2960e8a2313f10cbd733fa1933ef069e8983e95) · [After (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/625.js#L211) · [Before (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/625.js#L250)

```diff
-             qR[fR] = (0, ZR.e)(iR[GR]), qR[fR + 1] = (0, ZR.e)(iR[GR + 1]), qR[fR + 2] = (0, ZR.e)(iR[GR + 2]), eR.StoreLODInAlphaChannel ? qR[fR + 3] = uR : qR[fR + 3] = (0, ZR.e)(iR[GR + 3]), fR += 4
+             Ir[Er] = (0, jr.c)(fr[Qr]), Ir[Er + 1] = (0, jr.c)(fr[Qr + 1]), Ir[Er + 2] = (0, jr.c)(fr[Qr + 2]), Ur.StoreLODInAlphaChannel ? Ir[Er + 3] = ar : Ir[Er + 3] = (0, jr.c)(fr[Qr + 3]), Er += 4
```

#### 15. `bundles/bloxd.io/chunks/js/625.js` (Changed code · before: `L262` → after: `L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5c940cfc977c5f7d2c4f8e07f2960e8a2313f10cbd733fa1933ef069e8983e95R223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5c940cfc977c5f7d2c4f8e07f2960e8a2313f10cbd733fa1933ef069e8983e95) · [After (L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/625.js#L223) · [Before (L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/625.js#L262)

```diff
-               qR[fR] = iR[yR], qR[fR + 1] = iR[yR + 1], qR[fR + 2] = iR[yR + 2], qR[fR + 3] = (0, ZR.i)(uR), fR += 4
+               Ir[Er] = fr[Zr], Ir[Er + 1] = fr[Zr + 1], Ir[Er + 2] = fr[Zr + 2], Ir[Er + 3] = (0, jr.g)(ar), Er += 4
```

#### 16. `bundles/bloxd.io/chunks/js/625.js` (Changed code · before: `L287` → after: `L248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5c940cfc977c5f7d2c4f8e07f2960e8a2313f10cbd733fa1933ef069e8983e95R248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5c940cfc977c5f7d2c4f8e07f2960e8a2313f10cbd733fa1933ef069e8983e95) · [After (L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/625.js#L248) · [Before (L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/625.js#L287)

```diff
-           for (let JR = 0; JR < RR; JR++) qR[fR] = (0, ZR.i)(iR[fR]), qR[fR + 1] = (0, ZR.i)(iR[fR + 1]), qR[fR + 2] = (0, ZR.i)(iR[fR + 2]), eR.StoreLODInAlphaChannel ? qR[fR + 3] = (0, ZR.i)(uR) : qR[fR + 3] = (0, ZR.i)(iR[fR + 3]), fR += 4;
+           for (let Sr = 0; Sr < rr; Sr++) Ir[Er] = (0, jr.g)(fr[Er]), Ir[Er + 1] = (0, jr.g)(fr[Er + 1]), Ir[Er + 2] = (0, jr.g)(fr[Er + 2]), Ur.StoreLODInAlphaChannel ? Ir[Er + 3] = (0, jr.g)(ar) : Ir[Er + 3] = (0, jr.g)(fr[Er + 3]), Er += 4;
```

#### 17. `bundles/bloxd.io/chunks/js/625.js` (Changed code · before: `L297` → after: `L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5c940cfc977c5f7d2c4f8e07f2960e8a2313f10cbd733fa1933ef069e8983e95R258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5c940cfc977c5f7d2c4f8e07f2960e8a2313f10cbd733fa1933ef069e8983e95) · [After (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/625.js#L258) · [Before (L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/625.js#L297)

```diff
-             qR[fR] = 255 * (0, yR.Clamp)(iR[GR]), qR[fR + 1] = 255 * (0, yR.Clamp)(iR[GR + 1]), qR[fR + 2] = 255 * (0, yR.Clamp)(iR[GR + 2]), eR.StoreLODInAlphaChannel ? qR[fR + 3] = ZR : qR[fR + 3] = 255 * (0, yR.Clamp)(iR[GR + 3]), fR += 4
+             Ir[Er] = 255 * (0, Zr.Clamp)(fr[Qr]), Ir[Er + 1] = 255 * (0, Zr.Clamp)(fr[Qr + 1]), Ir[Er + 2] = 255 * (0, Zr.Clamp)(fr[Qr + 2]), Ur.StoreLODInAlphaChannel ? Ir[Er + 3] = jr : Ir[Er + 3] = 255 * (0, Zr.Clamp)(fr[Qr + 3]), Er += 4
```

#### 18. `bundles/bloxd.io/chunks/js/625.js` (Changed code · before: `L308` → after: `L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5c940cfc977c5f7d2c4f8e07f2960e8a2313f10cbd733fa1933ef069e8983e95R269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5c940cfc977c5f7d2c4f8e07f2960e8a2313f10cbd733fa1933ef069e8983e95) · [After (L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/625.js#L269) · [Before (L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/625.js#L308)

```diff
-             iR[VR] = 255 * (0, yR.Clamp)((0, ZR.e)(fR[GR])), iR[VR + 1] = 255 * (0, yR.Clamp)((0, ZR.e)(fR[GR + 1])), iR[VR + 2] = 255 * (0, yR.Clamp)((0, ZR.e)(fR[GR + 2])), eR.StoreLODInAlphaChannel ? iR[VR + 3] = qR : iR[VR + 3] = 255 * (0, yR.Clamp)((0, ZR.e)(fR[GR + 3])), VR … [truncated]
+             fr[pr] = 255 * (0, Zr.Clamp)((0, jr.c)(Er[Qr])), fr[pr + 1] = 255 * (0, Zr.Clamp)((0, jr.c)(Er[Qr + 1])), fr[pr + 2] = 255 * (0, Zr.Clamp)((0, jr.c)(Er[Qr + 2])), Ur.StoreLODInAlphaChannel ? fr[pr + 3] = Ir : fr[pr + 3] = 255 * (0, Zr.Clamp)((0, jr.c)(Er[Qr + 3])), pr … [truncated]
```

#### 19. `bundles/bloxd.io/chunks/js/625.js` (Changed code · before: `L367` → after: `L328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5c940cfc977c5f7d2c4f8e07f2960e8a2313f10cbd733fa1933ef069e8983e95R328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5c940cfc977c5f7d2c4f8e07f2960e8a2313f10cbd733fa1933ef069e8983e95) · [After (L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/625.js#L328) · [Before (L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/625.js#L367)

```diff
-           case VR:
+           case pr:
```

#### 20. `bundles/bloxd.io/chunks/js/625.js` (Changed code · before: `L370` → after: `L331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5c940cfc977c5f7d2c4f8e07f2960e8a2313f10cbd733fa1933ef069e8983e95R331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5c940cfc977c5f7d2c4f8e07f2960e8a2313f10cbd733fa1933ef069e8983e95) · [After (L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/625.js#L331) · [Before (L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/625.js#L370)

```diff
-           case KR:
+           case xr:
```

#### 21. `bundles/bloxd.io/chunks/js/625.js` (Changed code · before: `L373` → after: `L334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5c940cfc977c5f7d2c4f8e07f2960e8a2313f10cbd733fa1933ef069e8983e95R334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5c940cfc977c5f7d2c4f8e07f2960e8a2313f10cbd733fa1933ef069e8983e95) · [After (L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/625.js#L334) · [Before (L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/625.js#L373)

```diff
-           case wR:
+           case mr:
```

#### 22. `bundles/bloxd.io/chunks/js/625.js` (Changed code · before: `L382` → after: `L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5c940cfc977c5f7d2c4f8e07f2960e8a2313f10cbd733fa1933ef069e8983e95R343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5c940cfc977c5f7d2c4f8e07f2960e8a2313f10cbd733fa1933ef069e8983e95) · [After (L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/625.js#L343) · [Before (L382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/625.js#L382)

```diff
-           case rR: {
+           case Nr: {
```

#### 23. `bundles/bloxd.io/chunks/js/625.js` (Changed code · before: `L411` → after: `L372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5c940cfc977c5f7d2c4f8e07f2960e8a2313f10cbd733fa1933ef069e8983e95R372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5c940cfc977c5f7d2c4f8e07f2960e8a2313f10cbd733fa1933ef069e8983e95) · [After (L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/625.js#L372) · [Before (L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/625.js#L411)

```diff
-               const uR = -1 === fR ? pR : 0;
+               const ar = -1 === Er ? Or : 0;
```

#### 24. `bundles/bloxd.io/chunks/js/625.js` (Changed code · before: `L454` → after: `L415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5c940cfc977c5f7d2c4f8e07f2960e8a2313f10cbd733fa1933ef069e8983e95R415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5c940cfc977c5f7d2c4f8e07f2960e8a2313f10cbd733fa1933ef069e8983e95) · [After (L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/625.js#L415) · [Before (L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/625.js#L454)

```diff
-         nR && nR.length > 0 ? yR.sphericalPolynomial = uR.e.ConvertCubeMapToSphericalPolynomial({
+         zr && zr.length > 0 ? Zr.sphericalPolynomial = ar.d.ConvertCubeMapToSphericalPolynomial({
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/626.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/626.js` (21 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-6fb81443977c42f64e0fbf9b3a7cf0fc9cc7cc376c6db630d8bb55bf95a1bfb2)

#### 1. `bundles/bloxd.io/chunks/js/626.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-6fb81443977c42f64e0fbf9b3a7cf0fc9cc7cc376c6db630d8bb55bf95a1bfb2R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-6fb81443977c42f64e0fbf9b3a7cf0fc9cc7cc376c6db630d8bb55bf95a1bfb2) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/626.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/626.js#L2)

```diff
- export const ids = [626];
+ export const ids = [625, 626];
```

#### 2. `bundles/bloxd.io/chunks/js/626.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-6fb81443977c42f64e0fbf9b3a7cf0fc9cc7cc376c6db630d8bb55bf95a1bfb2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-6fb81443977c42f64e0fbf9b3a7cf0fc9cc7cc376c6db630d8bb55bf95a1bfb2) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/626.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/626.js#L4)

```diff
-   53817: (RR, JR, GR) => {
+   54317: (rr, Sr, Qr) => {
```

#### 3. `bundles/bloxd.io/chunks/js/626.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-6fb81443977c42f64e0fbf9b3a7cf0fc9cc7cc376c6db630d8bb55bf95a1bfb2R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-6fb81443977c42f64e0fbf9b3a7cf0fc9cc7cc376c6db630d8bb55bf95a1bfb2) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/626.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/626.js#L6)

```diff
-       _ENVTextureLoader: () => lR
+       _DDSTextureLoader: () => ar
```

#### 4. `bundles/bloxd.io/chunks/js/626.js` (Changed code · before: `L8-L222` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-6fb81443977c42f64e0fbf9b3a7cf0fc9cc7cc376c6db630d8bb55bf95a1bfb2R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-6fb81443977c42f64e0fbf9b3a7cf0fc9cc7cc376c6db630d8bb55bf95a1bfb2) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/626.js#L8-L9) · [Before (L8-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/626.js#L8-L222)

```diff
-     var yR = GR(41449),
-       tR = GR(38204),
-       uR = GR(38239),
-       ZR = GR(41509),
-       qR = GR(41364),
-       iR = GR(41514),
-       fR = (GR(41612), GR(53823)),
-       VR = GR(39914),
-       KR = (GR(53831), GR(53856), GR(41586));
-     const wR = "image/png",
-       rR = [134, 22, 135, 150, 246, 214, 150, 54];
- 
-     function eR(RR) {
-       const JR = new DataView(RR.buffer, RR.byteOffset, RR.byteLength);
-       let GR = 0;
-       for (let ZR = 0; ZR < rR.length; ZR++)
- ... (199 more removed lines; see GitHub link above)
+     var Zr = Qr(41861),
+       Wr = Qr(54302);
```

#### 5. `bundles/bloxd.io/chunks/js/626.js` (Changed code · before: `L225` → after: `L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-6fb81443977c42f64e0fbf9b3a7cf0fc9cc7cc376c6db630d8bb55bf95a1bfb2R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-6fb81443977c42f64e0fbf9b3a7cf0fc9cc7cc376c6db630d8bb55bf95a1bfb2) · [After (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/626.js#L12) · [Before (L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/626.js#L225)

```diff
-         this.supportCascades = !1
+         this.supportCascades = !0
```

#### 6. `bundles/bloxd.io/chunks/js/626.js` (Changed code · before: `L227-L239` → after: `L14-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-6fb81443977c42f64e0fbf9b3a7cf0fc9cc7cc376c6db630d8bb55bf95a1bfb2R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-6fb81443977c42f64e0fbf9b3a7cf0fc9cc7cc376c6db630d8bb55bf95a1bfb2) · [After (L14-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/626.js#L14-L24) · [Before (L227-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/626.js#L227-L239)

```diff
-       loadCubeData(RR, JR, GR, yR, tR) {
-         if (Array.isArray(RR)) return;
-         const uR = eR(RR);
-         if (uR) {
-           JR.width = uR.width, JR.height = uR.width;
-           try {
-             (0, BR.d)(), MR(JR, uR), UR(JR, RR, uR).then((() => {
-               JR.isReady = !0, JR.onLoadedObservable.notifyObservers(JR), JR.onLoadedObservable.clear(), yR && yR()
-             }), (RR => {
-               tR?.("Can not upload environment levels", RR)
-             }))
-           } catch (ZR) {
-             tR?.("Can not upload environment file", ZR)
+       loadCubeData(rr, Sr, Qr, ar) {
+         const jr = Sr.MU();
+         let Ir, fr = !1,
+           Er = 1e3;
+         if (Array.isArray(rr))
+           for (let Zr = 0; Zr < rr.length; Zr++) {
+             const Qr = rr[Zr];
+             Ir = Wr.DDSTools.GetDDSInfo(Qr), Sr.width = Ir.width, Sr.height = Ir.height, fr = (Ir.isRGB || Ir.isLuminance || Ir.mipmapCount > 1) && Sr.generateMipMaps, jr._unpackFlipY(Ir.isCompressed), Wr.DDSTools.UploadDDSLevels(jr, Sr, Qr, Ir, fr, 6, -1, Zr), Ir.isFourCC || 1 ! … [truncated]
+           } else {
+             const ar = rr;
+             Ir = Wr.DDSTools.GetDDSInfo(ar), Sr.width = Ir.width, Sr.height = Ir.height, Qr && (Ir.sphericalPolynomial = new Zr.d), fr = (Ir.isRGB || Ir.isLuminance || Ir.mipmapCount > 1) && Sr.generateMipMaps, jr._unpackFlipY(Ir.isCompressed), Wr.DDSTools.UploadDDSLevels(jr, Sr, … [truncated]
```

#### 7. `bundles/bloxd.io/chunks/js/626.js` (Changed code · before: `L241` → after: `L26-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-6fb81443977c42f64e0fbf9b3a7cf0fc9cc7cc376c6db630d8bb55bf95a1bfb2R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-6fb81443977c42f64e0fbf9b3a7cf0fc9cc7cc376c6db630d8bb55bf95a1bfb2) · [After (L26-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/626.js#L26-L32) · [Before (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/626.js#L241)

```diff
-         } else tR && tR("Can not parse the environment file", null)
+         jr._setCubeMapTextureParams(Sr, fr, Er), Sr.isReady = !0, Sr.onLoadedObservable.notifyObservers(Sr), Sr.onLoadedObservable.clear(), ar && ar({
+           isDDS: !0,
+           width: Sr.width,
+           info: Ir,
+           data: rr,
+           texture: Sr
+         })
```

#### 8. `bundles/bloxd.io/chunks/js/626.js` (Changed code · before: `L243-L244` → after: `L34-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-6fb81443977c42f64e0fbf9b3a7cf0fc9cc7cc376c6db630d8bb55bf95a1bfb2R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-6fb81443977c42f64e0fbf9b3a7cf0fc9cc7cc376c6db630d8bb55bf95a1bfb2) · [After (L34-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/626.js#L34-L39) · [Before (L243-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/626.js#L243-L244)

```diff
-       loadData() {
-         throw ".env not supported in 2d."
+       loadData(rr, Sr, Qr) {
+         const Zr = Wr.DDSTools.GetDDSInfo(rr),
+           ar = (Zr.isRGB || Zr.isLuminance || Zr.mipmapCount > 1) && Sr.generateMipMaps && Math.max(Zr.width, Zr.height) >> Zr.mipmapCount - 1 === 1;
+         Qr(Zr.width, Zr.height, ar, Zr.isFourCC, (() => {
+           Wr.DDSTools.UploadDDSLevels(Sr.MU(), Sr, rr, Zr, ar, 1)
+         }))
```

#### 9. `bundles/bloxd.io/chunks/js/626.js` (Changed code · before: `L248` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-6fb81443977c42f64e0fbf9b3a7cf0fc9cc7cc376c6db630d8bb55bf95a1bfb2R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-6fb81443977c42f64e0fbf9b3a7cf0fc9cc7cc376c6db630d8bb55bf95a1bfb2) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/626.js#L43) · [Before (L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/626.js#L248)

```diff
-   53863: (RR, JR, GR) => {
+   54310: (rr, Sr, Qr) => {
```

#### 10. `bundles/bloxd.io/chunks/js/626.js` (Changed code · before: `L252-L285` → after: `L47-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-6fb81443977c42f64e0fbf9b3a7cf0fc9cc7cc376c6db630d8bb55bf95a1bfb2R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-6fb81443977c42f64e0fbf9b3a7cf0fc9cc7cc376c6db630d8bb55bf95a1bfb2) · [After (L47-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/626.js#L47-L51) · [Before (L252-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/626.js#L252-L285)

```diff
-     var yR = GR(53798),
-       tR = GR(41514);
-     let uR = !1;
- 
-     function ZR() {
-       uR || (uR = !0, tR.c.prototype._sphericalPolynomialTargetSize = 0, tR.c.prototype.forceSphericalPolynomialsRecompute = function() {
-         this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
-       }, Object.defineProperty(tR.c.prototype, "sphericalPolynomial", {
-         get: function() {
-           if (this._texture) {
-             if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
-             if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = yR.e.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialCo … [truncated]
-               this._texture._sphericalPolynomial = RR, this._texture._sphericalPolynomialComputed = !0
-             }))), null
-           }
-           return null
- ... (18 more removed lines; see GitHub link above)
+     var Zr = Qr(38560),
+       Wr = Qr(38599),
+       ar = Qr(41861),
+       jr = Qr(38569),
+       Ir = Qr(38684);
```

#### 11. `bundles/bloxd.io/chunks/js/626.js` (Changed code · before: `L297` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-6fb81443977c42f64e0fbf9b3a7cf0fc9cc7cc376c6db630d8bb55bf95a1bfb2R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-6fb81443977c42f64e0fbf9b3a7cf0fc9cc7cc376c6db630d8bb55bf95a1bfb2) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/626.js#L63) · [Before (L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/626.js#L297)

```diff
-         RR.jH()?.ke().flushFramebuffer();
+         rr.eC()?.MU().flushFramebuffer();
```

#### 12. `bundles/bloxd.io/chunks/js/626.js` (Changed code · before: `L340` → after: `L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-6fb81443977c42f64e0fbf9b3a7cf0fc9cc7cc376c6db630d8bb55bf95a1bfb2R106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-6fb81443977c42f64e0fbf9b3a7cf0fc9cc7cc376c6db630d8bb55bf95a1bfb2) · [After (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/626.js#L106) · [Before (L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/626.js#L340)

```diff
-         const tR = RR instanceof Float32Array ? RR : Float32Array.from(RR),
+         const Wr = rr instanceof Float32Array ? rr : Float32Array.from(rr),
```

#### 13. `bundles/bloxd.io/chunks/js/626.js` (Changed code · before: `L399` → after: `L165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-6fb81443977c42f64e0fbf9b3a7cf0fc9cc7cc376c6db630d8bb55bf95a1bfb2R165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-6fb81443977c42f64e0fbf9b3a7cf0fc9cc7cc376c6db630d8bb55bf95a1bfb2) · [After (L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/626.js#L165) · [Before (L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/626.js#L399)

```diff
-               isNaN(nR) && (nR = 0), isNaN(UR) && (UR = 0), isNaN(WR) && (WR = 0), 0 === RR.type && (nR /= 255, UR /= 255, WR /= 255), RR.gammaSpace && (nR = Math.pow((0, tR.Clamp)(nR), ZR.i), UR = Math.pow((0, tR.Clamp)(UR), ZR.i), WR = Math.pow((0, tR.Clamp)(WR), ZR.i));
+               isNaN(zr) && (zr = 0), isNaN(Yr) && (Yr = 0), isNaN(nr) && (nr = 0), 0 === rr.type && (zr /= 255, Yr /= 255, nr /= 255), rr.gammaSpace && (zr = Math.pow((0, Wr.Clamp)(zr), jr.h), Yr = Math.pow((0, Wr.Clamp)(Yr), jr.h), nr = Math.pow((0, Wr.Clamp)(nr), jr.h));
```

#### 14. `bundles/bloxd.io/chunks/js/626.js` (Changed code · before: `L408` → after: `L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-6fb81443977c42f64e0fbf9b3a7cf0fc9cc7cc376c6db630d8bb55bf95a1bfb2R174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-6fb81443977c42f64e0fbf9b3a7cf0fc9cc7cc376c6db630d8bb55bf95a1bfb2) · [After (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/626.js#L174) · [Before (L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/626.js#L408)

```diff
-               const CR = new qR.d(nR, UR, WR);
+               const Kr = new Ir.e(zr, Yr, nr);
```

#### 15. `bundles/bloxd.io/chunks/js/626.js` (Changed code · before: `L415` → after: `L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-6fb81443977c42f64e0fbf9b3a7cf0fc9cc7cc376c6db630d8bb55bf95a1bfb2R181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-6fb81443977c42f64e0fbf9b3a7cf0fc9cc7cc376c6db630d8bb55bf95a1bfb2) · [After (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/626.js#L181) · [Before (L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/626.js#L415)

```diff
-         return yR.scaleInPlace(rR), yR.convertIncidentRadianceToIrradiance(), yR.convertIrradianceToLambertianRadiance(), uR.g.FromHarmonics(yR)
+         return Zr.scaleInPlace(Nr), Zr.convertIncidentRadianceToIrradiance(), Zr.convertIrradianceToLambertianRadiance(), ar.d.FromHarmonics(Zr)
```

#### 16. `bundles/bloxd.io/chunks/js/626.js` (Changed code · before: `L418` → after: `L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-6fb81443977c42f64e0fbf9b3a7cf0fc9cc7cc376c6db630d8bb55bf95a1bfb2R184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-6fb81443977c42f64e0fbf9b3a7cf0fc9cc7cc376c6db630d8bb55bf95a1bfb2) · [After (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/626.js#L184) · [Before (L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/626.js#L418)

```diff
-     fR._FileFaces = [new iR("right", new yR.r(1, 0, 0), new yR.r(0, 0, -1), new yR.r(0, -1, 0)), new iR("left", new yR.r(-1, 0, 0), new yR.r(0, 0, 1), new yR.r(0, -1, 0)), new iR("up", new yR.r(0, 1, 0), new yR.r(1, 0, 0), new yR.r(0, 0, 1)), new iR("down", new yR.r(0, -1, 0), ne … [truncated]
+     Er._FileFaces = [new fr("right", new Zr.u(1, 0, 0), new Zr.u(0, 0, -1), new Zr.u(0, -1, 0)), new fr("left", new Zr.u(-1, 0, 0), new Zr.u(0, 0, 1), new Zr.u(0, -1, 0)), new fr("up", new Zr.u(0, 1, 0), new Zr.u(1, 0, 0), new Zr.u(0, 0, 1)), new fr("down", new Zr.u(0, -1, 0), ne … [truncated]
```

#### 17. `bundles/bloxd.io/chunks/js/626.js` (Changed code · before: `L420` → after: `L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-6fb81443977c42f64e0fbf9b3a7cf0fc9cc7cc376c6db630d8bb55bf95a1bfb2R186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-6fb81443977c42f64e0fbf9b3a7cf0fc9cc7cc376c6db630d8bb55bf95a1bfb2) · [After (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/626.js#L186) · [Before (L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/626.js#L420)

```diff
-   53831: (RR, JR, GR) => {
+   54302: (rr, Sr, Qr) => {
```

#### 18. `bundles/bloxd.io/chunks/js/626.js` (Changed code · before: `L422` → after: `L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-6fb81443977c42f64e0fbf9b3a7cf0fc9cc7cc376c6db630d8bb55bf95a1bfb2R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-6fb81443977c42f64e0fbf9b3a7cf0fc9cc7cc376c6db630d8bb55bf95a1bfb2) · [After (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/626.js#L188) · [Before (L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/626.js#L422)

```diff
-       e: () => uR
+       DDSTools: () => Ur
```

#### 19. `bundles/bloxd.io/chunks/js/626.js` (Changed code · before: `L424-L425` → after: `L190-L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-6fb81443977c42f64e0fbf9b3a7cf0fc9cc7cc376c6db630d8bb55bf95a1bfb2R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-6fb81443977c42f64e0fbf9b3a7cf0fc9cc7cc376c6db630d8bb55bf95a1bfb2) · [After (L190-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/626.js#L190-L203) · [Before (L424-L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/626.js#L424-L425)

```diff
-     var yR = GR(53823),
-       tR = GR(53836);
+     var Zr = Qr(38599),
+       Wr = Qr(40246),
+       ar = Qr(54310),
+       jr = Qr(41922);
+     const Ir = 131072,
+       fr = 131072;
+ 
+     function Er(rr) {
+       return rr.charCodeAt(0) + (rr.charCodeAt(1) << 8) + (rr.charCodeAt(2) << 16) + (rr.charCodeAt(3) << 24)
+     }
+     const pr = Er("DXT1"),
+       xr = Er("DXT3"),
+       mr = Er("DXT5"),
+       Nr = Er("DX10");
```

#### 20. `bundles/bloxd.io/chunks/js/626.js` (Changed code · before: `L427-L457` → after: `L205-L310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-6fb81443977c42f64e0fbf9b3a7cf0fc9cc7cc376c6db630d8bb55bf95a1bfb2R205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-6fb81443977c42f64e0fbf9b3a7cf0fc9cc7cc376c6db630d8bb55bf95a1bfb2) · [After (L205-L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/626.js#L205-L310) · [Before (L427-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/626.js#L427-L457)

```diff
-       static ExpandRGBDTexture(RR) {
-         const JR = RR._texture;
-         if (!JR || !RR.isRGBD) return;
-         const tR = JR.ke(),
-           uR = tR.getCaps(),
-           ZR = JR.isReady;
-         let qR = !1;
-         uR.textureHalfFloatRender && uR.textureHalfFloatLinearFiltering ? (qR = !0, JR.type = 2) : uR.textureFloatRender && uR.textureFloatLinearFiltering && (qR = !0, JR.type = 1), qR && (JR.isReady = !1, JR._isRGBD = !1, JR.invertY = !1);
-         const iR = async () => {
-           const uR = tR.isWebGPU,
-             ZR = uR ? 1 : 0;
-           JR.isReady = !1, uR ? await GR.e(660).then((() => GR(64253))) : await GR.e(642).then((() => GR(64257)));
-           const qR = new yR.c("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, tR, !1, void 0, JR.type, void 0, null, !1, void 0, ZR);
-           qR.externalTextureSamplerBinding = !0;
-           const iR = tR.createRenderTargetTexture(JR.width, {
-             generateDepthBuffer: !1,
- ... (15 more removed lines; see GitHub link above)
+       static GetDDSInfo(rr) {
+         const Sr = new Int32Array(rr.buffer, rr.byteOffset, 31),
+           Qr = new Int32Array(rr.buffer, rr.byteOffset, 35);
+         let Zr = 1;
+         Sr[2] & Ir && (Zr = Math.max(1, Sr[7]));
+         const Wr = Sr[21],
+           ar = Wr === Nr ? Qr[32] : 0;
+         let jr = 0;
+         switch (Wr) {
+           case 113:
+             jr = 2;
+             break;
+           case 116:
+             jr = 1;
+             break;
+           case Nr:
+ ... (90 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/626.js` (Changed code · before: `L459-L461` → after: `L312-L465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-6fb81443977c42f64e0fbf9b3a7cf0fc9cc7cc376c6db630d8bb55bf95a1bfb2R312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-6fb81443977c42f64e0fbf9b3a7cf0fc9cc7cc376c6db630d8bb55bf95a1bfb2) · [After (L312-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/626.js#L312-L465) · [Before (L459-L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/626.js#L459-L461)

```diff
-       static async EncodeTextureToRGBD(RR, JR) {
-         let yR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-         return JR.ke().isWebGPU ? await GR.e(661).then((() => GR(64281))) : await GR.e(643).then((() => GR(64274))), await (0, tR.e)("rgbdEncode", RR, JR, yR, 1, 5)
+       static _GetRGBAArrayBuffer(rr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr) {
+         const Er = new Uint8Array(Zr),
+           pr = new Uint8Array(Wr, Qr);
+         let xr = 0;
+         for (let mr = 0; mr < Sr; mr++)
+           for (let Sr = 0; Sr < rr; Sr++) {
+             const Qr = 4 * (Sr + mr * rr);
+             Er[xr] = pr[Qr + ar], Er[xr + 1] = pr[Qr + jr], Er[xr + 2] = pr[Qr + Ir], Er[xr + 3] = pr[Qr + fr], xr += 4
+           }
+         return Er
+       }
+       static _ExtractLongWordOrder(rr) {
+         return 0 === rr || 255 === rr || -16777216 === rr ? 0 : 1 + Ur._ExtractLongWordOrder(rr >> 8)
+       }
+       static _GetRGBArrayBuffer(rr, Sr, Qr, Zr, Wr, ar, jr, Ir) {
+         const fr = new Uint8Array(Zr),
+ ... (138 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/627.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/627.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-47f136f624d8d10bd1bdc89d24cc87a5ee972f3ee1ee37cb447a0dc213b04fbb)

#### 1. `bundles/bloxd.io/chunks/js/627.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-47f136f624d8d10bd1bdc89d24cc87a5ee972f3ee1ee37cb447a0dc213b04fbbR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-47f136f624d8d10bd1bdc89d24cc87a5ee972f3ee1ee37cb447a0dc213b04fbb) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/627.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/627.js#L4)

```diff
-   53803: (RR, JR, GR) => {
+   54322: (rr, Sr, Qr) => {
```

#### 2. `bundles/bloxd.io/chunks/js/627.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-47f136f624d8d10bd1bdc89d24cc87a5ee972f3ee1ee37cb447a0dc213b04fbbR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-47f136f624d8d10bd1bdc89d24cc87a5ee972f3ee1ee37cb447a0dc213b04fbb) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/627.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/627.js#L6)

```diff
-       _IESTextureLoader: () => qR
+       _ENVTextureLoader: () => vr
```

#### 3. `bundles/bloxd.io/chunks/js/627.js` (Changed code · before: `L8` → after: `L8-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-47f136f624d8d10bd1bdc89d24cc87a5ee972f3ee1ee37cb447a0dc213b04fbbR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-47f136f624d8d10bd1bdc89d24cc87a5ee972f3ee1ee37cb447a0dc213b04fbb) · [After (L8-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/627.js#L8-L18) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/627.js#L8)

```diff
-     var yR = GR(38239);
+     var Zr = Qr(41818),
+       Wr = Qr(38560),
+       ar = Qr(38599),
+       jr = Qr(41861),
+       Ir = Qr(41731),
+       fr = Qr(41865),
+       Er = (Qr(41941), Qr(54330)),
+       pr = Qr(40246),
+       xr = (Qr(54344), Qr(54362), Qr(41919));
+     const mr = "image/png",
+       Nr = [134, 22, 135, 150, 246, 214, 150, 54];
```

#### 4. `bundles/bloxd.io/chunks/js/627.js` (Changed code · before: `L11` → after: `L21-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-47f136f624d8d10bd1bdc89d24cc87a5ee972f3ee1ee37cb447a0dc213b04fbbR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-47f136f624d8d10bd1bdc89d24cc87a5ee972f3ee1ee37cb447a0dc213b04fbb) · [After (L21-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/627.js#L21-L66) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/627.js#L11)

```diff
-       return RR.split(" ").filter((RR => "" !== RR)).map((RR => parseFloat(RR)))
+       const Sr = new DataView(rr.buffer, rr.byteOffset, rr.byteLength);
+       let Qr = 0;
+       for (let jr = 0; jr < Nr.length; jr++)
+         if (Sr.getUint8(Qr++) !== Nr[jr]) return pr.c.Error("Not a babylon environment map"), null;
+       let Zr, Wr = "";
+       for (; Zr = Sr.getUint8(Qr++);) Wr += String.fromCharCode(Zr);
+       let ar = JSON.parse(Wr);
+       return ar = tr(ar), ar.binaryDataPosition = Qr, ar.specular && (ar.specular.lodGenerationScale = ar.specular.lodGenerationScale || .8), ar
+     }
+ 
+     function tr(rr) {
+       if (rr.version > 2) throw new Error(`Unsupported babylon environment map version "${rr.version}". Latest supported version is "2".`);
+       return 2 === rr.version ? rr : rr = {
+         ...rr,
+         version: 2,
+         imageType: mr
+ ... (30 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/627.js` (Changed code · before: `L15-L45` → after: `L70-L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-47f136f624d8d10bd1bdc89d24cc87a5ee972f3ee1ee37cb447a0dc213b04fbbR70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-47f136f624d8d10bd1bdc89d24cc87a5ee972f3ee1ee37cb447a0dc213b04fbb) · [After (L70-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/627.js#L70-L222) · [Before (L15-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/627.js#L15-L45)

```diff
-       for (; GR.length !== JR;) {
-         const JR = tR(RR.lines[RR.index++]);
-         GR.push(...JR)
-       }
-     }
- 
-     function ZR(RR, JR, GR) {
-       let tR = 0,
-         uR = 0,
-         ZR = 0,
-         qR = 0,
-         iR = 0,
-         fR = 0;
-       for (let yR = 0; yR < RR.numberOfHorizontalAngles - 1; yR++)
-         if (GR < RR.horizontalAngles[yR + 1] || yR === RR.numberOfHorizontalAngles - 2) {
-           uR = yR, ZR = RR.horizontalAngles[yR], qR = RR.horizontalAngles[yR + 1];
- ... (15 more removed lines; see GitHub link above)
+       const Zr = (Qr = tr(Qr)).specular;
+       if (!Zr) return Promise.resolve([]);
+       rr._lodGenerationScale = Zr.lodGenerationScale;
+       const ar = [],
+         jr = hr(Sr, Qr);
+       ar.push(er(rr, jr, Qr.imageType));
+       const Ir = Qr.irradiance?.irradianceTexture;
+       if (Ir) {
+         const Zr = zr(Sr, Qr);
+         let jr = null;
+         Qr.irradiance?.irradianceTexture?.dominantDirection && (jr = Wr.u.FromArray(Qr.irradiance.irradianceTexture.dominantDirection)), ar.push(Kr(rr, Zr, Ir.size, Qr.imageType, jr))
+       }
+       return Promise.all(ar)
+     }
+     async function nr(rr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr, Er, pr) {
+       return await new Promise(((xr, mr) => {
+ ... (137 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/627.js` (Changed code · before: `L50-L65` → after: `L227-L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-47f136f624d8d10bd1bdc89d24cc87a5ee972f3ee1ee37cb447a0dc213b04fbbR227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-47f136f624d8d10bd1bdc89d24cc87a5ee972f3ee1ee37cb447a0dc213b04fbb) · [After (L227-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/627.js#L227-L330) · [Before (L50-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/627.js#L50-L65)

```diff
-       loadCubeData() {
-         throw ".ies not supported in Cube."
-       }
-       loadData(RR, JR, GR) {
-         const yR = function(RR) {
-           const JR = {
-               lines: new TextDecoder("utf-8").decode(RR).split("\n"),
-               index: 0
-             },
-             GR = {
-               version: JR.lines[0],
-               candelaValues: [],
-               horizontalAngles: [],
-               verticalAngles: [],
-               numberOfHorizontalAngles: 0,
-               numberOfVerticalAngles: 0
+       loadCubeData(rr, Sr, Qr, Zr, Wr) {
+         if (Array.isArray(rr)) return;
+         const ar = Ur(rr);
+         if (ar) {
+           Sr.width = ar.width, Sr.height = ar.width;
+           try {
+             (0, Tr.c)(), Br(Sr, ar), Yr(Sr, rr, ar).then((() => {
+               Sr.isReady = !0, Sr.onLoadedObservable.notifyObservers(Sr), Sr.onLoadedObservable.clear(), Zr && Zr()
+             }), (rr => {
+               Wr?.("Can not upload environment levels", rr)
+             }))
+           } catch (jr) {
+             Wr?.("Can not upload environment file", jr)
+           }
+         } else Wr && Wr("Can not parse the environment file", null)
+       }
+ ... (88 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/627.js` (Changed code · before: `L67-L98` → after: `L332-L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-47f136f624d8d10bd1bdc89d24cc87a5ee972f3ee1ee37cb447a0dc213b04fbbR332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-47f136f624d8d10bd1bdc89d24cc87a5ee972f3ee1ee37cb447a0dc213b04fbb) · [After (L332-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/627.js#L332-L333) · [Before (L67-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/627.js#L67-L98)

```diff
-           for (JR.index = 1; JR.lines.length > 0 && !JR.lines[JR.index].includes("TILT=");) JR.index++;
-           JR.lines[JR.index].includes("INCLUDE"), JR.index++;
-           const yR = tR(JR.lines[JR.index++]);
-           GR.numberOfLights = yR[0], GR.lumensPerLamp = yR[1], GR.numberOfVerticalAngles = yR[3], GR.numberOfHorizontalAngles = yR[4], GR.photometricType = yR[5], GR.unitsType = yR[6], GR.width = yR[7], GR.length = yR[8], GR.height = yR[9], JR.index++;
-           for (let tR = 0; tR < GR.numberOfHorizontalAngles; tR++) GR.candelaValues[tR] = [];
-           uR(JR, GR.numberOfVerticalAngles, GR.verticalAngles), uR(JR, GR.numberOfHorizontalAngles, GR.horizontalAngles);
-           for (let tR = 0; tR < GR.numberOfHorizontalAngles; tR++) uR(JR, GR.numberOfVerticalAngles, GR.candelaValues[tR]);
-           let qR = -1;
-           for (let tR = 0; tR < GR.numberOfHorizontalAngles; tR++)
-             for (let RR = 0; RR < GR.numberOfVerticalAngles; RR++) qR = Math.max(qR, GR.candelaValues[tR][RR]);
-           if (qR > 0)
-             for (let tR = 0; tR < GR.numberOfHorizontalAngles; tR++)
-               for (let RR = 0; RR < GR.numberOfVerticalAngles; RR++) GR.candelaValues[tR][RR] /= qR;
-           const iR = 180,
-             fR = 360,
-             VR = new Float32Array(64800),
- ... (16 more removed lines; see GitHub link above)
+             rr(this.ConvertCubeMapToSphericalPolynomial(mr))
+           }))
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/628.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/628.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da4e90abf66672603ff05e5ebefffb874ee7349963201dd112b57f3c413ac0bb)

#### 1. `bundles/bloxd.io/chunks/js/628.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da4e90abf66672603ff05e5ebefffb874ee7349963201dd112b57f3c413ac0bbR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da4e90abf66672603ff05e5ebefffb874ee7349963201dd112b57f3c413ac0bb) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/628.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/628.js#L4)

```diff
-   53811: (RR, JR, GR) => {
+   54312: (rr, Sr, Qr) => {
```

#### 2. `bundles/bloxd.io/chunks/js/628.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da4e90abf66672603ff05e5ebefffb874ee7349963201dd112b57f3c413ac0bbR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da4e90abf66672603ff05e5ebefffb874ee7349963201dd112b57f3c413ac0bb) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/628.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/628.js#L6)

```diff
-       _BasisTextureLoader: () => UR
+       _IESTextureLoader: () => Ir
```

#### 3. `bundles/bloxd.io/chunks/js/628.js` (Changed code · before: `L8-L11` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da4e90abf66672603ff05e5ebefffb874ee7349963201dd112b57f3c413ac0bbR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da4e90abf66672603ff05e5ebefffb874ee7349963201dd112b57f3c413ac0bb) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/628.js#L8) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/628.js#L8-L11)

```diff
-     var yR, tR = GR(41616),
-       uR = GR(39914),
-       ZR = GR(42011),
-       qR = GR(41364);
+     var Zr = Qr(38599);
```

#### 4. `bundles/bloxd.io/chunks/js/628.js` (Changed code · before: `L13-L23` → after: `L10-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da4e90abf66672603ff05e5ebefffb874ee7349963201dd112b57f3c413ac0bbR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da4e90abf66672603ff05e5ebefffb874ee7349963201dd112b57f3c413ac0bb) · [After (L10-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/628.js#L10-L12) · [Before (L13-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/628.js#L13-L23)

```diff
-     function iR() {
-       const RR = 0,
-         JR = 1,
-         GR = 2,
-         yR = 3,
-         tR = 6,
-         uR = 8,
-         ZR = 9,
-         qR = 10,
-         iR = 14;
-       let fR = null;
+     function Wr(rr) {
+       return rr.split(" ").filter((rr => "" !== rr)).map((rr => parseFloat(rr)))
+     }
```

#### 5. `bundles/bloxd.io/chunks/js/628.js` (Changed code · before: `L25-L48` → after: `L14-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da4e90abf66672603ff05e5ebefffb874ee7349963201dd112b57f3c413ac0bbR14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da4e90abf66672603ff05e5ebefffb874ee7349963201dd112b57f3c413ac0bb) · [After (L14-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/628.js#L14-L17) · [Before (L25-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/628.js#L25-L48)

```diff
-       function VR(RR, JR, GR, yR, tR) {
-         const uR = RR.getImageTranscodedSizeInBytes(JR, GR, yR);
-         let ZR = new Uint8Array(uR);
-         if (!RR.transcodeImage(ZR, JR, GR, yR, 1, 0)) return null;
-         if (tR) {
-           ZR = function(RR, JR, GR, yR) {
-             const tR = new Uint16Array(4),
-               uR = new Uint16Array(GR * yR),
-               ZR = GR / 4,
-               qR = yR / 4;
-             for (let iR = 0; iR < qR; iR++)
-               for (let yR = 0; yR < ZR; yR++) {
-                 const qR = JR + 8 * (iR * ZR + yR);
-                 tR[0] = RR[qR] | RR[qR + 1] << 8, tR[1] = RR[qR + 2] | RR[qR + 3] << 8, tR[2] = (2 * (31 & tR[0]) + 1 * (31 & tR[1])) / 3 | (2 * (2016 & tR[0]) + 1 * (2016 & tR[1])) / 3 & 2016 | (2 * (63488 & tR[0]) + 1 * (63488 & tR[1])) / 3 & 63488, tR[3] = (2 * (31 & tR[1]) +  … [truncated]
-                 for (let JR = 0; JR < 4; JR++) {
-                   const ZR = RR[qR + 4 + JR];
- ... (8 more removed lines; see GitHub link above)
+     function ar(rr, Sr, Qr) {
+       for (; Qr.length !== Sr;) {
+         const Sr = Wr(rr.lines[rr.index++]);
+         Qr.push(...Sr)
```

#### 6. `bundles/bloxd.io/chunks/js/628.js` (Changed code · before: `L50-L238` → after: `L19-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da4e90abf66672603ff05e5ebefffb874ee7349963201dd112b57f3c413ac0bbR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da4e90abf66672603ff05e5ebefffb874ee7349963201dd112b57f3c413ac0bb) · [After (L19-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/628.js#L19-L45) · [Before (L50-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/628.js#L50-L238)

```diff
-       onmessage = KR => {
-         if ("init" === KR.data.action) {
-           if (KR.data.url) try {
-             importScripts(KR.data.url)
-           } catch (wR) {
-             postMessage({
-               action: "error",
-               error: wR
-             })
-           }
-           fR || (fR = BASIS({
-             wasmBinary: KR.data.wasmBinary
-           })), null !== fR && fR.then((RR => {
-             BASIS = RR, RR.initializeBasis(), postMessage({
-               action: "init"
-             })
- ... (173 more removed lines; see GitHub link above)
+     }
+ 
+     function jr(rr, Sr, Qr) {
+       let Wr = 0,
+         ar = 0,
+         jr = 0,
+         Ir = 0,
+         fr = 0,
+         Er = 0;
+       for (let Zr = 0; Zr < rr.numberOfHorizontalAngles - 1; Zr++)
+         if (Qr < rr.horizontalAngles[Zr + 1] || Zr === rr.numberOfHorizontalAngles - 2) {
+           ar = Zr, jr = rr.horizontalAngles[Zr], Ir = rr.horizontalAngles[Zr + 1];
+           break
+         } for (let Zr = 0; Zr < rr.numberOfVerticalAngles - 1; Zr++)
+         if (Sr < rr.verticalAngles[Zr + 1] || Zr === rr.numberOfVerticalAngles - 2) {
+           Wr = Zr, fr = rr.verticalAngles[Zr], Er = rr.verticalAngles[Zr + 1];
+ ... (11 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/628.js` (Changed code · before: `L243-L261` → after: `L50-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da4e90abf66672603ff05e5ebefffb874ee7349963201dd112b57f3c413ac0bbR50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da4e90abf66672603ff05e5ebefffb874ee7349963201dd112b57f3c413ac0bb) · [After (L50-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/628.js#L50-L51) · [Before (L243-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/628.js#L243-L261)

```diff
-       loadCubeData(RR, JR, GR, yR, uR) {
-         if (Array.isArray(RR)) return;
-         const ZR = JR.ke().getCaps(),
-           qR = {
-             supportedCompressionFormats: {
-               etc1: !!ZR.etc1,
-               s3tc: !!ZR.s3tc,
-               pvrtc: !!ZR.pvrtc,
-               etc2: !!ZR.etc2,
-               astc: !!ZR.astc,
-               bc7: !!ZR.bptc
-             }
-           };
-         eR(RR, qR).then((RR => {
-           const GR = RR.fileInfo.images[0].levels.length > 1 && JR.generateMipMaps;
-           LR(JR, RR), JR.ke()._setCubeMapTextureParams(JR, GR), JR.isReady = !0, JR.onLoadedObservable.notifyObservers(JR), JR.onLoadedObservable.clear(), yR && yR()
- ... (3 more removed lines; see GitHub link above)
+       loadCubeData() {
+         throw ".ies not supported in Cube."
```

#### 8. `bundles/bloxd.io/chunks/js/628.js` (Changed code · before: `L264-L282` → after: `L54-L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da4e90abf66672603ff05e5ebefffb874ee7349963201dd112b57f3c413ac0bbR54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da4e90abf66672603ff05e5ebefffb874ee7349963201dd112b57f3c413ac0bb) · [After (L54-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/628.js#L54-L98) · [Before (L264-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/628.js#L264-L282)

```diff
-         const yR = JR.ke().getCaps(),
-           uR = {
-             supportedCompressionFormats: {
-               etc1: !!yR.etc1,
-               s3tc: !!yR.s3tc,
-               pvrtc: !!yR.pvrtc,
-               etc2: !!yR.etc2,
-               astc: !!yR.astc,
-               bc7: !!yR.bptc
-             }
-           };
-         eR(RR, uR).then((RR => {
-           const yR = RR.fileInfo.images[0].levels[0],
-             tR = RR.fileInfo.images[0].levels.length > 1 && JR.generateMipMaps;
-           GR(yR.width, yR.height, tR, -1 !== RR.format, (() => {
-             LR(JR, RR)
- ... (3 more removed lines; see GitHub link above)
+         const Zr = function(rr) {
+           const Sr = {
+               lines: new TextDecoder("utf-8").decode(rr).split("\n"),
+               index: 0
+             },
+             Qr = {
+               version: Sr.lines[0],
+               candelaValues: [],
+               horizontalAngles: [],
+               verticalAngles: [],
+               numberOfHorizontalAngles: 0,
+               numberOfVerticalAngles: 0
+             };
+           for (Sr.index = 1; Sr.lines.length > 0 && !Sr.lines[Sr.index].includes("TILT=");) Sr.index++;
+           Sr.lines[Sr.index].includes("INCLUDE"), Sr.index++;
+           const Zr = Wr(Sr.lines[Sr.index++]);
+ ... (29 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/629.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/629.js` (20 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ec)

#### 1. `bundles/bloxd.io/chunks/js/629.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ecR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ec) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/629.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/629.js#L4-L6)

```diff
-   53843: (RR, JR, GR) => {
-     GR.d(JR, {
-       b: () => nR
+   54320: (rr, Sr, Qr) => {
+     Qr.r(Sr), Qr.d(Sr, {
+       _BasisTextureLoader: () => Yr
```

#### 2. `bundles/bloxd.io/chunks/js/629.js` (Changed code · before: `L8-L204` → after: `L8-L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ecR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ec) · [After (L8-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/629.js#L8-L43) · [Before (L8-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/629.js#L8-L204)

```diff
-     var yR = GR(38233),
-       tR = GR(38204),
-       uR = GR(42011),
-       ZR = GR(41670),
-       qR = GR(41449),
-       iR = GR(39914),
-       fR = GR(41650),
-       VR = GR(41681),
-       KR = GR(38217),
-       wR = GR(41415),
-       rR = GR(41626),
-       eR = GR(41715);
-     class aR {
-       get renderList() {
-         return this._renderList
-       }
- ... (181 more removed lines; see GitHub link above)
+     var Zr, Wr = Qr(41950),
+       ar = Qr(40246),
+       jr = Qr(42310),
+       Ir = Qr(41731);
+ 
+     function fr() {
+       const rr = 0,
+         Sr = 1,
+         Qr = 2,
+         Zr = 3,
+         Wr = 6,
+         ar = 8,
+         jr = 9,
+         Ir = 10,
+         fr = 14;
+       let Er = null;
+ ... (20 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/629.js` (Changed code · before: `L206-L227` → after: `L45-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ecR45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ec) · [After (L45-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/629.js#L45-L46) · [Before (L206-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/629.js#L206-L227)

```diff
-             } else if (!JR.isReady(!0)) {
-               GR = !1;
-               continue
-             }
-             let yR = JR._edgesRenderer,
-               tR = JR.hasThinInstances;
-             if (JR.sH) {
-               const RR = JR.IuR;
-               RR.edgesShareWithInstances && RR._edgesRenderer?.isEnabled && (yR = RR._edgesRenderer, tR = !0)
-             } else JR.PuR && JR.edgesShareWithInstances && (tR = !0);
-             !this.customRenderFunction && this.renderOpaqueMeshes && yR?.isEnabled && (yR.isReady(tR) || (GR = !1))
-           }
-           if (this.renderParticles && RR.particlesEnabled) {
-             const JR = this.particleSystemList || RR.pM;
-             for (const RR of JR) RR.isReady() || (GR = !1)
-           }
- ... (6 more removed lines; see GitHub link above)
+             return ar
+           }(jr, 0, rr.getImageWidth(Sr, Qr) + 3 & -4, rr.getImageHeight(Sr, Qr) + 3 & -4)
```

#### 4. `bundles/bloxd.io/chunks/js/629.js` (Changed code · before: `L229` → after: `L48`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ecR48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ec) · [After (L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/629.js#L48) · [Before (L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/629.js#L229)

```diff
-         return this._engine.currentRenderPassId = JR, GR
+         return jr
```

#### 5. `bundles/bloxd.io/chunks/js/629.js` (Changed code · before: `L231-L252` → after: `L50-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ecR50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ec) · [After (L50-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/629.js#L50-L58) · [Before (L231-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/629.js#L231-L252)

```diff
-       _prepareRenderingManager() {
-         let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-           JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         const GR = this._scene;
-         let yR, tR, uR = null;
-         const ZR = this.renderList ? this.renderList : GR.frameGraph ? GR.meshes : GR.getActiveMeshes().data,
-           qR = this.renderList || GR.frameGraph ? ZR.length : GR.getActiveMeshes().length;
-         if (this.getCustomRenderList && (uR = this.getCustomRenderList(RR, ZR, qR)), uR) yR = uR.length, tR = this.forceLayerMaskCheck;
-         else {
-           if (this._defaultRenderListPrepared && !JR && !this._engine.isWebGPU) return ZR;
-           this._defaultRenderListPrepared = !0, uR = ZR, yR = qR, tR = !this.renderList || this.forceLayerMaskCheck
-         }
-         const iR = GR.activeCamera,
-           fR = this.cameraForLOD ?? iR,
-           VR = GR.getBoundingBoxRenderer?.();
-         if (GR._activeMeshesFrozen && this._isFrozen) {
- ... (6 more removed lines; see GitHub link above)
+       onmessage = xr => {
+         if ("init" === xr.data.action) {
+           if (xr.data.url) try {
+             importScripts(xr.data.url)
+           } catch (mr) {
+             postMessage({
+               action: "error",
+               error: mr
+             })
```

#### 6. `bundles/bloxd.io/chunks/js/629.js` (Changed code · before: `L254-L265` → after: `L60-L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ecR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ec) · [After (L60-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/629.js#L60-L85) · [Before (L254-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/629.js#L254-L265)

```diff
-           return uR
-         }
-         if (this._renderingManager.reset(), this._activeMeshes.reset(), this._activeBoundingBoxes.reset(), VR && VR.reset(), this.renderMeshes) {
-           const RR = GR.getRenderId(),
-             JR = GR.getFrameId();
-           for (let ZR = 0; ZR < yR; ZR++) {
-             const yR = uR[ZR];
-             if (yR && !yR.isBlocked) {
-               if (this.customIsReadyFunction) {
-                 if (!this.customIsReadyFunction(yR, this.refreshRate, !1)) {
-                   this.resetRefreshCounter();
-                   continue
+           Er || (Er = BASIS({
+             wasmBinary: xr.data.wasmBinary
+           })), null !== Er && Er.then((rr => {
+             BASIS = rr, rr.initializeBasis(), postMessage({
+               action: "init"
+             })
+           }))
+         } else if ("transcode" === xr.data.action) {
+           const Er = xr.data.config,
+             mr = xr.data.imageData,
+             Nr = new BASIS.BasisFile(mr),
+             Ur = function(rr) {
+               const Sr = rr.getHasAlpha(),
+                 Qr = rr.getNumImages(),
+                 Zr = [];
+               for (let Wr = 0; Wr < Qr; Wr++) {
+ ... (10 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/629.js` (Changed code · before: `L267-L269` → after: `L87`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ecR87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ec) · [After (L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/629.js#L87) · [Before (L267-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/629.js#L267-L269)

```diff
-               } else if (!yR.isReady(0 === this.refreshRate)) {
-                 this.resetRefreshCounter();
-                 continue
+                 Zr.push(Sr)
```

#### 8. `bundles/bloxd.io/chunks/js/629.js` (Changed code · before: `L271-L283` → after: `L89-L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ecR89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ec) · [After (L89-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/629.js#L89-L114) · [Before (L271-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/629.js#L271-L283)

```diff
-               let uR, ZR;
-               if (fR) {
-                 const RR = yR._internalAbstractMeshDataInfo._currentLOD.get(fR);
-                 RR && RR[1] === JR ? uR = RR[0] : (uR = GR.customLODSelector ? GR.customLODSelector(yR, fR) : yR.getLOD(fR), RR ? (RR[0] = uR, RR[1] = JR) : yR._internalAbstractMeshDataInfo._currentLOD.set(fR, [uR, JR]))
-               } else uR = yR;
-               if (!uR) continue;
-               if (uR !== yR && 0 !== uR.billboardMode && uR.computeWorldMatrix(), uR._preActivateForIntermediateRendering(RR), ZR = !(!tR || !iR) && 0 === (yR.layerMask & iR.layerMask), yR.isEnabled() && yR.isVisible && yR.XM && !ZR) {
-                 if (this._activeMeshes.push(yR), uR._internalAbstractMeshDataInfo._wasActiveLastFrame = !0, uR !== yR && uR._activate(RR, !0), this.enableBoundingBoxRendering && VR && VR._preActiveMesh(yR), yR._activate(RR, !0) && yR.XM.length) {
-                   yR.sH ? yR._internalAbstractMeshDataInfo._actAsRegularMesh && (uR = yR) : uR._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !1, uR._internalAbstractMeshDataInfo._isActiveIntermediate = !0, GR._prepareSkeleton(uR);
-                   for (let RR = 0; RR < uR.XM.length; RR++) {
-                     const JR = uR.XM[RR];
-                     this.enableBoundingBoxRendering && VR && VR._evaluateSubMesh(yR, JR), this._renderingManager.dispatch(JR, uR)
-                   }
+               return {
+                 hasAlpha: Sr,
+                 images: Zr
+               }
+             }(Nr);
+           let tr = xr.data.ignoreSupportedFormats ? null : function(Er, pr) {
+               let xr = null;
+               Er.supportedCompressionFormats && (xr = Er.supportedCompressionFormats.astc ? Ir : Er.supportedCompressionFormats.bc7 ? Wr : Er.supportedCompressionFormats.s3tc ? pr.hasAlpha ? Zr : Qr : Er.supportedCompressionFormats.pvrtc ? pr.hasAlpha ? jr : ar : Er.supportedComp … [truncated]
+               return xr
+             }(xr.data.config, Ur),
+             hr = !1;
+           null === tr && (hr = !0, tr = Ur.hasAlpha ? Zr : Qr);
+           let zr = !0;
+           Nr.startTranscoding() || (zr = !1);
+           const Yr = [];
+           for (let rr = 0; rr < Ur.images.length && zr; rr++) {
+ ... (10 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/629.js` (Changed code · before: `L285` → after: `L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ecR116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ec) · [After (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/629.js#L116) · [Before (L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/629.js#L285)

```diff
-                 yR._postActivate()
+                 Qr.transcodedPixels = Wr, Yr.push(Qr.transcodedPixels.buffer)
```

#### 10. `bundles/bloxd.io/chunks/js/629.js` (Changed code · before: `L1053-L1070` → after: `L133-L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ecR133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ec) · [After (L133-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/629.js#L133-L135) · [Before (L1053-L1070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/629.js#L1053-L1070)

```diff
-       const wR = await rR.EncodeImageAsync(GR, RR, JR, yR, qR, KR);
-       void 0 !== tR && uR.h.DownloadBlob(wR, tR), wR.type !== yR && iR.c.Warn(`DumpData: The requested mimeType '${yR}' is not supported. The result has mimeType '${wR.type}' instead.`);
-       const eR = await wR.arrayBuffer();
-       return VR ? eR : `data:${yR};base64,${(0,fR.g)(eR)}`
-     }
- 
-     function nR(RR, JR, GR, yR) {
-       let tR = arguments.length > 5 ? arguments[5] : void 0;
-       void 0 !== tR || yR || (tR = ""), LR(RR, JR, GR, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png", tR, arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] && arguments[7], arguments.len … [truncated]
-         yR && yR(RR)
-       }))
-     }
- 
-     function UR() {
-       KR && (KR?.then((RR => {
-         RR.canvas instanceof HTMLCanvasElement && RR.canvas.remove(), RR.dumpEngine && (RR.dumpEngine.engine.dispose(), RR.dumpEngine.renderer.dispose(), RR.dumpEngine.wrapper.dispose())
- ... (2 more removed lines; see GitHub link above)
+     }! function(rr) {
+       rr[rr.cTFETC1 = 0] = "cTFETC1", rr[rr.cTFETC2 = 1] = "cTFETC2", rr[rr.cTFBC1 = 2] = "cTFBC1", rr[rr.cTFBC3 = 3] = "cTFBC3", rr[rr.cTFBC4 = 4] = "cTFBC4", rr[rr.cTFBC5 = 5] = "cTFBC5", rr[rr.cTFBC7 = 6] = "cTFBC7", rr[rr.cTFPVRTC1_4_RGB = 8] = "cTFPVRTC1_4_RGB", rr[rr.cTFPVR … [truncated]
+     }(Zr || (Zr = {}));
```

#### 11. `bundles/bloxd.io/chunks/js/629.js` (Changed code · before: `L1072-L1075` → after: `L137-L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ecR137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ec) · [After (L137-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/629.js#L137-L138) · [Before (L1072-L1075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/629.js#L1072-L1075)

```diff
-       DumpData: nR,
-       DumpDataAsync: LR,
-       DumpFramebuffer: aR,
-       Dispose: UR
+       JSModuleURL: `${Wr.h._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.js`,
+       WasmModuleURL: `${Wr.h._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.wasm`
```

#### 12. `bundles/bloxd.io/chunks/js/629.js` (Changed code · before: `L1077-L1199` → after: `L140-L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ecR140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ec) · [After (L140-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/629.js#L140-L158) · [Before (L1077-L1199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/629.js#L1077-L1199)

```diff
-     let AR = !1;
- 
-     function CR() {
-       if (AR) return;
-       AR = !0;
-       uR.h.DumpData = nR, uR.h.DumpDataAsync = LR, uR.h.DumpFramebuffer = aR
-     }
-   },
-   53836: (RR, JR, GR) => {
-     GR.d(JR, {
-       e: () => rR,
-       g: () => eR,
-       i: () => aR
-     });
-     var yR = GR(42011),
-       tR = GR(53843),
- ... (107 more removed lines; see GitHub link above)
+     let pr = null,
+       xr = null,
+       mr = 0;
+     const Nr = async () => (pr || (pr = new Promise(((rr, Sr) => {
+       xr ? rr(xr) : Wr.h.LoadFileAsync(Wr.h.GetBabylonScriptURL(Er.WasmModuleURL)).then((Qr => {
+         if ("function" !== typeof URL) return Sr("Basis transcoder requires an environment with a URL constructor");
+         const Zr = URL.createObjectURL(new Blob([`(${fr})()`], {
+           type: "application/javascript"
+         }));
+         xr = new Worker(Zr), async function(rr, Sr, Qr) {
+           return await new Promise(((Zr, ar) => {
+             const jr = Sr => {
+               "init" === Sr.data.action ? (rr.removeEventListener("message", jr), Zr(rr)) : "error" === Sr.data.action && ar(Sr.data.error || "error initializing worker")
+             };
+             rr.addEventListener("message", jr), rr.postMessage({
+               action: "init",
+ ... (3 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/629.js` (Changed code · before: `L1203-L1313` → after: `L183-L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ecR183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ec) · [After (L183-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/629.js#L183-L195) · [Before (L1203-L1313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/629.js#L1203-L1313)

```diff
-     }
-     async function eR(RR, JR, uR) {
-       let qR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
-         iR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
-         fR = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-         VR = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
-       await async function(RR) {
-         if (RR.isReady()) return;
-         if (RR.loadingError) throw new Error(RR.errorObject?.message || `Texture ${RR.name} errored while loading.`);
-         const JR = RR.onLoadObservable;
-         if (JR) return await new Promise((RR => JR.addOnce((() => RR()))));
-         const GR = RR._texture?.onLoadedObservable;
-         if (GR) return await new Promise((RR => GR.addOnce((() => RR()))));
-         throw new Error(`Cannot determine readiness of texture ${RR.name}.`)
-       }(RR);
-       const wR = RR.getInternalTexture(),
- ... (95 more removed lines; see GitHub link above)
+     }, tr = (rr, Sr) => {
+       let Qr = Sr._gl?.TEXTURE_2D;
+       rr.isCube && (Qr = Sr._gl?.TEXTURE_CUBE_MAP), Sr._bindTextureDirectly(Qr, rr, !0)
+     }, hr = (rr, Sr) => {
+       const Qr = rr.MU();
+       for (let Wr = 0; Wr < Sr.fileInfo.images.length; Wr++) {
+         const fr = Sr.fileInfo.images[Wr].levels[0];
+         if (rr._invertVScale = rr.invertY, -1 === Sr.format || Sr.format === Zr.cTFRGB565)
+           if (rr.type = 10, rr.format = 4, !Qr._features.basisNeedsPOT || Math.log2(fr.width) % 1 === 0 && Math.log2(fr.height) % 1 === 0) rr._invertVScale = !rr.invertY, rr.width = fr.width + 3 & -4, rr.height = fr.height + 3 & -4, rr.samplingMode = 2, tr(rr, Qr), Qr._uploadData … [truncated]
+           else {
+             const Sr = new Ir.b(Qr, 2);
+             rr._invertVScale = rr.invertY, Sr.type = 10, Sr.format = 4, Sr.width = fr.width + 3 & -4, Sr.height = fr.height + 3 & -4, tr(Sr, Qr), Qr._uploadDataToTextureDirectly(Sr, new Uint16Array(fr.transcodedPixels.buffer), Wr, 0, 4, !0), Qr._rescaleTexture(Sr, rr, Qr.scenes[0 … [truncated]
+               Qr._releaseTexture(Sr), tr(rr, Qr)
```

#### 14. `bundles/bloxd.io/chunks/js/629.js` (Changed code · before: `L1335-L1363` → after: `L198-L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ecR198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ec) · [After (L198-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/629.js#L198-L206) · [Before (L1335-L1363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/629.js#L1335-L1363)

```diff
-         }(RR, LR, nR, qR, iR, VR)
-       }
-       let UR = await RR.readPixels(qR, iR);
-       if (!UR) throw new Error(`Failed to read pixels from texture ${RR.name}.`);
-       if (UR instanceof Float32Array) {
-         const RR = new Uint8Array(UR.length);
-         let JR = UR.length;
-         for (; JR--;) {
-           const GR = UR[JR];
-           RR[JR] = Math.round(255 * (0, KR.Clamp)(GR))
-         }
-         UR = RR
-       }
-       const WR = LR * nR,
-         AR = 4 * WR;
-       if (UR.length !== AR) {
- ... (13 more removed lines; see GitHub link above)
+         else {
+           rr.width = fr.width, rr.height = fr.height, rr.generateMipMaps = Sr.fileInfo.images[Wr].levels.length > 1;
+           const Zr = zr.GetInternalFormatFromBasisFormat(Sr.format, Qr);
+           rr.format = Zr, tr(rr, Qr);
+           const Ir = Sr.fileInfo.images[Wr].levels;
+           for (let Sr = 0; Sr < Ir.length; Sr++) {
+             const ar = Ir[Sr];
+             Qr._uploadCompressedDataToTextureDirectly(rr, Zr, ar.width, ar.height, ar.transcodedPixels, Wr, Sr)
+           }!Qr._features.basisNeedsPOT || Math.log2(rr.width) % 1 === 0 && Math.log2(rr.height) % 1 === 0 || (ar.c.Warn("Loaded .basis texture width and height are not a power of two. Texture wrapping will be set to Texture.CLAMP_ADDRESSMODE as other modes are not supported with  … [truncated]
```

#### 15. `bundles/bloxd.io/chunks/js/629.js` (Changed code · before: `L1366-L2001` → after: `L209-L216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ecR209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ec) · [After (L209-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/629.js#L209-L216) · [Before (L1366-L2001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/629.js#L1366-L2001)

```diff
-       return UR
-     }
-     const aR = {
-       CreateResizedCopy: function(RR, JR, GR) {
-         let uR = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
-         const ZR = RR.jH(),
-           qR = ZR.ke(),
-           iR = new tR.b("resized" + RR.name, {
-             width: JR,
-             height: GR
-           }, ZR, !RR.noMipmap, !0, RR._texture.type, !1, RR.samplingMode, !1);
-         iR.wrapU = RR.wrapU, iR.wrapV = RR.wrapV, iR.uOffset = RR.uOffset, iR.vOffset = RR.vOffset, iR.uScale = RR.uScale, iR.vScale = RR.vScale, iR.uAng = RR.uAng, iR.vAng = RR.vAng, iR.wAng = RR.wAng, iR.coordinatesIndex = RR.coordinatesIndex, iR.level = RR.level, iR.anisotropi … [truncated]
-         const fR = new VR("pass", 1, null, uR ? yR.f.BILINEAR_SAMPLINGMODE : yR.f.NEAREST_SAMPLINGMODE, qR, !1, 0);
-         return fR.externalTextureSamplerBinding = !0, fR.onEffectCreatedObservable.addOnce((JR => {
-           JR.executeWhenCompiled((() => {
-             fR.onApply = function(JR) {
- ... (620 more removed lines; see GitHub link above)
+     }, zr = {
+       JSModuleURL: Er.JSModuleURL,
+       WasmModuleURL: Er.WasmModuleURL,
+       GetInternalFormatFromBasisFormat: (rr, Sr) => {
+         let Qr;
+         switch (rr) {
+           case Zr.cTFETC1:
+             Qr = 36196;
```

#### 16. `bundles/bloxd.io/chunks/js/629.js` (Changed code · before: `L2003-L2004` → after: `L218-L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ecR218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ec) · [After (L218-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/629.js#L218-L219) · [Before (L2003-L2004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/629.js#L2003-L2004)

```diff
-           case 1:
-             this.updateEffect("#define NEGATIVEX");
+           case Zr.cTFBC1:
+             Qr = 33776;
```

#### 17. `bundles/bloxd.io/chunks/js/629.js` (Changed code · before: `L2006-L2007` → after: `L221-L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ecR221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ec) · [After (L221-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/629.js#L221-L222) · [Before (L2006-L2007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/629.js#L2006-L2007)

```diff
-           case 2:
-             this.updateEffect("#define POSITIVEY");
+           case Zr.cTFBC4:
+             Qr = 33779;
```

#### 18. `bundles/bloxd.io/chunks/js/629.js` (Changed code · before: `L2009-L2010` → after: `L224-L225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ecR224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ec) · [After (L224-L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/629.js#L224-L225) · [Before (L2009-L2010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/629.js#L2009-L2010)

```diff
-           case 3:
-             this.updateEffect("#define NEGATIVEY");
+           case Zr.cTFASTC_4x4:
+             Qr = 37808;
```

#### 19. `bundles/bloxd.io/chunks/js/629.js` (Changed code · before: `L2012-L2013` → after: `L227-L228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ecR227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ec) · [After (L227-L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/629.js#L227-L228) · [Before (L2012-L2013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/629.js#L2012-L2013)

```diff
-           case 4:
-             this.updateEffect("#define POSITIVEZ");
+           case Zr.cTFETC2:
+             Qr = 37496;
```

#### 20. `bundles/bloxd.io/chunks/js/629.js` (Changed code · before: `L2015-L2016` → after: `L230-L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ecR230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-19c457b42a49532b691075ab6dbdc61b4315dec74f75a74c7898a1fec87326ec) · [After (L230-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/629.js#L230-L231) · [Before (L2015-L2016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/629.js#L2015-L2016)

```diff
-           case 5:
-             this.updateEffect("#define NEGATIVEZ")
+           case Zr.cTFBC7:
+             Qr = 36492
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/630.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/630.js` (14 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-059e7c197715b472b90266f36402696b46044e0fc384a542c4757bb4ce4b61d9)

#### 1. `bundles/bloxd.io/chunks/js/630.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-059e7c197715b472b90266f36402696b46044e0fc384a542c4757bb4ce4b61d9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-059e7c197715b472b90266f36402696b46044e0fc384a542c4757bb4ce4b61d9) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/630.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/630.js#L4-L6)

```diff
-   53869: (RR, JR, GR) => {
-     GR.r(JR), GR.d(JR, {
-       _HDRTextureLoader: () => VR
+   54357: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       b: () => zr
```

#### 2. `bundles/bloxd.io/chunks/js/630.js` (Changed code · before: `L8` → after: `L8-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-059e7c197715b472b90266f36402696b46044e0fc384a542c4757bb4ce4b61d9R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-059e7c197715b472b90266f36402696b46044e0fc384a542c4757bb4ce4b61d9) · [After (L8-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/630.js#L8-L19) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/630.js#L8)

```diff
-     var yR = GR(38204);
+     var Zr = Qr(38595),
+       Wr = Qr(38560),
+       ar = Qr(42310),
+       jr = Qr(42002),
+       Ir = Qr(41818),
+       fr = Qr(40246),
+       Er = Qr(41987),
+       pr = Qr(42014),
+       xr = Qr(38576),
+       mr = Qr(41781),
+       Nr = Qr(41960),
+       Ur = Qr(42044);
```

#### 3. `bundles/bloxd.io/chunks/js/630.js` (Changed code · before: `L10-L41` → after: `L21-L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-059e7c197715b472b90266f36402696b46044e0fc384a542c4757bb4ce4b61d9R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-059e7c197715b472b90266f36402696b46044e0fc384a542c4757bb4ce4b61d9) · [After (L21-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/630.js#L21-L258) · [Before (L10-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/630.js#L10-L41)

```diff
-       static ConvertPanoramaToCubemap(RR, JR, GR, yR) {
-         let tR, uR = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
-           ZR = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
-         if (!RR) throw "ConvertPanoramaToCubemap: input cannot be null";
-         if (RR.length != JR * GR * 3) {
-           if (RR.length != JR * GR * 4) throw "ConvertPanoramaToCubemap: input size is wrong";
-           tR = 4
-         } else tR = 3;
-         return {
-           front: this.CreateCubemapTexture(yR, this.FACE_FRONT, RR, JR, GR, uR, ZR, tR),
-           back: this.CreateCubemapTexture(yR, this.FACE_BACK, RR, JR, GR, uR, ZR, tR),
-           left: this.CreateCubemapTexture(yR, this.FACE_LEFT, RR, JR, GR, uR, ZR, tR),
-           right: this.CreateCubemapTexture(yR, this.FACE_RIGHT, RR, JR, GR, uR, ZR, tR),
-           up: this.CreateCubemapTexture(yR, this.FACE_UP, RR, JR, GR, uR, ZR, tR),
-           down: this.CreateCubemapTexture(yR, this.FACE_DOWN, RR, JR, GR, uR, ZR, tR),
-           size: yR,
- ... (16 more removed lines; see GitHub link above)
+       get renderList() {
+         return this._renderList
+       }
+       set renderList(rr) {
+         this._renderList !== rr && (this._unObserveRenderList && (this._unObserveRenderList(), this._unObserveRenderList = null), rr && (this._unObserveRenderList = (0, xr.h)(rr, this._renderListHasChanged)), this._renderList = rr)
+       }
+       get disableImageProcessing() {
+         return this._disableImageProcessing
+       }
+       set disableImageProcessing(rr) {
+         rr !== this._disableImageProcessing && (this._disableImageProcessing = rr, this._scene.markAllMaterialsAsDirty(64))
+       }
+       get disableDepthPrePass() {
+         return this._disableDepthPrePass
+       }
+       set disableDepthPrePass(rr) {
+ ... (222 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/630.js` (Changed code · before: `L43-L50` → after: `L260-L285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-059e7c197715b472b90266f36402696b46044e0fc384a542c4757bb4ce4b61d9R260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-059e7c197715b472b90266f36402696b46044e0fc384a542c4757bb4ce4b61d9) · [After (L260-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/630.js#L260-L285) · [Before (L43-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/630.js#L43-L50)

```diff
-             let uR = JR[0],
-               iR = JR[2];
-             for (let JR = 0; JR < RR; JR++)
-               for (let KR = 0; KR < VR; KR++) {
-                 const VR = iR.subtract(uR).scale(LR).add(uR);
-                 VR.normalize();
-                 const KR = this.CalcProjectionSpherical(VR, GR, yR, tR, qR, ZR);
-                 fR[nR * RR * 3 + 3 * JR + 0] += KR.r * wR, fR[nR * RR * 3 + 3 * JR + 1] += KR.g * wR, fR[nR * RR * 3 + 3 * JR + 2] += KR.b * wR, uR = uR.add(rR), iR = iR.add(eR)
+             const Zr = ar[jr];
+             if (Zr && !Zr.isBlocked) {
+               if (this.customIsReadyFunction) {
+                 if (!this.customIsReadyFunction(Zr, this.refreshRate, !1)) {
+                   this.resetRefreshCounter();
+                   continue
+                 }
+               } else if (!Zr.isReady(0 === this.refreshRate)) {
+                 this.resetRefreshCounter();
+                 continue
+               }
+               let ar, jr;
+               if (Er) {
+                 const rr = Zr._internalAbstractMeshDataInfo._currentLOD.get(Er);
+                 rr && rr[1] === Sr ? ar = rr[0] : (ar = Qr.customLODSelector ? Qr.customLODSelector(Zr, Er) : Zr.getLOD(Er), rr ? (rr[0] = ar, rr[1] = Sr) : Zr._internalAbstractMeshDataInfo._currentLOD.set(Er, [ar, Sr]))
+               } else ar = Zr;
+ ... (10 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/630.js` (Changed code · before: `L52` → after: `L287-L569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-059e7c197715b472b90266f36402696b46044e0fc384a542c4757bb4ce4b61d9R287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-059e7c197715b472b90266f36402696b46044e0fc384a542c4757bb4ce4b61d9) · [After (L287-L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/630.js#L287-L569) · [Before (L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/630.js#L52)

```diff
-             LR += aR * KR
+             }
+           }
+         }
+         if (this.enableBoundingBoxRendering && pr && Sr)
+           for (let xr = 0; xr < pr.renderList.length; xr++) {
+             const rr = pr.renderList.data[xr];
+             this._activeBoundingBoxes.push(rr)
+           }
+         if (this._scene.particlesEnabled && this.renderParticles) {
+           this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
+           const rr = this.particleSystemList || Qr.pT;
+           for (let Sr = 0; Sr < rr.length; Sr++) {
+             const Qr = rr[Sr],
+               Zr = Qr.emitter;
+             Qr.isStarted() && Zr && (!Zr.position || Zr.isEnabled()) && this._renderingManager.dispatchParticles(Qr)
+           }
+ ... (267 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/630.js` (Changed code · before: `L56-L68` → after: `L719-L984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-059e7c197715b472b90266f36402696b46044e0fc384a542c4757bb4ce4b61d9R719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-059e7c197715b472b90266f36402696b46044e0fc384a542c4757bb4ce4b61d9) · [After (L719-L984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/630.js#L719-L984) · [Before (L56-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/630.js#L56-L68)

```diff
-       static CalcProjectionSpherical(RR, JR, GR, yR, tR, uR) {
-         let ZR = Math.atan2(RR.z, RR.x);
-         const qR = Math.acos(RR.y);
-         for (; ZR < -Math.PI;) ZR += 2 * Math.PI;
-         for (; ZR > Math.PI;) ZR -= 2 * Math.PI;
-         let iR = ZR / Math.PI;
-         const fR = qR / Math.PI;
-         iR = .5 * iR + .5;
-         let VR = Math.round(iR * GR);
-         VR < 0 ? VR = 0 : VR >= GR && (VR = GR - 1);
-         let KR = Math.round(fR * yR);
-         KR < 0 ? KR = 0 : KR >= yR && (KR = yR - 1);
-         const wR = uR ? yR - KR - 1 : KR;
+       disposeFramebufferObjects() {
+         this._renderTarget?.dispose(!0)
+       }
+       releaseInternalTexture() {
+         this._renderTarget?.releaseTextures(), this._texture = null
+       }
+       dispose() {
+         this.onResizeObservable.clear(), this.onClearObservable.clear(), this.onAfterUnbindObservable.clear(), this.onBeforeBindObservable.clear(), this._postProcessManager && (this._postProcessManager.dispose(), this._postProcessManager = null), this._prePassRenderTarget && this … [truncated]
+         const rr = this.eC();
+         if (!rr) return;
+         let Sr = rr.customRenderTargets.indexOf(this);
+         Sr >= 0 && rr.customRenderTargets.splice(Sr, 1);
+         for (const Qr of rr.cameras) Sr = Qr.customRenderTargets.indexOf(this), Sr >= 0 && Qr.customRenderTargets.splice(Sr, 1);
+         this._renderTarget?.dispose(), this._renderTarget = null, this._texture = null, super.dispose()
+       }
+       _rebuild() {
+ ... (250 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/630.js` (Changed code · before: `L70-L72` → after: `L986-L1008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-059e7c197715b472b90266f36402696b46044e0fc384a542c4757bb4ce4b61d9R986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-059e7c197715b472b90266f36402696b46044e0fc384a542c4757bb4ce4b61d9) · [After (L986-L1008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/630.js#L986-L1008) · [Before (L70-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/630.js#L70-L72)

```diff
-           r: JR[wR * GR * tR + VR * tR + 0],
-           g: JR[wR * GR * tR + VR * tR + 1],
-           b: JR[wR * GR * tR + VR * tR + 2]
+           canvas: rr,
+           dumpEngine: {
+             engine: Zr,
+             renderer: ar,
+             wrapper: Er
+           }
+         }
+       }()), await xr
+     }
+     let Nr = (() => {
+       var rr;
+       let Sr, Qr = [];
+       return rr = class {
+         static async EncodeImageAsync(rr, Sr, Qr, Zr, Wr, jr) {
+           const Ir = await mr(),
+             fr = Ir.dumpEngine;
+ ... (7 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/630.js` (Changed code · before: `L77-L80` → after: `L1059-L1063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-059e7c197715b472b90266f36402696b46044e0fc384a542c4757bb4ce4b61d9R1059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-059e7c197715b472b90266f36402696b46044e0fc384a542c4757bb4ce4b61d9) · [After (L1059-L1063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/630.js#L1059-L1063) · [Before (L77-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/630.js#L77-L80)

```diff
-     function uR(RR, JR, GR, yR, tR, uR) {
-       tR > 0 ? (tR = function(RR, JR) {
-         return JR > 1023 ? RR * Math.pow(2, 1023) * Math.pow(2, JR - 1023) : JR < -1074 ? RR * Math.pow(2, -1074) * Math.pow(2, JR + 1074) : RR * Math.pow(2, JR)
-       }(1, tR - 136), RR[uR + 0] = JR * tR, RR[uR + 1] = GR * tR, RR[uR + 2] = yR * tR) : (RR[uR + 0] = 0, RR[uR + 1] = 0, RR[uR + 2] = 0)
+     function zr(rr, Sr, Qr, Zr) {
+       let Wr = arguments.length > 5 ? arguments[5] : void 0;
+       void 0 !== Wr || Zr || (Wr = ""), hr(rr, Sr, Qr, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png", Wr, arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] && arguments[7], arguments.len … [truncated]
+         Zr && Zr(rr)
+       }))
```

#### 9. `bundles/bloxd.io/chunks/js/630.js` (Changed code · before: `L83-L86` → after: `L1066-L1069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-059e7c197715b472b90266f36402696b46044e0fc384a542c4757bb4ce4b61d9R1066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-059e7c197715b472b90266f36402696b46044e0fc384a542c4757bb4ce4b61d9) · [After (L1066-L1069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/630.js#L1066-L1069) · [Before (L83-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/630.js#L83-L86)

```diff
-     function ZR(RR, JR) {
-       let GR, yR = "";
-       for (let tR = JR; tR < RR.length - JR && (GR = String.fromCharCode(RR[tR]), "\n" != GR); tR++) yR += GR;
-       return yR
+     function Yr() {
+       xr && (xr?.then((rr => {
+         rr.canvas instanceof HTMLCanvasElement && rr.canvas.remove(), rr.dumpEngine && (rr.dumpEngine.engine.dispose(), rr.dumpEngine.renderer.dispose(), rr.dumpEngine.wrapper.dispose())
+       })), xr = null)
```

#### 10. `bundles/bloxd.io/chunks/js/630.js` (Changed code · before: `L89-L109` → after: `L1079-L1082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-059e7c197715b472b90266f36402696b46044e0fc384a542c4757bb4ce4b61d9R1079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-059e7c197715b472b90266f36402696b46044e0fc384a542c4757bb4ce4b61d9) · [After (L1079-L1082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/630.js#L1079-L1082) · [Before (L89-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/630.js#L89-L109)

```diff
-     function qR(RR) {
-       let JR = ZR(RR, 0);
-       if ("#" != JR[0] || "?" != JR[1]) throw "Bad HDR Format.";
-       let GR = !1,
-         yR = !1,
-         tR = 0;
-       do {
-         tR += JR.length + 1, JR = ZR(RR, tR), "FORMAT=32-bit_rle_rgbe" == JR ? yR = !0 : 0 == JR.length && (GR = !0)
-       } while (!GR);
-       if (!yR) throw "HDR Bad header format, unsupported FORMAT";
-       tR += JR.length + 1, JR = ZR(RR, tR);
-       const uR = /^-Y (.*) \+X (.*)$/g.exec(JR);
-       if (!uR || uR.length < 3) throw "HDR Bad header format, no size";
-       const qR = parseInt(uR[2]),
-         iR = parseInt(uR[1]);
-       if (qR < 8 || qR > 32767) throw "HDR Bad header format, unsupported size";
- ... (5 more removed lines; see GitHub link above)
+     function Kr() {
+       if (er) return;
+       er = !0;
+       ar.h.DumpData = zr, ar.h.DumpDataAsync = hr, ar.h.DumpFramebuffer = tr
```

#### 11. `bundles/bloxd.io/chunks/js/630.js` (Changed code · before: `L112-L134` → after: `L1179-L1344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-059e7c197715b472b90266f36402696b46044e0fc384a542c4757bb4ce4b61d9R1179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-059e7c197715b472b90266f36402696b46044e0fc384a542c4757bb4ce4b61d9) · [After (L1179-L1344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/630.js#L1179-L1344) · [Before (L112-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/630.js#L112-L134)

```diff
-     function iR(RR, JR) {
-       return function(RR, JR) {
-         let GR = JR.height;
-         const yR = JR.width;
-         let tR, ZR, qR, iR, VR, KR, wR, rR, eR = JR.dataPosition;
-         const aR = new ArrayBuffer(4 * yR),
-           LR = new Uint8Array(aR),
-           nR = new ArrayBuffer(JR.width * JR.height * 4 * 3),
-           UR = new Float32Array(nR);
-         for (; GR > 0;) {
-           if (tR = RR[eR++], ZR = RR[eR++], qR = RR[eR++], iR = RR[eR++], 2 != tR || 2 != ZR || 128 & qR || JR.width < 8 || JR.width > 32767) return fR(RR, JR);
-           if ((qR << 8 | iR) != yR) throw "HDR Bad header format, wrong scan line width";
-           for (KR = 0, rR = 0; rR < 4; rR++)
-             for (wR = (rR + 1) * yR; KR < wR;)
-               if (tR = RR[eR++], ZR = RR[eR++], tR > 128) {
-                 if (VR = tR - 128, 0 == VR || VR > wR - KR) throw "HDR Bad Format, bad scanline data (run)";
- ... (7 more removed lines; see GitHub link above)
+     function Nr(rr, Sr, Qr, Zr, Wr, ar, Ir, fr) {
+       const Er = Sr.MU();
+       return Sr.isReady = !1, Wr = Wr ?? Sr.samplingMode, Zr = Zr ?? Sr.type, ar = ar ?? Sr.format, Ir = Ir ?? Sr.width, fr = fr ?? Sr.height, -1 === Zr && (Zr = 0), new Promise((pr => {
+         const xr = new jr.b("postprocess", rr, null, null, 1, null, Wr, Er, !1, void 0, Zr, void 0, null, !1, ar);
+         xr.externalTextureSamplerBinding = !0;
+         const mr = Er.createRenderTargetTexture({
+           width: Ir,
+           height: fr
+         }, {
+           generateDepthBuffer: !1,
+           generateMipMaps: !1,
+           generateStencilBuffer: !1,
+           samplingMode: Wr,
+           type: Zr,
+           format: ar
+         });
+ ... (150 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/630.js` (Changed code · before: `L136-L137` → after: `L1346-L1392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-059e7c197715b472b90266f36402696b46044e0fc384a542c4757bb4ce4b61d9R1346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-059e7c197715b472b90266f36402696b46044e0fc384a542c4757bb4ce4b61d9) · [After (L1346-L1392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/630.js#L1346-L1392) · [Before (L136-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/630.js#L136-L137)

```diff
-         return UR
-       }(RR, JR)
+         Yr = rr
+       }
+       const nr = hr * zr,
+         er = 4 * nr;
+       if (Yr.length !== er) {
+         const rr = 0 === nr ? 0 : Yr.length / nr;
+         if (1 === rr || 2 === rr || 3 === rr) {
+           const Sr = new Uint8Array(er);
+           for (let Qr = 0, Zr = 0, Wr = 0; Qr < nr; Qr++, Wr += 4) {
+             const Qr = Yr[Zr++];
+             if (1 === rr) {
+               Sr[Wr] = Qr, Sr[Wr + 1] = Qr, Sr[Wr + 2] = Qr, Sr[Wr + 3] = 255;
+               continue
+             }
+             const ar = Yr[Zr++];
+             2 !== rr ? (Sr[Wr] = Qr, Sr[Wr + 1] = ar, Sr[Wr + 2] = Yr[Zr++], Sr[Wr + 3] = 255) : (Sr[Wr] = Qr, Sr[Wr + 1] = ar, Sr[Wr + 2] = 0, Sr[Wr + 3] = 255)
+ ... (31 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/630.js` (Changed code · before: `L140-L148` → after: `L1942-L1976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-059e7c197715b472b90266f36402696b46044e0fc384a542c4757bb4ce4b61d9R1942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-059e7c197715b472b90266f36402696b46044e0fc384a542c4757bb4ce4b61d9) · [After (L1942-L1976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/630.js#L1942-L1976) · [Before (L140-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/630.js#L140-L148)

```diff
-     function fR(RR, JR) {
-       let GR = JR.height;
-       const yR = JR.width;
-       let tR, ZR, qR, iR, fR, VR = JR.dataPosition;
-       const KR = new ArrayBuffer(JR.width * JR.height * 4 * 3),
-         wR = new Float32Array(KR);
-       for (; GR > 0;) {
-         for (fR = 0; fR < JR.width; fR++) tR = RR[VR++], ZR = RR[VR++], qR = RR[VR++], iR = RR[VR++], uR(wR, tR, ZR, qR, iR, (JR.height - GR) * yR * 3 + 3 * fR);
-         GR--
+     function hr() {
+       tr || (tr = !0, xr.e.prototype.setTextureFromPostProcess = function(rr, Sr, Qr) {
+         let Zr = null;
+         Sr && (Sr._forcedOutputTexture ? Zr = Sr._forcedOutputTexture : Sr._textures.data[Sr._currentRenderTextureInd] && (Zr = Sr._textures.data[Sr._currentRenderTextureInd])), this._bindTexture(rr, Zr?.texture ?? null, Qr)
+       }, xr.e.prototype.setTextureFromPostProcessOutput = function(rr, Sr, Qr) {
+         this._bindTexture(rr, Sr?._outputTexture?.texture ?? null, Qr)
+       }, Ir.b.prototype.setTextureFromPostProcess = function(rr, Sr) {
+         this._engine.setTextureFromPostProcess(this._samplers[rr], Sr, rr)
+       }, Ir.b.prototype.setTextureFromPostProcessOutput = function(rr, Sr) {
+         this._engine.setTextureFromPostProcessOutput(this._samplers[rr], Sr, rr)
+       }, (0, pr.e)("BABYLON.PostProcess", Ur))
+     }
+   },
+   54359: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       d: () => jr,
+ ... (19 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/630.js` (Changed code · before: `L152-L170` → after: `L1979-L2017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-059e7c197715b472b90266f36402696b46044e0fc384a542c4757bb4ce4b61d9R1979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-059e7c197715b472b90266f36402696b46044e0fc384a542c4757bb4ce4b61d9) · [After (L1979-L2017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/630.js#L1979-L2017) · [Before (L152-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/630.js#L152-L170)

```diff
-     tR.FACE_LEFT = [new yR.r(-1, -1, -1), new yR.r(1, -1, -1), new yR.r(-1, 1, -1), new yR.r(1, 1, -1)], tR.FACE_RIGHT = [new yR.r(1, -1, 1), new yR.r(-1, -1, 1), new yR.r(1, 1, 1), new yR.r(-1, 1, 1)], tR.FACE_FRONT = [new yR.r(1, -1, -1), new yR.r(1, -1, 1), new yR.r(1, 1, -1), … [truncated]
-     class VR {
-       constructor() {
-         this.supportCascades = !1
-       }
-       loadCubeData() {
-         throw ".hdr not supported in Cube."
-       }
-       loadData(RR, JR, GR) {
-         const yR = new Uint8Array(RR.buffer, RR.byteOffset, RR.byteLength),
-           tR = qR(yR),
-           uR = iR(yR, tR),
-           ZR = tR.width * tR.height,
-           fR = new Float32Array(4 * ZR);
-         for (let qR = 0; qR < ZR; qR += 1) fR[4 * qR] = uR[3 * qR], fR[4 * qR + 1] = uR[3 * qR + 1], fR[4 * qR + 2] = uR[3 * qR + 2], fR[4 * qR + 3] = 1;
-         GR(tR.width, tR.height, JR.generateMipMaps, !1, (() => {
- ... (3 more removed lines; see GitHub link above)
+     ar.FragmentUrl = "pass";
+     class jr extends Zr.g {
+       _gatherImports(rr, Sr) {
+         rr ? (this._webGPUReady = !0, Sr.push(Promise.all([Qr.e(691).then((() => Qr(64801)))]))) : Sr.push(Promise.all([Qr.e(692).then((() => Qr(64804)))])), super._gatherImports(rr, Sr)
+       }
+       constructor(rr) {
+         super({
+           ...arguments.length > 2 ? arguments[2] : void 0,
+           name: rr,
+           engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || Wr.b.LastCreatedEngine,
+           useShaderStore: !0,
+           useAsPostProcess: !0,
+           fragmentShader: jr.FragmentUrl,
+           defines: "#define POSITIVEX"
+         }), this._face = 0
+       }
+ ... (23 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/631.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/631.js` (14 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ffce4f6e9a716e3170024a253170c1ed0177affc0f03dcde40b3bd48c57aeaa7)

#### 1. `bundles/bloxd.io/chunks/js/631.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ffce4f6e9a716e3170024a253170c1ed0177affc0f03dcde40b3bd48c57aeaa7R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ffce4f6e9a716e3170024a253170c1ed0177affc0f03dcde40b3bd48c57aeaa7) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/631.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/631.js#L4)

```diff
-   53878: (RR, JR, GR) => {
+   54374: (rr, Sr, Qr) => {
```

#### 2. `bundles/bloxd.io/chunks/js/631.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ffce4f6e9a716e3170024a253170c1ed0177affc0f03dcde40b3bd48c57aeaa7R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ffce4f6e9a716e3170024a253170c1ed0177affc0f03dcde40b3bd48c57aeaa7) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/631.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/631.js#L6)

```diff
-       _KTXTextureLoader: () => eR
+       _HDRTextureLoader: () => pr
```

#### 3. `bundles/bloxd.io/chunks/js/631.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ffce4f6e9a716e3170024a253170c1ed0177affc0f03dcde40b3bd48c57aeaa7R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ffce4f6e9a716e3170024a253170c1ed0177affc0f03dcde40b3bd48c57aeaa7) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/631.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/631.js#L8)

```diff
-     var yR = GR(39914);
+     var Zr = Qr(38560);
```

#### 4. `bundles/bloxd.io/chunks/js/631.js` (Changed code · before: `L10-L23` → after: `L10-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ffce4f6e9a716e3170024a253170c1ed0177affc0f03dcde40b3bd48c57aeaa7R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ffce4f6e9a716e3170024a253170c1ed0177affc0f03dcde40b3bd48c57aeaa7) · [After (L10-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/631.js#L10-L28) · [Before (L10-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/631.js#L10-L23)

```diff
-       constructor(RR, JR) {
-         if (this.data = RR, this.isInvalid = !1, !tR.IsValid(RR)) return this.isInvalid = !0, void yR.c.Error("texture missing KTX identifier");
-         const GR = Uint32Array.BYTES_PER_ELEMENT,
-           uR = new DataView(this.data.buffer, this.data.byteOffset + 12, 13 * GR),
-           ZR = 67305985 === uR.getUint32(0, !0);
-         return this.glType = uR.getUint32(1 * GR, ZR), this.glTypeSize = uR.getUint32(2 * GR, ZR), this.glFormat = uR.getUint32(3 * GR, ZR), this.glInternalFormat = uR.getUint32(4 * GR, ZR), this.glBaseInternalFormat = uR.getUint32(5 * GR, ZR), this.pixelWidth = uR.getUint32(6 *  … [truncated]
-       }
-       uploadLevels(RR, JR) {
-         switch (this.loadType) {
-           case tR.COMPRESSED_2D:
-             this._upload2DCompressedLevels(RR, JR);
-           case tR.TEX_2D:
-           case tR.COMPRESSED_3D:
-           case tR.TEX_3D:
+       static ConvertPanoramaToCubemap(rr, Sr, Qr, Zr) {
+         let Wr, ar = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
+           jr = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
+         if (!rr) throw "ConvertPanoramaToCubemap: input cannot be null";
+         if (rr.length != Sr * Qr * 3) {
+           if (rr.length != Sr * Qr * 4) throw "ConvertPanoramaToCubemap: input size is wrong";
+           Wr = 4
+         } else Wr = 3;
+         return {
+           front: this.CreateCubemapTexture(Zr, this.FACE_FRONT, rr, Sr, Qr, ar, jr, Wr),
+           back: this.CreateCubemapTexture(Zr, this.FACE_BACK, rr, Sr, Qr, ar, jr, Wr),
+           left: this.CreateCubemapTexture(Zr, this.FACE_LEFT, rr, Sr, Qr, ar, jr, Wr),
+           right: this.CreateCubemapTexture(Zr, this.FACE_RIGHT, rr, Sr, Qr, ar, jr, Wr),
+           up: this.CreateCubemapTexture(Zr, this.FACE_UP, rr, Sr, Qr, ar, jr, Wr),
+           down: this.CreateCubemapTexture(Zr, this.FACE_DOWN, rr, Sr, Qr, ar, jr, Wr),
+           size: Zr,
+ ... (3 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/631.js` (Changed code · before: `L26-L36` → after: `L31-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ffce4f6e9a716e3170024a253170c1ed0177affc0f03dcde40b3bd48c57aeaa7R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ffce4f6e9a716e3170024a253170c1ed0177affc0f03dcde40b3bd48c57aeaa7) · [After (L31-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/631.js#L31-L52) · [Before (L26-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/631.js#L26-L36)

```diff
-       _upload2DCompressedLevels(RR, JR) {
-         let GR = tR.HEADER_LEN + this.bytesOfKeyValueData,
-           yR = this.pixelWidth,
-           uR = this.pixelHeight;
-         const ZR = JR ? this.numberOfMipmapLevels : 1;
-         for (let tR = 0; tR < ZR; tR++) {
-           const JR = new Int32Array(this.data.buffer, this.data.byteOffset + GR, 1)[0];
-           GR += 4;
-           for (let ZR = 0; ZR < this.numberOfFaces; ZR++) {
-             const qR = new Uint8Array(this.data.buffer, this.data.byteOffset + GR, JR);
-             RR.ke()._uploadCompressedDataToTextureDirectly(RR, RR.format, yR, uR, qR, ZR, tR), GR += JR, GR += 3 - (JR + 3) % 4
+       static CreateCubemapTexture(rr, Sr, Qr, Zr, Wr, ar, jr, Ir) {
+         const fr = new ArrayBuffer(rr * rr * 4 * 3),
+           Er = new Float32Array(fr),
+           pr = ar ? Math.max(1, Math.round(Zr / 4 / rr)) : 1,
+           xr = 1 / pr,
+           mr = xr * xr,
+           Nr = Sr[1].subtract(Sr[0]).scale(xr / rr),
+           Ur = Sr[3].subtract(Sr[2]).scale(xr / rr),
+           tr = 1 / rr;
+         let hr = 0;
+         for (let zr = 0; zr < rr; zr++)
+           for (let ar = 0; ar < pr; ar++) {
+             let ar = Sr[0],
+               fr = Sr[2];
+             for (let Sr = 0; Sr < rr; Sr++)
+               for (let xr = 0; xr < pr; xr++) {
+ ... (6 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/631.js` (Changed code · before: `L38` → after: `L54-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ffce4f6e9a716e3170024a253170c1ed0177affc0f03dcde40b3bd48c57aeaa7R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ffce4f6e9a716e3170024a253170c1ed0177affc0f03dcde40b3bd48c57aeaa7) · [After (L54-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/631.js#L54-L72) · [Before (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/631.js#L38)

```diff
-           yR = Math.max(1, .5 * yR), uR = Math.max(1, .5 * uR)
+         return Er
+       }
+       static CalcProjectionSpherical(rr, Sr, Qr, Zr, Wr, ar) {
+         let jr = Math.atan2(rr.z, rr.x);
+         const Ir = Math.acos(rr.y);
+         for (; jr < -Math.PI;) jr += 2 * Math.PI;
+         for (; jr > Math.PI;) jr -= 2 * Math.PI;
+         let fr = jr / Math.PI;
+         const Er = Ir / Math.PI;
+         fr = .5 * fr + .5;
+         let pr = Math.round(fr * Qr);
+         pr < 0 ? pr = 0 : pr >= Qr && (pr = Qr - 1);
+         let xr = Math.round(Er * Zr);
+         xr < 0 ? xr = 0 : xr >= Zr && (xr = Zr - 1);
+         const mr = ar ? Zr - xr - 1 : xr;
+         return {
+ ... (3 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/631.js` (Changed code · before: `L49-L51` → after: `L76-L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ffce4f6e9a716e3170024a253170c1ed0177affc0f03dcde40b3bd48c57aeaa7R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ffce4f6e9a716e3170024a253170c1ed0177affc0f03dcde40b3bd48c57aeaa7) · [After (L76-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/631.js#L76-L81) · [Before (L49-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/631.js#L49-L51)

```diff
-     tR.HEADER_LEN = 64, tR.COMPRESSED_2D = 0, tR.COMPRESSED_3D = 1, tR.TEX_2D = 2, tR.TEX_3D = 3;
-     var uR, ZR, qR, iR = GR(53887),
-       fR = GR(41616);
+ 
+     function ar(rr, Sr, Qr, Zr, Wr, ar) {
+       Wr > 0 ? (Wr = function(rr, Sr) {
+         return Sr > 1023 ? rr * Math.pow(2, 1023) * Math.pow(2, Sr - 1023) : Sr < -1074 ? rr * Math.pow(2, -1074) * Math.pow(2, Sr + 1074) : rr * Math.pow(2, Sr)
+       }(1, Wr - 136), rr[ar + 0] = Sr * Wr, rr[ar + 1] = Qr * Wr, rr[ar + 2] = Zr * Wr) : (rr[ar + 0] = 0, rr[ar + 1] = 0, rr[ar + 2] = 0)
+     }
```

#### 8. `bundles/bloxd.io/chunks/js/631.js` (Changed code · before: `L54-L55` → after: `L84-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ffce4f6e9a716e3170024a253170c1ed0177affc0f03dcde40b3bd48c57aeaa7R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ffce4f6e9a716e3170024a253170c1ed0177affc0f03dcde40b3bd48c57aeaa7) · [After (L84-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/631.js#L84-L86) · [Before (L54-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/631.js#L54-L55)

```diff
-       const GR = JR?.jsDecoderModule || KTX2DECODER;
-       RR && (RR.wasmBaseUrl && (GR.Transcoder.WasmBaseUrl = RR.wasmBaseUrl), RR.wasmUASTCToASTC && (GR.LiteTranscoder_UASTC_ASTC.WasmModuleURL = RR.wasmUASTCToASTC), RR.wasmUASTCToBC7 && (GR.LiteTranscoder_UASTC_BC7.WasmModuleURL = RR.wasmUASTCToBC7), RR.wasmUASTCToRGBA_UNORM &&  … [truncated]
+       let Qr, Zr = "";
+       for (let Wr = Sr; Wr < rr.length - Sr && (Qr = String.fromCharCode(rr[Wr]), "\n" != Qr); Wr++) Zr += Qr;
+       return Zr
```

#### 9. `bundles/bloxd.io/chunks/js/631.js` (Changed code · before: `L59-L241` → after: `L90-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ffce4f6e9a716e3170024a253170c1ed0177affc0f03dcde40b3bd48c57aeaa7R90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ffce4f6e9a716e3170024a253170c1ed0177affc0f03dcde40b3bd48c57aeaa7) · [After (L90-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/631.js#L90-L108) · [Before (L59-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/631.js#L59-L241)

```diff
-       let JR;
-       "undefined" === typeof RR && "undefined" !== typeof KTX2DECODER && (RR = KTX2DECODER), onmessage = GR => {
-         if (GR.data) switch (GR.data.action) {
-           case "init": {
-             const yR = GR.data.urls;
-             yR && (yR.jsDecoderModule && "undefined" === typeof RR && (importScripts(yR.jsDecoderModule), RR = KTX2DECODER), VR(yR)), GR.data.wasmBinaries && VR(void 0, {
-               ...GR.data.wasmBinaries,
-               jsDecoderModule: RR
-             }), JR = new RR.KTX2Decoder, postMessage({
-               action: "init"
-             });
-             break
-           }
-           case "setDefaultDecoderOptions":
-             RR.KTX2Decoder.DefaultDecoderOptions = GR.data.options;
-             break;
- ... (167 more removed lines; see GitHub link above)
+       let Sr = jr(rr, 0);
+       if ("#" != Sr[0] || "?" != Sr[1]) throw "Bad HDR Format.";
+       let Qr = !1,
+         Zr = !1,
+         Wr = 0;
+       do {
+         Wr += Sr.length + 1, Sr = jr(rr, Wr), "FORMAT=32-bit_rle_rgbe" == Sr ? Zr = !0 : 0 == Sr.length && (Qr = !0)
+       } while (!Qr);
+       if (!Zr) throw "HDR Bad header format, unsupported FORMAT";
+       Wr += Sr.length + 1, Sr = jr(rr, Wr);
+       const ar = /^-Y (.*) \+X (.*)$/g.exec(Sr);
+       if (!ar || ar.length < 3) throw "HDR Bad header format, no size";
+       const Ir = parseInt(ar[2]),
+         fr = parseInt(ar[1]);
+       if (Ir < 8 || Ir > 32767) throw "HDR Bad header format, unsupported size";
+       return Wr += Sr.length + 1, {
+ ... (3 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/631.js` (Changed code · before: `L245-L288` → after: `L112-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ffce4f6e9a716e3170024a253170c1ed0177affc0f03dcde40b3bd48c57aeaa7R112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ffce4f6e9a716e3170024a253170c1ed0177affc0f03dcde40b3bd48c57aeaa7) · [After (L112-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/631.js#L112-L148) · [Before (L245-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/631.js#L245-L288)

```diff
-     function rR(RR) {
-       switch (RR) {
-         case 35916:
-           return 33776;
-         case 35918:
-           return 33778;
-         case 35919:
-           return 33779;
-         case 37493:
-           return 37492;
-         case 37497:
-           return 37496;
-         case 37495:
-           return 37494;
-         case 37840:
-           return 37808;
- ... (28 more removed lines; see GitHub link above)
+     function fr(rr, Sr) {
+       return function(rr, Sr) {
+         let Qr = Sr.height;
+         const Zr = Sr.width;
+         let Wr, jr, Ir, fr, pr, xr, mr, Nr, Ur = Sr.dataPosition;
+         const tr = new ArrayBuffer(4 * Zr),
+           hr = new Uint8Array(tr),
+           zr = new ArrayBuffer(Sr.width * Sr.height * 4 * 3),
+           Yr = new Float32Array(zr);
+         for (; Qr > 0;) {
+           if (Wr = rr[Ur++], jr = rr[Ur++], Ir = rr[Ur++], fr = rr[Ur++], 2 != Wr || 2 != jr || 128 & Ir || Sr.width < 8 || Sr.width > 32767) return Er(rr, Sr);
+           if ((Ir << 8 | fr) != Zr) throw "HDR Bad header format, wrong scan line width";
+           for (xr = 0, Nr = 0; Nr < 4; Nr++)
+             for (mr = (Nr + 1) * Zr; xr < mr;)
+               if (Wr = rr[Ur++], jr = rr[Ur++], Wr > 128) {
+                 if (pr = Wr - 128, 0 == pr || pr > mr - xr) throw "HDR Bad Format, bad scanline data (run)";
+ ... (21 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/631.js` (Changed code · before: `L290` → after: `L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ffce4f6e9a716e3170024a253170c1ed0177affc0f03dcde40b3bd48c57aeaa7R150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ffce4f6e9a716e3170024a253170c1ed0177affc0f03dcde40b3bd48c57aeaa7) · [After (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/631.js#L150) · [Before (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/631.js#L290)

```diff
-       return null
+       return mr
```

#### 12. `bundles/bloxd.io/chunks/js/631.js` (Changed code · before: `L292-L361` → after: `L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ffce4f6e9a716e3170024a253170c1ed0177affc0f03dcde40b3bd48c57aeaa7R152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ffce4f6e9a716e3170024a253170c1ed0177affc0f03dcde40b3bd48c57aeaa7) · [After (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/631.js#L152) · [Before (L292-L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/631.js#L292-L361)

```diff
-     wR.URLConfig = {
-       jsDecoderModule: "https://cdn.babylonjs.com/babylon.ktx2Decoder.js",
-       wasmUASTCToASTC: null,
-       wasmUASTCToBC7: null,
-       wasmUASTCToRGBA_UNORM: null,
-       wasmUASTCToRGBA_SRGB: null,
-       wasmUASTCToR8_UNORM: null,
-       wasmUASTCToRG8_UNORM: null,
-       jsMSCTranscoder: null,
-       wasmMSCTranscoder: null,
-       wasmZSTDDecoder: null
-     }, wR.DefaultNumWorkers = wR.GetDefaultNumWorkers(), wR.DefaultDecoderOptions = new class {
-       constructor() {
-         this._isDirty = !0, this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC = !0, this._ktx2DecoderOptions = {}
-       }
-       get isDirty() {
- ... (54 more removed lines; see GitHub link above)
+     Wr.FACE_LEFT = [new Zr.u(-1, -1, -1), new Zr.u(1, -1, -1), new Zr.u(-1, 1, -1), new Zr.u(1, 1, -1)], Wr.FACE_RIGHT = [new Zr.u(1, -1, 1), new Zr.u(-1, -1, 1), new Zr.u(1, 1, 1), new Zr.u(-1, 1, 1)], Wr.FACE_FRONT = [new Zr.u(1, -1, -1), new Zr.u(1, -1, 1), new Zr.u(1, 1, -1), … [truncated]
```

#### 13. `bundles/bloxd.io/chunks/js/631.js` (Changed code · before: `L366-L374` → after: `L157-L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ffce4f6e9a716e3170024a253170c1ed0177affc0f03dcde40b3bd48c57aeaa7R157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ffce4f6e9a716e3170024a253170c1ed0177affc0f03dcde40b3bd48c57aeaa7) · [After (L157-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/631.js#L157-L158) · [Before (L366-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/631.js#L366-L374)

```diff
-       loadCubeData(RR, JR, GR, yR) {
-         if (Array.isArray(RR)) return;
-         JR._invertVScale = !JR.invertY;
-         const uR = JR.ke(),
-           ZR = new tR(RR, 6),
-           qR = rR(ZR.glInternalFormat);
-         null !== qR ? (JR.format = qR, JR._useSRGBBuffer = uR._getUseSRGBBuffer(!0, !JR.generateMipMaps), JR._gammaSpace = !0) : JR.format = ZR.glInternalFormat;
-         const iR = ZR.numberOfMipmapLevels > 1 && JR.generateMipMaps;
-         uR._unpackFlipY(!0), ZR.uploadLevels(JR, JR.generateMipMaps), JR.width = ZR.pixelWidth, JR.height = ZR.pixelHeight, uR._setCubeMapTextureParams(JR, iR, ZR.numberOfMipmapLevels - 1), JR.isReady = !0, JR.onLoadedObservable.notifyObservers(JR), JR.onLoadedObservable.clear(), … [truncated]
+       loadCubeData() {
+         throw ".hdr not supported in Cube."
```

#### 14. `bundles/bloxd.io/chunks/js/631.js` (Changed code · before: `L376-L424` → after: `L160-L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ffce4f6e9a716e3170024a253170c1ed0177affc0f03dcde40b3bd48c57aeaa7R160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ffce4f6e9a716e3170024a253170c1ed0177affc0f03dcde40b3bd48c57aeaa7) · [After (L160-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/631.js#L160-L169) · [Before (L376-L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/631.js#L376-L424)

```diff
-       loadData(RR, JR, GR, uR) {
-         if (tR.IsValid(RR)) {
-           JR._invertVScale = !JR.invertY;
-           const yR = new tR(RR, 1),
-             uR = rR(yR.glInternalFormat);
-           null !== uR ? (JR.format = uR, JR._useSRGBBuffer = JR.ke()._getUseSRGBBuffer(!0, !JR.generateMipMaps), JR._gammaSpace = !0) : JR.format = yR.glInternalFormat, GR(yR.pixelWidth, yR.pixelHeight, JR.generateMipMaps, !0, (() => {
-             yR.uploadLevels(JR, JR.generateMipMaps)
-           }), yR.isInvalid)
-         } else if (wR.IsValid(RR)) {
-           new wR(JR.ke())._uploadAsync(RR, JR, uR).then((() => {
-             GR(JR.width, JR.height, JR.generateMipMaps, !0, (() => {}), !1)
-           }), (RR => {
-             yR.c.Warn(`Failed to load KTX2 texture data: ${RR.message}`), GR(0, 0, !1, !1, (() => {}), !0)
-           }))
-         } else yR.c.Error("texture missing KTX identifier"), GR(0, 0, !1, !1, (() => {}), !0)
-       }
- ... (33 more removed lines; see GitHub link above)
+       loadData(rr, Sr, Qr) {
+         const Zr = new Uint8Array(rr.buffer, rr.byteOffset, rr.byteLength),
+           Wr = Ir(Zr),
+           ar = fr(Zr, Wr),
+           jr = Wr.width * Wr.height,
+           Er = new Float32Array(4 * jr);
+         for (let Ir = 0; Ir < jr; Ir += 1) Er[4 * Ir] = ar[3 * Ir], Er[4 * Ir + 1] = ar[3 * Ir + 1], Er[4 * Ir + 2] = ar[3 * Ir + 2], Er[4 * Ir + 3] = 1;
+         Qr(Wr.width, Wr.height, Sr.generateMipMaps, !1, (() => {
+           const rr = Sr.MU();
+           Sr.type = 1, Sr.format = 5, Sr._gammaSpace = !1, rr._uploadDataToTextureDirectly(Sr, Er)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/632.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/632.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2b9aad4a3cd7429c342970921be0dbec6ad80d04a87e808789fa385c96a258e)

#### 1. `bundles/bloxd.io/chunks/js/632.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2b9aad4a3cd7429c342970921be0dbec6ad80d04a87e808789fa385c96a258eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2b9aad4a3cd7429c342970921be0dbec6ad80d04a87e808789fa385c96a258e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/632.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/632.js#L4)

```diff
-   53891: (RR, JR, GR) => {
+   54376: (rr, Sr, Qr) => {
```

#### 2. `bundles/bloxd.io/chunks/js/632.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2b9aad4a3cd7429c342970921be0dbec6ad80d04a87e808789fa385c96a258eR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2b9aad4a3cd7429c342970921be0dbec6ad80d04a87e808789fa385c96a258e) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/632.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/632.js#L6)

```diff
-       _TGATextureLoader: () => qR
+       _KTXTextureLoader: () => Ur
```

#### 3. `bundles/bloxd.io/chunks/js/632.js` (Changed code · before: `L8` → after: `L8-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2b9aad4a3cd7429c342970921be0dbec6ad80d04a87e808789fa385c96a258eR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2b9aad4a3cd7429c342970921be0dbec6ad80d04a87e808789fa385c96a258e) · [After (L8-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/632.js#L8-L56) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/632.js#L8)

```diff
-     var yR = GR(39914);
+     var Zr = Qr(40246);
+     class Wr {
+       constructor(rr, Sr) {
+         if (this.data = rr, this.isInvalid = !1, !Wr.IsValid(rr)) return this.isInvalid = !0, void Zr.c.Error("texture missing KTX identifier");
+         const Qr = Uint32Array.BYTES_PER_ELEMENT,
+           ar = new DataView(this.data.buffer, this.data.byteOffset + 12, 13 * Qr),
+           jr = 67305985 === ar.getUint32(0, !0);
+         return this.glType = ar.getUint32(1 * Qr, jr), this.glTypeSize = ar.getUint32(2 * Qr, jr), this.glFormat = ar.getUint32(3 * Qr, jr), this.glInternalFormat = ar.getUint32(4 * Qr, jr), this.glBaseInternalFormat = ar.getUint32(5 * Qr, jr), this.pixelWidth = ar.getUint32(6 *  … [truncated]
+       }
+       uploadLevels(rr, Sr) {
+         switch (this.loadType) {
+           case Wr.COMPRESSED_2D:
+             this._upload2DCompressedLevels(rr, Sr);
+           case Wr.TEX_2D:
+           case Wr.COMPRESSED_3D:
+           case Wr.TEX_3D:
+ ... (33 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/632.js` (Changed code · before: `L11-L23` → after: `L59-L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2b9aad4a3cd7429c342970921be0dbec6ad80d04a87e808789fa385c96a258eR59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2b9aad4a3cd7429c342970921be0dbec6ad80d04a87e808789fa385c96a258e) · [After (L59-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/632.js#L59-L241) · [Before (L11-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/632.js#L11-L23)

```diff
-       let JR = 0;
-       return {
-         id_length: RR[JR++],
-         colormap_type: RR[JR++],
-         image_type: RR[JR++],
-         colormap_index: RR[JR++] | RR[JR++] << 8,
-         colormap_length: RR[JR++] | RR[JR++] << 8,
-         colormap_size: RR[JR++],
-         origin: [RR[JR++] | RR[JR++] << 8, RR[JR++] | RR[JR++] << 8],
-         width: RR[JR++] | RR[JR++] << 8,
-         height: RR[JR++] | RR[JR++] << 8,
-         pixel_size: RR[JR++],
-         flags: RR[17]
+       let Sr;
+       "undefined" === typeof rr && "undefined" !== typeof KTX2DECODER && (rr = KTX2DECODER), onmessage = Qr => {
+         if (Qr.data) switch (Qr.data.action) {
+           case "init": {
+             const Zr = Qr.data.urls;
+             Zr && (Zr.jsDecoderModule && "undefined" === typeof rr && (importScripts(Zr.jsDecoderModule), rr = KTX2DECODER), pr(Zr)), Qr.data.wasmBinaries && pr(void 0, {
+               ...Qr.data.wasmBinaries,
+               jsDecoderModule: rr
+             }), Sr = new rr.KTX2Decoder, postMessage({
+               action: "init"
+             });
+             break
+           }
+           case "setDefaultDecoderOptions":
+             rr.KTX2Decoder.DefaultDecoderOptions = Qr.data.options;
+             break;
+ ... (167 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/632.js` (Changed code · before: `L27-L66` → after: `L245-L357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2b9aad4a3cd7429c342970921be0dbec6ad80d04a87e808789fa385c96a258eR245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2b9aad4a3cd7429c342970921be0dbec6ad80d04a87e808789fa385c96a258e) · [After (L245-L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/632.js#L245-L357) · [Before (L27-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/632.js#L27-L66)

```diff
-     function uR(RR, JR) {
-       if (JR.length < 19) return void yR.c.Error("Unable to load TGA file - Not enough data to contain header");
-       let GR = 18;
-       const uR = tR(JR);
-       if (uR.id_length + GR > JR.length) return void yR.c.Error("Unable to load TGA file - Not enough data");
-       GR += uR.id_length;
-       let qR, iR = !1,
-         fR = !1,
-         VR = !1;
-       switch (uR.image_type) {
-         case 9:
-           iR = !0;
-         case 1:
-           fR = !0;
-           break;
-         case 10:
- ... (24 more removed lines; see GitHub link above)
+     function Nr(rr) {
+       switch (rr) {
+         case 35916:
+           return 33776;
+         case 35918:
+           return 33778;
+         case 35919:
+           return 33779;
+         case 37493:
+           return 37492;
+         case 37497:
+           return 37496;
+         case 37495:
+           return 37494;
+         case 37840:
+           return 37808;
+ ... (97 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/632.js` (Changed code · before: `L68-L155` → after: `L359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2b9aad4a3cd7429c342970921be0dbec6ad80d04a87e808789fa385c96a258eR359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2b9aad4a3cd7429c342970921be0dbec6ad80d04a87e808789fa385c96a258e) · [After (L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/632.js#L359) · [Before (L68-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/632.js#L68-L155)

```diff
-       } else qR = JR.subarray(GR, GR + (fR ? uR.width * uR.height : wR));
-       switch ((48 & uR.flags) >> 4) {
-         default:
-         case 2:
-           eR = 0, LR = 1, WR = uR.width, aR = 0, nR = 1, UR = uR.height;
-           break;
-         case 0:
-           eR = 0, LR = 1, WR = uR.width, aR = uR.height - 1, nR = -1, UR = -1;
-           break;
-         case 3:
-           eR = uR.width - 1, LR = -1, WR = -1, aR = 0, nR = 1, UR = uR.height;
-           break;
-         case 1:
-           eR = uR.width - 1, LR = -1, WR = -1, aR = uR.height - 1, nR = -1, UR = -1
-       }
-       const AR = "_getImageData" + (VR ? "Grey" : "") + uR.pixel_size + "bits",
- ... (72 more removed lines; see GitHub link above)
+         }), this._ktx2DecoderOptions = rr, rr
```

#### 7. `bundles/bloxd.io/chunks/js/632.js` (Changed code · before: `L162-L169` → after: `L366-L424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2b9aad4a3cd7429c342970921be0dbec6ad80d04a87e808789fa385c96a258eR366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2b9aad4a3cd7429c342970921be0dbec6ad80d04a87e808789fa385c96a258e) · [After (L366-L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/632.js#L366-L424) · [Before (L162-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/632.js#L162-L169)

```diff
-       loadCubeData() {
-         throw ".env not supported in Cube."
-       }
-       loadData(RR, JR, GR) {
-         const yR = new Uint8Array(RR.buffer, RR.byteOffset, RR.byteLength),
-           ZR = tR(yR);
-         GR(ZR.width, ZR.height, JR.generateMipMaps, !1, (() => {
-           uR(JR, yR)
+       loadCubeData(rr, Sr, Qr, Zr) {
+         if (Array.isArray(rr)) return;
+         Sr._invertVScale = !Sr.invertY;
+         const ar = Sr.MU(),
+           jr = new Wr(rr, 6),
+           Ir = Nr(jr.glInternalFormat);
+         null !== Ir ? (Sr.format = Ir, Sr._useSRGBBuffer = ar._getUseSRGBBuffer(!0, !Sr.generateMipMaps), Sr._gammaSpace = !0) : Sr.format = jr.glInternalFormat;
+         const fr = jr.numberOfMipmapLevels > 1 && Sr.generateMipMaps;
+         ar._unpackFlipY(!0), jr.uploadLevels(Sr, Sr.generateMipMaps), Sr.width = jr.pixelWidth, Sr.height = jr.pixelHeight, ar._setCubeMapTextureParams(Sr, fr, jr.numberOfMipmapLevels - 1), Sr.isReady = !0, Sr.onLoadedObservable.notifyObservers(Sr), Sr.onLoadedObservable.clear(), … [truncated]
+       }
+       loadData(rr, Sr, Qr, ar) {
+         if (Wr.IsValid(rr)) {
+           Sr._invertVScale = !Sr.invertY;
+           const Zr = new Wr(rr, 1),
+             ar = Nr(Zr.glInternalFormat);
+           null !== ar ? (Sr.format = ar, Sr._useSRGBBuffer = Sr.MU()._getUseSRGBBuffer(!0, !Sr.generateMipMaps), Sr._gammaSpace = !0) : Sr.format = Zr.glInternalFormat, Qr(Zr.pixelWidth, Zr.pixelHeight, Sr.generateMipMaps, !0, (() => {
+ ... (43 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/633.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/633.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a15fd59e96c156f9d3eb5b7b91324b2a0a32a061c4bd237e03c0772e413f2813)

#### 1. `bundles/bloxd.io/chunks/js/633.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a15fd59e96c156f9d3eb5b7b91324b2a0a32a061c4bd237e03c0772e413f2813R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a15fd59e96c156f9d3eb5b7b91324b2a0a32a061c4bd237e03c0772e413f2813) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/633.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/633.js#L4)

```diff
-   53897: (RR, JR, GR) => {
+   54383: (rr, Sr, Qr) => {
```

#### 2. `bundles/bloxd.io/chunks/js/633.js` (Changed code · before: `L6-L7` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a15fd59e96c156f9d3eb5b7b91324b2a0a32a061c4bd237e03c0772e413f2813R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a15fd59e96c156f9d3eb5b7b91324b2a0a32a061c4bd237e03c0772e413f2813) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/633.js#L6) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/633.js#L6-L7)

```diff
-       ReadExrDataAsync: () => KJ,
-       _ExrTextureLoader: () => VJ
+       _TGATextureLoader: () => Ir
```

#### 3. `bundles/bloxd.io/chunks/js/633.js` (Changed code · before: `L9-L165` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a15fd59e96c156f9d3eb5b7b91324b2a0a32a061c4bd237e03c0772e413f2813R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a15fd59e96c156f9d3eb5b7b91324b2a0a32a061c4bd237e03c0772e413f2813) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/633.js#L8) · [Before (L9-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/633.js#L9-L165)

```diff
-     var yR = GR(39914),
-       tR = GR(38239),
-       uR = GR(41594);
-     const ZR = 4,
-       qR = 4,
-       iR = 1,
-       fR = 2,
-       VR = 8,
-       KR = 65536,
-       wR = KR >> 3,
-       rR = 14,
-       eR = 65537,
-       aR = 1 << rR,
-       LR = aR - 1,
-       nR = 59,
-       UR = 63,
- ... (141 more removed lines; see GitHub link above)
+     var Zr = Qr(40246);
```

#### 4. `bundles/bloxd.io/chunks/js/633.js` (Changed code · before: `L168-L170` → after: `L11-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a15fd59e96c156f9d3eb5b7b91324b2a0a32a061c4bd237e03c0772e413f2813R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a15fd59e96c156f9d3eb5b7b91324b2a0a32a061c4bd237e03c0772e413f2813) · [After (L11-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/633.js#L11-L23) · [Before (L168-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/633.js#L168-L170)

```diff
-       for (let JR = 1; JR < RR.length; JR++) {
-         const GR = RR[JR - 1] + RR[JR] - 128;
-         RR[JR] = GR
+       let Sr = 0;
+       return {
+         id_length: rr[Sr++],
+         colormap_type: rr[Sr++],
+         image_type: rr[Sr++],
+         colormap_index: rr[Sr++] | rr[Sr++] << 8,
+         colormap_length: rr[Sr++] | rr[Sr++] << 8,
+         colormap_size: rr[Sr++],
+         origin: [rr[Sr++] | rr[Sr++] << 8, rr[Sr++] | rr[Sr++] << 8],
+         width: rr[Sr++] | rr[Sr++] << 8,
+         height: rr[Sr++] | rr[Sr++] << 8,
+         pixel_size: rr[Sr++],
+         flags: rr[17]
```

#### 5. `bundles/bloxd.io/chunks/js/633.js` (Changed code · before: `L175-L207` → after: `L28-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a15fd59e96c156f9d3eb5b7b91324b2a0a32a061c4bd237e03c0772e413f2813R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a15fd59e96c156f9d3eb5b7b91324b2a0a32a061c4bd237e03c0772e413f2813) · [After (L28-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/633.js#L28-L49) · [Before (L175-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/633.js#L175-L207)

```diff
-       let GR = 0,
-         yR = Math.floor((RR.length + 1) / 2),
-         tR = 0;
-       const uR = RR.length - 1;
-       for (; !(tR > uR) && (JR[tR++] = RR[GR++], !(tR > uR));) JR[tR++] = RR[yR++]
-     }! function(RR) {
-       RR[RR.NO_COMPRESSION = 0] = "NO_COMPRESSION", RR[RR.RLE_COMPRESSION = 1] = "RLE_COMPRESSION", RR[RR.ZIPS_COMPRESSION = 2] = "ZIPS_COMPRESSION", RR[RR.ZIP_COMPRESSION = 3] = "ZIP_COMPRESSION", RR[RR.PIZ_COMPRESSION = 4] = "PIZ_COMPRESSION", RR[RR.PXR24_COMPRESSION = 5] = "PX … [truncated]
-     }(AR || (AR = {})),
-     function(RR) {
-       RR[RR.INCREASING_Y = 0] = "INCREASING_Y", RR[RR.DECREASING_Y = 1] = "DECREASING_Y"
-     }(CR || (CR = {}));
-     const oR = 20000630;
- 
-     function cR(RR, JR) {
-       if (RR.getUint32(0, !0) != oR) throw new Error("Incorrect OpenEXR format");
-       const GR = RR.getUint8(4),
- ... (17 more removed lines; see GitHub link above)
+       if (Sr.length < 19) return void Zr.c.Error("Unable to load TGA file - Not enough data to contain header");
+       let Qr = 18;
+       const ar = Wr(Sr);
+       if (ar.id_length + Qr > Sr.length) return void Zr.c.Error("Unable to load TGA file - Not enough data");
+       Qr += ar.id_length;
+       let Ir, fr = !1,
+         Er = !1,
+         pr = !1;
+       switch (ar.image_type) {
+         case 9:
+           fr = !0;
+         case 1:
+           Er = !0;
+           break;
+         case 10:
+           fr = !0;
+ ... (6 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/633.js` (Changed code · before: `L209-L213` → after: `L51-L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a15fd59e96c156f9d3eb5b7b91324b2a0a32a061c4bd237e03c0772e413f2813R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a15fd59e96c156f9d3eb5b7b91324b2a0a32a061c4bd237e03c0772e413f2813) · [After (L51-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/633.js#L51-L81) · [Before (L209-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/633.js#L209-L213)

```diff
-       if (0 != (-5 & tR)) throw new Error("Unsupported file format");
-       return {
-         version: GR,
-         spec: uR,
-         ...ZR
+       const xr = ar.pixel_size >> 3,
+         mr = ar.width * ar.height * xr;
+       let Nr, Ur, tr, hr, zr, Yr, nr;
+       if (Er && (Nr = Sr.subarray(Qr, Qr += ar.colormap_length * (ar.colormap_size >> 3))), fr) {
+         let rr, Zr, Wr;
+         Ir = new Uint8Array(mr);
+         let ar = 0;
+         const jr = new Uint8Array(xr);
+         for (; Qr < mr && ar < mr;)
+           if (rr = Sr[Qr++], Zr = 1 + (127 & rr), 128 & rr) {
+             for (Wr = 0; Wr < xr; ++Wr) jr[Wr] = Sr[Qr++];
+             for (Wr = 0; Wr < Zr; ++Wr) Ir.set(jr, ar + Wr * xr);
+             ar += xr * Zr
+           } else {
+             for (Zr *= xr, Wr = 0; Wr < Zr; ++Wr) Ir[ar + Wr] = Sr[Qr++];
+             ar += Zr
+ ... (15 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/633.js` (Changed code · before: `L216-L224` → after: `L87-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a15fd59e96c156f9d3eb5b7b91324b2a0a32a061c4bd237e03c0772e413f2813R87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a15fd59e96c156f9d3eb5b7b91324b2a0a32a061c4bd237e03c0772e413f2813) · [After (L87-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/633.js#L87-L155) · [Before (L216-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/633.js#L216-L224)

```diff
-     const PR = 32768,
-       IR = 65535;
- 
-     function mR(RR, JR, GR, yR, tR) {
-       for (; GR < RR;) JR = JR << 8 | gR(yR, tR), GR += 8;
-       return {
-         l: JR >> (GR -= RR) & (1 << RR) - 1,
-         c: JR,
-         lc: GR
+     const jr = {
+       GetTGAHeader: Wr,
+       UploadContent: ar,
+       _getImageData8bits: function(rr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr) {
+         const Er = Qr,
+           pr = Sr,
+           xr = rr.width,
+           mr = rr.height;
+         let Nr, Ur, tr, hr = 0;
+         const zr = new Uint8Array(xr * mr * 4);
+         for (tr = Zr; tr !== ar; tr += Wr)
+           for (Ur = jr; Ur !== fr; Ur += Ir, hr++) Nr = Er[hr], zr[4 * (Ur + xr * tr) + 3] = 255, zr[4 * (Ur + xr * tr) + 2] = pr[3 * Nr + 0], zr[4 * (Ur + xr * tr) + 1] = pr[3 * Nr + 1], zr[4 * (Ur + xr * tr) + 0] = pr[3 * Nr + 2];
+         return zr
+       },
+       _getImageData16bits: function(rr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr) {
+         const Er = Qr,
+ ... (53 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/633.js` (Changed code · before: `L226-L720` → after: `L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a15fd59e96c156f9d3eb5b7b91324b2a0a32a061c4bd237e03c0772e413f2813R157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a15fd59e96c156f9d3eb5b7b91324b2a0a32a061c4bd237e03c0772e413f2813) · [After (L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/633.js#L157) · [Before (L226-L720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/633.js#L226-L720)

```diff
-     }
- 
-     function zR(RR, JR, GR, yR) {
-       return {
-         c: RR = RR << 8 | gR(GR, yR),
-         lc: JR += 8
-       }
-     }
- 
-     function SR(RR, JR, GR, yR, tR, uR, ZR, qR, iR) {
-       if (RR == JR) {
-         if (yR < 8) {
-           const RR = zR(GR, yR, tR, uR);
-           GR = RR.c, yR = RR.lc
-         }
-         let RR = GR >> (yR -= 8);
- ... (479 more removed lines; see GitHub link above)
+     };
```

#### 9. `bundles/bloxd.io/chunks/js/633.js` (Changed code · before: `L725-L726` → after: `L162-L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a15fd59e96c156f9d3eb5b7b91324b2a0a32a061c4bd237e03c0772e413f2813R162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a15fd59e96c156f9d3eb5b7b91324b2a0a32a061c4bd237e03c0772e413f2813) · [After (L162-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/633.js#L162-L163) · [Before (L725-L726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/633.js#L725-L726)

```diff
-       loadCubeData(RR, JR, GR, yR, tR) {
-         throw ".exr not supported in Cube."
+       loadCubeData() {
+         throw ".env not supported in Cube."
```

#### 10. `bundles/bloxd.io/chunks/js/633.js` (Changed code · before: `L729-L743` → after: `L166-L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a15fd59e96c156f9d3eb5b7b91324b2a0a32a061c4bd237e03c0772e413f2813R166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a15fd59e96c156f9d3eb5b7b91324b2a0a32a061c4bd237e03c0772e413f2813) · [After (L166-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/633.js#L166-L169) · [Before (L729-L743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/633.js#L729-L743)

```diff
-         const tR = new DataView(RR.buffer),
-           uR = {
-             value: 0
-           },
-           ZR = cR(tR, uR);
-         iJ(ZR, tR, uR, qJ.DefaultOutputType).then((RR => {
-           fJ(RR, ZR, tR, uR);
-           const yR = ZR.dataWindow.xMax - ZR.dataWindow.xMin + 1,
-             qR = ZR.dataWindow.yMax - ZR.dataWindow.yMin + 1;
-           GR(yR, qR, JR.generateMipMaps, !1, (() => {
-             const GR = JR.ke();
-             JR.format = ZR.format, JR.type = RR.textureType, JR.invertY = !1, JR._gammaSpace = !ZR.linearSpace, RR.byteArray && GR._uploadDataToTextureDirectly(JR, RR.byteArray, 0, 0, void 0, !0)
-           }))
-         })).catch((RR => {
-           yR.c.Error("Failed to load EXR texture: ", RR)
+         const Zr = new Uint8Array(rr.buffer, rr.byteOffset, rr.byteLength),
+           jr = Wr(Zr);
+         Qr(jr.width, jr.height, Sr.generateMipMaps, !1, (() => {
+           ar(Sr, Zr)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/634.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/634.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c0e7994ee028a8a5e743069a0bf1f02b20d3ed0fdf2be2ec85ec07504f103fb4)

#### 1. `bundles/bloxd.io/chunks/js/634.js` (Changed code · before: `L4-L6` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c0e7994ee028a8a5e743069a0bf1f02b20d3ed0fdf2be2ec85ec07504f103fb4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c0e7994ee028a8a5e743069a0bf1f02b20d3ed0fdf2be2ec85ec07504f103fb4) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/634.js#L4-L7) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/634.js#L4-L6)

```diff
-   54050: (RR, JR, GR) => {
-     GR.d(JR, {
-       b: () => ZR
+   54386: (rr, Sr, Qr) => {
+     Qr.r(Sr), Qr.d(Sr, {
+       ReadExrDataAsync: () => xS,
+       _ExrTextureLoader: () => pS
```

#### 2. `bundles/bloxd.io/chunks/js/634.js` (Changed code · before: `L8-L104` → after: `L9-L771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c0e7994ee028a8a5e743069a0bf1f02b20d3ed0fdf2be2ec85ec07504f103fb4R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c0e7994ee028a8a5e743069a0bf1f02b20d3ed0fdf2be2ec85ec07504f103fb4) · [After (L9-L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/634.js#L9-L771) · [Before (L8-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/634.js#L8-L104)

```diff
-     var yR = GR(41387);
-     const tR = "bumpVertex",
-       uR = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvec3 tbnNormal=normalize(normalUpdated);vec3 tbnTangent=normalize(tangentUpdated.xyz);vec3 tbnBitangent=cross(tbnNormal,tbnTangent)*tang … [truncated]
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
-     const ZR = {
-       name: tR,
-       shader: uR
-     }
-   },
-   53970: (RR, JR, GR) => {
-     GR.d(JR, {
-       d: () => ZR
-     });
-     var yR = GR(41387);
-     const tR = "bumpVertexDeclaration",
-       uR = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#endif\n";
- ... (81 more removed lines; see GitHub link above)
+     var Zr = Qr(40246),
+       Wr = Qr(38599),
+       ar = Qr(41922);
+     const jr = 4,
+       Ir = 4,
+       fr = 1,
+       Er = 2,
+       pr = 8,
+       xr = 65536,
+       mr = xr >> 3,
+       Nr = 14,
+       Ur = 65537,
+       tr = 1 << Nr,
+       hr = tr - 1,
+       zr = 59,
+       Yr = 63,
+ ... (747 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/635.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/635.js` (12 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-766dd1232ee6bdc71ac8177389e2df200ddcc34ae6dffb383173caf216df4c97)

#### 1. `bundles/bloxd.io/chunks/js/635.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-766dd1232ee6bdc71ac8177389e2df200ddcc34ae6dffb383173caf216df4c97R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-766dd1232ee6bdc71ac8177389e2df200ddcc34ae6dffb383173caf216df4c97) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/635.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/635.js#L4)

```diff
-   54027: (RR, JR, GR) => {
+   54536: (rr, Sr, Qr) => {
```

#### 2. `bundles/bloxd.io/chunks/js/635.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-766dd1232ee6bdc71ac8177389e2df200ddcc34ae6dffb383173caf216df4c97R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-766dd1232ee6bdc71ac8177389e2df200ddcc34ae6dffb383173caf216df4c97) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/635.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/635.js#L8-L11)

```diff
-     var yR = GR(41387);
-     const tR = "bakedVertexAnimation",
-       uR = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\n#define BVASNAME bakedVertexAnimationSettingsInstanced\n#else\n#define BVASNAME bakedVertexAnimationSettings\n#endif\nfloat VATStartFrame=BVASNAME.x;float VATEndFrame=BVASNAME.y;float VATOffsetFrame=BVASNAME. … [truncated]
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "bumpVertex",
+       ar = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvec3 tbnNormal=normalize(normalUpdated);vec3 tbnTangent=normalize(tangentUpdated.xyz);vec3 tbnBitangent=cross(tbnNormal,tbnTangent)*tang … [truncated]
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
```

#### 3. `bundles/bloxd.io/chunks/js/635.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-766dd1232ee6bdc71ac8177389e2df200ddcc34ae6dffb383173caf216df4c97R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-766dd1232ee6bdc71ac8177389e2df200ddcc34ae6dffb383173caf216df4c97) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/635.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/635.js#L17)

```diff
-   53941: (RR, JR, GR) => {
+   54457: (rr, Sr, Qr) => {
```

#### 4. `bundles/bloxd.io/chunks/js/635.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-766dd1232ee6bdc71ac8177389e2df200ddcc34ae6dffb383173caf216df4c97R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-766dd1232ee6bdc71ac8177389e2df200ddcc34ae6dffb383173caf216df4c97) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/635.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/635.js#L19)

```diff
-       b: () => ZR
+       d: () => jr
```

#### 5. `bundles/bloxd.io/chunks/js/635.js` (Changed code · before: `L21-L24` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-766dd1232ee6bdc71ac8177389e2df200ddcc34ae6dffb383173caf216df4c97R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-766dd1232ee6bdc71ac8177389e2df200ddcc34ae6dffb383173caf216df4c97) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/635.js#L21-L24) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/635.js#L21-L24)

```diff
-     var yR = GR(41387);
-     const tR = "bakedVertexAnimationDeclaration",
-       uR = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\nuniform float bakedVertexAnimationTime;\n#if !defined(WEBGL2) && !defined(WEBGPU)\nuniform vec2 bakedVertexAnimationTextureSizeInverted;\n#endif\nuniform vec4 bakedVertexAnimationSettings;uniform sampler2D bakedVertexAnimationTex … [truncated]
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "bumpVertexDeclaration",
+       ar = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#endif\n";
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
```

#### 6. `bundles/bloxd.io/chunks/js/635.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-766dd1232ee6bdc71ac8177389e2df200ddcc34ae6dffb383173caf216df4c97R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-766dd1232ee6bdc71ac8177389e2df200ddcc34ae6dffb383173caf216df4c97) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/635.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/635.js#L30)

```diff
-   53939: (RR, JR, GR) => {
+   54413: (rr, Sr, Qr) => {
```

#### 7. `bundles/bloxd.io/chunks/js/635.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-766dd1232ee6bdc71ac8177389e2df200ddcc34ae6dffb383173caf216df4c97R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-766dd1232ee6bdc71ac8177389e2df200ddcc34ae6dffb383173caf216df4c97) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/635.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/635.js#L32)

```diff
-       e: () => ZR
+       b: () => jr
```

#### 8. `bundles/bloxd.io/chunks/js/635.js` (Changed code · before: `L34-L37` → after: `L34-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-766dd1232ee6bdc71ac8177389e2df200ddcc34ae6dffb383173caf216df4c97R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-766dd1232ee6bdc71ac8177389e2df200ddcc34ae6dffb383173caf216df4c97) · [After (L34-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/635.js#L34-L38) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/635.js#L34-L37)

```diff
-     var yR = GR(41387);
-     const tR = "bonesDeclaration",
-       uR = "#if NUM_BONE_INFLUENCERS>0\nattribute vec4 matricesIndices;attribute vec4 matricesWeights;\n#if NUM_BONE_INFLUENCERS>4\nattribute vec4 matricesIndicesExtra;attribute vec4 matricesWeightsExtra;\n#endif\n#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#ifdef BONETEXTURE\nunifor … [truncated]
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     var Zr = Qr(41743);
+     Qr(54404), Qr(54408);
+     const Wr = "defaultUboDeclaration",
+       ar = "layout(std140,column_major) uniform;uniform Material\n{vec4 diffuseLeftColor;vec4 diffuseRightColor;vec4 opacityParts;vec4 reflectionLeftColor;vec4 reflectionRightColor;vec4 refractionLeftColor;vec4 refractionRightColor;vec4 emissiveLeftColor;vec4 emissiveRightColor;v … [truncated]
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
```

#### 9. `bundles/bloxd.io/chunks/js/635.js` (Changed code · before: `L43-L45` → after: `L44-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-766dd1232ee6bdc71ac8177389e2df200ddcc34ae6dffb383173caf216df4c97R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-766dd1232ee6bdc71ac8177389e2df200ddcc34ae6dffb383173caf216df4c97) · [After (L44-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/635.js#L44-L46) · [Before (L43-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/635.js#L43-L45)

```diff
-   54022: (RR, JR, GR) => {
-     GR.d(JR, {
-       e: () => ZR
+   54392: (rr, Sr, Qr) => {
+     Qr.r(Sr), Qr.d(Sr, {
+       defaultVertexShader: () => Jr
```

#### 10. `bundles/bloxd.io/chunks/js/635.js` (Changed code · before: `L47-L50` → after: `L48-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-766dd1232ee6bdc71ac8177389e2df200ddcc34ae6dffb383173caf216df4c97R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-766dd1232ee6bdc71ac8177389e2df200ddcc34ae6dffb383173caf216df4c97) · [After (L48-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/635.js#L48-L52) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/635.js#L47-L50)

```diff
-     var yR = GR(41387);
-     const tR = "bonesVertex",
-       uR = "#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#if NUM_BONE_INFLUENCERS>0\nmat4 influence;\n#ifdef BONETEXTURE\ninfluence=readMatrixFromRawSampler(boneSampler,matricesIndices[0])*matricesWeights[0];\n#if NUM_BONE_INFLUENCERS>1\ninfluence+=readMatrixFromRawSampler(boneSampler … [truncated]
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     var Zr = Qr(41743),
+       Wr = Qr(54398);
+     const ar = "defaultVertexDeclaration",
+       jr = "uniform mat4 viewProjection;\n#ifdef MULTIVIEW\nmat4 viewProjectionR;\n#endif \nuniform mat4 view;\n#ifdef DIFFUSE\nuniform mat4 diffuseMatrix;uniform vec2 vDiffuseInfos;\n#endif\n#ifdef AMBIENT\nuniform mat4 ambientMatrix;uniform vec2 vAmbientInfos;\n#endif\n#ifdef O … [truncated]
+     Zr.e.IncludesShadersStore[ar] || (Zr.e.IncludesShadersStore[ar] = jr);
```

#### 11. `bundles/bloxd.io/chunks/js/635.js` (Changed code · before: `L54-L63` → after: `L56-L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-766dd1232ee6bdc71ac8177389e2df200ddcc34ae6dffb383173caf216df4c97R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-766dd1232ee6bdc71ac8177389e2df200ddcc34ae6dffb383173caf216df4c97) · [After (L56-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/635.js#L56-L91) · [Before (L54-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/635.js#L54-L63)

```diff
-     }
-   },
-   54055: (RR, JR, GR) => {
-     GR.d(JR, {
-       c: () => ZR
-     });
-     var yR = GR(41387);
-     const tR = "clipPlaneVertex",
-       uR = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\ … [truncated]
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     };
+     var fr = Qr(54404),
+       Er = Qr(54408),
+       pr = Qr(54413),
+       xr = Qr(54418),
+       mr = Qr(54421),
+       Nr = Qr(54429),
+       Ur = Qr(54433),
+       tr = Qr(54439),
+       hr = Qr(54443),
+       zr = Qr(54446),
+       Yr = Qr(54450),
+       nr = Qr(54457),
+       er = Qr(54463),
+       Kr = Qr(54468),
+       yr = Qr(54475),
+ ... (20 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/635.js` (Changed code · before: `L67-L401` → after: `L95-L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-766dd1232ee6bdc71ac8177389e2df200ddcc34ae6dffb383173caf216df4c97R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-766dd1232ee6bdc71ac8177389e2df200ddcc34ae6dffb383173caf216df4c97) · [After (L95-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/635.js#L95-L101) · [Before (L67-L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/635.js#L67-L401)

```diff
-     }
-   },
-   53978: (RR, JR, GR) => {
-     GR.d(JR, {
-       b: () => ZR
-     });
-     var yR = GR(41387);
-     const tR = "clipPlaneVertexDeclaration",
-       uR = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuni … [truncated]
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
-     const ZR = {
-       name: tR,
-       shader: uR
-     }
-   },
-   53908: (RR, JR, GR) => {
- ... (319 more removed lines; see GitHub link above)
+     };
+     var cr = Qr(54563);
+     const Fr = "defaultVertexShader",
+       or = "#define CUSTOM_VERTEX_EXTENSION\n#include<__decl__defaultVertex>\n#define CUSTOM_VERTEX_BEGIN\nattribute vec3 position;\n#ifdef NORMAL\nattribute vec3 normal;\n#endif\n#ifdef TANGENT\nattribute vec4 tangent;\n#endif\n#ifdef UV1\nattribute vec2 uv;\n#endif\n#include<uv … [truncated]
+     Zr.e.ShadersStore[Fr] || (Zr.e.ShadersStore[Fr] = or);
+     const br = [Wr.b, Ir, fr.c, Er.d, pr.b, xr.d, mr.d, Nr.d, Ur.c, tr.e, hr.b, zr.c, Yr.c, nr.d, er.b, Kr.b, yr.e, Br.d, Tr.d, vr.d, Or.c, Lr.d, lr.d, Xr.d, Pr.b, Hr.e, qr.e, Rr.c, gr.b, Cr.b, Mr.c, Gr.e, kr.d, Ar.d, wr, cr.c];
+     for (const Dr of br) Zr.e.IncludesShadersStore[Dr.name] || (Zr.e.IncludesShadersStore[Dr.name] = Dr.shader);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/636.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/636.js` (34 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5499ef327aa1a75430195ac04ad6db946544f4f8cb6ed95d246fb015d32bad98)

#### 1. `bundles/bloxd.io/chunks/js/636.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5499ef327aa1a75430195ac04ad6db946544f4f8cb6ed95d246fb015d32bad98R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5499ef327aa1a75430195ac04ad6db946544f4f8cb6ed95d246fb015d32bad98) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/636.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/636.js#L4)

```diff
-   54078: (RR, JR, GR) => {
+   54519: (rr, Sr, Qr) => {
```

#### 2. `bundles/bloxd.io/chunks/js/636.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5499ef327aa1a75430195ac04ad6db946544f4f8cb6ed95d246fb015d32bad98R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5499ef327aa1a75430195ac04ad6db946544f4f8cb6ed95d246fb015d32bad98) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/636.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/636.js#L8-L11)

```diff
-     var yR = GR(41387);
-     const tR = "decalFragmentDeclaration",
-       uR = "#ifdef DECAL\nuniform vec4 vDecalInfos;\n#endif\n";
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "bakedVertexAnimation",
+       ar = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\n#define BVASNAME bakedVertexAnimationSettingsInstanced\n#else\n#define BVASNAME bakedVertexAnimationSettings\n#endif\nfloat VATStartFrame=BVASNAME.x;float VATEndFrame=BVASNAME.y;float VATOffsetFrame=BVASNAME. … [truncated]
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
```

#### 3. `bundles/bloxd.io/chunks/js/636.js` (Changed code · before: `L17` → after: `L17-L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5499ef327aa1a75430195ac04ad6db946544f4f8cb6ed95d246fb015d32bad98R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5499ef327aa1a75430195ac04ad6db946544f4f8cb6ed95d246fb015d32bad98) · [After (L17-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/636.js#L17-L95) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/636.js#L17)

```diff
-   54197: (RR, JR, GR) => {
+   54433: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       c: () => jr
+     });
+     var Zr = Qr(41743);
+     const Wr = "bakedVertexAnimationDeclaration",
+       ar = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\nuniform float bakedVertexAnimationTime;\n#if !defined(WEBGL2) && !defined(WEBGPU)\nuniform vec2 bakedVertexAnimationTextureSizeInverted;\n#endif\nuniform vec4 bakedVertexAnimationSettings;uniform sampler2D bakedVertexAnimationTex … [truncated]
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
+     const jr = {
+       name: Wr,
+       shader: ar
+     }
+   },
+   54429: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       d: () => jr
+ ... (63 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/636.js` (Changed code · before: `L21-L24` → after: `L99-L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5499ef327aa1a75430195ac04ad6db946544f4f8cb6ed95d246fb015d32bad98R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5499ef327aa1a75430195ac04ad6db946544f4f8cb6ed95d246fb015d32bad98) · [After (L99-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/636.js#L99-L102) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/636.js#L21-L24)

```diff
-     var yR = GR(41387);
-     const tR = "depthPrePass",
-       uR = "#ifdef DEPTHPREPASS\ngl_FragColor=vec4(0.,0.,0.,1.0);return;\n#endif\n";
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "fogVertex",
+       ar = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
```

#### 5. `bundles/bloxd.io/chunks/js/636.js` (Changed code · before: `L30` → after: `L108-L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5499ef327aa1a75430195ac04ad6db946544f4f8cb6ed95d246fb015d32bad98R108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5499ef327aa1a75430195ac04ad6db946544f4f8cb6ed95d246fb015d32bad98) · [After (L108-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/636.js#L108-L134) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/636.js#L30)

```diff
-   54104: (RR, JR, GR) => {
+   54468: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       b: () => jr
+     });
+     var Zr = Qr(41743);
+     const Wr = "fogVertexDeclaration",
+       ar = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
+     const jr = {
+       name: Wr,
+       shader: ar
+     }
+   },
+   54421: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       d: () => jr
+ ... (11 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/636.js` (Changed code · before: `L34-L37` → after: `L138-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5499ef327aa1a75430195ac04ad6db946544f4f8cb6ed95d246fb015d32bad98R138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5499ef327aa1a75430195ac04ad6db946544f4f8cb6ed95d246fb015d32bad98) · [After (L138-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/636.js#L138-L154) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/636.js#L34-L37)

```diff
-     var yR = GR(41387);
-     const tR = "lightFragmentDeclaration",
-       uR = "#ifdef LIGHT{X}\nuniform vec4 vLightData{X};uniform vec4 vLightDiffuse{X};\n#ifdef SPECULARTERM\nuniform vec4 vLightSpecular{X};\n#else\nvec4 vLightSpecular{X}=vec4(0.);\n#endif\n#ifdef SHADOW{X}\n#ifdef SHADOWCSM{X}\nuniform mat4 lightMatrix{X}[SHADOWCSMNUM_CASCADES{ … [truncated]
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "instancesDeclaration",
+       ar = "#ifdef INSTANCES\nattribute vec4 world0;attribute vec4 world1;attribute vec4 world2;attribute vec4 world3;\n#ifdef INSTANCESCOLOR\nattribute vec4 instanceColor;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform mat4 world;\n#endif\n#if defined(VELOC … [truncated]
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
+     const jr = {
+       name: Wr,
+       shader: ar
+     }
+   },
+   54509: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       d: () => jr
+     });
+     var Zr = Qr(41743);
+     const Wr = "instancesVertex",
+       ar = "#ifdef INSTANCES\nmat4 finalWorld=mat4(world0,world1,world2,world3);\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nmat4 finalPreviousWorld=mat4(previousWorld0,previousWorld1,\npreviousWorld2,previo … [truncated]
+ ... (1 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/636.js` (Changed code · before: `L43` → after: `L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5499ef327aa1a75430195ac04ad6db946544f4f8cb6ed95d246fb015d32bad98R160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5499ef327aa1a75430195ac04ad6db946544f4f8cb6ed95d246fb015d32bad98) · [After (L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/636.js#L160) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/636.js#L43)

```diff
-   54108: (RR, JR, GR) => {
+   54475: (rr, Sr, Qr) => {
```

#### 8. `bundles/bloxd.io/chunks/js/636.js` (Changed code · before: `L47-L50` → after: `L164-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5499ef327aa1a75430195ac04ad6db946544f4f8cb6ed95d246fb015d32bad98R164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5499ef327aa1a75430195ac04ad6db946544f4f8cb6ed95d246fb015d32bad98) · [After (L164-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/636.js#L164-L167) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/636.js#L47-L50)

```diff
-     var yR = GR(41387);
-     const tR = "lightUboDeclaration",
-       uR = "#ifdef LIGHT{X}\nuniform Light{X}\n{vec4 vLightData;vec4 vLightDiffuse;vec4 vLightSpecular;\n#ifdef SPOTLIGHT{X}\nvec4 vLightDirection;vec4 vLightFalloff;\n#elif defined(POINTLIGHT{X})\nvec4 vLightFalloff;\n#elif defined(HEMILIGHT{X})\nvec3 vLightGround;\n#elif define … [truncated]
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "lightVxFragmentDeclaration",
+       ar = "#ifdef LIGHT{X}\nuniform vec4 vLightData{X};uniform vec4 vLightDiffuse{X};\n#ifdef SPECULARTERM\nuniform vec4 vLightSpecular{X};\n#else\nvec4 vLightSpecular{X}=vec4(0.);\n#endif\n#ifdef SHADOW{X}\n#ifdef SHADOWCSM{X}\nuniform mat4 lightMatrix{X}[SHADOWCSMNUM_CASCADES{ … [truncated]
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
```

#### 9. `bundles/bloxd.io/chunks/js/636.js` (Changed code · before: `L56` → after: `L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5499ef327aa1a75430195ac04ad6db946544f4f8cb6ed95d246fb015d32bad98R173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5499ef327aa1a75430195ac04ad6db946544f4f8cb6ed95d246fb015d32bad98) · [After (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/636.js#L173) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/636.js#L56)

```diff
-   54112: (RR, JR, GR) => {
+   54480: (rr, Sr, Qr) => {
```

#### 10. `bundles/bloxd.io/chunks/js/636.js` (Changed code · before: `L60-L63` → after: `L177-L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5499ef327aa1a75430195ac04ad6db946544f4f8cb6ed95d246fb015d32bad98R177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5499ef327aa1a75430195ac04ad6db946544f4f8cb6ed95d246fb015d32bad98) · [After (L177-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/636.js#L177-L180) · [Before (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/636.js#L60-L63)

```diff
-     var yR = GR(41387);
-     const tR = "ltcHelperFunctions",
-       uR = "vec2 LTCUv( const in vec3 N,const in vec3 V,const in float roughness ) {const float LUTSIZE=64.0;const float LUTSCALE=( LUTSIZE-1.0 )/LUTSIZE;const float LUTBIAS=0.5/LUTSIZE;float dotNV=saturate( dot( N,V ) );vec2 uv=vec2( roughness,sqrt( 1.0-dotNV ) );uv=uv*LUTSCALE+ … [truncated]
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "lightVxUboDeclaration",
+       ar = "#ifdef LIGHT{X}\nuniform Light{X}\n{vec4 vLightData;vec4 vLightDiffuse;vec4 vLightSpecular;\n#ifdef SPOTLIGHT{X}\nvec4 vLightDirection;vec4 vLightFalloff;\n#elif defined(POINTLIGHT{X})\nvec4 vLightFalloff;\n#elif defined(HEMILIGHT{X})\nvec3 vLightGround;\n#elif define … [truncated]
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
```

#### 11. `bundles/bloxd.io/chunks/js/636.js` (Changed code · before: `L69` → after: `L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5499ef327aa1a75430195ac04ad6db946544f4f8cb6ed95d246fb015d32bad98R186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5499ef327aa1a75430195ac04ad6db946544f4f8cb6ed95d246fb015d32bad98) · [After (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/636.js#L186) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/636.js#L69)

```diff
-   53954: (RR, JR, GR) => {
+   54498: (rr, Sr, Qr) => {
```

#### 12. `bundles/bloxd.io/chunks/js/636.js` (Changed code · before: `L71` → after: `L188-L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5499ef327aa1a75430195ac04ad6db946544f4f8cb6ed95d246fb015d32bad98R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5499ef327aa1a75430195ac04ad6db946544f4f8cb6ed95d246fb015d32bad98) · [After (L188-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/636.js#L188-L214) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/636.js#L71)

```diff
-       b: () => ZR
+       c: () => jr
+     });
+     var Zr = Qr(41743);
+     const Wr = "logDepthDeclaration",
+       ar = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
+     const jr = {
+       name: Wr,
+       shader: ar
+     }
+   },
+   54563: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       c: () => jr
+     });
+     var Zr = Qr(41743);
+ ... (11 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/636.js` (Changed code · before: `L73` → after: `L216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5499ef327aa1a75430195ac04ad6db946544f4f8cb6ed95d246fb015d32bad98R216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5499ef327aa1a75430195ac04ad6db946544f4f8cb6ed95d246fb015d32bad98) · [After (L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/636.js#L216) · [Before (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/636.js#L73)

```diff
-     var yR = GR(41387);
+     var Zr = Qr(41743);
```

#### 14. `bundles/bloxd.io/chunks/js/636.js` (Changed code · before: `L76` → after: `L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5499ef327aa1a75430195ac04ad6db946544f4f8cb6ed95d246fb015d32bad98R219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5499ef327aa1a75430195ac04ad6db946544f4f8cb6ed95d246fb015d32bad98) · [After (L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/636.js#L219) · [Before (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/636.js#L76)

```diff
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
```

#### 15. `bundles/bloxd.io/chunks/js/636.js` (Changed code · before: `L82` → after: `L225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5499ef327aa1a75430195ac04ad6db946544f4f8cb6ed95d246fb015d32bad98R225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5499ef327aa1a75430195ac04ad6db946544f4f8cb6ed95d246fb015d32bad98) · [After (L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/636.js#L225) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/636.js#L82)

```diff
-   53919: (RR, JR, GR) => {
+   54408: (rr, Sr, Qr) => {
```

#### 16. `bundles/bloxd.io/chunks/js/636.js` (Changed code · before: `L86` → after: `L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5499ef327aa1a75430195ac04ad6db946544f4f8cb6ed95d246fb015d32bad98R229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5499ef327aa1a75430195ac04ad6db946544f4f8cb6ed95d246fb015d32bad98) · [After (L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/636.js#L229) · [Before (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/636.js#L86)

```diff
-     var yR = GR(41387);
+     var Zr = Qr(41743);
```

#### 17. `bundles/bloxd.io/chunks/js/636.js` (Changed code · before: `L89` → after: `L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5499ef327aa1a75430195ac04ad6db946544f4f8cb6ed95d246fb015d32bad98R232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5499ef327aa1a75430195ac04ad6db946544f4f8cb6ed95d246fb015d32bad98) · [After (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/636.js#L232) · [Before (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/636.js#L89)

```diff
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
```

#### 18. `bundles/bloxd.io/chunks/js/636.js` (Changed code · before: `L95` → after: `L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5499ef327aa1a75430195ac04ad6db946544f4f8cb6ed95d246fb015d32bad98R238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5499ef327aa1a75430195ac04ad6db946544f4f8cb6ed95d246fb015d32bad98) · [After (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/636.js#L238) · [Before (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/636.js#L95)

```diff
-   54098: (RR, JR, GR) => {
+   54503: (rr, Sr, Qr) => {
```

#### 19. `bundles/bloxd.io/chunks/js/636.js` (Changed code · before: `L97` → after: `L240-L253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5499ef327aa1a75430195ac04ad6db946544f4f8cb6ed95d246fb015d32bad98R240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5499ef327aa1a75430195ac04ad6db946544f4f8cb6ed95d246fb015d32bad98) · [After (L240-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/636.js#L240-L253) · [Before (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/636.js#L97)

```diff
-       b: () => ZR
+       d: () => jr
+     });
+     var Zr = Qr(41743);
+     const Wr = "morphTargetsVertex",
+       ar = "#ifdef MORPHTARGETS\n#ifdef MORPHTARGETS_TEXTURE\n#if {X}==0\nfor (int i=0; i<NUM_MORPH_INFLUENCERS; i++) {if (float(i)>=morphTargetCount) break;vertexID=float(gl_VertexID)*morphTargetTextureInfo.x;\n#ifdef MORPHTARGETS_POSITION\npositionUpdated+=(readVector3FromRawSa … [truncated]
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
+     const jr = {
+       name: Wr,
+       shader: ar
+     }
+   },
+   54492: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       d: () => jr
```

#### 20. `bundles/bloxd.io/chunks/js/636.js` (Changed code · before: `L99-L102` → after: `L255-L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5499ef327aa1a75430195ac04ad6db946544f4f8cb6ed95d246fb015d32bad98R255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5499ef327aa1a75430195ac04ad6db946544f4f8cb6ed95d246fb015d32bad98) · [After (L255-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/636.js#L255-L258) · [Before (L99-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/636.js#L99-L102)

```diff
-     var yR = GR(41387);
-     const tR = "oitDeclaration",
-       uR = "#ifdef ORDER_INDEPENDENT_TRANSPARENCY\n#extension GL_EXT_draw_buffers : require\nlayout(location=0) out vec2 depth; \nlayout(location=1) out vec4 frontColor;layout(location=2) out vec4 backColor;\n#define MAX_DEPTH 99999.0\nhighp vec4 gl_FragColor;uniform sampler2D oi … [truncated]
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "morphTargetsVertexDeclaration",
+       ar = "#ifdef MORPHTARGETS\n#ifndef MORPHTARGETS_TEXTURE\n#ifdef MORPHTARGETS_POSITION\nattribute vec3 position{X};\n#endif\n#ifdef MORPHTARGETS_NORMAL\nattribute vec3 normal{X};\n#endif\n#ifdef MORPHTARGETS_TANGENT\nattribute vec3 tangent{X};\n#endif\n#ifdef MORPHTARGETS_UV … [truncated]
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
```

#### 21. `bundles/bloxd.io/chunks/js/636.js` (Changed code · before: `L108` → after: `L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5499ef327aa1a75430195ac04ad6db946544f4f8cb6ed95d246fb015d32bad98R264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5499ef327aa1a75430195ac04ad6db946544f4f8cb6ed95d246fb015d32bad98) · [After (L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/636.js#L264) · [Before (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/636.js#L108)

```diff
-   54219: (RR, JR, GR) => {
+   54500: (rr, Sr, Qr) => {
```

#### 22. `bundles/bloxd.io/chunks/js/636.js` (Changed code · before: `L112-L115` → after: `L268-L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5499ef327aa1a75430195ac04ad6db946544f4f8cb6ed95d246fb015d32bad98R268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5499ef327aa1a75430195ac04ad6db946544f4f8cb6ed95d246fb015d32bad98) · [After (L268-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/636.js#L268-L271) · [Before (L112-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/636.js#L112-L115)

```diff
-     var yR = GR(41387);
-     const tR = "oitFragment",
-       uR = "#ifdef ORDER_INDEPENDENT_TRANSPARENCY\nfloat fragDepth=gl_FragCoord.z; \n#ifdef ORDER_INDEPENDENT_TRANSPARENCY_16BITS\nuint halfFloat=packHalf2x16(vec2(fragDepth));vec2 full=unpackHalf2x16(halfFloat);fragDepth=full.x;\n#endif\nivec2 fragCoord=ivec2(gl_FragCoord.xy);ve … [truncated]
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "morphTargetsVertexGlobal",
+       ar = "#ifdef MORPHTARGETS\n#ifdef MORPHTARGETS_TEXTURE\nfloat vertexID;\n#endif\n#endif\n";
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
```

#### 23. `bundles/bloxd.io/chunks/js/636.js` (Changed code · before: `L121` → after: `L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5499ef327aa1a75430195ac04ad6db946544f4f8cb6ed95d246fb015d32bad98R277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5499ef327aa1a75430195ac04ad6db946544f4f8cb6ed95d246fb015d32bad98) · [After (L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/636.js#L277) · [Before (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/636.js#L121)

```diff
-   54134: (RR, JR, GR) => {
+   54485: (rr, Sr, Qr) => {
```

#### 24. `bundles/bloxd.io/chunks/js/636.js` (Changed code · before: `L125-L128` → after: `L281-L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5499ef327aa1a75430195ac04ad6db946544f4f8cb6ed95d246fb015d32bad98R281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5499ef327aa1a75430195ac04ad6db946544f4f8cb6ed95d246fb015d32bad98) · [After (L281-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/636.js#L281-L284) · [Before (L125-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/636.js#L125-L128)

```diff
-     var yR = GR(41387);
-     const tR = "reflectionFunction",
-       uR = "vec3 computeFixedEquirectangularCoords(vec4 worldPos,vec3 worldNormal,vec3 direction)\n{float lon=atan(direction.z,direction.x);float lat=acos(direction.y);vec2 sphereCoords=vec2(lon,lat)*RECIPROCAL_PI2*2.0;float s=sphereCoords.x*0.5+0.5;float t=sphereCoords.y;return  … [truncated]
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "morphTargetsVertexGlobalDeclaration",
+       ar = "#ifdef MORPHTARGETS\nuniform float morphTargetInfluences[NUM_MORPH_INFLUENCERS];\n#ifdef MORPHTARGETS_TEXTURE \nuniform float morphTargetTextureIndices[NUM_MORPH_INFLUENCERS];uniform vec3 morphTargetTextureInfo;uniform highp sampler2DArray morphTargets;vec3 readVector … [truncated]
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
```

#### 25. `bundles/bloxd.io/chunks/js/636.js` (Changed code · before: `L134` → after: `L290-L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5499ef327aa1a75430195ac04ad6db946544f4f8cb6ed95d246fb015d32bad98R290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5499ef327aa1a75430195ac04ad6db946544f4f8cb6ed95d246fb015d32bad98) · [After (L290-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/636.js#L290-L316) · [Before (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/636.js#L134)

```diff
-   54132: (RR, JR, GR) => {
+   54526: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       e: () => jr
+     });
+     var Zr = Qr(41743);
+     const Wr = "prePassVertex",
+       ar = "#ifdef PREPASS_DEPTH\nvViewPos=(view*worldPos).rgb;\n#endif\n#ifdef PREPASS_NORMALIZED_VIEW_DEPTH\nvNormViewDepth=((view*worldPos).z-cameraInfo.x)/(cameraInfo.y-cameraInfo.x);\n#endif\n#ifdef PREPASS_LOCAL_POSITION\nvPosition=positionUpdated.xyz;\n#endif\n#if (defined … [truncated]
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
+     const jr = {
+       name: Wr,
+       shader: ar
+     }
+   },
+   54443: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       b: () => jr
+ ... (11 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/636.js` (Changed code · before: `L138-L141` → after: `L320-L323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5499ef327aa1a75430195ac04ad6db946544f4f8cb6ed95d246fb015d32bad98R320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5499ef327aa1a75430195ac04ad6db946544f4f8cb6ed95d246fb015d32bad98) · [After (L320-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/636.js#L320-L323) · [Before (L138-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/636.js#L138-L141)

```diff
-     var yR = GR(41387);
-     const tR = "samplerFragmentDeclaration",
-       uR = "#ifdef _DEFINENAME_\n#if _DEFINENAME_DIRECTUV==1\n#define v_VARYINGNAME_UV vMainUV1\n#elif _DEFINENAME_DIRECTUV==2\n#define v_VARYINGNAME_UV vMainUV2\n#elif _DEFINENAME_DIRECTUV==3\n#define v_VARYINGNAME_UV vMainUV3\n#elif _DEFINENAME_DIRECTUV==4\n#define v_VARYINGNAM … [truncated]
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "samplerVertexDeclaration",
+       ar = "#if defined(_DEFINENAME_) && _DEFINENAME_DIRECTUV==0\nvarying vec2 v_VARYINGNAME_UV;\n#endif\n";
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
```

#### 27. `bundles/bloxd.io/chunks/js/636.js` (Changed code · before: `L147` → after: `L329-L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5499ef327aa1a75430195ac04ad6db946544f4f8cb6ed95d246fb015d32bad98R329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5499ef327aa1a75430195ac04ad6db946544f4f8cb6ed95d246fb015d32bad98) · [After (L329-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/636.js#L329-L342) · [Before (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/636.js#L147)

```diff
-   53911: (RR, JR, GR) => {
+   54531: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       b: () => jr
+     });
+     var Zr = Qr(41743);
+     const Wr = "samplerVertexImplementation",
+       ar = "#if defined(_DEFINENAME_) && _DEFINENAME_DIRECTUV==0\nif (v_INFONAME_==0.)\n{v_VARYINGNAME_UV=vec2(_MATRIXNAME_Matrix*vec4(uvUpdated,1.0,0.0));}\n#ifdef UV2\nelse if (v_INFONAME_==1.)\n{v_VARYINGNAME_UV=vec2(_MATRIXNAME_Matrix*vec4(uv2Updated,1.0,0.0));}\n#endif\n#ifd … [truncated]
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
+     const jr = {
+       name: Wr,
+       shader: ar
+     }
+   },
+   54404: (rr, Sr, Qr) => {
```

#### 28. `bundles/bloxd.io/chunks/js/636.js` (Changed code · before: `L151` → after: `L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5499ef327aa1a75430195ac04ad6db946544f4f8cb6ed95d246fb015d32bad98R346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5499ef327aa1a75430195ac04ad6db946544f4f8cb6ed95d246fb015d32bad98) · [After (L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/636.js#L346) · [Before (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/636.js#L151)

```diff
-     var yR = GR(41387);
+     var Zr = Qr(41743);
```

#### 29. `bundles/bloxd.io/chunks/js/636.js` (Changed code · before: `L154` → after: `L349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5499ef327aa1a75430195ac04ad6db946544f4f8cb6ed95d246fb015d32bad98R349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5499ef327aa1a75430195ac04ad6db946544f4f8cb6ed95d246fb015d32bad98) · [After (L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/636.js#L349) · [Before (L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/636.js#L154)

```diff
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
```

#### 30. `bundles/bloxd.io/chunks/js/636.js` (Changed code · before: `L160` → after: `L355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5499ef327aa1a75430195ac04ad6db946544f4f8cb6ed95d246fb015d32bad98R355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5499ef327aa1a75430195ac04ad6db946544f4f8cb6ed95d246fb015d32bad98) · [After (L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/636.js#L355) · [Before (L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/636.js#L160)

```diff
-   54124: (RR, JR, GR) => {
+   54551: (rr, Sr, Qr) => {
```

#### 31. `bundles/bloxd.io/chunks/js/636.js` (Changed code · before: `L162` → after: `L357-L370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5499ef327aa1a75430195ac04ad6db946544f4f8cb6ed95d246fb015d32bad98R357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5499ef327aa1a75430195ac04ad6db946544f4f8cb6ed95d246fb015d32bad98) · [After (L357-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/636.js#L357-L370) · [Before (L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/636.js#L162)

```diff
-       b: () => ZR
+       d: () => jr
+     });
+     var Zr = Qr(41743);
+     const Wr = "shadowsVertex",
+       ar = "#ifdef SHADOWS\n#if defined(SHADOWCSM{X})\nvPositionFromCamera{X}=view*worldPos;for (int i=0; i<SHADOWCSMNUM_CASCADES{X}; i++) {vPositionFromLight{X}[i]=lightMatrix{X}[i]*worldPos;\n#ifdef USE_REVERSE_DEPTHBUFFER\nvDepthMetric{X}[i]=(-vPositionFromLight{X}[i].z+light{ … [truncated]
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
+     const jr = {
+       name: Wr,
+       shader: ar
+     }
+   },
+   54418: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       d: () => jr
```

#### 32. `bundles/bloxd.io/chunks/js/636.js` (Changed code · before: `L164-L167` → after: `L372-L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5499ef327aa1a75430195ac04ad6db946544f4f8cb6ed95d246fb015d32bad98R372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5499ef327aa1a75430195ac04ad6db946544f4f8cb6ed95d246fb015d32bad98) · [After (L372-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/636.js#L372-L375) · [Before (L164-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/636.js#L164-L167)

```diff
-     var yR = GR(41387);
-     const tR = "shadowsFragmentFunctions",
-       uR = "#ifdef SHADOWS\n#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)\n#define TEXTUREFUNC(s,c,l) texture2DLodEXT(s,c,l)\n#else\n#define TEXTUREFUNC(s,c,b) texture2D(s,c,b)\n#endif\n#ifndef SHADOWFLOAT\nfloat unpack(vec4 color)\n{const vec4 bit_shift=vec4(1.0/(255 … [truncated]
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "uvAttributeDeclaration",
+       ar = "#ifdef UV{X}\nattribute vec2 uv{X};\n#endif\n";
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
```

#### 33. `bundles/bloxd.io/chunks/js/636.js` (Changed code · before: `L173` → after: `L381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5499ef327aa1a75430195ac04ad6db946544f4f8cb6ed95d246fb015d32bad98R381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5499ef327aa1a75430195ac04ad6db946544f4f8cb6ed95d246fb015d32bad98) · [After (L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/636.js#L381) · [Before (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/636.js#L173)

```diff
-   54152: (RR, JR, GR) => {
+   54529: (rr, Sr, Qr) => {
```

#### 34. `bundles/bloxd.io/chunks/js/636.js` (Changed code · before: `L177-L180` → after: `L385-L401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5499ef327aa1a75430195ac04ad6db946544f4f8cb6ed95d246fb015d32bad98R385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5499ef327aa1a75430195ac04ad6db946544f4f8cb6ed95d246fb015d32bad98) · [After (L385-L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/636.js#L385-L401) · [Before (L177-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/636.js#L177-L180)

```diff
-     var yR = GR(41387);
-     const tR = "textureRepetitionFunctions",
-       uR = "#if TEXTURE_REPETITION_MODE>0\nvec4 _texRepHash4(vec2 p) {return fract(sin(vec4(\n1.0+dot(p,vec2(37.0,17.0)),\n2.0+dot(p,vec2(11.0,47.0)),\n3.0+dot(p,vec2(41.0,29.0)),\n4.0+dot(p,vec2(23.0,31.0))\n))*103.0);}\n#endif\n#if TEXTURE_REPETITION_MODE==1\nvec4 _texRepSample … [truncated]
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "uvVariableDeclaration",
+       ar = "#if !defined(UV{X}) && defined(MAINUV{X})\nvec2 uv{X}=vec2(0.,0.);\n#endif\n#ifdef MAINUV{X}\nvMainUV{X}=uv{X};\n#endif\n";
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
+     const jr = {
+       name: Wr,
+       shader: ar
+     }
+   },
+   54560: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       d: () => jr
+     });
+     var Zr = Qr(41743);
+     const Wr = "vertexColorMixing",
+       ar = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvColor=vec4(1.0);\n#ifdef VERTEXCOLOR\n#ifdef VERTEXALPHA\nvColor*=colorUpdated;\n#else\nvColor.rgb*=colorUpdated.rgb;\n#endif\n#endif\n#ifdef INSTANCESCOLOR\nvColor*=instanceColor;\n#endif\n#e … [truncated]
+ ... (1 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/637.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/637.js` (36 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544)

#### 1. `bundles/bloxd.io/chunks/js/637.js` (Changed code · before: `L4-L17` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/637.js#L4) · [Before (L4-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/637.js#L4-L17)

```diff
-   54186: (RR, JR, GR) => {
-     GR.d(JR, {
-       e: () => ZR
-     });
-     var yR = GR(41387);
-     const tR = "bumpFragment",
-       uR = "vec2 uvOffset=vec2(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nfloat normalScale=1.0;\n#elif defined(BUMP)\nfloat normalScale=vBumpInfos.y;\n#else\nfloat normalScale=1.0;\n#endif\n#if defined(TANGENT) && defined(NORMAL)\ … [truncated]
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
-     const ZR = {
-       name: tR,
-       shader: uR
-     }
-   },
-   54169: (RR, JR, GR) => {
+   54572: (rr, Sr, Qr) => {
```

#### 2. `bundles/bloxd.io/chunks/js/637.js` (Changed code · before: `L21-L38` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/637.js#L8-L11) · [Before (L21-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/637.js#L21-L38)

```diff
-     var yR = GR(41387);
-     GR(54132);
-     const tR = "bumpFragmentFunctions",
-       uR = "#if defined(BUMP)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump,_SAMPLERNAME_,bump)\n#endif\n#if defined(DETAIL)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_SAMPLERNAME_,detail)\n#endif\n#if defined(BUMP … [truncated]
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
-     const ZR = {
-       name: tR,
-       shader: uR
-     }
-   },
-   54161: (RR, JR, GR) => {
-     GR.d(JR, {
-       c: () => ZR
-     });
-     var yR = GR(41387);
-     const tR = "bumpFragmentMainFunctions",
- ... (2 more removed lines; see GitHub link above)
+     var Zr = Qr(41743);
+     const Wr = "decalFragmentDeclaration",
+       ar = "#ifdef DECAL\nuniform vec4 vDecalInfos;\n#endif\n";
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
```

#### 3. `bundles/bloxd.io/chunks/js/637.js` (Changed code · before: `L44` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/637.js#L17) · [Before (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/637.js#L44)

```diff
-   54180: (RR, JR, GR) => {
+   54681: (rr, Sr, Qr) => {
```

#### 4. `bundles/bloxd.io/chunks/js/637.js` (Changed code · before: `L46-L85` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/637.js#L19) · [Before (L46-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/637.js#L46-L85)

```diff
-       d: () => ZR
-     });
-     var yR = GR(41387);
-     const tR = "clipPlaneFragment",
-       uR = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistan … [truncated]
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
-     const ZR = {
-       name: tR,
-       shader: uR
-     }
-   },
-   54173: (RR, JR, GR) => {
-     GR.d(JR, {
-       b: () => ZR
-     });
-     var yR = GR(41387);
- ... (24 more removed lines; see GitHub link above)
+       e: () => jr
```

#### 5. `bundles/bloxd.io/chunks/js/637.js` (Changed code · before: `L87-L90` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/637.js#L21-L24) · [Before (L87-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/637.js#L87-L90)

```diff
-     var yR = GR(41387);
-     const tR = "objectIdFunctions",
-       uR = "highp vec4 encodeObjectId(highp float objectId) {\n#ifdef PREPASS_OBJECT_ID_R8\nreturn vec4(objectId/255.0,0.0,0.0,1.0);\n#else\nhighp float id=floor(objectId);highp vec3 encodedId=vec3(\nfloor(mod(id,16777216.0)/65536.0),\nfloor(mod(id,65536.0)/256.0),\nmod(id,256.0) … [truncated]
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "depthPrePass",
+       ar = "#ifdef DEPTHPREPASS\ngl_FragColor=vec4(0.,0.,0.,1.0);return;\n#endif\n";
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
```

#### 6. `bundles/bloxd.io/chunks/js/637.js` (Changed code · before: `L96` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/637.js#L30) · [Before (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/637.js#L96)

```diff
-   64639: (RR, JR, GR) => {
+   54596: (rr, Sr, Qr) => {
```

#### 7. `bundles/bloxd.io/chunks/js/637.js` (Changed code · before: `L100-L103` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/637.js#L34-L37) · [Before (L100-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/637.js#L100-L103)

```diff
-     var yR = GR(41387);
-     const tR = "openpbrDielectricReflectance",
-       uR = "struct ReflectanceParams\n{float F0;float F90;vec3 coloredF0;vec3 coloredF90;};\n#define pbr_inline\nReflectanceParams dielectricReflectance(\nin float insideIOR,in float outsideIOR,in vec3 specularColor,in float specularWeight\n)\n{ReflectanceParams outParams;float d … [truncated]
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "lightFragmentDeclaration",
+       ar = "#ifdef LIGHT{X}\nuniform vec4 vLightData{X};uniform vec4 vLightDiffuse{X};\n#ifdef SPECULARTERM\nuniform vec4 vLightSpecular{X};\n#else\nvec4 vLightSpecular{X}=vec4(0.);\n#endif\n#ifdef SHADOW{X}\n#ifdef SHADOWCSM{X}\nuniform mat4 lightMatrix{X}[SHADOWCSMNUM_CASCADES{ … [truncated]
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
```

#### 8. `bundles/bloxd.io/chunks/js/637.js` (Changed code · before: `L109` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/637.js#L43) · [Before (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/637.js#L109)

```diff
-   64647: (RR, JR, GR) => {
+   54603: (rr, Sr, Qr) => {
```

#### 9. `bundles/bloxd.io/chunks/js/637.js` (Changed code · before: `L113-L116` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/637.js#L47-L50) · [Before (L113-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/637.js#L113-L116)

```diff
-     var yR = GR(41387);
-     const tR = "openpbrGeometryInfo",
-       uR = "struct geometryInfoOutParams\n{float NdotV;float NdotVUnclamped;vec3 environmentBrdf;float horizonOcclusion;};struct geometryInfoAnisoOutParams\n{float NdotV;float NdotVUnclamped;vec3 environmentBrdf;float horizonOcclusion;float anisotropy;vec3 anisotropicTangent;vec3 … [truncated]
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "lightUboDeclaration",
+       ar = "#ifdef LIGHT{X}\nuniform Light{X}\n{vec4 vLightData;vec4 vLightDiffuse;vec4 vLightSpecular;\n#ifdef SPOTLIGHT{X}\nvec4 vLightDirection;vec4 vLightFalloff;\n#elif defined(POINTLIGHT{X})\nvec4 vLightFalloff;\n#elif defined(HEMILIGHT{X})\nvec3 vLightGround;\n#elif define … [truncated]
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
```

#### 10. `bundles/bloxd.io/chunks/js/637.js` (Changed code · before: `L122` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/637.js#L56) · [Before (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/637.js#L122)

```diff
-   64651: (RR, JR, GR) => {
+   54606: (rr, Sr, Qr) => {
```

#### 11. `bundles/bloxd.io/chunks/js/637.js` (Changed code · before: `L126-L129` → after: `L60-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544) · [After (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/637.js#L60-L63) · [Before (L126-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/637.js#L126-L129)

```diff
-     var yR = GR(41387);
-     const tR = "openpbrIblFunctions",
-       uR = "#ifdef REFLECTION\nvec3 sampleIrradiance(\nin vec3 surfaceNormal\n#if defined(NORMAL) && defined(USESPHERICALINVERTEX)\n,in vec3 vEnvironmentIrradianceSH\n#endif\n#if (defined(USESPHERICALFROMREFLECTIONMAP) && (!defined(NORMAL) || !defined(USESPHERICALINVERTEX))) || ( … [truncated]
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
+     var Zr = Qr(41743);
+     const Wr = "ltcHelperFunctions",
+       ar = "vec2 LTCUv( const in vec3 N,const in vec3 V,const in float roughness ) {const float LUTSIZE=64.0;const float LUTSCALE=( LUTSIZE-1.0 )/LUTSIZE;const float LUTBIAS=0.5/LUTSIZE;float dotNV=saturate( dot( N,V ) );vec2 uv=vec2( roughness,sqrt( 1.0-dotNV ) );uv=uv*LUTSCALE+ … [truncated]
+     Zr.e.IncludesShadersStore[Wr] || (Zr.e.IncludesShadersStore[Wr] = ar);
```

#### 12. `bundles/bloxd.io/chunks/js/637.js` (Changed code · before: `L135-L148` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/637.js#L69) · [Before (L135-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/637.js#L135-L148)

```diff
-   64665: (RR, JR, GR) => {
-     GR.d(JR, {
-       e: () => ZR
-     });
-     var yR = GR(41387);
-     const tR = "openpbrSubsurfaceLayerData",
-       uR = "float subsurface_weight=vSubsurfaceWeight;vec3 subsurface_color=vSubsurfaceColor.rgb;float subsurface_radius=vSubsurfaceRadius;vec3 subsurface_radius_scale=vSubsurfaceRadiusScale;float subsurface_scatter_anisotropy=clamp(vSubsurfaceScatterAnisotropy,-0.9999,0.9999);\n … [truncated]
-     yR.b.IncludesShadersStore[tR] || (yR.b.IncludesShadersStore[tR] = uR);
-     const ZR = {
-       name: tR,
-       shader: uR
-     }
-   },
-   64657: (RR, JR, GR) => {
+   54446: (rr, Sr, Qr) => {
```
