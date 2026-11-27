# Changed — Bundle Modifications Report (Part 078 / 086)

- **Updated at**: `2026-11-28T01:59 JST`
- **Part**: `78 / 86` (**394** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 077](part-077.md) · [Part 079 →](part-079.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (gw4e3a.937868ec → 1yqdn.8419f1e1 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (1187 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed)

#### 813. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8052` → after: `L8052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8052) · [Before (L8052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8052)

```diff
-               points: this.useKthClosestPoint ? DB : null
+               points: this.useKthClosestPoint ? EW : null
```

#### 814. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8057` → after: `L8057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8057) · [Before (L8057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8057)

```diff
-       40798: (BB, OB, GB) => {
+       41318: (WW, iW, OW) => {
```

#### 815. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8061-L8074` → after: `L8061-L8070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8061-L8070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8061-L8070) · [Before (L8061-L8074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8061-L8074)

```diff
-         var YB = GB(40706),
-           DB = GB(40744),
-           QB = GB(40717),
-           oB = GB(40711),
-           jB = GB(38383),
-           yB = GB(40793),
-           JB = GB(624),
-           MB = GB(641),
-           PB = GB(39845),
-           zB = GB(4656);
-         let lB = function() {
-           let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 21;
-           return crypto.getRandomValues(new Uint8Array(BB)).reduce(((BB, OB) => BB += (OB &= 63) < 36 ? OB.toString(36) : OB < 62 ? (OB - 26).toString(36).toUpperCase() : OB > 62 ? "-" : "_"), "")
-         };
+         var mW = OW(41231),
+           EW = OW(41259),
+           NW = OW(41238),
+           PW = OW(41236),
+           LW = OW(38900),
+           cW = OW(41312),
+           wW = OW(622),
+           tW = OW(643),
+           ZW = OW(40358),
+           xW = OW(2955);
```

#### 816. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8085` → after: `L8081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8081) · [Before (L8085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8085)

```diff
-             return null !== (OB = qB[this.suffixMapping[BB]]) && void 0 !== OB ? OB : []
+             return null !== (iW = AW[this.suffixMapping[WW]]) && void 0 !== iW ? iW : []
```

#### 817. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8087` → after: `L8083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8083) · [Before (L8087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8087)

```diff
-           chooseRandomEnchantmentAttributes(BB, OB, GB) {
+           chooseRandomEnchantmentAttributes(WW, iW, OW, mW) {
```

#### 818. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8092` → after: `L8088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8088) · [Before (L8092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8092)

```diff
-                 id: lB()
+                 id: mW
```

#### 819. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8104` → after: `L8100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8100) · [Before (L8104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8104)

```diff
-               OB[GB] = (null !== (oB = OB[GB]) && void 0 !== oB ? oB : 0) + 1, OB[GB] >= NB && YB.splice(YB.indexOf(GB), 1)
+               iW[OW] = (null !== (LW = iW[OW]) && void 0 !== LW ? LW : 0) + 1, iW[OW] >= jW && EW.splice(EW.indexOf(OW), 1)
```

#### 820. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8171` → after: `L8167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8167) · [Before (L8171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8171)

```diff
-             return `r${BB}|m${Number(OB)}`
+             return `r${WW}|m${Number(iW)}`
```

#### 821. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8205` → after: `L8201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8201) · [Before (L8205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8205)

```diff
-             const [, lB, pB] = null !== (DB = VB.exec(PB)) && void 0 !== DB ? DB : [];
+             const [, lW, AW] = null !== (EW = MW.exec(ZW)) && void 0 !== EW ? EW : [];
```

#### 822. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8208` → after: `L8204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8204) · [Before (L8208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8208)

```diff
-               zB = null !== (qB = null === (ZB = QB[`${MB}|meta|${[AB.split("").filter(((BB,OB)=>lB.split("").some((BB=>{const GB=AB.indexOf(BB);return((YB?3-GB:GB)+oB)%4===OB})))).join(""),pB].filter(Boolean).join("|")}`]) || void 0 === ZB ? void 0 : ZB.id) && void 0 !== qB ? qB … [truncated]
+               xW = null !== (bW = null === (jW = NW[`${tW}|meta|${[sW.split("").filter(((WW,iW)=>lW.split("").some((WW=>{const OW=sW.indexOf(WW);return((mW?3-OW:OW)+PW)%4===iW})))).join(""),AW].filter(Boolean).join("|")}`]) || void 0 === jW ? void 0 : jW.id) && void 0 !== bW ? bW … [truncated]
```

#### 823. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8213` → after: `L8209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8209) · [Before (L8213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8213)

```diff
-               let OB = PB.replace(`rot${JB}`, `rot${BB}`);
+               let iW = ZW.replace(`rot${wW}`, `rot${WW}`);
```

#### 824. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8218` → after: `L8214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8214) · [Before (L8218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8218)

```diff
-                 OB = `${DB[1]}|${BB.join("")}`
+                 iW = `${EW[1]}|${WW.join("")}`
```

#### 825. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8220-L8221` → after: `L8216-L8217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8216-L8217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8216-L8217) · [Before (L8220-L8221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8220-L8221)

```diff
-               const oB = `${MB}|${OB}`;
-               if (zB = null !== (NB = null === (RB = QB[oB]) || void 0 === RB ? void 0 : RB.id) && void 0 !== NB ? NB : null, null === zB) {
+               const PW = `${tW}|${iW}`;
+               if (xW = null !== (UW = null === (KW = NW[PW]) || void 0 === KW ? void 0 : KW.id) && void 0 !== UW ? UW : null, null === xW) {
```

#### 826. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8229-L8231` → after: `L8225-L8241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8225-L8241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8225-L8241) · [Before (L8229-L8231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8229-L8231)

```diff
-         var UB = GB(3166),
-           fB = GB.n(UB),
-           kB = GB(40719);
+         var YW = OW(3891),
+           yW = OW.n(YW);
+         let TW = (WW, iW, OW) => {
+           let mW = (2 << Math.log(WW.length - 1) / Math.LN2) - 1,
+             EW = -~(1.6 * mW * iW / WW.length);
+           return function() {
+             let NW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : iW,
+               PW = "";
+             for (;;) {
+               let iW = OW(EW),
+                 LW = 0 | EW;
+               for (; LW--;)
+                 if (PW += WW[iW[LW] & mW] || "", PW.length === NW) return PW
+             }
+           }
+         };
+ ... (1 more added lines; see GitHub link above)
```

#### 827. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8236-L8238` → after: `L8246-L8248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8246-L8248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8246-L8248) · [Before (L8236-L8238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8236-L8238)

```diff
-             const yB = GB.getOrGenerate(BB, OB, jB, QB.b.FloorY);
-             if (yB === oB.o) continue;
-             uB(DB, yB, GB.getOrGenerate(BB, OB, jB, QB.b.CeilingY))
+             const cW = OW.getOrGenerate(WW, iW, LW, NW.c.FloorY);
+             if (cW === PW.q) continue;
+             nW(EW, cW, OW.getOrGenerate(WW, iW, LW, NW.c.CeilingY))
```

#### 828. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8259` → after: `L8269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8269) · [Before (L8259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8259)

```diff
-         const mB = new zB.c([{
+         const uW = new xW.f([{
```

#### 829. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8272` → after: `L8282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8282) · [Before (L8272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8272)

```diff
-           IB = new zB.c([{
+           oW = new xW.f([{
```

#### 830. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8282` → after: `L8292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8292) · [Before (L8282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8282)

```diff
-         const LB = new zB.c(["Powerful", "Legendary", "Majestic", "Fearless", "Celestial", "Mythic", "Epic", "Ethereal", "Omniscient", "Omnipotent", "Arcane", "Enigmatic", "Formidable", "Indomitable", "Luminous", "Ferocious", "Astral", "Unyielding", "Celestine", "Ascendant", "Oth … [truncated]
+         const vW = new xW.f(["Powerful", "Legendary", "Majestic", "Fearless", "Celestial", "Mythic", "Epic", "Ethereal", "Omniscient", "Omnipotent", "Arcane", "Enigmatic", "Formidable", "Indomitable", "Luminous", "Ferocious", "Astral", "Unyielding", "Celestine", "Ascendant", "Oth … [truncated]
```

#### 831. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8291` → after: `L8301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8301) · [Before (L8291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8291)

```diff
-             const OB = `${LB.sample(BB)} ${this.mobType}`;
+             const iW = `${vW.sample(WW)} ${this.mobType}`;
```

#### 832. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8307` → after: `L8317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8317) · [Before (L8307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8307)

```diff
-               const BB = new zB.f(YB.minItems, YB.maxItems + 1),
+               const WW = new xW.j(mW.minItems, mW.maxItems + 1),
```

#### 833. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8311-L8312` → after: `L8321-L8322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8321-L8322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8321-L8322) · [Before (L8311-L8312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8311-L8312)

```diff
-                 const BB = OB.amount ? new zB.f(OB.amount.min, OB.amount.max + 1) : null,
-                   YB = null !== (GB = OB.itemAttributesDistribution) && void 0 !== GB ? GB : null;
+                 const WW = iW.amount ? new xW.j(iW.amount.min, iW.amount.max + 1) : null,
+                   mW = null !== (OW = iW.itemAttributesDistribution) && void 0 !== OW ? OW : null;
```

#### 834. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8322` → after: `L8332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8332) · [Before (L8322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8322)

```diff
-               const QB = new zB.c(DB);
+               const NW = new xW.f(EW);
```

#### 835. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8328` → after: `L8338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8338) · [Before (L8328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8328)

```diff
-             this.itemCategoryDistributions = OB, this.shouldEnchantDistribution = new zB.b(BB.enchantmentProbability), this.enchantmentTier = BB.enchantmentTier
+             this.itemCategoryDistributions = iW, this.shouldEnchantDistribution = new xW.c(WW.enchantmentProbability), this.enchantmentTier = WW.enchantmentTier
```

#### 836. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8330-L8331` → after: `L8340-L8341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8340-L8341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8340-L8341) · [Before (L8330-L8331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8330-L8331)

```diff
-           sample(BB) {
-             const OB = Array(MB.p).fill(null);
+           sample(WW, iW) {
+             const OW = Array(tW.k).fill(null);
```

#### 837. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8339-L8341` → after: `L8349-L8351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8349-L8351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8349-L8351) · [Before (L8339-L8341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8339-L8341)

```diff
-                   zB = null !== (YB = null === (DB = MB.amountDistribution) || void 0 === DB ? void 0 : DB.sample(BB)) && void 0 !== YB ? YB : null,
-                   lB = null !== (QB = null === (oB = MB.attributesDistribution) || void 0 === oB ? void 0 : oB.sample(BB)) && void 0 !== QB ? QB : {},
-                   pB = null !== (jB = this.getEnchantmentAttributesForItem(BB, PB)) && void 0 !== jB ? jB : {};
+                   lW = null !== (EW = null === (NW = ZW.amountDistribution) || void 0 === NW ? void 0 : NW.sample(WW)) && void 0 !== EW ? EW : null,
+                   AW = null !== (PW = null === (LW = ZW.attributesDistribution) || void 0 === LW ? void 0 : LW.sample(WW)) && void 0 !== PW ? PW : {},
+                   bW = null !== (cW = this.getEnchantmentAttributesForItem(WW, iW, xW)) && void 0 !== cW ? cW : {};
```

#### 838. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8348` → after: `L8358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8358) · [Before (L8348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8348)

```diff
-                       ...null !== (yB = lB.customAttributes) && void 0 !== yB ? yB : {},
+                       ...null !== (wW = AW.customAttributes) && void 0 !== wW ? wW : {},
```

#### 839. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8355` → after: `L8365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8365) · [Before (L8355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8355)

```diff
-             return (0, zB.l)(OB, BB), OB
+             return (0, xW.o)(OW, WW), OW
```

#### 840. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8357` → after: `L8367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8367) · [Before (L8357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8357)

```diff
-           getEnchantmentAttributesForItem(BB, OB) {
+           getEnchantmentAttributesForItem(WW, iW, OW) {
```

#### 841. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8360` → after: `L8370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8370) · [Before (L8360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8360)

```diff
-             return 0 === GB.length ? null : FB.chooseRandomEnchantmentAttributes(BB, this.enchantmentTier, GB)
+             return 0 === mW.length ? null : dW.chooseRandomEnchantmentAttributes(WW, this.enchantmentTier, mW, iW())
```

#### 842. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8642` → after: `L8652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8652) · [Before (L8642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8642)

```diff
-             name: `${BB} Pickaxe`,
+             name: `${WW} Pickaxe`,
```

#### 843. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8646` → after: `L8656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8656) · [Before (L8646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8646)

```diff
-             name: `${BB} Axe`,
+             name: `${WW} Axe`,
```

#### 844. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8650` → after: `L8660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8660) · [Before (L8650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8650)

```diff
-             name: `${BB} Spade`,
+             name: `${WW} Spade`,
```

#### 845. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8654` → after: `L8664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8664) · [Before (L8654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8654)

```diff
-             name: `${BB} Hoe`,
+             name: `${WW} Hoe`,
```

#### 846. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8661` → after: `L8671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8671) · [Before (L8661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8661)

```diff
-           if (OB < 0 || OB > 1) throw new Error(`Special arrow chance must be between 0 and 1, but is ${OB}`);
+           if (iW < 0 || iW > 1) throw new Error(`Special arrow chance must be between 0 and 1, but is ${iW}`);
```

#### 847. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8685` → after: `L8695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8695) · [Before (L8685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8685)

```diff
-             name: `${BB} Sword`,
+             name: `${WW} Sword`,
```

#### 848. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8689` → after: `L8699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8699) · [Before (L8689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8689)

```diff
-             name: `${BB} Bow`,
+             name: `${WW} Bow`,
```

#### 849. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8693` → after: `L8703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8703) · [Before (L8693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8693)

```diff
-             name: `${BB} Crossbow`,
+             name: `${WW} Crossbow`,
```

#### 850. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8706` → after: `L8716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8716) · [Before (L8706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8706)

```diff
-           if (BB === wB.STONE) throw new Error(`${BB} armour is not supported`);
+           if (WW === pW.STONE) throw new Error(`${WW} armour is not supported`);
```

#### 851. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8708` → after: `L8718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8718) · [Before (L8708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8708)

```diff
-               name: `${BB} Helmet`,
+               name: `${WW} Helmet`,
```

#### 852. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8712` → after: `L8722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8722) · [Before (L8712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8712)

```diff
-               name: `${BB} Chestplate`,
+               name: `${WW} Chestplate`,
```

#### 853. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8716` → after: `L8726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8726) · [Before (L8716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8716)

```diff
-               name: `${BB} Gauntlets`,
+               name: `${WW} Gauntlets`,
```

#### 854. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8720` → after: `L8730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8730) · [Before (L8720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8720)

```diff
-               name: `${BB} Leggings`,
+               name: `${WW} Leggings`,
```

#### 855. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8724` → after: `L8734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8734) · [Before (L8724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8724)

```diff
-               name: `${BB} Boots`,
+               name: `${WW} Boots`,
```

#### 856. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8732` → after: `L8742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8742) · [Before (L8732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8732)

```diff
-           [MB.m.COMMON]: new rB({
+           [tW.i.COMMON]: new DW({
```

#### 857. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8761` → after: `L8771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8771) · [Before (L8761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8761)

```diff
-           [MB.m.UNCOMMON]: new rB({
+           [tW.i.UNCOMMON]: new DW({
```

#### 858. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8790` → after: `L8800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8800) · [Before (L8790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8790)

```diff
-           [MB.m.RARE]: new rB({
+           [tW.i.RARE]: new DW({
```

#### 859. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8819` → after: `L8829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8829) · [Before (L8819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8819)

```diff
-           [MB.m.EPIC]: new rB({
+           [tW.i.EPIC]: new DW({
```

#### 860. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8856` → after: `L8866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8866) · [Before (L8856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8856)

```diff
-           [MB.m.LEGENDARY]: new rB({
+           [tW.i.LEGENDARY]: new DW({
```

#### 861. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8981-L8982` → after: `L8991-L8996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR8991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L8991-L8996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8991-L8996) · [Before (L8981-L8982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8981-L8982)

```diff
-             const BB = new zB.d(`${this.seed}|${this.x}|${this.y}|${this.z}|lootChest`),
-               OB = this.lootChestInventoryDistribution.sample(BB);
+             const WW = `${this.seed}|${this.x}|${this.y}|${this.z}`,
+               iW = new xW.g(`${WW}|lootChestIds`),
+               OW = TW("useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", 21, (WW => Uint8Array.from({
+                 length: WW
+               }, (() => Math.floor(256 * iW.next()))))),
+               mW = this.lootChestInventoryDistribution.sample(new xW.g(`${WW}|lootChest`), OW);
```

#### 862. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8986` → after: `L9000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9000) · [Before (L8986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8986)

```diff
-                   chestStr: (0, MB.G)(OB),
+                   chestStr: (0, tW.B)(mW),
```

#### 863. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8996` → after: `L9010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9010) · [Before (L8996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8996)

```diff
-             this.seed = void 0, this.pP = void 0, this.invisibleSolidBlockId = void 0, this.emptySpawnerBlockId = void 0, this.chestToLootChestBlockId = void 0, this.defaultSpawnerBlockId = void 0, this.mobTypeToSpawnerBlockId = void 0, this.prefabRadius = void 0, this.prefabCent … [truncated]
+             this.seed = void 0, this.jZ = void 0, this.invisibleSolidBlockId = void 0, this.emptySpawnerBlockId = void 0, this.chestToLootChestBlockId = void 0, this.defaultSpawnerBlockId = void 0, this.mobTypeToSpawnerBlockId = void 0, this.prefabRadius = void 0, this.prefabCent … [truncated]
```

#### 864. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8999` → after: `L9013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9013) · [Before (L8999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L8999)

```diff
-               pP: GB,
+               jZ: OW,
```

#### 865. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9005` → after: `L9019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9019) · [Before (L9005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9005)

```diff
-             DO.BLOCK_ID_MAPPINGS || (DO.BLOCK_ID_MAPPINGS = new nB(YB)), FB || (FB = new pB(oB)), this.seed = OB, this.pP = GB, this.invisibleSolidBlockId = YB["Invisible Solid"].id, this.emptySpawnerBlockId = YB["Empty Spawner Block"].id, this.chestToLootChestBlockId = new JB.c( … [truncated]
+             Ei.BLOCK_ID_MAPPINGS || (Ei.BLOCK_ID_MAPPINGS = new SW(mW)), dW || (dW = new lW(PW)), this.seed = iW, this.jZ = OW, this.invisibleSolidBlockId = mW["Invisible Solid"].id, this.emptySpawnerBlockId = mW["Empty Spawner Block"].id, this.chestToLootChestBlockId = new wW.b( … [truncated]
```

#### 866. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9012` → after: `L9026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9026) · [Before (L9012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9012)

```diff
-             for (const DB of QB.n) MB[DB] = YB[`${DB} Spawner Block`].id;
+             for (const EW of NW.l) tW[EW] = mW[`${EW} Spawner Block`].id;
```

#### 867. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9027` → after: `L9041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9041) · [Before (L9027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9027)

```diff
-                   yB = new DB.b(`prefab|${BB}|${oB}`, jB.minDistanceBetweenPrefabs, !1, !0, OB, YB, GB, null, !0)
+                   cW = new EW.b(`prefab|${WW}|${PW}`, LW.minDistanceBetweenPrefabs, !1, !0, iW, mW, OW, null, !0)
```

#### 868. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9041` → after: `L9055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9055) · [Before (L9041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9041)

```diff
-             return new zB.d(`${BB}|${OB}|${this.seed}|prefabGenerator`)
+             return new xW.g(`${WW}|${iW}|${this.seed}|prefabGenerator`)
```

#### 869. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9070` → after: `L9084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9084) · [Before (L9070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9070)

```diff
-               JB = this.pP >> 1,
+               wW = this.jZ >> 1,
```

#### 870. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9072` → after: `L9086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9086) · [Before (L9072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9072)

```diff
-               zB = BB + this.pP + this.prefabRadius,
+               xW = WW + this.jZ + this.prefabRadius,
```

#### 871. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9074` → after: `L9088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9088) · [Before (L9074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9074)

```diff
-               pB = OB + this.pP + this.prefabRadius;
+               AW = iW + this.jZ + this.prefabRadius;
```

#### 872. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9082` → after: `L9096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9096) · [Before (L9082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9082)

```diff
-                 if (ZB === QB.j.SURFACE && RB === QB.h.VERY_HIGH && !jB.regionMayHaveVeryHighSurfacePrefabs(MB, lB, zB, pB)) continue;
+                 if (jW === NW.k.SURFACE && kW === NW.i.VERY_HIGH && !LW.regionMayHaveVeryHighSurfacePrefabs(tW, lW, xW, AW)) continue;
```

#### 873. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9092` → after: `L9106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9106) · [Before (L9092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9092)

```diff
-                   if (ZB === QB.j.SURFACE && !JB.canPlaceSurfacePrefab(OB, jB)) continue;
+                   if (jW === NW.k.SURFACE && !wW.canPlaceSurfacePrefab(iW, LW)) continue;
```

#### 874. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9111` → after: `L9125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9125) · [Before (L9111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9111)

```diff
-                       console.error(`Invalid prefab rotation: ${WB}`)
+                       console.error(`Invalid prefab rotation: ${sW}`)
```

#### 875. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9128` → after: `L9142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9142) · [Before (L9128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9128)

```diff
-                   if (ZB === QB.j.SURFACE && null !== JB.maxSurfacePrefabRelief) {
+                   if (jW === NW.k.SURFACE && null !== wW.maxSurfacePrefabRelief) {
```

#### 876. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9159` → after: `L9173-L9174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9173-L9174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9173-L9174) · [Before (L9159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9159)

```diff
-                     decodedPrefabSchematic: this.getDecodedPrefabSchematic(NB)
+                     decodedPrefabSchematic: this.getDecodedPrefabSchematic(UW),
+                     worldBox: Li(yW, TW)
```

#### 877. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9173` → after: `L9188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9188) · [Before (L9173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9173)

```diff
-                 const YB = DB.getOrGenerate(BB + MB, OB + GB, QB.c.GroundHeight);
+                 const mW = EW.getOrGenerate(WW + tW, iW + OW, NW.f.GroundHeight);
```

#### 878. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9194-L9195` → after: `L9209-L9210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9209-L9210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9209-L9210) · [Before (L9194-L9195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9194-L9195)

```diff
-                 XD: BB,
-                 wD: GB
+                 Am: WW,
+                 bm: OW
```

#### 879. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9208` → after: `L9223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9223) · [Before (L9208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9208)

```diff
-                   if (GB.getOrGenerate(JB, BB, QB.c.WaterHeight) !== oB.p) return {
+                   if (OW.getOrGenerate(wW, WW, NW.f.WaterHeight) !== PW.s) return {
```

#### 880. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9212-L9213` → after: `L9227-L9228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9227-L9228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9227-L9228) · [Before (L9212-L9213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9212-L9213)

```diff
-                   const OB = GB.getOrGenerate(JB, BB, QB.c.GroundHeight);
-                   if (yB.d.isInCave(JB, OB, BB, YB)) return {
+                   const iW = OW.getOrGenerate(wW, WW, NW.f.GroundHeight);
+                   if (cW.e.isInCave(wW, iW, WW, mW)) return {
```

#### 881. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9217` → after: `L9232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9232) · [Before (L9217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9217)

```diff
-                   if (kB.b.isNearFixedPointPrefab(JB, BB, DB)) return {
+                   if (JW.c.isNearFixedPointPrefab(wW, WW, EW)) return {
```

#### 882. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9264-L9265` → after: `L9279-L9280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9279-L9280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9279-L9280) · [Before (L9264-L9265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9264-L9265)

```diff
-             if (jB === this.emptySpawnerBlockId && (jB = null !== (yB = YB.spawnerBlockLocationToBlockId.get(BB, OB, GB)) && void 0 !== yB ? yB : this.defaultSpawnerBlockId), jB < 0) return jB;
-             if (jB = null !== (QB = null === (oB = YB.blockIdMapping) || void 0 === oB ? void 0 : oB[jB]) && void 0 !== QB ? QB : jB, void 0 !== this.chestToLootChestBlockId.reverseGet(jB)) {
+             if (LW === this.emptySpawnerBlockId && (LW = null !== (cW = mW.spawnerBlockLocationToBlockId.get(WW, iW, OW)) && void 0 !== cW ? cW : this.defaultSpawnerBlockId), LW < 0) return LW;
+             if (LW = null !== (NW = null === (PW = mW.blockIdMapping) || void 0 === PW ? void 0 : PW[LW]) && void 0 !== NW ? NW : LW, void 0 !== this.chestToLootChestBlockId.reverseGet(LW)) {
```

#### 883. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9267` → after: `L9282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9282) · [Before (L9267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9267)

```diff
-               const QB = null !== (JB = YB.chestLocationToQuality.get(BB, OB, GB)) && void 0 !== JB ? JB : DO.DEFAULT_CHEST_QUALITY,
+               const NW = null !== (wW = mW.chestLocationToQuality.get(WW, iW, OW)) && void 0 !== wW ? wW : Ei.DEFAULT_CHEST_QUALITY,
```

#### 884. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9298-L9302` → after: `L9313-L9317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9313-L9317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9313-L9317) · [Before (L9298-L9302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9298-L9302)

```diff
-             for (let JB = 0; JB < GB; JB += MB.E)
-               for (let OB = 0; OB < YB; OB += MB.E)
-                 for (let PB = 0; PB < DB; PB += MB.E) {
-                   const zB = fB()(new Uint16Array(MB.E * MB.E * MB.E), [MB.E, MB.E, MB.E]),
-                     lB = BB.schematic.getRLEChunk((0, MB.V)(JB), (0, MB.V)(OB), (0, MB.V)(PB));
+             for (let wW = 0; wW < OW; wW += tW.A)
+               for (let iW = 0; iW < mW; iW += tW.A)
+                 for (let ZW = 0; ZW < EW; ZW += tW.A) {
+                   const xW = yW()(new Uint16Array(tW.A * tW.A * tW.A), [tW.A, tW.A, tW.A]),
+                     lW = WW.schematic.getRLEChunk((0, tW.U)(wW), (0, tW.U)(iW), (0, tW.U)(ZW));
```

#### 885. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9304-L9306` → after: `L9319-L9321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9319-L9321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9319-L9321) · [Before (L9304-L9306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9304-L9306)

```diff
-                   const pB = Math.min(MB.E, GB - JB),
-                     qB = Math.min(MB.E, YB - OB),
-                     ZB = Math.min(MB.E, DB - PB);
+                   const AW = Math.min(tW.A, OW - wW),
+                     bW = Math.min(tW.A, mW - iW),
+                     jW = Math.min(tW.A, EW - ZW);
```

#### 886. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9315` → after: `L9330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9330) · [Before (L9315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9315)

```diff
-                         else if (this.emptySpawnerBlockId === jB) yB.get(MB, lB, pB) || console.error(`Empty spawner block found in prefab ${BB.schematic.name} at (${MB}, ${lB}, ${pB}) with no mob type specified. Defaulting to "${DO.DEFAULT_MOB_TYPE}" mob type.`);
+                         else if (this.emptySpawnerBlockId === LW) cW.get(tW, lW, AW) || console.error(`Empty spawner block found in prefab ${WW.schematic.name} at (${tW}, ${lW}, ${AW}) with no mob type specified. Defaulting to "${Ei.DEFAULT_MOB_TYPE}" mob type.`);
```

#### 887. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9318` → after: `L9333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9333) · [Before (L9318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9318)

```diff
-                           void 0 !== OB && (oB.get(MB, lB, pB) || console.error(`Chest found in prefab ${BB.schematic.name} at (${MB}, ${lB}, ${pB}) with no quality specified. Defaulting to "${DO.DEFAULT_CHEST_QUALITY}" quality.`), jB = OB)
+                           void 0 !== iW && (PW.get(tW, lW, AW) || console.error(`Chest found in prefab ${WW.schematic.name} at (${tW}, ${lW}, ${AW}) with no quality specified. Defaulting to "${Ei.DEFAULT_CHEST_QUALITY}" quality.`), LW = iW)
```

#### 888. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9341` → after: `L9370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9370) · [Before (L9341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9341)

```diff
-           }(BB, BB.shouldSwapXZ ? GB : OB)
+           }(WW, WW.shouldSwapXZ ? OW : iW)
```

#### 889. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9348` → after: `L9377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9377) · [Before (L9348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9348)

```diff
-           }(BB, BB.shouldSwapXZ ? OB : GB)
+           }(WW, WW.shouldSwapXZ ? iW : OW)
```

#### 890. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9350` → after: `L9379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9379) · [Before (L9350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9350)

```diff
-         DO.DECODED_PREFAB_SCHEMATIC_CACHE = new WeakMap, DO.BLOCK_ID_MAPPINGS = void 0, DO.DEFAULT_MOB_TYPE = "Draugr Zombie", DO.DEFAULT_CHEST_QUALITY = MB.m.COMMON;
+         Ei.DECODED_PREFAB_SCHEMATIC_CACHE = new WeakMap, Ei.BLOCK_ID_MAPPINGS = void 0, Ei.DEFAULT_MOB_TYPE = "Draugr Zombie", Ei.DEFAULT_CHEST_QUALITY = tW.i.COMMON;
```

#### 891. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9371` → after: `L9400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9400) · [Before (L9371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9371)

```diff
-             const GB = new YB.g(2 * BB + 1, [-BB, -BB]);
+             const OW = new mW.e(2 * WW + 1, [-WW, -WW]);
```

#### 892. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9380` → after: `L9409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9409) · [Before (L9380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9380)

```diff
-             this.pP = GB, this.seed = YB, this.blockMetadata = QB, this.maxTreeRadius = void 0, this.treePointGen = void 0, this.minTreeHeight = 4, this.maxTreeHeight = 7, this.treeInfos = void 0, this.canopyInfos = void 0, this.deadWoodIds = void 0;
+             this.jZ = OW, this.seed = mW, this.blockMetadata = NW, this.maxTreeRadius = void 0, this.treePointGen = void 0, this.minTreeHeight = 4, this.maxTreeHeight = 7, this.treeInfos = void 0, this.canopyInfos = void 0, this.deadWoodIds = void 0;
```

#### 893. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9383` → after: `L9412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9412) · [Before (L9383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9383)

```diff
-                 [MB.z.Maple]: {
+                 [tW.v.Maple]: {
```

#### 894. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9391` → after: `L9420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9420) · [Before (L9391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9391)

```diff
-                 [MB.z.Pine]: {
+                 [tW.v.Pine]: {
```

#### 895. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9401` → after: `L9430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9430) · [Before (L9401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9401)

```diff
-                 [MB.z.Plum]: {
+                 [tW.v.Plum]: {
```

#### 896. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9409` → after: `L9438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9438) · [Before (L9409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9409)

```diff
-                 [MB.z.Cedar]: {
+                 [tW.v.Cedar]: {
```

#### 897. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9417` → after: `L9446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9446) · [Before (L9417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9417)

```diff
-                 [MB.z.Aspen]: {
+                 [tW.v.Aspen]: {
```

#### 898. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9427` → after: `L9456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9456) · [Before (L9427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9427)

```diff
-                 [MB.z.Jungle]: {
+                 [tW.v.Jungle]: {
```

#### 899. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9437` → after: `L9466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9466) · [Before (L9437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9437)

```diff
-                 [MB.z.Palm]: {
+                 [tW.v.Palm]: {
```

#### 900. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9447` → after: `L9476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9476) · [Before (L9447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9447)

```diff
-                 [MB.z.AutumnMaple]: {
+                 [tW.v.AutumnMaple]: {
```

#### 901. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9455` → after: `L9484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9484) · [Before (L9455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9455)

```diff
-                 [MB.z.Pear]: {
+                 [tW.v.Pear]: {
```

#### 902. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9465` → after: `L9494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9494) · [Before (L9465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9465)

```diff
-                 [MB.z.Cherry]: {
+                 [tW.v.Cherry]: {
```

#### 903. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9475` → after: `L9504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9504) · [Before (L9475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9475)

```diff
-                 [MB.z.Spectral]: {
+                 [tW.v.Spectral]: {
```

#### 904. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9483` → after: `L9512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9512) · [Before (L9483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9483)

```diff
-                 [MB.z.Mango]: {
+                 [tW.v.Mango]: {
```

#### 905. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9493` → after: `L9522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9522) · [Before (L9493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9493)

```diff
-                 [MB.z.AutumnAspen]: {
+                 [tW.v.AutumnAspen]: {
```

#### 906. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9503` → after: `L9532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9532) · [Before (L9503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9503)

```diff
-                 [MB.z.Dead]: {
+                 [tW.v.Dead]: {
```

#### 907. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9513` → after: `L9542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9542) · [Before (L9513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9513)

```diff
-                 [MB.z.FallenLog]: {
+                 [tW.v.FallenLog]: {
```

#### 908. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9523-L9524` → after: `L9552-L9553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9552-L9553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9552-L9553) · [Before (L9523-L9524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9523-L9524)

```diff
-               }, this.deadWoodIds = ["Barkless Maple Log", "Barkless Maple Log", "Barkless Pine Log", "Barkless Cedar Log"].map((BB => QB[BB].id)), this.maxTreeRadius = BB.maxTreeRadius, this.pP <= 2 * this.maxTreeRadius + 1) throw new Error("Tree radius is too large for chunk si … [truncated]
-             if (this.pP <= this.maxTreeHeight) throw new Error("Max tree height is too large for chunk size");
+               }, this.deadWoodIds = ["Barkless Maple Log", "Barkless Maple Log", "Barkless Pine Log", "Barkless Cedar Log"].map((WW => NW[WW].id)), this.maxTreeRadius = WW.maxTreeRadius, this.jZ <= 2 * this.maxTreeRadius + 1) throw new Error("Tree radius is too large for chunk si … [truncated]
+             if (this.jZ <= this.maxTreeHeight) throw new Error("Max tree height is too large for chunk size");
```

#### 909. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9598` → after: `L9627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9627) · [Before (L9598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9598)

```diff
-               if (BB.radius > this.maxTreeRadius) throw new Error(`Canopy radius ${BB.radius} for canopy type "${DB}" is larger than tree radius ${this.maxTreeRadius}`)
+               if (WW.radius > this.maxTreeRadius) throw new Error(`Canopy radius ${WW.radius} for canopy type "${EW}" is larger than tree radius ${this.maxTreeRadius}`)
```

#### 910. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9602` → after: `L9631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9631) · [Before (L9602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9602)

```diff
-             for (const DB of BB.biomeSelector.oQ) DB.biome.treeMinDist && (jB = Math.min(jB, DB.biome.treeMinDist), yB = Math.max(yB, DB.biome.treeMinDist));
+             for (const EW of WW.biomeSelector.Dm) EW.biome.treeMinDist && (LW = Math.min(LW, EW.biome.treeMinDist), cW = Math.max(cW, EW.biome.treeMinDist));
```

#### 911. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9611-L9612` → after: `L9640-L9642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9640-L9642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9640-L9642) · [Before (L9611-L9612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9611-L9612)

```diff
-             for (let lB = BB - this.maxTreeRadius; lB < BB + this.pP + this.maxTreeRadius; lB++)
-               for (let BB = OB - this.maxTreeRadius; BB < OB + this.pP + this.maxTreeRadius; BB++) {
+             for (let lW = WW - this.maxTreeRadius; lW < WW + this.jZ + this.maxTreeRadius; lW++)
+               for (let WW = iW - this.maxTreeRadius; WW < iW + this.jZ + this.maxTreeRadius; WW++) {
+                 if (!this.treePointGen.isPoint(lW, WW)) continue;
```

#### 912. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9615-L9618` → after: `L9645-L9647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9645-L9647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9645-L9647) · [Before (L9615-L9618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9615-L9618)

```diff
-                   if (OB.getTotalTreeChance() <= 0 && console.error("Biome", OB, "has 0 total tree chance"), !this.treePointGen.isPoint(lB, BB)) continue;
-                   if (GB.getOrGenerate(lB, BB, QB.c.WaterHeight) !== oB.p) continue;
-                   const YB = GB.getOrGenerate(lB, BB, QB.c.GroundHeight);
-                   if (yB.d.isInCave(lB, YB, BB, DB)) continue;
+                   if (iW.getTotalTreeChance() <= 0 && console.error("Biome", iW, "has 0 total tree chance"), OW.getOrGenerate(lW, WW, NW.f.WaterHeight) !== PW.s) continue;
+                   const mW = OW.getOrGenerate(lW, WW, NW.f.GroundHeight);
+                   if (cW.e.isInCave(lW, mW, WW, EW)) continue;
```

#### 913. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9620-L9621` → after: `L9649-L9650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9649-L9650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9649-L9650) · [Before (L9620-L9621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9620-L9621)

```diff
-                   if (kB.b.isNearFixedPointPrefab(lB, BB, JB)) continue;
-                   const pB = new zB.d(`${lB}${BB}${this.seed}treeHeight`),
+                   if (JW.c.isNearFixedPointPrefab(lW, WW, wW)) continue;
+                   const AW = new xW.g(`${lW}${WW}${this.seed}treeHeight`),
```

#### 914. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9627` → after: `L9656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9656) · [Before (L9627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9627)

```diff
-                   if (qB === MB.z.FallenLog) {
+                   if (bW === tW.v.FallenLog) {
```

#### 915. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9630` → after: `L9659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9659) · [Before (L9630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9630)

```diff
-                       if (GB.getOrGenerate(0 === NB ? lB + OB : lB, 0 === NB ? BB : BB + OB, QB.c.GroundHeight) !== YB) {
+                       if (OW.getOrGenerate(0 === UW ? lW + iW : lW, 0 === UW ? WW : WW + iW, NW.f.GroundHeight) !== mW) {
```

#### 916. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9651-L9652` → after: `L9680-L9681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9680-L9681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9680-L9681) · [Before (L9651-L9652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9651-L9652)

```diff
-               QB = null !== (GB = DB.minHeight) && void 0 !== GB ? GB : this.minTreeHeight,
-               oB = null !== (YB = DB.maxHeight) && void 0 !== YB ? YB : this.maxTreeHeight;
+               NW = null !== (OW = EW.minHeight) && void 0 !== OW ? OW : this.minTreeHeight,
+               PW = null !== (mW = EW.maxHeight) && void 0 !== mW ? mW : this.maxTreeHeight;
```

#### 917. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9667-L9668` → after: `L9696-L9697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9696-L9697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9696-L9697) · [Before (L9667-L9668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9667-L9668)

```diff
-               const DB = new zB.d(`${QB.treeX}|${QB.treeZ}|${QB.trunkBase}|tree`);
-               if (QB.treeType === MB.z.Dead || QB.treeType === MB.z.FallenLog) {
+               const EW = new xW.g(`${NW.treeX}|${NW.treeZ}|${NW.trunkBase}|tree`);
+               if (NW.treeType === tW.v.Dead || NW.treeType === tW.v.FallenLog) {
```

#### 918. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9685` → after: `L9714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9714) · [Before (L9685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9685)

```diff
-                 DB >= OB && DB < OB + this.pP && QB >= GB && QB < GB + this.pP && jB >= YB && jB < YB + this.pP && BB.set(DB - OB, QB - GB, jB - YB, oB)
+                 EW >= iW && EW < iW + this.jZ && NW >= OW && NW < OW + this.jZ && LW >= mW && LW < mW + this.jZ && WW.set(EW - iW, NW - OW, LW - mW, PW)
```

#### 919. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9687` → after: `L9716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9716) · [Before (L9687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9687)

```diff
-             if (DB.treeType === MB.z.FallenLog) {
+             if (EW.treeType === tW.v.FallenLog) {
```

#### 920. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9689` → after: `L9718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9718) · [Before (L9689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9689)

```diff
-               for (let BB = -1; BB < PB - 1; BB++) zB(0 === DB.vineDir ? jB + BB : jB, JB, 0 === DB.vineDir ? yB : yB + BB);
+               for (let WW = -1; WW < ZW - 1; WW++) xW(0 === EW.vineDir ? LW + WW : LW, wW, 0 === EW.vineDir ? cW : cW + WW);
```

#### 921. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9714` → after: `L9743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9743) · [Before (L9714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9714)

```diff
-               qB = Math.min(lB, GB + this.pP - 1);
+               bW = Math.min(lW, OW + this.jZ - 1);
```

#### 922. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9717` → after: `L9746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9746) · [Before (L9717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9717)

```diff
-               NB = Math.min(oB + PB.radius, OB + this.pP - 1);
+               UW = Math.min(PW + ZW.radius, iW + this.jZ - 1);
```

#### 923. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9720` → after: `L9749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9749) · [Before (L9720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9720)

```diff
-               WB = Math.min(jB + PB.radius, YB + this.pP - 1);
+               sW = Math.min(LW + ZW.radius, mW + this.jZ - 1);
```

#### 924. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9795` → after: `L9824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9824) · [Before (L9795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9795)

```diff
-               if (qB !== zO.SOMETIMES) return void console.error(`Invalid canopy-generation type: ${qB}`);
+               if (bW !== li.SOMETIMES) return void console.error(`Invalid canopy-generation type: ${bW}`);
```

#### 925. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9802-L9804` → after: `L9831-L9833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9831-L9833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9831-L9833) · [Before (L9802-L9804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9802-L9804)

```diff
-             const oB = OB + this.pP,
-               jB = GB + this.pP,
-               yB = YB + this.pP,
+             const PW = iW + this.jZ,
+               LW = OW + this.jZ,
+               cW = mW + this.jZ,
```

#### 926. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9830` → after: `L9859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9859) · [Before (L9830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9830)

```diff
-             const OB = this.pP >> 1,
+             const iW = this.jZ >> 1,
```

#### 927. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9852` → after: `L9881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9881) · [Before (L9852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9852)

```diff
-         var qO = GB(40783);
+         var ji = OW(41304);
```

#### 928. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9856` → after: `L9885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9885) · [Before (L9856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9856)

```diff
-             this.biomeSelector = BB, this.noWaterHeightmapGenerator = OB, this.hydrology = GB, this.lakeRadiusNoiseModifier = QB, this.seed = oB, this.needOutsideWaterDist = yB, this.distApart = 64, this.minRadius = 14, this.maxRadius = 30, this.minGapFromHydrologyWater = 12, thi … [truncated]
+             this.biomeSelector = WW, this.noWaterHeightmapGenerator = iW, this.hydrology = OW, this.lakeRadiusNoiseModifier = NW, this.seed = PW, this.needOutsideWaterDist = cW, this.distApart = 64, this.minRadius = 14, this.maxRadius = 30, this.minGapFromHydrologyWater = 12, thi … [truncated]
```

#### 929. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9870` → after: `L9899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9899) · [Before (L9870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9870)

```diff
-               const DB = (0, YB.H)(GB.origin, BB, OB),
+               const EW = (0, mW.G)(OW.origin, WW, iW),
```

#### 930. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9887` → after: `L9916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9916) · [Before (L9887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9887)

```diff
-             if (!(0, MB.Q)(OB)) return OB.lake;
+             if (!(0, tW.K)(iW)) return iW.lake;
```

#### 931. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9900` → after: `L9929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9929) · [Before (L9900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9900)

```diff
-             } = this, QB = new zB.d(`${BB[0]}|${BB[1]}${this.seed}oasisLake`), oB = this.hydrology.getHydrologyWaterGenInfo(BB[0], BB[1]), jB = Math.floor(oB.distFromWater - oB.waterRadius - DB);
+             } = this, NW = new xW.g(`${WW[0]}|${WW[1]}${this.seed}oasisLake`), PW = this.hydrology.getHydrologyWaterGenInfo(WW[0], WW[1]), LW = Math.floor(PW.distFromWater - PW.waterRadius - EW);
```

#### 932. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9920` → after: `L9949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9949) · [Before (L9920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9920)

```diff
-             this.biomeSelector = BB, this.noWaterHeightmapGenerator = OB, this.needOutsideWaterBodyDist = oB, this.cD = yB, this.gridSize = 224, this.cellCenterMaxOffset = void 0, this.maxRiverSettings = {
+             this.biomeSelector = WW, this.noWaterHeightmapGenerator = iW, this.needOutsideWaterBodyDist = PW, this.Um = cW, this.gridSize = 224, this.cellCenterMaxOffset = void 0, this.maxRiverSettings = {
```

#### 933. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9932` → after: `L9961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9961) · [Before (L9932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9932)

```diff
-             }, this.waterBodyInfos = void 0, this.scatteredLakes = void 0, WO || (WO = new qO.b("water cells", jB ? 800 : 60, 6e4)), this.waterBodyInfos = WO.partition();
+             }, this.waterBodyInfos = void 0, this.scatteredLakes = void 0, Mi || (Mi = new ji.c("water cells", LW ? 800 : 60, 6e4)), this.waterBodyInfos = Mi.partition();
```

#### 934. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9934` → after: `L9963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9963) · [Before (L9934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9934)

```diff
-             this.cellCenterMaxOffset = this.gridSize / 2 - JB, this.seed = GB, this.lakeRadiusNoiseModifier = new YB.h([{
+             this.cellCenterMaxOffset = this.gridSize / 2 - wW, this.seed = OW, this.lakeRadiusNoiseModifier = new mW.i([{
```

#### 935. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9940` → after: `L9969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9969) · [Before (L9940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9940)

```diff
-             }], `${GB}GlobalHeightmapOffset`), this.lakeRadiusNoiseAmplitude = (0, YB.x)(this.lakeRadiusNoiseModifier), this.scatteredLakes = new NO(BB, OB, this, this.lakeRadiusNoiseModifier, GB, DB, oB, jB)
+             }], `${OW}GlobalHeightmapOffset`), this.lakeRadiusNoiseAmplitude = (0, mW.A)(this.lakeRadiusNoiseModifier), this.scatteredLakes = new ki(WW, iW, this, this.lakeRadiusNoiseModifier, OW, EW, PW, LW)
```

#### 936. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9944` → after: `L9973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9973) · [Before (L9944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9944)

```diff
-             if (!this.cD) return SO(this.needOutsideWaterBodyDist);
+             if (!this.Um) return Yi(this.needOutsideWaterBodyDist);
```

#### 937. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9948` → after: `L9977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR9977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L9977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9977) · [Before (L9948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9948)

```diff
-             return null === DB || VO(YB) <= VO(DB) ? YB : DB
+             return null === EW || Si(mW) <= Si(EW) ? mW : EW
```

#### 938. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9974` → after: `L10003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10003) · [Before (L9974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9974)

```diff
-                 IM: BB,
+                 TP: WW,
```

#### 939. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9977` → after: `L10006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10006) · [Before (L9977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9977)

```diff
-               } = (0, YB.t)(GB, DB.origin, DB.downhill.origin);
+               } = (0, mW.w)(OW, EW.origin, EW.downhill.origin);
```

#### 940. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9989` → after: `L10018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10018) · [Before (L9989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9989)

```diff
-                 IM: BB,
+                 TP: WW,
```

#### 941. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9992` → after: `L10021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10021) · [Before (L9992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L9992)

```diff
-               } = (0, YB.t)(GB, zB.origin, DB.origin), pB = Math.floor(BB);
+               } = (0, mW.w)(OW, xW.origin, EW.origin), AW = Math.floor(WW);
```

#### 942. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10013` → after: `L10042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10042) · [Before (L10013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10013)

```diff
-                 oB *= QB.lakeRadius / this.lakeSettings.maxRadius, zB = QB.lakeRadius - oB, GB = (0, YB.H)(DB.origin, BB, OB) - zB
+                 PW *= NW.lakeRadius / this.lakeSettings.maxRadius, xW = NW.lakeRadius - PW, OW = (0, mW.G)(EW.origin, WW, iW) - xW
```

#### 943. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10027` → after: `L10056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10056) · [Before (L10027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10027)

```diff
-                 const GB = (0, YB.H)(DB.origin, BB, OB),
+                 const OW = (0, mW.G)(EW.origin, WW, iW),
```

#### 944. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10054` → after: `L10083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10083) · [Before (L10054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10054)

```diff
-             if (!(0, MB.Q)(GB)) return this.lastReadInfo.cellX = BB, this.lastReadInfo.cellZ = OB, this.lastReadInfo.info = GB, GB;
+             if (!(0, tW.K)(OW)) return this.lastReadInfo.cellX = WW, this.lastReadInfo.cellZ = iW, this.lastReadInfo.info = OW, OW;
```

#### 945. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10118` → after: `L10147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10147) · [Before (L10118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10118)

```diff
-             return -1 !== DB ? YB : null
+             return -1 !== EW ? mW : null
```

#### 946. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10123` → after: `L10152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10152) · [Before (L10123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10123)

```diff
-               DB = new zB.d(`${BB}${OB}${this.seed}riverCell`);
+               EW = new xW.g(`${WW}${iW}${this.seed}riverCell`);
```

#### 947. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10163-L10166` → after: `L10192-L10195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10192-L10195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10192-L10195) · [Before (L10163-L10166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10163-L10166)

```diff
-           qQ: 40,
-           XD: -85,
-           wD: -85,
-           ZQ: .5
+           Rm: 40,
+           Am: -85,
+           bm: -85,
+           Gm: .5
```

#### 948. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10170-L10173` → after: `L10199-L10202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10199-L10202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10199-L10202) · [Before (L10170-L10173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10170-L10173)

```diff
-           qQ: 13,
-           XD: -100,
-           wD: -85,
-           ZQ: .28
+           Rm: 13,
+           Am: -100,
+           bm: -85,
+           Gm: .28
```

#### 949. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10177-L10180` → after: `L10206-L10209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10206-L10209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10206-L10209) · [Before (L10177-L10180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10177-L10180)

```diff
-           qQ: 10,
-           XD: -100,
-           wD: -75,
-           ZQ: .4
+           Rm: 10,
+           Am: -100,
+           bm: -75,
+           Gm: .4
```

#### 950. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10184-L10187` → after: `L10213-L10216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10213-L10216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10213-L10216) · [Before (L10184-L10187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10184-L10187)

```diff
-           qQ: 5,
-           XD: -80,
-           wD: 15,
-           ZQ: .5
+           Rm: 5,
+           Am: -80,
+           bm: 15,
+           Gm: .5
```

#### 951. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10191-L10194` → after: `L10220-L10223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10220-L10223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10220-L10223) · [Before (L10191-L10194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10191-L10194)

```diff
-           qQ: 4,
-           XD: -60,
-           wD: 40,
-           ZQ: .5
+           Rm: 4,
+           Am: -60,
+           bm: 40,
+           Gm: .5
```

#### 952. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10198-L10199` → after: `L10227-L10228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10227-L10228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10227-L10228) · [Before (L10198-L10199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10198-L10199)

```diff
-             this.seed = OB, this.pP = GB, this.lQ = void 0, this.lQ = YB.map((YB => {
-               const QB = new DB.b("ore", YB.qQ, !1, !0, `${OB}${YB.blockName}`, 20, GB, null, !0);
+             this.seed = iW, this.jZ = OW, this.Bm = void 0, this.Bm = mW.map((mW => {
+               const NW = new EW.b("ore", mW.Rm, !1, !0, `${iW}${mW.blockName}`, 20, OW, null, !0);
```

#### 953. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10201` → after: `L10230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10230) · [Before (L10201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10201)

```diff
-                 SM: (0, MB.J)(YB.blockName, BB),
+                 NL: (0, tW.E)(mW.blockName, WW),
```

#### 954. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10203-L10206` → after: `L10232-L10235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10232-L10235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10232-L10235) · [Before (L10203-L10206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10203-L10206)

```diff
-                 qQ: YB.qQ,
-                 XD: YB.XD,
-                 wD: YB.wD,
-                 ZQ: YB.ZQ,
+                 Rm: mW.Rm,
+                 Am: mW.Am,
+                 bm: mW.bm,
+                 Gm: mW.Gm,
```

#### 955. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10213-L10216` → after: `L10242-L10245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10242-L10245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10242-L10245) · [Before (L10213-L10216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10213-L10216)

```diff
-               DB = new zB.d(`${BB}${OB}${this.seed}oreExists`);
-             for (const QB of this.lQ) {
-               const oB = QB.pointGenerator.getPointsAroundPoint(BB + this.pP / 2, OB + this.pP / 2),
-                 jB = BB + this.pP + QB.radius,
+               EW = new xW.g(`${WW}${iW}${this.seed}oreExists`);
+             for (const NW of this.Bm) {
+               const PW = NW.pointGenerator.getPointsAroundPoint(WW + this.jZ / 2, iW + this.jZ / 2),
+                 LW = WW + this.jZ + NW.radius,
```

#### 956. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10218` → after: `L10247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10247) · [Before (L10218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10218)

```diff
-                 JB = OB + this.pP + QB.radius,
+                 wW = iW + this.jZ + NW.radius,
```

#### 957. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10222-L10223` → after: `L10251-L10252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10251-L10252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10251-L10252) · [Before (L10222-L10223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10222-L10223)

```diff
-                 const oB = new zB.d(`${PB[0]}${PB[1]}${this.seed}ore`),
-                   lB = Math.floor(oB.next() * (QB.wD + 1 - QB.XD)) + QB.XD,
+                 const PW = new xW.g(`${ZW[0]}${ZW[1]}${this.seed}ore`),
+                   lW = Math.floor(PW.next() * (NW.bm + 1 - NW.Am)) + NW.Am,
```

#### 958. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10225` → after: `L10254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10254) · [Before (L10225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10225)

```diff
-                   qB = Math.min(BB + this.pP - 1, PB[0] + QB.radius),
+                   bW = Math.min(WW + this.jZ - 1, ZW[0] + NW.radius),
```

#### 959. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10227` → after: `L10256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10256) · [Before (L10227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10227)

```diff
-                   NB = Math.min(OB + this.pP - 1, PB[1] + QB.radius);
+                   UW = Math.min(iW + this.jZ - 1, ZW[1] + NW.radius);
```

#### 960. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10230` → after: `L10259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10259) · [Before (L10230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10230)

```diff
-                     (0, YB.B)(PB, BB, OB) > QB.radius || (DB.next() >= QB.ZQ || GB.push(BB, lB, OB, QB.SM))
+                     (0, mW.E)(ZW, WW, iW) > NW.radius || (EW.next() >= NW.Gm || OW.push(WW, lW, iW, NW.NL))
```

#### 961. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10237` → after: `L10266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10266) · [Before (L10237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10237)

```diff
-             const yB = GB + this.pP,
+             const cW = OW + this.jZ,
```

#### 962. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10244` → after: `L10273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10273) · [Before (L10244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10244)

```diff
-               if (JB < oB.get(PB, zB, QB.c.GroundHeight) - DB) {
+               if (wW < PW.get(ZW, xW, NW.f.GroundHeight) - EW) {
```

#### 963. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10251` → after: `L10280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10280) · [Before (L10251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10251)

```diff
-         var fO = GB(40786);
+         var Ji = OW(41306);
```

#### 964. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10261-L10262` → after: `L10290-L10291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10290-L10291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10290-L10291) · [Before (L10261-L10262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10261-L10262)

```diff
-             xD: GB,
-             YQ: YB,
+             Jm: OW,
+             om: mW,
```

#### 965. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10272` → after: `L10301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10301) · [Before (L10272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10272)

```diff
-           return GB.CD && YB.push({
+           return OW.Ym && mW.push({
```

#### 966. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10274-L10275` → after: `L10303-L10304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10303-L10304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10303-L10304) · [Before (L10274-L10275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10274-L10275)

```diff
-             SM: BB[OB].id
-           }), GB.vD && YB.push({
+             NL: WW[iW].id
+           }), OW.ym && mW.push({
```

#### 967. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10277` → after: `L10306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10306) · [Before (L10277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10277)

```diff
-             SM: BB[`${OB}|meta|rot2|side`].id
+             NL: WW[`${iW}|meta|rot2|side`].id
```

#### 968. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10280` → after: `L10309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10309) · [Before (L10280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10280)

```diff
-             SM: BB[`${OB}|meta|rot4|side`].id
+             NL: WW[`${iW}|meta|rot4|side`].id
```

#### 969. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10283` → after: `L10312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10312) · [Before (L10283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10283)

```diff
-             SM: BB[`${OB}|meta|rot1|side`].id
+             NL: WW[`${iW}|meta|rot1|side`].id
```

#### 970. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10286-L10287` → after: `L10315-L10316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10315-L10316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10315-L10316) · [Before (L10286-L10287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10286-L10287)

```diff
-             SM: BB[`${OB}|meta|rot3|side`].id
-           }), GB.sD && YB.push({
+             NL: WW[`${iW}|meta|rot3|side`].id
+           }), OW.Tm && mW.push({
```

#### 971. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10289` → after: `L10318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10318) · [Before (L10289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10289)

```diff
-             SM: BB[`${OB}|meta|rot1|top`].id
+             NL: WW[`${iW}|meta|rot1|top`].id
```

#### 972. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10298-L10300` → after: `L10327-L10329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10327-L10329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10327-L10329) · [Before (L10298-L10300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10298-L10300)

```diff
-                 CD: !0,
-                 vD: !0,
-                 sD: !0
+                 Ym: !0,
+                 ym: !0,
+                 Tm: !0
```

#### 973. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10303-L10306` → after: `L10332-L10335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10332-L10335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10332-L10335) · [Before (L10303-L10306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10303-L10306)

```diff
-               tD: .8,
-               BQ: 0,
-               xD: .12,
-               YQ: .25,
+               hm: .8,
+               Hm: 0,
+               Jm: .12,
+               om: .25,
```

#### 974. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10312-L10314` → after: `L10341-L10343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10341-L10343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10341-L10343) · [Before (L10312-L10314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10312-L10314)

```diff
-                 CD: !0,
-                 vD: !0,
-                 sD: !1
+                 Ym: !0,
+                 ym: !0,
+                 Tm: !1
```

#### 975. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10317-L10319` → after: `L10346-L10348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10346-L10348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10346-L10348) · [Before (L10317-L10319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10317-L10319)

```diff
-               tD: .7,
-               BQ: 2,
-               xD: .58
+               hm: .7,
+               Hm: 2,
+               Jm: .58
```

#### 976. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10322` → after: `L10351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10351) · [Before (L10322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10322)

```diff
-             const GB = OB.OQ;
+             const OW = iW.nm;
```

#### 977. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10326-L10328` → after: `L10355-L10357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10355-L10357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10355-L10357) · [Before (L10326-L10328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10326-L10328)

```diff
-                 CD: OB.CD,
-                 vD: OB.vD,
-                 sD: OB.sD
+                 Ym: iW.Ym,
+                 ym: iW.ym,
+                 Tm: iW.Tm
```

#### 978. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10331-L10336` → after: `L10360-L10365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10360-L10365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10360-L10365) · [Before (L10331-L10336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10331-L10336)

```diff
-               tD: OB.tD,
-               BQ: OB.BQ,
-               xD: OB.xD,
-               YQ: null === GB || void 0 === GB ? void 0 : GB.YQ,
-               shallowClusterY: null === GB || void 0 === GB ? void 0 : GB.DQ,
-               deepClusterY: null === GB || void 0 === GB ? void 0 : GB.QQ
+               hm: iW.hm,
+               Hm: iW.Hm,
+               Jm: iW.Jm,
+               om: null === OW || void 0 === OW ? void 0 : OW.om,
+               shallowClusterY: null === OW || void 0 === OW ? void 0 : OW.dm,
+               deepClusterY: null === OW || void 0 === OW ? void 0 : OW.gm
```

#### 979. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10355` → after: `L10384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10384) · [Before (L10355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10355)

```diff
-             const YB = this.heightmapVals.getOrGenerate(BB, OB, QB.c.GroundHeight) - this.surfaceMargin,
+             const mW = this.heightmapVals.getOrGenerate(WW, iW, NW.f.GroundHeight) - this.surfaceMargin,
```

#### 980. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10362` → after: `L10391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10391) · [Before (L10362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10362)

```diff
-               BB - QB.floorY + 1 < DB || oB.push(BB === QB.ceilingY ? QB : {
+               WW - NW.floorY + 1 < EW || PW.push(WW === NW.ceilingY ? NW : {
```

#### 981. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10372` → after: `L10401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10401) · [Before (L10372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10372)

```diff
-             this.heightmapVals = BB, this.allCavesCache = void 0, this.decoratableCavesCache = void 0, this.allCavesCache = new YB.k(new gO(OB)), this.decoratableCavesCache = new YB.k(new rO(OB, BB, GB, DB))
+             this.heightmapVals = WW, this.allCavesCache = void 0, this.decoratableCavesCache = void 0, this.allCavesCache = new mW.m(new Vi(iW)), this.decoratableCavesCache = new mW.m(new fi(iW, WW, OW, EW))
```

#### 982. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10378` → after: `L10407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10407) · [Before (L10378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10378)

```diff
-             return this.heightmapVals.getOrGenerate(BB, OB, QB.c.GroundHeight)
+             return this.heightmapVals.getOrGenerate(WW, iW, NW.f.GroundHeight)
```

#### 983. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10397` → after: `L10426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10426) · [Before (L10397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10397)

```diff
-             wO(BB + yB.offset[0], OB + yB.offset[1], GB + yB.offset[2], QB) && (yB.offset === kO ? oB = yB : jB.push(yB))
+             Xi(WW + cW.offset[0], iW + cW.offset[1], OW + cW.offset[2], NW) && (cW.offset === Hi ? PW = cW : LW.push(cW))
```

#### 984. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10399` → after: `L10428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10428) · [Before (L10399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10399)

```diff
-           return null !== oB ? oB : 0 === jB.length ? null : jB[Math.floor(DB * jB.length)]
+           return null !== PW ? PW : 0 === LW.length ? null : LW[Math.floor(EW * LW.length)]
```

#### 985. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10404` → after: `L10433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10433) · [Before (L10404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10404)

```diff
-             this.pP = OB, this.seed = GB, this.pointsGen = void 0, this.configs = void 0, this.maxHalfBox = void 0;
+             this.jZ = iW, this.seed = OW, this.pointsGen = void 0, this.configs = void 0, this.maxHalfBox = void 0;
```

#### 986. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10410` → after: `L10439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10439) · [Before (L10410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10410)

```diff
-               if (!Number.isInteger(DB.clusterBoxSize) || DB.clusterBoxSize < 2 || DB.clusterBoxSize % 2 !== 0) throw new Error(`Decoration kind "${DB.seedPrefix}" has invalid clusterBoxSize (${DB.clusterBoxSize}); must be an even integer >= 2 (the 2x2x2-cell scatter scheme needs … [truncated]
+               if (!Number.isInteger(EW.clusterBoxSize) || EW.clusterBoxSize < 2 || EW.clusterBoxSize % 2 !== 0) throw new Error(`Decoration kind "${EW.seedPrefix}" has invalid clusterBoxSize (${EW.clusterBoxSize}); must be an even integer >= 2 (the 2x2x2-cell scatter scheme needs … [truncated]
```

#### 987. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10412` → after: `L10441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10441) · [Before (L10412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10412)

```diff
-               BB > oB && (oB = BB), jB += Math.max(DB.xD, null !== (yB = DB.YQ) && void 0 !== yB ? yB : DB.xD)
+               WW > PW && (PW = WW), LW += Math.max(EW.Jm, null !== (cW = EW.om) && void 0 !== cW ? cW : EW.Jm)
```

#### 988. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10414` → after: `L10443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10443) · [Before (L10414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10414)

```diff
-             if (jB > 1) throw new Error(`Cave decoration cluster chances sum to ${jB} at peak depth; must not exceed 1 (later configs would be silently squeezed).`);
+             if (LW > 1) throw new Error(`Cave decoration cluster chances sum to ${LW} at peak depth; must not exceed 1 (later configs would be silently squeezed).`);
```

#### 989. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10419` → after: `L10448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10448) · [Before (L10419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10419)

```diff
-               QB = this.pP,
+               NW = this.jZ,
```

#### 990. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10436` → after: `L10465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10465) · [Before (L10436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10436)

```diff
-             for (const jB of QB) jB.y >= GB && jB.y < oB && BB.set(jB.x - OB, jB.y - GB, jB.z - YB, jB.SM)
+             for (const LW of NW) LW.y >= OW && LW.y < PW && WW.set(LW.x - iW, LW.y - OW, LW.z - mW, LW.NL)
```

#### 991. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10441` → after: `L10470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10470) · [Before (L10441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10441)

```diff
-             const JB = new zB.d(`${this.seed}|${BB}|${OB}|cluster`),
+             const wW = new xW.g(`${this.seed}|${WW}|${iW}|cluster`),
```

#### 992. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10455` → after: `L10484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10484) · [Before (L10455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10455)

```diff
-             if (this.scatterClusterCells(BB, qB, OB, NB, oB, JB, RB), !(RB.length < NB.BQ))
+             if (this.scatterClusterCells(WW, bW, iW, UW, PW, wW, kW), !(kW.length < UW.Hm))
```

#### 993. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10461` → after: `L10490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10490) · [Before (L10461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10461)

```diff
-               tD: yB,
+               hm: cW,
```

#### 994. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10481` → after: `L10510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10510) · [Before (L10481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10481)

```diff
-                     SM: RB.SM
+                     NL: kW.NL
```

#### 995. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10495` → after: `L10524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10524) · [Before (L10495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10495)

```diff
-             this.prefabGenerator = YB, this.seed = void 0, this.pP = void 0, this.biomeSelector = void 0, this.treeGenerator = void 0, this.blockMetadata = void 0, this.oreGenerator = void 0, this.riverbedFeatureGenerator = void 0, this.bedrockId = void 0, this.waterId = void 0,  … [truncated]
+             this.prefabGenerator = mW, this.seed = void 0, this.jZ = void 0, this.biomeSelector = void 0, this.treeGenerator = void 0, this.blockMetadata = void 0, this.oreGenerator = void 0, this.riverbedFeatureGenerator = void 0, this.bedrockId = void 0, this.waterId = void 0,  … [truncated]
```

#### 996. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10498` → after: `L10527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10527) · [Before (L10498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10498)

```diff
-             if (GB + this.pP <= oB.t.bedrockLevel) return {
+             if (OW + this.jZ <= PW.w.bedrockLevel) return {
```

#### 997. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10505-L10507` → after: `L10534-L10536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10534-L10536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10534-L10536) · [Before (L10505-L10507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10505-L10507)

```diff
-             if (VB >= GB && AB < GB + this.pP)
-               for (let YB = OB; YB < OB + this.pP; YB++)
-                 for (let yB = DB; yB < DB + this.pP; yB++) {
+             if (KW >= OW && MW < OW + this.jZ)
+               for (let mW = iW; mW < iW + this.jZ; mW++)
+                 for (let cW = EW; cW < EW + this.jZ; cW++) {
```

#### 998. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10510-L10512` → after: `L10539-L10541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10539-L10541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10539-L10541) · [Before (L10510-L10512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10510-L10512)

```diff
-                     PB = jB.get(YB, yB, QB.c.GroundHeight);
-                   if (PB >= GB && PB < GB + this.pP) {
-                     const JB = jB.get(YB, yB, QB.c.IsLake) === oB.i ? MB.getDryBedBlock(YB, PB, yB) : MB.getTopsoilBlock(YB, PB, yB);
+                     ZW = LW.get(mW, cW, NW.f.GroundHeight);
+                   if (ZW >= OW && ZW < OW + this.jZ) {
+                     const wW = LW.get(mW, cW, NW.f.IsLake) === PW.l ? tW.getDryBedBlock(mW, ZW, cW) : tW.getTopsoilBlock(mW, ZW, cW);
```

#### 999. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10516-L10518` → after: `L10545-L10547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10545-L10547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10545-L10547) · [Before (L10516-L10518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10516-L10518)

```diff
-             if (VB + 1 >= GB && AB - 4 < GB + this.pP)
-               for (let YB = OB; YB < OB + this.pP; YB++)
-                 for (let oB = DB; oB < DB + this.pP; oB++) {
+             if (KW + 1 >= OW && MW - 4 < OW + this.jZ)
+               for (let mW = iW; mW < iW + this.jZ; mW++)
+                 for (let PW = EW; PW < EW + this.jZ; PW++) {
```

#### 1000. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10521-L10522` → after: `L10550-L10551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10550-L10551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10550-L10551) · [Before (L10521-L10522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10521-L10522)

```diff
-                     MB = jB.get(YB, oB, QB.c.GroundHeight),
-                     PB = Math.min(MB, GB + this.pP);
+                     tW = LW.get(mW, PW, NW.f.GroundHeight),
+                     ZW = Math.min(tW, OW + this.jZ);
```

#### 1001. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10530-L10531` → after: `L10559-L10560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10559-L10560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10559-L10560) · [Before (L10530-L10531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10530-L10531)

```diff
-               for (let GB = Math.max(DB - 4, 0); GB < Math.min(DB, this.pP); GB++) BB.set(OB, GB, QB, this.dirtId);
-               DB >= 0 && DB < this.pP && BB.set(OB, DB, QB, this.grassBlockId)
+               for (let OW = Math.max(EW - 4, 0); OW < Math.min(EW, this.jZ); OW++) WW.set(iW, OW, NW, this.dirtId);
+               EW >= 0 && EW < this.jZ && WW.set(iW, EW, NW, this.grassBlockId)
```

#### 1002. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10535-L10536` → after: `L10564-L10565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10564-L10565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10564-L10565) · [Before (L10535-L10536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10535-L10536)

```diff
-               for (let oB = OB; oB < OB + this.pP; oB++)
-                 for (let yB = DB; yB < DB + this.pP; yB++) {
+               for (let PW = iW; PW < iW + this.jZ; PW++)
+                 for (let cW = EW; cW < EW + this.jZ; cW++) {
```

#### 1003. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10538-L10539` → after: `L10567-L10568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10567-L10568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10567-L10568) · [Before (L10538-L10539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10538-L10539)

```diff
-                     MB = jB.get(oB, yB, QB.c.GroundHeight),
-                     PB = Math.min(MB - 4, GB + this.pP),
+                     tW = LW.get(PW, cW, NW.f.GroundHeight),
+                     ZW = Math.min(tW - 4, OW + this.jZ),
```

#### 1004. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10544` → after: `L10573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10573) · [Before (L10544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10544)

```diff
-                     BB.set(oB - OB, YB - GB, yB - DB, 0 !== QB ? QB : JB)
+                     WW.set(PW - iW, mW - OW, cW - EW, 0 !== NW ? NW : wW)
```

#### 1005. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10548-L10550` → after: `L10577-L10579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10577-L10579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10577-L10579) · [Before (L10548-L10550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10548-L10550)

```diff
-             if (VB - 4 >= GB && this.oreGenerator.addOresToChunk(BB, OB, GB, DB, 4, jB, pB), VB >= GB && (yB.d.addCavesToChunk(BB, OB, GB, DB, jB, lB), cO.addCaveDecorationsToChunk(BB, OB, GB, DB, this.pP, NB)), oB.t.bedrockLevel >= GB && oB.t.bedrockLevel < GB + this.pP)
-               for (let YB = OB; YB < OB + this.pP; YB++)
-                 for (let QB = DB; QB < DB + this.pP; QB++) BB.set(YB - OB, oB.t.bedrockLevel - GB, QB - DB, this.bedrockId);
+             if (KW - 4 >= OW && this.oreGenerator.addOresToChunk(WW, iW, OW, EW, 4, LW, AW), KW >= OW && (cW.e.addCavesToChunk(WW, iW, OW, EW, LW, lW), qi.addCaveDecorationsToChunk(WW, iW, OW, EW, this.jZ, UW)), PW.w.bedrockLevel >= OW && PW.w.bedrockLevel < OW + this.jZ)
+               for (let mW = iW; mW < iW + this.jZ; mW++)
+                 for (let NW = EW; NW < EW + this.jZ; NW++) WW.set(mW - iW, PW.w.bedrockLevel - OW, NW - EW, this.bedrockId);
```

#### 1006. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10552-L10555` → after: `L10581-L10588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10581-L10588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10581-L10588) · [Before (L10552-L10555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10552-L10555)

```diff
-             for (const YB of MB)
-               for (let QB = OB; QB < OB + this.pP; QB++)
-                 for (let oB = GB; oB < GB + this.pP; oB++)
-                   for (let jB = DB; jB < DB + this.pP; jB++) {
+             for (const mW of tW) {
+               const NW = mW.worldBox,
+                 PW = Math.min(iW + this.jZ - 1, NW.maxX),
+                 LW = Math.min(OW + this.jZ - 1, NW.bm),
+                 cW = Math.min(EW + this.jZ - 1, NW.maxZ);
+               for (let wW = Math.max(iW, NW.minX); wW <= PW; wW++)
+                 for (let PW = Math.max(OW, NW.Am); PW <= LW; PW++)
+                   for (let LW = Math.max(EW, NW.minZ); LW <= cW; LW++) {
```

#### 1007. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10566-L10567` → after: `L10600-L10601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10600-L10601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10600-L10601) · [Before (L10566-L10567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10566-L10567)

```diff
-               for (let GB = Math.max(QB, 0); GB < Math.min(oB, this.pP); GB++) BB.set(OB, GB, DB, this.waterId);
-               oB >= 0 && oB < this.pP && BB.set(OB, oB, DB, UB[YB + 4])
+               for (let OW = Math.max(NW, 0); OW < Math.min(PW, this.jZ); OW++) WW.set(iW, OW, EW, this.waterId);
+               PW >= 0 && PW < this.jZ && WW.set(iW, PW, EW, yW[mW + 4])
```

#### 1008. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10570-L10575` → after: `L10604-L10609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10604-L10609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10604-L10609) · [Before (L10570-L10575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10570-L10575)

```diff
-             if (this.addSurfaceBlocks(BB, GB, RB.lilyPads), SB && VB >= GB && AB < GB + this.pP)
-               for (let yB = OB; yB < OB + this.pP; yB++)
-                 for (let JB = DB; JB < DB + this.pP; JB++) {
-                   const MB = jB.get(yB, JB, QB.c.WaterHeight),
-                     PB = jB.get(yB, JB, QB.c.GroundHeight);
-                   if (MB !== oB.p && PB >= GB && PB < GB + this.pP)
+             if (this.addSurfaceBlocks(WW, OW, kW.lilyPads), SW && KW >= OW && MW < OW + this.jZ)
+               for (let cW = iW; cW < iW + this.jZ; cW++)
+                 for (let wW = EW; wW < EW + this.jZ; wW++) {
+                   const tW = LW.get(cW, wW, NW.f.WaterHeight),
+                     ZW = LW.get(cW, wW, NW.f.GroundHeight);
+                   if (tW !== PW.s && ZW >= OW && ZW < OW + this.jZ)
```

#### 1009. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10579` → after: `L10613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10613) · [Before (L10579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10579)

```diff
-                       if ((0, YB.J)(QB, yB, JB) < 100) fB === QB[0] && dB === QB[1] || (fB = QB[0], dB = QB[1], KB = new zB.d(`${this.seed}${fB}${dB}`).next() < .3 ? this.chalkId : this.clayId), BB.set(yB - OB, PB - GB, JB - DB, KB), PB - 1 >= GB && BB.set(yB - OB, PB - 1 - GB, J … [truncated]
+                       if ((0, mW.J)(NW, cW, wW) < 100) TW === NW[0] && hW === NW[1] || (TW = NW[0], hW = NW[1], HW = new xW.g(`${this.seed}${TW}${hW}`).next() < .3 ? this.chalkId : this.clayId), WW.set(cW - iW, ZW - OW, wW - EW, HW), ZW - 1 >= OW && WW.set(cW - iW, ZW - 1 - OW, w … [truncated]
```

#### 1010. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10588-L10591` → after: `L10622-L10625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10622-L10625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10622-L10625) · [Before (L10588-L10591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10588-L10591)

```diff
-               for (let QB = OB; QB < OB + this.pP; QB++)
-                 for (let oB = GB; oB < GB + this.pP; oB++)
-                   for (let jB = DB; jB < DB + this.pP; jB++) {
-                     const yB = kB.b.getBlockFromFixedPointPrefab(QB, oB, jB, YB);
+               for (let NW = iW; NW < iW + this.jZ; NW++)
+                 for (let PW = OW; PW < OW + this.jZ; PW++)
+                   for (let LW = EW; LW < EW + this.jZ; LW++) {
+                     const cW = JW.c.getBlockFromFixedPointPrefab(NW, PW, LW, mW);
```

#### 1011. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10612` → after: `L10646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10646) · [Before (L10612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10612)

```diff
-               DB >= 0 && DB < this.pP && BB.set(GB[YB], DB, GB[YB + 2], GB[YB + 3])
+               EW >= 0 && EW < this.jZ && WW.set(OW[mW], EW, OW[mW + 2], OW[mW + 3])
```

#### 1012. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10626` → after: `L10660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10660) · [Before (L10626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10626)

```diff
-             this.pP = BB, this.biomeSelector = OB, this.seed = GB, this.random = new zB.d(""), this.lilyPadId = void 0, this.lilyPadId = YB["Lily Pad"].id
+             this.jZ = WW, this.biomeSelector = iW, this.seed = OW, this.random = new xW.g(""), this.lilyPadId = void 0, this.lilyPadId = mW["Lily Pad"].id
```

#### 1013. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10636-L10637` → after: `L10670-L10671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10670-L10671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10670-L10671) · [Before (L10636-L10637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10636-L10637)

```diff
-             for (let ZB = BB; ZB < BB + this.pP; ZB++)
-               for (let NB = OB; NB < OB + this.pP; NB++) {
+             for (let jW = WW; jW < WW + this.jZ; jW++)
+               for (let UW = iW; UW < iW + this.jZ; UW++) {
```

#### 1014. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10639-L10640` → after: `L10673-L10674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10673-L10674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10673-L10674) · [Before (L10639-L10640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10639-L10640)

```diff
-                   WB = GB.getOrGenerate(ZB, NB, QB.c.GroundHeight),
-                   AB = GB.getOrGenerate(ZB, NB, QB.c.WaterHeight);
+                   sW = OW.getOrGenerate(jW, UW, NW.f.GroundHeight),
+                   MW = OW.getOrGenerate(jW, UW, NW.f.WaterHeight);
```

#### 1015. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10644-L10645` → after: `L10678-L10679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10678-L10679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10678-L10679) · [Before (L10644-L10645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10644-L10645)

```diff
-                 if (AB !== oB.p) {
-                   qB = !0, WB < AB && JB.push(VB, SB, WB + 1, AB, RB.topwaterBlockType), RB.hasScatteredLakes && 1 === GB.getOrGenerate(ZB, NB, QB.c.IsLake) && (this.random.reseed(`${ZB}|${NB}|${this.seed}lilyPad`), this.random.next() < .08 && this.isInsideWater(ZB, NB, GB) && PB … [truncated]
+                 if (MW !== PW.s) {
+                   bW = !0, sW < MW && wW.push(KW, SW, sW + 1, MW, kW.topwaterBlockType), kW.hasScatteredLakes && 1 === OW.getOrGenerate(jW, UW, NW.f.IsLake) && (this.random.reseed(`${jW}|${UW}|${this.seed}lilyPad`), this.random.next() < .08 && this.isInsideWater(jW, UW, OW) && ZW … [truncated]
```

#### 1016. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10649-L10650` → after: `L10683-L10684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10683-L10684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10683-L10684) · [Before (L10649-L10650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10649-L10650)

```diff
-                 if (RB.hasScatteredLakes && this.isBesideLake(ZB, NB, GB) && (this.random.reseed(`${ZB}|${NB}|${this.seed}oasisShore`), this.random.next() < .85 && (MB.push(VB, WB, SB), nB = this.biomeSelector.baseBiome.floraGenerator)), !yB.d.isInCave(ZB, WB, NB, YB) && !kB.b.is … [truncated]
-                   for (let GB = WB + 1; GB <= WB + RB.maxFloraHeight; GB += this.pP) zB.startY = GB, nB.addBiomeFloraToColumn(zB, BB, OB, ZB, GB, NB, WB)
+                 if (kW.hasScatteredLakes && this.isBesideLake(jW, UW, OW) && (this.random.reseed(`${jW}|${UW}|${this.seed}oasisShore`), this.random.next() < .85 && (tW.push(KW, sW, SW), YW = this.biomeSelector.baseBiome.floraGenerator)), !cW.e.isInCave(jW, sW, UW, mW) && !JW.c.is … [truncated]
+                   for (let OW = sW + 1; OW <= sW + kW.maxFloraHeight; OW += this.jZ) xW.startY = OW, YW.addBiomeFloraToColumn(xW, WW, iW, jW, OW, UW, sW)
```

#### 1017. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10663` → after: `L10697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10697) · [Before (L10663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10663)

```diff
-             return GB.getOrGenerate(BB + 1, OB, QB.c.WaterHeight) !== oB.p && GB.getOrGenerate(BB - 1, OB, QB.c.WaterHeight) !== oB.p && GB.getOrGenerate(BB, OB + 1, QB.c.WaterHeight) !== oB.p && GB.getOrGenerate(BB, OB - 1, QB.c.WaterHeight) !== oB.p
+             return OW.getOrGenerate(WW + 1, iW, NW.f.WaterHeight) !== PW.s && OW.getOrGenerate(WW - 1, iW, NW.f.WaterHeight) !== PW.s && OW.getOrGenerate(WW, iW + 1, NW.f.WaterHeight) !== PW.s && OW.getOrGenerate(WW, iW - 1, NW.f.WaterHeight) !== PW.s
```

#### 1018. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10669` → after: `L10703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10703) · [Before (L10669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10669)

```diff
-             return GB.getOrGenerate(BB, OB, QB.c.WaterHeight) !== oB.p && 1 === GB.getOrGenerate(BB, OB, QB.c.IsLake)
+             return OW.getOrGenerate(WW, iW, NW.f.WaterHeight) !== PW.s && 1 === OW.getOrGenerate(WW, iW, NW.f.IsLake)
```

#### 1019. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10672` → after: `L10706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10706) · [Before (L10672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10672)

```diff
-         var bO = GB(40700);
+         var ri = OW(41228);
```

#### 1020. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10677` → after: `L10711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10711) · [Before (L10677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10677)

```diff
-             if (this.pP = BB, this.hashChunkContents = PB, this.maxTreeRadius = 3, this.prefabSize = 40, this.maxPrefabGroundingRadius = 4, this.treeGenerator = void 0, this.prefabGenerator = void 0, this.caveGenerator = void 0, this.caveDecorationGenerator = void 0, this.biomeSe … [truncated]
+             if (this.jZ = WW, this.hashChunkContents = ZW, this.maxTreeRadius = 3, this.prefabSize = 40, this.maxPrefabGroundingRadius = 4, this.treeGenerator = void 0, this.prefabGenerator = void 0, this.caveGenerator = void 0, this.caveDecorationGenerator = void 0, this.biomeSe … [truncated]
```

#### 1021. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10679` → after: `L10713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10713) · [Before (L10679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10679)

```diff
-               CO = new qO.b("chunk columns", BB, 4e4)
+               zi = new ji.c("chunk columns", WW, 4e4)
```

#### 1022. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10681-L10682` → after: `L10715-L10716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10715-L10716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10715-L10716) · [Before (L10681-L10682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10681-L10682)

```diff
-             this.chunkColumnInfos = CO.partition(), this.caveGenerator = new yB.d(DB, BB, OB, null !== (zB = null === JB || void 0 === JB ? void 0 : JB.hD.eD) && void 0 !== zB ? zB : "Lava");
-             const WB = new UO(OB, DB, BB, null !== (lB = null === JB || void 0 === JB ? void 0 : JB.lQ) && void 0 !== lB ? lB : [...nO, ...null !== (pB = null === MB || void 0 === MB ? void 0 : MB.VQ) && void 0 !== pB ? pB : []]),
+             this.chunkColumnInfos = zi.partition(), this.caveGenerator = new cW.e(EW, WW, iW, null !== (xW = null === wW || void 0 === wW ? void 0 : wW.km.Mm) && void 0 !== xW ? xW : "Lava");
+             const sW = new Ti(iW, EW, WW, null !== (lW = null === wW || void 0 === wW ? void 0 : wW.Bm) && void 0 !== lW ? lW : [...yi, ...null !== (AW = null === tW || void 0 === tW ? void 0 : tW.Fm) && void 0 !== AW ? AW : []]),
```

#### 1023. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10684` → after: `L10718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10718) · [Before (L10684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10684)

```diff
-                 pP: BB,
+                 jZ: WW,
```

#### 1024. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10692-L10695` → after: `L10726-L10729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10726-L10729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10726-L10729) · [Before (L10692-L10695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10692-L10695)

```diff
-               VB = null !== (qB = null === JB || void 0 === JB ? void 0 : JB.oQ) && void 0 !== qB ? qB : null,
-               SB = null !== (ZB = null === MB || void 0 === MB ? void 0 : MB.buildBiomes) && void 0 !== ZB ? ZB : null,
-               nB = null !== VB ? (0, fO.i)(VB, AB) : null !== SB ? this.buildTerrainBiomes(SB, AB) : (0, fO.k)(AB);
-             this.biomeSelector = new fO.e(this, WB, DB, BB, OB, nB), this.treeGenerator = new lO(this, this.biomeSelector, BB, DB, OB), this.fixedPointPrefabTracker = new kB.b(jB, BB), this.prefabGenerator = new DO({
+               KW = null !== (bW = null === wW || void 0 === wW ? void 0 : wW.Dm) && void 0 !== bW ? bW : null,
+               SW = null !== (jW = null === tW || void 0 === tW ? void 0 : tW.buildBiomes) && void 0 !== jW ? jW : null,
+               YW = null !== KW ? (0, Ji.e)(KW, MW) : null !== SW ? this.buildTerrainBiomes(SW, MW) : (0, Ji.h)(MW);
+             this.biomeSelector = new Ji.c(this, sW, EW, WW, iW, YW), this.treeGenerator = new Ai(this, this.biomeSelector, WW, EW, iW), this.fixedPointPrefabTracker = new JW.c(LW, WW), this.prefabGenerator = new Ei({
```

#### 1025. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10697` → after: `L10731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10731) · [Before (L10697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10697)

```diff
-               pP: BB,
+               jZ: WW,
```

#### 1026. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10701` → after: `L10735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10735) · [Before (L10701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10701)

```diff
-                 [QB.j.SURFACE]: {
+                 [NW.k.SURFACE]: {
```

#### 1027. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10703` → after: `L10737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10737) · [Before (L10703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10703)

```diff
-                     [QB.h.MEDIUM]: {
+                     [NW.i.MEDIUM]: {
```

#### 1028. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10706` → after: `L10740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10740) · [Before (L10706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10706)

```diff
-                     [QB.h.HIGH]: {
+                     [NW.i.HIGH]: {
```

#### 1029. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10709` → after: `L10743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10743) · [Before (L10709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10709)

```diff
-                     [QB.h.VERY_HIGH]: {
+                     [NW.i.VERY_HIGH]: {
```

#### 1030. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10714` → after: `L10748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10748) · [Before (L10714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10714)

```diff
-                 [QB.j.UNDERGROUND]: {
+                 [NW.k.UNDERGROUND]: {
```

#### 1031. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10716` → after: `L10750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10750) · [Before (L10716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10716)

```diff
-                     [QB.h.MEDIUM]: {
+                     [NW.i.MEDIUM]: {
```

#### 1032. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10719-L10720` → after: `L10753-L10754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10753-L10754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10753-L10754) · [Before (L10719-L10720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10719-L10720)

```diff
-                     [QB.h.HIGH]: null,
-                     [QB.h.VERY_HIGH]: null
+                     [NW.i.HIGH]: null,
+                     [NW.i.VERY_HIGH]: null
```

#### 1033. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10725` → after: `L10759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10759) · [Before (L10725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10725)

```diff
-             }), this.noWaterHeightmapGenerator = new bO.d((0, bO.e)(DB)), this.heightmapPerturb = new YB.h([{
+             }), this.noWaterHeightmapGenerator = new ri.f((0, ri.g)(EW)), this.heightmapPerturb = new mW.i([{
```

#### 1034. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10734` → after: `L10768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10768) · [Before (L10734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10734)

```diff
-             }], `${DB}HeightmapPerturb`);
+             }], `${EW}HeightmapPerturb`);
```

#### 1035. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10740` → after: `L10774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10774) · [Before (L10740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10740)

```diff
-             this.waterBodyGenerator = new AO(this.biomeSelector, this.noWaterHeightmapGenerator, DB, BB, UB, this.needOutsideWaterDist, oB, null === (NB = null === JB || void 0 === JB ? void 0 : JB.cD) || void 0 === NB || NB), this.caveDecorationGenerator = new cO(OB, BB, DB, nul … [truncated]
+             this.waterBodyGenerator = new Ki(this.biomeSelector, this.noWaterHeightmapGenerator, EW, WW, yW, this.needOutsideWaterDist, PW, null === (UW = null === wW || void 0 === wW ? void 0 : wW.Um) || void 0 === UW || UW), this.caveDecorationGenerator = new qi(iW, WW, EW, nul … [truncated]
```

#### 1036. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10759` → after: `L10793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10793) · [Before (L10759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10759)

```diff
-             const GB = this.pP,
+             const OW = this.jZ,
```

#### 1037. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10777` → after: `L10811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10811) · [Before (L10777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10777)

```diff
-               if ((null !== (DB = YB.get(QB.key)) && void 0 !== DB ? DB : QB) !== QB) throw new Error(`A world-gen terrain built two biomes keyed "${QB.key}"`);
+               if ((null !== (EW = mW.get(NW.key)) && void 0 !== EW ? EW : NW) !== NW) throw new Error(`A world-gen terrain built two biomes keyed "${NW.key}"`);
```

#### 1038. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10787-L10788` → after: `L10821-L10822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10821-L10822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10821-L10822) · [Before (L10787-L10788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10787-L10788)

```diff
-               const BB = `${Math.floor(yB.x/this.pP)}|${Math.floor(yB.z/this.pP)}`,
-                 OB = null !== (oB = QB.get(BB)) && void 0 !== oB ? oB : [];
+               const WW = `${Math.floor(cW.x/this.jZ)}|${Math.floor(cW.z/this.jZ)}`,
+                 iW = null !== (PW = NW.get(WW)) && void 0 !== PW ? PW : [];
```

#### 1039. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10793-L10794` → after: `L10827-L10828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10827-L10828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10827-L10828) · [Before (L10793-L10794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10793-L10794)

```diff
-               const BB = Math.floor(yB[0].x / this.pP) * this.pP,
-                 OB = Math.floor(yB[0].z / this.pP) * this.pP,
+               const WW = Math.floor(cW[0].x / this.jZ) * this.jZ,
+                 iW = Math.floor(cW[0].z / this.jZ) * this.jZ,
```

#### 1040. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10815` → after: `L10849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10849) · [Before (L10815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10815)

```diff
-                   iD: JB.prefab.name
+                   tm: wW.prefab.name
```

#### 1041. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10848` → after: `L10882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10882) · [Before (L10848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10848)

```diff
-               MB = YB.getOrGenerate(BB + Math.floor(this.pP / 2), OB + Math.floor(this.pP / 2))[0].biome.oreGenerator.getOreBlocksForChunk(BB, OB),
+               tW = mW.getOrGenerate(WW + Math.floor(this.jZ / 2), iW + Math.floor(this.jZ / 2))[0].biome.oreGenerator.getOreBlocksForChunk(WW, iW),
```

#### 1042. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10866` → after: `L10900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10900) · [Before (L10866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10866)

```diff
-             return YB.o.create(this.pP, [BB, OB], this.biomeSelector)
+             return mW.r.create(this.jZ, [WW, iW], this.biomeSelector)
```

#### 1043. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10870` → after: `L10904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10904) · [Before (L10870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10870)

```diff
-             return YB.l.create(this.pP, [BB, OB], QB.c.NumFields, oB)
+             return mW.n.create(this.jZ, [WW, iW], NW.f.NumFields, PW)
```

#### 1044. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10874` → after: `L10908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10908) · [Before (L10874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10874)

```diff
-       40706: (BB, OB, GB) => {
+       41231: (WW, iW, OW) => {
```

#### 1045. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10877-L10878` → after: `L10912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10912) · [Before (L10877-L10878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10877-L10878)

```diff
-           g: () => fB,
-           h: () => nB,
+           i: () => YW,
```

#### 1046. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10880-L10886` → after: `L10914-L10919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10914-L10919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10914-L10919) · [Before (L10880-L10886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10880-L10886)

```diff
-           k: () => mB,
-           l: () => LB,
-           o: () => uB,
-           p: () => AB,
-           t: () => WB,
-           x: () => SB,
-           B: () => qB,
+           m: () => uW,
+           n: () => gW,
+           r: () => nW,
+           v: () => MW,
+           w: () => sW,
+           A: () => SW,
```

#### 1047. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10888` → after: `L10921-L10922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10921-L10922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10921-L10922) · [Before (L10888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10888)

```diff
-           H: () => RB,
+           F: () => KW,
+           G: () => kW,
```

#### 1048. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10891` → after: `L10925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10925) · [Before (L10891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10891)

```diff
-         var YB = GB(3166),
+         var mW = OW(3891),
```

#### 1049. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10904` → after: `L10938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10938) · [Before (L10904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10904)

```diff
-             const OB = "function" == typeof BB ? BB : function(BB) {
+             const iW = "function" == typeof WW ? WW : function(WW) {
```

#### 1050. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11113` → after: `L11147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11147) · [Before (L11113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11113)

```diff
-         var pB = GB(40711);
+         var AW = OW(41236);
```

#### 1051. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11142` → after: `L11176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11176) · [Before (L11142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11142)

```diff
-             IM: RB(BB, QB, oB),
+             TP: kW(WW, NW, PW),
```

#### 1052. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11173` → after: `L11207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11207) · [Before (L11173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11173)

```diff
-             for (let GB = 0; GB < BB.length; GB++) this._simplexes.push(new lB(`${OB}${GB}`))
+             for (let OW = 0; OW < WW.length; OW++) this._simplexes.push(new lW(`${iW}${OW}`))
```

#### 1053. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11198` → after: `L11232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11232) · [Before (L11198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11198)

```diff
-             for (let DB = 0; DB < BB.length; DB++) this._simplexes.push(new lB(`${GB}${DB}`));
+             for (let EW = 0; EW < WW.length; EW++) this._simplexes.push(new lW(`${OW}${EW}`));
```

#### 1054. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11317` → after: `L11351-L11371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11351-L11371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11351-L11371) · [Before (L11317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11317)

```diff
-             this.array = []
+             this.columns = [], this.lastX = NaN, this.lastZ = NaN, this.lastColumn = void 0
+           }
+           get(WW, iW) {
+             if (WW !== this.lastX || iW !== this.lastZ) {
+               var OW;
+               const mW = null === (OW = this.columns[WW]) || void 0 === OW ? void 0 : OW[iW];
+               if (void 0 === mW) return;
+               this.keep(WW, iW, mW)
+             }
+             return this.lastColumn
+           }
+           getOrCreate(WW, iW) {
+             return WW === this.lastX && iW === this.lastZ || this.keep(WW, iW, (this.columns[WW] ??= [])[iW] ??= []), this.lastColumn
+           }
+           keep(WW, iW, OW) {
+             this.lastX = WW, this.lastZ = iW, this.lastColumn = OW
+ ... (5 more added lines; see GitHub link above)
```

#### 1055. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11320-L11321` → after: `L11374-L11375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11374-L11375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11374-L11375) · [Before (L11320-L11321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11320-L11321)

```diff
-             var YB, DB;
-             return null === (YB = this.array[BB]) || void 0 === YB || null === (DB = YB[OB]) || void 0 === DB ? void 0 : DB[GB]
+             var mW;
+             return null === (mW = this.columns.get(WW, iW)) || void 0 === mW ? void 0 : mW[OW]
```

#### 1056. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11324` → after: `L11378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11378) · [Before (L11324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11324)

```diff
-             this.array[BB] || (this.array[BB] = []), this.array[BB][OB] || (this.array[BB][OB] = []), this.array[BB][OB][GB] = YB
+             this.columns.getOrCreate(WW, iW)[OW] = mW
```

#### 1057. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11334` → after: `L11388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11388) · [Before (L11334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11334)

```diff
-             if (void 0 === YB) throw new Error(`Number not found for x=${BB}, z=${OB}, thirdIndex=${GB}`);
+             if (void 0 === mW) throw new Error(`Number not found for x=${WW}, z=${iW}, thirdIndex=${OW}`);
```

#### 1058. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11365` → after: `L11419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11419) · [Before (L11365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11365)

```diff
-             this.array = [], this.lastX = NaN, this.lastZ = NaN, this.lastColumn = void 0
+             this.columns = new oW
```

#### 1059. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11368-L11369` → after: `L11422-L11423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11422-L11423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11422-L11423) · [Before (L11368-L11369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11368-L11369)

```diff
-             var DB, QB, oB;
-             return null === (DB = this.array[BB]) || void 0 === DB || null === (QB = DB[OB]) || void 0 === QB || null === (oB = QB[GB]) || void 0 === oB ? void 0 : oB[YB]
+             var EW, NW;
+             return null === (EW = this.columns.get(WW, iW)) || void 0 === EW || null === (NW = EW[OW]) || void 0 === NW ? void 0 : NW[mW]
```

#### 1060. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11372-L11373` → after: `L11426-L11427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11426-L11427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11426-L11427) · [Before (L11372-L11373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11372-L11373)

```diff
-             let QB = this.lastColumn;
-             BB === this.lastX && OB === this.lastZ || (this.array[BB] || (this.array[BB] = []), QB = this.array[BB][OB] ??= [], this.lastX = BB, this.lastZ = OB, this.lastColumn = QB), QB[GB] || (QB[GB] = []), QB[GB][YB] = DB
+             const NW = this.columns.getOrCreate(WW, iW);
+             NW[OW] || (NW[OW] = []), NW[OW][mW] = EW
```

#### 1061. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11383` → after: `L11437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11437) · [Before (L11383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11383)

```diff
-             if (void 0 === DB) throw new Error(`Number not found for x=${BB}, z=${OB}, thirdIndex=${GB}, fourthIndex=${YB}`);
+             if (void 0 === EW) throw new Error(`Number not found for x=${WW}, z=${iW}, thirdIndex=${OW}, fourthIndex=${mW}`);
```

#### 1062. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11413` → after: `L11467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11467) · [Before (L11413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11413)

```diff
-       40711: (BB, OB, GB) => {
+       41236: (WW, iW, OW) => {
```

#### 1063. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11416-L11417` → after: `L11470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11470) · [Before (L11416-L11417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11416-L11417)

```diff
-           f: () => oB,
-           i: () => JB,
+           h: () => PW,
```

#### 1064. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11421` → after: `L11473-L11475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11473-L11475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11473-L11475) · [Before (L11421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11421)

```diff
-           t: () => YB
+           q: () => LW,
+           s: () => EW,
+           w: () => mW
```

#### 1065. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11434` → after: `L11488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11488) · [Before (L11434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11434)

```diff
-       40717: (BB, OB, GB) => {
+       41238: (WW, iW, OW) => {
```

#### 1066. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11438-L11441` → after: `L11491-L11495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11491-L11495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11491-L11495) · [Before (L11438-L11441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11438-L11441)

```diff
-           d: () => yB,
-           h: () => jB,
-           j: () => oB,
-           n: () => QB
+           f: () => mW,
+           g: () => cW,
+           i: () => LW,
+           k: () => PW,
+           l: () => NW
```

#### 1067. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11460` → after: `L11514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11514) · [Before (L11460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11460)

```diff
-       4656: (BB, OB, GB) => {
+       2955: (WW, iW, OW) => {
```

#### 1068. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11467` → after: `L11520-L11521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11520-L11521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11520-L11521) · [Before (L11467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11467)

```diff
-           l: () => DB
+           l: () => PW,
+           o: () => EW
```

#### 1069. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11493` → after: `L11547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11547) · [Before (L11493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11493)

```diff
-             if (this.distribution = void 0, BB.length <= 0) throw new Error(`Distribution must have at least one item: ${JSON.stringify(BB)}`);
+             if (this.distribution = void 0, WW.length <= 0) throw new Error(`Distribution must have at least one item: ${JSON.stringify(WW)}`);
```

#### 1070. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11498` → after: `L11552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11552) · [Before (L11498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11498)

```diff
-               if (OB.has(YB)) throw new Error(`Values must be unique: ${JSON.stringify(BB)}`);
+               if (iW.has(mW)) throw new Error(`Values must be unique: ${JSON.stringify(WW)}`);
```

#### 1071. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11501` → after: `L11555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11555) · [Before (L11501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11501)

```diff
-               if (QB <= 0) throw new Error(`Weights must be positive: ${JSON.stringify(BB)}`);
+               if (NW <= 0) throw new Error(`Weights must be positive: ${JSON.stringify(WW)}`);
```

#### 1072. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11526` → after: `L11580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11580) · [Before (L11526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11526)

```diff
-             if (this.offset = void 0, this.multiplier = void 0, BB > OB) throw new Error(`Min must be less than or equal to Max, but Min=${BB} and Max=${OB}`);
+             if (this.offset = void 0, this.multiplier = void 0, WW > iW) throw new Error(`Min must be less than or equal to Max, but Min=${WW} and Max=${iW}`);
```

#### 1073. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11536` → after: `L11590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11590) · [Before (L11536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11536)

```diff
-             if (this.uniformRealDistribution = void 0, this.uniformRealDistribution = new oB(BB, OB, GB), !Number.isInteger(BB) || !Number.isInteger(OB)) throw new Error(`Min and Max must be integers, but Min=${BB} and Max=${OB}`)
+             if (this.uniformRealDistribution = void 0, this.uniformRealDistribution = new PW(WW, iW, OW), !Number.isInteger(WW) || !Number.isInteger(iW)) throw new Error(`Min and Max must be integers, but Min=${WW} and Max=${iW}`)
```

#### 1074. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11552` → after: `L11606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11606) · [Before (L11552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11552)

```diff
-       641: (BB, OB, GB) => {
+       643: (WW, iW, OW) => {
```

#### 1075. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11554` → after: `L11608-L11609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11608-L11609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11608-L11609) · [Before (L11554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11554)

```diff
-           C: () => zB,
+           A: () => wW,
+           B: () => lW,
```

#### 1076. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11556-L11563` → after: `L11611-L11617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11611-L11617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11611-L11617) · [Before (L11556-L11563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11556-L11563)

```diff
-           G: () => lB,
-           J: () => pB,
-           Q: () => yB,
-           V: () => PB,
-           e: () => jB,
-           m: () => oB,
-           p: () => DB,
-           z: () => QB
+           K: () => cW,
+           U: () => ZW,
+           d: () => LW,
+           i: () => PW,
+           k: () => EW,
+           v: () => NW,
+           y: () => xW
```

#### 1077. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11565` → after: `L11619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11619) · [Before (L11565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11565)

```diff
-         var YB = GB(645);
+         var mW = OW(649);
```

#### 1078. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11595` → after: `L11649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11649) · [Before (L11595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11595)

```diff
-         YB.b, Number(atob("NQ==")), Number(atob("MTM="));
+         mW.d, Number(atob("NQ==")), Number(atob("MTM="));
```

#### 1079. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11603` → after: `L11657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11657) · [Before (L11603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11603)

```diff
-       645: (BB, OB, GB) => {
+       649: (WW, iW, OW) => {
```

#### 1080. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11605` → after: `L11659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11659) · [Before (L11605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11605)

```diff
-           b: () => YB
+           d: () => mW
```

#### 1081. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11607` → after: `L11661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11661) · [Before (L11607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11607)

```diff
-         const YB = 875
+         const mW = 877
```

#### 1082. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11609` → after: `L11663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11663) · [Before (L11609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11609)

```diff
-       217: BB => {
+       204: WW => {
```

#### 1083. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11614` → after: `L11668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11668) · [Before (L11614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11614)

```diff
-         OB.keys = () => [], OB.resolve = OB, OB.id = 217, BB.exports = OB
+         iW.keys = () => [], iW.resolve = iW, iW.id = 204, WW.exports = iW
```

#### 1084. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11637-L11642` → after: `L11691-L11697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11691-L11697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11691-L11697) · [Before (L11637-L11642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11637-L11642)

```diff
-   }, GB.f = {}, GB.e = BB => Promise.all(Object.keys(GB.f).reduce(((OB, YB) => (GB.f[YB](BB, OB), OB)), [])), GB.u = BB => "static/js/gw4e3a." + (81 === BB ? "worldgenTables" : BB) + "." + {
-     81: "f60b6294",
-     84: "ad00df19",
-     85: "e84c663a",
-     86: "4f798c42",
-     87: "65f10b57"
+   }, OW.f = {}, OW.e = WW => Promise.all(Object.keys(OW.f).reduce(((iW, mW) => (OW.f[mW](WW, iW), iW)), [])), OW.u = WW => "static/js/1yqdn." + (82 === WW ? "worldgenTables" : WW) + "." + {
+     82: "de363496",
+     85: "67509052",
+     86: "5f3270e6",
+     87: "1573224c",
+     88: "0bf1ad22",
+     89: "589937e3"
```

#### 1085. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11649` → after: `L11704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11704) · [Before (L11649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11649)

```diff
-   }, GB.j = 82, GB.p = "/", (() => {
+   }, OW.j = 83, OW.p = "/", (() => {
```

#### 1086. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11682` → after: `L11737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11737) · [Before (L11682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11682)

```diff
-         82: 0
+         83: 0
```

#### 1087. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11717` → after: `L11772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11772) · [Before (L11717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11717)

```diff
-       GB = OB < 0 ? this.length + OB : OB;
+       OW = iW < 0 ? this.length + iW : iW;
```

#### 1088. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11732-L11734` → after: `L11787-L11789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11787-L11789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11787-L11789) · [Before (L11732-L11734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11732-L11734)

```diff
-     iZ: () => wB,
-     LZ: () => EB,
-     sy: () => cB,
+     Ij: () => pW,
+     aj: () => fW,
+     sw: () => CW,
```

#### 1089. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11737-L11747` → after: `L11792-L11802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11792-L11802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11792-L11802) · [Before (L11737-L11747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11737-L11747)

```diff
-     VP: () => hB,
-     IP: () => aB,
-     FP: () => eB,
-     iP: () => TB,
-     LP: () => bB,
-     gP: () => CB,
-     rP: () => HB,
-     XP: () => vB,
-     hP: () => sB,
-     eP: () => xB,
-     TP: () => tB
+     qt: () => XW,
+     dZ: () => BW,
+     eZ: () => qW,
+     vZ: () => RW,
+     gZ: () => GW,
+     DZ: () => IW,
+     VZ: () => aW,
+     pZ: () => rW,
+     BZ: () => zW,
+     RZ: () => FW,
+     GZ: () => QW
```

#### 1090. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11754` → after: `L11809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11809) · [Before (L11754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11754)

```diff
-   var JB = GB(3166),
+   var wW = OW(3891),
```

#### 1091. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11790` → after: `L11845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11845) · [Before (L11790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11790)

```diff
-     return null === qB ? "not failed" : `${qB}: ${(BB=ZB)instanceof Error?`${BB.name}: ${BB.message}`:String(BB)}`;
+     return null === bW ? "not failed" : `${bW}: ${(WW=jW)instanceof Error?`${WW.name}: ${WW.message}`:String(WW)}`;
```

#### 1092. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11795` → after: `L11850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11850) · [Before (L11795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11795)

```diff
-     if (!kB()) throw new Error(`Bloxd wasm is not ready (${dB()}): check isBloxdWasmReady() first`);
+     if (!JW()) throw new Error(`Bloxd wasm is not ready (${hW()}): check isBloxdWasmReady() first`);
```

#### 1093. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11833` → after: `L11888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11888) · [Before (L11833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11833)

```diff
-       hP: DB
+       BZ: EW
```

#### 1094. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11854` → after: `L11909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11909) · [Before (L11854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11854)

```diff
-     pB = "failed", qB = OB, ZB = BB, NB = !1, console.error(`Bloxd wasm failed (${OB}):`, BB);
+     AW = "failed", bW = iW, jW = WW, UW = !1, console.error(`Bloxd wasm failed (${iW}):`, WW);
```

#### 1095. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11873-L11874` → after: `L11928-L11929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11928-L11929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11928-L11929) · [Before (L11873-L11874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11873-L11874)

```diff
-       reserveUpFront: OB => BB().iP(OB),
-       reserveAhead: OB => BB().FP(OB),
+       reserveUpFront: iW => WW().vZ(iW),
+       reserveAhead: iW => WW().eZ(iW),
```

#### 1096. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11876` → after: `L11931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11931) · [Before (L11876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11876)

```diff
-         BB().LP(OB)
+         WW().gZ(iW)
```

#### 1097. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11878` → after: `L11933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11933) · [Before (L11878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11878)

```diff
-       lowWater: () => rB[BB().IP()] ?? "none",
+       lowWater: () => DW[WW().dZ()] ?? "none",
```

#### 1098. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11901-L11903` → after: `L11956-L11958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11956-L11958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11956-L11958) · [Before (L11901-L11903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11901-L11903)

```diff
-       }(BB().gP()),
-       takeBallast: () => BB().rP(),
-       takePressure: () => BB().XP()
+       }(WW().DZ()),
+       takeBallast: () => WW().VZ(),
+       takePressure: () => WW().pZ()
```

#### 1099. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11913` → after: `L11968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11968) · [Before (L11913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11913)

```diff
-       RO.Hm7W(BB, 0)
+       ki.sacr(WW, 0)
```

#### 1100. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11916` → after: `L11971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11971) · [Before (L11916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11916)

```diff
-       const OB = MO(BB, RO.ulOE, RO.u7yF),
+       const iW = ti(WW, ki.DiKd, ki.BjDp),
```

#### 1101. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11918` → after: `L11973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11973) · [Before (L11918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11918)

```diff
-       RO.t6QE(this.__wbg_ptr, OB, GB)
+       ki.lm56(this.__wbg_ptr, iW, OW)
```

#### 1102. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11921` → after: `L11976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11976) · [Before (L11921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11921)

```diff
-       return RO.As39(this.__wbg_ptr) >>> 0
+       return ki.glcd(this.__wbg_ptr) >>> 0
```

#### 1103. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11924` → after: `L11979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11979) · [Before (L11924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11924)

```diff
-       const BB = RO.VLqd();
+       const WW = ki.qDaf();
```

#### 1104. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11928` → after: `L11983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11983) · [Before (L11928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11928)

```diff
-       return RO.Vx7W(this.__wbg_ptr) >>> 0
+       return ki.hPMW(this.__wbg_ptr) >>> 0
```

#### 1105. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11931` → after: `L11986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11986) · [Before (L11931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11931)

```diff
-       return RO.AVp1(this.__wbg_ptr) >>> 0
+       return ki.o4nb(this.__wbg_ptr) >>> 0
```

#### 1106. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11934` → after: `L11989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11989) · [Before (L11934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11934)

```diff
-       return RO.DAsI(this.__wbg_ptr) >>> 0
+       return ki.HkMk(this.__wbg_ptr) >>> 0
```

#### 1107. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11945` → after: `L12000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12000) · [Before (L11945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11945)

```diff
-       RO.rPgO(BB, 0)
+       ki.xWjm(WW, 0)
```

#### 1108. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11948` → after: `L12003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12003) · [Before (L11948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11948)

```diff
-       return RO.r5xm(this.__wbg_ptr, BB) >>> 0
+       return ki.uWOX(this.__wbg_ptr, WW) >>> 0
```

#### 1109. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11951` → after: `L12006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12006) · [Before (L11951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11951)

```diff
-       return RO.kKoL(this.__wbg_ptr, BB) >>> 0
+       return ki.N91W(this.__wbg_ptr, WW) >>> 0
```

#### 1110. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11954` → after: `L12009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12009) · [Before (L11954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11954)

```diff
-       const OB = RO.asvT(void 0 === (GB = BB) || null === GB ? Number.MAX_SAFE_INTEGER : BB >>> 0);
+       const iW = ki.wHYi(void 0 === (OW = WW) || null === OW ? Number.MAX_SAFE_INTEGER : WW >>> 0);
```

#### 1111. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11959` → after: `L12014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12014) · [Before (L11959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11959)

```diff
-       return RO.sxqO(this.__wbg_ptr) >>> 0
+       return ki.hL41(this.__wbg_ptr) >>> 0
```

#### 1112. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11962` → after: `L12017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12017) · [Before (L11962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11962)

```diff
-       return RO.DPUw(this.__wbg_ptr) >>> 0
+       return ki.I7iu(this.__wbg_ptr) >>> 0
```

#### 1113. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11965` → after: `L12020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12020) · [Before (L11965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11965)

```diff
-       return RO.oc71(this.__wbg_ptr, BB) >>> 0
+       return ki.hTjG(this.__wbg_ptr, WW) >>> 0
```

#### 1114. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11970` → after: `L12025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12025) · [Before (L11970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11970)

```diff
-     const GB = MO(BB, RO.ulOE, RO.u7yF),
+     const OW = ti(WW, ki.DiKd, ki.BjDp),
```

#### 1115. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11972` → after: `L12027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12027) · [Before (L11972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11972)

```diff
-       DB = RO.ek9w(GB, YB, OB);
+       EW = ki.u4I6(OW, mW, iW);
```

#### 1116. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11977` → after: `L12032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12032) · [Before (L11977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11977)

```diff
-     RO.QDEn()
+     ki.tdI3()
```

#### 1117. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11981` → after: `L12036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12036) · [Before (L11981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11981)

```diff
-     return RO.WBG2() >>> 0
+     return ki.VSBq() >>> 0
```

#### 1118. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11985` → after: `L12040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12040) · [Before (L11985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11985)

```diff
-     return 0 !== RO.Vd03(BB)
+     return 0 !== ki.fxhi(WW)
```

#### 1119. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11989` → after: `L12044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12044) · [Before (L11989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11989)

```diff
-     return 0 !== RO.qWVJ(BB)
+     return 0 !== ki.BvO5(WW)
```

#### 1120. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11993` → after: `L12048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12048) · [Before (L11993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11993)

```diff
-     RO.GdpC(BB)
+     ki.Rda9(WW)
```

#### 1121. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11997` → after: `L12052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12052) · [Before (L11997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11997)

```diff
-     return RO.PX5G() >>> 0
+     return ki.DpEM() >>> 0
```

#### 1122. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12001` → after: `L12056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12056) · [Before (L12001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12001)

```diff
-     return RO.FBlC() >>> 0
+     return ki.P5c8() >>> 0
```

#### 1123. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12005` → after: `L12060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12060) · [Before (L12005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12005)

```diff
-     return 0 !== RO.sf5x()
+     return 0 !== ki.h94j()
```

#### 1124. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12009` → after: `L12064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12064) · [Before (L12009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12009)

```diff
-     return RO.emUR() >>> 0
+     return ki.v0ib() >>> 0
```

#### 1125. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12015` → after: `L12070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12070) · [Before (L12015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12015)

```diff
-       const GB = RO.lvGC();
+       const OW = ki.fPVZ();
```

#### 1126. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12018` → after: `L12073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12073) · [Before (L12018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12018)

```diff
-       RO.UIxU(BB, OB, 1)
+       ki.oqzH(WW, iW, 1)
```

#### 1127. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12023` → after: `L12078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12078) · [Before (L12023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12023)

```diff
-     RO.yaes(YO(BB))
+     ki.eJBc(mi(WW))
```

#### 1128. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12029` → after: `L12084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12084) · [Before (L12029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12029)

```diff
-       uVhQ: {
+       IEeR: {
```

#### 1129. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12031` → after: `L12086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12086) · [Before (L12031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12031)

```diff
-         ZipG: function(BB, OB) {
+         pOEW: function(WW, iW) {
```

#### 1130. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12034` → after: `L12089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12089) · [Before (L12034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12034)

```diff
-         ZdgJ: function(BB, OB) {
+         hIhR: function(WW, iW) {
```

#### 1131. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12037` → after: `L12092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12092) · [Before (L12037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12037)

```diff
-         HEz7: function(BB) {
+         JLgV: function(WW) {
```

#### 1132. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12040` → after: `L12095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12095) · [Before (L12040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12040)

```diff
-         eX7h: function(BB, OB) {
+         nt1F: function(WW, iW) {
```

#### 1133. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12043` → after: `L12098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12098) · [Before (L12043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12043)

```diff
-         gXG0: function(BB) {
+         svcY: function(WW) {
```

#### 1134. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12053` → after: `L12108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12108) · [Before (L12053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12053)

```diff
-     } : new FinalizationRegistry((BB => RO.Hm7W(BB, 1))),
+     } : new FinalizationRegistry((WW => ki.sacr(WW, 1))),
```

#### 1135. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12057` → after: `L12112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12112) · [Before (L12057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12057)

```diff
-     } : new FinalizationRegistry((BB => RO.rPgO(BB, 1)));
+     } : new FinalizationRegistry((WW => ki.xWjm(WW, 1)));
```

#### 1136. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12134` → after: `L12189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12189) · [Before (L12134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12134)

```diff
-     return NO = BB, RO = BB.exports, ZO = OB, QO = null, RO.PNzw(), RO
+     return Ui = WW, ki = WW.exports, ji = iW, Ni = null, ki.hEv9(), ki
```

#### 1137. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12158` → after: `L12213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12213) · [Before (L12158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12158)

```diff
-         if (!BB.ok) throw new Error(`failed to fetch Wasm: ${BB.status} ${BB.statusText} fetching '${BB.url}'`);
+         if (!WW.ok) throw new Error(`failed to fetch Wasm: ${WW.status} ${WW.statusText} fetching '${WW.url}'`);
```

#### 1138. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12188-L12189` → after: `L12243-L12244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12243-L12244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12243-L12244) · [Before (L12188-L12189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12188-L12189)

```diff
-       if (!kB()) throw new Error(`Bloxd wasm is not ready (${dB()}): check isBloxdWasmReady() first`);
-       if (VB !== BB) throw new Error(`Bloxd wasm was loaded as another module, which lacks ${OB}`)
+       if (!JW()) throw new Error(`Bloxd wasm is not ready (${hW()}): check isBloxdWasmReady() first`);
+       if (KW !== WW) throw new Error(`Bloxd wasm was loaded as another module, which lacks ${iW}`)
```

#### 1139. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12192` → after: `L12247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12247) · [Before (L12192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12192)

```diff
-   var UO = GB(641);
+   var yi = OW(643);
```

#### 1140. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12199` → after: `L12254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12254) · [Before (L12199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12199)

```diff
-       } = GB(40798), lB = function(BB, OB, GB) {
+       } = OW(41318), lW = function(WW, iW, OW) {
```

#### 1141. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12201` → after: `L12256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12256) · [Before (L12201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12201)

```diff
-         for (const jB of BB.VQ) IO(jB, GB);
+         for (const LW of WW.Fm) di(LW, OW);
```

#### 1142. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12204` → after: `L12259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12259) · [Before (L12204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12204)

```diff
-           VQ: BB.VQ,
+           Fm: WW.Fm,
```

#### 1143. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12210` → after: `L12265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12265) · [Before (L12210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12210)

```diff
-           throw new Error(`Custom world-gen terrain "${YB.name}" is not in this generator's catalogue (${BB.length>0?BB.join(", "):"empty"})`)
+           throw new Error(`Custom world-gen terrain "${mW.name}" is not in this generator's catalogue (${WW.length>0?WW.join(", "):"empty"})`)
```

#### 1144. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12215` → after: `L12270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12270) · [Before (L12215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12215)

```diff
-               if (null !== BB.AQ) throw new Error(`Custom world-gen terrain "${BB.name}" takes no options`);
+               if (null !== WW.zm) throw new Error(`Custom world-gen terrain "${WW.name}" takes no options`);
```

#### 1145. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12219-L12220` → after: `L12274-L12275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12274-L12275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12274-L12275) · [Before (L12219-L12220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12219-L12220)

```diff
-             if (null !== BB.AQ) try {
-               GB = JSON.parse(BB.AQ)
+             if (null !== WW.zm) try {
+               OW = JSON.parse(WW.zm)
```

#### 1146. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12222` → after: `L12277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12277) · [Before (L12222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12222)

```diff
-               throw new Error(`Custom world-gen terrain "${BB.name}" has invalid optionsJson: ${String(YB)}`, {
+               throw new Error(`Custom world-gen terrain "${WW.name}" has invalid optionsJson: ${String(mW)}`, {
```

#### 1147. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12229` → after: `L12284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12284) · [Before (L12229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12229)

```diff
-           VQ: BB.VQ,
+           Fm: WW.Fm,
```

#### 1148. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12232` → after: `L12287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12287) · [Before (L12232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12232)

```diff
-       }(null !== (MB = null === jB || void 0 === jB ? void 0 : jB.NQ) && void 0 !== MB ? MB : null, yB, OB);
+       }(null !== (tW = null === LW || void 0 === LW ? void 0 : LW.Im) && void 0 !== tW ? tW : null, cW, iW);
```

#### 1149. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12234` → after: `L12289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12289) · [Before (L12234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12234)

```diff
-       const pB = null !== (PB = null === jB || void 0 === jB ? void 0 : jB.layers) && void 0 !== PB ? PB : [];
+       const AW = null !== (ZW = null === LW || void 0 === LW ? void 0 : LW.layers) && void 0 !== ZW ? ZW : [];
```

#### 1150. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12237` → after: `L12292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12292) · [Before (L12237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12237)

```diff
-         const GB = [...BB].sort(((BB, OB) => BB.XD - OB.XD));
+         const OW = [...WW].sort(((WW, iW) => WW.Am - iW.Am));
```

#### 1151. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12239` → after: `L12294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12294) · [Before (L12239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12239)

```diff
-           if (GB[YB].XD < GB[YB - 1].wD) throw new Error(`Custom world-gen layers overlap: [${GB[YB-1].XD}, ${GB[YB-1].wD}) and [${GB[YB].XD}, ${GB[YB].wD})`)
+           if (OW[mW].Am < OW[mW - 1].bm) throw new Error(`Custom world-gen layers overlap: [${OW[mW-1].Am}, ${OW[mW-1].bm}) and [${OW[mW].Am}, ${OW[mW].bm})`)
```

#### 1152. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12251` → after: `L12306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12306) · [Before (L12251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12251)

```diff
-         if (GB >= DB.XD && GB < DB.wD) return QB.getChunk(BB, OB, GB - DB.ED, YB);
+         if (OW >= EW.Am && OW < EW.bm) return NW.getChunk(WW, iW, OW - EW.jm, mW);
```

#### 1153. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12269-L12270` → after: `L12324-L12325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12324-L12325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12324-L12325) · [Before (L12269-L12270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12269-L12270)

```diff
-     if (BB.XD >= BB.wD) throw new Error(`Custom world-gen layer has minY (${BB.XD}) >= maxY (${BB.wD})`);
-     if (BB.XD % UO.E !== 0 || BB.wD % UO.E !== 0 || BB.ED % UO.E !== 0) throw new Error(`Custom world-gen layer bounds must be multiples of chunkSize (${UO.E}); got minY=${BB.XD}, maxY=${BB.wD}, groundY=${BB.ED}`);
+     if (WW.Am >= WW.bm) throw new Error(`Custom world-gen layer has minY (${WW.Am}) >= maxY (${WW.bm})`);
+     if (WW.Am % yi.A !== 0 || WW.bm % yi.A !== 0 || WW.jm % yi.A !== 0) throw new Error(`Custom world-gen layer bounds must be multiples of chunkSize (${yi.A}); got minY=${WW.Am}, maxY=${WW.bm}, groundY=${WW.jm}`);
```

#### 1154. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12272-L12275` → after: `L12327-L12330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12327-L12330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12327-L12330) · [Before (L12272-L12275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12272-L12275)

```diff
-         if (void 0 === (0, UO.J)(BB.eD, OB)) throw new Error(`Custom world-gen caves lavaPitBlock "${BB.eD}" not found in blockMetadata`);
-         if (BB.TD)
-           for (const GB of BB.TD) dO(GB, OB)
-       }(BB.hD, OB), 0 === BB.oQ.length) throw new Error("Custom world-gen layer must have at least one biome");
+         if (void 0 === (0, yi.E)(WW.Mm, iW)) throw new Error(`Custom world-gen caves lavaPitBlock "${WW.Mm}" not found in blockMetadata`);
+         if (WW.Km)
+           for (const OW of WW.Km) Hi(OW, iW)
+       }(WW.km, iW), 0 === WW.Dm.length) throw new Error("Custom world-gen layer must have at least one biome");
```

#### 1155. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12277` → after: `L12332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12332) · [Before (L12277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12277)

```diff
-     for (const YB of BB.oQ) mO(YB, OB), GB += YB.frequency;
+     for (const mW of WW.Dm) oi(mW, iW), OW += mW.frequency;
```

#### 1156. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12279` → after: `L12334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12334) · [Before (L12279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12279)

```diff
-     for (const YB of BB.lQ) IO(YB, OB)
+     for (const mW of WW.Bm) di(mW, iW)
```

#### 1157. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12285-L12287` → after: `L12340-L12342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12340-L12342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12340-L12342) · [Before (L12285-L12287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12285-L12287)

```diff
-       CD: YB,
-       vD: DB,
-       sD: QB
+       Ym: mW,
+       ym: EW,
+       Tm: NW
```

#### 1158. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12289-L12290` → after: `L12344-L12345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12344-L12345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12344-L12345) · [Before (L12289-L12290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12289-L12290)

```diff
-     if (void 0 === (0, UO.J)(GB, OB)) throw new Error(`Custom world-gen cave decoration blockName "${GB}" not found in blockMetadata`);
-     if (!YB && !DB && !QB) throw new Error(`Custom world-gen cave decoration "${GB}" must allow at least one of floor/walls/ceiling anchoring`);
+     if (void 0 === (0, yi.E)(OW, iW)) throw new Error(`Custom world-gen cave decoration blockName "${OW}" not found in blockMetadata`);
+     if (!mW && !EW && !NW) throw new Error(`Custom world-gen cave decoration "${OW}" must allow at least one of floor/walls/ceiling anchoring`);
```

#### 1159. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12293-L12294` → after: `L12348-L12349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12348-L12349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12348-L12349) · [Before (L12293-L12294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12293-L12294)

```diff
-     if (QB && KO(GB, "meta|rot1|top", OB), uO(BB.xD, GB, "xD"), uO(BB.tD, GB, "tD"), !Number.isInteger(BB.BQ) || BB.BQ < 0) throw new Error(`Custom world-gen cave decoration "${GB}" minPlacements must be a non-negative integer, got ${BB.BQ}`);
-     if (!(0, UO.Q)(BB.OQ) && (uO(BB.OQ.YQ, GB, "depthRamp.deepClusterChance"), BB.OQ.DQ <= BB.OQ.QQ)) throw new Error(`Custom world-gen cave decoration "${GB}" deepY must be strictly smaller than shallowY, but ${BB.OQ.DQ} <= ${BB.OQ.QQ} `)
+     if (NW && ni(OW, "meta|rot1|top", iW), ui(WW.Jm, OW, "Jm"), ui(WW.hm, OW, "hm"), !Number.isInteger(WW.Hm) || WW.Hm < 0) throw new Error(`Custom world-gen cave decoration "${OW}" minPlacements must be a non-negative integer, got ${WW.Hm}`);
+     if (!(0, yi.K)(WW.nm) && (ui(WW.nm.om, OW, "depthRamp.deepClusterChance"), WW.nm.dm <= WW.nm.gm)) throw new Error(`Custom world-gen cave decoration "${OW}" deepY must be strictly smaller than shallowY, but ${WW.nm.dm} <= ${WW.nm.gm} `)
```

#### 1160. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12298-L12299` → after: `L12353-L12354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12353-L12354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12353-L12354) · [Before (L12298-L12299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12298-L12299)

```diff
-     const YB = `${BB}|${OB}`;
-     if (void 0 === (0, UO.J)(YB, GB)) throw new Error(`Custom world-gen cave decoration "${BB}" is missing directional variant "${YB}" required for wall/ceiling anchoring`)
+     const mW = `${WW}|${iW}`;
+     if (void 0 === (0, yi.E)(mW, OW)) throw new Error(`Custom world-gen cave decoration "${WW}" is missing directional variant "${mW}" required for wall/ceiling anchoring`)
```

#### 1161. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12303` → after: `L12358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12358) · [Before (L12303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12303)

```diff
-     if (BB < 0 || BB > 1) throw new Error(`Custom world-gen cave decoration "${OB}" ${GB} must be in [0, 1], got ${BB}`)
+     if (WW < 0 || WW > 1) throw new Error(`Custom world-gen cave decoration "${iW}" ${OW} must be in [0, 1], got ${WW}`)
```

#### 1162. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12307-L12313` → after: `L12362-L12368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12362-L12368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12362-L12368) · [Before (L12307-L12313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12307-L12313)

```diff
-     if (BB.frequency <= 0) throw new Error(`Custom world-gen biome frequency must be positive, got ${BB.frequency}`);
-     if (void 0 === (0, UO.J)(BB.yQ, OB)) throw new Error(`Custom world-gen biome topsoilBlock "${BB.yQ}" not found in blockMetadata`);
-     if (void 0 === (0, UO.J)(BB.JQ, OB)) throw new Error(`Custom world-gen biome lowsoilBlock "${BB.JQ}" not found in blockMetadata`);
-     if (0 === BB.MQ.length) throw new Error("Custom world-gen biome must have at least one stoneType");
-     for (const GB of BB.MQ) {
-       if (GB.frequency <= 0) throw new Error(`Custom world-gen biome stoneType frequency must be positive, got ${GB.frequency}`);
-       if (void 0 === (0, UO.J)(GB.blockName, OB)) throw new Error(`Custom world-gen biome stoneType blockName "${GB.blockName}" not found in blockMetadata`)
+     if (WW.frequency <= 0) throw new Error(`Custom world-gen biome frequency must be positive, got ${WW.frequency}`);
+     if (void 0 === (0, yi.E)(WW.pm, iW)) throw new Error(`Custom world-gen biome topsoilBlock "${WW.pm}" not found in blockMetadata`);
+     if (void 0 === (0, yi.E)(WW.fm, iW)) throw new Error(`Custom world-gen biome lowsoilBlock "${WW.fm}" not found in blockMetadata`);
+     if (0 === WW.Cm.length) throw new Error("Custom world-gen biome must have at least one stoneType");
+     for (const OW of WW.Cm) {
+       if (OW.frequency <= 0) throw new Error(`Custom world-gen biome stoneType frequency must be positive, got ${OW.frequency}`);
+       if (void 0 === (0, yi.E)(OW.blockName, iW)) throw new Error(`Custom world-gen biome stoneType blockName "${OW.blockName}" not found in blockMetadata`)
```

#### 1163. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12318-L12322` → after: `L12373-L12377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12373-L12377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12373-L12377) · [Before (L12318-L12322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12318-L12322)

```diff
-     if (void 0 === (0, UO.J)(BB.blockName, OB)) throw new Error(`Custom world-gen ore blockName "${BB.blockName}" not found in blockMetadata`);
-     if (BB.radius < 0) throw new Error(`Custom world-gen ore "${BB.blockName}" radius must be >= 0, got ${BB.radius}`);
-     if (BB.qQ <= 0) throw new Error(`Custom world-gen ore "${BB.blockName}" minDistBetweenDeposits must be > 0, got ${BB.qQ}`);
-     if (BB.XD > BB.wD) throw new Error(`Custom world-gen ore "${BB.blockName}" minY (${BB.XD}) must be <= maxY (${BB.wD})`);
-     if (BB.ZQ < 0 || BB.ZQ > 1) throw new Error(`Custom world-gen ore "${BB.blockName}" spawnChance must be in [0, 1], got ${BB.ZQ}`)
+     if (void 0 === (0, yi.E)(WW.blockName, iW)) throw new Error(`Custom world-gen ore blockName "${WW.blockName}" not found in blockMetadata`);
+     if (WW.radius < 0) throw new Error(`Custom world-gen ore "${WW.blockName}" radius must be >= 0, got ${WW.radius}`);
+     if (WW.Rm <= 0) throw new Error(`Custom world-gen ore "${WW.blockName}" minDistBetweenDeposits must be > 0, got ${WW.Rm}`);
+     if (WW.Am > WW.bm) throw new Error(`Custom world-gen ore "${WW.blockName}" minY (${WW.Am}) must be <= maxY (${WW.bm})`);
+     if (WW.Gm < 0 || WW.Gm > 1) throw new Error(`Custom world-gen ore "${WW.blockName}" spawnChance must be in [0, 1], got ${WW.Gm}`)
```

#### 1164. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12328-L12331` → after: `L12383-L12386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12383-L12386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12383-L12386) · [Before (L12328-L12331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12328-L12331)

```diff
-       qQ: 10,
-       XD: -98,
-       wD: -78,
-       ZQ: .4
+       Rm: 10,
+       Am: -98,
+       bm: -78,
+       Gm: .4
```

#### 1165. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12336-L12339` → after: `L12391-L12394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12391-L12394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12391-L12394) · [Before (L12336-L12339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12336-L12339)

```diff
-       qQ: 6,
-       XD: -40,
-       wD: 20,
-       ZQ: .6
+       Rm: 6,
+       Am: -40,
+       bm: 20,
+       Gm: .6
```

#### 1166. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12343-L12346` → after: `L12398-L12401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12398-L12401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12398-L12401) · [Before (L12343-L12346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12343-L12346)

```diff
-       qQ: 10,
-       XD: -75,
-       wD: -55,
-       ZQ: .4
+       Rm: 10,
+       Am: -75,
+       bm: -55,
+       Gm: .4
```

#### 1167. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12350` → after: `L12405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12405) · [Before (L12350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12350)

```diff
-       AQ: null
+       zm: null
```

#### 1168. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12353` → after: `L12408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12408) · [Before (L12353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12353)

```diff
-     [FO]: () => GB(40694).b
+     [ei]: () => OW(41221).c
```

#### 1169. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12377` → after: `L12432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12432) · [Before (L12377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12377)

```diff
-       if (!bO.includes(OB)) throw new Error(`Invalid port offset "${BB}". Must be one of: ${bO.join(", ")}. Leave the port offset environment variable unset to use the default ports, or run tools/DevPorts.ts to claim a slot.`);
+       if (!ai.includes(iW)) throw new Error(`Invalid port offset "${WW}". Must be one of: ${ai.join(", ")}. Leave the port offset environment variable unset to use the default ports, or run tools/DevPorts.ts to claim a slot.`);
```

#### 1170. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12455` → after: `L12510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12510) · [Before (L12455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12455)

```diff
-     const OB = aO() ? sO : xO;
+     const iW = Ri() ? Qi : WO;
```

#### 1171. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12864` → after: `L12919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12919) · [Before (L12864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12864)

```diff
-     if (DG.has(BB)) throw new Error(`Duplicate leave code: ${BB}`);
+     if (PO.has(WW)) throw new Error(`Duplicate leave code: ${WW}`);
```

#### 1172. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12887` → after: `L12942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12942) · [Before (L12887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12887)

```diff
-     return BB === OB ? QB + YB * YB <= BB * BB : BB > OB ? Math.abs(YB) <= OB && QB + YB * YB <= BB * BB : QB <= BB * BB && QB + YB * YB <= OB * OB
+     return WW === iW ? NW + mW * mW <= WW * WW : WW > iW ? Math.abs(mW) <= iW && NW + mW * mW <= WW * WW : NW <= WW * WW && NW + mW * mW <= iW * iW
```

#### 1173. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12905` → after: `L12960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12960) · [Before (L12905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12905)

```diff
-     const BB = Promise.all([GB.e(84), GB.e(87), GB.e(85), GB.e(86), GB.e(81)]).then((() => GB(40790))).then((BB => {
+     const WW = Promise.all([OW.e(85), OW.e(89), OW.e(86), OW.e(87), OW.e(88), OW.e(82)]).then((() => OW(41308))).then((WW => {
```

#### 1174. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12948` → after: `L13003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR13003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L13003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L13003) · [Before (L12948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12948)

```diff
-               reason: `its memory stats trapped (${String(OB)})`
+               reason: `its memory stats trapped (${String(iW)})`
```

#### 1175. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12954` → after: `L13009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR13009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L13009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L13009) · [Before (L12954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12954)

```diff
-               const GB = yB.gZ();
+               const OW = cW.rj();
```

#### 1176. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12957` → after: `L13012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR13012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L13012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L13012) · [Before (L12957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12957)

```diff
-                 return String.fromCharCode(...new Uint8Array(mB().buffer, BB.rZ(), 32))
+                 return String.fromCharCode(...new Uint8Array(uW().buffer, WW.zj(), 32))
```

#### 1177. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12970` → after: `L13025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR13025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L13025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L13025) · [Before (L12970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12970)

```diff
-               oB = ZB.pP, PB = new Uint16Array(oB * oB * oB),
+               PW = jW.jZ, ZW = new Uint16Array(PW * PW * PW),
```

#### 1178. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12979` → after: `L13034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR13034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L13034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L13034) · [Before (L12979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12979)

```diff
-                           reason: `the memory ceiling was not set (${String(YB)})`
+                           reason: `the memory ceiling was not set (${String(mW)})`
```

#### 1179. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12983` → after: `L13038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR13038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L13038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L13038) · [Before (L12983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12983)

```diff
-                         yB = new(nO().iZ)
+                         cW = new(Yi().Ij)
```

#### 1180. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12987` → after: `L13042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR13042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L13042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L13042) · [Before (L12987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12987)

```diff
-                           reason: `GeneratedChunkEncoder did not start (${String(YB)})`
+                           reason: `GeneratedChunkEncoder did not start (${String(mW)})`
```

#### 1181. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12997` → after: `L13052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR13052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L13052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L13052) · [Before (L12997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12997)

```diff
-                           reason: `${MG} (${String(OB)})`
+                           reason: `${xO} (${String(iW)})`
```

#### 1182. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L13002` → after: `L13057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR13057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L13057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L13057) · [Before (L13002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L13002)

```diff
-                       reason: `wasm did not start (${KB()})`
+                       reason: `wasm did not start (${HW()})`
```

#### 1183. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L13006` → after: `L13061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR13061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L13061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L13061) · [Before (L13006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L13006)

```diff
-                     reason: `chunk size ${oB} is not the encoder's 32`
+                     reason: `chunk size ${PW} is not the encoder's 32`
```

#### 1184. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L13017` → after: `L13072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR13072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L13072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L13072) · [Before (L13017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L13017)

```diff
-                 JB = new fO(oB, jB.blockMetadata, jB.itemMetadata, BB.uD, !1, BB.mD, BB.LD, YB, qB)
+                 wW = new Ti(PW, LW.blockMetadata, LW.itemMetadata, WW.Lm, !1, WW.wm, WW.Zm, mW, bW)
```

#### 1185. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L13042` → after: `L13097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR13097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L13097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L13097) · [Before (L13042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L13042)

```diff
-                     const GB = BB.XZ(),
+                     const OW = WW.Fj(),
```

#### 1186. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L13044` → after: `L13099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR13099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L13099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L13099) · [Before (L13044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L13044)

```diff
-                       DB = OB.byteLength >= YB ? OB : new ArrayBuffer(YB),
+                       EW = iW.byteLength >= mW ? iW : new ArrayBuffer(mW),
```

#### 1187. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L13047` → after: `L13102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR13102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L13102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L13102) · [Before (L13047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L13047)

```diff
-                     return oB.set(new Uint8Array(QB, BB.rZ(), cO)), oB.set(new Uint8Array(QB, BB.wZ(), GB), cO), {
+                     return PW.set(new Uint8Array(NW, WW.zj(), Bi)), PW.set(new Uint8Array(NW, WW.Qj(), OW), Bi), {
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/worldgenWorkerLoader.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/worldgenWorkerLoader.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-df576023a671a3016d0c142e9de2d13fb49ae72e22837444ac178f1df1dac0d0)

#### 1. `bundles/preprod.bloxd.io/chunks/js/worldgenWorkerLoader.js` (Changed code · before: `L1-L2` → after: `L1-L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-df576023a671a3016d0c142e9de2d13fb49ae72e22837444ac178f1df1dac0d0R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-df576023a671a3016d0c142e9de2d13fb49ae72e22837444ac178f1df1dac0d0) · [After (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorkerLoader.js#L1-L2) · [Before (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorkerLoader.js#L1-L2)

```diff
- export const id = 83;
- export const ids = [83];
+ export const id = 84;
+ export const ids = [84];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/worldgenWorkerLoader.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-df576023a671a3016d0c142e9de2d13fb49ae72e22837444ac178f1df1dac0d0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-df576023a671a3016d0c142e9de2d13fb49ae72e22837444ac178f1df1dac0d0) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorkerLoader.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorkerLoader.js#L4)

```diff
-   37085: (BB, OB, GB) => {
+   37646: (WW, iW, OW) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/worldgenWorkerLoader.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-df576023a671a3016d0c142e9de2d13fb49ae72e22837444ac178f1df1dac0d0R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-df576023a671a3016d0c142e9de2d13fb49ae72e22837444ac178f1df1dac0d0) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorkerLoader.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorkerLoader.js#L6)

```diff
-       d: () => DB
+       e: () => EW
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/worldgenWorkerLoader.js` (Changed code · before: `L44` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-df576023a671a3016d0c142e9de2d13fb49ae72e22837444ac178f1df1dac0d0R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-df576023a671a3016d0c142e9de2d13fb49ae72e22837444ac178f1df1dac0d0) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorkerLoader.js#L44) · [Before (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorkerLoader.js#L44)

```diff
-           if (OB > 0 && GB.searchParams.set("cache-bust", `${Date.now()}-${OB}`), await this.fetchWhole(GB, BB)) return this.scriptUrl = GB, !0;
+           if (iW > 0 && OW.searchParams.set("cache-bust", `${Date.now()}-${iW}`), await this.fetchWhole(OW, WW)) return this.scriptUrl = OW, !0;
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/worldgenWorkerLoader.js` (Changed code · before: `L86` → after: `L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-df576023a671a3016d0c142e9de2d13fb49ae72e22837444ac178f1df1dac0d0R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-df576023a671a3016d0c142e9de2d13fb49ae72e22837444ac178f1df1dac0d0) · [After (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorkerLoader.js#L86) · [Before (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorkerLoader.js#L86)

```diff
-   54103: (BB, OB, GB) => {
+   54840: (WW, iW, OW) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/worldgenWorkerLoader.js` (Changed code · before: `L94` → after: `L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-df576023a671a3016d0c142e9de2d13fb49ae72e22837444ac178f1df1dac0d0R94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-df576023a671a3016d0c142e9de2d13fb49ae72e22837444ac178f1df1dac0d0) · [After (L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/worldgenWorkerLoader.js#L94) · [Before (L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/worldgenWorkerLoader.js#L94)

```diff
-     const YB = new(GB(37085).d)(new URL(GB.p + GB.u(82), GB.b), {
+     const mW = new(OW(37646).e)(new URL(OW.p + OW.u(83), OW.b), {
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/main.css` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/main.css` (1198 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a)

#### 1. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L72` → after: `L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L74) · [Before (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L72)

```diff
-   padding: max(var(--notchTop), 1rem) var(--home-inner-padding-right) max(var(--notchBottom), 1rem) var(--home-inner-padding-left);
+   padding: var(--home-inner-padding-top) var(--home-inner-padding-right) var(--home-inner-padding-bottom) var(--home-inner-padding-left);
```

#### 2. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L78` → after: `L80-L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L80-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L80-L81) · [Before (L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L78)

```diff
-   padding-bottom: calc(250px + 2rem)
+   --home-body-padding-bottom: calc(250px + 2rem);
+   padding-bottom: var(--home-body-padding-bottom)
```

#### 3. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L315-L316` → after: `L424-L430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L424-L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L424-L430) · [Before (L315-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L315-L316)

```diff
-   top: calc(100% + .25rem);
-   transform: translateX(-50%)
+   right: -.2rem;
+   top: -.6rem;
+   z-index: 1
+ }
+ 
+ .HomeHeader .HomeHeaderInner .HomeHeaderTop .HomeHeaderStoreButton .HomeHeaderStoreDealChip .svg-inline--fa path {
+   fill: currentColor
```

#### 4. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L807-L809` → after: `L921-L923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L921-L923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L921-L923) · [Before (L807-L809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L807-L809)

```diff
-   right: -.36em;
-   rotate: 20deg;
-   top: -.51em;
+   right: -.08em;
+   rotate: 12deg;
+   top: -.42em;
```

#### 5. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L3608` → after: `L3717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR3717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L3717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L3717) · [Before (L3608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L3608)

```diff
-   background-color: rgba(60, 75, 104, .72);
+   background-color: var(--hud-key-face, rgba(60, 75, 104, .72));
```

#### 6. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L3610` → after: `L3719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR3719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L3719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L3719) · [Before (L3610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L3610)

```diff
-   box-shadow: inset 0 1.5px 0 #586e99, 0 3px 0 #1a1f2e;
+   box-shadow: inset 0 1.5px 0 var(--hud-key-bevel, #586e99), 0 3px 0 #1a1f2e;
```

#### 7. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L3662-L3663` → after: `L3771-L3772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR3771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L3771-L3772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L3771-L3772) · [Before (L3662-L3663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L3662-L3663)

```diff
-   background-color: rgba(75, 94, 130, .85);
-   box-shadow: inset 0 1.5px 0 #586e99, 0 1px 0 #1a1f2e;
+   background-color: var(--hud-key-pressed, rgba(75, 94, 130, .85));
+   box-shadow: inset 0 1.5px 0 var(--hud-key-bevel, #586e99), 0 1px 0 #1a1f2e;
```

#### 8. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L3719` → after: `L3828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR3828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L3828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L3828) · [Before (L3719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L3719)

```diff
-   background-color: rgba(60, 75, 104, .72);
+   background-color: var(--hud-key-face, rgba(60, 75, 104, .72));
```

#### 9. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L3721` → after: `L3830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR3830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L3830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L3830) · [Before (L3721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L3721)

```diff
-   box-shadow: inset 0 1.5px 0 #586e99, 0 3px 0 #1a1f2e;
+   box-shadow: inset 0 1.5px 0 var(--hud-key-bevel, #586e99), 0 3px 0 #1a1f2e;
```

#### 10. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L3773-L3774` → after: `L3882-L3883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR3882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L3882-L3883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L3882-L3883) · [Before (L3773-L3774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L3773-L3774)

```diff
-   background-color: rgba(75, 94, 130, .85);
-   box-shadow: inset 0 1.5px 0 #586e99, 0 1px 0 #1a1f2e;
+   background-color: var(--hud-key-pressed, rgba(75, 94, 130, .85));
+   box-shadow: inset 0 1.5px 0 var(--hud-key-bevel, #586e99), 0 1px 0 #1a1f2e;
```

#### 11. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L3819` → after: `L3928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR3928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L3928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L3928) · [Before (L3819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L3819)

```diff
-   background-color: rgba(60, 75, 104, .72);
+   background-color: var(--hud-key-face, rgba(60, 75, 104, .72));
```

#### 12. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L3821` → after: `L3930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR3930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L3930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L3930) · [Before (L3821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L3821)

```diff
-   box-shadow: inset 0 1.5px 0 #586e99, 0 3px 0 #1a1f2e;
+   box-shadow: inset 0 1.5px 0 var(--hud-key-bevel, #586e99), 0 3px 0 #1a1f2e;
```

#### 13. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L3873-L3874` → after: `L3982-L3983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR3982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L3982-L3983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/main.css#L3982-L3983) · [Before (L3873-L3874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/main.css#L3873-L3874)

```diff
-   background-color: rgba(75, 94, 130, .85);
-   box-shadow: inset 0 1.5px 0 #586e99, 0 1px 0 #1a1f2e;
+   background-color: var(--hud-key-pressed, rgba(75, 94, 130, .85));
+   box-shadow: inset 0 1.5px 0 var(--hud-key-bevel, #586e99), 0 1px 0 #1a1f2e;
```
