# Changed — Bundle Modifications Report (Part 062 / 065)

- **Updated at**: `2026-11-25T01:10 JST`
- **Part**: `62 / 65` (**410** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 061](part-061.md) · [Part 063 →](part-063.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/worldgenWorker.js` (tz47m9.2cb7e113 → sn3sfj.2522680a · continued)

- **File**: `bundles/bloxd.io/chunks/js/worldgenWorker.js` (890 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032)

#### 521. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7900-L7902` → after: `L7900-L7902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7900-L7902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7900-L7902) · [Before (L7900-L7902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7900-L7902)

```diff
-           rD = wD(4263),
-           LD = wD(39698);
-         const cD = new LD.e("point cells", 500, 6e4);
+           Sp = cp(4346),
+           xp = cp(39975);
+         const Lp = new xp.b("point cells", 500, 6e4);
```

#### 522. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7919` → after: `L7919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7919) · [Before (L7919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7919)

```diff
-             if (this.gridSize < wD) throw new Error(`PointsGenerator "${this.name}" has gridSize=${this.gridSize} but needs >= ${wD} (chunkSize=${DD}, halfBox=${zD}). Points near chunk edges would be missed.`)
+             if (this.gridSize < cp) throw new Error(`PointsGenerator "${this.name}" has gridSize=${this.gridSize} but needs >= ${cp} (chunkSize=${pp}, halfBox=${ip}). Points near chunk edges would be missed.`)
```

#### 523. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7935` → after: `L7935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7935) · [Before (L7935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7935)

```diff
-               const wD = (0, pD.J)(cD, DD, zD);
+               const cp = (0, Op.H)(Lp, pp, ip);
```

#### 524. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7964` → after: `L7964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7964) · [Before (L7964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7964)

```diff
-               const DD = (0, pD.J)(gD, zD, wD);
+               const pp = (0, Op.H)(Yp, ip, cp);
```

#### 525. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7976` → after: `L7976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7976) · [Before (L7976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7976)

```diff
-               const AD = (0, pD.J)(RD, zD, wD) - rD;
+               const Ap = (0, Op.H)(Dp, ip, cp) - Sp;
```

#### 526. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8009` → after: `L8009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8009) · [Before (L8009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8009)

```diff
-               const KD = new rD.g(`${DD}${zD}${this.seed}jitter`);
+               const Ip = new Sp.h(`${pp}${ip}${this.seed}jitter`);
```

#### 527. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8020` → after: `L8020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8020) · [Before (L8020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8020)

```diff
-               const LD = new rD.g(`${DD}${zD}${this.seed}pts`),
+               const xp = new Sp.h(`${pp}${ip}${this.seed}pts`),
```

#### 528. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8052` → after: `L8052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8052) · [Before (L8052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8052)

```diff
-               points: this.useKthClosestPoint ? sD : null
+               points: this.useKthClosestPoint ? op : null
```

#### 529. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8057` → after: `L8057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8057) · [Before (L8057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8057)

```diff
-       39724: (DD, zD, wD) => {
+       39993: (pp, ip, cp) => {
```

#### 530. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8061-L8070` → after: `L8061-L8070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8061-L8070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8061-L8070) · [Before (L8061-L8070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8061-L8070)

```diff
-         var pD = wD(39625),
-           sD = wD(39657),
-           KD = wD(39635),
-           rD = wD(39633),
-           LD = wD(37713),
-           cD = wD(39715),
-           gD = wD(596),
-           RD = wD(619),
-           AD = wD(39104),
-           UD = wD(4263);
+         var Op = cp(39890),
+           op = cp(39927),
+           Ip = cp(39903),
+           Sp = cp(39894),
+           xp = cp(37951),
+           Lp = cp(39989),
+           Yp = cp(616),
+           Dp = cp(640),
+           Ap = cp(39317),
+           Pp = cp(4346);
```

#### 531. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8085` → after: `L8085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8085) · [Before (L8085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8085)

```diff
-             return null !== (zD = BD[this.suffixMapping[DD]]) && void 0 !== zD ? zD : []
+             return null !== (ip = Up[this.suffixMapping[pp]]) && void 0 !== ip ? ip : []
```

#### 532. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8104` → after: `L8104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8104) · [Before (L8104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8104)

```diff
-               zD[wD] = (null !== (rD = zD[wD]) && void 0 !== rD ? rD : 0) + 1, zD[wD] >= hD && pD.splice(pD.indexOf(wD), 1)
+               ip[cp] = (null !== (Sp = ip[cp]) && void 0 !== Sp ? Sp : 0) + 1, ip[cp] >= vp && Op.splice(Op.indexOf(cp), 1)
```

#### 533. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8171` → after: `L8171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8171) · [Before (L8171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8171)

```diff
-             return `r${DD}|m${Number(zD)}`
+             return `r${pp}|m${Number(ip)}`
```

#### 534. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8205` → after: `L8205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8205) · [Before (L8205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8205)

```diff
-             const [, fD, ID] = null !== (sD = JD.exec(AD)) && void 0 !== sD ? sD : [];
+             const [, Wp, yp] = null !== (op = ep.exec(Ap)) && void 0 !== op ? op : [];
```

#### 535. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8208` → after: `L8208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8208) · [Before (L8208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8208)

```diff
-               UD = null !== (BD = null === (GD = KD[`${RD}|meta|${[OD.split("").filter(((DD,zD)=>fD.split("").some((DD=>{const wD=OD.indexOf(DD);return((pD?3-wD:wD)+rD)%4===zD})))).join(""),ID].filter(Boolean).join("|")}`]) || void 0 === GD ? void 0 : GD.id) && void 0 !== BD ? BD … [truncated]
+               Pp = null !== (Up = null === (wp = Ip[`${Dp}|meta|${[dp.split("").filter(((pp,ip)=>Wp.split("").some((pp=>{const cp=dp.indexOf(pp);return((Op?3-cp:cp)+Sp)%4===ip})))).join(""),yp].filter(Boolean).join("|")}`]) || void 0 === wp ? void 0 : wp.id) && void 0 !== Up ? Up … [truncated]
```

#### 536. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8213` → after: `L8213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8213) · [Before (L8213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8213)

```diff
-               let zD = AD.replace(`rot${gD}`, `rot${DD}`);
+               let ip = Ap.replace(`rot${Yp}`, `rot${pp}`);
```

#### 537. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8218` → after: `L8218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8218) · [Before (L8218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8218)

```diff
-                 zD = `${sD[1]}|${DD.join("")}`
+                 ip = `${op[1]}|${pp.join("")}`
```

#### 538. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8220-L8221` → after: `L8220-L8221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8220-L8221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8220-L8221) · [Before (L8220-L8221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8220-L8221)

```diff
-               const rD = `${RD}|${zD}`;
-               if (UD = null !== (hD = null === (nD = KD[rD]) || void 0 === nD ? void 0 : nD.id) && void 0 !== hD ? hD : null, null === UD) {
+               const Sp = `${Dp}|${ip}`;
+               if (Pp = null !== (vp = null === (tp = Ip[Sp]) || void 0 === tp ? void 0 : tp.id) && void 0 !== vp ? vp : null, null === Pp) {
```

#### 539. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8229` → after: `L8229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8229) · [Before (L8229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8229)

```diff
-         var XD = wD(2839),
+         var mp = cp(2937),
```

#### 540. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8231` → after: `L8231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8231) · [Before (L8231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8231)

```diff
-           PD = wD(39641);
+           qp = cp(39905);
```

#### 541. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8236-L8238` → after: `L8236-L8238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8236-L8238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8236-L8238) · [Before (L8236-L8238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8236-L8238)

```diff
-             const cD = wD.getOrGenerate(DD, zD, LD, KD.d.FloorY);
-             if (cD === rD.m) continue;
-             TD(sD, cD, wD.getOrGenerate(DD, zD, LD, KD.d.CeilingY))
+             const Lp = cp.getOrGenerate(pp, ip, xp, Ip.e.FloorY);
+             if (Lp === Sp.r) continue;
+             Ep(op, Lp, cp.getOrGenerate(pp, ip, xp, Ip.e.CeilingY))
```

#### 542. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8259` → after: `L8259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8259) · [Before (L8259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8259)

```diff
-         const bD = new UD.e([{
+         const Xp = new Pp.f([{
```

#### 543. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8272` → after: `L8272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8272) · [Before (L8272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8272)

```diff
-           jD = new UD.e([{
+           lp = new Pp.f([{
```

#### 544. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8282` → after: `L8282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8282) · [Before (L8282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8282)

```diff
-         const iD = new UD.e(["Powerful", "Legendary", "Majestic", "Fearless", "Celestial", "Mythic", "Epic", "Ethereal", "Omniscient", "Omnipotent", "Arcane", "Enigmatic", "Formidable", "Indomitable", "Luminous", "Ferocious", "Astral", "Unyielding", "Celestine", "Ascendant", "Oth … [truncated]
+         const Bp = new Pp.f(["Powerful", "Legendary", "Majestic", "Fearless", "Celestial", "Mythic", "Epic", "Ethereal", "Omniscient", "Omnipotent", "Arcane", "Enigmatic", "Formidable", "Indomitable", "Luminous", "Ferocious", "Astral", "Unyielding", "Celestine", "Ascendant", "Oth … [truncated]
```

#### 545. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8291` → after: `L8291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8291) · [Before (L8291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8291)

```diff
-             const zD = `${iD.sample(DD)} ${this.mobType}`;
+             const ip = `${Bp.sample(pp)} ${this.mobType}`;
```

#### 546. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8307` → after: `L8307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8307) · [Before (L8307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8307)

```diff
-               const DD = new UD.k(pD.minItems, pD.maxItems + 1),
+               const pp = new Pp.i(Op.minItems, Op.maxItems + 1),
```

#### 547. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8311-L8312` → after: `L8311-L8312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8311-L8312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8311-L8312) · [Before (L8311-L8312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8311-L8312)

```diff
-                 const DD = zD.amount ? new UD.k(zD.amount.min, zD.amount.max + 1) : null,
-                   pD = null !== (wD = zD.itemAttributesDistribution) && void 0 !== wD ? wD : null;
+                 const pp = ip.amount ? new Pp.i(ip.amount.min, ip.amount.max + 1) : null,
+                   Op = null !== (cp = ip.itemAttributesDistribution) && void 0 !== cp ? cp : null;
```

#### 548. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8322` → after: `L8322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8322) · [Before (L8322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8322)

```diff
-               const KD = new UD.e(sD);
+               const Ip = new Pp.f(op);
```

#### 549. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8328` → after: `L8328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8328) · [Before (L8328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8328)

```diff
-             this.itemCategoryDistributions = zD, this.shouldEnchantDistribution = new UD.c(DD.enchantmentProbability), this.enchantmentTier = DD.enchantmentTier
+             this.itemCategoryDistributions = ip, this.shouldEnchantDistribution = new Pp.d(pp.enchantmentProbability), this.enchantmentTier = pp.enchantmentTier
```

#### 550. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8331` → after: `L8331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8331) · [Before (L8331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8331)

```diff
-             const zD = Array(RD.g).fill(null);
+             const ip = Array(Dp.j).fill(null);
```

#### 551. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8339-L8341` → after: `L8339-L8341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8339-L8341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8339-L8341) · [Before (L8339-L8341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8339-L8341)

```diff
-                   UD = null !== (pD = null === (sD = RD.amountDistribution) || void 0 === sD ? void 0 : sD.sample(DD)) && void 0 !== pD ? pD : null,
-                   fD = null !== (KD = null === (rD = RD.attributesDistribution) || void 0 === rD ? void 0 : rD.sample(DD)) && void 0 !== KD ? KD : {},
-                   ID = null !== (LD = this.getEnchantmentAttributesForItem(DD, AD)) && void 0 !== LD ? LD : {};
+                   Pp = null !== (Op = null === (op = Dp.amountDistribution) || void 0 === op ? void 0 : op.sample(pp)) && void 0 !== Op ? Op : null,
+                   Wp = null !== (Ip = null === (Sp = Dp.attributesDistribution) || void 0 === Sp ? void 0 : Sp.sample(pp)) && void 0 !== Ip ? Ip : {},
+                   yp = null !== (xp = this.getEnchantmentAttributesForItem(pp, Ap)) && void 0 !== xp ? xp : {};
```

#### 552. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8348` → after: `L8348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8348) · [Before (L8348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8348)

```diff
-                       ...null !== (cD = fD.customAttributes) && void 0 !== cD ? cD : {},
+                       ...null !== (Lp = Wp.customAttributes) && void 0 !== Lp ? Lp : {},
```

#### 553. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8642` → after: `L8642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8642) · [Before (L8642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8642)

```diff
-             name: `${DD} Pickaxe`,
+             name: `${pp} Pickaxe`,
```

#### 554. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8646` → after: `L8646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8646) · [Before (L8646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8646)

```diff
-             name: `${DD} Axe`,
+             name: `${pp} Axe`,
```

#### 555. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8650` → after: `L8650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8650) · [Before (L8650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8650)

```diff
-             name: `${DD} Spade`,
+             name: `${pp} Spade`,
```

#### 556. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8654` → after: `L8654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8654) · [Before (L8654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8654)

```diff
-             name: `${DD} Hoe`,
+             name: `${pp} Hoe`,
```

#### 557. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8661` → after: `L8661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8661) · [Before (L8661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8661)

```diff
-           if (zD < 0 || zD > 1) throw new Error(`Special arrow chance must be between 0 and 1, but is ${zD}`);
+           if (ip < 0 || ip > 1) throw new Error(`Special arrow chance must be between 0 and 1, but is ${ip}`);
```

#### 558. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8685` → after: `L8685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8685) · [Before (L8685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8685)

```diff
-             name: `${DD} Sword`,
+             name: `${pp} Sword`,
```

#### 559. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8689` → after: `L8689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8689) · [Before (L8689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8689)

```diff
-             name: `${DD} Bow`,
+             name: `${pp} Bow`,
```

#### 560. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8693` → after: `L8693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8693) · [Before (L8693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8693)

```diff
-             name: `${DD} Crossbow`,
+             name: `${pp} Crossbow`,
```

#### 561. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8706` → after: `L8706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8706) · [Before (L8706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8706)

```diff
-           if (DD === ZD.STONE) throw new Error(`${DD} armour is not supported`);
+           if (pp === bp.STONE) throw new Error(`${pp} armour is not supported`);
```

#### 562. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8708` → after: `L8708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8708) · [Before (L8708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8708)

```diff
-               name: `${DD} Helmet`,
+               name: `${pp} Helmet`,
```

#### 563. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8712` → after: `L8712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8712) · [Before (L8712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8712)

```diff
-               name: `${DD} Chestplate`,
+               name: `${pp} Chestplate`,
```

#### 564. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8716` → after: `L8716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8716) · [Before (L8716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8716)

```diff
-               name: `${DD} Gauntlets`,
+               name: `${pp} Gauntlets`,
```

#### 565. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8720` → after: `L8720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8720) · [Before (L8720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8720)

```diff
-               name: `${DD} Leggings`,
+               name: `${pp} Leggings`,
```

#### 566. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8724` → after: `L8724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8724) · [Before (L8724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8724)

```diff
-               name: `${DD} Boots`,
+               name: `${pp} Boots`,
```

#### 567. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8981` → after: `L8981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8981) · [Before (L8981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8981)

```diff
-             const DD = new UD.g(`${this.seed}|${this.x}|${this.y}|${this.z}|lootChest`),
+             const pp = new Pp.h(`${this.seed}|${this.x}|${this.y}|${this.z}|lootChest`),
```

#### 568. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8986` → after: `L8986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8986) · [Before (L8986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8986)

```diff
-                   chestStr: (0, RD.v)(zD),
+                   chestStr: (0, Dp.A)(ip),
```

#### 569. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8996` → after: `L8996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8996) · [Before (L8996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8996)

```diff
-             this.seed = void 0, this.CI = void 0, this.invisibleSolidBlockId = void 0, this.emptySpawnerBlockId = void 0, this.chestToLootChestBlockId = void 0, this.defaultSpawnerBlockId = void 0, this.mobTypeToSpawnerBlockId = void 0, this.prefabRadius = void 0, this.prefabCent … [truncated]
+             this.seed = void 0, this.Qy = void 0, this.invisibleSolidBlockId = void 0, this.emptySpawnerBlockId = void 0, this.chestToLootChestBlockId = void 0, this.defaultSpawnerBlockId = void 0, this.mobTypeToSpawnerBlockId = void 0, this.prefabRadius = void 0, this.prefabCent … [truncated]
```

#### 570. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8999` → after: `L8999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8999) · [Before (L8999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8999)

```diff
-               CI: wD,
+               Qy: cp,
```

#### 571. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9005` → after: `L9005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9005) · [Before (L9005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9005)

```diff
-             sz.BLOCK_ID_MAPPINGS || (sz.BLOCK_ID_MAPPINGS = new QD(pD)), dD || (dD = new ID(rD)), this.seed = zD, this.CI = wD, this.invisibleSolidBlockId = pD["Invisible Solid"].id, this.emptySpawnerBlockId = pD["Empty Spawner Block"].id, this.chestToLootChestBlockId = new gD.e( … [truncated]
+             Si.BLOCK_ID_MAPPINGS || (Si.BLOCK_ID_MAPPINGS = new kp(Op)), Qp || (Qp = new yp(Sp)), this.seed = ip, this.Qy = cp, this.invisibleSolidBlockId = Op["Invisible Solid"].id, this.emptySpawnerBlockId = Op["Empty Spawner Block"].id, this.chestToLootChestBlockId = new Yp.d( … [truncated]
```

#### 572. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9012` → after: `L9012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9012) · [Before (L9012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9012)

```diff
-             for (const sD of KD.r) RD[sD] = pD[`${sD} Spawner Block`].id;
+             for (const op of Ip.s) Dp[op] = Op[`${op} Spawner Block`].id;
```

#### 573. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9027` → after: `L9027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9027) · [Before (L9027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9027)

```diff
-                   cD = new sD.c(`prefab|${DD}|${rD}`, LD.minDistanceBetweenPrefabs, !1, !0, zD, pD, wD, null, !0)
+                   Lp = new op.b(`prefab|${pp}|${Sp}`, xp.minDistanceBetweenPrefabs, !1, !0, ip, Op, cp, null, !0)
```

#### 574. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9041` → after: `L9041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9041) · [Before (L9041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9041)

```diff
-             return new UD.g(`${DD}|${zD}|${this.seed}|prefabGenerator`)
+             return new Pp.h(`${pp}|${ip}|${this.seed}|prefabGenerator`)
```

#### 575. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9070` → after: `L9070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9070) · [Before (L9070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9070)

```diff
-               gD = this.CI >> 1,
+               Yp = this.Qy >> 1,
```

#### 576. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9072` → after: `L9072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9072) · [Before (L9072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9072)

```diff
-               UD = DD + this.CI + this.prefabRadius,
+               Pp = pp + this.Qy + this.prefabRadius,
```

#### 577. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9074` → after: `L9074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9074) · [Before (L9074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9074)

```diff
-               ID = zD + this.CI + this.prefabRadius;
+               yp = ip + this.Qy + this.prefabRadius;
```

#### 578. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9082` → after: `L9082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9082) · [Before (L9082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9082)

```diff
-                 if (GD === KD.o.SURFACE && nD === KD.l.VERY_HIGH && !LD.regionMayHaveVeryHighSurfacePrefabs(RD, fD, UD, ID)) continue;
+                 if (wp === Ip.p.SURFACE && tp === Ip.l.VERY_HIGH && !xp.regionMayHaveVeryHighSurfacePrefabs(Dp, Wp, Pp, yp)) continue;
```

#### 579. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9092` → after: `L9092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9092) · [Before (L9092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9092)

```diff
-                   if (GD === KD.o.SURFACE && !gD.canPlaceSurfacePrefab(zD, LD)) continue;
+                   if (wp === Ip.p.SURFACE && !Yp.canPlaceSurfacePrefab(ip, xp)) continue;
```

#### 580. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9111` → after: `L9111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9111) · [Before (L9111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9111)

```diff
-                       console.error(`Invalid prefab rotation: ${MD}`)
+                       console.error(`Invalid prefab rotation: ${Hp}`)
```

#### 581. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9128` → after: `L9128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9128) · [Before (L9128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9128)

```diff
-                   if (GD === KD.o.SURFACE && null !== gD.maxSurfacePrefabRelief) {
+                   if (wp === Ip.p.SURFACE && null !== Yp.maxSurfacePrefabRelief) {
```

#### 582. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9135` → after: `L9135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9135) · [Before (L9135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9135)

```diff
-                   const xD = new AD.d;
+                   const Cp = new Ap.e;
```

#### 583. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9143` → after: `L9143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9143) · [Before (L9143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9143)

```diff
-                   const TD = new AD.d;
+                   const Ep = new Ap.e;
```

#### 584. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9173` → after: `L9173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9173) · [Before (L9173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9173)

```diff
-                 const pD = sD.getOrGenerate(DD + RD, zD + wD, KD.h.GroundHeight);
+                 const Op = op.getOrGenerate(pp + Dp, ip + cp, Ip.f.GroundHeight);
```

#### 585. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9194-L9195` → after: `L9194-L9195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9194-L9195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9194-L9195) · [Before (L9194-L9195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9194-L9195)

```diff
-                 LD: DD,
-                 cD: wD
+                 UO: pp,
+                 wO: cp
```

#### 586. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9208` → after: `L9208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9208) · [Before (L9208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9208)

```diff
-                   if (wD.getOrGenerate(gD, DD, KD.h.WaterHeight) !== rD.n) return {
+                   if (cp.getOrGenerate(Yp, pp, Ip.f.WaterHeight) !== Sp.u) return {
```

#### 587. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9212-L9213` → after: `L9212-L9213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9212-L9213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9212-L9213) · [Before (L9212-L9213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9212-L9213)

```diff
-                   const zD = wD.getOrGenerate(gD, DD, KD.h.GroundHeight);
-                   if (cD.e.isInCave(gD, zD, DD, pD)) return {
+                   const ip = cp.getOrGenerate(Yp, pp, Ip.f.GroundHeight);
+                   if (Lp.c.isInCave(Yp, ip, pp, Op)) return {
```

#### 588. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9217` → after: `L9217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9217) · [Before (L9217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9217)

```diff
-                   if (PD.b.isNearFixedPointPrefab(gD, DD, sD)) return {
+                   if (qp.d.isNearFixedPointPrefab(Yp, pp, op)) return {
```

#### 589. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9264-L9265` → after: `L9264-L9265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9264-L9265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9264-L9265) · [Before (L9264-L9265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9264-L9265)

```diff
-             if (LD === this.emptySpawnerBlockId && (LD = null !== (cD = pD.spawnerBlockLocationToBlockId.get(DD, zD, wD)) && void 0 !== cD ? cD : this.defaultSpawnerBlockId), LD < 0) return LD;
-             if (LD = null !== (KD = null === (rD = pD.blockIdMapping) || void 0 === rD ? void 0 : rD[LD]) && void 0 !== KD ? KD : LD, void 0 !== this.chestToLootChestBlockId.reverseGet(LD)) {
+             if (xp === this.emptySpawnerBlockId && (xp = null !== (Lp = Op.spawnerBlockLocationToBlockId.get(pp, ip, cp)) && void 0 !== Lp ? Lp : this.defaultSpawnerBlockId), xp < 0) return xp;
+             if (xp = null !== (Ip = null === (Sp = Op.blockIdMapping) || void 0 === Sp ? void 0 : Sp[xp]) && void 0 !== Ip ? Ip : xp, void 0 !== this.chestToLootChestBlockId.reverseGet(xp)) {
```

#### 590. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9267` → after: `L9267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9267) · [Before (L9267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9267)

```diff
-               const KD = null !== (gD = pD.chestLocationToQuality.get(DD, zD, wD)) && void 0 !== gD ? gD : sz.DEFAULT_CHEST_QUALITY,
+               const Ip = null !== (Yp = Op.chestLocationToQuality.get(pp, ip, cp)) && void 0 !== Yp ? Yp : Si.DEFAULT_CHEST_QUALITY,
```

#### 591. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9294` → after: `L9294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9294) · [Before (L9294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9294)

```diff
-             } = DD, KD = VD()(new Int32Array(wD * pD * sD), [wD, pD, sD]), rD = new AD.d;
+             } = pp, Ip = Rp()(new Int32Array(cp * Op * op), [cp, Op, op]), Sp = new Ap.e;
```

#### 592. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9296` → after: `L9296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9296) · [Before (L9296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9296)

```diff
-             const cD = new AD.d;
+             const Lp = new Ap.e;
```

#### 593. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9298-L9302` → after: `L9298-L9302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9298-L9302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9298-L9302) · [Before (L9298-L9302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9298-L9302)

```diff
-             for (let gD = 0; gD < wD; gD += RD.r)
-               for (let zD = 0; zD < pD; zD += RD.r)
-                 for (let AD = 0; AD < sD; AD += RD.r) {
-                   const UD = VD()(new Uint16Array(RD.r * RD.r * RD.r), [RD.r, RD.r, RD.r]),
-                     fD = DD.schematic.getRLEChunk((0, RD.L)(gD), (0, RD.L)(zD), (0, RD.L)(AD));
+             for (let Yp = 0; Yp < cp; Yp += Dp.z)
+               for (let ip = 0; ip < Op; ip += Dp.z)
+                 for (let Ap = 0; Ap < op; Ap += Dp.z) {
+                   const Pp = Rp()(new Uint16Array(Dp.z * Dp.z * Dp.z), [Dp.z, Dp.z, Dp.z]),
+                     Wp = pp.schematic.getRLEChunk((0, Dp.Q)(Yp), (0, Dp.Q)(ip), (0, Dp.Q)(Ap));
```

#### 594. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9304-L9306` → after: `L9304-L9306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9304-L9306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9304-L9306) · [Before (L9304-L9306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9304-L9306)

```diff
-                   const ID = Math.min(RD.r, wD - gD),
-                     BD = Math.min(RD.r, pD - zD),
-                     GD = Math.min(RD.r, sD - AD);
+                   const yp = Math.min(Dp.z, cp - Yp),
+                     Up = Math.min(Dp.z, Op - ip),
+                     wp = Math.min(Dp.z, op - Ap);
```

#### 595. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9315` → after: `L9315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9315) · [Before (L9315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9315)

```diff
-                         else if (this.emptySpawnerBlockId === LD) cD.get(RD, fD, ID) || console.error(`Empty spawner block found in prefab ${DD.schematic.name} at (${RD}, ${fD}, ${ID}) with no mob type specified. Defaulting to "${sz.DEFAULT_MOB_TYPE}" mob type.`);
+                         else if (this.emptySpawnerBlockId === xp) Lp.get(Dp, Wp, yp) || console.error(`Empty spawner block found in prefab ${pp.schematic.name} at (${Dp}, ${Wp}, ${yp}) with no mob type specified. Defaulting to "${Si.DEFAULT_MOB_TYPE}" mob type.`);
```

#### 596. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9318` → after: `L9318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9318) · [Before (L9318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9318)

```diff
-                           void 0 !== zD && (rD.get(RD, fD, ID) || console.error(`Chest found in prefab ${DD.schematic.name} at (${RD}, ${fD}, ${ID}) with no quality specified. Defaulting to "${sz.DEFAULT_CHEST_QUALITY}" quality.`), LD = zD)
+                           void 0 !== ip && (Sp.get(Dp, Wp, yp) || console.error(`Chest found in prefab ${pp.schematic.name} at (${Dp}, ${Wp}, ${yp}) with no quality specified. Defaulting to "${Si.DEFAULT_CHEST_QUALITY}" quality.`), xp = ip)
```

#### 597. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9341` → after: `L9341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9341) · [Before (L9341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9341)

```diff
-           }(DD, DD.shouldSwapXZ ? wD : zD)
+           }(pp, pp.shouldSwapXZ ? cp : ip)
```

#### 598. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9348` → after: `L9348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9348) · [Before (L9348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9348)

```diff
-           }(DD, DD.shouldSwapXZ ? zD : wD)
+           }(pp, pp.shouldSwapXZ ? ip : cp)
```

#### 599. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9371` → after: `L9371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9371) · [Before (L9371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9371)

```diff
-             const wD = new pD.i(2 * DD + 1, [-DD, -DD]);
+             const cp = new Op.g(2 * pp + 1, [-pp, -pp]);
```

#### 600. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9380` → after: `L9380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9380) · [Before (L9380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9380)

```diff
-             this.CI = wD, this.seed = pD, this.blockMetadata = KD, this.maxTreeRadius = void 0, this.treePointGen = void 0, this.minTreeHeight = 4, this.maxTreeHeight = 7, this.treeInfos = void 0, this.canopyInfos = void 0, this.deadWoodIds = void 0;
+             this.Qy = cp, this.seed = Op, this.blockMetadata = Ip, this.maxTreeRadius = void 0, this.treePointGen = void 0, this.minTreeHeight = 4, this.maxTreeHeight = 7, this.treeInfos = void 0, this.canopyInfos = void 0, this.deadWoodIds = void 0;
```

#### 601. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9383` → after: `L9383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9383) · [Before (L9383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9383)

```diff
-                 [RD.p.Maple]: {
+                 [Dp.t.Maple]: {
```

#### 602. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9391` → after: `L9391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9391) · [Before (L9391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9391)

```diff
-                 [RD.p.Pine]: {
+                 [Dp.t.Pine]: {
```

#### 603. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9401` → after: `L9401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9401) · [Before (L9401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9401)

```diff
-                 [RD.p.Plum]: {
+                 [Dp.t.Plum]: {
```

#### 604. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9409` → after: `L9409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9409) · [Before (L9409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9409)

```diff
-                 [RD.p.Cedar]: {
+                 [Dp.t.Cedar]: {
```

#### 605. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9417` → after: `L9417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9417) · [Before (L9417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9417)

```diff
-                 [RD.p.Aspen]: {
+                 [Dp.t.Aspen]: {
```

#### 606. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9427` → after: `L9427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9427) · [Before (L9427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9427)

```diff
-                 [RD.p.Jungle]: {
+                 [Dp.t.Jungle]: {
```

#### 607. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9437` → after: `L9437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9437) · [Before (L9437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9437)

```diff
-                 [RD.p.Palm]: {
+                 [Dp.t.Palm]: {
```

#### 608. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9447` → after: `L9447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9447) · [Before (L9447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9447)

```diff
-                 [RD.p.AutumnMaple]: {
+                 [Dp.t.AutumnMaple]: {
```

#### 609. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9455` → after: `L9455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9455) · [Before (L9455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9455)

```diff
-                 [RD.p.Pear]: {
+                 [Dp.t.Pear]: {
```

#### 610. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9465` → after: `L9465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9465) · [Before (L9465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9465)

```diff
-                 [RD.p.Cherry]: {
+                 [Dp.t.Cherry]: {
```

#### 611. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9475` → after: `L9475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9475) · [Before (L9475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9475)

```diff
-                 [RD.p.Spectral]: {
+                 [Dp.t.Spectral]: {
```

#### 612. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9483` → after: `L9483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9483) · [Before (L9483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9483)

```diff
-                 [RD.p.Mango]: {
+                 [Dp.t.Mango]: {
```

#### 613. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9493` → after: `L9493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9493) · [Before (L9493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9493)

```diff
-                 [RD.p.AutumnAspen]: {
+                 [Dp.t.AutumnAspen]: {
```

#### 614. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9503` → after: `L9503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9503) · [Before (L9503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9503)

```diff
-                 [RD.p.Dead]: {
+                 [Dp.t.Dead]: {
```

#### 615. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9513` → after: `L9513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9513) · [Before (L9513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9513)

```diff
-                 [RD.p.FallenLog]: {
+                 [Dp.t.FallenLog]: {
```

#### 616. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9523-L9524` → after: `L9523-L9524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9523-L9524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9523-L9524) · [Before (L9523-L9524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9523-L9524)

```diff
-               }, this.deadWoodIds = ["Barkless Maple Log", "Barkless Maple Log", "Barkless Pine Log", "Barkless Cedar Log"].map((DD => KD[DD].id)), this.maxTreeRadius = DD.maxTreeRadius, this.CI <= 2 * this.maxTreeRadius + 1) throw new Error("Tree radius is too large for chunk si … [truncated]
-             if (this.CI <= this.maxTreeHeight) throw new Error("Max tree height is too large for chunk size");
+               }, this.deadWoodIds = ["Barkless Maple Log", "Barkless Maple Log", "Barkless Pine Log", "Barkless Cedar Log"].map((pp => Ip[pp].id)), this.maxTreeRadius = pp.maxTreeRadius, this.Qy <= 2 * this.maxTreeRadius + 1) throw new Error("Tree radius is too large for chunk si … [truncated]
+             if (this.Qy <= this.maxTreeHeight) throw new Error("Max tree height is too large for chunk size");
```

#### 617. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9598` → after: `L9598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9598) · [Before (L9598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9598)

```diff
-               if (DD.radius > this.maxTreeRadius) throw new Error(`Canopy radius ${DD.radius} for canopy type "${sD}" is larger than tree radius ${this.maxTreeRadius}`)
+               if (pp.radius > this.maxTreeRadius) throw new Error(`Canopy radius ${pp.radius} for canopy type "${op}" is larger than tree radius ${this.maxTreeRadius}`)
```

#### 618. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9602-L9603` → after: `L9602-L9603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9602-L9603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9602-L9603) · [Before (L9602-L9603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9602-L9603)

```diff
-             for (const sD of DD.biomeSelector.xD) sD.biome.treeMinDist && (LD = Math.min(LD, sD.biome.treeMinDist), cD = Math.max(cD, sD.biome.treeMinDist));
-             this.treePointGen = new sD.c("tree", 6, !0, !1, pD, 300, wD, {
+             for (const op of pp.biomeSelector.BO) op.biome.treeMinDist && (xp = Math.min(xp, op.biome.treeMinDist), Lp = Math.max(Lp, op.biome.treeMinDist));
+             this.treePointGen = new op.b("tree", 6, !0, !1, Op, 300, cp, {
```

#### 619. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9611-L9612` → after: `L9611-L9612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9611-L9612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9611-L9612) · [Before (L9611-L9612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9611-L9612)

```diff
-             for (let fD = DD - this.maxTreeRadius; fD < DD + this.CI + this.maxTreeRadius; fD++)
-               for (let DD = zD - this.maxTreeRadius; DD < zD + this.CI + this.maxTreeRadius; DD++) {
+             for (let Wp = pp - this.maxTreeRadius; Wp < pp + this.Qy + this.maxTreeRadius; Wp++)
+               for (let pp = ip - this.maxTreeRadius; pp < ip + this.Qy + this.maxTreeRadius; pp++) {
```

#### 620. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9616-L9618` → after: `L9616-L9618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9616-L9618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9616-L9618) · [Before (L9616-L9618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9616-L9618)

```diff
-                   if (wD.getOrGenerate(fD, DD, KD.h.WaterHeight) !== rD.n) continue;
-                   const pD = wD.getOrGenerate(fD, DD, KD.h.GroundHeight);
-                   if (cD.e.isInCave(fD, pD, DD, sD)) continue;
+                   if (cp.getOrGenerate(Wp, pp, Ip.f.WaterHeight) !== Sp.u) continue;
+                   const Op = cp.getOrGenerate(Wp, pp, Ip.f.GroundHeight);
+                   if (Lp.c.isInCave(Wp, Op, pp, op)) continue;
```

#### 621. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9620-L9621` → after: `L9620-L9621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9620-L9621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9620-L9621) · [Before (L9620-L9621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9620-L9621)

```diff
-                   if (PD.b.isNearFixedPointPrefab(fD, DD, gD)) continue;
-                   const ID = new UD.g(`${fD}${DD}${this.seed}treeHeight`),
+                   if (qp.d.isNearFixedPointPrefab(Wp, pp, Yp)) continue;
+                   const yp = new Pp.h(`${Wp}${pp}${this.seed}treeHeight`),
```

#### 622. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9627` → after: `L9627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9627) · [Before (L9627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9627)

```diff
-                   if (BD === RD.p.FallenLog) {
+                   if (Up === Dp.t.FallenLog) {
```

#### 623. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9630` → after: `L9630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9630) · [Before (L9630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9630)

```diff
-                       if (wD.getOrGenerate(0 === hD ? fD + zD : fD, 0 === hD ? DD : DD + zD, KD.h.GroundHeight) !== pD) {
+                       if (cp.getOrGenerate(0 === vp ? Wp + ip : Wp, 0 === vp ? pp : pp + ip, Ip.f.GroundHeight) !== Op) {
```

#### 624. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9651-L9652` → after: `L9651-L9652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9651-L9652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9651-L9652) · [Before (L9651-L9652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9651-L9652)

```diff
-               KD = null !== (wD = sD.minHeight) && void 0 !== wD ? wD : this.minTreeHeight,
-               rD = null !== (pD = sD.maxHeight) && void 0 !== pD ? pD : this.maxTreeHeight;
+               Ip = null !== (cp = op.minHeight) && void 0 !== cp ? cp : this.minTreeHeight,
+               Sp = null !== (Op = op.maxHeight) && void 0 !== Op ? Op : this.maxTreeHeight;
```

#### 625. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9667-L9668` → after: `L9667-L9668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9667-L9668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9667-L9668) · [Before (L9667-L9668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9667-L9668)

```diff
-               const sD = new UD.g(`${KD.treeX}|${KD.treeZ}|${KD.trunkBase}|tree`);
-               if (KD.treeType === RD.p.Dead || KD.treeType === RD.p.FallenLog) {
+               const op = new Pp.h(`${Ip.treeX}|${Ip.treeZ}|${Ip.trunkBase}|tree`);
+               if (Ip.treeType === Dp.t.Dead || Ip.treeType === Dp.t.FallenLog) {
```

#### 626. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9685` → after: `L9685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9685) · [Before (L9685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9685)

```diff
-                 sD >= zD && sD < zD + this.CI && KD >= wD && KD < wD + this.CI && LD >= pD && LD < pD + this.CI && DD.set(sD - zD, KD - wD, LD - pD, rD)
+                 op >= ip && op < ip + this.Qy && Ip >= cp && Ip < cp + this.Qy && xp >= Op && xp < Op + this.Qy && pp.set(op - ip, Ip - cp, xp - Op, Sp)
```

#### 627. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9687` → after: `L9687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9687) · [Before (L9687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9687)

```diff
-             if (sD.treeType === RD.p.FallenLog) {
+             if (op.treeType === Dp.t.FallenLog) {
```

#### 628. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9689` → after: `L9689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9689) · [Before (L9689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9689)

```diff
-               for (let DD = -1; DD < AD - 1; DD++) UD(0 === sD.vineDir ? LD + DD : LD, gD, 0 === sD.vineDir ? cD : cD + DD);
+               for (let pp = -1; pp < Ap - 1; pp++) Pp(0 === op.vineDir ? xp + pp : xp, Yp, 0 === op.vineDir ? Lp : Lp + pp);
```

#### 629. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9714` → after: `L9714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9714) · [Before (L9714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9714)

```diff
-               BD = Math.min(fD, wD + this.CI - 1);
+               Up = Math.min(Wp, cp + this.Qy - 1);
```

#### 630. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9717` → after: `L9717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9717) · [Before (L9717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9717)

```diff
-               hD = Math.min(rD + AD.radius, zD + this.CI - 1);
+               vp = Math.min(Sp + Ap.radius, ip + this.Qy - 1);
```

#### 631. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9720` → after: `L9720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9720) · [Before (L9720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9720)

```diff
-               MD = Math.min(LD + AD.radius, pD + this.CI - 1);
+               Hp = Math.min(xp + Ap.radius, Op + this.Qy - 1);
```

#### 632. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9795` → after: `L9795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9795) · [Before (L9795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9795)

```diff
-               if (BD !== Uz.SOMETIMES) return void console.error(`Invalid canopy-generation type: ${BD}`);
+               if (Up !== yi.SOMETIMES) return void console.error(`Invalid canopy-generation type: ${Up}`);
```

#### 633. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9802-L9804` → after: `L9802-L9804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9802-L9804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9802-L9804) · [Before (L9802-L9804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9802-L9804)

```diff
-             const rD = zD + this.CI,
-               LD = wD + this.CI,
-               cD = pD + this.CI,
+             const Sp = ip + this.Qy,
+               xp = cp + this.Qy,
+               Lp = Op + this.Qy,
```

#### 634. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9830` → after: `L9830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9830) · [Before (L9830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9830)

```diff
-             const zD = this.CI >> 1,
+             const ip = this.Qy >> 1,
```

#### 635. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9852` → after: `L9852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9852) · [Before (L9852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9852)

```diff
-         var Bz = wD(39698);
+         var vi = cp(39975);
```

#### 636. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9856` → after: `L9856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9856) · [Before (L9856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9856)

```diff
-             this.biomeSelector = DD, this.noWaterHeightmapGenerator = zD, this.hydrology = wD, this.lakeRadiusNoiseModifier = KD, this.seed = rD, this.needOutsideWaterDist = cD, this.distApart = 64, this.minRadius = 14, this.maxRadius = 30, this.minGapFromHydrologyWater = 12, thi … [truncated]
+             this.biomeSelector = pp, this.noWaterHeightmapGenerator = ip, this.hydrology = cp, this.lakeRadiusNoiseModifier = Ip, this.seed = Sp, this.needOutsideWaterDist = Lp, this.distApart = 64, this.minRadius = 14, this.maxRadius = 30, this.minGapFromHydrologyWater = 12, thi … [truncated]
```

#### 637. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9866` → after: `L9866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9866) · [Before (L9866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9866)

```diff
-               if ((0, pD.M)(AD, DD, zD) > KD) continue;
+               if ((0, Op.K)(Ap, pp, ip) > Ip) continue;
```

#### 638. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9870` → after: `L9870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9870) · [Before (L9870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9870)

```diff
-               const sD = (0, pD.J)(wD.origin, DD, zD),
+               const op = (0, Op.H)(cp.origin, pp, ip),
```

#### 639. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9887` → after: `L9887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9887) · [Before (L9887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9887)

```diff
-             if (!(0, RD.B)(zD)) return zD.lake;
+             if (!(0, Dp.G)(ip)) return ip.lake;
```

#### 640. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9900` → after: `L9900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9900) · [Before (L9900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9900)

```diff
-             } = this, KD = new UD.g(`${DD[0]}|${DD[1]}${this.seed}oasisLake`), rD = this.hydrology.getHydrologyWaterGenInfo(DD[0], DD[1]), LD = Math.floor(rD.distFromWater - rD.waterRadius - sD);
+             } = this, Ip = new Pp.h(`${pp[0]}|${pp[1]}${this.seed}oasisLake`), Sp = this.hydrology.getHydrologyWaterGenInfo(pp[0], pp[1]), xp = Math.floor(Sp.distFromWater - Sp.waterRadius - op);
```

#### 641. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9920` → after: `L9920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9920) · [Before (L9920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9920)

```diff
-             this.biomeSelector = DD, this.noWaterHeightmapGenerator = zD, this.needOutsideWaterBodyDist = rD, this.RD = cD, this.gridSize = 224, this.cellCenterMaxOffset = void 0, this.maxRiverSettings = {
+             this.biomeSelector = pp, this.noWaterHeightmapGenerator = ip, this.needOutsideWaterBodyDist = Sp, this.tO = Lp, this.gridSize = 224, this.cellCenterMaxOffset = void 0, this.maxRiverSettings = {
```

#### 642. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9932` → after: `L9932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9932) · [Before (L9932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9932)

```diff
-             }, this.waterBodyInfos = void 0, this.scatteredLakes = void 0, Mz || (Mz = new Bz.e("water cells", LD ? 800 : 60, 6e4)), this.waterBodyInfos = Mz.partition();
+             }, this.waterBodyInfos = void 0, this.scatteredLakes = void 0, ei || (ei = new vi.b("water cells", xp ? 800 : 60, 6e4)), this.waterBodyInfos = ei.partition();
```

#### 643. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9940` → after: `L9940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9940) · [Before (L9940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9940)

```diff
-             }], `${wD}GlobalHeightmapOffset`), this.lakeRadiusNoiseAmplitude = (0, pD.D)(this.lakeRadiusNoiseModifier), this.scatteredLakes = new hz(DD, zD, this, this.lakeRadiusNoiseModifier, wD, sD, rD, LD)
+             }], `${cp}GlobalHeightmapOffset`), this.lakeRadiusNoiseAmplitude = (0, Op.z)(this.lakeRadiusNoiseModifier), this.scatteredLakes = new Hi(pp, ip, this, this.lakeRadiusNoiseModifier, cp, op, Sp, xp)
```

#### 644. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9944` → after: `L9944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9944) · [Before (L9944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9944)

```diff
-             if (!this.RD) return Ez(this.needOutsideWaterBodyDist);
+             if (!this.tO) return ki(this.needOutsideWaterBodyDist);
```

#### 645. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9948` → after: `L9948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9948) · [Before (L9948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9948)

```diff
-             return null === sD || Jz(pD) <= Jz(sD) ? pD : sD
+             return null === op || ji(Op) <= ji(op) ? Op : op
```

#### 646. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9974` → after: `L9974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9974) · [Before (L9974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9974)

```diff
-                 HR: DD,
+                 Yx: pp,
```

#### 647. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9977` → after: `L9977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9977) · [Before (L9977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9977)

```diff
-               } = (0, pD.A)(wD, sD.origin, sD.downhill.origin);
+               } = (0, Op.x)(cp, op.origin, op.downhill.origin);
```

#### 648. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9989` → after: `L9989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9989) · [Before (L9989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9989)

```diff
-                 HR: DD,
+                 Yx: pp,
```

#### 649. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9992` → after: `L9992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9992) · [Before (L9992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9992)

```diff
-               } = (0, pD.A)(wD, UD.origin, sD.origin), ID = Math.floor(DD);
+               } = (0, Op.x)(cp, Pp.origin, op.origin), yp = Math.floor(pp);
```

#### 650. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10013` → after: `L10013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10013) · [Before (L10013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10013)

```diff
-                 rD *= KD.lakeRadius / this.lakeSettings.maxRadius, UD = KD.lakeRadius - rD, wD = (0, pD.J)(sD.origin, DD, zD) - UD
+                 Sp *= Ip.lakeRadius / this.lakeSettings.maxRadius, Pp = Ip.lakeRadius - Sp, cp = (0, Op.H)(op.origin, pp, ip) - Pp
```

#### 651. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10027` → after: `L10027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10027) · [Before (L10027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10027)

```diff
-                 const wD = (0, pD.J)(sD.origin, DD, zD),
+                 const cp = (0, Op.H)(op.origin, pp, ip),
```

#### 652. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10054` → after: `L10054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10054) · [Before (L10054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10054)

```diff
-             if (!(0, RD.B)(wD)) return this.lastReadInfo.cellX = DD, this.lastReadInfo.cellZ = zD, this.lastReadInfo.info = wD, wD;
+             if (!(0, Dp.G)(cp)) return this.lastReadInfo.cellX = pp, this.lastReadInfo.cellZ = ip, this.lastReadInfo.info = cp, cp;
```

#### 653. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10118` → after: `L10118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10118) · [Before (L10118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10118)

```diff
-             return -1 !== sD ? pD : null
+             return -1 !== op ? Op : null
```

#### 654. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10123` → after: `L10123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10123) · [Before (L10123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10123)

```diff
-               sD = new UD.g(`${DD}${zD}${this.seed}riverCell`);
+               op = new Pp.h(`${pp}${ip}${this.seed}riverCell`);
```

#### 655. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10163-L10166` → after: `L10163-L10166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10163-L10166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10163-L10166) · [Before (L10163-L10166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10163-L10166)

```diff
-           WD: 40,
-           LD: -85,
-           cD: -85,
-           ND: .5
+           FO: 40,
+           UO: -85,
+           wO: -85,
+           gO: .5
```

#### 656. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10170-L10173` → after: `L10170-L10173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10170-L10173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10170-L10173) · [Before (L10170-L10173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10170-L10173)

```diff
-           WD: 13,
-           LD: -100,
-           cD: -85,
-           ND: .28
+           FO: 13,
+           UO: -100,
+           wO: -85,
+           gO: .28
```

#### 657. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10177-L10180` → after: `L10177-L10180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10177-L10180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10177-L10180) · [Before (L10177-L10180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10177-L10180)

```diff
-           WD: 10,
-           LD: -100,
-           cD: -75,
-           ND: .4
+           FO: 10,
+           UO: -100,
+           wO: -75,
+           gO: .4
```

#### 658. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10184-L10187` → after: `L10184-L10187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10184-L10187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10184-L10187) · [Before (L10184-L10187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10184-L10187)

```diff
-           WD: 5,
-           LD: -80,
-           cD: 15,
-           ND: .5
+           FO: 5,
+           UO: -80,
+           wO: 15,
+           gO: .5
```

#### 659. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10191-L10194` → after: `L10191-L10194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10191-L10194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10191-L10194) · [Before (L10191-L10194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10191-L10194)

```diff
-           WD: 4,
-           LD: -60,
-           cD: 40,
-           ND: .5
+           FO: 4,
+           UO: -60,
+           wO: 40,
+           gO: .5
```

#### 660. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10198-L10199` → after: `L10198-L10199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10198-L10199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10198-L10199) · [Before (L10198-L10199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10198-L10199)

```diff
-             this.seed = zD, this.CI = wD, this.iD = void 0, this.iD = pD.map((pD => {
-               const KD = new sD.c("ore", pD.WD, !1, !0, `${zD}${pD.blockName}`, 20, wD, null, !0);
+             this.seed = ip, this.Qy = cp, this.aO = void 0, this.aO = Op.map((Op => {
+               const Ip = new op.b("ore", Op.FO, !1, !0, `${ip}${Op.blockName}`, 20, cp, null, !0);
```

#### 661. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10201` → after: `L10201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10201) · [Before (L10201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10201)

```diff
-                 fR: (0, RD.w)(pD.blockName, DD),
+                 tx: (0, Dp.C)(Op.blockName, pp),
```

#### 662. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10203-L10206` → after: `L10203-L10206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10203-L10206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10203-L10206) · [Before (L10203-L10206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10203-L10206)

```diff
-                 WD: pD.WD,
-                 LD: pD.LD,
-                 cD: pD.cD,
-                 ND: pD.ND,
+                 FO: Op.FO,
+                 UO: Op.UO,
+                 wO: Op.wO,
+                 gO: Op.gO,
```

#### 663. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10213-L10216` → after: `L10213-L10216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10213-L10216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10213-L10216) · [Before (L10213-L10216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10213-L10216)

```diff
-               sD = new UD.g(`${DD}${zD}${this.seed}oreExists`);
-             for (const KD of this.iD) {
-               const rD = KD.pointGenerator.getPointsAroundPoint(DD + this.CI / 2, zD + this.CI / 2),
-                 LD = DD + this.CI + KD.radius,
+               op = new Pp.h(`${pp}${ip}${this.seed}oreExists`);
+             for (const Ip of this.aO) {
+               const Sp = Ip.pointGenerator.getPointsAroundPoint(pp + this.Qy / 2, ip + this.Qy / 2),
+                 xp = pp + this.Qy + Ip.radius,
```

#### 664. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10218` → after: `L10218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10218) · [Before (L10218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10218)

```diff
-                 gD = zD + this.CI + KD.radius,
+                 Yp = ip + this.Qy + Ip.radius,
```

#### 665. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10222-L10223` → after: `L10222-L10223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10222-L10223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10222-L10223) · [Before (L10222-L10223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10222-L10223)

```diff
-                 const rD = new UD.g(`${AD[0]}${AD[1]}${this.seed}ore`),
-                   fD = Math.floor(rD.next() * (KD.cD + 1 - KD.LD)) + KD.LD,
+                 const Sp = new Pp.h(`${Ap[0]}${Ap[1]}${this.seed}ore`),
+                   Wp = Math.floor(Sp.next() * (Ip.wO + 1 - Ip.UO)) + Ip.UO,
```

#### 666. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10225` → after: `L10225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10225) · [Before (L10225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10225)

```diff
-                   BD = Math.min(DD + this.CI - 1, AD[0] + KD.radius),
+                   Up = Math.min(pp + this.Qy - 1, Ap[0] + Ip.radius),
```

#### 667. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10227` → after: `L10227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10227) · [Before (L10227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10227)

```diff
-                   hD = Math.min(zD + this.CI - 1, AD[1] + KD.radius);
+                   vp = Math.min(ip + this.Qy - 1, Ap[1] + Ip.radius);
```

#### 668. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10230` → after: `L10230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10230) · [Before (L10230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10230)

```diff
-                     (0, pD.F)(AD, DD, zD) > KD.radius || (sD.next() >= KD.ND || wD.push(DD, fD, zD, KD.fR))
+                     (0, Op.B)(Ap, pp, ip) > Ip.radius || (op.next() >= Ip.gO || cp.push(pp, Wp, ip, Ip.tx))
```

#### 669. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10237` → after: `L10237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10237) · [Before (L10237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10237)

```diff
-             const cD = wD + this.CI,
+             const Lp = cp + this.Qy,
```

#### 670. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10244` → after: `L10244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10244) · [Before (L10244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10244)

```diff
-               if (gD < rD.get(AD, UD, KD.h.GroundHeight) - sD) {
+               if (Yp < Sp.get(Ap, Pp, Ip.f.GroundHeight) - op) {
```

#### 671. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10251` → after: `L10251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10251) · [Before (L10251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10251)

```diff
-         var Vz = wD(39701);
+         var qi = cp(39978);
```

#### 672. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10261-L10262` → after: `L10261-L10262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10261-L10262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10261-L10262) · [Before (L10261-L10262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10261-L10262)

```diff
-             OD: wD,
-             VD: pD,
+             qO: cp,
+             lO: Op,
```

#### 673. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10272` → after: `L10272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10272) · [Before (L10272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10272)

```diff
-           return wD.hD && pD.push({
+           return cp.kO && Op.push({
```

#### 674. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10274-L10275` → after: `L10274-L10275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10274-L10275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10274-L10275) · [Before (L10274-L10275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10274-L10275)

```diff
-             fR: DD[zD].id
-           }), wD.nD && pD.push({
+             tx: pp[ip].id
+           }), cp.mO && Op.push({
```

#### 675. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10277` → after: `L10277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10277) · [Before (L10277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10277)

```diff
-             fR: DD[`${zD}|meta|rot2|side`].id
+             tx: pp[`${ip}|meta|rot2|side`].id
```

#### 676. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10280` → after: `L10280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10280) · [Before (L10280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10280)

```diff
-             fR: DD[`${zD}|meta|rot4|side`].id
+             tx: pp[`${ip}|meta|rot4|side`].id
```

#### 677. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10283` → after: `L10283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10283) · [Before (L10283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10283)

```diff
-             fR: DD[`${zD}|meta|rot1|side`].id
+             tx: pp[`${ip}|meta|rot1|side`].id
```

#### 678. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10286-L10287` → after: `L10286-L10287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10286-L10287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10286-L10287) · [Before (L10286-L10287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10286-L10287)

```diff
-             fR: DD[`${zD}|meta|rot3|side`].id
-           }), wD.MD && pD.push({
+             tx: pp[`${ip}|meta|rot3|side`].id
+           }), cp.RO && Op.push({
```

#### 679. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10289` → after: `L10289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10289) · [Before (L10289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10289)

```diff
-             fR: DD[`${zD}|meta|rot1|top`].id
+             tx: pp[`${ip}|meta|rot1|top`].id
```

#### 680. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10298-L10300` → after: `L10298-L10300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10298-L10300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10298-L10300) · [Before (L10298-L10300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10298-L10300)

```diff
-                 hD: !0,
-                 nD: !0,
-                 MD: !0
+                 kO: !0,
+                 mO: !0,
+                 RO: !0
```

#### 681. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10303-L10306` → after: `L10303-L10306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10303-L10306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10303-L10306) · [Before (L10303-L10306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10303-L10306)

```diff
-               JD: .8,
-               ED: 0,
-               OD: .12,
-               VD: .25,
+               MO: .8,
+               CO: 0,
+               qO: .12,
+               lO: .25,
```

#### 682. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10312-L10314` → after: `L10312-L10314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10312-L10314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10312-L10314) · [Before (L10312-L10314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10312-L10314)

```diff
-                 hD: !0,
-                 nD: !0,
-                 MD: !1
+                 kO: !0,
+                 mO: !0,
+                 RO: !1
```

#### 683. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10317-L10319` → after: `L10317-L10319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10317-L10319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10317-L10319) · [Before (L10317-L10319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10317-L10319)

```diff
-               JD: .7,
-               ED: 2,
-               OD: .58
+               MO: .7,
+               CO: 2,
+               qO: .58
```

#### 684. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10322` → after: `L10322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10322) · [Before (L10322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10322)

```diff
-             const wD = zD.QD;
+             const cp = ip.EO;
```

#### 685. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10326-L10328` → after: `L10326-L10328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10326-L10328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10326-L10328) · [Before (L10326-L10328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10326-L10328)

```diff
-                 hD: zD.hD,
-                 nD: zD.nD,
-                 MD: zD.MD
+                 kO: ip.kO,
+                 mO: ip.mO,
+                 RO: ip.RO
```

#### 686. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10331-L10336` → after: `L10331-L10336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10331-L10336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10331-L10336) · [Before (L10331-L10336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10331-L10336)

```diff
-               JD: zD.JD,
-               ED: zD.ED,
-               OD: zD.OD,
-               VD: null === wD || void 0 === wD ? void 0 : wD.VD,
-               shallowClusterY: null === wD || void 0 === wD ? void 0 : wD.PD,
-               deepClusterY: null === wD || void 0 === wD ? void 0 : wD.CD
+               MO: ip.MO,
+               CO: ip.CO,
+               qO: ip.qO,
+               lO: null === cp || void 0 === cp ? void 0 : cp.lO,
+               shallowClusterY: null === cp || void 0 === cp ? void 0 : cp.QO,
+               deepClusterY: null === cp || void 0 === cp ? void 0 : cp.JO
```

#### 687. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10355` → after: `L10355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10355) · [Before (L10355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10355)

```diff
-             const pD = this.heightmapVals.getOrGenerate(DD, zD, KD.h.GroundHeight) - this.surfaceMargin,
+             const Op = this.heightmapVals.getOrGenerate(pp, ip, Ip.f.GroundHeight) - this.surfaceMargin,
```

#### 688. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10362` → after: `L10362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10362) · [Before (L10362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10362)

```diff
-               DD - KD.floorY + 1 < sD || rD.push(DD === KD.ceilingY ? KD : {
+               pp - Ip.floorY + 1 < op || Sp.push(pp === Ip.ceilingY ? Ip : {
```

#### 689. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10372` → after: `L10372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10372) · [Before (L10372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10372)

```diff
-             this.heightmapVals = DD, this.allCavesCache = void 0, this.decoratableCavesCache = void 0, this.allCavesCache = new pD.p(new lz(zD)), this.decoratableCavesCache = new pD.p(new Wz(zD, DD, wD, sD))
+             this.heightmapVals = pp, this.allCavesCache = void 0, this.decoratableCavesCache = void 0, this.allCavesCache = new Op.m(new Ti(ip)), this.decoratableCavesCache = new Op.m(new fi(ip, pp, cp, op))
```

#### 690. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10378` → after: `L10378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10378) · [Before (L10378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10378)

```diff
-             return this.heightmapVals.getOrGenerate(DD, zD, KD.h.GroundHeight)
+             return this.heightmapVals.getOrGenerate(pp, ip, Ip.f.GroundHeight)
```

#### 691. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10397` → after: `L10397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10397) · [Before (L10397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10397)

```diff
-             Zz(DD + cD.offset[0], zD + cD.offset[1], wD + cD.offset[2], KD) && (cD.offset === Pz ? rD = cD : LD.push(cD))
+             ai(pp + Lp.offset[0], ip + Lp.offset[1], cp + Lp.offset[2], Ip) && (Lp.offset === Mi ? Sp = Lp : xp.push(Lp))
```

#### 692. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10399` → after: `L10399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10399) · [Before (L10399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10399)

```diff
-           return null !== rD ? rD : 0 === LD.length ? null : LD[Math.floor(sD * LD.length)]
+           return null !== Sp ? Sp : 0 === xp.length ? null : xp[Math.floor(op * xp.length)]
```

#### 693. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10404` → after: `L10404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10404) · [Before (L10404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10404)

```diff
-             this.CI = zD, this.seed = wD, this.pointsGen = void 0, this.configs = void 0, this.maxHalfBox = void 0;
+             this.Qy = ip, this.seed = cp, this.pointsGen = void 0, this.configs = void 0, this.maxHalfBox = void 0;
```

#### 694. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10410` → after: `L10410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10410) · [Before (L10410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10410)

```diff
-               if (!Number.isInteger(sD.clusterBoxSize) || sD.clusterBoxSize < 2 || sD.clusterBoxSize % 2 !== 0) throw new Error(`Decoration kind "${sD.seedPrefix}" has invalid clusterBoxSize (${sD.clusterBoxSize}); must be an even integer >= 2 (the 2x2x2-cell scatter scheme needs … [truncated]
+               if (!Number.isInteger(op.clusterBoxSize) || op.clusterBoxSize < 2 || op.clusterBoxSize % 2 !== 0) throw new Error(`Decoration kind "${op.seedPrefix}" has invalid clusterBoxSize (${op.clusterBoxSize}); must be an even integer >= 2 (the 2x2x2-cell scatter scheme needs … [truncated]
```

#### 695. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10412` → after: `L10412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10412) · [Before (L10412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10412)

```diff
-               DD > rD && (rD = DD), LD += Math.max(sD.OD, null !== (cD = sD.VD) && void 0 !== cD ? cD : sD.OD)
+               pp > Sp && (Sp = pp), xp += Math.max(op.qO, null !== (Lp = op.lO) && void 0 !== Lp ? Lp : op.qO)
```

#### 696. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10414-L10415` → after: `L10414-L10415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10414-L10415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10414-L10415) · [Before (L10414-L10415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10414-L10415)

```diff
-             if (LD > 1) throw new Error(`Cave decoration cluster chances sum to ${LD} at peak depth; must not exceed 1 (later configs would be silently squeezed).`);
-             this.pointsGen = new sD.c("caveDeco", 10, !1, !0, wD, 4, zD, null, !0), this.pointsGen.assertReachableFromChunkCentre(zD, rD), this.configs = KD, this.maxHalfBox = rD
+             if (xp > 1) throw new Error(`Cave decoration cluster chances sum to ${xp} at peak depth; must not exceed 1 (later configs would be silently squeezed).`);
+             this.pointsGen = new op.b("caveDeco", 10, !1, !0, cp, 4, ip, null, !0), this.pointsGen.assertReachableFromChunkCentre(ip, Sp), this.configs = Ip, this.maxHalfBox = Sp
```

#### 697. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10419` → after: `L10419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10419) · [Before (L10419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10419)

```diff
-               KD = this.CI,
+               Ip = this.Qy,
```

#### 698. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10436` → after: `L10436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10436) · [Before (L10436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10436)

```diff
-             for (const LD of KD) LD.y >= wD && LD.y < rD && DD.set(LD.x - zD, LD.y - wD, LD.z - pD, LD.fR)
+             for (const xp of Ip) xp.y >= cp && xp.y < Sp && pp.set(xp.x - ip, xp.y - cp, xp.z - Op, xp.tx)
```

#### 699. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10441` → after: `L10441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10441) · [Before (L10441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10441)

```diff
-             const gD = new UD.g(`${this.seed}|${DD}|${zD}|cluster`),
+             const Yp = new Pp.h(`${this.seed}|${pp}|${ip}|cluster`),
```

#### 700. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10455` → after: `L10455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10455) · [Before (L10455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10455)

```diff
-             if (this.scatterClusterCells(DD, BD, zD, hD, rD, gD, nD), !(nD.length < hD.ED))
+             if (this.scatterClusterCells(pp, Up, ip, vp, Sp, Yp, tp), !(tp.length < vp.CO))
```

#### 701. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10461` → after: `L10461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10461) · [Before (L10461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10461)

```diff
-               JD: cD,
+               MO: Lp,
```

#### 702. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10481` → after: `L10481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10481) · [Before (L10481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10481)

```diff
-                     fR: nD.fR
+                     tx: tp.tx
```

#### 703. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10495` → after: `L10495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10495) · [Before (L10495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10495)

```diff
-             this.prefabGenerator = pD, this.seed = void 0, this.CI = void 0, this.biomeSelector = void 0, this.treeGenerator = void 0, this.blockMetadata = void 0, this.oreGenerator = void 0, this.riverbedFeatureGenerator = void 0, this.bedrockId = void 0, this.waterId = void 0,  … [truncated]
+             this.prefabGenerator = Op, this.seed = void 0, this.Qy = void 0, this.biomeSelector = void 0, this.treeGenerator = void 0, this.blockMetadata = void 0, this.oreGenerator = void 0, this.riverbedFeatureGenerator = void 0, this.bedrockId = void 0, this.waterId = void 0,  … [truncated]
```

#### 704. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10498` → after: `L10498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10498) · [Before (L10498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10498)

```diff
-             if (wD + this.CI <= rD.q.bedrockLevel) return {
+             if (cp + this.Qy <= Sp.x.bedrockLevel) return {
```

#### 705. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10501` → after: `L10501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10501) · [Before (L10501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10501)

```diff
-             const MD = new AD.d,
+             const Hp = new Ap.e,
```

#### 706. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10505-L10507` → after: `L10505-L10507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10505-L10507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10505-L10507) · [Before (L10505-L10507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10505-L10507)

```diff
-             if (JD >= wD && OD < wD + this.CI)
-               for (let pD = zD; pD < zD + this.CI; pD++)
-                 for (let cD = sD; cD < sD + this.CI; cD++) {
+             if (ep >= cp && dp < cp + this.Qy)
+               for (let Op = ip; Op < ip + this.Qy; Op++)
+                 for (let Lp = op; Lp < op + this.Qy; Lp++) {
```

#### 707. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10510-L10512` → after: `L10510-L10512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10510-L10512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10510-L10512) · [Before (L10510-L10512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10510-L10512)

```diff
-                     AD = LD.get(pD, cD, KD.h.GroundHeight);
-                   if (AD >= wD && AD < wD + this.CI) {
-                     const gD = LD.get(pD, cD, KD.h.IsLake) === rD.h ? RD.getDryBedBlock(pD, AD, cD) : RD.getTopsoilBlock(pD, AD, cD);
+                     Ap = xp.get(Op, Lp, Ip.f.GroundHeight);
+                   if (Ap >= cp && Ap < cp + this.Qy) {
+                     const Yp = xp.get(Op, Lp, Ip.f.IsLake) === Sp.l ? Dp.getDryBedBlock(Op, Ap, Lp) : Dp.getTopsoilBlock(Op, Ap, Lp);
```

#### 708. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10516-L10518` → after: `L10516-L10518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10516-L10518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10516-L10518) · [Before (L10516-L10518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10516-L10518)

```diff
-             if (JD + 1 >= wD && OD - 4 < wD + this.CI)
-               for (let pD = zD; pD < zD + this.CI; pD++)
-                 for (let rD = sD; rD < sD + this.CI; rD++) {
+             if (ep + 1 >= cp && dp - 4 < cp + this.Qy)
+               for (let Op = ip; Op < ip + this.Qy; Op++)
+                 for (let Sp = op; Sp < op + this.Qy; Sp++) {
```

#### 709. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10521-L10522` → after: `L10521-L10522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10521-L10522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10521-L10522) · [Before (L10521-L10522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10521-L10522)

```diff
-                     RD = LD.get(pD, rD, KD.h.GroundHeight),
-                     AD = Math.min(RD, wD + this.CI);
+                     Dp = xp.get(Op, Sp, Ip.f.GroundHeight),
+                     Ap = Math.min(Dp, cp + this.Qy);
```

#### 710. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10530-L10531` → after: `L10530-L10531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10530-L10531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10530-L10531) · [Before (L10530-L10531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10530-L10531)

```diff
-               for (let wD = Math.max(sD - 4, 0); wD < Math.min(sD, this.CI); wD++) DD.set(zD, wD, KD, this.dirtId);
-               sD >= 0 && sD < this.CI && DD.set(zD, sD, KD, this.grassBlockId)
+               for (let cp = Math.max(op - 4, 0); cp < Math.min(op, this.Qy); cp++) pp.set(ip, cp, Ip, this.dirtId);
+               op >= 0 && op < this.Qy && pp.set(ip, op, Ip, this.grassBlockId)
```

#### 711. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10535-L10536` → after: `L10535-L10536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10535-L10536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10535-L10536) · [Before (L10535-L10536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10535-L10536)

```diff
-               for (let rD = zD; rD < zD + this.CI; rD++)
-                 for (let cD = sD; cD < sD + this.CI; cD++) {
+               for (let Sp = ip; Sp < ip + this.Qy; Sp++)
+                 for (let Lp = op; Lp < op + this.Qy; Lp++) {
```

#### 712. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10538-L10539` → after: `L10538-L10539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10538-L10539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10538-L10539) · [Before (L10538-L10539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10538-L10539)

```diff
-                     RD = LD.get(rD, cD, KD.h.GroundHeight),
-                     AD = Math.min(RD - 4, wD + this.CI),
+                     Dp = xp.get(Sp, Lp, Ip.f.GroundHeight),
+                     Ap = Math.min(Dp - 4, cp + this.Qy),
```

#### 713. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10544` → after: `L10544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10544) · [Before (L10544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10544)

```diff
-                     DD.set(rD - zD, pD - wD, cD - sD, 0 !== KD ? KD : gD)
+                     pp.set(Sp - ip, Op - cp, Lp - op, 0 !== Ip ? Ip : Yp)
```

#### 714. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10548-L10550` → after: `L10548-L10550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10548-L10550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10548-L10550) · [Before (L10548-L10550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10548-L10550)

```diff
-             if (JD - 4 >= wD && this.oreGenerator.addOresToChunk(DD, zD, wD, sD, 4, LD, ID), JD >= wD && (cD.e.addCavesToChunk(DD, zD, wD, sD, LD, fD), kz.addCaveDecorationsToChunk(DD, zD, wD, sD, this.CI, hD)), rD.q.bedrockLevel >= wD && rD.q.bedrockLevel < wD + this.CI)
-               for (let pD = zD; pD < zD + this.CI; pD++)
-                 for (let KD = sD; KD < sD + this.CI; KD++) DD.set(pD - zD, rD.q.bedrockLevel - wD, KD - sD, this.bedrockId);
+             if (ep - 4 >= cp && this.oreGenerator.addOresToChunk(pp, ip, cp, op, 4, xp, yp), ep >= cp && (Lp.c.addCavesToChunk(pp, ip, cp, op, xp, Wp), Fi.addCaveDecorationsToChunk(pp, ip, cp, op, this.Qy, vp)), Sp.x.bedrockLevel >= cp && Sp.x.bedrockLevel < cp + this.Qy)
+               for (let Op = ip; Op < ip + this.Qy; Op++)
+                 for (let Ip = op; Ip < op + this.Qy; Ip++) pp.set(Op - ip, Sp.x.bedrockLevel - cp, Ip - op, this.bedrockId);
```

#### 715. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10553-L10555` → after: `L10553-L10555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10553-L10555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10553-L10555) · [Before (L10553-L10555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10553-L10555)

```diff
-               for (let KD = zD; KD < zD + this.CI; KD++)
-                 for (let rD = wD; rD < wD + this.CI; rD++)
-                   for (let LD = sD; LD < sD + this.CI; LD++) {
+               for (let Ip = ip; Ip < ip + this.Qy; Ip++)
+                 for (let Sp = cp; Sp < cp + this.Qy; Sp++)
+                   for (let xp = op; xp < op + this.Qy; xp++) {
```

#### 716. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10566-L10567` → after: `L10566-L10567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10566-L10567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10566-L10567) · [Before (L10566-L10567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10566-L10567)

```diff
-               for (let wD = Math.max(KD, 0); wD < Math.min(rD, this.CI); wD++) DD.set(zD, wD, sD, this.waterId);
-               rD >= 0 && rD < this.CI && DD.set(zD, rD, sD, XD[pD + 4])
+               for (let cp = Math.max(Ip, 0); cp < Math.min(Sp, this.Qy); cp++) pp.set(ip, cp, op, this.waterId);
+               Sp >= 0 && Sp < this.Qy && pp.set(ip, Sp, op, mp[Op + 4])
```

#### 717. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10570-L10575` → after: `L10570-L10575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10570-L10575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10570-L10575) · [Before (L10570-L10575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10570-L10575)

```diff
-             if (this.addSurfaceBlocks(DD, wD, nD.lilyPads), ED && JD >= wD && OD < wD + this.CI)
-               for (let cD = zD; cD < zD + this.CI; cD++)
-                 for (let gD = sD; gD < sD + this.CI; gD++) {
-                   const RD = LD.get(cD, gD, KD.h.WaterHeight),
-                     AD = LD.get(cD, gD, KD.h.GroundHeight);
-                   if (RD !== rD.n && AD >= wD && AD < wD + this.CI)
+             if (this.addSurfaceBlocks(pp, cp, tp.lilyPads), jp && ep >= cp && dp < cp + this.Qy)
+               for (let Lp = ip; Lp < ip + this.Qy; Lp++)
+                 for (let Yp = op; Yp < op + this.Qy; Yp++) {
+                   const Dp = xp.get(Lp, Yp, Ip.f.WaterHeight),
+                     Ap = xp.get(Lp, Yp, Ip.f.GroundHeight);
+                   if (Dp !== Sp.u && Ap >= cp && Ap < cp + this.Qy)
```

#### 718. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10579` → after: `L10579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10579) · [Before (L10579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10579)

```diff
-                       if ((0, pD.M)(KD, cD, gD) < 100) VD === KD[0] && CD === KD[1] || (VD = KD[0], CD = KD[1], xD = new UD.g(`${this.seed}${VD}${CD}`).next() < .3 ? this.chalkId : this.clayId), DD.set(cD - zD, AD - wD, gD - sD, xD), AD - 1 >= wD && DD.set(cD - zD, AD - 1 - wD, g … [truncated]
+                       if ((0, Op.K)(Ip, Lp, Yp) < 100) Rp === Ip[0] && Mp === Ip[1] || (Rp = Ip[0], Mp = Ip[1], Cp = new Pp.h(`${this.seed}${Rp}${Mp}`).next() < .3 ? this.chalkId : this.clayId), pp.set(Lp - ip, Ap - cp, Yp - op, Cp), Ap - 1 >= cp && pp.set(Lp - ip, Ap - 1 - cp, Y … [truncated]
```

#### 719. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10588-L10591` → after: `L10588-L10591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10588-L10591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10588-L10591) · [Before (L10588-L10591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10588-L10591)

```diff
-               for (let KD = zD; KD < zD + this.CI; KD++)
-                 for (let rD = wD; rD < wD + this.CI; rD++)
-                   for (let LD = sD; LD < sD + this.CI; LD++) {
-                     const cD = PD.b.getBlockFromFixedPointPrefab(KD, rD, LD, pD);
+               for (let Ip = ip; Ip < ip + this.Qy; Ip++)
+                 for (let Sp = cp; Sp < cp + this.Qy; Sp++)
+                   for (let xp = op; xp < op + this.Qy; xp++) {
+                     const Lp = qp.d.getBlockFromFixedPointPrefab(Ip, Sp, xp, Op);
```

#### 720. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10612` → after: `L10612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10612) · [Before (L10612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10612)

```diff
-               sD >= 0 && sD < this.CI && DD.set(wD[pD], sD, wD[pD + 2], wD[pD + 3])
+               op >= 0 && op < this.Qy && pp.set(cp[Op], op, cp[Op + 2], cp[Op + 3])
```

#### 721. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10626` → after: `L10626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10626) · [Before (L10626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10626)

```diff
-             this.CI = DD, this.biomeSelector = zD, this.seed = wD, this.random = new UD.g(""), this.lilyPadId = void 0, this.lilyPadId = pD["Lily Pad"].id
+             this.Qy = pp, this.biomeSelector = ip, this.seed = cp, this.random = new Pp.h(""), this.lilyPadId = void 0, this.lilyPadId = Op["Lily Pad"].id
```

#### 722. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10636-L10637` → after: `L10636-L10637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10636-L10637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10636-L10637) · [Before (L10636-L10637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10636-L10637)

```diff
-             for (let GD = DD; GD < DD + this.CI; GD++)
-               for (let hD = zD; hD < zD + this.CI; hD++) {
+             for (let wp = pp; wp < pp + this.Qy; wp++)
+               for (let vp = ip; vp < ip + this.Qy; vp++) {
```

#### 723. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10639-L10640` → after: `L10639-L10640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10639-L10640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10639-L10640) · [Before (L10639-L10640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10639-L10640)

```diff
-                   MD = wD.getOrGenerate(GD, hD, KD.h.GroundHeight),
-                   OD = wD.getOrGenerate(GD, hD, KD.h.WaterHeight);
+                   Hp = cp.getOrGenerate(wp, vp, Ip.f.GroundHeight),
+                   dp = cp.getOrGenerate(wp, vp, Ip.f.WaterHeight);
```

#### 724. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10644-L10645` → after: `L10644-L10645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10644-L10645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10644-L10645) · [Before (L10644-L10645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10644-L10645)

```diff
-                 if (OD !== rD.n) {
-                   BD = !0, MD < OD && gD.push(JD, ED, MD + 1, OD, nD.topwaterBlockType), nD.hasScatteredLakes && 1 === wD.getOrGenerate(GD, hD, KD.h.IsLake) && (this.random.reseed(`${GD}|${hD}|${this.seed}lilyPad`), this.random.next() < .08 && this.isInsideWater(GD, hD, wD) && AD … [truncated]
+                 if (dp !== Sp.u) {
+                   Up = !0, Hp < dp && Yp.push(ep, jp, Hp + 1, dp, tp.topwaterBlockType), tp.hasScatteredLakes && 1 === cp.getOrGenerate(wp, vp, Ip.f.IsLake) && (this.random.reseed(`${wp}|${vp}|${this.seed}lilyPad`), this.random.next() < .08 && this.isInsideWater(wp, vp, cp) && Ap … [truncated]
```

#### 725. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10649-L10650` → after: `L10649-L10650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10649-L10650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10649-L10650) · [Before (L10649-L10650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10649-L10650)

```diff
-                 if (nD.hasScatteredLakes && this.isBesideLake(GD, hD, wD) && (this.random.reseed(`${GD}|${hD}|${this.seed}oasisShore`), this.random.next() < .85 && (RD.push(JD, MD, ED), QD = this.biomeSelector.baseBiome.floraGenerator)), !cD.e.isInCave(GD, MD, hD, pD) && !PD.b.is … [truncated]
-                   for (let wD = MD + 1; wD <= MD + nD.maxFloraHeight; wD += this.CI) UD.startY = wD, QD.addBiomeFloraToColumn(UD, DD, zD, GD, wD, hD, MD)
+                 if (tp.hasScatteredLakes && this.isBesideLake(wp, vp, cp) && (this.random.reseed(`${wp}|${vp}|${this.seed}oasisShore`), this.random.next() < .85 && (Dp.push(ep, Hp, jp), kp = this.biomeSelector.baseBiome.floraGenerator)), !Lp.c.isInCave(wp, Hp, vp, Op) && !qp.d.is … [truncated]
+                   for (let cp = Hp + 1; cp <= Hp + tp.maxFloraHeight; cp += this.Qy) Pp.startY = cp, kp.addBiomeFloraToColumn(Pp, pp, ip, wp, cp, vp, Hp)
```

#### 726. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10663` → after: `L10663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10663) · [Before (L10663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10663)

```diff
-             return wD.getOrGenerate(DD + 1, zD, KD.h.WaterHeight) !== rD.n && wD.getOrGenerate(DD - 1, zD, KD.h.WaterHeight) !== rD.n && wD.getOrGenerate(DD, zD + 1, KD.h.WaterHeight) !== rD.n && wD.getOrGenerate(DD, zD - 1, KD.h.WaterHeight) !== rD.n
+             return cp.getOrGenerate(pp + 1, ip, Ip.f.WaterHeight) !== Sp.u && cp.getOrGenerate(pp - 1, ip, Ip.f.WaterHeight) !== Sp.u && cp.getOrGenerate(pp, ip + 1, Ip.f.WaterHeight) !== Sp.u && cp.getOrGenerate(pp, ip - 1, Ip.f.WaterHeight) !== Sp.u
```

#### 727. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10669` → after: `L10669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10669) · [Before (L10669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10669)

```diff
-             return wD.getOrGenerate(DD, zD, KD.h.WaterHeight) !== rD.n && 1 === wD.getOrGenerate(DD, zD, KD.h.IsLake)
+             return cp.getOrGenerate(pp, ip, Ip.f.WaterHeight) !== Sp.u && 1 === cp.getOrGenerate(pp, ip, Ip.f.IsLake)
```

#### 728. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10672` → after: `L10672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10672) · [Before (L10672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10672)

```diff
-         var uz = wD(39616);
+         var zi = cp(39881);
```

#### 729. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10677` → after: `L10677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10677) · [Before (L10677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10677)

```diff
-             if (this.CI = DD, this.hashChunkContents = AD, this.maxTreeRadius = 3, this.prefabSize = 40, this.maxPrefabGroundingRadius = 4, this.treeGenerator = void 0, this.prefabGenerator = void 0, this.caveGenerator = void 0, this.caveDecorationGenerator = void 0, this.biomeSe … [truncated]
+             if (this.Qy = pp, this.hashChunkContents = Ap, this.maxTreeRadius = 3, this.prefabSize = 40, this.maxPrefabGroundingRadius = 4, this.treeGenerator = void 0, this.prefabGenerator = void 0, this.caveGenerator = void 0, this.caveDecorationGenerator = void 0, this.biomeSe … [truncated]
```

#### 730. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10679` → after: `L10679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10679) · [Before (L10679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10679)

```diff
-               vz = new Bz.e("chunk columns", DD, 4e4)
+               si = new vi.b("chunk columns", pp, 4e4)
```

#### 731. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10681-L10682` → after: `L10681-L10682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10681-L10682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10681-L10682) · [Before (L10681-L10682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10681-L10682)

```diff
-             this.chunkColumnInfos = vz.partition(), this.caveGenerator = new cD.e(sD, DD, zD, null !== (UD = null === gD || void 0 === gD ? void 0 : gD.AD.fD) && void 0 !== UD ? UD : "Lava");
-             const MD = new Xz(zD, sD, DD, null !== (fD = null === gD || void 0 === gD ? void 0 : gD.iD) && void 0 !== fD ? fD : [...Qz, ...null !== (ID = null === RD || void 0 === RD ? void 0 : RD.eD) && void 0 !== ID ? ID : []]),
+             this.chunkColumnInfos = si.partition(), this.caveGenerator = new Lp.c(op, pp, ip, null !== (Pp = null === Yp || void 0 === Yp ? void 0 : Yp.HO.eO) && void 0 !== Pp ? Pp : "Lava");
+             const Hp = new Ri(ip, op, pp, null !== (Wp = null === Yp || void 0 === Yp ? void 0 : Yp.aO) && void 0 !== Wp ? Wp : [...mi, ...null !== (yp = null === Dp || void 0 === Dp ? void 0 : Dp.sO) && void 0 !== yp ? yp : []]),
```

#### 732. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10684` → after: `L10684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10684) · [Before (L10684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10684)

```diff
-                 CI: DD,
+                 Qy: pp,
```

#### 733. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10692-L10695` → after: `L10692-L10695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10692-L10695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10692-L10695) · [Before (L10692-L10695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10692-L10695)

```diff
-               JD = null !== (BD = null === gD || void 0 === gD ? void 0 : gD.xD) && void 0 !== BD ? BD : null,
-               ED = null !== (GD = null === RD || void 0 === RD ? void 0 : RD.buildBiomes) && void 0 !== GD ? GD : null,
-               QD = null !== JD ? (0, Vz.e)(JD, OD) : null !== ED ? this.buildTerrainBiomes(ED, OD) : (0, Vz.i)(OD);
-             this.biomeSelector = new Vz.d(this, MD, sD, DD, zD, QD), this.treeGenerator = new fz(this, this.biomeSelector, DD, sD, zD), this.fixedPointPrefabTracker = new PD.b(LD, DD), this.prefabGenerator = new sz({
+               ep = null !== (Up = null === Yp || void 0 === Yp ? void 0 : Yp.BO) && void 0 !== Up ? Up : null,
+               jp = null !== (wp = null === Dp || void 0 === Dp ? void 0 : Dp.buildBiomes) && void 0 !== wp ? wp : null,
+               kp = null !== ep ? (0, qi.h)(ep, dp) : null !== jp ? this.buildTerrainBiomes(jp, dp) : (0, qi.k)(dp);
+             this.biomeSelector = new qi.e(this, Hp, op, pp, ip, kp), this.treeGenerator = new Ui(this, this.biomeSelector, pp, op, ip), this.fixedPointPrefabTracker = new qp.d(xp, pp), this.prefabGenerator = new Si({
```

#### 734. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10697` → after: `L10697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10697) · [Before (L10697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10697)

```diff
-               CI: DD,
+               Qy: pp,
```

#### 735. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10701` → after: `L10701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10701) · [Before (L10701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10701)

```diff
-                 [KD.o.SURFACE]: {
+                 [Ip.p.SURFACE]: {
```

#### 736. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10714` → after: `L10714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10714) · [Before (L10714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10714)

```diff
-                 [KD.o.UNDERGROUND]: {
+                 [Ip.p.UNDERGROUND]: {
```

#### 737. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10725` → after: `L10725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10725) · [Before (L10725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10725)

```diff
-             }), this.noWaterHeightmapGenerator = new uz.e((0, uz.i)(sD)), this.heightmapPerturb = new pD.j([{
+             }), this.noWaterHeightmapGenerator = new zi.e((0, zi.h)(op)), this.heightmapPerturb = new Op.j([{
```

#### 738. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10734` → after: `L10734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10734) · [Before (L10734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10734)

```diff
-             }], `${sD}HeightmapPerturb`);
+             }], `${op}HeightmapPerturb`);
```

#### 739. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10740` → after: `L10740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10740) · [Before (L10740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10740)

```diff
-             this.waterBodyGenerator = new Oz(this.biomeSelector, this.noWaterHeightmapGenerator, sD, DD, XD, this.needOutsideWaterDist, rD, null === (hD = null === gD || void 0 === gD ? void 0 : gD.RD) || void 0 === hD || hD), this.caveDecorationGenerator = new kz(zD, DD, sD, nul … [truncated]
+             this.waterBodyGenerator = new ui(this.biomeSelector, this.noWaterHeightmapGenerator, op, pp, mp, this.needOutsideWaterDist, Sp, null === (vp = null === Yp || void 0 === Yp ? void 0 : Yp.tO) || void 0 === vp || vp), this.caveDecorationGenerator = new Fi(ip, pp, op, nul … [truncated]
```

#### 740. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10759` → after: `L10759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10759) · [Before (L10759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10759)

```diff
-             const wD = this.CI,
+             const cp = this.Qy,
```

#### 741. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10777` → after: `L10777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10777) · [Before (L10777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10777)

```diff
-               if ((null !== (sD = pD.get(KD.key)) && void 0 !== sD ? sD : KD) !== KD) throw new Error(`A world-gen terrain built two biomes keyed "${KD.key}"`);
+               if ((null !== (op = Op.get(Ip.key)) && void 0 !== op ? op : Ip) !== Ip) throw new Error(`A world-gen terrain built two biomes keyed "${Ip.key}"`);
```

#### 742. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10787-L10788` → after: `L10787-L10788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10787-L10788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10787-L10788) · [Before (L10787-L10788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10787-L10788)

```diff
-               const DD = `${Math.floor(cD.x/this.CI)}|${Math.floor(cD.z/this.CI)}`,
-                 zD = null !== (rD = KD.get(DD)) && void 0 !== rD ? rD : [];
+               const pp = `${Math.floor(Lp.x/this.Qy)}|${Math.floor(Lp.z/this.Qy)}`,
+                 ip = null !== (Sp = Ip.get(pp)) && void 0 !== Sp ? Sp : [];
```

#### 743. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10793-L10794` → after: `L10793-L10794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10793-L10794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10793-L10794) · [Before (L10793-L10794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10793-L10794)

```diff
-               const DD = Math.floor(cD[0].x / this.CI) * this.CI,
-                 zD = Math.floor(cD[0].z / this.CI) * this.CI,
+               const pp = Math.floor(Lp[0].x / this.Qy) * this.Qy,
+                 ip = Math.floor(Lp[0].z / this.Qy) * this.Qy,
```

#### 744. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10815` → after: `L10815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10815) · [Before (L10815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10815)

```diff
-                   pD: gD.prefab.name
+                   DO: Yp.prefab.name
```

#### 745. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10848` → after: `L10848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10848) · [Before (L10848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10848)

```diff
-               RD = pD.getOrGenerate(DD + Math.floor(this.CI / 2), zD + Math.floor(this.CI / 2))[0].biome.oreGenerator.getOreBlocksForChunk(DD, zD),
+               Dp = Op.getOrGenerate(pp + Math.floor(this.Qy / 2), ip + Math.floor(this.Qy / 2))[0].biome.oreGenerator.getOreBlocksForChunk(pp, ip),
```

#### 746. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10866` → after: `L10866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10866) · [Before (L10866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10866)

```diff
-             return pD.t.create(this.CI, [DD, zD], this.biomeSelector)
+             return Op.t.create(this.Qy, [pp, ip], this.biomeSelector)
```

#### 747. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10869-L10870` → after: `L10869-L10870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10869-L10870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10869-L10870) · [Before (L10869-L10870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10869-L10870)

```diff
-             const rD = new uz.b(wD, sD, this.noWaterHeightmapGenerator, this.heightmapPerturb, this.waterBodyGenerator);
-             return pD.r.create(this.CI, [DD, zD], KD.h.NumFields, rD)
+             const Sp = new zi.d(cp, op, this.noWaterHeightmapGenerator, this.heightmapPerturb, this.waterBodyGenerator);
+             return Op.q.create(this.Qy, [pp, ip], Ip.f.NumFields, Sp)
```

#### 748. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10874` → after: `L10874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10874) · [Before (L10874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10874)

```diff
-       39625: (DD, zD, wD) => {
+       39890: (pp, ip, cp) => {
```

#### 749. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10876-L10877` → after: `L10876-L10877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10876-L10877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10876-L10877) · [Before (L10876-L10877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10876-L10877)

```diff
-           e: () => ZD,
-           i: () => VD,
+           c: () => bp,
+           g: () => Rp,
```

#### 750. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10880-L10881` → after: `L10881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10881) · [Before (L10880-L10881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10880-L10881)

```diff
-           p: () => bD,
-           r: () => iD,
+           q: () => Bp,
```

#### 751. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10883-L10889` → after: `L10883-L10889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10883-L10889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10883-L10889) · [Before (L10883-L10889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10883-L10889)

```diff
-           w: () => OD,
-           A: () => MD,
-           D: () => ED,
-           F: () => BD,
-           G: () => JD,
-           J: () => nD,
-           M: () => hD
+           u: () => dp,
+           x: () => Hp,
+           z: () => jp,
+           B: () => Up,
+           E: () => ep,
+           H: () => tp,
+           K: () => vp
```

#### 752. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10891` → after: `L10891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10891) · [Before (L10891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10891)

```diff
-         var pD = wD(2839),
+         var Op = cp(2937),
```

#### 753. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10904` → after: `L10904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10904) · [Before (L10904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10904)

```diff
-             const zD = "function" == typeof DD ? DD : function(DD) {
+             const ip = "function" == typeof pp ? pp : function(pp) {
```

#### 754. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11113` → after: `L11113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11113) · [Before (L11113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11113)

```diff
-         var ID = wD(39633);
+         var yp = cp(39894);
```

#### 755. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11142` → after: `L11142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11142) · [Before (L11142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11142)

```diff
-             HR: nD(DD, KD, rD),
+             Yx: tp(pp, Ip, Sp),
```

#### 756. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11173` → after: `L11173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11173) · [Before (L11173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11173)

```diff
-             for (let wD = 0; wD < DD.length; wD++) this._simplexes.push(new fD(`${zD}${wD}`))
+             for (let cp = 0; cp < pp.length; cp++) this._simplexes.push(new Wp(`${ip}${cp}`))
```

#### 757. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11198` → after: `L11198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11198) · [Before (L11198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11198)

```diff
-             for (let sD = 0; sD < DD.length; sD++) this._simplexes.push(new fD(`${wD}${sD}`));
+             for (let op = 0; op < pp.length; op++) this._simplexes.push(new Wp(`${cp}${op}`));
```

#### 758. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11206` → after: `L11206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11206) · [Before (L11206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11206)

```diff
-               if (wD - this.remainingAmplitudes[pD] > this.threshold.high || wD + this.remainingAmplitudes[pD] < this.threshold.low) return ID.b;
+               if (cp - this.remainingAmplitudes[Op] > this.threshold.high || cp + this.remainingAmplitudes[Op] < this.threshold.low) return yp.e;
```

#### 759. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11334` → after: `L11334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11334) · [Before (L11334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11334)

```diff
-             if (void 0 === pD) throw new Error(`Number not found for x=${DD}, z=${zD}, thirdIndex=${wD}`);
+             if (void 0 === Op) throw new Error(`Number not found for x=${pp}, z=${ip}, thirdIndex=${cp}`);
```

#### 760. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11383` → after: `L11383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11383) · [Before (L11383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11383)

```diff
-             if (void 0 === sD) throw new Error(`Number not found for x=${DD}, z=${zD}, thirdIndex=${wD}, fourthIndex=${pD}`);
+             if (void 0 === op) throw new Error(`Number not found for x=${pp}, z=${ip}, thirdIndex=${cp}, fourthIndex=${Op}`);
```

#### 761. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11413` → after: `L11413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11413) · [Before (L11413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11413)

```diff
-       39633: (DD, zD, wD) => {
+       39894: (pp, ip, cp) => {
```

#### 762. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11415-L11421` → after: `L11415-L11421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11415-L11421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11415-L11421) · [Before (L11415-L11421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11415-L11421)

```diff
-           b: () => cD,
-           f: () => rD,
-           h: () => gD,
-           k: () => KD,
-           m: () => LD,
-           n: () => sD,
-           q: () => pD
+           e: () => Lp,
+           i: () => Sp,
+           l: () => Yp,
+           o: () => Ip,
+           r: () => xp,
+           u: () => op,
+           x: () => Op
```

#### 763. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11434` → after: `L11434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11434) · [Before (L11434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11434)

```diff
-       39635: (DD, zD, wD) => {
+       39903: (pp, ip, cp) => {
```

#### 764. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11436` → after: `L11436-L11437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11436-L11437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11436-L11437) · [Before (L11436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11436)

```diff
-           d: () => sD,
+           e: () => op,
+           f: () => Op,
```

#### 765. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11440-L11441` → after: `L11440-L11441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11440-L11441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11440-L11441) · [Before (L11440-L11441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11440-L11441)

```diff
-           o: () => rD,
-           r: () => KD
+           p: () => Sp,
+           s: () => Ip
```

#### 766. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11460` → after: `L11460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11460) · [Before (L11460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11460)

```diff
-       4263: (DD, zD, wD) => {
+       4346: (pp, ip, cp) => {
```

#### 767. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11462-L11465` → after: `L11462-L11465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11462-L11465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11462-L11465) · [Before (L11462-L11465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11462-L11465)

```diff
-           c: () => cD,
-           e: () => KD,
-           g: () => pD,
-           k: () => LD,
+           d: () => Lp,
+           f: () => Ip,
+           h: () => Op,
+           i: () => xp,
```

#### 768. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11493` → after: `L11493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11493) · [Before (L11493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11493)

```diff
-             if (this.distribution = void 0, DD.length <= 0) throw new Error(`Distribution must have at least one item: ${JSON.stringify(DD)}`);
+             if (this.distribution = void 0, pp.length <= 0) throw new Error(`Distribution must have at least one item: ${JSON.stringify(pp)}`);
```

#### 769. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11498` → after: `L11498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11498) · [Before (L11498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11498)

```diff
-               if (zD.has(pD)) throw new Error(`Values must be unique: ${JSON.stringify(DD)}`);
+               if (ip.has(Op)) throw new Error(`Values must be unique: ${JSON.stringify(pp)}`);
```

#### 770. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11501` → after: `L11501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11501) · [Before (L11501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11501)

```diff
-               if (KD <= 0) throw new Error(`Weights must be positive: ${JSON.stringify(DD)}`);
+               if (Ip <= 0) throw new Error(`Weights must be positive: ${JSON.stringify(pp)}`);
```

#### 771. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11526` → after: `L11526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11526) · [Before (L11526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11526)

```diff
-             if (this.offset = void 0, this.multiplier = void 0, DD > zD) throw new Error(`Min must be less than or equal to Max, but Min=${DD} and Max=${zD}`);
+             if (this.offset = void 0, this.multiplier = void 0, pp > ip) throw new Error(`Min must be less than or equal to Max, but Min=${pp} and Max=${ip}`);
```

#### 772. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11536` → after: `L11536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11536) · [Before (L11536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11536)

```diff
-             if (this.uniformRealDistribution = void 0, this.uniformRealDistribution = new rD(DD, zD, wD), !Number.isInteger(DD) || !Number.isInteger(zD)) throw new Error(`Min and Max must be integers, but Min=${DD} and Max=${zD}`)
+             if (this.uniformRealDistribution = void 0, this.uniformRealDistribution = new Sp(pp, ip, cp), !Number.isInteger(pp) || !Number.isInteger(ip)) throw new Error(`Min and Max must be integers, but Min=${pp} and Max=${ip}`)
```

#### 773. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11552` → after: `L11552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11552) · [Before (L11552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11552)

```diff
-       619: (DD, zD, wD) => {
+       640: (pp, ip, cp) => {
```

#### 774. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11554-L11556` → after: `L11554-L11558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11554-L11558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11554-L11558) · [Before (L11554-L11556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11554-L11556)

```diff
-           B: () => cD,
-           L: () => AD,
-           c: () => LD,
+           A: () => Wp,
+           C: () => yp,
+           G: () => Lp,
+           Q: () => Ap,
+           d: () => xp,
```

#### 775. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11558-L11561` → after: `L11560-L11561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11560-L11561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11560-L11561) · [Before (L11558-L11561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11558-L11561)

```diff
-           g: () => sD,
-           p: () => KD,
-           q: () => UD,
-           r: () => gD,
+           j: () => op,
+           t: () => Ip,
```

#### 776. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11563` → after: `L11563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11563) · [Before (L11563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11563)

```diff
-           w: () => ID
+           z: () => Yp
```

#### 777. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11565` → after: `L11565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11565) · [Before (L11565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11565)

```diff
-         var pD = wD(625);
+         var Op = cp(643);
```

#### 778. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11595` → after: `L11595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11595) · [Before (L11595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11595)

```diff
-         pD.e, Number(atob("NQ==")), Number(atob("MTM="));
+         Op.c, Number(atob("NQ==")), Number(atob("MTM="));
```

#### 779. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11603` → after: `L11603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11603) · [Before (L11603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11603)

```diff
-       625: (DD, zD, wD) => {
+       643: (pp, ip, cp) => {
```

#### 780. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11605` → after: `L11605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11605) · [Before (L11605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11605)

```diff
-           e: () => pD
+           c: () => Op
```

#### 781. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11607` → after: `L11607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11607) · [Before (L11607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11607)

```diff
-         const pD = 871
+         const Op = 872
```

#### 782. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11609-L11613` → after: `L11609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11609) · [Before (L11609-L11613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11609-L11613)

```diff
-       227: (DD, zD, wD) => {
-         var pD = {
-           "./localConfigValues.ts.clientRelease": 234
-         };
- 
+       222: pp => {
```

#### 783. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11615-L11624` → after: `L11611-L11612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11611-L11612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11611-L11612) · [Before (L11615-L11624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11615-L11624)

```diff
-           var zD = KD(DD);
-           return wD(zD)
-         }
- 
-         function KD(DD) {
-           if (!wD.o(pD, DD)) {
-             var zD = new Error("Cannot find module '" + DD + "'");
-             throw zD.code = "MODULE_NOT_FOUND", zD
-           }
-           return pD[DD]
+           var ip = new Error("Cannot find module '" + pp + "'");
+           throw ip.code = "MODULE_NOT_FOUND", ip
```

#### 784. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11626-L11631` → after: `L11614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11614) · [Before (L11626-L11631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11626-L11631)

```diff
-         sD.keys = function() {
-           return Object.keys(pD)
-         }, sD.resolve = KD, DD.exports = sD, sD.id = 227
-       },
-       234: (DD, zD, wD) => {
-         DD.exports = wD.p + "static/media/localConfigValues.ts.3f6ee800434514cb12b7.clientRelease"
+         ip.keys = () => [], ip.resolve = ip, ip.id = 222, pp.exports = ip
```

#### 785. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11654-L11659` → after: `L11637-L11642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11637-L11642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11637-L11642) · [Before (L11654-L11659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11654-L11659)

```diff
-   }, wD.f = {}, wD.e = DD => Promise.all(Object.keys(wD.f).reduce(((zD, pD) => (wD.f[pD](DD, zD), zD)), [])), wD.u = DD => "static/js/tz47m9." + (69 === DD ? "worldgenTables" : DD) + "." + {
-     69: "0211c1fa",
-     72: "1e626967",
-     73: "a76e93bb",
-     74: "865b0d48",
-     75: "c22f39ed"
+   }, cp.f = {}, cp.e = pp => Promise.all(Object.keys(cp.f).reduce(((ip, Op) => (cp.f[Op](pp, ip), ip)), [])), cp.u = pp => "static/js/sn3sfj." + (70 === pp ? "worldgenTables" : pp) + "." + {
+     70: "c1382818",
+     73: "86a4c018",
+     74: "aeb128b4",
+     75: "b034e052",
+     76: "b886153e"
```

#### 786. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11666` → after: `L11649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11649) · [Before (L11666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11666)

```diff
-   }, wD.j = 70, wD.p = "/", (() => {
+   }, cp.j = 71, cp.p = "/", (() => {
```

#### 787. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11699` → after: `L11682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11682) · [Before (L11699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11699)

```diff
-         70: 0
+         71: 0
```

#### 788. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11734` → after: `L11717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11717) · [Before (L11734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11734)

```diff
-       wD = zD < 0 ? this.length + zD : zD;
+       cp = ip < 0 ? this.length + ip : ip;
```

#### 789. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11749-L11751` → after: `L11732-L11734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11732-L11734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11732-L11734) · [Before (L11749-L11751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11749-L11751)

```diff
-     VG: () => ND,
-     PG: () => ZD,
-     UA: () => yD,
+     Jw: () => fp,
+     Bw: () => bp,
+     dA: () => hp,
```

#### 790. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11754-L11758` → after: `L11737-L11743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11737-L11743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11737-L11743) · [Before (L11754-L11758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11754-L11758)

```diff
-     fA: () => kD,
-     IA: () => mD,
-     BA: () => eD,
-     hA: () => oD,
-     nA: () => aD,
+     eA: () => ap,
+     uA: () => np,
+     jA: () => Fp,
+     kA: () => gp,
+     mA: () => Gp,
+     RA: () => rp,
+     qA: () => Zp,
```

#### 791. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11760` → after: `L11745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11745) · [Before (L11760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11760)

```diff
-     OA: () => vD,
+     lA: () => sp,
```

#### 792. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11762-L11764` → after: `L11747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11747) · [Before (L11762-L11764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11762-L11764)

```diff
-     VA: () => FD,
-     CA: () => YD,
-     xA: () => HD
+     BA: () => Vp
```

#### 793. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11768-L11769` → after: `L11751-L11754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11751-L11754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11751-L11754) · [Before (L11768-L11769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11768-L11769)

```diff
-   sD(String.prototype, "at", KD);
-   var gD = wD(2839),
+   op(String.prototype, "at", Ip), op(String.prototype, "toWellFormed", (function() {
+     return String(this).replace(/[\uD800-\uDFFF]/gu, "\ufffd")
+   }));
+   var Yp = cp(2937),
```

#### 794. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11804` → after: `L11789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11789) · [Before (L11804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11804)

```diff
-     return null === BD ? "not failed" : `${BD}: ${(DD=GD)instanceof Error?`${DD.name}: ${DD.message}`:String(DD)}`;
+     return null === Up ? "not failed" : `${Up}: ${(pp=wp)instanceof Error?`${pp.name}: ${pp.message}`:String(pp)}`;
```

#### 795. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11809` → after: `L11794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11794) · [Before (L11809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11809)

```diff
-     if (!VD()) throw new Error(`Bloxd wasm is not ready (${PD()}): check isBloxdWasmReady() first`);
+     if (!Rp()) throw new Error(`Bloxd wasm is not ready (${qp()}): check isBloxdWasmReady() first`);
```

#### 796. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11847` → after: `L11832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11832) · [Before (L11847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11847)

```diff
-       VA: sD
+       lA: op
```

#### 797. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11868` → after: `L11853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11853) · [Before (L11868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11868)

```diff
-     ID = "failed", BD = zD, GD = DD, console.error(`Bloxd wasm failed (${zD}):`, DD);
+     yp = "failed", Up = ip, wp = pp, console.error(`Bloxd wasm failed (${ip}):`, pp);
```

#### 798. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11887-L11888` → after: `L11872-L11873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11872-L11873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11872-L11873) · [Before (L11887-L11888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11887-L11888)

```diff
-       reserveUpFront: zD => DD().hA(zD),
-       reserveAhead: zD => DD().BA(zD),
+       reserveUpFront: ip => pp().kA(ip),
+       reserveAhead: ip => pp().jA(ip),
```

#### 799. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11890` → after: `L11875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11875) · [Before (L11890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11890)

```diff
-         DD().nA(zD)
+         pp().mA(ip)
```

#### 800. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11892` → after: `L11877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11877) · [Before (L11892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11892)

```diff
-       lowWater: () => lD[DD().IA()] ?? "none",
+       lowWater: () => Np[pp().uA()] ?? "none",
```

#### 801. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11915-L11917` → after: `L11900-L11902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11900-L11902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11900-L11902) · [Before (L11915-L11917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11915-L11917)

```diff
-       }(DD().MA()),
-       takeBallast: () => DD().OA(),
-       takePressure: () => DD().JA()
+       }(pp().RA()),
+       takeBallast: () => pp().qA(),
+       takePressure: () => pp().MA()
```

#### 802. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11927` → after: `L11912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11912) · [Before (L11927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11927)

```diff
-       hz.w7ja(DD, 0)
+       Hi.MOKx(pp, 0)
```

#### 803. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11930` → after: `L11915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11915) · [Before (L11930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11930)

```diff
-       const zD = gz(DD, hz.a6rW, hz.soPk),
+       const ip = Ai(pp, Hi.t9Yx, Hi.wkgK),
```

#### 804. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11932` → after: `L11917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11917) · [Before (L11932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11932)

```diff
-       hz.vHFB(this.__wbg_ptr, zD, wD)
+       Hi.OBfH(this.__wbg_ptr, ip, cp)
```

#### 805. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11935` → after: `L11920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11920) · [Before (L11935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11935)

```diff
-       return hz.gOAO(this.__wbg_ptr) >>> 0
+       return Hi.YpWd(this.__wbg_ptr) >>> 0
```

#### 806. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11938` → after: `L11923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11923) · [Before (L11938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11938)

```diff
-       const DD = hz.keJk();
+       const pp = Hi.g93G();
```

#### 807. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11942` → after: `L11927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11927) · [Before (L11942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11942)

```diff
-       return hz.okRs(this.__wbg_ptr) >>> 0
+       return Hi.MjiF(this.__wbg_ptr) >>> 0
```

#### 808. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11945` → after: `L11930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11930) · [Before (L11945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11945)

```diff
-       return hz.OgxQ(this.__wbg_ptr) >>> 0
+       return Hi.OS8C(this.__wbg_ptr) >>> 0
```

#### 809. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11948` → after: `L11933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11933) · [Before (L11948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11948)

```diff
-       return hz.U057(this.__wbg_ptr) >>> 0
+       return Hi.MOpJ(this.__wbg_ptr) >>> 0
```

#### 810. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11959` → after: `L11944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11944) · [Before (L11959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11959)

```diff
-       hz.jIJl(DD, 0)
+       Hi.NbEr(pp, 0)
```

#### 811. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11962` → after: `L11947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11947) · [Before (L11962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11962)

```diff
-       return hz.fKME(this.__wbg_ptr, DD) >>> 0
+       return Hi.kBQ4(this.__wbg_ptr, pp) >>> 0
```

#### 812. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11965` → after: `L11950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11950) · [Before (L11965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11965)

```diff
-       return hz.mkqj(this.__wbg_ptr, DD) >>> 0
+       return Hi.abw8(this.__wbg_ptr, pp) >>> 0
```

#### 813. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11968` → after: `L11953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11953) · [Before (L11968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11968)

```diff
-       const zD = hz.IR2Z(void 0 === (wD = DD) || null === wD ? Number.MAX_SAFE_INTEGER : DD >>> 0);
+       const ip = Hi.o0JL(void 0 === (cp = pp) || null === cp ? Number.MAX_SAFE_INTEGER : pp >>> 0);
```

#### 814. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11973` → after: `L11958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11958) · [Before (L11973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11973)

```diff
-       return hz.FnZq(this.__wbg_ptr) >>> 0
+       return Hi.PshP(this.__wbg_ptr) >>> 0
```

#### 815. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11976` → after: `L11961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11961) · [Before (L11976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11976)

```diff
-       return hz.vk9h(this.__wbg_ptr) >>> 0
+       return Hi.TxAk(this.__wbg_ptr) >>> 0
```

#### 816. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11979` → after: `L11964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11964) · [Before (L11979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11979)

```diff
-       return hz.MM8F(this.__wbg_ptr, DD) >>> 0
+       return Hi.NpQN(this.__wbg_ptr, pp) >>> 0
```

#### 817. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11984` → after: `L11969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11969) · [Before (L11984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11984)

```diff
-     const wD = gz(DD, hz.a6rW, hz.soPk),
+     const cp = Ai(pp, Hi.t9Yx, Hi.wkgK),
```

#### 818. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11986` → after: `L11971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11971) · [Before (L11986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11986)

```diff
-       sD = hz.UFIx(wD, pD, zD);
+       op = Hi.TXdo(cp, Op, ip);
```

#### 819. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11991` → after: `L11976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11976) · [Before (L11991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11991)

```diff
-     hz.wTEx()
+     Hi.qLbv()
```

#### 820. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11995` → after: `L11980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11980) · [Before (L11995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11995)

```diff
-     return hz.EAcR() >>> 0
+     return Hi.s1kU() >>> 0
```

#### 821. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11999` → after: `L11984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11984) · [Before (L11999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11999)

```diff
-     return 0 !== hz.hPq5(DD)
+     return 0 !== Hi.y20S(pp)
```

#### 822. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12003` → after: `L11988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11988) · [Before (L12003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12003)

```diff
-     return 0 !== hz.ekAo(DD)
+     return 0 !== Hi.RyYY(pp)
```

#### 823. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12007` → after: `L11992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11992) · [Before (L12007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12007)

```diff
-     hz.sXfA(DD)
+     Hi.DlSL(pp)
```

#### 824. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12011` → after: `L11996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11996) · [Before (L12011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12011)

```diff
-     return hz.B4Ld() >>> 0
+     return Hi.tRKe() >>> 0
```

#### 825. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12015` → after: `L12000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12000) · [Before (L12015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12015)

```diff
-     return hz.RrSu() >>> 0
+     return Hi.TUyr() >>> 0
```

#### 826. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12019` → after: `L12004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12004) · [Before (L12019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12019)

```diff
-     return 0 !== hz.hF9N()
+     return 0 !== Hi.DqaO()
```

#### 827. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12023` → after: `L12008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12008) · [Before (L12023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12023)

```diff
-     return hz.onUH() >>> 0
+     return Hi.YQeW() >>> 0
```

#### 828. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12029` → after: `L12014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12014) · [Before (L12029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12029)

```diff
-       const wD = hz.bWOe();
+       const cp = Hi.VoEw();
```

#### 829. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12032` → after: `L12017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12017) · [Before (L12032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12032)

```diff
-       hz.n4s5(DD, zD, 1)
+       Hi.c6ds(pp, ip, 1)
```

#### 830. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12037` → after: `L12022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12022) · [Before (L12037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12037)

```diff
-     hz.i2Z3(wz(DD))
+     Hi.DIdY(oi(pp))
```

#### 831. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12043` → after: `L12028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12028) · [Before (L12043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12043)

```diff
-       iyqV: {
+       M2c8: {
```

#### 832. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12045` → after: `L12030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12030) · [Before (L12045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12045)

```diff
-         eiqh: function(DD, zD) {
+         QsIB: function(pp, ip) {
```

#### 833. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12048` → after: `L12033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12033) · [Before (L12048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12048)

```diff
-         E2O5: function(DD, zD) {
+         EXA0: function(pp, ip) {
```

#### 834. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12051` → after: `L12036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12036) · [Before (L12051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12051)

```diff
-         OWxh: function(DD) {
+         qfrR: function(pp) {
```

#### 835. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12054` → after: `L12039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12039) · [Before (L12054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12054)

```diff
-         cTYN: function(DD, zD) {
+         lFCw: function(pp, ip) {
```

#### 836. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12057` → after: `L12042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12042) · [Before (L12057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12057)

```diff
-         QE98: function(DD) {
+         VsIf: function(pp) {
```

#### 837. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12067` → after: `L12052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12052) · [Before (L12067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12067)

```diff
-     } : new FinalizationRegistry((DD => hz.w7ja(DD, 1))),
+     } : new FinalizationRegistry((pp => Hi.MOKx(pp, 1))),
```

#### 838. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12071` → after: `L12056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12056) · [Before (L12071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12071)

```diff
-     } : new FinalizationRegistry((DD => hz.jIJl(DD, 1)));
+     } : new FinalizationRegistry((pp => Hi.NbEr(pp, 1)));
```

#### 839. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12148` → after: `L12133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12133) · [Before (L12148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12148)

```diff
-     return Gz = DD, hz = DD.exports, Bz = zD, sz = null, hz.pV3p(), hz
+     return ti = pp, Hi = pp.exports, vi = ip, Si = null, Hi.zayO(), Hi
```

#### 840. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12172` → after: `L12157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12157) · [Before (L12172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12172)

```diff
-         if (!DD.ok) throw new Error(`failed to fetch Wasm: ${DD.status} ${DD.statusText} fetching '${DD.url}'`);
+         if (!pp.ok) throw new Error(`failed to fetch Wasm: ${pp.status} ${pp.statusText} fetching '${pp.url}'`);
```

#### 841. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12202-L12203` → after: `L12187-L12188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12187-L12188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12187-L12188) · [Before (L12202-L12203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12202-L12203)

```diff
-       if (!VD()) throw new Error(`Bloxd wasm is not ready (${PD()}): check isBloxdWasmReady() first`);
-       if (OD !== DD) throw new Error(`Bloxd wasm was loaded as another module, which lacks ${zD}`)
+       if (!Rp()) throw new Error(`Bloxd wasm is not ready (${qp()}): check isBloxdWasmReady() first`);
+       if (dp !== pp) throw new Error(`Bloxd wasm was loaded as another module, which lacks ${ip}`)
```

#### 842. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12206` → after: `L12191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12191) · [Before (L12206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12206)

```diff
-   var Qz = wD(619);
+   var mi = cp(640);
```

#### 843. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12213` → after: `L12198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12198) · [Before (L12213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12213)

```diff
-       } = wD(39724), fD = function(DD, zD, wD) {
+       } = cp(39993), Wp = function(pp, ip, cp) {
```

#### 844. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12215` → after: `L12200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12200) · [Before (L12215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12215)

```diff
-         for (const LD of DD.eD) bz(LD, wD);
+         for (const xp of pp.sO) li(xp, cp);
```

#### 845. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12218` → after: `L12203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12203) · [Before (L12218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12218)

```diff
-           eD: DD.eD,
+           sO: pp.sO,
```

#### 846. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12224` → after: `L12209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12209) · [Before (L12224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12224)

```diff
-           throw new Error(`Custom world-gen terrain "${pD.name}" is not in this generator's catalogue (${DD.length>0?DD.join(", "):"empty"})`)
+           throw new Error(`Custom world-gen terrain "${Op.name}" is not in this generator's catalogue (${pp.length>0?pp.join(", "):"empty"})`)
```

#### 847. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12229` → after: `L12214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12214) · [Before (L12229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12229)

```diff
-               if (null !== DD.mD) throw new Error(`Custom world-gen terrain "${DD.name}" takes no options`);
+               if (null !== pp.zO) throw new Error(`Custom world-gen terrain "${pp.name}" takes no options`);
```

#### 848. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12233-L12234` → after: `L12218-L12219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12218-L12219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12218-L12219) · [Before (L12233-L12234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12233-L12234)

```diff
-             if (null !== DD.mD) try {
-               wD = JSON.parse(DD.mD)
+             if (null !== pp.zO) try {
+               cp = JSON.parse(pp.zO)
```

#### 849. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12236` → after: `L12221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12221) · [Before (L12236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12236)

```diff
-               throw new Error(`Custom world-gen terrain "${DD.name}" has invalid optionsJson: ${String(pD)}`, {
+               throw new Error(`Custom world-gen terrain "${pp.name}" has invalid optionsJson: ${String(Op)}`, {
```

#### 850. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12243` → after: `L12228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12228) · [Before (L12243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12243)

```diff
-           eD: DD.eD,
+           sO: pp.sO,
```

#### 851. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12246` → after: `L12231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12231) · [Before (L12246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12246)

```diff
-       }(null !== (RD = null === LD || void 0 === LD ? void 0 : LD.ZD) && void 0 !== RD ? RD : null, cD, zD);
+       }(null !== (Dp = null === xp || void 0 === xp ? void 0 : xp.GO) && void 0 !== Dp ? Dp : null, Lp, ip);
```

#### 852. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12248` → after: `L12233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12233) · [Before (L12248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12248)

```diff
-       const ID = null !== (AD = null === LD || void 0 === LD ? void 0 : LD.layers) && void 0 !== AD ? AD : [];
+       const yp = null !== (Ap = null === xp || void 0 === xp ? void 0 : xp.layers) && void 0 !== Ap ? Ap : [];
```

#### 853. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12251` → after: `L12236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12236) · [Before (L12251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12251)

```diff
-         const wD = [...DD].sort(((DD, zD) => DD.LD - zD.LD));
+         const cp = [...pp].sort(((pp, ip) => pp.UO - ip.UO));
```

#### 854. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12253` → after: `L12238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12238) · [Before (L12253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12253)

```diff
-           if (wD[pD].LD < wD[pD - 1].cD) throw new Error(`Custom world-gen layers overlap: [${wD[pD-1].LD}, ${wD[pD-1].cD}) and [${wD[pD].LD}, ${wD[pD].cD})`)
+           if (cp[Op].UO < cp[Op - 1].wO) throw new Error(`Custom world-gen layers overlap: [${cp[Op-1].UO}, ${cp[Op-1].wO}) and [${cp[Op].UO}, ${cp[Op].wO})`)
```

#### 855. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12265` → after: `L12250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12250) · [Before (L12265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12265)

```diff
-         if (wD >= sD.LD && wD < sD.cD) return KD.getChunk(DD, zD, wD - sD.gD, pD);
+         if (cp >= op.UO && cp < op.wO) return Ip.getChunk(pp, ip, cp - op.vO, Op);
```

#### 856. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12283-L12284` → after: `L12268-L12269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12268-L12269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12268-L12269) · [Before (L12283-L12284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12283-L12284)

```diff
-     if (DD.LD >= DD.cD) throw new Error(`Custom world-gen layer has minY (${DD.LD}) >= maxY (${DD.cD})`);
-     if (DD.LD % Qz.r !== 0 || DD.cD % Qz.r !== 0 || DD.gD % Qz.r !== 0) throw new Error(`Custom world-gen layer bounds must be multiples of chunkSize (${Qz.r}); got minY=${DD.LD}, maxY=${DD.cD}, groundY=${DD.gD}`);
+     if (pp.UO >= pp.wO) throw new Error(`Custom world-gen layer has minY (${pp.UO}) >= maxY (${pp.wO})`);
+     if (pp.UO % mi.z !== 0 || pp.wO % mi.z !== 0 || pp.vO % mi.z !== 0) throw new Error(`Custom world-gen layer bounds must be multiples of chunkSize (${mi.z}); got minY=${pp.UO}, maxY=${pp.wO}, groundY=${pp.vO}`);
```

#### 857. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12286-L12289` → after: `L12271-L12274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12271-L12274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12271-L12274) · [Before (L12286-L12289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12286-L12289)

```diff
-         if (void 0 === (0, Qz.w)(DD.fD, zD)) throw new Error(`Custom world-gen caves lavaPitBlock "${DD.fD}" not found in blockMetadata`);
-         if (DD.BD)
-           for (const wD of DD.BD) Pz(wD, zD)
-       }(DD.AD, zD), 0 === DD.xD.length) throw new Error("Custom world-gen layer must have at least one biome");
+         if (void 0 === (0, mi.C)(pp.eO, ip)) throw new Error(`Custom world-gen caves lavaPitBlock "${pp.eO}" not found in blockMetadata`);
+         if (pp.uO)
+           for (const cp of pp.uO) Mi(cp, ip)
+       }(pp.HO, ip), 0 === pp.BO.length) throw new Error("Custom world-gen layer must have at least one biome");
```

#### 858. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12291` → after: `L12276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12276) · [Before (L12291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12291)

```diff
-     for (const pD of DD.xD) Tz(pD, zD), wD += pD.frequency;
+     for (const Op of pp.BO) Xi(Op, ip), cp += Op.frequency;
```

#### 859. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12293` → after: `L12278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12278) · [Before (L12293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12293)

```diff
-     for (const pD of DD.iD) bz(pD, zD)
+     for (const Op of pp.aO) li(Op, ip)
```

#### 860. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12299-L12301` → after: `L12284-L12286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12284-L12286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12284-L12286) · [Before (L12299-L12301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12299-L12301)

```diff
-       hD: pD,
-       nD: sD,
-       MD: KD
+       kO: Op,
+       mO: op,
+       RO: Ip
```

#### 861. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12303-L12304` → after: `L12288-L12289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12288-L12289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12288-L12289) · [Before (L12303-L12304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12303-L12304)

```diff
-     if (void 0 === (0, Qz.w)(wD, zD)) throw new Error(`Custom world-gen cave decoration blockName "${wD}" not found in blockMetadata`);
-     if (!pD && !sD && !KD) throw new Error(`Custom world-gen cave decoration "${wD}" must allow at least one of floor/walls/ceiling anchoring`);
+     if (void 0 === (0, mi.C)(cp, ip)) throw new Error(`Custom world-gen cave decoration blockName "${cp}" not found in blockMetadata`);
+     if (!Op && !op && !Ip) throw new Error(`Custom world-gen cave decoration "${cp}" must allow at least one of floor/walls/ceiling anchoring`);
```

#### 862. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12307-L12308` → after: `L12292-L12293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12292-L12293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12292-L12293) · [Before (L12307-L12308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12307-L12308)

```diff
-     if (KD && Cz(wD, "meta|rot1|top", zD), xz(DD.OD, wD, "OD"), xz(DD.JD, wD, "JD"), !Number.isInteger(DD.ED) || DD.ED < 0) throw new Error(`Custom world-gen cave decoration "${wD}" minPlacements must be a non-negative integer, got ${DD.ED}`);
-     if (!(0, Qz.B)(DD.QD) && (xz(DD.QD.VD, wD, "depthRamp.deepClusterChance"), DD.QD.PD <= DD.QD.CD)) throw new Error(`Custom world-gen cave decoration "${wD}" deepY must be strictly smaller than shallowY, but ${DD.QD.PD} <= ${DD.QD.CD} `)
+     if (Ip && Ci(cp, "meta|rot1|top", ip), Ei(pp.qO, cp, "qO"), Ei(pp.MO, cp, "MO"), !Number.isInteger(pp.CO) || pp.CO < 0) throw new Error(`Custom world-gen cave decoration "${cp}" minPlacements must be a non-negative integer, got ${pp.CO}`);
+     if (!(0, mi.G)(pp.EO) && (Ei(pp.EO.lO, cp, "depthRamp.deepClusterChance"), pp.EO.QO <= pp.EO.JO)) throw new Error(`Custom world-gen cave decoration "${cp}" deepY must be strictly smaller than shallowY, but ${pp.EO.QO} <= ${pp.EO.JO} `)
```

#### 863. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12312-L12313` → after: `L12297-L12298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12297-L12298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12297-L12298) · [Before (L12312-L12313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12312-L12313)

```diff
-     const pD = `${DD}|${zD}`;
-     if (void 0 === (0, Qz.w)(pD, wD)) throw new Error(`Custom world-gen cave decoration "${DD}" is missing directional variant "${pD}" required for wall/ceiling anchoring`)
+     const Op = `${pp}|${ip}`;
+     if (void 0 === (0, mi.C)(Op, cp)) throw new Error(`Custom world-gen cave decoration "${pp}" is missing directional variant "${Op}" required for wall/ceiling anchoring`)
```

#### 864. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12317` → after: `L12302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12302) · [Before (L12317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12317)

```diff
-     if (DD < 0 || DD > 1) throw new Error(`Custom world-gen cave decoration "${zD}" ${wD} must be in [0, 1], got ${DD}`)
+     if (pp < 0 || pp > 1) throw new Error(`Custom world-gen cave decoration "${ip}" ${cp} must be in [0, 1], got ${pp}`)
```

#### 865. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12321-L12327` → after: `L12306-L12312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12306-L12312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12306-L12312) · [Before (L12321-L12327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12321-L12327)

```diff
-     if (DD.frequency <= 0) throw new Error(`Custom world-gen biome frequency must be positive, got ${DD.frequency}`);
-     if (void 0 === (0, Qz.w)(DD.bD, zD)) throw new Error(`Custom world-gen biome topsoilBlock "${DD.bD}" not found in blockMetadata`);
-     if (void 0 === (0, Qz.w)(DD.jD, zD)) throw new Error(`Custom world-gen biome lowsoilBlock "${DD.jD}" not found in blockMetadata`);
-     if (0 === DD.dD.length) throw new Error("Custom world-gen biome must have at least one stoneType");
-     for (const wD of DD.dD) {
-       if (wD.frequency <= 0) throw new Error(`Custom world-gen biome stoneType frequency must be positive, got ${wD.frequency}`);
-       if (void 0 === (0, Qz.w)(wD.blockName, zD)) throw new Error(`Custom world-gen biome stoneType blockName "${wD.blockName}" not found in blockMetadata`)
+     if (pp.frequency <= 0) throw new Error(`Custom world-gen biome frequency must be positive, got ${pp.frequency}`);
+     if (void 0 === (0, mi.C)(pp.TO, ip)) throw new Error(`Custom world-gen biome topsoilBlock "${pp.TO}" not found in blockMetadata`);
+     if (void 0 === (0, mi.C)(pp.fO, ip)) throw new Error(`Custom world-gen biome lowsoilBlock "${pp.fO}" not found in blockMetadata`);
+     if (0 === pp.bO.length) throw new Error("Custom world-gen biome must have at least one stoneType");
+     for (const cp of pp.bO) {
+       if (cp.frequency <= 0) throw new Error(`Custom world-gen biome stoneType frequency must be positive, got ${cp.frequency}`);
+       if (void 0 === (0, mi.C)(cp.blockName, ip)) throw new Error(`Custom world-gen biome stoneType blockName "${cp.blockName}" not found in blockMetadata`)
```

#### 866. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12332-L12336` → after: `L12317-L12321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12317-L12321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12317-L12321) · [Before (L12332-L12336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12332-L12336)

```diff
-     if (void 0 === (0, Qz.w)(DD.blockName, zD)) throw new Error(`Custom world-gen ore blockName "${DD.blockName}" not found in blockMetadata`);
-     if (DD.radius < 0) throw new Error(`Custom world-gen ore "${DD.blockName}" radius must be >= 0, got ${DD.radius}`);
-     if (DD.WD <= 0) throw new Error(`Custom world-gen ore "${DD.blockName}" minDistBetweenDeposits must be > 0, got ${DD.WD}`);
-     if (DD.LD > DD.cD) throw new Error(`Custom world-gen ore "${DD.blockName}" minY (${DD.LD}) must be <= maxY (${DD.cD})`);
-     if (DD.ND < 0 || DD.ND > 1) throw new Error(`Custom world-gen ore "${DD.blockName}" spawnChance must be in [0, 1], got ${DD.ND}`)
+     if (void 0 === (0, mi.C)(pp.blockName, ip)) throw new Error(`Custom world-gen ore blockName "${pp.blockName}" not found in blockMetadata`);
+     if (pp.radius < 0) throw new Error(`Custom world-gen ore "${pp.blockName}" radius must be >= 0, got ${pp.radius}`);
+     if (pp.FO <= 0) throw new Error(`Custom world-gen ore "${pp.blockName}" minDistBetweenDeposits must be > 0, got ${pp.FO}`);
+     if (pp.UO > pp.wO) throw new Error(`Custom world-gen ore "${pp.blockName}" minY (${pp.UO}) must be <= maxY (${pp.wO})`);
+     if (pp.gO < 0 || pp.gO > 1) throw new Error(`Custom world-gen ore "${pp.blockName}" spawnChance must be in [0, 1], got ${pp.gO}`)
```

#### 867. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12342-L12345` → after: `L12327-L12330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12327-L12330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12327-L12330) · [Before (L12342-L12345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12342-L12345)

```diff
-       WD: 10,
-       LD: -98,
-       cD: -78,
-       ND: .4
+       FO: 10,
+       UO: -98,
+       wO: -78,
+       gO: .4
```

#### 868. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12350-L12353` → after: `L12335-L12338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12335-L12338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12335-L12338) · [Before (L12350-L12353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12350-L12353)

```diff
-       WD: 6,
-       LD: -40,
-       cD: 20,
-       ND: .6
+       FO: 6,
+       UO: -40,
+       wO: 20,
+       gO: .6
```

#### 869. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12357-L12360` → after: `L12342-L12345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12342-L12345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12342-L12345) · [Before (L12357-L12360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12357-L12360)

```diff
-       WD: 10,
-       LD: -75,
-       cD: -55,
-       ND: .4
+       FO: 10,
+       UO: -75,
+       wO: -55,
+       gO: .4
```

#### 870. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12364` → after: `L12349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12349) · [Before (L12364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12364)

```diff
-       mD: null
+       zO: null
```

#### 871. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12367` → after: `L12352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12352) · [Before (L12367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12367)

```diff
-     [jz]: () => wD(39613).b
+     [Qi]: () => cp(39873).e
```

#### 872. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12392` → after: `L12377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12377) · [Before (L12392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12392)

```diff
-       if (!uz.includes(zD)) throw new Error(`Invalid port offset "${DD}". Must be one of: ${uz.join(", ")}. Leave the port offset environment variable unset to use the default ports, or run tools/DevPorts.ts to claim a slot.`);
+       if (!zi.includes(ip)) throw new Error(`Invalid port offset "${pp}". Must be one of: ${zi.join(", ")}. Leave the port offset environment variable unset to use the default ports, or run tools/DevPorts.ts to claim a slot.`);
```

#### 873. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12470` → after: `L12455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12455) · [Before (L12470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12470)

```diff
-     const zD = ez() ? Yz : Hz;
+     const ip = Gi() ? pc : ic;
```

#### 874. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12870` → after: `L12856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12856) · [Before (L12870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12870)

```diff
-     if (sw.has(DD)) throw new Error(`Duplicate leave code: ${DD}`);
+     if (xc.has(pp)) throw new Error(`Duplicate leave code: ${pp}`);
```

#### 875. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12893` → after: `L12879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12879) · [Before (L12893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12893)

```diff
-     return DD === zD ? KD + pD * pD <= DD * DD : DD > zD ? Math.abs(pD) <= zD && KD + pD * pD <= DD * DD : KD <= DD * DD && KD + pD * pD <= zD * zD
+     return pp === ip ? Ip + Op * Op <= pp * pp : pp > ip ? Math.abs(Op) <= ip && Ip + Op * Op <= pp * pp : Ip <= pp * pp && Ip + Op * Op <= ip * ip
```

#### 876. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12910` → after: `L12896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12896) · [Before (L12910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12910)

```diff
-     const DD = Promise.all([wD.e(72), wD.e(75), wD.e(74), wD.e(73), wD.e(69)]).then((() => wD(39708))).then((DD => {
+     const pp = Promise.all([cp.e(73), cp.e(76), cp.e(75), cp.e(74), cp.e(70)]).then((() => cp(39984))).then((pp => {
```

#### 877. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12953` → after: `L12939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12939) · [Before (L12953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12953)

```diff
-               reason: `its memory stats trapped (${String(zD)})`
+               reason: `its memory stats trapped (${String(ip)})`
```

#### 878. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12959` → after: `L12945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12945) · [Before (L12959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12959)

```diff
-               const wD = cD.CG();
+               const cp = Lp.Nw();
```

#### 879. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12962` → after: `L12948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12948) · [Before (L12962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12962)

```diff
-                 return String.fromCharCode(...new Uint8Array(TD().buffer, DD.xG(), 32))
+                 return String.fromCharCode(...new Uint8Array(Ep().buffer, pp.Tw(), 32))
```

#### 880. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12975` → after: `L12961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12961) · [Before (L12975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12975)

```diff
-               rD = GD.CI, AD = new Uint16Array(rD * rD * rD),
+               Sp = wp.Qy, Ap = new Uint16Array(Sp * Sp * Sp),
```

#### 881. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12984` → after: `L12970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12970) · [Before (L12984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12984)

```diff
-                           reason: `the memory ceiling was not set (${String(pD)})`
+                           reason: `the memory ceiling was not set (${String(Op)})`
```

#### 882. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12988` → after: `L12974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12974) · [Before (L12988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12988)

```diff
-                         cD = new(Ez().VG)
+                         Lp = new(ki().Jw)
```

#### 883. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12992` → after: `L12978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12978) · [Before (L12992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12992)

```diff
-                           reason: `GeneratedChunkEncoder did not start (${String(pD)})`
+                           reason: `GeneratedChunkEncoder did not start (${String(Op)})`
```

#### 884. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L13002` → after: `L12988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12988) · [Before (L13002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13002)

```diff
-                           reason: `the block and item tables did not load (${String(zD)})`
+                           reason: `the block and item tables did not load (${String(ip)})`
```

#### 885. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L13007` → after: `L12993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12993) · [Before (L13007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13007)

```diff
-                       reason: `wasm did not start (${CD()})`
+                       reason: `wasm did not start (${Mp()})`
```

#### 886. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L13011` → after: `L12997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12997) · [Before (L13011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13011)

```diff
-                     reason: `chunk size ${rD} is not the encoder's 32`
+                     reason: `chunk size ${Sp} is not the encoder's 32`
```

#### 887. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L13022` → after: `L13008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R13008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L13008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13008) · [Before (L13022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13022)

```diff
-                 gD = new Xz(rD, LD.blockMetadata, LD.itemMetadata, DD.zD, !1, DD.wD, DD.sD, pD, BD)
+                 Yp = new Ri(Sp, xp.blockMetadata, xp.itemMetadata, pp.LO, !1, pp.YO, pp.PO, Op, Up)
```

#### 888. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L13047` → after: `L13033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R13033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L13033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13033) · [Before (L13047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13047)

```diff
-                     const wD = DD.TG(),
+                     const cp = pp.fw(),
```

#### 889. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L13049` → after: `L13035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R13035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L13035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13035) · [Before (L13049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13049)

```diff
-                       sD = zD.byteLength >= pD ? zD : new ArrayBuffer(pD),
+                       op = ip.byteLength >= Op ? ip : new ArrayBuffer(Op),
```

#### 890. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L13052` → after: `L13038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R13038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L13038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13038) · [Before (L13052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13052)

```diff
-                     return rD.set(new Uint8Array(KD, DD.xG(), yz)), rD.set(new Uint8Array(KD, DD.bG(), wD), yz), {
+                     return Sp.set(new Uint8Array(Ip, pp.Tw(), ni)), Sp.set(new Uint8Array(Ip, pp.bw(), cp), ni), {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79)

#### 1. `bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js` (Changed code · before: `L1-L2` → after: `L1-L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79) · [After (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L1-L2) · [Before (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L1-L2)

```diff
- export const id = 71;
- export const ids = [71];
+ export const id = 72;
+ export const ids = [72];
```

#### 2. `bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L4)

```diff
-   36404: (DD, zD, wD) => {
+   36630: (pp, ip, cp) => {
```

#### 3. `bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L6)

```diff
-       e: () => sD
+       b: () => op
```

#### 4. `bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js` (Changed code · before: `L41` → after: `L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79) · [After (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L41) · [Before (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L41)

```diff
-           if (zD > 0 && wD.searchParams.set("cache-bust", `${Date.now()}-${zD}`), await this.fetchWhole(wD, DD)) return this.scriptUrl = wD, !0;
+           if (ip > 0 && cp.searchParams.set("cache-bust", `${Date.now()}-${ip}`), await this.fetchWhole(cp, pp)) return this.scriptUrl = cp, !0;
```

#### 5. `bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js` (Changed code · before: `L83` → after: `L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79R83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79) · [After (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L83) · [Before (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L83)

```diff
-   50822: (DD, zD, wD) => {
+   51244: (pp, ip, cp) => {
```

#### 6. `bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js` (Changed code · before: `L90` → after: `L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79R90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79) · [After (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L90) · [Before (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L90)

```diff
-     const pD = new(wD(36404).e)(new URL(wD.p + wD.u(70), wD.b), {
+     const Op = new(cp(36630).b)(new URL(cp.p + cp.u(71), cp.b), {
```

## `bloxd.io` · `bundles/bloxd.io/main.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/main.js` (1137 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6)

#### 1. `bundles/bloxd.io/main.js` (Changed code · before: `L1` → after: `L1`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L1) · [Before (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L1)

```diff
- /*! For license information please see tz47m9.main.2cb7e113.js.LICENSE.txt */
+ /*! For license information please see sn3sfj.main.2522680a.js.LICENSE.txt */
```

#### 2. `bundles/bloxd.io/main.js` (Changed code · before: `L3` → after: `L3`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L3) · [Before (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L3)

```diff
-     var DD = [, , , , , , , , , (DD, zD, wD) => {
+     var pp = [, , , , , , , , , , (pp, ip, cp) => {
```

#### 3. `bundles/bloxd.io/main.js` (Changed code · before: `L5-L6` → after: `L5-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L5-L6) · [Before (L5-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L5-L6)

```diff
-             $: () => lD,
-             C: () => fD,
+             A: () => Wp,
+             D: () => Ap,
```

#### 4. `bundles/bloxd.io/main.js` (Changed code · before: `L8-L9` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L8) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L8-L9)

```diff
-             I: () => jD,
-             K: () => CD,
+             J: () => Mp,
```

#### 5. `bundles/bloxd.io/main.js` (Changed code · before: `L17-L19` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L20) · [Before (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L17-L19)

```diff
-             d: () => ID,
-             eb: () => OD,
-             fb: () => gD,
+             db: () => Ep,
```

#### 6. `bundles/bloxd.io/main.js` (Changed code · before: `L21-L26` → after: `L22-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L22-L25) · [Before (L21-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L21-L26)

```diff
-             hb: () => TD,
-             j: () => hD,
-             jb: () => pD,
-             k: () => BD,
-             m: () => LD,
-             o: () => cD,
+             gb: () => Op,
+             h: () => vp,
+             l: () => Up,
+             n: () => xp,
```

#### 7. `bundles/bloxd.io/main.js` (Changed code · before: `L28-L29` → after: `L27-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L27-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L27-L29) · [Before (L28-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L28-L29)

```diff
-             u: () => mD,
-             y: () => sD
+             s: () => tp,
+             w: () => np,
+             x: () => op
```

#### 8. `bundles/bloxd.io/main.js` (Changed code · before: `L141` → after: `L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L141) · [Before (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L141)

```diff
-         }, , , , , (DD, zD, wD) => {
+         }, , , , , , , (pp, ip, cp) => {
```

#### 9. `bundles/bloxd.io/main.js` (Changed code · before: `L145` → after: `L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L145) · [Before (L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L145)

```diff
-           var pD = wD(20);
+           var Op = cp(25);
```

#### 10. `bundles/bloxd.io/main.js` (Changed code · before: `L167` → after: `L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L167) · [Before (L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L167)

```diff
-             (pD.e.set({
+             (Op.c.set({
```

#### 11. `bundles/bloxd.io/main.js` (Changed code · before: `L174` → after: `L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L174) · [Before (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L174)

```diff
-         }, , , , , , (DD, zD, wD) => {
+         }, , , , , , , , (pp, ip, cp) => {
```

#### 12. `bundles/bloxd.io/main.js` (Changed code · before: `L176-L178` → after: `L176-L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L176-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L176-L178) · [Before (L176-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L176-L178)

```diff
-             e: () => nz,
-             h: () => Jz,
-             i: () => Oz,
+             c: () => ti,
+             f: () => ei,
+             j: () => di,
```

#### 13. `bundles/bloxd.io/main.js` (Changed code · before: `L180` → after: `L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L180) · [Before (L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L180)

```diff
-             n: () => Ez
+             o: () => ui
```

#### 14. `bundles/bloxd.io/main.js` (Changed code · before: `L182-L187` → after: `L182-L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L182-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L182-L187) · [Before (L182-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L182-L187)

```diff
-           var pD = wD(25),
-             sD = wD(338),
-             KD = wD(351),
-             rD = wD(35),
-             LD = wD(51),
-             cD = wD(28),
+           var Op, op, Ip, Sp, xp, Lp, Yp, Dp, Ap, Pp, Wp, yp, Up, wp, vp, tp, Hp, dp, ep, jp, kp, mp, Rp, qp, Mp, Cp, Ep, Xp, lp, Qp, Jp, Bp, Np, Tp, fp = cp(34),
+             bp = cp(322),
+             hp = cp(337),
+             ap = cp(44),
+             np = cp(55),
+             Fp = cp(42),
```

#### 15. `bundles/bloxd.io/main.js` (Changed code · before: `L189-L198` → after: `L189-L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L189-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L189-L200) · [Before (L189-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L189-L198)

```diff
-             RD = wD(58),
-             AD = wD(79),
-             UD = wD(103),
-             fD = wD(271),
-             ID = wD(319),
-             BD = wD(323),
-             GD = wD(119),
-             hD = wD(629),
-             nD = wD(638),
-             MD = wD(300),
+             Gp = cp(62),
+             rp = cp(82),
+             Zp = cp(104),
+             zp = cp(255),
+             sp = cp(306),
+             Kp = cp(314),
+             Vp = cp(645),
+             ii = cp(118),
+             ci = cp(652),
+             Oi = cp(657),
+             oi = cp(291),
+             Ii = cp(708),
```

#### 16. `bundles/bloxd.io/main.js` (Changed code · before: `L200-L208` → after: `L202-L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L202-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L202-L203) · [Before (L200-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L200-L208)

```diff
-             JD = wD(718),
-             ED = wD(726),
-             QD = wD(287);
-           const XD = {
-               fov100: 100,
-               fov110: 110,
-               fov120: 120
-             },
-             VD = "cameraFOVMigrated";
+             xi = cp(716);
+           const Li = new(gp());
```

#### 17. `bundles/bloxd.io/main.js` (Changed code · before: `L211-L218` → after: `L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L206) · [Before (L211-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L211-L218)

```diff
-             return {
-               cameraFOV: "mobile" === (0, UD.getPlatformType)() ? XD[QD.b.mobile_fov_v2] : ED.d,
-               joystickMode: "floating",
-               touchSpeedCurve: "curve" === QD.b.mobile_move_assist_v1,
-               touchActionButtons: "on" === QD.b.mobile_action_buttons_v1,
-               autorun: !1,
-               jumpLock: "on" === QD.b.mobile_jump_lock_v1
-             }
+             return ci.e ? "webgl_holdback" : !0 === ap.h.getItem(ii.D) ? "old_intel_driver" : ci.g && !0 === ap.h.getItem(ii.A) ? "intel_gen9" : Oi.z && (0, ci.c)(ap.h.getItem(ii.z)) ? "gpu_class_webgl" : Oi.z && !0 === ap.h.getItem(ii.I) ? "gpu_wasm_arm" : !Oi.z && (0, ci.i)(nav … [truncated]
```

#### 18. `bundles/bloxd.io/main.js` (Changed code · before: `L224` → after: `L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L210) · [Before (L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L224)

```diff
-             return hD.g ? "webgl_holdback" : !0 === rD.h.getItem(GD.G) ? "old_intel_driver" : hD.i && !0 === rD.h.getItem(GD.D) ? "intel_gen9" : nD.v && (0, hD.d)(rD.h.getItem(GD.C)) ? "gpu_class_webgl" : nD.v && !0 === rD.h.getItem(GD.L) ? "gpu_wasm_arm" : !nD.v && (0, hD.l)(nav … [truncated]
+             return ci.p && null === Yi()
```

#### 19. `bundles/bloxd.io/main.js` (Changed code · before: `L227-L228` → after: `L213-L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L213-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L213-L214) · [Before (L227-L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L227-L228)

```diff
-           const Uz = hD.q && null === Az;
-           let fz = null === rD.h.getItem(sD.Zb);
+           const Pi = ci.p && null === Ai;
+           let Wi = null === ap.h.getItem(bp.tc);
```

#### 20. `bundles/bloxd.io/main.js` (Changed code · before: `L240-L241` → after: `L227-L228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L227-L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L227-L228) · [Before (L240-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L240-L241)

```diff
-             soundVolume: (0, LD.b)(),
-             musicVolume: null !== (CD = rD.h.getItem("musicVol")) && void 0 !== CD ? CD : .5,
+             soundVolume: (0, np.c)(),
+             musicVolume: null !== (Op = ap.h.getItem("musicVol")) && void 0 !== Op ? Op : .5,
```

#### 21. `bundles/bloxd.io/main.js` (Changed code · before: `L257` → after: `L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L243) · [Before (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L257)

```diff
-               return "boolean" === typeof DD ? DD : null
+               return "boolean" === typeof pp ? pp : null
```

#### 22. `bundles/bloxd.io/main.js` (Changed code · before: `L271` → after: `L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L257) · [Before (L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L271)

```diff
-             enabledDebugFeatures: null !== (TD = rD.h.getItem("enabledDebugFeatures")) && void 0 !== TD ? TD : {},
+             enabledDebugFeatures: null !== (Ip = ap.h.getItem("enabledDebugFeatures")) && void 0 !== Ip ? Ip : {},
```

#### 23. `bundles/bloxd.io/main.js` (Changed code · before: `L286` → after: `L272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L272) · [Before (L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L286)

```diff
-                 return null !== (DD = OD.e.find((DD => DD === zD))) && void 0 !== DD ? DD : "toastAndTray"
+                 return null !== (pp = Ii.d.find((pp => pp === ip))) && void 0 !== pp ? pp : "toastAndTray"
```

#### 24. `bundles/bloxd.io/main.js` (Changed code · before: `L288-L289` → after: `L274-L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L274-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L274-L275) · [Before (L288-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L288-L289)

```diff
-               touchscreenSensitivity: null !== (iD = rD.h.getItem("touchscreenSensitivity")) && void 0 !== iD ? iD : 150,
-               mouseSensitivity: null !== (lD = rD.h.getItem("mouseSensitivity")) && void 0 !== lD ? lD : 15,
+               touchscreenSensitivity: null !== (Dp = ap.h.getItem("touchscreenSensitivity")) && void 0 !== Dp ? Dp : 150,
+               mouseSensitivity: null !== (Ap = ap.h.getItem("mouseSensitivity")) && void 0 !== Ap ? Ap : 15,
```

#### 25. `bundles/bloxd.io/main.js` (Changed code · before: `L303` → after: `L289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L289) · [Before (L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L303)

```diff
-               fogChunkDistance: null !== (YD = rD.h.getItem("fogChunkDistance")) && void 0 !== YD ? YD : 2,
+               fogChunkDistance: null !== (Rp = ap.h.getItem("fogChunkDistance")) && void 0 !== Rp ? Rp : 2,
```

#### 26. `bundles/bloxd.io/main.js` (Changed code · before: `L306` → after: `L292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L292) · [Before (L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L306)

```diff
-               ambientLightIntensity: null !== (Dz = rD.h.getItem("ambientLightIntensity")) && void 0 !== Dz ? Dz : .5,
+               ambientLightIntensity: null !== (Cp = ap.h.getItem("ambientLightIntensity")) && void 0 !== Cp ? Cp : .5,
```

#### 27. `bundles/bloxd.io/main.js` (Changed code · before: `L310-L311` → after: `L296-L297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L296-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L296-L297) · [Before (L310-L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L310-L311)

```diff
-               useWebGpu: null !== (zz = rD.h.getItem(sD.Zb)) && void 0 !== zz ? zz : Uz,
-               pixelScale: null !== (wz = rD.h.getItem("pixelScale")) && void 0 !== wz ? wz : (0, UD.getDeviceDefaultPixelScale)(),
+               useWebGpu: null !== (Ep = ap.h.getItem(bp.tc)) && void 0 !== Ep ? Ep : Pi,
+               pixelScale: null !== (Xp = ap.h.getItem("pixelScale")) && void 0 !== Xp ? Xp : (0, Zp.getDeviceDefaultPixelScale)(),
```

#### 28. `bundles/bloxd.io/main.js` (Changed code · before: `L317-L327` → after: `L303-L304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L303-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L303-L304) · [Before (L317-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L317-L327)

```diff
-               clipDurationSeconds: null !== (cz = rD.h.getItem("clipDurationSeconds")) && void 0 !== cz ? cz : JD.i,
-               ... function() {
-                 null === rD.h.getItem(VD) && (120 === rD.h.getItem("cameraFOV") && rD.h.removeItem("cameraFOV"), rD.h.setItem(VD, !0));
-                 const DD = PD(),
-                   zD = Object.fromEntries(Object.entries(DD).map((DD => {
-                     var zD;
-                     let [wD, pD] = DD;
-                     return [wD, null !== (zD = rD.h.getItem(wD)) && void 0 !== zD ? zD : pD]
-                   })));
-                 return sD.nb.includes(zD.joystickMode) || (console.warn("Dropping stored joystick mode", zD.joystickMode), rD.h.removeItem("joystickMode"), zD.joystickMode = DD.joystickMode), zD
-               }()
+               clipDurationSeconds: null !== (Tp = ap.h.getItem("clipDurationSeconds")) && void 0 !== Tp ? Tp : Si.g,
+               ...(0, xi.g)()
```

#### 29. `bundles/bloxd.io/main.js` (Changed code · before: `L334` → after: `L311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L311) · [Before (L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L334)

```diff
-             const wD = null !== (zD = rD.h.getItem(ID.e)) && void 0 !== zD ? zD : (0, fD.l)();
+             const cp = null !== (ip = ap.h.getItem(sp.e)) && void 0 !== ip ? ip : (0, zp.i)();
```

#### 30. `bundles/bloxd.io/main.js` (Changed code · before: `L350` → after: `L327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L327) · [Before (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L350)

```diff
-               for (const zD in DD) pD.l.KG(`appManagerUpdated|${zD}`, DD[zD])
+               for (const ip in pp) fp.m.GA(`appManagerUpdated|${ip}`, pp[ip])
```

#### 31. `bundles/bloxd.io/main.js` (Changed code · before: `L358` → after: `L335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L335) · [Before (L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L358)

```diff
-               for (const sD in DD)(0, KD._d)(Iz[sD], DD[sD]) || (zD[sD] = DD[sD], wD = !0);
+               for (const Ip in pp)(0, hp.Td)(yi[Ip], pp[Ip]) || (ip[Ip] = pp[Ip], cp = !0);
```

#### 32. `bundles/bloxd.io/main.js` (Changed code · before: `L365-L369` → after: `L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L342) · [Before (L365-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L365-L369)

```diff
-                 rD.h.setItem("UseProfanityFilter", DD.useProfanityFilter), rD.h.setItem("showChat", DD.showChat), rD.h.setItem("showNewItemIndicator", DD.showNewItemIndicator), rD.h.setItem("showFriendOnlineToasts", DD.showFriendOnlineToasts), rD.h.setItem("friendRequestNotificat … [truncated]
-                   function(DD, zD) {
-                     const wD = PD();
-                     for (const pD of Object.keys(wD)) DD[pD] !== zD[pD] && (DD[pD] === wD[pD] ? rD.h.removeItem(pD) : rD.h.setItem(pD, DD[pD]))
-                   }(DD, pD)
+                 ap.h.setItem("UseProfanityFilter", pp.useProfanityFilter), ap.h.setItem("showChat", pp.showChat), ap.h.setItem("showNewItemIndicator", pp.showNewItemIndicator), ap.h.setItem("showFriendOnlineToasts", pp.showFriendOnlineToasts), ap.h.setItem("friendRequestNotificat … [truncated]
```

#### 33. `bundles/bloxd.io/main.js` (Changed code · before: `L382-L383` → after: `L355-L356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L355-L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L355-L356) · [Before (L382-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L382-L383)

```diff
-               const zD = Gz() ? null : (0, fD.d)(DD);
-               return null !== zD && void 0 !== zD ? zD : Iz.clientEscMenuOptions.antiAliasing
+               const ip = wi() ? null : (0, zp.e)(pp);
+               return null !== ip && void 0 !== ip ? ip : yi.clientEscMenuOptions.antiAliasing
```

#### 34. `bundles/bloxd.io/main.js` (Changed code · before: `L386-L387` → after: `L359-L360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L359-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L359-L360) · [Before (L386-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L386-L387)

```diff
-               (0, fD.h)(DD);
-               const zD = Gz() ? Iz.clientEscMenuOptions.antiAliasing : (0, fD.l)();
+               (0, zp.g)(pp);
+               const ip = wi() ? yi.clientEscMenuOptions.antiAliasing : (0, zp.i)();
```
