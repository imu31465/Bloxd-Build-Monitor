# Changed — Bundle Modifications Report (Part 075 / 126)

- **Updated at**: `2026-11-28T08:15 JST`
- **Part**: `75 / 126` (**420** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 074](part-074.md) · [Part 076 →](part-076.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/90.js` (4udp6d.2845de07 → fl4vv.bd3c59ce · continued)

- **File**: `bundles/bloxd.io/chunks/js/90.js` (4930 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20)

#### 4587. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L37643` → after: `L37106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L37106) · [Before (L37643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L37643)

```diff
-               strideBlocks: VR(yR.stride, `${GR}.stride`)
+               strideBlocks: pr(Zr.stride, `${Qr}.stride`)
```

#### 4588. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L37650-L37653` → after: `L37113-L37116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37113-L37116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L37113-L37116) · [Before (L37650-L37653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L37650-L37653)

```diff
-         if (void 0 !== yR.stride) throw new iR(`${GR}: give each blend clip its own stride`);
-         if (void 0 === yR.blend) throw new iR(`${GR}: needs a "clip" or a "blend"`);
-         const qR = eR(yR.blend, `${GR}.blend`);
-         aR(qR, ["input", "clips"], `${GR}.blend`);
+         if (void 0 !== Zr.stride) throw new fr(`${Qr}: give each blend clip its own stride`);
+         if (void 0 === Zr.blend) throw new fr(`${Qr}: needs a "clip" or a "blend"`);
+         const Ir = Ur(Zr.blend, `${Qr}.blend`);
+         tr(Ir, ["input", "clips"], `${Qr}.blend`);
```

#### 4589. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L37655-L37656` → after: `L37118-L37119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37118-L37119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L37118-L37119) · [Before (L37655-L37656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L37655-L37656)

```diff
-         if (!Array.isArray(KR) || 0 === KR.length || KR.length > 16) throw new iR(`${GR}.blend.clips must list 1-16 clips`);
-         const wR = KR.map(((RR, JR) => this.compileBlendChild(RR, `${GR}.blend.clips[${JR}]`)));
+         if (!Array.isArray(xr) || 0 === xr.length || xr.length > 16) throw new fr(`${Qr}.blend.clips must list 1-16 clips`);
+         const mr = xr.map(((rr, Sr) => this.compileBlendChild(rr, `${Qr}.blend.clips[${Sr}]`)));
```

#### 4590. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L37658` → after: `L37121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L37121) · [Before (L37658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L37658)

```diff
-           if (wR[fR].at <= wR[fR - 1].at) throw new iR(`${GR}.blend.clips must be in increasing "at" order`);
+           if (mr[Er].at <= mr[Er - 1].at) throw new fr(`${Qr}.blend.clips must be in increasing "at" order`);
```

#### 4591. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L37662` → after: `L37125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L37125) · [Before (L37662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L37662)

```diff
-           blendInput: this.input(qR.input, `${GR}.blend.input`),
+           blendInput: this.input(Ir.input, `${Qr}.blend.input`),
```

#### 4592. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L37673-L37674` → after: `L37136-L37137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37136-L37137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L37136-L37137) · [Before (L37673-L37674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L37673-L37674)

```diff
-         if (Array.isArray(RR) && (RR.length < 2 || RR.length > 3)) throw new iR(`${JR} must be [clip, at] or [clip, at, stride]`);
-         if (aR(GR, ["clip", "at", "stride"], JR), "number" !== typeof GR.at) throw new iR(`${JR}.at must be a number`);
+         if (Array.isArray(rr) && (rr.length < 2 || rr.length > 3)) throw new fr(`${Sr} must be [clip, at] or [clip, at, stride]`);
+         if (tr(Qr, ["clip", "at", "stride"], Sr), "number" !== typeof Qr.at) throw new fr(`${Sr}.at must be a number`);
```

#### 4593. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L37676-L37678` → after: `L37139-L37141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37139-L37141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L37139-L37141) · [Before (L37676-L37678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L37676-L37678)

```diff
-           clip: this.clip(GR.clip, `${JR}.clip`),
-           at: rR(GR.at, 0, -1e6, CR, `${JR}.at`),
-           strideBlocks: VR(GR.stride, `${JR}.stride`)
+           clip: this.clip(Qr.clip, `${Sr}.clip`),
+           at: Nr(Qr.at, 0, -1e6, Kr, `${Sr}.at`),
+           strideBlocks: pr(Qr.stride, `${Sr}.stride`)
```

#### 4594. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L37687-L37688` → after: `L37150-L37151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37150-L37151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L37150-L37151) · [Before (L37687-L37688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L37687-L37688)

```diff
-           const RR = `actions.${tR}`;
-           if (!MR.test(tR)) throw new iR(`${RR}: action names must be identifiers`);
+           const rr = `actions.${Wr}`;
+           if (!Br.test(Wr)) throw new fr(`${rr}: action names must be identifiers`);
```

#### 4595. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L37691-L37692` → after: `L37154-L37155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37154-L37155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L37154-L37155) · [Before (L37691-L37692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L37691-L37692)

```diff
-           const uR = this.clip(GR.clip, `${RR}.clip`);
-           if (ZR.i.has(tR) && uR.clip.loop !== UR.e.Once) throw new iR(`${RR}: the game plays this action, so its clip must end (not loop or hold on its last frame)`);
+           const ar = this.clip(Qr.clip, `${rr}.clip`);
+           if (jr.k.has(Wr) && ar.clip.loop !== Yr.j.Once) throw new fr(`${rr}: the game plays this action, so its clip must end (not loop or hold on its last frame)`);
```

#### 4596. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L37696-L37699` → after: `L37159-L37162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37159-L37162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L37159-L37162) · [Before (L37696-L37699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L37696-L37699)

```diff
-             mode: void 0 === GR.mode ? ZR.g.Override : KR(GR.mode, `${RR}.mode`),
-             bones: wR(GR.bones, `${RR}.bones`),
-             fadeInSeconds: rR(GR.fadeIn, .1, 0, 10, `${RR}.fadeIn`),
-             fadeOutSeconds: rR(GR.fadeOut, .1, 0, 10, `${RR}.fadeOut`)
+             mode: void 0 === Qr.mode ? jr.g.Override : xr(Qr.mode, `${rr}.mode`),
+             bones: mr(Qr.bones, `${rr}.bones`),
+             fadeInSeconds: Nr(Qr.fadeIn, .1, 0, 10, `${rr}.fadeIn`),
+             fadeOutSeconds: Nr(Qr.fadeOut, .1, 0, 10, `${rr}.fadeOut`)
```

#### 4597. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L37705-L37708` → after: `L37168-L37171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37168-L37171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L37168-L37171) · [Before (L37705-L37708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L37705-L37708)

```diff
-         if ("string" !== typeof RR || 0 === RR.length) throw new iR(`${JR} must name a clip`);
-         const GR = (0, LR.g)(this.options.pools, RR);
-         if ("ambiguous" === GR) throw new iR(`${JR}: several clips are called "${RR}"; use the full animation name`);
-         if ("noClip" === GR) throw new iR(`${JR}: no clip named "${RR}"`);
+         if ("string" !== typeof rr || 0 === rr.length) throw new fr(`${Sr} must name a clip`);
+         const Qr = (0, hr.l)(this.options.pools, rr);
+         if ("ambiguous" === Qr) throw new fr(`${Sr}: several clips are called "${rr}"; use the full animation name`);
+         if ("noClip" === Qr) throw new fr(`${Sr}: no clip named "${rr}"`);
```

#### 4598. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L37712-L37713` → after: `L37175-L37176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37175-L37176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L37175-L37176) · [Before (L37712-L37713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L37712-L37713)

```diff
-         const GR = "string" === typeof RR ? WR.f.get(RR) : void 0;
-         if (void 0 === GR) throw new iR(`${JR} must be one of ${[...WR.f.keys()].join(", ")}`);
+         const Qr = "string" === typeof rr ? nr.g.get(rr) : void 0;
+         if (void 0 === Qr) throw new fr(`${Sr} must be one of ${[...nr.g.keys()].join(", ")}`);
```

#### 4599. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L37718` → after: `L37181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L37181) · [Before (L37718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L37718)

```diff
-         if (void 0 === GR) throw new iR(`${JR} must name an engine input or one of the binding's inputs`);
+         if (void 0 === Qr) throw new fr(`${Sr} must name an engine input or one of the binding's inputs`);
```

#### 4600. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L37732` → after: `L37195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L37195) · [Before (L37732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L37732)

```diff
-     var bR = GR(38760);
+     var lr = Qr(39090);
```

#### 4601. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L37739` → after: `L37202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L37202) · [Before (L37739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L37739)

```diff
-       oR = new Set([...yR.k, ...tR.n, HR]),
+       Cr = new Set([...Zr.j, ...Wr.s, gr]),
```

#### 4602. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L37743-L37744` → after: `L37206-L37207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37206-L37207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L37206-L37207) · [Before (L37743-L37744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L37743-L37744)

```diff
-       mR = new Set(uR.b),
-       zR = new Set([...yR.l.filter((RR => !DR.has(RR))), ...mR]),
+       Ar = new Set(ar.e),
+       Vr = new Set([...Zr.n.filter((rr => !Rr.has(rr))), ...Ar]),
```

#### 4603. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L37752` → after: `L37215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L37215) · [Before (L37752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L37752)

```diff
-       return jR(RR) ? IR : oR
+       return wr(rr) ? kr : Cr
```

#### 4604. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L37758` → after: `L37221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L37221) · [Before (L37758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L37758)

```diff
-         yR = GR ? SR : zR,
+         Zr = Qr ? ir : Vr,
```

#### 4605. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L37762` → after: `L37225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L37225) · [Before (L37762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L37762)

```diff
-             severity: UR.c.Error,
+             severity: Yr.d.Error,
```

#### 4606. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L37770-L37771` → after: `L37233-L37234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37233-L37234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L37233-L37234) · [Before (L37770-L37771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L37770-L37771)

```diff
-       if (!GR && (ZR.length > vR || qR > OR)) return uR("animations", `${ZR.length} files and ${qR} characters, over the ${vR} file or ${OR} character limit`), {
-         pool: new LR.b([]),
+       if (!Qr && (jr.length > Xr || Ir > Pr)) return ar("animations", `${jr.length} files and ${Ir} characters, over the ${Xr} file or ${Pr} character limit`), {
+         pool: new hr.e([]),
```

#### 4607. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L37790` → after: `L37253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L37253) · [Before (L37790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L37790)

```diff
-           void 0 !== RR && (VR.has(RR) ? uR(aR, `${RR} already has a clip file, ${VR.get(RR).name}`) : VR.set(RR, {
+           void 0 !== rr && (pr.has(rr) ? ar(tr, `${rr} already has a clip file, ${pr.get(rr).name}`) : pr.set(rr, {
```

#### 4608. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L37796` → after: `L37259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L37259) · [Before (L37796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L37796)

```diff
-           null === RR ? uR(aR, 'has no target: set "target" to the mob or vehicle it animates') : DR.has(RR) && !GR ? uR(aR, `packs can't animate ${RR}`) : yR.has(RR) ? fR.has(RR) ? uR(aR, `${RR} already has a binding, in ${fR.get(RR).name}`) : fR.set(RR, {
+           null === rr ? ar(tr, 'has no target: set "target" to the mob or vehicle it animates') : Rr.has(rr) && !Qr ? ar(tr, `packs can't animate ${rr}`) : Zr.has(rr) ? Er.has(rr) ? ar(tr, `${rr} already has a binding, in ${Er.get(rr).name}`) : Er.set(rr, {
```

#### 4609. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L37799` → after: `L37262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L37262) · [Before (L37799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L37799)

```diff
-           }) : uR(aR, `${RR} isn't a mob or vehicle packs can animate`)
+           }) : ar(tr, `${rr} isn't a mob or vehicle packs can animate`)
```

#### 4610. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L37808` → after: `L37271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L37271) · [Before (L37808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L37808)

```diff
-         rR = new LR.b(iR, (RR => wR.has(RR)));
+         Nr = new hr.e(fr, (rr => mr.has(rr)));
```

#### 4611. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L37813` → after: `L37276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L37276) · [Before (L37813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L37813)

```diff
-         pool: new LR.b([nR])
+         pool: new hr.e([zr])
```

#### 4612. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L37853` → after: `L37316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L37316) · [Before (L37853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L37853)

```diff
-         diagnostics: [TR(tR.file, `${GR} has no built-in animation to play these clips: add a binding for it`)]
+         diagnostics: [dr(Wr.file, `${Qr} has no built-in animation to play these clips: add a binding for it`)]
```

#### 4613. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L37855` → after: `L37318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L37318) · [Before (L37855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L37855)

```diff
-       const qR = BR(ZR.text, `${tR.file} in the built-in ${GR} animation`, {
+       const Ir = Tr(jr.text, `${Wr.file} in the built-in ${Qr} animation`, {
```

#### 4614. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L37860` → after: `L37323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L37323) · [Before (L37860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L37860)

```diff
-       const iR = [...(0, bR.e)(qR.binding)];
+       const fr = [...(0, lr.c)(Ir.binding)];
```

#### 4615. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L37871` → after: `L37334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L37334) · [Before (L37871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L37871)

```diff
-           return (0, LR.c)(JR.id)
+           return (0, hr.h)(Sr.id)
```

#### 4616. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L37875` → after: `L37338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L37338) · [Before (L37875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L37875)

```diff
-           diagnostics: [...qR.diagnostics, TR(tR.file, `none of its clips replaces one the ${GR} plays (${[...RR].join(", ")}): they play only by name`)]
+           diagnostics: [...Ir.diagnostics, dr(Wr.file, `none of its clips replaces one the ${Qr} plays (${[...rr].join(", ")}): they play only by name`)]
```

#### 4617. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L37883` → after: `L37346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L37346) · [Before (L37883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L37883)

```diff
-         severity: UR.c.Warning,
+         severity: Yr.d.Warning,
```

#### 4618. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L37889` → after: `L37352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L37352) · [Before (L37889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L37889)

```diff
-   38760: (RR, JR, GR) => {
+   39090: (rr, Sr, Qr) => {
```

#### 4619. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L37891-L37893` → after: `L37354-L37356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37354-L37356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L37354-L37356) · [Before (L37891-L37893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L37891-L37893)

```diff
-       d: () => tR,
-       e: () => ZR,
-       g: () => uR
+       b: () => Wr,
+       c: () => jr,
+       f: () => ar
```

#### 4620. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L37895` → after: `L37358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L37358) · [Before (L37895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L37895)

```diff
-     var yR = GR(38720);
+     var Zr = Qr(39064);
```

#### 4621. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L37900` → after: `L37363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L37363) · [Before (L37900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L37900)

```diff
-           return this.mask(RR.bones, `layer "${RR.name}"`)
+           return this.mask(rr.bones, `layer "${rr.name}"`)
```

#### 4622. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L37903` → after: `L37366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L37366) · [Before (L37903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L37903)

```diff
-         for (const yR of RR.actions.values()) this.boneIndices(yR.clip.clip), GR.set(yR.name, this.mask(yR.bones, `action "${yR.name}"`));
+         for (const Zr of rr.actions.values()) this.boneIndices(Zr.clip.clip), Qr.set(Zr.name, this.mask(Zr.bones, `action "${Zr.name}"`));
```

#### 4623. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L37918` → after: `L37381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L37381) · [Before (L37918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L37918)

```diff
-           this.animatesRig ||= RR.bones.some((RR => this.rig.namesBone(RR.name))), GR.length > 0 && this.warn(`${RR.id} animates bones ${this.rig.id} does not have: ${GR.map((RR=>RR.name)).join(", ")}`), this.boneIndicesByClip.set(RR, JR)
+           this.animatesRig ||= rr.bones.some((rr => this.rig.namesBone(rr.name))), Qr.length > 0 && this.warn(`${rr.id} animates bones ${this.rig.id} does not have: ${Qr.map((rr=>rr.name)).join(", ")}`), this.boneIndicesByClip.set(rr, Sr)
```

#### 4624. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L37927` → after: `L37390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L37390) · [Before (L37927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L37927)

```diff
-           RR < 0 ? (this.missing.add(yR), this.warn(`${JR} masks bone ${yR}, which ${this.rig.id} does not have`)) : GR[RR] = 1
+           rr < 0 ? (this.missing.add(Zr), this.warn(`${Sr} masks bone ${Zr}, which ${this.rig.id} does not have`)) : Qr[rr] = 1
```

#### 4625. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L37933` → after: `L37396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L37396) · [Before (L37933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L37933)

```diff
-           severity: yR.c.Warning,
+           severity: Zr.d.Warning,
```

#### 4626. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L37966` → after: `L37429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L37429) · [Before (L37966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L37966)

```diff
-         for (const RR of null !== (JR = null === GR || void 0 === GR ? void 0 : GR.children) && void 0 !== JR ? JR : []) {
+         for (const rr of null !== (Sr = null === Qr || void 0 === Qr ? void 0 : Qr.children) && void 0 !== Sr ? Sr : []) {
```

#### 4627. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L37972` → after: `L37435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L37435) · [Before (L37972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L37972)

```diff
-   38712: (RR, JR, GR) => {
+   39062: (rr, Sr, Qr) => {
```

#### 4628. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L37975-L37977` → after: `L37438-L37440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37438-L37440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L37438-L37440) · [Before (L37975-L37977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L37975-L37977)

```diff
-       d: () => eR,
-       h: () => CR,
-       i: () => MR,
+       e: () => Ur,
+       g: () => Kr,
+       j: () => Br,
```

#### 4629. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L37979-L37980` → after: `L37442-L37443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37442-L37443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L37442-L37443) · [Before (L37979-L37980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L37979-L37980)

```diff
-       m: () => LR,
-       q: () => nR
+       o: () => hr,
+       p: () => zr
```

#### 4630. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L37982-L37983` → after: `L37445-L37446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37445-L37446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L37445-L37446) · [Before (L37982-L37983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L37982-L37983)

```diff
-     var yR = GR(38720),
-       tR = GR(38729);
+     var Zr = Qr(39064),
+       Wr = Qr(39069);
```

#### 4631. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L37989` → after: `L37452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L37452) · [Before (L37989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L37989)

```diff
-       return "" === RR || "0" === RR || RR.length > tR.d ? RR : uR.test(RR) ? (-parseFloat(RR)).toString() : function(RR, JR) {
+       return "" === rr || "0" === rr || rr.length > Wr.e ? rr : ar.test(rr) ? (-parseFloat(rr)).toString() : function(rr, Sr) {
```

#### 4632. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L38010` → after: `L37473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L37473) · [Before (L38010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L38010)

```diff
-         if (-1 === yR) return RR.includes("=") ? `${RR};${JR("")}` : JR(RR);
+         if (-1 === Zr) return rr.includes("=") ? `${rr};${Sr("")}` : Sr(rr);
```

#### 4633. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L38013` → after: `L37476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L37476) · [Before (L38013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L38013)

```diff
-         return uR.includes("=") ? `${RR};${JR("")}` : `${tR};${JR(uR)}`
+         return ar.includes("=") ? `${rr};${Sr("")}` : `${Wr};${Sr(ar)}`
```

#### 4634. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L38067` → after: `L37530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L37530) · [Before (L38067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L38067)

```diff
-       if (!(GR >= 0 && GR <= eR)) throw new rR(`${JR}: keyframe time "${RR}" must be a number of seconds from 0 to ${eR}`);
+       if (!(Qr >= 0 && Qr <= Ur)) throw new Nr(`${Sr}: keyframe time "${rr}" must be a number of seconds from 0 to ${Ur}`);
```

#### 4635. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L38075` → after: `L37538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L37538) · [Before (L38075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L38075)

```diff
-       throw new rR(`${JR}: lerp_mode ${JSON.stringify(GR)} is not supported (linear or catmullrom)`)
+       throw new Nr(`${Sr}: lerp_mode ${JSON.stringify(Qr)} is not supported (linear or catmullrom)`)
```

#### 4636. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L38085` → after: `L37548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L37548) · [Before (L38085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L38085)

```diff
-         if (tR && !ZR && uR.push(WR(tR, JR, GR)), 0 === uR.length) throw new rR(`${GR}: a keyframe needs "post" and optionally "pre"`);
+         if (Wr && !jr && ar.push(nr(Wr, Sr, Qr)), 0 === ar.length) throw new Nr(`${Qr}: a keyframe needs "post" and optionally "pre"`);
```

#### 4637. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L38095` → after: `L37558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L37558) · [Before (L38095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L38095)

```diff
-           case yR.d.Position:
+           case Zr.h.Position:
```

#### 4638. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L38097` → after: `L37560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L37560) · [Before (L38097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L38097)

```diff
-           case yR.d.Rotation:
+           case Zr.h.Rotation:
```

#### 4639. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L38099` → after: `L37562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L37562) · [Before (L38099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L38099)

```diff
-           case yR.d.Scale:
+           case Zr.h.Scale:
```

#### 4640. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L38104` → after: `L37567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L37567) · [Before (L38104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L38104)

```diff
-           if ("number" !== typeof GR && "string" !== typeof GR) throw new rR(`${JR}: vector elements must be numbers or Molang strings`);
+           if ("number" !== typeof Qr && "string" !== typeof Qr) throw new Nr(`${Sr}: vector elements must be numbers or Molang strings`);
```

#### 4641. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L38109` → after: `L37572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L37572) · [Before (L38109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L38109)

```diff
-         if (3 !== RR.length) throw new rR(`${JR}: vectors must have 1 or 3 elements`);
+         if (3 !== rr.length) throw new Nr(`${Sr}: vectors must have 1 or 3 elements`);
```

#### 4642. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L38112` → after: `L37575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L37575) · [Before (L38112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L38112)

```diff
-       throw new rR(`${GR}: values must be numbers, Molang strings or [x, y, z]`)
+       throw new Nr(`${Qr}: values must be numbers, Molang strings or [x, y, z]`)
```

#### 4643. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L38116` → after: `L37579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L37579) · [Before (L38116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L38116)

```diff
-       return "number" === typeof RR ? 0 === RR ? 0 : -RR : iR(RR)
+       return "number" === typeof rr ? 0 === rr ? 0 : -rr : fr(rr)
```

#### 4644. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L38137` → after: `L37600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L37600) · [Before (L38137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L38137)

```diff
-   38693: (RR, JR, GR) => {
+   39040: (rr, Sr, Qr) => {
```

#### 4645. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L38139` → after: `L37602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L37602) · [Before (L38139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L38139)

```diff
-       d: () => sJ
+       e: () => sS
```

#### 4646. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L38237` → after: `L37700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L37700) · [Before (L38237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L38237)

```diff
-     var QJ = GR(38701);
+     var JS = Qr(39047);
```

#### 4647. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L38339` → after: `L37802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L37802) · [Before (L38339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L38339)

```diff
-       return TJ ??= (0, QJ.x)(FJ, "builtIn"), TJ
+       return dS ??= (0, JS.s)(DS, "builtIn"), dS
```

#### 4648. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L38342` → after: `L37805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L37805) · [Before (L38342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L38342)

```diff
-   38729: (RR, JR, GR) => {
+   39069: (rr, Sr, Qr) => {
```

#### 4649. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L38417-L38420` → after: `L37880-L37883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37880-L37883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L37880-L37883) · [Before (L38417-L38420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L38417-L38420)

```diff
-       d: () => cR,
-       f: () => oR,
-       j: () => dR,
-       l: () => mR
+       e: () => Mr,
+       i: () => Cr,
+       m: () => cr,
+       o: () => Ar
```

#### 4650. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L38422` → after: `L37885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L37885) · [Before (L38422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L38422)

```diff
-     var tR = GR(38259);
+     var Wr = Qr(38616);
```

#### 4651. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L38449` → after: `L37912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L37912) · [Before (L38449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L38449)

```diff
-         in_out_quad: RR => RR < .5 ? 2 * RR * RR : (4 - 2 * RR) * RR - 1,
+         in_out_quad: rr => rr < .5 ? 2 * rr * rr : (4 - 2 * rr) * rr - 1,
```

#### 4652. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L38452` → after: `L37915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L37915) · [Before (L38452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L38452)

```diff
-         in_out_cubic: RR => RR < .5 ? 4 * RR * RR * RR : (RR - 1) * (2 * RR - 2) * (2 * RR - 2) + 1,
+         in_out_cubic: rr => rr < .5 ? 4 * rr * rr * rr : (rr - 1) * (2 * rr - 2) * (2 * rr - 2) + 1,
```

#### 4653. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L38455` → after: `L37918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L37918) · [Before (L38455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L38455)

```diff
-         in_out_quart: RR => RR < .5 ? 8 * RR * RR * RR * RR : 1 - 8 * (RR - 1) * (RR - 1) * (RR - 1) * (RR - 1),
+         in_out_quart: rr => rr < .5 ? 8 * rr * rr * rr * rr : 1 - 8 * (rr - 1) * (rr - 1) * (rr - 1) * (rr - 1),
```

#### 4654. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L38458` → after: `L37921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L37921) · [Before (L38458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L38458)

```diff
-         in_out_quint: RR => RR < .5 ? 16 * RR * RR * RR * RR * RR : 1 + 16 * (RR - 1) * (RR - 1) * (RR - 1) * (RR - 1) * (RR - 1),
+         in_out_quint: rr => rr < .5 ? 16 * rr * rr * rr * rr * rr : 1 + 16 * (rr - 1) * (rr - 1) * (rr - 1) * (rr - 1) * (rr - 1),
```

#### 4655. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L38461` → after: `L37924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L37924) · [Before (L38461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L38461)

```diff
-         in_out_expo: RR => 0 === RR || 1 === RR ? RR : 2 * RR < 1 ? .5 * 2 ** (10 * (2 * RR - 1)) : .5 * (2 - 2 ** (-10 * (2 * RR - 1))),
+         in_out_expo: rr => 0 === rr || 1 === rr ? rr : 2 * rr < 1 ? .5 * 2 ** (10 * (2 * rr - 1)) : .5 * (2 - 2 ** (-10 * (2 * rr - 1))),
```

#### 4656. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L38478-L38479` → after: `L37941-L37942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37941-L37942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L37941-L37942) · [Before (L38478-L38479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L38478-L38479)

```diff
-         in_elastic: RR => 0 === RR || 1 === RR ? RR : -(2 ** (10 * (RR - 1))) * iR(RR - 1, .7),
-         out_elastic: RR => 0 === RR || 1 === RR ? RR : 2 ** (2 * RR * -10) * iR(2 * RR, .7) + 1,
+         in_elastic: rr => 0 === rr || 1 === rr ? rr : -(2 ** (10 * (rr - 1))) * fr(rr - 1, .7),
+         out_elastic: rr => 0 === rr || 1 === rr ? rr : 2 ** (2 * rr * -10) * fr(2 * rr, .7) + 1,
```

#### 4657. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L38501` → after: `L37964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L37964) · [Before (L38501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L38501)

```diff
-         apply: JR => RR(JR * tR.b)
+         apply: Sr => rr(Sr * Wr.e)
```

#### 4658. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L38509` → after: `L37972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L37972) · [Before (L38509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L38509)

```diff
-         apply: JR => RR(JR) / tR.b
+         apply: Sr => rr(Sr) / Wr.e
```

#### 4659. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L38518` → after: `L37981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L37981) · [Before (L38518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L38518)

```diff
-         ["atan2", wR(((RR, JR) => Math.atan2(RR, JR) / tR.b))],
+         ["atan2", mr(((rr, Sr) => Math.atan2(rr, Sr) / Wr.e))],
```

#### 4660. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L38521-L38522` → after: `L37984-L37985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37984-L37985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L37984-L37985) · [Before (L38521-L38522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L38521-L38522)

```diff
-           const yR = RR > GR ? GR : RR;
-           return yR < JR ? JR : yR
+           const Zr = rr > Qr ? Qr : rr;
+           return Zr < Sr ? Sr : Zr
```

#### 4661. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L38551` → after: `L38014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38014) · [Before (L38551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L38551)

```diff
-           return [`ease_${JR}`, JR.includes("elastic") || JR.includes("bounce") ? aR(yR, 2) : yR]
+           return [`ease_${Sr}`, Sr.includes("elastic") || Sr.includes("bounce") ? tr(Zr, 2) : Zr]
```

#### 4662. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L38646` → after: `L38109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38109) · [Before (L38646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L38646)

```diff
-             if (yR < RR.length && bR.test(RR[yR])) throw new xR(`malformed number '${RR.slice(GR,yR+1)}'`, GR);
+             if (Zr < rr.length && lr.test(rr[Zr])) throw new Hr(`malformed number '${rr.slice(Qr,Zr+1)}'`, Qr);
```

#### 4663. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L38664` → after: `L38127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38127) · [Before (L38664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L38664)

```diff
-           if (void 0 === ZR) throw new xR(`unexpected character '${yR}'`, GR);
+           if (void 0 === jr) throw new Hr(`unexpected character '${Zr}'`, Qr);
```

#### 4664. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L38679` → after: `L38142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38142) · [Before (L38679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L38679)

```diff
-       HR = RR => RR.kind === OR.End ? "end of expression" : `'${RR.text}'`;
+       gr = rr => rr.kind === Pr.End ? "end of expression" : `'${rr.text}'`;
```

#### 4665. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L38729` → after: `L38192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38192) · [Before (L38729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L38729)

```diff
-         if (this.depth--, null !== RR.constant) return UR(RR.constant) ? JR : GR;
+         if (this.depth--, null !== rr.constant) return Yr(rr.constant) ? Sr : Qr;
```

#### 4666. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L38744` → after: `L38207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38207) · [Before (L38744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L38744)

```diff
-             qR = null !== (GR = yR(tR.text, JR, ZR)) && void 0 !== GR ? GR : CR(tR.text, JR.evaluate, ZR.evaluate);
+             Ir = null !== (Qr = Zr(Wr.text, Sr, jr)) && void 0 !== Qr ? Qr : Kr(Wr.text, Sr.evaluate, jr.evaluate);
```

#### 4667. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L38765` → after: `L38228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38228) · [Before (L38765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L38765)

```diff
-         throw new xR(`expected an expression but found ${HR(RR)}`, RR.offset)
+         throw new Hr(`expected an expression but found ${gr(rr)}`, rr.offset)
```

#### 4668. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L38773` → after: `L38236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38236) · [Before (L38773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L38773)

```diff
-         if (-1 === yR) throw new xR(`unknown identifier '${RR.text}'`, RR.offset);
+         if (-1 === Zr) throw new Hr(`unknown identifier '${rr.text}'`, rr.offset);
```

#### 4669. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L38780` → after: `L38243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38243) · [Before (L38780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L38780)

```diff
-             if (void 0 === JR) throw new xR(`unknown query '${RR.text}'`, RR.offset);
+             if (void 0 === Sr) throw new Hr(`unknown query '${rr.text}'`, rr.offset);
```

#### 4670. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L38790` → after: `L38253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38253) · [Before (L38790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L38790)

```diff
-             if (void 0 === JR) throw new xR(`unknown variable '${RR.text}'`, RR.offset);
+             if (void 0 === Sr) throw new Hr(`unknown variable '${rr.text}'`, rr.offset);
```

#### 4671. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L38800` → after: `L38263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38263) · [Before (L38800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L38800)

```diff
-         throw new xR(null !== (JR = lR.get(tR)) && void 0 !== JR ? JR : `unknown identifier '${RR.text}'`, RR.offset)
+         throw new Hr(null !== (Sr = vr.get(Wr)) && void 0 !== Sr ? Sr : `unknown identifier '${rr.text}'`, rr.offset)
```

#### 4672. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L38804` → after: `L38267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38267) · [Before (L38804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L38804)

```diff
-         if (RR.startsWith("random") || RR.startsWith("die_roll")) throw new xR(`'${JR.text}' is non-deterministic and not supported`, JR.offset);
+         if (rr.startsWith("random") || rr.startsWith("die_roll")) throw new Hr(`'${Sr.text}' is non-deterministic and not supported`, Sr.offset);
```

#### 4673. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L38806` → after: `L38269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38269) · [Before (L38806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L38806)

```diff
-         if (void 0 === GR) throw new xR(`unknown function '${JR.text}'`, JR.offset);
+         if (void 0 === Qr) throw new Hr(`unknown function '${Sr.text}'`, Sr.offset);
```

#### 4674. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L38815` → after: `L38278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38278) · [Before (L38815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L38815)

```diff
-         if (yR.length !== GR.arity) throw new xR(`'${JR.text}' takes ${GR.arity} argument(s) but was given ${yR.length}`, JR.offset);
+         if (Zr.length !== Qr.arity) throw new Hr(`'${Sr.text}' takes ${Qr.arity} argument(s) but was given ${Zr.length}`, Sr.offset);
```

#### 4675. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L38820` → after: `L38283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38283) · [Before (L38820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L38820)

```diff
-           for (let fR = 1; fR < (null !== (iR = GR.cost) && void 0 !== iR ? iR : 1); fR++) {
+           for (let Er = 1; Er < (null !== (fr = Qr.cost) && void 0 !== fr ? fr : 1); Er++) {
```

#### 4676. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L38857` → after: `L38320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38320) · [Before (L38857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L38857)

```diff
-           throw new xR(`expected '${RR}' but found ${HR(JR)}`, JR.offset)
+           throw new Hr(`expected '${rr}' but found ${gr(Sr)}`, Sr.offset)
```

#### 4677. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L38862` → after: `L38325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38325) · [Before (L38862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L38862)

```diff
-         if (RR.kind !== OR.End) throw new xR(`unexpected ${HR(RR)}`, RR.offset)
+         if (rr.kind !== Pr.End) throw new Hr(`unexpected ${gr(rr)}`, rr.offset)
```

#### 4678. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L38865` → after: `L38328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38328) · [Before (L38865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L38865)

```diff
-     const SR = RR => Number.isFinite(RR) ? RR : 0;
+     const ir = rr => Number.isFinite(rr) ? rr : 0;
```

#### 4679. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L38877` → after: `L38340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38340) · [Before (L38877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L38877)

```diff
-         if (RR.length > cR) throw new xR(`expression is longer than ${cR} characters`, cR);
+         if (rr.length > Mr) throw new Hr(`expression is longer than ${Mr} characters`, Mr);
```

#### 4680. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L38891` → after: `L38354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38354) · [Before (L38891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L38891)

```diff
-           error: `${GR.message} at offset ${GR.offset}`
+           error: `${Qr.message} at offset ${Qr.offset}`
```

#### 4681. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L38897` → after: `L38360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38360) · [Before (L38897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L38897)

```diff
-   39571: (RR, JR, GR) => {
+   39907: (rr, Sr, Qr) => {
```

#### 4682. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L38900` → after: `L38363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38363) · [Before (L38900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L38900)

```diff
-       g: () => DR
+       h: () => Rr
```

#### 4683. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L38902-L38903` → after: `L38365-L38366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38365-L38366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38365-L38366) · [Before (L38902-L38903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L38902-L38903)

```diff
-     var yR = GR(5844),
-       tR = GR(5886);
+     var Zr = Qr(5779),
+       Wr = Qr(5817);
```

#### 4684. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L38912-L38914` → after: `L38375-L38377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38375-L38377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38375-L38377) · [Before (L38912-L38914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L38912-L38914)

```diff
-     var ZR = GR(5907),
-       qR = GR(39380),
-       iR = GR(5898);
+     var jr = Qr(5833),
+       Ir = Qr(39717),
+       fr = Qr(5830);
```

#### 4685. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L38940` → after: `L38403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38403) · [Before (L38940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L38940)

```diff
-     var eR = GR(5935);
+     var Ur = Qr(5861);
```

#### 4686. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L38943` → after: `L38406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38406) · [Before (L38943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L38943)

```diff
-       return JR < eR.t || JR >= eR.t + eR.v || Math.floor(RR / eR.B) === Math.floor(yR / eR.B) && Math.floor(GR / eR.B) === Math.floor(tR / eR.B)
+       return Sr < Ur.r || Sr >= Ur.r + Ur.s || Math.floor(rr / Ur.y) === Math.floor(Zr / Ur.y) && Math.floor(Qr / Ur.y) === Math.floor(Wr / Ur.y)
```

#### 4687. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L38947-L38949` → after: `L38410-L38412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38410-L38412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38410-L38412) · [Before (L38947-L38949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L38947-L38949)

```diff
-       UR = new Set(eR.S),
-       WR = new Set([...eR.S, "Belt Loader", "Fast Loader", nR]),
-       AR = new Set(eR.y),
+       Yr = new Set(Ur.L),
+       nr = new Set([...Ur.L, "Belt Loader", "Fast Loader", zr]),
+       er = new Set(Ur.w),
```

#### 4688. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L38961` → after: `L38424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38424) · [Before (L38961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L38961)

```diff
-       return null !== (JR = null === (GR = yR.l[RR]) || void 0 === GR ? void 0 : GR.meta.rootName) && void 0 !== JR ? JR : ""
+       return null !== (Sr = null === (Qr = Zr.j[rr]) || void 0 === Qr ? void 0 : Qr.meta.rootName) && void 0 !== Sr ? Sr : ""
```

#### 4689. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L38965` → after: `L38428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38428) · [Before (L38965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L38965)

```diff
-       return XR(RR) === eR.l && (0, eR.eb)(yR.l[RR].name)
+       return yr(rr) === Ur.g && (0, Ur.W)(Zr.j[rr].name)
```

#### 4690. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L38967-L38968` → after: `L38430-L38431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38430-L38431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38430-L38431) · [Before (L38967-L38968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L38967-L38968)

```diff
-     var BR = GR(5895),
-       lR = GR(5919);
+     var Tr = Qr(5825),
+       vr = Qr(5843);
```

#### 4691. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L38978-L38981` → after: `L38441-L38444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38441-L38444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38441-L38444) · [Before (L38978-L38981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L38978-L38981)

```diff
-       const tR = null === (JR = yR.l[RR]) || void 0 === JR ? void 0 : JR.meta;
-       return (null === tR || void 0 === tR ? void 0 : tR.rootName) !== lR.n ? null : {
-         rot: null !== (GR = tR.rot) && void 0 !== GR ? GR : 1,
-         half: (0, lR.f)(tR.rootName, tR.metaStr)
+       const Wr = null === (Sr = Zr.j[rr]) || void 0 === Sr ? void 0 : Sr.meta;
+       return (null === Wr || void 0 === Wr ? void 0 : Wr.rootName) !== vr.r ? null : {
+         rot: null !== (Qr = Wr.rot) && void 0 !== Qr ? Qr : 1,
+         half: (0, vr.h)(Wr.rootName, Wr.metaStr)
```

#### 4692. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L38994-L38995` → after: `L38457-L38458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38457-L38458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38457-L38458) · [Before (L38994-L38995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L38994-L38995)

```diff
-       const [qR, iR] = (0, lR.l)(uR, ZR), fR = bR(RR, JR + qR, GR, yR + iR);
-       return null !== fR && fR.rot === uR && fR.half === lR.r[ZR]
+       const [Ir, fr] = (0, vr.n)(ar, jr), Er = lr(rr, Sr + Ir, Qr, Zr + fr);
+       return null !== Er && Er.rot === ar && Er.half === vr.u[jr]
```

#### 4693. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L38997` → after: `L38460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38460) · [Before (L38997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L38997)

```diff
-     var OR = GR(39576);
+     var Pr = Qr(39914);
```

#### 4694. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39004` → after: `L38467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38467) · [Before (L39004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39004)

```diff
-         return "Stairs" === (null === (JR = yR.l[RR]) || void 0 === JR ? void 0 : JR.model)
+         return "Stairs" === (null === (Sr = Zr.j[rr]) || void 0 === Sr ? void 0 : Sr.model)
```

#### 4695. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39012-L39013` → after: `L38475-L38476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38475-L38476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38475-L38476) · [Before (L39012-L39013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39012-L39013)

```diff
-           fR = ZR.half === iR.d.top ? "top" : "bot";
-         return (0, yR.n)(`${yR.l[uR].meta.rootName}|meta|rot${ZR.rot}|${fR}${null===qR?"":`|${qR}`}`)
+           Er = jr.half === fr.b.top ? "top" : "bot";
+         return (0, Zr.k)(`${Zr.j[ar].meta.rootName}|meta|rot${jr.rot}|${Er}${null===Ir?"":`|${Ir}`}`)
```

#### 4696. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39019` → after: `L38482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38482) · [Before (L39019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39019)

```diff
-         } = yR.l[RR].meta;
+         } = Zr.j[rr].meta;
```

#### 4697. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39054` → after: `L38517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38517) · [Before (L39054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39054)

```diff
-         this.reshapeOffsets = uR, this.rootIds = new Set(tR.i.map((RR => (0, yR.n)(RR))))
+         this.reshapeOffsets = ar, this.rootIds = new Set(Wr.l.map((rr => (0, Zr.k)(rr))))
```

#### 4698. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39058` → after: `L38521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38521) · [Before (L39058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39058)

```diff
-         const GR = null === (JR = yR.l[RR]) || void 0 === JR ? void 0 : JR.meta;
+         const Qr = null === (Sr = Zr.j[rr]) || void 0 === Sr ? void 0 : Sr.meta;
```

#### 4699. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39065` → after: `L38528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38528) · [Before (L39065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39065)

```diff
-         return yR.l[RR].meta.rootName === tR.p ? null : tR.p
+         return Zr.j[rr].meta.rootName === Wr.u ? null : Wr.u
```

#### 4700. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39072` → after: `L38535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38535) · [Before (L39072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39072)

```diff
-         } = yR.l[ZR].meta;
+         } = Zr.j[jr].meta;
```

#### 4701. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39074` → after: `L38537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38537) · [Before (L39074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39074)

```diff
-         return tR.t[fR].forEach(((tR, ZR) => {
+         return Wr.A[Er].forEach(((Wr, jr) => {
```

#### 4702. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39077` → after: `L38540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38540) · [Before (L39077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39077)

```diff
-           const eR = null === (iR = yR.l[RR(JR + KR, GR + wR, uR + rR)]) || void 0 === iR ? void 0 : iR.meta;
+           const Ur = null === (fr = Zr.j[rr(Sr + xr, Qr + mr, ar + Nr)]) || void 0 === fr ? void 0 : fr.meta;
```

#### 4703. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39079` → after: `L38542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38542) · [Before (L39079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39079)

```diff
-         })), (0, yR.n)((0, tR.h)(iR, fR, VR))
+         })), (0, Zr.k)((0, Wr.h)(fr, Er, pr))
```

#### 4704. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39081` → after: `L38544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38544) · [Before (L39081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39081)

```diff
-     }, ...ZR.d.map((RR => new qR.d(RR))), new class {
+     }, ...jr.d.map((rr => new Ir.b(rr))), new class {
```

#### 4705. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39087` → after: `L38550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38550) · [Before (L39087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39087)

```diff
-         return UR.has(JR) || JR === eR.l
+         return Yr.has(Sr) || Sr === Ur.g
```

#### 4706. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39091` → after: `L38554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38554) · [Before (L39091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39091)

```diff
-         return WR.has(JR) || AR.has(JR) || JR === LR || JR === eR.l || void 0 !== eR.d[JR]
+         return nr.has(Sr) || er.has(Sr) || Sr === hr || Sr === Ur.g || void 0 !== Ur.b[Sr]
```

#### 4707. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39097-L39100` → after: `L38560-L38563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38560-L38563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38560-L38563) · [Before (L39097-L39100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39097-L39100)

```diff
-         } = yR.l[uR].meta;
-         return qR === eR.l ? ZR ? uR : function(RR, JR, GR, tR, uR) {
-           const [ZR, qR] = eR.h[uR - 1];
-           for (let iR = 1; iR <= eR.O; iR++) {
+         } = Zr.j[ar].meta;
+         return Ir === Ur.g ? jr ? ar : function(rr, Sr, Qr, Wr, ar) {
+           const [jr, Ir] = Ur.d[ar - 1];
+           for (let fr = 1; fr <= Ur.J; fr++) {
```

#### 4708. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39102` → after: `L38565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38565) · [Before (L39102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39102)

```diff
-             if (XR(KR) === eR.l && yR.l[KR].meta.rot === uR && aR(JR, GR, tR, fR, VR)) return (0, yR.n)((0, eR.lb)(uR, !MR(KR)))
+             if (yr(xr) === Ur.g && Zr.j[xr].meta.rot === ar && tr(Sr, Qr, Wr, Er, pr)) return (0, Zr.k)((0, Ur.ab)(ar, !Br(xr)))
```

#### 4709. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39104-L39106` → after: `L38567-L38569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38567-L38569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38567-L38569) · [Before (L39104-L39106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39104-L39106)

```diff
-           return (0, yR.n)((0, eR.lb)(uR, !1))
-         }(RR, JR, GR, tR, iR) : (0, yR.n)((0, eR.V)(qR, iR, function(RR, JR, GR, tR, uR) {
-           const [ZR, qR] = eR.h[uR - 1], iR = (uR, ZR) => function(RR, JR, GR) {
+           return (0, Zr.k)((0, Ur.ab)(ar, !1))
+         }(rr, Sr, Qr, Wr, fr) : (0, Zr.k)((0, Ur.P)(Ir, fr, function(rr, Sr, Qr, Wr, ar) {
+           const [jr, Ir] = Ur.d[ar - 1], fr = (ar, jr) => function(rr, Sr, Qr) {
```

#### 4710. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39108` → after: `L38571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38571) · [Before (L39108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39108)

```diff
-             const uR = null === (tR = yR.l[RR]) || void 0 === tR ? void 0 : tR.meta;
+             const ar = null === (Wr = Zr.j[rr]) || void 0 === Wr ? void 0 : Wr.meta;
```

#### 4711. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39113` → after: `L38576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38576) · [Before (L39113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39113)

```diff
-             const [iR, fR] = eR.h[uR.rot - 1];
+             const [fr, Er] = Ur.d[ar.rot - 1];
```

#### 4712. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39116-L39117` → after: `L38579-L38580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38579-L38580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38579-L38580) · [Before (L39116-L39117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39116-L39117)

```diff
-             const VR = yR.l[RR].name;
-             return (ZR === LR ? (0, eR.hb)(VR, iR, fR) : ZR === nR ? [(0, eR.Z)(VR, iR, fR)] : []).some((RR => {
+             const pr = Zr.j[rr].name;
+             return (jr === hr ? (0, Ur._)(pr, fr, Er) : jr === zr ? [(0, Ur.R)(pr, fr, Er)] : []).some((rr => {
```

#### 4713. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39121` → after: `L38584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38584) · [Before (L39121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39121)

```diff
-           }(RR(JR + uR, GR, tR + ZR), uR, ZR), fR = RR(JR - ZR, GR, tR - qR), VR = XR(fR) === LR && yR.l[fR].meta.rot === uR, KR = 1 === eR.d[XR(RR(JR, GR - 1, tR))] || -1 === eR.d[XR(RR(JR, GR + 1, tR))];
+           }(rr(Sr + ar, Qr, Wr + jr), ar, jr), Er = rr(Sr - jr, Qr, Wr - Ir), pr = yr(Er) === hr && Zr.j[Er].meta.rot === ar, xr = 1 === Ur.b[yr(rr(Sr, Qr - 1, Wr))] || -1 === Ur.b[yr(rr(Sr, Qr + 1, Wr))];
```

#### 4714. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39131` → after: `L38594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38594) · [Before (L39131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39131)

```diff
-         this.reshapeOffsets = pR, this.rootId = (0, yR.n)(lR.n)
+         this.reshapeOffsets = Or, this.rootId = (0, Zr.k)(vr.r)
```

#### 4715. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39135` → after: `L38598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38598) · [Before (L39135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39135)

```diff
-         return (null === (JR = yR.l[RR]) || void 0 === JR ? void 0 : JR.meta.rootId) === this.rootId
+         return (null === (Sr = Zr.j[rr]) || void 0 === Sr ? void 0 : Sr.meta.rootId) === this.rootId
```

#### 4716. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39142` → after: `L38605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38605) · [Before (L39142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39142)

```diff
-         return (0, yR.n)((iR = qR.rot, null !== (fR = ZR ? this.reshapedHalf(RR, JR, GR, tR, qR) : this.placedHalf(RR, JR, GR, tR, qR.rot)) ? (0, lR.d)(lR.n, iR, fR) : 1 === iR ? lR.n : `${lR.n}|meta|rot${iR}`));
+         return (0, Zr.k)((fr = Ir.rot, null !== (Er = jr ? this.reshapedHalf(rr, Sr, Qr, Wr, Ir) : this.placedHalf(rr, Sr, Qr, Wr, Ir.rot)) ? (0, vr.e)(vr.r, fr, Er) : 1 === fr ? vr.r : `${vr.r}|meta|rot${fr}`));
```

#### 4717. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39146` → after: `L38609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38609) · [Before (L39146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39146)

```diff
-         const [uR, ZR] = BR.c[tR];
+         const [ar, jr] = Tr.b[Wr];
```

#### 4718. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39161-L39162` → after: `L38624-L38625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38624-L38625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38624-L38625) · [Before (L39161-L39162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39161-L39162)

```diff
-           const [ZR, qR] = (0, lR.l)(tR.rot, uR), iR = bR(RR, JR + ZR, GR, yR + qR);
-           if (null !== iR && iR.rot === tR.rot && iR.half === lR.r[uR]) return uR
+           const [jr, Ir] = (0, vr.n)(Wr.rot, ar), fr = lr(rr, Sr + jr, Qr, Zr + Ir);
+           if (null !== fr && fr.rot === Wr.rot && fr.half === vr.u[ar]) return ar
```

#### 4719. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39166` → after: `L38629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38629) · [Before (L39166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39166)

```diff
-     }, new OR.c];
+     }, new Pr.e];
```

#### 4720. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39178` → after: `L38641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38641) · [Before (L39178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39178)

```diff
-         if (yR.handles(RR)) return null !== (JR = null === (GR = yR.placedBy) || void 0 === GR ? void 0 : GR.call(yR, RR)) && void 0 !== JR ? JR : null
+         if (Zr.handles(rr)) return null !== (Sr = null === (Qr = Zr.placedBy) || void 0 === Qr ? void 0 : Qr.call(Zr, rr)) && void 0 !== Sr ? Sr : null
```

#### 4721. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39183` → after: `L38646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38646) · [Before (L39183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39183)

```diff
-   39576: (RR, JR, GR) => {
+   39914: (rr, Sr, Qr) => {
```

#### 4722. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39187` → after: `L38649-L38650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38649-L38650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38649-L38650) · [Before (L39187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39187)

```diff
-       g: () => WR
+       f: () => er,
+       h: () => nr
```

#### 4723. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39189-L39196` → after: `L38652-L38659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38652-L38659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38652-L38659) · [Before (L39189-L39196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39189-L39196)

```diff
-     var yR = GR(5844),
-       tR = GR(5871),
-       uR = GR(5938),
-       ZR = GR(39585),
-       qR = GR(5935);
-     const iR = (0, ZR.J)("pipe"),
-       fR = (0, ZR.J)("tank"),
-       VR = (0, ZR.J)("port"),
+     var Zr = Qr(5779),
+       Wr = Qr(5806),
+       ar = Qr(5870),
+       jr = Qr(39920),
+       Ir = Qr(5861);
+     const fr = (0, jr.N)("pipe"),
+       Er = (0, jr.N)("tank"),
+       pr = (0, jr.N)("port"),
```

#### 4724. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39200` → after: `L38663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38663) · [Before (L39200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39200)

```diff
-       const yR = new Set([uR.f, uR.c, KR, ...JR, ...GR, ...RR ? [ZR.e] : []]);
+       const Zr = new Set([ar.g, ar.d, xr, ...Sr, ...Qr, ...rr ? [jr.i] : []]);
```

#### 4725. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39222` → after: `L38685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38685) · [Before (L39222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39222)

```diff
-         return ZR.s.findIndex((RR => {
+         return jr.z.findIndex((rr => {
```

#### 4726. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39230` → after: `L38693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38693) · [Before (L39230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39230)

```diff
-       const GR = yR.l[RR],
+       const Qr = Zr.j[rr],
```

#### 4727. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39234-L39238` → after: `L38697-L38701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38697-L38701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38697-L38701) · [Before (L39234-L39238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39234-L39238)

```diff
-       if ((0, uR.i)(tR)) return (0, ZR.H)(GR.name) === JR ? iR : null;
-       if (tR === ZR.e) return fR;
-       if (tR === KR) return GR.name.endsWith("|Water") ? VR : null;
-       const [eR, aR] = qR.h[(GR.meta.rot || 1) - 1];
-       return (0, ZR.J)(wR.makers.has(tR) ? "maker" : "user", [-eR, 0, -aR])
+       if ((0, ar.k)(Wr)) return (0, jr.K)(Qr.name) === Sr ? fr : null;
+       if (Wr === jr.i) return Er;
+       if (Wr === xr) return Qr.name.endsWith("|Water") ? pr : null;
+       const [Ur, tr] = Ir.d[(Qr.meta.rot || 1) - 1];
+       return (0, jr.N)(mr.makers.has(Wr) ? "maker" : "user", [-Ur, 0, -tr])
```

#### 4728. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39251` → after: `L38714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38714) · [Before (L39251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39251)

```diff
-         return null !== WR && qR.has(null !== (KR = null === (wR = yR.l[LR]) || void 0 === wR ? void 0 : wR.meta.rootName) && void 0 !== KR ? KR : "") && !(0, ZR.N)(iR, WR, nR[VR])
+         return null !== nr && Ir.has(null !== (xr = null === (mr = Zr.j[hr]) || void 0 === mr ? void 0 : mr.meta.rootName) && void 0 !== xr ? xr : "") && !(0, jr.P)(fr, nr, zr[pr])
```

#### 4729. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39256-L39257` → after: `L38719-L38720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38719-L38720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38719-L38720) · [Before (L39256-L39257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39256-L39257)

```diff
-       const JR = yR.l[RR];
-       return JR ? (0, ZR.H)(JR.name) : null
+       const Sr = Zr.j[rr];
+       return Sr ? (0, jr.K)(Sr.name) : null
```

#### 4730. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39266-L39267` → after: `L38729-L38730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38729-L38730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38729-L38730) · [Before (L39266-L39267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39266-L39267)

```diff
-             for (const GR of [!1, !0]) CR.set((0, uR.l)(RR, JR, GR), {
-               Nr: RR,
+             for (const Qr of [!1, !0]) Kr.set((0, ar.o)(rr, Sr, Qr), {
+               HN: rr,
```

#### 4731. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39275` → after: `L38738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38738) · [Before (L39275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39275)

```diff
-       length: uR.g + 1
+       length: ar.h + 1
```

#### 4732. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39283` → after: `L38746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38746) · [Before (L39283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39283)

```diff
-         const aR = null !== (fR = null === (VR = yR.l[RR(JR + wR, GR + rR, tR + eR)]) || void 0 === VR ? void 0 : VR.name) && void 0 !== fR ? fR : "",
+         const tr = null !== (Er = null === (pr = Zr.j[rr(Sr + mr, Qr + Nr, Wr + Ur)]) || void 0 === pr ? void 0 : pr.name) && void 0 !== Er ? Er : "",
```

#### 4733. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39285` → after: `L38748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38748) · [Before (L39285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39285)

```diff
-         return LR ? LR.Nr === uR && LR.full : (null !== (KR = function(RR) {
+         return hr ? hr.HN === ar && hr.full : (null !== (xr = function(rr) {
```

#### 4734. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39287-L39288` → after: `L38750-L38751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38750-L38751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38750-L38751) · [Before (L39287-L39288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39287-L39288)

```diff
-           return null !== (JR = MR.get(RR)) && void 0 !== JR ? JR : null
-         }(aR)) && void 0 !== KR ? KR : 0) > 0
+           return null !== (Sr = Br.get(rr)) && void 0 !== Sr ? Sr : null
+         }(tr)) && void 0 !== xr ? xr : 0) > 0
```

#### 4735. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39300` → after: `L38763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38763) · [Before (L39300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39300)

```diff
-         return eR.has(null !== (JR = null === (GR = yR.l[RR]) || void 0 === GR ? void 0 : GR.meta.rootName) && void 0 !== JR ? JR : "")
+         return Ur.has(null !== (Sr = null === (Qr = Zr.j[rr]) || void 0 === Qr ? void 0 : Qr.meta.rootName) && void 0 !== Sr ? Sr : "")
```

#### 4736. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39304` → after: `L38767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38767) · [Before (L39304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39304)

```diff
-         return (null === (JR = yR.l[RR]) || void 0 === JR ? void 0 : JR.meta.rootName) === uR.c ? uR.f : null
+         return (null === (Sr = Zr.j[rr]) || void 0 === Sr ? void 0 : Sr.meta.rootName) === ar.d ? ar.g : null
```

#### 4737. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39308-L39309` → after: `L38771-L38772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38771-L38772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38771-L38772) · [Before (L39308-L39309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39308-L39309)

```diff
-         const rR = null !== (VR = null === (KR = yR.l[qR]) || void 0 === KR ? void 0 : KR.name) && void 0 !== VR ? VR : "",
-           eR = fR || rR !== uR.f ? null !== (wR = (0, ZR.H)(rR)) && void 0 !== wR ? wR : "water" : function(RR, JR, GR, yR) {
+         const Nr = null !== (pr = null === (xr = Zr.j[Ir]) || void 0 === xr ? void 0 : xr.name) && void 0 !== pr ? pr : "",
+           Ur = Er || Nr !== ar.g ? null !== (mr = (0, jr.K)(Nr)) && void 0 !== mr ? mr : "water" : function(rr, Sr, Qr, Zr) {
```

#### 4738. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39313` → after: `L38776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38776) · [Before (L39313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39313)

```diff
-               return null !== KR && "port" !== KR.kind && (0, ZR.N)(iR, KR, nR[uR])
+               return null !== xr && "port" !== xr.kind && (0, jr.P)(fr, xr, zr[ar])
```

#### 4739. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39322` → after: `L38785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38785) · [Before (L39322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39322)

```diff
-               rR && (0, ZR.N)(iR, rR, nR[fR]) && (uR |= 1 << fR)
+               Nr && (0, jr.P)(fr, Nr, zr[Er]) && (ar |= 1 << Er)
```

#### 4740. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39329` → after: `L38792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38792) · [Before (L39329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39329)

```diff
-         return (0, yR.n)((0, uR.l)(eR, aR, WR))
+         return (0, Zr.k)((0, ar.o)(Ur, tr, nr))
```

#### 4741. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39333` → after: `L38796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38796) · [Before (L39333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39333)

```diff
-   39603: (RR, JR, GR) => {
+   39942: (rr, Sr, Qr) => {
```

#### 4742. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39335` → after: `L38798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38798) · [Before (L39335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39335)

```diff
-       d: () => qR,
+       c: () => Ir,
```

#### 4743. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39338` → after: `L38801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38801) · [Before (L39338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39338)

```diff
-     var yR = GR(385),
+     var Zr = Qr(388),
```

#### 4744. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39340` → after: `L38803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38803) · [Before (L39340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39340)

```diff
-       uR = GR(39611),
+       ar = Qr(39947),
```

#### 4745. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39351-L39352` → after: `L38814-L38815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38814-L38815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38814-L38815) · [Before (L39351-L39352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39351-L39352)

```diff
-         mC: function(RR, JR) {},
-         eD: null,
+         zB: function(rr, Sr) {},
+         bq: null,
```

#### 4746. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39355` → after: `L38818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38818) · [Before (L39355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39355)

```diff
-             const JR = RR.zC.mI("collideEntitiesProjectile");
+             const Sr = rr.YB.YM("collideEntitiesProjectile");
```

#### 4747. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39367-L39370` → after: `L38830-L38833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38830-L38833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38830-L38833) · [Before (L39367-L39370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39367-L39370)

```diff
-         uR = RR.zC.Lk(JR),
-         ZR = RR.zC.f6(JR),
-         qR = [uR.Xw.base[0] + ZR.width / 2, uR.Xw.base[1] + ZR.height / 2, uR.Xw.base[2] + ZR.width / 2];
-       tR().add(qR, qR, null !== (GR = ZR.Fw) && void 0 !== GR ? GR : RR.Fw), KR(RR, RR.zC.getState(JR, "collideEntitiesProjectile"), yR, qR)
+         ar = rr.YB.cV(Sr),
+         jr = rr.YB.gJ(Sr),
+         Ir = [ar.Om.base[0] + jr.width / 2, ar.Om.base[1] + jr.height / 2, ar.Om.base[2] + jr.width / 2];
+       Wr().add(Ir, Ir, null !== (Qr = jr.um) && void 0 !== Qr ? Qr : rr.um), xr(rr, rr.YB.getState(Sr, "collideEntitiesProjectile"), Zr, Ir)
```

#### 4748. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39376` → after: `L38839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38839) · [Before (L39376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39376)

```diff
-       let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : RR.zC.vW(JR.Rm);
+       let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : rr.YB.JY(Sr.XM);
```

#### 4749. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39383-L39384` → after: `L38846-L38847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38846-L38847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38846-L38847) · [Before (L39383-L39384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39383-L39384)

```diff
-         if (!RR.zC.RGR(yR.Rm, "collideEntities")) continue;
-         if (!yR.ttR) continue;
+         if (!rr.YB.TSr(Zr.XM, "collideEntities")) continue;
+         if (!Zr.HZr) continue;
```

#### 4750. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39386` → after: `L38849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38849) · [Before (L39386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39386)

```diff
-         if (qR = JR._lastPos, iR = VR[tR], (qR[0] >= iR[0][0] && qR[0] <= iR[1][0] && qR[1] >= iR[0][1] && qR[1] <= iR[1][1] && qR[2] >= iR[0][2] && qR[2] <= iR[1][2] || Math.abs(KR) <= uR) && (JR.callback(yR.Rm), !RR.zC.RGR(JR.Rm, "collideEntitiesProjectile"))) break
+         if (Ir = Sr._lastPos, fr = pr[Wr], (Ir[0] >= fr[0][0] && Ir[0] <= fr[1][0] && Ir[1] >= fr[0][1] && Ir[1] <= fr[1][1] && Ir[2] >= fr[0][2] && Ir[2] <= fr[1][2] || Math.abs(xr) <= ar) && (Sr.callback(Zr.XM), !rr.YB.TSr(Sr.XM, "collideEntitiesProjectile"))) break
```

#### 4751. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39393` → after: `L38856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38856) · [Before (L39393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39393)

```diff
-       const JR = RR.zC.mI("collideEntities");
+       const Sr = rr.YB.YM("collideEntities");
```

#### 4752. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39396-L39398` → after: `L38859-L38861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38859-L38861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38859-L38861) · [Before (L39396-L39398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39396-L39398)

```diff
-         const ZR = RR.zC.f6(JR[uR].Rm),
-           qR = JR[uR].GtR / 2,
-           iR = JR[uR].ytR / 2;
+         const jr = rr.YB.gJ(Sr[ar].XM),
+           Ir = Sr[ar].XZr / 2,
+           fr = Sr[ar].PZr / 2;
```

#### 4753. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39400-L39402` → after: `L38863-L38865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38863-L38865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38863-L38865) · [Before (L39400-L39402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39400-L39402)

```diff
-           [ZR.myR[0] - qR, ZR.myR[1] - iR, ZR.myR[2] - qR],
-           [ZR.myR[3] + qR, ZR.myR[4] + iR, ZR.myR[5] + qR]
-         ], tR().add(VR[uR][0], VR[uR][0], null !== (GR = ZR.Fw) && void 0 !== GR ? GR : RR.Fw), tR().add(VR[uR][1], VR[uR][1], null !== (yR = ZR.Fw) && void 0 !== yR ? yR : RR.Fw)
+           [jr.NZr[0] - Ir, jr.NZr[1] - fr, jr.NZr[2] - Ir],
+           [jr.NZr[3] + Ir, jr.NZr[4] + fr, jr.NZr[5] + Ir]
+         ], Wr().add(pr[ar][0], pr[ar][0], null !== (Qr = jr.um) && void 0 !== Qr ? Qr : rr.um), Wr().add(pr[ar][1], pr[ar][1], null !== (Zr = jr.um) && void 0 !== Zr ? Zr : rr.um)
```

#### 4754. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39407` → after: `L38870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38870) · [Before (L39407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39407)

```diff
-   38851: (RR, JR, GR) => {
+   39195: (rr, Sr, Qr) => {
```

#### 4755. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39409-L39410` → after: `L38872-L38873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38872-L38873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38872-L38873) · [Before (L39409-L39410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39409-L39410)

```diff
-       d: () => fR,
-       f: () => VR
+       c: () => Er,
+       g: () => pr
```

#### 4756. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39412-L39414` → after: `L38875-L38877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38875-L38877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38875-L38877) · [Before (L39412-L39414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39412-L39414)

```diff
-     var yR = GR(38836),
-       tR = GR(7588),
-       uR = GR(7581);
+     var Zr = Qr(39179),
+       Wr = Qr(7424),
+       ar = Qr(7416);
```

#### 4757. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39417-L39418` → after: `L38880-L38881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38880-L38881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38880-L38881) · [Before (L39417-L39418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39417-L39418)

```diff
-         this.Rm = void 0, this.maxSpeed = 4, this.moveForce = 80, this.responsiveness = 20, this.movingFriction = 0, this.standingFriction = 5, this.boatStandingFriction = .4, this.gliderFriction = 0, this.airMoveMult = 1, this.jumpForce = 0, this.jumpTime = 500, this.isGliding = … [truncated]
-           type: tR.k.DEFAULT,
+         this.XM = void 0, this.maxSpeed = 4, this.moveForce = 80, this.responsiveness = 20, this.movingFriction = 0, this.standingFriction = 5, this.boatStandingFriction = .4, this.gliderFriction = 0, this.airMoveMult = 1, this.jumpForce = 0, this.jumpTime = 500, this.isGliding = … [truncated]
+           type: Wr.n.DEFAULT,
```

#### 4758. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39424` → after: `L38887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38887) · [Before (L39424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39424)

```diff
-         }, this.fb = 0, this.steeringHeading = 0, this._steeringHeadingPrevTick = 0, this._steeringActiveLastTick = !1, this._lastTickVelocity = [0, 0, 0], this._beenOnSolidGroundSinceBhopBounce = !0, this.movementType = tR.j.NORMAL, this.movementTypeLastTick = tR.j.NORMAL, this. … [truncated]
+         }, this.fb = 0, this.steeringHeading = 0, this._steeringHeadingPrevTick = 0, this._steeringActiveLastTick = !1, this._lastTickVelocity = [0, 0, 0], this._beenOnSolidGroundSinceBhopBounce = !0, this.movementType = Wr.k.NORMAL, this.movementTypeLastTick = Wr.k.NORMAL, this. … [truncated]
```

#### 4759. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39433` → after: `L38896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38896) · [Before (L39433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39433)

```diff
-         return this.xw.zC.Lk(this.Rm).atRestY() < 0
+         return this.gm.YB.cV(this.XM).atRestY() < 0
```

#### 4760. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39439` → after: `L38902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38902) · [Before (L39439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39439)

```diff
-         return (0, yR.g)(this.xw, this.Rm, !1)
+         return (0, Zr.e)(this.gm, this.XM, !1)
```

#### 4761. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39442` → after: `L38905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38905) · [Before (L39442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39442)

```diff
-         return RR === tR.j.GLIDING ? this.hitWhilstGliding : this.hitWhilstFloating
+         return rr === Wr.k.GLIDING ? this.hitWhilstGliding : this.hitWhilstFloating
```

#### 4762. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39445` → after: `L38908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38908) · [Before (L39445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39445)

```diff
-         RR === tR.j.GLIDING ? this.hitWhilstGliding = JR : this.hitWhilstFloating = JR
+         rr === Wr.k.GLIDING ? this.hitWhilstGliding = Sr : this.hitWhilstFloating = Sr
```

#### 4763. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39451` → after: `L38914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38914) · [Before (L39451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39451)

```diff
-       const JR = RR.zC.aGR(RR.WH);
+       const Sr = rr.YB.ASr(rr.fC);
```

#### 4764. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39460-L39461` → after: `L38923-L38924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38923-L38924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38923-L38924) · [Before (L39460-L39461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39460-L39461)

```diff
-         mC: (JR, GR) => {
-           GR.xw = RR, qR = GR.isInCobweb, iR = GR.isInFluid
+         zB: (Sr, Qr) => {
+           Qr.gm = rr, Ir = Qr.isInCobweb, fr = Qr.isInFluid
```

#### 4765. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39463` → after: `L38926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38926) · [Before (L39463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39463)

```diff
-         eD: null,
+         bq: null,
```

#### 4766. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39468` → after: `L38931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38931) · [Before (L39468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39468)

```diff
-   38309: (RR, JR, GR) => {
+   38669: (rr, Sr, Qr) => {
```

#### 4767. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39504` → after: `L38967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38967) · [Before (L39504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39504)

```diff
-   38968: (RR, JR, GR) => {
+   39307: (rr, Sr, Qr) => {
```

#### 4768. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39506-L39511` → after: `L38969-L38975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38969-L38975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38969-L38975) · [Before (L39506-L39511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39506-L39511)

```diff
-       D: () => eR,
-       e: () => LR,
-       h: () => ZR,
-       k: () => rR,
-       n: () => KR,
-       r: () => VR,
+       b: () => hr,
+       f: () => jr,
+       j: () => Nr,
+       l: () => xr,
+       o: () => pr,
+       p: () => fr,
+       t: () => mr,
```

#### 4769. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39513-L39514` → after: `L38977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38977) · [Before (L39513-L39514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39513-L39514)

```diff
-       v: () => wR,
-       z: () => aR
+       y: () => Ur
```

#### 4770. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39516-L39518` → after: `L38979-L38981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38979-L38981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38979-L38981) · [Before (L39516-L39518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39516-L39518)

```diff
-     var yR = GR(203),
-       tR = GR(5844),
-       uR = GR(38977);
+     var Zr = Qr(208),
+       Wr = Qr(5779),
+       ar = Qr(39311);
```

#### 4771. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39521` → after: `L38984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L38984) · [Before (L39521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39521)

```diff
-       return null !== JR && void 0 !== JR ? JR : RR ? 0 : yR.g.ezBridgeGrowMs
+       return null !== Sr && void 0 !== Sr ? Sr : rr ? 0 : Zr.i.ezBridgeGrowMs
```

#### 4772. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39546-L39547` → after: `L39009-L39010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39009-L39010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39009-L39010) · [Before (L39546-L39547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39546-L39547)

```diff
-       const JR = tR.l[RR];
-       return !!JR && (!(RR in uR.f) && (JR.model ? "Slab" === JR.model : !JR.twoDBlockItem))
+       const Sr = Wr.j[rr];
+       return !!Sr && (!(rr in ar.g) && (Sr.model ? "Slab" === Sr.model : !Sr.twoDBlockItem))
```

#### 4773. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39559` → after: `L39022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39022) · [Before (L39559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39559)

```diff
-       return rR(JR.startedAtMs, JR.endsAtMs, GR) >= yR ? JR : RR
+       return Nr(Sr.startedAtMs, Sr.endsAtMs, Qr) >= Zr ? Sr : rr
```

#### 4774. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39573` → after: `L39036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39036) · [Before (L39573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39573)

```diff
-   38902: (RR, JR, GR) => {
+   39242: (rr, Sr, Qr) => {
```

#### 4775. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39578-L39583` → after: `L39041-L39047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39041-L39047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39041-L39047) · [Before (L39578-L39583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39578-L39583)

```diff
-       c: () => LR,
-       e: () => XR,
-       i: () => CR,
-       k: () => MR,
-       m: () => qR,
-       p: () => ZR,
+       B: () => tr,
+       d: () => hr,
+       g: () => yr,
+       j: () => Kr,
+       l: () => Br,
+       o: () => Ir,
+       q: () => jr,
```

#### 4776. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39611` → after: `L39074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39074) · [Before (L39611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39611)

```diff
-       return `~${function(RR){return RR.length<2?RR:":"===RR[1]?RR[0]:RR[0]+RR[1]}(JR)}~${RR}`
+       return `~${function(rr){return rr.length<2?rr:":"===rr[1]?rr[0]:rr[0]+rr[1]}(Sr)}~${rr}`
```

#### 4777. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39657` → after: `L39120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39120) · [Before (L39657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39657)

```diff
-       if (GR <= JR) return `t ${RR}`;
+       if (Qr <= Sr) return `t ${rr}`;
```

#### 4778. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39691` → after: `L39154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39154) · [Before (L39691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39691)

```diff
-   39335: (RR, JR, GR) => {
+   39683: (rr, Sr, Qr) => {
```

#### 4779. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39694-L39695` → after: `L39158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39158) · [Before (L39694-L39695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39694-L39695)

```diff
-       h: () => qR,
-       k: () => fR
+       e: () => Er
```

#### 4780. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39697-L39699` → after: `L39160-L39162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39160-L39162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39160-L39162) · [Before (L39697-L39699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39697-L39699)

```diff
-     var yR = GR(7588),
-       tR = GR(377),
-       uR = GR(679);
+     var Zr = Qr(7424),
+       Wr = Qr(379),
+       ar = Qr(688);
```

#### 4781. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39707` → after: `L39170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39170) · [Before (L39707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39707)

```diff
-       for (let JR = 0; JR < uR.q; JR++)
+       for (let Sr = 0; Sr < ar.t; Sr++)
```

#### 4782. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39714` → after: `L39177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39177) · [Before (L39714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39714)

```diff
-       for (let yR = 0; yR < uR.q; yR++) {
+       for (let Zr = 0; Zr < ar.t; Zr++) {
```

#### 4783. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39717` → after: `L39180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39180) · [Before (L39717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39717)

```diff
-         if (ZR(tR)) JR += null !== (GR = tR.amount) && void 0 !== GR ? GR : 1
+         if (jr(Wr)) Sr += null !== (Qr = Wr.amount) && void 0 !== Qr ? Qr : 1
```

#### 4784. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39723-L39725` → after: `L39186-L39188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39186-L39188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39186-L39188) · [Before (L39723-L39725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39723-L39725)

```diff
-       if (GR !== yR.j.GLIDING && uR !== yR.j.GLIDING) return;
-       const ZR = RR.zC.aGR(JR);
-       if (ZR.gliderFuelCooldownEnd = 0, GR === yR.j.GLIDING) {
+       if (Qr !== Zr.k.GLIDING && ar !== Zr.k.GLIDING) return;
+       const jr = rr.YB.ASr(Sr);
+       if (jr.gliderFuelCooldownEnd = 0, Qr === Zr.k.GLIDING) {
```

#### 4785. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39727-L39728` → after: `L39190-L39191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39190-L39191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39190-L39191) · [Before (L39727-L39728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39727-L39728)

```diff
-         const GR = null === (iR = RR.zC.cGR(JR)) || void 0 === iR ? void 0 : iR.inventory;
-         GR && null !== qR(GR) && RR.bloxd.startGliderFuelCooldown(JR, ZR, tR.h.getFirecrackerCooldownMultiplier(GR.getItemAtSelectedSlot()))
+         const Qr = null === (fr = rr.YB.IQr(Sr)) || void 0 === fr ? void 0 : fr.inventory;
+         Qr && null !== Ir(Qr) && rr.bloxd.startGliderFuelCooldown(Sr, jr, Wr.c.getFirecrackerCooldownMultiplier(Qr.getItemAtSelectedSlot()))
```

#### 4786. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39732` → after: `L39195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39195) · [Before (L39732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39732)

```diff
-   37949: (RR, JR, GR) => {
+   38315: (rr, Sr, Qr) => {
```

#### 4787. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39738` → after: `L39201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39201) · [Before (L39738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39738)

```diff
-       d: () => yR
+       b: () => Zr
```

#### 4788. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39741` → after: `L39204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39204) · [Before (L39741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39741)

```diff
-   39164: (RR, JR, GR) => {
+   39503: (rr, Sr, Qr) => {
```

#### 4789. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39744` → after: `L39207-L39209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39207-L39209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39207-L39209) · [Before (L39744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39744)

```diff
-       f: () => iR,
+       d: () => fr,
+       g: () => jr,
+       i: () => Er,
```

#### 4790. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39746-L39749` → after: `L39211-L39212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39211-L39212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39211-L39212) · [Before (L39746-L39749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39746-L39749)

```diff
-       n: () => fR,
-       q: () => KR,
-       r: () => VR,
-       s: () => tR
+       k: () => pr,
+       l: () => Wr
```

#### 4791. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39751` → after: `L39214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39214) · [Before (L39751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39751)

```diff
-     var yR = GR(3031);
+     var Zr = Qr(2999);
```

#### 4792. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39754` → after: `L39217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39217) · [Before (L39754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39754)

```diff
-       const JR = new yR.i(`blockBreakDrop|${RR}`);
+       const Sr = new Zr.l(`blockBreakDrop|${rr}`);
```

#### 4793. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39759` → after: `L39222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39222) · [Before (L39759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39759)

```diff
-       RR.gravityMultiplier = 2, RR.friction = 4, RR.yq = .02, RR.Yw = 0, RR.fluidDrag = .2
+       rr.gravityMultiplier = 2, rr.friction = 4, rr.sj = .02, rr.Dm = 0, rr.fluidDrag = .2
```

#### 4794. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39784` → after: `L39247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39247) · [Before (L39784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39784)

```diff
-   39329: (RR, JR, GR) => {
+   39679: (rr, Sr, Qr) => {
```

#### 4795. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39786-L39787` → after: `L39249-L39250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39249-L39250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39249-L39250) · [Before (L39786-L39787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39786-L39787)

```diff
-       d: () => yR,
-       g: () => uR
+       e: () => Zr,
+       i: () => ar
```

#### 4796. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39814` → after: `L39277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39277) · [Before (L39814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39814)

```diff
-   38040: (RR, JR, GR) => {
+   38397: (rr, Sr, Qr) => {
```

#### 4797. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39831` → after: `L39294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39294) · [Before (L39831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39831)

```diff
-       d: () => ZR,
+       c: () => jr,
```

#### 4798. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39834` → after: `L39297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39297) · [Before (L39834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39834)

```diff
-       k: () => tR
+       i: () => Wr
```

#### 4799. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39837` → after: `L39300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39300) · [Before (L39837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39837)

```diff
-   38034: (RR, JR, GR) => {
+   38390: (rr, Sr, Qr) => {
```

#### 4800. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39839` → after: `L39302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39302) · [Before (L39839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39839)

```diff
-       b: () => fR
+       c: () => Er
```

#### 4801. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39841-L39842` → after: `L39304-L39305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39304-L39305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39304-L39305) · [Before (L39841-L39842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39841-L39842)

```diff
-     var yR = GR(38040),
-       tR = GR(5844);
+     var Zr = Qr(38397),
+       Wr = Qr(5779);
```

#### 4802. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39847` → after: `L39310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39310) · [Before (L39847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39847)

```diff
-     for (const VR of Object.keys(tR.q))(0, yR.f)(VR) ? uR.push(VR) : (0, yR.k)(VR) && ZR.push(VR), (0, yR.h)(VR) && qR.push(VR), (VR.includes(" Bed Head") || VR.includes(" Strongbed Head")) && iR.push(VR);
+     for (const pr of Object.keys(Wr.n))(0, Zr.f)(pr) ? ar.push(pr) : (0, Zr.i)(pr) && jr.push(pr), (0, Zr.h)(pr) && Ir.push(pr), (pr.includes(" Bed Head") || pr.includes(" Strongbed Head")) && fr.push(pr);
```

#### 4803. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39857` → after: `L39320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39320) · [Before (L39857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39857)

```diff
-   39633: (RR, JR, GR) => {
+   39975: (rr, Sr, Qr) => {
```

#### 4804. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39859-L39860` → after: `L39322-L39323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39322-L39323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39322-L39323) · [Before (L39859-L39860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39859-L39860)

```diff
-       d: () => uR,
-       f: () => VR
+       c: () => ar,
+       d: () => pr
```

#### 4805. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39862-L39863` → after: `L39325-L39326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39325-L39326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39325-L39326) · [Before (L39862-L39863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39862-L39863)

```diff
-     var yR = GR(39630),
-       tR = GR(39642);
+     var Zr = Qr(39969),
+       Wr = Qr(39980);
```

#### 4806. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39872` → after: `L39335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39335) · [Before (L39872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39872)

```diff
-       const VR = (0, yR.d)(JR),
+       const pr = (0, Zr.c)(Sr),
```

#### 4807. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39877-L39880` → after: `L39340-L39343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39340-L39343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39340-L39343) · [Before (L39877-L39880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39877-L39880)

```diff
-         aR = Math.min(Math.max(KR * RR, ZR), tR.h),
-         LR = Math.min(Math.max(wR * RR, qR), tR.e),
-         nR = Math.max(rR * Math.min(RR, tR.h / KR), iR),
-         UR = Math.max(eR * Math.min(RR, tR.e / wR), fR);
+         tr = Math.min(Math.max(xr * rr, jr), Wr.g),
+         hr = Math.min(Math.max(mr * rr, Ir), Wr.d),
+         zr = Math.max(Nr * Math.min(rr, Wr.g / xr), fr),
+         Yr = Math.max(Ur * Math.min(rr, Wr.d / mr), Er);
```

#### 4808. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39886` → after: `L39349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39349) · [Before (L39886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39886)

```diff
-         shadowSize: uR * RR * (null !== (GR = VR.modelScale) && void 0 !== GR ? GR : 1)
+         shadowSize: ar * rr * (null !== (Qr = pr.modelScale) && void 0 !== Qr ? Qr : 1)
```

#### 4809. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39890` → after: `L39353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39353) · [Before (L39890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39890)

```diff
-   38887: (RR, JR, GR) => {
+   39228: (rr, Sr, Qr) => {
```

#### 4810. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39894` → after: `L39357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39357) · [Before (L39894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39894)

```diff
-       h: () => qR
+       i: () => Ir
```

#### 4811. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39896-L39897` → after: `L39359-L39360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39359-L39360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39359-L39360) · [Before (L39896-L39897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39896-L39897)

```diff
-     var yR = GR(38891),
-       tR = GR(3991),
+     var Zr = Qr(39230),
+       Wr = Qr(3938),
```

#### 4812. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39901` → after: `L39364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39364) · [Before (L39901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39901)

```diff
-       return `${RR}|${JR}|${GR}`
+       return `${rr}|${Sr}|${Qr}`
```

#### 4813. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39908` → after: `L39371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39371) · [Before (L39908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39908)

```diff
-     const iR = GR(203).g.LK;
+     const fr = Qr(208).i.hx;
```

#### 4814. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39916` → after: `L39379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39379) · [Before (L39916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39916)

```diff
-   38818: (RR, JR, GR) => {
+   39157: (rr, Sr, Qr) => {
```

#### 4815. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39920-L39923` → after: `L39385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39385) · [Before (L39920-L39923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39920-L39923)

```diff
-       m: () => vR,
-       k: () => bR,
-       n: () => OR,
-       q: () => pR,
+       p: () => Pr,
```

#### 4816. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39925` → after: `L39387-L39388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39387-L39388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39387-L39388) · [Before (L39925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39925)

```diff
-       u: () => xR
+       x: () => qr,
+       A: () => Hr
```

#### 4817. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39927-L39929` → after: `L39390-L39392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39390-L39392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39390-L39392) · [Before (L39927-L39929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39927-L39929)

```diff
-     var yR = GR(7588),
-       tR = GR(38821),
-       uR = GR(377);
+     var Zr = Qr(7424),
+       Wr = Qr(39160),
+       ar = Qr(379);
```

#### 4818. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39931` → after: `L39394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39394) · [Before (L39931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39931)

```diff
-         yq: .25,
+         sj: .25,
```

#### 4819. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39941` → after: `L39404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39404) · [Before (L39941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39941)

```diff
-         canAutoStepByBlock: Object.fromEntries(uR.qc.map((RR => [RR, !0]))),
+         canAutoStepByBlock: Object.fromEntries(ar.pc.map((rr => [rr, !0]))),
```

#### 4820. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39950` → after: `L39413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39413) · [Before (L39950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39950)

```diff
-         speedMultiplierByBlock: Object.fromEntries(uR.qc.map((RR => [RR, 40]))),
+         speedMultiplierByBlock: Object.fromEntries(ar.pc.map((rr => [rr, 40]))),
```

#### 4821. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39957-L39958` → after: `L39420-L39421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39420-L39421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39420-L39421) · [Before (L39957-L39958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39957-L39958)

```diff
-         [yR.c.WOOD]: {},
-         [yR.c.OBSIDIAN]: {
+         [Zr.e.WOOD]: {},
+         [Zr.e.OBSIDIAN]: {
```

#### 4822. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39964` → after: `L39427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39427) · [Before (L39964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39964)

```diff
-         [yR.c.SPEED]: {
+         [Zr.e.SPEED]: {
```

#### 4823. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39990` → after: `L39453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39453) · [Before (L39990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L39990)

```diff
-         yq: 2.5,
+         sj: 2.5,
```

#### 4824. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40021` → after: `L39484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39484) · [Before (L40021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40021)

```diff
-         yq: 3,
+         sj: 3,
```

#### 4825. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40060-L40063` → after: `L39523-L39526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39523-L39526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39523-L39526) · [Before (L40060-L40063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40060-L40063)

```diff
-       [yR.d.KART]: {},
-       [yR.d.OFF_ROADER]: KR,
-       [yR.d.CAR]: {
-         yq: 2.75,
+       [Zr.f.KART]: {},
+       [Zr.f.OFF_ROADER]: xr,
+       [Zr.f.CAR]: {
+         sj: 2.75,
```

#### 4826. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40088-L40093` → after: `L39551-L39556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39551-L39556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39551-L39556) · [Before (L40088-L40093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40088-L40093)

```diff
-       [yR.d.GOLD_MINING_DRILL]: wR("Gold Mining Drill", 5),
-       [yR.d.IRON_MINING_DRILL]: wR("Iron Mining Drill", 4),
-       [yR.d.DIAMOND_MINING_DRILL]: wR("Diamond Mining Drill", 6),
-       [yR.d.MOONSTONE_MINING_DRILL]: wR("Moonstone Mining Drill", 7),
-       [yR.d.ARMORED_CAR]: {
-         yq: 4.5,
+       [Zr.f.GOLD_MINING_DRILL]: mr("Gold Mining Drill", 5),
+       [Zr.f.IRON_MINING_DRILL]: mr("Iron Mining Drill", 4),
+       [Zr.f.DIAMOND_MINING_DRILL]: mr("Diamond Mining Drill", 6),
+       [Zr.f.MOONSTONE_MINING_DRILL]: mr("Moonstone Mining Drill", 7),
+       [Zr.f.ARMORED_CAR]: {
+         sj: 4.5,
```

#### 4827. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40146` → after: `L39609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39609) · [Before (L40146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40146)

```diff
-           activeMovementType: yR.j.GLIDING,
+           activeMovementType: Zr.k.GLIDING,
```

#### 4828. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40153-L40154` → after: `L39616-L39617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39616-L39617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39616-L39617) · [Before (L40153-L40154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40153-L40154)

```diff
-         [yR.g.WOOD]: {},
-         [yR.g.IRON]: {
+         [Zr.j.WOOD]: {},
+         [Zr.j.IRON]: {
```

#### 4829. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40157` → after: `L39620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39620) · [Before (L40157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40157)

```diff
-         [yR.g.GOLD]: {
+         [Zr.j.GOLD]: {
```

#### 4830. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40160` → after: `L39623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39623) · [Before (L40160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40160)

```diff
-         [yR.g.DIAMOND]: {
+         [Zr.j.DIAMOND]: {
```

#### 4831. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40169` → after: `L39632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39632) · [Before (L40169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40169)

```diff
-           activeMovementType: yR.j.FLOATING,
+           activeMovementType: Zr.k.FLOATING,
```

#### 4832. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40183-L40198` → after: `L39646-L39661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39646-L39661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39646-L39661) · [Before (L40183-L40198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40183-L40198)

```diff
-         [yR.b.YELLOW]: WR("Yellow"),
-         [yR.b.WHITE]: WR("White"),
-         [yR.b.RED]: WR("Red"),
-         [yR.b.PURPLE]: WR("Purple"),
-         [yR.b.PINK]: WR("Pink"),
-         [yR.b.ORANGE]: WR("Orange"),
-         [yR.b.MAGENTA]: WR("Magenta"),
-         [yR.b.LIME]: WR("Lime"),
-         [yR.b.LIGHT_GRAY]: WR("Light Gray"),
-         [yR.b.LIGHT_BLUE]: WR("Light Blue"),
-         [yR.b.GREEN]: WR("Green"),
-         [yR.b.GRAY]: WR("Gray"),
-         [yR.b.CYAN]: WR("Cyan"),
-         [yR.b.BROWN]: WR("Brown"),
-         [yR.b.BLUE]: WR("Blue"),
-         [yR.b.BLACK]: WR("Black")
+         [Zr.c.YELLOW]: nr("Yellow"),
+         [Zr.c.WHITE]: nr("White"),
+         [Zr.c.RED]: nr("Red"),
+         [Zr.c.PURPLE]: nr("Purple"),
+         [Zr.c.PINK]: nr("Pink"),
+         [Zr.c.ORANGE]: nr("Orange"),
+         [Zr.c.MAGENTA]: nr("Magenta"),
+         [Zr.c.LIME]: nr("Lime"),
+         [Zr.c.LIGHT_GRAY]: nr("Light Gray"),
+         [Zr.c.LIGHT_BLUE]: nr("Light Blue"),
+         [Zr.c.GREEN]: nr("Green"),
+         [Zr.c.GRAY]: nr("Gray"),
+         [Zr.c.CYAN]: nr("Cyan"),
+         [Zr.c.BROWN]: nr("Brown"),
+         [Zr.c.BLUE]: nr("Blue"),
+         [Zr.c.BLACK]: nr("Black")
```

#### 4833. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40205` → after: `L39668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39668) · [Before (L40205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40205)

```diff
-           icon: `${RR} Balloon`,
+           icon: `${rr} Balloon`,
```

#### 4834. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40211` → after: `L39674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39674) · [Before (L40211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40211)

```diff
-       [yR.n.ROTATION_1]: {
+       [Zr.p.ROTATION_1]: {
```

#### 4835. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40214` → after: `L39677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39677) · [Before (L40214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40214)

```diff
-       [yR.n.ROTATION_2]: {
+       [Zr.p.ROTATION_2]: {
```

#### 4836. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40217` → after: `L39680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39680) · [Before (L40217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40217)

```diff
-       [yR.n.ROTATION_3]: {
+       [Zr.p.ROTATION_3]: {
```

#### 4837. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40220` → after: `L39683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39683) · [Before (L40220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40220)

```diff
-       [yR.n.ROTATION_4]: {
+       [Zr.p.ROTATION_4]: {
```

#### 4838. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40224` → after: `L39687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39687) · [Before (L40224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40224)

```diff
-     var CR = GR(5844),
+     var Kr = Qr(5779),
```

#### 4839. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40231` → after: `L39694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39694) · [Before (L40231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40231)

```diff
-           ...tR.g,
+           ...Wr.d,
```

#### 4840. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40298` → after: `L39761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39761) · [Before (L40298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40298)

```diff
-           tR[ZR] = qR === GR ? yR : JR(qR)
+           Wr[jr] = Ir === Qr ? Zr : Sr(Ir)
```

#### 4841. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40308` → after: `L39771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39771) · [Before (L40308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40308)

```diff
-       return (0, uR.uc)(RR) ? null : (0, uR.X)(CR.q, (JR => {
+       return (0, ar.sc)(rr) ? null : (0, ar.V)(Kr.n, (Sr => {
```

#### 4842. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40310` → after: `L39773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39773) · [Before (L40310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40310)

```diff
-         return null !== (GR = RR[(0, CR.h)(JR)]) && void 0 !== GR ? GR : 1
+         return null !== (Qr = rr[(0, Kr.g)(Sr)]) && void 0 !== Qr ? Qr : 1
```

#### 4843. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40315-L40316` → after: `L39778-L39779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39778-L39779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39778-L39779) · [Before (L40315-L40316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40315-L40316)

```diff
-       return (0, uR.uc)(RR) ? null : (0, uR.X)(CR.q, (JR => {
-         const GR = RR[(0, CR.h)(JR)];
+       return (0, ar.sc)(rr) ? null : (0, ar.V)(Kr.n, (Sr => {
+         const Qr = rr[(0, Kr.g)(Sr)];
```

#### 4844. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40334-L40338` → after: `L39797-L39801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39797-L39801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39797-L39801) · [Before (L40334-L40338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40334-L40338)

```diff
-       [yR.k.DEFAULT]: new MR(tR.g, {}),
-       [yR.k.BOAT]: new MR(ZR, qR),
-       [yR.k.GLIDER]: new MR(aR, LR),
-       [yR.k.BALLOON]: new MR(nR, UR),
-       [yR.k.SLEEPING]: new MR({
+       [Zr.n.DEFAULT]: new Br(Wr.d, {}),
+       [Zr.n.BOAT]: new Br(jr, Ir),
+       [Zr.n.GLIDER]: new Br(tr, hr),
+       [Zr.n.BALLOON]: new Br(zr, Yr),
+       [Zr.n.SLEEPING]: new Br({
```

#### 4845. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40350-L40351` → after: `L39813-L39814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39813-L39814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39813-L39814) · [Before (L40350-L40351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40350-L40351)

```diff
-       [yR.k.RIDING_MOB]: new MR({
-         yq: 1,
+       [Zr.n.RIDING_MOB]: new Br({
+         sj: 1,
```

#### 4846. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40366-L40368` → after: `L39829-L39831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39829-L39831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39829-L39831) · [Before (L40366-L40368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40366-L40368)

```diff
-       [yR.k.CAR]: new MR(fR, rR),
-       [yR.k.HOVERCRAFT]: new MR({
-         yq: .5,
+       [Zr.n.CAR]: new Br(Er, Nr),
+       [Zr.n.HOVERCRAFT]: new Br({
+         sj: .5,
```

#### 4847. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40413` → after: `L39876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39876) · [Before (L40413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40413)

```diff
-       return null !== RR.fixedHeading ? RR.fixedHeading : RR.steering ? JR : GR
+       return null !== rr.fixedHeading ? rr.fixedHeading : rr.steering ? Sr : Qr
```

#### 4848. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40416` → after: `L39879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39879) · [Before (L40416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40416)

```diff
-   38848: (RR, JR, GR) => {
+   39190: (rr, Sr, Qr) => {
```

#### 4849. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40420-L40421` → after: `L39883-L39884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39883-L39884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39883-L39884) · [Before (L40420-L40421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40420-L40421)

```diff
-     var yR = GR(5844),
-       tR = GR(377);
+     var Zr = Qr(5779),
+       Wr = Qr(379);
```

#### 4850. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40496` → after: `L39959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39959) · [Before (L40496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40496)

```diff
-       ZR = (0, tR.X)(yR.q, (RR => {
+       jr = (0, Wr.V)(Zr.n, (rr => {
```

#### 4851. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40498-L40499` → after: `L39961-L39962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39961-L39962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39961-L39962) · [Before (L40498-L40499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40498-L40499)

```diff
-         const iR = (0, yR.h)(RR);
-         return null !== (JR = null !== (GR = null === (tR = uR[iR]) || void 0 === tR ? void 0 : tR.upForceScalar) && void 0 !== GR ? GR : null === (ZR = yR.q[RR]) || void 0 === ZR || null === (qR = ZR.climbableInside) || void 0 === qR ? void 0 : qR.upForceScalar) && void 0 !== JR … [truncated]
+         const fr = (0, Zr.g)(rr);
+         return null !== (Sr = null !== (Qr = null === (Wr = ar[fr]) || void 0 === Wr ? void 0 : Wr.upForceScalar) && void 0 !== Qr ? Qr : null === (jr = Zr.n[rr]) || void 0 === jr || null === (Ir = jr.climbableInside) || void 0 === Ir ? void 0 : Ir.upForceScalar) && void 0 !== Sr … [truncated]
```

#### 4852. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40502` → after: `L39965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39965) · [Before (L40502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40502)

```diff
-   38948: (RR, JR, GR) => {
+   39281: (rr, Sr, Qr) => {
```

#### 4853. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40507-L40509` → after: `L39970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39970) · [Before (L40507-L40509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40507-L40509)

```diff
-       c: () => tR,
-       d: () => qR,
-       e: () => yR,
+       b: () => Wr,
```

#### 4854. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40511` → after: `L39972-L39974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39972-L39974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39972-L39974) · [Before (L40511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40511)

```diff
-       h: () => ZR
+       j: () => Zr,
+       l: () => ar,
+       m: () => jr
```

#### 4855. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40514` → after: `L39977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39977) · [Before (L40514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40514)

```diff
-       mD: 0,
+       gR: 0,
```

#### 4856. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40521` → after: `L39984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39984) · [Before (L40521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40521)

```diff
-       const iR = uR ? RR.mD + ZR : 0;
+       const fr = ar ? rr.gR + jr : 0;
```

#### 4857. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40523` → after: `L39986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39986) · [Before (L40523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40523)

```diff
-         mD: iR,
+         gR: fr,
```

#### 4858. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40536` → after: `L39999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L39999) · [Before (L40536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40536)

```diff
-   7581: (RR, JR, GR) => {
+   7416: (rr, Sr, Qr) => {
```

#### 4859. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40539-L40540` → after: `L40002-L40003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40002-L40003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L40002-L40003) · [Before (L40539-L40540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40539-L40540)

```diff
-       f: () => tR,
-       i: () => wR
+       d: () => Wr,
+       g: () => mr
```

#### 4860. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40542` → after: `L40005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L40005) · [Before (L40542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40542)

```diff
-     var yR = GR(7588);
+     var Zr = Qr(7424);
```

#### 4861. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40545` → after: `L40008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L40008) · [Before (L40545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40545)

```diff
-       return RR && JR === yR.k.DEFAULT
+       return rr && Sr === Zr.n.DEFAULT
```

#### 4862. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40555` → after: `L40018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L40018) · [Before (L40555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40555)

```diff
-         this.YR = 0, this.kR = 0, this.yVelocity = 0
+         this.Jr = 0, this.Dr = 0, this.yVelocity = 0
```

#### 4863. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40558` → after: `L40021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L40021) · [Before (L40558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40558)

```diff
-         this.YR = 0, this.kR = 0, this.yVelocity = 0
+         this.Jr = 0, this.Dr = 0, this.yVelocity = 0
```

#### 4864. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40564-L40565` → after: `L40027-L40028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40027-L40028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L40027-L40028) · [Before (L40564-L40565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40564-L40565)

```diff
-       RR.YR = JR ? Math.min(RR.YR + ZR / uR * tR, ZR) : 0, 0 === GR ? RR.kR = 0 : yR ? RR.kR = tR : RR.kR += tR;
-       const KR = Math.min(RR.kR, uR) / uR,
+       rr.Jr = Sr ? Math.min(rr.Jr + jr / ar * Wr, jr) : 0, 0 === Qr ? rr.Dr = 0 : Zr ? rr.Dr = Wr : rr.Dr += Wr;
+       const xr = Math.min(rr.Dr, ar) / ar,
```

#### 4865. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40570` → after: `L40033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L40033) · [Before (L40570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40570)

```diff
-   39642: (RR, JR, GR) => {
+   39980: (rr, Sr, Qr) => {
```

#### 4866. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40572-L40573` → after: `L40035-L40036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40035-L40036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L40035-L40036) · [Before (L40572-L40573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40572-L40573)

```diff
-       e: () => tR,
-       h: () => yR
+       d: () => Wr,
+       g: () => Zr
```

#### 4867. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40579` → after: `L40042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L40042) · [Before (L40579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40579)

```diff
-   38815: (RR, JR, GR) => {
+   39151: (rr, Sr, Qr) => {
```

#### 4868. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40581-L40582` → after: `L40044-L40045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40044-L40045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L40044-L40045) · [Before (L40581-L40582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40581-L40582)

```diff
-       c: () => iR,
-       e: () => ZR,
+       b: () => fr,
+       f: () => jr,
```

#### 4869. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40585` → after: `L40048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L40048) · [Before (L40585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40585)

```diff
-     var yR = GR(385),
+     var Zr = Qr(388),
```

#### 4870. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40587` → after: `L40050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L40050) · [Before (L40587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40587)

```diff
-       uR = GR(377);
+       ar = Qr(379);
```

#### 4871. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40590` → after: `L40053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L40053) · [Before (L40590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40590)

```diff
-     const UR = [2, 0, 1, 71, 3, "a", "i", 7, 5, 244, 4, 8, 255, "length", "b", "c", "e", "undefined", void 0, 26, "d", 72, 63, 6, "fromCodePoint", 12, "push", 86, 186, 228, "g", 91, 217, "f", 8191, 88, 13, 14, 215, 65, 87, 89, 90, "h", 108, 54, 156, 248, 138, 9, 111, 187, "PI", 9 … [truncated]
+     const Yr = [2, 0, 1, 8, "c", 191, 9, 7, 5, "f", 4, 255, "length", 67, 3, "a", 187, "undefined", void 0, "b", 63, 6, "fromCodePoint", 12, "push", 88, 119, 143, 176, "g", 91, 39, 8191, 13, 14, 33, 18, "h", 193, 133, "i", 44, 208, "d", "?", 111, 113, 34, 105, 219, !1, !0, 136, 1 … [truncated]
```

#### 4872. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40593-L40595` → after: `L40056-L40058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40056-L40058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L40056-L40058) · [Before (L40593-L40595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40593-L40595)

```diff
-       return RR[UR[13]] = UR[2], typeof fR[RR[UR[1]]] === UR[17] ? fR[RR[UR[1]]] = function(...RR) {
-         for (pR(RR[UR[13]] = UR[2], RR[UR[5]] = '`gCcB~/uhiS|*en$:(rtK<YT6v4lf3J[HE^kp_{2,X}wdjW"z0NI+%sx5?OG)&;M.y@URFA9DVaPZm>8L7#oq1Q!b=]', RR[UR[0]] = "" + (RR[UR[1]] || ""), RR[UR[4]] = RR[UR[0]].length, RR[UR[10]] = [], RR[UR[8]] = UR[1], RR[UR[9]] = UR[1], RR[UR[7]] = -UR[ … [truncated]
-           if (RR[UR[6]] = RR[UR[5]].indexOf(RR[UR[0]][RR[-UR[3]]]), RR[UR[6]] !== -UR[2])
+       return rr[Yr[12]] = Yr[2], typeof Er[rr[Yr[1]]] === Yr[17] ? Er[rr[Yr[1]]] = function(...rr) {
+         for (Or(rr[Yr[12]] = Yr[2], rr[-Yr[5]] = '(^z*&"x9,7OH`$P+F|8.uZEvD=la[IrTeUYJhNo2S);mqsj41bGWXCQ~0%5y#<}fLRKtdcw!3:n/_i{]VB@?Ap>gMk6', rr[Yr[0]] = "" + (rr[Yr[1]] || ""), rr[Yr[4]] = rr[Yr[0]].length, rr[Yr[10]] = [], rr[Yr[8]] = Yr[1], rr[Yr[9]] = Yr[1], rr[Yr[7]] = -Yr … [truncated]
+           if (rr[Yr[6]] = rr[-Yr[5]].indexOf(rr[Yr[0]][rr[Yr[3]]]), rr[Yr[6]] !== -Yr[2])
```

#### 4873. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40598` → after: `L40061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L40061) · [Before (L40598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40598)

```diff
-               pR(RR[UR[7]] += RR[UR[6]] * UR[31], RR[UR[8]] |= RR[UR[7]] << RR[UR[9]], RR[UR[9]] += (RR[UR[7]] & UR[34]) > UR[35] ? UR[36] : UR[37]);
+               Or(rr[Yr[7]] += rr[Yr[6]] * Yr[30], rr[Yr[8]] |= rr[Yr[7]] << rr[Yr[9]], rr[Yr[9]] += (rr[Yr[7]] & Yr[32]) > Yr[25] ? Yr[33] : Yr[34]);
```

#### 4874. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40600` → after: `L40063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L40063) · [Before (L40600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40600)

```diff
-                 pR(RR[UR[10]].push(RR[UR[8]] & UR[12]), RR[UR[8]] >>= UR[11], RR[UR[9]] -= UR[11])
+                 Or(rr[Yr[10]].push(rr[Yr[8]] & Yr[11]), rr[Yr[8]] >>= Yr[3], rr[Yr[9]] -= Yr[3])
```

#### 4875. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40603` → after: `L40066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L40066) · [Before (L40603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40603)

```diff
-             } return RR[UR[7]] > -UR[2] && RR[UR[10]].push((RR[UR[8]] | RR[UR[7]] << RR[UR[9]]) & UR[12]), AR(RR[UR[10]])
+             } return rr[Yr[7]] > -Yr[2] && rr[Yr[10]].push((rr[Yr[8]] | rr[Yr[7]] << rr[Yr[9]]) & Yr[11]), er(rr[Yr[10]])
```

#### 4876. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40608` → after: `L40071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L40071) · [Before (L40608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40608)

```diff
-       return RR[UR[13]] = UR[2], typeof wR !== UR[17] && wR ? (new wR).decode(new rR(RR[UR[1]])) : typeof eR !== UR[17] && eR ? eR.from(RR[UR[1]]).toString("utf-8") : nR(RR[UR[1]])
+       return rr[Yr[12]] = Yr[2], typeof mr !== Yr[17] && mr ? (new mr).decode(new Nr(rr[Yr[1]])) : typeof Ur !== Yr[17] && Ur ? Ur.from(rr[Yr[1]]).toString("utf-8") : zr(rr[Yr[1]])
```

#### 4877. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40612-L40613` → after: `L40075-L40076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40075-L40076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L40075-L40076) · [Before (L40612-L40613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40612-L40613)

```diff
-     pR(fR = {}, VR = [')(%u+5780?B"[C!,I9uZe', 'oG"0/ax3n$8Mu4.rx^$+`O7IwGY8Av1kWRdm69gMUid+g', "1jgJ}_]akiE[F6OkjKNlKoD6$MWSD$Pvl)OI%Pxu];(ehcYlPyc~9F`", 'T9HIu8K6F.Um4&@6FVsf#Z3"Vye#~q*', "p9r3>pgkEiznzl[Tc06P>FI3N)#51pRr]KC", ":9.s+P78};CCK$}2v)14<?yFZ;)|%:D[hBnuM)ceZGQ*?)^6*g … [truncated]
-       pR(RR[UR[13]] = UR[1], RR[-UR[7]] = [function() {
+     Or(Er = {}, pr = ["DW+QXfpIL7WPF*.SkHuIopoz(%qD^h,T@*vU2N|C*", "6CWOE%tIGQgtPo2Tmu?iXih5/yqX_*", "8S!&Qim^", "*K5ee!SX}8:i#+av]yyOop35:|6Ek&ioC%baO}Uf?7bX^", "b1E&@_zr4Cij(2>Ymu>&", 'z#DQh{Ph`PV^C3nlRN^{"CH)F71cW*6JFjoT&3S8rfy', "KQgx]}AS+fFd]zg[QPdOgosfayyi_*Rrod5C?{=9p.1J^" … [truncated]
+       Or(rr[Yr[12]] = Yr[1], rr[Yr[15]] = [function() {
```

#### 4878. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40621` → after: `L40084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L40084) · [Before (L40621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40621)

```diff
-       }], RR[UR[14]] = UR[18], RR[UR[15]] = []);
+       }], rr[Yr[13]] = Yr[18], rr[Yr[4]] = []);
```

#### 4879. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40623` → after: `L40086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L40086) · [Before (L40623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40623)

```diff
-         pR(RR[UR[14]] = Object, RR[UR[15]][UR[26]]("".__proto__.constructor.name))
+         Or(rr[Yr[13]] = Object, rr[Yr[4]][Yr[24]]("".__proto__.constructor.name))
```

#### 4880. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40625-L40628` → after: `L40088-L40091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40088-L40091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L40088-L40091) · [Before (L40625-L40628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40625-L40628)

```diff
-       RR: for (RR[UR[4]] = UR[1]; RR[UR[4]] < RR[-UR[7]][UR[13]]; RR[UR[4]]++) try {
-         for (RR[UR[14]] = RR[-UR[7]][RR[UR[4]]](), RR[UR[16]] = UR[1]; RR[UR[16]] < RR[UR[15]][UR[13]]; RR[UR[16]]++)
-           if (typeof RR[UR[14]][RR[UR[15]][RR[UR[16]]]] === UR[17]) continue RR;
-         return RR[UR[14]]
+       rr: for (rr[Yr[14]] = Yr[1]; rr[Yr[14]] < rr[Yr[15]][Yr[12]]; rr[Yr[14]]++) try {
+         for (rr[Yr[13]] = rr[Yr[15]][rr[Yr[14]]](), rr[-Yr[16]] = Yr[1]; rr[-Yr[16]] < rr[Yr[4]][Yr[12]]; rr[-Yr[16]]++)
+           if (typeof rr[Yr[13]][rr[Yr[4]][rr[-Yr[16]]]] === Yr[17]) continue rr;
+         return rr[Yr[13]]
```

#### 4881. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40630-L40632` → after: `L40093-L40095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40093-L40095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L40093-L40095) · [Before (L40630-L40632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40630-L40632)

```diff
-       return RR[UR[14]] || this
-     }() || {}, wR = KR.TextDecoder, rR = KR.Uint8Array, eR = KR.GK, aR = KR.String || String, LR = KR.Array || Array, nR = function(...RR) {
-       return pR(RR[UR[13]] = UR[1], RR[UR[15]] = new LR(UR[61]), RR[UR[2]] = aR[UR[24]] || aR.fromCharCode, RR[UR[19]] = []),
+       return rr[Yr[13]] || this
+     }() || {}, mr = xr.TextDecoder, Nr = xr.Uint8Array, Ur = xr.Dp, tr = xr.String || String, hr = xr.Array || Array, zr = function(...rr) {
+       return Or(rr[Yr[12]] = Yr[1], rr[Yr[15]] = new hr(Yr[65]), rr[Yr[19]] = tr[Yr[22]] || tr.fromCharCode, rr[Yr[4]] = []),
```

#### 4882. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40634-L40635` → after: `L40097-L40098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40097-L40098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L40097-L40098) · [Before (L40634-L40635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40634-L40635)

```diff
-           for (pR(JR[UR[13]] = UR[2], JR[UR[5]] = UR[18], JR[UR[14]] = UR[18], JR[UR[21]] = JR[UR[1]][UR[13]], RR[UR[19]][UR[13]] = UR[1]), JR[UR[20]] = UR[1]; JR[UR[20]] < JR[UR[21]];) pR(JR[UR[14]] = JR[UR[1]][JR[UR[20]]++], JR[UR[14]] <= UR[60] ? JR[UR[5]] = JR[UR[14]] : JR[UR … [truncated]
-           return RR[UR[19]].join("")
+           for (Or(Sr[Yr[12]] = Yr[2], Sr[Yr[15]] = Yr[18], Sr[Yr[19]] = Yr[18], Sr[Yr[14]] = Sr[Yr[1]][Yr[12]], rr[Yr[4]][Yr[12]] = Yr[1]), Sr[Yr[10]] = Yr[1]; Sr[Yr[10]] < Sr[Yr[14]];) Or(Sr[Yr[19]] = Sr[Yr[1]][Sr[Yr[10]]++], Sr[Yr[19]] <= Yr[53] ? Sr[Yr[15]] = Sr[Yr[19]] : Sr[Y … [truncated]
+           return rr[Yr[4]].join("")
```

#### 4883. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40637-L40641` → after: `L40100-L40124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40100-L40124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L40100-L40124) · [Before (L40637-L40641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40637-L40641)

```diff
-     }());
-     const XR = tR()[WR(UR[27])](),
-       MR = tR()[WR(UR[27])](),
-       BR = tR()[WR(UR[27])](),
-       lR = UR[25];
+     }()), nr(Yr[25]) + "U" in Kr && function() {
+       var rr, Sr, Qr;
+ 
+       function Zr(...rr) {
+         for (Or(rr[Yr[12]] = Yr[2], rr[Yr[15]] = 'z*4jhp9EMDA#}oK].$BnIw;=Jcb5V</iZ!8CT&PQafYv,(Fg~@s1)7%LUO`Rm2{xS_kG?r^"y+>H6du3:|t0qeW[NXl', rr[-Yr[26]] = "" + (rr[Yr[1]] || ""), rr[-Yr[27]] = rr[-Yr[26]].length, rr[-Yr[35]] = [], rr[Yr[8]] = Yr[1], rr[Yr[31]] = Yr[1], rr[Yr[2 … [truncated]
+           if (rr[Yr[28]] = rr[Yr[15]].indexOf(rr[-Yr[26]][rr[Yr[3]]]), rr[Yr[28]] !== -Yr[2])
+             if (rr[Yr[29]] < Yr[1]) rr[Yr[29]] = rr[Yr[28]];
+             else {
+               Or(rr[Yr[29]] += rr[Yr[28]] * Yr[30], rr[Yr[8]] |= rr[Yr[29]] << rr[Yr[31]], rr[Yr[31]] += (rr[Yr[29]] & Yr[32]) > Yr[25] ? Yr[33] : Yr[34]);
+               do {
+                 Or(rr[-Yr[35]].push(rr[Yr[8]] & Yr[11]), rr[Yr[8]] >>= Yr[3], rr[Yr[31]] -= Yr[3])
+               } while (rr[Yr[31]] > Yr[7]);
+               rr[Yr[29]] = -Yr[2]
+             } return rr[Yr[29]] > -Yr[2] && rr[-Yr[35]].push((rr[Yr[8]] | rr[Yr[29]] << rr[Yr[31]]) & Yr[11]), er(rr[-Yr[35]])
+       }
+ 
+ ... (9 more added lines; see GitHub link above)
```

#### 4884. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40648-L40651` → after: `L40131-L40134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40131-L40134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L40131-L40134) · [Before (L40648-L40651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40648-L40651)

```diff
-         return RR[UR[13]] = UR[2], typeof fR[RR[UR[1]]] === UR[17] ? fR[RR[UR[1]]] = function(...RR) {
-           for (pR(RR[UR[13]] = UR[2], RR[UR[5]] = 'H,csdmTENPuM1rYFV%)j5ZC|o~+S6(Xv[`lWw_ba"*qBz=;>A7I8Dkft$xLiUp2R&hG/:^]!@gO<J4{3KenQ?}0.9#y', RR[-UR[28]] = "" + (RR[UR[1]] || ""), RR[UR[15]] = RR[-UR[28]].length, RR[UR[10]] = [], RR[-UR[32]] = UR[1], RR[UR[33]] = UR[1], RR[UR[ … [truncated]
-             if (RR[UR[29]] = RR[UR[5]].indexOf(RR[-UR[28]][RR[UR[11]]]), RR[UR[29]] !== -UR[2])
-               if (RR[UR[30]] < UR[1]) RR[UR[30]] = RR[UR[29]];
+         return rr[Yr[12]] = Yr[2], typeof Er[rr[Yr[1]]] === Yr[17] ? Er[rr[Yr[1]]] = function(...rr) {
+           for (Or(rr[Yr[12]] = Yr[2], rr[Yr[2]] = '1FmLTXrlkJjANaKxP9U<O5Z>$tW]:b@[s!Y(wBGdnSv;+"^,yfeEo&6)cI|/h7MuC=D%?*0_z.4{8~`3qH}Qg2Ri#pV', rr[-Yr[47]] = "" + (rr[Yr[1]] || ""), rr[Yr[14]] = rr[-Yr[47]].length, rr[Yr[48]] = [], rr[Yr[49]] = Yr[1], rr[Yr[9]] = Yr[1], rr[Yr[29 … [truncated]
+             if (rr[Yr[40]] = rr[Yr[2]].indexOf(rr[-Yr[47]][rr[Yr[3]]]), rr[Yr[40]] !== -Yr[2])
+               if (rr[Yr[29]] < Yr[1]) rr[Yr[29]] = rr[Yr[40]];
```

#### 4885. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40653` → after: `L40136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L40136) · [Before (L40653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40653)

```diff
-                 pR(RR[UR[30]] += RR[UR[29]] * UR[31], RR[-UR[32]] |= RR[UR[30]] << RR[UR[33]], RR[UR[33]] += (RR[UR[30]] & UR[34]) > UR[35] ? UR[36] : UR[37]);
+                 Or(rr[Yr[29]] += rr[Yr[40]] * Yr[30], rr[Yr[49]] |= rr[Yr[29]] << rr[Yr[9]], rr[Yr[9]] += (rr[Yr[29]] & Yr[32]) > Yr[25] ? Yr[33] : Yr[34]);
```

#### 4886. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40655-L40658` → after: `L40138-L40141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40138-L40141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L40138-L40141) · [Before (L40655-L40658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40655-L40658)

```diff
-                   pR(RR[UR[10]].push(RR[-UR[32]] & UR[12]), RR[-UR[32]] >>= UR[11], RR[UR[33]] -= UR[11])
-                 } while (RR[UR[33]] > UR[7]);
-                 RR[UR[30]] = -UR[2]
-               } return RR[UR[30]] > -UR[2] && RR[UR[10]].push((RR[-UR[32]] | RR[UR[30]] << RR[UR[33]]) & UR[12]), AR(RR[UR[10]])
+                   Or(rr[Yr[48]].push(rr[Yr[49]] & Yr[11]), rr[Yr[49]] >>= Yr[3], rr[Yr[9]] -= Yr[3])
+                 } while (rr[Yr[9]] > Yr[7]);
+                 rr[Yr[29]] = -Yr[2]
+               } return rr[Yr[29]] > -Yr[2] && rr[Yr[48]].push((rr[Yr[49]] | rr[Yr[29]] << rr[Yr[9]]) & Yr[11]), er(rr[Yr[48]])
```

#### 4887. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40661` → after: `L40144-L40158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40144-L40158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L40144-L40158) · [Before (L40661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40661)

```diff
-       if (RR[UR[13]] = UR[49], !RR[UR[2]][JR(UR[40]) + JR(UR[35]) + JR(UR[41]) + JR(UR[42])]) {
+       if (rr[Yr[12]] = Yr[6], Sr(114) in Kr && function(...rr) {
+           Or(rr[Yr[12]] = Yr[1], rr[-Yr[52]] = function(...Sr) {
+             return Sr[Yr[12]] = Yr[0], rr[Yr[2]]({}, Sr[Yr[1]], Sr[Yr[2]])
+           }, rr[Yr[2]] = function(Sr, Qr, Zr) {
+             var Wr, ar, jr, Ir = {};
+             if (Sr[Qr + Zr] !== Yr[18]) return Sr[Qr + Zr];
+             if (Qr === Zr) return Yr[51];
+             for (Wr = Yr[1]; Wr < Qr.length; Wr++) Ir[Qr[Wr]] === Yr[18] && (Ir[Qr[Wr]] = Yr[1]), Ir[Zr[Wr]] === Yr[18] && (Ir[Zr[Wr]] = Yr[1]), Or(Ir[Qr[Wr]]++, Ir[Zr[Wr]]--);
+             for (ar in Ir)
+               if (Ir[ar] !== Yr[1]) return Sr[Qr + Zr] = Yr[50], Yr[50];
+             for (jr = Yr[2]; jr < Qr.length; jr++)
+               if (rr[Yr[2]](Sr, Qr.substr(Yr[1], jr), Zr.substr(Yr[1], jr)) && rr[Yr[2]](Sr, Qr.substr(jr), Zr.substr(jr)) || rr[Yr[2]](Sr, Qr.substr(Yr[1], jr), Zr.substr(Zr.length - jr)) && rr[Yr[2]](Sr, Qr.substr(jr), Zr.substr(Yr[1], Zr.length - jr))) return Sr[Qr + Zr] = Yr[ … [truncated]
+             return Sr[Qr + Zr] = Yr[50], Yr[50]
+           }, console.log(rr[-Yr[52]]))
+         }(), !rr[Yr[2]][Sr(Yr[55]) + Sr(Yr[56]) + Sr(Yr[57]) + Sr(Yr[58])]) {
```

#### 4888. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40663-L40665` → after: `L40160-L40162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40160-L40162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L40160-L40162) · [Before (L40663-L40665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40663-L40665)

```diff
-           for (pR(RR[UR[13]] = UR[2], RR[UR[39]] = '[WPJQGrEg=uv1Na"e(F{yR*<#7h5$kw3SfC,:`t?Hj~&68|nOYIT)b;sxi04^9}_d+zqD>LcZXp@.]%M/oBVlU2!AmK', RR[UR[14]] = "" + (RR[UR[1]] || ""), RR[UR[15]] = RR[UR[14]].length, RR[UR[20]] = [], RR[UR[8]] = UR[1], RR[UR[23]] = UR[1], RR[UR[30] … [truncated]
-             if (RR[UR[6]] = RR[UR[39]].indexOf(RR[UR[14]][RR[-UR[38]]]), RR[UR[6]] !== -UR[2])
-               if (RR[UR[30]] < UR[1]) RR[UR[30]] = RR[UR[6]];
+           for (Or(rr[Yr[12]] = Yr[2], rr[Yr[15]] = 'xv~9+NP]DI%RhGdQiec[7f?F6Wj;C42lV,KH={s`g|3rmo*z()b#T>yX8$<}Y/MknBUJZqASaELO51".&0@p_uwt^:!', rr[Yr[0]] = "" + (rr[Yr[1]] || ""), rr[Yr[14]] = rr[Yr[0]].length, rr[-Yr[54]] = [], rr[Yr[8]] = Yr[1], rr[Yr[21]] = Yr[1], rr[Yr[7]]  … [truncated]
+             if (rr[Yr[6]] = rr[Yr[15]].indexOf(rr[Yr[0]][rr[-Yr[53]]]), rr[Yr[6]] !== -Yr[2])
+               if (rr[Yr[7]] < Yr[1]) rr[Yr[7]] = rr[Yr[6]];
```

#### 4889. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40667` → after: `L40164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L40164) · [Before (L40667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40667)

```diff
-                 pR(RR[UR[30]] += RR[UR[6]] * UR[31], RR[UR[8]] |= RR[UR[30]] << RR[UR[23]], RR[UR[23]] += (RR[UR[30]] & UR[34]) > UR[35] ? UR[36] : UR[37]);
+                 Or(rr[Yr[7]] += rr[Yr[6]] * Yr[30], rr[Yr[8]] |= rr[Yr[7]] << rr[Yr[21]], rr[Yr[21]] += (rr[Yr[7]] & Yr[32]) > Yr[25] ? Yr[33] : Yr[34]);
```

#### 4890. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40669-L40672` → after: `L40166-L40169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40166-L40169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L40166-L40169) · [Before (L40669-L40672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40669-L40672)

```diff
-                   pR(RR[UR[20]].push(RR[UR[8]] & UR[12]), RR[UR[8]] >>= UR[11], RR[UR[23]] -= UR[11])
-                 } while (RR[UR[23]] > UR[7]);
-                 RR[UR[30]] = -UR[2]
-               } return RR[UR[30]] > -UR[2] && RR[UR[20]].push((RR[UR[8]] | RR[UR[30]] << RR[UR[23]]) & UR[12]), AR(RR[UR[20]])
+                   Or(rr[-Yr[54]].push(rr[Yr[8]] & Yr[11]), rr[Yr[8]] >>= Yr[3], rr[Yr[21]] -= Yr[3])
+                 } while (rr[Yr[21]] > Yr[7]);
+                 rr[Yr[7]] = -Yr[2]
+               } return rr[Yr[7]] > -Yr[2] && rr[-Yr[54]].push((rr[Yr[8]] | rr[Yr[7]] << rr[Yr[21]]) & Yr[11]), er(rr[-Yr[54]])
```

#### 4891. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40676` → after: `L40173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L40173) · [Before (L40676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40676)

```diff
-           return RR[UR[13]] = UR[2], typeof fR[RR[UR[1]]] === UR[17] ? fR[RR[UR[1]]] = eR(VR[RR[UR[1]]]) : fR[RR[UR[1]]]
+           return rr[Yr[12]] = Yr[2], typeof Er[rr[Yr[1]]] === Yr[17] ? Er[rr[Yr[1]]] = Ur(pr[rr[Yr[1]]]) : Er[rr[Yr[1]]]
```

#### 4892. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40678` → after: `L40175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L40175) · [Before (L40678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40678)

```diff
-         RR[UR[2]][aR(UR[31]) + aR(92) + aR(93)] = RR[UR[7]]
+         rr[Yr[2]][tr(Yr[26]) + tr(120) + tr(121)] = rr[Yr[7]]
```

#### 4893. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40680` → after: `L40177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L40177) · [Before (L40680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40680)

```diff
-       if (pR(RR[UR[2]][JR(UR[40]) + JR(UR[35]) + JR(UR[41]) + JR(UR[42])] = !0, RR[UR[2]][JR(UR[40]) + JR(94) + JR(95) + JR(96)] = RR[UR[2]][JR(UR[53]) + JR(UR[54]) + JR(UR[55])], RR[UR[50]] = RR[UR[10]]), RR[UR[10]] === UR[1] && RR[UR[8]] !== UR[1]) {
+       if (Or(rr[Yr[2]][Sr(Yr[55]) + Sr(Yr[56]) + Sr(Yr[57]) + Sr(Yr[58])] = Yr[51], rr[Yr[2]][Sr(Yr[55]) + Sr(122) + Sr(123) + Sr(124)] = rr[Yr[2]][Sr(Yr[70]) + Sr(Yr[71]) + Sr(Yr[53])], rr[Yr[15]] = rr[Yr[10]]), rr[Yr[10]] === Yr[1] && rr[Yr[8]] !== Yr[1]) {
```

#### 4894. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40682-L40684` → after: `L40179-L40181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40179-L40181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L40179-L40181) · [Before (L40682-L40684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40682-L40684)

```diff
-           for (pR(RR[UR[13]] = UR[2], RR[-UR[44]] = '+ONZRITphmALknSoridXWf~P,%zs042F!@wlB)ycE/v`b.uQU:|}"5K{?q(73$>9=CVH8*DtYajG16Je#g^x&;M_[]<', RR[UR[14]] = "" + (RR[UR[1]] || ""), RR[UR[15]] = RR[UR[14]].length, RR[UR[20]] = [], RR[UR[8]] = UR[1], RR[UR[23]] = UR[1], RR[-UR[4 … [truncated]
-             if (RR[-UR[45]] = RR[-UR[44]].indexOf(RR[UR[14]][RR[UR[43]]]), RR[-UR[45]] !== -UR[2])
-               if (RR[-UR[46]] < UR[1]) RR[-UR[46]] = RR[-UR[45]];
+           for (Or(rr[Yr[12]] = Yr[2], rr[Yr[60]] = 'zFUeDSoPwmM&au_1TR@7,jY.2K%(p[ZC65nh*$xq}VOJ~lBQbEi/Hvt)4`!s|+k#3f^NA<y=g0GrXcIdL"9W:{]8;>?', rr[-Yr[59]] = "" + (rr[Yr[1]] || ""), rr[Yr[4]] = rr[-Yr[59]].length, rr[-Yr[64]] = [], rr[Yr[8]] = Yr[1], rr[-Yr[63]] = Yr[1], rr[-Yr … [truncated]
+             if (rr[-Yr[61]] = rr[Yr[60]].indexOf(rr[-Yr[59]][rr[Yr[3]]]), rr[-Yr[61]] !== -Yr[2])
+               if (rr[-Yr[62]] < Yr[1]) rr[-Yr[62]] = rr[-Yr[61]];
```

#### 4895. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40686` → after: `L40183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L40183) · [Before (L40686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40686)

```diff
-                 pR(RR[-UR[46]] += RR[-UR[45]] * UR[31], RR[UR[8]] |= RR[-UR[46]] << RR[UR[23]], RR[UR[23]] += (RR[-UR[46]] & UR[34]) > UR[35] ? UR[36] : UR[37]);
+                 Or(rr[-Yr[62]] += rr[-Yr[61]] * Yr[30], rr[Yr[8]] |= rr[-Yr[62]] << rr[-Yr[63]], rr[-Yr[63]] += (rr[-Yr[62]] & Yr[32]) > Yr[25] ? Yr[33] : Yr[34]);
```

#### 4896. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40688-L40691` → after: `L40185-L40188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40185-L40188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L40185-L40188) · [Before (L40688-L40691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40688-L40691)

```diff
-                   pR(RR[UR[20]].push(RR[UR[8]] & UR[12]), RR[UR[8]] >>= UR[11], RR[UR[23]] -= UR[11])
-                 } while (RR[UR[23]] > UR[7]);
-                 RR[-UR[46]] = -UR[2]
-               } return RR[-UR[46]] > -UR[2] && RR[UR[20]].push((RR[UR[8]] | RR[-UR[46]] << RR[UR[23]]) & UR[12]), AR(RR[UR[20]])
+                   Or(rr[-Yr[64]].push(rr[Yr[8]] & Yr[11]), rr[Yr[8]] >>= Yr[3], rr[-Yr[63]] -= Yr[3])
+                 } while (rr[-Yr[63]] > Yr[7]);
+                 rr[-Yr[62]] = -Yr[2]
+               } return rr[-Yr[62]] > -Yr[2] && rr[-Yr[64]].push((rr[Yr[8]] | rr[-Yr[62]] << rr[-Yr[63]]) & Yr[11]), er(rr[-Yr[64]])
```

#### 4897. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40695` → after: `L40192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L40192) · [Before (L40695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40695)

```diff
-           return RR[UR[13]] = UR[2], typeof fR[RR[UR[1]]] === UR[17] ? fR[RR[UR[1]]] = LR(VR[RR[UR[1]]]) : fR[RR[UR[1]]]
+           return rr[Yr[12]] = Yr[2], typeof Er[rr[Yr[1]]] === Yr[17] ? Er[rr[Yr[1]]] = hr(pr[rr[Yr[1]]]) : Er[rr[Yr[1]]]
```

#### 4898. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40699-L40713` → after: `L40196-L40208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40196-L40208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L40196-L40208) · [Before (L40699-L40713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40699-L40713)

```diff
-           function JR(...RR) {
-             return RR[UR[13]] = UR[2], typeof fR[RR[UR[1]]] === UR[17] ? fR[RR[UR[1]]] = function(...RR) {
-               for (pR(RR[UR[13]] = UR[2], RR[UR[5]] = '`2+]~;67&@UV{kd[BuZXfi:$A>GOLD5(W?o#vRclN"bt%sIm,wPpY4^Ex8a9jy}!qSTQrh1=*gCen_3HMz<F)K|0./J', RR[UR[47]] = "" + (RR[UR[1]] || ""), RR[UR[48]] = RR[UR[47]].length, RR[UR[20]] = [], RR[UR[16]] = UR[1], RR[UR[23]] = UR[1], RR[UR … [truncated]
-                 if (RR[UR[49]] = RR[UR[5]].indexOf(RR[UR[47]][RR[UR[43]]]), RR[UR[49]] !== -UR[2])
-                   if (RR[UR[30]] < UR[1]) RR[UR[30]] = RR[UR[49]];
-                   else {
-                     pR(RR[UR[30]] += RR[UR[49]] * UR[31], RR[UR[16]] |= RR[UR[30]] << RR[UR[23]], RR[UR[23]] += (RR[UR[30]] & UR[34]) > UR[35] ? UR[36] : UR[37]);
-                     do {
-                       pR(RR[UR[20]].push(RR[UR[16]] & UR[12]), RR[UR[16]] >>= UR[11], RR[UR[23]] -= UR[11])
-                     } while (RR[UR[23]] > UR[7]);
-                     RR[UR[30]] = -UR[2]
-                   } return RR[UR[30]] > -UR[2] && RR[UR[20]].push((RR[UR[16]] | RR[UR[30]] << RR[UR[23]]) & UR[12]), AR(RR[UR[20]])
-             }(VR[RR[UR[1]]]) : fR[RR[UR[1]]]
-           }
-           RR[UR[13]] = UR[1], pR(RR[-UR[51]] = nR(101) + nR(102) + JR(103) + JR(104) + JR(105), RR[UR[14]] = JR(106) + JR(107) + JR(UR[44]) + JR(109) + JR(110) + JR(UR[50]) + "?", RR[UR[15]] = JR(112) + JR(113) + JR(114) + JR(115), RR[-UR[51]].match(RR[UR[14]] + RR[UR[15]]))
+           Or(rr[Yr[12]] = Yr[1], rr[-Yr[38]] = function(...rr) {
+             for (Or(rr[Yr[12]] = Yr[2], rr[Yr[15]] = rr[Yr[1]].length, rr[Yr[19]] = [], rr[Yr[67]] = Yr[1], rr[Yr[68]] = Yr[1], rr[Yr[1]].sort(((rr, Sr) => rr - Sr))), rr[Yr[66]] = Yr[1]; rr[Yr[66]] < rr[Yr[15]]; rr[Yr[66]]++)
+               if (!(rr[Yr[66]] > Yr[1] && rr[Yr[1]][rr[Yr[66]]] === rr[Yr[1]][rr[Yr[66]] - Yr[2]]))
+                 for (Or(rr[Yr[67]] = rr[Yr[66]] + Yr[2], rr[Yr[68]] = rr[Yr[15]] - Yr[2]); rr[Yr[67]] < rr[Yr[68]];)
+                   if (rr[Yr[1]][rr[Yr[66]]] + rr[Yr[1]][rr[Yr[67]]] + rr[Yr[1]][rr[Yr[68]]] < Yr[1]) rr[Yr[67]]++;
+                   else if (rr[Yr[1]][rr[Yr[66]]] + rr[Yr[1]][rr[Yr[67]]] + rr[Yr[1]][rr[Yr[68]]] > Yr[1]) rr[Yr[68]]--;
+             else {
+               for (rr[Yr[19]].push([rr[Yr[1]][rr[Yr[66]]], rr[Yr[1]][rr[Yr[67]]], rr[Yr[1]][rr[Yr[68]]]]); rr[Yr[67]] < rr[Yr[68]] && rr[Yr[1]][rr[Yr[67]]] === rr[Yr[1]][rr[Yr[67]] + Yr[2]];) rr[Yr[67]]++;
+               for (; rr[Yr[67]] < rr[Yr[68]] && rr[Yr[1]][rr[Yr[68]]] === rr[Yr[1]][rr[Yr[68]] - Yr[2]];) rr[Yr[68]]--;
+               Or(rr[Yr[67]]++, rr[Yr[68]]--)
+             }
+             return rr[Yr[19]]
+           }, console.log(rr[-Yr[38]]))
```

#### 4899. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40715` → after: `L40210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L40210) · [Before (L40715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40715)

```diff
-         nR(100) in CR && WR(), RR[UR[50]] = UR[2]
+         zr(Yr[65]) + "C" in Kr && nr(), rr[Yr[15]] = Yr[2]
```

#### 4900. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40717-L40718` → after: `L40212-L40213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40212-L40213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L40212-L40213) · [Before (L40717-L40718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40717-L40718)

```diff
-       const GR = RR[UR[50]] < UR[1] ? -RR[UR[8]] : RR[UR[8]],
-         yR = RR[UR[10]] !== UR[1] ? Math[UR[52]] / UR[10] : Math[UR[52]] / UR[0],
+       const Qr = rr[Yr[15]] < Yr[1] ? -rr[Yr[8]] : rr[Yr[8]],
+         Zr = rr[Yr[10]] !== Yr[1] ? Math[Yr[69]] / Yr[10] : Math[Yr[69]] / Yr[0],
```

#### 4901. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40720-L40727` → after: `L40215-L40222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40215-L40222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L40215-L40222) · [Before (L40720-L40727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40720-L40727)

```diff
-         ZR = uR[UR[16]][JR(116)](RR[UR[2]][JR(UR[53]) + JR(UR[54]) + JR(UR[55])], tR),
-         qR = RR[UR[11]] / UR[67],
-         iR = ZR * (UR[2] - Math[JR(117)](-lR * qR)),
-         KR = RR[UR[4]][JR(118) + "te"] * qR,
-         wR = uR[UR[16]][JR(UR[56])](iR, -KR, KR);
-       RR[UR[2]][JR(UR[53]) + JR(UR[54]) + JR(UR[55])] = (RR[UR[2]][JR(UR[53]) + JR(UR[54]) + JR(UR[55])] + wR) % (Math[UR[52]] * UR[0]);
-       const rR = uR[UR[16]][JR(UR[56])](Math[JR(UR[58])](ZR) / (Math[UR[52]] / UR[0]), UR[1], UR[2]);
-       RR[UR[50]] !== UR[1] ? pR(RR[UR[0]].heading = RR[UR[50]] > UR[1] ? RR[UR[2]][JR(UR[53]) + JR(UR[54]) + JR(UR[55])] : RR[UR[2]][JR(UR[53]) + JR(UR[54]) + JR(UR[55])] + Math[UR[52]], RR[UR[0]][UR[57]] = RR[UR[23]] * Math[JR(UR[58])](RR[UR[50]]) * (UR[2] - RR[UR[4]][JR(121) +  … [truncated]
+         jr = ar[Yr[19]][Sr(129)](rr[Yr[2]][Sr(Yr[70]) + Sr(Yr[71]) + Sr(Yr[53])], Wr),
+         Ir = rr[Yr[3]] / Yr[92],
+         fr = jr * (Yr[2] - Math[Sr(130)](-vr * Ir)),
+         xr = rr[Yr[14]][Sr(131) + "te"] * Ir,
+         mr = ar[Yr[19]][Sr(Yr[72])](fr, -xr, xr);
+       rr[Yr[2]][Sr(Yr[70]) + Sr(Yr[71]) + Sr(Yr[53])] = (rr[Yr[2]][Sr(Yr[70]) + Sr(Yr[71]) + Sr(Yr[53])] + mr) % (Math[Yr[69]] * Yr[0]);
+       const Nr = ar[Yr[19]][Sr(Yr[72])](Math[Sr(Yr[39])](jr) / (Math[Yr[69]] / Yr[0]), Yr[1], Yr[2]);
+       rr[Yr[15]] !== Yr[1] ? Or(rr[Yr[0]].heading = rr[Yr[15]] > Yr[1] ? rr[Yr[2]][Sr(Yr[70]) + Sr(Yr[71]) + Sr(Yr[53])] : rr[Yr[2]][Sr(Yr[70]) + Sr(Yr[71]) + Sr(Yr[53])] + Math[Yr[69]], rr[Yr[0]][Yr[73]] = rr[Yr[21]] * Math[Sr(Yr[39])](rr[Yr[15]]) * (Yr[2] - rr[Yr[14]][Sr(134) + … [truncated]
```

#### 4902. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40730-L40733` → after: `L40225-L40228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40225-L40228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L40225-L40228) · [Before (L40730-L40733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40730-L40733)

```diff
-         return RR[UR[13]] = UR[2], typeof fR[RR[UR[1]]] === UR[17] ? fR[RR[UR[1]]] = function(...RR) {
-           for (pR(RR[UR[13]] = UR[2], RR[UR[5]] = '?(#@"}u{:DfN,4nAv)eFOtLaM%sVhRi.[3W]Y2w5y<xUm6;r~l9!q&dTz$b^Go+/E=H7QgI8BJKX_kp>0c1C*jZPS|`', RR[UR[14]] = "" + (RR[UR[1]] || ""), RR[UR[15]] = RR[UR[14]].length, RR[UR[20]] = [], RR[UR[16]] = UR[1], RR[UR[23]] = UR[1], RR[UR[30] … [truncated]
-             if (RR[UR[6]] = RR[UR[5]].indexOf(RR[UR[14]][RR[UR[59]]]), RR[UR[6]] !== -UR[2])
-               if (RR[UR[30]] < UR[1]) RR[UR[30]] = RR[UR[6]];
+         return rr[Yr[12]] = Yr[2], typeof Er[rr[Yr[1]]] === Yr[17] ? Er[rr[Yr[1]]] = function(...rr) {
+           for (Or(rr[Yr[12]] = Yr[2], rr[-Yr[74]] = '1&}:~568"(3u*@v%7{,wxyHGZ+teUz|[Cq#k`d4Ba/h<X2TjAf]>LKJ^DsrI;_?.0=lSbM!iPcEoFgYRQOpNmV9$Wn)', rr[-Yr[75]] = "" + (rr[Yr[1]] || ""), rr[Yr[77]] = rr[-Yr[75]].length, rr[Yr[80]] = [], rr[Yr[78]] = Yr[1], rr[-Yr[79]] = Yr[1], rr[Y … [truncated]
+             if (rr[Yr[6]] = rr[-Yr[74]].indexOf(rr[-Yr[75]][rr[-Yr[76]]]), rr[Yr[6]] !== -Yr[2])
+               if (rr[Yr[29]] < Yr[1]) rr[Yr[29]] = rr[Yr[6]];
```

#### 4903. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40735` → after: `L40230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L40230) · [Before (L40735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40735)

```diff
-                 pR(RR[UR[30]] += RR[UR[6]] * UR[31], RR[UR[16]] |= RR[UR[30]] << RR[UR[23]], RR[UR[23]] += (RR[UR[30]] & UR[34]) > UR[35] ? UR[36] : UR[37]);
+                 Or(rr[Yr[29]] += rr[Yr[6]] * Yr[30], rr[Yr[78]] |= rr[Yr[29]] << rr[-Yr[79]], rr[-Yr[79]] += (rr[Yr[29]] & Yr[32]) > Yr[25] ? Yr[33] : Yr[34]);
```

#### 4904. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40737-L40740` → after: `L40232-L40235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40232-L40235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L40232-L40235) · [Before (L40737-L40740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40737-L40740)

```diff
-                   pR(RR[UR[20]].push(RR[UR[16]] & UR[12]), RR[UR[16]] >>= UR[11], RR[UR[23]] -= UR[11])
-                 } while (RR[UR[23]] > UR[7]);
-                 RR[UR[30]] = -UR[2]
-               } return RR[UR[30]] > -UR[2] && RR[UR[20]].push((RR[UR[16]] | RR[UR[30]] << RR[UR[23]]) & UR[12]), AR(RR[UR[20]])
+                   Or(rr[Yr[80]].push(rr[Yr[78]] & Yr[11]), rr[Yr[78]] >>= Yr[3], rr[-Yr[79]] -= Yr[3])
+                 } while (rr[-Yr[79]] > Yr[7]);
+                 rr[Yr[29]] = -Yr[2]
+               } return rr[Yr[29]] > -Yr[2] && rr[Yr[80]].push((rr[Yr[78]] | rr[Yr[29]] << rr[-Yr[79]]) & Yr[11]), er(rr[Yr[80]])
```

#### 4905. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40743-L40746` → after: `L40238-L40284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40238-L40284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L40238-L40284) · [Before (L40743-L40746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40743-L40746)

```diff
-       RR[UR[13]] = UR[0];
-       const GR = RR[UR[2]][WR(124) + JR(125) + JR(126)],
-         yR = RR[UR[1]].vJR;
-       return uR[UR[16]][JR(UR[60])](GR + uR[UR[16]][JR(UR[61])](GR, RR[UR[2]][JR(129) + JR(130) + JR(131)]) * yR, Math[UR[52]] * UR[0])
+       rr[Yr[12]] = Yr[0], Sr(137) + Yr[78] in Kr && (module.exports = async (rr = () => {
+         throw new Error(Sr(138))
+       }) => {
+         function Qr(...rr) {
+           for (Or(rr[Yr[12]] = Yr[2], rr[Yr[2]] = 'yAMSgRBi32CJGX<>0n^_6KUzf.!mr$e{N9Wut8h7EP+:,dvxFp|[1kwO#)Q;?/I"*Dq@}5]s&(%Y`~HcjL=aZ4lToVb', rr[Yr[19]] = "" + (rr[Yr[1]] || ""), rr[Yr[4]] = rr[Yr[19]].length, rr[Yr[10]] = [], rr[Yr[8]] = Yr[1], rr[-Yr[82]] = Yr[1], rr[Yr[7]]  … [truncated]
+             if (rr[Yr[81]] = rr[Yr[2]].indexOf(rr[Yr[19]][rr[Yr[3]]]), rr[Yr[81]] !== -Yr[2])
+               if (rr[Yr[7]] < Yr[1]) rr[Yr[7]] = rr[Yr[81]];
+               else {
+                 Or(rr[Yr[7]] += rr[Yr[81]] * Yr[30], rr[Yr[8]] |= rr[Yr[7]] << rr[-Yr[82]], rr[-Yr[82]] += (rr[Yr[7]] & Yr[32]) > Yr[25] ? Yr[33] : Yr[34]);
+                 do {
+                   Or(rr[Yr[10]].push(rr[Yr[8]] & Yr[11]), rr[Yr[8]] >>= Yr[3], rr[-Yr[82]] -= Yr[3])
+                 } while (rr[-Yr[82]] > Yr[7]);
+                 rr[Yr[7]] = -Yr[2]
+               } return rr[Yr[7]] > -Yr[2] && rr[Yr[10]].push((rr[Yr[8]] | rr[Yr[7]] << rr[-Yr[82]]) & Yr[11]), er(rr[Yr[10]])
+         }
+ 
+ ... (31 more added lines; see GitHub link above)
```

#### 4906. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40749-L40752` → after: `L40287-L40290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40287-L40290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L40287-L40290) · [Before (L40749-L40752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40749-L40752)

```diff
-         return RR[UR[13]] = UR[2], typeof fR[RR[UR[1]]] === UR[17] ? fR[RR[UR[1]]] = function(...RR) {
-           for (pR(RR[UR[13]] = UR[2], RR[-UR[62]] = '3#=8uBHvwt;{rA?/n4NY!l5,Eb"aT6pxD[y:%(ZIG~kzoU]+qJW<OPg|FLK0_$eCVh^.f1}m27XSsR`@9cQ&*jMd)>i', RR[UR[14]] = "" + (RR[UR[1]] || ""), RR[-UR[63]] = RR[UR[14]].length, RR[-UR[64]] = [], RR[-UR[40]] = UR[1], RR[UR[33]] = UR[1], RR[U … [truncated]
-             if (RR[UR[49]] = RR[-UR[62]].indexOf(RR[UR[14]][RR[UR[43]]]), RR[UR[49]] !== -UR[2])
-               if (RR[UR[30]] < UR[1]) RR[UR[30]] = RR[UR[49]];
+         return rr[Yr[12]] = Yr[2], typeof Er[rr[Yr[1]]] === Yr[17] ? Er[rr[Yr[1]]] = function(...rr) {
+           for (Or(rr[Yr[12]] = Yr[2], rr[Yr[2]] = 'M5Pq{0hg!@2%:~}pON;[EKQ&jS#dU(F.y</fVTLncWeJli4Br$|6ot9AaG)bR3HYmk,7CZIw1]`xDXu=_?^*v"+z8>s', rr[Yr[0]] = "" + (rr[Yr[1]] || ""), rr[Yr[14]] = rr[Yr[0]].length, rr[Yr[43]] = [], rr[Yr[88]] = Yr[1], rr[Yr[21]] = Yr[1], rr[Yr[87]]  … [truncated]
+             if (rr[Yr[86]] = rr[Yr[2]].indexOf(rr[Yr[0]][rr[Yr[37]]]), rr[Yr[86]] !== -Yr[2])
+               if (rr[Yr[87]] < Yr[1]) rr[Yr[87]] = rr[Yr[86]];
```

#### 4907. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40754` → after: `L40292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L40292) · [Before (L40754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40754)

```diff
-                 pR(RR[UR[30]] += RR[UR[49]] * UR[31], RR[-UR[40]] |= RR[UR[30]] << RR[UR[33]], RR[UR[33]] += (RR[UR[30]] & UR[34]) > UR[35] ? UR[36] : UR[37]);
+                 Or(rr[Yr[87]] += rr[Yr[86]] * Yr[30], rr[Yr[88]] |= rr[Yr[87]] << rr[Yr[21]], rr[Yr[21]] += (rr[Yr[87]] & Yr[32]) > Yr[25] ? Yr[33] : Yr[34]);
```

#### 4908. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40756-L40759` → after: `L40294-L40297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40294-L40297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L40294-L40297) · [Before (L40756-L40759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40756-L40759)

```diff
-                   pR(RR[-UR[64]].push(RR[-UR[40]] & UR[12]), RR[-UR[40]] >>= UR[11], RR[UR[33]] -= UR[11])
-                 } while (RR[UR[33]] > UR[7]);
-                 RR[UR[30]] = -UR[2]
-               } return RR[UR[30]] > -UR[2] && RR[-UR[64]].push((RR[-UR[40]] | RR[UR[30]] << RR[UR[33]]) & UR[12]), AR(RR[-UR[64]])
+                   Or(rr[Yr[43]].push(rr[Yr[88]] & Yr[11]), rr[Yr[88]] >>= Yr[3], rr[Yr[21]] -= Yr[3])
+                 } while (rr[Yr[21]] > Yr[7]);
+                 rr[Yr[87]] = -Yr[2]
+               } return rr[Yr[87]] > -Yr[2] && rr[Yr[43]].push((rr[Yr[88]] | rr[Yr[87]] << rr[Yr[21]]) & Yr[11]), er(rr[Yr[43]])
```

#### 4909. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40762-L40767` → after: `L40300-L40319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40300-L40319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L40300-L40319) · [Before (L40762-L40767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40762-L40767)

```diff
-       RR[UR[13]] = UR[10], pR(tR()[JR(UR[66])](XR, RR[UR[1]][UR[65]][UR[1]], UR[1], RR[UR[1]][UR[65]][UR[0]]), tR()[JR(UR[66])](MR, UR[1], UR[1], UR[2]), tR().ta(MR, MR, tR()[JR(133)], RR[UR[2]]));
-       const GR = tR()[JR(134)](XR, MR);
-       tR().pr(BR, XR, MR, -GR);
-       const yR = RR[UR[4]] / UR[67],
-         uR = UR[2] - Math[JR(135)](-RR[UR[0]] * yR);
-       pR(tR()[JR(136)](BR, BR, -uR * RR[UR[1]].yq / yR), RR[UR[1]][JR(137) + JR(UR[48])](BR))
+       rr[Yr[12]] = Yr[10], nr(151) in Kr && function(...rr) {
+         Or(rr[Yr[12]] = Yr[1], rr[Yr[15]] = function(...rr) {
+           for (Or(rr[Yr[12]] = Yr[2], rr[Yr[89]] = rr[Yr[1]].length, rr[Yr[19]] = [], rr[Yr[90]] = Yr[1], rr[Yr[10]] = Yr[1], rr[Yr[1]].sort(((rr, Sr) => rr - Sr))), rr[Yr[8]] = Yr[1]; rr[Yr[8]] < rr[Yr[89]]; rr[Yr[8]]++)
+             if (!(rr[Yr[8]] > Yr[1] && rr[Yr[1]][rr[Yr[8]]] === rr[Yr[1]][rr[Yr[8]] - Yr[2]]))
+               for (Or(rr[Yr[90]] = rr[Yr[8]] + Yr[2], rr[Yr[10]] = rr[Yr[89]] - Yr[2]); rr[Yr[90]] < rr[Yr[10]];)
+                 if (rr[Yr[1]][rr[Yr[8]]] + rr[Yr[1]][rr[Yr[90]]] + rr[Yr[1]][rr[Yr[10]]] < Yr[1]) rr[Yr[90]]++;
+                 else if (rr[Yr[1]][rr[Yr[8]]] + rr[Yr[1]][rr[Yr[90]]] + rr[Yr[1]][rr[Yr[10]]] > Yr[1]) rr[Yr[10]]--;
+           else {
+             for (rr[Yr[19]].push([rr[Yr[1]][rr[Yr[8]]], rr[Yr[1]][rr[Yr[90]]], rr[Yr[1]][rr[Yr[10]]]]); rr[Yr[90]] < rr[Yr[10]] && rr[Yr[1]][rr[Yr[90]]] === rr[Yr[1]][rr[Yr[90]] + Yr[2]];) rr[Yr[90]]++;
+             for (; rr[Yr[90]] < rr[Yr[10]] && rr[Yr[1]][rr[Yr[10]]] === rr[Yr[1]][rr[Yr[10]] - Yr[2]];) rr[Yr[10]]--;
+             Or(rr[Yr[90]]++, rr[Yr[10]]--)
+           }
+           return rr[Yr[19]]
+         }, console.log(rr[Yr[15]]))
+       }(), Or(Wr()[nr(152)](yr, rr[Yr[1]][Yr[91]][Yr[1]], Yr[1], rr[Yr[1]][Yr[91]][Yr[0]]), Wr()[Sr(153)](Br, Yr[1], Yr[1], Yr[2]), Wr().mh(Br, Br, Wr()[Sr(154)], rr[Yr[2]]));
+       const Qr = Wr()[Sr(155)](yr, Br);
+ ... (4 more added lines; see GitHub link above)
```

#### 4910. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40770` → after: `L40322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L40322) · [Before (L40770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40770)

```diff
-   39550: (RR, JR, GR) => {
+   39876: (rr, Sr, Qr) => {
```

#### 4911. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40773` → after: `L40325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L40325) · [Before (L40773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40773)

```diff
-       i: () => VR
+       h: () => pr
```

#### 4912. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40789` → after: `L40341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L40341) · [Before (L40789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40789)

```diff
-           const qR = Array.isArray(ZR) ? ZR : uR;
+           const Ir = Array.isArray(jr) ? jr : ar;
```

#### 4913. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40807` → after: `L40359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L40359) · [Before (L40807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40807)

```diff
-       return RR.AY && RR.yq > 0 && RR.depenetrate && null === RR.lY
+       return rr.tV && rr.sj > 0 && rr.depenetrate && null === rr.hV
```

#### 4914. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40830` → after: `L40382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L40382) · [Before (L40830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40830)

```diff
-   38800: (RR, JR, GR) => {
+   39135: (rr, Sr, Qr) => {
```

#### 4915. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40833` → after: `L40385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L40385) · [Before (L40833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40833)

```diff
-       f: () => uR
+       e: () => ar
```

#### 4916. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40845` → after: `L40397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L40397) · [Before (L40845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40845)

```diff
-         return null !== (JR = tR[this.suffixMapping[RR]]) && void 0 !== JR ? JR : []
+         return null !== (Sr = Wr[this.suffixMapping[rr]]) && void 0 !== Sr ? Sr : []
```

#### 4917. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40864` → after: `L40416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L40416) · [Before (L40864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40864)

```diff
-           JR[GR] = (null !== (fR = JR[GR]) && void 0 !== fR ? fR : 0) + 1, JR[GR] >= qR && tR.splice(tR.indexOf(GR), 1)
+           Sr[Qr] = (null !== (Er = Sr[Qr]) && void 0 !== Er ? Er : 0) + 1, Sr[Qr] >= Ir && Wr.splice(Wr.indexOf(Qr), 1)
```

#### 4918. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40903-L40904` → after: `L40455-L40456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40455-L40456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L40455-L40456) · [Before (L40903-L40904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40903-L40904)

```diff
-   35113: () => {},
-   38301: (RR, JR, GR) => {
+   35432: () => {},
+   38667: (rr, Sr, Qr) => {
```

#### 4919. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L40906-L41369` → after: `L40458-L40921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40458-L40921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L40458-L40921) · [Before (L40906-L41369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L40906-L41369)

```diff
-       "./67/67_Atlas.png": 28023,
-       "./67/67_Model.glb": 34174,
-       "./67/67_Reconstructed.glb": 34183,
-       "./67/variations/0_67_default.png": 28028,
-       "./Armour Collector/Armour Collector_Atlas.png": 28037,
-       "./Armour Collector/Armour Collector_Model.glb": 34191,
-       "./Armour Collector/Armour Collector_Reconstructed.glb": 34199,
-       "./Armour Collector/variations/0_armour collector_default.png": 28040,
-       "./Bear/BearSaddle_Atlas.png": 28048,
-       "./Bear/Bear_Atlas.png": 28055,
-       "./Bear/Bear_Model.glb": 34205,
-       "./Bear/variations/0_bear_default.png": 28060,
-       "./Bobino Musculino/Bobino Musculino_Atlas.png": 28067,
-       "./Bobino Musculino/Bobino Musculino_Model.glb": 34211,
-       "./Bobino Musculino/Bobino Musculino_Reconstructed.glb": 34218,
-       "./Bobino Musculino/variations/0_bobino musculino_default.png": 28069,
- ... (448 more removed lines; see GitHub link above)
+       "./67/67_Atlas.png": 28179,
+       "./67/67_Model.glb": 34392,
+       "./67/67_Reconstructed.glb": 34399,
+       "./67/variations/0_67_default.png": 28187,
+       "./Armour Collector/Armour Collector_Atlas.png": 28196,
+       "./Armour Collector/Armour Collector_Model.glb": 34406,
+       "./Armour Collector/Armour Collector_Reconstructed.glb": 34414,
+       "./Armour Collector/variations/0_armour collector_default.png": 28202,
+       "./Bear/BearSaddle_Atlas.png": 28211,
+       "./Bear/Bear_Atlas.png": 28219,
+       "./Bear/Bear_Model.glb": 34420,
+       "./Bear/variations/0_bear_default.png": 28224,
+       "./Bobino Musculino/Bobino Musculino_Atlas.png": 28230,
+       "./Bobino Musculino/Bobino Musculino_Model.glb": 34424,
+       "./Bobino Musculino/Bobino Musculino_Reconstructed.glb": 34426,
+       "./Bobino Musculino/variations/0_bobino musculino_default.png": 28238,
+ ... (448 more added lines; see GitHub link above)
```

#### 4920. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L41386` → after: `L40938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L40938) · [Before (L41386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L41386)

```diff
-     }, tR.resolve = uR, RR.exports = tR, tR.id = 38301
+     }, Wr.resolve = ar, rr.exports = Wr, Wr.id = 38667
```

#### 4921. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L41388` → after: `L40940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L40940) · [Before (L41388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L41388)

```diff
-   39225: RR => {
+   39571: rr => {
```

#### 4922. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L41391` → after: `L40943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L40943) · [Before (L41391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L41391)

```diff
-   39140: RR => {
+   39479: rr => {
```

#### 4923. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L41394` → after: `L40946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L40946) · [Before (L41394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L41394)

```diff
-   39129: RR => {
+   39470: rr => {
```

#### 4924. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L41397` → after: `L40949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L40949) · [Before (L41397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L41397)

```diff
-   39145: RR => {
+   39483: rr => {
```

#### 4925. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L41400` → after: `L40952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L40952) · [Before (L41400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L41400)

```diff
-   39127: RR => {
+   39465: rr => {
```

#### 4926. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L41403` → after: `L40955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L40955) · [Before (L41403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L41403)

```diff
-   39133: RR => {
+   39477: rr => {
```

#### 4927. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L41406` → after: `L40958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L40958) · [Before (L41406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L41406)

```diff
-   39125: (RR, JR, GR) => {
+   39460: (rr, Sr, Qr) => {
```

#### 4928. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L41412` → after: `L40964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L40964) · [Before (L41412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L41412)

```diff
-       o: () => ZR
+       m: () => jr
```

#### 4929. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L41424` → after: `L40976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L40976) · [Before (L41424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L41424)

```diff
-         Qq: 512,
+         wI: 512,
```

#### 4930. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L41442` → after: `L40994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/90.js#L40994) · [Before (L41442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/90.js#L41442)

```diff
-         ["held", yR.Qq],
+         ["held", Zr.wI],
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/91.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/91.js` (20 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619)

#### 1. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/91.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/91.js#L4)

```diff
-   5554: (RR, JR, GR) => {
+   5498: (rr, Sr, Qr) => {
```

#### 2. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/91.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/91.js#L6)

```diff
-       d: () => zJ,
+       e: () => VS,
```

#### 3. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L8-L12` → after: `L8-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/91.js#L8-L12) · [Before (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/91.js#L8-L12)

```diff
-       l: () => TJ,
-       p: () => JG,
-       r: () => kJ,
-       u: () => sJ,
-       y: () => cJ,
+       k: () => dS,
+       o: () => SQ,
+       s: () => bS,
+       w: () => sS,
+       z: () => MS,
```

#### 4. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L17-L18` → after: `L16-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L16-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/91.js#L16-L18) · [Before (L17-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/91.js#L17-L18)

```diff
-       J: () => EJ,
-       K: () => oJ
+       H: () => EQ,
+       L: () => FS,
+       N: () => CS
```

#### 5. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L20` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/91.js#L20) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/91.js#L20)

```diff
-     var yR = GR(2448);
+     var Zr = Qr(2396);
```

#### 6. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L59` → after: `L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/91.js#L59) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/91.js#L59)

```diff
-       return RR === `function ${JR}() { [native code] }` || RR === `function ${JR}() {\n    [native code]\n}`
+       return rr === `function ${Sr}() { [native code] }` || rr === `function ${Sr}() {\n    [native code]\n}`
```

#### 7. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L113` → after: `L113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/91.js#L113) · [Before (L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/91.js#L113)

```diff
-       NR = RR >= 3 ? xR : ZR, OR = RR % 3
+       qr = rr >= 3 ? Hr : jr, Pr = rr % 3
```

#### 8. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L136-L137` → after: `L136-L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L136-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/91.js#L136-L137) · [Before (L136-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/91.js#L136-L137)

```diff
-         yR = GR.length > FR ? FR : GR.length,
-         tR = `#${function(RR,JR){const GR=NR(mR,YR,[JR]);if(null===GR)return"s";const yR=GR[1];if("ProxyObject"===yR)return"p";if(""!==yR)return NR(SR,yR,["bound "])?"b":"n";try{const JR=PR(RR,"name"),GR=void 0!==JR&&NR(IR,JR,["value"])?JR.value:void 0;return"string"===typeof GR& … [truncated]
+         Zr = Qr.length > Dr ? Dr : Qr.length,
+         Wr = `#${function(rr,Sr){const Qr=qr(Ar,or,[Sr]);if(null===Qr)return"s";const Zr=Qr[1];if("ProxyObject"===Zr)return"p";if(""!==Zr)return qr(ir,Zr,["bound "])?"b":"n";try{const Sr=Gr(rr,"name"),Qr=void 0!==Sr&&qr(kr,Sr,["value"])?Sr.value:void 0;return"string"===typeof Qr& … [truncated]
```

#### 9. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L143-L145` → after: `L143-L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L143-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/91.js#L143-L145) · [Before (L143-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/91.js#L143-L145)

```diff
-       return null === JR ? RR : JR[1]
-     }
-     var JJ = GR(2470);
+       return null === Sr ? rr : Sr[1]
+     }
+     var SS = Qr(2410);
```

#### 10. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L163` → after: `L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/91.js#L163) · [Before (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/91.js#L163)

```diff
-         native: new RegExp(`^function (get )?${GR}\\(\\) \\{\\s*\\[native code\\]\\s*\\}$`)
+         native: new RegExp(`^function (get )?${Qr}\\(\\) \\{\\s*\\[native code\\]\\s*\\}$`)
```

#### 11. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L279` → after: `L279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/91.js#L279) · [Before (L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/91.js#L279)

```diff
-         return RG(GR, RR) ? OJ(RR, !0) : `${OJ(RR,!1)}${hR(GR??JR)}`
+         return rQ(Qr, rr) ? PS(rr, !0) : `${PS(rr,!1)}${ur(Qr??Sr)}`
```

#### 12. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L281` → after: `L281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/91.js#L281) · [Before (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/91.js#L281)

```diff
-         return `${OJ(RR,!1)}${hR(void 0)}`
+         return `${PS(rr,!1)}${ur(void 0)}`
```

#### 13. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L290` → after: `L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/91.js#L290) · [Before (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/91.js#L290)

```diff
-       return `wh:${GR}${JR?"-dbg":""}:${yR}`
+       return `wh:${Qr}${Sr?"-dbg":""}:${Zr}`
```

#### 14. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L318` → after: `L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/91.js#L318) · [Before (L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/91.js#L318)

```diff
-       return new Set(AJ.filter((JR => JR.tier === RR)).map((RR => `wh:${RR.code}`)))
+       return new Set(eS.filter((Sr => Sr.tier === rr)).map((rr => `wh:${rr.code}`)))
```

#### 15. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L322` → after: `L322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/91.js#L322) · [Before (L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/91.js#L322)

```diff
-       SJ = new Set(JJ.d),
+       iS = new Set(SS.b),
```

#### 16. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L441` → after: `L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/91.js#L441) · [Before (L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/91.js#L441)

```diff
-       const JR = `wh:${RR.code}`;
+       const Sr = `wh:${rr.code}`;
```

#### 17. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L444` → after: `L444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/91.js#L444) · [Before (L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/91.js#L444)

```diff
-         return `${JR}${hR(qG(RR))}`
+         return `${Sr}${ur(IQ(rr))}`
```

#### 18. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L446` → after: `L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/91.js#L446) · [Before (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/91.js#L446)

```diff
-         return `${JR}${hR(void 0)}`
+         return `${Sr}${ur(void 0)}`
```

#### 19. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L481` → after: `L481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/91.js#L481) · [Before (L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/91.js#L481)

```diff
-             JR((0, JJ.o)());
+             Sr((0, SS.j)());
```

#### 20. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L503-L504` → after: `L503-L504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L503-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/91.js#L503-L504) · [Before (L503-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/91.js#L503-L504)

```diff
-       const RR = (0, yR.i)();
-       return null === RR ? null : `wn:${RR}`
+       const rr = (0, Zr.l)();
+       return null === rr ? null : `wn:${rr}`
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/92.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/92.js` (1188 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca)

#### 1. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/92.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/92.js#L2)

```diff
- export const ids = [92, 220];
+ export const ids = [92, 220, 221];
```

#### 2. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/92.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/92.js#L4)

```diff
-   35024: (RR, JR, GR) => {
+   35326: (rr, Sr, Qr) => {
```

#### 3. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8-L9` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/92.js#L8-L9) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/92.js#L8-L9)

```diff
-     var yR = GR(66),
-       tR = GR(1163),
+     var Zr = Qr(72),
+       Wr = Qr(1155),
```

#### 4. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11-L16` → after: `L11-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/92.js#L11-L16) · [Before (L11-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/92.js#L11-L16)

```diff
-       ZR = GR(1270),
-       qR = GR(1468),
-       iR = GR(2278),
-       fR = GR(1590),
-       VR = GR(1179),
-       KR = GR(1378);
+       jr = Qr(1251),
+       Ir = Qr(1448),
+       fr = Qr(2228),
+       Er = Qr(1576),
+       pr = Qr(1171),
+       xr = Qr(1338);
```

#### 5. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L29` → after: `L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/92.js#L29) · [Before (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/92.js#L29)

```diff
-       } = (0, ZR.A)(), aR = (0, VR.h)(), LR = [];
+       } = (0, jr.E)(), tr = (0, pr.j)(), hr = [];
```

#### 6. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L34` → after: `L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/92.js#L34) · [Before (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/92.js#L34)

```diff
-         if (RR && RR.title === (null !== (nR = uR.section) && void 0 !== nR ? nR : null)) RR.items.push(uR);
+         if (rr && rr.title === (null !== (zr = ar.section) && void 0 !== zr ? zr : null)) rr.items.push(ar);
```

#### 7. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L36` → after: `L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/92.js#L36) · [Before (L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/92.js#L36)

```diff
-           title: null !== (UR = uR.section) && void 0 !== UR ? UR : null,
+           title: null !== (Yr = ar.section) && void 0 !== Yr ? Yr : null,
```

#### 8. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L65` → after: `L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/92.js#L65) · [Before (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/92.js#L65)

```diff
-                   children: null !== (JR = RR.iconElement) && void 0 !== JR ? JR : (0, KR.jsx)(qR.d, {
+                   children: null !== (Sr = rr.iconElement) && void 0 !== Sr ? Sr : (0, xr.jsx)(Ir.c, {
```

#### 9. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L70` → after: `L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/92.js#L70) · [Before (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/92.js#L70)

```diff
-                 }), RR.redDot && (0, KR.jsx)(iR.c, {
+                 }), rr.redDot && (0, xr.jsx)(fr.d, {
```

#### 10. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L76` → after: `L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/92.js#L76) · [Before (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/92.js#L76)

```diff
-           }, null !== (GR = RR.title) && void 0 !== GR ? GR : JR)
+           }, null !== (Qr = rr.title) && void 0 !== Qr ? Qr : Sr)
```

#### 11. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L78` → after: `L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/92.js#L78) · [Before (L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/92.js#L78)

```diff
-           ...(0, fR.bb)(),
+           ...(0, Er._)(),
```

#### 12. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L84` → after: `L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/92.js#L84) · [Before (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/92.js#L84)

```diff
-             children: (0, KR.jsx)(qR.d, {
+             children: (0, xr.jsx)(Ir.c, {
```

#### 13. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L89` → after: `L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/92.js#L89) · [Before (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/92.js#L89)

```diff
-           }), (0, KR.jsx)(qR.d, {
+           }), (0, xr.jsx)(Ir.c, {
```

#### 14. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L96-L108` → after: `L96-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L96-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/92.js#L96-L108) · [Before (L96-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/92.js#L96-L108)

```diff
-     var rR = GR(3037),
-       eR = GR(1196),
-       aR = GR(3465),
-       LR = GR(4352),
-       nR = GR(103),
-       UR = GR(2134),
-       WR = GR(3204),
-       AR = GR(3210),
-       CR = GR(1867),
-       XR = GR(1465),
-       MR = GR(6037),
-       BR = GR(25),
-       lR = GR(35029);
+     var Nr = Qr(3002),
+       Ur = Qr(1181),
+       tr = Qr(3404),
+       hr = Qr(4302),
+       zr = Qr(109),
+       Yr = Qr(2089),
+       nr = Qr(3174),
+       er = Qr(3182),
+       Kr = Qr(1804),
+       yr = Qr(1444),
+       Br = Qr(5951),
+       Tr = Qr(26),
+       vr = Qr(35335);
```

#### 15. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L116` → after: `L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/92.js#L116) · [Before (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/92.js#L116)

```diff
-       } = (0, BR.o)(["clientEscMenuOptions"]), [tR, uR] = (0, yR.useState)(!1), [ZR, qR] = (0, yR.useState)(!1), [iR, VR] = (0, yR.useState)(6400), [wR, rR] = (0, yR.useState)(3600), [eR, aR] = (0, yR.useState)(!1), [LR, nR] = (0, yR.useState)(!1);
+       } = (0, Tr.n)(["clientEscMenuOptions"]), [Wr, ar] = (0, Zr.useState)(!1), [jr, Ir] = (0, Zr.useState)(!1), [fr, pr] = (0, Zr.useState)(6400), [mr, Nr] = (0, Zr.useState)(3600), [Ur, tr] = (0, Zr.useState)(!1), [hr, zr] = (0, Zr.useState)(!1);
```

#### 16. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L119` → after: `L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/92.js#L119) · [Before (L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/92.js#L119)

```diff
-         const JR = "screenshot" === RR ? qR : uR;
+         const Sr = "screenshot" === rr ? Ir : ar;
```

#### 17. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L134` → after: `L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/92.js#L134) · [Before (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/92.js#L134)

```diff
-         children: [(0, KR.jsx)(MR.e, {
+         children: [(0, xr.jsx)(Br.c, {
```

#### 18. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L138` → after: `L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/92.js#L138) · [Before (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/92.js#L138)

```diff
-             BR.d.setClientEscMenuOptions({
+             Tr.c.setClientEscMenuOptions({
```

#### 19. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L140` → after: `L140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/92.js#L140) · [Before (L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/92.js#L140)

```diff
-             }), JR((() => MR.m))
+             }), Sr((() => Br.i))
```

#### 20. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L143` → after: `L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/92.js#L143) · [Before (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/92.js#L143)

```diff
-         }), lR.devTools.supports("ambientLight") && (0, KR.jsx)(MR.i, {
+         }), vr.devTools.supports("ambientLight") && (0, xr.jsx)(Br.f, {
```

#### 21. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L151` → after: `L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/92.js#L151) · [Before (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/92.js#L151)

```diff
-               BR.d.setClientEscMenuOptions({
+               Tr.c.setClientEscMenuOptions({
```

#### 22. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L159` → after: `L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/92.js#L159) · [Before (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/92.js#L159)

```diff
-         }), lR.devTools.supports("weaponRaycasts") && (0, KR.jsx)(MR.e, {
+         }), vr.devTools.supports("weaponRaycasts") && (0, xr.jsx)(Br.c, {
```

#### 23. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L163` → after: `L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/92.js#L163) · [Before (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/92.js#L163)

```diff
-             BR.d.setClientEscMenuOptions({
+             Tr.c.setClientEscMenuOptions({
```

#### 24. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L172` → after: `L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/92.js#L172) · [Before (L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/92.js#L172)

```diff
-             children: [(0, KR.jsx)(MR.e, {
+             children: [(0, xr.jsx)(Br.c, {
```

#### 25. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L179` → after: `L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/92.js#L179) · [Before (L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/92.js#L179)

```diff
-             }), (0, KR.jsx)(MR.e, {
+             }), (0, xr.jsx)(Br.c, {
```

#### 26. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L214` → after: `L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/92.js#L214) · [Before (L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/92.js#L214)

```diff
-               children: [(0, KR.jsxs)(fR.g, {
+               children: [(0, xr.jsxs)(Er.h, {
```

#### 27. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L219-L220` → after: `L219-L220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L219-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/92.js#L219-L220) · [Before (L219-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/92.js#L219-L220)

```diff
-                 children: [ZR && (0, KR.jsx)(XR.d, {}), "Download Screenshot"]
-               }), (0, KR.jsxs)(fR.g, {
+                 children: [jr && (0, xr.jsx)(yr.c, {}), "Download Screenshot"]
+               }), (0, xr.jsxs)(Er.h, {
```

#### 28. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L225` → after: `L225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/92.js#L225) · [Before (L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/92.js#L225)

```diff
-                 children: [tR && (0, KR.jsx)(XR.d, {}), "Download GLB"]
+                 children: [Wr && (0, xr.jsx)(yr.c, {}), "Download GLB"]
```

#### 29. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L235-L247` → after: `L235-L247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L235-L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/92.js#L235-L247) · [Before (L235-L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/92.js#L235-L247)

```diff
-     var gR = GR(134),
-       bR = GR(1201),
-       vR = GR(35035),
-       OR = GR(4155),
-       xR = GR(1663),
-       NR = GR(1359),
-       DR = GR(1328),
-       HR = GR(2248),
-       oR = GR(1647),
-       cR = GR(377),
-       PR = GR(645),
-       IR = GR(3314),
-       mR = GR(3322);
+     var Lr = Qr(139),
+       lr = Qr(1187),
+       Xr = Qr(35341),
+       Pr = Qr(4105),
+       Hr = Qr(1644),
+       qr = Qr(1321),
+       Rr = Qr(1283),
+       gr = Qr(2188),
+       Cr = Qr(1629),
+       Mr = Qr(379),
+       Gr = Qr(661),
+       kr = Qr(3267),
+       Ar = Qr(3276);
```

#### 30. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L258` → after: `L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/92.js#L258) · [Before (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/92.js#L258)

```diff
-       } = (0, ZR.A)(), uR = new Date(JR).toLocaleDateString((0, ZR.n)(tR.code, zR), {
+       } = (0, jr.E)(), ar = new Date(Sr).toLocaleDateString((0, jr.m)(Wr.code, Vr), {
```

#### 31. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L270-L276` → after: `L270-L276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L270-L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/92.js#L270-L276) · [Before (L270-L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/92.js#L270-L276)

```diff
-     var jR = GR(3217),
-       dR = GR(4186),
-       ER = GR(4180),
-       YR = GR(216),
-       kR = GR(1803),
-       QR = GR(1343),
-       FR = GR(4198);
+     var wr = Qr(3192),
+       cr = Qr(4142),
+       Fr = Qr(4140),
+       or = Qr(215),
+       br = Qr(1761),
+       Jr = Qr(1304),
+       Dr = Qr(4159);
```

#### 32. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L279` → after: `L279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/92.js#L279) · [Before (L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/92.js#L279)

```diff
-       const yR = PR.r[(0, PR.l)(PR.r, JR)],
+       const Zr = Gr.r[(0, Gr.n)(Gr.r, Sr)],
```

#### 33. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L289-L290` → after: `L289-L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L289-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/92.js#L289-L290) · [Before (L289-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/92.js#L289-L290)

```diff
-     var sR = GR(4171),
-       hR = GR(4175);
+     var sr = Qr(4131),
+       ur = Qr(4135);
```

#### 34. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L298` → after: `L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/92.js#L298) · [Before (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/92.js#L298)

```diff
-       return RR instanceof dR.d && "storeUnavailable" === RR.code ? (console.warn("Billing: the store didn't take a subscription change:", RR), "store:subscriptionStoreUnavailable") : RR instanceof dR.d && "subscriptionActionUnavailable" === RR.code ? (console.warn("Billing: a su … [truncated]
+       return rr instanceof cr.b && "storeUnavailable" === rr.code ? (console.warn("Billing: the store didn't take a subscription change:", rr), "store:subscriptionStoreUnavailable") : rr instanceof cr.b && "subscriptionActionUnavailable" === rr.code ? (console.warn("Billing: a su … [truncated]
```

#### 35. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L305-L306` → after: `L305-L306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L305-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/92.js#L305-L306) · [Before (L305-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/92.js#L305-L306)

```diff
-         } = await (0, hR.getBillingClient)().getOfferings((0, IR.l)(PR.h.id).placementId);
-         return null !== (RR = null === JR || void 0 === JR ? void 0 : JR.packages.find(sR.isPricedPackage)) && void 0 !== RR ? RR : null
+         } = await (0, ur.getBillingClient)().getOfferings((0, kr.l)(Gr.g.id).placementId);
+         return null !== (rr = null === Sr || void 0 === Sr ? void 0 : Sr.packages.find(sr.isPricedPackage)) && void 0 !== rr ? rr : null
```

#### 36. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L315` → after: `L315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/92.js#L315) · [Before (L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/92.js#L315)

```diff
-       } = (0, eR.d)(), {
+       } = (0, Ur.c)(), {
```

#### 37. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L317` → after: `L317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/92.js#L317) · [Before (L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/92.js#L317)

```diff
-       } = JR, tR = (0, jR.usePurchasesAllowed)(), uR = (0, cR.wc)(GR), ZR = RR && tR && (uR || JR.ranksMayChange), [qR, iR] = (0, yR.useState)(null), [fR, VR] = (0, yR.useState)(!1), [KR, wR] = (0, yR.useState)(!1), [rR, aR] = (0, yR.useState)(null);
+       } = Sr, Wr = (0, wr.usePurchasesAllowed)(), ar = (0, Mr.uc)(Qr), jr = rr && Wr && (ar || Sr.ranksMayChange), [Ir, fr] = (0, Zr.useState)(null), [Er, pr] = (0, Zr.useState)(!1), [xr, mr] = (0, Zr.useState)(!1), [Nr, tr] = (0, Zr.useState)(null);
```

#### 38. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L344` → after: `L344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/92.js#L344) · [Before (L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/92.js#L344)

```diff
-         } = RR, qR = PR.r[(0, PR.l)(PR.r, JR)], iR = void 0 === qR ? void 0 : (0, YR.b)(uR.entitlements, qR.entitlementId), fR = TR(uR, JR, yR);
+         } = rr, Ir = Gr.r[(0, Gr.n)(Gr.r, Sr)], fr = void 0 === Ir ? void 0 : (0, or.b)(ar.entitlements, Ir.entitlementId), Er = dr(ar, Sr, Zr);
```

#### 39. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L356` → after: `L356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/92.js#L356) · [Before (L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/92.js#L356)

```diff
-           actions: null !== (tR = (0, YR.b)(ZR, KR)) && void 0 !== tR ? tR : RJ,
+           actions: null !== (Wr = (0, or.b)(jr, xr)) && void 0 !== Wr ? Wr : rS,
```

#### 40. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L358` → after: `L358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/92.js#L358) · [Before (L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/92.js#L358)

```diff
-           pkg: rR ? GR : null
+           pkg: Nr ? Qr : null
```

#### 41. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L388` → after: `L388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/92.js#L388) · [Before (L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/92.js#L388)

```diff
-             const JR = await (0, hR.getBillingClient)().subscriptionManagementUrl(LR.key, QR.g.get().getCurrentLanguageCode());
+             const Sr = await (0, ur.getBillingClient)().subscriptionManagementUrl(hr.key, Jr.f.get().getCurrentLanguageCode());
```

#### 42. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L398-L399` → after: `L398-L399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L398-L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/92.js#L398-L399) · [Before (L398-L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/92.js#L398-L399)

```diff
-     var tJ = GR(1493),
-       uJ = GR(4227);
+     var WS = Qr(1475),
+       aS = Qr(4187);
```

#### 43. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L417` → after: `L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/92.js#L417) · [Before (L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/92.js#L417)

```diff
-       } = (0, ZR.A)(), {
+       } = (0, jr.E)(), {
```

#### 44. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L435` → after: `L435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/92.js#L435) · [Before (L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/92.js#L435)

```diff
-       } = iR, AR = LR.renews ? "store:renewsOn" : "store:endsOn", CR = ZJ(LR.at, (0, ZR.n)(tR.code, AR)), XR = yR((0, IR.l)(iR.tierId).nameKey), MR = null !== nR.billingIssueDetectedAt;
+       } = fr, er = hr.renews ? "store:renewsOn" : "store:endsOn", Kr = jS(hr.at, (0, jr.m)(Wr.code, er)), yr = Zr((0, kr.l)(fr.tierId).nameKey), Br = null !== zr.billingIssueDetectedAt;
```

#### 45. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L444` → after: `L444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/92.js#L444) · [Before (L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/92.js#L444)

```diff
-               price: (0, uJ.d)(WR)
+               price: (0, aS.e)(nr)
```

#### 46. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L449` → after: `L449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/92.js#L449) · [Before (L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/92.js#L449)

```diff
-           children: [(0, KR.jsx)(qR.d, {
+           children: [(0, xr.jsx)(Ir.c, {
```

#### 47. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L456` → after: `L456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/92.js#L456) · [Before (L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/92.js#L456)

```diff
-           children: [UR.manage && (0, KR.jsx)(fR.i, {
+           children: [Yr.manage && (0, xr.jsx)(Er.k, {
```

#### 48. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L462` → after: `L462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/92.js#L462) · [Before (L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/92.js#L462)

```diff
-           }), UR.resume && (0, KR.jsx)(fR.g, {
+           }), Yr.resume && (0, xr.jsx)(Er.h, {
```

#### 49. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L468` → after: `L468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/92.js#L468) · [Before (L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/92.js#L468)

```diff
-           }), UR.cancel && (0, KR.jsx)(fR.M, {
+           }), Yr.cancel && (0, xr.jsx)(Er.L, {
```

#### 50. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L492` → after: `L492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/92.js#L492) · [Before (L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/92.js#L492)

```diff
-               })(iR, XR, ZJ(nR.currentPeriodEnd, (0, ZR.n)(tR.code, "store:cancelKeepsUntil"))).then((RR => {
+               })(fr, yr, jS(zr.currentPeriodEnd, (0, jr.m)(Wr.code, "store:cancelKeepsUntil"))).then((rr => {
```

#### 51. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L504-L506` → after: `L504-L506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L504-L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/92.js#L504-L506) · [Before (L504-L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/92.js#L504-L506)

```diff
-     var iJ = GR(3213),
-       fJ = GR(3810),
-       VJ = GR(1825);
+     var fS = Qr(3184),
+       ES = Qr(3757),
+       pS = Qr(1783);
```

#### 52. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L517` → after: `L517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/92.js#L517) · [Before (L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/92.js#L517)

```diff
-             of Object.values(RR.subscriptions)) !(0, ER.i)(GR) || (0, ER.m)(yR) || "willNotRenew" === tR || JR.has(GR) || JR.set(GR, null !== uR && void 0 !== uR ? uR : ER.o[GR]);
+             of Object.values(rr.subscriptions)) !(0, Fr.j)(Qr) || (0, Fr.m)(Zr) || "willNotRenew" === Wr || Sr.has(Qr) || Sr.set(Qr, null !== ar && void 0 !== ar ? ar : Fr.p[Qr]);
```

#### 53. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L525` → after: `L525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/92.js#L525) · [Before (L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/92.js#L525)

```diff
-         }(await (0, VJ.k)((0, hR.getBillingClient)().getCustomerInfo(), 5e3, "CustomerInfo got no answer in 5 s"))
+         }(await (0, pS.h)((0, ur.getBillingClient)().getCustomerInfo(), 5e3, "CustomerInfo got no answer in 5 s"))
```

#### 54. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L535` → after: `L535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/92.js#L535) · [Before (L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/92.js#L535)

```diff
-       } = (0, ZR.A)(), {
+       } = (0, jr.E)(), {
```

#### 55. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L537` → after: `L537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/92.js#L537) · [Before (L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/92.js#L537)

```diff
-       } = (0, eR.d)(), {
+       } = (0, Ur.c)(), {
```

#### 56. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L539` → after: `L539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/92.js#L539) · [Before (L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/92.js#L539)

```diff
-       } = tR, qR = (0, jR.usePurchasesAllowed)(), iR = RR && ((0, cR.wc)(uR) || tR.ranksMayChange) && qR, {
+       } = Wr, Ir = (0, wr.usePurchasesAllowed)(), fr = rr && ((0, Mr.uc)(ar) || Wr.ranksMayChange) && Ir, {
```
