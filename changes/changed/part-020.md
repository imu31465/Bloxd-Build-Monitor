# Changed — Bundle Modifications Report (Part 020 / 050)

- **Updated at**: `2026-11-24T00:42 JST`
- **Part**: `20 / 50` (**297** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 019](part-019.md) · [Part 021 →](part-021.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/87.js` (bbb6l5.0244a119 → w4ddu.56408518 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/87.js` (116 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3)

#### 60. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L1505-L1533` → after: `L315-L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L315-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L315-L318) · [Before (L1505-L1533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L1505-L1533)

```diff
-       const gq = {
-         lastReason: qq,
-         wasmBuild: Eq.wasm,
-         clientVersion: Eq.client
-       };
-       return HE({
-         kind: "recovered",
-         code: "CORE-worldgenGaveUp",
-         site: jq.G,
-         fatal: !1,
-         message: "no world-gen worker generated: chunks come whole",
-         details: gq
-       })
-     }
- 
-     function Ag(qq, Eq, gq) {
- ... (13 more removed lines; see GitHub link above)
+       if ("paced" === CC) return gC += zC, null;
+       if ("drawn" !== CC && "skipped" !== CC) return null;
+       const ZC = zC + gC;
+       return gC = 0, ZC
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L1537-L1590` → after: `L322-L328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L322-L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L322-L328) · [Before (L1537-L1590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L1537-L1590)

```diff
-       var lq, Oq;
-       const mq = (0, Aq.j)(),
-         xq = {
-           game: qq,
-           cause: Eq,
-           census: null === gq ? "none" : JSON.stringify(gq),
-           gpu: null !== (lq = null === (Oq = (0, Nq.t)()) || void 0 === Oq ? void 0 : Oq.renderer) && void 0 !== lq ? lq : "",
-           renderWarned: String(mq),
-           browser: (0, Aq.h)(),
-           wasmBuild: Yq.wasm,
-           clientVersion: Yq.client
-         },
-         cq = `first view drew no whole terrain in ${vq.d/1e3} s, ${Eq}${mq?", render warned":""}`;
-       return HE({
-         kind: "noTerrain",
-         code: "CORE-firstViewNoTerrain",
- ... (38 more removed lines; see GitHub link above)
+       const bC = (0, QC.i)(zC),
+         nC = CC > 0 ? performance.now() : 0;
+       for (let QC = 0; QC < CC; QC++)
+         for (const CC of SC) try {
+           CC()
+         } catch (fC) {
+           wC(fC)
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L1592-L1713` → after: `L330-L336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L330-L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L330-L336) · [Before (L1592-L1713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L1592-L1713)

```diff
-       })
-     }
- 
-     function Wg(qq, Eq, gq) {
-       return HE({
-         kind: "recovered",
-         code: "CORE-replayFault",
-         site: qq,
-         fatal: !1,
-         message: `the replay's ${qq} failed`,
-         details: {
-           wasmBuild: gq.wasm,
-           clientVersion: gq.client
-         },
-         error: Eq
-       })
- ... (106 more removed lines; see GitHub link above)
+       if (CC > 0 && iC(performance.now() - nC), null !== ZC) {
+         for (const CC of WC) try {
+           CC(ZC)
+         } catch (fC) {
+           wC(fC)
+         }
+         MC += ZC
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L1715-L1773` → after: `L338-L345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L338-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L338-L345) · [Before (L1715-L1773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L1715-L1773)

```diff
-     };
- 
-     function Qg(qq, Eq, gq, Yq) {
-       const {
-         site: lq,
-         prefix: Oq,
-         name: mq
-       } = Pg[qq], {
-         stage: xq,
-         error: Aq
-       } = gq;
-       return HE({
-         kind: qq,
-         code: "decode" === xq ? null === Aq ? `${Oq}-decode` : `${Oq}-trap` : Aq instanceof tq.g ? `${Oq}-${Aq.status}` : `${Oq}-network`,
-         site: lq,
-         fatal: !1,
- ... (43 more removed lines; see GitHub link above)
+       if ("drawn" === zC) {
+         const CC = MC;
+         MC = 0;
+         for (const zC of NC) try {
+           zC(CC)
+         } catch (fC) {
+           wC(fC)
+         }
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L1775-L1778` → after: `L347-L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L347-L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L347-L350) · [Before (L1775-L1778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L1775-L1778)

```diff
-       frame(qq, Eq) {
-         if (Eq) return !0;
-         const gq = null === this.lastMs ? 0 : qq - this.lastMs;
-         return this.lastMs = qq, gq <= 900 && (this.waitedMs += gq), !(this.waitedMs < lq) && (this.SN(), !0)
+       for (const QC of pC) try {
+         QC(CC, bC)
+       } catch (fC) {
+         wC(fC)
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L1786` → after: `L354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L354) · [Before (L1786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L1786)

```diff
-   4616: (qq, Eq, gq) => {
+   40729: (CC, zC, ZC) => {
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L1788-L1790` → after: `L356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L356) · [Before (L1788-L1790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L1788-L1790)

```diff
-       c: () => mq,
-       e: () => Oq,
-       g: () => lq
+       e: () => QC
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L1792-L1811` → after: `L358-L366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L358-L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L358-L366) · [Before (L1792-L1811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L1792-L1811)

```diff
-     var Yq = gq(4622);
- 
-     function lq(qq) {
-       return "none" !== qq
-     }
- 
-     function Oq(qq, Eq) {
-       if (!qq) return "none";
-       switch (Eq) {
-         case Yq.Y.Drawn:
-           return "drawn";
-         case Yq.Y.Paced:
-           return "paced";
-         default:
-           return "skipped"
-       }
- ... (4 more removed lines; see GitHub link above)
+     const QC = {
+       stop: () => QC,
+       fade: () => QC,
+       rate: () => QC,
+       getVolume: () => 0,
+       getRelativeVolume: () => 0,
+       setRelativeVolume: () => QC,
+       setPannerAttr: () => QC,
+       setPosition: () => QC
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L1814` → after: `L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L369) · [Before (L1814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L1814)

```diff
-   40325: (qq, Eq, gq) => {
+   4739: (CC, zC, ZC) => {
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L1991-L2814` → after: `L373-L376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L373-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L373-L376) · [Before (L1991-L2814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L1991-L2814)

```diff
-       k: () => Bq,
-       l: () => yq,
-       n: () => jq,
-       q: () => rq,
-       w: () => vq
-     });
-     var Yq = gq(36350),
-       lq = gq(36528);
-     const Oq = 64 * Yq.d,
-       mq = 40 * Yq.g,
-       xq = 36 * Yq.g,
-       Aq = 20 * Yq.g,
-       cq = 2 * Yq.g,
-       uq = 5 * Yq.g;
- 
-     function Bq(qq) {
- ... (808 more removed lines; see GitHub link above)
+       k: () => fC
+     });
+     var QC = ZC(2348),
+       wC = ZC(4745);
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L2818-L2821` → after: `L380-L383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L380-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L380-L383) · [Before (L2818-L2821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L2818-L2821)

```diff
-         group: Eq,
-         instance: gq
-       } = qq, Yq = tq.get(Eq);
-       return void 0 === Yq && (Yq = [], tq.set(Eq, Yq)), !Yq.includes(gq) && (Yq.length >= yq || (Yq.push(gq), !1))
+         action: zC,
+         flags: ZC
+       } = CC;
+       return "mid-fire" === zC && 0 !== (ZC & QC.c.AltLeftClick)
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L2824-L2825` → after: `L387-L390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L387-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L387-L390) · [Before (L2824-L2825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L2824-L2825)

```diff
-     function vq() {
-       return tq.size > 0
+     function fC(CC) {
+       return nC.add(CC), () => {
+         nC.delete(CC)
+       }
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L2828-L2829` → after: `L393-L403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L393-L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L393-L403) · [Before (L2828-L2829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L2828-L2829)

```diff
-     function hq() {
-       tq.clear()
+     function oC(CC) {
+       const zC = wC.c[255 & CC];
+       if (void 0 === zC) return;
+       const ZC = CC >>> 8 & 255,
+         bC = {
+           action: zC,
+           down: 0 !== (ZC & QC.c.Down),
+           flags: ZC,
+           press: CC >>> 16
+         };
+       for (const QC of nC) QC(bC)
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L2832` → after: `L406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L406) · [Before (L2832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L2832)

```diff
-   40613: (qq, Eq, gq) => {
+   4745: (CC, zC, ZC) => {
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L2836-L2837` → after: `L412-L688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L412-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L412-L688) · [Before (L2836-L2837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L2836-L2837)

```diff
-       h: () => dq,
-       k: () => yq
+       h: () => fC
+     });
+     const QC = {
+         Mouse1: 1,
+         Mouse2: 2,
+         Mouse3: 3,
+         "Alt+Left Click": 4,
+         F2: 5,
+         F4: 6,
+         F5: 7,
+         F8: 8,
+         F9: 9,
+         Digit0: 10,
+         Digit1: 11,
+         Digit2: 12,
+         Digit3: 13,
+ ... (261 more added lines; see GitHub link above)
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L2839-L2844` → after: `L690-L694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L690-L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L690-L694) · [Before (L2839-L2844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L2839-L2844)

```diff
-     var Yq = gq(6521),
-       lq = gq(31),
-       Oq = gq(4155),
-       mq = gq(4625),
-       xq = gq(6517),
-       Aq = gq(40622);
+     var QC = ZC(4733),
+       wC = ZC(2348),
+       bC = ZC(4752);
+     let nC = !1,
+       fC = !1;
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L2846-L2848` → after: `L696-L702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L696-L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L696-L702) · [Before (L2846-L2848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L2846-L2848)

```diff
-     function cq(qq, Eq) {
-       const gq = (0, xq.b)(Eq.variants);
-       return qq.setShaderPack(gq.variantFlags, gq.hooks, gq.moduleCodes, (0, Aq.x)(Eq.layers), Aq.j[Eq.Oc], Eq.keepCircleShadows)
+     function oC(CC) {
+       nC = !0;
+       try {
+         CC()
+       } finally {
+         nC = !1
+       }
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L2858-L2868` → after: `L706-L719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L706-L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L706-L719) · [Before (L2858-L2868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L2858-L2868)

```diff
-       var gq;
-       const Yq = null !== (gq = null === qq || void 0 === qq ? void 0 : qq.reason) && void 0 !== gq ? gq : "none";
-       return aq.has(Yq) ? {
-         messageKey: Eq ? "shaderPack:failedWebGpuDisabledUntilRestart" : "shaderPack:failedNoWebGpu",
-         noAdapter: !0
-       } : "not_requested" === Yq && "override" === (null === qq || void 0 === qq ? void 0 : qq.source) ? {
-         messageKey: "shaderPack:failedRendererOverride",
-         noAdapter: !1
-       } : {
-         messageKey: Vq.has(Yq) ? "shaderPack:failedWebGpuOff" : "shaderPack:failedNoWebGpu",
-         noAdapter: !1
+       if (nC) return !1;
+       switch (CC) {
+         case QC.Q.MouseDown:
+         case QC.Q.MouseUp:
+         case QC.Q.TouchStart:
+         case QC.Q.TouchEnd:
+         case QC.Q.TouchCancel:
+         case QC.Q.TouchButton:
+           return !0;
+         case QC.Q.KeyDown:
+         case QC.Q.KeyUp:
+           return 0 === (zC & wC.f.Repeat) && !(0, bC.d)(document.activeElement);
+         default:
+           return !1
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L2871-L2878` → after: `L722-L726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L722-L726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L722-L726) · [Before (L2871-L2878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L2871-L2878)

```diff
-     const jq = {
-       messageKey: "shaderPack:failedDeviceGraphics",
-       noAdapter: !1
-     };
-     class Hq extends Error {
-       constructor(qq) {
-         super(`the shader pack can't run in this game: ${qq}`), this.messageKey = qq, this.name = "ShaderPackJoinError"
-       }
+ 
+     function FC(CC) {
+       fC || (fC = !0, queueMicrotask((() => {
+         fC = !1, CC()
+       })))
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L2880-L2994` → after: `L728-L740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L728-L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L728-L740) · [Before (L2880-L2994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L2880-L2994)

```diff
-     const oq = "strict";
-     class Pq {
-       constructor(qq) {
-         this.deps = qq, this.pagePack = void 0, this.loaded = null, this.Oc = oq, this.failedPolicies = new Set, this.failedModelPolicies = new Set, this.refused = !1, this.joined = !1, this.playing = !1, this.game = 0, this.failedWhileJoining = !1, this.offInThisGame = !1, this. … [truncated]
-           status: "none"
-         }))).then((qq => (this.loaded = qq, "active" === qq.status && (this.handOverToPreviews(qq), null !== qq.harnessPolicy && (this.Oc = qq.harnessPolicy, this.handOver())), qq)))
-       }
-       async join(qq) {
-         this.leave();
-         const Eq = this.game,
-           [gq, lq] = await Promise.all([this.pagePack, this.policyOf(qq)]);
-         if (Eq !== this.game || "none" === gq.status) return null;
-         const Oq = "active" === gq.status ? gq.pack.variants : gq.variants,
-           mq = (0, Yq.g)(Oq, lq);
-         if (mq && "active" === gq.status && null === this.deps.core) return this.joined = !0, this.offInThisGame = !0, this.couldntRun = this.deps.noWebGpu.messageKey, null;
-         if (mq) {
- ... (99 more removed lines; see GitHub link above)
+   },
+   4752: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       b: () => fC,
+       d: () => nC,
+       e: () => qC
+     });
+     var QC = ZC(2348),
+       wC = ZC(2351);
+     const bC = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);
+ 
+     function nC(CC) {
+       return CC instanceof HTMLElement && (!!(CC.isContentEditable || CC instanceof HTMLTextAreaElement || CC instanceof HTMLSelectElement) || CC instanceof HTMLInputElement && !bC.has(CC.type))
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L2998-L3018` → after: `L743-L750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L743-L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L743-L750) · [Before (L2998-L3018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L2998-L3018)

```diff
-     function yq(qq, Eq, gq, Yq) {
-       return lq.i.subscribe(Qq, (qq => {
-         let {
-           translationKey: Eq,
-           stillCurrent: gq,
-           reasonKey: Yq
-         } = qq;
-         gq() && lq.i.TV("chat", (0, Oq.h)(Eq, Yq))
-       })), new Pq({
-         load: tq,
-         policyOf: rq,
-         core: qq,
-         previews: Eq,
-         noWebGpu: gq,
-         notify: (qq, Eq, gq) => {
-           const Yq = {
- ... (5 more removed lines; see GitHub link above)
+     function fC(CC) {
+       let zC = null;
+       const ZC = ZC => {
+           const wC = nC(ZC);
+           wC !== zC && (zC = wC, CC(QC.j.UiCapture, QC.v.Keyboard, 0, 0, wC ? QC.v.Keyboard : 0))
+         },
+         wC = CC => {
+           ZC(CC.target)
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L3020-L3021` → after: `L752-L753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L752-L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L752-L753) · [Before (L3020-L3021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L3020-L3021)

```diff
-         failInGame: qq => {
-           lq.i.TV(Oq.e, qq)
+         bC = CC => {
+           ZC(CC.relatedTarget)
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L3023-L3038` → after: `L755-L756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L755-L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L755-L756) · [Before (L3023-L3038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L3023-L3038)

```diff
-         warn: Yq
-       })
-     }
-     async function tq() {
-       const [{
-         shaderPackPage: qq,
-         harnessShaderPackMode: Eq
-       }, {
-         shaderPackTextures: Yq
-       }] = await Promise.all([gq.e(130).then((() => gq(39158))), gq.e(131).then((() => gq(6514)))]), lq = await qq.load();
-       return "active" !== lq.status ? lq : {
-         status: "active",
-         pack: {
-           variants: lq.pack.variants,
-           layers: Yq().layers,
-           keepCircleShadows: lq.pack.keepCircleShadows
+         fC = () => {
+           ZC(document.activeElement)
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L3040` → after: `L758-L763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L758-L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L758-L763) · [Before (L3040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L3040)

```diff
-         harnessPolicy: Eq()
+         oC = {
+           capture: !0,
+           passive: !0
+         };
+       return document.addEventListener("focusin", wC, oC), document.addEventListener("focusout", bC, oC), document.addEventListener("keydown", fC, oC), ZC(document.activeElement), () => {
+         document.removeEventListener("focusin", wC, oC), document.removeEventListener("focusout", bC, oC), document.removeEventListener("keydown", fC, oC)
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L3043` → after: `L766-L768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L766-L768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L766-L768) · [Before (L3043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L3043)

```diff
-     async function rq(qq) {
+     const oC = new Map;
+ 
+     function qC(CC, zC) {
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L3045-L3050` → after: `L770-L774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L770-L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L770-L774) · [Before (L3045-L3050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L3045-L3050)

```diff
-       const [{
-         harnessShaderPackMode: Yq
-       }, {
-         getShaderPackPolicy: lq
-       }] = await Promise.all([gq.e(130).then((() => gq(39158))), gq.e(90).then((() => gq(40997)))]);
-       return null !== (Eq = Yq()) && void 0 !== Eq ? Eq : lq(qq)
+       let QC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
+       oC.set(QC, (null !== (ZC = oC.get(QC)) && void 0 !== ZC ? ZC : 0) & ~CC | zC & CC);
+       let bC = 0;
+       for (const wC of oC.values()) bC |= wC;
+       return (0, wC.v)(CC, bC & CC)
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L3053` → after: `L777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L777) · [Before (L3053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L3053)

```diff
-   40731: (qq, Eq, gq) => {
+   40779: (CC, zC, ZC) => {
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L3058-L3060` → after: `L781-L782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L781-L782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L781-L782) · [Before (L3058-L3060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L3058-L3060)

```diff
-       k: () => cq,
-       m: () => uq,
-       n: () => Wq
+       j: () => fC,
+       m: () => qC
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L3062-L3070` → after: `L784-L787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L784-L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L784-L787) · [Before (L3062-L3070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L3062-L3070)

```diff
-     var Yq = gq(40733),
-       lq = gq(40735);
-     const Oq = "atlas:",
-       mq = 3e4;
-     class xq extends Error {
-       constructor(qq, Eq) {
-         super(`fetching ${qq} answered HTTP ${Eq}`), this.url = qq, this.status = Eq, this.name = "TerrainTextureFetchError"
-       }
-     }
+     var QC = ZC(1851);
+     let wC = null,
+       bC = 0;
+     const nC = new Set;
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L3072-L3085` → after: `L789-L790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L789-L790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L789-L790) · [Before (L3072-L3085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L3072-L3085)

```diff
-     function Aq(qq) {
-       if (!qq.startsWith(Oq)) return null;
-       const Eq = Number(qq.slice(Oq.length));
-       return Number.isInteger(Eq) && Eq >= 0 ? Eq : null
-     }
-     async function cq() {
-       const qq = await gq.e(202).then((() => gq(34302)));
-       return {
-         atlasSheets: qq.blockAtlasUrls,
-         texture: Eq => {
-           var gq, Yq, Oq;
-           return null !== (gq = null !== (Yq = null !== (Oq = qq.animatedBlockTextures[Eq]) && void 0 !== Oq ? Oq : qq.rotatedBlockTextures[Eq]) && void 0 !== Yq ? Yq : lq.c[Eq]) && void 0 !== gq ? gq : null
-         }
-       }
+     function fC() {
+       return wC
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L3087-L3110` → after: `L792-L794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L792-L794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L792-L794) · [Before (L3087-L3110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L3087-L3110)

```diff
-     async function uq(qq) {
-       const Eq = new AbortController,
-         gq = setTimeout((() => {
-           Eq.abort(new DOMException(`${qq} took over ${mq} ms`, "TimeoutError"))
-         }), mq);
-       let Yq;
-       try {
-         const gq = await fetch(qq, {
-           signal: Eq.signal
-         });
-         if (!gq.ok) throw new xq(qq, gq.status);
-         Yq = await gq.blob()
-       } finally {
-         clearTimeout(gq)
-       }
-       const lq = await createImageBitmap(Yq, {
- ... (8 more removed lines; see GitHub link above)
+ 
+     function oC() {
+       return bC
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L3115-L3194` → after: `L798-L799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L798-L799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L798-L799) · [Before (L3115-L3194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L3115-L3194)

```diff
-       const {
-         width: Eq,
-         height: gq
-       } = qq, lq = Math.max(1, Math.min(gq, Bq)), Oq = (0, Yq.f)(Eq, lq, {
-         willReadFrequently: !0
-       });
-       if (!Oq) throw new Error("no 2D context to read the texture back");
-       Oq.globalCompositeOperation = "copy";
-       const mq = new Uint8Array(Eq * gq * 4);
-       for (let Yq = 0; Yq < gq; Yq += lq) {
-         const xq = Math.min(lq, gq - Yq);
-         Oq.drawImage(qq, 0, Yq, Eq, xq, 0, 0, Eq, xq), mq.set(Oq.getImageData(0, 0, Eq, xq).data, Yq * Eq * 4)
-       }
-       return {
-         width: Eq,
-         height: gq,
- ... (64 more removed lines; see GitHub link above)
+       wC = CC, bC++, (0, QC.c)();
+       for (const zC of nC) zC()
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L3326` → after: `L803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L803) · [Before (L3326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L3326)

```diff
-       return "fetch" === qq || "timeout" === qq || "integrity" === qq ? "download" : "browser"
+       nC.add(CC)
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L3332` → after: `L816-L817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L816-L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L816-L817) · [Before (L3332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L3332)

```diff
-       j: () => xq,
+       i: () => RC,
+       l: () => xC,
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L3334` → after: `L819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L819) · [Before (L3334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L3334)

```diff
-       n: () => Oq
+       p: () => IC
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L3336-L3356` → after: `L821-L829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L821-L829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L821-L829) · [Before (L3336-L3356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L3336-L3356)

```diff
-     const lq = "https://discord.gg/playbloxd";
- 
-     function Oq(qq) {
-       return "download" === qq ? {
-         icon: "wifi",
-         title: "wasmScreens:downloadFailedTitle",
-         help: "wasmScreens:downloadFailedHelp",
-         helpValues: {},
-         discordLink: !1,
-         confirm: "general:tryAgain",
-         cancel: "general:back"
-       } : {
-         icon: "face-dizzy",
-         title: "wasmScreens:unsupportedTitle",
-         help: "wasmScreens:unsupportedHelp",
-         helpValues: {},
- ... (5 more removed lines; see GitHub link above)
+     var QC = ZC(155),
+       wC = ZC(20),
+       bC = ZC(28),
+       nC = ZC(2894),
+       fC = ZC(1257),
+       oC = ZC(34091),
+       qC = ZC(273),
+       FC = ZC(77),
+       WC = ZC(147);
```

#### 96. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L3358-L3369` → after: `L831-L841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L831-L841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L831-L841) · [Before (L3358-L3369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L3358-L3369)

```diff
-     function mq(qq, Eq) {
-       return {
-         icon: "face-dizzy",
-         title: "wasmScreens:crashTitle",
-         help: Eq ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
-         helpValues: {
-           code: qq.code
-         },
-         discordLink: Eq,
-         confirm: "general:reload",
-         cancel: "general:back"
-       }
+     function NC() {
+       var CC;
+       const zC = (0, nC.J)(),
+         ZC = function(CC, zC) {
+           return {
+             sampleCount: CC.antiAliasing ? 4 : 1,
+             n: (0, nC.B)(CC.pixelScale, zC),
+             pixelated: (0, nC.z)(CC.pixelSmoothing)
+           }
+         }(wC.b.get("clientEscMenuOptions"), zC);
+       return ZC.sampleCount > 1 && (0, oC.c)() && (ZC.sampleCount = 1), ZC.n = null !== (CC = (0, oC.l)()) && void 0 !== CC ? CC : ZC.n, QC.h.includes((0, FC.getSoftwareRenderer)()) && (ZC.sampleCount = 1, ZC.n = Math.max(ZC.n, (0, nC.B)(WC.x.pixelScale, zC))), ZC
```

#### 97. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L3373-L3381` → after: `L849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L849) · [Before (L3373-L3381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L3373-L3381)

```diff
-       return {
-         icon: "face-dizzy",
-         title: "wasmScreens:turnstilePageTitle",
-         help: "wasmScreens:turnstilePageHelp",
-         helpValues: {},
-         discordLink: !1,
-         confirm: "general:ok",
-         cancel: null
-       }
+       for (const CC of SC) CC()
```

#### 98. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L3384-L3394` → after: `L852-L855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L852-L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L852-L855) · [Before (L3384-L3394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L3384-L3394)

```diff
-     function Aq(qq, Eq, gq) {
-       return {
-         icon: "wifi",
-         title: "wasmScreens:disconnectedTitle",
-         help: gq ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
-         helpValues: {
-           reason: qq.reason
-         },
-         discordLink: null === qq.name,
-         confirm: Eq ? "general:reconnect" : qq.requiresRefresh ? "general:reload" : "general:ok",
-         cancel: null
+     function GC() {
+       if (null === MC) {
+         const CC = document.createElement("div");
+         CC.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;visibility:hidden;pointer-events:none", CC.setAttribute("aria-hidden", "true"), document.body.append(CC), gC = CC, MC = new nC.d(CC, PC)
```

#### 99. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L3426-L3429` → after: `L861-L863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L861-L863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L861-L863) · [Before (L3426-L3429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L3426-L3429)

```diff
-       if (0 === qq) return null;
-       const Eq = aq[qq];
-       if (void 0 === Eq) throw new Error(`${qq} is not a shader pack hook function id`);
-       return Eq
+       const zC = (0, nC.m)(),
+         [ZC, QC] = GC().size(zC);
+       return (0, nC.h)(ZC, QC, zC, CC.n)
```

#### 100. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L3433-L3437` → after: `L867-L872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L867-L872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L867-L872) · [Before (L3433-L3437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L3433-L3437)

```diff
-       const Eq = Yq.b.length;
-       return {
-         strict: qq >= Eq,
-         program: Yq.b[qq % Eq]
-       }
+       var zC, ZC, QC, wC;
+       const bC = (0, nC.m)(),
+         [oC, qC] = GC().size(bC);
+       if (oC <= 0 || qC <= 0) return null;
+       const FC = (0, nC.h)(oC, qC, bC, NC().n);
+       return (0, nC.f)(CC, FC), CC.style.left = `${null!==(zC=null===(ZC=pC)||void 0===ZC?void 0:ZC.rect.left)&&void 0!==zC?zC:0}px`, CC.style.top = `${null!==(QC=null===(wC=pC)||void 0===wC?void 0:wC.rect.top)&&void 0!==QC?QC:0}px`, (0, fC.K)(CC.style, pC), FC
```

#### 101. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L3441` → after: `L876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L876) · [Before (L3441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L3441)

```diff
-       return Number(qq.strict) * Yq.b.length + Yq.b.indexOf(qq.program)
+       pC = CC, GC(), (0, fC.C)(gC.style, CC, ""), PC()
```

#### 102. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L3444-L3445` → after: `L879-L880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L879-L880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L879-L880) · [Before (L3444-L3445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L3444-L3445)

```diff
-     function oq(qq) {
-       return "" === qq ? [] : qq.split(" ")
+     function JC(CC, zC) {
+       CC.style.imageRendering = (0, nC.L)(zC.pixelated)
```

#### 103. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L3448-L3458` → after: `L883-L890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L883-L890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L883-L890) · [Before (L3448-L3458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L3448-L3458)

```diff
-     function Pq(qq) {
-       const Eq = {
-         variantFlags: new Uint8Array(lq),
-         hooks: new Uint8Array(lq * Oq),
-         moduleCodes: Array(lq).fill(""),
-         reads: Array(2 * lq).fill("")
-       };
-       for (const gq of qq) {
-         const qq = Hq(gq.key),
-           Yq = (qq, Eq) => null === gq.hooks.surface || gq.reads.fragment.includes(qq) ? 0 : Eq;
-         Eq.variantFlags[qq] = (gq.sceneDepth ? mq : 0) | (gq.movesVertices ? xq : 0) | (gq.sunShadow ? Aq : 0) | (gq.airShadow ? cq : 0) | (gq.discards ? uq : 0) | Yq("localPosition", Bq) | Yq("enchantSpeed", Wq) | Yq("enchantTier", Nq), Eq.hooks[qq * Oq] = Vq(gq.hooks.vertex), E … [truncated]
+     function IC(CC, zC) {
+       const ZC = (0, bC.q)("appManagerUpdated|clientEscMenuOptions", (() => {
+           JC(CC, NC()), zC()
+         })),
+         QC = (0, oC.v)(zC),
+         wC = (0, qC.m)(zC);
+       return GC(), SC.add(zC), () => {
+         ZC(), QC(), wC(), SC.delete(zC)
```

#### 104. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L3492` → after: `L894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L894) · [Before (L3492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L3492)

```diff
-   40622: (qq, Eq, gq) => {
+   40827: (CC, zC, ZC) => {
```

#### 105. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L3499-L3505` → after: `L898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L898) · [Before (L3499-L3505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L3499-L3505)

```diff
-       g: () => uq,
-       j: () => dq,
-       l: () => Oq,
-       n: () => xq,
-       r: () => Aq,
-       v: () => mq,
-       x: () => Vq
+       g: () => wC
```

#### 106. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L3507-L3559` → after: `L900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L900) · [Before (L3507-L3559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L3507-L3559)

```diff
-     const Yq = 3,
-       lq = 0,
-       Oq = 1,
-       mq = 2,
-       xq = {
-         uniform: 3,
-         dW: 4,
-         special: 5,
-         volume: 6,
-         sampler: 7,
-         entities: 8,
-         entityGrids: 9
-       },
-       Aq = 10,
-       cq = "BloxdPackInputs",
-       uq = "bloxdPackInputs",
- ... (37 more removed lines; see GitHub link above)
+     let QC = null;
```

#### 107. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L3561-L3565` → after: `L902-L903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L902-L903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L902-L903) · [Before (L3561-L3565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L3561-L3565)

```diff
-     function aq(qq, Eq) {
-       const gq = new DataView(qq, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, Wq),
-         [Yq, lq, Oq, mq, xq, Aq] = Bq;
-       gq.setFloat32(Yq.offset, Eq.seconds, !0), gq.setUint32(lq.offset, Eq.lit ? 1 : 0, !0);
-       for (let cq = 0; cq < 3; cq++) gq.setInt32(Oq.offset + 4 * cq, Eq.renderOffset[cq], !0), gq.setFloat32(mq.offset + 4 * cq, Eq.vqq[cq], !0), gq.setFloat32(xq.offset + 4 * cq, Eq.eyePosition[cq], !0), gq.setFloat32(Aq.offset + 4 * cq, Eq.shadowDirection[cq], !0)
+     function wC(CC) {
+       QC = CC
```

#### 108. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L3569-L3576` → after: `L907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L907) · [Before (L3569-L3576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L3569-L3576)

```diff
-       const Eq = new Uint32Array(Math.max(1, qq.length));
-       return qq.forEach(((qq, gq) => {
-         let {
-           id: Yq,
-           rotation: lq
-         } = qq;
-         Eq[gq] = 65535 & Yq | (3 & lq) << 16
-       })), Eq
+       QC === CC && (QC = null)
```

#### 109. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L3578-L3581` → after: `L909-L912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L909-L912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L909-L912) · [Before (L3578-L3581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L3578-L3581)

```diff
-     const dq = {
-       off: 0,
-       strict: 1,
-       allow: 2
+ 
+     function nC() {
+       var CC;
+       null === (CC = QC) || void 0 === CC || CC()
```

#### 110. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L3584` → after: `L915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L915) · [Before (L3584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L3584)

```diff
-   6521: (qq, Eq, gq) => {
+   40772: (CC, zC, ZC) => {
```

#### 111. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L3586-L3590` → after: `L917-L922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L917-L922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L917-L922) · [Before (L3586-L3590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L3586-L3590)

```diff
-       b: () => Yq,
-       d: () => mq,
-       g: () => xq,
-       j: () => lq,
-       m: () => Oq
+       e: () => wC,
+       i: () => qC,
+       k: () => bC,
+       l: () => WC,
+       o: () => FC,
+       r: () => NC
```

#### 112. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L3592-L3599` → after: `L924-L942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L924-L942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L924-L942) · [Before (L3592-L3599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L3592-L3599)

```diff
-     const Yq = ["terrain", "liquid", "model"];
- 
-     function lq() {
-       const qq = [];
-       for (const Eq of [!1, !0])
-         for (const gq of Yq) qq.push({
-           strict: Eq,
-           program: gq
+     var QC = ZC(2856);
+     class wC extends Error {
+       constructor(CC, zC, ZC) {
+         super(`${"fetch"===CC?"fetching":"decoding"} ${zC} failed`, ZC), this.stage = CC, this.source = zC, this.name = "ShellImageError"
+       }
+     }
+     async function bC(CC) {
+       let zC, ZC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QC.M,
+         bC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
+       if ("string" === typeof CC) try {
+         zC = await ZC(CC)
+       } catch (nC) {
+         throw new wC("fetch", CC, {
+           cause: nC
+         })
+       } else zC = CC;
+ ... (3 more added lines; see GitHub link above)
```

#### 113. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L3601` → after: `L944-L953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L944-L953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L944-L953) · [Before (L3601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L3601)

```diff
-       return qq
+         return await createImageBitmap(CC, {
+           premultiplyAlpha: "none",
+           colorSpaceConversion: "none",
+           imageOrientation: bC
+         })
+       } catch (nC) {
+         throw new wC("decode", "string" === typeof CC ? CC : `${zC.byteLength} bytes`, {
+           cause: nC
+         })
+       }
```

#### 114. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L3605` → after: `L960-L963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L960-L963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L960-L963) · [Before (L3605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L3605)

```diff
-       return `${qq.strict?"strict":"allow"}.${qq.program}`
+       if (nC = CC, null !== CC) {
+         for (const [zC, ZC] of fC) CC.TZC(zC, ZC);
+         fC.clear()
+       }
```

#### 115. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L3609` → after: `L967-L976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L967-L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L967-L976) · [Before (L3609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L3609)

```diff
-       return !qq.hooks.vertex && !qq.hooks.surface && !qq.hooks.light
+       const zC = oC++;
+       return nC ? nC.TZC(zC, CC) : fC.set(zC, CC), zC
+     }
+     async function WC(CC, zC, ZC) {
+       const QC = await bC(CC, zC, ZC);
+       return {
+         id: FC(QC),
+         width: QC.width,
+         height: QC.height
+       }
```

#### 116. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L3613` → after: `L988-L1002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L988-L1002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/87.js#L988-L1002) · [Before (L3613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/87.js#L3613)

```diff
-       return "off" !== Eq && (null === qq || qq.some((qq => qq.key.strict === ("strict" === Eq) && !mq(qq))))
+       if (!Object.prototype.hasOwnProperty.call(CC, zC)) throw new TypeError("attempted to use private field on non-instance");
+       return CC
+     }
+     ZC.d(zC, {
+       e: () => QC
+     })
+   },
+   40743: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => wC
+     });
+     var QC = 0;
+ 
+     function wC(CC) {
+       return "__private_" + QC++ + "_" + CC
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/88.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/88.js` (63 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46)

#### 1. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L4-L49` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/88.js#L4-L6) · [Before (L4-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/88.js#L4-L49)

```diff
-   4625: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       A: () => xq,
-       Ab: () => rq,
-       B: () => Yq,
-       C: () => Oq,
-       E: () => dq,
-       Eb: () => tq,
-       G: () => wq,
-       H: () => uq,
-       Hb: () => Mq,
-       L: () => Bq,
-       Lb: () => Jq,
-       Nb: () => zq,
-       O: () => cq,
-       Q: () => jq,
- ... (30 more removed lines; see GitHub link above)
+   40372: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       startWasmPadGameplay: () => uC
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L51-L282` → after: `L8-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L8-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/88.js#L8-L27) · [Before (L51-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/88.js#L51-L282)

```diff
-     const Yq = 32,
-       lq = 33.333333333333336,
-       Oq = {
-         AbiVersion: 0,
-         Status: 1,
-         LastError: 2,
-         ErrorCount: 3,
-         FrameIndex: 4,
-         TicksRun: 5,
-         TicksDropped: 6,
-         Alpha: 7,
-         NetOutPtr: 8,
-         NetOutLen: 9,
-         WorkerOutPtr: 10,
-         WorkerOutLen: 11,
-         EventsPtr: 12,
- ... (216 more removed lines; see GitHub link above)
+     ZC(40381);
+     var QC = ZC(40389),
+       wC = ZC(40405),
+       bC = ZC(1865),
+       nC = ZC(40412),
+       fC = ZC(4733),
+       oC = ZC(4711),
+       qC = ZC(40417),
+       FC = ZC(40423),
+       WC = ZC(4745),
+       NC = ZC(40500),
+       MC = ZC(2351),
+       gC = ZC(8850),
+       SC = ZC(40392),
+       pC = ZC(8831),
+       PC = ZC(38944);
+ ... (4 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L285-L300` → after: `L37-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L37-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/88.js#L37-L38) · [Before (L285-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/88.js#L285-L300)

```diff
-         RecordingStarted: 0,
-         RecordingStopped: 1,
-         RecordingDiscarded: 2,
-         ClipSaved: 3,
-         ClipEmpty: 4,
-         ClippingNotOn: 5,
-         Disallowed: 6,
-         ClippingOn: 7,
-         ClippingOff: 8,
-         LimitReached: 9,
-         ClipSettingsChanged: 10,
-         SaveBusy: 11,
-         CloseViewerFirst: 12,
-         FileDiscarded: 13,
-         SaveFailed: 14,
-         RecordingTurnedOff: 15
+         SpecialAction1: GC("SpecialAction1"),
+         SpecialAction2: GC("SpecialAction2")
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L302-L306` → after: `L40-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L40-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/88.js#L40-L41) · [Before (L302-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/88.js#L302-L306)

```diff
-       zq = {
-         Cleared: 0,
-         Text: 1,
-         Int: 2,
-         Double: 3
+       hC = (CC, zC) => {
+         (0, MC.r)(fC.Q.PadAction, CC, 0, 0, (0, MC.q)(zC, performance.now()))
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L308-L312` → after: `L43-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L43-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/88.js#L43-L44) · [Before (L308-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/88.js#L308-L312)

```diff
-       Sq = 65535,
-       pq = {
-         FlyingText: 1,
-         PlayerKilled: 2,
-         Killfeed: 3
+       KC = CC => {
+         hC(CC, nC.Rd.Down)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L314-L319` → after: `L46-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L46-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/88.js#L46-L47) · [Before (L314-L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/88.js#L314-L319)

```diff
-       Gq = {
-         None: 0,
-         Paused: 1,
-         Playing: 2,
-         Cropping: 3,
-         Loading: 4
+       YC = CC => {
+         hC(CC, 0)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L321-L326` → after: `L49-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L49-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/88.js#L49-L50) · [Before (L321-L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/88.js#L321-L326)

```diff
-       Lq = 2,
-       Jq = {
-         UiText: 0,
-         Environment: 6,
-         Hud: 12,
-         Count: 19
+       dC = CC => {
+         KC(CC), YC(CC)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L328-L339` → after: `L52-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L52-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/88.js#L52-L54) · [Before (L328-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/88.js#L328-L339)

```diff
-       kq = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips", "skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride", "_health", "_totalMaxHealth", "_shield", "maxShi … [truncated]
-       Rq = {
-         SkyTable: 600,
-         SkyImagesReady: 601,
-         SkyTableHeaderBytes: 8,
-         SkyTableEntryBytes: 92,
-         SkyImagesReadyBytes: 32,
-         KindNone: 0,
-         KindCustom: 1,
-         KindEarth: 2,
-         CubeFaces: 6,
-         Failed: 0
+       mC = () => {
+         const CC = (0, FC.k)();
+         return null !== CC && void 0 !== CC && CC.isCoreRunning ? CC : null
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L341-L366` → after: `L56-L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L56-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/88.js#L56-L78) · [Before (L341-L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/88.js#L341-L366)

```diff
-       Uq = {
-         Bytes: 88,
-         Inclination: 0,
-         Turbidity: 1,
-         Luminance: 2,
-         Rayleigh: 3,
-         MieCoefficient: 4,
-         MieDirectionalG: 5,
-         Distance: 6,
-         Azimuth: 7,
-         Params: 8,
-         SunPosition: 256,
-         CameraOffsetX: 512,
-         CameraOffsetY: 1024,
-         CameraOffsetZ: 2048,
-         Up: 4096,
- ... (10 more removed lines; see GitHub link above)
+       HC = CC => nC.w.playerFlags(CC.api.apiView, 0),
+       EC = CC => null !== CC && nC.w.targetBlockId(CC.api.apiView, 0) !== nC.rd,
+       lC = () => {
+         const CC = (0, gC.b)(),
+           zC = new SC.c;
+         let ZC = !1;
+         const QC = (CC, zC) => {
+             (0, MC.r)(fC.Q.PadLook, nC._d.Rate, CC, zC, 0)
+           },
+           wC = () => {
+             ZC = !1, zC.reset(), QC(0, 0)
+           };
+         return {
+           update: (wC, bC, oC) => {
+             ZC || (CC.discardPending(), ZC = !0);
+             const qC = (0, SC.p)(zC, wC, bC, oC, performance.now());
+ ... (7 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L368-L524` → after: `L80-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L80-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/88.js#L80-L82) · [Before (L368-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/88.js#L368-L524)

```diff
-       Fq = {
-         None: 0,
-         InputOverCapacity: 1,
-         InputTruncated: 2,
-         InputUnknownKind: 3,
-         InputNonFinite: 4,
-         NetOverCapacity: 16,
-         NetTruncated: 17,
-         NetOversize: 18,
-         NetBadKind: 19,
-         NetConnUnknown: 20,
-         NetConnBackwards: 21,
-         WorkerOverCapacity: 32,
-         WorkerTruncated: 33,
-         WorkerUnknownKind: 34,
-         TimeNonFinite: 48,
- ... (141 more removed lines; see GitHub link above)
+       XC = () => {
+         const CC = mC();
+         return null !== CC && 0 !== (HC(CC) & nC.ce.PadSneakToggled)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L526-L550` → after: `L84-L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L84-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/88.js#L84-L200) · [Before (L526-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/88.js#L526-L550)

```diff
-       sq = 8,
-       Xq = {
-         GameCodeMessage: 4,
-         NewOtherEntitySettings: 23,
-         NewClientOptions: 37,
-         Chat: 64,
-         UiRequestPopup: 8,
-         TaskProgress: 9,
-         CustomKillfeed: 15,
-         TopRightHelper: 24,
-         NewUiRequest: 51,
-         PlayerKilled: 61,
-         OverShopInfo: 43,
-         ShowShopTutorial: 76,
-         SetCookie: 0,
-         LeaveValues: 85,
- ... (9 more removed lines; see GitHub link above)
+       cC = () => {
+         const CC = (CC => {
+           const zC = CC => function() {
+             return (0, NC.d)(), CC(...arguments)
+           };
+           return {
+             primaryFireDown: zC((() => (KC(RC), 0))),
+             primaryFireUp: zC((() => {
+               YC(RC)
+             })),
+             altFireDown: zC((() => (KC(AC), 0))),
+             altFireUp: zC((() => {
+               YC(AC)
+             })),
+             jumpDown: zC((() => {
+               dC(JC)
+ ... (101 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L552-L598` → after: `L202-L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L202-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/88.js#L202-L209) · [Before (L552-L598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/88.js#L552-L598)

```diff
-       wq = ["interactionPrompt", "showDamageAmounts", "killfeedColour", "colorInLobbyLeaderboard", "lobbyLeaderboardValues", "lobbyLeaderboardTags", "alwaysInInterest"]
-   },
-   40523: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       d: () => xq
-     });
-     const Yq = 1 << 20,
-       lq = 1 << 21,
-       Oq = 1024,
-       mq = 2048;
- 
-     function xq(qq, Eq, gq) {
-       const xq = qq + Yq,
-         Aq = Eq + Oq,
-         cq = gq + Yq;
-       return xq < 0 || xq >= lq || cq < 0 || cq >= lq || Aq < 0 || Aq >= mq ? -1 : (xq * lq + cq) * mq + Aq
- ... (31 more removed lines; see GitHub link above)
+       uC = () => {
+         const CC = (0, wC.b)(cC()),
+           zC = (0, QC.e)(),
+           ZC = null;
+         return () => {
+           CC(), zC(), null === ZC || void 0 === ZC || ZC()
+         }
+       }
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L600` → after: `L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/88.js#L211) · [Before (L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/88.js#L600)

```diff
-   40498: (qq, Eq, gq) => {
+   4711: (CC, zC, ZC) => {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L614` → after: `L220-L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L220-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/88.js#L220-L223) · [Before (L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/88.js#L614)

```diff
-       l: () => Dq,
+       j: () => YC,
+       k: () => PC,
+       m: () => JC,
+       n: () => RC,
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L617-L620` → after: `L226-L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L226-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/88.js#L226-L227) · [Before (L617-L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/88.js#L617-L620)

```diff
-       v: () => Iq,
-       w: () => OE,
-       y: () => Gq,
-       z: () => Lq
+       u: () => hC,
+       w: () => KC
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L622-L672` → after: `L229-L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L229-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/88.js#L229-L235) · [Before (L622-L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/88.js#L622-L672)

```diff
-     var Yq = gq(296),
-       lq = gq(260),
-       Oq = gq(263),
-       mq = gq(24),
-       xq = gq(2733),
-       Aq = gq(642),
-       cq = gq(4343),
-       uq = gq(2691),
-       Bq = gq(3324),
-       Wq = gq(96),
-       Nq = gq(289),
-       aq = gq(38),
-       Vq = gq(275),
-       dq = gq(118),
-       jq = gq(605),
-       Hq = gq(128),
- ... (35 more removed lines; see GitHub link above)
+     var QC = ZC(4719);
+     const wC = {
+       lockPointer: () => !1,
+       unlockPointer: () => {},
+       leaveGame: () => {}
+     };
+     let bC = wC;
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L675-L686` → after: `L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/88.js#L238) · [Before (L675-L686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/88.js#L675-L686)

```diff
-       return function(qq) {
-         try {
-           return qq()
-         } catch {
-           return null
-         }
-       }((() => {
-         var Eq, gq, Yq, mq;
-         const xq = null !== (Eq = null === (gq = qq.info) || void 0 === gq ? void 0 : gq.vendor) && void 0 !== Eq ? Eq : "";
-         return "windows" === (0, Wq.getOperatingSystem)() && "" !== xq && "intel" !== (0, Wq.normaliseGpuVendor)(xq) ? null : ((0, Wq.seedGpuVendor)(xq), Aq = (0, lq.l)(), cq = (0, Oq.c)(xq, null !== (Yq = null === (mq = qq.info) || void 0 === mq ? void 0 : mq.architecture) && vo … [truncated]
-         var Aq, cq
-       }))
+       bC = null !== CC && void 0 !== CC ? CC : wC
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L690-L762` → after: `L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/88.js#L242) · [Before (L690-L762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/88.js#L690-L762)

```diff
-       var qq;
-       return {
-         gpu: null !== (qq = navigator.gpu) && void 0 !== qq ? qq : null,
-         webgl2: () => {
-           try {
-             return null !== document.createElement("canvas").getContext("webgl2")
-           } catch {
-             return !1
-           }
-         },
-         webgl1: () => function(qq) {
-           let Eq, gq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Qq.c;
-           try {
-             Eq = qq.getContext("webgl")
-           } catch {
-             Eq = null
- ... (57 more removed lines; see GitHub link above)
+       return bC
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L766-L769` → after: `L255-L256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L255-L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/88.js#L255-L256) · [Before (L766-L769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/88.js#L766-L769)

```diff
-       try {
-         return qq()
-       } catch {
-         return !1
+       return oC.add(CC), () => {
+         oC.delete(CC)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L773-L892` → after: `L260-L262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L260-L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/88.js#L260-L262) · [Before (L773-L892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/88.js#L773-L892)

```diff
-     function zq(qq) {
-       return "lite" === qq ? "webgpu" : "webgl2" === qq || "babylon" === qq ? "webgl" : null
-     }
-     async function Sq() {
-       let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Mq();
-       const Eq = await async function(qq) {
-         const Eq = function(qq) {
-             const Eq = qq.override(),
-               gq = qq.webGpuSetting(),
-               Yq = null === Eq && !0 !== gq && qq.pN(),
-               lq = null !== Eq || null !== gq || Yq ? null : qq.claimed(),
-               Oq = null !== Eq ? "override" : !0 === gq ? "setting" : Yq ? "pack" : !1 === gq ? "setting" : null !== lq ? "claim" : "default",
-               mq = function(qq) {
-                 return "override" === qq || "setting" === qq
-               }(Oq);
-             if ("webgl" === Eq || "webgl1" === Eq || "webgl" === lq || "setting" === Oq && !1 === gq) return {
- ... (104 more removed lines; see GitHub link above)
+     function GC(CC, zC) {
+       for (const QC of oC) try {
+         QC(CC)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L894` → after: `L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/88.js#L264) · [Before (L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/88.js#L894)

```diff
-         return mq instanceof yq.f
+         zC(ZC)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L898-L913` → after: `L268-L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L268-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/88.js#L268-L271) · [Before (L898-L913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/88.js#L898-L913)

```diff
-     function Jq(qq, Eq, gq) {
-       if ("webgpu" !== qq.backend) return !1;
-       const Yq = Rq(Eq, "terrainFetch", "texture", "storage");
-       return null !== Yq ? Yq : null !== qq.adapter && (0, dq.k)(qq.adapter, gq)
-     }
- 
-     function kq(qq, Eq, gq) {
-       if ("webgpu" !== qq.backend) return !1;
-       const Yq = Rq(Eq, "sceneDepth", "off", "on");
-       return null !== Yq ? Yq : null !== qq.adapter && (0, dq.l)(qq.adapter, gq)
-     }
- 
-     function Rq(qq, Eq, gq, Yq) {
-       const lq = new URLSearchParams(qq).get(Eq),
-         Oq = null !== lq && void 0 !== lq ? lq : (0, Aq.g)(Eq);
-       return Oq !== gq && Oq !== Yq ? null : (pq ||= null === lq, Oq === gq)
+     function RC(CC) {
+       return qC.add(CC), () => {
+         qC.delete(CC)
+       }
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L917-L921` → after: `L275-L281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L275-L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/88.js#L275-L281) · [Before (L917-L921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/88.js#L917-L921)

```diff
-       return "webgl" === qq.backend && (0, Oq.g)(Eq)
-     }
- 
-     function Fq(qq) {
-       return null !== qq && "missing" in qq
+       const ZC = FC < 0 ? 0 : CC - FC;
+       FC = CC;
+       for (const wC of qC) try {
+         wC(ZC)
+       } catch (QC) {
+         zC(QC)
+       }
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L925-L933` → after: `L285-L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L285-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/88.js#L285-L286) · [Before (L925-L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/88.js#L925-L933)

```diff
-       let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mq.b;
-       try {
-         const gq = "start_failed" === qq || "pipeline_failed" === qq,
-           Yq = Eq.turnOffWebGpuAfterDeviceLoss(gq ? "visible" : (0, Vq.h)((0, Nq.i)()));
-         return !pq || Yq && !Eq.isWebGpuOffAfterLoss() || (0, Aq.x)("webgpuLoss"), Eq.isWebGpuOffAfterLoss() && "webgpu" === zq(aq.i.getItem(uq.f)) && aq.i.removeItem(uq.f), (0, xq.s)("webgpuloss") && (0, cq.b)((Eq => {
-           Eq.noteWebGpuLoss("wasm", Yq ? qq : `${qq}, which storage didn't keep`, null)
-         })), Yq
-       } catch {
-         return !1
+       return WC.add(CC), () => {
+         WC.delete(CC)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L938` → after: `L291-L293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L291-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/88.js#L291-L293) · [Before (L938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/88.js#L938)

```diff
-       return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !Cq()) ? sq(qq) ? null : "storage won't keep WebGPU off" : "the URL asks for WebGPU"
+       return NC.add(CC), () => {
+         NC.delete(CC)
+       }
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L940` → after: `L295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/88.js#L295) · [Before (L940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/88.js#L940)

```diff
-     const wq = "framePacing";
+     let IC = 0;
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L943-L944` → after: `L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/88.js#L298) · [Before (L943-L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/88.js#L943-L944)

```diff
-       const Eq = new URLSearchParams(qq).get(wq);
-       return null !== Eq && /^\d{1,9}$/.test(Eq) ? Number(Eq) : void 0
+       IC += CC
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L948-L957` → after: `L302-L303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L302-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/88.js#L302-L303) · [Before (L948-L957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/88.js#L948-L957)

```diff
-       let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.search;
-       try {
-         return "webgpu" === zq(new URLSearchParams(qq).get(uq.e))
-       } catch {
-         return !1
-       }
-     }
- 
-     function Iq(qq) {
-       return !!eq(qq) || qq instanceof Error && !(qq instanceof WebAssembly.RuntimeError) && qq.message.startsWith(`${Pq.f.RenderSurfaceUnusable}:`)
+       const CC = IC;
+       return IC = 0, CC
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L961-L965` → after: `L307-L309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L307-L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/88.js#L307-L309) · [Before (L961-L965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/88.js#L961-L965)

```diff
-       const {
-         name: Eq,
-         message: gq
-       } = null !== qq && void 0 !== qq ? qq : {};
-       return "InvalidStateError" === Eq && "string" === typeof gq && gq.startsWith("GPUDevice.")
+       return SC.add(CC), () => {
+         SC.delete(CC)
+       }
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L969-L970` → after: `L313-L315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L313-L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/88.js#L313-L315) · [Before (L969-L970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/88.js#L969-L970)

```diff
-       const Eq = qq;
-       return "function" === typeof Eq.dYq && "function" === typeof Eq.jYq ? Eq : null
+       return pC.add(CC), () => {
+         pC.delete(CC)
+       }
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L973-L974` → after: `L318-L319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L318-L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/88.js#L318-L319) · [Before (L973-L974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/88.js#L973-L974)

```diff
-     function qE(qq) {
-       return "function" === typeof qq.rYq ? qq : null
+     function KC() {
+       MC = 0, gC = 0, FC = -1
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L978-L980` → after: `L322-L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L322-L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/88.js#L322-L326) · [Before (L978-L980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/88.js#L978-L980)

```diff
-     function gE(qq) {
-       const Eq = null === qq || void 0 === qq ? void 0 : qq.fOq();
-       return void 0 === Eq ? void 0 : new Error(Eq)
+     function YC(CC, zC) {
+       if ("paced" === CC) return gC += zC, null;
+       if ("drawn" !== CC && "skipped" !== CC) return null;
+       const ZC = zC + gC;
+       return gC = 0, ZC
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L985-L994` → after: `L329-L356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L329-L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/88.js#L329-L356) · [Before (L985-L994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/88.js#L985-L994)

```diff
-     function OE(qq, Eq, gq, Yq, lq, Oq) {
-       return (0, yq.k)(function(qq, Eq, gq, Yq, lq, Oq) {
-         return (0, tq.d)(qq, Eq, (() => qq.rYq(gq, Yq, lq, Oq.indirectHangs, Oq.storagePullBreaks, Oq.splitPassBreaks, Oq.framesAhead, Oq.instancedTerrainSlow)))
-       }(qq, Eq, gq, Yq, lq, Oq), lE, `${Pq.f.RenderSurfaceUnusable}: the renderer didn't open in ${lE/1e3} s`, xE)
-     }
-     async function mE(qq, Eq, gq, Yq, lq, Oq) {
-       if ("function" !== typeof qq.Hmq) throw new Error("this core has no set_renderer");
-       const mq = await OE(Eq, EE, gq, lq, Yq, Oq);
-       try {
-         qq.Hmq(mq)
+     function dC(CC, zC, ZC, wC) {
+       const bC = (0, QC.i)(zC),
+         nC = CC > 0 ? performance.now() : 0;
+       for (let QC = 0; QC < CC; QC++)
+         for (const CC of SC) try {
+           CC()
+         } catch (fC) {
+           wC(fC)
+         }
+       if (CC > 0 && iC(performance.now() - nC), null !== ZC) {
+         for (const CC of WC) try {
+           CC(ZC)
+         } catch (fC) {
+           wC(fC)
+         }
+         MC += ZC
+ ... (12 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L996` → after: `L358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/88.js#L358) · [Before (L996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/88.js#L996)

```diff
-         throw xE(mq), xq
+         wC(fC)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L1006` → after: `L362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/88.js#L362) · [Before (L1006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/88.js#L1006)

```diff
-   40503: (qq, Eq, gq) => {
+   4745: (CC, zC, ZC) => {
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L1008` → after: `L364-L368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L364-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/88.js#L364-L368) · [Before (L1008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/88.js#L1008)

```diff
-       c: () => Yq
+       c: () => wC,
+       d: () => bC,
+       f: () => nC,
+       g: () => QC,
+       h: () => fC
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L1011-L1018` → after: `L371-L565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L371-L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/88.js#L371-L565) · [Before (L1011-L1018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/88.js#L1011-L1018)

```diff
-       extensions: ["ANGLE_instanced_arrays", "OES_vertex_array_object", "OES_element_index_uint", "OES_standard_derivatives"],
-       limits: {
-         MAX_VERTEX_ATTRIBS: 16,
-         MAX_TEXTURE_SIZE: 2048,
-         MAX_TEXTURE_IMAGE_UNITS: 8,
-         MAX_VARYING_VECTORS: 8,
-         MAX_VERTEX_UNIFORM_VECTORS: 128,
-         MAX_FRAGMENT_UNIFORM_VECTORS: 34
+         Mouse1: 1,
+         Mouse2: 2,
+         Mouse3: 3,
+         "Alt+Left Click": 4,
+         F2: 5,
+         F4: 6,
+         F5: 7,
+         F8: 8,
+         F9: 9,
+         Digit0: 10,
+         Digit1: 11,
+         Digit2: 12,
+         Digit3: 13,
+         Digit4: 14,
+         Digit5: 15,
+         Digit6: 16,
+ ... (179 more added lines; see GitHub link above)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L1020-L1021` → after: `L567-L638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L567-L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/88.js#L567-L638) · [Before (L1020-L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/88.js#L1020-L1021)

```diff
-       vertexHighFloatBits: 23
-     }
+       wC = ["forward", "backward", "left", "right", "sprint", "jump", "crouch", "primary-fire", "alt-fire", "SpecialAction1", "SpecialAction2", "ReloadGun", "DropItem", "mid-fire", "Zoom", "SwapCameraZoom", "OpenInventory", "OpenLobbyLeaderboard", "OpenShop", "OpenCharacterCustom … [truncated]
+       bC = {
+         forward: [21, 46],
+         backward: [31, 49],
+         left: [30, 47],
+         right: [32, 48],
+         sprint: [50, 51],
+         jump: [59],
+         crouch: [52, 41, 60, 61, 62, 53],
+         "primary-fire": [1],
+         "alt-fire": [3, 22],
+         SpecialAction1: [23],
+         SpecialAction2: [33],
+         ReloadGun: [23],
+         DropItem: [20],
+         "mid-fire": [2, 4],
+ ... (56 more added lines; see GitHub link above)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L1023` → after: `L640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/88.js#L640) · [Before (L1023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/88.js#L1023)

```diff
-   40526: (qq, Eq, gq) => {
+   40500: (CC, zC, ZC) => {
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L1025-L1026` → after: `L642-L644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L642-L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/88.js#L642-L644) · [Before (L1025-L1026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/88.js#L1025-L1026)

```diff
-       c: () => Aq,
-       g: () => xq
+       d: () => nC,
+       f: () => bC,
+       i: () => wC
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L1028-L1034` → after: `L646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/88.js#L646) · [Before (L1028-L1034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/88.js#L1028-L1034)

```diff
-     var Yq = gq(658),
-       lq = gq(660);
- 
-     function Oq(qq, Eq) {
-       const gq = null === Eq ? void 0 : Yq.b.get(Eq);
-       return "all" === gq || "webgl" === gq && "webgpu" !== qq.backend ? Eq : null
-     }
+     let QC = null;
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L1037` → after: `L649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/88.js#L649) · [Before (L1037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/88.js#L1037)

```diff
-       return "software_adapter" === qq.reason ? null : qq.adapter
+       QC = CC
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L1040-L1042` → after: `L652-L653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L652-L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/88.js#L652-L653) · [Before (L1040-L1042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/88.js#L1040-L1042)

```diff
-     function xq(qq, Eq) {
-       const gq = (0, Yq.s)();
-       return null === gq ? null : (0, Yq.f)(mq(qq), gq, Eq ? Yq.m : Yq.j)
+     function bC(CC) {
+       QC === CC && (QC = null)
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L1045-L1048` → after: `L656-L658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L656-L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/88.js#L656-L658) · [Before (L1045-L1048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/88.js#L1045-L1048)

```diff
-     function Aq(qq, Eq) {
-       let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : lq.k;
-       const Yq = Oq(qq, Eq);
-       return null !== Yq && "webgl" === qq.backend && gq(Yq) ? null : Yq
+     function nC() {
+       var CC;
+       null === (CC = QC) || void 0 === CC || CC()
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L1051` → after: `L661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/88.js#L661) · [Before (L1051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/88.js#L1051)

```diff
-   40508: (qq, Eq, gq) => {
+   4752: (CC, zC, ZC) => {
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L1053` → after: `L663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/88.js#L663) · [Before (L1053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/88.js#L1053)

```diff
-       c: () => lq,
+       b: () => fC,
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L1055-L1056` → after: `L665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/88.js#L665) · [Before (L1055-L1056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/88.js#L1055-L1056)

```diff
-       g: () => mq,
-       k: () => Aq
+       e: () => qC
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L1058-L1067` → after: `L667-L669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L667-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/88.js#L667-L669) · [Before (L1058-L1067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/88.js#L1058-L1067)

```diff
-     var Yq = gq(36356);
-     class lq extends Error {
-       constructor(qq, Eq) {
-         let gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-         super(`${qq}: the module trapped${gq?" in an earlier call":""}: ${String(Eq)}`, {
-           cause: Eq
-         }), this.site = qq, this.trap = Eq, this.earlier = gq, this.name = "ModuleTrapError", Eq instanceof Error && void 0 !== Eq.stack && (this.stack = `${this.name}: ${this.message}\n${Eq.stack}`)
-       }
-     }
-     const Oq = new WeakMap;
+     var QC = ZC(2348),
+       wC = ZC(2351);
+     const bC = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L1070` → after: `L672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/88.js#L672) · [Before (L1070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/88.js#L1070)

```diff
-       return Oq.has(qq)
+       return CC instanceof HTMLElement && (!!(CC.isContentEditable || CC instanceof HTMLTextAreaElement || CC instanceof HTMLSelectElement) || CC instanceof HTMLInputElement && !bC.has(CC.type))
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L1073-L1074` → after: `L675-L696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L675-L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/88.js#L675-L696) · [Before (L1073-L1074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/88.js#L1073-L1074)

```diff
-     function xq(qq, Eq) {
-       Oq.has(qq) || Oq.set(qq, Eq)
+     function fC(CC) {
+       let zC = null;
+       const ZC = ZC => {
+           const wC = nC(ZC);
+           wC !== zC && (zC = wC, CC(QC.j.UiCapture, QC.v.Keyboard, 0, 0, wC ? QC.v.Keyboard : 0))
+         },
+         wC = CC => {
+           ZC(CC.target)
+         },
+         bC = CC => {
+           ZC(CC.relatedTarget)
+         },
+         fC = () => {
+           ZC(document.activeElement)
+         },
+         oC = {
+ ... (6 more added lines; see GitHub link above)
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L1078-L1114` → after: `L701-L706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L701-L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/88.js#L701-L706) · [Before (L1078-L1114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/88.js#L1078-L1114)

```diff
-       return !!(0, Yq.i)(Eq) && (xq(qq, Eq), !0)
-     }
-     const cq = [
-       ["error", qq => qq.error],
-       ["unhandledrejection", qq => qq.reason]
-     ];
- 
-     function uq(qq, Eq, gq) {
-       let mq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "function" === typeof globalThis.addEventListener ? globalThis : null;
-       return Oq.has(qq) ? Promise.reject(new lq(Eq, Oq.get(qq), !0)) : new Promise(((Oq, Aq) => {
-         const uq = gq => {
-             xq(qq, gq), Nq(), Aq(new lq(Eq, gq))
-           },
-           Bq = qq => {
-             qq instanceof WebAssembly.RuntimeError ? uq(qq) : (Nq(), Aq(qq))
-           },
- ... (21 more removed lines; see GitHub link above)
+       var ZC;
+       let QC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
+       oC.set(QC, (null !== (ZC = oC.get(QC)) && void 0 !== ZC ? ZC : 0) & ~CC | zC & CC);
+       let bC = 0;
+       for (const wC of oC.values()) bC |= wC;
+       return (0, wC.v)(CC, bC & CC)
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L1117-L1151` → after: `L709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/88.js#L709) · [Before (L1117-L1151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/88.js#L1117-L1151)

```diff
-   40534: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       D: () => Lq,
-       G: () => Mq,
-       K: () => rq,
-       L: () => Zq,
-       P: () => fq,
-       Q: () => zq,
-       U: () => iq,
-       c: () => tq,
-       d: () => Pq,
-       g: () => Sq,
-       h: () => Tq,
-       l: () => oq,
-       n: () => yq,
-       o: () => jq,
- ... (19 more removed lines; see GitHub link above)
+   36796: (CC, zC, ZC) => {
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L1153-L1167` → after: `L711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/88.js#L711) · [Before (L1153-L1167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/88.js#L1153-L1167)

```diff
-       dq = qq
-     }
-     let Hq = !1;
- 
-     function oq() {
-       Hq = !0
-     }
- 
-     function Pq() {
-       return Hq
-     }
-     let Qq = !1;
- 
-     function yq() {
-       Qq = !0
+       return CC.includes("Leaf Bed")
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L1180-L1201` → after: `L715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/88.js#L715) · [Before (L1180-L1201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/88.js#L1180-L1201)

```diff
-       vq = qq, (0, mq.e)(qq)
-     }
-     const nq = "wasmClientRenderLost";
- 
-     function bq() {
-       xq.k.setItem(nq, !0)
-     }
- 
-     function iq() {
-       return !0 === xq.k.getItem(nq)
-     }
- 
-     function Zq() {
-       return vq
-     }
- 
- ... (6 more removed lines; see GitHub link above)
+       return / Bed(?: Head)?(?:\||$)/.test(CC) && !QC(CC)
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L1205-L1208` → after: `L719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/88.js#L719) · [Before (L1205-L1208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/88.js#L1205-L1208)

```diff
-       return qq ? qq.load() : Promise.resolve().then((function() {
-         var qq = new Error("Cannot find module '@bloxd/wasm/client'");
-         throw qq.code = "MODULE_NOT_FOUND", qq
-       })).then((qq => qq.bloxdWasmClient))
+       return CC.includes(" Strongbed")
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L1212-L1235` → after: `L723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/88.js#L723) · [Before (L1212-L1235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/88.js#L1212-L1235)

```diff
-       xq.i.setItem(Nq, qq)
-     }
-     async function Sq() {
-       if (null === uq.h) return Tq(null);
-       const qq = xq.i.getItem(Nq);
-       let Eq = "none" === qq ? null : "webgl";
-       return null !== qq && "none" !== qq && ("string" === typeof qq && void 0 !== (0, Yq.b)(uq.h, qq) ? Eq = qq : console.warn(`[bloxd-wasm-client] the last join's build, ${JSON.stringify(qq)}, is none of this client's: guessing WebGL2's`)), null === Eq ? null : uq.h[Eq]()
-     }
-     let pq = null,
-       Gq = null;
- 
-     function Lq() {
-       return pq ??= fq().then((async qq => {
-         var Eq;
-         const gq = null !== qq && !(0, Aq.p)(qq),
-           Yq = {
- ... (8 more removed lines; see GitHub link above)
+       return QC(CC) || wC(CC) || bC(CC)
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L1255-L1279` → after: `L727-L729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L727-L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/88.js#L727-L729) · [Before (L1255-L1279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/88.js#L1255-L1279)

```diff
-       h: () => Yq
-     });
-     const Yq = {
-         webgpu: async () => (await gq.e(8).then((() => gq(42992)))).bloxdWasmWebgpu,
-         webgl: async () => (await gq.e(6).then((() => gq(43003)))).bloxdWasmWebgl,
-         webgl1: async () => (await gq.e(7).then((() => gq(43016)))).bloxdWasmWebgl1
-       },
-       lq = async () => (await gq.e(5).then((() => gq(43032)))).compileAnimationPackInWasm
-   },
-   40559: (qq, Eq, gq) => {
-     function Yq() {
-       return gq(40565)
-     }
- 
-     function lq() {
-       return gq(40573)
- ... (9 more removed lines; see GitHub link above)
+       g: () => QC,
+       i: () => bC,
+       l: () => wC
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L1282` → after: `L732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/88.js#L732) · [Before (L1282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/88.js#L1282)

```diff
-   40551: (qq, Eq, gq) => {
+   36794: (CC, zC, ZC) => {
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L1284-L1285` → after: `L734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/88.js#L734) · [Before (L1284-L1285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/88.js#L1284-L1285)

```diff
-       c: () => xq,
-       g: () => Aq
+       e: () => qC
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L1287-L1345` → after: `L736-L749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L736-L749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/88.js#L736-L749) · [Before (L1287-L1345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/88.js#L1287-L1345)

```diff
-     var Yq = gq(96);
-     const lq = "webgpuPipeline";
- 
-     function Oq(qq) {
-       return qq.split(".").slice(0, 2).join("_").replace(/[^0-9_]/g, "")
-     }
-     let mq = null;
- 
-     function xq() {
-       if (null === mq) try {
-         qq = (0, Yq.getBrowserName)(), Eq = (0, Yq.getBrowserVersion)(), gq = (0, Yq.getOperatingSystem)(), lq = (0, Yq.getOperatingSystemVersion)(), mq = `${qq.toLowerCase().replace(/[^a-z0-9]/g,"")}_${void 0===Eq?"unknown":Oq(Eq)}-${gq}${void 0===lq?"":`_${Oq(lq)}`}`
-       } catch (xq) {
-         console.warn("The user agent couldn't be read for its browser code", xq), mq = "unknown"
-       }
-       var qq, Eq, gq, lq;
-       return mq
- ... (43 more removed lines; see GitHub link above)
+     var QC = ZC(36796),
+       wC = ZC(9194);
+     const bC = [],
+       nC = [],
+       fC = [],
+       oC = [];
+     for (const FC of Object.keys(wC.n))(0, QC.g)(FC) ? bC.push(FC) : (0, QC.l)(FC) && nC.push(FC), (0, QC.i)(FC) && fC.push(FC), (FC.includes(" Bed Head") || FC.includes(" Strongbed Head")) && oC.push(FC);
+     const qC = {
+       leafBeds: bC,
+       woolBeds: nC,
+       strongBeds: fC,
+       beds: [...bC, ...nC, ...fC],
+       bedHeads: oC,
+       blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L1348-L1360` → after: `L752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/88.js#L752) · [Before (L1348-L1360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/88.js#L1348-L1360)

```diff
-   40495: (qq, Eq, gq) => {
-     qq.exports = gq.p + "static/media/bloxd_wasm_models_bg.273d3ef33ab63e5ae007.wasm"
-   },
-   40493: (qq, Eq, gq) => {
-     qq.exports = gq.p + "static/media/bloxd_wasm_workers_bg.b1eeed671303ca766c1e.wasm"
-   },
-   40565: (qq, Eq, gq) => {
-     qq.exports = gq.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
-   },
-   40573: (qq, Eq, gq) => {
-     qq.exports = gq.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
-   },
-   40490: (qq, Eq, gq) => {
+   6484: (CC, zC, ZC) => {
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L1362-L1363` → after: `L754-L760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L754-L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/88.js#L754-L760) · [Before (L1362-L1363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/88.js#L1362-L1363)

```diff
-       b: () => lq,
-       c: () => Yq
+       c: () => nC,
+       e: () => wC,
+       g: () => oC,
+       k: () => bC,
+       o: () => qC,
+       r: () => QC,
+       t: () => fC
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L1365-L1376` → after: `L762-L783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L762-L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/88.js#L762-L783) · [Before (L1365-L1376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/88.js#L1365-L1376)

```diff
-     const Yq = {
-       name: "bloxd_wasm_workers",
-       url: function() {
-         return new gq.U(gq(40493))
-       }
-     };
-     const lq = {
-       name: "bloxd_wasm_models",
-       url: function() {
-         return new gq.U(gq(40495))
-       }
-     }
+     let QC = function(CC) {
+         return CC[CC.DEFAULT = 0] = "DEFAULT", CC[CC.BOAT = 1] = "BOAT", CC[CC.GLIDER = 2] = "GLIDER", CC[CC.BALLOON = 3] = "BALLOON", CC[CC.SLEEPING = 4] = "SLEEPING", CC[CC.RIDING_MOB = 5] = "RIDING_MOB", CC[CC.CAR = 6] = "CAR", CC[CC.HOVERCRAFT = 7] = "HOVERCRAFT", CC
+       }({}),
+       wC = function(CC) {
+         return CC[CC.WOOD = 0] = "WOOD", CC[CC.OBSIDIAN = 1] = "OBSIDIAN", CC[CC.SPEED = 2] = "SPEED", CC
+       }({}),
+       bC = function(CC) {
+         return CC[CC.WOOD = 0] = "WOOD", CC[CC.IRON = 1] = "IRON", CC[CC.GOLD = 2] = "GOLD", CC[CC.DIAMOND = 3] = "DIAMOND", CC
+       }({}),
+       nC = function(CC) {
+         return CC[CC.YELLOW = 0] = "YELLOW", CC[CC.WHITE = 1] = "WHITE", CC[CC.RED = 2] = "RED", CC[CC.PURPLE = 3] = "PURPLE", CC[CC.PINK = 4] = "PINK", CC[CC.ORANGE = 5] = "ORANGE", CC[CC.MAGENTA = 6] = "MAGENTA", CC[CC.LIME = 7] = "LIME", CC[CC.LIGHT_GRAY = 8] = "LIGHT_GRAY", C … [truncated]
+       }({}),
+       fC = function(CC) {
+         return CC[CC.ROTATION_1 = 0] = "ROTATION_1", CC[CC.ROTATION_2 = 1] = "ROTATION_2", CC[CC.ROTATION_3 = 2] = "ROTATION_3", CC[CC.ROTATION_4 = 3] = "ROTATION_4", CC
+       }({}),
+       oC = function(CC) {
+ ... (6 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/89.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/89.js` (23 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L4-L21` → after: `L4-L572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L4-L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/89.js#L4-L572) · [Before (L4-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/89.js#L4-L21)

```diff
-   41222: (qq, Eq, gq) => {
-     async function Yq(qq, Eq) {
-       const [{
-         clientSideServerUrls: Yq
-       }, {
-         postJsonWithMetricsCookiesAndJsonResponse: lq
-       }, {
-         gameBridge: Oq
-       }] = await Promise.all([Promise.resolve().then((() => gq(1195))), Promise.resolve().then((() => gq(1109))), Promise.resolve().then((() => gq(1904)))]), mq = Oq.latest("connectedGame").websocketUrl;
-       if (!mq) throw new Error("AI Helper: not connected to a game server");
-       const xq = `${Yq.getHttpUrlFromWebSocketUrl(mq)}${qq}`;
-       return await lq(xq, Eq, {
-         retries: 0
-       })
-     }
-     gq.r(Eq), gq.d(Eq, {
- ... (2 more removed lines; see GitHub link above)
+   4733: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       $b: () => pC,
+       A: () => LC,
+       Bc: () => OC,
+       C: () => IC,
+       Db: () => HC,
+       G: () => JC,
+       Gb: () => dC,
+       H: () => nC,
+       I: () => fC,
+       Jb: () => EC,
+       Lb: () => jC,
+       M: () => QC,
+       O: () => bC,
+       Ob: () => tC,
+ ... (553 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L23-L26` → after: `L574-L671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L574-L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/89.js#L574-L671) · [Before (L23-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/89.js#L23-L26)

```diff
-   41219: (qq, Eq, gq) => {
-     gq.r(Eq), gq.d(Eq, {
-       WorldCodeAiPanel: () => CB,
-       default: () => IB
+   4727: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       $: () => BC,
+       $d: () => Pz,
+       Ac: () => QC.Gb,
+       B: () => YC,
+       Bb: () => zz,
+       Bc: () => QC.Jb,
+       C: () => nC,
+       Cb: () => OC,
+       Cd: () => Fz,
+       Dd: () => sC,
+       Eb: () => QC.W,
+       Ec: () => QC.Rb,
+       Fb: () => Zz,
+       G: () => HC,
+ ... (82 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L28-L118` → after: `L673-L677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L673-L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/89.js#L673-L677) · [Before (L28-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/89.js#L28-L118)

```diff
-     var Yq = gq(57),
-       lq = gq(1018),
-       Oq = gq.n(lq),
-       mq = gq(1070);
- 
-     function xq(qq) {
-       let {
-         title: Eq,
-         children: gq,
-         isCalm: lq = !1,
-         isElsewhere: xq = !1,
-         defaultOpen: Aq = !1,
-         isOpen: cq,
-         onToggle: uq,
-         className: Bq
-       } = qq;
- ... (75 more removed lines; see GitHub link above)
+     var QC = ZC(4733),
+       wC = ZC(2348);
+     const bC = Math.round(1e3 / QC.yc),
+       nC = 4,
+       fC = 2;
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L120-L139` → after: `L679-L680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L679-L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/89.js#L679-L680) · [Before (L120-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/89.js#L120-L139)

```diff
-     function bq(qq, Eq, gq) {
-       if (0 === Eq.length) return null;
-       let Yq = null;
-       for (let lq = 0; lq + Eq.length <= qq.length; lq++) {
-         if (Eq.every(((Eq, Yq) => gq(qq[lq + Yq].text) === Eq))) {
-           if (Yq) return {
-             ...Yq,
-             isOnly: !1
-           };
-           const gq = qq[lq + Eq.length - 1];
-           Yq = {
-             from: qq[lq].from,
-             to: gq.from + gq.text.length
-           }
-         }
-       }
- ... (4 more removed lines; see GitHub link above)
+     function oC() {
+       return crypto.getRandomValues(new Uint32Array(fC))
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L141-L152` → after: `L682-L699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L682-L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/89.js#L682-L699) · [Before (L141-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/89.js#L141-L152)

```diff
- 
-     function iq(qq, Eq) {
-       if ("" === Eq.trim()) return null;
-       const gq = hq(qq),
-         Yq = function(qq) {
-           return qq.split("\n").map((qq => qq.trim())).filter(((qq, Eq, gq) => "" !== qq || Eq > 0 && Eq < gq.length - 1))
-         }(Eq),
-         lq = bq(gq, Yq, (qq => qq.trim()));
-       if (null !== lq) return {
-         from: lq.from,
-         to: lq.to,
-         isLoose: !lq.isOnly
+     const qC = {
+         Ok: 0,
+         Errors: 1,
+         Fatal: 2
+       },
+       FC = 16,
+       WC = {
+         Draws: 1,
+         NetAll: 2,
+         StopForSends: 4
+       },
+       NC = 3,
+       MC = {
+         ShowFog: 1,
+         Lighting: 2,
+         ChunkFade: 4,
+ ... (2 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L447-L453` → after: `L703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/89.js#L703) · [Before (L447-L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/89.js#L447-L453)

```diff
-       let Eq = qq.replace(/\s+/g, " ").trim();
-       if ("" === Eq || EE.test(Eq)) return null;
-       if (Eq.length > qE) {
-         const qq = Eq.slice(0, qE);
-         Eq = `${qq.slice(0,Math.max(qq.lastIndexOf(" "),60)).trimEnd()}\u2026`
-       }
-       return Eq.charAt(0).toUpperCase() + Eq.slice(1)
+       return (CC.nametagsHidden ? IC.NametagsHidden : 0) | (CC.crouchToggle ? IC.CrouchToggle : 0) | (CC.bhopDisabled ? IC.BhopDisabled : 0) | (CC.disableBobbing ? IC.DisableBobbing : 0) | (CC.ezTowering ? IC.EzTowering : 0) | (CC.ezBridging ? IC.EzBridging : 0) | (CC.showChunkBo … [truncated]
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L455` → after: `L705-L739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L705-L739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/89.js#L705-L739) · [Before (L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/89.js#L455)

```diff
-     const YE = /(?:===?\s*|\bcase\s+|startsWith\(\s*)["'`]\/?([a-zA-Z][\w-]{0,20})/g;
+     const SC = {
+         Flags: 0,
+         PhysicsVersion: 1,
+         InbuiltOverwritten: 2,
+         AltComplete: 3,
+         ProbeUsedProp: 4
+       },
+       pC = {
+         Ready: 1,
+         SendFnReplaced: 2,
+         Butto: 4,
+         IdentityChanged: 32,
+         CheckFuncHit: 128,
+         OriginStackHit: 256
+       },
+       PC = {
+ ... (19 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L458-L460` → after: `L742-L747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L742-L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/89.js#L742-L747) · [Before (L458-L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/89.js#L458-L460)

```diff
-       var Eq, gq;
-       const Yq = null === (Eq = /\(([^)]*)\)/.exec(qq)) || void 0 === Eq || null === (gq = Eq[1].split(",")[1]) || void 0 === gq ? void 0 : gq.trim();
-       return Yq && /^[A-Za-z_$][\w$]*$/.test(Yq) ? [...qq.matchAll(/\b([A-Za-z_$][\w$]*)\s*\(([^()]*)\)/g)].flatMap((qq => qq[2].split(",").some((qq => qq.trim() === Yq)) ? [qq[1]] : [])) : []
+       const zC = {
+         off: 0,
+         lit: MC.CellLight,
+         all: MC.CellLight | MC.CellLightUnlit
+       } [CC.cellLight];
+       return (CC.showFog ? MC.ShowFog : 0) | (CC.lighting ? MC.Lighting : 0) | (CC.chunkFade ? MC.ChunkFade : 0) | zC
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L464-L549` → after: `L790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/89.js#L790) · [Before (L464-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/89.js#L464-L549)

```diff
-       const gq = new Set,
-         Yq = new Set,
-         lq = new Set,
-         Oq = Object.values(qq).map((qq => {
-           const Eq = Uq(qq),
-             gq = Eq.filter((qq => "playerCommand" === qq.name)).map((Eq => qq.slice(Eq.from, Eq.to)));
-           return {
-             text: qq,
-             found: Eq,
-             own: gq
-           }
-         })),
-         mq = new Set(Oq.flatMap((qq => {
-           let {
-             own: Eq
-           } = qq;
- ... (70 more removed lines; see GitHub link above)
+       return (CC | zC << 8) >>> 0
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L553-L554` → after: `L794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/89.js#L794) · [Before (L553-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/89.js#L553-L554)

```diff
-       const Eq = qq.split(/\n|\|/).map((qq => qq.replace(/^\s*(?:[-*\u2022]|\d+[.)]|step\s*\d+[:.)]?)\s*/i, "").replace(/\s+/g, " ").trim())).filter((qq => "" !== qq)).slice(0, 5).map((qq => qq.length > 90 ? `${qq.slice(0,89).trimEnd()}\u2026` : qq));
-       return Eq.length >= 2 ? Eq : []
+       return 255 & CC
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L559` → after: `L798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/89.js#L798) · [Before (L559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/89.js#L559)

```diff
-       return qq.replace(/^on/, "").replace(/^player/i, "").toLowerCase()
+       return CC >>> 8
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L563-L566` → after: `L802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/89.js#L802) · [Before (L563-L566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/89.js#L563-L566)

```diff
-       const Eq = new Set;
-       for (const gq of qq.matchAll(/^(?:async\s+)?function\s+([A-Za-z_$][\w$]*)\s*\(/gm)) Eq.add(gq[1]);
-       for (const gq of qq.matchAll(/^([A-Za-z_$][\w$]*)\s*=\s*(?:async\s+)?(?:function\b|\([^)]*\)\s*=>|[A-Za-z_$][\w$]*\s*=>)/gm)) Eq.add(gq[1]);
-       return [...Eq]
+       return CC + 3 & -4
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L568-L599` → after: `L804-L815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L804-L815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/89.js#L804-L815) · [Before (L568-L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/89.js#L568-L599)

```diff
- 
-     function dE(qq, Eq) {
-       let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
-       const Yq = new Set(Eq),
-         lq = new Map;
-       for (const Bq of Eq) {
-         var Oq;
-         const qq = aE(Bq);
-         lq.set(qq, [...null !== (Oq = lq.get(qq)) && void 0 !== Oq ? Oq : [], Bq])
-       }
-       const mq = VE(qq),
-         xq = new Set(VE(gq)),
-         Aq = [];
-       let cq = qq;
-       for (const Bq of mq) {
-         var uq;
- ... (16 more removed lines; see GitHub link above)
+     const uC = 16777216,
+       rC = 20;
+     const sC = 8,
+       TC = 8,
+       aC = 16777216,
+       tC = {
+         JobResult: 1,
+         WorkerStarted: 2,
+         WorkerLost: 3,
+         WorldgenResult: 4,
+         WorldgenStarted: 5,
+         WorldgenLost: 6
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L603-L604` → after: `L818-L822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L818-L822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/89.js#L818-L822) · [Before (L603-L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/89.js#L603-L604)

```diff
-         type: "string",
-         description: "A few plain words for the creator on what this change does, under 80 characters"
+         Ok: 0,
+         Refused: 1,
+         Trapped: 2,
+         NotHeld: 3,
+         HeapRefused: 4
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L607-L610` → after: `L826-L827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L826-L827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/89.js#L826-L827) · [Before (L607-L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/89.js#L607-L610)

```diff
-         readOnlyHint: !0,
-         destructiveHint: !1,
-         idempotentHint: !0,
-         openWorldHint: !1
+         Lost: 0,
+         Gone: 1
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L612-L1078` → after: `L829-L835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L829-L835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/89.js#L829-L835) · [Before (L612-L1078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/89.js#L612-L1078)

```diff
-       QE = [{
-         name: "write_file",
-         title: "Write a file",
-         description: "Replaces a file with new code, or makes a new file",
-         inputSchema: {
-           type: "object",
-           properties: {
-             path: {
-               type: "string",
-               description: "The file's path, e.g. index.js"
-             },
-             why: oE,
-             content: {
-               type: "string",
-               description: "The whole new file"
-             }
- ... (451 more removed lines; see GitHub link above)
+       LC = {
+         Init: 1,
+         Mesh: 2,
+         WorldgenSeed: 3,
+         Generate: 4,
+         Retire: 5
+       };
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L1081-L1083` → after: `L838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/89.js#L838) · [Before (L1081-L1083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/89.js#L1081-L1083)

```diff
-       const Eq = QE.find((Eq => Eq.name === qq));
-       if (!Eq) throw new Error(`No AI Helper tool ${qq}`);
-       return Eq
+       return CC === LC.WorldgenSeed || CC === LC.Generate
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L1085-L1088` → after: `L840-L912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L840-L912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/89.js#L840-L912) · [Before (L1085-L1088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/89.js#L1085-L1088)

```diff
-     const rE = QE.map((qq => qq.name)).filter((qq => "plan" !== qq && "remember" !== qq)).join("|"),
-       vE = new RegExp(String.raw`^(?:\s*(?:We(?:'ll|'d| will| need to| should| must| can(?!'t))|Will use|Need to|Simpler:)(?:[^\n.]*\.(?=[A-Z])|[^\n]*(?:\n+|$))|\s*(?:Now,? )?(?:I'll |I will |[Ll]et's |[Ll]et me )?(?:[Ww]rite|[Mm]ake|[Ss]end|[Oo]utput|[Pp]roduce|[Uu]se|[Dd]o|[Cc] … [truncated]
-       hE = [new RegExp(String.raw`(?:^|[^\w"</=.])(?:${rE})\b(?!\s*\()`), /\btool calls?\b|^(?:so,? )?(?:(?:we(?:'ll| will)?|I'll|let's) (?:produce|output|generate)|now (?:produce|output))\b|^The user (?:wants?|wanted|asks?|asked|requests?|requested|says|said)\b/i, /^We (?:need|h … [truncated]
-       nE = /[.!?](?=[ \t]|[A-Z]|$)|\n|$/g;
+     const BC = 4,
+       OC = 99,
+       kC = {
+         PAIRS_MAX: 16,
+         FIXED_WORDS: 2,
+         PAIR_WORDS: 2,
+         WORDS_MAX: 34
+       },
+       VC = {
+         BYTES: 12,
+         WEBGPU: 1,
+         GL: 2,
+         WEBGPU_LOSSES_MAX: 2,
+         LOST: 0,
+         PIPELINE_FAILED: 1,
+         RESTORE_LOST: 2
+ ... (57 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L1091-L1108` → after: `L915-L917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L915-L917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/89.js#L915-L917) · [Before (L1091-L1108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/89.js#L1091-L1108)

```diff
-       const Eq = qq.trim();
-       return hE.some((qq => qq.test(Eq)))
-     }
- 
-     function iE(qq, Eq) {
-       const gq = qq.replace(vE, "");
-       return Eq ? function(qq) {
-         const Eq = qq.indexOf("```"),
-           gq = -1 === Eq ? qq : qq.slice(0, Eq);
-         let Yq = -1,
-           lq = -1,
-           Oq = 0;
-         for (const mq of gq.matchAll(nE)) {
-           const qq = mq.index + mq[0].length;
-           bE(gq.slice(Oq, qq)) && (Yq = -1 === Yq ? Oq : Yq, lq = qq), Oq = qq
-         }
- ... (2 more removed lines; see GitHub link above)
+       for (const [zC, ZC] of Object.entries(QC.o))
+         if (ZC === CC) return zC;
+       return `Unknown${CC}`
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L1114-L1148` → after: `L921-L930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L921-L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/89.js#L921-L930) · [Before (L1114-L1148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/89.js#L1114-L1148)

```diff
-       const Eq = "string" === typeof qq ? qq.split(/[./:]/).pop() : void 0;
-       return function(qq) {
-         return QE.some((Eq => Eq.name === qq))
-       }(Eq) ? Eq : null
-     }
- 
-     function TE(qq, Eq) {
-       return gq => {
-         const Yq = [];
-         let lq;
-         for (const Aq of gq.matchAll(qq)) {
-           var Oq;
-           const qq = ME(Aq[1]);
-           if (null === qq) continue;
-           const cq = {};
-           for (const gq of Aq[2].matchAll(Eq)) {
- ... (19 more removed lines; see GitHub link above)
+       return {
+         status: CC[QC.O.Status],
+         lastError: CC[QC.O.LastError],
+         lastErrorDetail: CC[QC.O.LastErrorDetail],
+         errorCount: CC[QC.O.ErrorCount],
+         frameIndex: CC[QC.O.FrameIndex],
+         tickIndex: CC[QC.O.TickIndex],
+         renderPending: CC[QC.O.RenderPending],
+         firstView: CC[QC.O.FirstView],
+         chunksCancelled: CC[QC.O.ChunksCancelled]
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L1153-L1179` → after: `L943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/89.js#L943) · [Before (L1153-L1179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/89.js#L1153-L1179)

```diff
-       return qq.replace(/\\(["\\nt])/g, ((qq, Eq) => "n" === Eq ? "\n" : "t" === Eq ? "\t" : Eq))
-     }
- 
-     function SE(qq) {
-       let Eq = null !== qq && void 0 !== qq ? qq : {};
-       if ("string" === typeof Eq) try {
-         Eq = JSON.parse("" === Eq ? "{}" : Eq)
-       } catch {
-         return null
-       }
-       if ("object" !== typeof Eq || null === Eq) return null;
-       const gq = {};
-       for (const [Yq, lq] of Object.entries(Eq)) "string" === typeof lq ? gq[Yq] = fE.has(Yq) && ZE.test(lq) && !lq.includes("\n") ? zE(lq) : lq : "boolean" === typeof lq || "number" === typeof lq ? gq[Yq] = String(lq) : "object" !== typeof lq || null === lq || Array.isArray(lq)  … [truncated]
-       return gq
-     }
- 
- ... (11 more removed lines; see GitHub link above)
+       return "none" !== CC
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L1183-L1249` → after: `L947-L954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L947-L954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/89.js#L947-L954) · [Before (L1183-L1249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/89.js#L1183-L1249)

```diff
-       let gq = qq;
-       for (const {
-           call: Yq,
-           index: lq
-         }
-         of Eq) gq = gq.slice(0, lq) + " ".repeat(Yq.source.length) + gq.slice(lq + Yq.source.length);
-       return gq
-     }
-     const LE = new RegExp(`\\b(${QE.map((qq=>qq.name)).join("|")})\\s*\\(\\s*(?=\\{)`, "g");
-     const JE = {
-         formatCall: (qq, Eq) => {
-           const gq = Object.fromEntries(Object.entries(Eq).filter((qq => {
-             let [, Eq] = qq;
-             return void 0 !== Eq
-           })));
-           return `${qq}(${JSON.stringify(gq)})`
- ... (51 more removed lines; see GitHub link above)
+       if (!CC) return "none";
+       switch (zC) {
+         case QC.eb.Drawn:
+           return "drawn";
+         case QC.eb.Paced:
+           return "paced";
+         default:
+           return "skipped"
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L1261-L1280` → after: `L959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/89.js#L959) · [Before (L1261-L1280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/89.js#L1261-L1280)

```diff
-       const Eq = [];
-       let gq = qq.indexOf("{");
-       for (; - 1 !== gq;) {
-         const Yq = pE(qq, gq);
-         let lq = [];
-         if (null !== Yq) try {
-           lq = UE(JSON.parse(qq.slice(gq, Yq)))
-         } catch {}
-         if (null !== Yq && lq.length > 0) {
-           const Oq = qq.slice(gq, Yq);
-           Eq.push(...lq.map((qq => ({
-             call: {
-               ...qq,
-               source: Oq
-             },
-             index: gq
- ... (4 more removed lines; see GitHub link above)
+       return "drawn" === CC
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/90.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/90.js` (22 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e)

#### 1. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L4` → after: `L4-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L4-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/90.js#L4-L23) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/90.js#L4)

```diff
-   40997: (qq, Eq, gq) => {
+   41278: (CC, zC, ZC) => {
+     async function QC(CC, zC) {
+       const [{
+         clientSideServerUrls: QC
+       }, {
+         postJsonWithMetricsCookiesAndJsonResponse: wC
+       }, {
+         gameBridge: bC
+       }] = await Promise.all([Promise.resolve().then((() => ZC(1149))), Promise.resolve().then((() => ZC(1078))), Promise.resolve().then((() => ZC(1840)))]), nC = bC.latest("connectedGame").websocketUrl;
+       if (!nC) throw new Error("AI Helper: not connected to a game server");
+       const fC = `${QC.getHttpUrlFromWebSocketUrl(nC)}${CC}`;
+       return await wC(fC, zC, {
+         retries: 0
+       })
+     }
+     ZC.r(zC), ZC.d(zC, {
+ ... (4 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L6-L129` → after: `L25-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L25-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/90.js#L25-L26) · [Before (L6-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/90.js#L6-L129)

```diff
-       DOCS_AGENT_PART_CHARS: () => SE.e,
-       DOCS_LLMS_FULL_TXT_PATH: () => SE.g,
-       DOCS_LLMS_TXT_PATH: () => SE.i,
-       DOCS_LLMS_TXT_URL: () => SE.l,
-       ROOT_LLMS_TXT_PATH: () => SE.o,
-       allGamemodeSettings: () => Yq.c,
-       arcadeModeStaticConfig: () => Vq.c,
-       arenaStaticConfig: () => lE,
-       backroomsStaticConfig: () => YE.b,
-       battleBoxStaticConfig: () => AE,
-       bedwarsStaticConfig: () => iq.e,
-       bloxdAggregatorConfig: () => xq.c,
-       bloxdPreprodAggregatorConfig: () => Aq.d,
-       bloxdStagingAggregatorConfig: () => cq.c,
-       bridgeBattleStaticConfig: () => Jq.c,
-       captureTheFlagStaticConfig: () => NE,
- ... (108 more removed lines; see GitHub link above)
+       WorldCodeAiPanel: () => FN,
+       default: () => WN
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L131` → after: `L28-L542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L28-L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/90.js#L28-L542) · [Before (L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/90.js#L131)

```diff
-     var Yq = gq(729);
+     var QC = ZC(48),
+       wC = ZC(1002),
+       bC = ZC.n(wC),
+       nC = ZC(1056);
+ 
+     function fC(CC) {
+       let {
+         title: zC,
+         children: ZC,
+         isCalm: wC = !1,
+         isElsewhere: fC = !1,
+         defaultOpen: oC = !1,
+         isOpen: qC,
+         onToggle: FC,
+         className: WC
+       } = CC;
+ ... (499 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L135-L187` → after: `L546-L595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L546-L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/90.js#L546-L595) · [Before (L135-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/90.js#L135-L187)

```diff
-       return null !== (Eq = null === (gq = (0, Yq.m)(qq)) || void 0 === gq ? void 0 : gq.defaultListedVariation) && void 0 !== Eq ? Eq : qq
-     }
-     var Oq = gq(985),
-       mq = gq(1006),
-       xq = gq(726),
-       Aq = gq(716),
-       cq = gq(721),
-       uq = gq(713),
-       Bq = gq(707),
-       Wq = gq(738),
-       Nq = gq(763),
-       aq = gq(744),
-       Vq = gq(752),
-       dq = gq(755),
-       jq = gq(758),
-       Hq = gq(770),
- ... (37 more removed lines; see GitHub link above)
+       const QC = CC.trim().split(/\s+/).length,
+         wC = new Set((null !== (zC = CC.match(qz)) && void 0 !== zC ? zC : []).map((CC => CC.toLowerCase().replace(/s$/, "")))).size,
+         bC = (null !== (ZC = CC.match(Fz)) && void 0 !== ZC ? ZC : []).length;
+       return wC >= 2 && bC >= 2 || QC >= 30 && bC >= 3
+     }
+ 
+     function Nz(CC) {
+       const zC = CC.split(/\n|\|/).map((CC => CC.replace(/^\s*(?:[-*\u2022]|\d+[.)]|step\s*\d+[:.)]?)\s*/i, "").replace(/\s+/g, " ").trim())).filter((CC => "" !== CC)).slice(0, 5).map((CC => CC.length > 90 ? `${CC.slice(0,89).trimEnd()}\u2026` : CC));
+       return zC.length >= 2 ? zC : []
+     }
+     var Mz = ZC(4804);
+ 
+     function gz(CC) {
+       return CC.replace(/^on/, "").replace(/^player/i, "").toLowerCase()
+     }
+ 
+ ... (34 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L189-L298` → after: `L597-L599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L597-L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/90.js#L597-L599) · [Before (L189-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/90.js#L189-L298)

```diff
-         type: "Arena",
-         title: "Battle Arena",
-         description: "Fight for glory in a 2v2v2v2v2v2v2v2 arena!",
-         smallPicture: "battle_arena",
-         thumbnailUseLongRatio: !1,
-         badges: [{
-           type: "limitedTimeGame"
-         }],
-         useRejoinLastLobbyButton: !1,
-         additionalMetaTags: [],
-         gameMonId: "wzap3u9jp9ki78o4dohtfdfnklxyci19"
-       },
-       OE = {
-         type: "Arena",
-         title: "Goldrush",
-         description: "Who is the best miner?\nMine gold and deposit it at your spawn, but beware of others killing you",
- ... (94 more removed lines; see GitHub link above)
+         functions: "api",
+         callbacks: "callback",
+         "client options": "clientOption"
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L301-L317` → after: `L603-L604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L603-L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/90.js#L603-L604) · [Before (L301-L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/90.js#L301-L317)

```diff
-         type: "Arena",
-         title: "Conqueror",
-         description: "Make tactical choices to conquer your enemies!",
-         smallPicture: "duos_combined_pic",
-         thumbnailUseLongRatio: !1,
-         badges: [],
-         useRejoinLastLobbyButton: !1,
-         additionalMetaTags: [],
-         firebaseConfig: {
-           apiKey: "AIzaSyCJ-G6m_NyA3P021v-ugDmMmkcKysUebSE",
-           projectId: "bloxd-ee1aa",
-           storageBucket: "bloxd-ee1aa.appspot.com",
-           messagingSenderId: "758847442742",
-           appId: "1:758847442742:web:c3d095738f8bde05f02d97",
-           measurementId: "G-SCYFMGGGEW"
-         },
- ... (1 more removed lines; see GitHub link above)
+         type: "string",
+         description: "A few plain words for the creator on what this change does, under 80 characters"
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L320-L330` → after: `L607-L610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L607-L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/90.js#L607-L610) · [Before (L320-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/90.js#L320-L330)

```diff
-         type: "Arena",
-         title: "Capture the Flag",
-         description: "Capture the flag to win! It's that simple!",
-         smallPicture: "bloxd_capture_the_flag_thumbnail_small",
-         largePicture: "bloxd_capture_the_flag_thumbnail_large",
-         thumbnailUseLongRatio: !1,
-         badges: [{
-           type: "limitedTimeGame"
-         }],
-         useRejoinLastLobbyButton: !1,
-         additionalMetaTags: []
+         readOnlyHint: !0,
+         destructiveHint: !1,
+         idempotentHint: !0,
+         openWorldHint: !1
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L332-L410` → after: `L612-L1073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L612-L1073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/90.js#L612-L1073) · [Before (L332-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/90.js#L332-L410)

```diff
-       aE = {
-         type: "Survival",
-         title: "Survival Royale",
-         description: "Fortnite but way better ofc ;)",
-         smallPicture: "survivalRoyale",
-         thumbnailUseLongRatio: !1,
-         badges: [],
-         useRejoinLastLobbyButton: !1,
-         additionalMetaTags: [],
-         gameMonId: "wzap3u9jp9ki78o4dohtfdfnklxyci19"
-       },
-       VE = {
-         type: "Parkour",
-         title: "Parkour Builder",
-         description: "Race through a parkour map with a twist - each round, you get to add a new block to the course!",
-         smallPicture: "uchThumbnail",
- ... (63 more removed lines; see GitHub link above)
+       xz = [{
+         name: "write_file",
+         title: "Write a file",
+         description: "Replaces a file with new code, or makes a new file",
+         inputSchema: {
+           type: "object",
+           properties: {
+             path: {
+               type: "string",
+               description: "The file's path, e.g. index.js"
+             },
+             why: Rz,
+             content: {
+               type: "string",
+               description: "The whole new file"
+             }
+ ... (446 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L412-L413` → after: `L1075-L1077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR1075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L1075-L1077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/90.js#L1075-L1077) · [Before (L412-L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/90.js#L412-L413)

```diff
-     function nE(qq, Eq, gq) {
-       return `<${qq}><h2>${(0,vE.f)(Eq)}</h2>${gq}</${qq}>`
+     function Jz(CC) {
+       var zC;
+       return !0 === (null === (zC = Iz(CC)._meta) || void 0 === zC ? void 0 : zC.isLookup)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L417` → after: `L1081-L1083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR1081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L1081-L1083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/90.js#L1081-L1083) · [Before (L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/90.js#L417)

```diff
-       return qq.map((qq => `<p>${(0,vE.f)(qq)}</p>`)).join("")
+       const zC = xz.find((zC => zC.name === CC));
+       if (!zC) throw new Error(`No AI Helper tool ${CC}`);
+       return zC
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L421` → after: `L1091-L1092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR1091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L1091-L1092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/90.js#L1091-L1092) · [Before (L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/90.js#L421)

```diff
-       return `<ul>${qq.map((qq=>`<li>${qq}</li>`)).join("")}</ul>`
+       const zC = CC.trim();
+       return ez.some((CC => CC.test(zC)))
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L424-L425` → after: `L1095-L1108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR1095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L1095-L1108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/90.js#L1095-L1108) · [Before (L424-L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/90.js#L424-L425)

```diff
-     function ZE(qq) {
-       return iE(qq.map(vE.f))
+     function Yz(CC, zC) {
+       const ZC = CC.replace(vz, "");
+       return zC ? function(CC) {
+         const zC = CC.indexOf("```"),
+           ZC = -1 === zC ? CC : CC.slice(0, zC);
+         let QC = -1,
+           wC = -1,
+           bC = 0;
+         for (const nC of ZC.matchAll(hz)) {
+           const CC = nC.index + nC[0].length;
+           Kz(ZC.slice(bC, CC)) && (QC = -1 === QC ? bC : QC, wC = CC), bC = CC
+         }
+         return -1 === wC ? CC : "" !== ZC.slice(wC).trim() ? CC.slice(wC).trimStart() : `${CC.slice(0,QC).trimEnd()}\n${CC.slice(ZC.length)}`.trim()
+       }(ZC) : "" !== ZC.trim() ? ZC : CC
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L428-L433` → after: `L1113-L1117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR1113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L1113-L1117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/90.js#L1113-L1117) · [Before (L428-L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/90.js#L428-L433)

```diff
-     function fE(qq, Eq) {
-       return iE(qq.similarGames.map((qq => {
-         var gq, lq;
-         const Oq = null !== (gq = null === (lq = hE.c[qq]) || void 0 === lq ? void 0 : lq.name) && void 0 !== gq ? gq : Eq(Yq.c[qq].title);
-         return `<a href="${(0,vE.f)((0,vE.x)(qq))}">${(0,vE.f)(Oq)}</a>`
-       })))
+     function Hz(CC) {
+       const zC = "string" === typeof CC ? CC.split(/[./:]/).pop() : void 0;
+       return function(CC) {
+         return xz.some((zC => zC.name === CC))
+       }(zC) ? zC : null
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L435-L447` → after: `L1119-L1149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR1119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L1119-L1149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/90.js#L1119-L1149) · [Before (L435-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/90.js#L435-L447)

```diff
-     async function ME(qq, Eq) {
-       const gq = (0, vE.C)(qq);
-       if (!gq) return null;
-       const Yq = await (0, hE.i)(gq),
-         lq = (0, hE.g)(Yq),
-         Oq = Yq.faq.map((qq => {
-           let {
-             question: Eq,
-             answer: gq
-           } = qq;
-           return `<h3>${(0,vE.f)(Eq)}</h3><p>${(0,vE.f)(gq)}</p>`
-         })).join("");
-       return `<main style="position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%)"><article>${[`<header><h1>${(0,vE.f)(Yq.name)}</h1><p>${(0,vE.f)(Yq.description)}</p></header>`,nE("section",lq.whatIs,bE(Yq.whatIs)),nE("section",lq.howToPlay,bE(Yq.howToPlay)) … [truncated]
+ 
+     function Ez(CC, zC) {
+       return ZC => {
+         const QC = [];
+         let wC;
+         for (const oC of ZC.matchAll(CC)) {
+           var bC;
+           const CC = Hz(oC[1]);
+           if (null === CC) continue;
+           const qC = {};
+           for (const ZC of oC[2].matchAll(zC)) {
+             var nC, fC;
+             qC[null !== (nC = ZC[1]) && void 0 !== nC ? nC : ZC[2]] = null !== (fC = ZC[3]) && void 0 !== fC ? fC : ZC[4]
+           }(null === (bC = wC) || void 0 === bC ? void 0 : bC.call.name) === CC && "" === ZC.slice(wC.index + wC.call.source.length, oC.index).trim() ? QC[QC.length - 1] = {
+             call: {
+               name: CC,
+ ... (15 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L474` → after: `L1153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR1153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L1153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/90.js#L1153) · [Before (L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/90.js#L474)

```diff
-       return qq || "index"
+       return CC.replace(/\\(["\\nt])/g, ((CC, zC) => "n" === zC ? "\n" : "t" === zC ? "\t" : zC))
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L478` → after: `L1157-L1179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR1157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L1157-L1179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/90.js#L1157-L1179) · [Before (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/90.js#L478)

```diff
-       return `/docs/${cq(qq)}.md`
+       let zC = null !== CC && void 0 !== CC ? CC : {};
+       if ("string" === typeof zC) try {
+         zC = JSON.parse("" === zC ? "{}" : zC)
+       } catch {
+         return null
+       }
+       if ("object" !== typeof zC || null === zC) return null;
+       const ZC = {};
+       for (const [QC, wC] of Object.entries(zC)) "string" === typeof wC ? ZC[QC] = mz.has(QC) && dz.test(wC) && !wC.includes("\n") ? lz(wC) : wC : "boolean" === typeof wC || "number" === typeof wC ? ZC[QC] = String(wC) : "object" !== typeof wC || null === wC || Array.isArray(wC)  … [truncated]
+       return ZC
+     }
+ 
+     function cz(CC, zC) {
+       let ZC = 0,
+         QC = !1;
+       for (let wC = zC; wC < CC.length; wC++) {
+ ... (7 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L482` → after: `L1183-L1189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR1183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L1183-L1189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/90.js#L1183-L1189) · [Before (L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/90.js#L482)

```diff
-       return `/docs/${cq(qq)}/${Eq+1}.md`
+       let ZC = CC;
+       for (const {
+           call: QC,
+           index: wC
+         }
+         of zC) ZC = ZC.slice(0, wC) + " ".repeat(QC.source.length) + ZC.slice(wC + QC.source.length);
+       return ZC
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L484` → after: `L1191-L1206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR1191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L1191-L1206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/90.js#L1191-L1206) · [Before (L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/90.js#L484)

```diff
-     const Wq = /^\/docs\/([a-z0-9-]+)(?:\/(\d+))?\.md$/;
+     const rz = new RegExp(`\\b(${xz.map((CC=>CC.name)).join("|")})\\s*\\(\\s*(?=\\{)`, "g");
+     const sz = {
+         formatCall: (CC, zC) => {
+           const ZC = Object.fromEntries(Object.entries(zC).filter((CC => {
+             let [, zC] = CC;
+             return void 0 !== zC
+           })));
+           return `${CC}(${JSON.stringify(ZC)})`
+         },
+         declareTools: CC => CC,
+         callStyle: "Make each call with function calling, its code in full: never write a call, or the code it carries, in your answer's words or in a code fence.",
+         fileResult: (CC, zC, ZC) => `<file path="${CC}"${ZC?' open_in_editor="true"':""}>\n${zC}\n</file>`,
+         editFailure: (CC, zC) => `${CC} failed: ${zC}`,
+         lookupResult: (CC, zC, ZC) => `${CC} ${zC}:\n${ZC}`
+       },
+       Tz = /(?:<\|start\|>\s*assistant\s*)?<\|channel\|>[^<{]*?\bto=([\w./:-]+)[^{]*?(?=\{)/g;
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L487-L490` → after: `L1209-L1386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR1209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L1209-L1386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/90.js#L1209-L1386) · [Before (L487-L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/90.js#L487-L490)

```diff
-       const Eq = Wq.exec(qq);
-       return null === Eq ? null : {
-         name: Eq[1],
-         part: void 0 === Eq[2] ? null : Number(Eq[2])
+       const zC = [];
+       for (const wC of CC.matchAll(Tz)) {
+         const bC = Hz(wC[1]),
+           nC = wC.index + wC[0].length,
+           fC = cz(CC, nC),
+           oC = null === fC ? null : Xz(CC.slice(nC, fC));
+         if (null !== bC && null !== fC && null !== oC) {
+           var ZC, QC;
+           const nC = null !== (ZC = null === (QC = CC.slice(fC).match(/^\s*<\|call\|>/)) || void 0 === QC ? void 0 : QC[0]) && void 0 !== ZC ? ZC : "";
+           zC.push({
+             call: {
+               name: bC,
+               args: oC,
+               source: CC.slice(wC.index, fC + nC.length)
+             },
+             index: wC.index
+ ... (162 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L493` → after: `L1389-L1407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR1389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L1389-L1407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/90.js#L1389-L1407) · [Before (L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/90.js#L493)

```diff
-     const aq = /^(?:\/studio)?\/docs(?:\/([a-z0-9-]+)(?:\/(\d+))?)?\/?$/;
+ 
+     function WZ(CC, zC) {
+       const ZC = [];
+       for (const QC of function(CC) {
+           const zC = zZ(CC),
+             ZC = CZ.filter((CC => CC !== zC));
+           return [Vz[zC], ...CC === zC ? [] : [Vz[CC]], ...ZC.map((CC => Vz[CC])), az, Dz]
+         }(zC)) ZC.push(...QC(uz(CC, ZC)));
+       return ZC.map((CC => {
+         let {
+           call: zC
+         } = CC;
+         return zC
+       }))
+     }
+ 
+ ... (3 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L496-L499` → after: `L1410-L1432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR1410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L1410-L1432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/90.js#L1410-L1432) · [Before (L496-L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/90.js#L496-L499)

```diff
-       const Eq = aq.exec(qq);
-       if (null === Eq) return null;
-       const [, gq = "", Yq] = Eq;
-       return void 0 === Yq ? uq(gq) : Bq(gq, Number(Yq) - 1)
+       return function(CC) {
+         const zC = [...CC.matchAll(nZ)],
+           ZC = [];
+         let QC = 0;
+         for (; QC < zC.length;) {
+           const wC = zC[QC],
+             bC = zC.at(QC + 1);
+           void 0 !== bC && "```" === bC[0] ? (fZ.test(CC.slice(wC.index + wC[0].length, bC.index)) && ZC.push({
+             from: wC.index,
+             to: bC.index + bC[0].length
+           }), QC += 2) : (ZC.push({
+             from: wC.index,
+             to: wC.index + wC[0].length
+           }), QC++)
+         }
+         let wC = CC;
+ ... (7 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L503` → after: `L1436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR1436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L1436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/90.js#L1436) · [Before (L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/90.js#L503)

```diff
-       return `/docsHtml/${cq(qq)}.html`
+       return /^(?:on[A-Z]\w*|tick|playerCommand)$/.test(CC)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/91.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/91.js` (23 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/91.js` (Changed code · before: `L3` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78dR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78d) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/91.js#L2) · [Before (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/91.js#L3)

```diff
- export const ids = [10, 13, 15, 16, 18, 20, 21, 23, 24, 91];
+ export const ids = [91];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/91.js` (Changed code · before: `L5-L25` → after: `L4-L131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78d) · [After (L4-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/91.js#L4-L131) · [Before (L5-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/91.js#L5-L25)

```diff
-   39197: (qq, Eq, gq) => {
-     var Yq = {
-       "./bedwars/bedwarsClient": 39206,
-       "./bridgeBattle/bridgeBattleClient": 39212,
-       "./buildAFactory2/buildAFactory2Client": 38469,
-       "./classic/classicClient": 39221,
-       "./clutch/clutchClient": 39229,
-       "./containmentBreach/containmentBreachClient": 39232,
-       "./cooking/cookingClient": 39331,
-       "./defusal/defusalClient": 39340,
-       "./frontline/frontlineClient": 39349,
-       "./goalRush/goalRushClient": 39353,
-       "./luckyBedwars/luckyBedwarsClient": 39359,
-       "./ninetyNineNights/ninetyNineNightsClient": 39364,
-       "./oneBlock/oneBlockClient": 39368,
-       "./plots/plotsClient": 39374,
- ... (5 more removed lines; see GitHub link above)
+   41087: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       DOCS_AGENT_PART_CHARS: () => Xz.b,
+       DOCS_LLMS_FULL_TXT_PATH: () => Xz.d,
+       DOCS_LLMS_TXT_PATH: () => Xz.g,
+       DOCS_LLMS_TXT_URL: () => Xz.k,
+       ROOT_LLMS_TXT_PATH: () => Xz.m,
+       allGamemodeSettings: () => QC.d,
+       arcadeModeStaticConfig: () => SC.b,
+       arenaStaticConfig: () => wz,
+       backroomsStaticConfig: () => Qz.c,
+       battleBoxStaticConfig: () => oz,
+       bedwarsStaticConfig: () => YC.e,
+       bloxdAggregatorConfig: () => fC.b,
+       bloxdPreprodAggregatorConfig: () => oC.c,
+       bloxdStagingAggregatorConfig: () => qC.c,
+ ... (112 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/91.js` (Changed code · before: `L28-L343` → after: `L134-L410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78dR134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78d) · [After (L134-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/91.js#L134-L410) · [Before (L28-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/91.js#L28-L343)

```diff
-       return Oq(qq).then(gq)
-     }
- 
-     function Oq(qq) {
-       return Promise.resolve().then((() => {
-         if (!gq.o(Yq, qq)) {
-           var Eq = new Error("Cannot find module '" + qq + "'");
-           throw Eq.code = "MODULE_NOT_FOUND", Eq
-         }
-         return Yq[qq]
-       }))
-     }
-     lq.keys = () => Object.keys(Yq), lq.resolve = Oq, lq.id = 39197, qq.exports = lq
-   },
-   38766: (qq, Eq, gq) => {
-     var Yq = {
- ... (300 more removed lines; see GitHub link above)
+       var zC, ZC;
+       return null !== (zC = null === (ZC = (0, QC.k)(CC)) || void 0 === ZC ? void 0 : ZC.defaultListedVariation) && void 0 !== zC ? zC : CC
+     }
+     var bC = ZC(964),
+       nC = ZC(991),
+       fC = ZC(722),
+       oC = ZC(713),
+       qC = ZC(720),
+       FC = ZC(709),
+       WC = ZC(703),
+       NC = ZC(737),
+       MC = ZC(766),
+       gC = ZC(744),
+       SC = ZC(748),
+       pC = ZC(756),
+       PC = ZC(762),
+ ... (261 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/91.js` (Changed code · before: `L346-L458` → after: `L413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78dR413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78d) · [After (L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/91.js#L413) · [Before (L346-L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/91.js#L346-L458)

```diff
-       return new Error("BLOXD VOXEL-SWEEP: non-terminating sweep rejected - " + qq + "[" + gq + "]=" + Eq[gq] + " " + qq + "=[" + Eq[0] + "," + Eq[1] + "," + Eq[2] + "]")
-     }
-     pq.checkInput = Gq, qq.exports = pq
-   },
-   39532: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       d: () => Aq,
-       h: () => Oq,
-       k: () => lq
-     });
-     const Yq = 6e3;
- 
-     function lq(qq, Eq) {
-       return [Math.floor(qq[0] / Eq) * Eq, Math.floor(qq[1] / Eq) * Eq, Math.floor(qq[2] / Eq) * Eq]
-     }
- 
- ... (97 more removed lines; see GitHub link above)
+       return `<${CC}><h2>${(0,vz.e)(zC)}</h2>${ZC}</${CC}>`
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/91.js` (Changed code · before: `L462-L476` → after: `L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78dR417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78d) · [After (L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/91.js#L417) · [Before (L462-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/91.js#L462-L476)

```diff
-       return null !== Nq(Wq(qq))
-     }
-     var Vq = gq(1070);
-     const dq = [{
-       id: "webm",
-       label: "WebM",
-       description: "Usually less screen tearing, but may not play in all media players."
-     }, {
-       id: "mp4",
-       label: "MP4",
-       description: "Works in more players, but may show graphical glitches on some devices."
-     }];
- 
-     function jq() {
-       return aq("webm") ? "webm" : aq("mp4") ? "mp4" : "webm"
+       return CC.map((CC => `<p>${(0,vz.e)(CC)}</p>`)).join("")
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/91.js` (Changed code · before: `L480-L510` → after: `L421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78dR421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78d) · [After (L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/91.js#L421) · [Before (L480-L510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/91.js#L480-L510)

```diff
-       let {
-         cards: Eq
-       } = qq;
-       return (0, Vq.jsx)("div", {
-         className: "ReplayVideoExportOptionCards",
-         children: Eq.map((qq => (0, Vq.jsxs)("div", {
-           className: "ReplayVideoExportOptionColumn",
-           children: [(0, Vq.jsx)("div", {
-             className: xq()("ReplayVideoExportOptionCard", {
-               Selected: qq.selected,
-               Disabled: qq.disabled
-             }),
-             onClick: () => {
-               qq.disabled || qq.onSelect()
-             },
-             children: (0, Vq.jsxs)("div", {
- ... (15 more removed lines; see GitHub link above)
+       return `<ul>${CC.map((CC=>`<li>${CC}</li>`)).join("")}</ul>`
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/91.js` (Changed code · before: `L633-L667` → after: `L424-L425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78dR424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78d) · [After (L424-L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/91.js#L424-L425) · [Before (L633-L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/91.js#L633-L667)

```diff
-     function rq() {
-       return function() {
-         const qq = (0, yq.c)();
-         for (const {
-             group: Eq,
-             dataAttr: gq
-           }
-           of Qq.e)
-           if (gq && qq[Eq]) return !0;
-         return !1
-       }() ? function() {
-         var qq;
-         return "function" === typeof(null === (qq = navigator.mediaDevices) || void 0 === qq ? void 0 : qq.getDisplayMedia)
-       }() ? {
-         canIncludeUi: !0,
-         includeUiDisabledReason: null
- ... (19 more removed lines; see GitHub link above)
+     function dz(CC) {
+       return Yz(CC.map(vz.e))
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/91.js` (Changed code · before: `L672-L673` → after: `L428-L433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78dR428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78d) · [After (L428-L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/91.js#L428-L433) · [Before (L672-L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/91.js#L672-L673)

```diff
-     function bq(qq) {
-       qq.holdInput(!1), (0, hq.c)(!1)
+     function mz(CC, zC) {
+       return Yz(CC.similarGames.map((CC => {
+         var ZC, wC;
+         const bC = null !== (ZC = null === (wC = ez.c[CC]) || void 0 === wC ? void 0 : wC.name) && void 0 !== ZC ? ZC : zC(QC.d[CC].title);
+         return `<a href="${(0,vz.e)((0,vz.v)(CC))}">${(0,vz.e)(bC)}</a>`
+       })))
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/91.js` (Changed code · before: `L675-L688` → after: `L435-L440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78dR435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78d) · [After (L435-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/91.js#L435-L440) · [Before (L675-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/91.js#L675-L688)

```diff
-     async function iq(qq) {
-       var Eq, gq;
-       if ((0, hq.b)() || nq) return;
-       const Oq = qq();
-       if (!Oq) return;
-       nq = !0;
-       let mq = null;
-       const xq = Oq.playbackMarkInTick,
-         {
-           canIncludeUi: Aq,
-           includeUiDisabledReason: cq
-         } = rq();
-       try {
-         mq = await async function(qq) {
+     async function Hz(CC, zC) {
+       const ZC = (0, vz.A)(CC);
+       if (!ZC) return null;
+       const QC = await (0, ez.k)(ZC),
+         wC = (0, ez.g)(QC),
+         bC = QC.faq.map((CC => {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/91.js` (Changed code · before: `L690-L692` → after: `L442-L443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78dR442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78d) · [After (L442-L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/91.js#L442-L443) · [Before (L690-L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/91.js#L690-L692)

```diff
-             hasPlaybackMark: Eq,
-             canIncludeUi: gq,
-             includeUiDisabledReason: Yq
+             question: zC,
+             answer: ZC
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/91.js` (Changed code · before: `L694-L914` → after: `L445-L447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78dR445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78d) · [After (L445-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/91.js#L445-L447) · [Before (L694-L914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/91.js#L694-L914)

```diff
-           const Oq = {
-               options: null
-             },
-             mq = lq.NotificationProvider.showCustomPopup({
-               body: qq => (0, Vq.jsx)(oq, {
-                 hasPlaybackMark: Eq,
-                 canIncludeUi: gq,
-                 includeUiDisabledReason: Yq,
-                 selectionRef: Oq,
-                 closePopup: qq
-               }),
-               disableExitButton: !0,
-               disablePressBackgroundToClose: !0,
-               unlockPointerKey: "replayVideoExportOptions"
-             });
-           return "notificationTornDown" === await mq.getResult() ? null : Oq.options
- ... (205 more removed lines; see GitHub link above)
+           return `<h3>${(0,vz.e)(zC)}</h3><p>${(0,vz.e)(ZC)}</p>`
+         })).join("");
+       return `<main style="position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%)"><article>${[`<header><h1>${(0,vz.e)(QC.name)}</h1><p>${(0,vz.e)(QC.description)}</p></header>`,hz("section",wC.whatIs,Kz(QC.whatIs)),hz("section",wC.howToPlay,Kz(QC.howToPlay)) … [truncated]
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/91.js` (Changed code · before: `L917` → after: `L453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78dR453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78d) · [After (L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/91.js#L453) · [Before (L917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/91.js#L917)

```diff
-   39511: (qq, Eq, gq) => {
+   4755: (CC, zC, ZC) => {
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/91.js` (Changed code · before: `L919-L920` → after: `L455-L457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78dR455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78d) · [After (L455-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/91.js#L455-L457) · [Before (L919-L920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/91.js#L919-L920)

```diff
-       e: () => Wq,
-       i: () => aq,
+       b: () => wC,
+       d: () => oC,
+       g: () => bC,
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/91.js` (Changed code · before: `L925-L1083` → after: `L462-L464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78dR462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78d) · [After (L462-L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/91.js#L462-L464) · [Before (L925-L1083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/91.js#L925-L1083)

```diff
-       s: () => uq,
-       w: () => Vq
-     });
-     var Yq = gq(1926),
-       lq = gq(31),
-       Oq = gq(1933);
-     const mq = (0, Oq.j)((function() {
-         var qq, Eq, gq, lq;
-         return {
-           health: null !== (qq = Yq.c.get("_health")) && void 0 !== qq ? qq : null,
-           maxHealth: null !== (Eq = Yq.c.get("_totalMaxHealth")) && void 0 !== Eq ? Eq : null,
-           shield: null !== (gq = Yq.c.get("_shield")) && void 0 !== gq ? gq : null,
-           maxShield: null !== (lq = Yq.c.get("maxShield")) && void 0 !== lq ? lq : null
-         }
-       }), [], (0, Oq.h)("_health", "_totalMaxHealth", "_shield", "maxShield")),
-       xq = [{
- ... (143 more removed lines; see GitHub link above)
+       t: () => WC,
+       w: () => SC,
+       y: () => MC
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/91.js` (Changed code · before: `L1085-L1145` → after: `L466-L471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78dR466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78d) · [After (L466-L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/91.js#L466-L471) · [Before (L1085-L1145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/91.js#L1085-L1145)

```diff
-     gq(36549);
-     var lq = gq(38638),
-       Oq = gq(9419),
-       mq = gq(36781),
-       xq = gq(307);
- 
-     function Aq(qq, Eq) {
-       return {
-         item: qq,
-         scale: Eq,
-         billboard: arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
-         thrownRole: !0
-       }
-     }
-     var cq = gq(38689),
-       uq = gq(9379),
- ... (45 more removed lines; see GitHub link above)
+     var QC = ZC(1520);
+     const wC = 24e3,
+       bC = "/docs/llms.txt",
+       nC = `${QC.d}${bC}`,
+       fC = "/llms.txt",
+       oC = "/docs/llms-full.txt";
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/91.js` (Changed code · before: `L1148-L1196` → after: `L474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78dR474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78d) · [After (L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/91.js#L474) · [Before (L1148-L1196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/91.js#L1148-L1196)

```diff
-       const Eq = new Set,
-         gq = qq => {
-           const Yq = [],
-             lq = new Set;
-           for (const Oq of qq) {
-             const qq = Oq.hasGeometry && 0 === Oq.children.length;
-             if (!qq || !lq.has(Oq.name)) {
-               if (Eq.has(Oq.name.toLowerCase())) throw new Error(`Two nodes are named ${Oq.name}`);
-               if (Eq.add(Oq.name.toLowerCase()), qq) lq.add(Oq.name), Yq.push(Oq.name);
-               else {
-                 if (Oq.hasGeometry) throw new Error(`Mesh ${Oq.name} has nodes under it: put them in a group beside it`);
-                 Yq.push(0 === Oq.children.length ? {
-                   nodeName: Oq.name
-                 } : {
-                   nodeName: Oq.name,
-                   children: gq(Oq.children)
- ... (33 more removed lines; see GitHub link above)
+       return CC || "index"
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/91.js` (Changed code · before: `L1200-L1203` → after: `L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78dR478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78d) · [After (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/91.js#L478) · [Before (L1200-L1203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/91.js#L1200-L1203)

```diff
-       return qq.reduce(((qq, Eq) => {
-         var gq;
-         return qq + ("string" === typeof Eq ? 1 : (void 0 === Eq.collapsesTo ? 0 : 1) + mE(null !== (gq = Eq.children) && void 0 !== gq ? gq : []))
-       }), 0)
+       return `/docs/${qC(CC)}.md`
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/91.js` (Changed code · before: `L1207-L2039` → after: `L482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78dR482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78d) · [After (L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/91.js#L482) · [Before (L1207-L2039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/91.js#L1207-L2039)

```diff
-       const gq = qq => qq.getChildren(),
-         Yq = qq => {
-           if ("GJ" in qq && !0 === qq.GJ) throw new Error(`${qq.name} is drawn as an instance of another mesh`);
-           return "getTotalVertices" in qq && qq.getTotalVertices() > 0
-         },
-         lq = qq => {
-           var Eq, lq;
-           return !Yq(qq) || gq(qq).length > 0 ? null : `${null!==(Eq=null===(lq=qq.material)||void 0===lq?void 0:lq.uniqueId)&&void 0!==Eq?Eq:"none"} ${qq.getVerticesDataKinds().sort().join(",")}`
-         };
-       ! function(qq, Eq, gq) {
-         const Yq = new Set,
-           lq = qq => {
-             for (const gq of qq) Yq.add(gq.name.toLowerCase()), lq(Eq(gq))
-           };
-         lq(qq);
-         const Oq = new Set,
- ... (817 more removed lines; see GitHub link above)
+       return `/docs/${qC(CC)}/${zC+1}.md`
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/91.js` (Changed code · before: `L2041-L2042` → after: `L484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78dR484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78d) · [After (L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/91.js#L484) · [Before (L2041-L2042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/91.js#L2041-L2042)

```diff
-     var GE = qq => {};
-     var LE = gq(39476);
+     const NC = /^\/docs\/([a-z0-9-]+)(?:\/(\d+))?\.md$/;
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/91.js` (Changed code · before: `L2045-L2067` → after: `L487-L490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78dR487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78d) · [After (L487-L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/91.js#L487-L490) · [Before (L2045-L2067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/91.js#L2045-L2067)

```diff
-       return qq(new LE([0, 0, 0], [1, 1, 1]), 1, 1, 0, 1, null, !1)
-     }
- 
-     function kE() {
-       this.AW = .1, this.fluidDrag = .4, this.cW = 2, this.gravity = [0, -10, 0], this.minBounceImpulse = .5
-     }
-     class RE {
-       constructor(qq, Eq, gq) {
-         qq = Object.assign(new kE, qq), this.gravity = qq.gravity, this.AW = qq.AW, this.cW = qq.cW, this.fluidDrag = qq.fluidDrag, this.minBounceImpulse = qq.minBounceImpulse, this.bodies = [], this._tickNext = 0, this._tickEnd = 0, this.YW = qq.YW, this.sF = qq.sF, this.rollbac … [truncated]
-           return new pE(qq, Eq, gq, Yq, lq, Oq, mq)
-         })), this.testSolid = Eq, this.testFluid = gq
-       }
-       OW(qq, Eq, gq, Yq, lq, Oq) {
-         qq = qq || new LE([0, 0, 0], [1, 1, 1]), "undefined" == typeof Eq && (Eq = 1), "undefined" == typeof gq && (gq = 1), "undefined" == typeof Yq && (Yq = 0), "undefined" == typeof lq && (lq = 1);
-         var mq = this.Qs(qq, Eq, gq, Yq, lq, Oq);
-         return this.bodies.push(mq), mq
- ... (7 more removed lines; see GitHub link above)
+       const zC = NC.exec(CC);
+       return null === zC ? null : {
+         name: zC[1],
+         part: void 0 === zC[2] ? null : Number(zC[2])
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/91.js` (Changed code · before: `L2070-L2146` → after: `L493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78dR493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78d) · [After (L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/91.js#L493) · [Before (L2070-L2146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/91.js#L2070-L2146)

```diff
-     var UE = gq(37678);
-     const FE = new Map;
-     class sE {
-       constructor(qq) {
-         this.error = qq
-       }
-     }
-     class XE extends Error {}
-     const wE = {
-       prefix: "wasm physics: ",
-       suffix: ", so the room worker restarts rather than finish in JS"
-     };
- 
-     function KE(qq, Eq, gq, Yq, lq, Oq) {
-       let mq = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "it runs in JS";
-       if (gq instanceof XE) throw gq;
- ... (61 more removed lines; see GitHub link above)
+     const gC = /^(?:\/studio)?\/docs(?:\/([a-z0-9-]+)(?:\/(\d+))?)?\/?$/;
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/91.js` (Changed code · before: `L2149-L2163` → after: `L496-L499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78dR496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78d) · [After (L496-L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/91.js#L496-L499) · [Before (L2149-L2163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/91.js#L2149-L2163)

```diff
-       return qq % cg * 21
-     }
- 
-     function Ng() {
-       return !1
-     }
- 
-     function ag(qq, Eq) {
-       var gq = (gq, Yq, lq) => null !== Eq.kF && Yq <= Eq.kF || qq.testSolid(gq, Yq, lq);
-       return gq.solidOwner = qq, gq
-     }
- 
-     function Vg(qq, Eq) {
-       var gq = Eq.testSolid && Eq.testSolid.solidOwner;
-       return (!Eq.testSolid || void 0 !== gq && gq !== qq) && (Eq.testSolid = ag(qq, Eq)), Eq.testSolid
+       const zC = gC.exec(CC);
+       if (null === zC) return null;
+       const [, ZC = "", QC] = zC;
+       return void 0 === QC ? FC(ZC) : WC(ZC, Number(QC) - 1)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/91.js` (Changed code · before: `L2177-L35410` → after: `L503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78dR503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78d) · [After (L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/91.js#L503) · [Before (L2177-L35410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/91.js#L2177-L35410)

```diff
-       if (null === Qg) {
-         const Eq = qq.getBloxdWasm();
-         Qg = "function" === typeof Eq.OB && "function" === typeof Eq.mB && tg(Eq.OB(), og) && tg(Eq.mB(), Pg), Qg || console.error(new Error("wasm physics: the module's layout differs from wasmPhysicsLayout.ts (a stale @bloxd/wasm build?), so physics and picks cannot run in wasm" … [truncated]
-       }
-       return Qg
-     }
- 
-     function tg(qq, Eq) {
-       if (qq.length !== Eq.length) return !1;
-       for (let gq = 0; gq < Eq.length; gq++)
-         if (qq[gq] !== Eq[gq]) return !1;
-       return !0
-     }
- 
-     function rg(qq) {
-       if (Number.isNaN(qq)) return "NaN";
- ... (33218 more removed lines; see GitHub link above)
+       return `/docsHtml/${qC(CC)}.html`
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/92.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/92.js` (14 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc)

#### 1. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L2` → after: `L3`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR3) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/92.js#L3) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/92.js#L2)

```diff
- export const ids = [92];
+ export const ids = [10, 13, 15, 16, 18, 20, 21, 23, 24, 92, 136];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L4-L9` → after: `L5-L439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L5-L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/92.js#L5-L439) · [Before (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/92.js#L4-L9)

```diff
-   4684: (qq, Eq, gq) => {
-     gq.r(Eq), gq.d(Eq, {
-       Howl: () => lq.Howl,
-       Howler: () => lq.Howler,
-       musicOutput: () => aq,
-       readyAudioContext: () => Vq
+   39108: (CC, zC, ZC) => {
+     var QC = {
+       "./bedwars/bedwarsClient": 39110,
+       "./bridgeBattle/bridgeBattleClient": 39114,
+       "./buildAFactory2/buildAFactory2Client": 38316,
+       "./classic/classicClient": 39120,
+       "./clutch/clutchClient": 39122,
+       "./containmentBreach/containmentBreachClient": 39124,
+       "./cooking/cookingClient": 39246,
+       "./defusal/defusalClient": 39252,
+       "./frontline/frontlineClient": 39259,
+       "./goalRush/goalRushClient": 39262,
+       "./luckyBedwars/luckyBedwarsClient": 39269,
+       "./ninetyNineNights/ninetyNineNightsClient": 39275,
+       "./oneBlock/oneBlockClient": 39284,
+       "./plots/plotsClient": 39288,
+ ... (419 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L11-L13` → after: `L441-L631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L441-L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/92.js#L441-L631) · [Before (L11-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/92.js#L11-L13)

```diff
-     var Yq, lq = gq(4692),
-       Oq = gq(4477);
-     const mq = lq.Howler;
+     var QC = ZC(1664),
+       wC = ZC(1307),
+       bC = ZC(48),
+       nC = ZC(1002),
+       fC = ZC.n(nC),
+       oC = ZC(1388),
+       qC = ZC(77);
+     const FC = ["video/webm;codecs=vp9,opus", "video/webm;codecs=vp8,opus", "video/webm;codecs=vp9", "video/webm;codecs=vp8", "video/webm"],
+       WC = ["video/mp4;codecs=avc1,mp4a.40.2", "video/mp4;codecs=avc1.42E01E,mp4a.40.2", "video/mp4;codecs=avc1", "video/mp4"];
+ 
+     function NC(CC) {
+       return "webm" === CC ? FC : WC
+     }
+ 
+     function MC(CC) {
+       for (const zC of CC)
+ ... (175 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L17-L20` → after: `L677-L686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L677-L686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/92.js#L677-L686) · [Before (L17-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/92.js#L17-L20)

```diff
-       if (mq.ctx || !mq.usingWebAudio || "undefined" === typeof AudioContext || !(0, Oq.f)()) return;
-       const gq = navigator.audioSession;
-       let Yq;
-       "auto" === (null === gq || void 0 === gq ? void 0 : gq.type) && (gq.type = "ambient");
+       if ((0, eC.e)() || hC) return;
+       const bC = CC();
+       if (!bC) return;
+       hC = !0;
+       let nC = null;
+       const fC = bC.playbackMarkInTick,
+         {
+           canIncludeUi: oC,
+           includeUiDisabledReason: qC
+         } = iC();
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L22-L23` → after: `L688-L713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L688-L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/92.js#L688-L713) · [Before (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/92.js#L22-L23)

```diff
-         Yq = new AudioContext({
-           sampleRate: 44100
+         nC = await async function(CC) {
+           let {
+             hasPlaybackMark: zC,
+             canIncludeUi: ZC,
+             includeUiDisabledReason: QC
+           } = CC;
+           const bC = {
+               options: null
+             },
+             nC = wC.NotificationProvider.showCustomPopup({
+               body: CC => (0, SC.jsx)(RC, {
+                 hasPlaybackMark: zC,
+                 canIncludeUi: ZC,
+                 includeUiDisabledReason: QC,
+                 selectionRef: bC,
+                 closePopup: CC
+ ... (10 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L25-L26` → after: `L715-L842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L715-L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/92.js#L715-L842) · [Before (L25-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/92.js#L25-L26)

```diff
-       } catch {
-         return
+       } finally {
+         hC = !1
+       }
+       if (!nC) return;
+       const FC = null !== (zC = null === (ZC = bC.startFailure) || void 0 === ZC ? void 0 : ZC.call(bC)) && void 0 !== zC ? zC : null;
+       if (null !== FC) return void wC.NotificationProvider.showAlertPopup({
+         title: "Video export failed",
+         subtitle: FC
+       });
+       if (! function(CC) {
+           return !(0, eC.e)() && ((0, eC.g)(!0), CC.holdInput(!0), !0)
+         }(bC)) return;
+       let WC = null;
+       try {
+         WC = await vC(nC.includeUi, (() => bC.canvas()), bC.Jm)
+       } catch (dC) {
+ ... (112 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L31-L44` → after: `L845-L856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L845-L856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/92.js#L845-L856) · [Before (L31-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/92.js#L31-L44)

```diff
-     mq._mobileUnloaded = !0;
-     const Aq = mq.volume.bind(lq.Howler);
-     mq.volume = function() {
-       return xq(), Aq(...arguments)
-     };
-     const cq = mq.mute.bind(lq.Howler);
-     mq.mute = qq => (xq(), cq(qq));
-     const uq = lq.Howl.prototype,
-       Bq = uq.init;
-     uq.init = function(qq) {
-       return xq(), Bq.call(this, qq)
-     };
-     let Wq = 0;
-     const Nq = null === (Yq = mq._autoSuspend) || void 0 === Yq ? void 0 : Yq.bind(lq.Howler);
+   },
+   4788: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       b: () => FC,
+       f: () => WC
+     });
+     var QC = ZC(4797),
+       wC = ZC(20);
+     const bC = .25,
+       nC = .85,
+       fC = .02,
+       oC = .01;
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L46-L47` → after: `L858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/92.js#L858) · [Before (L46-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/92.js#L46-L47)

```diff
-     function aq() {
-       Vq();
+     function qC(CC, zC, ZC, QC, wC, bC, fC) {
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L49-L55` → after: `L860-L1212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L860-L1212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/92.js#L860-L1212) · [Before (L49-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/92.js#L49-L55)

```diff
-         ctx: qq,
-         masterGain: Eq
-       } = mq;
-       return qq && Eq ? {
-         ctx: qq,
-         destination: Eq,
-         holdAwake: qq => {
+         waveform: oC,
+         pitchHz: qC,
+         attackMs: FC,
+         releaseMs: WC,
+         lowpassHz: NC
+       } = ZC, MC = wC + QC.durationMs / 1e3, gC = qC * 2 ** (QC.semitones / 12), SC = CC.createOscillator();
+       SC.type = oC, SC.frequency.setValueAtTime(gC, wC), SC.frequency.exponentialRampToValueAtTime(gC * 2 ** (QC.glideSemitones / 12), MC);
+       const pC = wC + Math.min(FC, QC.durationMs) / 1e3,
+         PC = CC.createGain();
+       PC.gain.setValueAtTime(0, wC), PC.gain.linearRampToValueAtTime(bC, pC), PC.gain.linearRampToValueAtTime(bC * nC, Math.max(pC, MC - WC / 1e3)), PC.gain.linearRampToValueAtTime(0, MC);
+       const GC = [SC];
+       if (null !== NC) {
+         const zC = CC.createBiquadFilter();
+         zC.type = "lowpass", zC.frequency.value = NC, GC.push(zC)
+       }
+       GC.push(PC, zC);
+ ... (337 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L57` → after: `L1214-L1253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR1214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L1214-L1253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/92.js#L1214-L1253) · [Before (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/92.js#L57)

```diff
-           (Wq += qq ? 1 : -1, qq) ? null === (Eq = mq._autoResume) || void 0 === Eq || Eq.call(mq): null === (gq = mq._autoSuspend) || void 0 === gq || gq.call(mq)
+           return !QC(CC) || ZC(CC).length > 0 ? null : `${null!==(zC=null===(wC=CC.material)||void 0===wC?void 0:wC.uniqueId)&&void 0!==zC?zC:"none"} ${CC.getVerticesDataKinds().sort().join(",")}`
+         };
+       ! function(CC, zC, ZC) {
+         const QC = new Set,
+           wC = CC => {
+             for (const ZC of CC) QC.add(ZC.name.toLowerCase()), wC(zC(ZC))
+           };
+         wC(CC);
+         const bC = new Set,
+           nC = new Map,
+           fC = [],
+           oC = CC => {
+             var zC;
+             const ZC = CC.toLowerCase();
+             let wC, bC = null !== (zC = nC.get(ZC)) && void 0 !== zC ? zC : 1;
+             do {
+ ... (24 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L59` → after: `L1255-L1262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR1255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L1255-L1262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/92.js#L1255-L1262) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/92.js#L59)

```diff
-         wake: () => {
+         fC = ZC(CC).map(nC);
+       return null === zC || 1 !== bC.size ? wz(fC) : bz(fC, zC)
+     }
+     const oz = new WeakMap;
+ 
+     function qz(CC, zC, ZC) {
+       const QC = yC.g.itemsClient[zC],
+         wC = function(CC) {
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L61` → after: `L1264-L1358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR1264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L1264-L1358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/92.js#L1264-L1358) · [Before (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/92.js#L61)

```diff
-           "running" !== qq.state && (null === (Eq = mq._autoResume) || void 0 === Eq || Eq.call(mq), qq.resume().catch((() => {})))
+           const ZC = (0, BC.r)(CC);
+           if (null !== ZC) return kC.c.enabled && kC.c.hasAnimation(ZC) ? {
+             vehicleType: ZC,
+             moved: kC.c.bonesMoved(ZC)
+           } : null;
+           const QC = null === (zC = FC.g[CC]) || void 0 === zC ? void 0 : zC.meshEntityBones;
+           return null !== QC && void 0 !== QC && QC.length ? {
+             vehicleType: null,
+             moved: new Set(QC)
+           } : null
+         }(zC);
+       if (null === wC || void 0 === QC) return null;
+       const bC = CC.Vg.nH;
+       let nC = oz.get(bC);
+       nC || (nC = new Map, oz.set(bC, nC));
+       let fC = nC.get(zC);
+ ... (79 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L63` → after: `L1360-L2022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR1360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L1360-L2022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/92.js#L1360-L2022) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/92.js#L63)

```diff
-       } : null
+       }
+     }
+ 
+     function Fz(CC) {
+       return CC.flatMap((CC => {
+         var zC;
+         return "string" === typeof CC ? [CC] : [CC.nodeName, ...Fz(null !== (zC = CC.children) && void 0 !== zC ? zC : [])]
+       }))
+     }
+ 
+     function Wz(CC, zC, ZC) {
+       zC.name = `${ZC}SkeletalVehicleMat`;
+       const QC = (0, eC.Y)(zC);
+       (0, eC.K)(QC), (0, Qz.c)(zC, (() => {
+         (0, Zz.b)(QC, CC), (0, tC.d)(QC, !0)
+       })), (0, Qz.f)(zC)
+ ... (647 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L68` → after: `L2087-L35569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR2087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L2087-L35569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/92.js#L2087-L35569) · [Before (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/92.js#L68)

```diff
-       (mq.volume(), mq.ctx && mq.autoUnlock) && (null === (qq = mq._unlockAudio) || void 0 === qq || qq.call(mq))
+       let bC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Dz;
+       const nC = performance.now(),
+         fC = bC.get(CC);
+       if (void 0 !== fC && nC - fC < 6e4) return;
+       bC.set(CC, nC);
+       const oC = zC();
+       QC && console.error(oC), null === (wC = ZC.Cg) || void 0 === wC || wC.call(ZC, oC)
+     }
+ 
+     function Oz(CC) {
+       return "failed" !== CC.getBloxdWasmStatus()
+     }
+ 
+     function kz(CC, zC) {
+       if (Oz(CC)) try {
+         zC.free()
+ ... (33467 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/93.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/93.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/93.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7dR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7d) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/93.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/93.js#L2)

```diff
- export const ids = [92, 93];
+ export const ids = [93];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/93.js` (Changed code · before: `L4-L92` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/93.js#L4) · [Before (L4-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/93.js#L4-L92)

```diff
-   36493: (qq, Eq, gq) => {
-     gq.r(Eq), gq.d(Eq, {
-       countDecodesAs: () => Bq,
-       decodedAudio: () => Wq
-     });
-     var Yq = gq(36496),
-       lq = gq(4684);
-     const Oq = lq.Howler,
-       mq = new Map;
-     let xq = 0;
-     const Aq = {
-         song: 0,
-         sheet: 0
-       },
-       cq = new WeakMap,
-       uq = new WeakSet;
- ... (73 more removed lines; see GitHub link above)
+   4797: (CC, zC, ZC) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/93.js` (Changed code · before: `L99-L100` → after: `L11-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7dR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7d) · [After (L11-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/93.js#L11-L13) · [Before (L99-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/93.js#L99-L100)

```diff
-     var Yq, lq = gq(4692),
-       Oq = gq(4477);
+     var QC, wC = ZC(4801),
+       bC = ZC(3419),
+       nC = ZC(4587);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/93.js` (Changed code · before: `L105` → after: `L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7dR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7d) · [After (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/93.js#L18) · [Before (L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/93.js#L105)

```diff
-       if (mq.ctx || !mq.usingWebAudio || "undefined" === typeof AudioContext || !(0, Oq.f)()) return;
+       if (fC.ctx || !fC.usingWebAudio || "undefined" === typeof AudioContext || !(0, nC.h)()) return;
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/93.js` (Changed code · before: `L117` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7dR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7d) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/93.js#L30) · [Before (L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/93.js#L117)

```diff
-       lq.gain.setValueAtTime(mq._muted ? 0 : null !== (qq = mq._volume) && void 0 !== qq ? qq : 1, Yq.currentTime), lq.connect(Yq.destination), mq.ctx = Yq, mq.masterGain = lq, null === (Eq = mq._setup) || void 0 === Eq || Eq.call(mq)
+       wC.gain.setValueAtTime(fC._muted ? 0 : null !== (CC = fC._volume) && void 0 !== CC ? CC : 1, QC.currentTime), wC.connect(QC.destination), fC.ctx = QC, fC.masterGain = wC, null === (zC = fC._setup) || void 0 === zC || zC.call(fC)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/93.js` (Changed code · before: `L130` → after: `L57-L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7dR57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7d) · [After (L57-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/93.js#L57-L94) · [Before (L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/93.js#L130)

```diff
-     };
+     }, (0, nC.h)() && (fC._unlockAudio = () => {
+       const CC = fC.ctx;
+       if (fC._audioUnlocked || !CC) return;
+       fC.autoUnlock = !1;
+       const zC = CC.createBuffer(1, 1, 22050);
+       fC._scratchBuffer = zC;
+       const ZC = new AbortController;
+       let QC = "afterPaint";
+       const wC = () => {
+           var QC;
+           if (fC._audioUnlocked) return;
+           null === (QC = fC._autoResume) || void 0 === QC || QC.call(fC);
+           const wC = CC.createBufferSource();
+           wC.buffer = zC, wC.connect(CC.destination), wC.start(0), CC.resume().catch((() => {})), wC.onended = () => {
+             wC.disconnect(0), fC._audioUnlocked = !0, ZC.abort();
+             for (const CC of fC._howls) CC._emit("unlock")
+ ... (22 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/94.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/94.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8)

#### 1. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/94.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/94.js#L2)

```diff
- export const ids = [92, 93, 94];
+ export const ids = [93, 94];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L4-L61` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/94.js#L4) · [Before (L4-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/94.js#L4-L61)

```diff
-   36674: (qq, Eq, gq) => {
-     function Yq(qq, Eq, gq, Yq) {
-       return !(gq && !qq.aimable) && (!Eq || qq.gun && "head" !== Yq)
-     }
- 
-     function lq(qq) {
-       return Math.max(.1 * qq, 1)
-     }
- 
-     function Oq(qq, Eq) {
-       return !qq && Eq
-     }
-     gq.d(Eq, {
-       b: () => Oq,
-       f: () => lq,
-       j: () => Yq
- ... (42 more removed lines; see GitHub link above)
+   36318: (CC, zC, ZC) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L66-L67` → after: `L9-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/94.js#L9-L10) · [Before (L66-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/94.js#L66-L67)

```diff
-     var Yq = gq(36496),
-       lq = gq(4684);
+     var QC = ZC(3252),
+       wC = ZC(4797);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L104` → after: `L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/94.js#L47) · [Before (L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/94.js#L104)

```diff
-               xq += gq - (null !== (Yq = mq.get(Eq)) && void 0 !== Yq ? Yq : 0), mq.set(Eq, gq);
+               fC += ZC - (null !== (QC = nC.get(zC)) && void 0 !== QC ? QC : 0), nC.set(zC, ZC);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L117` → after: `L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/94.js#L60) · [Before (L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/94.js#L117)

```diff
-     }(0, Yq.d)(Wq);
+     }(0, QC.h)(NC);
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L134-L237` → after: `L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/94.js#L77) · [Before (L134-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/94.js#L134-L237)

```diff
-   36496: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       c: () => Oq,
-       d: () => lq
-     });
-     let Yq = null;
- 
-     function lq(qq) {
-       Yq = qq
-     }
- 
-     function Oq() {
-       return null === Yq ? null : Yq()
-     }
-   },
-   36821: (qq, Eq, gq) => {
- ... (88 more removed lines; see GitHub link above)
+   4797: (CC, zC, ZC) => {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L244-L245` → after: `L84-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L84-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/94.js#L84-L86) · [Before (L244-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/94.js#L244-L245)

```diff
-     var Yq, lq = gq(4692),
-       Oq = gq(4477);
+     var QC, wC = ZC(4801),
+       bC = ZC(3419),
+       nC = ZC(4587);
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L250` → after: `L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/94.js#L91) · [Before (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/94.js#L250)

```diff
-       if (mq.ctx || !mq.usingWebAudio || "undefined" === typeof AudioContext || !(0, Oq.f)()) return;
+       if (fC.ctx || !fC.usingWebAudio || "undefined" === typeof AudioContext || !(0, nC.h)()) return;
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L262` → after: `L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/94.js#L103) · [Before (L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/94.js#L262)

```diff
-       lq.gain.setValueAtTime(mq._muted ? 0 : null !== (qq = mq._volume) && void 0 !== qq ? qq : 1, Yq.currentTime), lq.connect(Yq.destination), mq.ctx = Yq, mq.masterGain = lq, null === (Eq = mq._setup) || void 0 === Eq || Eq.call(mq)
+       wC.gain.setValueAtTime(fC._muted ? 0 : null !== (CC = fC._volume) && void 0 !== CC ? CC : 1, QC.currentTime), wC.connect(QC.destination), fC.ctx = QC, fC.masterGain = wC, null === (zC = fC._setup) || void 0 === zC || zC.call(fC)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L275` → after: `L130-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L130-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/94.js#L130-L167) · [Before (L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/94.js#L275)

```diff
-     };
+     }, (0, nC.h)() && (fC._unlockAudio = () => {
+       const CC = fC.ctx;
+       if (fC._audioUnlocked || !CC) return;
+       fC.autoUnlock = !1;
+       const zC = CC.createBuffer(1, 1, 22050);
+       fC._scratchBuffer = zC;
+       const ZC = new AbortController;
+       let QC = "afterPaint";
+       const wC = () => {
+           var QC;
+           if (fC._audioUnlocked) return;
+           null === (QC = fC._autoResume) || void 0 === QC || QC.call(fC);
+           const wC = CC.createBufferSource();
+           wC.buffer = zC, wC.connect(CC.destination), wC.start(0), CC.resume().catch((() => {})), wC.onended = () => {
+             wC.disconnect(0), fC._audioUnlocked = !0, ZC.abort();
+             for (const CC of fC._howls) CC._emit("unlock")
+ ... (22 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/95.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/95.js` (18 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372)

#### 1. `bundles/preprod.bloxd.io/chunks/js/95.js` (Changed code · before: `L3` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/95.js#L2) · [Before (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/95.js#L3)

```diff
- export const ids = [95];
+ export const ids = [93, 94, 95];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/95.js` (Changed code · before: `L5-L9` → after: `L4-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372) · [After (L4-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/95.js#L4-L40) · [Before (L5-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/95.js#L5-L9)

```diff
-   4692: (qq, Eq, gq) => {
-     var Yq;
-     ! function() {
-       var lq = function() {
-         this.init()
+   36502: (CC, zC, ZC) => {
+     function QC(CC, zC, ZC, QC) {
+       return !(ZC && !CC.aimable) && (!zC || CC.gun && "head" !== QC)
+     }
+ 
+     function wC(CC) {
+       return Math.max(.1 * CC, 1)
+     }
+ 
+     function bC(CC, zC) {
+       return !CC && zC
+     }
+     ZC.d(zC, {
+       c: () => bC,
+       e: () => wC,
+       g: () => QC
+ ... (21 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/95.js` (Changed code · before: `L11-L68` → after: `L42-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372) · [After (L42-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/95.js#L42-L97) · [Before (L11-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/95.js#L11-L68)

```diff
-       lq.prototype = {
-         init: function() {
-           var qq = this || Oq;
-           return qq._counter = 1e3, qq._html5AudioPool = [], qq.html5PoolSize = 10, qq._codecs = {}, qq._howls = [], qq._muted = !1, qq._volume = 1, qq._canPlayEvent = "canplaythrough", qq._navigator = "undefined" !== typeof window && window.navigator ? window.navigator : null, q … [truncated]
-         },
-         volume: function(qq) {
-           var Eq = this || Oq;
-           if (qq = parseFloat(qq), Eq.ctx || Nq(), "undefined" !== typeof qq && qq >= 0 && qq <= 1) {
-             if (Eq._volume = qq, Eq._muted) return Eq;
-             Eq.usingWebAudio && Eq.masterGain.gain.setValueAtTime(qq, Oq.ctx.currentTime);
-             for (var gq = 0; gq < Eq._howls.length; gq++)
-               if (!Eq._howls[gq]._webAudio)
-                 for (var Yq = Eq._howls[gq]._getSoundIds(), lq = 0; lq < Yq.length; lq++) {
-                   var mq = Eq._howls[gq]._soundById(Yq[lq]);
-                   mq && mq._node && (mq._node.volume = mq._volume * qq)
-                 }
- ... (42 more removed lines; see GitHub link above)
+ 
+     function nC(CC, zC) {
+       const ZC = {
+           hook: zC
+         },
+         nC = wC[CC];
+       if (nC.push(ZC), "crosshairAccuracy" === CC && null !== QC) {
+         const CC = QC;
+         QC = null, bC.crosshairAccuracy(CC)
+       }
+       return () => {
+         const CC = nC.indexOf(ZC); - 1 !== CC && nC.splice(CC, 1)
+       }
+     }
+ 
+     function fC() {
+ ... (40 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/95.js` (Changed code · before: `L70-L155` → after: `L99-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372) · [After (L99-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/95.js#L99-L107) · [Before (L70-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/95.js#L70-L155)

```diff
-             Eq = "undefined" !== typeof Audio ? new Audio : null
-           } catch (uq) {
-             return qq
-           }
-           if (!Eq || "function" !== typeof Eq.canPlayType) return qq;
-           var gq = Eq.canPlayType("audio/mpeg;").replace(/^no$/, ""),
-             Yq = qq._navigator ? qq._navigator.userAgent : "",
-             lq = Yq.match(/OPR\/([0-6].)/g),
-             mq = lq && parseInt(lq[0].split("/")[1], 10) < 33,
-             xq = -1 !== Yq.indexOf("Safari") && -1 === Yq.indexOf("Chrome"),
-             Aq = Yq.match(/Version\/(.*?) /),
-             cq = xq && Aq && parseInt(Aq[1], 10) < 15;
-           return qq._codecs = {
-             mp3: !(mq || !gq && !Eq.canPlayType("audio/mp3;").replace(/^no$/, "")),
-             mpeg: !!gq,
-             opus: !!Eq.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
- ... (70 more removed lines; see GitHub link above)
+             null === QC || void 0 === QC || QC(CC)
+           } finally {
+             const ZC = zC.find((CC => "loaded" === CC._state));
+             void 0 !== ZC && "string" === typeof ZC._src && function(CC, zC, ZC) {
+               var QC;
+               fC += ZC - (null !== (QC = nC.get(zC)) && void 0 !== QC ? QC : 0), nC.set(zC, ZC);
+               const wC = qC.get(CC);
+               void 0 !== wC && oC[wC]++
+             }(ZC, ZC._src, CC.length * CC.numberOfChannels * Float32Array.BYTES_PER_ELEMENT)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/95.js` (Changed code · before: `L157-L168` → after: `L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372) · [After (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/95.js#L109) · [Before (L157-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/95.js#L157-L168)

```diff
-         },
-         _autoResume: function() {
-           var qq = this;
-           if (qq.ctx && "undefined" !== typeof qq.ctx.resume && Oq.usingWebAudio) return "running" === qq.state && "interrupted" !== qq.ctx.state && qq._suspendTimer ? (clearTimeout(qq._suspendTimer), qq._suspendTimer = null) : "suspended" === qq.state || "running" === qq.state & … [truncated]
-             qq.state = "running";
-             for (var Eq = 0; Eq < qq._howls.length; Eq++) qq._howls[Eq]._emit("resume")
-           })), qq._suspendTimer && (clearTimeout(qq._suspendTimer), qq._suspendTimer = null)) : "suspending" === qq.state && (qq._resumeAfterSuspend = !0), qq
-         }
-       };
-       var Oq = new lq,
-         mq = function(qq) {
-           qq.src && 0 !== qq.src.length ? this.init(qq) : console.error("An array of source files must be passed with any new Howl.")
+           return CC
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/95.js` (Changed code · before: `L170-L266` → after: `L111-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372) · [After (L111-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/95.js#L111-L167) · [Before (L170-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/95.js#L170-L266)

```diff
-       mq.prototype = {
-         init: function(qq) {
-           var Eq = this;
-           return Oq.ctx || Nq(), Eq._autoplay = qq.autoplay || !1, Eq._format = "string" !== typeof qq.format ? qq.format : [qq.format], Eq._html5 = qq.html5 || !1, Eq._muted = qq.mute || !1, Eq._loop = qq.loop || !1, Eq._pool = qq.pool || 5, Eq._preload = "boolean" !== typeof qq … [truncated]
-             method: qq.xhr && qq.xhr.method ? qq.xhr.method : "GET",
-             headers: qq.xhr && qq.xhr.headers ? qq.xhr.headers : null,
-             withCredentials: !(!qq.xhr || !qq.xhr.withCredentials) && qq.xhr.withCredentials
-           }, Eq._duration = 0, Eq._state = "unloaded", Eq._sounds = [], Eq._endTimers = {}, Eq._queue = [], Eq._playLock = !1, Eq._onend = qq.onend ? [{
-             LN: qq.onend
-           }] : [], Eq._onfade = qq.onfade ? [{
-             LN: qq.onfade
-           }] : [], Eq._onload = qq.onload ? [{
-             LN: qq.onload
-           }] : [], Eq._onloaderror = qq.onloaderror ? [{
-             LN: qq.onloaderror
-           }] : [], Eq._onplayerror = qq.onplayerror ? [{
- ... (81 more removed lines; see GitHub link above)
+         if (!zC) return ZC(CC, FC, wC);
+         const WC = ZC(CC).then(FC);
+         return WC.catch((CC => {
+           null === wC || void 0 === wC || wC(CC)
+         })), WC
+       }
+     }(0, QC.h)(NC);
+     const gC = wC.Howl.prototype,
+       SC = gC.init;
+     gC.init = function(CC) {
+       return wC.Howler.volume(), bC.ctx && MC(bC.ctx), SC.call(this, CC)
+     };
+     const pC = gC.unload;
+     gC.unload = function() {
+       const CC = this._src,
+         zC = pC.call(this);
+ ... (41 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/95.js` (Changed code · before: `L268-L669` → after: `L169-L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372R169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372) · [After (L169-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/95.js#L169-L215) · [Before (L268-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/95.js#L268-L669)

```diff
-           if (!(cq >= Nq)) {
-             var Vq = xq._node;
-             if (gq._webAudio) {
-               var dq = function() {
-                 gq._playLock = !1, aq(), gq._refreshBuffer(xq);
-                 var qq = xq._muted || gq._muted ? 0 : xq._volume;
-                 Vq.gain.setValueAtTime(qq, Oq.ctx.currentTime), xq._playStart = Oq.ctx.currentTime, "undefined" === typeof Vq.bufferSource.start ? xq._loop ? Vq.bufferSource.noteGrainOn(0, cq, 86400) : Vq.bufferSource.noteGrainOn(0, cq, uq) : xq._loop ? Vq.bufferSource.start(0, c … [truncated]
-                   gq._emit("play", xq._id), gq._loadQueue()
-                 }), 0)
-               };
-               "running" === Oq.state && "interrupted" !== Oq.ctx.state ? dq() : (gq._playLock = !0, gq.once("resume", dq), gq._clearTimer(xq._id))
-             } else {
-               var jq = function() {
-                 Vq.currentTime = cq, Vq.muted = xq._muted || gq._muted || Oq._muted || Vq.muted, Vq.volume = xq._volume * Oq.volume(), Vq.playbackRate = xq._rate;
-                 try {
-                   var Yq = Vq.play();
- ... (386 more removed lines; see GitHub link above)
+           nC(0)
+         }(wC.e.get(bC).filter((CC => CC !== ZC)).flatMap((zC => {
+           const ZC = (QC = (0, wC.j)(zC).src, bC = CC.canPlay, QC.find((CC => {
+             var zC;
+             const ZC = null === (zC = /\.([^.]+)$/.exec(CC.split("?", 1)[0])) || void 0 === zC ? void 0 : zC[1];
+             return void 0 !== ZC && bC(ZC.toLowerCase())
+           })));
+           var QC, bC;
+           return void 0 === ZC ? [] : [ZC]
+         })), CC)
+       }
+     }({
+       afterJoin: CC => {
+         (0, bC.d)(QC.b.get("gameState"), CC)
+       },
+       joining: () => (0, bC.e)(QC.b.get("gameState")),
+ ... (31 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/95.js` (Changed code · before: `L672-L688` → after: `L218-L270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372R218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372) · [After (L218-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/95.js#L218-L270) · [Before (L672-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/95.js#L672-L688)

```diff
-       var Aq = {},
-         cq = function(qq) {
-           var Eq = qq._src;
-           if (Aq[Eq]) return qq._duration = Aq[Eq].duration, void Wq(qq);
-           if (/^data:[^;]+;base64,/.test(Eq)) {
-             for (var gq = atob(Eq.split(",")[1]), Yq = new Uint8Array(gq.length), lq = 0; lq < gq.length; ++lq) Yq[lq] = gq.charCodeAt(lq);
-             Bq(Yq.buffer, qq)
-           } else {
-             var Oq = new XMLHttpRequest;
-             Oq.open(qq._xhr.method, Eq, !0), Oq.withCredentials = qq._xhr.withCredentials, Oq.responseType = "arraybuffer", qq._xhr.headers && Object.keys(qq._xhr.headers).forEach((function(Eq) {
-               Oq.setRequestHeader(Eq, qq._xhr.headers[Eq])
-             })), Oq.onload = function() {
-               var Eq = (Oq.status + "")[0];
-               "0" === Eq || "2" === Eq || "3" === Eq ? Bq(Oq.response, qq) : qq._emit("loaderror", null, "Failed loading audio file with status: " + Oq.status + ".")
-             }, Oq.onerror = function() {
-               qq._webAudio && (qq._html5 = !0, qq._webAudio = !1, qq._sounds = [], delete Aq[Eq], qq.load())
- ... (1 more removed lines; see GitHub link above)
+       for (const wC of QC) CC.on(wC, ZC);
+       ZC()
+     }
+   },
+   4797: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       Howl: () => wC.Howl,
+       Howler: () => wC.Howler,
+       musicOutput: () => pC,
+       readyAudioContext: () => PC
+     });
+     var QC, wC = ZC(4801),
+       bC = ZC(3419),
+       nC = ZC(4587);
+     const fC = wC.Howler;
+ 
+ ... (37 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/95.js` (Changed code · before: `L690-L695` → after: `L272-L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372R272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372) · [After (L272-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/95.js#L272-L290) · [Before (L690-L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/95.js#L690-L695)

```diff
-         },
-         uq = function(qq) {
-           try {
-             qq.send()
-           } catch (Eq) {
-             qq.onerror()
+     }
+     WC.init = function(CC) {
+       return oC(), NC.call(this, CC)
+     }, (0, nC.h)() && (fC._unlockAudio = () => {
+       const CC = fC.ctx;
+       if (fC._audioUnlocked || !CC) return;
+       fC.autoUnlock = !1;
+       const zC = CC.createBuffer(1, 1, 22050);
+       fC._scratchBuffer = zC;
+       const ZC = new AbortController;
+       let QC = "afterPaint";
+       const wC = () => {
+           var QC;
+           if (fC._audioUnlocked) return;
+           null === (QC = fC._autoResume) || void 0 === QC || QC.call(fC);
+           const wC = CC.createBufferSource();
+ ... (3 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/95.js` (Changed code · before: `L698-L705` → after: `L293-L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372R293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372) · [After (L293-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/95.js#L293-L294) · [Before (L698-L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/95.js#L698-L705)

```diff
-         Bq = function(qq, Eq) {
-           var gq = function() {
-               Eq._emit("loaderror", null, "Decoding audio data failed.")
-             },
-             Yq = function(qq) {
-               qq && Eq._sounds.length > 0 ? (Aq[Eq._src] = qq, Wq(Eq, qq)) : gq()
-             };
-           "undefined" !== typeof Promise && 1 === Oq.ctx.decodeAudioData.length ? Oq.ctx.decodeAudioData(qq).then(Yq).catch(gq) : Oq.ctx.decodeAudioData(qq, Yq, gq)
+         oC = () => {
+           MC(), wC()
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/95.js` (Changed code · before: `L707-L728` → after: `L296-L302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372R296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372) · [After (L296-L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/95.js#L296-L302) · [Before (L707-L728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/95.js#L707-L728)

```diff
-         Wq = function(qq, Eq) {
-           Eq && !qq._duration && (qq._duration = Eq.duration), 0 === Object.keys(qq._sprite).length && (qq._sprite = {
-             __default: [0, 1e3 * qq._duration]
-           }), "loaded" !== qq._state && (qq._state = "loaded", qq._emit("load"), qq._loadQueue())
-         },
-         Nq = function() {
-           if (Oq.usingWebAudio) {
-             try {
-               "undefined" !== typeof AudioContext ? Oq.ctx = new AudioContext : "undefined" !== typeof webkitAudioContext ? Oq.ctx = new webkitAudioContext : Oq.usingWebAudio = !1
-             } catch (lq) {
-               Oq.usingWebAudio = !1
-             }
-             Oq.ctx || (Oq.usingWebAudio = !1);
-             var qq = /iP(hone|od|ad)/.test(Oq._navigator && Oq._navigator.platform),
-               Eq = Oq._navigator && Oq._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
-               gq = Eq ? parseInt(Eq[1], 10) : null;
- ... (6 more removed lines; see GitHub link above)
+         qC = zC => {
+           if (MC(), "inTap" === QC) {
+             if ("running" === CC.state) return;
+             console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), wC()
+           } else "afterPaint" === QC && (QC = "queued", (0, bC.c)(zC.timeStamp, (() => {
+             QC = "inTap", wC()
+           })))
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/95.js` (Changed code · before: `L730-L733` → after: `L304-L331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372R304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372) · [After (L304-L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/95.js#L304-L331) · [Before (L730-L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/95.js#L730-L733)

```diff
-       void 0 === (Yq = function() {
-         return {
-           Howler: Oq,
-           Howl: mq
+       for (const bC of ["touchstart", "touchend"]) document.addEventListener(bC, oC, {
+         capture: !0,
+         signal: ZC.signal
+       });
+       for (const bC of nC.c) document.addEventListener(bC, qC, {
+         capture: !0,
+         signal: ZC.signal
+       })
+     });
+     let gC = 0;
+     const SC = null === (QC = fC._autoSuspend) || void 0 === QC ? void 0 : QC.bind(wC.Howler);
+ 
+     function pC() {
+       PC();
+       const {
+         ctx: CC,
+ ... (12 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/95.js` (Changed code · before: `L735-L737` → after: `L333-L336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372R333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372) · [After (L333-L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/95.js#L333-L336) · [Before (L735-L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/95.js#L735-L737)

```diff
-       }.apply(Eq, [])) || (qq.exports = Yq), Eq.Howler = Oq, Eq.Howl = mq, "undefined" !== typeof gq.g ? (gq.g.HowlerGlobal = lq, gq.g.Howler = Oq, gq.g.Howl = mq, gq.g.Sound = xq) : "undefined" !== typeof window && (window.HowlerGlobal = lq, window.Howler = Oq, window.Howl = mq, … [truncated]
-     }(),
-     function() {
+       } : null
+     }
+ 
+     function PC() {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/95.js` (Changed code · before: `L739-L782` → after: `L338-L376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372R338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372) · [After (L338-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/95.js#L338-L376) · [Before (L739-L782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/95.js#L739-L782)

```diff
-       HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function(qq) {
-         var Eq = this;
-         if (!Eq.ctx || !Eq.ctx.listener) return Eq;
-         for (var gq = Eq._howls.length - 1; gq >= 0; gq--) Eq._howls[gq].stereo(qq);
-         return Eq
-       }, HowlerGlobal.prototype.pos = function(qq, Eq, gq) {
-         var Yq = this;
-         return Yq.ctx && Yq.ctx.listener ? (Eq = "number" !== typeof Eq ? Yq._pos[1] : Eq, gq = "number" !== typeof gq ? Yq._pos[2] : gq, "number" !== typeof qq ? Yq._pos : (Yq._pos = [qq, Eq, gq], "undefined" !== typeof Yq.ctx.listener.positionX ? (Yq.ctx.listener.positionX.setT … [truncated]
-       }, HowlerGlobal.prototype.orientation = function(qq, Eq, gq, Yq, lq, Oq) {
-         var mq = this;
-         if (!mq.ctx || !mq.ctx.listener) return mq;
-         var xq = mq._orientation;
-         return Eq = "number" !== typeof Eq ? xq[1] : Eq, gq = "number" !== typeof gq ? xq[2] : gq, Yq = "number" !== typeof Yq ? xq[3] : Yq, lq = "number" !== typeof lq ? xq[4] : lq, Oq = "number" !== typeof Oq ? xq[5] : Oq, "number" !== typeof qq ? xq : (mq._orientation = [qq, E … [truncated]
-       }, Howl.prototype.init = (qq = Howl.prototype.init, function(Eq) {
-         var gq = this;
-         return gq._orientation = Eq.orientation || [1, 0, 0], gq._stereo = Eq.stereo || null, gq._pos = Eq.pos || null, gq._pannerAttr = {
- ... (28 more removed lines; see GitHub link above)
+       (fC.volume(), fC.ctx && fC.autoUnlock) && (null === (CC = fC._unlockAudio) || void 0 === CC || CC.call(fC))
+     }
+     SC && (fC._autoSuspend = () => gC > 0 ? wC.Howler : SC())
+   },
+   36657: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => QC
+     });
+     const QC = new Set(["gunSemiAutomatic", "gunSubmachineGun", "gunShotgun", "gunRifle", "gunPistol", "gunMisc", "step", "dig", "randomItems", "randomExp", "randomCash", "randomFallsmall", "note", "rpg", "phoneAndMoney"])
+   },
+   36650: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => nC,
+       d: () => wC,
+       g: () => QC
+     });
+ ... (23 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/95.js` (Changed code · before: `L784-L789` → after: `L378-L386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372R378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372) · [After (L378-L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/95.js#L378-L386) · [Before (L784-L789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/95.js#L784-L789)

```diff
-         for (var Oq = Yq._getSoundIds(gq), mq = 0; mq < Oq.length; mq++) {
-           var xq = Yq._soundById(Oq[mq]);
-           if (xq) {
-             if ("number" !== typeof qq) return xq._stereo;
-             xq._stereo = qq, xq._pos = [qq, 0, 0], xq._node && (xq._pannerAttr.panningModel = "equalpower", xq._panner && xq._panner.pan || Eq(xq, lq), "spatial" === lq ? "undefined" !== typeof xq._panner.positionX ? (xq._panner.positionX.setValueAtTime(qq, Howler.ctx.currentTime … [truncated]
-           }
+         return !(this.voices.length >= this.maxVoices && !this.dropLeastWorth(this.voices, CC)) && (this.voices.push(CC), !0)
+       }
+       dropLeastWorth(CC, zC) {
+         let ZC = null,
+           QC = 1 / 0;
+         for (const wC of CC) {
+           if (!wC.canStop()) continue;
+           const CC = bC(wC, zC.startMs);
+           CC < QC && (ZC = wC, QC = CC)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/95.js` (Changed code · before: `L792-L811` → after: `L417-L429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372R417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372) · [After (L417-L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/95.js#L417-L429) · [Before (L792-L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/95.js#L792-L811)

```diff
-       }, Howl.prototype.pos = function(qq, gq, Yq, lq) {
-         var Oq = this;
-         if (!Oq._webAudio) return Oq;
-         if ("loaded" !== Oq._state) return Oq._queue.push({
-           event: "pos",
-           action: function() {
-             Oq.pos(qq, gq, Yq, lq)
-           }
-         }), Oq;
-         if (gq = "number" !== typeof gq ? 0 : gq, Yq = "number" !== typeof Yq ? -.5 : Yq, "undefined" === typeof lq) {
-           if ("number" !== typeof qq) return Oq._pos;
-           Oq._pos = [qq, gq, Yq]
-         }
-         for (var mq = Oq._getSoundIds(lq), xq = 0; xq < mq.length; xq++) {
-           var Aq = Oq._soundById(mq[xq]);
-           if (Aq) {
- ... (4 more removed lines; see GitHub link above)
+       }
+     }
+     class wC {
+       constructor() {
+         let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
+         this.booleans = {}, this._onUpdate = void 0, this._onUpdate = CC
+       }
+       setBooleanType(CC, zC) {
+         const ZC = this._getTotalBooleanVal();
+         this.booleans[CC] = !!zC;
+         const QC = this.getTotalBooleanVal();
+         var wC;
+         QC !== ZC && (null === (wC = this._onUpdate) || void 0 === wC || wC.call(this, QC, this.booleans));
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/95.js` (Changed code · before: `L813-L832` → after: `L431-L457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372R431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372) · [After (L431-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/95.js#L431-L457) · [Before (L813-L832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/95.js#L813-L832)

```diff
-       }, Howl.prototype.orientation = function(qq, gq, Yq, lq) {
-         var Oq = this;
-         if (!Oq._webAudio) return Oq;
-         if ("loaded" !== Oq._state) return Oq._queue.push({
-           event: "orientation",
-           action: function() {
-             Oq.orientation(qq, gq, Yq, lq)
-           }
-         }), Oq;
-         if (gq = "number" !== typeof gq ? Oq._orientation[1] : gq, Yq = "number" !== typeof Yq ? Oq._orientation[2] : Yq, "undefined" === typeof lq) {
-           if ("number" !== typeof qq) return Oq._orientation;
-           Oq._orientation = [qq, gq, Yq]
-         }
-         for (var mq = Oq._getSoundIds(lq), xq = 0; xq < mq.length; xq++) {
-           var Aq = Oq._soundById(mq[xq]);
-           if (Aq) {
- ... (4 more removed lines; see GitHub link above)
+       }
+       removeBoolean(CC) {
+         const zC = this._getTotalBooleanVal();
+         delete this.booleans[CC];
+         const ZC = this._getTotalBooleanVal();
+         var QC;
+         null !== ZC && ZC !== zC && (null === (QC = this._onUpdate) || void 0 === QC || QC.call(this, ZC, this.booleans));
+         return null !== ZC && void 0 !== ZC && ZC
+       }
+       getBooleanType(CC) {
+         return this.booleans[CC]
+       }
+       getTotalBooleanVal() {
+         throw new Error("This is an abstract class, use BooleanAndCombinator")
+       }
+       forceUpdate() {
+ ... (11 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/95.js` (Changed code · before: `L893` → after: `L460-L489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372R460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372) · [After (L460-L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/95.js#L460-L489) · [Before (L893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/95.js#L893)

```diff
-     }()
+       _getTotalBooleanVal() {
+         let CC = !1,
+           zC = !0;
+         for (const ZC in this.booleans) CC = !0, zC &&= this.booleans[ZC];
+         return CC ? zC : null
+       }
+     }
+     class nC extends wC {
+       getTotalBooleanVal() {
+         const CC = this._getTotalBooleanVal();
+         if (null === CC) throw new Error("Should not be gotten before at least 1 type has been initialised");
+         return CC
+       }
+       _getTotalBooleanVal() {
+         let CC = !1,
+           zC = !1;
+ ... (14 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/96.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/96.js` (13 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7)

#### 1. `bundles/preprod.bloxd.io/chunks/js/96.js` (Changed code · before: `L4-L143` → after: `L5-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7) · [After (L5-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/96.js#L5-L9) · [Before (L4-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/96.js#L4-L143)

```diff
-   4708: (qq, Eq, gq) => {
-     gq.r(Eq), gq.d(Eq, {
-       default: () => Uq
-     });
-     var Yq = gq(57),
-       lq = gq(1512),
-       Oq = gq(307),
-       mq = gq(1219),
-       xq = gq(1592),
-       Aq = gq(1261),
-       cq = gq(1532),
-       uq = gq(1477),
-       Bq = gq(2589);
-     const Wq = {
-       retries: 2,
-       minTimeout: 2e3
- ... (124 more removed lines; see GitHub link above)
+   4801: (CC, zC, ZC) => {
+     var QC;
+     ! function() {
+       var wC = function() {
+         this.init()
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/96.js` (Changed code · before: `L145-L166` → after: `L11-L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7) · [After (L11-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/96.js#L11-L60) · [Before (L145-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/96.js#L145-L166)

```diff
-       (0, Gq.b)(YE), (0, Yq.useEffect)((() => {
-         var qq;
-         if (Xq) return;
-         if (!kq) return void qE({
-           status: "notFound",
-           playerKey: Uq
-         });
-         const Eq = "urlId" in kq && (null === (qq = Kq.current) || void 0 === qq ? void 0 : qq.urlId) === kq.urlId && Cq.current === sq;
-         if (Eq && Iq.current) return;
-         const gq = Eq ? null : rq.c.peek(sq, kq);
-         let Yq = !1;
-         const lq = qq => "loaded" === qq.status && (qq.playerKey === Uq || "urlId" in kq && qq.profile.urlId === kq.urlId);
-         return gq ? (Cq.current = sq, Iq.current = !1, qE({
-           status: "loaded",
-           profile: gq,
-           playerKey: Uq
- ... (6 more removed lines; see GitHub link above)
+       wC.prototype = {
+         init: function() {
+           var CC = this || bC;
+           return CC._counter = 1e3, CC._html5AudioPool = [], CC.html5PoolSize = 10, CC._codecs = {}, CC._howls = [], CC._muted = !1, CC._volume = 1, CC._canPlayEvent = "canplaythrough", CC._navigator = "undefined" !== typeof window && window.navigator ? window.navigator : null, C … [truncated]
+         },
+         volume: function(CC) {
+           var zC = this || bC;
+           if (CC = parseFloat(CC), zC.ctx || MC(), "undefined" !== typeof CC && CC >= 0 && CC <= 1) {
+             if (zC._volume = CC, zC._muted) return zC;
+             zC.usingWebAudio && zC.masterGain.gain.setValueAtTime(CC, bC.ctx.currentTime);
+             for (var ZC = 0; ZC < zC._howls.length; ZC++)
+               if (!zC._howls[ZC]._webAudio)
+                 for (var QC = zC._howls[ZC]._getSoundIds(), wC = 0; wC < QC.length; wC++) {
+                   var nC = zC._howls[ZC]._soundById(QC[wC]);
+                   nC && nC._node && (nC._node.volume = nC._volume * CC)
+                 }
+ ... (34 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/96.js` (Changed code · before: `L168-L171` → after: `L62-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7R62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7) · [After (L62-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/96.js#L62-L70) · [Before (L168-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/96.js#L168-L171)

```diff
-             return {
-               status: "loaded",
-               profile: await uq.e.getPlayerProfile(qq, Eq, Wq)
-             }
+             (new Audio).muted && (CC.noAudio = !0)
+           } catch (zC) {}
+           return CC.noAudio || CC._setupCodecs(), CC
+         },
+         _setupCodecs: function() {
+           var CC = this || bC,
+             zC = null;
+           try {
+             zC = "undefined" !== typeof Audio ? new Audio : null
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/96.js` (Changed code · before: `L173-L177` → after: `L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7) · [After (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/96.js#L72) · [Before (L173-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/96.js#L173-L177)

```diff
-             return (0, Bq.e)(gq) ? {
-               status: "notFound"
-             } : (console.error("Failed to load user profile", gq), {
-               status: "failed"
-             })
+             return CC
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/96.js` (Changed code · before: `L179-L202` → after: `L74-L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7) · [After (L74-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/96.js#L74-L125) · [Before (L179-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/96.js#L179-L202)

```diff
-         }(sq, kq).then((qq => {
-           Yq || ("loaded" === qq.status && (Cq.current = sq, Iq.current = !0), qE((Eq => "failed" === qq.status && lq(Eq) ? Eq : {
-             ...qq,
-             playerKey: Uq
-           })))
-         })), () => {
-           Yq = !0
-         }
-       }), [Xq, Uq, sq, EE]);
-       const lE = "loading" === Dq.status || Dq.playerKey === Uq || "loaded" === Dq.status && !!kq && "urlId" in kq && Dq.profile.urlId === kq.urlId ? Dq : {
-           status: "loading"
-         },
-         OE = "loaded" === lE.status ? lE.profile : null,
-         mE = "loading" === lE.status ? null : function(qq) {
-           if ("loaded" === qq.status) {
-             const {
- ... (8 more removed lines; see GitHub link above)
+           if (!zC || "function" !== typeof zC.canPlayType) return CC;
+           var ZC = zC.canPlayType("audio/mpeg;").replace(/^no$/, ""),
+             QC = CC._navigator ? CC._navigator.userAgent : "",
+             wC = QC.match(/OPR\/([0-6].)/g),
+             nC = wC && parseInt(wC[0].split("/")[1], 10) < 33,
+             fC = -1 !== QC.indexOf("Safari") && -1 === QC.indexOf("Chrome"),
+             oC = QC.match(/Version\/(.*?) /),
+             qC = fC && oC && parseInt(oC[1], 10) < 15;
+           return CC._codecs = {
+             mp3: !(nC || !ZC && !zC.canPlayType("audio/mp3;").replace(/^no$/, "")),
+             mpeg: !!ZC,
+             opus: !!zC.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
+             ogg: !!zC.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
+             oga: !!zC.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
+             wav: !!(zC.canPlayType('audio/wav; codecs="1"') || zC.canPlayType("audio/wav")).replace(/^no$/, ""),
+             aac: !!zC.canPlayType("audio/aac;").replace(/^no$/, ""),
+ ... (36 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/96.js` (Changed code · before: `L204-L239` → after: `L127-L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7R127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7) · [After (L127-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/96.js#L127-L163) · [Before (L204-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/96.js#L204-L239)

```diff
-           return "notFound" === qq.status ? (0, cq.U)() : null
-         }(lE),
-         xE = null !== OE && void 0 !== OE && OE.urlId ? (0, mq.d)({
-           urlId: OE.urlId,
-           name: OE.player.name
-         }) : null;
-       (0, aq.g)(xE);
-       const AE = null !== OE && void 0 !== OE && OE.player.cosmetics.profileEffect ? hq.e[OE.player.cosmetics.profileEffect] : void 0,
-         cE = null !== OE && !Xq && sq.getPlayerName().toLowerCase() === OE.player.name.toLowerCase(),
-         uE = (0, zq.d)(null === OE || void 0 === OE ? void 0 : OE.player.name),
-         BE = cE && sq.playerHasRank("youtuber");
-       Kq.current = OE;
-       const WE = (0, Yq.useCallback)((() => {
-           kq && (rq.c.invalidate(kq), rq.c.get(sq, kq).then((qq => {
-             Fq.current === Uq && (Iq.current = !0, qE({
-               status: "loaded",
- ... (20 more removed lines; see GitHub link above)
+         },
+         _obtainHtml5Audio: function() {
+           var CC = this || bC;
+           if (CC._html5AudioPool.length) return CC._html5AudioPool.pop();
+           var zC = (new Audio).play();
+           return zC && "undefined" !== typeof Promise && (zC instanceof Promise || "function" === typeof zC.then) && zC.catch((function() {
+             console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")
+           })), new Audio
+         },
+         _releaseHtml5Audio: function(CC) {
+           var zC = this || bC;
+           return CC._unlocked && zC._html5AudioPool.push(CC), zC
+         },
+         _autoSuspend: function() {
+           var CC = this;
+           if (CC.autoSuspend && CC.ctx && "undefined" !== typeof CC.ctx.suspend && bC.usingWebAudio) {
+ ... (21 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/96.js` (Changed code · before: `L241-L252` → after: `L165-L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7R165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7) · [After (L165-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/96.js#L165-L206) · [Before (L241-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/96.js#L241-L252)

```diff
-       }), [OE, NE]), (0, Lq.jsxs)("div", {
-         className: bq()("PlayerProfile", {
-           PlayerProfilePortrait: gq
-         }),
-         children: [mE && (0, Lq.jsx)(xq.c, {
-           meta: mE
-         }), (0, Lq.jsxs)("div", {
-           className: "PlayerProfileBackgroundContainer",
-           children: [AE && (0, Lq.jsx)(AE, {}), !AE && (0, Lq.jsx)("div", {
-             className: "PlayerProfileBackground",
-             style: {
-               backgroundImage: `url(${eq.current})`
+       };
+       var bC = new wC,
+         nC = function(CC) {
+           CC.src && 0 !== CC.src.length ? this.init(CC) : console.error("An array of source files must be passed with any new Howl.")
+         };
+       nC.prototype = {
+         init: function(CC) {
+           var zC = this;
+           return bC.ctx || MC(), zC._autoplay = CC.autoplay || !1, zC._format = "string" !== typeof CC.format ? CC.format : [CC.format], zC._html5 = CC.html5 || !1, zC._muted = CC.mute || !1, zC._loop = CC.loop || !1, zC._pool = CC.pool || 5, zC._preload = "boolean" !== typeof CC … [truncated]
+             method: CC.xhr && CC.xhr.method ? CC.xhr.method : "GET",
+             headers: CC.xhr && CC.xhr.headers ? CC.xhr.headers : null,
+             withCredentials: !(!CC.xhr || !CC.xhr.withCredentials) && CC.xhr.withCredentials
+           }, zC._duration = 0, zC._state = "unloaded", zC._sounds = [], zC._endTimers = {}, zC._queue = [], zC._playLock = !1, zC._onend = CC.onend ? [{
+             Qg: CC.onend
+           }] : [], zC._onfade = CC.onfade ? [{
+             Qg: CC.onfade
+ ... (26 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/96.js` (Changed code · before: `L254-L426` → after: `L208-L228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7R208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7) · [After (L208-L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/96.js#L208-L228) · [Before (L254-L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/96.js#L254-L426)

```diff
-           })]
-         }), (0, Lq.jsxs)("div", {
-           className: "PlayerProfileHeader",
-           children: [(0, Lq.jsx)(Qq.d, {
-             onClick: YE,
-             children: qq("general:back")
-           }), OE && !Xq && !cE && pq.featureFlags.useSocialFeatures && (0, Lq.jsx)("div", {
-             className: "PlayerProfileExclusionActions",
-             children: (0, Lq.jsx)(Sq.c, {
-               playerName: OE.player.name,
-               className: "SmallTextLight"
-             })
-           })]
-         }), "loading" === lE.status && (0, Lq.jsx)("div", {
-           className: "PlayerProfileCentredMessage",
-           children: (0, Lq.jsx)(Pq.e, {})
- ... (157 more removed lines; see GitHub link above)
+           }), zC._preload && "none" !== zC._preload && zC.load(), zC
+         },
+         load: function() {
+           var CC = this,
+             zC = null;
+           if (bC.noAudio) CC._emit("loaderror", null, "No audio support.");
+           else {
+             "string" === typeof CC._src && (CC._src = [CC._src]);
+             for (var ZC = 0; ZC < CC._src.length; ZC++) {
+               var QC, wC;
+               if (CC._format && CC._format[ZC]) QC = CC._format[ZC];
+               else {
+                 if ("string" !== typeof(wC = CC._src[ZC])) {
+                   CC._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
+                   continue
+                 }(QC = /^data:audio\/([^;,]+);/i.exec(wC)) || (QC = /\.([^.]+)$/.exec(wC.split("?", 1)[0])), QC && (QC = QC[1].toLowerCase())
+ ... (5 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/96.js` (Changed code · before: `L428-L437` → after: `L230-L693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7R230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7) · [After (L230-L693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/96.js#L230-L693) · [Before (L428-L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/96.js#L428-L437)

```diff
-           },
-           prefixText: Oq.w[Eq],
-           placeholderText: "playBloxd",
-           initialValue: null !== (qq = null === gq || void 0 === gq ? void 0 : gq.handle) && void 0 !== qq ? qq : "",
-           maxLength: 30,
-           submitText: "general:save",
-           secondaryButtonText: gq ? "general:remove" : void 0
-         }).getResult().then((async qq => {
-           if ("notificationTornDown" !== qq && null !== qq) try {
-             "submit" === qq.type ? await cq.e.setSocialLink(lq, Eq, qq.value) : await cq.e.clearSocialLink(lq, Eq), Bq()
+             if (zC) return CC._src = zC, CC._state = "loading", "https:" === window.location.protocol && "http:" === zC.slice(0, 5) && (CC._html5 = !0, CC._webAudio = !1), new fC(CC), CC._webAudio && qC(CC), CC;
+             CC._emit("loaderror", null, "No codec support for selected audio sources.")
+           }
+         },
+         play: function(CC, zC) {
+           var ZC = this,
+             QC = null;
+           if ("number" === typeof CC) QC = CC, CC = null;
+           else {
+             if ("string" === typeof CC && "loaded" === ZC._state && !ZC._sprite[CC]) return null;
+             if ("undefined" === typeof CC && (CC = "__default", !ZC._playLock)) {
+               for (var wC = 0, nC = 0; nC < ZC._sounds.length; nC++) ZC._sounds[nC].kR && !ZC._sounds[nC]._ended && (wC++, QC = ZC._sounds[nC]._id);
+               1 === wC ? CC = null : QC = null
+             }
+           }
+           var fC = QC ? ZC._soundById(QC) : ZC._inactiveSound();
+ ... (448 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/96.js` (Changed code · before: `L439-L442` → after: `L695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7R695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7) · [After (L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/96.js#L695) · [Before (L439-L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/96.js#L439-L442)

```diff
-             console.error("Failed to update social link", gq), uq.NotificationProvider.showAlertPopup({
-               title: gq.errorMessageForUser,
-               confirmText: "general:ok"
-             })
+             CC.onerror()
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/96.js` (Changed code · before: `L444-L474` → after: `L697-L700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7R697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7) · [After (L697-L700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/96.js#L697-L700) · [Before (L444-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/96.js#L444-L474)

```diff
-         }))
-       }
-       if (gq) {
-         const qq = `@${gq.handle}`;
-         return (0, Wq.jsxs)("a", {
-           className: "PlayerProfileSocialLink",
-           style: {
-             background: dq.color
-           },
-           href: gq.profileUrl,
-           target: "_blank",
-           rel: "noopener noreferrer",
-           children: [(0, Wq.jsxs)("div", {
-             className: "PlayerProfileSocialLinkMain",
-             children: [(0, Wq.jsx)(aq, {
-               platform: Eq
- ... (15 more removed lines; see GitHub link above)
+         },
+         WC = function(CC, zC) {
+           var ZC = function() {
+               zC._emit("loaderror", null, "Decoding audio data failed.")
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/96.js` (Changed code · before: `L476-L511` → after: `L702-L858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7R702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7) · [After (L702-L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/96.js#L702-L858) · [Before (L476-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/96.js#L476-L511)

```diff
-             children: (0, Wq.jsx)(xq.d, {
-               name: "pen-to-square"
-             })
-           }), !Yq && (0, Wq.jsx)("span", {
-             className: "PlayerProfileSocialLinkArrow",
-             children: (0, Wq.jsx)(xq.d, {
-               name: "arrow-up-right-from-square"
-             })
-           })]
-         })
-       }
-       return (0, Wq.jsxs)("button", {
-         type: "button",
-         className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
-         style: {
-           background: dq.color
- ... (20 more removed lines; see GitHub link above)
+             QC = function(CC) {
+               CC && zC._sounds.length > 0 ? (oC[zC._src] = CC, NC(zC, CC)) : ZC()
+             };
+           "undefined" !== typeof Promise && 1 === bC.ctx.decodeAudioData.length ? bC.ctx.decodeAudioData(CC).then(QC).catch(ZC) : bC.ctx.decodeAudioData(CC, QC, ZC)
+         },
+         NC = function(CC, zC) {
+           zC && !CC._duration && (CC._duration = zC.duration), 0 === Object.keys(CC._sprite).length && (CC._sprite = {
+             __default: [0, 1e3 * CC._duration]
+           }), "loaded" !== CC._state && (CC._state = "loaded", CC._emit("load"), CC._loadQueue())
+         },
+         MC = function() {
+           if (bC.usingWebAudio) {
+             try {
+               "undefined" !== typeof AudioContext ? bC.ctx = new AudioContext : "undefined" !== typeof webkitAudioContext ? bC.ctx = new webkitAudioContext : bC.usingWebAudio = !1
+             } catch (wC) {
+               bC.usingWebAudio = !1
+ ... (141 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/96.js` (Changed code · before: `L513-L543` → after: `L860-L893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7R860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7) · [After (L860-L893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/96.js#L860-L893) · [Before (L513-L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/96.js#L513-L543)

```diff
-         })]
-       })
-     }
- 
-     function dq(qq) {
-       let {
-         socialLinks: Eq,
-         editable: gq = !1,
-         userContext: Yq,
-         onLinksUpdated: lq
-       } = qq;
-       if (!gq && 0 === Eq.length) return null;
-       const mq = new Map(Eq.map((qq => [qq.platform, qq]))),
-         xq = gq ? Oq.u : Eq.map((qq => qq.platform));
-       return (0, Wq.jsx)("div", {
-         className: "PlayerProfileSocialLinks",
- ... (15 more removed lines; see GitHub link above)
+         } else 2 === bC.length && (CC = bC[0], ZC = parseInt(bC[1], 10));
+         for (var nC = wC._getSoundIds(ZC), fC = 0; fC < nC.length; fC++)
+           if (QC = wC._soundById(nC[fC])) {
+             var oC = QC._pannerAttr;
+             oC = {
+               coneInnerAngle: "undefined" !== typeof CC.coneInnerAngle ? CC.coneInnerAngle : oC.coneInnerAngle,
+               coneOuterAngle: "undefined" !== typeof CC.coneOuterAngle ? CC.coneOuterAngle : oC.coneOuterAngle,
+               coneOuterGain: "undefined" !== typeof CC.coneOuterGain ? CC.coneOuterGain : oC.coneOuterGain,
+               distanceModel: "undefined" !== typeof CC.distanceModel ? CC.distanceModel : oC.distanceModel,
+               maxDistance: "undefined" !== typeof CC.maxDistance ? CC.maxDistance : oC.maxDistance,
+               refDistance: "undefined" !== typeof CC.refDistance ? CC.refDistance : oC.refDistance,
+               rolloffFactor: "undefined" !== typeof CC.rolloffFactor ? CC.rolloffFactor : oC.rolloffFactor,
+               panningModel: "undefined" !== typeof CC.panningModel ? CC.panningModel : oC.panningModel
+             };
+             var qC = QC._panner;
+             qC ? (qC.coneInnerAngle = oC.coneInnerAngle, qC.coneOuterAngle = oC.coneOuterAngle, qC.coneOuterGain = oC.coneOuterGain, qC.distanceModel = oC.distanceModel, qC.maxDistance = oC.maxDistance, qC.refDistance = oC.refDistance, qC.rolloffFactor = oC.rolloffFactor, qC.pann … [truncated]
+ ... (18 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/97.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/97.js` (14 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L4-L1425` → after: `L4-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L4-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/97.js#L4-L19) · [Before (L4-L1425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/97.js#L4-L1425)

```diff
-   29244: (qq, Eq, gq) => {
-     var Yq = {
-       "./Player_Atlas.png": 28291,
-       "./astro_set_1_attachable.png": 28300,
-       "./astro_set_2_attachable.png": 28308,
-       "./astro_set_3_attachable.png": 28311,
-       "./astro_set_4_attachable.png": 28316,
-       "./beaver_lumberjack.png": 28321,
-       "./bee_set_1_attachable.png": 28326,
-       "./bee_set_2_attachable.png": 28328,
-       "./bee_set_3_attachable_blue.png": 28330,
-       "./bee_set_3_attachable_green.png": 28338,
-       "./bee_set_3_attachable_red.png": 28341,
-       "./bee_set_4_attachable.png": 28348,
-       "./capeTextures/cape_cow_cream.png": 28352,
-       "./capeTextures/cape_cow_normal.png": 28360,
- ... (1406 more removed lines; see GitHub link above)
+   4807: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       default: () => tC
+     });
+     var QC = ZC(48),
+       wC = ZC(1463),
+       bC = ZC(326),
+       nC = ZC(1178),
+       fC = ZC(1542),
+       oC = ZC(1211),
+       qC = ZC(1479),
+       FC = ZC(1439),
+       WC = ZC(2657);
+     const NC = {
+       retries: 2,
+       minTimeout: 2e3
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L1429-L1430` → after: `L50-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L50-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/97.js#L50-L70) · [Before (L1429-L1430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/97.js#L1429-L1430)

```diff
-       var Eq = Oq(qq);
-       return gq(Eq)
+       let {
+         icon: zC,
+         label: ZC,
+         value: QC
+       } = CC;
+       return (0, rC.jsxs)("div", {
+         className: "PlayerProfileStat",
+         children: [(0, rC.jsx)(YC.c, {
+           name: zC,
+           className: "PlayerProfileStatIcon"
+         }), (0, rC.jsxs)("div", {
+           className: "PlayerProfileStatText",
+           children: [(0, rC.jsx)("div", {
+             className: "PlayerProfileStatLabel SmallTextLight",
+             children: ZC
+           }), (0, rC.jsx)("div", {
+ ... (5 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L1434-L1436` → after: `L74-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L74-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/97.js#L74-L86) · [Before (L1434-L1436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/97.js#L1434-L1436)

```diff
-       if (!gq.o(Yq, qq)) {
-         var Eq = new Error("Cannot find module '" + qq + "'");
-         throw Eq.code = "MODULE_NOT_FOUND", Eq
+       let {
+         profile: zC
+       } = CC;
+       const {
+         t: ZC,
+         selectedLanguage: QC
+       } = (0, PC.y)();
+       let wC = ZC("homePage:profileUnknown");
+       if (zC.lastOnline) {
+         const CC = (0, PC.m)(QC.code, "homePage:profileTimeAgo");
+         wC = ZC("homePage:profileTimeAgo", {
+           time: (0, bC.U)(CC, zC.lastOnline, Date.now())
+         })
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L1438-L2864` → after: `L88-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L88-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/97.js#L88-L108) · [Before (L1438-L2864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/97.js#L1438-L2864)

```diff
-       return Yq[qq]
-     }
-     lq.keys = function() {
-       return Object.keys(Yq)
-     }, lq.resolve = Oq, qq.exports = lq, lq.id = 29251
-   },
-   9486: (qq, Eq, gq) => {
-     var Yq = {
-       "./allium.png": 9489,
-       "./alloy_kiln_back.png": 9498,
-       "./alloy_kiln_front.png": 9504,
-       "./alloy_kiln_side.png": 9513,
-       "./alloy_kiln_side_running0.png": 9521,
-       "./alloy_kiln_side_running1.png": 9525,
-       "./alloy_kiln_side_running2.png": 9530,
-       "./alloy_kiln_side_running3.png": 9534,
- ... (1411 more removed lines; see GitHub link above)
+       let nC = ZC("homePage:profileUnknown");
+       return zC.accountCreatedAt && (nC = new Date(zC.accountCreatedAt).toLocaleDateString(void 0, {
+         year: "numeric",
+         month: "short",
+         day: "numeric"
+       })), (0, rC.jsxs)("div", {
+         className: "PlayerProfileStats",
+         children: [(0, rC.jsx)(TC, {
+           icon: "hourglass",
+           label: ZC("homePage:profileTimePlayed"),
+           value: (0, EC.c)(zC.totalPlayMinutes)
+         }), (0, rC.jsx)(TC, {
+           icon: "wifi",
+           label: ZC("homePage:profileLastOnline"),
+           value: wC
+         }), (0, rC.jsx)(TC, {
+ ... (5 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L2867-L2872` → after: `L111-L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L111-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/97.js#L111-L343) · [Before (L2867-L2872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/97.js#L2867-L2872)

```diff
-     function Oq(qq) {
-       if (!gq.o(Yq, qq)) {
-         var Eq = new Error("Cannot find module '" + qq + "'");
-         throw Eq.code = "MODULE_NOT_FOUND", Eq
-       }
-       return Yq[qq]
+     function tC() {
+       const {
+         t: CC
+       } = (0, PC.y)(), zC = (0, JC.useNavigatePreserveSearch)(), ZC = (0, MC.k)(), {
+         playerName: vC,
+         playerUrlName: hC
+       } = (0, wC.C)(), EC = (0, wC.v)(), TC = (0, nC.c)(EC.pathname), tC = TC && ("urlId" in TC ? `urlId:${TC.urlId}` : `name:${TC.lowerCaseName}`), DC = (0, QC.useRef)(tC);
+       DC.current = tC;
+       const {
+         userContext: jC,
+         isUserContextUpdating: yC
+       } = (0, SC.e)(), LC = (0, QC.useRef)(null), UC = (0, QC.useRef)(null), BC = (0, QC.useRef)(null), OC = (0, QC.useRef)(!1), kC = (0, QC.useRef)((0, bC.Qb)(sC)), [VC, Cz] = (0, QC.useState)((() => {
+         const CC = TC && iC.b.peek(jC, TC);
+         return CC ? {
+           status: "loaded",
+           profile: CC,
+ ... (217 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L2878-L2986` → after: `L346-L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L346-L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/97.js#L346-L384) · [Before (L2878-L2986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/97.js#L2878-L2986)

```diff
-   27011: (qq, Eq, gq) => {
-     var Yq = {
-       "./Air Walk.png": 27020,
-       "./Antlers Bonus.png": 27023,
-       "./Arrow Damage Enchantment.png": 27028,
-       "./Arrow Speed Enchantment.png": 27037,
-       "./Attack Speed Enchantment.png": 27042,
-       "./Blindness.png": 27049,
-       "./Boating.png": 27057,
-       "./Bounciness.png": 27066,
-       "./Brain Rot.png": 27071,
-       "./Break Speed Enchantment.png": 27075,
-       "./Bunny Hop.png": 27078,
-       "./Critical Damage Enchantment.png": 27082,
-       "./Cross.png": 27086,
-       "./Damage Enchantment.png": 27091,
- ... (93 more removed lines; see GitHub link above)
+   4819: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       b: () => pC
+     });
+     var QC = ZC(1002),
+       wC = ZC.n(QC),
+       bC = ZC(4579),
+       nC = ZC(1143),
+       fC = ZC(1013),
+       oC = ZC(1388),
+       qC = ZC(1439),
+       FC = ZC(1307),
+       WC = ZC(2454),
+       NC = ZC(1056);
+     const MC = {
+       youtube: {
+ ... (23 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L4724-L4725` → after: `L389-L403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L389-L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/97.js#L389-L403) · [Before (L4724-L4725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/97.js#L4724-L4725)

```diff
-       var Eq = Oq(qq);
-       return gq(Eq)
+       let {
+         platform: zC
+       } = CC;
+       const ZC = "youtube" === zC;
+       return (0, NC.jsxs)("span", {
+         className: wC()("PlayerProfileSocialLinkIcon", {
+           PlayerProfileSocialLinkIconYoutube: ZC
+         }),
+         children: [ZC && (0, NC.jsx)(WC.d, {
+           variant: "white"
+         }), !ZC && (0, NC.jsx)(fC.c, {
+           name: MC[zC].icon,
+           kit: "brands"
+         })]
+       })
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L4729-L4755` → after: `L407-L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L407-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/97.js#L407-L417) · [Before (L4729-L4755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/97.js#L4729-L4755)

```diff
-       if (!gq.o(Yq, qq)) {
-         var Eq = new Error("Cannot find module '" + qq + "'");
-         throw Eq.code = "MODULE_NOT_FOUND", Eq
-       }
-       return Yq[qq]
-     }
-     lq.keys = function() {
-       return Object.keys(Yq)
-     }, lq.resolve = Oq, qq.exports = lq, lq.id = 17404
-   },
-   9371: (qq, Eq, gq) => {
-     gq.r(Eq), gq.d(Eq, {
-       blockMetadata: () => mq.i,
-       getDefaultModel: () => uq,
-       getDefaultSkyBox: () => Bq,
-       getDefaultTexture: () => cq,
- ... (11 more removed lines; see GitHub link above)
+       let {
+         platform: zC,
+         link: ZC,
+         editable: QC,
+         userContext: wC,
+         onLinksUpdated: WC
+       } = CC;
+       const {
+         t: SC
+       } = (0, nC.y)(), pC = MC[zC];
+       if (!ZC && !QC) return null;
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L4757-L4780` → after: `L419-L442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L419-L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/97.js#L419-L442) · [Before (L4757-L4780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/97.js#L4757-L4780)

```diff
-     function cq(qq, Eq) {
-       let lq;
-       try {
-         if (Eq === Yq.g.BLOCK) lq = {
-           type: Yq.h.BASE64,
-           url: Aq.block(qq)
-         };
-         else if (Eq === Yq.g.ITEM) lq = {
-           type: Yq.h.BASE64,
-           url: Aq.item(qq)
-         };
-         else if (Eq === Yq.g.ICON) lq = {
-           type: Yq.h.BASE64,
-           url: gq(27011)(`./${qq}.png`)
-         };
-         else if (Eq === Yq.g.LIFEFORM_ATLAS) {
- ... (8 more removed lines; see GitHub link above)
+       function PC() {
+         var CC;
+         if (!wC || !WC) return;
+         FC.NotificationProvider.showInputPopup({
+           title: "homePage:profileSocialLinkEditTitle",
+           textOpts: {
+             title: {
+               platform: pC.name
+             }
+           },
+           prefixText: bC.s[zC],
+           placeholderText: "playBloxd",
+           initialValue: null !== (CC = null === ZC || void 0 === ZC ? void 0 : ZC.handle) && void 0 !== CC ? CC : "",
+           maxLength: 30,
+           submitText: "general:save",
+           secondaryButtonText: ZC ? "general:remove" : void 0
+ ... (8 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L4782-L4787` → after: `L444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/97.js#L444) · [Before (L4782-L4787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/97.js#L4782-L4787)

```diff
-         } else Eq === Yq.g.PLAYER_ASSET && (lq = {
-           type: Yq.h.BASE64,
-           url: gq(29244)(`./${qq}.png`)
-         })
-       } catch {
-         throw new Error(`Default texture for ${qq} not found`)
+         }))
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L4789-L4813` → after: `L446-L485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L446-L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/97.js#L446-L485) · [Before (L4789-L4813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/97.js#L4789-L4813)

```diff
-       return lq
-     }
- 
-     function uq(qq, Eq) {
-       let lq;
-       try {
-         if (Eq === Yq.e.BLOCK) {
-           const Eq = gq(29251)(`./${qq}.glb`);
-           lq = {
-             type: Yq.h.BASE64,
-             url: Eq
-           }
-         } else if (Eq === Yq.e.ITEM) lq = {
-           type: Yq.h.HTTP,
-           url: `${Oq.clientSideServerUrls.staticUrl}/models/${qq}.glb`
-         };
- ... (9 more removed lines; see GitHub link above)
+       if (ZC) {
+         const CC = `@${ZC.handle}`;
+         return (0, NC.jsxs)("a", {
+           className: "PlayerProfileSocialLink",
+           style: {
+             background: pC.color
+           },
+           href: ZC.profileUrl,
+           target: "_blank",
+           rel: "noopener noreferrer",
+           children: [(0, NC.jsxs)("div", {
+             className: "PlayerProfileSocialLinkMain",
+             children: [(0, NC.jsx)(gC, {
+               platform: zC
+             }), (0, NC.jsx)("span", {
+               className: "PlayerProfileSocialLinkText",
+ ... (24 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L4815` → after: `L487-L514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L487-L514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/97.js#L487-L514) · [Before (L4815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/97.js#L4815)

```diff
-       return lq
+       return (0, NC.jsxs)("button", {
+         type: "button",
+         className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
+         style: {
+           background: pC.color
+         },
+         ...(0, oC.U)(),
+         onClick: () => {
+           PC()
+         },
+         children: [(0, NC.jsx)(gC, {
+           platform: zC
+         }), (0, NC.jsxs)("span", {
+           className: "PlayerProfileSocialLinkText",
+           children: [(0, NC.jsx)("span", {
+             className: "PlayerProfileSocialLinkName SmallTextBold",
+ ... (12 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L4819` → after: `L518-L539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L518-L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/97.js#L518-L539) · [Before (L4819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/97.js#L4819)

```diff
-       return lq.k[qq]
+       let {
+         socialLinks: zC,
+         editable: ZC = !1,
+         userContext: QC,
+         onLinksUpdated: wC
+       } = CC;
+       if (!ZC && 0 === zC.length) return null;
+       const nC = new Map(zC.map((CC => [CC.platform, CC]))),
+         fC = ZC ? bC.q : zC.map((CC => CC.platform));
+       return (0, NC.jsx)("div", {
+         className: "PlayerProfileSocialLinks",
+         children: (0, NC.jsx)("div", {
+           className: "PlayerProfileSocialLinksList",
+           children: fC.map((CC => (0, NC.jsx)(SC, {
+             platform: CC,
+             link: nC.get(CC),
+ ... (6 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L4822-L17025` → after: `L542-L543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L542-L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/97.js#L542-L543) · [Before (L4822-L17025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/97.js#L4822-L17025)

```diff
-   34293: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       b: () => Oq,
-       f: () => xq,
-       g: () => mq,
-       j: () => lq,
-       k: () => Yq
-     });
-     const Yq = {
-         default: {
-           type: "earth",
-           vertexTint: [137, 207, 240]
-         },
-         gloomy: {
-           type: "custom",
-           nx: "/textures/skyBoxes/gloomy/_nx.jpg",
- ... (12188 more removed lines; see GitHub link above)
+   4811: CC => {
+     CC.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGOws7P7D8Kmpqb/NTU1wTQymwGbAhANwwzIOmAYxQRkCXNzczBGtgrFBGQFKFZgsxtuAi67YY5HMQGbAgCIxWSBYHJzHAAAAABJRU5ErkJggg=="
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/98.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/98.js` (74 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec)

#### 1. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/98.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/98.js#L2)

```diff
- export const ids = [98, 186];
+ export const ids = [98];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L4-L16` → after: `L4-L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L4-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/98.js#L4-L110) · [Before (L4-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/98.js#L4-L16)

```diff
-   9158: (qq, Eq, gq) => {
-     gq.r(Eq), gq.d(Eq, {
-       EverythingMenu: () => xx
-     });
-     var Yq = gq(57),
-       lq = gq(1018),
-       Oq = gq.n(lq),
-       mq = gq(1183),
-       xq = gq(1025),
-       Aq = gq(2054),
-       cq = gq(1422),
-       uq = gq(1086),
-       Bq = gq(1070);
+   28836: (CC, zC, ZC) => {
+     var QC = {
+       "./Player_Atlas.png": 27876,
+       "./astro_set_1_attachable.png": 27879,
+       "./astro_set_2_attachable.png": 27888,
+       "./astro_set_3_attachable.png": 27893,
+       "./astro_set_4_attachable.png": 27897,
+       "./beaver_lumberjack.png": 27906,
+       "./bee_set_1_attachable.png": 27915,
+       "./bee_set_2_attachable.png": 27923,
+       "./bee_set_3_attachable_blue.png": 27925,
+       "./bee_set_3_attachable_green.png": 27928,
+       "./bee_set_3_attachable_red.png": 27931,
+       "./bee_set_4_attachable.png": 27937,
+       "./capeTextures/cape_cow_cream.png": 27940,
+       "./capeTextures/cape_cow_normal.png": 27949,
+ ... (91 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L19-L94` → after: `L113-L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L113-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/98.js#L113-L114) · [Before (L19-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/98.js#L19-L94)

```diff
-       let {
-         items: Eq,
-         link: gq,
-         onClick: Yq,
-         selectedItemId: lq,
-         className: Wq,
-         padStartsOnTab: Nq = !0
-       } = qq;
-       const {
-         t: aq
-       } = (0, mq.v)(), Vq = (0, uq.l)(), dq = [];
-       for (const Oq of Eq) {
-         var jq;
-         const qq = dq[dq.length - 1];
-         var Hq;
-         if (qq && qq.title === (null !== (jq = Oq.section) && void 0 !== jq ? jq : null)) qq.items.push(Oq);
- ... (60 more removed lines; see GitHub link above)
+       var zC = bC(CC);
+       return ZC(zC)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L111-L130` → after: `L118-L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L118-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/98.js#L118-L120) · [Before (L111-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/98.js#L111-L130)

```diff
-       let {
-         setApplySettingsCallback: Eq
-       } = qq;
-       const {
-         clientEscMenuOptions: gq
-       } = (0, rq.j)(["clientEscMenuOptions"]), [lq, Oq] = (0, Yq.useState)(!1), [mq, xq] = (0, Yq.useState)(!1), [Aq, uq] = (0, Yq.useState)(6400), [Wq, Nq] = (0, Yq.useState)(3600), [aq, Vq] = (0, Yq.useState)(!1), [dq, jq] = (0, Yq.useState)(!1);
- 
-       function Hq(qq) {
-         const Eq = "screenshot" === qq ? xq : Oq;
-         Eq(!0);
-         const gq = aq ? "normals" : dq ? "depth" : null;
-         vq.devTools.downloadScene(qq, {
-           width: Aq,
-           height: Wq,
-           colouring: gq
-         }).catch((qq => {
- ... (4 more removed lines; see GitHub link above)
+       if (!ZC.o(QC, CC)) {
+         var zC = new Error("Cannot find module '" + CC + "'");
+         throw zC.code = "MODULE_NOT_FOUND", zC
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L132-L233` → after: `L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/98.js#L122) · [Before (L132-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/98.js#L132-L233)

```diff
-       return (0, Bq.jsxs)("div", {
-         className: "DeveloperToolsCategory",
-         children: [(0, Bq.jsx)(tq.d, {
-           label: "Disable Ambient Occlusion",
-           checked: gq.disableAmbientOcclusion,
-           onClick: qq => {
-             rq.b.setClientEscMenuOptions({
-               disableAmbientOcclusion: qq
-             }), Eq((() => tq.l))
-           },
-           circleInfoText: "Disables ambient occlusion which is the shadow effect that makes corners and crevices darker."
-         }), vq.devTools.supports("ambientLight") && (0, Bq.jsx)(tq.h, {
-           name: "Ambient Lighting Intensity",
-           min: 0,
-           max: 1,
-           step: .01,
- ... (86 more removed lines; see GitHub link above)
+       return QC[CC]
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L235-L253` → after: `L124-L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L124-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/98.js#L124-L271) · [Before (L235-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/98.js#L235-L253)

```diff
-     var nq = gq(136),
-       bq = gq(1109),
-       iq = gq(1195),
-       Zq = gq(2916),
-       fq = gq(1498),
-       Mq = gq(1261),
-       Tq = gq(1219),
-       zq = gq(2990),
-       Sq = gq(2020),
-       pq = gq(1477),
-       Gq = gq(307),
-       Lq = gq(2235),
-       Jq = gq(2250),
-       kq = gq(2601),
-       Rq = gq(1628),
-       Uq = gq(2965),
- ... (3 more removed lines; see GitHub link above)
+     wC.keys = function() {
+       return Object.keys(QC)
+     }, wC.resolve = bC, CC.exports = wC, wC.id = 28836
+   },
+   33184: (CC, zC, ZC) => {
+     var QC = {
+       "./67/67_Model.glb": 33193,
+       "./67/67_Reconstructed.glb": 33202,
+       "./Armour Collector/Armour Collector_Model.glb": 33205,
+       "./Armour Collector/Armour Collector_Reconstructed.glb": 33210,
+       "./Bear/Bear_Model.glb": 33219,
+       "./Bobino Musculino/Bobino Musculino_Model.glb": 33222,
+       "./Bobino Musculino/Bobino Musculino_Reconstructed.glb": 33227,
+       "./Camel/Camel_Model.glb": 33234,
+       "./Capitano Explovissimo/Capitano Explovissimo_Model.glb": 33242,
+       "./Capitano Explovissimo/Capitano Explovissimo_Reconstructed.glb": 33251,
+ ... (132 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L256-L291` → after: `L274-L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L274-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/98.js#L274-L275) · [Before (L256-L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/98.js#L256-L291)

```diff
-       const {
-         t: Eq,
-         selectedLanguage: gq
-       } = (0, mq.v)(), {
-         userContext: lq
-       } = (0, aq.c)(), {
-         superRankInfo: Oq
-       } = lq, xq = qq && ((0, Gq.Jc)(Oq) || lq.ranksMayChange) && (0, Jq.purchasesAllowed)(), {
-         accountId: Aq,
-         data: cq
-       } = (0, kq.h)(Uq.c, xq);
-       if ((0, Yq.useEffect)((() => {
-           if (xq) return Uq.c.watchAccount(), Rq.c.addRefetchListener("billing", (qq => {
-             "reconnected" === qq ? Uq.c.refreshAfterReconnect() : Uq.c.refresh()
-           }))
-         }), [xq]), !xq || !(0, Gq.Jc)(Oq) || null === cq || Aq !== lq.whamm) return null;
- ... (20 more removed lines; see GitHub link above)
+       var zC = bC(CC);
+       return ZC(zC)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L301-L363` → after: `L279-L281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L279-L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/98.js#L279-L281) · [Before (L301-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/98.js#L301-L363)

```diff
-       let {
-         showing: Eq
-       } = qq;
-       const {
-         t: gq
-       } = (0, mq.v)(), {
-         data: Yq,
-         failed: lq
-       } = (0, kq.h)(Dq.d, Eq);
-       return 0 === (null === Yq || void 0 === Yq ? void 0 : Yq.length) || null === Yq && !lq ? null : (0, Bq.jsxs)("div", {
-         className: "SettingBox AccountSettingsPaymentHistory",
-         children: [(0, Bq.jsx)("div", {
-           className: "AccountSettingsLabel",
-           children: gq("paymentHistory:title")
-         }), null === Yq && lq && (0, Bq.jsx)("div", {
-           className: "AccountSettingsPaymentHistoryError",
- ... (47 more removed lines; see GitHub link above)
+       if (!ZC.o(QC, CC)) {
+         var zC = new Error("Cannot find module '" + CC + "'");
+         throw zC.code = "MODULE_NOT_FOUND", zC
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L366-L380` → after: `L285-L601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L285-L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/98.js#L285-L601) · [Before (L366-L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/98.js#L366-L380)

```diff
-     var cE = gq(296),
-       uE = gq(2454);
-     const BE = {
-       appStore: {
-         name: "App Store",
-         ...cE.Pb.appStore
-       },
-       googlePlay: {
-         name: "Google Play",
-         ...cE.Pb.googlePlay
-       },
-       discord: {
-         name: "Discord",
-         ...cE.Pb.discord
-       }
+     wC.keys = function() {
+       return Object.keys(QC)
+     }, wC.resolve = bC, CC.exports = wC, wC.id = 33184
+   },
+   27101: (CC, zC, ZC) => {
+     var QC = {
+       "./67/67_Atlas.png": 27108,
+       "./67/variations/0_67_default.png": 27117,
+       "./Armour Collector/Armour Collector_Atlas.png": 27122,
+       "./Armour Collector/variations/0_armour collector_default.png": 27124,
+       "./Bear/BearSaddle_Atlas.png": 27130,
+       "./Bear/Bear_Atlas.png": 27139,
+       "./Bear/variations/0_bear_default.png": 27146,
+       "./Bobino Musculino/Bobino Musculino_Atlas.png": 27155,
+       "./Bobino Musculino/variations/0_bobino musculino_default.png": 27164,
+       "./Camel/CamelSaddle_Atlas.png": 27171,
+ ... (301 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L384-L494` → after: `L605-L606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L605-L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/98.js#L605-L606) · [Before (L384-L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/98.js#L384-L494)

```diff
-       let {
-         warning: Eq,
-         subscriptions: gq
-       } = qq;
-       const {
-         t: Yq
-       } = (0, mq.v)();
-       return null !== gq && 0 === gq.length ? (0, Bq.jsx)(Bq.Fragment, {
-         children: Yq(Eq)
-       }) : (0, Bq.jsxs)("div", {
-         className: "DeleteAccountSubtitle",
-         children: [Yq(Eq), null === gq && (0, Bq.jsx)("div", {
-           className: "DeleteAccountSubtitleNote",
-           children: Yq("auth:deleteAccountSubscriptionsLoadFailed")
-         }), null !== gq && (0, Bq.jsxs)(Bq.Fragment, {
-           children: [(0, Bq.jsx)("div", {
- ... (95 more removed lines; see GitHub link above)
+       var zC = bC(CC);
+       return ZC(zC)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L501-L586` → after: `L610-L612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L610-L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/98.js#L610-L612) · [Before (L501-L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/98.js#L501-L586)

```diff
-       let {
-         showing: Eq
-       } = qq;
-       const {
-         t: gq
-       } = (0, mq.v)(), {
-         data: Yq,
-         failed: lq
-       } = (0, kq.h)(aE.d, Eq), Oq = null === Yq ? null : (0, aE.h)(Yq);
-       return (0, Bq.jsxs)("div", {
-         className: "SettingBox BlockedAndIgnoredPlayers",
-         children: [(0, Bq.jsx)("div", {
-           className: "AccountSettingsLabel",
-           children: gq("settingsMenu:blockedAndIgnoredPlayers")
-         }), null === Oq && !lq && (0, Bq.jsx)(yq.e, {}), null === Oq && lq && (0, Bq.jsxs)("div", {
-           className: "BlockedAndIgnoredPlayersError",
- ... (70 more removed lines; see GitHub link above)
+       if (!ZC.o(QC, CC)) {
+         var zC = new Error("Cannot find module '" + CC + "'");
+         throw zC.code = "MODULE_NOT_FOUND", zC
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L588-L868` → after: `L614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/98.js#L614) · [Before (L588-L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/98.js#L588-L868)

```diff
-       return (0, Yq.useEffect)((() => (!0 === gq ? (clearInterval(OE.current), OE.current = setInterval(Vq, 1e3)) : clearInterval(OE.current), () => {
-         clearInterval(OE.current)
-       })), [gq, Vq]), (0, Yq.useEffect)((() => {
-         var qq;
-         Pq(null !== (qq = dq.getPlayerName()) && void 0 !== qq ? qq : "")
-       }), [dq]), (0, Yq.useEffect)((() => {
-         if (!gq || !dE || Hq) return;
-         let qq = !1;
-         return VE(!0), WE([]), pq.e.getPlayerProfile(dq, {
-           lowerCaseName: dq.getPlayerName().toLowerCase()
-         }).then((Eq => {
-           qq || WE(Eq.socialLinks)
-         })).catch((qq => {
-           console.error("Failed to load social links", qq)
-         })).finally((() => {
-           qq || VE(!1)
- ... (265 more removed lines; see GitHub link above)
+       return QC[CC]
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L870-L1055` → after: `L616-L1425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L616-L1425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/98.js#L616-L1425) · [Before (L870-L1055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/98.js#L870-L1055)

```diff
-     var PE = gq(9176),
-       QE = gq(3040),
-       yE = gq(1241),
-       tE = gq(1405);
-     const rE = (0, Yq.memo)((function(qq) {
-         let {
-           inGame: Eq
-         } = qq;
-         const {
-           t: gq,
-           selectedLanguage: Yq
-         } = (0, mq.v)(), {
-           clientEscMenuOptions: lq,
-           showDebugOverlay: Oq
-         } = (0, rq.j)(["clientEscMenuOptions", "showDebugOverlay"]), xq = (0, Vq.h)("hideCoordinates");
-         let Aq = "settingsMenu:showCoordinates",
- ... (170 more removed lines; see GitHub link above)
+     wC.keys = function() {
+       return Object.keys(QC)
+     }, wC.resolve = bC, CC.exports = wC, wC.id = 27101
+   },
+   28838: (CC, zC, ZC) => {
+     var QC = {
+       "./2_block.glb": 28847,
+       "./67.glb": 28851,
+       "./Artisan Bench.glb": 28860,
+       "./Aspen Door.glb": 28862,
+       "./Aspen Item Pedestal.glb": 28866,
+       "./Aspen Ladder.glb": 28871,
+       "./Aspen Trapdoor.glb": 28880,
+       "./Black Banner.glb": 28886,
+       "./Black Bed.glb": 28893,
+       "./Black Directional Arrow.glb": 28895,
+ ... (794 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L1637-L1642` → after: `L1429-L1430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR1429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L1429-L1430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/98.js#L1429-L1430) · [Before (L1637-L1642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/98.js#L1637-L1642)

```diff
-       return {
-         backgroundImage: `url(${qq})`,
-         backgroundSize: `${tg} ${tg}`,
-         backgroundRepeat: "repeat",
-         imageRendering: "pixelated"
-       }
+       var zC = bC(CC);
+       return ZC(zC)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L1646-L1667` → after: `L1434-L1436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR1434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L1434-L1436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/98.js#L1434-L1436) · [Before (L1646-L1667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/98.js#L1646-L1667)

```diff
-       return {
-         ...(() => {
-           switch (qq) {
-             case "sky":
-               return {
-                 backgroundImage: "linear-gradient(#3d8fe0 0%, #8cc8f5 45%, #d6eefc 58%, #6fae4a 58.01%, #4f8a33 100%)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
-               };
-             case "grass":
-               return rg(Hg);
-             case "stone":
-               return rg(og);
-             case "sand":
-               return rg(Pg);
-             case "snow":
-               return rg(Qg);
-             case "night":
- ... (6 more removed lines; see GitHub link above)
+       if (!ZC.o(QC, CC)) {
+         var zC = new Error("Cannot find module '" + CC + "'");
+         throw zC.code = "MODULE_NOT_FOUND", zC
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L1672-L1804` → after: `L2863-L2864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR2863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L2863-L2864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/98.js#L2863-L2864) · [Before (L1672-L1804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/98.js#L1672-L1804)

```diff
-       return Object.freeze({
-         ...xg.f,
-         style: "shapes",
-         outline: 1,
-         lines: !1,
-         ...qq
-       })
-     }
-     const ng = [{
-         id: "default",
-         settings: xg.f
-       }, {
-         id: "cross",
-         settings: hg({
-           color: 5046092,
-           lines: !0,
- ... (117 more removed lines; see GitHub link above)
+       var zC = bC(CC);
+       return ZC(zC)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L1808-L1896` → after: `L2868-L2870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR2868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L2868-L2870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/98.js#L2868-L2870) · [Before (L1808-L1896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/98.js#L1808-L1896)

```diff
-       let {
-         settings: Eq,
-         touch: gq,
-         backdrop: Yq,
-         onChange: lq
-       } = qq;
-       const {
-         t: xq
-       } = (0, mq.v)(), Aq = function(qq) {
-         var Eq;
-         return null !== (Eq = ng.find((Eq => (0, xg.u)(Eq.settings, qq, bg)))) && void 0 !== Eq ? Eq : null
-       }(Eq);
-       return (0, Bq.jsx)("div", {
-         className: "CrosshairPresets",
-         role: "radiogroup",
-         "aria-label": xq("crosshairSettings:presets"),
- ... (73 more removed lines; see GitHub link above)
+       if (!ZC.o(QC, CC)) {
+         var zC = new Error("Cannot find module '" + CC + "'");
+         throw zC.code = "MODULE_NOT_FOUND", zC
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L1899-L2391` → after: `L2874-L2975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR2874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L2874-L2975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/98.js#L2874-L2975) · [Before (L1899-L2391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/98.js#L1899-L2391)

```diff
- 
-     function Sg(qq) {
-       let {
-         settings: Eq,
-         touch: gq,
-         backdrop: Yq,
-         className: lq,
-         children: mq,
-         label: xq
-       } = qq;
-       const Aq = zg(Eq, ".CrosshairStageControls");
-       return (0, Bq.jsxs)("div", {
-         className: Oq()("CrosshairStage", lq),
-         style: vg(Yq),
-         ...Aq.handlers,
-         children: [(0, Bq.jsx)("div", {
- ... (477 more removed lines; see GitHub link above)
+     wC.keys = function() {
+       return Object.keys(QC)
+     }, wC.resolve = bC, CC.exports = wC, wC.id = 9317
+   },
+   26611: (CC, zC, ZC) => {
+     var QC = {
+       "./Air Walk.png": 26618,
+       "./Antlers Bonus.png": 26624,
+       "./Arrow Damage Enchantment.png": 26629,
+       "./Arrow Speed Enchantment.png": 26632,
+       "./Attack Speed Enchantment.png": 26638,
+       "./Blindness.png": 26644,
+       "./Boating.png": 26647,
+       "./Bounciness.png": 26649,
+       "./Brain Rot.png": 26657,
+       "./Break Speed Enchantment.png": 26660,
+ ... (86 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L2418` → after: `L2979-L2980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR2979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L2979-L2980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/98.js#L2979-L2980) · [Before (L2418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/98.js#L2418)

```diff
-       return qq ? "general" : "account"
+       var zC = bC(CC);
+       return ZC(zC)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L2605-L2641` → after: `L2984-L2988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR2984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L2984-L2988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/98.js#L2984-L2988) · [Before (L2605-L2641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/98.js#L2605-L2641)

```diff
-       let {
-         show: Eq
-       } = qq;
-       const {
-         userContext: gq
-       } = (0, aq.c)(), [lq, Oq] = (0, Yq.useState)("characters");
-       if (!Eq) return null;
-       const mq = WY.filter((qq => "cape" !== qq && "nameColour" !== qq || gq.getPlayerRanks().includes("super") || (0, Jq.purchasesAllowed)())).map((qq => ({
-         id: qq,
-         faIcon: cE.G[qq],
-         title: cE.H[qq],
-         redDot: !1
-       })));
-       return (0, Bq.jsxs)("div", {
-         className: "Menu CharCustomisation",
-         children: [(0, Bq.jsx)("div", {
- ... (21 more removed lines; see GitHub link above)
+       if (!ZC.o(QC, CC)) {
+         var zC = new Error("Cannot find module '" + CC + "'");
+         throw zC.code = "MODULE_NOT_FOUND", zC
+       }
+       return QC[CC]
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L2643-L2661` → after: `L2990-L4721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR2990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L2990-L4721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/98.js#L2990-L4721) · [Before (L2643-L2661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/98.js#L2643-L2661)

```diff
-     var VY = gq(1440),
-       dY = gq(1442),
-       jY = gq(9277),
-       HY = gq(4359),
-       oY = gq(3286),
-       PY = gq(3337),
-       QY = gq(9304),
-       yY = gq(8729),
-       tY = gq(9283),
-       rY = gq(9297),
-       vY = gq(1895),
-       hY = gq(1876),
-       nY = gq(4739),
-       bY = gq(1252),
-       iY = gq(1214),
-       ZY = gq(1646),
- ... (3 more removed lines; see GitHub link above)
+     wC.keys = function() {
+       return Object.keys(QC)
+     }, wC.resolve = bC, CC.exports = wC, wC.id = 26611
+   },
+   17132: (CC, zC, ZC) => {
+     var QC = {
+       "./67.png": 17135,
+       "./67_projectile_base.png": 17141,
+       "./67_projectile_boosted.png": 17148,
+       "./AK-47.png": 17150,
+       "./AWP.png": 17156,
+       "./Block-19.png": 17160,
+       "./DMR.png": 17162,
+       "./Deagle.png": 17166,
+       "./Double-barreled.png": 17174,
+       "./FMR.png": 17179,
+ ... (1716 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L2664-L2668` → after: `L4724-L4725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR4724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L4724-L4725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/98.js#L4724-L4725) · [Before (L2664-L2668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/98.js#L2664-L2668)

```diff
-       return qq ? Object.keys(qq).sort(((Eq, gq) => {
-         var Yq, lq, Oq, mq;
-         const xq = (null !== (Yq = null === (lq = qq[gq]) || void 0 === lq ? void 0 : lq.sortPriority) && void 0 !== Yq ? Yq : 0) - (null !== (Oq = null === (mq = qq[Eq]) || void 0 === mq ? void 0 : mq.sortPriority) && void 0 !== Oq ? Oq : 0);
-         return 0 !== xq ? xq : Eq.localeCompare(gq)
-       })) : []
+       var zC = bC(CC);
+       return ZC(zC)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L2685-L2693` → after: `L4729-L4733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR4729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L4729-L4733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/98.js#L4729-L4733) · [Before (L2685-L2693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/98.js#L2685-L2693)

```diff
-       for (const {
-           threshold: Eq,
-           suffix: gq
-         }
-         of SY)
-         if (qq >= Eq) {
-           const Yq = qq / Eq;
-           return Yq >= 100 ? `${Math.floor(Yq)}${gq}` : Yq >= 10 ? `${Yq.toFixed(1).replace(/\.0$/,"")}${gq}` : `${Yq.toFixed(2).replace(/\.?0+$/,"")}${gq}`
-         } return String(qq)
+       if (!ZC.o(QC, CC)) {
+         var zC = new Error("Cannot find module '" + CC + "'");
+         throw zC.code = "MODULE_NOT_FOUND", zC
+       }
+       return QC[CC]
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L2695` → after: `L4735-L4751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR4735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L4735-L4751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/98.js#L4735-L4751) · [Before (L2695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/98.js#L2695)

```diff
-     var GY = gq(4858);
+     wC.keys = function() {
+       return Object.keys(QC)
+     }, wC.resolve = bC, CC.exports = wC, wC.id = 17132
+   },
+   9188: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       blockMetadata: () => nC.g,
+       getDefaultModel: () => FC,
+       getDefaultSkyBox: () => WC,
+       getDefaultTexture: () => qC,
+       textureNameToIndex: () => nC.v
+     });
+     var QC = ZC(3144),
+       wC = ZC(33998),
+       bC = ZC(1149),
+       nC = ZC(9194),
+ ... (1 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L2697-L2802` → after: `L4753-L4755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR4753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L4753-L4755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/98.js#L4753-L4755) · [Before (L2697-L2802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/98.js#L2697-L2802)

```diff
-         normal: "0.8em",
-         big: "1em"
-       },
-       JY = (0, Yq.memo)((function(qq) {
-         let {
-           item: Eq,
-           amount: gq = 0,
-           size: Yq = "normal",
-           tier: lq = null
-         } = qq;
-         return (0, Bq.jsx)("div", {
-           className: Oq()("SmpSlot", `SmpSlot-${Yq}`),
-           children: Eq && (0, Bq.jsx)(vY.e, {
-             itemName: Eq,
-             amount: gq > 1 ? gq : 0,
-             amountFontSize: LY[Yq],
- ... (90 more removed lines; see GitHub link above)
+       block: CC => ZC(9317)(`./${CC}.png`),
+       item: CC => ZC(17132)(`./${CC}.png`)
+     };
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L2804-L2845` → after: `L4757-L4762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR4757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L4757-L4762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/98.js#L4757-L4762) · [Before (L2804-L2845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/98.js#L2804-L2845)

```diff
-     function wY(qq) {
-       let {
-         value: Eq,
-         onChange: gq,
-         min: lq = 1,
-         max: Oq,
-         step: mq = 1,
-         label: xq
-       } = qq;
-       const Aq = (0, Yq.useRef)(null),
-         cq = (0, Yq.useRef)(Eq);
-       cq.current = Eq;
-       const [uq, Wq] = (0, Yq.useState)(null), Nq = qq => Math.max(lq, Math.min(Oq, Math.floor(qq))), aq = qq => {
-         const Eq = cq.current,
-           Yq = "function" === typeof mq ? mq(Eq, qq) : mq,
-           lq = Nq(Eq + Yq * qq);
- ... (26 more removed lines; see GitHub link above)
+     function qC(CC, zC) {
+       let wC;
+       try {
+         if (zC === QC.f.BLOCK) wC = {
+           type: QC.j.BASE64,
+           url: oC.block(CC)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L2847-L2878` → after: `L4764-L4780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR4764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L4764-L4780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/98.js#L4764-L4780) · [Before (L2847-L2878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/98.js#L2847-L2878)

```diff
-         return qq.addEventListener("blur", Eq), () => {
-           qq.removeEventListener("blur", Eq)
-         }
-       }), []);
-       const Vq = qq => (0, Bq.jsx)("button", {
-         type: "button",
-         className: "SmpStepButton",
-         "aria-label": `${qq>0?"More":"Less"} ${xq}`,
-         disabled: qq > 0 ? Eq >= Oq : Eq <= lq,
-         onPointerDown: Eq => {
-           0 === Eq.button && (aq(qq), Wq(qq))
-         },
-         onKeyDown: Eq => {
-           "Enter" !== Eq.key && " " !== Eq.key || aq(qq)
-         },
-         onContextMenu: qq => {
- ... (16 more removed lines; see GitHub link above)
+         else if (zC === QC.f.ITEM) wC = {
+           type: QC.j.BASE64,
+           url: oC.item(CC)
+         };
+         else if (zC === QC.f.ICON) wC = {
+           type: QC.j.BASE64,
+           url: ZC(26611)(`./${CC}.png`)
+         };
+         else if (zC === QC.f.LIFEFORM_ATLAS) {
+           let zC;
+           for (const ZC of fC.p)
+             if (CC.startsWith(ZC)) {
+               zC = ZC;
+               break
+             } wC = {
+             type: QC.j.BASE64,
+ ... (1 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L2880-L2907` → after: `L4782-L4784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR4782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L4782-L4784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/98.js#L4782-L4784) · [Before (L2880-L2907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/98.js#L2880-L2907)

```diff
-         }), Vq(1)]
-       })
-     }
- 
-     function KY(qq) {
-       return Math.max(1, 10 ** Math.max(0, Math.floor(Math.log10(Math.max(1, qq))) - 1))
-     }
-     var CY = gq(9301),
-       IY = gq(1226);
-     const eY = ["building", "colours", "nature", "decoration", "utility", "tools", "combat", "food", "mobs", "materials", "worldTools"];
-     IY.A, Gq.Tc.length;
-     new Map;
-     var DY = gq(3166);
- 
-     function ql(qq, Eq) {
-       var gq;
- ... (12 more removed lines; see GitHub link above)
+         } else zC === QC.f.PLAYER_ASSET && (wC = {
+           type: QC.j.BASE64,
+           url: ZC(28836)(`./${CC}.png`)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L2914-L2984` → after: `L4793-L4799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR4793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L4793-L4799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/98.js#L4793-L4799) · [Before (L2914-L2984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/98.js#L2914-L2984)

```diff
-       var gq;
-       return null !== (gq = El(qq, Eq)[0]) && void 0 !== gq ? gq : null
-     }
-     const Yl = "50% 0% 50% 0%",
-       ll = [{
-         divisor: 864e5,
-         suffix: "d"
-       }, {
-         divisor: 36e5,
-         suffix: "h"
-       }, {
-         divisor: 6e4,
-         suffix: "m"
-       }, {
-         divisor: 1e3,
-         suffix: "s"
- ... (55 more removed lines; see GitHub link above)
+       let wC;
+       try {
+         if (zC === QC.b.BLOCK) {
+           const zC = ZC(28838)(`./${CC}.glb`);
+           wC = {
+             type: QC.j.BASE64,
+             url: zC
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L2986` → after: `L4801-L4803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR4801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L4801-L4803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/98.js#L4801-L4803) · [Before (L2986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/98.js#L2986)

```diff
-           return !0
+         } else if (zC === QC.b.ITEM) wC = {
+           type: QC.j.HTTP,
+           url: `${bC.clientSideServerUrls.staticUrl}/models/${CC}.glb`
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L2988-L3048` → after: `L4805-L4809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR4805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L4805-L4809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/98.js#L4805-L4809) · [Before (L2988-L3048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/98.js#L2988-L3048)

```diff
-       return qq.filter((qq => mq(qq.lowerLabel) || mq(qq.lowerName)))
-     }
- 
-     function cl(qq, Eq) {
-       var gq;
-       return null !== (gq = null === qq || void 0 === qq ? void 0 : qq[Eq]) && void 0 !== gq ? gq : Eq
-     }
- 
-     function ul(qq, Eq) {
-       const gq = qq.userInput;
-       return void 0 !== Eq && "dropdown" === (null === gq || void 0 === gq ? void 0 : gq.type) && gq.dropdownOptions.map(yY.f).includes(Eq) ? Eq : function(qq) {
-         const Eq = qq.userInput;
-         if ("dropdown" !== (null === Eq || void 0 === Eq ? void 0 : Eq.type) || 0 === Eq.dropdownOptions.length) return null;
-         const gq = Eq.dropdownOptions.map(yY.f);
-         return Eq.initialValue && gq.includes(Eq.initialValue) ? Eq.initialValue : gq[gq.length - 1]
-       }(qq)
- ... (45 more removed lines; see GitHub link above)
+         else if (zC === QC.b.LIFEFORM) {
+           const zC = ZC(33184)(`./${CC}.glb`);
+           wC = {
+             type: QC.j.BASE64,
+             url: zC
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L3137-L3184` → after: `L4812-L4813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR4812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L4812-L4813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/98.js#L4812-L4813) · [Before (L3137-L3184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/98.js#L3137-L3184)

```diff
-       }(qq, Eq), xq = (0, Yq.useMemo)((() => function() {
-         var qq;
-         let Eq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
-           gq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
-           Yq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
-         const lq = `${(0,DY.k)()}\x1f${Eq.join("\x1e")}\x1f${gq.join("\x1e")}\x1f${JSON.stringify(Yq)}`;
-         if ((null === (qq = xl) || void 0 === qq ? void 0 : qq.key) === lq) return xl.items;
-         const Oq = new Set(gq),
-           mq = new Set,
-           xq = [],
-           Aq = (qq, Eq) => {
-             var gq;
-             if (!qq || mq.has(qq) || Oq.has(qq)) return;
-             mq.add(qq);
-             const lq = null !== (gq = Yq[qq]) && void 0 !== gq ? gq : qq;
-             xq.push({
- ... (32 more removed lines; see GitHub link above)
+       } catch {
+         throw new Error(`Default model for ${CC} not found`)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L3189-L3455` → after: `L4819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR4819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L4819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/98.js#L4819) · [Before (L3189-L3455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/98.js#L3189-L3455)

```diff
-       let {
-         browser: Eq,
-         children: gq
-       } = qq;
-       const {
-         t: Yq
-       } = (0, mq.v)(), lq = Nl();
-       return (0, Bq.jsxs)("div", {
-         className: "SmpTopBar",
-         children: [(0, Bq.jsx)("div", {
-           className: "SmpSearch",
-           children: (0, Bq.jsx)(Qq.b, {
-             className: "SmpSearchInput",
-             placeholderText: Yq("smpShop:searchPlaceholder"),
-             defaultValue: Eq.query,
-             onValueChange: qq => {
- ... (251 more removed lines; see GitHub link above)
+       return wC.m[CC]
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L3457-L4782` → after: `L4821-L4833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR4821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L4821-L4833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/98.js#L4821-L4833) · [Before (L3457-L4782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/98.js#L3457-L4782)

```diff
-     const nl = [1, 10, 100],
-       bl = [1, 10, 100, 999];
- 
-     function il(qq) {
-       var Eq, gq, lq, Aq, uq, Wq, Nq, aq, Vq, dq;
-       const {
-         t: jq
-       } = (0, mq.v)(), Hq = Nl(), {
-         creator: oq,
-         mode: Pq
-       } = qq, [yq, tq] = (0, Yq.useState)(null !== (Eq = null === oq || void 0 === oq ? void 0 : oq.meta.item) && void 0 !== Eq ? Eq : null), [rq, vq] = (0, Yq.useState)(1), [hq, nq] = (0, Yq.useState)(0), [bq, iq] = (0, Yq.useState)(""), [Zq, fq] = (0, Yq.useState)(0), Mq = (0,  … [truncated]
-       (0, Yq.useEffect)((() => {
-         qq.searching || null === pq || pq === Mq.current || (Mq.current = pq, Tq.current = !1, tq(pq), nq(0), vq("list" === Pq ? Math.max(1, Gq) : 1))
-       }), [pq, qq.searching]);
-       const Lq = !!oq && !!yq && oq.meta.item === yq,
-         Jq = Lq ? oq.meta.owned : null !== (Aq = null === (uq = qq.inventory) || void 0 === uq || null === (Wq = uq.find((qq => qq.item === yq))) || void 0 === Wq ? void 0 : Wq.quantity) && void 0 !== Aq ? Aq : 0,
- ... (1310 more removed lines; see GitHub link above)
+   },
+   33998: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       d: () => bC,
+       e: () => fC,
+       h: () => nC,
+       l: () => wC,
+       m: () => QC
+     });
+     const QC = {
+         default: {
+           type: "earth",
+           vertexTint: [137, 207, 240]
```
