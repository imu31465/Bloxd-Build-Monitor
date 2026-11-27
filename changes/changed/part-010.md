# Changed — Bundle Modifications Report (Part 010 / 126)

- **Updated at**: `2026-11-28T08:15 JST`
- **Part**: `10 / 126` (**420** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 009](part-009.md) · [Part 011 →](part-011.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/107.js` (4udp6d.2845de07 → fl4vv.bd3c59ce · continued)

- **File**: `bundles/bloxd.io/chunks/js/107.js` (977 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa)

#### 957. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16663` → after: `L16663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L16663) · [Before (L16663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L16663)

```diff
-           const RR = `${iR} ${fR} ${tR}`,
+           const rr = `${fr} ${Er} ${Wr}`,
```

#### 958. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16677` → after: `L16677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L16677) · [Before (L16677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L16677)

```diff
-     return tR.push(...uR.values()), tR.sort(((RR, JR) => RR.z0 - JR.z0 || RR.x0 - JR.x0)).map((RR => `x${ZR(RR.x0,RR.x1)} z${ZR(RR.z0,RR.z1)} ${RR.name}`))
+     return Wr.push(...ar.values()), Wr.sort(((rr, Sr) => rr.z0 - Sr.z0 || rr.x0 - Sr.x0)).map((rr => `x${jr(rr.x0,rr.x1)} z${jr(rr.z0,rr.z1)} ${rr.name}`))
```

#### 959. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16684-L16685` → after: `L16684-L16685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16684-L16685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L16684-L16685) · [Before (L16684-L16685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L16684-L16685)

```diff
-       VR = [`The chunk from ${RR.join(" ")} to ${iR.join(" ")}. Each line is one layer (y), with boxes of one block: x from-to, z from-to, then the block. Air is left out.`];
-     null !== tR && VR.push(`The player's feet are at ${tR.map(Math.floor).join(" ")}, ${fR?"in this chunk":"outside this chunk"}.`);
+       pr = [`The chunk from ${rr.join(" ")} to ${fr.join(" ")}. Each line is one layer (y), with boxes of one block: x from-to, z from-to, then the block. Air is left out.`];
+     null !== Wr && pr.push(`The player's feet are at ${Wr.map(Math.floor).join(" ")}, ${Er?"in this chunk":"outside this chunk"}.`);
```

#### 960. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16690` → after: `L16690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L16690) · [Before (L16690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L16690)

```diff
-       (null === uR || void 0 === uR ? void 0 : uR.boxes) === tR ? uR.to = yR : KR.push({
+       (null === ar || void 0 === ar ? void 0 : ar.boxes) === Wr ? ar.to = Zr : xr.push({
```

#### 961. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16700` → after: `L16700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L16700) · [Before (L16700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L16700)

```diff
-       const RR = `y${ZR(yR.from,yR.to)}: ${yR.boxes}`;
+       const rr = `y${jr(Zr.from,Zr.to)}: ${Zr.boxes}`;
```

#### 962. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16702` → after: `L16702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L16702) · [Before (L16702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L16702)

```diff
-         VR.push(`Cut short: the layers from y${yR.from} up aren't shown, as there are too many blocks.`);
+         pr.push(`Cut short: the layers from y${Zr.from} up aren't shown, as there are too many blocks.`);
```

#### 963. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16709` → after: `L16709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L16709) · [Before (L16709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L16709)

```diff
- }, 5710: (RR, JR, GR) => {
+ }, 5636: (rr, Sr, Qr) => {
```

#### 964. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16711-L16712` → after: `L16711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L16711) · [Before (L16711-L16712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L16711-L16712)

```diff
-     b: () => qR,
-     d: () => tR,
+     c: () => Ir,
```

#### 965. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16714-L16715` → after: `L16713-L16715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16713-L16715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L16713-L16715) · [Before (L16714-L16715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L16714-L16715)

```diff
-     j: () => ZR,
-     m: () => uR
+     i: () => fr,
+     l: () => jr,
+     o: () => ar
```

#### 966. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16717` → after: `L16717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L16717) · [Before (L16717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L16717)

```diff
-   var yR = GR(5707);
+   var Zr = Qr(5634);
```

#### 967. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16726` → after: `L16726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L16726) · [Before (L16726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L16726)

```diff
-     ZR = `${yR.l} lists every page of the Bloxd Code API docs.`;
+     jr = `${Zr.l} lists every page of the Bloxd Code API docs.`;
```

#### 968. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16729` → after: `L16729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L16729) · [Before (L16729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L16729)

```diff
-     return `${RR.url}${encodeURIComponent(JR.toWellFormed())}`
+     return `${rr.url}${encodeURIComponent(Sr.toWellFormed())}`
```

#### 969. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16742` → after: `L16742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L16742) · [Before (L16742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L16742)

```diff
- }, 5707: (RR, JR, GR) => {
+ }, 5634: (rr, Sr, Qr) => {
```

#### 970. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16745-L16746` → after: `L16745-L16746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16745-L16746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L16745-L16746) · [Before (L16745-L16746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L16745-L16746)

```diff
-     g: () => iR,
-     i: () => uR,
+     f: () => fr,
+     j: () => ar,
```

#### 971. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16749-L16751` → after: `L16749-L16750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16749-L16750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L16749-L16750) · [Before (L16749-L16751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L16749-L16751)

```diff
-     n: () => LR,
-     o: () => VR,
-     q: () => KR,
+     p: () => hr,
+     r: () => pr,
```

#### 972. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16753` → after: `L16752-L16753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16752-L16753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L16752-L16753) · [Before (L16753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L16753)

```diff
-     t: () => rR
+     w: () => tr,
+     x: () => Nr
```

#### 973. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16755` → after: `L16755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L16755) · [Before (L16755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L16755)

```diff
-   var yR = GR(1746);
+   var Zr = Qr(1722);
```

#### 974. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16758` → after: `L16758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L16758) · [Before (L16758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L16758)

```diff
-     ZR = `${yR.c}${uR}`,
+     jr = `${Zr.c}${ar}`,
```

#### 975. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16767` → after: `L16767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L16767) · [Before (L16767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L16767)

```diff
-     return `/docs/${fR(RR)}.md`
+     return `/docs/${Er(rr)}.md`
```

#### 976. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16771` → after: `L16771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L16771) · [Before (L16771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L16771)

```diff
-     return `/docs/${fR(RR)}/${JR+1}.md`
+     return `/docs/${Er(rr)}/${Sr+1}.md`
```

#### 977. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16792` → after: `L16792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L16792) · [Before (L16792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L16792)

```diff
-     return `/docsHtml/${fR(RR)}.html`
+     return `/docsHtml/${Er(rr)}.html`
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/108.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/108.js` (52 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141)

#### 1. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/108.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/108.js#L4)

```diff
-   44974: (RR, JR, GR) => {
+   45277: (rr, Sr, Qr) => {
```

#### 2. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L7-L8` → after: `L7-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L7-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/108.js#L7-L8) · [Before (L7-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/108.js#L7-L8)

```diff
-       DOCS_LLMS_FULL_TXT_PATH: () => oJ.g,
-       DOCS_LLMS_TXT_PATH: () => oJ.i,
+       DOCS_LLMS_FULL_TXT_PATH: () => CS.f,
+       DOCS_LLMS_TXT_PATH: () => CS.j,
```

#### 3. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L11-L12` → after: `L11-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L11-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/108.js#L11-L12) · [Before (L11-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/108.js#L11-L12)

```diff
-       allGamemodeSettings: () => yR.b,
-       arcadeModeStaticConfig: () => aR.d,
+       allGamemodeSettings: () => Zr.c,
+       arcadeModeStaticConfig: () => tr.e,
```

#### 4. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L14` → after: `L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/108.js#L14) · [Before (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/108.js#L14)

```diff
-       backroomsStaticConfig: () => yJ.e,
+       backroomsStaticConfig: () => ZS.d,
```

#### 5. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L16-L17` → after: `L16-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L16-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/108.js#L16-L17) · [Before (L16-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/108.js#L16-L17)

```diff
-       bedwarsStaticConfig: () => vR.e,
-       bloxdAggregatorConfig: () => qR.d,
+       bedwarsStaticConfig: () => Xr.d,
+       bloxdAggregatorConfig: () => Ir.b,
```

#### 6. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L19-L20` → after: `L19-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L19-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/108.js#L19-L20) · [Before (L19-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/108.js#L19-L20)

```diff
-       bloxdStagingAggregatorConfig: () => fR.e,
-       bridgeBattleStaticConfig: () => mR.b,
+       bloxdStagingAggregatorConfig: () => Er.d,
+       bridgeBattleStaticConfig: () => Ar.d,
```

#### 7. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L22-L23` → after: `L22-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/108.js#L22-L23) · [Before (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/108.js#L22-L23)

```diff
-       classicStaticConfig: () => NR.b,
-       clutchStaticConfig: () => kR.d,
+       classicStaticConfig: () => qr.e,
+       clutchStaticConfig: () => br.e,
```

#### 8. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L25-L29` → after: `L25-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L25-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/108.js#L25-L29) · [Before (L25-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/108.js#L25-L29)

```diff
-       containmentBreachStaticConfig: () => RJ.b,
-       cookingStaticConfig: () => jR.c,
-       coolMathGamesAggregatorConfig: () => VR.e,
-       coreDefendersStaticConfig: () => hR.b,
-       crazyGamesNinetyNineNightsBundle: () => KR.c,
+       containmentBreachStaticConfig: () => rS.e,
+       cookingStaticConfig: () => wr.d,
+       coolMathGamesAggregatorConfig: () => pr.b,
+       coreDefendersStaticConfig: () => ur.d,
+       crazyGamesNinetyNineNightsBundle: () => xr.d,
```

#### 9. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L31` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/108.js#L31) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/108.js#L31)

```diff
-       customGameSettings: () => yR.d,
+       customGameSettings: () => Zr.f,
```

#### 10. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L33` → after: `L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/108.js#L33) · [Before (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/108.js#L33)

```diff
-       customGamesListingPath: () => DJ.g,
+       customGamesListingPath: () => RS.e,
```

#### 11. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L35-L39` → after: `L35-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L35-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/108.js#L35-L39) · [Before (L35-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/108.js#L35-L39)

```diff
-       docsPageHtmlPath: () => oJ.n,
-       docsPageMarkdownPath: () => oJ.o,
-       docsPagePartPath: () => oJ.q,
-       docsPageTitles: () => lJ.b,
-       docsSitePageMarkdownPath: () => oJ.s,
+       docsPageHtmlPath: () => CS.p,
+       docsPageMarkdownPath: () => CS.r,
+       docsPagePartPath: () => CS.s,
+       docsPageTitles: () => vS.c,
+       docsSitePageMarkdownPath: () => CS.w,
```

#### 12. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L43-L49` → after: `L43-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L43-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/108.js#L43-L49) · [Before (L43-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/108.js#L43-L49)

```diff
-       eatToGrowStaticConfig: () => GJ.b,
-       escapeHtml: () => lJ.d,
-       eviltowerStaticConfig: () => UR.c,
-       exampleStaticConfig: () => LR.b,
-       extractionStaticConfig: () => dR.c,
-       firstPartyStudioGames: () => uR.b,
-       fishingStaticConfig: () => eR.d,
+       eatToGrowStaticConfig: () => QS.d,
+       escapeHtml: () => vS.g,
+       eviltowerStaticConfig: () => Yr.d,
+       exampleStaticConfig: () => hr.d,
+       extractionStaticConfig: () => cr.d,
+       firstPartyStudioGames: () => ar.d,
+       fishingStaticConfig: () => Ur.e,
```

#### 13. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L53-L54` → after: `L53-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L53-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/108.js#L53-L54) · [Before (L53-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/108.js#L53-L54)

```diff
-       getConfiguredGameImagePaths: () => BJ.c,
-       getCustomGameFromPath: () => lJ.e,
+       getConfiguredGameImagePaths: () => TS.b,
+       getCustomGameFromPath: () => vS.k,
```

#### 14. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L56-L77` → after: `L56-L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L56-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/108.js#L56-L77) · [Before (L56-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/108.js#L56-L77)

```diff
-       getCustomGamePagePath: () => lJ.i,
-       getCustomGamePageRedirectPath: () => lJ.l,
-       getCustomGameSchematicIdFromPath: () => lJ.p,
-       getCustomGameThumbnailCandidates: () => WJ.c,
-       getCustomGameThumbnailUrls: () => WJ.e,
-       getCustomGameUrlIdFromPath: () => lJ.t,
-       getFirstPartyStudioGameName: () => uR.e,
-       getGameCanonicalUrl: () => lJ.v,
-       getGameImageBlurhash: () => AJ.e,
-       getGameImagePath: () => BJ.g,
-       getGameImageVariantPath: () => MJ.n,
-       getGameImageVariantSource: () => CJ.b,
-       getGameImageVariants: () => CJ.e,
-       getGamePage: () => lJ.E,
-       getGamePageContentHeadings: () => pJ.h,
-       getGamePagePath: () => lJ.z,
- ... (6 more removed lines; see GitHub link above)
+       getCustomGamePagePath: () => vS.o,
+       getCustomGamePageRedirectPath: () => vS.r,
+       getCustomGameSchematicIdFromPath: () => vS.v,
+       getCustomGameThumbnailCandidates: () => nS.e,
+       getCustomGameThumbnailUrls: () => nS.g,
+       getCustomGameUrlIdFromPath: () => vS.x,
+       getFirstPartyStudioGameName: () => ar.g,
+       getGameCanonicalUrl: () => vS.y,
+       getGameImageBlurhash: () => eS.b,
+       getGameImagePath: () => TS.c,
+       getGameImageVariantPath: () => BS.j,
+       getGameImageVariantSource: () => KS.e,
+       getGameImageVariants: () => KS.g,
+       getGamePage: () => vS.G,
+       getGamePageContentHeadings: () => OS.f,
+       getGamePagePath: () => vS.A,
+ ... (6 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L79` → after: `L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/108.js#L79) · [Before (L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/108.js#L79)

```diff
-       getPathSeoMetadata: () => lJ.U,
+       getPathSeoMetadata: () => vS.S,
```

#### 16. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L81-L84` → after: `L81-L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L81-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/108.js#L81-L84) · [Before (L81-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/108.js#L81-L84)

```diff
-       getPlayerSeoMetadata: () => lJ.Y,
-       getSeoMetaTagAttributes: () => lJ.$,
-       getShaderPackPolicy: () => yR.h,
-       getShaderPackSeoMetadata: () => lJ.bb,
+       getPlayerSeoMetadata: () => vS.V,
+       getSeoMetaTagAttributes: () => vS.Z,
+       getShaderPackPolicy: () => Zr.j,
+       getShaderPackSeoMetadata: () => vS._,
```

#### 17. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L86-L88` → after: `L86-L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L86-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/108.js#L86-L88) · [Before (L86-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/108.js#L86-L88)

```diff
-       getStaticPageSeoMetadata: () => lJ.fb,
-       getUndescribedPageSeoMetadata: () => lJ.gb,
-       goalRushStaticConfig: () => TR.c,
+       getStaticPageSeoMetadata: () => vS.ab,
+       getUndescribedPageSeoMetadata: () => vS.bb,
+       goalRushStaticConfig: () => dr.d,
```

#### 18. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L91` → after: `L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/108.js#L91) · [Before (L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/108.js#L91)

```diff
-       heroesvbrainrotsStaticConfig: () => sR.b,
+       heroesvbrainrotsStaticConfig: () => sr.c,
```

#### 19. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L94` → after: `L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/108.js#L94) · [Before (L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/108.js#L94)

```diff
-       isGameIndexed: () => lJ.kb,
+       isGameIndexed: () => vS.eb,
```

#### 20. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L98-L99` → after: `L98-L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L98-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/108.js#L98-L99) · [Before (L98-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/108.js#L98-L99)

```diff
-       luckyBattlegroundsStaticConfig: () => pR.e,
-       luckyTowersStaticConfig: () => lR.e,
+       luckyBattlegroundsStaticConfig: () => Or.c,
+       luckyTowersStaticConfig: () => vr.c,
```

#### 21. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L102-L105` → after: `L102-L105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L102-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/108.js#L102-L105) · [Before (L102-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/108.js#L102-L105)

```diff
-       ninetyNineNightsStaticConfig: () => cR.e,
-       normaliseFirstPartyGameNames: () => uR.f,
-       oneBlockStaticConfig: () => WR.c,
-       paintballStaticConfig: () => HR.b,
+       ninetyNineNightsStaticConfig: () => Mr.b,
+       normaliseFirstPartyGameNames: () => ar.j,
+       oneBlockStaticConfig: () => nr.d,
+       paintballStaticConfig: () => gr.e,
```

#### 22. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L109` → after: `L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/108.js#L109) · [Before (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/108.js#L109)

```diff
-       plotsStaticConfig: () => XR.c,
+       plotsStaticConfig: () => yr.b,
```

#### 23. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L111` → after: `L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/108.js#L111) · [Before (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/108.js#L111)

```diff
-       pvpCivStaticConfig: () => JJ.b,
+       pvpCivStaticConfig: () => SS.d,
```

#### 24. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L113-L114` → after: `L113-L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L113-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/108.js#L113-L114) · [Before (L113-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/108.js#L113-L114)

```diff
-       rankedStaticConfig: () => zR.b,
-       readDocsPageMarkdownPath: () => oJ.t,
+       rankedStaticConfig: () => Vr.e,
+       readDocsPageMarkdownPath: () => CS.x,
```

#### 25. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L116-L118` → after: `L116-L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L116-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/108.js#L116-L118) · [Before (L116-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/108.js#L116-L118)

```diff
-       renderSeoMetaTags: () => lJ.nb,
-       rocketParkourStaticConfig: () => IR.e,
-       rocketSpleefStaticConfig: () => BR.b,
+       renderSeoMetaTags: () => vS.gb,
+       rocketParkourStaticConfig: () => kr.c,
+       rocketSpleefStaticConfig: () => Tr.e,
```

#### 26. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L120-L123` → after: `L120-L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L120-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/108.js#L120-L123) · [Before (L120-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/108.js#L120-L123)

```diff
-       shootingStaticConfig: () => rR.e,
-       simonSaysStaticConfig: () => ER.e,
-       skyIslandsStaticConfig: () => FR.e,
-       skyblockStaticConfig: () => AR.b,
+       shootingStaticConfig: () => Nr.b,
+       simonSaysStaticConfig: () => Fr.d,
+       skyIslandsStaticConfig: () => Dr.b,
+       skyblockStaticConfig: () => er.d,
```

#### 27. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L126` → after: `L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/108.js#L126) · [Before (L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/108.js#L126)

```diff
-       testGymStaticConfig: () => nR.c,
+       testGymStaticConfig: () => zr.d,
```

#### 28. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L128` → after: `L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/108.js#L128) · [Before (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/108.js#L128)

```diff
-       tsunamiStaticConfig: () => SR.b,
+       tsunamiStaticConfig: () => ir.d,
```

#### 29. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L132` → after: `L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/108.js#L132) · [Before (L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/108.js#L132)

```diff
-     var yR = GR(858);
+     var Zr = Qr(868);
```

#### 30. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L136-L140` → after: `L136-L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L136-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/108.js#L136-L143) · [Before (L136-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/108.js#L136-L140)

```diff
-       return null !== (JR = null === (GR = (0, yR.k)(RR)) || void 0 === GR ? void 0 : GR.defaultListedVariation) && void 0 !== JR ? JR : RR
-     }
-     var uR = GR(1120),
-       ZR = GR(1149),
-       qR = GR(851),
+       return null !== (Sr = null === (Qr = (0, Zr.k)(rr)) || void 0 === Qr ? void 0 : Qr.defaultListedVariation) && void 0 !== Sr ? Sr : rr
+     }
+     var ar = Qr(1121),
+       jr = Qr(1144),
+       Ir = Qr(863),
+       fr = Qr(848),
+       Er = Qr(855),
+       pr = Qr(843),
```

#### 31. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L142-L145` → after: `L145-L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L145-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/108.js#L145-L147) · [Before (L142-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/108.js#L142-L145)

```diff
-       fR = GR(844),
-       VR = GR(828),
-       KR = GR(826),
-       wR = GR(866),
+       mr = Qr(876),
+       Nr = Qr(901),
+       Ur = Qr(883),
```

#### 32. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L147-L151` → after: `L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/108.js#L149) · [Before (L147-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/108.js#L147-L151)

```diff
-       eR = GR(873),
-       aR = GR(875),
-       LR = GR(878),
-       nR = GR(880),
-       UR = GR(891),
+       hr = Qr(897),
```

#### 33. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L153-L154` → after: `L151-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L151-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/108.js#L151-L154) · [Before (L153-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/108.js#L153-L154)

```diff
-       AR = GR(908),
-       CR = GR(923),
+       Yr = Qr(905),
+       nr = Qr(914),
+       er = Qr(918),
+       Kr = Qr(929),
```

#### 34. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L156-L162` → after: `L156-L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L156-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/108.js#L156-L163) · [Before (L156-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/108.js#L156-L162)

```diff
-       MR = GR(934),
-       BR = GR(941),
-       lR = GR(944),
-       pR = GR(947),
-       gR = GR(953),
-       bR = GR(957),
-       vR = GR(966),
+       Br = Qr(935),
+       Tr = Qr(938),
+       vr = Qr(942),
+       Or = Qr(949),
+       Lr = Qr(951),
+       lr = Qr(956),
+       Xr = Qr(961),
+       Pr = Qr(968),
```

#### 35. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L165-L176` → after: `L166-L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L166-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/108.js#L166-L179) · [Before (L165-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/108.js#L165-L176)

```diff
-       NR = GR(982),
-       DR = GR(989),
-       HR = GR(997),
-       oR = GR(1003),
-       cR = GR(1010),
-       PR = GR(1015),
-       IR = GR(1024),
-       mR = GR(1030),
-       zR = GR(1037),
-       SR = GR(1044),
-       jR = GR(1049),
-       dR = GR(1054),
+       Rr = Qr(983),
+       gr = Qr(988),
+       Cr = Qr(996),
+       Mr = Qr(1002),
+       Gr = Qr(1009),
+       kr = Qr(1014),
+       Ar = Qr(1022),
+       Vr = Qr(1031),
+       ir = Qr(1033),
+       wr = Qr(1039),
+       cr = Qr(1043),
+       Fr = Qr(1045),
+       or = Qr(1051),
+       br = Qr(1055),
```

#### 36. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L178-L184` → after: `L181-L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L181-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/108.js#L181-L185) · [Before (L178-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/108.js#L178-L184)

```diff
-       YR = GR(1069),
-       kR = GR(1071),
-       QR = GR(1073),
-       FR = GR(1082),
-       TR = GR(1090),
-       sR = GR(1093),
-       hR = GR(1095),
+       Dr = Qr(1070),
+       dr = Qr(1075),
+       sr = Qr(1080),
+       ur = Qr(1088),
+       rS = Qr(1097),
```

#### 37. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L186-L188` → after: `L187-L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L187-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/108.js#L187-L188) · [Before (L186-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/108.js#L186-L188)

```diff
-       JJ = GR(1106),
-       GJ = GR(1112),
-       yJ = GR(1118);
+       QS = Qr(1109),
+       ZS = Qr(1113);
```

#### 38. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L404-L411` → after: `L404-L411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L404-L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/108.js#L404-L411) · [Before (L404-L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/108.js#L404-L411)

```diff
-     var WJ = GR(1736),
-       AJ = GR(1742),
-       CJ = GR(4862),
-       XJ = GR(4875),
-       MJ = GR(1740),
-       BJ = GR(4868),
-       lJ = GR(1701),
-       pJ = GR(1757);
+     var nS = Qr(1705),
+       eS = Qr(1719),
+       KS = Qr(4764),
+       yS = Qr(4774),
+       BS = Qr(1710),
+       TS = Qr(4767),
+       vS = Qr(1675),
+       OS = Qr(1729);
```

#### 39. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L414-L433` → after: `L414-L433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L414-L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/108.js#L414-L433) · [Before (L414-L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/108.js#L414-L433)

```diff
-       return `<${RR}><h2>${(0,lJ.d)(JR)}</h2>${GR}</${RR}>`
-     }
- 
-     function bJ(RR) {
-       return RR.map((RR => `<p>${(0,lJ.d)(RR)}</p>`)).join("")
-     }
- 
-     function vJ(RR) {
-       return `<ul>${RR.map((RR=>`<li>${RR}</li>`)).join("")}</ul>`
-     }
- 
-     function OJ(RR) {
-       return vJ(RR.map(lJ.d))
-     }
- 
-     function xJ(RR, JR) {
- ... (4 more removed lines; see GitHub link above)
+       return `<${rr}><h2>${(0,vS.g)(Sr)}</h2>${Qr}</${rr}>`
+     }
+ 
+     function lS(rr) {
+       return rr.map((rr => `<p>${(0,vS.g)(rr)}</p>`)).join("")
+     }
+ 
+     function XS(rr) {
+       return `<ul>${rr.map((rr=>`<li>${rr}</li>`)).join("")}</ul>`
+     }
+ 
+     function PS(rr) {
+       return XS(rr.map(vS.g))
+     }
+ 
+     function HS(rr, Sr) {
+ ... (4 more added lines; see GitHub link above)
```

#### 40. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L437` → after: `L437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/108.js#L437) · [Before (L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/108.js#L437)

```diff
-       const GR = (0, lJ.E)(RR);
+       const Qr = (0, vS.G)(rr);
```

#### 41. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L440` → after: `L440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/108.js#L440) · [Before (L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/108.js#L440)

```diff
-         tR = (0, pJ.h)(yR),
+         Wr = (0, OS.f)(Zr),
```

#### 42. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L446` → after: `L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/108.js#L446) · [Before (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/108.js#L446)

```diff
-           return `<h3>${(0,lJ.d)(JR)}</h3><p>${(0,lJ.d)(GR)}</p>`
+           return `<h3>${(0,vS.g)(Sr)}</h3><p>${(0,vS.g)(Qr)}</p>`
```

#### 43. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L448-L452` → after: `L448-L452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L448-L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/108.js#L448-L452) · [Before (L448-L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/108.js#L448-L452)

```diff
-       return `<main style="position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%)"><article>${[`<header><h1>${(0,lJ.d)(yR.name)}</h1><p>${(0,lJ.d)(yR.description)}</p></header>`,gJ("section",tR.whatIs,bJ(yR.whatIs)),gJ("section",tR.howToPlay,bJ(yR.howToPlay)) … [truncated]
-     }
-     var DJ = GR(1753),
-       HJ = GR(1746),
-       oJ = GR(5707)
+       return `<main style="position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%)"><article>${[`<header><h1>${(0,vS.g)(Zr.name)}</h1><p>${(0,vS.g)(Zr.description)}</p></header>`,LS("section",Wr.whatIs,lS(Zr.whatIs)),LS("section",Wr.howToPlay,lS(Zr.howToPlay)) … [truncated]
+     }
+     var RS = Qr(1724),
+       gS = Qr(1722),
+       CS = Qr(5634)
```

#### 44. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L454` → after: `L454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/108.js#L454) · [Before (L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/108.js#L454)

```diff
-   5707: (RR, JR, GR) => {
+   5634: (rr, Sr, Qr) => {
```

#### 45. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L457-L458` → after: `L457-L458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L457-L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/108.js#L457-L458) · [Before (L457-L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/108.js#L457-L458)

```diff
-       g: () => iR,
-       i: () => uR,
+       f: () => fr,
+       j: () => ar,
```

#### 46. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L461-L463` → after: `L461-L462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L461-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/108.js#L461-L462) · [Before (L461-L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/108.js#L461-L463)

```diff
-       n: () => LR,
-       o: () => VR,
-       q: () => KR,
+       p: () => hr,
+       r: () => pr,
```

#### 47. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L465` → after: `L464-L465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L464-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/108.js#L464-L465) · [Before (L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/108.js#L465)

```diff
-       t: () => rR
+       w: () => tr,
+       x: () => Nr
```

#### 48. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L467` → after: `L467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/108.js#L467) · [Before (L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/108.js#L467)

```diff
-     var yR = GR(1746);
+     var Zr = Qr(1722);
```

#### 49. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L470` → after: `L470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/108.js#L470) · [Before (L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/108.js#L470)

```diff
-       ZR = `${yR.c}${uR}`,
+       jr = `${Zr.c}${ar}`,
```

#### 50. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L479` → after: `L479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/108.js#L479) · [Before (L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/108.js#L479)

```diff
-       return `/docs/${fR(RR)}.md`
+       return `/docs/${Er(rr)}.md`
```

#### 51. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L483` → after: `L483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/108.js#L483) · [Before (L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/108.js#L483)

```diff
-       return `/docs/${fR(RR)}/${JR+1}.md`
+       return `/docs/${Er(rr)}/${Sr+1}.md`
```

#### 52. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L504` → after: `L504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/108.js#L504) · [Before (L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/108.js#L504)

```diff
-       return `/docsHtml/${fR(RR)}.html`
+       return `/docsHtml/${Er(rr)}.html`
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/109.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/109.js` (4047 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df)

#### 1. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1` → after: `L1`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1) · [Before (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1)

```diff
- /*! For license information please see 4udp6d.109.d37641c8.chunk.js.LICENSE.txt */
+ /*! For license information please see fl4vv.109.c679e9d6.chunk.js.LICENSE.txt */
```

#### 2. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5` → after: `L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5) · [Before (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5)

```diff
-   40908: () => {
+   41252: () => {
```

#### 3. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L8)

```diff
-   40918: (RR, JR, GR) => {
+   41268: (rr, Sr, Qr) => {
```

#### 4. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L21` → after: `L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L21) · [Before (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L21)

```diff
-       aR = GR(5850).e,
+       tr = Qr(5782).e,
```

#### 5. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L36` → after: `L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L36) · [Before (L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L36)

```diff
-         var wR = 0 === fR ? GR : 1 === fR ? yR : tR;
+         var mr = 0 === Er ? Qr : 1 === Er ? Zr : Wr;
```

#### 6. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L46-L47` → after: `L46-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L46-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L46-L47) · [Before (L46-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L46-L47)

```diff
-           var AR = LR > 0 ? (VR[fR] - ZR[fR]) / LR : (KR[fR] - uR[fR]) / LR,
-             CR = LR > 0 ? (KR[fR] - iR - uR[fR]) / LR : (VR[fR] + iR - ZR[fR]) / LR;
+           var er = hr > 0 ? (pr[Er] - jr[Er]) / hr : (xr[Er] - ar[Er]) / hr,
+             Kr = hr > 0 ? (xr[Er] - fr - ar[Er]) / hr : (pr[Er] + fr - jr[Er]) / hr;
```

#### 7. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L74-L75` → after: `L74-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L74-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L74-L75) · [Before (L74-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L74-L75)

```diff
-         var AR = rR ? nR + 1 - aR : aR - nR;
-         AR < 0 && (AR = 0), iR[wR] = WR < 1 / 0 ? WR * AR : 1 / 0
+         var er = Nr ? zr + 1 - tr : tr - zr;
+         er < 0 && (er = 0), fr[mr] = nr < 1 / 0 ? nr * er : 1 / 0
```

#### 8. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L156-L157` → after: `L156-L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L156-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L156-L157) · [Before (L156-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L156-L157)

```diff
-           var mR = bR ? aR : 1;
-           if (oR > 0 ? KR[XR] = Math.round(KR[XR] * mR) / mR : fR[XR] = Math.round(fR[XR] * mR) / mR, JR(AR, XR, oR, cR)) return AR;
+           var Ar = lr ? tr : 1;
+           if (Cr > 0 ? xr[yr] = Math.round(xr[yr] * Ar) / Ar : Er[yr] = Math.round(Er[yr] * Ar) / Ar, Sr(er, yr, Cr, Mr)) return er;
```

#### 9. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L186` → after: `L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L186) · [Before (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L186)

```diff
-   40978: (RR, JR, GR) => {
+   41324: (rr, Sr, Qr) => {
```

#### 10. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L188` → after: `L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L188) · [Before (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L188)

```diff
-       c: () => iR,
+       b: () => fr,
```

#### 11. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L190` → after: `L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L190) · [Before (L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L190)

```diff
-       i: () => tR
+       j: () => Wr
```

#### 12. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L199` → after: `L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L199) · [Before (L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L199)

```diff
-       const JR = (null !== RR && void 0 !== RR ? RR : "").match(/-?\d+(?:\.\d+)?/g);
+       const Sr = (null !== rr && void 0 !== rr ? rr : "").match(/-?\d+(?:\.\d+)?/g);
```

#### 13. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L204` → after: `L204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L204) · [Before (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L204)

```diff
-       return RR === JR ? String(RR) : `${RR}-${JR}`
+       return rr === Sr ? String(rr) : `${rr}-${Sr}`
```

#### 14. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L218` → after: `L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L218) · [Before (L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L218)

```diff
-             const RR = `${iR} ${fR} ${tR}`,
+             const rr = `${fr} ${Er} ${Wr}`,
```

#### 15. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L232` → after: `L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L232) · [Before (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L232)

```diff
-       return tR.push(...uR.values()), tR.sort(((RR, JR) => RR.z0 - JR.z0 || RR.x0 - JR.x0)).map((RR => `x${ZR(RR.x0,RR.x1)} z${ZR(RR.z0,RR.z1)} ${RR.name}`))
+       return Wr.push(...ar.values()), Wr.sort(((rr, Sr) => rr.z0 - Sr.z0 || rr.x0 - Sr.x0)).map((rr => `x${jr(rr.x0,rr.x1)} z${jr(rr.z0,rr.z1)} ${rr.name}`))
```

#### 16. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L239-L240` → after: `L239-L240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L239-L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L239-L240) · [Before (L239-L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L239-L240)

```diff
-         VR = [`The chunk from ${RR.join(" ")} to ${iR.join(" ")}. Each line is one layer (y), with boxes of one block: x from-to, z from-to, then the block. Air is left out.`];
-       null !== tR && VR.push(`The player's feet are at ${tR.map(Math.floor).join(" ")}, ${fR?"in this chunk":"outside this chunk"}.`);
+         pr = [`The chunk from ${rr.join(" ")} to ${fr.join(" ")}. Each line is one layer (y), with boxes of one block: x from-to, z from-to, then the block. Air is left out.`];
+       null !== Wr && pr.push(`The player's feet are at ${Wr.map(Math.floor).join(" ")}, ${Er?"in this chunk":"outside this chunk"}.`);
```

#### 17. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L245` → after: `L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L245) · [Before (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L245)

```diff
-         (null === uR || void 0 === uR ? void 0 : uR.boxes) === tR ? uR.to = yR : KR.push({
+         (null === ar || void 0 === ar ? void 0 : ar.boxes) === Wr ? ar.to = Zr : xr.push({
```

#### 18. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L255` → after: `L255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L255) · [Before (L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L255)

```diff
-         const RR = `y${ZR(yR.from,yR.to)}: ${yR.boxes}`;
+         const rr = `y${jr(Zr.from,Zr.to)}: ${Zr.boxes}`;
```

#### 19. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L257` → after: `L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L257) · [Before (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L257)

```diff
-           VR.push(`Cut short: the layers from y${yR.from} up aren't shown, as there are too many blocks.`);
+           pr.push(`Cut short: the layers from y${Zr.from} up aren't shown, as there are too many blocks.`);
```

#### 20. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L265` → after: `L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L265) · [Before (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L265)

```diff
-   40983: (RR, JR, GR) => {
+   41333: (rr, Sr, Qr) => {
```

#### 21. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L267-L268` → after: `L267-L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L267-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L267-L268) · [Before (L267-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L267-L268)

```diff
-       b: () => yR,
-       e: () => tR
+       e: () => Zr,
+       f: () => Wr
```

#### 22. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L273` → after: `L273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L273) · [Before (L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L273)

```diff
-   40530: (RR, JR, GR) => {
+   40828: (rr, Sr, Qr) => {
```

#### 23. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L275` → after: `L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L275) · [Before (L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L275)

```diff
-       e: () => vR
+       c: () => Xr
```

#### 24. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L277-L280` → after: `L277-L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L277-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L277-L280) · [Before (L277-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L277-L280)

```diff
-     var yR = GR(1963),
-       tR = GR(1493),
-       uR = GR(66),
-       ZR = GR(1163),
+     var Zr = Qr(1904),
+       Wr = Qr(1475),
+       ar = Qr(72),
+       jr = Qr(1155),
```

#### 25. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L282-L283` → after: `L282-L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L282-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L282-L283) · [Before (L282-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L282-L283)

```diff
-       iR = GR(1590),
-       fR = GR(103);
+       fr = Qr(1576),
+       Er = Qr(109);
```

#### 26. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L288` → after: `L288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L288) · [Before (L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L288)

```diff
-       return "webm" === RR ? VR : KR
+       return "webm" === rr ? pr : xr
```

#### 27. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L300` → after: `L300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L300) · [Before (L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L300)

```diff
-     var aR = GR(1378);
+     var tr = Qr(1338);
```

#### 28. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L369` → after: `L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L369) · [Before (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L369)

```diff
-             children: `Your device does not support exporting. Try recording with an external software like ${RR}.`
+             children: `Your device does not support exporting. Try recording with an external software like ${rr}.`
```

#### 29. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L372` → after: `L372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L372) · [Before (L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L372)

```diff
-             children: (0, aR.jsx)(iR.M, {
+             children: (0, tr.jsx)(fr.L, {
```

#### 30. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L444` → after: `L444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L444) · [Before (L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L444)

```diff
-           children: [(0, aR.jsx)(iR.n, {
+           children: [(0, tr.jsx)(fr.p, {
```

#### 31. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L454` → after: `L454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L454) · [Before (L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L454)

```diff
-           }), (0, aR.jsx)(iR.M, {
+           }), (0, tr.jsx)(fr.L, {
```

#### 32. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L464-L466` → after: `L464-L466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L464-L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L464-L466) · [Before (L464-L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L464-L466)

```diff
-     var AR = GR(5742),
-       CR = GR(38112),
-       XR = GR(38116);
+     var er = Qr(5681),
+       Kr = Qr(38462),
+       yr = Qr(38464);
```

#### 33. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L471` → after: `L471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L471) · [Before (L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L471)

```diff
-         const RR = (0, XR.e)();
+         const rr = (0, yr.c)();
```

#### 34. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L476` → after: `L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L476) · [Before (L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L476)

```diff
-           of CR.h)
+           of Kr.e)
```

#### 35. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L505` → after: `L505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L505) · [Before (L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L505)

```diff
-     var pR = GR(40333);
+     var Or = Qr(40646);
```

#### 36. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L513` → after: `L513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L513) · [Before (L513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L513)

```diff
-       if ((0, pR.b)() || gR) return;
+       if ((0, Or.e)() || Lr) return;
```

#### 37. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L555` → after: `L555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L555) · [Before (L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L555)

```diff
-       const VR = null !== (JR = null === (GR = uR.startFailure) || void 0 === GR ? void 0 : GR.call(uR)) && void 0 !== JR ? JR : null;
+       const pr = null !== (Sr = null === (Qr = ar.startFailure) || void 0 === Qr ? void 0 : Qr.call(ar)) && void 0 !== Sr ? Sr : null;
```

#### 38. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L561` → after: `L561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L561) · [Before (L561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L561)

```diff
-           return !(0, pR.b)() && ((0, pR.f)(!0), RR.holdInput(!0), !0)
+           return !(0, Or.e)() && ((0, Or.f)(!0), rr.holdInput(!0), !0)
```

#### 39. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L565` → after: `L565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L565) · [Before (L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L565)

```diff
-         KR = await lR(ZR.includeUi, (() => uR.canvas()), uR.lH)
+         xr = await vr(jr.includeUi, (() => ar.canvas()), ar.pC)
```

#### 40. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L578` → after: `L578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L578) · [Before (L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L578)

```diff
-         eR = uR.playbackSpeed(), uR.closeViewer(), uR.setPlaybackSpeed(1), uR.pause(), uR.seekToTick(null !== qR && void 0 !== qR ? qR : 0);
+         Ur = ar.playbackSpeed(), ar.closeViewer(), ar.setPlaybackSpeed(1), ar.pause(), ar.seekToTick(null !== Ir && void 0 !== Ir ? Ir : 0);
```

#### 41. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L586` → after: `L586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L586) · [Before (L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L586)

```diff
-           return null !== GR && void 0 !== GR ? GR : null
+           return null !== Qr && void 0 !== Qr ? Qr : null
```

#### 42. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L593` → after: `L593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L593) · [Before (L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L593)

```diff
-           if (!JR) throw new Error(`No MediaRecorder mime type available for ${RR}`);
+           if (!Sr) throw new Error(`No MediaRecorder mime type available for ${rr}`);
```

#### 43. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L636` → after: `L636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L636) · [Before (L636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L636)

```diff
-         const VR = null !== (XR = null === (vR = uR.playbackFailure) || void 0 === vR ? void 0 : vR.call(uR)) && void 0 !== XR ? XR : null;
+         const pr = null !== (yr = null === (Xr = ar.playbackFailure) || void 0 === Xr ? void 0 : Xr.call(ar)) && void 0 !== yr ? yr : null;
```

#### 44. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L639` → after: `L639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L639) · [Before (L639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L639)

```diff
-           subtitle: `${VR} Nothing was saved.`
+           subtitle: `${pr} Nothing was saved.`
```

#### 45. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L644` → after: `L644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L644) · [Before (L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L644)

```diff
-         aR.size > 0 ? (0, yR.e)(aR, function(RR, JR) {
+         tr.size > 0 ? (0, Zr.c)(tr, function(rr, Sr) {
```

#### 46. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L648-L649` → after: `L648-L649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L648-L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L648-L649) · [Before (L648-L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L648-L649)

```diff
-           if (RR) return `${RR.replace(/\.bloxdreplay$/i,"")}.${GR}`;
-           return `bloxd-replay-${Date.now()}.${GR}`
+           if (rr) return `${rr.replace(/\.bloxdreplay$/i,"")}.${Qr}`;
+           return `bloxd-replay-${Date.now()}.${Qr}`
```

#### 47. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L682` → after: `L682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L682) · [Before (L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L682)

```diff
-   5736: (RR, JR, GR) => {
+   5675: (rr, Sr, Qr) => {
```

#### 48. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L684-L685` → after: `L684-L685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L684-L685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L684-L685) · [Before (L684-L685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L684-L685)

```diff
-       c: () => VR,
-       d: () => KR
+       e: () => pr,
+       h: () => xr
```

#### 49. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L687-L688` → after: `L687-L688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L687-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L687-L688) · [Before (L687-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L687-L688)

```diff
-     var yR = GR(5742),
-       tR = GR(25);
+     var Zr = Qr(5681),
+       Wr = Qr(26);
```

#### 50. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L745` → after: `L745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L745) · [Before (L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L745)

```diff
-       if (!uR || !ZR || !tR.d.get("soundOnFromAd")) return () => {};
+       if (!ar || !jr || !Wr.c.get("soundOnFromAd")) return () => {};
```

#### 51. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L747` → after: `L747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L747) · [Before (L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L747)

```diff
-       return null === (GR = qR._autoResume) || void 0 === GR || GR.call(qR), VR(uR, ZR, RR, JR, tR.d.get("soundVolume"), (() => {
+       return null === (Qr = Ir._autoResume) || void 0 === Qr || Qr.call(Ir), pr(ar, jr, rr, Sr, Wr.c.get("soundVolume"), (() => {
```

#### 52. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L753` → after: `L753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L753) · [Before (L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L753)

```diff
-   37431: (RR, JR, GR) => {
+   37811: (rr, Sr, Qr) => {
```

#### 53. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L761-L764` → after: `L761-L764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L761-L764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L761-L764) · [Before (L761-L764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L761-L764)

```diff
-     var yR = GR(5685),
-       tR = GR(3960),
-       uR = GR(2102);
-     const ZR = new Map(Object.entries(yR.m).map((RR => {
+     var Zr = Qr(5617),
+       Wr = Qr(3909),
+       ar = Qr(2049);
+     const jr = new Map(Object.entries(Zr.k).map((rr => {
```

#### 54. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L770` → after: `L770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L770) · [Before (L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L770)

```diff
-       return (0, uR.y)(RR).toFixed(1)
+       return (0, ar.B)(rr).toFixed(1)
```

#### 55. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L774` → after: `L774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L774) · [Before (L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L774)

```diff
-       return `camera set by ${ZR.get(RR[JR+1])}: heading ${`${qR(RR[JR+2])} -> ${qR(RR[JR+4])}`} deg, pitch ${`${qR(RR[JR+3])} -> ${qR(RR[JR+5])}`} deg, at ${RR[JR].toFixed(1)} ms`
+       return `camera set by ${jr.get(rr[Sr+1])}: heading ${`${Ir(rr[Sr+2])} -> ${Ir(rr[Sr+4])}`} deg, pitch ${`${Ir(rr[Sr+3])} -> ${Ir(rr[Sr+5])}`} deg, at ${rr[Sr].toFixed(1)} ms`
```

#### 56. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L776` → after: `L776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L776) · [Before (L776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L776)

```diff
-     var fR = GR(37433);
+     var Er = Qr(37815);
```

#### 57. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L788` → after: `L788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L788) · [Before (L788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L788)

```diff
-         this.frames = 0, this.looked = 0, this.idle = 0, this.xH = 0, this.pastLimit = 0, this.lockSkips = 0, this.lL = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakR … [truncated]
+         this.frames = 0, this.looked = 0, this.idle = 0, this.tC = 0, this.pastLimit = 0, this.lockSkips = 0, this.Xh = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakR … [truncated]
```

#### 58. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L791` → after: `L791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L791) · [Before (L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L791)

```diff
-         return this.events > 0 || 0 !== this.raw[0] || 0 !== this.raw[1] || this.lockSkips > 0 || this.xH > 0 || this.dropped > 0 || this.cameraSets > 0
+         return this.events > 0 || 0 !== this.raw[0] || 0 !== this.raw[1] || this.lockSkips > 0 || this.tC > 0 || this.dropped > 0 || this.cameraSets > 0
```

#### 59. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L794` → after: `L794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L794) · [Before (L794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L794)

```diff
-         return this.xH > 0 || this.pastLimit > 0 || this.bigEvents > 0 || this.dropped > 0 || this.cameraSets > 0
+         return this.tC > 0 || this.pastLimit > 0 || this.bigEvents > 0 || this.dropped > 0 || this.cameraSets > 0
```

#### 60. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L800` → after: `L800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L800) · [Before (L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L800)

```diff
-         this.topicOn = (0, tR.n)("look"), this.remote = (0, tR.p)(), this.tally = new rR, this.takes = null, this.started = !1, this.record = function(JR) {
+         this.topicOn = (0, Wr.p)("look"), this.remote = (0, Wr.t)(), this.tally = new Nr, this.takes = null, this.started = !1, this.record = function(Sr) {
```

#### 61. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L802` → after: `L802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L802) · [Before (L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L802)

```diff
-           if (fR.o.step(JR, GR), !RR.topicOn) return;
+           if (Er.k.step(Sr, Qr), !rr.topicOn) return;
```

#### 62. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L815` → after: `L815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L815) · [Before (L815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L815)

```diff
-             case fR.l.idle:
+             case Er.h.idle:
```

#### 63. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L817-L820` → after: `L817-L820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L817-L820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L817-L820) · [Before (L817-L820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L817-L820)

```diff
-             case fR.l.lL:
-               return void LR.lL++;
-             case fR.l.IH:
-               return LR.lockSkips++, void(0 === uR && 0 === ZR || RR.outlier(`lock skip dropped raw (${KR(uR)}, ${KR(ZR)}) at ${wR(yR)} ms`))
+             case Er.h.Xh:
+               return void hr.Xh++;
+             case Er.h.YC:
+               return hr.lockSkips++, void(0 === ar && 0 === jr || rr.outlier(`lock skip dropped raw (${xr(ar)}, ${xr(jr)}) at ${mr(Zr)} ms`))
```

#### 64. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L824-L825` → after: `L824-L825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L824-L825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L824-L825) · [Before (L824-L825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L824-L825)

```diff
-             UR = `raw (${KR(uR)}, ${KR(ZR)}) over ${wR(tR)} ms, limit ${KR(aR)}, filter v (${rR.toFixed(3)}, ${eR.toFixed(3)}) px/ms, at ${wR(yR)} ms`;
-           VR === fR.l.xH ? (LR.xH++, RR.outlier(`spike put right: ${UR} -> turned (${KR(qR)}, ${KR(iR)})`)) : nR ? (LR.pastLimit++, RR.outlier(`kept past limit: ${UR}`)) : tR > 50 && (LR.longFrames++, RR.remote || RR.outlier(`long frame: ${UR}, turned in full`))
+             Yr = `raw (${xr(ar)}, ${xr(jr)}) over ${mr(Wr)} ms, limit ${xr(tr)}, filter v (${Nr.toFixed(3)}, ${Ur.toFixed(3)}) px/ms, at ${mr(Zr)} ms`;
+           pr === Er.h.tC ? (hr.tC++, rr.outlier(`spike put right: ${Yr} -> turned (${xr(Ir)}, ${xr(fr)})`)) : zr ? (hr.pastLimit++, rr.outlier(`kept past limit: ${Yr}`)) : Wr > 50 && (hr.longFrames++, rr.remote || rr.outlier(`long frame: ${Yr}, turned in full`))
```

#### 65. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L828` → after: `L828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L828) · [Before (L828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L828)

```diff
-           if (fR.o.mouseMove(RR, JR), !this.topicOn) return;
+           if (Er.k.mouseMove(rr, Sr), !this.topicOn) return;
```

#### 66. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L836` → after: `L836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L836) · [Before (L836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L836)

```diff
-           GR.eventMax = Math.max(GR.eventMax, uR), uR >= 200 && (GR.bigEvents++, this.eventOutlier(`big mousemove (${yR}, ${tR}) at ${wR(RR.timeStamp)} ms, lock ${JR?"Qq":"free"}`))
+           Qr.eventMax = Math.max(Qr.eventMax, ar), ar >= 200 && (Qr.bigEvents++, this.eventOutlier(`big mousemove (${Zr}, ${Wr}) at ${mr(rr.timeStamp)} ms, lock ${Sr?"wI":"free"}`))
```

#### 67. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L839` → after: `L839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L839) · [Before (L839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L839)

```diff
-           RR ? fR.o.lockGained() : fR.o.change(fR.e.lockLost), this.topicOn && (0, tR.k)("look", `pointer lock ${RR?`gained (${RR.tagName.toLowerCase()})`:"lost"} at ${wR(performance.now())} ms`)
+           rr ? Er.k.lockGained() : Er.k.change(Er.d.lockLost), this.topicOn && (0, Wr.l)("look", `pointer lock ${rr?`gained (${rr.tagName.toLowerCase()})`:"lost"} at ${mr(performance.now())} ms`)
```

#### 68. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L841` → after: `L841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L841) · [Before (L841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L841)

```diff
-           fR.o.change(fR.e.lockError), this.topicOn && (0, tR.k)("look", `pointer lock request failed at ${wR(performance.now())} ms`)
+           Er.k.change(Er.d.lockError), this.topicOn && (0, Wr.l)("look", `pointer lock request failed at ${mr(performance.now())} ms`)
```

#### 69. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L843` → after: `L843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L843) · [Before (L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L843)

```diff
-           fR.o.change("hidden" === document.visibilityState ? fR.e.hidden : fR.e.visible), this.topicOn && (0, tR.k)("look", `page ${document.visibilityState} at ${wR(performance.now())} ms`)
+           Er.k.change("hidden" === document.visibilityState ? Er.d.hidden : Er.d.visible), this.topicOn && (0, Wr.l)("look", `page ${document.visibilityState} at ${mr(performance.now())} ms`)
```

#### 70. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L845` → after: `L845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L845) · [Before (L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L845)

```diff
-           fR.o.change(fR.e.focus)
+           Er.k.change(Er.d.focus)
```

#### 71. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L847` → after: `L847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L847) · [Before (L847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L847)

```diff
-           fR.o.change(fR.e.blur)
+           Er.k.change(Er.d.blur)
```

#### 72. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L853-L854` → after: `L853-L854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L853-L854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L853-L854) · [Before (L853-L854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L853-L854)

```diff
-             GR = [`${RR.frames} frames (${RR.looked} looked, ${RR.idle} idle${"wasm"===fR.o.client?`, ${RR.lL} carried`:""})`, `dt avg ${wR(JR)} min ${wR(RR.dtMin)} max ${wR(RR.dtMax)}, ${RR.longFrames} long`, `${RR.events} mousemoves (max ${KR(RR.eventMax)} px, ${RR.bigEvents} b … [truncated]
-           RR.dropped > 0 && GR.push(`${RR.dropped} doubled spike copies dropped`), RR.cameraSets > 0 && GR.push(`${RR.cameraSets} camera sets`), RR.cameraSetsLost > 0 && GR.push(`${RR.cameraSetsLost} camera set records lost`), RR.lost > 0 && GR.push(`${RR.lost} records lost`), RR … [truncated]
+             Qr = [`${rr.frames} frames (${rr.looked} looked, ${rr.idle} idle${"wasm"===Er.k.client?`, ${rr.Xh} carried`:""})`, `dt avg ${mr(Sr)} min ${mr(rr.dtMin)} max ${mr(rr.dtMax)}, ${rr.longFrames} long`, `${rr.events} mousemoves (max ${xr(rr.eventMax)} px, ${rr.bigEvents} b … [truncated]
+           rr.dropped > 0 && Qr.push(`${rr.dropped} doubled spike copies dropped`), rr.cameraSets > 0 && Qr.push(`${rr.cameraSets} camera sets`), rr.cameraSetsLost > 0 && Qr.push(`${rr.cameraSetsLost} camera set records lost`), rr.lost > 0 && Qr.push(`${rr.lost} records lost`), rr … [truncated]
```

#### 73. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L858` → after: `L858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L858) · [Before (L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L858)

```diff
-         if (fR.o.start(RR, null !== document.pointerLockElement), this.takes = JR, this.topicOn) {
+         if (Er.k.start(rr, null !== document.pointerLockElement), this.takes = Sr, this.topicOn) {
```

#### 74. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L862` → after: `L862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L862) · [Before (L862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L862)

```diff
-           (0, tR.k)("look", `start: ${RR} client, dpr ${window.devicePixelRatio}, screen ${JR.width}x${JR.height}, pointer lock ${document.pointerLockElement?"Qq":"free"}`)
+           (0, Wr.l)("look", `start: ${rr} client, dpr ${window.devicePixelRatio}, screen ${Sr.width}x${Sr.height}, pointer lock ${document.pointerLockElement?"wI":"free"}`)
```

#### 75. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L867` → after: `L867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L867) · [Before (L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L867)

```diff
-         }), window.addEventListener("focus", this.onFocus), window.addEventListener("blur", this.onBlur), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychang … [truncated]
+         }), window.addEventListener("focus", this.onFocus), window.addEventListener("blur", this.onBlur), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychang … [truncated]
```

#### 76. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L871` → after: `L871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L871) · [Before (L871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L871)

```diff
-         JR.outliers >= 20 ? JR.suppressed++ : (JR.outliers++, (0, tR.k)("look", RR))
+         Sr.outliers >= 20 ? Sr.suppressed++ : (Sr.outliers++, (0, Wr.l)("look", rr))
```

#### 77. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L875` → after: `L875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L875) · [Before (L875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L875)

```diff
-         JR.eventLines >= 10 ? JR.suppressed++ : (JR.eventLines++, (0, tR.k)("look", RR))
+         Sr.eventLines >= 10 ? Sr.suppressed++ : (Sr.eventLines++, (0, Wr.l)("look", rr))
```

#### 78. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L881-L882` → after: `L881-L882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L881-L882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L881-L882) · [Before (L881-L882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L881-L882)

```diff
-           this.counted(fR.e.stepsLost, RR[0]), this.counted(fR.e.droppedCopies, RR[1]);
-           for (let JR = VR; JR + fR.g <= RR.length; JR += fR.g) this.record(RR, JR)
+           this.counted(Er.d.stepsLost, rr[0]), this.counted(Er.d.droppedCopies, rr[1]);
+           for (let Sr = pr; Sr + Er.e <= rr.length; Sr += Er.e) this.record(rr, Sr)
```

#### 79. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L885-L887` → after: `L885-L887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L885-L887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L885-L887) · [Before (L885-L887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L885-L887)

```diff
-         if (JR.length >= yR.b) {
-           this.counted(fR.e.cameraSetsLost, JR[0]);
-           for (let RR = yR.b; RR + yR.e <= JR.length; RR += yR.e) fR.o.cameraSet(JR, RR), this.topicOn && (this.tally.cameraSets++, this.outlier(iR(JR, RR)))
+         if (Sr.length >= Zr.e) {
+           this.counted(Er.d.cameraSetsLost, Sr[0]);
+           for (let rr = Zr.e; rr + Zr.i <= Sr.length; rr += Zr.i) Er.k.cameraSet(Sr, rr), this.topicOn && (this.tally.cameraSets++, this.outlier(fr(Sr, rr)))
```

#### 80. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L891` → after: `L891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L891) · [Before (L891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L891)

```diff
-         this.counted(fR.e.droppedCopies, 1)
+         this.counted(Er.d.droppedCopies, 1)
```

#### 81. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L895` → after: `L895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L895) · [Before (L895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L895)

```diff
-         if (fR.o.change(RR, JR), !this.topicOn) return;
+         if (Er.k.change(rr, Sr), !this.topicOn) return;
```

#### 82. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L897` → after: `L897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L897) · [Before (L897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L897)

```diff
-         RR === fR.e.droppedCopies ? GR.dropped += JR : RR === fR.e.stepsLost ? GR.lost += JR : GR.cameraSetsLost += JR
+         rr === Er.d.droppedCopies ? Qr.dropped += Sr : rr === Er.d.stepsLost ? Qr.lost += Sr : Qr.cameraSetsLost += Sr
```

#### 83. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L925-L926` → after: `L925-L926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L925-L926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L925-L926) · [Before (L925-L926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L925-L926)

```diff
-       } = await GR.e(35).then((() => GR(35016)));
-       await yR, fR.o.save({
+       } = await Qr.e(35).then((() => Qr(35322)));
+       await Zr, Er.k.save({
```

#### 84. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L932` → after: `L932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L932) · [Before (L932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L932)

```diff
-   40951: (RR, JR, GR) => {
+   41296: (rr, Sr, Qr) => {
```

#### 85. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L934` → after: `L934-L935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L934-L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L934-L935) · [Before (L934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L934)

```diff
-       e: () => rR,
+       d: () => Nr,
+       f: () => tr,
```

#### 86. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L936-L937` → after: `L937-L938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L937-L938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L937-L938) · [Before (L936-L937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L936-L937)

```diff
-       l: () => fR,
-       n: () => KR,
+       j: () => xr,
+       m: () => mr,
```

#### 87. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L941-L942` → after: `L941-L942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L941-L942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L941-L942) · [Before (L941-L942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L941-L942)

```diff
-       v: () => VR,
-       z: () => LR
+       u: () => pr,
+       v: () => hr
```

#### 88. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L944-L946` → after: `L944-L946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L944-L946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L944-L946) · [Before (L944-L946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L944-L946)

```diff
-     var yR = GR(2163),
-       tR = GR(32),
-       uR = GR(2170);
+     var Zr = Qr(2114),
+       Wr = Qr(34),
+       ar = Qr(2119);
```

#### 89. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L950-L953` → after: `L950-L953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L950-L953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L950-L953) · [Before (L950-L953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L950-L953)

```diff
-           health: null !== (RR = yR.c.get("_health")) && void 0 !== RR ? RR : null,
-           maxHealth: null !== (JR = yR.c.get("_totalMaxHealth")) && void 0 !== JR ? JR : null,
-           shield: null !== (GR = yR.c.get("_shield")) && void 0 !== GR ? GR : null,
-           maxShield: null !== (tR = yR.c.get("maxShield")) && void 0 !== tR ? tR : null
+           health: null !== (rr = Zr.d.get("_health")) && void 0 !== rr ? rr : null,
+           maxHealth: null !== (Sr = Zr.d.get("_totalMaxHealth")) && void 0 !== Sr ? Sr : null,
+           shield: null !== (Qr = Zr.d.get("_shield")) && void 0 !== Qr ? Qr : null,
+           maxShield: null !== (Wr = Zr.d.get("maxShield")) && void 0 !== Wr ? Wr : null
```

#### 90. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L975` → after: `L975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L975) · [Before (L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L975)

```diff
-       return null !== (RR = yR.c.get("_aura")) && void 0 !== RR ? RR : null
+       return null !== (rr = Zr.d.get("_aura")) && void 0 !== rr ? rr : null
```

#### 91. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L980` → after: `L980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L980) · [Before (L980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L980)

```diff
-         watch: JR => (0, tR.q)("shotPlayer", (GR => {
+         watch: Sr => (0, Wr.j)("shotPlayer", (Qr => {
```

#### 92. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L997` → after: `L997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L997) · [Before (L997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L997)

```diff
-       return (0, uR.d)("chat", (JR => {
+       return (0, ar.c)("chat", (Sr => {
```

#### 93. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1006-L1007` → after: `L1006-L1007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1006-L1007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1006-L1007) · [Before (L1006-L1007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1006-L1007)

```diff
-           serverChatMsgId: null !== GR && void 0 !== GR ? GR : null,
-           worldCodeLineId: null !== yR && void 0 !== yR ? yR : null,
+           serverChatMsgId: null !== Qr && void 0 !== Qr ? Qr : null,
+           worldCodeLineId: null !== Zr && void 0 !== Zr ? Zr : null,
```

#### 94. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1014` → after: `L1014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1014) · [Before (L1014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1014)

```diff
-     const wR = (0, uR.d)("chatRemoved");
+     const mr = (0, ar.c)("chatRemoved");
```

#### 95. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1028` → after: `L1028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1028) · [Before (L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1028)

```diff
-         translationKey: `touchKeys:${RR}`
+         translationKey: `touchKeys:${rr}`
```

#### 96. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1049` → after: `L1049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1049) · [Before (L1049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1049)

```diff
-   39897: (RR, JR, GR) => {
+   40226: (rr, Sr, Qr) => {
```

#### 97. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1055-L1056` → after: `L1055-L1056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1055-L1056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1055-L1056) · [Before (L1055-L1056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1055-L1056)

```diff
-       BloxdWasmFetchError: () => eZ.d,
-       BloxdWasmHttpError: () => eZ.f,
+       BloxdWasmFetchError: () => Nj.b,
+       BloxdWasmHttpError: () => Nj.e,
```

#### 98. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1058` → after: `L1058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1058) · [Before (L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1058)

```diff
-       BloxdWasmTimeoutError: () => eZ.h,
+       BloxdWasmTimeoutError: () => Nj.i,
```

#### 99. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1060-L1063` → after: `L1060-L1063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1060-L1063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1060-L1063) · [Before (L1060-L1063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1060-L1063)

```diff
-       PROMISE_HOOK_CODES: () => aZ.d,
-       RETRY_DELAYS_MS: () => eZ.q,
-       STALL_TIMEOUT_MS: () => eZ.r,
-       WASM_HOOKS_ENFORCED: () => WZ.d,
+       PROMISE_HOOK_CODES: () => Uj.b,
+       RETRY_DELAYS_MS: () => Nj.s,
+       STALL_TIMEOUT_MS: () => Nj.t,
+       WASM_HOOKS_ENFORCED: () => Yj.e,
```

#### 100. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1065-L1067` → after: `L1065-L1067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1065-L1067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1065-L1067) · [Before (L1065-L1067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1065-L1067)

```diff
-       bloxdTextureWasmUrl: () => nZ.c,
-       bloxdWasmCore: () => rZ.b,
-       compileBloxdTextureWasm: () => nZ.f,
+       bloxdTextureWasmUrl: () => hj.e,
+       bloxdWasmCore: () => mj.d,
+       compileBloxdTextureWasm: () => hj.i,
```

#### 101. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1069-L1081` → after: `L1069-L1081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1069-L1081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1069-L1081) · [Before (L1069-L1081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1069-L1081)

```diff
-       compileBloxdWasmBrowser: () => wZ.h,
-       describeBloxdWasmFailure: () => VZ.e,
-       fetchBytes: () => eZ.B,
-       getBloxdWasm: () => VZ.w,
-       getBloxdWasmAheadState: () => wZ.k,
-       getBloxdWasmBuild: () => VZ.f,
-       getBloxdWasmFailureReason: () => VZ.h,
-       getBloxdWasmFailureStage: () => VZ.i,
-       getBloxdWasmFailureStatus: () => VZ.j,
-       getBloxdWasmLoadCompile: () => wZ.o,
-       getBloxdWasmMemory: () => VZ.m,
-       getBloxdWasmModule: () => VZ.q,
-       getBloxdWasmStatus: () => VZ.s,
+       compileBloxdWasmBrowser: () => xj.i,
+       describeBloxdWasmFailure: () => Ej.g,
+       fetchBytes: () => Nj.K,
+       getBloxdWasm: () => Ej.z,
+       getBloxdWasmAheadState: () => xj.j,
+       getBloxdWasmBuild: () => Ej.h,
+       getBloxdWasmFailureReason: () => Ej.k,
+       getBloxdWasmFailureStage: () => Ej.l,
+       getBloxdWasmFailureStatus: () => Ej.o,
+       getBloxdWasmLoadCompile: () => xj.l,
+       getBloxdWasmMemory: () => Ej.s,
+       getBloxdWasmModule: () => Ej.u,
+       getBloxdWasmStatus: () => Ej.y,
```

#### 102. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1083-L1094` → after: `L1083-L1094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1083-L1094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1083-L1094) · [Before (L1083-L1094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1083-L1094)

```diff
-       getLastBloxdWasmPanic: () => VZ.x,
-       initBloxdWasmBrowser: () => rZ.f,
-       initBloxdWasmFromModule: () => rZ.g,
-       isBloxdWasmCompileFailureRetryable: () => VZ.B,
-       isBloxdWasmDownloadFailureRetryable: () => VZ.C,
-       isBloxdWasmLoadUnstreamed: () => eZ.H,
-       isBloxdWasmReady: () => VZ.F,
-       isEnforceableWasmReport: () => WZ.l,
-       isPromiseHookReport: () => WZ.r,
-       isPunishedWasmReport: () => WZ.u,
-       isRendererWasmReport: () => WZ.y,
-       isRetryableDownloadFailure: () => eZ.L,
+       getLastBloxdWasmPanic: () => Ej.B,
+       initBloxdWasmBrowser: () => mj.g,
+       initBloxdWasmFromModule: () => mj.j,
+       isBloxdWasmCompileFailureRetryable: () => Ej.M,
+       isBloxdWasmDownloadFailureRetryable: () => Ej.P,
+       isBloxdWasmLoadUnstreamed: () => Nj.O,
+       isBloxdWasmReady: () => Ej.R,
+       isEnforceableWasmReport: () => Yj.k,
+       isPromiseHookReport: () => Yj.s,
+       isPunishedWasmReport: () => Yj.w,
+       isRendererWasmReport: () => Yj.z,
+       isRetryableDownloadFailure: () => Nj.S,
```

#### 103. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1096-L1102` → after: `L1096-L1102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1096-L1102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1096-L1102) · [Before (L1096-L1102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1096-L1102)

```diff
-       loadBloxdWasmBrowser: () => wZ.r,
-       markBloxdWasmFailed: () => VZ.J,
-       noteBloxdRenderDebugHook: () => WZ.D,
-       onBloxdWasmFailed: () => VZ.M,
-       onBloxdWasmMemoryGrown: () => VZ.Q,
-       retryBloxdWasmBrowserLoad: () => wZ.s,
-       takeBloxdWasmRefusedAllocation: () => VZ.Z,
+       loadBloxdWasmBrowser: () => xj.n,
+       markBloxdWasmFailed: () => Ej.V,
+       noteBloxdRenderDebugHook: () => Yj.E,
+       onBloxdWasmFailed: () => Ej.Y,
+       onBloxdWasmMemoryGrown: () => Ej.Z,
+       retryBloxdWasmBrowserLoad: () => xj.q,
+       takeBloxdWasmRefusedAllocation: () => Ej.gb,
```

#### 104. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1104-L1107` → after: `L1104-L1107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1104-L1107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1104-L1107) · [Before (L1104-L1107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1104-L1107)

```diff
-       unprintedWasmReport: () => WZ.J,
-       wasmMemoryControl: () => KZ.b,
-       wasmView: () => UZ.g,
-       watchBloxdRenderer: () => WZ.K
+       unprintedWasmReport: () => Yj.L,
+       wasmMemoryControl: () => pj.d,
+       wasmView: () => zj.e,
+       watchBloxdRenderer: () => Yj.N
```

#### 105. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1109-L1113` → after: `L1109-L1113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1109-L1113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1109-L1113) · [Before (L1109-L1113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1109-L1113)

```diff
-     GR(37667);
-     var tR = GR(37325),
-       uR = GR(5886),
-       ZR = GR(37329),
-       qR = GR(377);
+     Qr(38045);
+     var Wr = Qr(37699),
+       ar = Qr(5817),
+       jr = Qr(37701),
+       Ir = Qr(379);
```

#### 106. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1123-L1131` → after: `L1123-L1131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1123-L1131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1123-L1131) · [Before (L1123-L1131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1123-L1131)

```diff
-     var fR = GR(39954),
-       VR = GR(5844),
-       KR = GR(216),
-       wR = GR(3178),
-       rR = GR(39291),
-       eR = GR(203),
-       aR = GR(4422),
-       LR = GR(32),
-       nR = GR(385),
+     var Er = Qr(40295),
+       pr = Qr(5779),
+       xr = Qr(215),
+       mr = Qr(3139),
+       Nr = Qr(39638),
+       Ur = Qr(208),
+       tr = Qr(4354),
+       hr = Qr(34),
+       zr = Qr(388),
```

#### 107. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1133-L1170` → after: `L1133-L1170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1133-L1170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1133-L1170) · [Before (L1133-L1170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1133-L1170)

```diff
-       WR = GR(39055),
-       AR = GR(38397),
-       CR = GR(38682),
-       XR = GR(38406),
-       MR = GR(39125),
-       BR = GR(38325),
-       lR = GR(39932),
-       pR = GR(38382),
-       gR = GR(38986),
-       bR = GR(38489),
-       vR = GR(38496),
-       OR = GR(39256),
-       xR = GR(39077),
-       NR = GR(39020),
-       DR = GR(103),
-       HR = GR(37338),
- ... (22 more removed lines; see GitHub link above)
+       nr = Qr(39402),
+       er = Qr(38754),
+       Kr = Qr(39030),
+       yr = Qr(38762),
+       Br = Qr(39460),
+       Tr = Qr(38677),
+       vr = Qr(40274),
+       Or = Qr(38736),
+       Lr = Qr(39324),
+       lr = Qr(38845),
+       Xr = Qr(38849),
+       Pr = Qr(39609),
+       Hr = Qr(39417),
+       qr = Qr(39365),
+       Rr = Qr(109),
+       gr = Qr(37710),
+ ... (22 more added lines; see GitHub link above)
```

#### 108. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1180` → after: `L1180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1180) · [Before (L1180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1180)

```diff
-               if (JR.has(uR.name.toLowerCase())) throw new Error(`Two nodes are named ${uR.name}`);
+               if (Sr.has(ar.name.toLowerCase())) throw new Error(`Two nodes are named ${ar.name}`);
```

#### 109. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1183` → after: `L1183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1183) · [Before (L1183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1183)

```diff
-                 if (uR.hasGeometry) throw new Error(`Mesh ${uR.name} has nodes under it: put them in a group beside it`);
+                 if (ar.hasGeometry) throw new Error(`Mesh ${ar.name} has nodes under it: put them in a group beside it`);
```

#### 110. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1221` → after: `L1221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1221) · [Before (L1221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1221)

```diff
-       return qJ(yR) < qJ(GR) ? yR : GR
+       return IS(Zr) < IS(Qr) ? Zr : Qr
```

#### 111. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1227` → after: `L1227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1227) · [Before (L1227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1227)

```diff
-         return RR + ("string" === typeof JR ? 1 : (void 0 === JR.collapsesTo ? 0 : 1) + qJ(null !== (GR = JR.children) && void 0 !== GR ? GR : []))
+         return rr + ("string" === typeof Sr ? 1 : (void 0 === Sr.collapsesTo ? 0 : 1) + IS(null !== (Qr = Sr.children) && void 0 !== Qr ? Qr : []))
```

#### 112. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1234` → after: `L1234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1234) · [Before (L1234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1234)

```diff
-           if ("sH" in RR && !0 === RR.sH) throw new Error(`${RR.name} is drawn as an instance of another mesh`);
+           if ("gC" in rr && !0 === rr.gC) throw new Error(`${rr.name} is drawn as an instance of another mesh`);
```

#### 113. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1239` → after: `L1239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1239) · [Before (L1239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1239)

```diff
-           return !yR(RR) || GR(RR).length > 0 ? null : `${null!==(JR=null===(tR=RR.material)||void 0===tR?void 0:tR.uniqueId)&&void 0!==JR?JR:"none"} ${RR.getVerticesDataKinds().sort().join(",")}`
+           return !Zr(rr) || Qr(rr).length > 0 ? null : `${null!==(Sr=null===(Wr=rr.material)||void 0===Wr?void 0:Wr.uniqueId)&&void 0!==Sr?Sr:"none"} ${rr.getVerticesDataKinds().sort().join(",")}`
```

#### 114. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1253` → after: `L1253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1253) · [Before (L1253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1253)

```diff
-             let tR, uR = null !== (JR = ZR.get(GR)) && void 0 !== JR ? JR : 1;
+             let Wr, ar = null !== (Sr = jr.get(Qr)) && void 0 !== Sr ? Sr : 1;
```

#### 115. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1255` → after: `L1255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1255) · [Before (L1255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1255)

```diff
-               uR++, tR = `${RR}|${uR}`
+               ar++, Wr = `${rr}|${ar}`
```

#### 116. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1264` → after: `L1264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1264) · [Before (L1264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1264)

```diff
-                 VR = null === RR ? null : `${RR}/${ZR.toLowerCase()}`;
+                 pr = null === rr ? null : `${rr}/${jr.toLowerCase()}`;
```

#### 117. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1286` → after: `L1286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1286) · [Before (L1286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1286)

```diff
-       const yR = kR.k.itemsClient[JR],
+       const Zr = br.h.itemsClient[Sr],
```

#### 118. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1289-L1290` → after: `L1289-L1290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1289-L1290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1289-L1290) · [Before (L1289-L1290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1289-L1290)

```diff
-           const GR = (0, TR.r)(RR);
-           if (null !== GR) return hR.g.enabled && hR.g.hasAnimation(GR) ? {
+           const Qr = (0, dr.u)(rr);
+           if (null !== Qr) return ur.e.enabled && ur.e.hasAnimation(Qr) ? {
```

#### 119. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1292` → after: `L1292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1292) · [Before (L1292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1292)

```diff
-             moved: hR.g.bonesMoved(GR)
+             moved: ur.e.bonesMoved(Qr)
```

#### 120. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1294` → after: `L1294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1294) · [Before (L1294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1294)

```diff
-           const yR = null === (JR = VR.l[RR]) || void 0 === JR ? void 0 : JR.meshEntityBones;
+           const Zr = null === (Sr = pr.j[rr]) || void 0 === Sr ? void 0 : Sr.meshEntityBones;
```

#### 121. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1301` → after: `L1301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1301) · [Before (L1301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1301)

```diff
-       const uR = RR.lK.RP;
+       const ar = rr.Ox.bC;
```

#### 122. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1306` → after: `L1306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1306) · [Before (L1306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1306)

```diff
-         const GR = `skeletalVehicle|${JR}`,
+         const Qr = `skeletalVehicle|${Sr}`,
```

#### 123. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1309` → after: `L1309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1309) · [Before (L1309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1309)

```diff
-             const tR = RR.lK.jH(),
+             const Wr = rr.Ox.eC(),
```

#### 124. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1315` → after: `L1315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1315) · [Before (L1315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1315)

```diff
-               iR = await (0, JJ.g)(uR, tR, ZR, qR);
+               fr = await (0, SS.e)(ar, Wr, jr, Ir);
```

#### 125. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1325-L1327` → after: `L1325-L1327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1325-L1327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1325-L1327) · [Before (L1325-L1327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1325-L1327)

```diff
-               if (null !== GR.vehicleType && !hR.g.animatesModel(GR.vehicleType, [GJ.c, ...yR])) return console.error(`Animation for ${GR.vehicleType}: its clips move none of the model's bones, so it draws as one mesh`), iR.dispose(), !1;
-               if (uR.length > 0) return console.error(`${JR.name}'s model has no ${uR.join(", ")} to keep as bones, so it draws as one mesh`), iR.dispose(), !1;
-               fR = GJ.e.reconstructModel(iR, RR, tR, JR.name)
+               if (null !== Qr.vehicleType && !ur.e.animatesModel(Qr.vehicleType, [QS.c, ...Zr])) return console.error(`Animation for ${Qr.vehicleType}: its clips move none of the model's bones, so it draws as one mesh`), fr.dispose(), !1;
+               if (ar.length > 0) return console.error(`${Sr.name}'s model has no ${ar.join(", ")} to keep as bones, so it draws as one mesh`), fr.dispose(), !1;
+               Er = QS.f.reconstructModel(fr, rr, Wr, Sr.name)
```

#### 126. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1336-L1340` → after: `L1336-L1340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1336-L1340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1336-L1340) · [Before (L1336-L1340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1336-L1340)

```diff
-             for (const LR of wR) wJ(RR.lK, LR, JR.name);
-             for (const LR of KR) LR.yI(), LR.material ? LR.sideOrientation = BR.d.ClockWiseSideOrientation : ((0, bR.d)(LR) || LR.jH().vI(LR), LR.JA(!1));
-             for (const LR of KR) LR.material && RR.lK.xI(LR);
-             const rR = RR.lK.RP,
-               eR = RR.Be ? {
+             for (const hr of mr) mS(rr.Ox, hr, Sr.name);
+             for (const hr of xr) hr.sC(), hr.material ? hr.sideOrientation = Tr.d.ClockWiseSideOrientation : ((0, lr.c)(hr) || hr.eC().rM(hr), hr.VK(!1));
+             for (const hr of xr) hr.material && rr.Ox.pM(hr);
+             const Nr = rr.Ox.bC,
+               Ur = rr.zU ? {
```

#### 127. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1344` → after: `L1344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1344) · [Before (L1344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1344)

```diff
-               hK: 8,
+               sx: 8,
```

#### 128. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1361` → after: `L1361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1361) · [Before (L1361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1361)

```diff
-             console.error(`Could not load the bones of ${JR}, so it draws as one mesh\n`, RR), uR.set(JR, {
+             console.error(`Could not load the bones of ${Sr}, so it draws as one mesh\n`, rr), ar.set(Sr, {
```

#### 129. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1377-L1379` → after: `L1377-L1379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1377-L1379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1377-L1379) · [Before (L1377-L1379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1377-L1379)

```diff
-           uR.JA(JR, !0), uR.setPosition(JR, 0, 0, 0), uR.setRotationEuler(JR, 0, 0, 0), uR.set(JR, "aOpacity", 1), uR.set(JR, "aLightLevels", sR.e);
-           const [tR, ZR, iR] = Array.isArray(GR) ? GR : [GR, GR, GR], fR = yR.bakeInScaling;
-           if (uR.setScale(JR, -tR * fR, ZR * fR, iR * fR), RR.Be) {
+           ar.VK(Sr, !0), ar.setPosition(Sr, 0, 0, 0), ar.setRotationEuler(Sr, 0, 0, 0), ar.set(Sr, "aOpacity", 1), ar.set(Sr, "aLightLevels", sr.e);
+           const [Wr, jr, fr] = Array.isArray(Qr) ? Qr : [Qr, Qr, Qr], Er = Zr.bakeInScaling;
+           if (ar.setScale(Sr, -Wr * Er, jr * Er, fr * Er), rr.zU) {
```

#### 130. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1391` → after: `L1391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1391) · [Before (L1391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1391)

```diff
-         return "string" === typeof RR ? [RR] : [RR.nodeName, ...KJ(null !== (JR = RR.children) && void 0 !== JR ? JR : [])]
+         return "string" === typeof rr ? [rr] : [rr.nodeName, ...xS(null !== (Sr = rr.children) && void 0 !== Sr ? Sr : [])]
```

#### 131. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1396-L1400` → after: `L1396-L1400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1396-L1400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1396-L1400) · [Before (L1396-L1400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1396-L1400)

```diff
-       JR.name = `${GR}SkeletalVehicleMat`;
-       const yR = (0, pR.bb)(JR);
-       (0, pR.N)(yR), (0, tJ.c)(JR, (() => {
-         (0, yJ.c)(yR, RR), (0, jR.b)(yR, !0)
-       })), (0, tJ.d)(JR)
+       Sr.name = `${Qr}SkeletalVehicleMat`;
+       const Zr = (0, Or.Y)(Sr);
+       (0, Or.F)(Zr), (0, WS.c)(Sr, (() => {
+         (0, ZS.d)(Zr, rr), (0, wr.e)(Zr, !0)
+       })), (0, WS.g)(Sr)
```

#### 132. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1420` → after: `L1420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1420) · [Before (L1420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1420)

```diff
-         this.bloxd = void 0, this.xw = void 0
+         this.bloxd = void 0, this.gm = void 0
```

#### 133. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1429` → after: `L1429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1429) · [Before (L1429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1429)

```diff
-         return aJ.sourcesByScene.set(RR, GR), (0, YR.f)(RR, (() => {
+         return tS.sourcesByScene.set(rr, Qr), (0, or.e)(rr, (() => {
```

#### 134. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1434-L1437` → after: `L1434-L1437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1434-L1437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1434-L1437) · [Before (L1434-L1437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1434-L1437)

```diff
-         this.bloxd = RR, this.xw = RR.xw;
-         const JR = (0, YR.f)(this.xw.lK.jH(), (() => {
-           for (const RR of this.bloxd.zC.mI("isBoard")) {
-             const JR = this.bloxd.zC.getState(RR.Rm, "hidingMeshManager");
+         this.bloxd = rr, this.gm = rr.gm;
+         const Sr = (0, or.e)(this.gm.Ox.eC(), (() => {
+           for (const rr of this.bloxd.YB.YM("isBoard")) {
+             const Sr = this.bloxd.YB.getState(rr.XM, "hidingMeshManager");
```

#### 135. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1445` → after: `L1445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1445) · [Before (L1445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1445)

```diff
-           for (const RR of this.bloxd.zC.mI("isBoard")) this.bloxd.zC.deleteEntity(RR.Rm)
+           for (const rr of this.bloxd.YB.YM("isBoard")) this.bloxd.YB.deleteEntity(rr.XM)
```

#### 136. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1450` → after: `L1450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1450) · [Before (L1450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1450)

```diff
-         (0, IR.c)(this.xw).mergeParticleSystemUpdate((0, PR.d)(RR), JR, GR);
+         (0, kr.b)(this.gm).mergeParticleSystemUpdate((0, Gr.e)(rr), Sr, Qr);
```

#### 137. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1452` → after: `L1452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1452) · [Before (L1452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1452)

```diff
-         (0, oR.I)(tR) || (0, NR.d)(tR, GR)
+         (0, Cr.L)(Wr) || (0, qr.c)(Wr, Qr)
```

#### 138. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1455` → after: `L1455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1455) · [Before (L1455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1455)

```diff
-         return (0, IR.c)(this.xw).getParticleSystemUpdate((0, PR.d)(RR), null !== JR && void 0 !== JR ? JR : "__root__")
+         return (0, kr.b)(this.gm).getParticleSystemUpdate((0, Gr.e)(rr), null !== Sr && void 0 !== Sr ? Sr : "__root__")
```

#### 139. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1461-L1462` → after: `L1461-L1462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1461-L1462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1461-L1462) · [Before (L1461-L1462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1461-L1462)

```diff
-           iR = null !== (tR = null === qR || void 0 === qR || null === (uR = qR.persisted.shared.text) || void 0 === uR ? void 0 : uR.toString()) && void 0 !== tR ? tR : "",
-           fR = null !== (ZR = null === qR || void 0 === qR ? void 0 : qR.persisted.shared.textSize) && void 0 !== ZR ? ZR : 0;
+           fr = null !== (Wr = null === Ir || void 0 === Ir || null === (ar = Ir.persisted.shared.text) || void 0 === ar ? void 0 : ar.toString()) && void 0 !== Wr ? Wr : "",
+           Er = null !== (jr = null === Ir || void 0 === Ir ? void 0 : Ir.persisted.shared.textSize) && void 0 !== jr ? jr : 0;
```

#### 140. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1465-L1467` → after: `L1465-L1467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1465-L1467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1465-L1467) · [Before (L1465-L1467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1465-L1467)

```diff
-             position: FR.Fe.Zero(),
-             rotation: FR.Fe.Zero(),
-             MK: FR.Fe.One()
+             position: Dr.kU.Zero(),
+             rotation: Dr.kU.Zero(),
+             Tx: Dr.kU.One()
```

#### 141. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1470` → after: `L1470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1470) · [Before (L1470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1470)

```diff
-           "" === iR.trim() ? JR = (0, WR.i)(this.xw.lK, "EmptyBoardMesh") : (JR = this.createBoardTextPlane(iR, fR, 1, 7 / 8, 256), (0, mR.j)(RR, yR, .375), RR.rotation.y += Math.PI, JR.rotation = RR.rotation);
+           "" === fr.trim() ? Sr = (0, nr.g)(this.gm.Ox, "EmptyBoardMesh") : (Sr = this.createBoardTextPlane(fr, Er, 1, 7 / 8, 256), (0, Ar.l)(rr, Zr, .375), rr.rotation.y += Math.PI, Sr.rotation = rr.rotation);
```

#### 142. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1487` → after: `L1487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1487) · [Before (L1487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1487)

```diff
-         } = uR.j.find((JR => {
+         } = ar.n.find((Sr => {
```

#### 143. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1492-L1494` → after: `L1492-L1494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1492-L1494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1492-L1494) · [Before (L1492-L1494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1492-L1494)

```diff
-         })), [VR, , KR] = uR.t[tR][1], [wR, rR] = uR.l[tR], eR = fR + .01, aR = [.5 + VR * (qR - 1) / 2 + wR * eR, .5 - (iR - 1) / 2, .5 + KR * (qR - 1) / 2 + rR * eR];
-         JR = (0, ZR.o)(JR, GR, qR, iR);
-         const LR = (0, ZR.s)(qR, iR),
+         })), [pr, , xr] = ar.A[Wr][1], [mr, Nr] = ar.r[Wr], Ur = Er + .01, tr = [.5 + pr * (Ir - 1) / 2 + mr * Ur, .5 - (fr - 1) / 2, .5 + xr * (Ir - 1) / 2 + Nr * Ur];
+         Sr = (0, jr.n)(Sr, Qr, Ir, fr);
+         const hr = (0, jr.t)(Ir, fr),
```

#### 144. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1498` → after: `L1498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1498) · [Before (L1498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1498)

```diff
-           return RR.rotation = new FR.Fe(0, (tR + 1) * Math.PI / 2, 0), {
+           return rr.rotation = new Dr.kU(0, (Wr + 1) * Math.PI / 2, 0), {
```

#### 145. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1506-L1512` → after: `L1506-L1512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1506-L1512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1506-L1512) · [Before (L1506-L1512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1506-L1512)

```diff
-           lK: qR
-         } = this.xw, {
-           tL: iR
-         } = qR, fR = Math.round(uR * GR), VR = Math.round(uR * yR), KR = (0, ER.h)(this.xw, "BoardDynamicTexture", fR, VR, {
-           mipped: AR.f.trilinear,
-           unmipped: AR.f.bilinear
-         }), wR = (0, WR.m)(qR, "BoardPlane", (0, CR.k)({
+           Ox: Ir
+         } = this.gm, {
+           Dt: fr
+         } = Ir, Er = Math.round(ar * Qr), pr = Math.round(ar * Zr), xr = (0, Fr.f)(this.gm, "BoardDynamicTexture", Er, pr, {
+           mipped: er.g.trilinear,
+           unmipped: er.g.bilinear
+         }), mr = (0, nr.p)(Ir, "BoardPlane", (0, Kr.h)({
```

#### 146. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1515-L1516` → after: `L1515-L1516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1515-L1516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1515-L1516) · [Before (L1515-L1516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1515-L1516)

```diff
-         })), rR = uR / 256, eR = (0, XR.j)(KR);
-         tR.d.fontSize = ZR.d[JR].ingameFontSize * rR, tR.d.fontWeight = "bold", tR.d.font = "'Jetbrains Mono', monospace", DR.featureFlags.canSeePlayerWrittenText && tR.d.drawText(eR, RR, 0, (-10 - 7 * JR) * rR, fR, VR), (0, ER.l)(KR);
+         })), Nr = ar / 256, Ur = (0, yr.h)(xr);
+         Wr.d.fontSize = jr.c[Sr].ingameFontSize * Nr, Wr.d.fontWeight = "bold", Wr.d.font = "'Jetbrains Mono', monospace", Rr.featureFlags.canSeePlayerWrittenText && Wr.d.drawText(Ur, rr, 0, (-10 - 7 * Sr) * Nr, Er, pr), (0, Fr.i)(xr);
```

#### 147. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1521` → after: `L1521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1521) · [Before (L1521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1521)

```diff
-           tL: iR,
+           Dt: fr,
```

#### 148. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1526` → after: `L1526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1526) · [Before (L1526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1526)

```diff
-             ...(0, ER.i)(KR)
+             ...(0, Fr.h)(xr)
```

#### 149. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1529` → after: `L1529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1529) · [Before (L1529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1529)

```diff
-             (0, ER.e)(RR, "boards")
+             (0, Fr.b)(rr, "boards")
```

#### 150. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1534` → after: `L1534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1534) · [Before (L1534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1534)

```diff
-         return wR.material = aR, wR.yI(), wR
+         return mr.material = tr, mr.sC(), mr
```

#### 151. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1538-L1539` → after: `L1538-L1539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1538-L1539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1538-L1539) · [Before (L1538-L1539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1538-L1539)

```diff
-           zC: yR
-         } = this.xw, tR = yR.add(RR, 1, 1);
+           YB: Zr
+         } = this.gm, Wr = Zr.add(rr, 1, 1);
```

#### 152. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1541` → after: `L1541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1541) · [Before (L1541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1541)

```diff
-         yR.Jm(tR, "hidingMeshManager", {
+         Zr.gM(Wr, "hidingMeshManager", {
```

#### 153. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1543` → after: `L1543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1543) · [Before (L1543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1543)

```diff
-             if ((0, YR.b)(this.xw)) return;
+             if ((0, or.c)(this.gm)) return;
```

#### 154. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1548` → after: `L1548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1548) · [Before (L1548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1548)

```diff
-             uR = RR, yR.Jm(tR, yR.names.mesh, {
+             ar = rr, Zr.gM(Wr, Zr.names.mesh, {
```

#### 155. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1555` → after: `L1555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1555) · [Before (L1555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1555)

```diff
-             null === (RR = uR) || void 0 === RR || RR.dispose(!1, !0), yR.Zm(tR, yR.names.mesh)
+             null === (rr = ar) || void 0 === rr || rr.dispose(!1, !0), Zr.bM(Wr, Zr.names.mesh)
```

#### 156. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1559` → after: `L1559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1559) · [Before (L1559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1559)

```diff
-           hV: "Board",
+           Fp: "Board",
```

#### 157. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1561` → after: `L1561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1561) · [Before (L1561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1561)

```diff
-         }), yR.Jm(tR, "isBoard")
+         }), Zr.gM(Wr, "isBoard")
```

#### 158. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1565-L1566` → after: `L1565-L1566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1565-L1566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1565-L1566) · [Before (L1565-L1566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1565-L1566)

```diff
-         for (const tR of this.bloxd.zC.mI("isBoard"))
-           if (UR().squaredDistance(this.bloxd.zC.vW(tR.Rm), yR) < .01) return void this.bloxd.zC.deleteEntity(tR.Rm)
+         for (const Wr of this.bloxd.YB.YM("isBoard"))
+           if (Yr().squaredDistance(this.bloxd.YB.JY(Wr.XM), Zr) < .01) return void this.bloxd.YB.deleteEntity(Wr.XM)
```

#### 159. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1569-L1571` → after: `L1569-L1571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1569-L1571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1569-L1571) · [Before (L1569-L1571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1569-L1571)

```diff
-         for (const yR of this.bloxd.zC.mI("isBoard")) {
-           const [tR, uR, ZR] = (0, oR.$)(this.bloxd.zC.vW(yR.Rm));
-           tR === RR && uR === JR && ZR === GR && this.bloxd.zC.deleteEntity(yR.Rm)
+         for (const Zr of this.bloxd.YB.YM("isBoard")) {
+           const [Wr, ar, jr] = (0, Cr.ab)(this.bloxd.YB.JY(Zr.XM));
+           Wr === rr && ar === Sr && jr === Qr && this.bloxd.YB.deleteEntity(Zr.XM)
```

#### 160. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1576` → after: `L1576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1576) · [Before (L1576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1576)

```diff
-             return "Fireball" === RR ? iR("Fireball Block", .95) : "RPG" === RR ? iR("Rocket", .5) : "Obby RPG" === RR ? iR("Obby Rocket", .5) : "Super RPG" === RR ? iR("Super Rocket", .7) : "Grenade Launcher" === RR ? iR("Grenade", .357) : "Iceball" === RR ? iR("Iceball Block",  … [truncated]
+             return "Fireball" === rr ? fr("Fireball Block", .95) : "RPG" === rr ? fr("Rocket", .5) : "Obby RPG" === rr ? fr("Obby Rocket", .5) : "Super RPG" === rr ? fr("Super Rocket", .7) : "Grenade Launcher" === rr ? fr("Grenade", .357) : "Iceball" === rr ? fr("Iceball Block",  … [truncated]
```

#### 161. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1583-L1584` → after: `L1583-L1584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1583-L1584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1583-L1584) · [Before (L1583-L1584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1583-L1584)

```diff
-           GR = kR.k.itemsClient[JR.item],
-           yR = JR.thrownRole ? GR.getMeshWithRole(JR.scale, MR.b.thrown) : GR.getMesh(JR.scale);
+           Qr = br.h.itemsClient[Sr.item],
+           Zr = Sr.thrownRole ? Qr.getMeshWithRole(Sr.scale, Br.e.thrown) : Qr.getMesh(Sr.scale);
```

#### 162. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1588` → after: `L1588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1588) · [Before (L1588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1588)

```diff
-         const GR = this.xw.lK.jH(),
+         const Qr = this.gm.Ox.eC(),
```

#### 163. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1594-L1595` → after: `L1594-L1595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1594-L1595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1594-L1595) · [Before (L1594-L1595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1594-L1595)

```diff
-           yR = this.xw.lK.Km(`${JR.texture}|minLifetime${JR.minLifeTime}`, GR);
-         if (yR.texture = (0, AR.s)(RR, (0, aR.e)(JR.texture)), "timeFraction" in JR.colorGradients[0])
+           Zr = this.gm.Ox.QG(`${Sr.texture}|minLifetime${Sr.minLifeTime}`, Qr);
+         if (Zr.texture = (0, er.p)(rr, (0, tr.e)(Sr.texture)), "timeFraction" in Sr.colorGradients[0])
```

#### 164. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1597-L1598` → after: `L1597-L1598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1597-L1598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1597-L1598) · [Before (L1597-L1598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1597-L1598)

```diff
-             const RR = tR.maxColor ? (0, NR.k)(tR.maxColor) : void 0;
-             yR.addColorGradient(tR.timeFraction, (0, NR.k)(tR.minColor), RR)
+             const rr = Wr.maxColor ? (0, qr.i)(Wr.maxColor) : void 0;
+             Zr.addColorGradient(Wr.timeFraction, (0, qr.i)(Wr.minColor), rr)
```

#### 165. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1601` → after: `L1601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1601) · [Before (L1601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1601)

```diff
-             yR.addColorGradient(1, (0, NR.n)(255, 255, 255, RR), (0, NR.n)(255, 255, 255, 1)), yR.useRampGradients = !0, yR.addColorRemapGradient(0, RR, 1), yR.addColorRemapGradient(1, RR, 1), xR.d.applyRampColoursToPSystem(yR, JR.colorGradients.map((RR => RR.color)))
+             Zr.addColorGradient(1, (0, qr.m)(255, 255, 255, rr), (0, qr.m)(255, 255, 255, 1)), Zr.useRampGradients = !0, Zr.addColorRemapGradient(0, rr, 1), Zr.addColorRemapGradient(1, rr, 1), Hr.b.applyRampColoursToPSystem(Zr, Sr.colorGradients.map((rr => rr.color)))
```

#### 166. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1603` → after: `L1603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1603) · [Before (L1603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1603)

```diff
-         yR.blendMode = JR.blendMode, yR.minLifeTime = JR.minLifeTime, yR.maxLifeTime = JR.maxLifeTime, yR.minEmitPower = JR.minEmitPower, yR.maxEmitPower = JR.maxEmitPower, yR.minSize = JR.minSize, yR.maxSize = JR.maxSize, yR.gravity = new FR.Fe(JR.gravity[0], JR.gravity[1], JR.g … [truncated]
+         Zr.blendMode = Sr.blendMode, Zr.minLifeTime = Sr.minLifeTime, Zr.maxLifeTime = Sr.maxLifeTime, Zr.minEmitPower = Sr.minEmitPower, Zr.maxEmitPower = Sr.maxEmitPower, Zr.minSize = Sr.minSize, Zr.maxSize = Sr.maxSize, Zr.gravity = new Dr.kU(Sr.gravity[0], Sr.gravity[1], Sr.g … [truncated]
```

#### 167. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1608` → after: `L1608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1608) · [Before (L1608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1608)

```diff
-         const JR = this.xw.lK.jH(),
+         const Sr = this.gm.Ox.eC(),
```

#### 168. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1610-L1611` → after: `L1610-L1611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1610-L1611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1610-L1611) · [Before (L1610-L1611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1610-L1611)

```diff
-         (0, NR.t)(this.xw, GR), GR.createBoxEmitter(new FR.Fe(Math.min(RR.dir1[0], RR.dir2[0]), Math.min(RR.dir1[1], RR.dir2[1]), Math.min(RR.dir1[2], RR.dir2[2])), new FR.Fe(Math.max(RR.dir1[0], RR.dir2[0]), Math.max(RR.dir1[1], RR.dir2[1]), Math.max(RR.dir1[2], RR.dir2[2])), ne … [truncated]
-         new xR.f(GR, RR.maxLifeTime).emitAmount(RR.manualEmitCount), this.bloxd.client.gameRecorder.recordParticleEffectPlayed(RR)
+         (0, qr.v)(this.gm, Qr), Qr.createBoxEmitter(new Dr.kU(Math.min(rr.dir1[0], rr.dir2[0]), Math.min(rr.dir1[1], rr.dir2[1]), Math.min(rr.dir1[2], rr.dir2[2])), new Dr.kU(Math.max(rr.dir1[0], rr.dir2[0]), Math.max(rr.dir1[1], rr.dir2[1]), Math.max(rr.dir1[2], rr.dir2[2])), ne … [truncated]
+         new Hr.e(Qr, rr.maxLifeTime).emitAmount(rr.manualEmitCount), this.bloxd.client.gameRecorder.recordParticleEffectPlayed(rr)
```

#### 169. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1614-L1615` → after: `L1614-L1615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1614-L1615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1614-L1615) · [Before (L1614-L1615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1614-L1615)

```diff
-         if (RR instanceof lR.e) return !1;
-         const JR = `${RR.blendMode}|${RR.useRampGradients}`,
+         if (rr instanceof vr.c) return !1;
+         const Sr = `${rr.blendMode}|${rr.useRampGradients}`,
```

#### 170. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1617` → after: `L1617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1617) · [Before (L1617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1617)

```diff
-           yR = this.xw.lK.jH();
+           Zr = this.gm.Ox.eC();
```

#### 171. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1621` → after: `L1621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1621) · [Before (L1621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1621)

```diff
-         const yR = this.xw.lK.jH();
+         const Zr = this.gm.Ox.eC();
```

#### 172. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1625` → after: `L1625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1625) · [Before (L1625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1625)

```diff
-             yR = null !== (tR = JR.meshOffset) && void 0 !== tR ? tR : UR().fi(0, RR / 2, 0),
+             Zr = null !== (Wr = Sr.meshOffset) && void 0 !== Wr ? Wr : Yr().tm(0, rr / 2, 0),
```

#### 173. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1627` → after: `L1627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1627) · [Before (L1627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1627)

```diff
-             iR = VJ(this.xw, JR.blockName, JR.size);
+             fr = pS(this.gm, Sr.blockName, Sr.size);
```

#### 174. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1629` → after: `L1629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1629) · [Before (L1629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1629)

```diff
-             JI: iR,
+             JC: fr,
```

#### 175. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1636-L1637` → after: `L1636-L1637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1636-L1637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1636-L1637) · [Before (L1636-L1637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1636-L1637)

```diff
-               JI: null,
-               mesh: (0, WR.p)(this.xw.lK, `skeletalVehicleLoading|${JR.blockName}`),
+               JC: null,
+               mesh: (0, nr.t)(this.gm.Ox, `skeletalVehicleLoading|${Sr.blockName}`),
```

#### 176. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1644-L1645` → after: `L1644-L1645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1644-L1645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1644-L1645) · [Before (L1644-L1645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1644-L1645)

```diff
-             JI: null,
-             mesh: null !== (uR = null === (ZR = kR.k.itemsClient[JR.blockName]) || void 0 === ZR ? void 0 : ZR.getMesh(JR.size, GR)) && void 0 !== uR ? uR : null,
+             JC: null,
+             mesh: null !== (ar = null === (jr = br.h.itemsClient[Sr.blockName]) || void 0 === jr ? void 0 : jr.getMesh(Sr.size, Qr)) && void 0 !== ar ? ar : null,
```

#### 177. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1658` → after: `L1658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1658) · [Before (L1658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1658)

```diff
-             LR = `${RR}|${JSON.stringify(eR)}${wR?"|mirrored":""}`,
+             hr = `${rr}|${JSON.stringify(Ur)}${mr?"|mirrored":""}`,
```

#### 178. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1664` → after: `L1664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1664) · [Before (L1664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1664)

```diff
-               tR = JR.diffuseColor ? void 0 : (0, fR.g)(JR.texture);
+               Wr = Sr.diffuseColor ? void 0 : (0, Er.i)(Sr.texture);
```

#### 179. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1676` → after: `L1676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1676) · [Before (L1676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1676)

```diff
-               } = aR.b.getTexture((0, fR.g)(JR.texture), QR.k.BLOCK);
+               } = tr.d.getTexture((0, Er.i)(Sr.texture), Jr.e.BLOCK);
```

#### 180. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1678` → after: `L1678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1678) · [Before (L1678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1678)

```diff
-                   transparencyMode: pR.v.alphaTest,
+                   transparencyMode: Or.s.alphaTest,
```

#### 181. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1684` → after: `L1684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1684) · [Before (L1684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1684)

```diff
-                     samplingMode: AR.f.nearestNearestMipLinear,
+                     samplingMode: er.g.nearestNearestMipLinear,
```

#### 182. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1694` → after: `L1694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1694) · [Before (L1694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1694)

```diff
-                 const RR = null === (nR = VR.l[JR.texture]) || void 0 === nR ? void 0 : nR.textureInfo;
+                 const rr = null === (zr = pr.j[Sr.texture]) || void 0 === zr ? void 0 : zr.textureInfo;
```

#### 183. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1696-L1697` → after: `L1696-L1697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1696-L1697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1696-L1697) · [Before (L1696-L1697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1696-L1697)

```diff
-                 if (RR && "object" === typeof RR && "animTextures" in RR) GR = (0, gR.g)(RR.animTextures.length, null !== (MR = RR.animationInterval) && void 0 !== MR ? MR : 200), tR = RR.animTextures[0];
-                 else console.warn(`Box mesh entity animateTexture=true but texture "${JR.texture}" is not an animated block \u2014 rendering static.`)
+                 if (rr && "object" === typeof rr && "animTextures" in rr) Qr = (0, Lr.g)(rr.animTextures.length, null !== (Br = rr.animationInterval) && void 0 !== Br ? Br : 200), Wr = rr.animTextures[0];
+                 else console.warn(`Box mesh entity animateTexture=true but texture "${Sr.texture}" is not an animated block \u2014 rendering static.`)
```

#### 184. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1703-L1704` → after: `L1703-L1704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1703-L1704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1703-L1704) · [Before (L1703-L1704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1703-L1704)

```diff
-               name: `${LR}EntityMesh`,
-               tL: yR,
+               name: `${hr}EntityMesh`,
+               Dt: Zr,
```

#### 185. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1710` → after: `L1710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1710) · [Before (L1710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1710)

```diff
-                 GR && (0, pR.y)(RR, gR.c, GR), (0, jR.b)(RR, !0), (0, pR.K)(RR)
+                 Qr && (0, Or.t)(rr, Lr.c, Qr), (0, wr.e)(rr, !0), (0, Or.D)(rr)
```

#### 186. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1713` → after: `L1713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1713) · [Before (L1713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1713)

```diff
-             }), ZR = JR.faceUV ? JR.faceUV.map((RR => [RR[0] + .01, RR[1] + .01, RR[2] - .01, RR[3] - .01])) : void 0, qR = (0, WR.m)(this.xw.lK, `${LR}EntityMesh`, (0, CR.e)({
+             }), jr = Sr.faceUV ? Sr.faceUV.map((rr => [rr[0] + .01, rr[1] + .01, rr[2] - .01, rr[3] - .01])) : void 0, Ir = (0, nr.p)(this.gm.Ox, `${hr}EntityMesh`, (0, Kr.e)({
```

#### 187. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1719-L1721` → after: `L1719-L1721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1719-L1721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1719-L1721) · [Before (L1719-L1721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1719-L1721)

```diff
-             if (qR.material = uR, qR.Am("aOpacity", 1), qR.Im.aOpacity = 1, this.xw.Be) {
-               const RR = void 0 === tR ? void 0 : (0, KR.b)(VR.B, tR);
-               qR.Am("aShaderPackItem", 4), qR.Im.aShaderPackItem = new FR.Vector4(void 0 === RR ? 0 : RR + 1, 0, 0, 0)
+             if (Ir.material = ar, Ir.aG("aOpacity", 1), Ir.pG.aOpacity = 1, this.gm.zU) {
+               const rr = void 0 === Wr ? void 0 : (0, xr.b)(pr.t, Wr);
+               Ir.aG("aShaderPackItem", 4), Ir.pG.aShaderPackItem = new Dr.Vector4(void 0 === rr ? 0 : rr + 1, 0, 0, 0)
```

#### 188. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1723` → after: `L1723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1723) · [Before (L1723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1723)

```diff
-             qR.Qe = !0, qR.se = !0, qR.JA(!1), (0, bR.d)(qR) || qR.jH().vI(qR), XR.set(LR, qR), BR = qR
+             Ir.GU = !0, Ir.VU = !0, Ir.VK(!1), (0, lr.c)(Ir) || Ir.eC().rM(Ir), yr.set(hr, Ir), Tr = Ir
```

#### 189. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1725-L1727` → after: `L1725-L1727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1725-L1727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1725-L1727) · [Before (L1725-L1727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1725-L1727)

```diff
-           const lR = BR.createInstance(`${LR}EntityMeshInstance`);
-           return lR.MK.set(rR * tR, rR * uR, rR * ZR), this.xw.lK.iL(lR), (0, vR.i)(lR, 0, 0, 0), GR(lR), {
-             JI: null,
+           const vr = Tr.createInstance(`${hr}EntityMeshInstance`);
+           return vr.Tx.set(Nr * Wr, Nr * ar, Nr * jr), this.gm.Ox.Sh(vr), (0, Xr.p)(vr, 0, 0, 0), Qr(vr), {
+             JC: null,
```

#### 190. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1729` → after: `L1729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1729) · [Before (L1729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1729)

```diff
-             meshOffset: null !== (qR = JR.meshOffset) && void 0 !== qR ? qR : UR().fi(0, uR / 2, 0),
+             meshOffset: null !== (Ir = Sr.meshOffset) && void 0 !== Ir ? Ir : Yr().tm(0, ar / 2, 0),
```

#### 191. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1739-L1741` → after: `L1739-L1741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1739-L1741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1739-L1741) · [Before (L1739-L1741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1739-L1741)

```diff
-               const qR = RR.jH(),
-                 iR = Math.min(4096, qR.ke().getCaps().maxTextureSize),
-                 fR = (0, HR.i)(JR, iR),
+               const Ir = rr.eC(),
+                 fr = Math.min(4096, Ir.MU().getCaps().maxTextureSize),
+                 Er = (0, gr.f)(Sr, fr),
```

#### 192. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1746` → after: `L1746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1746) · [Before (L1746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1746)

```diff
-                 wR = (0, XR.n)(qR, "Leaderboard", {
+                 mr = (0, yr.k)(Ir, "Leaderboard", {
```

#### 193. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1751` → after: `L1751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1751) · [Before (L1751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1751)

```diff
-                 rR = (0, XR.j)(wR),
+                 Nr = (0, yr.h)(mr),
```

#### 194. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1753-L1754` → after: `L1753-L1754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1753-L1754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1753-L1754) · [Before (L1753-L1754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1753-L1754)

```diff
-               let aR = (0, HR.k)(JR, null === ZR || void 0 === ZR ? void 0 : ZR.initial),
-                 LR = null !== (tR = yR.initial) && void 0 !== tR ? tR : null;
+               let tr = (0, gr.h)(Sr, null === jr || void 0 === jr ? void 0 : jr.initial),
+                 hr = null !== (Wr = Zr.initial) && void 0 !== Wr ? Wr : null;
```

#### 195. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1756` → after: `L1756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1756) · [Before (L1756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1756)

```diff
-                 (0, HR.e)(rR, eR.width, eR.height, fR, JR, {
+                 (0, gr.d)(Nr, Ur.width, Ur.height, Er, Sr, {
```

#### 196. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1761` → after: `L1761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1761) · [Before (L1761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1761)

```diff
-                 }), (0, XR.Z)(wR, !0, !1)
+                 }), (0, yr.R)(mr, !0, !1)
```

#### 197. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1765` → after: `L1765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1765) · [Before (L1765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1765)

```diff
-                   LR = null !== RR && void 0 !== RR ? RR : null, nR()
+                   hr = null !== rr && void 0 !== rr ? rr : null, zr()
```

#### 198. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1769-L1770` → after: `L1769-L1770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1769-L1770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1769-L1770) · [Before (L1769-L1770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1769-L1770)

```diff
-                 }))) && void 0 !== uR ? uR : () => {},
-                 MR = (0, YR.f)(qR, nR, {
+                 }))) && void 0 !== ar ? ar : () => {},
+                 Br = (0, or.e)(Ir, zr, {
```

#### 199. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1777` → after: `L1777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1777) · [Before (L1777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1777)

```diff
-                   tL: qR,
+                   Dt: Ir,
```

#### 200. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1785` → after: `L1785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1785) · [Before (L1785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1785)

```diff
-                 lR = (0, WR.m)(RR, "Leaderboard", (0, CR.k)({
+                 vr = (0, nr.p)(rr, "Leaderboard", (0, Kr.h)({
```

#### 201. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1790` → after: `L1790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1790) · [Before (L1790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1790)

```diff
-               return lR.material = BR, lR.YH.add((() => {
+               return vr.material = Tr, vr.lC.add((() => {
```

#### 202. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1793-L1794` → after: `L1793-L1794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1793-L1794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1793-L1794) · [Before (L1793-L1794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1793-L1794)

```diff
-             }(this.xw.lK, JR, null !== (BR = null === (lR = this.bloxd.client.getConnectionInfo()) || void 0 === lR ? void 0 : lR.userContext.whamm) && void 0 !== BR ? BR : null, {
-               initial: void 0 === RR ? null : null === (xR = this.xw.Qm[this.xw.WH]) || void 0 === xR || null === (NR = xR[RR]) || void 0 === NR ? void 0 : NR._leaderboardAround,
+             }(this.gm.Ox, Sr, null !== (Tr = null === (vr = this.bloxd.client.getConnectionInfo()) || void 0 === vr ? void 0 : vr.userContext.whamm) && void 0 !== Tr ? Tr : null, {
+               initial: void 0 === rr ? null : null === (Hr = this.gm.xG[this.gm.fC]) || void 0 === Hr || null === (qr = Hr[rr]) || void 0 === qr ? void 0 : qr._leaderboardAround,
```

#### 203. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1797` → after: `L1797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1797) · [Before (L1797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1797)

```diff
-                 const GR = LR.n.subscribe(`otherEntitySettingsClientifiedEId|${RR}|_leaderboardAround`, JR);
+                 const Qr = hr.i.subscribe(`otherEntitySettingsClientifiedEId|${rr}|_leaderboardAround`, Sr);
```

#### 204. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1799` → after: `L1799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1799) · [Before (L1799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1799)

```diff
-                   LR.n.unsubscribe(GR)
+                   hr.i.unsubscribe(Qr)
```

#### 205. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1803` → after: `L1803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1803) · [Before (L1803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1803)

```diff
-               initial: (0, HR.r)(JR.leaderboardTop),
+               initial: (0, gr.j)(Sr.leaderboardTop),
```

#### 206. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1805-L1806` → after: `L1805-L1806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1805-L1806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1805-L1806) · [Before (L1805-L1806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1805-L1806)

```diff
-                 const GR = LR.n.subscribe(`leaderboardTop|${RR}`, (RR => {
-                   const GR = (0, HR.r)(RR);
+                 const Qr = hr.i.subscribe(`leaderboardTop|${rr}`, (rr => {
+                   const Qr = (0, gr.j)(rr);
```

#### 207. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1810` → after: `L1810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1810) · [Before (L1810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1810)

```diff
-                   LR.n.unsubscribe(GR)
+                   hr.i.unsubscribe(Qr)
```

#### 208. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1814-L1816` → after: `L1814-L1816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1814-L1816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1814-L1816) · [Before (L1814-L1816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1814-L1816)

```diff
-             tR = 2 * yR.Tm().boundingBox.extendSize.y;
-           return this.xw.lK.iL(yR), GR(yR), {
-             JI: null,
+             Wr = 2 * Zr.mG().boundingBox.extendSize.y;
+           return this.gm.Ox.Sh(Zr), Qr(Zr), {
+             JC: null,
```

#### 209. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1818` → after: `L1818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1818) · [Before (L1818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1818)

```diff
-             meshOffset: null !== (cR = JR.meshOffset) && void 0 !== cR ? cR : UR().fi(0, tR / 2, 0),
+             meshOffset: null !== (Mr = Sr.meshOffset) && void 0 !== Mr ? Mr : Yr().tm(0, Wr / 2, 0),
```

#### 210. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1828` → after: `L1828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1828) · [Before (L1828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1828)

```diff
-           if ((0, oR.I)(JR.eId)) console.error("No eId specified for mesh particle system, will not be possible to update it");
+           if ((0, Cr.L)(Sr.eId)) console.error("No eId specified for mesh particle system, will not be possible to update it");
```

#### 211. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1831-L1832` → after: `L1831-L1832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1831-L1832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1831-L1832) · [Before (L1831-L1832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1831-L1832)

```diff
-             (0, oR.I)(this.bloxd.meshParticleSystems[JR.eId]) && (this.bloxd.meshParticleSystems[JR.eId] = {});
-             const GR = null !== (IR = JR.nodeName) && void 0 !== IR ? IR : "__root__";
+             (0, Cr.L)(this.bloxd.meshParticleSystems[Sr.eId]) && (this.bloxd.meshParticleSystems[Sr.eId] = {});
+             const Qr = null !== (kr = Sr.nodeName) && void 0 !== kr ? kr : "__root__";
```

#### 212. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1835` → after: `L1835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1835) · [Before (L1835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1835)

```diff
-               (0, oR.I)(null === this || void 0 === this || null === (RR = this.bloxd) || void 0 === RR || null === (yR = RR.meshParticleSystems) || void 0 === yR ? void 0 : yR[JR.eId]) || (delete this.bloxd.meshParticleSystems[JR.eId][GR], 0 === Object.keys(this.bloxd.meshPartic … [truncated]
+               (0, Cr.L)(null === this || void 0 === this || null === (rr = this.bloxd) || void 0 === rr || null === (Zr = rr.meshParticleSystems) || void 0 === Zr ? void 0 : Zr[Sr.eId]) || (delete this.bloxd.meshParticleSystems[Sr.eId][Qr], 0 === Object.keys(this.bloxd.meshPartic … [truncated]
```

#### 213. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1838-L1839` → after: `L1838-L1839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1838-L1839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1838-L1839) · [Before (L1838-L1839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1838-L1839)

```diff
-           return this.xw.lK.iL(yR), GR(yR), {
-             JI: null,
+           return this.gm.Ox.Sh(Zr), Qr(Zr), {
+             JC: null,
```

#### 214. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1841` → after: `L1841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1841) · [Before (L1841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1841)

```diff
-             meshOffset: null !== (PR = JR.meshOffset) && void 0 !== PR ? PR : UR().fi(0, JR.height / 2, 0),
+             meshOffset: null !== (Gr = Sr.meshOffset) && void 0 !== Gr ? Gr : Yr().tm(0, Sr.height / 2, 0),
```

#### 215. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1847` → after: `L1847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1847) · [Before (L1847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1847)

```diff
-           const RR = this.xw.lK.RP,
+           const rr = this.gm.Ox.bC,
```

#### 216. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1849-L1850` → after: `L1849-L1850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1849-L1850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1849-L1850) · [Before (L1849-L1850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1849-L1850)

```diff
-           RR.JA(yR, !0), RR.setPosition(yR, 0, 0, 0), RR.setRotationEuler(yR, 0, 0, 0), RR.set(yR, "aOpacity", 1), RR.Yz(yR, "aOpacity", 1);
-           const tR = null === (mR = (0, wR.m)("head", null === (zR = JR.textures) || void 0 === zR ? void 0 : zR.head)) || void 0 === mR ? void 0 : mR.personModel;
+           rr.VK(Zr, !0), rr.setPosition(Zr, 0, 0, 0), rr.setRotationEuler(Zr, 0, 0, 0), rr.set(Zr, "aOpacity", 1), rr.hG(Zr, "aOpacity", 1);
+           const Wr = null === (Ar = (0, mr.k)("head", null === (Vr = Sr.textures) || void 0 === Vr ? void 0 : Vr.head)) || void 0 === Ar ? void 0 : Ar.personModel;
```

#### 217. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1855` → after: `L1855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1855) · [Before (L1855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1855)

```diff
-           const uR = null !== (SR = JR.size) && void 0 !== SR ? SR : 1;
+           const ar = null !== (ir = Sr.size) && void 0 !== ir ? ir : 1;
```

#### 218. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1857` → after: `L1857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1857) · [Before (L1857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1857)

```diff
-           for (const GR of rR.b) {
+           for (const Qr of Nr.c) {
```

#### 219. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1859` → after: `L1859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1859) · [Before (L1859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1859)

```diff
-             OR.b.Player.meshApi.updatePlayerCosmetic(null, yR, GR, null === (sR = JR.textures) || void 0 === sR ? void 0 : sR[GR])
+             Pr.c.Player.meshApi.updatePlayerCosmetic(null, Zr, Qr, null === (sr = Sr.textures) || void 0 === sr ? void 0 : sr[Qr])
```

#### 220. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1862` → after: `L1862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1862) · [Before (L1862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1862)

```diff
-             JI: yR,
+             JC: Zr,
```

#### 221. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1864-L1865` → after: `L1864-L1865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1864-L1865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1864-L1865) · [Before (L1864-L1865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1864-L1865)

```diff
-             meshOffset: null !== (ER = JR.meshOffset) && void 0 !== ER ? ER : UR().fi(0, 0, 0),
-             nameYOffset: (null !== (TR = null === tR || void 0 === tR ? void 0 : tR.height) && void 0 !== TR ? TR : eR.g.Kn) * uR + .5
+             meshOffset: null !== (Fr = Sr.meshOffset) && void 0 !== Fr ? Fr : Yr().tm(0, 0, 0),
+             nameYOffset: (null !== (dr = null === Wr || void 0 === Wr ? void 0 : Wr.height) && void 0 !== dr ? dr : Ur.i.Uz) * ar + .5
```

#### 222. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1873-L1874` → after: `L1873-L1874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1873-L1874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1873-L1874) · [Before (L1873-L1874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1873-L1874)

```diff
-         const yR = `ParticleEmitter|${JSON.stringify(RR)}`,
-           tR = this.xw.lK.jH(),
+         const Zr = `ParticleEmitter|${JSON.stringify(rr)}`,
+           Wr = this.gm.Ox.eC(),
```

#### 223. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1877` → after: `L1877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1877) · [Before (L1877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1877)

```diff
-           const RR = (0, WR.m)(this.xw.lK, `${yR}EntityMesh`, (0, CR.e)({
+           const rr = (0, nr.p)(this.gm.Ox, `${Zr}EntityMesh`, (0, Kr.e)({
```

#### 224. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1882` → after: `L1882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1882) · [Before (L1882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1882)

```diff
-           RR.visibility = 0, RR.Qe = !0, RR.se = !0, RR.JA(!1), RR.ZL = !1, (0, bR.d)(RR) || RR.jH().vI(RR), (0, SR.i)(RR), uR.particleEmitter = RR
+           rr.visibility = 0, rr.GU = !0, rr.VU = !0, rr.VK(!1), rr.ut = !1, (0, lr.c)(rr) || rr.eC().rM(rr), (0, ir.i)(rr), ar.particleEmitter = rr
```

#### 225. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1884-L1885` → after: `L1884-L1885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1884-L1885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1884-L1885) · [Before (L1884-L1885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1884-L1885)

```diff
-         const ZR = uR.particleEmitter.createInstance(`${yR}EntityMeshInstance`);
-         ZR.MK.set(RR.width, RR.height, RR.depth), ZR.ZL = !1, ZR.position.set(0, 0, 0);
+         const jr = ar.particleEmitter.createInstance(`${Zr}EntityMeshInstance`);
+         jr.Tx.set(rr.width, rr.height, rr.depth), jr.ut = !1, jr.position.set(0, 0, 0);
```

#### 226. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1887` → after: `L1887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1887) · [Before (L1887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1887)

```diff
-         if ((0, oR.I)(RR.dir1) || (qR.direction1._x = RR.dir1[0], qR.direction1._y = RR.dir1[1], qR.direction1._z = RR.dir1[2]), (0, oR.I)(RR.dir2) || (qR.direction2._x = RR.dir2[0], qR.direction2._y = RR.dir2[1], qR.direction2._z = RR.dir2[2]), "ring" === RR.emitterShape && (qR. … [truncated]
+         if ((0, Cr.L)(rr.dir1) || (Ir.direction1._x = rr.dir1[0], Ir.direction1._y = rr.dir1[1], Ir.direction1._z = rr.dir1[2]), (0, Cr.L)(rr.dir2) || (Ir.direction2._x = rr.dir2[0], Ir.direction2._y = rr.dir2[1], Ir.direction2._z = rr.dir2[2]), "ring" === rr.emitterShape && (Ir. … [truncated]
```

#### 227. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1890` → after: `L1890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1890) · [Before (L1890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1890)

```diff
-           (0, oR.I)(RR) || (0, NR.d)(qR, RR)
+           (0, Cr.L)(rr) || (0, qr.c)(Ir, rr)
```

#### 228. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1899-L1910` → after: `L1899-L1910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1899-L1910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1899-L1910) · [Before (L1899-L1910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1899-L1910)

```diff
-     var LJ = GR(39207),
-       nJ = GR(46),
-       UJ = GR(1341),
-       WJ = GR(163),
-       AJ = GR(5313),
-       CJ = GR(38836),
-       XJ = GR(5836),
-       MJ = GR(1317),
-       BJ = GR(1459),
-       lJ = GR(39391),
-       pJ = GR(2845),
-       gJ = GR(40904);
+     var hS = Qr(39533),
+       zS = Qr(43),
+       YS = Qr(1295),
+       nS = Qr(161),
+       eS = Qr(5264),
+       KS = Qr(39179),
+       yS = Qr(5767),
+       BS = Qr(1279),
+       TS = Qr(1433),
+       vS = Qr(39722),
+       OS = Qr(2839),
+       LS = Qr(41246);
```

#### 229. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1913` → after: `L1913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1913) · [Before (L1913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1913)

```diff
-         super(), JR = JR || {}, this.xw = RR;
+         super(), Sr = Sr || {}, this.gm = rr;
```

#### 230. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1915-L1919` → after: `L1915-L1919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1915-L1919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1915-L1919) · [Before (L1915-L1919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1915-L1919)

```diff
-         this.element = GR.element, this.canvas = GR.canvas, this.nS = {
-           bS: !1,
-           kS: !1,
-           yE: !1,
-           pD: !!document.hasFocus()
+         this.element = Qr.element, this.canvas = Qr.canvas, this.nG = {
+           yG: !1,
+           vG: !1,
+           lG: !1,
+           pR: !!document.hasFocus()
```

#### 231. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1922-L1925` → after: `L1922-L1925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1922-L1925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1922-L1925) · [Before (L1922-L1925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1922-L1925)

```diff
-         this.EX = new gJ.e(this.element, 10), this.EX.lH = JR.lH, this.EX.ZE = JR.ZE, this.qE = (yR = this.element, "pointerLockElement" in document && "function" === typeof yR.requestPointerLock), this.WE = !!JR.XE, this.EX.XE = this.WE && this.qE, this.EX.lE = JR.lE, this.EX.pE … [truncated]
-           RR !== this.nS.bS && (this.nS.bS = RR, RR && (this.xw.camera.QE = !0), this.emit(RR ? "gainedPointerLock" : "lostPointerLock"), RR && (this.nS.yE = !0))
-         }, this.EX.xK = () => {
-           this.EX.iW = RR.lK.resize.bind(RR.lK),
+         this.oB = new LS.b(this.element, 10), this.oB.pC = Sr.pC, this.oB.wG = Sr.wG, this.JG = (Zr = this.element, "pointerLockElement" in document && "function" === typeof Zr.requestPointerLock), this.Zk = !!Sr.Wk, this.oB.Wk = this.Zk && this.JG, this.oB.Nk = Sr.Nk, this.oB.zk … [truncated]
+           rr !== this.nG.yG && (this.nG.yG = rr, rr && (this.gm.camera.Hk = !0), this.emit(rr ? "gainedPointerLock" : "lostPointerLock"), rr && (this.nG.lG = !0))
+         }, this.oB.Hx = () => {
+           this.oB.kY = rr.Ox.resize.bind(rr.Ox),
```

#### 232. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1928` → after: `L1928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1928) · [Before (L1928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1928)

```diff
-                 RR.nS.kS = !0;
+                 rr.nG.vG = !0;
```

#### 233. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1930` → after: `L1930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1930) · [Before (L1930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1930)

```diff
-                   RR.nS.kS = !1, document.removeEventListener(GR.type, JR)
+                   rr.nG.vG = !1, document.removeEventListener(Qr.type, Sr)
```

#### 234. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1935` → after: `L1935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1935) · [Before (L1935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1935)

```diff
-               this.nS.yE = !0
+               this.nG.lG = !0
```

#### 235. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1937` → after: `L1937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1937) · [Before (L1937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1937)

```diff
-               this.nS.yE = !1
+               this.nG.lG = !1
```

#### 236. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1939` → after: `L1939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1939) · [Before (L1939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1939)

```diff
-               this.nS.pD = !0
+               this.nG.pR = !0
```

#### 237. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1941` → after: `L1941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1941) · [Before (L1941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1941)

```diff
-               this.nS.pD = !1
+               this.nG.pR = !1
```

#### 238. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1944` → after: `L1944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1944) · [Before (L1944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1944)

```diff
-             this.nS.yE = !0, this.nS.pD = !0, this.element.removeEventListener("mousedown", JR)
+             this.nG.lG = !0, this.nG.pR = !0, this.element.removeEventListener("mousedown", Sr)
```

#### 239. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1946` → after: `L1946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1946) · [Before (L1946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1946)

```diff
-           this.element.addEventListener("mousedown", JR), this.emit("DOMready"), this.EX.xK = null
+           this.element.addEventListener("mousedown", Sr), this.emit("DOMready"), this.oB.Hx = null
```

#### 240. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1954` → after: `L1954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1954) · [Before (L1954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1954)

```diff
-         RR || (this.xw.camera.QE = !0), this.EX.un = !!RR && this.qE
+         rr || (this.gm.camera.Hk = !0), this.oB.Ez = !!rr && this.JG
```

#### 241. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1957` → after: `L1957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1957) · [Before (L1957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1957)

```diff
-         this.EX.XE = !!RR && this.WE && this.qE
+         this.oB.Wk = !!rr && this.Zk && this.JG
```

#### 242. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1960` → after: `L1960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1960) · [Before (L1960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1960)

```diff
-         return this.nS.bS
+         return this.nG.yG
```

#### 243. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1963` → after: `L1963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1963) · [Before (L1963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1963)

```diff
-         return this.nS.kS
+         return this.nG.vG
```

#### 244. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1966` → after: `L1966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1966) · [Before (L1966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1966)

```diff
-         return this.nS.yE
+         return this.nG.lG
```

#### 245. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1969` → after: `L1969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1969) · [Before (L1969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1969)

```diff
-         return this.nS.pD
+         return this.nG.pR
```

#### 246. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1974` → after: `L1974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1974) · [Before (L1974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1974)

```diff
-       var JR = RR.sE || null;
+       var Sr = rr.Vk || null;
```

#### 247. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1990` → after: `L1990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L1990) · [Before (L1990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L1990)

```diff
-     GR(40908);
+     Qr(41252);
```

#### 248. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2010` → after: `L2010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L2010) · [Before (L2010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L2010)

```diff
-     var NJ = GR(3991),
+     var qS = Qr(3938),
```

#### 249. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2012` → after: `L2012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L2012) · [Before (L2012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L2012)

```diff
-       HJ = GR(40911),
+       gS = Qr(41256),
```

#### 250. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2014-L2015` → after: `L2014-L2015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2014-L2015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L2014-L2015) · [Before (L2014-L2015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L2014-L2015)

```diff
-     var cJ = GR(40914),
-       PJ = GR(385);
+     var MS = Qr(41259),
+       GS = Qr(388);
```

#### 251. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2018` → after: `L2018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L2018) · [Before (L2018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L2018)

```diff
-         this.Xw = new cJ(RR.base, RR.vec), this.yq = JR, this.AY = !0, this.friction = GR, this.restitution = yR, this.gravityMultiplier = tR, this.Pw = uR, this.aY = !!ZR, this.Yw = -1, this.fluidDrag = -1, this.fluidDragVert = -1, this.fluidDragHoriz = -1, this.mw = null, this. … [truncated]
+         this.Om = new MS(rr.base, rr.vec), this.sj = Sr, this.tV = !0, this.friction = Qr, this.restitution = Zr, this.gravityMultiplier = Wr, this.Am = ar, this.mV = !!jr, this.Dm = -1, this.fluidDrag = -1, this.fluidDragVert = -1, this.fluidDragHoriz = -1, this.im = null, this. … [truncated]
```

#### 252. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2021` → after: `L2021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L2021) · [Before (L2021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L2021)

```diff
-         this.Xw.base[0] = RR.Xw.base[0], this.Xw.base[1] = RR.Xw.base[1], this.Xw.base[2] = RR.Xw.base[2], this.Xw.vec[0] = RR.Xw.vec[0], this.Xw.vec[1] = RR.Xw.vec[1], this.Xw.vec[2] = RR.Xw.vec[2], this.Xw.max[0] = RR.Xw.max[0], this.Xw.max[1] = RR.Xw.max[1], this.Xw.max[2] = R … [truncated]
+         this.Om.base[0] = rr.Om.base[0], this.Om.base[1] = rr.Om.base[1], this.Om.base[2] = rr.Om.base[2], this.Om.vec[0] = rr.Om.vec[0], this.Om.vec[1] = rr.Om.vec[1], this.Om.vec[2] = rr.Om.vec[2], this.Om.max[0] = rr.Om.max[0], this.Om.max[1] = rr.Om.max[1], this.Om.max[2] = r … [truncated]
```

#### 253. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2024` → after: `L2024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L2024) · [Before (L2024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L2024)

```diff
-         PJ.copy(this.Xw.base, RR.Xw.base), PJ.copy(this.Xw.vec, RR.Xw.vec), PJ.copy(this.Xw.max, RR.Xw.max), PJ.copy(this.BL, RR.BL), PJ.copy(this.resting, RR.resting), this.inFluid = RR.inFluid, this.ratioInFluid = RR.ratioInFluid, PJ.copy(this.bY, RR.bY), PJ.copy(this.vY, RR.vY … [truncated]
+         GS.copy(this.Om.base, rr.Om.base), GS.copy(this.Om.vec, rr.Om.vec), GS.copy(this.Om.max, rr.Om.max), GS.copy(this.Lh, rr.Lh), GS.copy(this.resting, rr.resting), this.inFluid = rr.inFluid, this.ratioInFluid = rr.ratioInFluid, GS.copy(this.YV, rr.YV), GS.copy(this.KV, rr.KV … [truncated]
```

#### 254. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2027` → after: `L2027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L2027) · [Before (L2027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L2027)

```diff
-         mJ(RR), PJ.subtract(RR, RR, this.Xw.base), this.Xw.translate(RR), this.mY()
+         AS(rr), GS.subtract(rr, rr, this.Om.base), this.Om.translate(rr), this.yV()
```

#### 255. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2030` → after: `L2030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L2030) · [Before (L2030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L2030)

```diff
-         return PJ.clone(this.Xw.base)
+         return GS.clone(this.Om.base)
```

#### 256. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2033` → after: `L2033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L2033) · [Before (L2033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L2033)

```diff
-         mJ(RR), this.bY[0] = this.bY[0] + RR[0], this.bY[1] = this.bY[1] + RR[1], this.bY[2] = this.bY[2] + RR[2], this.mY()
+         AS(rr), this.YV[0] = this.YV[0] + rr[0], this.YV[1] = this.YV[1] + rr[1], this.YV[2] = this.YV[2] + rr[2], this.yV()
```

#### 257. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2036` → after: `L2036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L2036) · [Before (L2036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L2036)

```diff
-         mJ(RR), this.vY[0] = this.vY[0] + RR[0], this.vY[1] = this.vY[1] + RR[1], this.vY[2] = this.vY[2] + RR[2], this.mY()
+         AS(rr), this.KV[0] = this.KV[0] + rr[0], this.KV[1] = this.KV[1] + rr[1], this.KV[2] = this.KV[2] + rr[2], this.yV()
```

#### 258. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2052` → after: `L2052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L2052) · [Before (L2052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L2052)

```diff
-     var zJ = GR(40914);
+     var VS = Qr(41259);
```

#### 259. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2059` → after: `L2059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L2059) · [Before (L2059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L2059)

```diff
-       this.Yw = .1, this.fluidDrag = .4, this.kw = 2, this.gravity = [0, -10, 0], this.minBounceImpulse = .5
+       this.Dm = .1, this.fluidDrag = .4, this.dm = 2, this.gravity = [0, -10, 0], this.minBounceImpulse = .5
```

#### 260. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2063` → after: `L2063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L2063) · [Before (L2063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L2063)

```diff
-         RR = Object.assign(new jJ, RR), this.gravity = RR.gravity, this.Yw = RR.Yw, this.kw = RR.kw, this.fluidDrag = RR.fluidDrag, this.minBounceImpulse = RR.minBounceImpulse, this.bodies = [], this._tickNext = 0, this._tickEnd = 0, this.zw = RR.zw, this.pY = RR.pY, this.rollbac … [truncated]
+         rr = Object.assign(new wS, rr), this.gravity = rr.gravity, this.Dm = rr.Dm, this.dm = rr.dm, this.fluidDrag = rr.fluidDrag, this.minBounceImpulse = rr.minBounceImpulse, this.bodies = [], this._tickNext = 0, this._tickEnd = 0, this.wm = rr.wm, this.zV = rr.zV, this.rollbac … [truncated]
```

#### 261. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2069` → after: `L2069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L2069) · [Before (L2069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L2069)

```diff
-         var ZR = this.kY(RR, JR, GR, yR, tR, uR);
+         var jr = this.XV(rr, Sr, Qr, Zr, Wr, ar);
```

#### 262. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2077` → after: `L2077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L2077) · [Before (L2077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L2077)

```diff
-         return !(JR < 0) && (this.bodies.splice(JR, 1), JR < this._tickNext && this._tickNext--, JR < this._tickEnd && this._tickEnd--, RR.Xw = RR.Pw = null, !0)
+         return !(Sr < 0) && (this.bodies.splice(Sr, 1), Sr < this._tickNext && this._tickNext--, Sr < this._tickEnd && this._tickEnd--, rr.Om = rr.Am = null, !0)
```

#### 263. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2080` → after: `L2080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L2080) · [Before (L2080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L2080)

```diff
-     var EJ = GR(38845);
+     var FS = Qr(39187);
```

#### 264. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2104` → after: `L2104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L2104) · [Before (L2104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L2104)

```diff
-           JR > 0 && (iR = `alloc_failed ${JR} bytes; ${iR}`)
+           Sr > 0 && (fr = `alloc_failed ${Sr} bytes; ${fr}`)
```

#### 265. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2110` → after: `L2110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L2110) · [Before (L2110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L2110)

```diff
-         } = FJ, fR = new QJ(`${JR}${yR}: ${tR} ${qR?"trapped":"threw"} (${iR})${ZR}`);
+         } = DS, Er = new JS(`${Sr}${Zr}: ${Wr} ${Ir?"trapped":"threw"} (${fr})${jr}`);
```

#### 266. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2114-L2115` → after: `L2114-L2115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2114-L2115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L2114-L2115) · [Before (L2114-L2115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L2114-L2115)

```diff
-       const fR = `${ZR}${qR?", and wasm is off from now on":""}`;
-       sJ(`${yR} ${qR?"trap":"error"}`, (() => new Error(`wasm physics: ${yR}: ${tR} ${qR?"trapped":"threw"} (${iR}), so ${fR}`)), uR, !qR)
+       const Er = `${jr}${Ir?", and wasm is off from now on":""}`;
+       sS(`${Zr} ${Ir?"trap":"error"}`, (() => new Error(`wasm physics: ${Zr}: ${Wr} ${Ir?"trapped":"threw"} (${fr}), so ${Er}`)), ar, !Ir)
```

#### 267. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2126` → after: `L2126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L2126) · [Before (L2126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L2126)

```diff
-       yR && console.error(iR), null === (tR = GR.fK) || void 0 === tR || tR.call(GR, iR)
+       Zr && console.error(fr), null === (Wr = Qr.jx) || void 0 === Wr || Wr.call(Qr, fr)
```

#### 268. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2167` → after: `L2167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L2167) · [Before (L2167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L2167)

```diff
-       var GR = (GR, yR, tR) => null !== JR.lY && yR <= JR.lY || RR.testSolid(GR, yR, tR);
+       var Qr = (Qr, Zr, Wr) => null !== Sr.hV && Zr <= Sr.hV || rr.testSolid(Qr, Zr, Wr);
```

#### 269. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2189` → after: `L2189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L2189) · [Before (L2189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L2189)

```diff
-         MG = "function" === typeof JR.EK && "function" === typeof JR.YK && lG(JR.EK(), CG) && lG(JR.YK(), XG), MG || console.error(new Error("wasm physics: the module's layout differs from wasmPhysicsLayout.ts (a stale @bloxd/wasm build?), so physics and picks cannot run in wasm" … [truncated]
+         BQ = "function" === typeof Sr.Vx && "function" === typeof Sr.ix && vQ(Sr.Vx(), KQ) && vQ(Sr.ix(), yQ), BQ || console.error(new Error("wasm physics: the module's layout differs from wasmPhysicsLayout.ts (a stale @bloxd/wasm build?), so physics and picks cannot run in wasm" … [truncated]
```

#### 270. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2208` → after: `L2208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L2208) · [Before (L2208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L2208)

```diff
-       return GR.includes(".") ? GR : GR + ".0"
+       return Qr.includes(".") ? Qr : Qr + ".0"
```

#### 271. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2218` → after: `L2218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L2218) · [Before (L2218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L2218)

```diff
-       return RR ? JR : 0
+       return rr ? Sr : 0
```

#### 272. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2222-L2224` → after: `L2222-L2224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2222-L2224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L2222-L2224) · [Before (L2222-L2224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L2222-L2224)

```diff
-       const JR = bG(RR.AY, 1) | bG(RR.aY, 2) | bG(RR.preventFallOffEdge, 4) | bG(RR.alwaysApplyHorizFriction, 8) | bG(RR.slideOnCollision, 16) | bG(RR.rolledBackLastTick, 32) | bG(RR.depenetrate, 64) | bG(RR.inFluid, qG) | bG(RR.Pw, iG) | bG(RR.mw, 512) | bG(RR.wakeInFluid, VG),
-         GR = RR.lY;
-       return null === GR ? JR : "number" === typeof GR ? JR | fG : null
+       const Sr = lQ(rr.tV, 1) | lQ(rr.mV, 2) | lQ(rr.preventFallOffEdge, 4) | lQ(rr.alwaysApplyHorizFriction, 8) | lQ(rr.slideOnCollision, 16) | lQ(rr.rolledBackLastTick, 32) | lQ(rr.depenetrate, 64) | lQ(rr.inFluid, IQ) | lQ(rr.Am, fQ) | lQ(rr.im, 512) | lQ(rr.wakeInFluid, pQ),
+         Qr = rr.hV;
+       return null === Qr ? Sr : "number" === typeof Qr ? Sr | EQ : null
```

#### 273. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2234` → after: `L2234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L2234) · [Before (L2234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L2234)

```diff
-       const fR = yR.Xw;
+       const Er = Zr.Om;
```

#### 274. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2243` → after: `L2243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L2243) · [Before (L2243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L2243)

```diff
-       const VR = yR.BL;
+       const pr = Zr.Lh;
```

#### 275. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2245` → after: `L2245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L2245) · [Before (L2245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L2245)

```diff
-       const KR = yR.bY;
+       const xr = Zr.YV;
```

#### 276. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2247` → after: `L2247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L2247) · [Before (L2247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L2247)

```diff
-       const wR = yR.vY;
+       const mr = Zr.KV;
```

#### 277. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2259` → after: `L2259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L2259) · [Before (L2259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L2259)

```diff
-       return 65536 * (null !== (JR = RR.FY) && void 0 !== JR ? JR : 0) + GR
+       return 65536 * (null !== (Sr = rr.HV) && void 0 !== Sr ? Sr : 0) + Qr
```

#### 278. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2263` → after: `L2263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L2263) · [Before (L2263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L2263)

```diff
-       return Math.max(RR.Dr.length, RR.Or.length)
+       return Math.max(rr.qN.length, rr.PN.length)
```

#### 279. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2302-L2304` → after: `L2302-L2304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2302-L2304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L2302-L2304) · [Before (L2302-L2304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L2302-L2304)

```diff
-         const RR = this.mirror.NK,
-           JR = RR.ar(),
-           GR = this.mirror.wasm.wasmView(Int32Array, RR.Lr(), 3 * JR);
+         const rr = this.mirror.qx,
+           Sr = rr.zN(),
+           Qr = this.mirror.wasm.wasmView(Int32Array, rr.YN(), 3 * Sr);
```

#### 280. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2307` → after: `L2307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L2307) · [Before (L2307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L2307)

```diff
-           const RR = `${GR[tR]},${GR[tR+1]},${GR[tR+2]}`;
+           const rr = `${Qr[Wr]},${Qr[Wr+1]},${Qr[Wr+2]}`;
```

#### 281. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2315-L2316` → after: `L2315-L2316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2315-L2316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L2315-L2316) · [Before (L2315-L2316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L2315-L2316)

```diff
-       if (!JR.TY) throw new Error(`wasm physics: a pick ${GR}, and picks here run only in wasm`);
-       return RR.jsPicks++, JR.TY()
+       if (!Sr.qV) throw new Error(`wasm physics: a pick ${Qr}, and picks here run only in wasm`);
+       return rr.jsPicks++, Sr.qV()
```

#### 282. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2343-L2344` → after: `L2343-L2344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2343-L2344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L2343-L2344) · [Before (L2343-L2344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L2343-L2344)

```diff
-         } = RR, qR = GR.NK, iR = this.rounds;
-         iR.UK();
+         } = rr, Ir = Qr.qx, fr = this.rounds;
+         fr.Yx();
```

#### 283. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2348` → after: `L2348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L2348) · [Before (L2348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L2348)

```diff
-           const fR = qR.Ur();
+           const Er = Ir.eN();
```

#### 284. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2357` → after: `L2357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L2357) · [Before (L2357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L2357)

```diff
-           return RR.fY[0] = VR[0], RR.fY[1] = VR[1], RR.fY[2] = VR[2], RR.VY[0] = VR[3], RR.VY[1] = VR[4], RR.VY[2] = VR[5], RR.rY[0] = VR[6], RR.rY[1] = VR[7], RR.rY[2] = VR[8], !0
+           return rr.JA[0] = pr[0], rr.JA[1] = pr[1], rr.JA[2] = pr[2], rr.sA[0] = pr[3], rr.sA[1] = pr[4], rr.sA[2] = pr[5], rr.rV[0] = pr[6], rr.rV[1] = pr[7], rr.rV[2] = pr[8], !0
```

#### 285. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2359` → after: `L2359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L2359) · [Before (L2359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L2359)

```diff
-         return qR.ur(), IG
+         return Ir.fN(), kQ
```

#### 286. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2362` → after: `L2362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L2362) · [Before (L2362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L2362)

```diff
-         const JR = this.mirror.KK,
+         const Sr = this.mirror.Ex,
```

#### 287. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2368` → after: `L2368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L2368) · [Before (L2368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L2368)

```diff
-           return RR ? RR(GR) && (null === (yR = JR.hY(GR)) || void 0 === yR || yR) : JR.vr(GR)
+           return rr ? rr(Qr) && (null === (Zr = Sr.RV(Qr)) || void 0 === Zr || Zr) : Sr.XN(Qr)
```

#### 288. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2373` → after: `L2373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L2373) · [Before (L2373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L2373)

```diff
-         }, this.mirror.NK.br(yR.index, tR.kinds, tR.shapeOffsets, tR.shapes, this.mirror.unloadedId), yR.registryKey = GR, this.tables.set(RR, yR), yR.index) : -1
+         }, this.mirror.qx.lN(Zr.index, Wr.kinds, Wr.shapeOffsets, Wr.shapes, this.mirror.unloadedId), Zr.registryKey = Qr, this.tables.set(rr, Zr), Zr.index) : -1
```

#### 289. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2376` → after: `L2376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L2376) · [Before (L2376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L2376)

```diff
-         return this.pickIoView ??= new this.mirror.wasm.WasmBufferView(Float64Array, this.mirror.NK.Wr(), 12), this.pickIoView.view()
+         return this.pickIoView ??= new this.mirror.wasm.WasmBufferView(Float64Array, this.mirror.qx.KN(), 12), this.pickIoView.view()
```

#### 290. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2391` → after: `L2391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L2391) · [Before (L2391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L2391)

```diff
-         return yR[0] === JR[0] && yR[1] === JR[1] && yR[2] === JR[2] && Object.is(yR[3], GR[0]) && Object.is(yR[4], GR[1]) && Object.is(yR[5], GR[2]) || (yR[0] = JR[0], yR[1] = JR[1], yR[2] = JR[2], yR[3] = GR[0], yR[4] = GR[1], yR[5] = GR[2], RR.Mw(yR[0], yR[1], yR[2], yR[3], yR … [truncated]
+         return Zr[0] === Sr[0] && Zr[1] === Sr[1] && Zr[2] === Sr[2] && Object.is(Zr[3], Qr[0]) && Object.is(Zr[4], Qr[1]) && Object.is(Zr[5], Qr[2]) || (Zr[0] = Sr[0], Zr[1] = Sr[1], Zr[2] = Sr[2], Zr[3] = Qr[0], Zr[4] = Qr[1], Zr[5] = Qr[2], rr.Lm(Zr[0], Zr[1], Zr[2], Zr[3], Zr … [truncated]
```

#### 291. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2396-L2397` → after: `L2396-L2397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2396-L2397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L2396-L2397) · [Before (L2396-L2397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L2396-L2397)

```diff
-         const ZR = null !== (GR = null === (yR = JR.getDesyncedBlockCount) || void 0 === yR ? void 0 : yR.call(JR)) && void 0 !== GR ? GR : 0,
-           qR = 0 === ZR ? 0 : null !== (tR = null === (uR = JR.getDesyncVersion) || void 0 === uR ? void 0 : uR.call(JR)) && void 0 !== tR ? tR : -1;
+         const jr = null !== (Qr = null === (Zr = Sr.getDesyncedBlockCount) || void 0 === Zr ? void 0 : Zr.call(Sr)) && void 0 !== Qr ? Qr : 0,
+           Ir = 0 === jr ? 0 : null !== (Wr = null === (ar = Sr.getDesyncVersion) || void 0 === ar ? void 0 : ar.call(Sr)) && void 0 !== Wr ? Wr : -1;
```

#### 292. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2403` → after: `L2403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L2403) · [Before (L2403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L2403)

```diff
-           }(JR.Rk, this.types) && dG(JR.jG, this.walkRects) && dG(JR.Zk, this.cantRects)) return this.valid;
+           }(Sr.GV, this.types) && cQ(Sr.uQ, this.walkRects) && cQ(Sr.VV, this.cantRects)) return this.valid;
```

#### 293. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2405-L2408` → after: `L2405-L2408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2405-L2408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L2405-L2408) · [Before (L2405-L2408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L2405-L2408)

```diff
-         for (const fR of JR.Rk) "number" === typeof fR && this.types.push(fR);
-         if (EG(JR.jG, this.walkRects), EG(JR.Zk, this.cantRects), 0 === ZR && 0 === this.types.length && 0 === this.walkRects.length && 0 === this.cantRects.length) return this.nonEmpty && (RR.Cw(), this.nonEmpty = !1), this.valid = !0, !0;
-         const iR = 0 === ZR ? jG : this.packDesync(JR, ZR, qR);
-         return this.valid = null !== iR, iR && (RR.Bw(iR, Float64Array.from(this.types), Float64Array.from(this.walkRects), Float64Array.from(this.cantRects)), this.nonEmpty = !0), this.valid
+         for (const Er of Sr.GV) "number" === typeof Er && this.types.push(Er);
+         if (FQ(Sr.uQ, this.walkRects), FQ(Sr.VV, this.cantRects), 0 === jr && 0 === this.types.length && 0 === this.walkRects.length && 0 === this.cantRects.length) return this.nonEmpty && (rr.Tm(), this.nonEmpty = !1), this.valid = !0, !0;
+         const fr = 0 === jr ? wQ : this.packDesync(Sr, jr, Ir);
+         return this.valid = null !== fr, fr && (rr.lm(fr, Float64Array.from(this.types), Float64Array.from(this.walkRects), Float64Array.from(this.cantRects)), this.nonEmpty = !0), this.valid
```

#### 294. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2453` → after: `L2453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L2453) · [Before (L2453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L2453)

```diff
-         this.wasm = RR, this.KK = JR, this.options = GR, this.label = yR, this.handling = tR, this.NK = void 0, this.epochStartMs = performance.now(), this.epoch = -1, this.registryState = -1, this.unsupported = !1, this.broken = !1, this.He = !1, this.picks = new mG(this), this. … [truncated]
+         this.wasm = rr, this.Ex = Sr, this.options = Qr, this.label = Zr, this.handling = Wr, this.qx = void 0, this.epochStartMs = performance.now(), this.epoch = -1, this.registryState = -1, this.unsupported = !1, this.broken = !1, this.vU = !1, this.picks = new AQ(this), this. … [truncated]
```

#### 295. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2461` → after: `L2461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L2461) · [Before (L2461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L2461)

```diff
-           return TJ(GR, yR, qR, `${tR} mirror`, "creating it", uR), null
+           return dS(Qr, Zr, Ir, `${Wr} mirror`, "creating it", ar), null
```

#### 296. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2468` → after: `L2468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L2468) · [Before (L2468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L2468)

```diff
-         return !this.He && !this.broken && this.wasm.isBloxdWasmReady()
+         return !this.vU && !this.broken && this.wasm.isBloxdWasmReady()
```

#### 297. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2477` → after: `L2477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L2477) · [Before (L2477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L2477)

```diff
-         return this.usable() && !this.unsupported && NG(this.KK) === this.registryState
+         return this.usable() && !this.unsupported && qQ(this.Ex) === this.registryState
```

#### 298. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2481` → after: `L2481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L2481) · [Before (L2481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L2481)

```diff
-         const GR = this.NK.ar();
+         const Qr = this.qx.zN();
```

#### 299. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2483-L2484` → after: `L2483-L2484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2483-L2484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L2483-L2484) · [Before (L2483-L2484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L2483-L2484)

```diff
-         const yR = Array.from(this.wasm.wasmView(Int32Array, this.NK.Lr(), 3 * GR));
-         this.NK.ur();
+         const Zr = Array.from(this.wasm.wasmView(Int32Array, this.qx.YN(), 3 * Qr));
+         this.qx.fN();
```

#### 300. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2490` → after: `L2490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L2490) · [Before (L2490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L2490)

```diff
-             this.NK.er(yR[uR], yR[uR + 1], yR[uR + 2]), this.unreadable.set(`${yR[uR]},${yR[uR+1]},${yR[uR+2]}`, tR)
+             this.qx.hN(Zr[ar], Zr[ar + 1], Zr[ar + 2]), this.unreadable.set(`${Zr[ar]},${Zr[ar+1]},${Zr[ar+2]}`, Wr)
```

#### 301. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2494-L2495` → after: `L2494-L2495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2494-L2495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L2494-L2495) · [Before (L2494-L2495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L2494-L2495)

```diff
-         const [RR, JR, GR] = this.NK.Iw(), yR = this.unreadable.get(`${RR},${JR},${GR}`);
-         if (!yR) throw new Error(`wasm physics: a read threw in chunk ${RR},${JR},${GR}, which was never marked unreadable`);
+         const [rr, Sr, Qr] = this.qx.Vm(), Zr = this.unreadable.get(`${rr},${Sr},${Qr}`);
+         if (!Zr) throw new Error(`wasm physics: a read threw in chunk ${rr},${Sr},${Qr}, which was never marked unreadable`);
```

#### 302. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2508` → after: `L2508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L2508) · [Before (L2508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L2508)

```diff
-         return this.picks.Ur(RR, JR)
+         return this.picks.eN(rr, Sr)
```

#### 303. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2514` → after: `L2514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L2514) · [Before (L2514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L2514)

```diff
-         this.usable() && this.NK.Mr(RR, JR, GR, yR)
+         this.usable() && this.qx.vN(rr, Sr, Qr, Zr)
```

#### 304. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2517` → after: `L2517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L2517) · [Before (L2517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L2517)

```diff
-         this.usable() && this.NK.ir(RR, JR, GR)
+         this.usable() && this.qx.xN(rr, Sr, Qr)
```

#### 305. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2520` → after: `L2520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L2520) · [Before (L2520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L2520)

```diff
-         this.usable() && this.NK.qr()
+         this.usable() && this.qx.pN()
```

#### 306. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2523` → after: `L2523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L2523) · [Before (L2523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L2523)

```diff
-         const tR = this.wasm.wasmView(Uint16Array, this.NK.yr(RR, JR, GR), AG),
+         const Wr = this.wasm.wasmView(Uint16Array, this.qx.jN(rr, Sr, Qr), eQ),
```

#### 307. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2532` → after: `L2532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L2532) · [Before (L2532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L2532)

```diff
-         if (this.He || !hJ(this.wasm)) return {
+         if (this.vU || !uS(this.wasm)) return {
```

#### 308. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2538` → after: `L2538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L2538) · [Before (L2538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L2538)

```diff
-         const RR = this.NK.Pr();
+         const rr = this.qx.gN();
```

#### 309. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2540-L2541` → after: `L2540-L2541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2540-L2541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L2540-L2541) · [Before (L2540-L2541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L2540-L2541)

```diff
-           resident: this.NK.Xr(),
-           known: this.NK.wr(),
+           resident: this.qx.TN(),
+           known: this.qx.UN(),
```

#### 310. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2550` → after: `L2550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L2550) · [Before (L2550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L2550)

```diff
-         const RR = this.KK,
+         const rr = this.Ex,
```

#### 311. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2554` → after: `L2554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L2554) · [Before (L2554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L2554)

```diff
-         const GR = HG(DG(RR), (JR => RR.vr(JR)));
+         const Qr = gQ(RQ(rr), (Sr => rr.XN(Sr)));
```

#### 312. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2557-L2558` → after: `L2557-L2558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2557-L2558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L2557-L2558) · [Before (L2557-L2558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L2557-L2558)

```diff
-           for (let GR = 0; GR < JR.length; GR++) JR[GR] = RR.Or[GR] ? 1 : 0;
-           this.NK.lr(GR.kinds, GR.shapeOffsets, GR.shapes, JR);
+           for (let Qr = 0; Qr < Sr.length; Qr++) Sr[Qr] = rr.PN[Qr] ? 1 : 0;
+           this.qx.LN(Qr.kinds, Qr.shapeOffsets, Qr.shapes, Sr);
```

#### 313. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2560-L2561` → after: `L2560-L2561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2560-L2561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L2560-L2561) · [Before (L2560-L2561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L2560-L2561)

```diff
-           for (let GR = 0; GR < yR.length; GR++) yR[GR] = RR.Dr[GR] ? 1 : 0;
-           this.NK.Hr(yR)
+           for (let Qr = 0; Qr < Zr.length; Qr++) Zr[Qr] = rr.qN[Qr] ? 1 : 0;
+           this.qx.RN(Zr)
```

#### 314. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2566` → after: `L2566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L2566) · [Before (L2566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L2566)

```diff
-         if (this.options.NK) return;
+         if (this.options.qx) return;
```

#### 315. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2568` → after: `L2568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L2568) · [Before (L2568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L2568)

```diff
-         RR !== this.epoch && (this.epoch = RR, this.NK.Br(RR), this.NK.evict(this.options.maxResident, Math.max(0, RR - this.options.idleSeconds)))
+         rr !== this.epoch && (this.epoch = rr, this.qx.ON(rr), this.qx.evict(this.options.maxResident, Math.max(0, rr - this.options.idleSeconds)))
```

#### 316. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2571` → after: `L2571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L2571) · [Before (L2571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L2571)

```diff
-         this.He || (this.He = !0, this.options.NK || RG(this.wasm, this.NK))
+         this.vU || (this.vU = !0, this.options.qx || rQ(this.wasm, this.qx))
```

#### 317. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2581` → after: `L2581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L2581) · [Before (L2581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L2581)

```diff
-           NK: JR
+           qx: Sr
```

#### 318. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2617` → after: `L2617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L2617) · [Before (L2617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L2617)

```diff
-         GR[yR] = JR ? GR[yR] | RR : GR[yR] & ~RR
+         Qr[Zr] = Sr ? Qr[Zr] | rr : Qr[Zr] & ~rr
```

#### 319. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2751` → after: `L2751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L2751) · [Before (L2751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L2751)

```diff
-         hG(this.BL, RR)
+         uQ(this.Lh, rr)
```

#### 320. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2763` → after: `L2763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L2763) · [Before (L2763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L2763)

```diff
-         hG(this.bY, RR)
+         uQ(this.YV, rr)
```

#### 321. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2769` → after: `L2769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L2769) · [Before (L2769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L2769)

```diff
-         hG(this.vY, RR)
+         uQ(this.KV, rr)
```

#### 322. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2776` → after: `L2776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L2776) · [Before (L2776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L2776)

```diff
-     var Ry = GR(40914);
+     var rZ = Qr(41259);
```

#### 323. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2798` → after: `L2798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L2798) · [Before (L2798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L2798)

```diff
-         rR[eR + 0] = yR, rR[eR + 1] = tR, rR[eR + 2] = uR, rR[eR + 3] = ZR, rR[eR + 4] = -1, rR[eR + 5] = -1, rR[eR + 6] = -1, rR[eR + 7] = -1, rR[eR + 8] = 0, rR[eR + 9] = 10, rR[eR + JG] = 0, rR[eR + JG + 1] = 0, rR[eR + JG + 2] = 0, rR[eR + 13] = 0, rR[eR + GG] = 17 | (iR ? 2  … [truncated]
+         Nr[Ur + 0] = Zr, Nr[Ur + 1] = Wr, Nr[Ur + 2] = ar, Nr[Ur + 3] = jr, Nr[Ur + 4] = -1, Nr[Ur + 5] = -1, Nr[Ur + 6] = -1, Nr[Ur + 7] = -1, Nr[Ur + 8] = 0, Nr[Ur + 9] = 10, Nr[Ur + SQ] = 0, Nr[Ur + SQ + 1] = 0, Nr[Ur + SQ + 2] = 0, Nr[Ur + 13] = 0, Nr[Ur + QQ] = 17 | (fr ? 2  … [truncated]
```

#### 324. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2849` → after: `L2849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L2849) · [Before (L2849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L2849)

```diff
-     Gy.prototype.loadFromCopy = IJ.prototype.loadFromCopy, Gy.prototype.loadStateFromCopy = IJ.prototype.loadStateFromCopy, Gy.prototype.setPosition = IJ.prototype.setPosition, Gy.prototype.vW = IJ.prototype.vW, Gy.prototype.applyForce = IJ.prototype.applyForce, Gy.prototype.appl … [truncated]
+     QZ.prototype.loadFromCopy = kS.prototype.loadFromCopy, QZ.prototype.loadStateFromCopy = kS.prototype.loadStateFromCopy, QZ.prototype.setPosition = kS.prototype.setPosition, QZ.prototype.JY = kS.prototype.JY, QZ.prototype.applyForce = kS.prototype.applyForce, QZ.prototype.appl … [truncated]
```

#### 325. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2852` → after: `L2852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L2852) · [Before (L2852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L2852)

```diff
-         this.wasm = RR, this.physics = JR, this.handle = void 0, this.f64Pages = [], this.f32Pages = [], this.fresh = [], this.freed = [], this.freedHead = 0, this.slotOwners = [], this.releaseCount = 0, this.handle = new(RR.getBloxdWasm().SR)
+         this.wasm = rr, this.physics = Sr, this.handle = void 0, this.f64Pages = [], this.f32Pages = [], this.fresh = [], this.freed = [], this.freedHead = 0, this.slotOwners = [], this.releaseCount = 0, this.handle = new(rr.getBloxdWasm().Or)
```

#### 326. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2881` → after: `L2881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L2881) · [Before (L2881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L2881)

```diff
-         const RR = this.handle.sK(),
+         const rr = this.handle.Dx(),
```

#### 327. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2883` → after: `L2883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L2883) · [Before (L2883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L2883)

```diff
-         this.f64Pages.push(new JR(Float64Array, this.handle.Gw(RR), 4096)), this.f32Pages.push(new JR(Float32Array, this.handle.Jw(RR), 5376));
+         this.f64Pages.push(new Sr(Float64Array, this.handle.Qm(rr), 4096)), this.f32Pages.push(new Sr(Float32Array, this.handle.Sm(rr), 5376));
```

#### 328. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2953` → after: `L2953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L2953) · [Before (L2953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L2953)

```diff
-         return null !== (JR = this.slotOfBody.get(RR)) && void 0 !== JR ? JR : -1
+         return null !== (Sr = this.slotOfBody.get(rr)) && void 0 !== Sr ? Sr : -1
```

#### 329. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2966-L2967` → after: `L2966-L2967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2966-L2967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L2966-L2967) · [Before (L2966-L2967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L2966-L2967)

```diff
-         if (this.rows.invalidate(), this.isStaging.length < RR.hK) {
-           const JR = new Uint8Array(RR.hK);
+         if (this.rows.invalidate(), this.isStaging.length < rr.sx) {
+           const Sr = new Uint8Array(rr.sx);
```

#### 330. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2976` → after: `L2976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L2976) · [Before (L2976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L2976)

```diff
-             const uR = yR.Xw;
+             const ar = Zr.Om;
```

#### 331. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2987-L2989` → after: `L2987-L2989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2987-L2989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L2987-L2989) · [Before (L2987-L2989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L2987-L2989)

```diff
-             const fR = yR.BL,
-               VR = yR.bY,
-               KR = yR.vY,
+             const Er = Zr.Lh,
+               pr = Zr.YV,
+               xr = Zr.KV,
```

#### 332. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2994` → after: `L2994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L2994) · [Before (L2994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L2994)

```diff
-                 yq: eR,
+                 sj: Ur,
```

#### 333. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2998` → after: `L2998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR2998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L2998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L2998) · [Before (L2998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L2998)

```diff
-                 Yw: UR,
+                 Dm: Yr,
```

#### 334. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3009` → after: `L3009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3009) · [Before (L3009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3009)

```diff
-             RR[lR + 0] = eR, RR[lR + 1] = aR, RR[lR + 2] = LR, RR[lR + 3] = nR, RR[lR + 4] = UR, RR[lR + 5] = WR, RR[lR + 6] = AR, RR[lR + 7] = CR, RR[lR + 8] = XR, RR[lR + 9] = MR, RR[lR + JG] = rR[0], RR[lR + JG + 1] = rR[1], RR[lR + JG + 2] = rR[2], RR[lR + 13] = BR & fG ? yR. … [truncated]
+             rr[vr + 0] = Ur, rr[vr + 1] = tr, rr[vr + 2] = hr, rr[vr + 3] = zr, rr[vr + 4] = Yr, rr[vr + 5] = nr, rr[vr + 6] = er, rr[vr + 7] = Kr, rr[vr + 8] = yr, rr[vr + 9] = Br, rr[vr + SQ] = Nr[0], rr[vr + SQ + 1] = Nr[1], rr[vr + SQ + 2] = Nr[2], rr[vr + 13] = Tr & EQ ? Zr. … [truncated]
```

#### 335. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3049` → after: `L3049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3049) · [Before (L3049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3049)

```diff
-         this.physics = RR, this.kind = JR, this.wasm = GR, this.rollsBack = yR, this.hostStore = tR, this.current = null, this.store = null, this.staging = void 0, this.listView = null, this.impactsView = null, this.resultView = null, this.listed = 0, this.listSynced = !1, this.l … [truncated]
+         this.physics = rr, this.kind = Sr, this.wasm = Qr, this.rollsBack = Zr, this.hostStore = Wr, this.current = null, this.store = null, this.staging = void 0, this.listView = null, this.impactsView = null, this.resultView = null, this.listed = 0, this.listSynced = !1, this.l … [truncated]
```

#### 336. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3051` → after: `L3051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3051) · [Before (L3051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3051)

```diff
-           return JR >= 0 ? JR : this.staging.YM(RR)
+           return Sr >= 0 ? Sr : this.staging.lT(rr)
```

#### 337. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3071` → after: `L3071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3071) · [Before (L3071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3071)

```diff
-         return "string" === typeof JR ? JR : RR && !RR(JR, this.YM, !0) ? "has a lookup context wasm can't take (a world offset or walk-through override)" : JR
+         return "string" === typeof Sr ? Sr : rr && !rr(Sr, this.lT, !0) ? "has a lookup context wasm can't take (a world offset or walk-through override)" : Sr
```

#### 338. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3087` → after: `L3087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3087) · [Before (L3087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3087)

```diff
-           this.current = new(this.wasm.getBloxdWasm().PhysicsEngine)(JR.Yw, JR.fluidDrag, JR.kw, GR[0], GR[1], GR[2], JR.minBounceImpulse, UG[this.kind]), this.options.fill(NaN), this.listView = null, this.listed = 0, this.listSynced = !1, this.rollbackSlot = -1
+           this.current = new(this.wasm.getBloxdWasm().PhysicsEngine)(Sr.Dm, Sr.fluidDrag, Sr.dm, Qr[0], Qr[1], Qr[2], Sr.minBounceImpulse, YQ[this.kind]), this.options.fill(NaN), this.listView = null, this.listed = 0, this.listSynced = !1, this.rollbackSlot = -1
```

#### 339. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3092` → after: `L3092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3092) · [Before (L3092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3092)

```diff
-         if (RR.bw() < JR && (RR.Hw(Math.max(JR, 2 * RR.bw(), 16)), this.listView = null), !this.listView) {
+         if (rr.qm() < Sr && (rr.Gm(Math.max(Sr, 2 * rr.qm(), 16)), this.listView = null), !this.listView) {
```

#### 340. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3094` → after: `L3094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3094) · [Before (L3094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3094)

```diff
-           this.listView = new JR(Uint32Array, RR.Ow(), RR.bw()), this.impactsView = new JR(Float64Array, RR.gw(), 3), this.resultView = new JR(Float64Array, RR.ow(), 5)
+           this.listView = new Sr(Uint32Array, rr.Rm(), rr.qm()), this.impactsView = new Sr(Float64Array, rr.Hm(), 3), this.resultView = new Sr(Float64Array, rr.km(), 5)
```

#### 341. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3102` → after: `L3102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3102) · [Before (L3102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3102)

```diff
-           const RR = new Uint32Array(this.store.hK);
+           const rr = new Uint32Array(this.store.sx);
```

#### 342. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3114` → after: `L3114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3114) · [Before (L3114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3114)

```diff
-           let iR = this.YM(qR);
+           let fr = this.lT(Ir);
```

#### 343. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3127` → after: `L3127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3127) · [Before (L3127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3127)

```diff
-         return this.reserveList(JR, yR), this.staging.clear(), null === this.fillList(RR, !0) ? `lists a body twice, or ${fy}` : (this.listSynced && yR === this.listed || (JR.Ew(yR, GR.handle), this.listSynced = !0, this.listed = yR), this.listReleases = GR.releases, this.setRoll … [truncated]
+         return this.reserveList(Sr, Zr), this.staging.clear(), null === this.fillList(rr, !0) ? `lists a body twice, or ${EZ}` : (this.listSynced && Zr === this.listed || (Sr.Jm(Zr, Qr.handle), this.listSynced = !0, this.listed = Zr), this.listReleases = Qr.releases, this.setRoll … [truncated]
```

#### 344. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3133` → after: `L3133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3133) · [Before (L3133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3133)

```diff
-         GR < 0 && (GR = this.staging.rollbackSlot()), GR !== this.rollbackSlot && (RR.Tw(GR, JR.handle), this.rollbackSlot = GR)
+         Qr < 0 && (Qr = this.staging.rollbackSlot()), Qr !== this.rollbackSlot && (rr.rN(Qr, Sr.handle), this.rollbackSlot = Qr)
```

#### 345. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3144` → after: `L3144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3144) · [Before (L3144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3144)

```diff
-         return this.reserveList(yR, JR), null === this.fillList(RR, !1) ? 2 : (yR.Ew(JR, GR.handle), this.listSynced = !0, this.listed = JR, this.listReleases = GR.releases, 1)
+         return this.reserveList(Zr, Sr), null === this.fillList(rr, !1) ? 2 : (Zr.Jm(Sr, Qr.handle), this.listSynced = !0, this.listed = Sr, this.listReleases = Qr.releases, 1)
```

#### 346. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3149` → after: `L3149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3149) · [Before (L3149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3149)

```diff
-           const yR = this.YM(RR[GR]);
+           const Zr = this.lT(rr[Qr]);
```

#### 347. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3164` → after: `L3164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3164) · [Before (L3164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3164)

```diff
-         Object.is(JR[0], RR.Yw) && Object.is(JR[1], RR.fluidDrag) && Object.is(JR[2], RR.kw) && Object.is(JR[3], GR[0]) && Object.is(JR[4], GR[1]) && Object.is(JR[5], GR[2]) && Object.is(JR[6], RR.minBounceImpulse) || (JR[0] = RR.Yw, JR[1] = RR.fluidDrag, JR[2] = RR.kw, JR[3] = G … [truncated]
+         Object.is(Sr[0], rr.Dm) && Object.is(Sr[1], rr.fluidDrag) && Object.is(Sr[2], rr.dm) && Object.is(Sr[3], Qr[0]) && Object.is(Sr[4], Qr[1]) && Object.is(Sr[5], Qr[2]) && Object.is(Sr[6], rr.minBounceImpulse) || (Sr[0] = rr.Dm, Sr[1] = rr.fluidDrag, Sr[2] = rr.dm, Sr[3] = Q … [truncated]
```
