# Changed — Bundle Modifications Report (Part 027 / 067)

- **Updated at**: `2026-11-20T22:47 JST`
- **Part**: `27 / 67` (**284** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 026](part-026.md) · [Part 028 →](part-028.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/287.js` (7rj44.0704ff61 → qepqb8.0352199c · continued)

- **File**: `bundles/bloxd.io/chunks/js/287.js` (98 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1)

#### 49. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6332` → after: `L2149-L2171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2149-L2171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L2149-L2171) · [Before (L6332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L6332)

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

#### 50. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6334-L6341` → after: `L2173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L2173) · [Before (L6334-L6341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L6334-L6341)

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

#### 51. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6343` → after: `L2175-L2192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2175-L2192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L2175-L2192) · [Before (L6343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L6343)

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

#### 52. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6345-L6348` → after: `L2194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L2194) · [Before (L6345-L6348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L6345-L6348)

```diff
- declare var Object: ObjectConstructor;
- 
- declare var Function: FunctionConstructor;
- 
+ addUiRequestPopup(playerId: PlayerId, requestText: string): UiRequestId | null
```

#### 53. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6350` → after: `L2196-L2200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2196-L2200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L2196-L2200) · [Before (L6350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L6350)

```diff
-  * Allows manipulation and formatting of text strings and determination and location of substrings within strings.
+  * Matchmake a player into a sub-variation of the current custom game.
+  * Pass \`"default"\` for the default variation.
+  *
+  * @param playerId The player to matchmake
+  * @param varname Sub-variation name (\`[A-Za-z0-9_-]\`, 1-32 chars), or \`"default"\`
```

#### 54. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6352-L6365` → after: `L2202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L2202) · [Before (L6352-L6365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L6352-L6365)

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

#### 55. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6367` → after: `L2204-L2205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2204-L2205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L2204-L2205) · [Before (L6367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L6367)

```diff
-  * An intrinsic object that provides functions to convert JavaScript values to and from the JavaScript Object Notation (JSON) format.
+  * Get the current sub-variation name.
+  * Returns \`"default"\` when there is no named sub-variation.
```

#### 56. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6369-L6390` → after: `L2207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L2207) · [Before (L6369-L6390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L6369-L6390)

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

#### 57. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6392-L6393` → after: `L2209-L2212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2209-L2212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L2209-L2212) · [Before (L6392-L6393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L6392-L6393)

```diff
-  * Evaluates JavaScript code and executes it.
-  * @param x A String value that contains valid JavaScript code.
+  * Whether the player joined with this custom game's texture pack applied. False if they skipped applying it
+  * (kicking them shows the prompt again when they rejoin).
+  * Only published custom games prompt for their pack, so anywhere else this says so and returns true.
+  * @param playerId
```

#### 58. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6395-L6683` → after: `L2214-L2218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2214-L2218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L2214-L2218) · [Before (L6395-L6683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L6395-L6683)

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
- ... (273 more removed lines; see GitHub link above)
+ isUsingCustomGameTexturePack(playerId: PlayerId): boolean
+ /**
+  * Log a message to chat.
+ */
+ log(message: any): void
```

#### 59. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6685-L6695` → after: `L2220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L2220) · [Before (L6685-L6695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L6685-L6695)

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

#### 60. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L6697-L7197` → after: `L2222-L2471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2222-L2471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L2222-L2471) · [Before (L6697-L7197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L6697-L7197)

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
- ... (485 more removed lines; see GitHub link above)
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
+ ... (234 more added lines; see GitHub link above)
```

#### 61. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7199` → after: `L2473-L2475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2473-L2475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L2473-L2475) · [Before (L7199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L7199)

```diff
- 	 * Called when a player's thrown projectile hits the terrain
+ 	 * The entities and positions to keep in view. Entities the player is too far from to see, or that have left, are
+ 	 * left out. With none to frame, an empty list too, the camera holds where and how far it last framed, at this
+ 	 * camera's own angle, or frames the player if it has framed nothing yet.
```

#### 62. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7201-L7202` → after: `L2477-L2487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2477-L2487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L2477-L2487) · [Before (L7201-L7202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L7201-L7202)

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

#### 63. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7204-L7208` → after: `L2489-L2490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2489-L2490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L2489-L2490) · [Before (L7204-L7208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L7204-L7208)

```diff
- 	 * Set client option \`touchscreenActionButton\` to take effect
- 	 * Called when a player presses the touchscreen action button
- 	 * Called for both touchDown and touchUp
- 	 * @param playerId - The id of the player pressing the touchscreen action button
- 	 * @param touchDown - Whether the touchscreen action button was pressed or released
+ 	 * Ease towards a new framing over about this many ms as the targets move, and round to a new angle from the frame
+ 	 * camera this one replaces. 0 sticks to them. Default 400.
```

#### 64. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7210-L7211` → after: `L2492-L2502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2492-L2502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L2492-L2502) · [Before (L7210-L7211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L7210-L7211)

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

#### 65. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7213-L7217` → after: `L2504-L2505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2504-L2505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L2504-L2505) · [Before (L7213-L7217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L7213-L7217)

```diff
- 	 * Called when a player claims a task
- 	 * @param playerId - The id of the player claiming the task
- 	 * @param taskId - The id of the task being claimed
- 	 * @param isPromoTask - Whether the task is a promo task
- 	 * @param claimedRewards - The rewards claimed by the player
+ 	 * Hide the HUD while this camera is on. Nametags, dialogue, the chat being typed in, the respawn and sleeping screens,
+ 	 * QTEs, UI requests, touch controls and the settings button on touch screens stay.
```

#### 66. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7219-L7220` → after: `L2507-L2509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2507-L2509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L2507-L2509) · [Before (L7219-L7220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L7219-L7220)

```diff
- 	var onTaskClaimed: (playerId: string, taskId: any, isPromoTask: any, claimedRewards: any) => any
- 
+ 	hideHud?: boolean
+ 	/** Field of view in degrees. Omit to keep the player's own. */
+ 	fov?: number
```

#### 67. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7222-L7230` → after: `L2511-L2514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2511-L2514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L2511-L2514) · [Before (L7222-L7230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L7222-L7230)

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

#### 68. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7232-L7233` → after: `L2516-L2606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2516-L2606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L2516-L2606) · [Before (L7232-L7233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L7232-L7233)

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
+ ... (75 more added lines; see GitHub link above)
```

#### 69. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7235` → after: `L2608-L2609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2608-L2609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L2608-L2609) · [Before (L7235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L7235)

```diff
- 	 * Called when a player requests a chunk
+ 	 * The search box. \`item\` is the player's searched item; \`extra\` and \`excluded\` adjust the creative items it finds;
+ 	 * \`names\` holds the names this player sees for items a game renamed
```

#### 70. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7237-L7238` → after: `L2611-L2851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2611-L2851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L2611-L2851) · [Before (L7237-L7238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L7237-L7238)

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
+ ... (225 more added lines; see GitHub link above)
```

#### 71. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7240` → after: `L2853-L2854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2853-L2854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L2853-L2854) · [Before (L7240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L7240)

```diff
- 	 * Called when an item drop is created
+ 	 * Whether each frame fades into the next (Minecraft's \`interpolate\`), rather than cutting to it: one in-between frame
+ 	 * per pair, at half the interval, for intervals of 200 ms or more. Default true.
```

#### 72. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7242-L7243` → after: `L2856-L2894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2856-L2894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L2856-L2894) · [Before (L7242-L7243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L7242-L7243)

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

#### 73. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7245-L7247` → after: `L2896-L2897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2896-L2897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L2896-L2897) · [Before (L7245-L7247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L7245-L7247)

```diff
- 	 * Called when a player starts charging an item
- 	 * @param playerId - The id of the player charging the item
- 	 * @param itemName - The name of the item being charged
+ 	 * ms from equipping to the first shot. A game overriding fireRate, fireRateWithHeldTouch or cadenceMs without its own
+ 	 * equipDelay waits the fire interval less 0.9 of cadenceMs instead
```

#### 74. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7249-L7250` → after: `L2899-L3258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R2899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L2899-L3258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L2899-L3258) · [Before (L7249-L7250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L7249-L7250)

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

#### 75. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7252` → after: `L3260-L3262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3260-L3262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L3260-L3262) · [Before (L7252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L7252)

```diff
- 	 * Called when a player finishes charging an item
+ 	 * Keep the mob in this state until you set another one: it never times out, ignores nearby players and doesn't
+ 	 * fight back when hit. It still leaves the state when the state ends itself, such as when its target leaves the
+ 	 * game or turns invisible, or when it is tamed. A charge can't be held: it lasts one leg as usual.
```

#### 76. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7254-L7255` → after: `L3264-L3491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3264-L3491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L3264-L3491) · [Before (L7254-L7255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L7254-L7255)

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

#### 77. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7257-L7260` → after: `L3493-L3495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3493-L3495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L3493-L3495) · [Before (L7257-L7260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L7257-L7260)

```diff
- 	 * Called once when a fishing hook first enters water. Coordinates are the bob's position at water entry.
- 	 * Return "preventFish" to cancel, or { caughtItemName?, biteDelayMs?, qte? } to select the fish and override the rod's bite delay
- 	 * and nine-second timed-click QTE. Default delays are Rusty 7–9 seconds, Sturdy 5–7, and Carbon/other rods 2–4.
- 	 * The selected fish is fixed for the attempt; omitting caughtItemName uses the engine's default fish selection.
+ 	 * How hard the rider pushes off the ground when jumping, compared to a normal jump. \`0\` = cannot jump.
+ 	 * Multiplies the \`jumpAmount\` client option rather than replacing it, and heavier types need a bigger
+ 	 * value to reach the same height.
```

#### 78. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7262-L7263` → after: `L3497-L3503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3497-L3503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L3497-L3503) · [Before (L7262-L7263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L7262-L7263)

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

#### 79. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7265-L7269` → after: `L3505-L3506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3505-L3506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L3505-L3506) · [Before (L7265-L7269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L7265-L7269)

```diff
- 	 * Called after the fishing QTE succeeds and the bob/session have been removed.
- 	 * Coordinates are the fishing position captured at water entry. caughtItemName is the item selected for the attempt.
- 	 * Returning nothing gives one of that item, or drops it if the inventory is full.
- 	 * Return "preventDrop" to suppress the default reward and award custom catches here instead.
- 	 * Return "preventItemGrant" to deliver the item yourself while keeping the default catch effects.
+ 	 * Where the rider sits, as \`[x, y, z]\` blocks from the middle of the vehicle. A rideable mob defaults
+ 	 * to its own ride height rather than to this type's value.
```

#### 80. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7271-L7272` → after: `L3508-L3510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3508-L3510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L3508-L3510) · [Before (L7271-L7272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L7271-L7272)

```diff
- 	var onPlayerSucceededFishCatch: (playerId: PlayerId, rodName: string, x: number, y: number, z: number, caughtItemName: ItemName) => void | "preventDrop" | "preventItemGrant"
- 
+ 	riderOffset: Pos
+ 	/** How the rider's body is posed while riding. */
+ 	pose: PlayerPose
```

#### 81. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7274-L7276` → after: `L3512-L3514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3512-L3514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L3512-L3514) · [Before (L7274-L7276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L7274-L7276)

```diff
- 	 * Called after the fishing QTE fails or its time window expires, after removing the bob/session.
- 	 * Coordinates are the fishing position captured at water entry. Retracting, switching rods, dying, and leaving cancel silently.
- 	 * caughtItemName is the item selected for the failed attempt; no reward is given.
+ 	 * A badge shown to the rider for as long as they ride. \`null\` = none. \`icon\` is an ingame icon or an
+ 	 * item name. \`name\` must be one that a physics type already uses, such as \`"Driving"\` or \`"Boating"\`,
+ 	 * because only those are cleared again when the rider gets off.
```

#### 82. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7278-L7282` → after: `L3516-L3526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3516-L3526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L3516-L3526) · [Before (L7278-L7282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L7278-L7282)

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

#### 83. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7284-L7286` → after: `L3528-L3530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3528-L3530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L3528-L3530) · [Before (L7284-L7286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L7284-L7286)

```diff
- 	 * Called when a player opens or closes the shop menu
- 	 * @param playerId - The id of the player whose shop menu changed
- 	 * @param isOpen - Whether the shop menu is now open
+ 	 * Extra speed multipliers for the block underfoot, by block name. Solid ground only, and stacks with
+ 	 * \`speedMultiplier\` and the land/fluid/air multiplier. When several listed blocks are underfoot, the
+ 	 * value furthest from \`1\` wins.
```

#### 84. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7288-L7292` → after: `L3532-L3540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3532-L3540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L3532-L3540) · [Before (L7288-L7292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L7288-L7292)

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

#### 85. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7294-L7297` → after: `L3542-L3543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3542-L3543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L3542-L3543) · [Before (L7294-L7297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L7294-L7297)

```diff
- 	 * Called when a player enters a vehicle
- 	 * @param playerId - The id of the player that entered the vehicle
- 	 * @param vehicleType - The type of the vehicle
- 	 * @param vehicleEId - The id of the vehicle
+ 	 * How bouncy walls are: \`0\` stops dead, \`1\` keeps all its speed. Stacks with the \`bounciness\` client
+ 	 * option. Rebounds have a floor speed, so slow bumps come back faster than they arrived.
```

#### 86. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7299-L7300` → after: `L3545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L3545) · [Before (L7299-L7300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L7299-L7300)

```diff
- 	var onPlayerEnteredVehicle: (playerId: PlayerId, vehicleType: MeshEntityVehicleType, vehicleEId: EntityId) => void
- 
+ 	horizontalBounciness: number
```

#### 87. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7302-L7305` → after: `L3547-L3548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3547-L3548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L3547-L3548) · [Before (L7302-L7305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L7302-L7305)

```diff
- 	 * Called when a player exits a vehicle
- 	 * @param playerId - The id of the player that exited the vehicle
- 	 * @param vehicleType - The type of the vehicle
- 	 * @param vehicleEId - The id of the vehicle
+ 	 * How bouncy the floor is: \`0\` lands flat, \`1\` bounces back as fast as it fell. Stacks with the
+ 	 * \`bounciness\` client option, and has the same rebound floor as \`horizontalBounciness\`.
```

#### 88. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7307-L7308` → after: `L3550-L3552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3550-L3552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L3550-L3552) · [Before (L7307-L7308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L7307-L7308)

```diff
- 	var onPlayerExitedVehicle: (playerId: PlayerId, vehicleType: MeshEntityVehicleType, vehicleEId: EntityId) => void
- 
+ 	verticalBounciness: number
+ 	/** How fast it must hit a wall, in blocks per second, before \`horizontalBounciness\` applies. \`0\` = any contact. */
+ 	minHorizontalSpeedToBounce: number
```

#### 89. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7310-L7315` → after: `L3554-L3555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3554-L3555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L3554-L3555) · [Before (L7310-L7315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L7310-L7315)

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

#### 90. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7317-L7318` → after: `L3557-L3561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3557-L3561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L3557-L3561) · [Before (L7317-L7318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L7317-L7318)

```diff
- 	var onPlayerBoughtShopItem: (playerId: PlayerId, categoryKey: ShopCategoryKey, itemKey: ShopItemKey, item: BoughtShopItem, userInput?: string) => void
- 
+ 	minVerticalSpeedToBounce: number
+ 	/** Shakes the camera when it hits a wall hard enough; it need not bounce. \`null\` = no shake. See \`ImpactCameraShakeOpts\`. */
+ 	horizontalImpactCameraShake: ImpactCameraShakeOpts | null
+ 	/** Shakes the camera when it hits a floor or ceiling hard enough; it need not bounce. \`null\` = no shake. See \`ImpactCameraShakeOpts\`. */
+ 	verticalImpactCameraShake: ImpactCameraShakeOpts | null
```

#### 91. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7320-L7322` → after: `L3563-L3564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3563-L3564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L3563-L3564) · [Before (L7320-L7322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L7320-L7322)

```diff
- 	 * Called when a player presses a custom button
- 	 * @param playerId - The id of the player pressing the button
- 	 * @param buttonId - The id of the button pressed
+ 	 * Makes it steer like a car: left and right turn it rather than sliding it sideways. \`null\` moves
+ 	 * freely in any direction, like a walking player. See \`SteeringOpts\`.
```

#### 92. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7324-L7325` → after: `L3566-L3570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3566-L3570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L3566-L3570) · [Before (L7324-L7325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L7324-L7325)

```diff
- 	var onPlayerPressedButton: (playerId: PlayerId, buttonId: string) => void
- 
+ 	steering: SteeringOpts | null
+ 	/** Locks the direction it faces, in radians, ignoring the camera. \`null\` = it faces wherever the camera or steering points. */
+ 	fixedHeading: number | null
+ 	/** Makes it skip across water like a stone once it is fast enough. \`null\` = it floats normally. See \`FluidSkipOpts\`. */
+ 	fluidSkip: FluidSkipOpts | null
```

#### 93. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7327-L7329` → after: `L3572-L3573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3572-L3573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L3572-L3573) · [Before (L7327-L7329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L7327-L7329)

```diff
- 	 * Called when a player releases a custom button
- 	 * @param playerId - The id of the player releasing the button
- 	 * @param buttonId - The id of the button released
+ 	 * Lets it fly once mid-air and descending. Supported movement types: \`GLIDING\` and \`FLOATING\`.
+ 	 * \`null\` = it cannot fly. See \`AirborneModeOpts\`.
```

#### 94. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7331-L7332` → after: `L3575-L3577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3575-L3577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L3575-L3577) · [Before (L7331-L7332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L7331-L7332)

```diff
- 	var onPlayerReleasedButton: (playerId: PlayerId, buttonId: string) => void
- 
+ 	airborneMode: AirborneModeOpts | null
+ 	/** How it moves while flying. \`null\` = it steers the same way it does on the ground. See \`AirborneMovementOpts\`. */
+ 	airborneMovement: AirborneMovementOpts | null
```

#### 95. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7334-L7338` → after: `L3579-L3580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3579-L3580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L3579-L3580) · [Before (L7334-L7338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L7334-L7338)

```diff
- 	 * Called when a player responds to a UI request.
- 	 *
- 	 * @param playerId - The id of the player responding to the UI request.
- 	 * @param id - The id of the UI request.
- 	 * @param response - The response to the UI request.
+ 	 * Caps how fast it falls while flying. Only used when \`airborneMovement\` is \`"heading"\`.
+ 	 * \`null\` = it falls at full speed. See \`FallSpeedLimitOpts\`.
```

#### 96. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7340-L7341` → after: `L3582-L3608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3582-L3608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L3582-L3608) · [Before (L7340-L7341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L7340-L7341)

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

#### 97. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7343-L7353` → after: `L3610-L3611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3610-L3611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L3610-L3611) · [Before (L7343-L7353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L7343-L7353)

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

#### 98. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7355-L7360` → after: `L3613-L4269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3613-L4269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/287.js#L3613-L4269) · [Before (L7355-L7360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/287.js#L7355-L7360)

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
+ ... (641 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/288.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/288.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1)

#### 1. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L4-L13` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/288.js#L4) · [Before (L4-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/288.js#L4-L13)

```diff
-   40514: (zz, tz, sz) => {
-     function Fz() {
-       return Fz = Object.assign ? Object.assign.bind() : function(zz) {
-         for (var tz = 1; tz < arguments.length; tz++) {
-           var sz = arguments[tz];
-           for (var Fz in sz)({}).hasOwnProperty.call(sz, Fz) && (zz[Fz] = sz[Fz])
-         }
-         return zz
-       }, Fz.apply(null, arguments)
-     }
+   40677: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L15-L16` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/288.js#L6) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/288.js#L15-L16)

```diff
-       e: () => Nz,
-       h: () => oz
+       e: () => hv
```

#### 3. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L18-L230` → after: `L8-L7359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L8-L7359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/288.js#L8-L7359) · [Before (L18-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/288.js#L18-L230)

```diff
-     var Wz = !1;
-     try {
-       Wz = "undefined" !== typeof localStorage
-     } catch (wz) {}
-     var Xz = "undefined" !== typeof process,
-       Oz = Wz && "function" === typeof localStorage.getItem && localStorage.getItem("DEBUG") || Xz && {
-         NODE_ENV: "production",
-         PUBLIC_URL: "",
-         WDS_SOCKET_HOST: void 0,
-         WDS_SOCKET_PATH: void 0,
-         WDS_SOCKET_PORT: void 0,
-         FAST_REFRESH: !0,
-         REACT_APP_DEV_URLS: "false"
-       }.DEBUG ? console.log : function(zz) {
-         return ""
-       };
- ... (197 more removed lines; see GitHub link above)
+     const hv = String.raw`interface Map<K, V> {
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
+ ... (7336 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/289.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/289.js` (17 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848)

#### 1. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L4-L122489` → after: `L4-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L4-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/289.js#L4-L32) · [Before (L4-L122489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/289.js#L4-L122489)

```diff
-   40527: (zz, tz, sz) => {
-     var Fz = "/index.js",
-       Wz = {};
-     (zz => {
-       var tz = Object.defineProperty,
-         Wz = (Object.getOwnPropertyDescriptor, Object.getOwnPropertyNames, Object.prototype.hasOwnProperty, (zz, sz) => {
-           for (var Fz in sz) tz(zz, Fz, {
-             get: sz[Fz],
-             enumerable: !0
-           })
-         }),
-         Xz = {};
-       Wz(Xz, {
-         ANONYMOUS: () => q5,
-         AccessFlags: () => UX,
-         AssertionLevel: () => rs,
- ... (122470 more removed lines; see GitHub link above)
+   40681: (vv, zv, Pv) => {
+     function hv() {
+       return hv = Object.assign ? Object.assign.bind() : function(vv) {
+         for (var zv = 1; zv < arguments.length; zv++) {
+           var Pv = arguments[zv];
+           for (var hv in Pv)({}).hasOwnProperty.call(Pv, hv) && (vv[hv] = Pv[hv])
+         }
+         return vv
+       }, hv.apply(null, arguments)
+     }
+     Pv.d(zv, {
+       b: () => Wv,
+       f: () => pv
+     });
+     var Sv = !1;
+     try {
+ ... (13 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L122492-L123061` → after: `L35-L48`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L35-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/289.js#L35-L48) · [Before (L122492-L123061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/289.js#L122492-L123061)

```diff
-       function cxz(zz, tz) {
-         return {
-           seq: 0,
-           type: "event",
-           event: zz,
-           body: tz
-         }
-       }
- 
-       function jxz(zz) {
-         return ss((zz => {
-           let {
-             textSpan: tz
-           } = zz;
-           return tz.start + 100003 * tz.length
-         }), q1(zz))
- ... (554 more removed lines; see GitHub link above)
+     function pv(vv, zv, Pv, Sv, ev) {
+       void 0 === Sv && (Sv = {});
+       var gv = hv({}, lv(Pv), Sv),
+         pv = function(vv, zv, Pv, Sv, ev) {
+           var gv = [].concat(zv),
+             pv = wv(vv, Pv, Sv),
+             dv = pv.compilerHost,
+             Nv = pv.updateFile,
+             lv = pv.deleteFile,
+             Tv = new Map,
+             Wv = 0,
+             av = hv({}, dv, {
+               getProjectVersion: function() {
+                 return Wv.toString()
```

#### 3. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L123063-L123371` → after: `L50-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L50-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/289.js#L50-L51) · [Before (L123063-L123371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/289.js#L123063-L123371)

```diff
-               Uz = () => {
-                 if (this.changeSeq !== Wz) return;
-                 let sz, Xz = tz[Oz];
-                 if (Xs(Xz) ? Xz = this.toPendingErrorCheck(Xz) : "du" in Xz && (sz = Xz.du, Xz = this.toPendingErrorCheck(Xz.file)), !Xz) return oz();
-                 const {
-                   fileName: Uz,
-                   project: Kz
-                 } = Xz;
-                 return Oxz(Kz), Kz.containsFile(Uz, Fz) && (this.syntacticCheck(Uz, Kz), this.changeSeq === Wz) ? 0 !== Kz.projectService.serverMode ? oz() : sz ? zz.immediate("regionSemanticCheck", (() => {
-                   const tz = this.projectService.getScriptInfoForNormalizedPath(Uz);
-                   tz && this.regionSemanticCheck(Uz, Kz, sz.map((zz => this.getRange({
-                     file: Uz,
-                     ...zz
-                   }, tz)))), this.changeSeq === Wz && zz.immediate("semanticCheck", (() => vz(Uz, Kz)))
-                 })) : void zz.immediate("semanticCheck", (() => vz(Uz, Kz))) : void 0
-               };
- ... (293 more removed lines; see GitHub link above)
+               getCompilationSettings: function() {
+                 return Pv
```

#### 4. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L123373-L123775` → after: `L53-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L53-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/289.js#L53-L54) · [Before (L123373-L123775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/289.js#L123373-L123775)

```diff
-               end: {
-                 line: Xz.line + 1,
-                 offset: Xz.character + 1
-               }
-             }
-           }
-           toFileSpanWithContext(zz, tz, sz, Fz) {
-             const Wz = this.toFileSpan(zz, tz, Fz),
-               Xz = sz && this.toFileSpan(zz, sz, Fz);
-             return Xz ? {
-               ...Wz,
-               contextStart: Xz.start,
-               contextEnd: Xz.end
-             } : Wz
-           }
-           getTypeDefinition(zz) {
- ... (387 more removed lines; see GitHub link above)
+               getCustomTransformers: function() {
+                 return ev
```

#### 5. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L123777-L124121` → after: `L56-L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L56-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/289.js#L56-L57) · [Before (L123777-L124121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/289.js#L123777-L124121)

```diff
-               Oz = Mxz(sz, this.getDefaultProject(zz), Xz, Xz, dxz, (zz => (this.logger.info(`Finding references to file ${Fz} in project ${zz.getProjectName()}`), zz.getLanguageService().getFileReferences(Fz))));
-             let oz;
-             if (Fs(Oz)) oz = Oz;
-             else {
-               oz = [];
-               const zz = jxz(this.host.useCaseSensitiveFileNames);
-               Oz.forEach((tz => {
-                 for (const sz of tz) zz.has(sz) || (oz.push(sz), zz.add(sz))
-               }))
-             }
-             if (!tz) return oz;
-             return {
-               refs: oz.map((zz => zmz(this.projectService, zz, Wz))),
-               symbolName: `"${zz.file}"`
-             }
-           }
- ... (329 more removed lines; see GitHub link above)
+               getScriptFileNames: function() {
+                 return gv.slice()
```

#### 6. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L124123-L124872` → after: `L59-L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L59-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/289.js#L59-L114) · [Before (L124123-L124872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/289.js#L124123-L124872)

```diff
-               cO: zz.insertString
-             })))
-           }
-           reload(zz) {
-             const tz = Prz(zz.file),
-               sz = void 0 === zz.tmpfile ? void 0 : Prz(zz.tmpfile),
-               Fz = this.projectService.getScriptInfoForNormalizedPath(tz);
-             Fz && (this.changeSeq++, Fz.reloadFromFile(sz))
-           }
-           saveToTmp(zz, tz) {
-             const sz = this.projectService.getScriptInfo(zz);
-             sz && sz.saveTo(tz)
-           }
-           closeClientFile(zz) {
-             if (!zz) return;
-             const tz = Wo(zz);
- ... (734 more removed lines; see GitHub link above)
+               getScriptSnapshot: function(zv) {
+                 var Pv = vv.readFile(zv);
+                 if (Pv && "string" === typeof Pv) return Sv.ScriptSnapshot.fromString(Pv)
+               },
+               getScriptVersion: function(vv) {
+                 return Tv.get(vv) || "0"
+               },
+               writeFile: vv.writeFile
+             }),
+             sv = {
+               languageServiceHost: av,
+               updateFile: function(vv) {
+                 Wv++, Tv.set(vv.fileName, Wv.toString()), gv.includes(vv.fileName) || gv.push(vv.fileName), Nv(vv)
+               },
+               deleteFile: function(vv) {
+                 Wv++, Tv.set(vv.fileName, Wv.toString());
+ ... (40 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L124876-L124899` → after: `L119-L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L119-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/289.js#L119-L121) · [Before (L124876-L124899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/289.js#L124876-L124899)

```diff
-       function zmz(zz, tz, sz) {
-         let {
-           fileName: Fz,
-           textSpan: Wz,
-           contextSpan: Xz,
-           isWriteAccess: Oz,
-           isDefinition: oz
-         } = tz, {
-           disableLineTextInReferences: vz
-         } = sz;
-         const Uz = rF.checkDefined(zz.getScriptInfo(Fz)),
-           Kz = pxz(Wz, Xz, Uz),
-           uz = vz ? void 0 : function(zz, tz) {
-             const sz = zz.lineToTextSpan(tz.start.line - 1);
-             return zz.getSnapshot().getText(sz.start, Ev(sz)).replace(/\r|\n/g, "")
-           }(Uz, Kz);
- ... (8 more removed lines; see GitHub link above)
+     function dv(vv) {
+       throw new Error("Method '" + vv + "' is not implemented.")
+     }
```

#### 8. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L124901-L124949` → after: `L123-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L123-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/289.js#L123-L148) · [Before (L124901-L124949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/289.js#L124901-L124949)

```diff
-       function tmz(zz) {
-         return void 0 === zz || zz && "object" === typeof zz && "string" === typeof zz.exportName && (void 0 === zz.fileName || "string" === typeof zz.fileName) && (void 0 === zz.ambientModuleName || "string" === typeof zz.ambientModuleName && (void 0 === zz.isPackageJsonImport | … [truncated]
-       }
-       var smz = (zz => (zz[zz.PreStart = 0] = "PreStart", zz[zz.Start = 1] = "Start", zz[zz.Entire = 2] = "Entire", zz[zz.Mid = 3] = "Mid", zz[zz.End = 4] = "End", zz[zz.PostEnd = 5] = "PostEnd", zz))(smz || {}),
-         Fmz = class {
-           constructor() {
-             this.goSubtree = !0, this.lineIndex = new vmz, this.endBranch = [], this.state = 2, this.initialText = "", this.trailingText = "", this.lineIndex.root = new Umz, this.startPath = [this.lineIndex.root], this.stack = [this.lineIndex.root]
-           }
-           get done() {
-             return !1
-           }
-           insertLines(zz, tz) {
-             tz && (this.trailingText = ""), zz = zz ? this.initialText + zz + this.trailingText : this.initialText + this.trailingText;
-             const sz = vmz.linesFromText(zz).lines;
-             let Fz, Wz;
-             sz.length > 1 && "" === sz[sz.length - 1] && sz.pop();
- ... (33 more removed lines; see GitHub link above)
+     function Nv(vv, zv) {
+       return function() {
+         for (var Pv = arguments.length, hv = new Array(Pv), Sv = 0; Sv < Pv; Sv++) hv[Sv] = arguments[Sv];
+         var ev = zv.apply(void 0, hv),
+           pv = "string" === typeof ev ? ev.slice(0, 80) + "..." : ev;
+         return gv.apply(void 0, ["> " + vv].concat(hv)), gv("< " + pv), ev
+       }
+     }
+     var lv = function(vv) {
+         return hv({}, vv.getDefaultCompilerOptions(), {
+           jsx: vv.JsxEmit.React,
+           strict: !0,
+           esModuleInterop: !0,
+           module: vv.ModuleKind.ESNext,
+           suppressOutputPathCheck: !0,
+           skipLibCheck: !0,
+ ... (10 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L124951-L124977` → after: `L150-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L150-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/289.js#L150-L154) · [Before (L124951-L124977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/289.js#L124951-L124977)

```diff
-             function oz(zz) {
-               return zz.isLeaf() ? new Kmz("") : new Umz
-             }
-             switch (2 === this.state && 1 === Wz && (this.state = 1, this.branchNode = Xz, this.lineCollectionAtBranch = sz), Wz) {
-               case 0:
-                 this.goSubtree = !1, 4 !== this.state && Xz.add(sz);
-                 break;
-               case 1:
-                 4 === this.state ? this.goSubtree = !1 : (Oz = oz(sz), Xz.add(Oz), this.startPath.push(Oz));
-                 break;
-               case 2:
-                 4 !== this.state ? (Oz = oz(sz), Xz.add(Oz), this.startPath.push(Oz)) : sz.isLeaf() || (Oz = oz(sz), Xz.add(Oz), this.endBranch.push(Oz));
-                 break;
-               case 3:
-                 this.goSubtree = !1;
-                 break;
- ... (11 more removed lines; see GitHub link above)
+     function Wv(vv) {
+       return {
+         args: [],
+         createDirectory: function() {
+           return dv("createDirectory")
```

#### 10. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L124979-L124985` → after: `L156-L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L156-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/289.js#L156-L162) · [Before (L124979-L124985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/289.js#L124979-L124985)

```diff
-         Wmz = class {
-           constructor(zz, tz, sz) {
-             this.pos = zz, this.deleteLen = tz, this.insertedText = sz
-           }
-           getTextChangeRange() {
-             return PU(DU(this.pos, this.deleteLen), this.insertedText ? this.insertedText.length : 0)
-           }
+         directoryExists: Nv("directoryExists", (function(zv) {
+           return Array.from(vv.keys()).some((function(vv) {
+             return vv.startsWith(zv)
+           }))
+         })),
+         exit: function() {
+           return dv("exit")
```

#### 11. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L124987-L125069` → after: `L164-L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L164-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/289.js#L164-L168) · [Before (L124987-L125069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/289.js#L124987-L125069)

```diff
-         Xmz = class zz {
-           constructor() {
-             this.changes = [], this.versions = new Array(zz.maxVersions), this.minVersion = 0, this.currentVersion = 0
-           }
-           versionToIndex(tz) {
-             if (!(tz < this.minVersion || tz > this.currentVersion)) return tz % zz.maxVersions
-           }
-           currentVersionToIndex() {
-             return this.currentVersion % zz.maxVersions
-           }
-           edit(tz, sz, Fz) {
-             this.changes.push(new Wmz(tz, sz, Fz)), (this.changes.length > zz.changeNumberThreshold || sz > zz.changeLengthThreshold || Fz && Fz.length > zz.changeLengthThreshold) && this.getSnapshot()
-           }
-           getSnapshot() {
-             return this._getSnapshot()
-           }
- ... (67 more removed lines; see GitHub link above)
+         fileExists: Nv("fileExists", (function(zv) {
+           return vv.has(zv) || vv.has(Tv(zv))
+         })),
+         getCurrentDirectory: function() {
+           return "/"
```

#### 12. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L125071-L125197` → after: `L170-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L170-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/289.js#L170-L171) · [Before (L125071-L125197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/289.js#L125071-L125197)

```diff
-         vmz = class zz {
-           constructor() {
-             this.checkEdits = !1
-           }
-           absolutePositionOfStartOfLine(zz) {
-             return this.lineNumberToInfo(zz).absolutePosition
-           }
-           positionToLineOffset(zz) {
-             const {
-               oneBasedLine: tz,
-               zeroBasedColumn: sz
-             } = this.root.charOffsetToLineInfo(1, zz);
-             return {
-               line: tz,
-               offset: sz + 1
-             }
- ... (111 more removed lines; see GitHub link above)
+         getDirectories: function() {
+           return []
```

#### 13. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L125199-L125334` → after: `L173-L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L173-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/289.js#L173-L174) · [Before (L125199-L125334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/289.js#L125199-L125334)

```diff
-         Umz = class zz {
-           constructor() {
-             let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
-             this.children = zz, this.totalChars = 0, this.totalLines = 0, zz.length && this.updateCounts()
-           }
-           isLeaf() {
-             return !1
-           }
-           updateCounts() {
-             this.totalChars = 0, this.totalLines = 0;
-             for (const zz of this.children) this.totalChars += zz.charCount(), this.totalLines += zz.lineCount()
-           }
-           execWalk(zz, tz, sz, Fz, Wz) {
-             return sz.pre && sz.pre(zz, tz, this.children[Fz], this, Wz), sz.goSubtree ? (this.children[Fz].walk(zz, tz, sz), sz.post && sz.post(zz, tz, this.children[Fz], this, Wz)) : sz.goSubtree = !0, sz.done
-           }
-           skipChild(zz, tz, sz, Fz, Wz) {
- ... (120 more removed lines; see GitHub link above)
+         getExecutingFilePath: function() {
+           return dv("getExecutingFilePath")
```

#### 14. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L125336-L125351` → after: `L176-L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L176-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/289.js#L176-L184) · [Before (L125336-L125351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/289.js#L125336-L125351)

```diff
-         Kmz = class {
-           constructor(zz) {
-             this.text = zz
-           }
-           isLeaf() {
-             return !0
-           }
-           walk(zz, tz, sz) {
-             sz.leaf(zz, tz, this)
-           }
-           charCount() {
-             return this.text.length
-           }
-           lineCount() {
-             return 1
-           }
+         readDirectory: Nv("readDirectory", (function(zv) {
+           return "/" === zv ? Array.from(vv.keys()) : []
+         })),
+         readFile: Nv("readFile", (function(zv) {
+           var Pv;
+           return null != (Pv = vv.get(zv)) ? Pv : vv.get(Tv(zv))
+         })),
+         resolvePath: function(vv) {
+           return vv
```

#### 15. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L125353-L125391` → after: `L186-L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L186-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/289.js#L186-L213) · [Before (L125353-L125391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/289.js#L125353-L125391)

```diff
-         umz = class zz {
-           constructor(zz, tz, sz, Fz, Wz, Xz) {
-             this.telemetryEnabled = zz, this.logger = tz, this.host = sz, this.globalTypingsCacheLocation = Fz, this.event = Wz, this.maxActiveRequestCount = Xz, this.activeRequestCount = 0, this.requestQueue = ts(), this.requestMap = new Map, this.requestedRegistry = !1, this.pa … [truncated]
-           }
-           isKnownTypesPackageName(zz) {
-             var tz;
-             return N8.validatePackageName(zz) === N8.NameValidationResult.Ok && (this.requestedRegistry || (this.requestedRegistry = !0, this.installer.send({
-               kind: "typesRegistry"
-             })), !!(null == (tz = this.typesRegistryCache) ? void 0 : tz.has(zz)))
-           }
-           installPackage(zz) {
-             this.packageInstallId++;
-             const tz = {
-                 kind: "installPackage",
-                 ...zz,
-                 id: this.packageInstallId
- ... (23 more removed lines; see GitHub link above)
+         newLine: "\n",
+         useCaseSensitiveFileNames: !0,
+         write: function() {
+           return dv("write")
+         },
+         writeFile: function(zv, Pv) {
+           vv.set(zv, Pv)
+         },
+         deleteFile: function(zv) {
+           vv.delete(zv)
+         }
+       }
+     }
+ 
+     function wv(vv, zv, Pv) {
+       var Sv = new Map;
+ ... (12 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L125393-L125575` → after: `L215-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L215-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/289.js#L215-L218) · [Before (L125393-L125575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/289.js#L125393-L125575)

```diff
-             switch (this.logger.hasLevel(3) && this.logger.info(`TIAdapter:: Received response:${Z8(zz)}`), zz.kind) {
-               case B8:
-                 this.typesRegistryCache = new Map(Object.entries(zz.typesRegistry));
-                 break;
-               case H8: {
-                 const Fz = null == (tz = this.packageInstalledPromise) ? void 0 : tz.get(zz.id);
-                 rF.assertIsDefined(Fz, "Should find the promise for package install"), null == (sz = this.packageInstalledPromise) || sz.delete(zz.id), zz.success ? Fz.resolve({
-                   successMessage: zz.message
-                 }) : Fz.reject(zz.message), this.projectService.updateTypingsForProject(zz), this.event(zz, "setTypings");
-                 break
-               }
-               case Y8: {
-                 const tz = {
-                     message: zz.message
-                   },
-                   sz = "typesInstallerInitializationFailed";
- ... (167 more removed lines; see GitHub link above)
+             return Sv.get(hv) || (pv = Pv.createSourceFile(hv, vv.readFile(hv), null != (gv = null != ev ? ev : zv.target) ? gv : lv(Pv).target, !1), Sv.set(pv.fileName, pv), pv)
+           },
+           useCaseSensitiveFileNames: function() {
+             return vv.useCaseSensitiveFileNames
```

#### 17. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L125586` → after: `L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/289.js#L230) · [Before (L125586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/289.js#L125586)

```diff
-     })
+     }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/290.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/290.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b)

#### 1. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L4-L27` → after: `L4-L89110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L4-L89110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/290.js#L4-L89110) · [Before (L4-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/290.js#L4-L27)

```diff
-   40591: (zz, tz, sz) => {
-     sz.d(tz, {
-       collectImportedWorldCodePluginNames: () => Uz
-     });
-     var Fz = sz(36283),
-       Wz = sz(36274),
-       Xz = sz(40527),
-       Oz = sz.n(Xz);
- 
-     function oz(zz) {
-       return Oz().isImportDeclaration(zz) && Oz().isStringLiteral(zz.moduleSpecifier) && function(zz) {
-         const tz = zz.importClause;
-         if (!tz) return !0;
-         if (tz.isTypeOnly) return !1;
-         const sz = tz.namedBindings;
-         return !(sz && !Oz().isNamespaceImport(sz)) || !!tz.name || sz.elements.some((zz => !zz.isTypeOnly))
- ... (8 more removed lines; see GitHub link above)
+   40697: (vv, zv, Pv) => {
+     var hv = "/index.js",
+       Sv = {};
+     (vv => {
+       var zv = Object.defineProperty,
+         Sv = (Object.getOwnPropertyDescriptor, Object.getOwnPropertyNames, Object.prototype.hasOwnProperty, (vv, Pv) => {
+           for (var hv in Pv) zv(vv, hv, {
+             get: Pv[hv],
+             enumerable: !0
+           })
+         }),
+         ev = {};
+       Sv(ev, {
+         ANONYMOUS: () => J9,
+         AccessFlags: () => ge,
+         AssertionLevel: () => GP,
+ ... (89091 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L29-L31` → after: `L89112-L121996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR89112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L89112-L121996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/290.js#L89112-L121996) · [Before (L29-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/290.js#L29-L31)

```diff
-       for (const Fz of Wz)
-         if ("" !== Fz && "." !== Fz)
-           if (".." !== Fz) Xz.push(Fz);
+ 
+       function k7(vv, zv) {
+         H7 = zv, M7 = vv;
+         try {
+           return Uv(function(vv) {
+             const zv = [];
+ 
+             function Pv(vv) {
+               if (hv(vv) && (zv.push(vv), vv.children))
+                 for (const zv of vv.children) Pv(zv)
+             }
+             return Pv(vv), zv;
+ 
+             function hv(vv) {
+               if (vv.children) return !0;
+               switch (z8(vv)) {
+ ... (32869 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L33-L57` → after: `L121998-L122198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR121998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L121998-L122198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/290.js#L121998-L122198) · [Before (L33-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/290.js#L33-L57)

```diff
-             if (0 === Xz.length) return;
-             Xz.pop()
-           } const Oz = Xz.join("/");
-       for (const oz of [Oz, `${Oz}.ts`, `${Oz}.js`])
-         if (oz in sz && !(0, Fz.r)(oz)) return oz
-     }
- 
-     function Uz(zz) {
-       const tz = new Set,
-         sz = (0, Wz.b)(zz);
-       if (!sz) return [];
-       const Fz = [sz],
-         Xz = new Set;
-       for (; Fz.length > 0;) {
-         const sz = Fz.pop();
-         if (!sz || Xz.has(sz)) continue;
- ... (9 more removed lines; see GitHub link above)
+             const zv = this.findExternalProjectByProjectName(vv);
+             zv && this.removeProject(zv)
+           }
+           zv && (this.cleanupConfiguredProjects(), this.printProjects())
+         }
+         openExternalProjects(vv) {
+           const zv = new Set(this.externalProjects.map((vv => vv.getProjectName())));
+           this.externalProjectToConfiguredProjectMap.forEach(((vv, Pv) => zv.add(Pv)));
+           for (const Pv of vv) this.openExternalProject(Pv, !1), zv.delete(Pv.projectFileName);
+           zv.forEach((vv => this.closeExternalProject(vv, !1))), this.cleanupConfiguredProjects(), this.printProjects()
+         }
+         static escapeFilenameForRegex(vv) {
+           return vv.replace(this.filenameEscapeRegexp, "\\$&")
+         }
+         resetSafeList() {
+           this.safelist = xjv
+ ... (185 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L59` → after: `L122200-L122424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR122200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L122200-L122424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/290.js#L122200-L122424) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/290.js#L59)

```diff
-             Oz().forEachChild(Uz, Kz)
+           }))
+         }
+         watchPackageJsonFile(vv, zv, Pv) {
+           ih.assert(void 0 !== Pv);
+           let hv = (this.packageJsonFilesMap ?? (this.packageJsonFilesMap = new Map)).get(zv);
+           if (!hv) {
+             let Pv = this.watchFactory.watchFile(vv, ((vv, Pv) => {
+               switch (Pv) {
+                 case 0:
+                 case 1:
+                   this.packageJsonCache.addOrUpdate(vv, zv), this.onPackageJsonChange(hv);
+                   break;
+                 case 2:
+                   this.packageJsonCache.delete(zv), this.onPackageJsonChange(hv), hv.projects.clear(), hv.close()
+               }
+             }), 250, this.hostConfiguration.watchOptions, Mk.PackageJson);
+ ... (209 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L61` → after: `L122426-L125584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR122426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L122426-L125584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/290.js#L122426-L125584) · [Before (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/290.js#L61)

```diff
-         Kz(Uz)
+         return zv ? {
+           ...pv,
+           fileName: vv.file && vv.file.fileName
+         } : pv
+       }
+       var Kfv = xmv;
+ 
+       function Vfv(vv, zv, Pv, hv) {
+         const Sv = zv.hasLevel(3),
+           ev = JSON.stringify(vv);
+         Sv && zv.info(`${vv.type}:${K2(vv)}`);
+         return `Content-Length: ${1+Pv(ev,"utf8")}\r\n\r\n${ev}${hv}`
+       }
+       var Ufv = class {
+         constructor(vv) {
+           this.operationHost = vv
+ ... (3143 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L63-L79` → after: `L125586-L125587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR125586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L125586-L125587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/290.js#L125586-L125587) · [Before (L63-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/290.js#L63-L79)

```diff
-       return [...tz].sort()
-     }
-   },
-   40556: zz => {
-     function tz(zz) {
-       var tz = new Error("Cannot find module '" + zz + "'");
-       throw tz.code = "MODULE_NOT_FOUND", tz
-     }
-     tz.keys = () => [], tz.resolve = tz, tz.id = 40556, zz.exports = tz
-   },
-   40551: () => {},
-   40534: () => {},
-   40564: () => {},
-   40547: () => {},
-   40540: () => {},
-   40530: () => {},
- ... (1 more removed lines; see GitHub link above)
+     })
+   }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/291.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/291.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4)

#### 1. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/291.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/291.js#L4-L6)

```diff
-   40572: (zz, tz, sz) => {
-     sz.r(tz), sz.d(tz, {
-       default: () => xz
+   40771: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       collectImportedWorldCodePluginNames: () => Nv
```

#### 2. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L8-L18` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/291.js#L8-L11) · [Before (L8-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/291.js#L8-L18)

```diff
-     var Fz = sz(65),
-       Wz = sz(4382),
-       Xz = sz(1622),
-       Oz = sz(1020),
-       oz = sz.n(Oz),
-       vz = sz(1419),
-       Uz = sz(1173),
-       Kz = sz(4359),
-       uz = sz(4367),
-       Nz = sz(4373),
-       bz = sz(1087);
+     var hv = Pv(36372),
+       Sv = Pv(36369),
+       ev = Pv(40697),
+       gv = Pv.n(ev);
```

#### 3. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L21-L27` → after: `L14-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L14-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/291.js#L14-L22) · [Before (L21-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/291.js#L21-L27)

```diff
-       return zz.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
-     }
-     Kz.d.registerLanguage("javascript", uz.c), Kz.d.registerLanguage("typescript", Nz.e);
- 
-     function Dz(zz, tz) {
-       const sz = wz(zz).replace(/"/g, "&quot;");
-       return `<button type="button" class="DocsCopyButton ${tz}" title="${sz}" aria-label="${sz}"><svg class="DocsCopyIcon" viewBox="0 0 16 16" aria-hidden="true"><rect x="5.5" y="5.5" width="8.5" height="8.5"/><path d="M10.5 3.5V1.5H1.5v9h2"/></svg><svg class="DocsCopiedIcon" vi … [truncated]
+       return gv().isImportDeclaration(vv) && gv().isStringLiteral(vv.moduleSpecifier) && function(vv) {
+         const zv = vv.importClause;
+         if (!zv) return !0;
+         if (zv.isTypeOnly) return !1;
+         const Pv = zv.namedBindings;
+         return !(Pv && !gv().isNamespaceImport(Pv)) || !!zv.name || Pv.elements.some((vv => !vv.isTypeOnly))
+       }(vv) || gv().isExportDeclaration(vv) && vv.moduleSpecifier && gv().isStringLiteral(vv.moduleSpecifier) && function(vv) {
+         return !vv.isTypeOnly && (!vv.exportClause || !gv().isNamedExports(vv.exportClause) || 0 === vv.exportClause.elements.length || vv.exportClause.elements.some((vv => !vv.isTypeOnly)))
+       }(vv) ? vv.moduleSpecifier.text : gv().isImportEqualsDeclaration(vv) && !vv.isTypeOnly && gv().isExternalModuleReference(vv.moduleReference) && vv.moduleReference.expression && gv().isStringLiteral(vv.moduleReference.expression) ? vv.moduleReference.expression.text : gv().i … [truncated]
```

#### 4. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L30-L44` → after: `L25-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L25-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/291.js#L25-L61) · [Before (L30-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/291.js#L30-L44)

```diff
-     function gz(zz, tz) {
-       const sz = [],
-         Fz = zz.toLowerCase(),
-         Wz = tz.toLowerCase();
-       let Xz = 0;
-       for (; Xz < zz.length;) {
-         const Oz = Fz.indexOf(Wz, Xz);
-         if (-1 === Oz) {
-           sz.push(zz.slice(Xz));
-           break
-         }
-         Oz > Xz && sz.push(zz.slice(Xz, Oz)), sz.push((0, bz.jsx)("mark", {
-           className: "DocsHighlight",
-           children: zz.slice(Oz, Oz + tz.length)
-         }, Oz)), Xz = Oz + tz.length
+     function dv(vv, zv, Pv) {
+       if (!zv.startsWith("./") && !zv.startsWith("../")) return;
+       const Sv = ((vv.includes("/") ? vv.slice(0, vv.lastIndexOf("/") + 1) : "") + zv).split("/"),
+         ev = [];
+       for (const hv of Sv)
+         if ("" !== hv && "." !== hv)
+           if (".." !== hv) ev.push(hv);
+           else {
+             if (0 === ev.length) return;
+             ev.pop()
+           } const gv = ev.join("/");
+       for (const pv of [gv, `${gv}.ts`, `${gv}.js`])
+         if (pv in Pv && !(0, hv.j)(pv)) return pv
+     }
+ 
+     function Nv(vv) {
+ ... (21 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L46` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/291.js#L63) · [Before (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/291.js#L46)

```diff
-       return sz
+       return [...zv].sort()
```

#### 6. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L48-L414` → after: `L65-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L65-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/291.js#L65-L79) · [Before (L48-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/291.js#L48-L414)

```diff
-     var Hz = sz(1036),
-       Bz = sz(1333),
-       Pz = sz(36297),
-       rz = sz(36303);
-     const Yz = {
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
+   40729: vv => {
+     function zv(vv) {
+       var zv = new Error("Cannot find module '" + vv + "'");
+       throw zv.code = "MODULE_NOT_FOUND", zv
+     }
+     zv.keys = () => [], zv.resolve = zv, zv.id = 40729, vv.exports = zv
+   },
+   40719: () => {},
+   40708: () => {},
+   40738: () => {},
+   40715: () => {},
+   40710: () => {},
+   40701: () => {},
+   40724: () => {}
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/292.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/292.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76)

#### 1. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/292.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/292.js#L4-L6)

```diff
-   40599: (zz, tz, sz) => {
-     sz.d(tz, {
-       ensureLocalBloxdTypes: () => Hz
+   40757: (vv, zv, Pv) => {
+     Pv.r(zv), Pv.d(zv, {
+       default: () => fv
```

#### 2. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L8-L17` → after: `L8-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L8-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/292.js#L8-L18) · [Before (L8-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/292.js#L8-L17)

```diff
-     var Fz = sz(4391),
-       Wz = sz(40506),
-       Xz = sz(40498),
-       Oz = sz(36270),
-       oz = sz(36274),
-       vz = sz(36293);
-     const Uz = JSON.stringify({
-       name: "@bloxd",
-       types: "index.d.ts"
-     }, null, "\t") + "\n";
+     var hv = Pv(52),
+       Sv = Pv(4493),
+       ev = Pv(1647),
+       gv = Pv(1035),
+       pv = Pv.n(gv),
+       dv = Pv(1442),
+       Nv = Pv(1175),
+       lv = Pv(4465),
+       Tv = Pv(4474),
+       Wv = Pv(4483),
+       wv = Pv(1082);
```

#### 3. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L20` → after: `L21-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L21-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/292.js#L21-L27) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/292.js#L20)

```diff
-       return zz.replace(/^\//, "")
+       return vv.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
+     }
+     lv.c.registerLanguage("javascript", Tv.c), lv.c.registerLanguage("typescript", Wv.e);
+ 
+     function sv(vv, zv) {
+       const Pv = av(vv).replace(/"/g, "&quot;");
+       return `<button type="button" class="DocsCopyButton ${zv}" title="${Pv}" aria-label="${Pv}"><svg class="DocsCopyIcon" viewBox="0 0 16 16" aria-hidden="true"><rect x="5.5" y="5.5" width="8.5" height="8.5"/><path d="M10.5 3.5V1.5H1.5v9h2"/></svg><svg class="DocsCopiedIcon" vi … [truncated]
```

#### 4. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L23-L42` → after: `L30-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L30-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/292.js#L30-L44) · [Before (L23-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/292.js#L23-L42)

```diff
-     function uz(zz) {
-       return Kz((0, oz.t)(zz.name, "")).replace(/\/$/, "")
-     }
- 
-     function Nz(zz) {
-       return zz.typesVfsPath.slice(zz.typesVfsPath.lastIndexOf("/") + 1)
-     }
- 
-     function bz(zz) {
-       return JSON.stringify({
-         name: zz.specifier,
-         types: Nz(zz)
-       }, null, "\t") + "\n"
-     }
-     async function wz(zz) {
-       let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
- ... (4 more removed lines; see GitHub link above)
+     function Cv(vv, zv) {
+       const Pv = [],
+         hv = vv.toLowerCase(),
+         Sv = zv.toLowerCase();
+       let ev = 0;
+       for (; ev < vv.length;) {
+         const gv = hv.indexOf(Sv, ev);
+         if (-1 === gv) {
+           Pv.push(vv.slice(ev));
+           break
+         }
+         gv > ev && Pv.push(vv.slice(ev, gv)), Pv.push((0, wv.jsx)("mark", {
+           className: "DocsHighlight",
+           children: vv.slice(gv, gv + zv.length)
+         }, gv)), ev = gv + zv.length
```

#### 5. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L46-L90` → after: `L48-L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L48-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/292.js#L48-L57) · [Before (L46-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/292.js#L46-L90)

```diff
-     async function Dz(zz, tz, sz) {
-       const Fz = uz(tz),
-         Wz = await (0, vz.h)(zz, Fz);
-       if (!Wz) return;
-       const Xz = new Set([Nz(tz), "package.json"]);
-       if (sz)
-         for (const vz of Object.keys(tz.files)) Xz.add(vz);
-       const Oz = await wz(Wz),
-         oz = new Set;
-       for (const uz of Oz) {
-         if (Xz.has(uz)) continue;
-         await (0, vz.C)(zz, `${Fz}/${uz}`);
-         const tz = uz.split("/");
-         for (let zz = 1; zz < tz.length; zz++) oz.add(tz.slice(0, zz).join("/"))
-       }
-       const Uz = [...oz].sort(((zz, tz) => tz.split("/").length - zz.split("/").length));
- ... (29 more removed lines; see GitHub link above)
+     var iv = Pv(1042),
+       cv = Pv(1344),
+       Gv = Pv(36379),
+       mv = Pv(36387);
+     const jv = {
+         clientOptions: {
+           tabStep: "docsClientOptionsTab",
+           tabText: "codeEditor:tutorialClientOptionsTab",
+           pageStep: "docsClientOptions",
+           pageText: "codeEditor:tutorialClientOptions"
```

#### 6. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L92-L108` → after: `L59-L413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L59-L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/292.js#L59-L413) · [Before (L92-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/292.js#L92-L108)

```diff
-         include: ["./**/*.ts", "./**/*.js", "./**/*.d.ts"],
-         files: ["node_modules/@bloxd/globals.d.ts", "node_modules/@bloxd/lib.d.ts", ...sz]
-       }, null, "\t") + "\n"
-     }
-     async function Hz(zz) {
-       let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
-       const sz = new Set(tz.map((zz => zz.name))),
-         Nz = Object.values(Oz.g).flatMap((tz => {
-           const Fz = Kz(tz.typesVfsPath),
-             Wz = `${uz(tz)}/package.json`;
-           return [...sz.has(tz.name) ? Object.entries(tz.files).map((sz => {
-             let [Fz, Wz] = sz;
-             return (0, vz.N)(zz, Kz((0, oz.t)(tz.name, Fz)), Wz)
-           })) : [], (0, vz.N)(zz, Fz, tz.types), (0, vz.N)(zz, Wz, bz(tz))]
-         }));
-       await Promise.all([(0, vz.N)(zz, "node_modules/@bloxd/index.d.ts", Fz.default), (0, vz.N)(zz, "node_modules/@bloxd/globals.d.ts", Xz.b), (0, vz.N)(zz, "node_modules/@bloxd/lib.d.ts", Wz.d), (0, vz.N)(zz, "node_modules/@bloxd/package.json", Uz), (0, vz.N)(zz, "tsconfig.json" … [truncated]
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
+       fv = (0, hv.memo)((function(vv) {
+         var zv, Pv, gv, Tv, Wv, fv, Fv;
+         let {
+ ... (339 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/293.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/293.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663)

#### 1. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/293.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/293.js#L4-L6)

```diff
-   40653: (zz, tz, sz) => {
-     sz.r(tz), sz.d(tz, {
-       installImageBitmapTextureLoader: () => Uz
+   40778: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       ensureLocalBloxdTypes: () => iv
```

#### 2. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L8-L10` → after: `L8-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L8-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/293.js#L8-L17) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/293.js#L8-L10)

```diff
-     var Fz = sz(39063),
-       Wz = sz(40661),
-       Xz = sz(2920);
+     var hv = Pv(4503),
+       Sv = Pv(40677),
+       ev = Pv(40672),
+       gv = Pv(36362),
+       pv = Pv(36369),
+       dv = Pv(36376);
+     const Nv = JSON.stringify({
+       name: "@bloxd",
+       types: "index.d.ts"
+     }, null, "\t") + "\n";
```

#### 3. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L12-L17` → after: `L19-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L19-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/293.js#L19-L42) · [Before (L12-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/293.js#L12-L17)

```diff
-     function Oz(zz, tz) {
-       if ("string" === typeof zz) {
-         const sz = (0, Xz.f)(zz);
-         return sz ? new Blob([(0, Xz.b)(sz.base64)], {
-           type: sz.mimeType || tz
-         }) : null
+     function lv(vv) {
+       return vv.replace(/^\//, "")
+     }
+ 
+     function Tv(vv) {
+       return lv((0, pv.q)(vv.name, "")).replace(/\/$/, "")
+     }
+ 
+     function Wv(vv) {
+       return vv.typesVfsPath.slice(vv.typesVfsPath.lastIndexOf("/") + 1)
+     }
+ 
+     function wv(vv) {
+       return JSON.stringify({
+         name: vv.specifier,
+         types: Wv(vv)
+ ... (8 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L19-L21` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/293.js#L44) · [Before (L19-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/293.js#L19-L21)

```diff
-       return zz instanceof Blob ? zz : new Blob([zz], {
-         type: tz
-       })
+       return Pv
```

#### 5. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L23-L30` → after: `L46-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L46-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/293.js#L46-L59) · [Before (L23-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/293.js#L23-L30)

```diff
-     const oz = function(zz, tz, sz, Fz) {
-       let Xz, oz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
-         vz = arguments.length > 5 ? arguments[5] : void 0,
-         Uz = arguments.length > 6 ? arguments[6] : void 0;
-       try {
-         Xz = Oz(zz, oz)
-       } catch {
-         Xz = null
+     async function sv(vv, zv, Pv) {
+       const hv = Tv(zv),
+         Sv = await (0, dv.i)(vv, hv);
+       if (!Sv) return;
+       const ev = new Set([Wv(zv), "package.json"]);
+       if (Pv)
+         for (const dv of Object.keys(zv.files)) ev.add(dv);
+       const gv = await av(Sv),
+         pv = new Set;
+       for (const Tv of gv) {
+         if (ev.has(Tv)) continue;
+         await (0, dv.I)(vv, `${hv}/${Tv}`);
+         const zv = Tv.split("/");
+         for (let vv = 1; vv < zv.length; vv++) pv.add(zv.slice(0, vv).join("/"))
```

#### 6. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L32-L42` → after: `L61-L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L61-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/293.js#L61-L68) · [Before (L32-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/293.js#L32-L42)

```diff
-       return Xz ? (createImageBitmap(Xz, {
-         premultiplyAlpha: "none",
-         colorSpaceConversion: "none",
-         ...vz
-       }).then((zz => {
-         tz(zz)
-       }), (() => {
-         (0, Wz.e)(zz, tz, sz, Fz, oz, vz, Uz)
-       })), null) : (0, Wz.e)(zz, tz, sz, Fz, oz, vz, Uz)
-     };
-     let vz = "idle";
+       const Nv = [...pv].sort(((vv, zv) => zv.split("/").length - vv.split("/").length));
+       for (const Tv of Nv) try {
+         await (0, dv.I)(vv, `${hv}/${Tv}`)
+       } catch (lv) {
+         if (lv instanceof DOMException && "InvalidModificationError" === lv.name) continue;
+         throw lv
+       }
+     }
```

#### 7. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L44-L63` → after: `L70-L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L70-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/293.js#L70-L94) · [Before (L44-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/293.js#L44-L63)

```diff
-     function Uz() {
-       "idle" === vz && "function" === typeof createImageBitmap && (vz = "pending", async function() {
-         const zz = document.createElement("canvas");
-         zz.width = 1, zz.height = 2;
-         const tz = zz.getContext("2d");
-         if (!tz) throw new Error("2d context unavailable");
-         tz.fillStyle = "#f00", tz.fillRect(0, 0, 1, 1), tz.fillStyle = "#0f0", tz.fillRect(0, 1, 1, 1);
-         const sz = Oz(zz.toDataURL(), "");
-         if (!sz) throw new Error("toDataURL did not produce a base64 data URL");
-         const Fz = await createImageBitmap(sz, {
-           premultiplyAlpha: "none",
-           colorSpaceConversion: "none",
-           imageOrientation: "flipY"
-         });
-         tz.drawImage(Fz, 0, 0);
-         const Wz = tz.getImageData(0, 0, 1, 1).data;
- ... (4 more removed lines; see GitHub link above)
+     function Cv(vv) {
+       const zv = {
+         "@bloxd": ["./node_modules/@bloxd/index.d.ts"]
+       };
+       for (const hv of Object.values(gv.e)) zv[hv.specifier] = [`.${hv.typesVfsPath}`];
+       const Pv = [];
+       for (const hv of vv)
+         for (const vv of Object.keys(hv.files)) Pv.push(lv((0, pv.q)(hv.name, vv)));
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

#### 8. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L65-L72` → after: `L96-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L96-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/293.js#L96-L108) · [Before (L65-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/293.js#L65-L72)

```diff
-   },
-   40661: (zz, tz, sz) => {
-     sz.d(tz, {
-       c: () => Fz.g,
-       e: () => Fz.p
-     });
-     var Fz = sz(39205);
-     (0, Fz.t)()
+     async function iv(vv) {
+       let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
+       const Pv = new Set(zv.map((vv => vv.name))),
+         Wv = Object.values(gv.e).flatMap((zv => {
+           const hv = lv(zv.typesVfsPath),
+             Sv = `${Tv(zv)}/package.json`;
+           return [...Pv.has(zv.name) ? Object.entries(zv.files).map((Pv => {
+             let [hv, Sv] = Pv;
+             return (0, dv.O)(vv, lv((0, pv.q)(zv.name, hv)), Sv)
+           })) : [], (0, dv.O)(vv, hv, zv.types), (0, dv.O)(vv, Sv, wv(zv))]
+         }));
+       await Promise.all([(0, dv.O)(vv, "node_modules/@bloxd/index.d.ts", hv.default), (0, dv.O)(vv, "node_modules/@bloxd/globals.d.ts", ev.d), (0, dv.O)(vv, "node_modules/@bloxd/lib.d.ts", Sv.e), (0, dv.O)(vv, "node_modules/@bloxd/package.json", Nv), (0, dv.O)(vv, "tsconfig.json" … [truncated]
+     }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/294.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/294.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b)

#### 1. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L4-L235` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/294.js#L4-L6) · [Before (L4-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/294.js#L4-L235)

```diff
-   40734: (zz, tz, sz) => {
-     sz.d(tz, {
-       b: () => Xz
-     });
-     var Fz = sz(39270),
-       Wz = sz(40742);
-     class Xz {
-       constructor(zz, tz) {
-         let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
-         this.maxDepth = sz, this.zFz = [], this._maxBlockCapacity = tz || 64, this._selectionContent = new Fz.e(1024), this._creationFunc = zz
-       }
-       update(zz, tz, sz) {
-         Wz.b._CreateBlocks(zz, tz, sz, this._maxBlockCapacity, 0, this.maxDepth, this, this._creationFunc)
-       }
-       ksz(zz) {
-         for (let tz = 0; tz < this.blocks.length; tz++) {
- ... (216 more removed lines; see GitHub link above)
+   40839: (vv, zv, Pv) => {
+     Pv.r(zv), Pv.d(zv, {
+       installImageBitmapTextureLoader: () => Nv
```

#### 2. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L237-L486` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/294.js#L8-L10) · [Before (L237-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/294.js#L237-L486)

```diff
-     var Fz = sz(36479),
-       Wz = sz(36475),
-       Xz = sz(36487),
-       Oz = sz(39467),
-       oz = sz(39284),
-       vz = sz(36502),
-       Uz = sz(39342);
-     const Kz = {
-       internalPickerForMesh: void 0
-     };
-     class uz {
-       constructor(zz, tz) {
-         let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.MAX_VALUE,
-           Wz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Fz.c;
-         this.origin = zz, this.direction = tz, this.length = sz, this.epsilon = Wz
-       }
- ... (234 more removed lines; see GitHub link above)
+     var hv = Pv(39184),
+       Sv = Pv(40846),
+       ev = Pv(2982);
```

#### 3. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L489-L590` → after: `L13-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L13-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/294.js#L13-L17) · [Before (L489-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/294.js#L489-L590)

```diff
-       return "InstancedLinesMesh" === zz || "LinesMesh" === zz ? tz.intersectionThreshold : 0
-     }
- 
-     function Pz(zz) {
-       const tz = zz.getClassName();
-       if ("GreasedLineMesh" === tz) return {
-         rawBoundingInfo: null,
-         intersectionThreshold: 0
-       };
-       const sz = zz.rawBoundingInfo;
-       return {
-         rawBoundingInfo: sz,
-         intersectionThreshold: sz ? Bz(tz, zz) : 0
-       }
-     }
- 
- ... (86 more removed lines; see GitHub link above)
+       if ("string" === typeof vv) {
+         const Pv = (0, ev.i)(vv);
+         return Pv ? new Blob([(0, ev.e)(Pv.base64)], {
+           type: Pv.mimeType || zv
+         }) : null
```

#### 4. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L592-L639` → after: `L19-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L19-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/294.js#L19-L20) · [Before (L592-L639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/294.js#L592-L639)

```diff
-       return Xz
-     }
- 
-     function mz(zz, tz, sz, Fz, Xz, Oz) {
-       if (!oz.e) return null;
-       const vz = Yz(zz, (Fz => (zz._tempPickingRay || (zz._tempPickingRay = uz.Zero()), bz(zz, tz, sz, Fz, zz._tempPickingRay, Oz || null), zz._tempPickingRay)), Fz, Xz, !0);
-       return vz && (vz.ray = Nz(zz, tz, sz, Wz.e.Identity(), Oz || null)), vz
-     }
- 
-     function Jz(zz, tz, sz, Fz, Xz, Oz, oz) {
-       const vz = Yz(zz, ((Fz, Wz) => (zz._tempPickingRay || (zz._tempPickingRay = uz.Zero()), bz(zz, tz, sz, Fz, zz._tempPickingRay, Oz || null, !1, Wz), zz._tempPickingRay)), Fz, Xz, !1, oz);
-       return vz && (vz.ray = Nz(zz, tz, sz, Wz.e.Identity(), Oz || null)), vz
-     }
- 
-     function Iz(zz, tz, sz, Fz, Xz) {
-       const Oz = Yz(zz, (sz => (zz._pickWithRayInverseMatrix || (zz._pickWithRayInverseMatrix = Wz.e.Identity()), sz.invertToRef(zz._pickWithRayInverseMatrix), zz._cachedRayForTransform || (zz._cachedRayForTransform = uz.Zero()), uz.TransformToRef(tz, zz._pickWithRayInverseMatrix … [truncated]
- ... (32 more removed lines; see GitHub link above)
+       return vv instanceof Blob ? vv : new Blob([vv], {
+         type: zv
```

#### 5. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L642-L904` → after: `L23-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L23-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/294.js#L23-L64) · [Before (L642-L904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/294.js#L642-L904)

```diff
-     uz._TmpVector3 = (0, Xz.c)(6, Wz.p.Zero), uz._RayDistant = uz.Zero(), uz._Smallnum = 1e-8, uz._Rayl = 1e9
-   },
-   40674: (zz, tz, sz) => {
-     sz.d(tz, {
-       d: () => Xz.E
-     });
-     var Fz = sz(39256),
-       Wz = sz(39370),
-       Xz = sz(40681);
-     let Oz = !1;
-     Oz || (Oz = !0, (0, Xz.d)(Fz.i, Wz.b), Fz.i.prototype.createPickingRayToRef = function(zz, tz, sz, Fz, Wz) {
-       let Oz = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-         oz = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
-       return (0, Xz.k)(this, zz, tz, sz, Fz, Wz, Oz, oz)
-     }, Fz.i.prototype.createPickingRayInCameraSpace = function(zz, tz, sz) {
-       return (0, Xz.g)(this, zz, tz, sz)
- ... (247 more removed lines; see GitHub link above)
+     const pv = function(vv, zv, Pv, hv) {
+       let ev, pv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
+         dv = arguments.length > 5 ? arguments[5] : void 0,
+         Nv = arguments.length > 6 ? arguments[6] : void 0;
+       try {
+         ev = gv(vv, pv)
+       } catch {
+         ev = null
+       }
+       return ev ? (createImageBitmap(ev, {
+         premultiplyAlpha: "none",
+         colorSpaceConversion: "none",
+         ...dv
+       }).then((vv => {
+         zv(vv)
+       }), (() => {
+ ... (26 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L906` → after: `L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/294.js#L66) · [Before (L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/294.js#L906)

```diff
-   40706: (zz, tz, sz) => {
+   40846: (vv, zv, Pv) => {
```

#### 7. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L908` → after: `L68-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L68-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/294.js#L68-L69) · [Before (L908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/294.js#L908)

```diff
-       b: () => qt
+       c: () => hv.i,
+       e: () => hv.n
```

#### 8. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L910-L4405` → after: `L71-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L71-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/294.js#L71-L72) · [Before (L910-L4405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/294.js#L910-L4405)

```diff
-     var Fz = sz(38126),
-       Wz = sz(36505),
-       Xz = sz(36475),
-       Oz = sz(39293),
-       oz = sz(40715),
-       vz = sz(36502),
-       Uz = sz(39439),
-       Kz = sz(36654),
-       uz = sz(38131),
-       Nz = sz(38091),
-       bz = sz(36507);
-     class wz {
-       constructor() {
-         this.direction1 = new Xz.p(0, 1, 0), this.direction2 = new Xz.p(0, 1, 0)
-       }
-       startDirectionFunction(zz, tz, sz, Fz) {
- ... (3480 more removed lines; see GitHub link above)
+     var hv = Pv(39338);
+     (0, hv.v)()
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/295.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/295.js` (51 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617)

#### 1. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/295.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/295.js#L4)

```diff
-   40816: (zz, tz, sz) => {
+   40924: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L6-L11` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/295.js#L6) · [Before (L6-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/295.js#L6-L11)

```diff
-       b: () => Nz,
-       d: () => Hz,
-       f: () => bz,
-       j: () => wz,
-       l: () => Pz,
-       n: () => Bz
+       b: () => ev
```

#### 3. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L13-L56` → after: `L8-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L8-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/295.js#L8-L13) · [Before (L13-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/295.js#L13-L56)

```diff
-     var Fz = sz(40773);
-     var Wz = "Babylon Lite v1.32.0",
-       Xz = sz(40820);
- 
-     function Oz(zz) {
-       return "clientWidth" in zz
-     }
-     var oz = 1;
- 
-     function vz(zz, tz, sz) {
-       const vz = tz.getContext("webgpu");
-       vz || (0, Fz.b)(54), Oz(tz) && tz.setAttribute("data-engine", Wz);
-       const Uz = sz?.format ?? navigator.gpu.getPreferredCanvasFormat(),
-         Kz = sz?.srgb ? (uz = Uz).endsWith("-srgb") ? uz : `${uz}-srgb` : Uz;
-       var uz;
-       const Nz = sz?.alphaMode ?? "opaque";
- ... (28 more removed lines; see GitHub link above)
+     var hv = Pv(39413),
+       Sv = Pv(40929);
+     class ev {
+       constructor(vv, zv) {
+         let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
+         this.maxDepth = Pv, this.FPv = [], this._maxBlockCapacity = zv || 64, this._selectionContent = new hv.e(1024), this._creationFunc = vv
```

#### 4. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L58-L84` → after: `L15-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L15-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/295.js#L15-L47) · [Before (L58-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/295.js#L58-L84)

```diff
-     }
- 
-     function Uz(zz) {
-       const tz = zz._context.getCurrentTexture(),
-         sz = zz.scRT;
-       sz._colorTexture = tz, sz._colorView = tz.createView({
-         format: zz.format
-       }), sz._width = tz.width, sz._height = tz.height
-     }
- 
-     function Kz(zz) {
-       const tz = zz.canvas;
-       if (!Oz(tz)) return;
-       const sz = zz._w ?? tz.clientWidth,
-         Fz = zz._h ?? tz.clientHeight;
-       if (!(sz > 0 && Fz > 0)) return;
- ... (11 more removed lines; see GitHub link above)
+       update(vv, zv, Pv) {
+         Sv.c._CreateBlocks(vv, zv, Pv, this._maxBlockCapacity, 0, this.maxDepth, this, this._creationFunc)
+       }
+       NPv(vv) {
+         for (let zv = 0; zv < this.blocks.length; zv++) {
+           this.blocks[zv].addEntry(vv)
+         }
+       }
+       sK(vv) {
+         for (let zv = 0; zv < this.blocks.length; zv++) {
+           this.blocks[zv].removeEntry(vv)
+         }
+       }
+       select(vv, zv) {
+         this._selectionContent.reset();
+         for (let Pv = 0; Pv < this.blocks.length; Pv++) {
+ ... (17 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L87-L165` → after: `L50-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L50-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/295.js#L50-L54) · [Before (L87-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/295.js#L87-L165)

```diff
-     var Nz = 0;
- 
-     function bz(zz, tz) {
-       return -1 !== zz._renderingContexts.indexOf(tz)
-     }
- 
-     function wz(zz, tz) {
-       return -1 === zz._renderingContexts.indexOf(tz) && (zz._renderingContexts.push(tz), !0)
-     }
-     var Dz = null;
-     var gz = ["float32-filterable", "texture-compression-astc", "texture-compression-bc", "texture-compression-etc2", "texture-compression-unaligned", "timestamp-query", "primitive-index"];
-     async function Hz(zz, tz) {
-       const Xz = await navigator.gpu.requestAdapter({
-         powerPreference: "high-performance",
-         ...Dz ? Dz() : {}
-       });
- ... (63 more removed lines; see GitHub link above)
+     ev.CreationFuncForMeshes = (vv, zv) => {
+       const Pv = vv.cV();
+       !vv.isBlocked && Pv.boundingBox.intersectsMinMax(zv.aPv, zv.wPv) && zv.entries.push(vv)
+     }, ev.CreationFuncForSubMeshes = (vv, zv) => {
+       vv.cV().boundingBox.intersectsMinMax(zv.aPv, zv.wPv) && zv.entries.push(vv)
```

#### 6. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L167-L185` → after: `L56-L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L56-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/295.js#L56-L85) · [Before (L167-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/295.js#L167-L185)

```diff
- 
-     function rz(zz, tz) {
-       let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : zz._surfaces,
-         Fz = 0;
-       for (let Xz = sz.length; Xz--;) Fz += sz[Xz]._renderingContexts.length;
-       if (!Fz) return zz.drawCallCount = 0, zz._flushGpuRetirements?.(zz);
-       const Wz = zz._device.createCommandEncoder({
-         label: "frame"
-       });
-       zz._currentEncoder = Wz, zz._currentDelta = tz;
-       try {
-         zz._gpuTimerBegin?.(Wz), Fz = 0;
-         for (let zz = 0; zz < sz.length; zz++) {
-           const tz = sz[zz];
-           tz._capturePreFrame?.(tz), Uz(tz);
-           const Wz = tz._renderingContexts;
- ... (3 more removed lines; see GitHub link above)
+   },
+   40929: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       c: () => ev
+     });
+     var hv = Pv(36594),
+       Sv = Pv(39611);
+     class ev {
+       constructor(vv, zv, Pv, hv, Sv, ev) {
+         this.entries = [], this.YPv = new Array, this._capacity = Pv, this._depth = hv, this._maxDepth = Sv, this._creationFunc = ev, this._minPoint = vv, this._maxPoint = zv, this.YPv.push(vv.clone()), this.YPv.push(zv.clone()), this.YPv.push(vv.clone()), this.YPv[2].x = zv.x, t … [truncated]
+       }
+       get GT() {
+         return this._capacity
+       }
+       get aPv() {
+         return this._minPoint
+ ... (14 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L188` → after: `L89-L92`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L89-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/295.js#L89-L92) · [Before (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/295.js#L188)

```diff
-         const tz = zz._currentEncoder;
+         const zv = this.entries.indexOf(vv);
+         zv > -1 && this.entries.splice(zv, 1)
+       }
+       addEntries(vv) {
```

#### 8. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L191` → after: `L95-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L95-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/295.js#L95-L128) · [Before (L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/295.js#L191)

```diff
-           Fz._captureService?.(Fz, tz)
+           this.addEntry(Pv)
+         }
+       }
+       select(vv, zv, Pv) {
+         if (Sv.c.IsInFrustum(this.YPv, vv)) {
+           if (this.blocks) {
+             for (let hv = 0; hv < this.blocks.length; hv++) {
+               this.blocks[hv].select(vv, zv, Pv)
+             }
+             return
+           }
+           Pv ? zv.concat(this.entries) : zv.concatWithNoDuplicate(this.entries)
+         }
+       }
+       intersects(vv, zv, Pv, hv) {
+         if (Sv.c.IntersectsSphere(this._minPoint, this._maxPoint, vv, zv)) {
+ ... (18 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L193-L195` → after: `L130-L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L130-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/295.js#L130-L144) · [Before (L193-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/295.js#L193-L195)

```diff
-         zz._gpuTimerEnd?.(tz), zz._cbs[0] = tz.finish(), zz._device.queue.submit(zz._cbs), zz._flushGpuRetirements?.(zz), zz.drawCallCount = Fz, zz._gpuTimerResolve?.()
-       } finally {
-         zz._currentEncoder = void 0
+       }
+       createInnerBlocks() {
+         ev._CreateBlocks(this._minPoint, this._maxPoint, this.entries, this._capacity, this._depth, this._maxDepth, this, this._creationFunc), this.entries.splice(0)
+       }
+       static _CreateBlocks(vv, zv, Pv, Sv, gv, pv, dv, Nv) {
+         dv.blocks = new Array;
+         const lv = new hv.l((zv.x - vv.x) / 2, (zv.y - vv.y) / 2, (zv.z - vv.z) / 2);
+         for (let hv = 0; hv < 2; hv++)
+           for (let zv = 0; zv < 2; zv++)
+             for (let Tv = 0; Tv < 2; Tv++) {
+               const Wv = vv.add(lv.multiplyByFloats(hv, zv, Tv)),
+                 wv = vv.add(lv.multiplyByFloats(hv + 1, zv + 1, Tv + 1)),
+                 av = new ev(Wv, wv, Sv, gv + 1, pv, Nv);
+               av.addEntries(Pv), dv.blocks.push(av)
+             }
```

#### 10. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L199` → after: `L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/295.js#L148) · [Before (L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/295.js#L199)

```diff
-   40777: (zz, tz, sz) => {
+   40931: (vv, zv, Pv) => {
```

#### 11. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L201-L203` → after: `L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/295.js#L150) · [Before (L201-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/295.js#L201-L203)

```diff
-       d: () => Wz,
-       g: () => Xz,
-       k: () => Fz
+       e: () => lv
```

#### 12. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L205-L219` → after: `L152-L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L152-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/295.js#L152-L161) · [Before (L205-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/295.js#L205-L219)

```diff
-     var Fz = globalThis.GPUTextureUsage,
-       Wz = globalThis.GPUBufferUsage,
-       Xz = globalThis.GPUShaderStage;
-     globalThis.GPUColorWrite
-   },
-   40840: (zz, tz, sz) => {
-     function Fz(zz) {
-       Wz(zz.splice(0))
-     }
- 
-     function Wz(zz) {
-       for (const sz of zz) try {
-         sz()
-       } catch (tz) {
-         console.error("GPU resource retirement failed.", tz)
+     var hv = Pv(39395),
+       Sv = Pv(36594),
+       ev = Pv(39754),
+       gv = Pv(40867),
+       pv = Pv(39477),
+       dv = Pv(36615),
+       Nv = Pv(40924);
+     class lv {
+       constructor(vv) {
+         this.name = pv.d.NAME_OCTREE, this.checksIsEnabled = !0, this._tempRay = new gv.y(Sv.l.Zero(), new Sv.l(1, 1, 1)), (vv = vv || dv.e.LastCreatedScene) && (this.Is = vv, this.Is.getActiveMeshCandidates = () => this.getActiveMeshCandidates(), this.Is.getActiveSubMeshCandidat … [truncated]
```

#### 13. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L222-L239` → after: `L200-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L200-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/295.js#L200-L221) · [Before (L222-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/295.js#L222-L239)

```diff
- 
-     function Xz(zz, tz) {
-       zz._flushGpuRetirements ??= Oz, (zz._retirements ??= []).push(tz)
-     }
- 
-     function Oz(zz) {
-       const tz = zz._retirements;
-       if (!tz) return;
-       zz._retirements = null;
-       const sz = zz._retiring ??= new Set;
-       sz.add(tz), queueMicrotask((() => {
-         zz._device.queue.onSubmittedWorkDone().then((() => {
-           sz.delete(tz), Fz(tz)
-         })).catch((() => {}))
-       }))
-     }
- ... (2 more removed lines; see GitHub link above)
+     let Tv = !1;
+     Tv || (Tv = !0, hv.g.prototype.createOrUpdateSelectionOctree = function() {
+       let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
+         zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
+         Pv = this._getComponent(pv.d.NAME_OCTREE);
+       Pv || (Pv = new lv(this), this.Ezv(Pv)), this.RPv || (this.RPv = new Nv.b(Nv.b.CreationFuncForMeshes, vv, zv));
+       const hv = this.getWorldExtends();
+       return this.RPv.update(hv.min, hv.max, this.meshes), this.RPv
+     }, Object.defineProperty(hv.g.prototype, "selectionOctree", {
+       get: function() {
+         return this.RPv
+       },
+       enumerable: !0,
+       configurable: !0
+     }), ev.c.prototype.createOrUpdateSubmeshesOctree = function() {
+       let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
+ ... (6 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L242` → after: `L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/295.js#L224) · [Before (L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/295.js#L242)

```diff
-   40820: (zz, tz, sz) => {
+   40867: (vv, zv, Pv) => {
```

#### 15. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L245-L246` → after: `L227-L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L227-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/295.js#L227-L235) · [Before (L245-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/295.js#L245-L246)

```diff
-       d: () => Oz,
-       e: () => oz
+       f: () => sv,
+       g: () => av,
+       i: () => wv,
+       m: () => Dv,
+       o: () => Ov,
+       r: () => Fv,
+       s: () => nv,
+       v: () => Yv,
+       y: () => Tv
```

#### 16. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L248-L264` → after: `L237-L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L237-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/295.js#L237-L251) · [Before (L248-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/295.js#L248-L264)

```diff
-     var Fz = sz(40777);
- 
-     function Wz(zz) {
-       const tz = zz.size;
-       return "canvas" in tz ? tz.canvas : tz
-     }
- 
-     function Xz(zz) {
-       return {
-         _descriptor: zz,
-         _resolveSize: Wz,
-         _colorTexture: null,
-         _colorView: null,
-         _depthTexture: null,
-         _depthView: null,
-         _width: 0,
- ... (1 more removed lines; see GitHub link above)
+     var hv = Pv(36599),
+       Sv = Pv(36594),
+       ev = Pv(36602),
+       gv = Pv(39602),
+       pv = Pv(39438),
+       dv = Pv(36615),
+       Nv = Pv(39493);
+     const lv = {
+       internalPickerForMesh: void 0
+     };
+     class Tv {
+       constructor(vv, zv) {
+         let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.MAX_VALUE,
+           Sv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : hv.e;
+         this.origin = vv, this.direction = zv, this.length = Pv, this.epsilon = Sv
```

#### 17. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L266-L271` → after: `L253-L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L253-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/295.js#L253-L312) · [Before (L266-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/295.js#L266-L271)

```diff
-     }
- 
-     function Oz(zz, tz) {
-       if (zz._eager) return void zz._syncEager?.(tz);
-       oz(zz);
-       const sz = zz._descriptor,
+       clone() {
+         return new Tv(this.origin.clone(), this.direction.clone(), this.length)
+       }
+       intersectsBoxMinMax(vv, zv) {
+         let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+         const hv = Tv._TmpVector3[0].f_(vv.x - Pv, vv.y - Pv, vv.z - Pv),
+           Sv = Tv._TmpVector3[1].f_(zv.x + Pv, zv.y + Pv, zv.z + Pv);
+         let ev, gv, pv, dv, Nv = 0,
+           lv = Number.MAX_VALUE;
+         if (Math.abs(this.direction.x) < 1e-7) {
+           if (this.origin.x < hv.x || this.origin.x > Sv.x) return !1
+         } else if (ev = 1 / this.direction.x, gv = (hv.x - this.origin.x) * ev, pv = (Sv.x - this.origin.x) * ev, pv === -1 / 0 && (pv = 1 / 0), gv > pv && (dv = gv, gv = pv, pv = dv), Nv = Math.max(gv, Nv), lv = Math.min(pv, lv), Nv > lv) return !1;
+         if (Math.abs(this.direction.y) < 1e-7) {
+           if (this.origin.y < hv.y || this.origin.y > Sv.y) return !1
+         } else if (ev = 1 / this.direction.y, gv = (hv.y - this.origin.y) * ev, pv = (Sv.y - this.origin.y) * ev, pv === -1 / 0 && (pv = 1 / 0), gv > pv && (dv = gv, gv = pv, pv = dv), Nv = Math.max(gv, Nv), lv = Math.min(pv, lv), Nv > lv) return !1;
+         if (Math.abs(this.direction.z) < 1e-7) {
+ ... (44 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L273-L307` → after: `L314-L430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L314-L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/295.js#L314-L430) · [Before (L273-L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/295.js#L273-L307)

```diff
-           width: Xz,
-           height: Oz
-         } = (zz._resolveSize ?? Wz)(sz);
-       zz._width = Xz, zz._height = Oz;
-       const vz = tz._device;
-       sz.format && (zz._colorTexture = vz.createTexture({
-         label: sz.lbl,
-         size: {
-           width: Xz,
-           height: Oz
-         },
-         format: sz.format,
-         sampleCount: sz.samples,
-         usage: Fz.k.RENDER_ATTACHMENT | Fz.k.TEXTURE_BINDING | Fz.k.COPY_SRC | Fz.k.COPY_DST
-       }), zz._colorView = zz._colorTexture.createView()), sz.dFormat && (zz._depthTexture = vz.createTexture({
-         label: sz.lbl,
- ... (19 more removed lines; see GitHub link above)
+           const hv = Sv.l.Dot(vv.normal, this.origin);
+           return zv = (-vv.d - hv) / Pv, zv < 0 ? zv < -9.99999997475243e-7 ? null : 0 : zv
+         }
+       }
+       intersectsAxis(vv) {
+         let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         switch (vv) {
+           case "y": {
+             const vv = (this.origin.y - zv) / this.direction.y;
+             return vv > 0 ? null : new Sv.l(this.origin.x + this.direction.x * -vv, zv, this.origin.z + this.direction.z * -vv)
+           }
+           case "x": {
+             const vv = (this.origin.x - zv) / this.direction.x;
+             return vv > 0 ? null : new Sv.l(zv, this.origin.y + this.direction.y * -vv, this.origin.z + this.direction.z * -vv)
+           }
+           case "z": {
+ ... (101 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L345-L351` → after: `L434-L437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L434-L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/295.js#L434-L437) · [Before (L345-L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/295.js#L345-L351)

```diff
-     function Wz(zz) {
-       let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
-       const sz = tz.compare,
-         Wz = tz.lodMinClamp ?? 0,
-         Xz = tz.lodMaxClamp ?? 32,
-         Oz = void 0 !== sz || 0 !== Wz || 32 !== Xz ? `${sz??""}:${Wz}:${Xz}` : "";
-       return (0, Fz.c)(zz, tz, Oz)
+     function Wv(vv, zv, Pv, hv, Sv) {
+       let ev = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
+       const gv = Tv.Zero();
+       return wv(vv, zv, Pv, hv, gv, Sv, ev), gv
```

#### 20. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L360-L362` → after: `L440-L454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L440-L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/295.js#L440-L454) · [Before (L360-L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/295.js#L360-L362)

```diff
-     function Wz(zz) {
-       const tz = Fz ??= new WeakMap;
-       tz.set(zz, (tz.get(zz) ?? 0) + 1)
+     function wv(vv, zv, Pv, hv, ev, gv) {
+       let pv = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
+         dv = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
+       const Nv = vv.ma();
+       if (!gv && !(gv = vv.activeCamera) && !(gv = vv.cameraToUseForPointers)) return vv;
+       const lv = gv.viewport,
+         Tv = Nv.getRenderHeight(),
+         {
+           x: Wv,
+           y: wv,
+           width: av,
+           height: sv
+         } = lv.toGlobal(Nv.getRenderWidth(), Tv),
+         Cv = 1 / Nv.getHardwareScalingLevel();
+       return zv = zv * Cv - Wv, Pv = Pv * Cv - (Tv - wv - sv), ev.update(zv, Pv, av, sv, hv || Sv.c.IdentityReadOnly, pv ? Sv.c.IdentityReadOnly : gv.getViewMatrix(), gv.getProjectionMatrix(), dv), vv
```

#### 21. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L365-L366` → after: `L457-L459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L457-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/295.js#L457-L459) · [Before (L365-L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/295.js#L365-L366)

```diff
-     function Xz(zz) {
-       Wz(zz.texture)
+     function av(vv, zv, Pv, hv) {
+       const Sv = Tv.Zero();
+       return sv(vv, zv, Pv, Sv, hv), Sv
```

#### 22. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L386-L399` → after: `L462-L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L462-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/295.js#L462-L476) · [Before (L386-L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/295.js#L386-L399)

```diff
-     function oz(zz) {
-       let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
-         sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
-       const Wz = zz._device,
-         Xz = Fz ??= new WeakMap;
-       let oz = Xz.get(Wz);
-       oz || Xz.set(Wz, oz = new Map);
-       let vz = sz;
-       for (const Fz in Oz) {
-         const zz = Fz;
-         vz += `:${tz[zz]??Oz[zz]}`
-       }
-       let Uz = oz.get(vz);
-       return Uz || oz.set(vz, Uz = Wz.createSampler(tz)), Uz
+     function sv(vv, zv, Pv, hv, ev) {
+       if (!pv.c) return vv;
+       const gv = vv.ma();
+       if (!ev && !(ev = vv.activeCamera) && !(ev = vv.cameraToUseForPointers)) throw new Error("Active camera not set");
+       const dv = ev.viewport,
+         Nv = gv.getRenderHeight(),
+         {
+           x: lv,
+           y: Tv,
+           width: Wv,
+           height: wv
+         } = dv.toGlobal(gv.getRenderWidth(), Nv),
+         av = Sv.c.Identity(),
+         sv = 1 / gv.getHardwareScalingLevel();
+       return zv = zv * sv - lv, Pv = Pv * sv - (Nv - Tv - wv), hv.update(zv, Pv, Wv, wv, av, av, ev.getProjectionMatrix()), vv
```

#### 23. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L410-L416` → after: `L479-L480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L479-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/295.js#L479-L480) · [Before (L410-L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/295.js#L410-L416)

```diff
-     function Xz(zz, tz) {
-       tz._passes.length = 0, zz._currentProcessedTask = tz;
-       try {
-         tz.record()
-       } finally {
-         zz._currentProcessedTask = null
-       }
+     function Cv(vv, zv, Pv, hv, Sv, ev, gv, pv) {
+       return iv(vv, Pv, hv, zv(hv, Pv.enableDistantPicking), Sv, ev, gv, pv)
```

#### 24. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L433-L434` → after: `L483-L485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L483-L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/295.js#L483-L485) · [Before (L433-L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/295.js#L433-L434)

```diff
-     function Uz(zz) {
-       return zz._projFov === zz.fov && zz._projNear === zz.nearPlane && zz._projFar === zz.farPlane || (zz._projFov = zz.fov, zz._projNear = zz.nearPlane, zz._projFar = zz.farPlane, zz._projRev = (zz._projRev ?? 0) + 1), zz.worldMatrixVersion + (zz._projRev ?? 0)
+     function iv(vv, zv, Pv, hv, Sv, ev, gv, pv) {
+       const dv = zv.intersects(hv, Sv, gv, ev, Pv, pv);
+       return dv && dv.hit ? !Sv && null != vv && dv.distance >= vv.distance ? null : dv : null
```

#### 25. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L438-L490` → after: `L489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/295.js#L489) · [Before (L438-L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/295.js#L438-L490)

```diff
-       const sz = Uz(zz);
-       if (zz._projVer === sz && zz._projAspect === tz) return zz._projCache;
-       const Fz = zz._projCache;
-       return null !== vz && zz.ortho ? vz(zz, tz, Fz) : function(zz, tz, sz, Fz, Wz) {
-         const Xz = 1 / Math.tan(.5 * tz),
-           Oz = Wz - Fz;
-         zz[0] = Xz / sz, zz[5] = Xz, zz[10] = -Fz / Oz, zz[11] = 1, zz[14] = Wz * Fz / Oz
-       }(Fz, zz.fov, tz, zz.nearPlane, zz.farPlane), zz._projVer = sz, zz._projAspect = tz, Fz
-     }
-     var uz = sz(40777);
- 
-     function Nz(zz, tz, sz) {
-       return zz._device.createBuffer({
-         label: sz,
-         size: (Fz = tz, Wz = 16, Math.ceil(Fz / Wz) * Wz),
-         usage: uz.d.UNIFORM | uz.d.COPY_DST
- ... (37 more removed lines; see GitHub link above)
+       return "InstancedLinesMesh" === vv || "LinesMesh" === vv ? zv.intersectionThreshold : 0
```

#### 26. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L497-L507` → after: `L493-L501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L493-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/295.js#L493-L501) · [Before (L497-L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/295.js#L497-L507)

```diff
-       let tz = 0;
-       for (const sz of zz) tz += sz._lightVersion ?? 0;
-       return tz
-     }
- 
-     function Yz(zz, tz) {
-       zz.fill(0);
-       let sz = 0;
-       for (const Fz of tz) {
-         if (sz >= Hz.e) break;
-         Fz._writeLightUbo && (Fz._writeLightUbo(zz, 4 + 16 * sz), sz++)
+       const zv = vv.getClassName();
+       if ("GreasedLineMesh" === zv) return {
+         rawBoundingInfo: null,
+         intersectionThreshold: 0
+       };
+       const Pv = vv.rawBoundingInfo;
+       return {
+         rawBoundingInfo: Pv,
+         intersectionThreshold: Pv ? cv(zv, vv) : 0
```

#### 27. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L542-L575` → after: `L506-L507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L506-L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/295.js#L506-L507) · [Before (L542-L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/295.js#L542-L575)

```diff
-       zz.fill(0);
-       const Xz = function(zz, tz) {
-           const sz = Uz(zz);
-           if (zz._vpVer === sz && zz._vpAspect === tz) return zz._vpCache;
-           const Fz = zz._vpCache;
-           return function(zz, tz, sz, Fz, Wz, Xz) {
-             const Oz = sz[Fz],
-               oz = sz[Fz + 1],
-               vz = sz[Fz + 2],
-               Uz = sz[Fz + 3],
-               Kz = sz[Fz + 4],
-               uz = sz[Fz + 5],
-               Nz = sz[Fz + 6],
-               bz = sz[Fz + 7],
-               wz = sz[Fz + 8],
-               Dz = sz[Fz + 9],
- ... (18 more removed lines; see GitHub link above)
+       const ev = vv(Pv, zv.enableDistantPicking);
+       return ev.intersectsSphere(hv.tPv, Sv) && ev.intersectsBox(hv.boundingBox, Sv) ? ev : null
```

#### 28. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L578-L585` → after: `L510-L548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L510-L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/295.js#L510-L548) · [Before (L578-L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/295.js#L578-L585)

```diff
-     function Iz(zz, tz) {
-       return {
-         _renderables: zz,
-         _opaqueBindings: [],
-         _directBindings: [],
-         _transparentBindings: [],
-         _ob: [],
-         _lastVersion: tz
+     function jv(vv, zv, Pv, hv, ev, gv) {
+       let dv = null;
+       const Nv = !!(vv.activeCameras && vv.activeCameras.length > 1 && vv.cameraToUseForPointers !== vv.activeCamera),
+         Tv = vv.cameraToUseForPointers || vv.activeCamera,
+         Wv = lv.internalPickerForMesh || Cv,
+         wv = Wv === Cv;
+       for (let pv = 0; pv < vv.meshes.length; pv++) {
+         const lv = vv.meshes[pv];
+         if (Pv) {
+           if (!Pv(lv, -1)) continue
+         } else if (!lv.isEnabled() || !lv.isVisible || !lv.Zs) continue;
+         const av = Nv && lv.isWorldMatrixCameraDependent(),
+           sv = lv.computeWorldMatrix(av, Tv);
+         if (lv.hasThinInstances && lv.Fvv) {
+           const vv = Wv(dv, zv, lv, sv, !0, !0, gv);
+           if (vv) {
+ ... (23 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L589-L688` → after: `L553-L585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L553-L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/295.js#L553-L585) · [Before (L589-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/295.js#L589-L688)

```diff
-     function Cz(zz, tz, sz) {
-       zz.clr ??= !0;
-       const Wz = zz.rt._descriptor,
-         Xz = zz.depth?._descriptor,
-         vz = {
-           _colorFormat: Wz.format,
-           _depthStencilFormat: Xz?.dFormat ?? Wz.dFormat,
-           _depthCompare: Wz.depthCompare ?? Xz?.depthCompare,
-           _sampleCount: Wz.samples
-         },
-         Kz = {
-           loadOp: "clear",
-           storeOp: "store"
-         },
-         uz = {
-           ...Iz([], -1),
- ... (84 more removed lines; see GitHub link above)
+     function fv(vv, zv, Pv, hv) {
+       if (!pv.c) return null;
+       const ev = [],
+         gv = !!(vv.activeCameras && vv.activeCameras.length > 1 && vv.cameraToUseForPointers !== vv.activeCamera),
+         dv = vv.cameraToUseForPointers || vv.activeCamera,
+         Nv = lv.internalPickerForMesh || Cv,
+         Tv = Nv === Cv;
+       for (let pv = 0; pv < vv.meshes.length; pv++) {
+         const lv = vv.meshes[pv];
+         if (Pv) {
+           if (!Pv(lv, -1)) continue
+         } else if (!lv.isEnabled() || !lv.isVisible || !lv.Zs) continue;
+         const Wv = gv && lv.isWorldMatrixCameraDependent(),
+           wv = lv.computeWorldMatrix(Wv, dv);
+         if (lv.hasThinInstances && lv.Fvv) {
+           if (Nv(null, zv, lv, wv, !0, !0, hv)) {
+ ... (17 more added lines; see GitHub link above)
```

#### 30. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L690` → after: `L587-L591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L587-L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/295.js#L587-L591) · [Before (L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/295.js#L690)

```diff
-         };
+         } else {
+           const vv = Nv(null, zv, lv, wv, !1, !1, hv);
+           vv && ev.push(vv)
+         }
+       }
```

#### 31. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L694-L695` → after: `L595-L598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L595-L598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/295.js#L595-L598) · [Before (L694-L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/295.js#L694-L695)

```diff
-     function ez(zz, tz) {
-       return tz._sortDistance - zz._sortDistance || zz.renderable.order - tz.renderable.order
+     function Fv(vv, zv, Pv, hv, ev, gv) {
+       if (!pv.c) return null;
+       const dv = jv(vv, (hv => (vv._tempPickingRay || (vv._tempPickingRay = Tv.Zero()), wv(vv, zv, Pv, hv, vv._tempPickingRay, gv || null), vv._tempPickingRay)), hv, ev, !0);
+       return dv && (dv.ray = Wv(vv, zv, Pv, Sv.c.Identity(), gv || null)), dv
```

#### 32. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L698-L699` → after: `L601-L603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L601-L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/295.js#L601-L603) · [Before (L698-L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/295.js#L698-L699)

```diff
-     function Zz(zz, tz) {
-       return zz.renderable.order - tz.renderable.order
+     function Yv(vv, zv, Pv, hv, ev, gv, pv) {
+       const dv = jv(vv, ((hv, Sv) => (vv._tempPickingRay || (vv._tempPickingRay = Tv.Zero()), wv(vv, zv, Pv, hv, vv._tempPickingRay, gv || null, !1, Sv), vv._tempPickingRay)), hv, ev, !1, pv);
+       return dv && (dv.ray = Wv(vv, zv, Pv, Sv.c.Identity(), gv || null)), dv
```

#### 33. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L702-L749` → after: `L606-L608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L606-L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/295.js#L606-L608) · [Before (L702-L749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/295.js#L702-L749)

```diff
-     function Gz(zz) {
-       let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zz._renderables,
-         sz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
-         Wz = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
-         Xz = arguments.length > 4 ? arguments[4] : void 0;
-       const Oz = zz._config,
-         oz = Oz.rt,
-         vz = zz._batchState,
-         Uz = Iz(tz, zz.Kg._renderableVersion);
-       if (sz) {
-         const tz = (tz, sz) => {
-           tz && (sz || zz._ownsTargets || tz._eager) && (0, Fz.d)(tz, zz.engine)
-         };
-         tz(oz), oz._descriptor.samples > 1 && tz(Oz.rst), tz(Oz.depth, !0)
-       }
-       const {
- ... (32 more removed lines; see GitHub link above)
+     function nv(vv, zv, Pv, hv, ev) {
+       const gv = jv(vv, (Pv => (vv._pickWithRayInverseMatrix || (vv._pickWithRayInverseMatrix = Sv.c.Identity()), Pv.invertToRef(vv._pickWithRayInverseMatrix), vv._cachedRayForTransform || (vv._cachedRayForTransform = Tv.Zero()), Tv.TransformToRef(zv, vv._pickWithRayInverseMatrix … [truncated]
+       return gv && (gv.ray = zv), gv
```

#### 34. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L752-L778` → after: `L611-L612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L611-L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/295.js#L611-L612) · [Before (L752-L778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/295.js#L752-L778)

```diff
-     function Tz(zz, tz) {
-       const sz = zz.engine,
-         Fz = zz._config,
-         Xz = Fz.rt,
-         Oz = zz.Kg,
-         oz = zz._opaqueBindings,
-         vz = zz._ob,
-         Uz = zz._sceneBG;
-       if (function(zz, tz, sz, Fz) {
-           const Wz = tz?.viewport;
-           if (!Wz) return;
-           const Xz = Math.floor(Wz.x * sz),
-             Oz = Math.floor((1 - Wz.y - Wz.height) * Fz),
-             oz = Math.ceil((Wz.x + Wz.width) * sz) - Xz,
-             vz = Math.ceil((1 - Wz.y) * Fz) - Oz;
-           zz.setViewport(Xz, Oz, oz, vz, 0, 1), zz.setScissorRect(Xz, Oz, oz, vz)
- ... (11 more removed lines; see GitHub link above)
+     function Ov(vv, zv, Pv, hv, Sv, ev) {
+       return fv(vv, (hv => Wv(vv, zv, Pv, hv, Sv || null)), hv, ev)
```

#### 35. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L781-L799` → after: `L615-L616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L615-L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/295.js#L615-L616) · [Before (L781-L799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/295.js#L781-L799)

```diff
-     function cz(zz, tz) {
-       let sz = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
-       const Fz = xz(tz, zz.Kg)._buffer;
-       if (Fz === zz._lightsUBO) return;
-       const Wz = tz._device.createBindGroup({
-         layout: Dz(tz),
-         entries: [{
-           binding: 0,
-           resource: {
-             buffer: zz._sceneUBO
-           }
-         }, {
-           binding: 1,
-           resource: {
-             buffer: Fz
-           }
- ... (3 more removed lines; see GitHub link above)
+     function Dv(vv, zv, Pv, hv) {
+       return fv(vv, (Pv => (vv._pickWithRayInverseMatrix || (vv._pickWithRayInverseMatrix = Sv.c.Identity()), Pv.invertToRef(vv._pickWithRayInverseMatrix), vv._cachedRayForTransform || (vv._cachedRayForTransform = Tv.Zero()), Tv.TransformToRef(zv, vv._pickWithRayInverseMatrix, vv … [truncated]
```

#### 36. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L803-L862` → after: `L620-L627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L620-L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/295.js#L620-L627) · [Before (L803-L862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/295.js#L803-L862)

```diff
-       for (const sz of zz) sz.update?.(tz)
-     }
- 
-     function Az(zz, tz, sz) {
-       let Fz = null,
-         Wz = 0;
-       for (const Xz of tz) {
-         const tz = Xz.renderable.mesh;
-         tz && !1 === tz.visible || (Xz.pipeline !== Fz && (zz.setPipeline(Xz.pipeline), Fz = Xz.pipeline), Wz += Xz.draw(zz, sz))
-       }
-       return Wz
-     }
- 
-     function yz(zz) {
-       const tz = zz._materialSwapQueue;
-       if (!tz[0] || zz._runtimeBuilds?.w) return;
- ... (44 more removed lines; see GitHub link above)
+       let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
+         hv = arguments.length > 3 ? arguments[3] : void 0,
+         ev = arguments.length > 4 ? arguments[4] : void 0;
+       hv || (hv = vv.getWorldMatrix()), zv.length = Pv, ev ? zv.origin.Vzv(ev) : zv.origin.Vzv(vv.position);
+       const gv = Sv.i.fa[2];
+       gv.set(0, 0, vv._scene.useRightHandedSystem ? -1 : 1);
+       const pv = Sv.i.fa[3];
+       return Sv.l.TransformNormalToRef(gv, hv, pv), Sv.l.NormalizeToRef(pv, zv.direction), zv
```

#### 37. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L867-L917` → after: `L631-L702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L631-L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/295.js#L631-L702) · [Before (L867-L917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/295.js#L867-L917)

```diff
-       const sz = zz.engine,
-         Wz = {
-           _kind: "Kg",
-           surface: zz,
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
- ... (35 more removed lines; see GitHub link above)
+       zv && (zv.prototype.getForwardRay = function() {
+         let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100,
+           zv = arguments.length > 1 ? arguments[1] : void 0,
+           Pv = arguments.length > 2 ? arguments[2] : void 0;
+         return Kv(this, new Tv(Sv.l.Zero(), Sv.l.Zero(), vv), vv, zv, Pv)
+       }, zv.prototype.getForwardRayToRef = function(vv) {
+         return Kv(this, vv, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100, arguments.length > 2 ? arguments[2] : void 0, arguments.length > 3 ? arguments[3] : void 0)
+       }), vv && (Nv.d._IsPickingAvailable = !0, vv.prototype.createPickingRay = function(vv, zv, Pv, hv) {
+         return Wv(this, vv, zv, Pv, hv, arguments.length > 4 && void 0 !== arguments[4] && arguments[4])
+       })
+     }
+     Tv._TmpVector3 = (0, ev.e)(6, Sv.l.Zero), Tv._RayDistant = Tv.Zero(), Tv._Smallnum = 1e-8, Tv._Rayl = 1e9
+   },
+   40861: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       c: () => ev.y
+ ... (56 more added lines; see GitHub link above)
```

#### 38. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L919-L927` → after: `L704-L804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L704-L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/295.js#L704-L804) · [Before (L919-L927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/295.js#L919-L927)

```diff
-         },
-         Oz = function() {
-           const zz = {
-             _tasks: [],
-             _currentProcessedTask: null,
-             build() {
-               for (let tz = 0; tz < zz._tasks.length; tz++) Xz(zz, zz._tasks[tz]);
-               for (const tz of zz._tasks)
-                 for (const zz of tz._passes) zz._initialize()
+           set shadowFrustumSize(vv) {
+             this._shadowFrustumSize = vv, this.forceProjectionMatrixCompute()
+           }
+           get shadowOrthoScale() {
+             return this._shadowOrthoScale
+           }
+           set shadowOrthoScale(vv) {
+             this._shadowOrthoScale = vv, this.forceProjectionMatrixCompute()
+           }
+           get orthoLeft() {
+             return this._orthoLeft
+           }
+           set orthoLeft(vv) {
+             this._orthoLeft = vv
+           }
+           get orthoRight() {
+ ... (85 more added lines; see GitHub link above)
```

#### 39. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L929-L936` → after: `L806-L814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L806-L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/295.js#L806-L814) · [Before (L929-L936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/295.js#L929-L936)

```diff
-             execute() {
-               let tz = 0;
-               for (const sz of zz._tasks)
-                 if (!1 !== sz.executionEnabled)
-                   if (sz.execute) tz += sz.execute();
-                   else
-                     for (const zz of sz._passes) tz += zz._execute();
-               return tz
+             metadata: ev
+           }, null, sv), (0, hv.e)(vv, null, Pv, {
+             kind: "getter",
+             name: "shadowOrthoScale",
+             static: !1,
+             private: !1,
+             access: {
+               has: vv => "shadowOrthoScale" in vv,
+               get: vv => vv.shadowOrthoScale
```

#### 40. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L938-L985` → after: `L816-L904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L816-L904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/295.js#L816-L904) · [Before (L938-L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/295.js#L938-L985)

```diff
-             dispose() {
-               for (const tz of zz._tasks) tz.dispose();
-               zz._tasks.length = 0, zz._currentProcessedTask = null
-             }
-           };
-           return zz
-         }();
-       if (Wz._frameGraph = Oz, !1 !== tz?.defaultRenderTask) {
-         const tz = zz.msaaSamples > 1,
-           Xz = tz ? (0, Fz.c)({
-             lbl: "scene-color",
-             format: zz.format,
-             dFormat: "depth24plus-stencil8",
-             samples: zz.msaaSamples,
-             size: zz
-           }) : zz.scRT,
- ... (32 more removed lines; see GitHub link above)
+             metadata: ev
+           }, null, sv), (0, hv.e)(null, null, dv, {
+             kind: "field",
+             name: "autoUpdateExtends",
+             static: !1,
+             private: !1,
+             access: {
+               has: vv => "autoUpdateExtends" in vv,
+               get: vv => vv.autoUpdateExtends,
+               set: (vv, zv) => {
+                 vv.autoUpdateExtends = zv
+               }
+             },
+             metadata: ev
+           }, Cv, iv), (0, hv.e)(null, null, Nv, {
+             kind: "field",
+ ... (73 more added lines; see GitHub link above)
```

#### 41. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L987` → after: `L906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/295.js#L906) · [Before (L987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/295.js#L987)

```diff
-   40811: (zz, tz, sz) => {
+   40892: (vv, zv, Pv) => {
```

#### 42. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L989-L990` → after: `L908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/295.js#L908) · [Before (L989-L990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/295.js#L989-L990)

```diff
-       b: () => Uz,
-       d: () => Kz
+       c: () => Jz
```

#### 43. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L992-L1040` → after: `L910-L956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L910-L956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/295.js#L910-L956) · [Before (L992-L1040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/295.js#L992-L1040)

```diff
-     var Fz = sz(40773),
-       Wz = sz(40777),
-       Xz = sz(40780),
-       Oz = sz(40789),
-       oz = sz(40795),
-       vz = sz(40800);
- 
-     function Uz(zz, tz, sz) {
-       let oz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
-       (tz < 1 || sz < 1) && (0, Fz.b)(676, tz, sz);
-       const Uz = zz._device,
-         Kz = oz.mipMaps ?? !1,
-         uz = oz.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
-         Nz = Kz ? (0, vz.b)(tz, sz) : 1,
-         bz = Uz.createTexture({
-           size: {
- ... (33 more removed lines; see GitHub link above)
+     var hv = Pv(38245),
+       Sv = Pv(36618),
+       ev = Pv(36594),
+       gv = Pv(39441),
+       pv = Pv(40898),
+       dv = Pv(36615),
+       Nv = Pv(39580),
+       lv = Pv(36751),
+       Tv = Pv(38249),
+       Wv = Pv(38207),
+       wv = Pv(36620);
+     class av {
+       constructor() {
+         this.direction1 = new ev.l(0, 1, 0), this.direction2 = new ev.l(0, 1, 0)
+       }
+       startDirectionFunction(vv, zv, Pv, hv) {
+ ... (31 more added lines; see GitHub link above)
```

#### 44. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1042-L1055` → after: `L958-L1004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L958-L1004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/295.js#L958-L1004) · [Before (L1042-L1055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/295.js#L1042-L1055)

```diff
- 
-     function Kz(zz, tz, sz) {
-       let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
-       const Wz = Fz.invertY ?? !0,
-         Xz = Fz.premultiplyAlpha ?? !1;
-       zz._device.queue.copyExternalImageToTexture({
-         source: sz,
-         flipY: Wz
-       }, {
-         texture: tz.texture,
-         premultipliedAlpha: Xz
-       }, [tz.width, tz.height]);
-       const Oz = tz._recoverySource;
-       Oz && "dynamic" === Oz.kind && (Oz.source = sz, Oz.flipY = Wz, Oz.premultipliedAlpha = Xz), tz.texture.mipLevelCount > 1 && (0, oz.generateMipmaps)(zz, tz.texture)
+     class sv {
+       constructor() {
+         let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
+           zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
+           Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+         this.radius = vv, this.radiusRange = zv, this.directionRandomizer = Pv
+       }
+       startDirectionFunction(vv, zv, Pv, hv) {
+         const Sv = Pv.position.subtract(vv.getTranslation()).normalize(),
+           gv = (0, wv.RandomRange)(0, this.directionRandomizer),
+           pv = (0, wv.RandomRange)(0, this.directionRandomizer),
+           dv = (0, wv.RandomRange)(0, this.directionRandomizer);
+         Sv.x += gv, Sv.y += pv, Sv.z += dv, Sv.normalize(), hv ? zv.Vzv(Sv) : ev.l.TransformNormalFromFloatsToRef(Sv.x, Sv.y, Sv.z, vv, zv)
+       }
+       startPositionFunction(vv, zv, Pv, hv) {
+         const Sv = this.radius - (0, wv.RandomRange)(0, this.radius * this.radiusRange),
+ ... (31 more added lines; see GitHub link above)
```

#### 45. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1057-L1159` → after: `L1006-L1051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R1006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L1006-L1051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/295.js#L1006-L1051) · [Before (L1057-L1159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/295.js#L1057-L1159)

```diff
-   },
-   40808: (zz, tz, sz) => {
-     sz.d(tz, {
-       c: () => vz
-     });
-     var Fz = sz(40773),
-       Wz = sz(40777),
-       Xz = sz(40780),
-       Oz = sz(40789),
-       oz = sz(40800);
-     async function vz(zz, tz) {
-       let vz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
-       const [Uz, Kz] = function(zz) {
-         const tz = zz,
-           sz = [
-             [tz.displayWidth, tz.displayHeight],
- ... (87 more removed lines; see GitHub link above)
+     class Cv {
+       constructor() {
+         let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
+           zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
+           Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+         this.radius = vv, this.radiusRange = zv, this.directionRandomizer = Pv
+       }
+       startDirectionFunction(vv, zv, Pv, hv) {
+         const Sv = Pv.position.subtract(vv.getTranslation()).normalize(),
+           gv = (0, wv.RandomRange)(0, this.directionRandomizer),
+           pv = (0, wv.RandomRange)(0, this.directionRandomizer),
+           dv = (0, wv.RandomRange)(0, this.directionRandomizer);
+         Sv.x += gv, Sv.y += pv, Sv.z += dv, Sv.normalize(), hv ? zv.Vzv(Sv) : ev.l.TransformNormalFromFloatsToRef(Sv.x, Sv.y, Sv.z, vv, zv)
+       }
+       startPositionFunction(vv, zv, Pv, hv) {
+         const Sv = this.radius - (0, wv.RandomRange)(0, this.radius * this.radiusRange),
+ ... (30 more added lines; see GitHub link above)
```

#### 46. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1162-L1199` → after: `L1054-L1089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R1054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L1054-L1089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/295.js#L1054-L1089) · [Before (L1162-L1199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/295.js#L1162-L1199)

```diff
-   },
-   40795: (zz, tz, sz) => {
-     sz.r(tz), sz.d(tz, {
-       generateMipmaps: () => bz,
-       recordMipmaps: () => wz
-     });
-     var Fz = sz(40777),
-       Wz = sz(40789),
-       Xz = {
-         magFilter: "linear",
-         minFilter: "linear"
-       };
-     var Oz = "@group(0)@binding(0)var t:texture_2d<f32>;@group(0)@binding(1)var s:sampler;struct V{@builtin(position)p:vec4f,@location(0)u:vec2f};@vertex fn vs(@builtin(vertex_index)i:u32)->V{let p=array<vec2f,3>(vec2f(-1,-1),vec2f(3,-1),vec2f(-1,3))[i];return V(vec4f(p,0,1),p*ve … [truncated]
-       oz = null,
-       vz = null,
-       Uz = null,
- ... (22 more removed lines; see GitHub link above)
+     class iv extends Cv {
+       constructor() {
+         let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
+           zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new ev.l(0, 1, 0),
+           Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new ev.l(0, 1, 0);
+         super(vv), this.direction1 = zv, this.direction2 = Pv
+       }
+       startDirectionFunction(vv, zv, Pv, hv) {
+         const Sv = (0, wv.RandomRange)(this.direction1.x, this.direction2.x),
+           gv = (0, wv.RandomRange)(this.direction1.y, this.direction2.y),
+           pv = (0, wv.RandomRange)(this.direction1.z, this.direction2.z);
+         hv ? zv.f_(Sv, gv, pv) : ev.l.TransformNormalFromFloatsToRef(Sv, gv, pv, vv, zv)
+       }
+       clone() {
+         const vv = new iv(this.radius, this.direction1, this.direction2);
+         return Wv.b.DeepCopy(this, vv), vv
+ ... (20 more added lines; see GitHub link above)
```

#### 47. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1201-L1205` → after: `L1091-L1156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R1091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L1091-L1156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/295.js#L1091-L1156) · [Before (L1201-L1205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/295.js#L1201-L1205)

```diff
- 
-     function bz(zz, tz, sz) {
-       const Fz = zz._device,
-         Wz = Fz.createCommandEncoder();
-       wz(zz, tz, Wz, sz), Fz.queue.submit([Wz.finish()])
+     var cv = Pv(38201);
+     class Gv {
+       get radius() {
+         return this._radius
+       }
+       set radius(vv) {
+         this._radius = vv, this._buildHeight()
+       }
+       get angle() {
+         return this._angle
+       }
+       set angle(vv) {
+         this._angle = vv, this._buildHeight()
+       }
+       _buildHeight() {
+         0 !== this._angle ? this._height = this._radius / Math.tan(this._angle / 2) : this._height = 1
+ ... (50 more added lines; see GitHub link above)
```

#### 48. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1207-L1274` → after: `L1158-L1193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R1158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L1158-L1193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/295.js#L1158-L1193) · [Before (L1207-L1274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/295.js#L1207-L1274)

```diff
- 
-     function wz(zz, tz, sz, Fz) {
-       if (tz.mipLevelCount <= 1) return;
-       const Wz = zz._device,
-         Xz = function(zz, tz) {
-           const sz = zz._device;
-           Nz(zz), oz ??= new Map;
-           let Fz = oz.get(tz);
-           return Fz || (Fz = sz.createRenderPipeline({
-             layout: sz.createPipelineLayout({
-               bindGroupLayouts: [Kz]
-             }),
-             vertex: {
-               module: vz,
-               entryPoint: "vs"
-             },
- ... (52 more removed lines; see GitHub link above)
+     class mv extends Gv {
+       constructor() {
+         let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
+           zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
+           Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new ev.l(0, 1, 0),
+           hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new ev.l(0, 1, 0);
+         super(vv, zv), this.direction1 = Pv, this.direction2 = hv
+       }
+       startDirectionFunction(vv, zv, Pv, hv) {
+         const Sv = (0, wv.RandomRange)(this.direction1.x, this.direction2.x),
+           gv = (0, wv.RandomRange)(this.direction1.y, this.direction2.y),
+           pv = (0, wv.RandomRange)(this.direction1.z, this.direction2.z);
+         hv ? zv.f_(Sv, gv, pv) : ev.l.TransformNormalFromFloatsToRef(Sv, gv, pv, vv, zv)
+       }
+       clone() {
+         const vv = new mv(this.radius, this.angle, this.direction1, this.direction2);
+ ... (20 more added lines; see GitHub link above)
```

#### 49. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1277-L1280` → after: `L1196-L1251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R1196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L1196-L1251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/295.js#L1196-L1251) · [Before (L1277-L1280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/295.js#L1277-L1280)

```diff
-   },
-   40800: (zz, tz, sz) => {
-     function Fz(zz, tz) {
-       return Math.floor(Math.log2(Math.max(zz, tz))) + 1
+     class jv {
+       get mesh() {
+         return this._mesh
+       }
+       set mesh(vv) {
+         this._mesh !== vv && (this._mesh = vv, vv ? (this._indices = vv.dPv(), this._positions = vv.getVerticesData(gv.k.PositionKind), this._normals = vv.getVerticesData(gv.k.NormalKind)) : (this._indices = null, this._positions = null, this._normals = null))
+       }
+       constructor() {
+         let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
+         this._indices = null, this._positions = null, this._normals = null, this._storedNormal = ev.l.Zero(), this._mesh = null, this.direction1 = new ev.l(0, 1, 0), this.direction2 = new ev.l(0, 1, 0), this.useMeshNormalsForDirection = !0, this.mesh = vv
+       }
+       startDirectionFunction(vv, zv, Pv, hv) {
+         if (this.useMeshNormalsForDirection && this._normals) return void ev.l.TransformNormalToRef(this._storedNormal, vv, zv);
+         const Sv = (0, wv.RandomRange)(this.direction1.x, this.direction2.x),
+           gv = (0, wv.RandomRange)(this.direction1.y, this.direction2.y),
+           pv = (0, wv.RandomRange)(this.direction1.z, this.direction2.z);
+ ... (40 more added lines; see GitHub link above)
```

#### 50. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1282-L1332` → after: `L1253-L1514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R1253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L1253-L1514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/295.js#L1253-L1514) · [Before (L1282-L1332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/295.js#L1282-L1332)

```diff
-     sz.d(tz, {
-       b: () => Fz
-     })
-   },
-   40765: (zz, tz, sz) => {
-     sz.d(tz, {
-       e: () => Uz,
-       g: () => Kz
-     });
-     var Fz = sz(40773),
-       Wz = sz(40777),
-       Xz = sz(40780),
-       Oz = sz(40789),
-       oz = sz(40795),
-       vz = sz(40800);
- 
- ... (35 more removed lines; see GitHub link above)
+     class fv {
+       get targetStopDuration() {
+         return this._targetStopDuration
+       }
+       set targetStopDuration(vv) {
+         this._targetStopDuration !== vv && (this._targetStopDuration = vv)
+       }
+       get isNodeGenerated() {
+         return !1
+       }
+       get noiseTexture() {
+         return this._noiseTexture
+       }
+       set noiseTexture(vv) {
+         this._noiseTexture !== vv && (this._noiseTexture = vv, this._reset())
+       }
+ ... (246 more added lines; see GitHub link above)
```

#### 51. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1334-L1347` → after: `L1516-L1561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R1516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L1516-L1561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/295.js#L1516-L1561) · [Before (L1334-L1347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/295.js#L1334-L1347)

```diff
- 
-     function Kz(zz, tz, sz, Wz) {
-       let Xz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
-       (sz < 0 || sz >= tz.layers || (0 | sz) !== sz) && (0, Fz.b)(723, tz.layers, sz);
-       const Oz = Xz.invertY ?? !0,
-         vz = Xz.premultiplyAlpha ?? !1;
-       zz._device.queue.copyExternalImageToTexture({
-         source: Wz,
-         flipY: Oz
-       }, {
-         texture: tz.texture,
-         origin: [0, 0, sz],
-         premultipliedAlpha: vz
-       }, [tz.width, tz.height, 1]), tz.texture.mipLevelCount > 1 && (0, oz.generateMipmaps)(zz, tz.texture, sz)
+     fv.BLENDMODE_ONEONE = 0, fv.BLENDMODE_STANDARD = 1, fv.BLENDMODE_ADD = 2, fv.BLENDMODE_MULTIPLY = 3, fv.BLENDMODE_MULTIPLYADD = 4, fv.BLENDMODE_SUBTRACT = -1;
+     class Fv {
+       constructor() {
+         this.attachedSubEmitters = null, this.currentColor1 = new lv.e(0, 0, 0, 0), this.currentColor2 = new lv.e(0, 0, 0, 0), this.currentSize1 = 0, this.currentSize2 = 0, this.currentAngularSpeed1 = 0, this.currentAngularSpeed2 = 0, this.currentVelocity1 = 0, this.currentVeloci … [truncated]
+       }
+       reset() {
+         this.currentColorGradient = null, this.currentSizeGradient = null, this.currentAngularSpeedGradient = null, this.currentVelocityGradient = null, this.currentLimitVelocityGradient = null, this.currentDragGradient = null, this.randomCellOffset = void 0, this.randomNoiseCoor … [truncated]
+       }
+     }
+     class Yv {
+       constructor(vv) {
+         this.particleSystem = vv, this.position = ev.l.Zero(), this.direction = ev.l.Zero(), this.color = new lv.e(0, 0, 0, 0), this.colorStep = new lv.e(0, 0, 0, 0), this.initialColor = new lv.e(0, 0, 0, 0), this.colorDead = new lv.e(0, 0, 0, 0), this.lifeTime = 1, this.age = 0, … [truncated]
+       }
+       _updateCellInfoFromSystem() {
+         this.cellIndex = this.particleSystem.startSpriteCellID
+       }
+ ... (30 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/296.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/296.js` (33 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486)

#### 1. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/296.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/296.js#L4)

```diff
-   40872: (zz, tz, sz) => {
+   41010: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L6` → after: `L6-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L6-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/296.js#L6-L11) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/296.js#L6)

```diff
-       d: () => Uz
+       e: () => Wv,
+       i: () => iv,
+       j: () => wv,
+       l: () => av,
+       o: () => Gv,
+       p: () => cv
```

#### 3. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L8-L16` → after: `L13-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L13-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/296.js#L13-L18) · [Before (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/296.js#L8-L16)

```diff
-     var Fz = sz(36475),
-       Wz = sz(36507),
-       Xz = sz(39155),
-       Oz = sz(36479),
-       oz = sz(36654);
-     class vz {
-       constructor(zz, tz, sz, Fz) {
-         this.name = zz, this.worldAxisForNormal = tz, this.worldAxisForFileX = sz, this.worldAxisForFileY = Fz
-       }
+     var hv = Pv(40962);
+     var Sv = "Babylon Lite v1.32.0",
+       ev = Pv(41017);
+ 
+     function gv(vv) {
+       return "clientWidth" in vv
```

#### 4. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L18-L20` → after: `L20-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L20-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/296.js#L20-L56) · [Before (L18-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/296.js#L18-L20)

```diff
-     class Uz {
-       static _NearestPow2Floor(zz) {
-         return zz <= 1 ? 1 : 1 << Math.floor(Math.log2(zz))
+     var pv = 1;
+ 
+     function dv(vv, zv, Pv) {
+       const dv = zv.getContext("webgpu");
+       dv || (0, hv.e)(54), gv(zv) && zv.setAttribute("data-engine", Sv);
+       const Nv = Pv?.format ?? navigator.gpu.getPreferredCanvasFormat(),
+         lv = Pv?.srgb ? (Tv = Nv).endsWith("-srgb") ? Tv : `${Tv}-srgb` : Nv;
+       var Tv;
+       const Wv = Pv?.alphaMode ?? "opaque";
+       dv.configure({
+         device: vv._device,
+         format: Nv,
+         alphaMode: Wv,
+         viewFormats: [lv]
+       });
+       const wv = 1 === Pv?.msaaSamples ? 1 : 4,
+ ... (21 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L22-L61` → after: `L58-L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L58-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/296.js#L58-L84) · [Before (L22-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/296.js#L22-L61)

```diff
-       static ConvertCubeMapTextureToSphericalPolynomial(zz) {
-         if (!zz.isCube) return null;
-         zz.aJ()?.FD().flushFramebuffer();
-         const tz = zz.getSize().width,
-           sz = zz._sphericalPolynomialTargetSize,
-           Fz = sz > 0 ? this._NearestPow2Floor(sz) : 0,
-           Wz = !zz.noMipmap && !0 === zz._texture?.generateMipMaps,
-           Xz = Fz > 0 && Fz < tz && Wz,
-           Oz = Xz ? Math.max(0, Math.round(Math.log2(tz / Fz))) : 0,
-           oz = Xz ? Math.max(1, Math.floor(tz / Math.pow(2, Oz))) : tz,
-           vz = zz.readPixels(0, Oz, void 0, !1),
-           Uz = zz.readPixels(1, Oz, void 0, !1);
-         let Kz, uz;
-         zz.isRenderTarget ? (Kz = zz.readPixels(3, Oz, void 0, !1), uz = zz.readPixels(2, Oz, void 0, !1)) : (Kz = zz.readPixels(2, Oz, void 0, !1), uz = zz.readPixels(3, Oz, void 0, !1));
-         const Nz = zz.readPixels(4, Oz, void 0, !1),
-           bz = zz.readPixels(5, Oz, void 0, !1),
- ... (24 more removed lines; see GitHub link above)
+     }
+ 
+     function Nv(vv) {
+       const zv = vv._context.getCurrentTexture(),
+         Pv = vv.scRT;
+       Pv._colorTexture = zv, Pv._colorView = zv.createView({
+         format: vv.format
+       }), Pv._width = zv.width, Pv._height = zv.height
+     }
+ 
+     function lv(vv) {
+       const zv = vv.canvas;
+       if (!gv(zv)) return;
+       const Pv = vv._w ?? zv.clientWidth,
+         hv = vv._h ?? zv.clientHeight;
+       if (!(Pv > 0 && hv > 0)) return;
+ ... (11 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L63-L64` → after: `L86-L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L86-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/296.js#L86-L118) · [Before (L63-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/296.js#L63-L64)

```diff
-       static _AreaElement(zz, tz) {
-         return Math.atan2(zz * tz, Math.sqrt(zz * zz + tz * tz + 1))
+     }
+     var Wv = 0;
+ 
+     function wv(vv, zv) {
+       return -1 !== vv._renderingContexts.indexOf(zv)
+     }
+ 
+     function av(vv, zv) {
+       return -1 === vv._renderingContexts.indexOf(zv) && (vv._renderingContexts.push(zv), !0)
+     }
+     var sv = null;
+     var Cv = ["float32-filterable", "texture-compression-astc", "texture-compression-bc", "texture-compression-etc2", "texture-compression-unaligned", "timestamp-query", "primitive-index"];
+     async function iv(vv, zv) {
+       const ev = await navigator.gpu.requestAdapter({
+         powerPreference: "high-performance",
+         ...sv ? sv() : {}
+ ... (17 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L66-L90` → after: `L120-L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L120-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/296.js#L120-L129) · [Before (L66-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/296.js#L66-L90)

```diff
-       static _DownsampleFace(zz, tz, sz, Fz) {
-         const Wz = zz instanceof Float32Array ? zz : Float32Array.from(zz),
-           Xz = sz * sz * Fz,
-           Oz = new Float32Array(Xz),
-           oz = tz / sz,
-           vz = 1 / (oz * oz);
-         for (let Kz = 0; Kz < sz; Kz++) {
-           const zz = Math.floor(Kz * oz),
-             Xz = Math.floor((Kz + 1) * oz);
-           for (let Uz = 0; Uz < sz; Uz++) {
-             const uz = Math.floor(Uz * oz),
-               Nz = Math.floor((Uz + 1) * oz),
-               bz = (Kz * sz + Uz) * Fz;
-             for (let sz = 0; sz < Fz; sz++) {
-               let oz = 0;
-               for (let Oz = zz; Oz < Xz; Oz++)
- ... (9 more removed lines; see GitHub link above)
+       let wv, av, iv, cv;
+       if (Wv) {
+         const [{
+           wrapRenderableForFO: vv,
+           lightFoVersion: zv,
+           applyLightFoOffset: hv
+         }, {
+           makePackMeshWorld: Sv
+         }] = await Promise.all([Pv.e(351).then((() => Pv(60666))), Pv.e(352).then((() => Pv(60673)))]);
+         wv = vv, av = Sv, iv = zv, cv = hv
```

#### 8. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L92-L103` → after: `L131-L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L131-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/296.js#L131-L185) · [Before (L92-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/296.js#L92-L103)

```diff
-       static ConvertCubeMapToSphericalPolynomial(zz) {
-         let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         const sz = tz > 0 ? this._NearestPow2Floor(tz) : 0;
-         if (sz > 0 && zz.size > sz) {
-           const tz = 5 === zz.format ? 4 : 3,
-             Fz = ["right", "left", "up", "down", "front", "back"],
-             Wz = {};
-           for (const Xz of Fz) Wz[Xz] = this._DownsampleFace(zz[Xz], zz.size, sz, tz);
-           zz = {
-             ...zz,
-             ...Wz,
-             size: sz
+       const Gv = {
+           _device: pv
+         },
+         mv = [Gv];
+       return Object.assign(Gv, {
+         engine: Gv,
+         surfaces: mv,
+         _surfaces: mv,
+         _device: pv,
+         _options: zv,
+         drawCallCount: 0,
+         gpuFrameTimeMs: 0,
+         useHighPrecisionMatrix: Tv,
+         useFloatingOrigin: Wv,
+         _animFrameId: 0,
+         _renderFn: null,
+ ... (39 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L106-L139` → after: `L188-L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L188-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/296.js#L188-L191) · [Before (L106-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/296.js#L106-L139)

```diff
-         const Fz = new Xz.d;
-         let vz = 0;
-         const Uz = 2 / zz.size,
-           Kz = Uz,
-           uz = .5 * Uz,
-           Nz = uz - 1;
-         for (let Xz = 0; Xz < 6; Xz++) {
-           const tz = this._FileFaces[Xz],
-             sz = zz[tz.name];
-           let bz = Nz;
-           const wz = 5 === zz.format ? 4 : 3;
-           for (let Xz = 0; Xz < zz.size; Xz++) {
-             let Dz = Nz;
-             for (let Kz = 0; Kz < zz.size; Kz++) {
-               const Nz = tz.worldAxisForFileX.scale(Dz).add(tz.worldAxisForFileY.scale(bz)).add(tz.worldAxisForNormal);
-               Nz.normalize();
- ... (18 more removed lines; see GitHub link above)
+         const zv = vv._currentEncoder;
+         for (let vv = 0; vv < Pv.length; vv++) {
+           const hv = Pv[vv];
+           hv._captureService?.(hv, zv)
```

#### 10. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L141-L142` → after: `L193-L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L193-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/296.js#L193-L195) · [Before (L141-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/296.js#L141-L142)

```diff
-         const bz = 6 * (4 * Math.PI) / 6 / vz;
-         return Fz.scaleInPlace(bz), Fz.convertIncidentRadianceToIrradiance(), Fz.convertIrradianceToLambertianRadiance(), Xz.g.FromHarmonics(Fz)
+         vv._gpuTimerEnd?.(zv), vv._cbs[0] = zv.finish(), vv._device.queue.submit(vv._cbs), vv._flushGpuRetirements?.(vv), vv.drawCallCount = hv, vv._gpuTimerResolve?.()
+       } finally {
+         vv._currentEncoder = void 0
```

#### 11. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L147` → after: `L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/296.js#L199) · [Before (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/296.js#L147)

```diff
-   40865: (zz, tz, sz) => {
+   40967: (vv, zv, Pv) => {
```

#### 12. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L149` → after: `L201-L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L201-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/296.js#L201-L203) · [Before (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/296.js#L149)

```diff
-       DDSTools: () => wz
+       b: () => Sv,
+       e: () => ev,
+       h: () => hv
```

#### 13. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L151-L156` → after: `L205-L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L205-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/296.js#L205-L213) · [Before (L151-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/296.js#L151-L156)

```diff
-     var Fz = sz(36507),
-       Wz = sz(38097),
-       Xz = sz(40872),
-       Oz = sz(39234);
-     const oz = 131072,
-       vz = 131072;
+     var hv = globalThis.GPUTextureUsage,
+       Sv = globalThis.GPUBufferUsage,
+       ev = globalThis.GPUShaderStage;
+     globalThis.GPUColorWrite
+   },
+   41035: (vv, zv, Pv) => {
+     function hv(vv) {
+       Sv(vv.splice(0))
+     }
```

#### 14. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L159-L202` → after: `L216-L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L216-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/296.js#L216-L219) · [Before (L159-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/296.js#L159-L202)

```diff
-       return zz.charCodeAt(0) + (zz.charCodeAt(1) << 8) + (zz.charCodeAt(2) << 16) + (zz.charCodeAt(3) << 24)
-     }
-     const Kz = Uz("DXT1"),
-       uz = Uz("DXT3"),
-       Nz = Uz("DXT5"),
-       bz = Uz("DX10");
-     class wz {
-       static GetDDSInfo(zz) {
-         const tz = new Int32Array(zz.buffer, zz.byteOffset, 31),
-           sz = new Int32Array(zz.buffer, zz.byteOffset, 35);
-         let Fz = 1;
-         tz[2] & oz && (Fz = Math.max(1, tz[7]));
-         const Wz = tz[21],
-           Xz = Wz === bz ? sz[32] : 0;
-         let Oz = 0;
-         switch (Wz) {
- ... (28 more removed lines; see GitHub link above)
+       for (const Pv of vv) try {
+         Pv()
+       } catch (zv) {
+         console.error("GPU resource retirement failed.", zv)
```

#### 15. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L204-L213` → after: `L221-L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L221-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/296.js#L221-L264) · [Before (L204-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/296.js#L204-L213)

```diff
-       static _GetHalfFloatAsFloatRGBAArrayBuffer(zz, tz, sz, Fz, Wz, Xz) {
-         const oz = new Float32Array(Fz),
-           vz = new Uint16Array(Wz, sz);
-         let Uz = 0;
-         for (let Kz = 0; Kz < tz; Kz++)
-           for (let tz = 0; tz < zz; tz++) {
-             const sz = 4 * (tz + Kz * zz);
-             oz[Uz] = (0, Oz.d)(vz[sz]), oz[Uz + 1] = (0, Oz.d)(vz[sz + 1]), oz[Uz + 2] = (0, Oz.d)(vz[sz + 2]), wz.StoreLODInAlphaChannel ? oz[Uz + 3] = Xz : oz[Uz + 3] = (0, Oz.d)(vz[sz + 3]), Uz += 4
-           }
-         return oz
+     }
+ 
+     function ev(vv, zv) {
+       vv._flushGpuRetirements ??= gv, (vv._retirements ??= []).push(zv)
+     }
+ 
+     function gv(vv) {
+       const zv = vv._retirements;
+       if (!zv) return;
+       vv._retirements = null;
+       const Pv = vv._retiring ??= new Set;
+       Pv.add(zv), queueMicrotask((() => {
+         vv._device.queue.onSubmittedWorkDone().then((() => {
+           Pv.delete(zv), hv(zv)
+         })).catch((() => {}))
+       }))
+ ... (28 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L215-L227` → after: `L266-L307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L266-L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/296.js#L266-L307) · [Before (L215-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/296.js#L215-L227)

```diff
-       static _GetHalfFloatRGBAArrayBuffer(zz, tz, sz, Fz, Wz, Xz) {
-         if (wz.StoreLODInAlphaChannel) {
-           const oz = new Uint16Array(Fz),
-             vz = new Uint16Array(Wz, sz);
-           let Uz = 0;
-           for (let sz = 0; sz < tz; sz++)
-             for (let tz = 0; tz < zz; tz++) {
-               const Fz = 4 * (tz + sz * zz);
-               oz[Uz] = vz[Fz], oz[Uz + 1] = vz[Fz + 1], oz[Uz + 2] = vz[Fz + 2], oz[Uz + 3] = (0, Oz.g)(Xz), Uz += 4
-             }
-           return oz
-         }
-         return new Uint16Array(Wz, sz, Fz)
+     }
+ 
+     function gv(vv, zv) {
+       if (vv._eager) return void vv._syncEager?.(zv);
+       pv(vv);
+       const Pv = vv._descriptor,
+         {
+           width: ev,
+           height: gv
+         } = (vv._resolveSize ?? Sv)(Pv);
+       vv._width = ev, vv._height = gv;
+       const dv = zv._device;
+       Pv.format && (vv._colorTexture = dv.createTexture({
+         label: Pv.lbl,
+         size: {
+           width: ev,
+ ... (26 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L229-L241` → after: `L309-L396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L309-L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/296.js#L309-L396) · [Before (L229-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/296.js#L229-L241)

```diff
-       static _GetFloatRGBAArrayBuffer(zz, tz, sz, Fz, Wz, Xz) {
-         if (wz.StoreLODInAlphaChannel) {
-           const Oz = new Float32Array(Fz),
-             oz = new Float32Array(Wz, sz);
-           let vz = 0;
-           for (let sz = 0; sz < tz; sz++)
-             for (let tz = 0; tz < zz; tz++) {
-               const Fz = 4 * (tz + sz * zz);
-               Oz[vz] = oz[Fz], Oz[vz + 1] = oz[Fz + 1], Oz[vz + 2] = oz[Fz + 2], Oz[vz + 3] = Xz, vz += 4
-             }
-           return Oz
-         }
-         return new Float32Array(Wz, sz, Fz)
+     }
+   },
+   41033: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       d: () => hv,
+       h: () => Sv,
+       j: () => ev
+     });
+     var hv = Float32Array,
+       Sv = Float64Array,
+       ev = Uint32Array
+   },
+   41037: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       c: () => hv
+     });
+ ... (72 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L243-L249` → after: `L398-L415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L398-L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/296.js#L398-L415) · [Before (L243-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/296.js#L243-L249)

```diff
-       static _GetFloatAsHalfFloatRGBAArrayBuffer(zz, tz, sz, Fz, Wz, Xz) {
-         const oz = new Uint16Array(Fz),
-           vz = new Float32Array(Wz, sz);
-         let Uz = 0;
-         for (let Kz = 0; Kz < tz; Kz++)
-           for (let tz = 0; tz < zz; tz++) oz[Uz] = (0, Oz.g)(vz[Uz]), oz[Uz + 1] = (0, Oz.g)(vz[Uz + 1]), oz[Uz + 2] = (0, Oz.g)(vz[Uz + 2]), wz.StoreLODInAlphaChannel ? oz[Uz + 3] = (0, Oz.g)(Xz) : oz[Uz + 3] = (0, Oz.g)(vz[Uz + 3]), Uz += 4;
-         return oz
+       let Nv = pv.get(dv);
+       return Nv || pv.set(dv, Nv = Sv.createSampler(zv)), Nv
+     }
+   },
+   41025: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       b: () => Qv,
+       e: () => Lv
+     });
+     var hv = Pv(41017),
+       Sv = Pv(41010);
+ 
+     function ev(vv, zv) {
+       zv._passes.length = 0, vv._currentProcessedTask = zv;
+       try {
+         zv.record()
+ ... (2 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L251-L258` → after: `L417-L470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L417-L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/296.js#L417-L470) · [Before (L251-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/296.js#L251-L258)

```diff
-       static _GetFloatAsUIntRGBAArrayBuffer(zz, tz, sz, Wz, Xz, Oz) {
-         const oz = new Uint8Array(Wz),
-           vz = new Float32Array(Xz, sz);
-         let Uz = 0;
-         for (let Kz = 0; Kz < tz; Kz++)
-           for (let tz = 0; tz < zz; tz++) {
-             const sz = 4 * (tz + Kz * zz);
-             oz[Uz] = 255 * (0, Fz.Clamp)(vz[sz]), oz[Uz + 1] = 255 * (0, Fz.Clamp)(vz[sz + 1]), oz[Uz + 2] = 255 * (0, Fz.Clamp)(vz[sz + 2]), wz.StoreLODInAlphaChannel ? oz[Uz + 3] = Oz : oz[Uz + 3] = 255 * (0, Fz.Clamp)(vz[sz + 3]), Uz += 4
+     }
+     var gv = Pv(41033);
+ 
+     function pv(vv) {
+       const zv = vv.worldMatrixVersion;
+       if (vv._viewVer === zv) return vv._viewCache;
+       const Pv = vv._viewCache,
+         hv = vv.worldMatrix,
+         Sv = vv._useFloatingOrigin,
+         ev = Sv ? 0 : hv[12],
+         gv = Sv ? 0 : hv[13],
+         pv = Sv ? 0 : hv[14];
+       return Pv[0] = hv[0], Pv[1] = hv[4], Pv[2] = hv[8], Pv[3] = 0, Pv[4] = hv[1], Pv[5] = hv[5], Pv[6] = hv[9], Pv[7] = 0, Pv[8] = hv[2], Pv[9] = hv[6], Pv[10] = hv[10], Pv[11] = 0, Pv[12] = -(hv[0] * ev + hv[1] * gv + hv[2] * pv), Pv[13] = -(hv[4] * ev + hv[5] * gv + hv[6] * p … [truncated]
+     }
+     var dv = null;
+ 
+ ... (38 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L260-L269` → after: `L472-L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L472-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/296.js#L472-L476) · [Before (L260-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/296.js#L260-L269)

```diff
-         return oz
-       }
-       static _GetHalfFloatAsUIntRGBAArrayBuffer(zz, tz, sz, Wz, Xz, oz) {
-         const vz = new Uint8Array(Wz),
-           Uz = new Uint16Array(Xz, sz);
-         let Kz = 0;
-         for (let uz = 0; uz < tz; uz++)
-           for (let tz = 0; tz < zz; tz++) {
-             const sz = 4 * (tz + uz * zz);
-             vz[Kz] = 255 * (0, Fz.Clamp)((0, Oz.d)(Uz[sz])), vz[Kz + 1] = 255 * (0, Fz.Clamp)((0, Oz.d)(Uz[sz + 1])), vz[Kz + 2] = 255 * (0, Fz.Clamp)((0, Oz.d)(Uz[sz + 2])), wz.StoreLODInAlphaChannel ? vz[Kz + 3] = oz : vz[Kz + 3] = 255 * (0, Fz.Clamp)((0, Oz.d)(Uz[sz + 3])), Kz … [truncated]
+         }, {
+           binding: 1,
+           visibility: Tv.e.FRAGMENT,
+           buffer: {
+             type: "uniform"
```

#### 21. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L271` → after: `L478-L585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L478-L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/296.js#L478-L585) · [Before (L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/296.js#L271)

```diff
-         return vz
+         }]
+       }), Pv.set(zv, hv)), hv
+     }
+ 
+     function Cv(vv, zv, Pv) {
+       const hv = vv._device,
+         Sv = Wv(vv, zv.byteLength, Pv);
+       try {
+         hv.queue.writeBuffer(Sv, 0, zv.buffer, zv.byteOffset, zv.byteLength)
+       } catch (ev) {
+         throw Sv.destroy(), ev
+       }
+       return Sv
+     }
+     var iv = Pv(41037),
+       cv = new gv.j(1),
+ ... (92 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L273-L280` → after: `L587-L688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L587-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/296.js#L587-L688) · [Before (L273-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/296.js#L273-L280)

```diff
-       static _GetRGBAArrayBuffer(zz, tz, sz, Fz, Wz, Xz, Oz, oz, vz) {
-         const Uz = new Uint8Array(Fz),
-           Kz = new Uint8Array(Wz, sz);
-         let uz = 0;
-         for (let Nz = 0; Nz < tz; Nz++)
-           for (let tz = 0; tz < zz; tz++) {
-             const sz = 4 * (tz + Nz * zz);
-             Uz[uz] = Kz[sz + Xz], Uz[uz + 1] = Kz[sz + Oz], Uz[uz + 2] = Kz[sz + oz], Uz[uz + 3] = Kz[sz + vz], uz += 4
+     }
+ 
+     function Ov(vv, zv, Pv) {
+       vv.clr ??= !0;
+       const Sv = vv.rt._descriptor,
+         ev = vv.depth?._descriptor,
+         dv = {
+           _colorFormat: Sv.format,
+           _depthStencilFormat: ev?.dFormat ?? Sv.dFormat,
+           _depthCompare: Sv.depthCompare ?? ev?.depthCompare,
+           _sampleCount: Sv.samples
+         },
+         lv = {
+           loadOp: "clear",
+           storeOp: "store"
+         },
+ ... (86 more added lines; see GitHub link above)
```

#### 23. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L282` → after: `L690-L715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L690-L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/296.js#L690-L715) · [Before (L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/296.js#L282)

```diff
-         return Uz
+         };
+       return Tv
+     }
+ 
+     function Dv(vv, zv) {
+       return zv._sortDistance - vv._sortDistance || vv.renderable.order - zv.renderable.order
+     }
+ 
+     function Kv(vv, zv) {
+       return vv.renderable.order - zv.renderable.order
+     }
+ 
+     function Vv(vv) {
+       let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : vv._renderables,
+         Pv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
+         Sv = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
+ ... (10 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L284-L285` → after: `L717-L729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L717-L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/296.js#L717-L729) · [Before (L284-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/296.js#L284-L285)

```diff
-       static _ExtractLongWordOrder(zz) {
-         return 0 === zz || 255 === zz || -16777216 === zz ? 0 : 1 + wz._ExtractLongWordOrder(zz >> 8)
+       const {
+         _opaqueBindings: lv,
+         _directBindings: Tv,
+         _transparentBindings: Wv
+       } = Nv;
+       try {
+         for (const Pv of zv) {
+           const zv = Pv.bind(vv.engine, vv._targetSignature);
+           Nv._batchState = vv._targetSignature._collectBatches?.(Nv._batchState, zv), Pv.isTransparent || Pv._transmissive ? Wv.push(zv) : Pv._direct ? Tv.push(zv) : lv.push(zv)
+         }
+         lv.sort(Kv), Tv.sort(Kv), Pv && Rv(vv, vv.engine, !1)
+       } catch (wv) {
+         throw Nv._batchState?._release(void 0, ev ?? [dv]), wv
```

#### 25. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L287-L294` → after: `L731-L790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L731-L790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/296.js#L731-L790) · [Before (L287-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/296.js#L287-L294)

```diff
-       static _GetRGBArrayBuffer(zz, tz, sz, Fz, Wz, Xz, Oz, oz) {
-         const vz = new Uint8Array(Fz),
-           Uz = new Uint8Array(Wz, sz);
-         let Kz = 0;
-         for (let uz = 0; uz < tz; uz++)
-           for (let tz = 0; tz < zz; tz++) {
-             const sz = 3 * (tz + uz * zz);
-             vz[Kz] = Uz[sz + Xz], vz[Kz + 1] = Uz[sz + Oz], vz[Kz + 2] = Uz[sz + oz], Kz += 3
+       return Pv && (! function(vv, zv) {
+         const Pv = vv._config,
+           hv = vv._colorAttachment;
+         hv.view = zv._colorView, vv._renderPassDescriptor.colorAttachments = zv._colorView ? [hv] : [];
+         const Sv = Pv.depth ?? zv,
+           ev = Sv._depthView;
+         let gv;
+         if (ev) {
+           const vv = Sv._descriptor,
+             zv = (Pv.depth ? Sv._eager : !1 === Pv.depthClear) ? "load" : "clear";
+           gv = {
+             view: ev,
+             depthClearValue: vv.depthClearValue ?? 0,
+             depthLoadOp: zv,
+             depthStoreOp: "store"
+           }, vv.dFormat?.includes("stencil") && (gv.stencilClearValue = 0, gv.stencilLoadOp = zv, gv.stencilStoreOp = "store")
+ ... (44 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L296` → after: `L792-L850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L792-L850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/296.js#L792-L850) · [Before (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/296.js#L296)

```diff
-         return vz
+         }, {
+           binding: 1,
+           resource: {
+             buffer: hv
+           }
+         }]
+       });
+       vv._lightsUBO = hv, vv._sceneBG = Sv, Pv && (vv._ob = [])
+     }
+ 
+     function xv(vv, zv) {
+       for (const Pv of vv) Pv.update?.(zv)
+     }
+ 
+     function tv(vv, zv, Pv) {
+       let hv = null,
+ ... (43 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L298-L305` → after: `L852-L917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L852-L917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/296.js#L852-L917) · [Before (L298-L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/296.js#L298-L305)

```diff
-       static _GetLuminanceArrayBuffer(zz, tz, sz, Fz, Wz) {
-         const Xz = new Uint8Array(Fz),
-           Oz = new Uint8Array(Wz, sz);
-         let oz = 0;
-         for (let vz = 0; vz < tz; vz++)
-           for (let tz = 0; tz < zz; tz++) {
-             const sz = tz + vz * zz;
-             Xz[oz] = Oz[sz], oz++
+       if (hv && (gv.sort(((vv, zv) => vv.order - zv.order)), vv._renderableVersion++, vv._materialEpoch++), zv.length = 0, !ev) return Sv;
+       const pv = ev;
+       return Pv.e(356).then((() => Pv(60696))).then((zv => {
+         let {
+           C: Pv
+         } = zv;
+         return Pv(vv, pv, Sv)
+       }), (zv => {
+         const Pv = vv._runtimeBuilds;
+         Pv ? Pv._x(zv) : console.error(zv)
+       }))
+     }
+     var Iv = null;
+ 
+     function Qv(vv, zv) {
+       const Pv = vv.engine,
+ ... (50 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L307` → after: `L919-L967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L919-L967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/296.js#L919-L967) · [Before (L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/296.js#L307)

```diff
-         return Xz
+         },
+         gv = function() {
+           const vv = {
+             _tasks: [],
+             _currentProcessedTask: null,
+             build() {
+               for (let zv = 0; zv < vv._tasks.length; zv++) ev(vv, vv._tasks[zv]);
+               for (const zv of vv._tasks)
+                 for (const vv of zv._passes) vv._initialize()
+             },
+             execute() {
+               let zv = 0;
+               for (const Pv of vv._tasks)
+                 if (!1 !== Pv.executionEnabled)
+                   if (Pv.execute) zv += Pv.execute();
+                   else
+ ... (33 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L309-L354` → after: `L969-L1138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L969-L1138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/296.js#L969-L1138) · [Before (L309-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/296.js#L309-L354)

```diff
-       static UploadDDSLevels(zz, tz, sz, Fz, Oz, vz) {
-         let Uz = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : -1,
-           Dz = arguments.length > 7 ? arguments[7] : void 0,
-           gz = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
-           Hz = null;
-         Fz.sphericalPolynomial && (Hz = []);
-         const Bz = !!zz.getCaps().s3tc;
-         tz.generateMipMaps = Oz;
-         const Pz = new Int32Array(sz.buffer, sz.byteOffset, 31);
-         let rz, Yz, xz, mz, Jz, Iz, Cz, ez = 0,
-           Zz = 0,
-           Gz = 1;
-         if (542327876 !== Pz[0]) return void Wz.e.Error("Invalid magic number in DDS header");
-         if (!Fz.isFourCC && !Fz.isRGB && !Fz.isLuminance) return void Wz.e.Error("Unsupported format, must contain a FourCC, RGB or LUMINANCE code");
-         if (Fz.isCompressed && !Bz) return void Wz.e.Error("Compressed textures are not supported on this platform.");
-         let Tz = Pz[22];
- ... (30 more removed lines; see GitHub link above)
+       return Sv._disposables.push((() => gv.dispose())), Sv
+     }
+     async function Zv(vv) {
+       const zv = vv;
+       for (zv._built || (zv._materialSwapQueue.length = 0); zv._deferredBuilders.length;) {
+         const vv = zv._deferredBuilders.splice(0);
+         await Promise.all(vv.map((vv => vv())))
+       }
+       await qv(zv), Iv?.get(zv)?.() || (zv._runtimeBuilds?._e(), zv._renderableVersion++, zv._built = !0), await (zv._rebuildHook?.(zv))
+     }
+     var Av = null;
+     async function Lv(vv) {
+       const zv = vv,
+         hv = zv.surface;
+       (0, Sv.j)(hv, zv) || (await Zv(vv), zv._renderables.sort(Hv), await Promise.all(zv._frameGraph._tasks.map((vv => vv._preload?.()))), Av && await Av(zv), zv._frameGraph.build(), hv._renderingContexts[0] && (await Pv.e(354).then((() => Pv(60683)))).configureSwapchainOverlaySc … [truncated]
+     }
+ ... (154 more added lines; see GitHub link above)
```

#### 30. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L356-L409` → after: `L1140-L1152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R1140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L1140-L1152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/296.js#L1140-L1152) · [Before (L356-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/296.js#L356-L409)

```diff
-             if (zz) break
-           }
-           default:
-             return void Wz.e.Error(["Unsupported FourCC code:", (jz = rz, String.fromCharCode(255 & jz, jz >> 8 & 255, jz >> 16 & 255, jz >> 24 & 255))])
-         }
-         var jz;
-         const Az = wz._ExtractLongWordOrder(Pz[23]),
-           yz = wz._ExtractLongWordOrder(Pz[24]),
-           Mz = wz._ExtractLongWordOrder(Pz[25]),
-           dz = wz._ExtractLongWordOrder(Pz[26]);
-         cz && (Zz = zz._getRGBABufferInternalSizedFormat(Fz.textureType)), Iz = 1, Pz[2] & oz && !1 !== Oz && (Iz = Math.max(1, Pz[7]));
-         const hz = Dz || 0,
-           Qz = zz.getCaps();
-         for (let Wz = hz; Wz < vz; Wz++) {
-           for (Yz = Pz[4], xz = Pz[3], Cz = 0; Cz < Iz; ++Cz) {
-             if (-1 === Uz || Uz === Cz) {
- ... (38 more removed lines; see GitHub link above)
+             const [pv, dv] = await Promise.all([cv.popErrorScope(), cv.popErrorScope()]);
+             if (Pv) throw Pv;
+             const Nv = dv ?? pv;
+             if (Nv) throw new Error(`createTexture2DFromExternalImage: GPU upload failed: ${Nv.message}`, {
+               cause: Nv
+             });
+             const lv = iv.texture;
+             return lv && ev || (0, hv.e)(677), {
+               texture: lv,
+               view: lv.createView(),
+               sampler: ev,
+               width: Tv,
+               height: Wv
```

#### 31. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L411` → after: `L1154-L1192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R1154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L1154-L1192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/296.js#L1154-L1192) · [Before (L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/296.js#L411)

```diff
-             mz += Tz ? Yz * xz * (Tz / 8) : ez, Yz *= .5, xz *= .5, Yz = Math.max(1, Yz), xz = Math.max(1, xz)
+           }, nv = await (vv._dlr?.x(sv, Tv, Wv, Gv, mv, fv, Fv, av, Yv)) ?? await Yv(sv);
+         return (0, ev.e)(nv), nv
+       } catch (cv) {
+         throw iv.texture?.destroy(), cv
+       } finally {
+         Cv?.close()
+       }
+     }
+   },
+   40980: (vv, zv, Pv) => {
+     Pv.r(zv), Pv.d(zv, {
+       generateMipmaps: () => wv,
+       recordMipmaps: () => av
+     });
+     var hv = Pv(40967),
+       Sv = Pv(40978),
+ ... (23 more added lines; see GitHub link above)
```

#### 32. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L413-L426` → after: `L1194-L1274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R1194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L1194-L1274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/296.js#L1194-L1274) · [Before (L413-L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/296.js#L413-L426)

```diff
-           if (void 0 !== Dz) break
-         }
-         Hz && Hz.length > 0 ? Fz.sphericalPolynomial = Xz.d.ConvertCubeMapToSphericalPolynomial({
-           size: Pz[4],
-           right: Hz[0],
-           left: Hz[1],
-           up: Hz[2],
-           down: Hz[3],
-           front: Hz[4],
-           back: Hz[5],
-           format: 5,
-           type: 1,
-           gammaSpace: !1
-         }) : Fz.sphericalPolynomial = void 0
+         }, {
+           binding: 1,
+           visibility: hv.e.FRAGMENT,
+           sampler: {}
+         }]
+       })
+     }
+ 
+     function wv(vv, zv, Pv) {
+       const hv = vv._device,
+         Sv = hv.createCommandEncoder();
+       av(vv, zv, Sv, Pv), hv.queue.submit([Sv.finish()])
+     }
+ 
+     function av(vv, zv, Pv, hv) {
+       if (zv.mipLevelCount <= 1) return;
+ ... (65 more added lines; see GitHub link above)
```

#### 33. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L429` → after: `L1277-L1348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R1277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L1277-L1348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/296.js#L1277-L1348) · [Before (L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/296.js#L429)

```diff
-     wz.StoreLODInAlphaChannel = !1
+   },
+   40987: (vv, zv, Pv) => {
+     function hv(vv, zv) {
+       return Math.floor(Math.log2(Math.max(vv, zv))) + 1
+     }
+     Pv.d(zv, {
+       e: () => hv
+     })
+   },
+   40954: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       c: () => Nv,
+       e: () => lv
+     });
+     var hv = Pv(40962),
+       Sv = Pv(40967),
+ ... (56 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/297.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/297.js` (26 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3)

#### 1. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/297.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/297.js#L2)

```diff
- export const ids = [296, 297];
+ export const ids = [297];
```

#### 2. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L4-L43` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/297.js#L4) · [Before (L4-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/297.js#L4-L43)

```diff
-   40885: (zz, tz, sz) => {
-     sz.r(tz), sz.d(tz, {
-       _DDSTextureLoader: () => Xz
-     });
-     var Fz = sz(39155),
-       Wz = sz(40865);
-     class Xz {
-       constructor() {
-         this.supportCascades = !0
-       }
-       loadCubeData(zz, tz, sz, Xz) {
-         const Oz = tz.FD();
-         let oz, vz = !1,
-           Uz = 1e3;
-         if (Array.isArray(zz))
-           for (let Fz = 0; Fz < zz.length; Fz++) {
- ... (24 more removed lines; see GitHub link above)
+   41067: (vv, zv, Pv) => {
```

#### 3. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L45` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/297.js#L6) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/297.js#L45)

```diff
-       d: () => Uz
+       e: () => Nv
```

#### 4. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L47-L51` → after: `L8-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/297.js#L8-L12) · [Before (L47-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/297.js#L47-L51)

```diff
-     var Fz = sz(36475),
-       Wz = sz(36507),
-       Xz = sz(39155),
-       Oz = sz(36479),
-       oz = sz(36654);
+     var hv = Pv(36594),
+       Sv = Pv(36620),
+       ev = Pv(39284),
+       gv = Pv(36599),
+       pv = Pv(36751);
```

#### 5. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L63` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/297.js#L24) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/297.js#L63)

```diff
-         zz.aJ()?.FD().flushFramebuffer();
+         vv.rD()?.ma().flushFramebuffer();
```

#### 6. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L106` → after: `L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/297.js#L67) · [Before (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/297.js#L106)

```diff
-         const Wz = zz instanceof Float32Array ? zz : Float32Array.from(zz),
+         const Sv = vv instanceof Float32Array ? vv : Float32Array.from(vv),
```

#### 7. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L165` → after: `L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/297.js#L126) · [Before (L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/297.js#L165)

```diff
-               isNaN(Hz) && (Hz = 0), isNaN(Bz) && (Bz = 0), isNaN(Pz) && (Pz = 0), 0 === zz.type && (Hz /= 255, Bz /= 255, Pz /= 255), zz.gammaSpace && (Hz = Math.pow((0, Wz.Clamp)(Hz), Oz.i), Bz = Math.pow((0, Wz.Clamp)(Bz), Oz.i), Pz = Math.pow((0, Wz.Clamp)(Pz), Oz.i));
+               isNaN(iv) && (iv = 0), isNaN(cv) && (cv = 0), isNaN(Gv) && (Gv = 0), 0 === vv.type && (iv /= 255, cv /= 255, Gv /= 255), vv.gammaSpace && (iv = Math.pow((0, Sv.Clamp)(iv), gv.h), cv = Math.pow((0, Sv.Clamp)(cv), gv.h), Gv = Math.pow((0, Sv.Clamp)(Gv), gv.h));
```

#### 8. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L174` → after: `L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/297.js#L135) · [Before (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/297.js#L174)

```diff
-               const Yz = new oz.c(Hz, Bz, Pz);
+               const jv = new pv.b(iv, cv, Gv);
```

#### 9. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L181` → after: `L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/297.js#L142) · [Before (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/297.js#L181)

```diff
-         return Fz.scaleInPlace(bz), Fz.convertIncidentRadianceToIrradiance(), Fz.convertIrradianceToLambertianRadiance(), Xz.g.FromHarmonics(Fz)
+         return hv.scaleInPlace(wv), hv.convertIncidentRadianceToIrradiance(), hv.convertIrradianceToLambertianRadiance(), ev.f.FromHarmonics(hv)
```

#### 10. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L184` → after: `L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/297.js#L145) · [Before (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/297.js#L184)

```diff
-     Uz._FileFaces = [new vz("right", new Fz.p(1, 0, 0), new Fz.p(0, 0, -1), new Fz.p(0, -1, 0)), new vz("left", new Fz.p(-1, 0, 0), new Fz.p(0, 0, 1), new Fz.p(0, -1, 0)), new vz("up", new Fz.p(0, 1, 0), new Fz.p(1, 0, 0), new Fz.p(0, 0, 1)), new vz("down", new Fz.p(0, -1, 0), ne … [truncated]
+     Nv._FileFaces = [new dv("right", new hv.l(1, 0, 0), new hv.l(0, 0, -1), new hv.l(0, -1, 0)), new dv("left", new hv.l(-1, 0, 0), new hv.l(0, 0, 1), new hv.l(0, -1, 0)), new dv("up", new hv.l(0, 1, 0), new hv.l(1, 0, 0), new hv.l(0, 0, 1)), new dv("down", new hv.l(0, -1, 0), ne … [truncated]
```

#### 11. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L186` → after: `L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/297.js#L147) · [Before (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/297.js#L186)

```diff
-   40865: (zz, tz, sz) => {
+   41058: (vv, zv, Pv) => {
```

#### 12. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L190-L193` → after: `L151-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L151-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/297.js#L151-L154) · [Before (L190-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/297.js#L190-L193)

```diff
-     var Fz = sz(36507),
-       Wz = sz(38097),
-       Xz = sz(40872),
-       Oz = sz(39234);
+     var hv = Pv(36620),
+       Sv = Pv(38209),
+       ev = Pv(41067),
+       gv = Pv(39368);
```

#### 13. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L220` → after: `L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/297.js#L181) · [Before (L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/297.js#L220)

```diff
-           case bz:
+           case wv:
```

#### 14. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L250` → after: `L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/297.js#L211) · [Before (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/297.js#L250)

```diff
-             oz[Uz] = (0, Oz.d)(vz[sz]), oz[Uz + 1] = (0, Oz.d)(vz[sz + 1]), oz[Uz + 2] = (0, Oz.d)(vz[sz + 2]), wz.StoreLODInAlphaChannel ? oz[Uz + 3] = Xz : oz[Uz + 3] = (0, Oz.d)(vz[sz + 3]), Uz += 4
+             pv[Nv] = (0, gv.b)(dv[Pv]), pv[Nv + 1] = (0, gv.b)(dv[Pv + 1]), pv[Nv + 2] = (0, gv.b)(dv[Pv + 2]), av.StoreLODInAlphaChannel ? pv[Nv + 3] = ev : pv[Nv + 3] = (0, gv.b)(dv[Pv + 3]), Nv += 4
```

#### 15. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L262` → after: `L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/297.js#L223) · [Before (L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/297.js#L262)

```diff
-               oz[Uz] = vz[Fz], oz[Uz + 1] = vz[Fz + 1], oz[Uz + 2] = vz[Fz + 2], oz[Uz + 3] = (0, Oz.g)(Xz), Uz += 4
+               pv[Nv] = dv[hv], pv[Nv + 1] = dv[hv + 1], pv[Nv + 2] = dv[hv + 2], pv[Nv + 3] = (0, gv.i)(ev), Nv += 4
```

#### 16. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L287` → after: `L248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/297.js#L248) · [Before (L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/297.js#L287)

```diff
-           for (let tz = 0; tz < zz; tz++) oz[Uz] = (0, Oz.g)(vz[Uz]), oz[Uz + 1] = (0, Oz.g)(vz[Uz + 1]), oz[Uz + 2] = (0, Oz.g)(vz[Uz + 2]), wz.StoreLODInAlphaChannel ? oz[Uz + 3] = (0, Oz.g)(Xz) : oz[Uz + 3] = (0, Oz.g)(vz[Uz + 3]), Uz += 4;
+           for (let zv = 0; zv < vv; zv++) pv[Nv] = (0, gv.i)(dv[Nv]), pv[Nv + 1] = (0, gv.i)(dv[Nv + 1]), pv[Nv + 2] = (0, gv.i)(dv[Nv + 2]), av.StoreLODInAlphaChannel ? pv[Nv + 3] = (0, gv.i)(ev) : pv[Nv + 3] = (0, gv.i)(dv[Nv + 3]), Nv += 4;
```

#### 17. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L297` → after: `L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/297.js#L258) · [Before (L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/297.js#L297)

```diff
-             oz[Uz] = 255 * (0, Fz.Clamp)(vz[sz]), oz[Uz + 1] = 255 * (0, Fz.Clamp)(vz[sz + 1]), oz[Uz + 2] = 255 * (0, Fz.Clamp)(vz[sz + 2]), wz.StoreLODInAlphaChannel ? oz[Uz + 3] = Oz : oz[Uz + 3] = 255 * (0, Fz.Clamp)(vz[sz + 3]), Uz += 4
+             pv[Nv] = 255 * (0, hv.Clamp)(dv[Pv]), pv[Nv + 1] = 255 * (0, hv.Clamp)(dv[Pv + 1]), pv[Nv + 2] = 255 * (0, hv.Clamp)(dv[Pv + 2]), av.StoreLODInAlphaChannel ? pv[Nv + 3] = gv : pv[Nv + 3] = 255 * (0, hv.Clamp)(dv[Pv + 3]), Nv += 4
```

#### 18. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L308` → after: `L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/297.js#L269) · [Before (L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/297.js#L308)

```diff
-             vz[Kz] = 255 * (0, Fz.Clamp)((0, Oz.d)(Uz[sz])), vz[Kz + 1] = 255 * (0, Fz.Clamp)((0, Oz.d)(Uz[sz + 1])), vz[Kz + 2] = 255 * (0, Fz.Clamp)((0, Oz.d)(Uz[sz + 2])), wz.StoreLODInAlphaChannel ? vz[Kz + 3] = oz : vz[Kz + 3] = 255 * (0, Fz.Clamp)((0, Oz.d)(Uz[sz + 3])), Kz … [truncated]
+             dv[lv] = 255 * (0, hv.Clamp)((0, gv.b)(Nv[Pv])), dv[lv + 1] = 255 * (0, hv.Clamp)((0, gv.b)(Nv[Pv + 1])), dv[lv + 2] = 255 * (0, hv.Clamp)((0, gv.b)(Nv[Pv + 2])), av.StoreLODInAlphaChannel ? dv[lv + 3] = pv : dv[lv + 3] = 255 * (0, hv.Clamp)((0, gv.b)(Nv[Pv + 3])), lv … [truncated]
```

#### 19. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L360-L362` → after: `L321-L323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L321-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/297.js#L321-L323) · [Before (L360-L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/297.js#L360-L362)

```diff
-         if (542327876 !== Pz[0]) return void Wz.e.Error("Invalid magic number in DDS header");
-         if (!Fz.isFourCC && !Fz.isRGB && !Fz.isLuminance) return void Wz.e.Error("Unsupported format, must contain a FourCC, RGB or LUMINANCE code");
-         if (Fz.isCompressed && !Bz) return void Wz.e.Error("Compressed textures are not supported on this platform.");
+         if (542327876 !== Gv[0]) return void Sv.d.Error("Invalid magic number in DDS header");
+         if (!hv.isFourCC && !hv.isRGB && !hv.isLuminance) return void Sv.d.Error("Unsupported format, must contain a FourCC, RGB or LUMINANCE code");
+         if (hv.isCompressed && !cv) return void Sv.d.Error("Compressed textures are not supported on this platform.");
```

#### 20. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L367` → after: `L328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/297.js#L328) · [Before (L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/297.js#L367)

```diff
-           case Kz:
+           case lv:
```

#### 21. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L370` → after: `L331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/297.js#L331) · [Before (L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/297.js#L370)

```diff
-           case uz:
+           case Tv:
```

#### 22. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L373` → after: `L334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/297.js#L334) · [Before (L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/297.js#L373)

```diff
-           case Nz:
+           case Wv:
```

#### 23. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L382` → after: `L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/297.js#L343) · [Before (L382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/297.js#L382)

```diff
-           case bz: {
+           case wv: {
```

#### 24. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L398` → after: `L359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/297.js#L359) · [Before (L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/297.js#L398)

```diff
-             return void Wz.e.Error(["Unsupported FourCC code:", (jz = rz, String.fromCharCode(255 & jz, jz >> 8 & 255, jz >> 16 & 255, jz >> 24 & 255))])
+             return void Sv.d.Error(["Unsupported FourCC code:", (xv = mv, String.fromCharCode(255 & xv, xv >> 8 & 255, xv >> 16 & 255, xv >> 24 & 255))])
```

#### 25. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L411` → after: `L372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/297.js#L372) · [Before (L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/297.js#L411)

```diff
-               const Xz = -1 === Uz ? Cz : 0;
+               const ev = -1 === Nv ? Ov : 0;
```

#### 26. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L454` → after: `L415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/297.js#L415) · [Before (L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/297.js#L454)

```diff
-         Hz && Hz.length > 0 ? Fz.sphericalPolynomial = Xz.d.ConvertCubeMapToSphericalPolynomial({
+         iv && iv.length > 0 ? hv.sphericalPolynomial = ev.e.ConvertCubeMapToSphericalPolynomial({
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/298.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/298.js` (22 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89)

#### 1. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/298.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/298.js#L2)

```diff
- export const ids = [298];
+ export const ids = [297, 298];
```

#### 2. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/298.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/298.js#L4)

```diff
-   40902: (zz, tz, sz) => {
+   41077: (vv, zv, Pv) => {
```

#### 3. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/298.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/298.js#L6)

```diff
-       _ENVTextureLoader: () => Iz
+       _DDSTextureLoader: () => ev
```

#### 4. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L8-L222` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/298.js#L8-L9) · [Before (L8-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/298.js#L8-L222)

```diff
-     var Fz = sz(39111),
-       Wz = sz(36475),
-       Xz = sz(36507),
-       Oz = sz(39155),
-       oz = sz(39021),
-       vz = sz(39163),
-       Uz = (sz(39256), sz(40909)),
-       Kz = sz(38097),
-       uz = (sz(40921), sz(40945), sz(39231));
-     const Nz = "image/png",
-       bz = [134, 22, 135, 150, 246, 214, 150, 54];
- 
-     function wz(zz) {
-       const tz = new DataView(zz.buffer, zz.byteOffset, zz.byteLength);
-       let sz = 0;
-       for (let Oz = 0; Oz < bz.length; Oz++)
- ... (199 more removed lines; see GitHub link above)
+     var hv = Pv(39284),
+       Sv = Pv(41058);
```

#### 5. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L225` → after: `L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/298.js#L12) · [Before (L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/298.js#L225)

```diff
-         this.supportCascades = !1
+         this.supportCascades = !0
```

#### 6. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L227-L239` → after: `L14-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/298.js#L14-L24) · [Before (L227-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/298.js#L227-L239)

```diff
-       loadCubeData(zz, tz, sz, Fz, Wz) {
-         if (Array.isArray(zz)) return;
-         const Xz = wz(zz);
-         if (Xz) {
-           tz.width = Xz.width, tz.height = Xz.width;
-           try {
-             (0, Jz.d)(), mz(tz, Xz), Bz(tz, zz, Xz).then((() => {
-               tz.isReady = !0, tz.onLoadedObservable.notifyObservers(tz), tz.onLoadedObservable.clear(), Fz && Fz()
-             }), (zz => {
-               Wz?.("Can not upload environment levels", zz)
-             }))
-           } catch (Oz) {
-             Wz?.("Can not upload environment file", Oz)
+       loadCubeData(vv, zv, Pv, ev) {
+         const gv = zv.ma();
+         let pv, dv = !1,
+           Nv = 1e3;
+         if (Array.isArray(vv))
+           for (let hv = 0; hv < vv.length; hv++) {
+             const Pv = vv[hv];
+             pv = Sv.DDSTools.GetDDSInfo(Pv), zv.width = pv.width, zv.height = pv.height, dv = (pv.isRGB || pv.isLuminance || pv.mipmapCount > 1) && zv.generateMipMaps, gv._unpackFlipY(pv.isCompressed), Sv.DDSTools.UploadDDSLevels(gv, zv, Pv, pv, dv, 6, -1, hv), pv.isFourCC || 1 ! … [truncated]
+           } else {
+             const ev = vv;
+             pv = Sv.DDSTools.GetDDSInfo(ev), zv.width = pv.width, zv.height = pv.height, Pv && (pv.sphericalPolynomial = new hv.f), dv = (pv.isRGB || pv.isLuminance || pv.mipmapCount > 1) && zv.generateMipMaps, gv._unpackFlipY(pv.isCompressed), Sv.DDSTools.UploadDDSLevels(gv, zv, … [truncated]
```

#### 7. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L241` → after: `L26-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L26-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/298.js#L26-L32) · [Before (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/298.js#L241)

```diff
-         } else Wz && Wz("Can not parse the environment file", null)
+         gv._setCubeMapTextureParams(zv, dv, Nv), zv.isReady = !0, zv.onLoadedObservable.notifyObservers(zv), zv.onLoadedObservable.clear(), ev && ev({
+           isDDS: !0,
+           width: zv.width,
+           info: pv,
+           data: vv,
+           texture: zv
+         })
```

#### 8. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L243-L244` → after: `L34-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L34-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/298.js#L34-L39) · [Before (L243-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/298.js#L243-L244)

```diff
-       loadData() {
-         throw ".env not supported in 2d."
+       loadData(vv, zv, Pv) {
+         const hv = Sv.DDSTools.GetDDSInfo(vv),
+           ev = (hv.isRGB || hv.isLuminance || hv.mipmapCount > 1) && zv.generateMipMaps && Math.max(hv.width, hv.height) >> hv.mipmapCount - 1 === 1;
+         Pv(hv.width, hv.height, ev, hv.isFourCC, (() => {
+           Sv.DDSTools.UploadDDSLevels(zv.ma(), zv, vv, hv, ev, 1)
+         }))
```

#### 9. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L248` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/298.js#L43) · [Before (L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/298.js#L248)

```diff
-   40950: (zz, tz, sz) => {
+   41067: (vv, zv, Pv) => {
```

#### 10. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L250` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/298.js#L45) · [Before (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/298.js#L250)

```diff
-       d: () => Oz
+       e: () => Nv
```

#### 11. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L252-L285` → after: `L47-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L47-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/298.js#L47-L51) · [Before (L252-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/298.js#L252-L285)

```diff
-     var Fz = sz(40872),
-       Wz = sz(39163);
-     let Xz = !1;
- 
-     function Oz() {
-       Xz || (Xz = !0, Wz.b.prototype._sphericalPolynomialTargetSize = 0, Wz.b.prototype.forceSphericalPolynomialsRecompute = function() {
-         this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
-       }, Object.defineProperty(Wz.b.prototype, "sphericalPolynomial", {
-         get: function() {
-           if (this._texture) {
-             if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
-             if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = Fz.d.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialCo … [truncated]
-               this._texture._sphericalPolynomial = zz, this._texture._sphericalPolynomialComputed = !0
-             }))), null
-           }
-           return null
- ... (18 more removed lines; see GitHub link above)
+     var hv = Pv(36594),
+       Sv = Pv(36620),
+       ev = Pv(39284),
+       gv = Pv(36599),
+       pv = Pv(36751);
```

#### 12. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L297` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/298.js#L63) · [Before (L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/298.js#L297)

```diff
-         zz.aJ()?.FD().flushFramebuffer();
+         vv.rD()?.ma().flushFramebuffer();
```

#### 13. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L340` → after: `L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/298.js#L106) · [Before (L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/298.js#L340)

```diff
-         const Wz = zz instanceof Float32Array ? zz : Float32Array.from(zz),
+         const Sv = vv instanceof Float32Array ? vv : Float32Array.from(vv),
```

#### 14. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L399` → after: `L165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/298.js#L165) · [Before (L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/298.js#L399)

```diff
-               isNaN(Hz) && (Hz = 0), isNaN(Bz) && (Bz = 0), isNaN(Pz) && (Pz = 0), 0 === zz.type && (Hz /= 255, Bz /= 255, Pz /= 255), zz.gammaSpace && (Hz = Math.pow((0, Wz.Clamp)(Hz), Oz.i), Bz = Math.pow((0, Wz.Clamp)(Bz), Oz.i), Pz = Math.pow((0, Wz.Clamp)(Pz), Oz.i));
+               isNaN(iv) && (iv = 0), isNaN(cv) && (cv = 0), isNaN(Gv) && (Gv = 0), 0 === vv.type && (iv /= 255, cv /= 255, Gv /= 255), vv.gammaSpace && (iv = Math.pow((0, Sv.Clamp)(iv), gv.h), cv = Math.pow((0, Sv.Clamp)(cv), gv.h), Gv = Math.pow((0, Sv.Clamp)(Gv), gv.h));
```

#### 15. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L408` → after: `L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/298.js#L174) · [Before (L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/298.js#L408)

```diff
-               const Yz = new oz.c(Hz, Bz, Pz);
+               const jv = new pv.b(iv, cv, Gv);
```

#### 16. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L415` → after: `L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/298.js#L181) · [Before (L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/298.js#L415)

```diff
-         return Fz.scaleInPlace(bz), Fz.convertIncidentRadianceToIrradiance(), Fz.convertIrradianceToLambertianRadiance(), Xz.g.FromHarmonics(Fz)
+         return hv.scaleInPlace(wv), hv.convertIncidentRadianceToIrradiance(), hv.convertIrradianceToLambertianRadiance(), ev.f.FromHarmonics(hv)
```

#### 17. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L418` → after: `L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/298.js#L184) · [Before (L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/298.js#L418)

```diff
-     Uz._FileFaces = [new vz("right", new Fz.p(1, 0, 0), new Fz.p(0, 0, -1), new Fz.p(0, -1, 0)), new vz("left", new Fz.p(-1, 0, 0), new Fz.p(0, 0, 1), new Fz.p(0, -1, 0)), new vz("up", new Fz.p(0, 1, 0), new Fz.p(1, 0, 0), new Fz.p(0, 0, 1)), new vz("down", new Fz.p(0, -1, 0), ne … [truncated]
+     Nv._FileFaces = [new dv("right", new hv.l(1, 0, 0), new hv.l(0, 0, -1), new hv.l(0, -1, 0)), new dv("left", new hv.l(-1, 0, 0), new hv.l(0, 0, 1), new hv.l(0, -1, 0)), new dv("up", new hv.l(0, 1, 0), new hv.l(1, 0, 0), new hv.l(0, 0, 1)), new dv("down", new hv.l(0, -1, 0), ne … [truncated]
```

#### 18. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L420` → after: `L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/298.js#L186) · [Before (L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/298.js#L420)

```diff
-   40921: (zz, tz, sz) => {
+   41058: (vv, zv, Pv) => {
```

#### 19. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L422` → after: `L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/298.js#L188) · [Before (L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/298.js#L422)

```diff
-       c: () => Xz
+       DDSTools: () => av
```

#### 20. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L424-L425` → after: `L190-L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L190-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/298.js#L190-L203) · [Before (L424-L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/298.js#L424-L425)

```diff
-     var Fz = sz(40909),
-       Wz = sz(40928);
+     var hv = Pv(36620),
+       Sv = Pv(38209),
+       ev = Pv(41067),
+       gv = Pv(39368);
+     const pv = 131072,
+       dv = 131072;
+ 
+     function Nv(vv) {
+       return vv.charCodeAt(0) + (vv.charCodeAt(1) << 8) + (vv.charCodeAt(2) << 16) + (vv.charCodeAt(3) << 24)
+     }
+     const lv = Nv("DXT1"),
+       Tv = Nv("DXT3"),
+       Wv = Nv("DXT5"),
+       wv = Nv("DX10");
```

#### 21. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L427-L457` → after: `L205-L310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L205-L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/298.js#L205-L310) · [Before (L427-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/298.js#L427-L457)

```diff
-       static ExpandRGBDTexture(zz) {
-         const tz = zz._texture;
-         if (!tz || !zz.isRGBD) return;
-         const Wz = tz.FD(),
-           Xz = Wz.getCaps(),
-           Oz = tz.isReady;
-         let oz = !1;
-         Xz.textureHalfFloatRender && Xz.textureHalfFloatLinearFiltering ? (oz = !0, tz.type = 2) : Xz.textureFloatRender && Xz.textureFloatLinearFiltering && (oz = !0, tz.type = 1), oz && (tz.isReady = !1, tz._isRGBD = !1, tz.invertY = !1);
-         const vz = async () => {
-           const Xz = Wz.isWebGPU,
-             Oz = Xz ? 1 : 0;
-           tz.isReady = !1, Xz ? await sz.e(332).then((() => sz(60550))) : await sz.e(314).then((() => sz(60558)));
-           const oz = new Fz.c("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, Wz, !1, void 0, tz.type, void 0, null, !1, void 0, Oz);
-           oz.externalTextureSamplerBinding = !0;
-           const vz = Wz.createRenderTargetTexture(tz.width, {
-             generateDepthBuffer: !1,
- ... (15 more removed lines; see GitHub link above)
+       static GetDDSInfo(vv) {
+         const zv = new Int32Array(vv.buffer, vv.byteOffset, 31),
+           Pv = new Int32Array(vv.buffer, vv.byteOffset, 35);
+         let hv = 1;
+         zv[2] & pv && (hv = Math.max(1, zv[7]));
+         const Sv = zv[21],
+           ev = Sv === wv ? Pv[32] : 0;
+         let gv = 0;
+         switch (Sv) {
+           case 113:
+             gv = 2;
+             break;
+           case 116:
+             gv = 1;
+             break;
+           case wv:
+ ... (90 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L459-L461` → after: `L312-L465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L312-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/298.js#L312-L465) · [Before (L459-L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/298.js#L459-L461)

```diff
-       static async EncodeTextureToRGBD(zz, tz) {
-         let Fz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-         return tz.FD().isWebGPU ? await sz.e(333).then((() => sz(60573))) : await sz.e(315).then((() => sz(60567))), await (0, Wz.b)("rgbdEncode", zz, tz, Fz, 1, 5)
+       static _GetRGBAArrayBuffer(vv, zv, Pv, hv, Sv, ev, gv, pv, dv) {
+         const Nv = new Uint8Array(hv),
+           lv = new Uint8Array(Sv, Pv);
+         let Tv = 0;
+         for (let Wv = 0; Wv < zv; Wv++)
+           for (let zv = 0; zv < vv; zv++) {
+             const Pv = 4 * (zv + Wv * vv);
+             Nv[Tv] = lv[Pv + ev], Nv[Tv + 1] = lv[Pv + gv], Nv[Tv + 2] = lv[Pv + pv], Nv[Tv + 3] = lv[Pv + dv], Tv += 4
+           }
+         return Nv
+       }
+       static _ExtractLongWordOrder(vv) {
+         return 0 === vv || 255 === vv || -16777216 === vv ? 0 : 1 + av._ExtractLongWordOrder(vv >> 8)
+       }
+       static _GetRGBArrayBuffer(vv, zv, Pv, hv, Sv, ev, gv, pv) {
+         const dv = new Uint8Array(hv),
+ ... (138 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/299.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/299.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8)

#### 1. `bundles/bloxd.io/chunks/js/299.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/299.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/299.js#L4)

```diff
-   40878: (zz, tz, sz) => {
+   41090: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/299.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/299.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/299.js#L6)

```diff
-       _IESTextureLoader: () => oz
+       _ENVTextureLoader: () => nv
```

#### 3. `bundles/bloxd.io/chunks/js/299.js` (Changed code · before: `L8` → after: `L8-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8) · [After (L8-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/299.js#L8-L18) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/299.js#L8)

```diff
-     var Fz = sz(36507);
+     var hv = Pv(39247),
+       Sv = Pv(36594),
+       ev = Pv(36620),
+       gv = Pv(39284),
+       pv = Pv(39134),
+       dv = Pv(39287),
+       Nv = (Pv(39395), Pv(41097)),
+       lv = Pv(38209),
+       Tv = (Pv(41109), Pv(41139), Pv(39361));
+     const Wv = "image/png",
+       wv = [134, 22, 135, 150, 246, 214, 150, 54];
```

#### 4. `bundles/bloxd.io/chunks/js/299.js` (Changed code · before: `L11` → after: `L21-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8) · [After (L21-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/299.js#L21-L66) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/299.js#L11)

```diff
-       return zz.split(" ").filter((zz => "" !== zz)).map((zz => parseFloat(zz)))
+       const zv = new DataView(vv.buffer, vv.byteOffset, vv.byteLength);
+       let Pv = 0;
+       for (let gv = 0; gv < wv.length; gv++)
+         if (zv.getUint8(Pv++) !== wv[gv]) return lv.d.Error("Not a babylon environment map"), null;
+       let hv, Sv = "";
+       for (; hv = zv.getUint8(Pv++);) Sv += String.fromCharCode(hv);
+       let ev = JSON.parse(Sv);
+       return ev = sv(ev), ev.binaryDataPosition = Pv, ev.specular && (ev.specular.lodGenerationScale = ev.specular.lodGenerationScale || .8), ev
+     }
+ 
+     function sv(vv) {
+       if (vv.version > 2) throw new Error(`Unsupported babylon environment map version "${vv.version}". Latest supported version is "2".`);
+       return 2 === vv.version ? vv : vv = {
+         ...vv,
+         version: 2,
+         imageType: Wv
+ ... (30 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/299.js` (Changed code · before: `L15-L45` → after: `L70-L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8) · [After (L70-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/299.js#L70-L222) · [Before (L15-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/299.js#L15-L45)

```diff
-       for (; sz.length !== tz;) {
-         const tz = Wz(zz.lines[zz.index++]);
-         sz.push(...tz)
-       }
-     }
- 
-     function Oz(zz, tz, sz) {
-       let Wz = 0,
-         Xz = 0,
-         Oz = 0,
-         oz = 0,
-         vz = 0,
-         Uz = 0;
-       for (let Fz = 0; Fz < zz.numberOfHorizontalAngles - 1; Fz++)
-         if (sz < zz.horizontalAngles[Fz + 1] || Fz === zz.numberOfHorizontalAngles - 2) {
-           Xz = Fz, Oz = zz.horizontalAngles[Fz], oz = zz.horizontalAngles[Fz + 1];
- ... (15 more removed lines; see GitHub link above)
+       const hv = (Pv = sv(Pv)).specular;
+       if (!hv) return Promise.resolve([]);
+       vv._lodGenerationScale = hv.lodGenerationScale;
+       const ev = [],
+         gv = Cv(zv, Pv);
+       ev.push(mv(vv, gv, Pv.imageType));
+       const pv = Pv.irradiance?.irradianceTexture;
+       if (pv) {
+         const hv = iv(zv, Pv);
+         let gv = null;
+         Pv.irradiance?.irradianceTexture?.dominantDirection && (gv = Sv.l.FromArray(Pv.irradiance.irradianceTexture.dominantDirection)), ev.push(jv(vv, hv, pv.size, Pv.imageType, gv))
+       }
+       return Promise.all(ev)
+     }
+     async function Gv(vv, zv, Pv, hv, Sv, ev, gv, pv, dv, Nv, lv) {
+       return await new Promise(((Tv, Wv) => {
+ ... (137 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/299.js` (Changed code · before: `L50-L65` → after: `L227-L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8R227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8) · [After (L227-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/299.js#L227-L330) · [Before (L50-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/299.js#L50-L65)

```diff
-       loadCubeData() {
-         throw ".ies not supported in Cube."
-       }
-       loadData(zz, tz, sz) {
-         const Fz = function(zz) {
-           const tz = {
-               lines: new TextDecoder("utf-8").decode(zz).split("\n"),
-               index: 0
-             },
-             sz = {
-               version: tz.lines[0],
-               candelaValues: [],
-               horizontalAngles: [],
-               verticalAngles: [],
-               numberOfHorizontalAngles: 0,
-               numberOfVerticalAngles: 0
+       loadCubeData(vv, zv, Pv, hv, Sv) {
+         if (Array.isArray(vv)) return;
+         const ev = av(vv);
+         if (ev) {
+           zv.width = ev.width, zv.height = ev.width;
+           try {
+             (0, Yv.d)(), Fv(zv, ev), cv(zv, vv, ev).then((() => {
+               zv.isReady = !0, zv.onLoadedObservable.notifyObservers(zv), zv.onLoadedObservable.clear(), hv && hv()
+             }), (vv => {
+               Sv?.("Can not upload environment levels", vv)
+             }))
+           } catch (gv) {
+             Sv?.("Can not upload environment file", gv)
+           }
+         } else Sv && Sv("Can not parse the environment file", null)
+       }
+ ... (88 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/299.js` (Changed code · before: `L67-L98` → after: `L332-L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8R332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8) · [After (L332-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/299.js#L332-L333) · [Before (L67-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/299.js#L67-L98)

```diff
-           for (tz.index = 1; tz.lines.length > 0 && !tz.lines[tz.index].includes("TILT=");) tz.index++;
-           tz.lines[tz.index].includes("INCLUDE"), tz.index++;
-           const Fz = Wz(tz.lines[tz.index++]);
-           sz.numberOfLights = Fz[0], sz.lumensPerLamp = Fz[1], sz.numberOfVerticalAngles = Fz[3], sz.numberOfHorizontalAngles = Fz[4], sz.photometricType = Fz[5], sz.unitsType = Fz[6], sz.width = Fz[7], sz.length = Fz[8], sz.height = Fz[9], tz.index++;
-           for (let Wz = 0; Wz < sz.numberOfHorizontalAngles; Wz++) sz.candelaValues[Wz] = [];
-           Xz(tz, sz.numberOfVerticalAngles, sz.verticalAngles), Xz(tz, sz.numberOfHorizontalAngles, sz.horizontalAngles);
-           for (let Wz = 0; Wz < sz.numberOfHorizontalAngles; Wz++) Xz(tz, sz.numberOfVerticalAngles, sz.candelaValues[Wz]);
-           let oz = -1;
-           for (let Wz = 0; Wz < sz.numberOfHorizontalAngles; Wz++)
-             for (let zz = 0; zz < sz.numberOfVerticalAngles; zz++) oz = Math.max(oz, sz.candelaValues[Wz][zz]);
-           if (oz > 0)
-             for (let Wz = 0; Wz < sz.numberOfHorizontalAngles; Wz++)
-               for (let zz = 0; zz < sz.numberOfVerticalAngles; zz++) sz.candelaValues[Wz][zz] /= oz;
-           const vz = 180,
-             Uz = 360,
-             Kz = new Float32Array(64800),
- ... (16 more removed lines; see GitHub link above)
+             vv(this.ConvertCubeMapToSphericalPolynomial(Wv))
+           }))
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/300.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/300.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008)

#### 1. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/300.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/300.js#L4)

```diff
-   40894: (zz, tz, sz) => {
+   41069: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/300.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/300.js#L6)

```diff
-       _BasisTextureLoader: () => Bz
+       _IESTextureLoader: () => pv
```

#### 3. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L8-L11` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/300.js#L8) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/300.js#L8-L11)

```diff
-     var Fz, Wz = sz(39264),
-       Xz = sz(38097),
-       Oz = sz(39617),
-       oz = sz(39021);
+     var hv = Pv(36620);
```

#### 4. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L13-L23` → after: `L10-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L10-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/300.js#L10-L12) · [Before (L13-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/300.js#L13-L23)

```diff
-     function vz() {
-       const zz = 0,
-         tz = 1,
-         sz = 2,
-         Fz = 3,
-         Wz = 6,
-         Xz = 8,
-         Oz = 9,
-         oz = 10,
-         vz = 14;
-       let Uz = null;
+     function Sv(vv) {
+       return vv.split(" ").filter((vv => "" !== vv)).map((vv => parseFloat(vv)))
+     }
```

#### 5. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L25-L48` → after: `L14-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L14-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/300.js#L14-L17) · [Before (L25-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/300.js#L25-L48)

```diff
-       function Kz(zz, tz, sz, Fz, Wz) {
-         const Xz = zz.getImageTranscodedSizeInBytes(tz, sz, Fz);
-         let Oz = new Uint8Array(Xz);
-         if (!zz.transcodeImage(Oz, tz, sz, Fz, 1, 0)) return null;
-         if (Wz) {
-           Oz = function(zz, tz, sz, Fz) {
-             const Wz = new Uint16Array(4),
-               Xz = new Uint16Array(sz * Fz),
-               Oz = sz / 4,
-               oz = Fz / 4;
-             for (let vz = 0; vz < oz; vz++)
-               for (let Fz = 0; Fz < Oz; Fz++) {
-                 const oz = tz + 8 * (vz * Oz + Fz);
-                 Wz[0] = zz[oz] | zz[oz + 1] << 8, Wz[1] = zz[oz + 2] | zz[oz + 3] << 8, Wz[2] = (2 * (31 & Wz[0]) + 1 * (31 & Wz[1])) / 3 | (2 * (2016 & Wz[0]) + 1 * (2016 & Wz[1])) / 3 & 2016 | (2 * (63488 & Wz[0]) + 1 * (63488 & Wz[1])) / 3 & 63488, Wz[3] = (2 * (31 & Wz[1]) +  … [truncated]
-                 for (let tz = 0; tz < 4; tz++) {
-                   const Oz = zz[oz + 4 + tz];
- ... (8 more removed lines; see GitHub link above)
+     function ev(vv, zv, Pv) {
+       for (; Pv.length !== zv;) {
+         const zv = Sv(vv.lines[vv.index++]);
+         Pv.push(...zv)
```

#### 6. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L50-L238` → after: `L19-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L19-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/300.js#L19-L45) · [Before (L50-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/300.js#L50-L238)

```diff
-       onmessage = uz => {
-         if ("init" === uz.data.action) {
-           if (uz.data.url) try {
-             importScripts(uz.data.url)
-           } catch (Nz) {
-             postMessage({
-               action: "error",
-               error: Nz
-             })
-           }
-           Uz || (Uz = BASIS({
-             wasmBinary: uz.data.wasmBinary
-           })), null !== Uz && Uz.then((zz => {
-             BASIS = zz, zz.initializeBasis(), postMessage({
-               action: "init"
-             })
- ... (173 more removed lines; see GitHub link above)
+     }
+ 
+     function gv(vv, zv, Pv) {
+       let Sv = 0,
+         ev = 0,
+         gv = 0,
+         pv = 0,
+         dv = 0,
+         Nv = 0;
+       for (let hv = 0; hv < vv.numberOfHorizontalAngles - 1; hv++)
+         if (Pv < vv.horizontalAngles[hv + 1] || hv === vv.numberOfHorizontalAngles - 2) {
+           ev = hv, gv = vv.horizontalAngles[hv], pv = vv.horizontalAngles[hv + 1];
+           break
+         } for (let hv = 0; hv < vv.numberOfVerticalAngles - 1; hv++)
+         if (zv < vv.verticalAngles[hv + 1] || hv === vv.numberOfVerticalAngles - 2) {
+           Sv = hv, dv = vv.verticalAngles[hv], Nv = vv.verticalAngles[hv + 1];
+ ... (11 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L243-L261` → after: `L50-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L50-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/300.js#L50-L51) · [Before (L243-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/300.js#L243-L261)

```diff
-       loadCubeData(zz, tz, sz, Fz, Xz) {
-         if (Array.isArray(zz)) return;
-         const Oz = tz.FD().getCaps(),
-           oz = {
-             supportedCompressionFormats: {
-               etc1: !!Oz.etc1,
-               s3tc: !!Oz.s3tc,
-               pvrtc: !!Oz.pvrtc,
-               etc2: !!Oz.etc2,
-               astc: !!Oz.astc,
-               bc7: !!Oz.bptc
-             }
-           };
-         wz(zz, oz).then((zz => {
-           const sz = zz.fileInfo.images[0].levels.length > 1 && tz.generateMipMaps;
-           gz(tz, zz), tz.FD()._setCubeMapTextureParams(tz, sz), tz.isReady = !0, tz.onLoadedObservable.notifyObservers(tz), tz.onLoadedObservable.clear(), Fz && Fz()
- ... (3 more removed lines; see GitHub link above)
+       loadCubeData() {
+         throw ".ies not supported in Cube."
```

#### 8. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L264-L282` → after: `L54-L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L54-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/300.js#L54-L98) · [Before (L264-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/300.js#L264-L282)

```diff
-         const Fz = tz.FD().getCaps(),
-           Xz = {
-             supportedCompressionFormats: {
-               etc1: !!Fz.etc1,
-               s3tc: !!Fz.s3tc,
-               pvrtc: !!Fz.pvrtc,
-               etc2: !!Fz.etc2,
-               astc: !!Fz.astc,
-               bc7: !!Fz.bptc
-             }
-           };
-         wz(zz, Xz).then((zz => {
-           const Fz = zz.fileInfo.images[0].levels[0],
-             Wz = zz.fileInfo.images[0].levels.length > 1 && tz.generateMipMaps;
-           sz(Fz.width, Fz.height, Wz, -1 !== zz.format, (() => {
-             gz(tz, zz)
- ... (3 more removed lines; see GitHub link above)
+         const hv = function(vv) {
+           const zv = {
+               lines: new TextDecoder("utf-8").decode(vv).split("\n"),
+               index: 0
+             },
+             Pv = {
+               version: zv.lines[0],
+               candelaValues: [],
+               horizontalAngles: [],
+               verticalAngles: [],
+               numberOfHorizontalAngles: 0,
+               numberOfVerticalAngles: 0
+             };
+           for (zv.index = 1; zv.lines.length > 0 && !zv.lines[zv.index].includes("TILT=");) zv.index++;
+           zv.lines[zv.index].includes("INCLUDE"), zv.index++;
+           const hv = Sv(zv.lines[zv.index++]);
+ ... (29 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/301.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/301.js` (20 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad)

#### 1. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/301.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/301.js#L4-L6)

```diff
-   40936: (zz, tz, sz) => {
-     sz.d(tz, {
-       d: () => Hz
+   41085: (vv, zv, Pv) => {
+     Pv.r(zv), Pv.d(zv, {
+       _BasisTextureLoader: () => cv
```

#### 2. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L8-L204` → after: `L8-L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L8-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/301.js#L8-L43) · [Before (L8-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/301.js#L8-L204)

```diff
-     var Fz = sz(36505),
-       Wz = sz(36475),
-       Xz = sz(39617),
-       Oz = sz(39299),
-       oz = sz(39111),
-       vz = sz(38097),
-       Uz = sz(39280),
-       Kz = sz(39312),
-       uz = sz(36487),
-       Nz = sz(39074),
-       bz = sz(39270),
-       wz = sz(39350);
-     class Dz {
-       get renderList() {
-         return this._renderList
-       }
- ... (181 more removed lines; see GitHub link above)
+     var hv, Sv = Pv(39399),
+       ev = Pv(38209),
+       gv = Pv(39798),
+       pv = Pv(39134);
+ 
+     function dv() {
+       const vv = 0,
+         zv = 1,
+         Pv = 2,
+         hv = 3,
+         Sv = 6,
+         ev = 8,
+         gv = 9,
+         pv = 10,
+         dv = 14;
+       let Nv = null;
+ ... (20 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L206-L227` → after: `L45-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L45-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/301.js#L45-L46) · [Before (L206-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/301.js#L206-L227)

```diff
-             } else if (!tz.isReady(!0)) {
-               sz = !1;
-               continue
-             }
-             let Fz = tz._edgesRenderer,
-               Wz = tz.hasThinInstances;
-             if (tz.VJ) {
-               const zz = tz.AFz;
-               zz.edgesShareWithInstances && zz._edgesRenderer?.isEnabled && (Fz = zz._edgesRenderer, Wz = !0)
-             } else tz.jFz && tz.edgesShareWithInstances && (Wz = !0);
-             !this.customRenderFunction && this.renderOpaqueMeshes && Fz?.isEnabled && (Fz.isReady(Wz) || (sz = !1))
-           }
-           if (this.renderParticles && zz.particlesEnabled) {
-             const tz = this.particleSystemList || zz.lY;
-             for (const zz of tz) zz.isReady() || (sz = !1)
-           }
- ... (6 more removed lines; see GitHub link above)
+             return ev
+           }(gv, 0, vv.getImageWidth(zv, Pv) + 3 & -4, vv.getImageHeight(zv, Pv) + 3 & -4)
```

#### 4. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L229` → after: `L48`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/301.js#L48) · [Before (L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/301.js#L229)

```diff
-         return this._engine.currentRenderPassId = tz, sz
+         return gv
```

#### 5. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L231-L252` → after: `L50-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L50-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/301.js#L50-L58) · [Before (L231-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/301.js#L231-L252)

```diff
-       _prepareRenderingManager() {
-         let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-           tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         const sz = this._scene;
-         let Fz, Wz, Xz = null;
-         const Oz = this.renderList ? this.renderList : sz.frameGraph ? sz.meshes : sz.getActiveMeshes().data,
-           oz = this.renderList || sz.frameGraph ? Oz.length : sz.getActiveMeshes().length;
-         if (this.getCustomRenderList && (Xz = this.getCustomRenderList(zz, Oz, oz)), Xz) Fz = Xz.length, Wz = this.forceLayerMaskCheck;
-         else {
-           if (this._defaultRenderListPrepared && !tz && !this._engine.isWebGPU) return Oz;
-           this._defaultRenderListPrepared = !0, Xz = Oz, Fz = oz, Wz = !this.renderList || this.forceLayerMaskCheck
-         }
-         const vz = sz.activeCamera,
-           Uz = this.cameraForLOD ?? vz,
-           Kz = sz.getBoundingBoxRenderer?.();
-         if (sz._activeMeshesFrozen && this._isFrozen) {
- ... (6 more removed lines; see GitHub link above)
+       onmessage = Tv => {
+         if ("init" === Tv.data.action) {
+           if (Tv.data.url) try {
+             importScripts(Tv.data.url)
+           } catch (Wv) {
+             postMessage({
+               action: "error",
+               error: Wv
+             })
```

#### 6. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L254-L265` → after: `L60-L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L60-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/301.js#L60-L85) · [Before (L254-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/301.js#L254-L265)

```diff
-           return Xz
-         }
-         if (this._renderingManager.reset(), this._activeMeshes.reset(), this._activeBoundingBoxes.reset(), Kz && Kz.reset(), this.renderMeshes) {
-           const zz = sz.getRenderId(),
-             tz = sz.getFrameId();
-           for (let Oz = 0; Oz < Fz; Oz++) {
-             const Fz = Xz[Oz];
-             if (Fz && !Fz.isBlocked) {
-               if (this.customIsReadyFunction) {
-                 if (!this.customIsReadyFunction(Fz, this.refreshRate, !1)) {
-                   this.resetRefreshCounter();
-                   continue
+           Nv || (Nv = BASIS({
+             wasmBinary: Tv.data.wasmBinary
+           })), null !== Nv && Nv.then((vv => {
+             BASIS = vv, vv.initializeBasis(), postMessage({
+               action: "init"
+             })
+           }))
+         } else if ("transcode" === Tv.data.action) {
+           const Nv = Tv.data.config,
+             Wv = Tv.data.imageData,
+             wv = new BASIS.BasisFile(Wv),
+             av = function(vv) {
+               const zv = vv.getHasAlpha(),
+                 Pv = vv.getNumImages(),
+                 hv = [];
+               for (let Sv = 0; Sv < Pv; Sv++) {
+ ... (10 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L267-L269` → after: `L87`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/301.js#L87) · [Before (L267-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/301.js#L267-L269)

```diff
-               } else if (!Fz.isReady(0 === this.refreshRate)) {
-                 this.resetRefreshCounter();
-                 continue
+                 hv.push(zv)
```

#### 8. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L271-L283` → after: `L89-L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L89-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/301.js#L89-L114) · [Before (L271-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/301.js#L271-L283)

```diff
-               let Xz, Oz;
-               if (Uz) {
-                 const zz = Fz._internalAbstractMeshDataInfo._currentLOD.get(Uz);
-                 zz && zz[1] === tz ? Xz = zz[0] : (Xz = sz.customLODSelector ? sz.customLODSelector(Fz, Uz) : Fz.getLOD(Uz), zz ? (zz[0] = Xz, zz[1] = tz) : Fz._internalAbstractMeshDataInfo._currentLOD.set(Uz, [Xz, tz]))
-               } else Xz = Fz;
-               if (!Xz) continue;
-               if (Xz !== Fz && 0 !== Xz.billboardMode && Xz.computeWorldMatrix(), Xz._preActivateForIntermediateRendering(zz), Oz = !(!Wz || !vz) && 0 === (Fz.layerMask & vz.layerMask), Fz.isEnabled() && Fz.isVisible && Fz.kY && !Oz) {
-                 if (this._activeMeshes.push(Fz), Xz._internalAbstractMeshDataInfo._wasActiveLastFrame = !0, Xz !== Fz && Xz._activate(zz, !0), this.enableBoundingBoxRendering && Kz && Kz._preActiveMesh(Fz), Fz._activate(zz, !0) && Fz.kY.length) {
-                   Fz.VJ ? Fz._internalAbstractMeshDataInfo._actAsRegularMesh && (Xz = Fz) : Xz._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !1, Xz._internalAbstractMeshDataInfo._isActiveIntermediate = !0, sz._prepareSkeleton(Xz);
-                   for (let zz = 0; zz < Xz.kY.length; zz++) {
-                     const tz = Xz.kY[zz];
-                     this.enableBoundingBoxRendering && Kz && Kz._evaluateSubMesh(Fz, tz), this._renderingManager.dispatch(tz, Xz)
-                   }
+               return {
+                 hasAlpha: zv,
+                 images: hv
+               }
+             }(wv);
+           let sv = Tv.data.ignoreSupportedFormats ? null : function(Nv, lv) {
+               let Tv = null;
+               Nv.supportedCompressionFormats && (Tv = Nv.supportedCompressionFormats.astc ? pv : Nv.supportedCompressionFormats.bc7 ? Sv : Nv.supportedCompressionFormats.s3tc ? lv.hasAlpha ? hv : Pv : Nv.supportedCompressionFormats.pvrtc ? lv.hasAlpha ? gv : ev : Nv.supportedComp … [truncated]
+               return Tv
+             }(Tv.data.config, av),
+             Cv = !1;
+           null === sv && (Cv = !0, sv = av.hasAlpha ? hv : Pv);
+           let iv = !0;
+           wv.startTranscoding() || (iv = !1);
+           const cv = [];
+           for (let vv = 0; vv < av.images.length && iv; vv++) {
+ ... (10 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L285` → after: `L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/301.js#L116) · [Before (L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/301.js#L285)

```diff
-                 Fz._postActivate()
+                 Pv.transcodedPixels = Sv, cv.push(Pv.transcodedPixels.buffer)
```

#### 10. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1053-L1070` → after: `L133-L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L133-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/301.js#L133-L135) · [Before (L1053-L1070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/301.js#L1053-L1070)

```diff
-       const Nz = await bz.EncodeImageAsync(sz, zz, tz, Fz, oz, uz);
-       void 0 !== Wz && Xz.j.DownloadBlob(Nz, Wz), Nz.type !== Fz && vz.e.Warn(`DumpData: The requested mimeType '${Fz}' is not supported. The result has mimeType '${Nz.type}' instead.`);
-       const wz = await Nz.arrayBuffer();
-       return Kz ? wz : `data:${Fz};base64,${(0,Uz.g)(wz)}`
-     }
- 
-     function Hz(zz, tz, sz, Fz) {
-       let Wz = arguments.length > 5 ? arguments[5] : void 0;
-       void 0 !== Wz || Fz || (Wz = ""), gz(zz, tz, sz, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png", Wz, arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] && arguments[7], arguments.len … [truncated]
-         Fz && Fz(zz)
-       }))
-     }
- 
-     function Bz() {
-       uz && (uz?.then((zz => {
-         zz.canvas instanceof HTMLCanvasElement && zz.canvas.remove(), zz.dumpEngine && (zz.dumpEngine.engine.dispose(), zz.dumpEngine.renderer.dispose(), zz.dumpEngine.wrapper.dispose())
- ... (2 more removed lines; see GitHub link above)
+     }! function(vv) {
+       vv[vv.cTFETC1 = 0] = "cTFETC1", vv[vv.cTFETC2 = 1] = "cTFETC2", vv[vv.cTFBC1 = 2] = "cTFBC1", vv[vv.cTFBC3 = 3] = "cTFBC3", vv[vv.cTFBC4 = 4] = "cTFBC4", vv[vv.cTFBC5 = 5] = "cTFBC5", vv[vv.cTFBC7 = 6] = "cTFBC7", vv[vv.cTFPVRTC1_4_RGB = 8] = "cTFPVRTC1_4_RGB", vv[vv.cTFPVR … [truncated]
+     }(hv || (hv = {}));
```

#### 11. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1072-L1075` → after: `L137-L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L137-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/301.js#L137-L138) · [Before (L1072-L1075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/301.js#L1072-L1075)

```diff
-       DumpData: Hz,
-       DumpDataAsync: gz,
-       DumpFramebuffer: Dz,
-       Dispose: Bz
+       JSModuleURL: `${Sv.h._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.js`,
+       WasmModuleURL: `${Sv.h._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.wasm`
```

#### 12. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1077-L1199` → after: `L140-L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L140-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/301.js#L140-L158) · [Before (L1077-L1199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/301.js#L1077-L1199)

```diff
-     let rz = !1;
- 
-     function Yz() {
-       if (rz) return;
-       rz = !0;
-       Xz.j.DumpData = Hz, Xz.j.DumpDataAsync = gz, Xz.j.DumpFramebuffer = Dz
-     }
-   },
-   40928: (zz, tz, sz) => {
-     sz.d(tz, {
-       b: () => bz,
-       c: () => wz,
-       d: () => Dz
-     });
-     var Fz = sz(39617),
-       Wz = sz(40936),
- ... (107 more removed lines; see GitHub link above)
+     let lv = null,
+       Tv = null,
+       Wv = 0;
+     const wv = async () => (lv || (lv = new Promise(((vv, zv) => {
+       Tv ? vv(Tv) : Sv.h.LoadFileAsync(Sv.h.GetBabylonScriptURL(Nv.WasmModuleURL)).then((Pv => {
+         if ("function" !== typeof URL) return zv("Basis transcoder requires an environment with a URL constructor");
+         const hv = URL.createObjectURL(new Blob([`(${dv})()`], {
+           type: "application/javascript"
+         }));
+         Tv = new Worker(hv), async function(vv, zv, Pv) {
+           return await new Promise(((hv, ev) => {
+             const gv = zv => {
+               "init" === zv.data.action ? (vv.removeEventListener("message", gv), hv(vv)) : "error" === zv.data.action && ev(zv.data.error || "error initializing worker")
+             };
+             vv.addEventListener("message", gv), vv.postMessage({
+               action: "init",
+ ... (3 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1203-L1313` → after: `L183-L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L183-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/301.js#L183-L195) · [Before (L1203-L1313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/301.js#L1203-L1313)

```diff
-     }
-     async function wz(zz, tz, Xz) {
-       let oz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
-         vz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
-         Uz = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-         Kz = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
-       await async function(zz) {
-         if (zz.isReady()) return;
-         if (zz.loadingError) throw new Error(zz.errorObject?.message || `Texture ${zz.name} errored while loading.`);
-         const tz = zz.onLoadObservable;
-         if (tz) return await new Promise((zz => tz.addOnce((() => zz()))));
-         const sz = zz._texture?.onLoadedObservable;
-         if (sz) return await new Promise((zz => sz.addOnce((() => zz()))));
-         throw new Error(`Cannot determine readiness of texture ${zz.name}.`)
-       }(zz);
-       const Nz = zz.getInternalTexture(),
- ... (95 more removed lines; see GitHub link above)
+     }, sv = (vv, zv) => {
+       let Pv = zv._gl?.TEXTURE_2D;
+       vv.isCube && (Pv = zv._gl?.TEXTURE_CUBE_MAP), zv._bindTextureDirectly(Pv, vv, !0)
+     }, Cv = (vv, zv) => {
+       const Pv = vv.ma();
+       for (let Sv = 0; Sv < zv.fileInfo.images.length; Sv++) {
+         const dv = zv.fileInfo.images[Sv].levels[0];
+         if (vv._invertVScale = vv.invertY, -1 === zv.format || zv.format === hv.cTFRGB565)
+           if (vv.type = 10, vv.format = 4, !Pv._features.basisNeedsPOT || Math.log2(dv.width) % 1 === 0 && Math.log2(dv.height) % 1 === 0) vv._invertVScale = !vv.invertY, vv.width = dv.width + 3 & -4, vv.height = dv.height + 3 & -4, vv.samplingMode = 2, sv(vv, Pv), Pv._uploadData … [truncated]
+           else {
+             const zv = new pv.e(Pv, 2);
+             vv._invertVScale = vv.invertY, zv.type = 10, zv.format = 4, zv.width = dv.width + 3 & -4, zv.height = dv.height + 3 & -4, sv(zv, Pv), Pv._uploadDataToTextureDirectly(zv, new Uint16Array(dv.transcodedPixels.buffer), Sv, 0, 4, !0), Pv._rescaleTexture(zv, vv, Pv.scenes[0 … [truncated]
+               Pv._releaseTexture(zv), sv(vv, Pv)
```

#### 14. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1335-L1363` → after: `L198-L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L198-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/301.js#L198-L206) · [Before (L1335-L1363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/301.js#L1335-L1363)

```diff
-         }(zz, gz, Hz, oz, vz, Kz)
-       }
-       let Bz = await zz.readPixels(oz, vz);
-       if (!Bz) throw new Error(`Failed to read pixels from texture ${zz.name}.`);
-       if (Bz instanceof Float32Array) {
-         const zz = new Uint8Array(Bz.length);
-         let tz = Bz.length;
-         for (; tz--;) {
-           const sz = Bz[tz];
-           zz[tz] = Math.round(255 * (0, uz.Clamp)(sz))
-         }
-         Bz = zz
-       }
-       const Pz = gz * Hz,
-         rz = 4 * Pz;
-       if (Bz.length !== rz) {
- ... (13 more removed lines; see GitHub link above)
+         else {
+           vv.width = dv.width, vv.height = dv.height, vv.generateMipMaps = zv.fileInfo.images[Sv].levels.length > 1;
+           const hv = iv.GetInternalFormatFromBasisFormat(zv.format, Pv);
+           vv.format = hv, sv(vv, Pv);
+           const pv = zv.fileInfo.images[Sv].levels;
+           for (let zv = 0; zv < pv.length; zv++) {
+             const ev = pv[zv];
+             Pv._uploadCompressedDataToTextureDirectly(vv, hv, ev.width, ev.height, ev.transcodedPixels, Sv, zv)
+           }!Pv._features.basisNeedsPOT || Math.log2(vv.width) % 1 === 0 && Math.log2(vv.height) % 1 === 0 || (ev.d.Warn("Loaded .basis texture width and height are not a power of two. Texture wrapping will be set to Texture.CLAMP_ADDRESSMODE as other modes are not supported with  … [truncated]
```

#### 15. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1366-L2001` → after: `L209-L216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L209-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/301.js#L209-L216) · [Before (L1366-L2001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/301.js#L1366-L2001)

```diff
-       return Bz
-     }
-     const Dz = {
-       CreateResizedCopy: function(zz, tz, sz) {
-         let Xz = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
-         const Oz = zz.aJ(),
-           oz = Oz.FD(),
-           vz = new Wz.d("resized" + zz.name, {
-             width: tz,
-             height: sz
-           }, Oz, !zz.noMipmap, !0, zz._texture.type, !1, zz.samplingMode, !1);
-         vz.wrapU = zz.wrapU, vz.wrapV = zz.wrapV, vz.uOffset = zz.uOffset, vz.vOffset = zz.vOffset, vz.uScale = zz.uScale, vz.vScale = zz.vScale, vz.uAng = zz.uAng, vz.vAng = zz.vAng, vz.wAng = zz.wAng, vz.coordinatesIndex = zz.coordinatesIndex, vz.level = zz.level, vz.anisotropi … [truncated]
-         const Uz = new Kz("pass", 1, null, Xz ? Fz.g.BILINEAR_SAMPLINGMODE : Fz.g.NEAREST_SAMPLINGMODE, oz, !1, 0);
-         return Uz.externalTextureSamplerBinding = !0, Uz.onEffectCreatedObservable.addOnce((tz => {
-           tz.executeWhenCompiled((() => {
-             Uz.onApply = function(tz) {
- ... (620 more removed lines; see GitHub link above)
+     }, iv = {
+       JSModuleURL: Nv.JSModuleURL,
+       WasmModuleURL: Nv.WasmModuleURL,
+       GetInternalFormatFromBasisFormat: (vv, zv) => {
+         let Pv;
+         switch (vv) {
+           case hv.cTFETC1:
+             Pv = 36196;
```

#### 16. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2003-L2004` → after: `L218-L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L218-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/301.js#L218-L219) · [Before (L2003-L2004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/301.js#L2003-L2004)

```diff
-           case 1:
-             this.updateEffect("#define NEGATIVEX");
+           case hv.cTFBC1:
+             Pv = 33776;
```

#### 17. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2006-L2007` → after: `L221-L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L221-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/301.js#L221-L222) · [Before (L2006-L2007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/301.js#L2006-L2007)

```diff
-           case 2:
-             this.updateEffect("#define POSITIVEY");
+           case hv.cTFBC4:
+             Pv = 33779;
```

#### 18. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2009-L2010` → after: `L224-L225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L224-L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/301.js#L224-L225) · [Before (L2009-L2010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/301.js#L2009-L2010)

```diff
-           case 3:
-             this.updateEffect("#define NEGATIVEY");
+           case hv.cTFASTC_4x4:
+             Pv = 37808;
```

#### 19. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2012-L2013` → after: `L227-L228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L227-L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/301.js#L227-L228) · [Before (L2012-L2013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/301.js#L2012-L2013)

```diff
-           case 4:
-             this.updateEffect("#define POSITIVEZ");
+           case hv.cTFETC2:
+             Pv = 37496;
```

#### 20. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2015-L2016` → after: `L230-L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L230-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/301.js#L230-L231) · [Before (L2015-L2016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/301.js#L2015-L2016)

```diff
-           case 5:
-             this.updateEffect("#define NEGATIVEZ")
+           case hv.cTFBC7:
+             Pv = 36492
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/302.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/302.js` (14 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a)

#### 1. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/302.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/302.js#L4-L6)

```diff
-   40954: (zz, tz, sz) => {
-     sz.r(tz), sz.d(tz, {
-       _HDRTextureLoader: () => Kz
+   41125: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       e: () => iv
```

#### 2. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L8` → after: `L8-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L8-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/302.js#L8-L19) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/302.js#L8)

```diff
-     var Fz = sz(36475);
+     var hv = Pv(36618),
+       Sv = Pv(36594),
+       ev = Pv(39798),
+       gv = Pv(39449),
+       pv = Pv(39247),
+       dv = Pv(38209),
+       Nv = Pv(39435),
+       lv = Pv(39459),
+       Tv = Pv(36602),
+       Wv = Pv(39204),
+       wv = Pv(39413),
+       av = Pv(39500);
```

#### 3. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L10-L41` → after: `L21-L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L21-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/302.js#L21-L258) · [Before (L10-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/302.js#L10-L41)

```diff
-       static ConvertPanoramaToCubemap(zz, tz, sz, Fz) {
-         let Wz, Xz = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
-           Oz = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
-         if (!zz) throw "ConvertPanoramaToCubemap: input cannot be null";
-         if (zz.length != tz * sz * 3) {
-           if (zz.length != tz * sz * 4) throw "ConvertPanoramaToCubemap: input size is wrong";
-           Wz = 4
-         } else Wz = 3;
-         return {
-           front: this.CreateCubemapTexture(Fz, this.FACE_FRONT, zz, tz, sz, Xz, Oz, Wz),
-           back: this.CreateCubemapTexture(Fz, this.FACE_BACK, zz, tz, sz, Xz, Oz, Wz),
-           left: this.CreateCubemapTexture(Fz, this.FACE_LEFT, zz, tz, sz, Xz, Oz, Wz),
-           right: this.CreateCubemapTexture(Fz, this.FACE_RIGHT, zz, tz, sz, Xz, Oz, Wz),
-           up: this.CreateCubemapTexture(Fz, this.FACE_UP, zz, tz, sz, Xz, Oz, Wz),
-           down: this.CreateCubemapTexture(Fz, this.FACE_DOWN, zz, tz, sz, Xz, Oz, Wz),
-           size: Fz,
- ... (16 more removed lines; see GitHub link above)
+       get renderList() {
+         return this._renderList
+       }
+       set renderList(vv) {
+         this._renderList !== vv && (this._unObserveRenderList && (this._unObserveRenderList(), this._unObserveRenderList = null), vv && (this._unObserveRenderList = (0, Tv.i)(vv, this._renderListHasChanged)), this._renderList = vv)
+       }
+       get disableImageProcessing() {
+         return this._disableImageProcessing
+       }
+       set disableImageProcessing(vv) {
+         vv !== this._disableImageProcessing && (this._disableImageProcessing = vv, this._scene.markAllMaterialsAsDirty(64))
+       }
+       get disableDepthPrePass() {
+         return this._disableDepthPrePass
+       }
+       set disableDepthPrePass(vv) {
+ ... (222 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L43-L50` → after: `L260-L285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L260-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/302.js#L260-L285) · [Before (L43-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/302.js#L43-L50)

```diff
-             let Xz = tz[0],
-               vz = tz[2];
-             for (let tz = 0; tz < zz; tz++)
-               for (let uz = 0; uz < Kz; uz++) {
-                 const Kz = vz.subtract(Xz).scale(gz).add(Xz);
-                 Kz.normalize();
-                 const uz = this.CalcProjectionSpherical(Kz, sz, Fz, Wz, oz, Oz);
-                 Uz[Hz * zz * 3 + 3 * tz + 0] += uz.r * Nz, Uz[Hz * zz * 3 + 3 * tz + 1] += uz.g * Nz, Uz[Hz * zz * 3 + 3 * tz + 2] += uz.b * Nz, Xz = Xz.add(bz), vz = vz.add(wz)
+             const hv = ev[gv];
+             if (hv && !hv.isBlocked) {
+               if (this.customIsReadyFunction) {
+                 if (!this.customIsReadyFunction(hv, this.refreshRate, !1)) {
+                   this.resetRefreshCounter();
+                   continue
+                 }
+               } else if (!hv.isReady(0 === this.refreshRate)) {
+                 this.resetRefreshCounter();
+                 continue
+               }
+               let ev, gv;
+               if (Nv) {
+                 const vv = hv._internalAbstractMeshDataInfo._currentLOD.get(Nv);
+                 vv && vv[1] === zv ? ev = vv[0] : (ev = Pv.customLODSelector ? Pv.customLODSelector(hv, Nv) : hv.getLOD(Nv), vv ? (vv[0] = ev, vv[1] = zv) : hv._internalAbstractMeshDataInfo._currentLOD.set(Nv, [ev, zv]))
+               } else ev = hv;
+ ... (10 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L52` → after: `L287-L569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L287-L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/302.js#L287-L569) · [Before (L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/302.js#L52)

```diff
-             gz += Dz * uz
+             }
+           }
+         }
+         if (this.enableBoundingBoxRendering && lv && zv)
+           for (let Tv = 0; Tv < lv.renderList.length; Tv++) {
+             const vv = lv.renderList.data[Tv];
+             this._activeBoundingBoxes.push(vv)
+           }
+         if (this._scene.particlesEnabled && this.renderParticles) {
+           this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
+           const vv = this.particleSystemList || Pv.mF;
+           for (let zv = 0; zv < vv.length; zv++) {
+             const Pv = vv[zv],
+               hv = Pv.emitter;
+             Pv.isStarted() && hv && (!hv.position || hv.isEnabled()) && this._renderingManager.dispatchParticles(Pv)
+           }
+ ... (267 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L56-L68` → after: `L719-L984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L719-L984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/302.js#L719-L984) · [Before (L56-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/302.js#L56-L68)

```diff
-       static CalcProjectionSpherical(zz, tz, sz, Fz, Wz, Xz) {
-         let Oz = Math.atan2(zz.z, zz.x);
-         const oz = Math.acos(zz.y);
-         for (; Oz < -Math.PI;) Oz += 2 * Math.PI;
-         for (; Oz > Math.PI;) Oz -= 2 * Math.PI;
-         let vz = Oz / Math.PI;
-         const Uz = oz / Math.PI;
-         vz = .5 * vz + .5;
-         let Kz = Math.round(vz * sz);
-         Kz < 0 ? Kz = 0 : Kz >= sz && (Kz = sz - 1);
-         let uz = Math.round(Uz * Fz);
-         uz < 0 ? uz = 0 : uz >= Fz && (uz = Fz - 1);
-         const Nz = Xz ? Fz - uz - 1 : uz;
+       disposeFramebufferObjects() {
+         this._renderTarget?.dispose(!0)
+       }
+       releaseInternalTexture() {
+         this._renderTarget?.releaseTextures(), this._texture = null
+       }
+       dispose() {
+         this.onResizeObservable.clear(), this.onClearObservable.clear(), this.onAfterUnbindObservable.clear(), this.onBeforeBindObservable.clear(), this._postProcessManager && (this._postProcessManager.dispose(), this._postProcessManager = null), this._prePassRenderTarget && this … [truncated]
+         const vv = this.rD();
+         if (!vv) return;
+         let zv = vv.customRenderTargets.indexOf(this);
+         zv >= 0 && vv.customRenderTargets.splice(zv, 1);
+         for (const Pv of vv.cameras) zv = Pv.customRenderTargets.indexOf(this), zv >= 0 && Pv.customRenderTargets.splice(zv, 1);
+         this._renderTarget?.dispose(), this._renderTarget = null, this._texture = null, super.dispose()
+       }
+       _rebuild() {
+ ... (250 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L70-L72` → after: `L986-L1008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L986-L1008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/302.js#L986-L1008) · [Before (L70-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/302.js#L70-L72)

```diff
-           r: tz[Nz * sz * Wz + Kz * Wz + 0],
-           g: tz[Nz * sz * Wz + Kz * Wz + 1],
-           b: tz[Nz * sz * Wz + Kz * Wz + 2]
+           canvas: vv,
+           dumpEngine: {
+             engine: hv,
+             renderer: ev,
+             wrapper: Nv
+           }
+         }
+       }()), await Tv
+     }
+     let wv = (() => {
+       var vv;
+       let zv, Pv = [];
+       return vv = class {
+         static async EncodeImageAsync(vv, zv, Pv, hv, Sv, gv) {
+           const pv = await Wv(),
+             dv = pv.dumpEngine;
+ ... (7 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L77-L80` → after: `L1059-L1063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR1059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L1059-L1063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/302.js#L1059-L1063) · [Before (L77-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/302.js#L77-L80)

```diff
-     function Xz(zz, tz, sz, Fz, Wz, Xz) {
-       Wz > 0 ? (Wz = function(zz, tz) {
-         return tz > 1023 ? zz * Math.pow(2, 1023) * Math.pow(2, tz - 1023) : tz < -1074 ? zz * Math.pow(2, -1074) * Math.pow(2, tz + 1074) : zz * Math.pow(2, tz)
-       }(1, Wz - 136), zz[Xz + 0] = tz * Wz, zz[Xz + 1] = sz * Wz, zz[Xz + 2] = Fz * Wz) : (zz[Xz + 0] = 0, zz[Xz + 1] = 0, zz[Xz + 2] = 0)
+     function iv(vv, zv, Pv, hv) {
+       let Sv = arguments.length > 5 ? arguments[5] : void 0;
+       void 0 !== Sv || hv || (Sv = ""), Cv(vv, zv, Pv, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png", Sv, arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] && arguments[7], arguments.len … [truncated]
+         hv && hv(vv)
+       }))
```

#### 9. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L83-L86` → after: `L1066-L1069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR1066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L1066-L1069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/302.js#L1066-L1069) · [Before (L83-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/302.js#L83-L86)

```diff
-     function Oz(zz, tz) {
-       let sz, Fz = "";
-       for (let Wz = tz; Wz < zz.length - tz && (sz = String.fromCharCode(zz[Wz]), "\n" != sz); Wz++) Fz += sz;
-       return Fz
+     function cv() {
+       Tv && (Tv?.then((vv => {
+         vv.canvas instanceof HTMLCanvasElement && vv.canvas.remove(), vv.dumpEngine && (vv.dumpEngine.engine.dispose(), vv.dumpEngine.renderer.dispose(), vv.dumpEngine.wrapper.dispose())
+       })), Tv = null)
```

#### 10. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L89-L109` → after: `L1079-L1082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR1079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L1079-L1082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/302.js#L1079-L1082) · [Before (L89-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/302.js#L89-L109)

```diff
-     function oz(zz) {
-       let tz = Oz(zz, 0);
-       if ("#" != tz[0] || "?" != tz[1]) throw "Bad HDR Format.";
-       let sz = !1,
-         Fz = !1,
-         Wz = 0;
-       do {
-         Wz += tz.length + 1, tz = Oz(zz, Wz), "FORMAT=32-bit_rle_rgbe" == tz ? Fz = !0 : 0 == tz.length && (sz = !0)
-       } while (!sz);
-       if (!Fz) throw "HDR Bad header format, unsupported FORMAT";
-       Wz += tz.length + 1, tz = Oz(zz, Wz);
-       const Xz = /^-Y (.*) \+X (.*)$/g.exec(tz);
-       if (!Xz || Xz.length < 3) throw "HDR Bad header format, no size";
-       const oz = parseInt(Xz[2]),
-         vz = parseInt(Xz[1]);
-       if (oz < 8 || oz > 32767) throw "HDR Bad header format, unsupported size";
- ... (5 more removed lines; see GitHub link above)
+     function jv() {
+       if (mv) return;
+       mv = !0;
+       ev.h.DumpData = iv, ev.h.DumpDataAsync = Cv, ev.h.DumpFramebuffer = sv
```

#### 11. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L112-L134` → after: `L1179-L1344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR1179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L1179-L1344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/302.js#L1179-L1344) · [Before (L112-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/302.js#L112-L134)

```diff
-     function vz(zz, tz) {
-       return function(zz, tz) {
-         let sz = tz.height;
-         const Fz = tz.width;
-         let Wz, Oz, oz, vz, Kz, uz, Nz, bz, wz = tz.dataPosition;
-         const Dz = new ArrayBuffer(4 * Fz),
-           gz = new Uint8Array(Dz),
-           Hz = new ArrayBuffer(tz.width * tz.height * 4 * 3),
-           Bz = new Float32Array(Hz);
-         for (; sz > 0;) {
-           if (Wz = zz[wz++], Oz = zz[wz++], oz = zz[wz++], vz = zz[wz++], 2 != Wz || 2 != Oz || 128 & oz || tz.width < 8 || tz.width > 32767) return Uz(zz, tz);
-           if ((oz << 8 | vz) != Fz) throw "HDR Bad header format, wrong scan line width";
-           for (uz = 0, bz = 0; bz < 4; bz++)
-             for (Nz = (bz + 1) * Fz; uz < Nz;)
-               if (Wz = zz[wz++], Oz = zz[wz++], Wz > 128) {
-                 if (Kz = Wz - 128, 0 == Kz || Kz > Nz - uz) throw "HDR Bad Format, bad scanline data (run)";
- ... (7 more removed lines; see GitHub link above)
+     function wv(vv, zv, Pv, hv, Sv, ev, pv, dv) {
+       const Nv = zv.ma();
+       return zv.isReady = !1, Sv = Sv ?? zv.samplingMode, hv = hv ?? zv.type, ev = ev ?? zv.format, pv = pv ?? zv.width, dv = dv ?? zv.height, -1 === hv && (hv = 0), new Promise((lv => {
+         const Tv = new gv.d("postprocess", vv, null, null, 1, null, Sv, Nv, !1, void 0, hv, void 0, null, !1, ev);
+         Tv.externalTextureSamplerBinding = !0;
+         const Wv = Nv.createRenderTargetTexture({
+           width: pv,
+           height: dv
+         }, {
+           generateDepthBuffer: !1,
+           generateMipMaps: !1,
+           generateStencilBuffer: !1,
+           samplingMode: Sv,
+           type: hv,
+           format: ev
+         });
+ ... (150 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L136-L137` → after: `L1346-L1392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR1346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L1346-L1392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/302.js#L1346-L1392) · [Before (L136-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/302.js#L136-L137)

```diff
-         return Bz
-       }(zz, tz)
+         cv = vv
+       }
+       const Gv = Cv * iv,
+         mv = 4 * Gv;
+       if (cv.length !== mv) {
+         const vv = 0 === Gv ? 0 : cv.length / Gv;
+         if (1 === vv || 2 === vv || 3 === vv) {
+           const zv = new Uint8Array(mv);
+           for (let Pv = 0, hv = 0, Sv = 0; Pv < Gv; Pv++, Sv += 4) {
+             const Pv = cv[hv++];
+             if (1 === vv) {
+               zv[Sv] = Pv, zv[Sv + 1] = Pv, zv[Sv + 2] = Pv, zv[Sv + 3] = 255;
+               continue
+             }
+             const ev = cv[hv++];
+             2 !== vv ? (zv[Sv] = Pv, zv[Sv + 1] = ev, zv[Sv + 2] = cv[hv++], zv[Sv + 3] = 255) : (zv[Sv] = Pv, zv[Sv + 1] = ev, zv[Sv + 2] = 0, zv[Sv + 3] = 255)
+ ... (31 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L140-L148` → after: `L1942-L1976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR1942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L1942-L1976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/302.js#L1942-L1976) · [Before (L140-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/302.js#L140-L148)

```diff
-     function Uz(zz, tz) {
-       let sz = tz.height;
-       const Fz = tz.width;
-       let Wz, Oz, oz, vz, Uz, Kz = tz.dataPosition;
-       const uz = new ArrayBuffer(tz.width * tz.height * 4 * 3),
-         Nz = new Float32Array(uz);
-       for (; sz > 0;) {
-         for (Uz = 0; Uz < tz.width; Uz++) Wz = zz[Kz++], Oz = zz[Kz++], oz = zz[Kz++], vz = zz[Kz++], Xz(Nz, Wz, Oz, oz, vz, (tz.height - sz) * Fz * 3 + 3 * Uz);
-         sz--
+     function Cv() {
+       sv || (sv = !0, Tv.b.prototype.setTextureFromPostProcess = function(vv, zv, Pv) {
+         let hv = null;
+         zv && (zv._forcedOutputTexture ? hv = zv._forcedOutputTexture : zv._textures.data[zv._currentRenderTextureInd] && (hv = zv._textures.data[zv._currentRenderTextureInd])), this._bindTexture(vv, hv?.texture ?? null, Pv)
+       }, Tv.b.prototype.setTextureFromPostProcessOutput = function(vv, zv, Pv) {
+         this._bindTexture(vv, zv?._outputTexture?.texture ?? null, Pv)
+       }, pv.b.prototype.setTextureFromPostProcess = function(vv, zv) {
+         this._engine.setTextureFromPostProcess(this._samplers[vv], zv, vv)
+       }, pv.b.prototype.setTextureFromPostProcessOutput = function(vv, zv) {
+         this._engine.setTextureFromPostProcessOutput(this._samplers[vv], zv, vv)
+       }, (0, lv.c)("BABYLON.PostProcess", av))
+     }
+   },
+   41130: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       c: () => gv,
+ ... (19 more added lines; see GitHub link above)
```
