# Changed — Bundle Modifications Report (Part 040 / 153)

- **Updated at**: `2026-11-27T18:53 JST`
- **Part**: `40 / 153` (**420** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 039](part-039.md) · [Part 041 →](part-041.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/229.js` (gw4e3a.937868ec → u88b9b.1969c480 · continued)

- **File**: `bundles/bloxd.io/chunks/js/229.js` (477 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0)

#### 180. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L3068` → after: `L3068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R3068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L3068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L3068) · [Before (L3068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L3068)

```diff
-         rotation: oB(BB + (OB ? -GB : GB)),
+         rotation: Ke(ee + (ie ? -He : He)),
```

#### 181. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L3092-L3093` → after: `L3092-L3093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R3092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L3092-L3093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L3092-L3093) · [Before (L3092-L3093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L3092-L3093)

```diff
-       SB = BB => BB.constructor === Uint8Array ? BB : ArrayBuffer.isView(BB) ? new Uint8Array(BB.buffer, BB.byteOffset, BB.byteLength) : new Uint8Array(BB),
-       nB = BB => BB.constructor === DataView ? BB : ArrayBuffer.isView(BB) ? new DataView(BB.buffer, BB.byteOffset, BB.byteLength) : new DataView(BB),
+       Oe = ee => ee.constructor === Uint8Array ? ee : ArrayBuffer.isView(ee) ? new Uint8Array(ee.buffer, ee.byteOffset, ee.byteLength) : new Uint8Array(ee),
+       de = ee => ee.constructor === DataView ? ee : ArrayBuffer.isView(ee) ? new DataView(ee.buffer, ee.byteOffset, ee.byteLength) : new DataView(ee),
```

#### 182. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L3122` → after: `L3122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R3122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L3122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L3122) · [Before (L3122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L3122)

```diff
-             if ("utf-16be" !== OB) throw new RangeError(`The encoding label provided ('${BB}') is invalid.`);
+             if ("utf-16be" !== ie) throw new RangeError(`The encoding label provided ('${ee}') is invalid.`);
```

#### 183. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L3252` → after: `L3252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R3252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L3252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L3252) · [Before (L3252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L3252)

```diff
-         throw new Error(`Unexpected value: ${BB}`)
+         throw new Error(`Unexpected value: ${ee}`)
```

#### 184. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L3320` → after: `L3320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R3320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L3320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L3320) · [Before (L3320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L3320)

```diff
-     const yO = () => null !== jO ? jO : jO = !("undefined" === typeof navigator || !(navigator.vendor?.match(/apple/i) || /AppleWebKit/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) || /\b(iPad|iPhone|iPod)\b/.test(navigator.userAgent)));
+     const Fi = () => null !== Ui ? Ui : Ui = !("undefined" === typeof navigator || !(navigator.vendor?.match(/apple/i) || /AppleWebKit/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) || /\b(iPad|iPhone|iPod)\b/.test(navigator.userAgent)));
```

#### 185. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L3322` → after: `L3322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R3322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L3322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L3322) · [Before (L3322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L3322)

```diff
-     const MO = () => null !== JO ? JO : JO = "undefined" !== typeof navigator && navigator.userAgent?.includes("Firefox");
+     const oi = () => null !== Ji ? Ji : Ji = "undefined" !== typeof navigator && navigator.userAgent?.includes("Firefox");
```

#### 186. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L3324-L3325` → after: `L3324-L3325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R3324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L3324-L3325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L3324-L3325) · [Before (L3324-L3325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L3324-L3325)

```diff
-     const zO = () => null !== PO ? PO : PO = !("undefined" === typeof navigator || !navigator.vendor?.includes("Google Inc") && !/Chrome/.test(navigator.userAgent));
-     const lO = BB => "undefined" === typeof globalThis.isSecureContext || globalThis.isSecureContext ? `${BB} is not available in this environment.` : `${BB} is not available in this environment; this may be because this page is running in an insecure context. Try serving your pa … [truncated]
+     const ki = () => null !== Ri ? Ri : Ri = !("undefined" === typeof navigator || !navigator.vendor?.includes("Google Inc") && !/Chrome/.test(navigator.userAgent));
+     const qi = ee => "undefined" === typeof globalThis.isSecureContext || globalThis.isSecureContext ? `${ee} is not available in this environment.` : `${ee} is not available in this environment; this may be because this page is running in an insecure context. Try serving your pa … [truncated]
```

#### 187. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L3329` → after: `L3329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R3329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L3329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L3329) · [Before (L3329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L3329)

```diff
-       NO = (BB, OB) => -1 !== BB ? BB : OB,
+       zi = (ee, ie) => -1 !== ee ? ee : ie,
```

#### 188. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L3391` → after: `L3391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R3391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L3391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L3391) · [Before (L3391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L3391)

```diff
-             GB = -1 === DB ? BB + OB : BB.slice(0, DB) + OB
+             He = -1 === be ? ee + ie : ee.slice(0, be) + ie
```

#### 189. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L3395` → after: `L3395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R3395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L3395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L3395) · [Before (L3395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L3395)

```diff
-           GB = -1 === YB ? OB : BB.slice(0, YB + 1) + OB
+           He = -1 === ye ? ie : ee.slice(0, ye + 1) + ie
```

#### 190. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L3440-L3444` → after: `L3440-L3444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R3440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L3440-L3444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L3440-L3444) · [Before (L3440-L3444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L3440-L3444)

```diff
-         if ("object" !== typeof BB || !BB) throw new TypeError(`${OB} must be an object.`);
-         if (!Number.isInteger(BB.left) || BB.left < 0) throw new TypeError(`${OB}.left must be a non-negative integer.`);
-         if (!Number.isInteger(BB.top) || BB.top < 0) throw new TypeError(`${OB}.top must be a non-negative integer.`);
-         if (!Number.isInteger(BB.width) || BB.width < 0) throw new TypeError(`${OB}.width must be a non-negative integer.`);
-         if (!Number.isInteger(BB.height) || BB.height < 0) throw new TypeError(`${OB}.height must be a non-negative integer.`)
+         if ("object" !== typeof ee || !ee) throw new TypeError(`${ie} must be an object.`);
+         if (!Number.isInteger(ee.left) || ee.left < 0) throw new TypeError(`${ie}.left must be a non-negative integer.`);
+         if (!Number.isInteger(ee.top) || ee.top < 0) throw new TypeError(`${ie}.top must be a non-negative integer.`);
+         if (!Number.isInteger(ee.width) || ee.width < 0) throw new TypeError(`${ie}.width must be a non-negative integer.`);
+         if (!Number.isInteger(ee.height) || ee.height < 0) throw new TypeError(`${ie}.height must be a non-negative integer.`)
```

#### 191. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L3490` → after: `L3490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R3490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L3490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L3490) · [Before (L3490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L3490)

```diff
-         const BB = `(${LO.toString()})();`,
+         const ee = `(${xi.toString()})();`,
```

#### 192. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L3524` → after: `L3524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R3524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L3524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L3524) · [Before (L3524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L3524)

```diff
-       EO = BB => Array.isArray(BB) ? BB : [BB];
+       mi = ee => Array.isArray(ee) ? ee : [ee];
```

#### 193. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L3532` → after: `L3532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R3532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L3532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L3532) · [Before (L3532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L3532)

```diff
-           oP: OB,
+           oR: ie,
```

#### 194. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L3545` → after: `L3545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R3545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L3545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L3545) · [Before (L3545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L3545)

```diff
-               jB.oP(DB)
+               Ue.oR(be)
```

#### 195. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L3555` → after: `L3555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R3555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L3555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L3555) · [Before (L3555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L3555)

```diff
-   40589: (BB, OB, GB) => {
+   40679: (ee, ie, He) => {
```

#### 196. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L3557-L3559` → after: `L3557-L3558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R3557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L3557-L3558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L3557-L3558) · [Before (L3557-L3559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L3557-L3559)

```diff
-       c: () => gG,
-       e: () => rG,
-       g: () => LG,
+       d: () => CH,
+       f: () => vH,
```

#### 197. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L3561` → after: `L3560-L3561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R3560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L3560-L3561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L3560-L3561) · [Before (L3561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L3561)

```diff
-       j: () => wG
+       l: () => cH,
+       p: () => mH
```

#### 198. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L3563-L3564` → after: `L3563-L3564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R3563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L3563-L3564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L3563-L3564) · [Before (L3563-L3564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L3563-L3564)

```diff
-     var YB = GB(40591),
-       DB = GB(40599);
+     var ye = He(40685),
+       be = He(40692);
```

#### 199. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L3569-L3570` → after: `L3569-L3570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R3569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L3569-L3570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L3569-L3570) · [Before (L3569-L3570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L3569-L3570)

```diff
-     var oB = GB(40610),
-       jB = GB(40574);
+     var Ke = He(40703),
+       Ue = He(40671);
```

#### 200. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L3576` → after: `L3576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R3576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L3576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L3576) · [Before (L3576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L3576)

```diff
-         return new yB(BB, (0, jB.Gd)(BB), 0, 0, BB.length)
+         return new Fe(ee, (0, Ue.nd)(ee), 0, 0, ee.length)
```

#### 201. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L3600` → after: `L3600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R3600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L3600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L3600) · [Before (L3600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L3600)

```diff
-         if (BB.filePos < BB.start || BB.filePos + OB > BB.end) throw new RangeError(`Tried reading [${BB.filePos}, ${BB.filePos+OB}), but slice is [${BB.start}, ${BB.end}). This is likely an internal error, please report it alongside the file that caused it.`)
+         if (ee.filePos < ee.start || ee.filePos + ie > ee.end) throw new RangeError(`Tried reading [${ee.filePos}, ${ee.filePos+ie}), but slice is [${ee.start}, ${ee.end}). This is likely an internal error, please report it alongside the file that caused it.`)
```

#### 202. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L3614` → after: `L3614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R3614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L3614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L3614) · [Before (L3614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L3614)

```diff
-     var lB = GB(40581);
+     var qe = He(40676);
```

#### 203. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L3617` → after: `L3617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R3617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L3617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L3617) · [Before (L3617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L3617)

```diff
-         this.mutex = new jB.d, this.trackTimestampInfo = new WeakMap, this.output = BB
+         this.mutex = new Ue.b, this.trackTimestampInfo = new WeakMap, this.output = ee
```

#### 204. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L3623` → after: `L3623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R3623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L3623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L3623) · [Before (L3623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L3623)

```diff
-           if (GB && (YB.maxTimestampBeforeLastKeyPacket = YB.maxTimestamp), null !== YB.maxTimestampBeforeLastKeyPacket && OB < YB.maxTimestampBeforeLastKeyPacket) throw new Error(`Timestamps cannot be smaller than the largest timestamp of the previous GOP (a GOP begins with a ke … [truncated]
+           if (He && (ye.maxTimestampBeforeLastKeyPacket = ye.maxTimestamp), null !== ye.maxTimestampBeforeLastKeyPacket && ie < ye.maxTimestampBeforeLastKeyPacket) throw new Error(`Timestamps cannot be smaller than the largest timestamp of the previous GOP (a GOP begins with a ke … [truncated]
```

#### 205. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L3634-L3637` → after: `L3634-L3637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R3634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L3634-L3637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L3634-L3637) · [Before (L3634-L3637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L3634-L3637)

```diff
-     var qB = GB(40603),
-       ZB = GB(40594);
-     var NB = GB(40627),
-       RB = GB(40619);
+     var Te = He(40699),
+       pe = He(40689);
+     var Xe = He(40712),
+       ze = He(40708);
```

#### 206. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L3671` → after: `L3671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R3671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L3671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L3671) · [Before (L3671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L3671)

```diff
-         (0, jB.Q)(void 0 !== OB);
+         (0, Ue.I)(void 0 !== ie);
```

#### 207. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L3734-L3736` → after: `L3734-L3736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R3734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L3734-L3736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L3734-L3736) · [Before (L3734-L3736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L3734-L3736)

```diff
-           DB = !(0, jB.kc)(BB) || !(0, jB.kc)(GB),
-           QB = DB ? KB : kB;
-         return XB("mvhd", +DB, 0, [QB(BB), QB(BB), kB(MG), QB(GB), IB(1), mB(1), Array(10).fill(0), gB(jB.p), Array(24).fill(0), kB(YB)])
+           be = !(0, Ue.Tb)(ee) || !(0, Ue.Tb)(He),
+           Me = be ? De : Ze;
+         return Ce("mvhd", +be, 0, [Me(ee), Me(ee), Ze(kH), Me(He), Ye(1), Ae(1), Array(10).fill(0), xe(Ue.m), Array(24).fill(0), Ze(ye)])
```

#### 208. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L3741` → after: `L3741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R3741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L3741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L3741) · [Before (L3741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L3741)

```diff
-         return rB("trak", void 0, [TB(BB, OB), YB ? bB(BB) : null, CB(BB, OB), void 0 !== GB.name ? rB("udta", void 0, [rB("name", [...jB.Bd.encode(GB.name)])]) : null])
+         return Le("trak", void 0, [je(ee, ie), ye ? se(ee) : null, Ie(ee, ie), void 0 !== He.name ? Le("udta", void 0, [Le("name", [...Ue.hd.encode(He.name)])]) : null])
```

#### 209. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L3745-L3746` → after: `L3745-L3746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R3745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L3745-L3746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L3745-L3746) · [Before (L3745-L3746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L3745-L3746)

```diff
-           YB = !(0, jB.kc)(OB) || !(0, jB.kc)(GB),
-           DB = YB ? KB : kB;
+           ye = !(0, Ue.Tb)(ie) || !(0, Ue.Tb)(He),
+           be = ye ? De : Ze;
```

#### 210. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L3753-L3755` → after: `L3753-L3755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R3753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L3753-L3755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L3753-L3755) · [Before (L3753-L3755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L3753-L3755)

```diff
-           } = BB.track.metadata, YB = (0, jB.Ec)((0, jB.Yc)(OB ?? 0), (0, jB.fd)(GB ? -1 : 1, 1));
-           QB = (0, jB._)(YB, BB.info.width, BB.info.height)
-         } else QB = jB.p;
+           } = ee.track.metadata, ye = (0, Ue.jc)((0, Ue.Kc)(ie ?? 0), (0, Ue.Pc)(He ? -1 : 1, 1));
+           Me = (0, Ue.R)(ye, ee.info.width, ee.info.height)
+         } else Me = Ue.m;
```

#### 211. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L3758` → after: `L3758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R3758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L3758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L3758) · [Before (L3758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L3758)

```diff
-         const yB = "video" === BB.type ? 0 : "audio" === BB.type ? 1 : "subtitle" === BB.type ? 2 : (0, jB.M)(BB);
+         const Fe = "video" === ee.type ? 0 : "audio" === ee.type ? 1 : "subtitle" === ee.type ? 2 : (0, Ue.G)(ee);
```

#### 212. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L3763` → after: `L3763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R3763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L3763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L3763) · [Before (L3763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L3763)

```diff
-         if ((0, jB.Q)(null !== OB), OB > 0) {
+         if ((0, Ue.I)(null !== ie), ie > 0) {
```

#### 213. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L3766-L3768` → after: `L3766-L3768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R3766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L3766-L3768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L3766-L3768) · [Before (L3766-L3768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L3766-L3768)

```diff
-             DB = !(0, jB.kc)(GB) || !(0, jB.kc)(YB),
-             QB = DB ? KB : kB,
-             oB = DB ? uB : dB;
+             be = !(0, Ue.Tb)(He) || !(0, Ue.Tb)(ye),
+             Me = be ? De : Ze,
+             Ke = be ? Pe : we;
```

#### 214. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L3773-L3775` → after: `L3773-L3775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R3773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L3773-L3775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L3773-L3775) · [Before (L3773-L3775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L3773-L3775)

```diff
-             DB = !(0, jB.Zb)(GB) || !(0, jB.kc)(YB),
-             QB = DB ? KB : kB,
-             oB = DB ? uB : dB;
+             be = !(0, Ue.Ib)(He) || !(0, Ue.Tb)(ye),
+             Me = be ? De : Ze,
+             Ke = be ? Pe : we;
```

#### 215. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L3782-L3784` → after: `L3782-L3784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R3782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L3782-L3784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L3782-L3784) · [Before (L3782-L3784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L3782-L3784)

```diff
-           YB = !(0, jB.kc)(OB) || !(0, jB.kc)(GB),
-           DB = YB ? KB : kB;
-         return XB("mdhd", +YB, 0, [DB(OB), DB(OB), kB(BB.timescale), DB(GB), nB(oG(BB.track.metadata.languageCode ?? jB.D)), nB(0)])
+           ye = !(0, Ue.Tb)(ie) || !(0, Ue.Tb)(He),
+           be = ye ? De : Ze;
+         return Ce("mdhd", +ye, 0, [be(ie), be(ie), Ze(ee.timescale), be(He), de(FH(ee.track.metadata.languageCode ?? Ue.A)), de(0)])
```

#### 216. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L3818` → after: `L3818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R3818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L3818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L3818) · [Before (L3818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L3818)

```diff
-           (0, jB.Q)(GB), OB = PO(GB, BB)
+           (0, Ue.I)(He), ie = Ri(He, ee)
```

#### 217. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L3820` → after: `L3820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R3820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L3820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L3820) · [Before (L3820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L3820)

```diff
-         return (0, jB.Q)(OB), XB("stsd", 0, 0, [kB(1)], [OB])
+         return (0, Ue.I)(ie), Ce("stsd", 0, 0, [Ze(1)], [ie])
```

#### 218. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L3822` → after: `L3822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R3822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L3822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L3822) · [Before (L3822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L3822)

```diff
-       oO = (BB, OB) => rB(BB, [Array(6).fill(0), nB(1), nB(0), nB(0), Array(12).fill(0), nB(OB.info.width), nB(OB.info.height), kB(4718592), kB(4718592), kB(0), nB(1), SB(RB.c.length), LB(RB.c), Array(31 - RB.c.length).fill(0), nB(OB.info.hasAlphaChannel ? 32 : 24), UB(65535)], [ … [truncated]
+       Ki = (ee, ie) => Le(ee, [Array(6).fill(0), de(1), de(0), de(0), Array(12).fill(0), de(ie.info.width), de(ie.info.height), Ze(4718592), Ze(4718592), Ze(0), de(1), Oe(ze.d.length), ce(ze.d), Array(31 - ze.d.length).fill(0), de(ie.info.hasAlphaChannel ? 32 : 24), We(65535)], [ … [truncated]
```

#### 219. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L3827` → after: `L3827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R3827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L3827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L3827) · [Before (L3827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L3827)

```diff
-         return rB("colr", [LB(BB.muxer.isQuickTime ? "nclc" : "nclx"), nB(null != OB?.primaries ? jB.g[OB.primaries] : 2), nB(null != OB?.transfer ? jB.z[OB.transfer] : 2), nB(null != OB?.matrix ? jB.r[OB.matrix] : 2), BB.muxer.isQuickTime ? [] : SB((OB?.fullRange ? 1 : 0) << 7)] … [truncated]
+         return Le("colr", [ce(ee.muxer.isQuickTime ? "nclc" : "nclx"), de(null != ie?.primaries ? Ue.f[ie.primaries] : 2), de(null != ie?.transfer ? Ue.t[ie.transfer] : 2), de(null != ie?.matrix ? Ue.o[ie.matrix] : 2), ee.muxer.isQuickTime ? [] : Oe((ie?.fullRange ? 1 : 0) << 7)] … [truncated]
```

#### 220. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L3836-L3838` → after: `L3836-L3838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R3836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L3836-L3838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L3836-L3838) · [Before (L3836-L3838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L3836-L3838)

```diff
-           oB = GB[5] ? Number(GB[5]) : OB.colorSpace?.primaries ? jB.g[OB.colorSpace.primaries] : 1,
-           yB = GB[6] ? Number(GB[6]) : OB.colorSpace?.transfer ? jB.z[OB.colorSpace.transfer] : 1,
-           JB = GB[7] ? Number(GB[7]) : OB.colorSpace?.matrix ? jB.r[OB.colorSpace.matrix] : 1;
+           Ke = He[5] ? Number(He[5]) : ie.colorSpace?.primaries ? Ue.f[ie.colorSpace.primaries] : 1,
+           Fe = He[6] ? Number(He[6]) : ie.colorSpace?.transfer ? Ue.t[ie.colorSpace.transfer] : 1,
+           Je = He[7] ? Number(He[7]) : ie.colorSpace?.matrix ? Ue.o[ie.colorSpace.matrix] : 1;
```

#### 221. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L3849` → after: `L3849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R3849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L3849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L3849) · [Before (L3849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L3849)

```diff
-             } = (0, DB.S)(BB);
+             } = (0, be.R)(ee);
```

#### 222. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L3872` → after: `L3872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R3872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L3872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L3872) · [Before (L3872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L3872)

```diff
-             throw new Error(`Unhandled audio codec: ${BB.track.source._codec}`)
+             throw new Error(`Unhandled audio codec: ${ee.track.source._codec}`)
```

#### 223. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L3876` → after: `L3876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R3876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L3876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L3876) · [Before (L3876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L3876)

```diff
-           const OB = (0, jB.Id)(BB.info.decoderConfig.description);
+           const ie = (0, Ue.od)(ee.info.decoderConfig.description);
```

#### 224. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L3886` → after: `L3886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R3886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L3886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L3886) · [Before (L3886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L3886)

```diff
-         } = (0, DB.S)(BB.track.source._codec);
+         } = (0, be.R)(ee.track.source._codec);
```

#### 225. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L3898-L3900` → after: `L3898-L3900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R3898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L3898-L3900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L3898-L3900) · [Before (L3898-L3900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L3898-L3900)

```diff
-           (0, jB.Q)(yB.byteLength >= 18);
-           const BB = (0, jB.Id)(yB),
-             JB = (0, qB.rb)(BB);
+           (0, Ue.I)(Fe.byteLength >= 18);
+           const ee = (0, Ue.od)(Fe),
+             Je = (0, Te.yb)(ee);
```

#### 226. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L3907-L3908` → after: `L3907-L3908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R3907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L3907-L3908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L3907-L3908) · [Before (L3907-L3908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L3907-L3908)

```diff
-         (0, jB.Q)(OB);
-         const GB = (0, jB.Id)(OB);
+         (0, Ue.I)(ie);
+         const He = (0, Ue.od)(ie);
```

#### 227. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L3915` → after: `L3915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R3915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L3915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L3915) · [Before (L3915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L3915)

```diff
-         } = (0, DB.S)(BB.track.source._codec);
+         } = (0, be.R)(ee.track.source._codec);
```

#### 228. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L3919-L3920` → after: `L3919-L3920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R3919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L3919-L3920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L3919-L3920) · [Before (L3919-L3920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L3919-L3920)

```diff
-         (0, jB.Q)(BB.info.primingPacket);
-         const OB = (0, qB.fb)(BB.info.primingPacket.data);
+         (0, Ue.I)(ee.info.primingPacket);
+         const ie = (0, Te.jb)(ee.info.primingPacket.data);
```

#### 229. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L3927-L3928` → after: `L3927-L3928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R3927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L3927-L3928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L3927-L3928) · [Before (L3927-L3928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L3927-L3928)

```diff
-         (0, jB.Q)(BB.info.primingPacket);
-         const OB = (0, qB.kb)(BB.info.primingPacket.data);
+         (0, Ue.I)(ee.info.primingPacket);
+         const ie = (0, Te.rb)(ee.info.primingPacket.data);
```

#### 230. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L3940-L3941` → after: `L3940-L3941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R3940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L3940-L3941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L3940-L3941) · [Before (L3940-L3941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L3940-L3941)

```diff
-         (0, jB.Q)(BB.info.primingPacket);
-         const OB = (0, qB.hb)(BB.info.primingPacket.data);
+         (0, Ue.I)(ee.info.primingPacket);
+         const ie = (0, Te.nb)(ee.info.primingPacket.data);
```

#### 231. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L3943` → after: `L3943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R3943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L3943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L3943) · [Before (L3943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L3943)

```diff
-         return rB("ddts", [...(0, qB.r)(OB)])
+         return Le("ddts", [...(0, Te.w)(ie)])
```

#### 232. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L3963` → after: `L3963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R3963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L3963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L3963) · [Before (L3963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L3963)

```diff
-           } = (0, DB.S)(BB.track.source._codec);
+           } = (0, be.R)(ee.track.source._codec);
```

#### 233. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L3968` → after: `L3968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R3968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L3968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L3968) · [Before (L3968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L3968)

```diff
-       dO = BB => BB.finalizedChunks.length > 0 && (0, jB.sc)(BB.finalizedChunks).offset >= 2 ** 32 ? XB("co64", 0, 0, [kB(BB.finalizedChunks.length), BB.finalizedChunks.map((BB => KB(BB.offset)))]) : XB("stco", 0, 0, [kB(BB.finalizedChunks.length), BB.finalizedChunks.map((BB => k … [truncated]
+       Di = ee => ee.finalizedChunks.length > 0 && (0, Ue.bc)(ee.finalizedChunks).offset >= 2 ** 32 ? Ce("co64", 0, 0, [Ze(ee.finalizedChunks.length), ee.finalizedChunks.map((ee => De(ee.offset)))]) : Ce("stco", 0, 0, [Ze(ee.finalizedChunks.length), ee.finalizedChunks.map((ee => Z … [truncated]
```

#### 234. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L3975` → after: `L3975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R3975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L3975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L3975) · [Before (L3975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L3975)

```diff
-         (0, jB.Q)(BB.compositionTimeOffsetTable.length > 0), (0, jB.Q)(BB.samples.length > 0);
+         (0, Ue.I)(ee.compositionTimeOffsetTable.length > 0), (0, Ue.I)(ee.samples.length > 0);
```

#### 235. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L3999` → after: `L3999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R3999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L3999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L3999) · [Before (L3999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L3999)

```diff
-         (0, jB.Q)(BB.currentChunk);
+         (0, Ue.I)(ee.currentChunk);
```

#### 236. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L4010` → after: `L4010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R4010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L4010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L4010) · [Before (L4010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L4010)

```diff
-       XO = BB => ((0, jB.Q)(BB.currentChunk), XB("tfdt", 1, 0, [KB(zG(BB.currentChunk.startTimestamp, BB.timescale))])),
+       vi = ee => ((0, Ue.I)(ee.currentChunk), Ce("tfdt", 1, 0, [De(fH(ee.currentChunk.startTimestamp, ee.timescale))])),
```

#### 237. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L4012` → after: `L4012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R4012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L4012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L4012) · [Before (L4012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L4012)

```diff
-         (0, jB.Q)(BB.currentChunk);
+         (0, Ue.I)(ee.currentChunk);
```

#### 238. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L4032-L4033` → after: `L4032-L4033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R4032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L4032-L4033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L4032-L4033) · [Before (L4032-L4033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L4032-L4033)

```diff
-       aO = (BB, OB, GB, YB, DB) => rB("vttc", void 0, [null !== DB ? rB("vsid", [dB(DB)]) : null, null !== GB ? rB("iden", [...jB.Bd.encode(GB)]) : null, null !== OB ? rB("ctim", [...jB.Bd.encode((0, NB.e)(OB))]) : null, null !== YB ? rB("sttg", [...jB.Bd.encode(YB)]) : null, rB( … [truncated]
-       eO = BB => rB("vtta", [...jB.Bd.encode(BB)]),
+       ni = (ee, ie, He, ye, be) => Le("vttc", void 0, [null !== be ? Le("vsid", [we(be)]) : null, null !== He ? Le("iden", [...Ue.hd.encode(He)]) : null, null !== ie ? Le("ctim", [...Ue.hd.encode((0, Xe.e)(ie))]) : null, null !== ye ? Le("sttg", [...Ue.hd.encode(ye)]) : null, Le( … [truncated]
+       ji = ee => Le("vtta", [...Ue.hd.encode(ee)]),
```

#### 239. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L4052` → after: `L4052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R4052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L4052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L4052) · [Before (L4052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L4052)

```diff
-           of(0, jB.rc)(OB)) switch (GB) {
+           of(0, Ue._b)(ie)) switch (He) {
```

#### 240. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L4089` → after: `L4089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R4089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L4089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L4089) · [Before (L4089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L4089)

```diff
-             (0, jB.M)(GB)
+             (0, Ue.G)(He)
```

#### 241. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L4098` → after: `L4098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R4098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L4098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L4098) · [Before (L4098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L4098)

```diff
-         const GB = jB.Bd.encode(OB);
+         const He = Ue.hd.encode(ie);
```

#### 242. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L4112` → after: `L4112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R4112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L4112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L4112) · [Before (L4112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L4112)

```diff
-           of(0, jB.rc)(BB)) switch (YB) {
+           of(0, Ue._b)(ee)) switch (ye) {
```

#### 243. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L4181` → after: `L4181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R4181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L4181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L4181) · [Before (L4181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L4181)

```diff
-               const OB = void 0 !== BB.tracksTotal ? `${DB}/${BB.tracksTotal}` : DB.toString();
+               const ie = void 0 !== ee.tracksTotal ? `${be}/${ee.tracksTotal}` : be.toString();
```

#### 244. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L4202` → after: `L4202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R4202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L4202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L4202) · [Before (L4202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L4202)

```diff
-             (0, jB.M)(YB)
+             (0, Ue.G)(ye)
```

#### 245. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L4213` → after: `L4213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R4213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L4213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L4213) · [Before (L4213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L4213)

```diff
-             }) : DB instanceof lB.h && GB.push({
+             }) : be instanceof qe.g && He.push({
```

#### 246. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L4226` → after: `L4226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R4226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L4226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L4226) · [Before (L4226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L4226)

```diff
-         return 0 === OB.length ? null : rB("meta", void 0, [xB(!1, "mdta", ""), XB("keys", 0, 0, [kB(OB.length)], OB.map((BB => rB("mdta", [...jB.Bd.encode(BB.key)])))), rB("ilst", void 0, OB.map(((BB, OB) => {
+         return 0 === ie.length ? null : Le("meta", void 0, [re(!1, "mdta", ""), Ce("keys", 0, 0, [Ze(ie.length)], ie.map((ee => Le("mdta", [...Ue.hd.encode(ee.key)])))), Le("ilst", void 0, ie.map(((ee, ie) => {
```

#### 247. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L4231` → after: `L4231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R4231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L4231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L4231) · [Before (L4231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L4231)

```diff
-       tO = BB => rB("data", [kB(1), kB(0), ...jB.Bd.encode(BB)]),
+       iH = ee => Le("data", [Ze(1), Ze(0), ...Ue.hd.encode(ee)]),
```

#### 248. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L4249-L4250` → after: `L4249-L4250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R4249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L4249-L4250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L4249-L4250) · [Before (L4249-L4250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L4249-L4250)

```diff
-         avc: BB => BB.info.decoderConfig && rB("avcC", [...(0, jB.Id)(BB.info.decoderConfig.description)]),
-         hevc: BB => BB.info.decoderConfig && rB("hvcC", [...(0, jB.Id)(BB.info.decoderConfig.description)]),
+         avc: ee => ee.info.decoderConfig && Le("avcC", [...(0, Ue.od)(ee.info.decoderConfig.description)]),
+         hevc: ee => ee.info.decoderConfig && Le("hvcC", [...(0, Ue.od)(ee.info.decoderConfig.description)]),
```

#### 249. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L4359` → after: `L4359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R4359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L4359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L4359) · [Before (L4359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L4359)

```diff
-         webvtt: BB => rB("vttC", [...jB.Bd.encode(BB.info.config.description)])
+         webvtt: ee => Le("vttC", [...Ue.hd.encode(ee.info.config.description)])
```

#### 250. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L4362` → after: `L4362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R4362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L4362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L4362) · [Before (L4362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L4362)

```diff
-         (0, jB.Q)(3 === BB.length);
+         (0, Ue.I)(3 === ee.length);
```

#### 251. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L4367-L4368` → after: `L4367-L4368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R4367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L4367-L4368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L4367-L4368) · [Before (L4367-L4368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L4367-L4368)

```diff
-     var jG = GB(40633),
-       yG = GB(40641);
+     var JH = He(40717),
+       oH = He(40726);
```

#### 252. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L4421` → after: `L4421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R4421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L4421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L4421) · [Before (L4421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L4421)

```diff
-         super(BB), this.writer = null, this.boxWriter = null, this.initWriter = null, this.initBoxWriter = null, this.auxTarget = new yG.b, this.auxWriter = new jG.e(this.auxTarget, !1), this.auxBoxWriter = new WB(this.auxWriter), this.mdat = null, this.ftypSize = null, this.trac … [truncated]
+         super(ee), this.writer = null, this.boxWriter = null, this.initWriter = null, this.initBoxWriter = null, this.auxTarget = new oH.d, this.auxWriter = new JH.c(this.auxTarget, !1), this.auxBoxWriter = new Be(this.auxWriter), this.mdat = null, this.ftypSize = null, this.trac … [truncated]
```

#### 253. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L4427` → after: `L4427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R4427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L4427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L4427) · [Before (L4427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L4427)

```diff
-         if (this.isCmaf ? (this.fastStart = "fragmented", this.isFragmented = !0) : (this.writer = await this.output._getRootWriter((BB => void 0 !== this.formatOptions.fastStart ? "fragmented" === this.formatOptions.fastStart : BB instanceof yG.b)), this.boxWriter = new WB(this. … [truncated]
+         if (this.isCmaf ? (this.fastStart = "fragmented", this.isFragmented = !0) : (this.writer = await this.output._getRootWriter((ee => void 0 !== this.formatOptions.fastStart ? "fragmented" === this.formatOptions.fastStart : ee instanceof oH.d)), this.boxWriter = new Be(this. … [truncated]
```

#### 254. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L4430` → after: `L4430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R4430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L4430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L4430) · [Before (L4430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L4430)

```diff
-             OB = new jG.e(BB, !0);
+             ie = new JH.c(ee, !0);
```

#### 255. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L4436` → after: `L4436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R4436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L4436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L4436) · [Before (L4436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L4436)

```diff
-           if ((0, jB.Q)(BB), this.formatOptions.onFtyp && BB.writer.startTrackingWrites(), BB.writeBox((BB => {
+           if ((0, Ue.I)(ee), this.formatOptions.onFtyp && ee.writer.startTrackingWrites(), ee.writeBox((ee => {
```

#### 256. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L4457` → after: `L4457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R4457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L4457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L4457) · [Before (L4457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L4457)

```diff
-         } else this.isFragmented || ((0, jB.Q)(this.writer), (0, jB.Q)(this.boxWriter), this.formatOptions.onMdat && this.writer.startTrackingWrites(), this.mdat = cB(!0), this.boxWriter.writeBox(this.mdat));
+         } else this.isFragmented || ((0, Ue.I)(this.writer), (0, Ue.I)(this.boxWriter), this.formatOptions.onMdat && this.writer.startTrackingWrites(), this.mdat = me(!0), this.boxWriter.writeBox(this.mdat));
```

#### 257. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L4482` → after: `L4482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R4482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L4482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L4482) · [Before (L4482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L4482)

```diff
-           BB.codecStrings.length > 0 && (OB += `; codecs="${[...new Set(BB.codecStrings)].join(", ")}"`);
+           ee.codecStrings.length > 0 && (ie += `; codecs="${[...new Set(ee.codecStrings)].join(", ")}"`);
```

#### 258. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L4494` → after: `L4494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R4494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L4494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L4494) · [Before (L4494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L4494)

```diff
-         (0, DB.Y)(GB, BB.source._codec), (0, jB.Q)(GB), (0, jB.Q)(GB.decoderConfig);
+         (0, be.Z)(He, ee.source._codec), (0, Ue.I)(He), (0, Ue.I)(He.decoderConfig);
```

#### 259. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L4498` → after: `L4498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R4498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L4498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L4498) · [Before (L4498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L4498)

```diff
-         (0, jB.Q)(void 0 !== QB.codedWidth), (0, jB.Q)(void 0 !== QB.codedHeight);
+         (0, Ue.I)(void 0 !== Me.codedWidth), (0, Ue.I)(void 0 !== Me.codedHeight);
```

#### 260. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L4503` → after: `L4503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R4503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L4503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L4503) · [Before (L4503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L4503)

```diff
-             const BB = (0, qB.O)(OB.data);
+             const ee = (0, Te.W)(ie.data);
```

#### 261. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L4505` → after: `L4505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R4505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L4505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L4505) · [Before (L4505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L4505)

```diff
-             QB.description = (0, qB.wb)(BB), oB = !0
+             Me.description = (0, Te.Eb)(ee), Ke = !0
```

#### 262. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L4509` → after: `L4509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R4509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L4509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L4509) · [Before (L4509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L4509)

```diff
-           const BB = (0, qB.K)(OB.data);
+           const ee = (0, Te.R)(ie.data);
```

#### 263. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L4511` → after: `L4511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R4511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L4511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L4511) · [Before (L4511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L4511)

```diff
-           QB.description = (0, qB.ub)(BB), oB = !0
+           Me.description = (0, Te.Db)(ee), Ke = !0
```

#### 264. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L4513` → after: `L4513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R4513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L4513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L4513) · [Before (L4513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L4513)

```diff
-         const yB = (0, jB.ub)(1 / (BB.metadata.frameRate ?? MG), 1e6).den,
+         const Fe = (0, Ue.eb)(1 / (ee.metadata.frameRate ?? kH), 1e6).den,
```

#### 265. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L4519` → after: `L4519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R4519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L4519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L4519) · [Before (L4519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L4519)

```diff
-           } : (0, jB.vd)({
+           } : (0, Ue.bd)({
```

#### 266. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L4557` → after: `L4557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R4557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L4557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L4557) · [Before (L4557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L4557)

```diff
-         (0, DB.V)(GB, BB.source._codec), (0, jB.Q)(GB), (0, jB.Q)(GB.decoderConfig);
+         (0, be.U)(He, ee.source._codec), (0, Ue.I)(He), (0, Ue.I)(He.decoderConfig);
```

#### 267. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L4569` → after: `L4569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R4569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L4569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L4569) · [Before (L4569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L4569)

```diff
-           oB.description = (0, YB.g)({
+           Ke.description = (0, ye.h)({
```

#### 268. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L4613` → after: `L4613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R4613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L4613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L4613) · [Before (L4613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L4613)

```diff
-         (0, DB.X)(OB), (0, jB.Q)(OB), (0, jB.Q)(OB.config);
+         (0, be.W)(ie), (0, Ue.I)(ie), (0, Ue.I)(ie.config);
```

#### 269. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L4649` → after: `L4649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R4649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L4649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L4649) · [Before (L4649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L4649)

```diff
-             const BB = [...(0, qB.$)(DB)].map((BB => DB.subarray(BB.offset, BB.offset + BB.length)));
+             const ee = [...(0, Te.gb)(be)].map((ee => be.subarray(ee.offset, ee.offset + ee.length)));
```

#### 270. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L4651` → after: `L4651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R4651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L4651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L4651) · [Before (L4651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L4651)

```diff
-             DB = (0, qB.z)(BB, 4)
+             be = (0, Te.D)(ee, 4)
```

#### 271. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L4675` → after: `L4675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R4675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L4675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L4675) · [Before (L4675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L4675)

```diff
-             const BB = (0, DB.S)(YB.info.decoderConfig.codec).sampleSize * YB.info.numberOfChannels;
+             const ee = (0, be.R)(ye.info.decoderConfig.codec).sampleSize * ye.info.numberOfChannels;
```

#### 272. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L4698` → after: `L4698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R4698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L4698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L4698) · [Before (L4698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L4698)

```diff
-           } = (0, DB.S)(BB.info.decoderConfig.codec), jB = YB * BB.info.numberOfChannels, yB = new Uint8Array(QB * jB).fill(oB), JB = this.createSampleForTrack(BB, new Uint8Array(yB.buffer), OB, GB, "key");
+           } = (0, be.R)(ee.info.decoderConfig.codec), Ue = ye * ee.info.numberOfChannels, Fe = new Uint8Array(Me * Ue).fill(Ke), Je = this.createSampleForTrack(ee, new Uint8Array(Fe.buffer), ie, He, "key");
```

#### 273. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L4716` → after: `L4716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R4716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L4716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L4716) · [Before (L4716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L4716)

```diff
-           for (const JB of BB.cueQueue)(0, jB.Q)(JB.timestamp <= OB), (0, jB.Q)(BB.lastCueEndTimestamp <= JB.timestamp + JB.duration), GB.add(Math.max(JB.timestamp, BB.lastCueEndTimestamp)), GB.add(JB.timestamp + JB.duration);
+           for (const Je of ee.cueQueue)(0, Ue.I)(Je.timestamp <= ie), (0, Ue.I)(ee.lastCueEndTimestamp <= Je.timestamp + Je.duration), He.add(Math.max(Je.timestamp, ee.lastCueEndTimestamp)), He.add(Je.timestamp + Je.duration);
```

#### 274. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L4733-L4734` → after: `L4733-L4734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R4733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L4733-L4734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L4733-L4734) · [Before (L4733-L4734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L4733-L4734)

```diff
-             NB.h.lastIndex = 0;
-             const YB = NB.h.test(GB.text),
+             Xe.g.lastIndex = 0;
+             const ye = Xe.g.test(He.text),
```

#### 275. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L4741` → after: `L4741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R4741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L4741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L4741) · [Before (L4741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L4741)

```diff
-             const yB = aO(GB.text, YB ? DB : null, GB.identifier ?? null, GB.settings ?? null, jB ?? null);
+             const Fe = ni(He.text, ye ? be : null, He.identifier ?? null, He.settings ?? null, Ue ?? null);
```

#### 276. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L4763` → after: `L4763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R4763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L4763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L4763) · [Before (L4763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L4763)

```diff
-           (0, jB.Q)(!this.isFragmented), BB.startTimestampOffset ??= BB.timestampProcessingQueue[0].timestamp;
+           (0, Ue.I)(!this.isFragmented), ee.startTimestampOffset ??= ee.timestampProcessingQueue[0].timestamp;
```

#### 277. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L4774` → after: `L4774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R4774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L4774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L4774) · [Before (L4774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L4774)

```diff
-             (0, jB.sc)(BB.timeToSampleTable).sampleCount += OB
+             (0, Ue.bc)(ee.timeToSampleTable).sampleCount += ie
```

#### 278. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L4786` → after: `L4786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R4786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L4786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L4786) · [Before (L4786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L4786)

```diff
-             (0, jB.Q)(BB.lastSample);
+             (0, Ue.I)(ee.lastSample);
```

#### 279. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L4789-L4791` → after: `L4789-L4791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R4789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L4789-L4791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L4789-L4791) · [Before (L4789-L4791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L4789-L4791)

```diff
-             if ((0, jB.Q)(YB >= 0), BB.lastTimescaleUnits += YB, BB.lastSample.timescaleUnitsToNextSample = YB, !this.isFragmented) {
-               let OB = (0, jB.sc)(BB.timeToSampleTable);
-               if ((0, jB.Q)(OB), 1 === OB.sampleCount) {
+             if ((0, Ue.I)(ye >= 0), ee.lastTimescaleUnits += ye, ee.lastSample.timescaleUnitsToNextSample = ye, !this.isFragmented) {
+               let ie = (0, Ue.bc)(ee.timeToSampleTable);
+               if ((0, Ue.I)(ie), 1 === ie.sampleCount) {
```

#### 280. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L4803-L4804` → after: `L4803-L4804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R4803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L4803-L4804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L4803-L4804) · [Before (L4803-L4804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L4803-L4804)

```diff
-               const GB = (0, jB.sc)(BB.compositionTimeOffsetTable);
-               (0, jB.Q)(GB), GB.sampleCompositionTimeOffset === DB ? GB.sampleCount++ : BB.compositionTimeOffsetTable.push({
+               const He = (0, Ue.bc)(ee.compositionTimeOffsetTable);
+               (0, Ue.I)(He), He.sampleCompositionTimeOffset === be ? He.sampleCount++ : ee.compositionTimeOffsetTable.push({
```

#### 281. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L4818-L4819` → after: `L4818-L4819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R4818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L4818-L4819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L4818-L4819) · [Before (L4818-L4819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L4818-L4819)

```diff
-         if (BB.timestampProcessingQueue.length = 0, (0, jB.Q)(BB.lastSample), (0, jB.Q)(null !== BB.lastTimescaleUnits), void 0 !== OB && 0 === BB.lastSample.timescaleUnitsToNextSample) {
-           (0, jB.Q)("key" === OB.type);
+         if (ee.timestampProcessingQueue.length = 0, (0, Ue.I)(ee.lastSample), (0, Ue.I)(null !== ee.lastTimescaleUnits), void 0 !== ie && 0 === ee.lastSample.timescaleUnitsToNextSample) {
+           (0, Ue.I)("key" === ie.type);
```

#### 282. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L4831` → after: `L4831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R4831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L4831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L4831) · [Before (L4831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L4831)

```diff
-           if ((0, jB.Q)(void 0 !== OB), BB.samples.length > OB) throw new Error(`Track #${BB.track.id} has already reached the maximum packet count (${OB}). Either add less packets or increase the maximum packet count.`)
+           if ((0, Ue.I)(void 0 !== ie), ee.samples.length > ie) throw new Error(`Track #${ee.track.id} has already reached the maximum packet count (${ie}). Either add less packets or increase the maximum packet count.`)
```

#### 283. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L4852` → after: `L4852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R4852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L4852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L4852) · [Before (L4852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L4852)

```diff
-         }), (0, jB.Q)(BB.currentChunk), BB.currentChunk.samples.push(OB), this.isFragmented && (this.maxWrittenTimestamp = Math.max(this.maxWrittenTimestamp, OB.timestamp), this.maxWrittenEndTimestamp = Math.max(this.maxWrittenEndTimestamp, OB.timestamp + OB.duration), this.minWr … [truncated]
+         }), (0, Ue.I)(ee.currentChunk), ee.currentChunk.samples.push(ie), this.isFragmented && (this.maxWrittenTimestamp = Math.max(this.maxWrittenTimestamp, ie.timestamp), this.maxWrittenEndTimestamp = Math.max(this.maxWrittenEndTimestamp, ie.timestamp + ie.duration), this.minWr … [truncated]
```

#### 284. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L4855` → after: `L4855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R4855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L4855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L4855) · [Before (L4855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L4855)

```diff
-         if ((0, jB.Q)(!this.isFragmented), (0, jB.Q)(this.writer), !BB.currentChunk) return;
+         if ((0, Ue.I)(!this.isFragmented), (0, Ue.I)(this.writer), !ee.currentChunk) return;
```

#### 285. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L4858` → after: `L4858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R4858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L4858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L4858) · [Before (L4858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L4858)

```diff
-         if ("audio" === BB.type && BB.info.requiresPcmTransformation && (OB = BB.currentChunk.samples.reduce(((OB, GB) => OB + zG(GB.duration, BB.timescale)), 0)), 0 !== BB.compactlyCodedChunkTable.length && (0, jB.sc)(BB.compactlyCodedChunkTable).samplesPerChunk === OB || BB.com … [truncated]
+         if ("audio" === ee.type && ee.info.requiresPcmTransformation && (ie = ee.currentChunk.samples.reduce(((ie, He) => ie + fH(He.duration, ee.timescale)), 0)), 0 !== ee.compactlyCodedChunkTable.length && (0, Ue.bc)(ee.compactlyCodedChunkTable).samplesPerChunk === ie || ee.com … [truncated]
```

#### 286. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L4863` → after: `L4863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R4863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L4863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L4863) · [Before (L4863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L4863)

```diff
-           for (const OB of BB.currentChunk.samples)(0, jB.Q)(OB.data), this.writer.write(OB.data), OB.data = null;
+           for (const ie of ee.currentChunk.samples)(0, Ue.I)(ie.data), this.writer.write(ie.data), ie.data = null;
```

#### 287. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L4869` → after: `L4869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R4869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L4869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L4869) · [Before (L4869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L4869)

```diff
-         if ((0, jB.Q)(this.isFragmented), BB || this.allTracksAreKnown()) BB: for (;;) {
+         if ((0, Ue.I)(this.isFragmented), ee || this.allTracksAreKnown()) ee: for (;;) {
```

#### 288. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L4883` → after: `L4883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R4883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L4883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L4883) · [Before (L4883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L4883)

```diff
-         if ((0, jB.Q)(this.isFragmented), !this.wroteFragmentedHeader) {
+         if ((0, Ue.I)(this.isFragmented), !this.wroteFragmentedHeader) {
```

#### 289. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L4886` → after: `L4886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R4886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L4886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L4886) · [Before (L4886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L4886)

```diff
-           (0, jB.Q)(BB), this.formatOptions.onMoov && BB.writer.startTrackingWrites(), this.ensureOneEnabledTrack();
+           (0, Ue.I)(ee), this.formatOptions.onMoov && ee.writer.startTrackingWrites(), this.ensureOneEnabledTrack();
```

#### 290. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L4896` → after: `L4896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R4896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L4896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L4896) · [Before (L4896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L4896)

```diff
-             (0, jB.Q)(this.initWriter), await this.initWriter.flush(), await this.initWriter.finalize(), this.writer = await this.output._getRootWriter(!0), this.boxWriter = new WB(this.writer);
+             (0, Ue.I)(this.initWriter), await this.initWriter.flush(), await this.initWriter.finalize(), this.writer = await this.output._getRootWriter(!0), this.boxWriter = new Be(this.writer);
```

#### 291. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L4901` → after: `L4901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R4901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L4901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L4901) · [Before (L4901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L4901)

```diff
-         }(0, jB.Q)(this.writer), (0, jB.Q)(this.boxWriter);
+         }(0, Ue.I)(this.writer), (0, Ue.I)(this.boxWriter);
```

#### 292. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L4912` → after: `L4912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R4912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L4912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L4912) · [Before (L4912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L4912)

```diff
-           (0, jB.Q)(BB.currentChunk), (0, jB.Q)(null !== BB.startTimestampOffset), BB.currentChunk.offset = oB, BB.currentChunk.moofOffset = DB, BB.currentChunk.trafIndex = lB, BB.currentChunk.startTimestamp -= BB.startTimestampOffset;
+           (0, Ue.I)(ee.currentChunk), (0, Ue.I)(null !== ee.startTimestampOffset), ee.currentChunk.offset = Ke, ee.currentChunk.moofOffset = be, ee.currentChunk.trafIndex = qe, ee.currentChunk.startTimestamp -= ee.startTimestampOffset;
```

#### 293. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L4928` → after: `L4928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R4928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L4928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L4928) · [Before (L4928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L4928)

```diff
-         }(0, jB.Q)(this.writer.getPos() === QB), this.formatOptions.onMdat && this.writer.startTrackingWrites();
+         }(0, Ue.I)(this.writer.getPos() === Me), this.formatOptions.onMdat && this.writer.startTrackingWrites();
```

#### 294. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L4947` → after: `L4947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R4947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L4947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L4947) · [Before (L4947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L4947)

```diff
-         (0, jB.Q)(this.writer), (0, jB.Q)(this.boxWriter), this.ensureOneEnabledTrack();
+         (0, Ue.I)(this.writer), (0, Ue.I)(this.boxWriter), this.ensureOneEnabledTrack();
```

#### 295. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L4950` → after: `L4950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R4950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L4950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L4950) · [Before (L4950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L4950)

```diff
-         (0, jB.Q)(null !== this.ftypSize), this.writer.seek(this.ftypSize + OB), this.formatOptions.onMdat && this.writer.startTrackingWrites(), this.mdat = cB(!0), this.boxWriter.writeBox(this.mdat);
+         (0, Ue.I)(null !== this.ftypSize), this.writer.seek(this.ftypSize + ie), this.formatOptions.onMdat && this.writer.startTrackingWrites(), this.mdat = me(!0), this.boxWriter.writeBox(this.mdat);
```

#### 296. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L4957` → after: `L4957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R4957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L4957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L4957) · [Before (L4957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L4957)

```diff
-         (0, jB.Q)("reserve" === this.fastStart);
+         (0, Ue.I)("reserve" === this.fastStart);
```

#### 297. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L4961` → after: `L4961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R4961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L4961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L4961) · [Before (L4961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L4961)

```diff
-           (0, jB.Q)(void 0 !== GB), BB += 8 * Math.ceil(2 / 3 * GB), BB += 4 * GB, BB += 8 * Math.ceil(2 / 3 * GB), BB += 12 * Math.ceil(2 / 3 * GB), BB += 4 * GB, BB += 8 * GB
+           (0, Ue.I)(void 0 !== He), ee += 8 * Math.ceil(2 / 3 * He), ee += 4 * He, ee += 8 * Math.ceil(2 / 3 * He), ee += 12 * Math.ceil(2 / 3 * He), ee += 4 * He, ee += 8 * He
```

#### 298. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L4984` → after: `L4984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R4984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L4984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L4984) · [Before (L4984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L4984)

```diff
-         (0, jB.Q)(this.isFragmented);
+         (0, Ue.I)(this.isFragmented);
```

#### 299. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L5021` → after: `L5021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R5021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L5021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L5021) · [Before (L5021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L5021)

```diff
-         if ((0, jB.Q)(this.writer), (0, jB.Q)(this.boxWriter), "in-memory" === this.fastStart) {
+         if ((0, Ue.I)(this.writer), (0, Ue.I)(this.boxWriter), "in-memory" === this.fastStart) {
```

#### 300. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L5034` → after: `L5034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R5034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L5034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L5034) · [Before (L5034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L5034)

```diff
-                 of DB.samples)(0, jB.Q)(OB), YB += OB.byteLength, BB += OB.byteLength
+                 of be.samples)(0, Ue.I)(ie), ye += ie.byteLength, ee += ie.byteLength
```

#### 301. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L5050` → after: `L5050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R5050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L5050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L5050) · [Before (L5050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L5050)

```diff
-             for (const BB of GB.samples)(0, jB.Q)(BB.data), this.writer.write(BB.data), BB.data = null;
+             for (const ee of He.samples)(0, Ue.I)(ee.data), this.writer.write(ee.data), ee.data = null;
```

#### 302. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L5070` → after: `L5070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R5070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L5070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L5070) · [Before (L5070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L5070)

```diff
-           (0, jB.Q)(this.mdat);
+           (0, Ue.I)(this.mdat);
```

#### 303. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L5072` → after: `L5072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R5072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L5072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L5072) · [Before (L5072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L5072)

```diff
-           (0, jB.Q)(void 0 !== BB);
+           (0, Ue.I)(void 0 !== ee);
```

#### 304. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L5083` → after: `L5083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R5083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L5083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L5083) · [Before (L5083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L5083)

```diff
-             (0, jB.Q)(null !== this.ftypSize), this.writer.seek(this.ftypSize), this.formatOptions.onMoov && this.writer.startTrackingWrites(), this.boxWriter.writeBox(GB);
+             (0, Ue.I)(null !== this.ftypSize), this.writer.seek(this.ftypSize), this.formatOptions.onMoov && this.writer.startTrackingWrites(), this.boxWriter.writeBox(He);
```

#### 305. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L5240` → after: `L5240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R5240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L5240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L5240) · [Before (L5240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L5240)

```diff
-           const OB = jB.Bd.encode(BB.data.value);
+           const ie = Ue.hd.encode(ee.data.value);
```

#### 306. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L5242` → after: `L5242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R5242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L5242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L5242) · [Before (L5242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L5242)

```diff
-         } else(0, jB.M)(BB.data)
+         } else(0, Ue.G)(ee.data)
```

#### 307. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L5278` → after: `L5278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R5278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L5278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L5278) · [Before (L5278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L5278)

```diff
-         super(BB), this.trackDatas = [], this.allTracksKnown = (0, jB.Nc)(), this.segment = null, this.segmentInfo = null, this.seekHead = null, this.tracksElement = null, this.tagsElement = null, this.attachmentsElement = null, this.segmentDuration = null, this.cues = null, this … [truncated]
+         super(ee), this.trackDatas = [], this.allTracksKnown = (0, Ue.zc)(), this.segment = null, this.segmentInfo = null, this.seekHead = null, this.tracksElement = null, this.tagsElement = null, this.attachmentsElement = null, this.segmentDuration = null, this.cues = null, this … [truncated]
```

#### 308. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L5401` → after: `L5401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R5401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L5401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L5401) · [Before (L5401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L5401)

```diff
-             data: RB.c
+             data: ze.d
```

#### 309. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L5404` → after: `L5404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R5404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L5404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L5404) · [Before (L5404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L5404)

```diff
-             data: RB.c
+             data: ze.d
```

#### 310. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L5417` → after: `L5417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R5417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L5417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L5417) · [Before (L5417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L5417)

```diff
-           (0, jB.Q)(GB), "audio" === OB.type && "dts" === OB.track.source._codec && ("dtse" === OB.info.decoderConfig.codec ? GB = "A_DTS/EXPRESS" : "dtsl" === OB.info.decoderConfig.codec && (GB = "A_DTS/LOSSLESS"));
+           (0, Ue.I)(He), "audio" === ie.type && "dts" === ie.track.source._codec && ("dtse" === ie.info.decoderConfig.codec ? He = "A_DTS/EXPRESS" : "dtsl" === ie.info.decoderConfig.codec && (He = "A_DTS/LOSSLESS"));
```

#### 311. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L5423-L5425` → after: `L5423-L5425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R5423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L5423-L5425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L5423-L5425) · [Before (L5423-L5425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L5423-L5425)

```diff
-               const OB = (0, jB.Id)(BB),
-                 GB = (0, qB.rb)(OB);
-               YB = Math.round(GB.preSkip / DB.k * 1e9)
+               const ie = (0, Ue.od)(ee),
+                 He = (0, Te.yb)(ie);
+               ye = Math.round(He.preSkip / be.m * 1e9)
```

#### 312. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L5462` → after: `L5462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R5462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L5462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L5462) · [Before (L5462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L5462)

```diff
-               data: OB.track.metadata.languageCode ?? jB.D
+               data: ie.track.metadata.languageCode ?? Ue.A
```

#### 313. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L5468` → after: `L5468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R5468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L5468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L5468) · [Before (L5468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L5468)

```diff
-               data: (0, jB.Id)(OB.codecPrivate)
+               data: (0, Ue.od)(ie.codecPrivate)
```

#### 314. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L5489-L5491` → after: `L5489-L5491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R5489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L5489-L5491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L5489-L5491) · [Before (L5489-L5491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L5489-L5491)

```diff
-           DB = (0, jB.vb)(GB);
-           const BB = (0, jB.Ec)((0, jB.Yc)(-DB), GB);
-           QB = Math.sign(BB[0]), oB = Math.sign(BB[4]), -1 === oB && (oB = 1, QB = -QB, DB = (0, jB.Fc)(DB + 180))
+           be = (0, Ue.gb)(He);
+           const ee = (0, Ue.jc)((0, Ue.Kc)(-be), He);
+           Me = Math.sign(ee[0]), Ke = Math.sign(ee[4]), -1 === Ke && (Ke = 1, Me = -Me, be = (0, Ue.nc)(be + 180))
```

#### 315. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L5493-L5495` → after: `L5493-L5495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R5493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L5493-L5495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L5493-L5495) · [Before (L5493-L5495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L5493-L5495)

```diff
-         const yB = DB ? (0, jB.Fc)(-1 === QB ? DB : -DB) : 0,
-           JB = Math.round(Math.acos(QB) * jB.s),
-           MB = Math.round(Math.acos(oB) * jB.s),
+         const Fe = be ? (0, Ue.nc)(-1 === Me ? be : -be) : 0,
+           Je = Math.round(Math.acos(Me) * Ue.q),
+           oe = Math.round(Math.acos(Ke) * Ue.q),
```

#### 316. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L5518` → after: `L5518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R5518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L5518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L5518) · [Before (L5518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L5518)

```diff
-             } : null, (0, jB.mb)(zB) ? null : {
+             } : null, (0, Ue.Z)(ke) ? null : {
```

#### 317. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L5522` → after: `L5522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R5522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L5522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L5522) · [Before (L5522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L5522)

```diff
-                 data: null != zB?.matrix ? jB.r[zB.matrix] : 2
+                 data: null != ke?.matrix ? Ue.o[ke.matrix] : 2
```

#### 318. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L5525` → after: `L5525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R5525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L5525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L5525) · [Before (L5525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L5525)

```diff
-                 data: null != zB?.transfer ? jB.z[zB.transfer] : 2
+                 data: null != ke?.transfer ? Ue.t[ke.transfer] : 2
```

#### 319. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L5528` → after: `L5528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R5528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L5528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L5528) · [Before (L5528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L5528)

```diff
-                 data: null != zB?.primaries ? jB.g[zB.primaries] : 2
+                 data: null != ke?.primaries ? Ue.f[ke.primaries] : 2
```

#### 320. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L5553` → after: `L5553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R5553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L5553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L5553) · [Before (L5553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L5553)

```diff
-         const OB = DB.n.includes(BB.track.source._codec) ? (0, DB.S)(BB.track.source._codec) : null;
+         const ie = be.n.includes(ee.track.source._codec) ? (0, be.R)(ee.track.source._codec) : null;
```

#### 321. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L5594` → after: `L5594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R5594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L5594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L5594) · [Before (L5594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L5594)

```diff
-           of(0, jB.rc)(GB)) switch (DB) {
+           of(0, Ue._b)(He)) switch (be) {
```

#### 322. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L5626` → after: `L5626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R5626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L5626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L5626) · [Before (L5626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L5626)

```diff
-             OB("PART_NUMBER", void 0 !== GB.tracksTotal ? `${QB}/${GB.tracksTotal}` : QB.toString()), YB.add("PART_NUMBER");
+             ie("PART_NUMBER", void 0 !== He.tracksTotal ? `${Me}/${He.tracksTotal}` : Me.toString()), ye.add("PART_NUMBER");
```

#### 323. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L5629` → after: `L5629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R5629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L5629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L5629) · [Before (L5629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L5629)

```diff
-             OB("DISC", void 0 !== GB.discsTotal ? `${QB}/${GB.discsTotal}` : QB.toString()), YB.add("DISC");
+             ie("DISC", void 0 !== He.discsTotal ? `${Me}/${He.discsTotal}` : Me.toString()), ye.add("DISC");
```

#### 324. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L5637` → after: `L5637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R5637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L5637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L5637) · [Before (L5637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L5637)

```diff
-             (0, jB.M)(DB)
+             (0, Ue.G)(be)
```

#### 325. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L5669` → after: `L5669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R5669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L5669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L5669) · [Before (L5669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L5669)

```diff
-             YB = ("coverFront" === DB.kind ? "cover" : "coverBack" === DB.kind ? "back" : "image") + ((0, jB.Eb)(DB.mimeType) ?? "")
+             ye = ("coverFront" === be.kind ? "cover" : "coverBack" === be.kind ? "back" : "image") + ((0, Ue.qb)(be.mimeType) ?? "")
```

#### 326. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L5697-L5698` → after: `L5697-L5698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R5697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L5697-L5698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L5697-L5698) · [Before (L5697-L5698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L5697-L5698)

```diff
-           if (!(QB instanceof lB.e)) continue;
-           /^\d+$/.test(DB) && (YB.find((BB => BB.mimeType === QB.mimeType && (0, jB.Ld)(BB.data, QB.data))) || OB.push({
+           if (!(Me instanceof qe.b)) continue;
+           /^\d+$/.test(be) && (ye.find((ee => ee.mimeType === Me.mimeType && (0, Ue.pd)(ee.data, Me.data))) || ie.push({
```

#### 327. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L5745` → after: `L5745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R5745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L5745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L5745) · [Before (L5745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L5745)

```diff
-         return (0, jB.Q)(this.segment), this.ebmlWriter.dataOffsets.get(this.segment)
+         return (0, Ue.I)(this.segment), this.ebmlWriter.dataOffsets.get(this.segment)
```

#### 328. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L5763` → after: `L5763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R5763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L5763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L5763) · [Before (L5763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L5763)

```diff
-           BB.codecStrings.length > 0 && (OB += `; codecs="${[...new Set(BB.codecStrings.filter(Boolean))].join(", ")}"`);
+           ee.codecStrings.length > 0 && (ie += `; codecs="${[...new Set(ee.codecStrings.filter(Boolean))].join(", ")}"`);
```

#### 329. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L5775` → after: `L5775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R5775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L5775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L5775) · [Before (L5775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L5775)

```diff
-         (0, DB.Y)(GB, BB.source._codec), (0, jB.Q)(GB), (0, jB.Q)(GB.decoderConfig), (0, jB.Q)(void 0 !== GB.decoderConfig.codedWidth), (0, jB.Q)(void 0 !== GB.decoderConfig.codedHeight);
+         (0, be.Z)(He, ee.source._codec), (0, Ue.I)(He), (0, Ue.I)(He.decoderConfig), (0, Ue.I)(void 0 !== He.decoderConfig.codedWidth), (0, Ue.I)(void 0 !== He.decoderConfig.codedHeight);
```

#### 330. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L5778` → after: `L5778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R5778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L5778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L5778) · [Before (L5778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L5778)

```diff
-           yB = void 0 === QB || void 0 === oB ? null : (0, jB.vd)({
+           Fe = void 0 === Me || void 0 === Ke ? null : (0, Ue.bd)({
```

#### 331. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L5797` → after: `L5797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R5797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L5797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L5797) · [Before (L5797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L5797)

```diff
-         return "vp9" === BB.source._codec ? JB.codecPrivate = new Uint8Array((0, DB.H)(JB.info.decoderConfig.codec)) : "av1" === BB.source._codec ? JB.codecPrivate = new Uint8Array((0, DB.F)(JB.info.decoderConfig.codec)) : "prores" === BB.source._codec && (JB.codecPrivate = jB.Bd … [truncated]
+         return "vp9" === ee.source._codec ? Je.codecPrivate = new Uint8Array((0, be.G)(Je.info.decoderConfig.codec)) : "av1" === ee.source._codec ? Je.codecPrivate = new Uint8Array((0, be.F)(Je.info.decoderConfig.codec)) : "prores" === ee.source._codec && (Je.codecPrivate = Ue.hd … [truncated]
```

#### 332. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L5802` → after: `L5802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R5802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L5802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L5802) · [Before (L5802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L5802)

```diff
-         (0, DB.V)(GB, BB.source._codec), (0, jB.Q)(GB), (0, jB.Q)(GB.decoderConfig);
+         (0, be.U)(He, ee.source._codec), (0, Ue.I)(He), (0, Ue.I)(He.decoderConfig);
```

#### 333. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L5814` → after: `L5814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R5814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L5814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L5814) · [Before (L5814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L5814)

```diff
-           oB.description = (0, YB.g)({
+           Ke.description = (0, ye.h)({
```

#### 334. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L5839` → after: `L5839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R5839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L5839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L5839) · [Before (L5839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L5839)

```diff
-         (0, DB.X)(OB), (0, jB.Q)(OB), (0, jB.Q)(OB.config);
+         (0, be.W)(ie), (0, Ue.I)(ie), (0, Ue.I)(ie.config);
```

#### 335. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L5848` → after: `L5848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R5848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L5848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L5848) · [Before (L5848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L5848)

```diff
-           codecPrivate: jB.Bd.encode(OB.config.description),
+           codecPrivate: Ue.hd.encode(ie.config.description),
```

#### 336. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L5867` → after: `L5867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R5867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L5867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L5867) · [Before (L5867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L5867)

```diff
-           void 0 !== BB.metadata.frameRate && (oB = (0, jB._c)(oB, BB.metadata.frameRate), yB = (0, jB._c)(yB, BB.metadata.frameRate));
+           void 0 !== ee.metadata.frameRate && (Ke = (0, Ue.Lc)(Ke, ee.metadata.frameRate), Fe = (0, Ue.Lc)(Fe, ee.metadata.frameRate));
```

#### 337. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L5901` → after: `L5901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R5901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L5901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L5901) · [Before (L5901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L5901)

```diff
-           NB.h.lastIndex = 0, DB = DB.replace(NB.h, (BB => {
+           Xe.g.lastIndex = 0, be = be.replace(Xe.g, (ee => {
```

#### 338. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L5903` → after: `L5903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R5903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L5903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L5903) · [Before (L5903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L5903)

```diff
-             return `<${(0,NB.e)(OB)}>`
+             return `<${(0,Xe.e)(ie)}>`
```

#### 339. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L5905-L5907` → after: `L5905-L5907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R5905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L5905-L5907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L5905-L5907) · [Before (L5905-L5907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L5905-L5907)

```diff
-           const oB = jB.Bd.encode(DB),
-             yB = `${OB.settings??""}\n${OB.identifier??""}\n${OB.notes??""}`,
-             JB = this.createInternalChunk(oB, OB.timestamp, OB.duration, "key", yB.trim() ? jB.Bd.encode(yB) : null);
+           const Ke = Ue.hd.encode(be),
+             Fe = `${ie.settings??""}\n${ie.identifier??""}\n${ie.notes??""}`,
+             Je = this.createInternalChunk(Ke, ie.timestamp, ie.duration, "key", Fe.trim() ? Ue.hd.encode(Fe) : null);
```

#### 340. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L5916` → after: `L5916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R5916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L5916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L5916) · [Before (L5916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L5916)

```diff
-           BB: for (;;) {
+           ee: for (;;) {
```

#### 341. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L5949` → after: `L5949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R5949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L5949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L5949) · [Before (L5949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L5949)

```diff
-         (0, jB.Sd)(OB.data, GB.pos, GB.pos + 3, QB)
+         (0, Ue.wd)(ie.data, He.pos, He.pos + 3, Me)
```

#### 342. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L5970` → after: `L5970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R5970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L5970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L5970) · [Before (L5970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L5970)

```diff
-           (0, jB.Q)(null !== this.currentClusterStartMsTimestamp), (0, jB.Q)(null !== this.currentClusterMaxMsTimestamp);
+           (0, Ue.I)(null !== this.currentClusterStartMsTimestamp), (0, Ue.I)(null !== this.currentClusterMaxMsTimestamp);
```

#### 343. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L5979` → after: `L5979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R5979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L5979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L5979) · [Before (L5979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L5979)

```diff
-             oB.e._warn(`Packets had to be discarded because their timestamp is too negative to represent in ${BB}.`), this.warnedAboutTooNegativeTimestamp = !0
+             Ke.b._warn(`Packets had to be discarded because their timestamp is too negative to represent in ${ee}.`), this.warnedAboutTooNegativeTimestamp = !0
```

#### 344. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6037` → after: `L6037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R6037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L6037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L6037) · [Before (L6037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L6037)

```diff
-         if ((0, jB.Q)(this.currentCluster), !this.format._options.appendOnly) {
+         if ((0, Ue.I)(this.currentCluster), !this.format._options.appendOnly) {
```

#### 345. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6043` → after: `L6043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R6043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L6043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L6043) · [Before (L6043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L6043)

```diff
-           (0, jB.Q)(null !== this.currentClusterStartMsTimestamp);
+           (0, Ue.I)(null !== this.currentClusterStartMsTimestamp);
```

#### 346. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6056` → after: `L6056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R6056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L6056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L6056) · [Before (L6056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L6056)

```diff
-         for (const [YB, DB] of GB)(0, jB.Q)(this.cues), this.cues.data.push({
+         for (const [ye, be] of He)(0, Ue.I)(this.cues), this.cues.data.push({
```

#### 347. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6082` → after: `L6082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R6082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L6082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L6082) · [Before (L6082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L6082)

```diff
-         if (this.segment || this.createSegment(), await this.interleaveChunks(!0), this.currentCluster && this.finalizeCurrentCluster(), (0, jB.Q)(this.cues), this.ebmlWriter.writeEBML(this.cues), !this.format._options.appendOnly) {
+         if (this.segment || this.createSegment(), await this.interleaveChunks(!0), this.currentCluster && this.finalizeCurrentCluster(), (0, Ue.I)(this.cues), this.ebmlWriter.writeEBML(this.cues), !this.format._options.appendOnly) {
```

#### 348. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6086` → after: `L6086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R6086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L6086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L6086) · [Before (L6086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L6086)

```diff
-           this.segmentDuration.data = new ZG(OB), this.writer.seek(this.ebmlWriter.offsets.get(this.segmentDuration)), this.ebmlWriter.writeEBML(this.segmentDuration), (0, jB.Q)(this.seekHead), this.writer.seek(this.ebmlWriter.offsets.get(this.seekHead)), this.maybeCreateSeekHead … [truncated]
+           this.segmentDuration.data = new zH(ie), this.writer.seek(this.ebmlWriter.offsets.get(this.segmentDuration)), this.ebmlWriter.writeEBML(this.segmentDuration), (0, Ue.I)(this.seekHead), this.writer.seek(this.ebmlWriter.offsets.get(this.seekHead)), this.maybeCreateSeekHead … [truncated]
```

#### 349. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6114` → after: `L6114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R6114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L6114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L6114) · [Before (L6114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L6114)

```diff
-       const BB = (0, jB.Gd)(mG);
+       const ee = (0, Ue.nd)(VH);
```

#### 350. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6118` → after: `L6118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R6118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L6118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L6118) · [Before (L6118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L6118)

```diff
-     GB(40650);
+     He(40738);
```

#### 351. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6122` → after: `L6122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R6122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L6122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L6122) · [Before (L6122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L6122)

```diff
-     GB(40657), GB(40669), GB(40572);
+     He(40742), He(40750), He(40665);
```

#### 352. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6128` → after: `L6128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R6128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L6128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L6128) · [Before (L6128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L6128)

```diff
-         return this.getSupportedCodecs().filter((BB => DB.t.includes(BB)))
+         return this.getSupportedCodecs().filter((ee => be.s.includes(ee)))
```

#### 353. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6131` → after: `L6131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R6131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L6131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L6131) · [Before (L6131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L6131)

```diff
-         return this.getSupportedCodecs().filter((BB => DB.e.includes(BB)))
+         return this.getSupportedCodecs().filter((ee => be.c.includes(ee)))
```

#### 354. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6134` → after: `L6134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R6134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L6134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L6134) · [Before (L6134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L6134)

```diff
-         return this.getSupportedCodecs().filter((BB => DB.q.includes(BB)))
+         return this.getSupportedCodecs().filter((ee => be.o.includes(ee)))
```

#### 355. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6148` → after: `L6148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R6148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L6148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L6148) · [Before (L6148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L6148)

```diff
-         if (void 0 !== BB.minimumFragmentDuration && (!(0, jB.ac)(BB.minimumFragmentDuration) || BB.minimumFragmentDuration < 0)) throw new TypeError("options.minimumFragmentDuration, when provided, must be a non-negative number.");
+         if (void 0 !== ee.minimumFragmentDuration && (!(0, Ue.Kb)(ee.minimumFragmentDuration) || ee.minimumFragmentDuration < 0)) throw new TypeError("options.minimumFragmentDuration, when provided, must be a non-negative number.");
```

#### 356. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6207` → after: `L6207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R6207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L6207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L6207) · [Before (L6207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L6207)

```diff
-         return [...DB.t, ...DB.g, "pcm-s16", "pcm-s16be", "pcm-s24", "pcm-s24be", "pcm-s32", "pcm-s32be", "pcm-f32", "pcm-f32be", "pcm-f64", "pcm-f64be", ...DB.q]
+         return [...be.s, ...be.k, "pcm-s16", "pcm-s16be", "pcm-s24", "pcm-s24be", "pcm-s32", "pcm-s32be", "pcm-f32", "pcm-f32be", "pcm-f64", "pcm-f64be", ...be.o]
```

#### 357. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6227` → after: `L6227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R6227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L6227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L6227) · [Before (L6227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L6227)

```diff
-         return [...DB.t, ...DB.g, "pcm-s16", "pcm-s16be", "pcm-s24", "pcm-s24be", "pcm-s32", "pcm-s32be", "pcm-f32", "pcm-f32be", "pcm-f64", "pcm-f64be", ...DB.q]
+         return [...be.s, ...be.k, "pcm-s16", "pcm-s16be", "pcm-s24", "pcm-s24be", "pcm-s32", "pcm-s32be", "pcm-f32", "pcm-f32be", "pcm-f64", "pcm-f64be", ...be.o]
```

#### 358. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6244` → after: `L6244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R6244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L6244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L6244) · [Before (L6244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L6244)

```diff
-         return [...DB.t, ...DB.e]
+         return [...be.s, ...be.c]
```

#### 359. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6255` → after: `L6255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R6255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L6255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L6255) · [Before (L6255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L6255)

```diff
-         if (void 0 !== BB.minimumClusterDuration && (!(0, jB.ac)(BB.minimumClusterDuration) || BB.minimumClusterDuration < 0)) throw new TypeError("options.minimumClusterDuration, when provided, must be a non-negative number.");
+         if (void 0 !== ee.minimumClusterDuration && (!(0, Ue.Kb)(ee.minimumClusterDuration) || ee.minimumClusterDuration < 0)) throw new TypeError("options.minimumClusterDuration, when provided, must be a non-negative number.");
```

#### 360. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6295` → after: `L6295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R6295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L6295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L6295) · [Before (L6295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L6295)

```diff
-         return [...DB.t, ...DB.g, ...DB.n.filter((BB => !["pcm-s8", "pcm-f32be", "pcm-f64be", "ulaw", "alaw"].includes(BB))), ...DB.q]
+         return [...be.s, ...be.k, ...be.n.filter((ee => !["pcm-s8", "pcm-f32be", "pcm-f64be", "ulaw", "alaw"].includes(ee))), ...be.o]
```

#### 361. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6312` → after: `L6312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R6312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L6312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L6312) · [Before (L6312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L6312)

```diff
-         return [...DB.t.filter((BB => ["vp8", "vp9", "av1"].includes(BB))), ...DB.e.filter((BB => ["opus", "vorbis"].includes(BB))), ...DB.q]
+         return [...be.s.filter((ee => ["vp8", "vp9", "av1"].includes(ee))), ...be.c.filter((ee => ["opus", "vorbis"].includes(ee))), ...be.o]
```

#### 362. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6328` → after: `L6328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R6328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L6328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L6328) · [Before (L6328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L6328)

```diff
-   40572: (BB, OB, GB) => {
+   40665: (ee, ie, He) => {
```

#### 363. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6330` → after: `L6330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R6330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L6330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L6330) · [Before (L6330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L6330)

```diff
-       e: () => WB
+       c: () => Be
```

#### 364. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6332-L6340` → after: `L6332-L6340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R6332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L6332-L6340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L6332-L6340) · [Before (L6332-L6340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L6332-L6340)

```diff
-     var YB = GB(40574),
-       DB = GB(40581),
-       QB = GB(40589),
-       oB = GB(40669),
-       jB = GB(40641),
-       yB = GB(40633),
-       JB = GB(40610),
-       MB = GB(40650),
-       PB = GB(40599);
+     var ye = He(40671),
+       be = He(40676),
+       Me = He(40679),
+       Ke = He(40750),
+       Ue = He(40726),
+       Fe = He(40717),
+       Je = He(40703),
+       oe = He(40738),
+       Re = He(40692);
```

#### 365. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6358-L6359` → after: `L6358-L6359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R6358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L6358-L6359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L6358-L6359) · [Before (L6358-L6359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L6358-L6359)

```diff
-         const OB = (0, YB.Fd)(this.metadata.group),
-           GB = (0, YB.Fd)(BB.metadata.group);
+         const ie = (0, ye.ld)(this.metadata.group),
+           He = (0, ye.ld)(ee.metadata.group);
```

#### 366. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6394` → after: `L6394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R6394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L6394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L6394) · [Before (L6394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L6394)

```diff
-       if (void 0 !== BB.languageCode && !(0, YB.Ub)(BB.languageCode)) throw new TypeError("metadata.languageCode, when provided, must be a three-letter, ISO 639-2/T language code.");
+       if (void 0 !== ee.languageCode && !(0, ye.Eb)(ee.languageCode)) throw new TypeError("metadata.languageCode, when provided, must be a three-letter, ISO 639-2/T language code.");
```

#### 367. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6396` → after: `L6396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R6396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L6396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L6396) · [Before (L6396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L6396)

```diff
-       if (void 0 !== BB.disposition && (0, DB.p)(BB.disposition), void 0 !== BB.maximumPacketCount && (!Number.isInteger(BB.maximumPacketCount) || BB.maximumPacketCount < 0)) throw new TypeError("metadata.maximumPacketCount, when provided, must be a non-negative integer.");
+       if (void 0 !== ee.disposition && (0, be.n)(ee.disposition), void 0 !== ee.maximumPacketCount && (!Number.isInteger(ee.maximumPacketCount) || ee.maximumPacketCount < 0)) throw new TypeError("metadata.maximumPacketCount, when provided, must be a non-negative integer.");
```

#### 368. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6401` → after: `L6401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R6401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L6401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L6401) · [Before (L6401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L6401)

```diff
-     class WB extends YB.m {
+     class Be extends ye.j {
```

#### 369. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6406` → after: `L6406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R6406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L6406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L6406) · [Before (L6406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L6406)

```diff
-         if ((0, YB.gc)(OB)) throw new TypeError(BB);
+         if ((0, ye.Qb)(ie)) throw new TypeError(ee);
```

#### 370. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6410-L6413` → after: `L6410-L6413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R6410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L6410-L6413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L6410-L6413) · [Before (L6410-L6413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L6410-L6413)

```diff
-         if (super(), this.state = "pending", this.defaultTrackGroup = new NB, this.tracks = [], this._onFinalize = null, this._unfinalizedTargets = new Set, this._rootWriterPromise = null, this._startPromise = null, this._cancelPromise = null, this._finalizePromise = null, this._ … [truncated]
-         if (!(BB.format instanceof QB.i)) throw new TypeError("options.format must be an OutputFormat.");
-         if (!(BB.target instanceof jB.i || BB.target instanceof jB.g)) throw new TypeError("options.target must be a Target or a PathedTarget.");
-         if (BB.target instanceof jB.i && this._rememberTarget(BB.target), void 0 !== BB.initTarget && !(BB.initTarget instanceof jB.i) && "function" !== typeof BB.initTarget) throw new Error("options.initTarget, when provided, must be a Target or a function that returns or resolv … [truncated]
+         if (super(), this.state = "pending", this.defaultTrackGroup = new Xe, this.tracks = [], this._onFinalize = null, this._unfinalizedTargets = new Set, this._rootWriterPromise = null, this._startPromise = null, this._cancelPromise = null, this._finalizePromise = null, this._ … [truncated]
+         if (!(ee.format instanceof Me.l)) throw new TypeError("options.format must be an OutputFormat.");
+         if (!(ee.target instanceof Ue.j || ee.target instanceof Ue.f)) throw new TypeError("options.target must be a Target or a PathedTarget.");
+         if (ee.target instanceof Ue.j && this._rememberTarget(ee.target), void 0 !== ee.initTarget && !(ee.initTarget instanceof Ue.j) && "function" !== typeof ee.initTarget) throw new Error("options.initTarget, when provided, must be a Target or a function that returns or resolv … [truncated]
```

#### 371. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6415` → after: `L6415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R6415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L6415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L6415) · [Before (L6415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L6415)

```diff
-         this.format = BB.format, this.dP = BB.target, this._onFinalize = BB.onFinalize ?? null, this._initTarget = BB.initTarget ?? null, this._initTarget instanceof jB.i && this._rememberTarget(this._initTarget), this._muxer = BB.format._createMuxer(this)
+         this.format = ee.format, this.VR = ee.target, this._onFinalize = ee.onFinalize ?? null, this._initTarget = ee.initTarget ?? null, this._initTarget instanceof Ue.j && this._rememberTarget(this._initTarget), this._muxer = ee.format._createMuxer(this)
```

#### 372. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6418-L6419` → after: `L6418-L6419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R6418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L6418-L6419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L6418-L6419) · [Before (L6418-L6419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L6418-L6419)

```diff
-         (0, YB.Q)(this.dP instanceof jB.g);
-         const OB = this.dP.getTarget(BB),
+         (0, ye.I)(this.VR instanceof Ue.f);
+         const ie = this.VR.getTarget(ee),
```

#### 373. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6421` → after: `L6421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R6421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L6421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L6421) · [Before (L6421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L6421)

```diff
-             if (!(BB instanceof jB.i)) throw new TypeError("getTarget must return a Target.");
+             if (!(ee instanceof Ue.j)) throw new TypeError("getTarget must return a Target.");
```

#### 374. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6424` → after: `L6424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R6424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L6424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L6424) · [Before (L6424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L6424)

```diff
-         return (0, YB.gc)(OB) ? OB.then(GB) : GB(OB)
+         return (0, ye.Qb)(ie) ? ie.then(He) : He(ie)
```

#### 375. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6427` → after: `L6427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R6427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L6427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L6427) · [Before (L6427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L6427)

```diff
-         (0, YB.Q)(this.dP instanceof jB.g);
+         (0, ye.I)(this.VR instanceof Ue.f);
```

#### 376. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6441` → after: `L6441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R6441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L6441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L6441) · [Before (L6441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L6441)

```diff
-         if ((0, YB.Q)(null !== this._initTarget), this._initTarget instanceof jB.i) return this._initTarget;
+         if ((0, ye.I)(null !== this._initTarget), this._initTarget instanceof Ue.j) return this._initTarget;
```

#### 377. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6451-L6452` → after: `L6451-L6452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R6451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L6451-L6452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L6451-L6452) · [Before (L6451-L6452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L6451-L6452)

```diff
-         if (this.dP instanceof jB.i) return this._emit("target", {
-           target: this.dP,
+         if (this.VR instanceof Ue.j) return this._emit("target", {
+           target: this.VR,
```

#### 378. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6455` → after: `L6455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R6455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L6455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L6455) · [Before (L6455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L6455)

```diff
-         }), this._rootTarget = this.dP, this.dP;
+         }), this._rootTarget = this.VR, this.VR;
```

#### 379. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6457` → after: `L6457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R6457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L6457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L6457) · [Before (L6457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L6457)

```diff
-             path: this.dP.rootPath,
+             path: this.VR.rootPath,
```

#### 380. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6467` → after: `L6467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R6467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L6467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L6467) · [Before (L6467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L6467)

```diff
-         return (0, YB.gc)(OB) ? this._rootTargetPromise = OB.then(GB) : GB(OB)
+         return (0, ye.Qb)(ie) ? this._rootTargetPromise = ie.then(He) : He(ie)
```

#### 381. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6472` → after: `L6472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R6472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L6472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L6472) · [Before (L6472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L6472)

```diff
-             GB = new yB.e(OB, "boolean" === typeof BB ? BB : BB(OB));
+             He = new Fe.c(ie, "boolean" === typeof ee ? ee : ee(ie));
```

#### 382. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6478-L6479` → after: `L6478-L6479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R6478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L6478-L6479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L6478-L6479) · [Before (L6478-L6479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L6478-L6479)

```diff
-         if (!(BB instanceof oB.m)) throw new TypeError("source must be a VideoSource.");
-         if (RB(OB), void 0 !== OB.rotation && ![0, 90, 180, 270].includes(OB.rotation)) throw new TypeError(`Invalid video rotation: ${OB.rotation}. Has to be 0, 90, 180 or 270.`);
+         if (!(ee instanceof Ke.j)) throw new TypeError("source must be a VideoSource.");
+         if (ze(ie), void 0 !== ie.rotation && ![0, 90, 180, 270].includes(ie.rotation)) throw new TypeError(`Invalid video rotation: ${ie.rotation}. Has to be 0, 90, 180 or 270.`);
```

#### 383. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6482` → after: `L6482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R6482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L6482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L6482) · [Before (L6482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L6482)

```diff
-         if (void 0 !== OB.frameRate && (!Number.isFinite(OB.frameRate) || OB.frameRate <= 0)) throw new TypeError(`Invalid video frame rate: ${OB.frameRate}. Must be a positive number.`);
+         if (void 0 !== ie.frameRate && (!Number.isFinite(ie.frameRate) || ie.frameRate <= 0)) throw new TypeError(`Invalid video frame rate: ${ie.frameRate}. Must be a positive number.`);
```

#### 384. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6485` → after: `L6485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R6485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L6485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L6485) · [Before (L6485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L6485)

```diff
-         if (void 0 !== OB.decoderConfig && (0, PB.Y)({
+         if (void 0 !== ie.decoderConfig && (0, Re.Z)({
```

#### 385. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6488` → after: `L6488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R6488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L6488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L6488) · [Before (L6488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L6488)

```diff
-           if (!(OB.primingPacket instanceof MB.d)) throw new TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");
+           if (!(ie.primingPacket instanceof oe.c)) throw new TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");
```

#### 386. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6498-L6499` → after: `L6498-L6499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R6498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L6498-L6499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L6498-L6499) · [Before (L6498-L6499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L6498-L6499)

```diff
-         if (!(BB instanceof oB.b)) throw new TypeError("source must be an AudioSource.");
-         if (RB(OB), void 0 !== OB.decoderConfig && (0, PB.V)({
+         if (!(ee instanceof Ke.c)) throw new TypeError("source must be an AudioSource.");
+         if (ze(ie), void 0 !== ie.decoderConfig && (0, Re.U)({
```

#### 387. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6502` → after: `L6502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R6502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L6502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L6502) · [Before (L6502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L6502)

```diff
-           if (!(OB.primingPacket instanceof MB.d)) throw new TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");
+           if (!(ie.primingPacket instanceof oe.c)) throw new TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");
```

#### 388. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6512` → after: `L6512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R6512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L6512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L6512) · [Before (L6512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L6512)

```diff
-         if (!(BB instanceof oB.l)) throw new TypeError("source must be a SubtitleSource.");
+         if (!(ee instanceof Ke.i)) throw new TypeError("source must be a SubtitleSource.");
```

#### 389. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6520` → after: `L6520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R6520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L6520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L6520) · [Before (L6520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L6520)

```diff
-         if ((0, DB.n)(BB), "pending" !== this.state) throw new Error("Cannot set metadata tags after output has been started or canceled.");
+         if ((0, be.k)(ee), "pending" !== this.state) throw new Error("Cannot set metadata tags after output has been started or canceled.");
```

#### 390. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6529` → after: `L6529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R6529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L6529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L6529) · [Before (L6529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L6529)

```diff
-         if (GB === YB) throw new Error(0 === YB ? `${this.format._name} does not support ${BB.type} tracks.` : `${this.format._name} does not support more than ${YB} ${BB.type} track` + (1 === YB ? "" : "s") + ".");
+         if (He === ye) throw new Error(0 === ye ? `${this.format._name} does not support ${ee.type} tracks.` : `${this.format._name} does not support more than ${ye} ${ee.type} track` + (1 === ye ? "" : "s") + ".");
```

#### 391. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6531` → after: `L6531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R6531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L6531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L6531) · [Before (L6531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L6531)

```diff
-         if (this.tracks.length === DB) throw new Error(`${this.format._name} does not support more than ${DB} tracks` + (1 === DB ? "" : "s") + " in total.");
+         if (this.tracks.length === be) throw new Error(`${this.format._name} does not support more than ${be} tracks` + (1 === be ? "" : "s") + " in total.");
```

#### 392. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6535` → after: `L6535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R6535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L6535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L6535) · [Before (L6535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L6535)

```diff
-           if (!OB.includes(BB.source._codec)) throw new Error(`Codec '${BB.source._codec}' cannot be contained within ${this.format._name}. Supported video codecs are: ${OB.map((BB=>`'${BB}'`)).join(", ")}.` + this.format._codecUnsupportedHint(BB.source._codec))
+           if (!ie.includes(ee.source._codec)) throw new Error(`Codec '${ee.source._codec}' cannot be contained within ${this.format._name}. Supported video codecs are: ${ie.map((ee=>`'${ee}'`)).join(", ")}.` + this.format._codecUnsupportedHint(ee.source._codec))
```

#### 393. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6539` → after: `L6539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R6539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L6539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L6539) · [Before (L6539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L6539)

```diff
-           if (!OB.includes(BB.source._codec)) throw new Error(`Codec '${BB.source._codec}' cannot be contained within ${this.format._name}. Supported audio codecs are: ${OB.map((BB=>`'${BB}'`)).join(", ")}.` + this.format._codecUnsupportedHint(BB.source._codec))
+           if (!ie.includes(ee.source._codec)) throw new Error(`Codec '${ee.source._codec}' cannot be contained within ${this.format._name}. Supported audio codecs are: ${ie.map((ee=>`'${ee}'`)).join(", ")}.` + this.format._codecUnsupportedHint(ee.source._codec))
```

#### 394. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6543` → after: `L6543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R6543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L6543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L6543) · [Before (L6543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L6543)

```diff
-           if (!OB.includes(BB.source._codec)) throw new Error(`Codec '${BB.source._codec}' cannot be contained within ${this.format._name}. Supported subtitle codecs are: ${OB.map((BB=>`'${BB}'`)).join(", ")}.` + this.format._codecUnsupportedHint(BB.source._codec))
+           if (!ie.includes(ee.source._codec)) throw new Error(`Codec '${ee.source._codec}' cannot be contained within ${this.format._name}. Supported subtitle codecs are: ${ie.map((ee=>`'${ee}'`)).join(", ")}.` + this.format._codecUnsupportedHint(ee.source._codec))
```

#### 395. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6560` → after: `L6560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R6560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L6560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L6560) · [Before (L6560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L6560)

```diff
-           if (OB < YB) throw new Error(YB === BB[GB].max ? `${this.format._name} requires exactly ${YB} ${GB} track${1===YB?"":"s"}.` : `${this.format._name} requires at least ${YB} ${GB} track${1===YB?"":"s"}.`)
+           if (ie < ye) throw new Error(ye === ee[He].max ? `${this.format._name} requires exactly ${ye} ${He} track${1===ye?"":"s"}.` : `${this.format._name} requires at least ${ye} ${He} track${1===ye?"":"s"}.`)
```

#### 396. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6563` → after: `L6563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R6563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L6563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L6563) · [Before (L6563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L6563)

```diff
-         if (this.tracks.length < OB) throw new Error(OB === BB.total.max ? `${this.format._name} requires exactly ${OB} track` + (1 === OB ? "" : "s") + "." : `${this.format._name} requires at least ${OB} track` + (1 === OB ? "" : "s") + ".");
+         if (this.tracks.length < ie) throw new Error(ie === ee.total.max ? `${this.format._name} requires exactly ${ie} track` + (1 === ie ? "" : "s") + "." : `${this.format._name} requires at least ${ie} track` + (1 === ie ? "" : "s") + ".");
```

#### 397. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6565` → after: `L6565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R6565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L6565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L6565) · [Before (L6565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L6565)

```diff
-         return this._startPromise ? (JB.e._warn("Output has already been started."), this._startPromise) : this._startPromise = (async () => {
+         return this._startPromise ? (Je.b._warn("Output has already been started."), this._startPromise) : this._startPromise = (async () => {
```

#### 398. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6590` → after: `L6590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R6590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L6590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L6590) · [Before (L6590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L6590)

```diff
-         })() : void("finalized" === this.state && JB.e._warn("Output has already been finalized."))
+         })() : void("finalized" === this.state && Je.b._warn("Output has already been finalized."))
```

#### 399. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6595` → after: `L6595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R6595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L6595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L6595) · [Before (L6595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L6595)

```diff
-         return this._finalizePromise ? (JB.e._warn("Output has already been finalized."), this._finalizePromise) : this._finalizePromise = (async () => {
+         return this._finalizePromise ? (Je.b._warn("Output has already been finalized."), this._finalizePromise) : this._finalizePromise = (async () => {
```

#### 400. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6614` → after: `L6614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R6614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L6614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L6614) · [Before (L6614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L6614)

```diff
-   40650: (BB, OB, GB) => {
+   40738: (ee, ie, He) => {
```

#### 401. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6616` → after: `L6616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R6616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L6616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L6616) · [Before (L6616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L6616)

```diff
-       d: () => QB,
+       c: () => Me,
```

#### 402. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6619` → after: `L6619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R6619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L6619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L6619) · [Before (L6619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L6619)

```diff
-     var YB = GB(40574);
+     var ye = He(40671);
```

#### 403. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6642` → after: `L6642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R6642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L6642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L6642) · [Before (L6642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L6642)

```diff
-         return Math.trunc(YB.w * this.timestamp)
+         return Math.trunc(ye.s * this.timestamp)
```

#### 404. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6645` → after: `L6645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R6645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L6645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L6645) · [Before (L6645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L6645)

```diff
-         return Math.trunc(YB.w * this.duration)
+         return Math.trunc(ye.s * this.duration)
```

#### 405. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6696` → after: `L6696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R6696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L6696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L6696) · [Before (L6696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L6696)

```diff
-   40660: (BB, OB, GB) => {
+   40746: (ee, ie, He) => {
```

#### 406. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6700-L6702` → after: `L6702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R6702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L6702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L6702) · [Before (L6700-L6702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L6700-L6702)

```diff
-       h: () => EB,
-       i: () => XB,
-       m: () => VB
+       f: () => ge
```

#### 407. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6704-L6705` → after: `L6704-L6705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R6704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L6704-L6705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L6704-L6705) · [Before (L6704-L6705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L6704-L6705)

```diff
-     var YB = GB(40574),
-       DB = GB(40610),
+     var ye = He(40671),
+       be = He(40703),
```

#### 408. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6761` → after: `L6761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R6761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L6761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L6761) · [Before (L6761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L6761)

```diff
-     (0, YB.Gc)();
+     (0, ye.rc)();
```

#### 409. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6767` → after: `L6767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R6767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L6767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L6767) · [Before (L6767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L6767)

```diff
-       "video" === BB.type ? (OB - jB >= 1e3 && (DB.e._error("A VideoSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your VideoSamples as soon as you're done using them."), jB = OB), "undefined" !== typeof V … [truncated]
+       "video" === ee.type ? (ie - Ue >= 1e3 && (be.b._error("A VideoSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your VideoSamples as soon as you're done using them."), Ue = ie), "undefined" !== typeof V … [truncated]
```

#### 410. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6790` → after: `L6790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R6790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L6790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L6790) · [Before (L6790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L6790)

```diff
-         return Math.trunc(YB.w * this.timestamp)
+         return Math.trunc(ye.s * this.timestamp)
```

#### 411. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6793` → after: `L6793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R6793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L6793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L6793) · [Before (L6793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L6793)

```diff
-         return Math.trunc(YB.w * this.duration)
+         return Math.trunc(ye.s * this.duration)
```

#### 412. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6816` → after: `L6816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R6816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L6816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L6816) · [Before (L6816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L6816)

```diff
-           if (void 0 !== OB.visibleRect && (0, YB.Pd)(OB.visibleRect, "init.visibleRect"), void 0 !== OB.displayWidth && (!Number.isInteger(OB.displayWidth) || OB.displayWidth <= 0)) throw new TypeError("init.displayWidth, when provided, must be a positive integer.");
+           if (void 0 !== ie.visibleRect && (0, ye.sd)(ie.visibleRect, "init.visibleRect"), void 0 !== ie.displayWidth && (!Number.isInteger(ie.displayWidth) || ie.displayWidth <= 0)) throw new TypeError("init.displayWidth, when provided, must be a positive integer.");
```

#### 413. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6837` → after: `L6837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R6837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L6837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L6837) · [Before (L6837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L6837)

```diff
-           }, void 0 !== OB.displayWidth ? (this.squarePixelWidth = this.rotation % 180 === 0 ? OB.displayWidth : OB.displayHeight, this.squarePixelHeight = this.rotation % 180 === 0 ? OB.displayHeight : OB.displayWidth) : (this.squarePixelWidth = this.visibleRect.width, this.squa … [truncated]
+           }, void 0 !== ie.displayWidth ? (this.squarePixelWidth = this.rotation % 180 === 0 ? ie.displayWidth : ie.displayHeight, this.squarePixelHeight = this.rotation % 180 === 0 ? ie.displayHeight : ie.displayWidth) : (this.squarePixelWidth = this.visibleRect.width, this.squa … [truncated]
```

#### 414. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6843` → after: `L6843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R6843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L6843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L6843) · [Before (L6843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L6843)

```diff
-           void 0 !== OB?.visibleRect && (0, YB.Pd)(OB.visibleRect, "init.visibleRect"), this._data = BB, this._layout = null, this.format = BB.format, this.visibleRect = {
+           void 0 !== ie?.visibleRect && (0, ye.sd)(ie.visibleRect, "init.visibleRect"), this._data = ee, this._layout = null, this.format = ee.format, this.visibleRect = {
```

#### 415. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6855-L6857` → after: `L6855-L6857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R6855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L6855-L6857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L6855-L6857) · [Before (L6855-L6857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L6855-L6857)

```diff
-           if (void 0 !== OB.visibleRect && (0, YB.Pd)(OB.visibleRect, "init.visibleRect"), "undefined" !== typeof VideoFrame) return new lB(new VideoFrame(BB, {
-             timestamp: Math.trunc(OB.timestamp * YB.w),
-             duration: Math.trunc((OB.duration ?? 0) * YB.w) || void 0,
+           if (void 0 !== ie.visibleRect && (0, ye.sd)(ie.visibleRect, "init.visibleRect"), "undefined" !== typeof VideoFrame) return new qe(new VideoFrame(ee, {
+             timestamp: Math.trunc(ie.timestamp * ye.s),
+             duration: Math.trunc((ie.duration ?? 0) * ye.s) || void 0,
```

#### 416. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6876` → after: `L6876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R6876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L6876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L6876) · [Before (L6876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L6876)

```diff
-               alpha: (0, YB.Rb)(),
+               alpha: (0, ye.Cb)(),
```

#### 417. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6910` → after: `L6910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R6910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L6910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L6910) · [Before (L6910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L6910)

```diff
-         this.encodeOptions = OB?.encodeOptions ?? {}, this.pixelAspectRatio = (0, YB.vd)({
+         this.encodeOptions = ie?.encodeOptions ?? {}, this.pixelAspectRatio = (0, ye.bd)({
```

#### 418. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6920` → after: `L6920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R6920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L6920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L6920) · [Before (L6920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L6920)

```diff
-         return (0, YB.Q)(null !== this._data), this._data instanceof MB ? new lB(this._data, {
+         return (0, ye.I)(null !== this._data), this._data instanceof oe ? new qe(this._data, {
```

#### 419. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6932` → after: `L6932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R6932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L6932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L6932) · [Before (L6932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L6932)

```diff
-         }) : this._data instanceof Uint8Array ? ((0, YB.Q)(this._layout), new lB(this._data, {
+         }) : this._data instanceof Uint8Array ? ((0, ye.I)(this._layout), new qe(this._data, {
```

#### 420. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6974` → after: `L6974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R6974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L6974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L6974) · [Before (L6974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L6974)

```diff
-         if (!(0, YB.Gb)(BB)) throw new TypeError("destination must be an ArrayBuffer or an ArrayBuffer view.");
+         if (!(0, ye.sb)(ee)) throw new TypeError("destination must be an ArrayBuffer or an ArrayBuffer view.");
```

#### 421. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6977` → after: `L6977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R6977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L6977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L6977) · [Before (L6977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L6977)

```diff
-         if ((0, YB.Q)(null !== this._data), WB(this._data)) return this._data.copyTo(BB, OB);
+         if ((0, ye.I)(null !== this._data), Be(this._data)) return this._data.copyTo(ee, ie);
```

#### 422. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6998` → after: `L6998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R6998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L6998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L6998) · [Before (L6998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L6998)

```diff
-               if (!["RGBA", "RGBX", "BGRA", "BGRX"].includes(YB.format)) throw new Error(`Sample returned by toRgbSample was expected to have an RGB format, got '${YB.format}' instead.`);
+               if (!["RGBA", "RGBX", "BGRA", "BGRX"].includes(ye.format)) throw new Error(`Sample returned by toRgbSample was expected to have an RGB format, got '${ye.format}' instead.`);
```

#### 423. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L7008-L7010` → after: `L7008-L7010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R7008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L7008-L7010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L7008-L7010) · [Before (L7008-L7010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L7008-L7010)

```diff
-         (0, YB.Q)(this.format);
-         const DB = (0, YB.Id)(BB);
-         if (DB.byteLength < GB.allocationSize) throw new TypeError(`Destination buffer too small. Required: ${GB.allocationSize}, Available: ${DB.byteLength}`);
+         (0, ye.I)(this.format);
+         const be = (0, ye.od)(ee);
+         if (be.byteLength < He.allocationSize) throw new TypeError(`Destination buffer too small. Required: ${He.allocationSize}, Available: ${be.byteLength}`);
```

#### 424. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L7015` → after: `L7015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R7015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L7015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L7015) · [Before (L7015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L7015)

```diff
-           if ((0, YB.gc)(BB) && (BB = await BB), !Array.isArray(BB) || BB.some((BB => !(BB.data instanceof Uint8Array) || !Number.isInteger(BB.stride) || BB.stride < 0))) throw new TypeError('getDataPlanes() must return an array of objects with a Uint8Array "data" property and a  … [truncated]
+           if ((0, ye.Qb)(ee) && (ee = await ee), !Array.isArray(ee) || ee.some((ee => !(ee.data instanceof Uint8Array) || !Number.isInteger(ee.stride) || ee.stride < 0))) throw new TypeError('getDataPlanes() must return an array of objects with a Uint8Array "data" property and a  … [truncated]
```

#### 425. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L7017` → after: `L7017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R7017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L7017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L7017) · [Before (L7017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L7017)

```diff
-         } else if (this._data instanceof Uint8Array)(0, YB.Q)(this._layout), (0, YB.Q)(this._layout.length === jB.length), yB = this._layout.map(((BB, OB) => {
+         } else if (this._data instanceof Uint8Array)(0, ye.I)(this._layout), (0, ye.I)(this._layout.length === Ue.length), Fe = this._layout.map(((ee, ie) => {
```

#### 426. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L7026` → after: `L7026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R7026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L7026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L7026) · [Before (L7026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L7026)

```diff
-           (0, YB.Q)(BB);
+           (0, ye.I)(ee);
```

#### 427. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L7029` → after: `L7029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R7029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L7029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L7029) · [Before (L7029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L7029)

```diff
-             data: (0, YB.Id)(OB.data),
+             data: (0, ye.od)(ie.data),
```

#### 428. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L7072` → after: `L7072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R7072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L7072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L7072) · [Before (L7072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L7072)

```diff
-         if ((0, YB.Q)(null !== this._data), this._data instanceof MB) {
+         if ((0, ye.I)(null !== this._data), this._data instanceof oe) {
```

#### 429. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L7075` → after: `L7075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R7075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L7075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L7075) · [Before (L7075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L7075)

```diff
-           if ((0, YB.gc)(BB)) throw new Error("Cannot convert a VideoSampleResource-backed VideoSample to VideoFrame if getDataPlanes() returns a promise.");
+           if ((0, ye.Qb)(ee)) throw new Error("Cannot convert a VideoSampleResource-backed VideoSample to VideoFrame if getDataPlanes() returns a promise.");
```

#### 430. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L7100` → after: `L7100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R7100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L7100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L7100) · [Before (L7100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L7100)

```diff
-         }) : this._data instanceof Uint8Array ? ((0, YB.Q)(this._layout), new VideoFrame(this._data, {
+         }) : this._data instanceof Uint8Array ? ((0, ye.I)(this._layout), new VideoFrame(this._data, {
```

#### 431. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L7223` → after: `L7223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R7223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L7223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L7223) · [Before (L7223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L7223)

```diff
-         if ((0, YB.Q)(null !== this._data), this._data instanceof MB || this._data instanceof Uint8Array) {
+         if ((0, ye.I)(null !== this._data), this._data instanceof oe || this._data instanceof Uint8Array) {
```

#### 432. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L7242` → after: `L7242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R7242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L7242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L7242) · [Before (L7242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L7242)

```diff
-         } = (0, YB.qb)(this.rotation, this.flip, BB.rotate ?? 0, BB.flip ?? !1), [DB, QB] = OB % 180 === 0 ? [this.squarePixelWidth, this.squarePixelHeight] : [this.squarePixelHeight, this.squarePixelWidth];
+         } = (0, ye.bb)(this.rotation, this.flip, ee.rotate ?? 0, ee.flip ?? !1), [be, Me] = ie % 180 === 0 ? [this.squarePixelWidth, this.squarePixelHeight] : [this.squarePixelHeight, this.squarePixelWidth];
```

#### 433. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L7249` → after: `L7249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R7249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L7249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L7249) · [Before (L7249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L7249)

```diff
-         void 0 !== BB.width && void 0 === BB.height ? (MB = BB.width, PB = MB / JB) : void 0 === BB.width && void 0 !== BB.height ? (PB = BB.height, MB = PB * JB) : void 0 !== BB.width && void 0 !== BB.height ? (MB = BB.width, PB = BB.height) : (MB = jB, PB = yB), MB = (0, YB.cd) … [truncated]
+         void 0 !== ee.width && void 0 === ee.height ? (oe = ee.width, Re = oe / Je) : void 0 === ee.width && void 0 !== ee.height ? (Re = ee.height, oe = Re * Je) : void 0 !== ee.width && void 0 !== ee.height ? (oe = ee.width, Re = ee.height) : (oe = Ue, Re = Fe), oe = (0, ye.Oc) … [truncated]
```

#### 434. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L7266` → after: `L7266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R7266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L7266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L7266) · [Before (L7266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L7266)

```diff
-           if ((0, YB.gc)(BB) && (BB = await BB), null !== BB) return BB
+           if ((0, ye.Qb)(ee) && (ee = await ee), null !== ee) return ee
```

#### 435. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L7331` → after: `L7331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R7331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L7331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L7331) · [Before (L7331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L7331)

```diff
-       return qB.length >= 3 && qB.splice((0, YB.J)(qB, (BB => BB.age)), 1), qB.push({
+       return Te.length >= 3 && Te.splice((0, ye.E)(Te, (ee => ee.age)), 1), Te.push({
```

#### 436. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L7345-L7350` → after: `L7345-L7350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R7345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L7345-L7350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L7345-L7350) · [Before (L7345-L7350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L7345-L7350)

```diff
-           const OB = Object.keys(YB.g);
-           if (null != BB.primaries && !OB.includes(BB.primaries)) throw new TypeError(`init.colorSpace.primaries, when provided, must be one of ${OB.join(", ")}.`);
-           const GB = Object.keys(YB.z);
-           if (null != BB.transfer && !GB.includes(BB.transfer)) throw new TypeError(`init.colorSpace.transfer, when provided, must be one of ${GB.join(", ")}.`);
-           const DB = Object.keys(YB.r);
-           if (null != BB.matrix && !DB.includes(BB.matrix)) throw new TypeError(`init.colorSpace.matrix, when provided, must be one of ${DB.join(", ")}.`);
+           const ie = Object.keys(ye.f);
+           if (null != ee.primaries && !ie.includes(ee.primaries)) throw new TypeError(`init.colorSpace.primaries, when provided, must be one of ${ie.join(", ")}.`);
+           const He = Object.keys(ye.t);
+           if (null != ee.transfer && !He.includes(ee.transfer)) throw new TypeError(`init.colorSpace.transfer, when provided, must be one of ${He.join(", ")}.`);
+           const be = Object.keys(ye.o);
+           if (null != ee.matrix && !be.includes(ee.matrix)) throw new TypeError(`init.colorSpace.matrix, when provided, must be one of ${be.join(", ")}.`);
```

#### 437. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L7370` → after: `L7370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R7370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L7370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L7370) · [Before (L7370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L7370)

```diff
-         return (0, YB.Q)(oB >= 0), (0, YB.Q)(jB >= 0), {
+         return (0, ye.I)(Ke >= 0), (0, ye.I)(Ue >= 0), {
```

#### 438. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L7492` → after: `L7492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R7492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L7492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L7492) · [Before (L7492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L7492)

```diff
-             (0, YB.M)(BB), (0, YB.Q)(!1)
+             (0, ye.G)(ee), (0, ye.I)(!1)
```

#### 439. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L7540` → after: `L7540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R7540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L7540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L7540) · [Before (L7540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L7540)

```diff
-         if (void 0 !== GB && GB.length !== DB) throw new TypeError(`Layout must have ${DB} planes.`);
+         if (void 0 !== He && He.length !== be) throw new TypeError(`Layout must have ${be} planes.`);
```

#### 440. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L7559` → after: `L7559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R7559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L7559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L7559) · [Before (L7559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L7559)

```diff
-             if (BB.stride < PB.sourceWidthBytes) throw new TypeError(`Stride for plane ${yB} is too small.`);
+             if (ee.stride < Re.sourceWidthBytes) throw new TypeError(`Stride for plane ${Fe} is too small.`);
```

#### 441. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L7584` → after: `L7584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R7584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L7584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L7584) · [Before (L7584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L7584)

```diff
-         return Math.trunc(YB.w * this.timestamp)
+         return Math.trunc(ye.s * this.timestamp)
```

#### 442. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L7587` → after: `L7587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R7587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L7587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L7587) · [Before (L7587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L7587)

```diff
-         return Math.trunc(YB.w * this.duration)
+         return Math.trunc(ye.s * this.duration)
```

#### 443. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L7639` → after: `L7639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R7639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L7639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L7639) · [Before (L7639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L7639)

```diff
-         return (QB ? YB : YB * this.numberOfChannels) * DB
+         return (Me ? ye : ye * this.numberOfChannels) * be
```

#### 444. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L7642` → after: `L7642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R7642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L7642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L7642) · [Before (L7642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L7642)

```diff
-         if (!(0, YB.Gb)(BB)) throw new TypeError("destination must be an ArrayBuffer or an ArrayBuffer view.");
+         if (!(0, ye.sb)(ee)) throw new TypeError("destination must be an ArrayBuffer or an ArrayBuffer view.");
```

#### 445. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L7663` → after: `L7663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R7663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L7663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L7663) · [Before (L7663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L7663)

```diff
-         const zB = void 0 !== DB ? DB : JB - PB;
+         const ke = void 0 !== be ? be : Je - Re;
```

#### 446. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L7669` → after: `L7669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R7669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L7669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L7669) · [Before (L7669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L7669)

```diff
-         const qB = (pB ? zB : zB * MB) * lB;
+         const Te = (fe ? ke : ke * oe) * qe;
```

#### 447. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L7671` → after: `L7671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R7671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L7671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L7671) · [Before (L7671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L7671)

```diff
-         const ZB = (0, YB.Gd)(BB),
+         const pe = (0, ye.nd)(ee),
```

#### 448. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L7674` → after: `L7674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R7674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L7674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L7674) · [Before (L7674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L7674)

```diff
-           if ((0, YB.lc)() && MB > 2 && yB !== jB) return void wB(this._data, ZB, jB, yB, MB, oB, PB, zB);
+           if ((0, ye.Wb)() && oe > 2 && Fe !== Ue) return void ve(this._data, pe, Ue, Fe, oe, Ke, Re, ke);
```

#### 449. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L7696` → after: `L7696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R7696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L7696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L7696) · [Before (L7696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L7696)

```diff
-             if (OB.byteLength !== GB) throw new TypeError(`Data plane ${BB} has invalid size. Expected exactly ${GB} bytes, got ${OB.byteLength} bytes.`);
+             if (ie.byteLength !== He) throw new TypeError(`Data plane ${ee} has invalid size. Expected exactly ${He} bytes, got ${ie.byteLength} bytes.`);
```

#### 450. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L7710` → after: `L7710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R7710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L7710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L7710) · [Before (L7710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L7710)

```diff
-         else if ((0, YB.Q)("f32-planar" === jB), pB) VB = new Uint8Array(this._data.allocationSize({
+         else if ((0, ye.I)("f32-planar" === Ue), fe) ge = new Uint8Array(this._data.allocationSize({
```

#### 451. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L7727` → after: `L7727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R7727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L7727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L7727) · [Before (L7727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L7727)

```diff
-         const SB = (0, YB.Gd)(VB);
+         const Oe = (0, ye.nd)(ge);
```

#### 452. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L7731` → after: `L7731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R7731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L7731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L7731) · [Before (L7731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L7731)

```diff
-             BB = AB ? (oB * JB + (YB + PB)) * WB : ((YB + PB) * MB + oB) * WB;
+             ee = Ee ? (Ke * Je + (ye + Re)) * Be : ((ye + Re) * oe + Ke) * Be;
```

#### 453. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L7736` → after: `L7736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R7736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L7736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L7736) · [Before (L7736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L7736)

```diff
-               OB = AB ? (BB * JB + (YB + PB)) * WB : ((YB + PB) * MB + BB) * WB;
+               ie = Ee ? (ee * Je + (ye + Re)) * Be : ((ye + Re) * oe + ee) * Be;
```

#### 454. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L7963` → after: `L7963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R7963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L7963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L7963) · [Before (L7963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L7963)

```diff
-             return (BB, OB, GB) => BB.setUint8(OB, (0, YB.cb)(Math.round(128 * GB) + 128, 0, 255));
+             return (ee, ie, He) => ee.setUint8(ie, (0, ye.T)(Math.round(128 * He) + 128, 0, 255));
```

#### 455. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L7966` → after: `L7966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R7966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L7966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L7966) · [Before (L7966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L7966)

```diff
-             return (BB, OB, GB) => BB.setInt16(OB, (0, YB.cb)(Math.round(32768 * GB), -32768, 32767), !0);
+             return (ee, ie, He) => ee.setInt16(ie, (0, ye.T)(Math.round(32768 * He), -32768, 32767), !0);
```

#### 456. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L7969` → after: `L7969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R7969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L7969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L7969) · [Before (L7969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L7969)

```diff
-             return (BB, OB, GB) => BB.setInt32(OB, (0, YB.cb)(Math.round(2147483648 * GB), -2147483648, 2147483647), !0);
+             return (ee, ie, He) => ee.setInt32(ie, (0, ye.T)(Math.round(2147483648 * He), -2147483648, 2147483647), !0);
```

#### 457. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L7999` → after: `L7999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R7999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L7999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L7999) · [Before (L7999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L7999)

```diff
-               QB = (0, YB.Gd)(DB);
+               Me = (0, ye.nd)(be);
```

#### 458. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L8011` → after: `L8011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R8011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L8011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L8011) · [Before (L8011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L8011)

```diff
-               lB = (0, YB.Gd)(DB);
+               qe = (0, ye.nd)(be);
```

#### 459. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L8024` → after: `L8024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R8024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L8024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L8024) · [Before (L8024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L8024)

```diff
-             oB = (0, YB.Gd)(DB);
+             Ke = (0, ye.nd)(be);
```

#### 460. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L8038` → after: `L8038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R8038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L8038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L8038) · [Before (L8038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L8038)

```diff
-             oB = (0, YB.Gd)(DB);
+             Ke = (0, ye.nd)(be);
```

#### 461. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L8071` → after: `L8071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R8071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L8071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L8071) · [Before (L8071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L8071)

```diff
-   40627: (BB, OB, GB) => {
+   40712: (ee, ie, He) => {
```

#### 462. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L8073` → after: `L8073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R8073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L8073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L8073) · [Before (L8073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L8073)

```diff
-       d: () => oB,
+       c: () => Ke,
```

#### 463. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L8075` → after: `L8075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R8075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L8075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L8075) · [Before (L8075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L8075)

```diff
-       h: () => QB,
+       g: () => Me,
```

#### 464. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L8134` → after: `L8134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R8134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L8134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L8134) · [Before (L8134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L8134)

```diff
-   40641: (BB, OB, GB) => {
+   40726: (ee, ie, He) => {
```

#### 465. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L8137` → after: `L8137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R8137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L8137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L8137) · [Before (L8137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L8137)

```diff
-       b: () => JB,
+       d: () => Je,
```

#### 466. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L8139-L8140` → after: `L8139-L8140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R8139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L8139-L8140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L8139-L8140) · [Before (L8139-L8140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L8139-L8140)

```diff
-       g: () => zB,
-       i: () => oB
+       f: () => ke,
+       j: () => Ke
```

#### 467. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L8142-L8143` → after: `L8142-L8143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R8142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L8142-L8143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L8142-L8143) · [Before (L8142-L8143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L8142-L8143)

```diff
-     var DB = GB(40648),
-       QB = GB(40574);
+     var be = He(40729),
+       Me = He(40671);
```

#### 468. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L8145` → after: `L8145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R8145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L8145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L8145) · [Before (L8145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L8145)

```diff
-     class oB extends QB.m {
+     class Ke extends Me.j {
```

#### 469. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L8242` → after: `L8242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R8242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L8242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L8242) · [Before (L8242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L8242)

```diff
-   40619: (BB, OB, GB) => {
+   40708: (ee, ie, He) => {
```

#### 470. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L8244` → after: `L8244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R8244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L8244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L8244) · [Before (L8244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L8244)

```diff
-       c: () => YB
+       d: () => ye
```

#### 471. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L8248` → after: `L8248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R8248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L8248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L8248) · [Before (L8248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L8248)

```diff
-   40633: (BB, OB, GB) => {
+   40717: (ee, ie, He) => {
```

#### 472. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L8250` → after: `L8250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R8250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L8250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L8250) · [Before (L8250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L8250)

```diff
-       e: () => DB
+       c: () => be
```

#### 473. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L8252` → after: `L8252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R8252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L8252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L8252) · [Before (L8252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L8252)

```diff
-     var YB = GB(40574);
+     var ye = He(40671);
```

#### 474. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L8259` → after: `L8259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R8259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L8259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L8259) · [Before (L8259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L8259)

```diff
-         (0, YB.Q)(!this.started), this.target._start(), this.started = !0
+         (0, ye.I)(!this.started), this.target._start(), this.started = !0
```

#### 475. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L8262` → after: `L8262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R8262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L8262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L8262) · [Before (L8262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L8262)

```diff
-         (0, YB.Q)(this.started && !this.finalized), this.maybeTrackWrites(BB), this.target._write(BB, this.pos), this.pos += BB.byteLength
+         (0, ye.I)(this.started && !this.finalized), this.maybeTrackWrites(ee), this.target._write(ee, this.pos), this.pos += ee.byteLength
```

#### 476. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L8271` → after: `L8271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R8271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L8271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L8271) · [Before (L8271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L8271)

```diff
-         return (0, YB.Q)(this.started && !this.finalized), this.target._flush()
+         return (0, ye.I)(this.started && !this.finalized), this.target._flush()
```

#### 477. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L8274` → after: `L8274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R8274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L8274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/229.js#L8274) · [Before (L8274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/229.js#L8274)

```diff
-         (0, YB.Q)(this.started && !this.finalized), await this.target._finalize(), this.finalized = !0
+         (0, ye.I)(this.started && !this.finalized), await this.target._finalize(), this.finalized = !0
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/230.js` (gw4e3a.937868ec → u88b9b.1969c480)

- **File**: `bundles/bloxd.io/chunks/js/230.js` (112 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26)

#### 1. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L4)

```diff
-   44646: (BB, OB, GB) => {
+   44693: (ee, ie, He) => {
```

#### 2. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L9-L11` → after: `L9-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L9-L11) · [Before (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L9-L11)

```diff
-     var YB = GB(38589),
-       DB = GB(120),
-       QB = GB(1195);
+     var ye = He(38745),
+       be = He(125),
+       Me = He(1150);
```

#### 3. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L14` → after: `L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L14) · [Before (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L14)

```diff
-       return (0, DB.isDiscordClient)() ? `https://${QB.e.discordDomain}/${BB.href}` : BB.href
+       return (0, be.isDiscordClient)() ? `https://${Me.d.discordDomain}/${ee.href}` : ee.href
```

#### 4. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L17-L18` → after: `L17-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L17-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L17-L18) · [Before (L17-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L17-L18)

```diff
-       scriptUrl: oB(new GB.U(GB(44655))),
-       wasmBinaryUrl: oB(new GB.U(GB(44657)))
+       scriptUrl: Ke(new He.U(He(44697))),
+       wasmBinaryUrl: Ke(new He.U(He(44704)))
```

#### 5. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L20` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L20) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L20)

```diff
-     var yB = GB(36856),
+     var Fe = He(36938),
```

#### 6. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L24)

```diff
-       return JB()('(()=>{class BB extends Error{}function OB(OB,GB){const YB=OB._malloc(GB);if(0===YB)throw new BB(`Draco: the decoder\'s heap refused ${GB} bytes`);return YB}function GB(GB,YB,DB,QB){let oB=null,jB=null,yB=null;try{oB=new GB.Decoder,jB=new GB.DecoderBuffer,jB.Ini … [truncated]
+       return Je()('(()=>{class ee extends Error{}function ie(ie,He){const ye=ie._malloc(He);if(0===ye)throw new ee(`Draco: the decoder\'s heap refused ${He} bytes`);return ye}function He(He,ye,be,Me){let Ke=null,Ue=null,Fe=null;try{Ke=new He.Decoder,Ue=new He.DecoderBuffer,Ue.Ini … [truncated]
```

#### 7. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L26-L28` → after: `L26-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L26-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L26-L28) · [Before (L26-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L26-L28)

```diff
-     var PB = GB(92),
-       zB = GB(4820),
-       lB = GB(3656);
+     var Re = He(97),
+       ke = He(4781),
+       qe = He(3565);
```

#### 8. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L50` → after: `L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L50) · [Before (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L50)

```diff
-         if (!BB.ok) throw new Error(`Draco: fetching ${OB} failed: ${BB.status}`);
+         if (!ee.ok) throw new Error(`Draco: fetching ${ie} failed: ${ee.status}`);
```

#### 9. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L59` → after: `L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L59) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L59)

```diff
-             DB.onmessage = null, DB.onerror = null, DB.terminate(), YB(new Error("Draco: the decode worker failed to start" + (BB.message ? `: ${BB.message}` : " (its script did not load)")))
+             be.onmessage = null, be.onerror = null, be.terminate(), ye(new Error("Draco: the decode worker failed to start" + (ee.message ? `: ${ee.message}` : " (its script did not load)")))
```

#### 10. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L64` → after: `L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L64) · [Before (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L64)

```diff
-             DB.onmessage = null, DB.onerror = null, "initDone" === GB.id ? OB(DB) : (DB.terminate(), YB(new Error(`Draco: ${"initError"===GB.id?GB.message:"the worker did not start"}`)))
+             be.onmessage = null, be.onerror = null, "initDone" === He.id ? ie(be) : (be.terminate(), ye(new Error(`Draco: ${"initError"===He.id?He.message:"the worker did not start"}`)))
```

#### 11. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L107` → after: `L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L107) · [Before (L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L107)

```diff
-           GB.onmessage = null, GB.onerror = null, GB.terminate(), OB.reject(new Error(`Draco: the decode worker failed: ${YB.message}`)), UB(BB)
+           He.onmessage = null, He.onerror = null, He.terminate(), ie.reject(new Error(`Draco: the decode worker failed: ${ye.message}`)), We(ee)
```

#### 12. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L118` → after: `L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L118) · [Before (L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L118)

```diff
-         OB.reject(GB instanceof Error ? GB : new Error(String(GB))), UB(BB)
+         ie.reject(He instanceof Error ? He : new Error(String(He))), We(ee)
```

#### 13. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L126` → after: `L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L126) · [Before (L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L126)

```diff
-         if (SB ??= (0, zB.e)() ? 1 : function(BB, OB) {
+         if (Oe ??= (0, ke.c)() ? 1 : function(ee, ie) {
```

#### 14. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L152-L155` → after: `L152-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L152-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L152-L155) · [Before (L152-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L152-L155)

```diff
-     var KB = GB(38074),
-       uB = GB(38087),
-       mB = GB(34875),
-       IB = GB(34869);
+     var De = He(38185),
+       Pe = He(38195),
+       Ae = He(34988),
+       Ye = He(34984);
```

#### 15. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L165-L166` → after: `L165-L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L165-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L165-L166) · [Before (L165-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L165-L166)

```diff
-       const OB = (0, IB.j)(BB.byteLength);
-       if (OB) throw new mB.g(OB);
+       const ie = (0, Ye.l)(ee.byteLength);
+       if (ie) throw new Ae.k(ie);
```

#### 16. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L170-L171` → after: `L170-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L170-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L170-L171) · [Before (L170-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L170-L171)

```diff
-       } = (0, mB.r)(BB), DB = (0, IB.h)(GB, YB);
-       if (DB) throw new mB.g(DB);
+       } = (0, Ae.y)(ee), be = (0, Ye.i)(He, ye);
+       if (be) throw new Ae.k(be);
```

#### 17. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L181` → after: `L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L181) · [Before (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L181)

```diff
-                   oB = null !== (DB = QB.byteOffset) && void 0 !== DB ? DB : 0;
+                   Ke = null !== (be = Me.byteOffset) && void 0 !== be ? be : 0;
```

#### 18. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L200` → after: `L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L200) · [Before (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L200)

```diff
-                   numComponents: mB.h[DB.type],
+                   numComponents: Ae.m[be.type],
```

#### 19. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L212` → after: `L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L212) · [Before (L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L212)

```diff
-             SB = (null !== (DB = BB.meshes) && void 0 !== DB ? DB : []).map(((OB, GB) => {
+             Oe = (null !== (be = ee.meshes) && void 0 !== be ? be : []).map(((ie, He) => {
```

#### 20. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L236` → after: `L236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L236) · [Before (L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L236)

```diff
-                     if (void 0 !== yB) jB.normalized[DB] = null !== (JB = BB.accessors[yB].normalized) && void 0 !== JB && JB, GB.components[DB] = mB.h[BB.accessors[yB].type]
+                     if (void 0 !== Fe) Ue.normalized[be] = null !== (Je = ee.accessors[Fe].normalized) && void 0 !== Je && Je, He.components[be] = Ae.m[ee.accessors[Fe].type]
```

#### 21. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L249` → after: `L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L249) · [Before (L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L249)

```diff
-                   mode: null !== (DB = OB.mode) && void 0 !== DB ? DB : 4,
+                   mode: null !== (be = ie.mode) && void 0 !== be ? be : 4,
```

#### 22. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L253` → after: `L253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L253) · [Before (L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L253)

```diff
-                   material: null !== (QB = OB.material) && void 0 !== QB ? QB : null,
+                   material: null !== (Me = ie.material) && void 0 !== Me ? Me : null,
```

#### 23. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L264` → after: `L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L264) · [Before (L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L264)

```diff
-             nB = (null !== (QB = BB.nodes) && void 0 !== QB ? QB : []).map(((BB, OB) => {
+             de = (null !== (Me = ee.nodes) && void 0 !== Me ? Me : []).map(((ee, ie) => {
```

#### 24. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L269-L270` → after: `L269-L270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L269-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L269-L270) · [Before (L269-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L269-L270)

```diff
-                 children: null !== (GB = BB.children) && void 0 !== GB ? GB : [],
-                 mesh: null !== (YB = BB.mesh) && void 0 !== YB ? YB : null,
+                 children: null !== (He = ee.children) && void 0 !== He ? He : [],
+                 mesh: null !== (ye = ee.mesh) && void 0 !== ye ? ye : null,
```

#### 25. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L280` → after: `L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L280) · [Before (L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L280)

```diff
-             kB = (null !== (MB = BB.materials) && void 0 !== MB ? MB : []).map(((BB, OB) => {
+             Ze = (null !== (oe = ee.materials) && void 0 !== oe ? oe : []).map(((ee, ie) => {
```

#### 26. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L299` → after: `L299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L299) · [Before (L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L299)

```diff
-                 alphaMode: null !== (DB = BB.alphaMode) && void 0 !== DB ? DB : "OPAQUE",
+                 alphaMode: null !== (be = ee.alphaMode) && void 0 !== be ? be : "OPAQUE",
```

#### 27. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L304` → after: `L304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L304) · [Before (L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L304)

```diff
-             dB = (null !== (PB = BB.textures) && void 0 !== PB ? PB : []).map(((OB, GB) => {
+             we = (null !== (Re = ee.textures) && void 0 !== Re ? Re : []).map(((ie, He) => {
```

#### 28. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L306` → after: `L306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L306) · [Before (L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L306)

```diff
-               const QB = void 0 === OB.sampler ? FB : {
+               const Me = void 0 === ie.sampler ? Ve : {
```

#### 29. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L319` → after: `L319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L319) · [Before (L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L319)

```diff
-                 image: null !== (DB = OB.source) && void 0 !== DB ? DB : -1
+                 image: null !== (be = ie.source) && void 0 !== be ? be : -1
```

#### 30. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L322` → after: `L322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L322) · [Before (L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L322)

```diff
-             KB = (null !== (zB = BB.images) && void 0 !== zB ? zB : []).map(((BB, OB) => ({
+             De = (null !== (ke = ee.images) && void 0 !== ke ? ke : []).map(((ee, ie) => ({
```

#### 31. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L328` → after: `L328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L328) · [Before (L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L328)

```diff
-             uB = null !== (lB = (0, mB.n)(BB)) && void 0 !== lB ? lB : 0;
+             Pe = null !== (qe = (0, Ae.u)(ee)) && void 0 !== qe ? qe : 0;
```

#### 32. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L331` → after: `L331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L331) · [Before (L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L331)

```diff
-             rootNodes: null !== (pB = null === (qB = BB.scenes) || void 0 === qB || null === (ZB = qB[uB]) || void 0 === ZB ? void 0 : ZB.nodes) && void 0 !== pB ? pB : [],
+             rootNodes: null !== (fe = null === (Te = ee.scenes) || void 0 === Te || null === (pe = Te[Pe]) || void 0 === pe ? void 0 : pe.nodes) && void 0 !== fe ? fe : [],
```

#### 33. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L340` → after: `L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L340) · [Before (L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L340)

```diff
-         throw QB instanceof mB.f ? QB : new mB.f(`reading the GLB failed: ${QB instanceof Error?QB.message:String(QB)}`)
+         throw Me instanceof Ae.i ? Me : new Ae.i(`reading the GLB failed: ${Me instanceof Error?Me.message:String(Me)}`)
```

#### 34. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L346` → after: `L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L346) · [Before (L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L346)

```diff
-       if (!DB) throw new mB.f("not a Draco primitive");
+       if (!be) throw new Ae.i("not a Draco primitive");
```

#### 35. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L351` → after: `L351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L351) · [Before (L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L351)

```diff
-         throw new mB.f(`Draco decoding failed: ${JB instanceof Error?JB.message:String(JB)}`)
+         throw new Ae.i(`Draco decoding failed: ${Je instanceof Error?Je.message:String(Je)}`)
```

#### 36. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L358` → after: `L358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L358) · [Before (L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L358)

```diff
-       if (QB.totalVertices !== oB || (null !== (GB = null === (YB = QB.indices) || void 0 === YB ? void 0 : YB.length) && void 0 !== GB ? GB : 0) !== jB || QB.attributes.some((BB => BB.size !== yB[BB.kind] || BB.data.length !== oB * BB.size))) throw new mB.f("Draco decoding gave  … [truncated]
+       if (Me.totalVertices !== Ke || (null !== (He = null === (ye = Me.indices) || void 0 === ye ? void 0 : ye.length) && void 0 !== He ? He : 0) !== Ue || Me.attributes.some((ee => ee.size !== Fe[ee.kind] || ee.data.length !== Ke * ee.size))) throw new Ae.i("Draco decoding gave  … [truncated]
```

#### 37. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L369` → after: `L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L369) · [Before (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L369)

```diff
-       const YB = null !== (GB = gB.get(BB)) && void 0 !== GB ? GB : OB(BB);
+       const ye = null !== (He = xe.get(ee)) && void 0 !== He ? He : ie(ee);
```

#### 38. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L389-L390` → after: `L389-L390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L389-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L389-L390) · [Before (L389-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L389-L390)

```diff
-         YB = GB ? (0, uB.i)(GB, BB.count) : new Float32Array(0);
-       return (0, uB.p)(YB.length / 3, ((BB, OB) => YB[3 * BB + OB]))
+         ye = He ? (0, Pe.e)(He, ee.count) : new Float32Array(0);
+       return (0, Pe.o)(ye.length / 3, ((ee, ie) => ye[3 * ee + ie]))
```

#### 39. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L415` → after: `L415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L415) · [Before (L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L415)

```diff
-           const jB = null !== (OB = QB.byteStride) && void 0 !== OB ? OB : oB * mB.b[DB.componentType];
+           const Ue = null !== (ie = Me.byteStride) && void 0 !== ie ? ie : Ke * Ae.c[be.componentType];
```

#### 40. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L419` → after: `L419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L419) · [Before (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L419)

```diff
-             offset: null !== (GB = DB.byteOffset) && void 0 !== GB ? GB : 0,
+             offset: null !== (He = be.byteOffset) && void 0 !== He ? He : 0,
```

#### 41. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L429` → after: `L429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L429) · [Before (L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L429)

```diff
-       return new uB.e(OB, YB, DB.count, ...wB(DB, OB))
+       return new Pe.c(ie, ye, be.count, ...ve(be, ie))
```

#### 42. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L453` → after: `L453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L453) · [Before (L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L453)

```diff
-       return new uB.e(GB, OB.indices, OB.totalVertices, ...wB(BB.position, GB))
+       return new Pe.c(He, ie.indices, ie.totalVertices, ...ve(ee.position, He))
```

#### 43. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L458` → after: `L458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L458) · [Before (L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L458)

```diff
-       return OB < 0 ? BB : BB.substring(OB + 1)
+       return ie < 0 ? ee : ee.substring(ie + 1)
```

#### 44. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L467` → after: `L467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L467) · [Before (L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L467)

```diff
-       return BB.name || `node${BB.index}`
+       return ee.name || `node${ee.index}`
```

#### 45. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L491-L492` → after: `L491-L492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L491-L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L491-L492) · [Before (L491-L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L491-L492)

```diff
-       const QB = null !== (OB = BB.minFilter) && void 0 !== OB ? OB : 9987;
-       return 9729 === (null !== (GB = BB.magFilter) && void 0 !== GB ? GB : 9729) ? null !== (YB = CB[QB]) && void 0 !== YB ? YB : 3 : null !== (DB = HB[QB]) && void 0 !== DB ? DB : 4
+       const Me = null !== (ie = ee.minFilter) && void 0 !== ie ? ie : 9987;
+       return 9729 === (null !== (He = ee.magFilter) && void 0 !== He ? He : 9729) ? null !== (ye = Ie[Me]) && void 0 !== ye ? ye : 3 : null !== (be = he[Me]) && void 0 !== be ? be : 4
```

#### 46. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L501` → after: `L501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L501) · [Before (L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L501)

```diff
-       return null !== (OB = sB[null !== BB && void 0 !== BB ? BB : 10497]) && void 0 !== OB ? OB : 1
+       return null !== (ie = Ge[null !== ee && void 0 !== ee ? ee : 10497]) && void 0 !== ie ? ie : 1
```

#### 47. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L510` → after: `L510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L510) · [Before (L510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L510)

```diff
-       const DB = Float64Array.from(null !== (OB = BB.scale) && void 0 !== OB ? OB : [1, 1, 1]);
+       const be = Float64Array.from(null !== (ie = ee.scale) && void 0 !== ie ? ie : [1, 1, 1]);
```

#### 48. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L512-L513` → after: `L512-L513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L512-L513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L512-L513) · [Before (L512-L513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L512-L513)

```diff
-         translation: Float64Array.from(null !== (GB = BB.translation) && void 0 !== GB ? GB : [0, 0, 0]),
-         rotation: Float64Array.from(null !== (YB = BB.rotation) && void 0 !== YB ? YB : [0, 0, 0, 1]),
+         translation: Float64Array.from(null !== (He = ee.translation) && void 0 !== He ? He : [0, 0, 0]),
+         rotation: Float64Array.from(null !== (ye = ee.rotation) && void 0 !== ye ? ye : [0, 0, 0, 1]),
```

#### 49. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L525` → after: `L525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L525) · [Before (L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L525)

```diff
-       return (0, KB.e)(DB, 0, YB, 0, GB, 0, QB), OB && (0, KB.o)(QB, OB, 0, QB), QB
+       return (0, De.b)(be, 0, ye, 0, He, 0, Me), ie && (0, De.k)(Me, ie, 0, Me), Me
```

#### 50. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L533` → after: `L533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L533) · [Before (L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L533)

```diff
-             if (this.parents.has(YB)) throw new mB.f(`/nodes/${OB}: Invalid recursive node hierarchy`);
+             if (this.parents.has(ye)) throw new Ae.i(`/nodes/${ie}: Invalid recursive node hierarchy`);
```

#### 51. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L539` → after: `L539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L539) · [Before (L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L539)

```diff
-                   name: OB ? `${TB(YB)}_primitive${BB.index}` : TB(YB),
+                   name: ie ? `${je(ye)}_primitive${ee.index}` : je(ye),
```

#### 52. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L554` → after: `L554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L554) · [Before (L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L554)

```diff
-           return null !== (OB = this.own.get(BB)) && void 0 !== OB ? OB : []
+           return null !== (ie = this.own.get(ee)) && void 0 !== ie ? ie : []
```

#### 53. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L569` → after: `L569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L569) · [Before (L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L569)

```diff
-         return null !== (OB = this.parents.get(BB)) && void 0 !== OB ? OB : null
+         return null !== (ie = this.parents.get(ee)) && void 0 !== ie ? ie : null
```

#### 54. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L585` → after: `L585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L585) · [Before (L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L585)

```diff
-         let YB = OO(BO(OB ? bB : {}), null);
+         let ye = ii(ei(ie ? se : {}), null);
```

#### 55. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L597` → after: `L597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L597) · [Before (L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L597)

```diff
-         return new Map(OB.map((BB => [BB.kind, (0, uB.i)(BB, GB)])))
+         return new Map(ie.map((ee => [ee.kind, (0, Pe.e)(ee, He)])))
```

#### 56. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L604` → after: `L604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L604) · [Before (L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L604)

```diff
-           return `data:${BB}${YB}#image${GB}`
+           return `data:${ee}${ye}#image${He}`
```

#### 57. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L644` → after: `L644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L644) · [Before (L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L644)

```diff
-             context: `/textures/${YB}`
+             context: `/textures/${ye}`
```

#### 58. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L650` → after: `L650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L650) · [Before (L650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L650)

```diff
-             coordinatesIndex: null !== (GB = null === DB || void 0 === DB ? void 0 : DB.texCoord) && void 0 !== GB ? GB : 0,
+             coordinatesIndex: null !== (He = null === be || void 0 === be ? void 0 : be.texCoord) && void 0 !== He ? He : 0,
```

#### 59. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L685` → after: `L685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L685) · [Before (L685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L685)

```diff
-             return "string" !== typeof OB ? OB : BB.url.startsWith("data:") ? (0, mB.k)(BB.url) : await (0, mB.m)(BB.url)
+             return "string" !== typeof ie ? ie : ee.url.startsWith("data:") ? (0, Ae.p)(ee.url) : await (0, Ae.s)(ee.url)
```

#### 60. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L692` → after: `L692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L692) · [Before (L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L692)

```diff
-             return !GB.startsWith("file:") && YB ? GB : `${GB}${OB()}/`
+             return !He.startsWith("file:") && ye ? He : `${He}${ie()}/`
```

#### 61. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L694` → after: `L694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L694) · [Before (L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L694)

```diff
-         return await QB(yB), OB.importedMeshesFiles && (OB.loadingPluginName = "Im", oB && OB.importedMeshesFiles.push(jB.url)), yB
+         return await Me(Fe), ie.importedMeshesFiles && (ie.loadingPluginName = "YV", Ke && ie.importedMeshesFiles.push(Ue.url)), Fe
```

#### 62. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L699-L701` → after: `L699-L701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L699-L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L699-L701) · [Before (L699-L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L699-L701)

```diff
-     var DO = GB(38169),
-       QO = GB(38049),
-       oO = GB(38573);
+     var bi = He(38314),
+       Mi = He(38171),
+       Ki = He(38729);
```

#### 63. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L707-L708` → after: `L707-L708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L707-L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L707-L708) · [Before (L707-L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L707-L708)

```diff
-         Xp: yB
-       } = (0, DO.c)();
+         rf: Fe
+       } = (0, bi.d)();
```

#### 64. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L713` → after: `L713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L713) · [Before (L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L713)

```diff
-       (0, QO.e)(BB) || (BB.geometry && BB.geometry.useBoundingInfoFromGeometry ? BB._updateBoundingInfo() : BB.refreshBoundingInfo(!0, !0))
+       (0, Mi.f)(ee) || (ee.geometry && ee.geometry.useBoundingInfoFromGeometry ? ee._updateBoundingInfo() : ee.refreshBoundingInfo(!0, !0))
```

#### 65. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L717` → after: `L717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L717) · [Before (L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L717)

```diff
-         this.eq = BB, this.decode = OB, this.bufferData = Promise.resolve(), this.viewData = new Map, this.viewBuffers = new Map, this.vertexBuffers = new Map, this.dracoGeometry = new Map
+         this.yp = ee, this.decode = ie, this.bufferData = Promise.resolve(), this.viewData = new Map, this.viewBuffers = new Map, this.vertexBuffers = new Map, this.dracoGeometry = new Map
```

#### 66. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L725` → after: `L725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L725) · [Before (L725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L725)

```diff
-         return OB || (OB = this.viewBytes(BB).then((BB => new((0, DO.c)().BP)(this.eq.Lp(), BB, !1))), this.viewBuffers.set(BB.index, OB)), OB
+         return ie || (ie = this.viewBytes(ee).then((ee => new((0, bi.d)().bR)(this.yp.Nf(), ee, !1))), this.viewBuffers.set(ee.index, ie)), ie
```

#### 67. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L731` → after: `L731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L731) · [Before (L731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L731)

```diff
-         } = OB, DB = `${BB.index}:${GB}`;
+         } = ie, be = `${ee.index}:${He}`;
```

#### 68. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L735` → after: `L735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L735) · [Before (L735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L735)

```diff
-           QB = oB ? this.viewBuffer(oB).then((BB => this.layoutVertexBuffer(BB, OB))) : Promise.resolve(YB).then((BB => new((0, DO.c)().VertexBuffer)(this.eq.Lp(), BB, GB, !1))), this.vertexBuffers.set(DB, QB)
+           Me = Ke ? this.viewBuffer(Ke).then((ee => this.layoutVertexBuffer(ee, ie))) : Promise.resolve(ye).then((ee => new((0, bi.d)().VertexBuffer)(this.yp.Nf(), ee, He, !1))), this.vertexBuffers.set(be, Me)
```

#### 69. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L748-L749` → after: `L748-L749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L748-L749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L748-L749) · [Before (L748-L749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L748-L749)

```diff
-         const yB = this.eq.Lp();
-         return new((0, DO.c)().VertexBuffer)(yB, BB, GB, !1, void 0, DB, void 0, YB, QB, oB, jB, !0, void 0, !0)
+         const Fe = this.yp.Nf();
+         return new((0, bi.d)().VertexBuffer)(Fe, ee, He, !1, void 0, be, void 0, ye, Me, Ke, Ue, !0, void 0, !0)
```

#### 70. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L752` → after: `L752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L752) · [Before (L752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L752)

```diff
-         const YB = (0, QO.e)(GB),
+         const ye = (0, Mi.f)(He),
```

#### 71. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L765` → after: `L765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L765) · [Before (L765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L765)

```diff
-               throw new mB.f(`${BB}: ${yB instanceof Error?yB.message:String(yB)}`)
+               throw new Ae.i(`${ee}: ${Fe instanceof Error?Fe.message:String(Fe)}`)
```

#### 72. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L770` → after: `L770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L770) · [Before (L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L770)

```diff
-               jB = new((0, DO.c)().MirroredGeometry)(GB.name, this.eq);
+               Ue = new((0, bi.d)().MirroredGeometry)(He.name, this.yp);
```

#### 73. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L778-L779` → after: `L778-L779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L778-L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L778-L779) · [Before (L778-L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L778-L779)

```diff
-         if (YB) return GB.isUnIndexed = !jB.indexData, GB.hasVertexAlpha = (0, oO.g)(OB), Promise.resolve(jB);
-         const yB = new((0, DO.c)().MirroredGeometry)(GB.name, this.eq),
+         if (ye) return He.isUnIndexed = !Ue.indexData, He.hasVertexAlpha = (0, Ki.f)(ie), Promise.resolve(Ue);
+         const Fe = new((0, bi.d)().MirroredGeometry)(He.name, this.yp),
```

#### 74. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L796` → after: `L796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L796) · [Before (L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L796)

```diff
-         return (0, oO.g)(OB) && (GB.hasVertexAlpha = !0), Promise.all(oB).then((() => (yB.link(jB), yB)))
+         return (0, Ki.f)(ie) && (He.hasVertexAlpha = !0), Promise.all(Ke).then((() => (Fe.link(Ue), Fe)))
```

#### 75. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L799-L805` → after: `L799-L805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L799-L805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L799-L805) · [Before (L799-L805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L799-L805)

```diff
-     var MO, PO = GB(37993),
-       zO = GB(37771),
-       lO = GB(38583),
-       pO = GB(37880),
-       qO = GB(37966),
-       ZO = GB(3088),
-       NO = GB(37928);
+     var oi, Ri = He(38112),
+       ki = He(37913),
+       qi = He(38743),
+       fi = He(38012),
+       Ti = He(38081),
+       Xi = He(2969),
+       zi = He(38049);
```

#### 76. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L810` → after: `L810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L810) · [Before (L810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L810)

```diff
-         YB = GB.Im = GB.Im || {};
+         ye = He.YV = He.YV || {};
```

#### 77. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L817` → after: `L817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L817) · [Before (L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L817)

```diff
-         (GB.Im = GB.Im || {}).extras = OB
+         (He.YV = He.YV || {}).extras = ie
```

#### 78. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L822` → after: `L822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L822) · [Before (L822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L822)

```diff
-       OB.position = BB.translation ? zO.Xp.FromArray(BB.translation) : zO.Xp.Zero(), OB.rotationQuaternion = BB.rotation ? zO.Quaternion.FromArray(BB.rotation) : zO.Quaternion.Identity(), OB.SP = BB.scale ? zO.Xp.FromArray(BB.scale) : zO.Xp.One()
+       ie.position = ee.translation ? ki.rf.FromArray(ee.translation) : ki.rf.Zero(), ie.rotationQuaternion = ee.rotation ? ki.Quaternion.FromArray(ee.rotation) : ki.Quaternion.Identity(), ie.wR = ee.scale ? ki.rf.FromArray(ee.scale) : ki.rf.One()
```

#### 79. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L826-L828` → after: `L826-L828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L826-L828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L826-L828) · [Before (L826-L828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L826-L828)

```diff
-         if (this.eq = BB, this.meshes = [], this.transformNodes = [], this.geometries = [], this.materials = [], this.textures = [], this.rootNodes = [], this.release = null, OB) {
-           const OB = BB.Lp(),
-             GB = BB.lF.add((() => {
+         if (this.yp = ee, this.meshes = [], this.transformNodes = [], this.geometries = [], this.materials = [], this.textures = [], this.rootNodes = [], this.release = null, ie) {
+           const ie = ee.Nf(),
+             He = ee.Bx.add((() => {
```

#### 80. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L831` → after: `L831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L831) · [Before (L831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L831)

```diff
-             YB = OB.ip.add((() => {
+             ye = ie.hf.add((() => {
```

#### 81. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L835` → after: `L835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L835) · [Before (L835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L835)

```diff
-             BB.lF.remove(GB), OB.ip.remove(YB)
+             ee.Bx.remove(He), ie.hf.remove(ye)
```

#### 82. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L845-L849` → after: `L845-L849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L845-L849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L845-L849) · [Before (L845-L849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L845-L849)

```diff
-           for (const BB of this.meshes) this.eq.UDB(BB);
-           for (const BB of this.materials) this.eq.addMaterial(BB);
-           for (const BB of this.geometries) this.eq.addGeometry(BB);
-           for (const BB of this.transformNodes) this.eq.addTransformNode(BB);
-           for (const BB of this.textures) this.eq.addTexture(BB)
+           for (const ee of this.meshes) this.yp.Nbe(ee);
+           for (const ee of this.materials) this.yp.addMaterial(ee);
+           for (const ee of this.geometries) this.yp.addGeometry(ee);
+           for (const ee of this.transformNodes) this.yp.addTransformNode(ee);
+           for (const ee of this.textures) this.yp.addTexture(ee)
```

#### 83. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L863` → after: `L863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L863) · [Before (L863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L863)

```diff
-         this.asset = BB, this.eq = OB, this.tree = GB, this.geometryData = DB, this.materials = QB, this.lite = oB, this.container = void 0, this.root = null, this.nodeObjects = new Map, this.nodePrimitives = new Map, this.materialData = new Map, this.container = YB ? GB : null
+         this.asset = ee, this.yp = ie, this.tree = He, this.geometryData = be, this.materials = Me, this.lite = Ke, this.container = void 0, this.root = null, this.nodeObjects = new Map, this.nodePrimitives = new Map, this.materialData = new Map, this.container = ye ? He : null
```

#### 84. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L867` → after: `L867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L867) · [Before (L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L867)

```diff
-         const OB = this.eq;
+         const ie = this.yp;
```

#### 85. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L877` → after: `L877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L877) · [Before (L877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L877)

```diff
-         return this.create((() => this.lite ? OB ? (0, lO.h)(this.lite, BB) : (0, lO.s)(this.lite, BB) : OB ? new((0, DO.c)().Mesh)(BB, this.eq) : new((0, DO.c)().TransformNode)(BB, this.eq)))
+         return this.create((() => this.lite ? ie ? (0, qi.f)(this.lite, ee) : (0, qi.r)(this.lite, ee) : ie ? new((0, bi.d)().Mesh)(ee, this.yp) : new((0, bi.d)().TransformNode)(ee, this.yp)))
```

#### 86. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L882` → after: `L882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L882) · [Before (L882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L882)

```diff
-         const OB = this.lite ? null : this.eq,
+         const ie = this.lite ? null : this.yp,
```

#### 87. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L896` → after: `L896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L896) · [Before (L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L896)

```diff
-         DB && (DB.Zk(!0), QB.meshes.push(DB), QB.rootNodes.push(DB));
+         be && (be.JY(!0), Me.meshes.push(be), Me.rootNodes.push(be));
```

#### 88. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L900` → after: `L900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L900) · [Before (L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L900)

```diff
-           for (const OB of null !== (oB = this.nodePrimitives.get(jB.index)) && void 0 !== oB ? oB : []) {
+           for (const ie of null !== (Ke = this.nodePrimitives.get(Ue.index)) && void 0 !== Ke ? Ke : []) {
```

#### 89. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L910` → after: `L910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L910) · [Before (L910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L910)

```diff
-         this.root = BB, BB.Zk(!1), this.eq.useRightHandedSystem || AO(bB, BB)
+         this.root = ee, ee.JY(!1), this.yp.useRightHandedSystem || gi(se, ee)
```

#### 90. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L920` → after: `L920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L920) · [Before (L920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L920)

```diff
-         const GB = `/nodes/${BB.index}`,
+         const He = `/nodes/${ee.index}`,
```

#### 91. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L923` → after: `L923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L923) · [Before (L923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L923)

```diff
-             if (RO(DB, GB), AO(BB, DB), BB.hasCamera && !this.eq.useRightHandedSystem) {
+             if (Bi(be, He), gi(ee, be), ee.hasCamera && !this.yp.useRightHandedSystem) {
```

#### 92. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L925` → after: `L925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L925) · [Before (L925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L925)

```diff
-                 SP: BB
+                 wR: ee
```

#### 93. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L941` → after: `L941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L941) · [Before (L941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L941)

```diff
-           YB.push(this.loadMesh(`/meshes/${OB.index}`, BB, OB, DB))
+           ye.push(this.loadMesh(`/meshes/${ie.index}`, ee, ie, be))
```

#### 94. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L944` → after: `L944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L944) · [Before (L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L944)

```diff
-           for (const GB of null !== (OB = this.nodePrimitives.get(BB.index)) && void 0 !== OB ? OB : []) {
+           for (const He of null !== (ie = this.nodePrimitives.get(ee.index)) && void 0 !== ie ? ie : []) {
```

#### 95. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L956` → after: `L956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L956) · [Before (L956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L956)

```diff
-           DB.push(this.loadPrimitive(`${BB}/primitives/${YB.index}`, QB, YB, (BB => {
+           be.push(this.loadPrimitive(`${ee}/primitives/${ye.index}`, Me, ye, (ee => {
```

#### 96. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L964` → after: `L964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L964) · [Before (L964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L964)

```diff
-           for (const OB of GB.primitives) DB.push(this.loadPrimitive(`${BB}/primitives/${OB.index}`, `${QB}_primitive${OB.index}`, OB, (BB => {
+           for (const ie of He.primitives) be.push(this.loadPrimitive(`${ee}/primitives/${ie.index}`, `${Me}_primitive${ie.index}`, ie, (ee => {
```

#### 97. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L974-L975` → after: `L974-L975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L974-L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L974-L975) · [Before (L974-L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L974-L975)

```diff
-         if (QB.sideOrientation = this.eq.useRightHandedSystem ? pO.d.CounterClockWiseSideOrientation : pO.d.ClockWiseSideOrientation, DB.push(this.geometryData.load(BB, GB, QB).then((BB => {
-             if ((0, QO.e)(QB)) {
+         if (Me.sideOrientation = this.yp.useRightHandedSystem ? fi.e.CounterClockWiseSideOrientation : fi.e.ClockWiseSideOrientation, be.push(this.geometryData.load(ee, He, Me).then((ee => {
+             if ((0, Mi.f)(Me)) {
```

#### 98. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L978` → after: `L978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L978) · [Before (L978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L978)

```diff
-               QB.replaceModel(YB, Int32Array.of(0, null !== (OB = null === (GB = YB.indexData) || void 0 === GB ? void 0 : GB.length) && void 0 !== OB ? OB : YB.vertexCount, 0, YB.vertexCount))
+               Me.replaceModel(ye, Int32Array.of(0, null !== (ie = null === (He = ye.indexData) || void 0 === He ? void 0 : He.length) && void 0 !== ie ? ie : ye.vertexCount, 0, ye.vertexCount))
```

#### 99. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L981` → after: `L981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L981) · [Before (L981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L981)

```diff
-           const BB = 0 === GB.mode ? pO.d.PointListDrawMode : pO.d.TriangleFillMode,
+           const ee = 0 === He.mode ? fi.e.PointListDrawMode : fi.e.TriangleFillMode,
```

#### 100. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L991` → after: `L991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L991) · [Before (L991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L991)

```diff
-         const DB = `${null!==(YB=null===BB||void 0===BB?void 0:BB.index)&&void 0!==YB?YB:"default"}:${OB}`;
+         const be = `${null!==(ye=null===ee||void 0===ee?void 0:ee.index)&&void 0!==ye?ye:"default"}:${ie}`;
```

#### 101. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L996` → after: `L996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L996) · [Before (L996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L996)

```diff
-         const GB = BB ? BB.name || `material${BB.index}` : "__GLTFLoader._default",
+         const He = ee ? ee.name || `material${ee.index}` : "__GLTFLoader._default",
```

#### 102. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L1003` → after: `L1003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L1003) · [Before (L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L1003)

```diff
-           const oB = (0, NO.c)({
+           const Ke = (0, zi.b)({
```

#### 103. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L1005` → after: `L1005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L1005) · [Before (L1005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L1005)

```diff
-             eq: this.eq,
+             yp: this.yp,
```

#### 104. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L1007` → after: `L1007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L1007) · [Before (L1007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L1007)

```diff
-               ...(0, oO.e)(this.asset, BB, YB, DB),
+               ...(0, Ki.b)(this.asset, ee, ye, be),
```

#### 105. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L1016` → after: `L1016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L1016) · [Before (L1016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L1016)

```diff
-           const OB = `/materials/${BB.index}`,
+           const ie = `/materials/${ee.index}`,
```

#### 106. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L1021` → after: `L1021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L1021) · [Before (L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L1021)

```diff
-             DB._parentContainer = this.container, DB.name = `${GB} (Base Color)`, RO(DB, `${OB}${BB.unlit?"":"/pbrMetallicRoughness"}/baseColorTexture`), this.tree.textures.push(DB), jB = (0, qO.q)(YB)
+             be._parentContainer = this.container, be.name = `${He} (Base Color)`, Bi(be, `${ie}${ee.unlit?"":"/pbrMetallicRoughness"}/baseColorTexture`), this.tree.textures.push(be), Ue = (0, Ti.u)(ye)
```

#### 107. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L1033` → after: `L1033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L1033) · [Before (L1033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L1033)

```diff
-       PO.f.dracoDecodes = VB.decodes, PO.f.dracoWorkersStarted = VB.workersStarted, PO.f.dracoMostWorkers = VB.mostWorkers
+       Ri.d.dracoDecodes = ge.decodes, Ri.d.dracoWorkersStarted = ge.workersStarted, Ri.d.dracoMostWorkers = ge.mostWorkers
```

#### 108. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L1040-L1041` → after: `L1040-L1041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1040-L1041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L1040-L1041) · [Before (L1040-L1041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L1040-L1041)

```diff
-           const JB = null === (jB = (0, ZO.g)()) || void 0 === jB ? void 0 : jB.UP,
-             MB = null !== JB && void 0 !== JB && JB.Dq && OB === JB.JF() ? JB : null,
+           const Je = null === (Ue = (0, Xi.h)()) || void 0 === Ue ? void 0 : Ue.PR,
+             oe = null !== Je && void 0 !== Je && Je.pT && ie === Je.Xx() ? Je : null,
```

#### 109. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L1043` → after: `L1043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L1043) · [Before (L1043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L1043)

```diff
-           return await YO(BB, OB, GB, DB, YB.e, (BB => (yB = new VO(OB, PB), new SO(BB, OB, yB, PB, new JO(OB, DB), oB, MB).load())), !QB), yB
+           return await yi(ee, ie, He, be, ye.d, (ee => (Fe = new Oi(ie, Re), new di(ee, ie, Fe, Re, new Ji(ie, be), Ke, oe).load())), !Me), Fe
```

#### 110. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L1051` → after: `L1051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L1051) · [Before (L1051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L1051)

```diff
-         return await YO(BB, OB, GB, dB, YB.e, (BB => DB(BB, new JO(OB, dB))))
+         return await yi(ee, ie, He, we, ye.d, (ee => be(ee, new Ji(ie, we))))
```

#### 111. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L1061` → after: `L1061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L1061) · [Before (L1061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L1061)

```diff
-   36856: BB => {
+   36938: ee => {
```

#### 112. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L1085-L1088` → after: `L1085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/230.js#L1085) · [Before (L1085-L1088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/230.js#L1085-L1088)

```diff
-   44657: (BB, OB, GB) => {
-     BB.exports = GB.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
-   },
-   44655: (BB, OB, GB) => {
+   44697: (ee, ie, He) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/231.js` (gw4e3a.937868ec → u88b9b.1969c480)

- **File**: `bundles/bloxd.io/chunks/js/231.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26)

#### 1. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/231.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/231.js#L4)

```diff
-   44661: (BB, OB, GB) => {
+   44710: (ee, ie, He) => {
```

#### 2. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/231.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/231.js#L8)

```diff
-     var YB = GB(36856),
+     var ye = He(36938),
```

#### 3. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L12` → after: `L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/231.js#L12) · [Before (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/231.js#L12)

```diff
-       return DB()('/*! For license information please see gw4e3a.procGen.worker.8cc73300.worker.js.LICENSE.txt */\n(()=>{var BB={62:BB=>{const OB="object"===typeof performance&&performance&&"function"===typeof performance.now?performance:Date,GB=()=>OB.now(),YB=BB=>BB===1/0||(BB= … [truncated]
+       return be()('/*! For license information please see u88b9b.procGen.worker.53b9ea78.worker.js.LICENSE.txt */\n(()=>{var ee={63:ee=>{const ie="object"===typeof performance&&performance&&"function"===typeof performance.now?performance:Date,He=()=>ie.now(),ye=ee=>ee===1/0||(ee= … [truncated]
```

#### 4. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L15` → after: `L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/231.js#L15) · [Before (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/231.js#L15)

```diff
-   36856: BB => {
+   36938: ee => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/232.js` (gw4e3a.937868ec → u88b9b.1969c480)

- **File**: `bundles/bloxd.io/chunks/js/232.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608)

#### 1. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/232.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/232.js#L4)

```diff
-   44682: (BB, OB, GB) => {
+   44738: (ee, ie, He) => {
```

#### 2. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/232.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/232.js#L8)

```diff
-     var YB = GB(36856),
+     var ye = He(36938),
```

#### 3. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L12` → after: `L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/232.js#L12) · [Before (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/232.js#L12)

```diff
-       return DB()('(()=>{var BB={13:(BB,OB,GB)=>{BB.exports=GB.p+"static/media/bloxd_wasm_bg.2d869609fdbc6beb838a.wasm"},15:(BB,OB,GB)=>{BB.exports=GB.p+"static/media/bloxd_wasm_textures_bg.a539253ec85e302f100c.wasm"},9:(BB,OB,GB)=>{BB.exports=GB.p+"static/media/zstdDecodeWorker. … [truncated]
+       return be()('(()=>{var ee={10:(ee,ie,He)=>{ee.exports=He.p+"static/media/zstdDecodeWorker.5838c4073820c3637cf2.js"},19:(ee,ie,He)=>{ee.exports=He.p+"static/media/bloxd_wasm_bg.79dbad279890d8558b9f.wasm"},24:(ee,ie,He)=>{ee.exports=He.p+"static/media/bloxd_wasm_textures_bg.6 … [truncated]
```

#### 4. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L15` → after: `L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/232.js#L15) · [Before (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/232.js#L15)

```diff
-   36856: BB => {
+   36938: ee => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/233.js` (gw4e3a.937868ec → u88b9b.1969c480)

- **File**: `bundles/bloxd.io/chunks/js/233.js` (148 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c)

#### 1. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/233.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/233.js#L4)

```diff
-   36948: (BB, OB, GB) => {
+   37049: (ee, ie, He) => {
```

#### 2. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L15` → after: `L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/233.js#L15) · [Before (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/233.js#L15)

```diff
-       e: () => DB,
+       c: () => be,
```
