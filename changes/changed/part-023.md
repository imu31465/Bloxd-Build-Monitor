# Changed — Bundle Modifications Report (Part 023 / 140)

- **Updated at**: `2026-11-24T17:23 JST`
- **Part**: `23 / 140` (**415** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 022](part-022.md) · [Part 024 →](part-024.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/119.js` (mpd96o.85ad4551 → tz47m9.2cb7e113 · continued)

- **File**: `bundles/bloxd.io/chunks/js/119.js` (4667 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050)

#### 4255. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34906-L34907` → after: `L34335-L34336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34335-L34336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L34335-L34336) · [Before (L34906-L34907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L34906-L34907)

```diff
-           if (!(xm instanceof Om.e)) throw xm;
-           this.IO(hm.b.Error, `${wm}: ${xm.message}`)
+           if (!(rD instanceof ID.b)) throw rD;
+           this.sI(pD.b.Error, `${LD}: ${rD.message}`)
```

#### 4256. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34920-L34921` → after: `L34349-L34350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34349-L34350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L34349-L34350) · [Before (L34920-L34921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L34920-L34921)

```diff
-         if (0 === mm.length || mm.length > Im) throw new Om.e("animation names must be 1-128 characters");
-         if (!(0, Om.m)(Tm)) throw new Om.e("is not an object");
+         if (0 === DD.length || DD.length > MD) throw new ID.b("animation names must be 1-128 characters");
+         if (!(0, ID.k)(zD)) throw new ID.b("is not an object");
```

#### 4257. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34925-L34927` → after: `L34354-L34356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34354-L34356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L34354-L34356) · [Before (L34925-L34927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L34925-L34927)

```diff
-         wm.length > 0 && this.IO(hm.b.Warning, `${mm}: ${wm.join(", ")} not supported and ignored`), Dm.length > 0 && this.IO(hm.b.Warning, `${mm}: unknown keys ignored: ${Dm.slice(0,5).join(", ")}${Dm.length>5?", ...":""}`);
-         const im = null !== (fm = Tm.bones) && void 0 !== fm ? fm : {};
-         if (!(0, Om.m)(im)) throw new Om.e('"bones" is not an object');
+         LD.length > 0 && this.sI(pD.b.Warning, `${DD}: ${LD.join(", ")} not supported and ignored`), cD.length > 0 && this.sI(pD.b.Warning, `${DD}: unknown keys ignored: ${cD.slice(0,5).join(", ")}${cD.length>5?", ...":""}`);
+         const gD = null !== (wD = zD.bones) && void 0 !== wD ? wD : {};
+         if (!(0, ID.k)(gD)) throw new ID.b('"bones" is not an object');
```

#### 4258. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34929` → after: `L34358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L34358) · [Before (L34929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L34929)

```diff
-         if (Rm.length > 128) throw new Om.e(`${Rm.length} bones, over the 128 limit`);
+         if (RD.length > 128) throw new ID.b(`${RD.length} bones, over the 128 limit`);
```

#### 4259. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34935-L34936` → after: `L34364-L34365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34364-L34365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L34364-L34365) · [Before (L34935-L34936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L34935-L34936)

```diff
-           if (0 === hm.length || hm.length > Im) throw new Om.e("bone names must be 1-128 characters");
-           if (Em.has(mm)) throw new Om.e(`bone "${hm}" appears twice (bone names are case-insensitive)`);
+           if (0 === pD.length || pD.length > MD) throw new ID.b("bone names must be 1-128 characters");
+           if (UD.has(DD)) throw new ID.b(`bone "${pD}" appears twice (bone names are case-insensitive)`);
```

#### 4260. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34947` → after: `L34376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L34376) · [Before (L34947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L34947)

```diff
-           if ("number" !== typeof qm || !Number.isFinite(qm) || qm < 0 || qm > Om.h) throw new Om.e(`animation_length must be a number from 0 to ${Om.h}`);
+           if ("number" !== typeof GD || !Number.isFinite(GD) || GD < 0 || GD > ID.e) throw new ID.b(`animation_length must be a number from 0 to ${ID.e}`);
```

#### 4261. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34951` → after: `L34380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L34380) · [Before (L34951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L34951)

```diff
-         if ("boolean" !== typeof Vm) throw new Om.e("override_previous_animation must be true or false");
+         if ("boolean" !== typeof nD) throw new ID.b("override_previous_animation must be true or false");
```

#### 4262. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34967-L34968` → after: `L34396-L34397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34396-L34397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L34396-L34397) · [Before (L34967-L34968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L34967-L34968)

```diff
-           cm = (0, om.i)(Jm);
-         if (cm > om.d) throw new Om.e(`costs ${cm} to play each frame, over the ${om.d} limit: animate fewer bones or simplify its Molang`);
+           XD = (0, fD.g)(QD);
+         if (XD > fD.e) throw new ID.b(`costs ${XD} to play each frame, over the ${fD.e} limit: animate fewer bones or simplify its Molang`);
```

#### 4263. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34972` → after: `L34401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L34401) · [Before (L34972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L34972)

```diff
-         if (!(0, Om.m)(Tm)) throw new Om.e(`bone "${mm}" is not an object`);
+         if (!(0, ID.k)(zD)) throw new ID.b(`bone "${DD}" is not an object`);
```

#### 4264. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34974-L34976` → after: `L34403-L34405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34403-L34405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L34403-L34405) · [Before (L34974-L34976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L34974-L34976)

```diff
-           [hm.f.Rotation]: null,
-           [hm.f.Position]: null,
-           [hm.f.Scale]: null
+           [pD.e.Rotation]: null,
+           [pD.e.Position]: null,
+           [pD.e.Scale]: null
```

#### 4265. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34980-L34981` → after: `L34409-L34410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34409-L34410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L34409-L34410) · [Before (L34980-L34981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L34980-L34981)

```diff
-           if (void 0 === Am) throw new Om.e(`bone "${mm}": "${hm}" is not supported (only rotation, position and scale)`);
-           fm[Am] = this.compileChannel(Tm[hm], Am, `${mm}.${hm}`)
+           if (void 0 === sD) throw new ID.b(`bone "${DD}": "${pD}" is not supported (only rotation, position and scale)`);
+           wD[sD] = this.compileChannel(zD[pD], sD, `${DD}.${pD}`)
```

#### 4266. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34985-L34987` → after: `L34414-L34416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34414-L34416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L34414-L34416) · [Before (L34985-L34987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L34985-L34987)

```diff
-           rotation: fm[hm.f.Rotation],
-           position: fm[hm.f.Position],
-           scale: fm[hm.f.Scale]
+           rotation: wD[pD.e.Rotation],
+           position: wD[pD.e.Position],
+           scale: wD[pD.e.Scale]
```

#### 4267. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34994` → after: `L34423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L34423) · [Before (L34994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L34994)

```diff
-           dataPoints: (0, Om.o)(mm, Tm, fm),
+           dataPoints: (0, ID.m)(DD, zD, wD),
```

#### 4268. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L34998` → after: `L34427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L34427) · [Before (L34998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L34998)

```diff
-         else if ((0, Om.m)(mm) && mm.post) Am.push({
+         else if ((0, ID.k)(DD) && DD.post) sD.push({
```

#### 4269. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35000-L35001` → after: `L34429-L34430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34429-L34430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L34429-L34430) · [Before (L35000-L35001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35000-L35001)

```diff
-           dataPoints: (0, Om.o)(mm, Tm, fm),
-           catmullRom: (0, Om.u)(mm, fm),
+           dataPoints: (0, ID.m)(DD, zD, wD),
+           catmullRom: (0, ID.p)(DD, wD),
```

#### 4270. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35005` → after: `L34434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L34434) · [Before (L35005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35005)

```diff
-           if (!(0, Om.m)(mm)) throw new Om.e(`${fm} must be a value, an array or a map of keyframes`);
+           if (!(0, ID.k)(DD)) throw new ID.b(`${wD} must be a value, an array or a map of keyframes`);
```

#### 4271. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35008` → after: `L34437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L34437) · [Before (L35008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35008)

```diff
-             if (hm.length > 2048) throw new Om.e(`${fm} has ${hm.length} keyframes, over the 2048 limit`);
+             if (pD.length > 2048) throw new ID.b(`${wD} has ${pD.length} keyframes, over the 2048 limit`);
```

#### 4272. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35011` → after: `L34440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L34440) · [Before (L35011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35011)

```diff
-                 xm = `${fm}@${am}`;
+                 rD = `${wD}@${KD}`;
```

#### 4273. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35013-L35015` → after: `L34442-L34444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34442-L34444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L34442-L34444) · [Before (L35013-L35015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35013-L35015)

```diff
-                 time: (0, Om.q)(am, fm),
-                 dataPoints: (0, Om.o)(hm, Tm, xm),
-                 catmullRom: !!(0, Om.m)(hm) && (0, Om.u)(hm, xm),
+                 time: (0, ID.n)(KD, wD),
+                 dataPoints: (0, ID.m)(pD, zD, rD),
+                 catmullRom: !!(0, ID.k)(pD) && (0, ID.p)(pD, rD),
```

#### 4274. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35021-L35022` → after: `L34450-L34451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34450-L34451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L34450-L34451) · [Before (L35021-L35022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35021-L35022)

```diff
-         if (0 === Am.length) throw new Om.e(`${fm} has no keyframes`);
-         if (this.keyframeCount += Am.length, this.keyframeCount > 2e4) throw new Om.e("the file has over 20000 keyframes");
+         if (0 === sD.length) throw new ID.b(`${wD} has no keyframes`);
+         if (this.keyframeCount += sD.length, this.keyframeCount > 2e4) throw new ID.b("the file has over 20000 keyframes");
```

#### 4275. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35025-L35026` → after: `L34454-L34455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34454-L34455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L34454-L34455) · [Before (L35025-L35026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35025-L35026)

```diff
-           if (Am[am].time - Am[am - 1].time < hm.j) throw new Om.e(`${fm} has two keyframes at ${Am[am].time}s`);
-         return (0, Om.k)(Am), {
+           if (sD[KD].time - sD[KD - 1].time < pD.i) throw new ID.b(`${wD} has two keyframes at ${sD[KD].time}s`);
+         return (0, ID.i)(sD), {
```

#### 4276. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35052` → after: `L34481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L34481) · [Before (L35052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35052)

```diff
-         return null !== (fm = hm.constant) && void 0 !== fm ? fm : hm
+         return null !== (wD = pD.constant) && void 0 !== wD ? wD : pD
```

#### 4277. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35055-L35059` → after: `L34484-L34488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34484-L34488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L34484-L34488) · [Before (L35055-L35059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35055-L35059)

```diff
-         if ("number" === typeof mm) return (0, Ym.g)(Zm(mm, Tm));
-         if ("string" !== typeof mm) throw new Om.e(`${Tm}: expected a number or a Molang string`);
-         if (this.molangChars += mm.length, this.molangChars > 65536) throw new Om.e("the file has over 65536 characters of Molang");
-         if (!this.variables.reserve(mm)) throw new Om.e(`${Tm}: the pack reads too many different variables`);
-         const fm = (0, Ym.f)(mm, {
+         if ("number" === typeof DD) return (0, BD.k)(PD(DD, zD));
+         if ("string" !== typeof DD) throw new ID.b(`${zD}: expected a number or a Molang string`);
+         if (this.molangChars += DD.length, this.molangChars > 65536) throw new ID.b("the file has over 65536 characters of Molang");
+         if (!this.variables.reserve(DD)) throw new ID.b(`${zD}: the pack reads too many different variables`);
+         const wD = (0, BD.g)(DD, {
```

#### 4278. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35062-L35063` → after: `L34491-L34492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34491-L34492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L34491-L34492) · [Before (L35062-L35063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35062-L35063)

```diff
-         if (!fm.ok) throw new Om.e(`${Tm}: ${fm.error}`);
-         return null === fm.value.constant ? fm.value : (0, Ym.g)(Zm(fm.value.constant, Tm))
+         if (!wD.ok) throw new ID.b(`${zD}: ${wD.error}`);
+         return null === wD.value.constant ? wD.value : (0, BD.k)(PD(wD.value.constant, zD))
```

#### 4279. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35068` → after: `L34497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L34497) · [Before (L35068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35068)

```diff
-         if (null === fm || fm < 0 || fm > Om.h) throw new Om.e(`${Tm} must be a constant number of seconds from 0 to ${Om.h}`);
+         if (null === wD || wD < 0 || wD > ID.e) throw new ID.b(`${zD} must be a constant number of seconds from 0 to ${ID.e}`);
```

#### 4280. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35081` → after: `L34510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L34510) · [Before (L35081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35081)

```diff
-       if (!Number.isFinite(mm) || Math.abs(mm) > Vm) throw new Om.e(`${Tm}: ${mm} is not a finite number within \xb11000000`);
+       if (!Number.isFinite(DD) || Math.abs(DD) > nD) throw new ID.b(`${zD}: ${DD} is not a finite number within \xb11000000`);
```

#### 4281. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35086-L35089` → after: `L34515-L34518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34515-L34518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L34515-L34518) · [Before (L35086-L35089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35086-L35089)

```diff
-       if (void 0 === mm || !1 === mm) return hm.i.Once;
-       if (!0 === mm) return hm.i.Loop;
-       if ("hold_on_last_frame" === mm) return hm.i.Hold;
-       throw new Om.e(`loop ${JSON.stringify(mm)} is not supported (true, false or "hold_on_last_frame")`)
+       if (void 0 === DD || !1 === DD) return pD.h.Once;
+       if (!0 === DD) return pD.h.Loop;
+       if ("hold_on_last_frame" === DD) return pD.h.Hold;
+       throw new ID.b(`loop ${JSON.stringify(DD)} is not supported (true, false or "hold_on_last_frame")`)
```

#### 4282. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35105` → after: `L34534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L34534) · [Before (L35105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35105)

```diff
-                 message: `${Am.id} is already defined by another file; the first definition is kept`
+                 message: `${sD.id} is already defined by another file; the first definition is kept`
```

#### 4283. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35117` → after: `L34546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L34546) · [Before (L35117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35117)

```diff
-         return null !== (Tm = null !== (fm = this.byId.get(mm)) && void 0 !== fm ? fm : this.byShortName.get(mm)) && void 0 !== Tm ? Tm : null
+         return null !== (zD = null !== (wD = this.byId.get(DD)) && void 0 !== wD ? wD : this.byShortName.get(DD)) && void 0 !== zD ? zD : null
```

#### 4284. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35140` → after: `L34569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L34569) · [Before (L35140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35140)

```diff
-   37446: (mm, Tm, fm) => {
+   37376: (DD, zD, wD) => {
```

#### 4285. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35143-L35144` → after: `L34572-L34573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34572-L34573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L34572-L34573) · [Before (L35143-L35144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35143-L35144)

```diff
-       f: () => am,
-       i: () => xm
+       h: () => KD,
+       j: () => rD
```

#### 4286. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35146` → after: `L34575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L34575) · [Before (L35146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35146)

```diff
-     var hm = fm(37411);
+     var pD = wD(37351);
```

#### 4287. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35155` → after: `L34584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L34584) · [Before (L35155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35155)

```diff
-         case hm.i.Once:
+         case pD.h.Once:
```

#### 4288. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35157` → after: `L34586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L34586) · [Before (L35157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35157)

```diff
-         case hm.i.Hold:
+         case pD.h.Hold:
```

#### 4289. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35159` → after: `L34588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L34588) · [Before (L35159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35159)

```diff
-         case hm.i.Loop: {
+         case pD.h.Loop: {
```

#### 4290. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35182` → after: `L34611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L34611) · [Before (L35182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35182)

```diff
-       if (null !== Em && Math.abs(Em.time - Tm) < hm.j ? Om = Em : null !== om && Math.abs(om.time - Tm) < hm.j ? Om = om : null === Em || !Em.step && null !== om ? null !== om && null === Em && (Om = om) : Om = Em, null !== Om) return void im(Om, Tm, Am, am);
+       if (null !== UD && Math.abs(UD.time - zD) < pD.i ? ID = UD : null !== fD && Math.abs(fD.time - zD) < pD.i ? ID = fD : null === UD || !UD.step && null !== fD ? null !== fD && null === UD && (ID = fD) : ID = UD, null !== ID) return void gD(ID, zD, sD, KD);
```

#### 4291. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35206` → after: `L34635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L34635) · [Before (L35206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35206)

```diff
-           xm = mm[0 === Am ? Am : Am - 1],
+           rD = DD[0 === sD ? sD : sD - 1],
```

#### 4292. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35220` → after: `L34649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L34649) · [Before (L35220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35220)

```diff
-       }(mm.time > Tm || Math.abs(mm.time - Tm) < hm.j ? mm.pre : mm.post, fm, Am)
+       }(DD.time > zD || Math.abs(DD.time - zD) < pD.i ? DD.pre : DD.post, wD, sD)
```

#### 4293. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35224` → after: `L34653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L34653) · [Before (L35224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35224)

```diff
-       return "number" === typeof mm ? mm : mm.evaluate(Tm)
+       return "number" === typeof DD ? DD : DD.evaluate(zD)
```

#### 4294. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35227` → after: `L34656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L34656) · [Before (L35227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35227)

```diff
-   37411: (mm, Tm, fm) => {
+   37351: (DD, zD, wD) => {
```

#### 4295. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35230-L35232` → after: `L34659-L34661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34659-L34661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L34659-L34661) · [Before (L35230-L35232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35230-L35232)

```diff
-       f: () => Am,
-       i: () => am,
-       j: () => hm
+       e: () => sD,
+       h: () => KD,
+       i: () => pD
```

#### 4296. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35245` → after: `L34674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L34674) · [Before (L35245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35245)

```diff
-   37430: (mm, Tm, fm) => {
+   37365: (DD, zD, wD) => {
```

#### 4297. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35247-L35248` → after: `L34676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L34676) · [Before (L35247-L35248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35247-L35248)

```diff
-       b: () => Am,
-       d: () => hm,
+       c: () => sD,
```

#### 4298. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35250` → after: `L34678-L34679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34678-L34679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L34678-L34679) · [Before (L35250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35250)

```diff
-       i: () => pm
+       f: () => BD,
+       g: () => AD
```

#### 4299. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35265` → after: `L34694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L34694) · [Before (L35265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35265)

```diff
-         Tm = Om(mm.blendWeight) + (null !== (fm = null === (hm = mm.animTimeUpdate) || void 0 === hm ? void 0 : hm.cost) && void 0 !== fm ? fm : 0);
+         zD = ID(DD.blendWeight) + (null !== (wD = null === (pD = DD.animTimeUpdate) || void 0 === pD ? void 0 : pD.cost) && void 0 !== wD ? wD : 0);
```

#### 4300. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35279` → after: `L34708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L34708) · [Before (L35279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35279)

```diff
-       return fm && hm > 1 ? xm + Am + (hm >= 3 ? Dm : hm) * Tm : am + Am + Math.min(wm, hm) * Tm
+       return wD && pD > 1 ? rD + sD + (pD >= 3 ? cD : pD) * zD : KD + sD + Math.min(LD, pD) * zD
```

#### 4301. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35310` → after: `L34739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L34739) · [Before (L35310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35310)

```diff
-   37437: (mm, Tm, fm) => {
+   37369: (DD, zD, wD) => {
```

#### 4302. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35313` → after: `L34742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L34742) · [Before (L35313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35313)

```diff
-       f: () => am,
+       g: () => KD,
```

#### 4303. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35315-L35316` → after: `L34744-L34745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34744-L34745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L34744-L34745) · [Before (L35315-L35316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35315-L35316)

```diff
-       k: () => im,
-       o: () => Dm
+       j: () => gD,
+       m: () => cD
```

#### 4304. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35318` → after: `L34747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L34747) · [Before (L35318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35318)

```diff
-     var hm = fm(37417);
+     var pD = wD(37358);
```

#### 4305. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35340` → after: `L34769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L34769) · [Before (L35340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35340)

```diff
-       Dm[hm.e.LifeTime] = fm, Dm[hm.e.DeltaTime] = am, Dm[hm.e.GroundSpeed] = Tm[Am.GroundSpeed], Dm[hm.e.ModifiedMoveSpeed] = Tm[Am.GroundSpeed], Dm[hm.e.ModifiedDistanceMoved] = xm, Dm[hm.e.VerticalSpeed] = Tm[Am.VerticalSpeed], Dm[hm.e.IsOnGround] = Tm[Am.OnGround], Dm[hm.e.Is … [truncated]
+       cD[pD.d.LifeTime] = wD, cD[pD.d.DeltaTime] = KD, cD[pD.d.GroundSpeed] = zD[sD.GroundSpeed], cD[pD.d.ModifiedMoveSpeed] = zD[sD.GroundSpeed], cD[pD.d.ModifiedDistanceMoved] = rD, cD[pD.d.VerticalSpeed] = zD[sD.VerticalSpeed], cD[pD.d.IsOnGround] = zD[sD.OnGround], cD[pD.d.Is … [truncated]
```

#### 4306. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35349` → after: `L34778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L34778) · [Before (L35349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35349)

```diff
-   37230: (mm, Tm, fm) => {
+   37143: (DD, zD, wD) => {
```

#### 4307. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35352-L35353` → after: `L34781-L34782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34781-L34782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L34781-L34782) · [Before (L35352-L35353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35352-L35353)

```diff
-       e: () => im,
-       g: () => Rm,
+       d: () => gD,
+       h: () => RD,
```

#### 4308. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35410` → after: `L34839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L34839) · [Before (L35410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35410)

```diff
-   37395: (mm, Tm, fm) => {
+   37335: (DD, zD, wD) => {
```

#### 4309. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35412-L35414` → after: `L34841-L34842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34841-L34842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L34841-L34842) · [Before (L35412-L35414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35412-L35414)

```diff
-       c: () => Pm,
-       e: () => Xm,
-       f: () => Cm,
+       b: () => iD,
+       d: () => SD,
```

#### 4310. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35417` → after: `L34845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L34845) · [Before (L35417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35417)

```diff
-       l: () => gm,
+       k: () => vD,
```

#### 4311. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35419` → after: `L34847-L34848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34847-L34848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L34847-L34848) · [Before (L35419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35419)

```diff
-       q: () => tm
+       n: () => eD,
+       p: () => uD
```

#### 4312. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35421-L35425` → after: `L34850-L34854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34850-L34854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L34850-L34854) · [Before (L35421-L35425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35421-L35425)

```diff
-     var hm = fm(649),
-       Am = fm(645),
-       am = fm(37154),
-       xm = fm(37401),
-       wm = fm(37405);
+     var pD = wD(616),
+       sD = wD(608),
+       KD = wD(37037),
+       rD = wD(37342),
+       LD = wD(37347);
```

#### 4313. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35440-L35442` → after: `L34869-L34871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34869-L34871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L34869-L34871) · [Before (L35440-L35442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35440-L35442)

```diff
-       if (void 0 === mm || "add" === mm) return xm.e.Add;
-       if ("override" === mm) return xm.e.Override;
-       throw new Dm(`${Tm} must be "add" or "override"`)
+       if (void 0 === DD || "add" === DD) return rD.j.Add;
+       if ("override" === DD) return rD.j.Override;
+       throw new cD(`${zD} must be "add" or "override"`)
```

#### 4314. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35447` → after: `L34876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L34876) · [Before (L35447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35447)

```diff
-       if (!Array.isArray(mm) || 0 === mm.length || mm.length > 128) throw new Dm(`${Tm} must list 1-128 bone names`);
+       if (!Array.isArray(DD) || 0 === DD.length || DD.length > 128) throw new cD(`${zD} must list 1-128 bone names`);
```

#### 4315. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35449` → after: `L34878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L34878) · [Before (L35449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35449)

```diff
-         if ("string" !== typeof fm || 0 === fm.length || fm.length > 128) throw new Dm(`${Tm} must list bone names`);
+         if ("string" !== typeof wD || 0 === wD.length || wD.length > 128) throw new cD(`${zD} must list bone names`);
```

#### 4316. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35455` → after: `L34884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L34884) · [Before (L35455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35455)

```diff
-       if ("number" !== typeof mm || !Number.isFinite(mm) || mm < fm || mm > hm) throw new Dm(`${Am} must be a number from ${fm} to ${hm}`);
+       if ("number" !== typeof DD || !Number.isFinite(DD) || DD < wD || DD > pD) throw new cD(`${sD} must be a number from ${wD} to ${pD}`);
```

#### 4317. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35460` → after: `L34889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L34889) · [Before (L35460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35460)

```diff
-       if (!(0, wm.m)(mm)) throw new Dm(`${Tm} must be an object`);
+       if (!(0, LD.k)(DD)) throw new cD(`${zD} must be an object`);
```

#### 4318. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35466` → after: `L34895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L34895) · [Before (L35466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35466)

```diff
-         if (!Tm.includes(hm)) throw new Dm(`${fm}: unknown key "${hm}"`)
+         if (!zD.includes(pD)) throw new cD(`${wD}: unknown key "${pD}"`)
```

#### 4319. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35468-L35471` → after: `L34897-L34900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34897-L34900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L34897-L34900) · [Before (L35468-L35471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35468-L35471)

```diff
-     var qm = fm(37423),
-       jm = fm(37430),
-       Vm = fm(37411),
-       Im = fm(37437);
+     var GD = wD(37363),
+       hD = wD(37365),
+       nD = wD(37351),
+       MD = wD(37369);
```

#### 4320. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35486` → after: `L34915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L34915) · [Before (L35486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35486)

```diff
-       if (mm.length > Km) return hm(`file is ${mm.length} characters, over the ${Km} limit`);
+       if (DD.length > OD) return pD(`file is ${DD.length} characters, over the ${OD} limit`);
```

#### 4321. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35491` → after: `L34920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L34920) · [Before (L35491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35491)

```diff
-         return hm(`invalid JSON: ${am.message}`)
+         return pD(`invalid JSON: ${KD.message}`)
```

#### 4322. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35508` → after: `L34937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L34937) · [Before (L35508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35508)

```diff
-         return (0, wm.m)(Tm) && "string" === typeof Tm.target ? Tm.target : null
+         return (0, LD.k)(zD) && "string" === typeof zD.target ? zD.target : null
```

#### 4323. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35516` → after: `L34945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L34945) · [Before (L35516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35516)

```diff
-         for (const [fm, hm] of Im.f) this.inputIndexByName.set(fm, hm)
+         for (const [wD, pD] of MD.g) this.inputIndexByName.set(wD, pD)
```

#### 4324. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35520` → after: `L34949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L34949) · [Before (L35520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35520)

```diff
-         if (Ym(Tm, ["format_version", "target", "inputs", "variables", "layers", "actions"], "the file"), Tm.format_version !== xm.b) throw new Dm(`format_version must be "${xm.b}"`);
+         if (BD(zD, ["format_version", "target", "inputs", "variables", "layers", "actions"], "the file"), zD.format_version !== rD.e) throw new cD(`format_version must be "${rD.e}"`);
```

#### 4325. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35532-L35533` → after: `L34961-L34962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34961-L34962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L34961-L34962) · [Before (L35532-L35533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35532-L35533)

```diff
-             const fm = this.compileLayer(mm, `layers[${Tm}]`);
-             if (im.has(fm.name)) throw new Dm(`two layers are named "${fm.name}"`);
+             const wD = this.compileLayer(DD, `layers[${zD}]`);
+             if (gD.has(wD.name)) throw new cD(`two layers are named "${wD.name}"`);
```

#### 4326. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35546-L35547` → after: `L34975-L34976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34975-L34976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L34975-L34976) · [Before (L35546-L35547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35546-L35547)

```diff
-           Em = (0, jm.e)(pm);
-         if (Em > jm.b) throw new Dm(`its layers cost ${Em} to play each frame, over the ${jm.b} limit: use fewer layers or lighter clips`);
+           UD = (0, hD.f)(AD);
+         if (UD > hD.c) throw new cD(`its layers cost ${UD} to play each frame, over the ${hD.c} limit: use fewer layers or lighter clips`);
```

#### 4327. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35555-L35556` → after: `L34984-L34985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34984-L34985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L34984-L34985) · [Before (L35555-L35556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35555-L35556)

```diff
-           const hm = `inputs.${mm}`;
-           if (!Jm.test(mm) || this.inputIndexByName.has(mm)) throw new Dm(`${hm}: input names must be identifiers distinct from the engine inputs`);
+           const pD = `inputs.${DD}`;
+           if (!QD.test(DD) || this.inputIndexByName.has(DD)) throw new cD(`${pD}: input names must be identifiers distinct from the engine inputs`);
```

#### 4328. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35559` → after: `L34988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L34988) · [Before (L35559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35559)

```diff
-           const am = om(Am.rise, 0, 0, 1e3, `${hm}.rise`),
+           const KD = fD(sD.rise, 0, 0, 1e3, `${pD}.rise`),
```

#### 4329. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35562-L35567` → after: `L34991-L34996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34991-L34996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L34991-L34996) · [Before (L35562-L35567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35562-L35567)

```diff
-               from: this.engineInput(Am.from, `${hm}.from`),
-               gate: void 0 === Am.gate ? -1 : this.engineInput(Am.gate, `${hm}.gate`),
-               scale: om(Am.scale, 1, -1e6, Qm, `${hm}.scale`),
-               offset: om(Am.offset, 0, -1e6, Qm, `${hm}.offset`),
-               min: om(Am.min, -1e6, -1e6, Qm, `${hm}.min`),
-               max: om(Am.max, Qm, -1e6, Qm, `${hm}.max`),
+               from: this.engineInput(sD.from, `${pD}.from`),
+               gate: void 0 === sD.gate ? -1 : this.engineInput(sD.gate, `${pD}.gate`),
+               scale: fD(sD.scale, 1, -1e6, JD, `${pD}.scale`),
+               offset: fD(sD.offset, 0, -1e6, JD, `${pD}.offset`),
+               min: fD(sD.min, -1e6, -1e6, JD, `${pD}.min`),
+               max: fD(sD.max, JD, -1e6, JD, `${pD}.max`),
```

#### 4330. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35569` → after: `L34998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R34998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L34998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L34998) · [Before (L35569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35569)

```diff
-               fall: om(Am.fall, am, 0, 1e3, `${hm}.fall`)
+               fall: fD(sD.fall, KD, 0, 1e3, `${pD}.fall`)
```

#### 4331. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35571` → after: `L35000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L35000) · [Before (L35571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35571)

```diff
-           if (xm.min > xm.max) throw new Dm(`${hm}: min is above max`);
+           if (rD.min > rD.max) throw new cD(`${pD}: min is above max`);
```

#### 4332. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35583` → after: `L35012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L35012) · [Before (L35583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35583)

```diff
-           if (!Jm.test(xm)) throw new Dm(`variables.${xm}: variable names must be identifiers`);
+           if (!QD.test(rD)) throw new cD(`variables.${rD}: variable names must be identifiers`);
```

#### 4333. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35585` → after: `L35014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L35014) · [Before (L35585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35585)

```diff
-           if (am.has(mm)) throw new Dm(`variables.${xm}: another variable has this name in a different case`);
+           if (KD.has(DD)) throw new cD(`variables.${rD}: another variable has this name in a different case`);
```

#### 4334. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35591` → after: `L35020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L35020) · [Before (L35591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35591)

```diff
-               value: om(fm, 0, -1e6, Qm, `variables.${xm}`)
+               value: fD(wD, 0, -1e6, JD, `variables.${rD}`)
```

#### 4335. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35596` → after: `L35025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L35025) · [Before (L35596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35596)

```diff
-           if (void 0 === wm) throw new Dm(`variables.${xm} must be a number or name an engine input or one of the binding's inputs`);
+           if (void 0 === LD) throw new cD(`variables.${rD} must be a number or name an engine input or one of the binding's inputs`);
```

#### 4336. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35611-L35612` → after: `L35040-L35041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35040-L35041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L35040-L35041) · [Before (L35611-L35612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35611-L35612)

```diff
-         if ("string" !== typeof hm || !Jm.test(hm)) throw new Dm(`${Tm}.name must be an identifier`);
-         Tm = `layer "${hm}"`;
+         if ("string" !== typeof pD || !QD.test(pD)) throw new cD(`${zD}.name must be an identifier`);
+         zD = `layer "${pD}"`;
```

#### 4337. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35617-L35618` → after: `L35046-L35047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35046-L35047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L35046-L35047) · [Before (L35617-L35618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35617-L35618)

```diff
-           if (nm.some((mm => void 0 !== fm[mm]))) throw new Dm(`${Tm}: use either "states" or a single "clip"/"blend", not both`);
-           this.compileStates(Om(fm.states, `${Tm}.states`), Tm, Am), am = null !== (wm = Am.get(xm.c)) && void 0 !== wm ? wm : null, Am.delete(xm.c)
+           if (ED.some((DD => void 0 !== wD[DD]))) throw new cD(`${zD}: use either "states" or a single "clip"/"blend", not both`);
+           this.compileStates(ID(wD.states, `${zD}.states`), zD, sD), KD = null !== (LD = sD.get(rD.g)) && void 0 !== LD ? LD : null, sD.delete(rD.g)
```

#### 4338. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35625-L35628` → after: `L35054-L35057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35054-L35057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L35054-L35057) · [Before (L35625-L35628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35625-L35628)

```diff
-           mode: pm(fm.mode, `${Tm}.mode`),
-           bones: Em(fm.bones, `${Tm}.bones`),
-           weight: void 0 === fm.weight ? im(1) : this.valueSource(fm.weight, `${Tm}.weight`),
-           transitionSeconds: om(fm.transition, .2, 0, 10, `${Tm}.transition`),
+           mode: AD(wD.mode, `${zD}.mode`),
+           bones: UD(wD.bones, `${zD}.bones`),
+           weight: void 0 === wD.weight ? gD(1) : this.valueSource(wD.weight, `${zD}.weight`),
+           transitionSeconds: fD(wD.transition, .2, 0, 10, `${zD}.transition`),
```

#### 4339. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35635` → after: `L35064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L35064) · [Before (L35635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35635)

```diff
-         if (0 === hm.length || hm.length > 64) throw new Dm(`${Tm}.states must list 1-64 states`);
+         if (0 === pD.length || pD.length > 64) throw new cD(`${zD}.states must list 1-64 states`);
```

#### 4340. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35637` → after: `L35066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L35066) · [Before (L35637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35637)

```diff
-           if (wm !== xm.c && !this.options.stateNames.has(wm)) throw new Dm(`${Tm}: "${wm}" is not a state of this target`);
+           if (LD !== rD.g && !this.options.stateNames.has(LD)) throw new cD(`${zD}: "${LD}" is not a state of this target`);
```

#### 4341. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35644-L35645` → after: `L35073-L35074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35073-L35074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L35073-L35074) · [Before (L35644-L35645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35644-L35645)

```diff
-               if (!Object.prototype.hasOwnProperty.call(mm, wm)) throw new Dm(`${Tm}: "${hm}" shares "${wm}", which the layer does not define`);
-               if (Am.has(hm)) throw new Dm(`${Tm}: "${hm}" shares itself through a cycle`);
+               if (!Object.prototype.hasOwnProperty.call(DD, LD)) throw new cD(`${zD}: "${pD}" shares "${LD}", which the layer does not define`);
+               if (sD.has(pD)) throw new cD(`${zD}: "${pD}" shares itself through a cycle`);
```

#### 4342. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35650` → after: `L35079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L35079) · [Before (L35650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35650)

```diff
-             const im = this.compileState(wm, hm, `${Tm} state "${hm}"`);
+             const gD = this.compileState(LD, pD, `${zD} state "${pD}"`);
```

#### 4343. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35658-L35659` → after: `L35087-L35088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35087-L35088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L35087-L35088) · [Before (L35658-L35659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35658-L35659)

```diff
-         const Am = void 0 === hm.rate ? im(1) : this.valueSource(hm.rate, `${fm}.rate`);
-         if (Am.input < 0 && Am.constant < 0) throw new Dm(`${fm}.rate must not be negative`);
+         const sD = void 0 === pD.rate ? gD(1) : this.valueSource(pD.rate, `${wD}.rate`);
+         if (sD.input < 0 && sD.constant < 0) throw new cD(`${wD}.rate must not be negative`);
```

#### 4344. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35664` → after: `L35093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L35093) · [Before (L35664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35664)

```diff
-             if (hm > 32 || Math.abs(fm - 1 / hm) > 5e-4) throw new Dm(`${Tm} must divide a cycle evenly into at most 32 parts (1, 0.5, 0.333, 0.25, ...)`);
+             if (pD > 32 || Math.abs(wD - 1 / pD) > 5e-4) throw new cD(`${zD} must divide a cycle evenly into at most 32 parts (1, 0.5, 0.333, 0.25, ...)`);
```

#### 4345. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35666` → after: `L35095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L35095) · [Before (L35666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35666)

```diff
-           }(hm.rest, `${fm}.rest`),
+           }(pD.rest, `${wD}.rest`),
```

#### 4346. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35668` → after: `L35097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L35097) · [Before (L35668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35668)

```diff
-             if (am > 0 && !mm.some((mm => mm.strideBlocks > 0))) throw new Dm(`${fm}.rest needs a clip with a stride, as only a gait comes to rest`);
+             if (KD > 0 && !DD.some((DD => DD.strideBlocks > 0))) throw new cD(`${wD}.rest needs a clip with a stride, as only a gait comes to rest`);
```

#### 4347. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35672` → after: `L35101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L35101) · [Before (L35672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35672)

```diff
-           if (void 0 !== hm.blend) throw new Dm(`${fm}: use either "clip" or "blend"`);
+           if (void 0 !== pD.blend) throw new cD(`${wD}: use either "clip" or "blend"`);
```

#### 4348. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35676` → after: `L35105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L35105) · [Before (L35676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35676)

```diff
-               clip: this.clip(hm.clip, `${fm}.clip`),
+               clip: this.clip(pD.clip, `${wD}.clip`),
```

#### 4349. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35678` → after: `L35107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L35107) · [Before (L35678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35678)

```diff
-               strideBlocks: Rm(hm.stride, `${fm}.stride`)
+               strideBlocks: RD(pD.stride, `${wD}.stride`)
```

#### 4350. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35685-L35688` → after: `L35114-L35117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35114-L35117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L35114-L35117) · [Before (L35685-L35688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35685-L35688)

```diff
-         if (void 0 !== hm.stride) throw new Dm(`${fm}: give each blend clip its own stride`);
-         if (void 0 === hm.blend) throw new Dm(`${fm}: needs a "clip" or a "blend"`);
-         const wm = Om(hm.blend, `${fm}.blend`);
-         Ym(wm, ["input", "clips"], `${fm}.blend`);
+         if (void 0 !== pD.stride) throw new cD(`${wD}: give each blend clip its own stride`);
+         if (void 0 === pD.blend) throw new cD(`${wD}: needs a "clip" or a "blend"`);
+         const LD = ID(pD.blend, `${wD}.blend`);
+         BD(LD, ["input", "clips"], `${wD}.blend`);
```

#### 4351. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35690-L35691` → after: `L35119-L35120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35119-L35120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L35119-L35120) · [Before (L35690-L35691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35690-L35691)

```diff
-         if (!Array.isArray(pm) || 0 === pm.length || pm.length > 16) throw new Dm(`${fm}.blend.clips must list 1-16 clips`);
-         const Em = pm.map(((mm, Tm) => this.compileBlendChild(mm, `${fm}.blend.clips[${Tm}]`)));
+         if (!Array.isArray(AD) || 0 === AD.length || AD.length > 16) throw new cD(`${wD}.blend.clips must list 1-16 clips`);
+         const UD = AD.map(((DD, zD) => this.compileBlendChild(DD, `${wD}.blend.clips[${zD}]`)));
```

#### 4352. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35693` → after: `L35122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L35122) · [Before (L35693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35693)

```diff
-           if (Em[im].at <= Em[im - 1].at) throw new Dm(`${fm}.blend.clips must be in increasing "at" order`);
+           if (UD[gD].at <= UD[gD - 1].at) throw new cD(`${wD}.blend.clips must be in increasing "at" order`);
```

#### 4353. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35697` → after: `L35126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L35126) · [Before (L35697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35697)

```diff
-           blendInput: this.input(wm.input, `${fm}.blend.input`),
+           blendInput: this.input(LD.input, `${wD}.blend.input`),
```

#### 4354. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35708-L35709` → after: `L35137-L35138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35137-L35138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L35137-L35138) · [Before (L35708-L35709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35708-L35709)

```diff
-         if (Array.isArray(mm) && (mm.length < 2 || mm.length > 3)) throw new Dm(`${Tm} must be [clip, at] or [clip, at, stride]`);
-         if (Ym(fm, ["clip", "at", "stride"], Tm), "number" !== typeof fm.at) throw new Dm(`${Tm}.at must be a number`);
+         if (Array.isArray(DD) && (DD.length < 2 || DD.length > 3)) throw new cD(`${zD} must be [clip, at] or [clip, at, stride]`);
+         if (BD(wD, ["clip", "at", "stride"], zD), "number" !== typeof wD.at) throw new cD(`${zD}.at must be a number`);
```

#### 4355. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35711-L35713` → after: `L35140-L35142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35140-L35142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L35140-L35142) · [Before (L35711-L35713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35711-L35713)

```diff
-           clip: this.clip(fm.clip, `${Tm}.clip`),
-           at: om(fm.at, 0, -1e6, Qm, `${Tm}.at`),
-           strideBlocks: Rm(fm.stride, `${Tm}.stride`)
+           clip: this.clip(wD.clip, `${zD}.clip`),
+           at: fD(wD.at, 0, -1e6, JD, `${zD}.at`),
+           strideBlocks: RD(wD.stride, `${zD}.stride`)
```

#### 4356. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35722-L35723` → after: `L35151-L35152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35151-L35152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L35151-L35152) · [Before (L35722-L35723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35722-L35723)

```diff
-           const mm = `actions.${Am}`;
-           if (!Jm.test(Am)) throw new Dm(`${mm}: action names must be identifiers`);
+           const DD = `actions.${sD}`;
+           if (!QD.test(sD)) throw new cD(`${DD}: action names must be identifiers`);
```

#### 4357. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35726-L35727` → after: `L35155-L35156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35155-L35156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L35155-L35156) · [Before (L35726-L35727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35726-L35727)

```diff
-           const am = this.clip(fm.clip, `${mm}.clip`);
-           if (xm.f.has(Am) && am.clip.loop !== Vm.i.Once) throw new Dm(`${mm}: the game plays this action, so its clip must end (not loop or hold on its last frame)`);
+           const KD = this.clip(wD.clip, `${DD}.clip`);
+           if (rD.m.has(sD) && KD.clip.loop !== nD.h.Once) throw new cD(`${DD}: the game plays this action, so its clip must end (not loop or hold on its last frame)`);
```

#### 4358. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35731-L35734` → after: `L35160-L35163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35160-L35163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L35160-L35163) · [Before (L35731-L35734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35731-L35734)

```diff
-             mode: void 0 === fm.mode ? xm.e.Override : pm(fm.mode, `${mm}.mode`),
-             bones: Em(fm.bones, `${mm}.bones`),
-             fadeInSeconds: om(fm.fadeIn, .1, 0, 10, `${mm}.fadeIn`),
-             fadeOutSeconds: om(fm.fadeOut, .1, 0, 10, `${mm}.fadeOut`)
+             mode: void 0 === wD.mode ? rD.j.Override : AD(wD.mode, `${DD}.mode`),
+             bones: UD(wD.bones, `${DD}.bones`),
+             fadeInSeconds: fD(wD.fadeIn, .1, 0, 10, `${DD}.fadeIn`),
+             fadeOutSeconds: fD(wD.fadeOut, .1, 0, 10, `${DD}.fadeOut`)
```

#### 4359. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35740-L35743` → after: `L35169-L35172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35169-L35172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L35169-L35172) · [Before (L35740-L35743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35740-L35743)

```diff
-         if ("string" !== typeof mm || 0 === mm.length) throw new Dm(`${Tm} must name a clip`);
-         const fm = (0, qm.i)(this.options.pools, mm);
-         if ("ambiguous" === fm) throw new Dm(`${Tm}: several clips are called "${mm}"; use the full animation name`);
-         if ("noClip" === fm) throw new Dm(`${Tm}: no clip named "${mm}"`);
+         if ("string" !== typeof DD || 0 === DD.length) throw new cD(`${zD} must name a clip`);
+         const wD = (0, GD.k)(this.options.pools, DD);
+         if ("ambiguous" === wD) throw new cD(`${zD}: several clips are called "${DD}"; use the full animation name`);
+         if ("noClip" === wD) throw new cD(`${zD}: no clip named "${DD}"`);
```

#### 4360. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35747-L35748` → after: `L35176-L35177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35176-L35177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L35176-L35177) · [Before (L35747-L35748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35747-L35748)

```diff
-         const fm = "string" === typeof mm ? Im.f.get(mm) : void 0;
-         if (void 0 === fm) throw new Dm(`${Tm} must be one of ${[...Im.f.keys()].join(", ")}`);
+         const wD = "string" === typeof DD ? MD.g.get(DD) : void 0;
+         if (void 0 === wD) throw new cD(`${zD} must be one of ${[...MD.g.keys()].join(", ")}`);
```

#### 4361. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35753` → after: `L35182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L35182) · [Before (L35753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35753)

```diff
-         if (void 0 === fm) throw new Dm(`${Tm} must name an engine input or one of the binding's inputs`);
+         if (void 0 === wD) throw new cD(`${zD} must name an engine input or one of the binding's inputs`);
```

#### 4362. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35767` → after: `L35196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L35196) · [Before (L35767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35767)

```diff
-     var bm = fm(37441);
+     var xD = wD(37373);
```

#### 4363. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35774` → after: `L35203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L35203) · [Before (L35774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35774)

```diff
-       Hm = new Set([...hm.k, ...Am.r, Pm]),
+       lD = new Set([...pD.l, ...sD.p, iD]),
```

#### 4364. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35778-L35779` → after: `L35207-L35208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35207-L35208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L35207-L35208) · [Before (L35778-L35779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35778-L35779)

```diff
-       sm = new Set(am.e),
-       lm = new Set([...hm.o.filter((mm => !Xm.has(mm))), ...sm]),
+       yD = new Set(KD.d),
+       kD = new Set([...pD.n.filter((DD => !SD.has(DD))), ...yD]),
```

#### 4365. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35787` → after: `L35216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L35216) · [Before (L35787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35787)

```diff
-       return um(mm) ? rm : Hm
+       return eD(DD) ? ZD : lD
```

#### 4366. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35793` → after: `L35222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L35222) · [Before (L35793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35793)

```diff
-         hm = fm ? Mm : lm,
+         pD = wD ? mD : kD,
```

#### 4367. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35805-L35806` → after: `L35234-L35235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35234-L35235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L35234-L35235) · [Before (L35805-L35806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35805-L35806)

```diff
-       if (!fm && (xm.length > Sm || wm > em)) return am("animations", `${xm.length} files and ${wm} characters, over the ${Sm} file or ${em} character limit`), {
-         pool: new qm.d([]),
+       if (!wD && (rD.length > TD || LD > bD)) return KD("animations", `${rD.length} files and ${LD} characters, over the ${TD} file or ${bD} character limit`), {
+         pool: new GD.e([]),
```

#### 4368. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35825` → after: `L35254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L35254) · [Before (L35825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35825)

```diff
-           void 0 !== mm && (Rm.has(mm) ? am(Ym, `${mm} already has a clip file, ${Rm.get(mm).name}`) : Rm.set(mm, {
+           void 0 !== DD && (RD.has(DD) ? KD(BD, `${DD} already has a clip file, ${RD.get(DD).name}`) : RD.set(DD, {
```

#### 4369. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35831` → after: `L35260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L35260) · [Before (L35831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35831)

```diff
-           null === mm ? am(Ym, 'has no target: set "target" to the mob or vehicle it animates') : Xm.has(mm) && !fm ? am(Ym, `packs can't animate ${mm}`) : hm.has(mm) ? im.has(mm) ? am(Ym, `${mm} already has a binding, in ${im.get(mm).name}`) : im.set(mm, {
+           null === DD ? KD(BD, 'has no target: set "target" to the mob or vehicle it animates') : SD.has(DD) && !wD ? KD(BD, `packs can't animate ${DD}`) : pD.has(DD) ? gD.has(DD) ? KD(BD, `${DD} already has a binding, in ${gD.get(DD).name}`) : gD.set(DD, {
```

#### 4370. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35834` → after: `L35263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L35263) · [Before (L35834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35834)

```diff
-           }) : am(Ym, `${mm} isn't a mob or vehicle packs can animate`)
+           }) : KD(BD, `${DD} isn't a mob or vehicle packs can animate`)
```

#### 4371. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35843` → after: `L35272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L35272) · [Before (L35843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35843)

```diff
-         om = new qm.d(Dm, (mm => Em.has(mm)));
+         fD = new GD.e(cD, (DD => UD.has(DD)));
```

#### 4372. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35848` → after: `L35277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L35277) · [Before (L35848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35848)

```diff
-         pool: new qm.d([jm])
+         pool: new GD.e([hD])
```

#### 4373. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35888` → after: `L35317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L35317) · [Before (L35888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35888)

```diff
-         diagnostics: [Wm(Am.file, `${fm} has no built-in animation to play these clips: add a binding for it`)]
+         diagnostics: [YD(sD.file, `${wD} has no built-in animation to play these clips: add a binding for it`)]
```

#### 4374. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35890` → after: `L35319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L35319) · [Before (L35890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35890)

```diff
-       const wm = cm(xm.text, `${Am.file} in the built-in ${fm} animation`, {
+       const LD = XD(rD.text, `${sD.file} in the built-in ${wD} animation`, {
```

#### 4375. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35895` → after: `L35324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L35324) · [Before (L35895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35895)

```diff
-       const Dm = [...(0, bm.g)(wm.binding)];
+       const cD = [...(0, xD.f)(LD.binding)];
```

#### 4376. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35906` → after: `L35335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L35335) · [Before (L35906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35906)

```diff
-           return (0, qm.h)(Tm.id)
+           return (0, GD.g)(zD.id)
```

#### 4377. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35910` → after: `L35339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L35339) · [Before (L35910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35910)

```diff
-           diagnostics: [...wm.diagnostics, Wm(Am.file, `none of its clips replaces one the ${fm} plays (${[...mm].join(", ")}): they play only by name`)]
+           diagnostics: [...LD.diagnostics, YD(sD.file, `none of its clips replaces one the ${wD} plays (${[...DD].join(", ")}): they play only by name`)]
```

#### 4378. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35924` → after: `L35353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L35353) · [Before (L35924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35924)

```diff
-   37441: (mm, Tm, fm) => {
+   37373: (DD, zD, wD) => {
```

#### 4379. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35926-L35927` → after: `L35355-L35356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35355-L35356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L35355-L35356) · [Before (L35926-L35927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35926-L35927)

```diff
-       d: () => Am,
-       g: () => xm,
+       c: () => sD,
+       f: () => rD,
```

#### 4380. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35930` → after: `L35359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L35359) · [Before (L35930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35930)

```diff
-     var hm = fm(37411);
+     var pD = wD(37351);
```

#### 4381. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35935` → after: `L35364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L35364) · [Before (L35935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35935)

```diff
-           return this.mask(mm.bones, `layer "${mm.name}"`)
+           return this.mask(DD.bones, `layer "${DD.name}"`)
```

#### 4382. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35938` → after: `L35367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L35367) · [Before (L35938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35938)

```diff
-         for (const hm of mm.actions.values()) this.boneIndices(hm.clip.clip), fm.set(hm.name, this.mask(hm.bones, `action "${hm.name}"`));
+         for (const pD of DD.actions.values()) this.boneIndices(pD.clip.clip), wD.set(pD.name, this.mask(pD.bones, `action "${pD.name}"`));
```

#### 4383. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35953` → after: `L35382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L35382) · [Before (L35953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35953)

```diff
-           this.animatesRig ||= mm.bones.some((mm => this.rig.namesBone(mm.name))), fm.length > 0 && this.warn(`${mm.id} animates bones ${this.rig.id} does not have: ${fm.map((mm=>mm.name)).join(", ")}`), this.boneIndicesByClip.set(mm, Tm)
+           this.animatesRig ||= DD.bones.some((DD => this.rig.namesBone(DD.name))), wD.length > 0 && this.warn(`${DD.id} animates bones ${this.rig.id} does not have: ${wD.map((DD=>DD.name)).join(", ")}`), this.boneIndicesByClip.set(DD, zD)
```

#### 4384. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L35962` → after: `L35391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L35391) · [Before (L35962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L35962)

```diff
-           mm < 0 ? (this.missing.add(hm), this.warn(`${Tm} masks bone ${hm}, which ${this.rig.id} does not have`)) : fm[mm] = 1
+           DD < 0 ? (this.missing.add(pD), this.warn(`${zD} masks bone ${pD}, which ${this.rig.id} does not have`)) : wD[DD] = 1
```

#### 4385. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36001` → after: `L35430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L35430) · [Before (L36001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L36001)

```diff
-         for (const mm of null !== (Tm = null === fm || void 0 === fm ? void 0 : fm.children) && void 0 !== Tm ? Tm : []) {
+         for (const DD of null !== (zD = null === wD || void 0 === wD ? void 0 : wD.children) && void 0 !== zD ? zD : []) {
```

#### 4386. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36007` → after: `L35436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L35436) · [Before (L36007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L36007)

```diff
-   37405: (mm, Tm, fm) => {
+   37347: (DD, zD, wD) => {
```

#### 4387. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36010` → after: `L35440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L35440) · [Before (L36010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L36010)

```diff
-       h: () => Om,
+       i: () => JD,
```

#### 4388. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36013-L36015` → after: `L35443-L35444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35443-L35444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L35443-L35444) · [Before (L36013-L36015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L36013-L36015)

```diff
-       o: () => Vm,
-       q: () => qm,
-       u: () => jm
+       n: () => GD,
+       p: () => hD
```

#### 4389. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36017-L36018` → after: `L35446-L35447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35446-L35447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L35446-L35447) · [Before (L36017-L36018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L36017-L36018)

```diff
-     var hm = fm(37411),
-       Am = fm(37417);
+     var pD = wD(37351),
+       sD = wD(37358);
```

#### 4390. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36024` → after: `L35453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L35453) · [Before (L36024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L36024)

```diff
-       return "" === mm || "0" === mm || mm.length > Am.b ? mm : am.test(mm) ? (-parseFloat(mm)).toString() : function(mm, Tm) {
+       return "" === DD || "0" === DD || DD.length > sD.c ? DD : KD.test(DD) ? (-parseFloat(DD)).toString() : function(DD, zD) {
```

#### 4391. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36045` → after: `L35474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L35474) · [Before (L36045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L36045)

```diff
-         if (-1 === hm) return mm.includes("=") ? `${mm};${Tm("")}` : Tm(mm);
+         if (-1 === pD) return DD.includes("=") ? `${DD};${zD("")}` : zD(DD);
```

#### 4392. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36048` → after: `L35477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L35477) · [Before (L36048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L36048)

```diff
-         return am.includes("=") ? `${mm};${Tm("")}` : `${Am};${Tm(am)}`
+         return KD.includes("=") ? `${DD};${zD("")}` : `${sD};${zD(KD)}`
```

#### 4393. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36102` → after: `L35531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L35531) · [Before (L36102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L36102)

```diff
-       if (!(fm >= 0 && fm <= Om)) throw new om(`${Tm}: keyframe time "${mm}" must be a number of seconds from 0 to ${Om}`);
+       if (!(wD >= 0 && wD <= ID)) throw new fD(`${zD}: keyframe time "${DD}" must be a number of seconds from 0 to ${ID}`);
```

#### 4394. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36110` → after: `L35539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L35539) · [Before (L36110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L36110)

```diff
-       throw new om(`${Tm}: lerp_mode ${JSON.stringify(fm)} is not supported (linear or catmullrom)`)
+       throw new fD(`${zD}: lerp_mode ${JSON.stringify(wD)} is not supported (linear or catmullrom)`)
```

#### 4395. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36120` → after: `L35549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L35549) · [Before (L36120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L36120)

```diff
-         if (Am && !xm && am.push(Im(Am, Tm, fm)), 0 === am.length) throw new om(`${fm}: a keyframe needs "post" and optionally "pre"`);
+         if (sD && !rD && KD.push(MD(sD, zD, wD)), 0 === KD.length) throw new fD(`${wD}: a keyframe needs "post" and optionally "pre"`);
```

#### 4396. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36130` → after: `L35559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L35559) · [Before (L36130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L36130)

```diff
-           case hm.f.Position:
+           case pD.e.Position:
```

#### 4397. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36132` → after: `L35561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L35561) · [Before (L36132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L36132)

```diff
-           case hm.f.Rotation:
+           case pD.e.Rotation:
```

#### 4398. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36134` → after: `L35563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L35563) · [Before (L36134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L36134)

```diff
-           case hm.f.Scale:
+           case pD.e.Scale:
```

#### 4399. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36139` → after: `L35568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L35568) · [Before (L36139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L36139)

```diff
-           if ("number" !== typeof fm && "string" !== typeof fm) throw new om(`${Tm}: vector elements must be numbers or Molang strings`);
+           if ("number" !== typeof wD && "string" !== typeof wD) throw new fD(`${zD}: vector elements must be numbers or Molang strings`);
```

#### 4400. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36144` → after: `L35573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L35573) · [Before (L36144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L36144)

```diff
-         if (3 !== mm.length) throw new om(`${Tm}: vectors must have 1 or 3 elements`);
+         if (3 !== DD.length) throw new fD(`${zD}: vectors must have 1 or 3 elements`);
```

#### 4401. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36147` → after: `L35576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L35576) · [Before (L36147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L36147)

```diff
-       throw new om(`${fm}: values must be numbers, Molang strings or [x, y, z]`)
+       throw new fD(`${wD}: values must be numbers, Molang strings or [x, y, z]`)
```

#### 4402. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36151` → after: `L35580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L35580) · [Before (L36151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L36151)

```diff
-       return "number" === typeof mm ? 0 === mm ? 0 : -mm : Dm(mm)
+       return "number" === typeof DD ? 0 === DD ? 0 : -DD : cD(DD)
```

#### 4403. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36172` → after: `L35601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L35601) · [Before (L36172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L36172)

```diff
-   37386: (mm, Tm, fm) => {
+   37332: (DD, zD, wD) => {
```

#### 4404. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36174` → after: `L35603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L35603) · [Before (L36174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L36174)

```diff
-       d: () => FT
+       e: () => Hz
```

#### 4405. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36272` → after: `L35701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L35701) · [Before (L36272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L36272)

```diff
-     var dT = fm(37395);
+     var tz = wD(37335);
```

#### 4406. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36374` → after: `L35803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L35803) · [Before (L36374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L36374)

```diff
-       return WT ??= (0, dT.q)(gT, "builtIn"), WT
+       return Yz ??= (0, tz.p)(Fz, "builtIn"), Yz
```

#### 4407. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36377` → after: `L35806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L35806) · [Before (L36377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L36377)

```diff
-   37417: (mm, Tm, fm) => {
+   37358: (DD, zD, wD) => {
```

#### 4408. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36452-L36455` → after: `L35881-L35884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35881-L35884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L35881-L35884) · [Before (L36452-L36455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L36452-L36455)

```diff
-       b: () => ym,
-       e: () => Hm,
-       f: () => Bm,
-       g: () => sm
+       c: () => WD,
+       d: () => lD,
+       g: () => oD,
+       k: () => yD
```

#### 4409. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36457` → after: `L35886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L35886) · [Before (L36457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L36457)

```diff
-     var Am = fm(37230);
+     var sD = wD(37143);
```

#### 4410. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36484` → after: `L35913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L35913) · [Before (L36484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L36484)

```diff
-         in_out_quad: mm => mm < .5 ? 2 * mm * mm : (4 - 2 * mm) * mm - 1,
+         in_out_quad: DD => DD < .5 ? 2 * DD * DD : (4 - 2 * DD) * DD - 1,
```

#### 4411. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36487` → after: `L35916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L35916) · [Before (L36487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L36487)

```diff
-         in_out_cubic: mm => mm < .5 ? 4 * mm * mm * mm : (mm - 1) * (2 * mm - 2) * (2 * mm - 2) + 1,
+         in_out_cubic: DD => DD < .5 ? 4 * DD * DD * DD : (DD - 1) * (2 * DD - 2) * (2 * DD - 2) + 1,
```

#### 4412. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36490` → after: `L35919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L35919) · [Before (L36490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L36490)

```diff
-         in_out_quart: mm => mm < .5 ? 8 * mm * mm * mm * mm : 1 - 8 * (mm - 1) * (mm - 1) * (mm - 1) * (mm - 1),
+         in_out_quart: DD => DD < .5 ? 8 * DD * DD * DD * DD : 1 - 8 * (DD - 1) * (DD - 1) * (DD - 1) * (DD - 1),
```

#### 4413. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36493` → after: `L35922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L35922) · [Before (L36493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L36493)

```diff
-         in_out_quint: mm => mm < .5 ? 16 * mm * mm * mm * mm * mm : 1 + 16 * (mm - 1) * (mm - 1) * (mm - 1) * (mm - 1) * (mm - 1),
+         in_out_quint: DD => DD < .5 ? 16 * DD * DD * DD * DD * DD : 1 + 16 * (DD - 1) * (DD - 1) * (DD - 1) * (DD - 1) * (DD - 1),
```

#### 4414. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36496` → after: `L35925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L35925) · [Before (L36496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L36496)

```diff
-         in_out_expo: mm => 0 === mm || 1 === mm ? mm : 2 * mm < 1 ? .5 * 2 ** (10 * (2 * mm - 1)) : .5 * (2 - 2 ** (-10 * (2 * mm - 1))),
+         in_out_expo: DD => 0 === DD || 1 === DD ? DD : 2 * DD < 1 ? .5 * 2 ** (10 * (2 * DD - 1)) : .5 * (2 - 2 ** (-10 * (2 * DD - 1))),
```

#### 4415. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36513-L36514` → after: `L35942-L35943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35942-L35943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L35942-L35943) · [Before (L36513-L36514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L36513-L36514)

```diff
-         in_elastic: mm => 0 === mm || 1 === mm ? mm : -(2 ** (10 * (mm - 1))) * Dm(mm - 1, .7),
-         out_elastic: mm => 0 === mm || 1 === mm ? mm : 2 ** (2 * mm * -10) * Dm(2 * mm, .7) + 1,
+         in_elastic: DD => 0 === DD || 1 === DD ? DD : -(2 ** (10 * (DD - 1))) * cD(DD - 1, .7),
+         out_elastic: DD => 0 === DD || 1 === DD ? DD : 2 ** (2 * DD * -10) * cD(2 * DD, .7) + 1,
```

#### 4416. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36556-L36557` → after: `L35985-L35986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R35985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L35985-L35986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L35985-L35986) · [Before (L36556-L36557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L36556-L36557)

```diff
-           const hm = mm > fm ? fm : mm;
-           return hm < Tm ? Tm : hm
+           const pD = DD > wD ? wD : DD;
+           return pD < zD ? zD : pD
```

#### 4417. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36586` → after: `L36015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36015) · [Before (L36586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L36586)

```diff
-           return [`ease_${Tm}`, Tm.includes("elastic") || Tm.includes("bounce") ? Ym(hm, 2) : hm]
+           return [`ease_${zD}`, zD.includes("elastic") || zD.includes("bounce") ? BD(pD, 2) : pD]
```

#### 4418. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36681` → after: `L36110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36110) · [Before (L36681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L36681)

```diff
-             if (hm < mm.length && bm.test(mm[hm])) throw new Nm(`malformed number '${mm.slice(fm,hm+1)}'`, fm);
+             if (pD < DD.length && xD.test(DD[pD])) throw new jD(`malformed number '${DD.slice(wD,pD+1)}'`, wD);
```

#### 4419. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36699` → after: `L36128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36128) · [Before (L36699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L36699)

```diff
-           if (void 0 === xm) throw new Nm(`unexpected character '${hm}'`, fm);
+           if (void 0 === rD) throw new jD(`unexpected character '${pD}'`, wD);
```

#### 4420. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36714` → after: `L36143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36143) · [Before (L36714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L36714)

```diff
-       Pm = mm => mm.kind === em.End ? "end of expression" : `'${mm.text}'`;
+       iD = DD => DD.kind === bD.End ? "end of expression" : `'${DD.text}'`;
```

#### 4421. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36764` → after: `L36193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36193) · [Before (L36764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L36764)

```diff
-         if (this.depth--, null !== mm.constant) return Vm(mm.constant) ? Tm : fm;
+         if (this.depth--, null !== DD.constant) return nD(DD.constant) ? zD : wD;
```

#### 4422. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36779` → after: `L36208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36208) · [Before (L36779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L36779)

```diff
-             wm = null !== (fm = hm(Am.text, Tm, xm)) && void 0 !== fm ? fm : Qm(Am.text, Tm.evaluate, xm.evaluate);
+             LD = null !== (wD = pD(sD.text, zD, rD)) && void 0 !== wD ? wD : JD(sD.text, zD.evaluate, rD.evaluate);
```

#### 4423. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36800` → after: `L36229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36229) · [Before (L36800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L36800)

```diff
-         throw new Nm(`expected an expression but found ${Pm(mm)}`, mm.offset)
+         throw new jD(`expected an expression but found ${iD(DD)}`, DD.offset)
```

#### 4424. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36808` → after: `L36237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36237) · [Before (L36808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L36808)

```diff
-         if (-1 === hm) throw new Nm(`unknown identifier '${mm.text}'`, mm.offset);
+         if (-1 === pD) throw new jD(`unknown identifier '${DD.text}'`, DD.offset);
```

#### 4425. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36815` → after: `L36244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36244) · [Before (L36815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L36815)

```diff
-             if (void 0 === Tm) throw new Nm(`unknown query '${mm.text}'`, mm.offset);
+             if (void 0 === zD) throw new jD(`unknown query '${DD.text}'`, DD.offset);
```

#### 4426. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36825` → after: `L36254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36254) · [Before (L36825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L36825)

```diff
-             if (void 0 === Tm) throw new Nm(`unknown variable '${mm.text}'`, mm.offset);
+             if (void 0 === zD) throw new jD(`unknown variable '${DD.text}'`, DD.offset);
```

#### 4427. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36835` → after: `L36264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36264) · [Before (L36835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L36835)

```diff
-         throw new Nm(null !== (Tm = zm.get(Am)) && void 0 !== Tm ? Tm : `unknown identifier '${mm.text}'`, mm.offset)
+         throw new jD(null !== (zD = VD.get(sD)) && void 0 !== zD ? zD : `unknown identifier '${DD.text}'`, DD.offset)
```

#### 4428. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36839` → after: `L36268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36268) · [Before (L36839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L36839)

```diff
-         if (mm.startsWith("random") || mm.startsWith("die_roll")) throw new Nm(`'${Tm.text}' is non-deterministic and not supported`, Tm.offset);
+         if (DD.startsWith("random") || DD.startsWith("die_roll")) throw new jD(`'${zD.text}' is non-deterministic and not supported`, zD.offset);
```

#### 4429. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36841` → after: `L36270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36270) · [Before (L36841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L36841)

```diff
-         if (void 0 === fm) throw new Nm(`unknown function '${Tm.text}'`, Tm.offset);
+         if (void 0 === wD) throw new jD(`unknown function '${zD.text}'`, zD.offset);
```

#### 4430. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36850` → after: `L36279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36279) · [Before (L36850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L36850)

```diff
-         if (hm.length !== fm.arity) throw new Nm(`'${Tm.text}' takes ${fm.arity} argument(s) but was given ${hm.length}`, Tm.offset);
+         if (pD.length !== wD.arity) throw new jD(`'${zD.text}' takes ${wD.arity} argument(s) but was given ${pD.length}`, zD.offset);
```

#### 4431. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36855` → after: `L36284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36284) · [Before (L36855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L36855)

```diff
-           for (let im = 1; im < (null !== (Dm = fm.cost) && void 0 !== Dm ? Dm : 1); im++) {
+           for (let gD = 1; gD < (null !== (cD = wD.cost) && void 0 !== cD ? cD : 1); gD++) {
```

#### 4432. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36892` → after: `L36321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36321) · [Before (L36892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L36892)

```diff
-           throw new Nm(`expected '${mm}' but found ${Pm(Tm)}`, Tm.offset)
+           throw new jD(`expected '${DD}' but found ${iD(zD)}`, zD.offset)
```

#### 4433. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36897` → after: `L36326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36326) · [Before (L36897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L36897)

```diff
-         if (mm.kind !== em.End) throw new Nm(`unexpected ${Pm(mm)}`, mm.offset)
+         if (DD.kind !== bD.End) throw new jD(`unexpected ${iD(DD)}`, DD.offset)
```

#### 4434. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36900` → after: `L36329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36329) · [Before (L36900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L36900)

```diff
-     const Mm = mm => Number.isFinite(mm) ? mm : 0;
+     const mD = DD => Number.isFinite(DD) ? DD : 0;
```

#### 4435. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36912` → after: `L36341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36341) · [Before (L36912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L36912)

```diff
-         if (mm.length > ym) throw new Nm(`expression is longer than ${ym} characters`, ym);
+         if (DD.length > WD) throw new jD(`expression is longer than ${WD} characters`, WD);
```

#### 4436. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36926` → after: `L36355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36355) · [Before (L36926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L36926)

```diff
-           error: `${fm.message} at offset ${fm.offset}`
+           error: `${wD.message} at offset ${wD.offset}`
```

#### 4437. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36932` → after: `L36361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36361) · [Before (L36932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L36932)

```diff
-   37243: (mm, Tm, fm) => {
+   37164: (DD, zD, wD) => {
```

#### 4438. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36934-L36935` → after: `L36363-L36364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36363-L36364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36363-L36364) · [Before (L36934-L36935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L36934-L36935)

```diff
-       b: () => wm,
-       c: () => xm
+       d: () => LD,
+       f: () => rD
```

#### 4439. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36937-L36939` → after: `L36366-L36368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36366-L36368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36366-L36368) · [Before (L36937-L36939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L36937-L36939)

```diff
-     var hm = fm(37233),
-       Am = fm(354),
-       am = fm(1877);
+     var pD = wD(37151),
+       sD = wD(351),
+       KD = wD(1886);
```

#### 4440. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36942` → after: `L36371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36371) · [Before (L36942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L36942)

```diff
-       if ("Ra" in mm) return nm.createAnimationScript(mm);
+       if ("nK" in DD) return ED.createAnimationScript(DD);
```

#### 4441. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36947-L36948` → after: `L36376-L36377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36376-L36377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36376-L36377) · [Before (L36947-L36948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L36947-L36948)

```diff
-       const am = mm.Ra <= 0 ? 1 : Tm + fm * Math.max(0, Am) / mm.Ra;
-       return mm.Ea === hm.k.LoopOnLastFrame ? am % 1 : mm.Ea === hm.k.NoLoop && am >= 1 ? null : Math.min(1, am)
+       const KD = DD.nK <= 0 ? 1 : zD + wD * Math.max(0, sD) / DD.nK;
+       return DD.MK === pD.h.LoopOnLastFrame ? KD % 1 : DD.MK === pD.h.NoLoop && KD >= 1 ? null : Math.min(1, KD)
```

#### 4442. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36953` → after: `L36382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36382) · [Before (L36953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L36953)

```diff
-           Ra: Tm,
+           nK: zD,
```

#### 4443. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36955` → after: `L36384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36384) · [Before (L36955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L36955)

```diff
-           oa: hm
+           JK: pD
```

#### 4444. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36958-L36960` → after: `L36387-L36389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36387-L36389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36387-L36389) · [Before (L36958-L36960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L36958-L36960)

```diff
-           Ra: Math.round(Tm),
-           Ea: this.createLoopMode(null !== fm && void 0 !== fm && fm),
-           oa: this.createNodeSkeletonAnimationScript(null !== hm && void 0 !== hm ? hm : null)
+           nK: Math.round(zD),
+           MK: this.createLoopMode(null !== wD && void 0 !== wD && wD),
+           JK: this.createNodeSkeletonAnimationScript(null !== pD && void 0 !== pD ? pD : null)
```

#### 4445. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36966` → after: `L36395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36395) · [Before (L36966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L36966)

```diff
-             return hm.k.NoLoop;
+             return pD.h.NoLoop;
```

#### 4446. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36968` → after: `L36397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36397) · [Before (L36968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L36968)

```diff
-             return hm.k.LoopOnLastFrame;
+             return pD.h.LoopOnLastFrame;
```

#### 4447. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36970` → after: `L36399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36399) · [Before (L36970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L36970)

```diff
-             return hm.k.HoldOnLastFrame
+             return pD.h.HoldOnLastFrame
```

#### 4448. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L36972` → after: `L36401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36401) · [Before (L36972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L36972)

```diff
-         throw new Error(`Invalid loop mode schema: ${mm}`)
+         throw new Error(`Invalid loop mode schema: ${DD}`)
```

#### 4449. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37005-L37007` → after: `L36434-L36436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36434-L36436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36434-L36436) · [Before (L37005-L37007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37005-L37007)

```diff
-             Tm = null !== (am = hm[Dm - 1]) && void 0 !== am ? am : mm,
-             im = null !== (xm = hm[Dm + 1]) && void 0 !== xm ? xm : mm,
-             Rm = null !== (wm = hm[Dm + 2]) && void 0 !== wm ? wm : im;
+             zD = null !== (KD = pD[cD - 1]) && void 0 !== KD ? KD : DD,
+             gD = null !== (rD = pD[cD + 1]) && void 0 !== rD ? rD : DD,
+             RD = null !== (LD = pD[cD + 2]) && void 0 !== LD ? LD : gD;
```

#### 4450. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37018` → after: `L36447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36447) · [Before (L37018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37018)

```diff
-         if ("object" === typeof Tm && "point" in Tm) Am = null !== (am = Tm.qa) && void 0 !== am ? am : null, fm = Tm.point, hm = Tm.point;
+         if ("object" === typeof zD && "point" in zD) sD = null !== (KD = zD.XK) && void 0 !== KD ? KD : null, wD = zD.point, pD = zD.point;
```

#### 4451. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37021` → after: `L36450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36450) · [Before (L37021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37021)

```diff
-           Am = null !== (xm = Tm.qa) && void 0 !== xm ? xm : null, fm = Tm.pre, hm = Tm.post
+           sD = null !== (rD = zD.XK) && void 0 !== rD ? rD : null, wD = zD.pre, pD = zD.post
```

#### 4452. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37025` → after: `L36454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36454) · [Before (L37025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37025)

```diff
-           qa: this.createLerpMode(Am),
+           XK: this.createLerpMode(sD),
```

#### 4453. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37031` → after: `L36460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36460) · [Before (L37031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37031)

```diff
-         return null === mm ? hm.i.Linear : Dm.LERP_MODE_SCHEMA_MAPPING[mm]
+         return null === DD ? pD.e.Linear : cD.LERP_MODE_SCHEMA_MAPPING[DD]
```

#### 4454. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37035-L37036` → after: `L36464-L36465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36464-L36465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36464-L36465) · [Before (L37035-L37036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37035-L37036)

```diff
-       linear: hm.i.Linear,
-       "catmull-rom-spline": hm.i.CatmullRomSpline
+       linear: pD.e.Linear,
+       "catmull-rom-spline": pD.e.CatmullRomSpline
```

#### 4455. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37049-L37051` → after: `L36478-L36480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36478-L36480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36478-L36480) · [Before (L37049-L37051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37049-L37051)

```diff
-           Ra: Math.round(1e3 * mm),
-           Ea: this.createLoopMode(null !== Tm && void 0 !== Tm && Tm),
-           oa: this.createNodeSkeletonAnimationScript(null !== fm && void 0 !== fm ? fm : null)
+           nK: Math.round(1e3 * DD),
+           MK: this.createLoopMode(null !== zD && void 0 !== zD && zD),
+           JK: this.createNodeSkeletonAnimationScript(null !== wD && void 0 !== wD ? wD : null)
```

#### 4456. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37057` → after: `L36486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36486) · [Before (L37057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37057)

```diff
-             return hm.k.NoLoop;
+             return pD.h.NoLoop;
```

#### 4457. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37059` → after: `L36488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36488) · [Before (L37059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37059)

```diff
-             return hm.k.LoopOnLastFrame;
+             return pD.h.LoopOnLastFrame;
```

#### 4458. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37061` → after: `L36490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36490) · [Before (L37061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37061)

```diff
-             return hm.k.HoldOnLastFrame
+             return pD.h.HoldOnLastFrame
```

#### 4459. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37063` → after: `L36492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36492) · [Before (L37063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37063)

```diff
-         throw new Error(`Invalid Blockbench loop mode schema: ${mm}`)
+         throw new Error(`Invalid Blockbench loop mode schema: ${DD}`)
```

#### 4460. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37080-L37081` → after: `L36509-L36510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36509-L36510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36509-L36510) · [Before (L37080-L37081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37080-L37081)

```diff
-           rotation: this.createAnimationTimeline(null !== Tm && void 0 !== Tm ? Tm : null, qm, Em, !0),
-           position: this.createAnimationTimeline(null !== fm && void 0 !== fm ? fm : null, Vm, Om, !1)
+           rotation: this.createAnimationTimeline(null !== zD && void 0 !== zD ? zD : null, GD, UD, !0),
+           position: this.createAnimationTimeline(null !== wD && void 0 !== wD ? wD : null, nD, ID, !1)
```

#### 4461. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37114-L37116` → after: `L36543-L36545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36543-L36545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36543-L36545) · [Before (L37114-L37116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37114-L37116)

```diff
-             Tm = null !== (xm = Am[im - 1]) && void 0 !== xm ? xm : mm,
-             hm = null !== (wm = Am[im + 1]) && void 0 !== wm ? wm : mm,
-             Rm = null !== (Dm = Am[im + 2]) && void 0 !== Dm ? Dm : hm;
+             zD = null !== (rD = sD[gD - 1]) && void 0 !== rD ? rD : DD,
+             pD = null !== (LD = sD[gD + 1]) && void 0 !== LD ? LD : DD,
+             RD = null !== (cD = sD[gD + 2]) && void 0 !== cD ? cD : pD;
```

#### 4462. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37128` → after: `L36557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36557) · [Before (L37128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37128)

```diff
-           am = null !== (xm = Tm.lerp_mode) && void 0 !== xm ? xm : null, Am = Ym(Tm.post, fm), hm = Tm.pre ? Ym(Tm.pre, fm) : Am
+           KD = null !== (rD = zD.lerp_mode) && void 0 !== rD ? rD : null, sD = BD(zD.post, wD), pD = zD.pre ? BD(zD.pre, wD) : sD
```

#### 4463. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37135` → after: `L36564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36564) · [Before (L37135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37135)

```diff
-           qa: this.createLerpMode(am),
+           XK: this.createLerpMode(KD),
```

#### 4464. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37141` → after: `L36570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36570) · [Before (L37141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37141)

```diff
-         return null === mm ? hm.i.Linear : im.LERP_MODE_SCHEMA_MAPPING[mm]
+         return null === DD ? pD.e.Linear : gD.LERP_MODE_SCHEMA_MAPPING[DD]
```

#### 4465. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37160-L37161` → after: `L36589-L36590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36589-L36590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36589-L36590) · [Before (L37160-L37161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37160-L37161)

```diff
-         ja: im,
-         Va: pm
+         VK: gD,
+         PK: AD
```

#### 4466. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37167-L37168` → after: `L36596-L36597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36596-L36597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36596-L36597) · [Before (L37167-L37168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37167-L37168)

```diff
-         Ka: Am.c.computeShortestRotation(mm, fm) / am,
-         Qa: Am.c.computeShortestRotation(Tm, hm) / xm,
+         xK: sD.c.computeShortestRotation(DD, wD) / KD,
+         TK: sD.c.computeShortestRotation(zD, pD) / rD,
```

#### 4467. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37179-L37180` → after: `L36608-L36609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36608-L36609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36608-L36609) · [Before (L37179-L37180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37179-L37180)

```diff
-         Ka: (Am[Em] - mm[Em]) / Dm,
-         Qa: (xm[Em] - fm[Em]) / Rm,
+         xK: (sD[UD] - DD[UD]) / cD,
+         TK: (rD[UD] - wD[UD]) / RD,
```

#### 4468. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37184-L37185` → after: `L36613-L36614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36613-L36614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36613-L36614) · [Before (L37184-L37185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37184-L37185)

```diff
-         ja: im,
-         Va: pm
+         VK: gD,
+         PK: AD
```

#### 4469. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37190` → after: `L36619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36619) · [Before (L37190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37190)

```diff
-       return null === Tm ? mm : Tm(mm)
+       return null === zD ? DD : zD(DD)
```

#### 4470. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37194` → after: `L36623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36623) · [Before (L37194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37194)

```diff
-       const [Tm, fm, hm] = mm, xm = -(0, am.j)(Tm), wm = -(0, am.j)(fm), Dm = (0, am.j)(hm), im = Am.c.quaternionFromEulerZYX(xm, wm, Dm);
+       const [zD, wD, pD] = DD, rD = -(0, KD.l)(zD), LD = -(0, KD.l)(wD), cD = (0, KD.l)(pD), gD = sD.c.quaternionFromEulerZYX(rD, LD, cD);
```

#### 4471. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37198-L37199` → after: `L36627-L36628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36627-L36628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36627-L36628) · [Before (L37198-L37199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37198-L37199)

```diff
-       linear: hm.i.Linear,
-       catmullrom: hm.i.CatmullRomSpline
+       linear: pD.e.Linear,
+       catmullrom: pD.e.CatmullRomSpline
```

#### 4472. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37209` → after: `L36638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36638) · [Before (L37209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37209)

```diff
-       return [Tm >= 0 ? Math.PI - Tm : -Math.PI - Tm, Km(fm + Math.PI), Km(hm + Math.PI)]
+       return [zD >= 0 ? Math.PI - zD : -Math.PI - zD, OD(wD + Math.PI), OD(pD + Math.PI)]
```

#### 4473. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37221` → after: `L36650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36650) · [Before (L37221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37221)

```diff
-   38541: (mm, Tm, fm) => {
+   38426: (DD, zD, wD) => {
```

#### 4474. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37223-L37224` → after: `L36652-L36653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36652-L36653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36652-L36653) · [Before (L37223-L37224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37223-L37224)

```diff
-       b: () => wm,
-       d: () => Dm
+       e: () => LD,
+       g: () => cD
```

#### 4475. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37226` → after: `L36655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36655) · [Before (L37226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37226)

```diff
-     var hm = fm(362),
+     var pD = wD(358),
```

#### 4476. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37228` → after: `L36657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36657) · [Before (L37228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37228)

```diff
-       am = fm(38550),
+       KD = wD(38429),
```

#### 4477. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37239-L37240` → after: `L36668-L36669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36668-L36669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36668-L36669) · [Before (L37239-L37240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37239-L37240)

```diff
-         pI: function(mm, Tm) {},
-         oN: null,
+         ZJ: function(DD, zD) {},
+         hT: null,
```

#### 4478. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37243` → after: `L36672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36672) · [Before (L37243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37243)

```diff
-             const Tm = mm.qI.sG("collideEntitiesProjectile");
+             const zD = DD.yJ.rW("collideEntitiesProjectile");
```

#### 4479. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37255-L37258` → after: `L36684-L36687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36684-L36687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36684-L36687) · [Before (L37255-L37258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37255-L37258)

```diff
-         am = mm.qI.WC(Tm),
-         xm = mm.qI.uB(Tm),
-         wm = [am.RE.base[0] + xm.width / 2, am.RE.base[1] + xm.height / 2, am.RE.base[2] + xm.width / 2];
-       Am().add(wm, wm, null !== (fm = xm.HE) && void 0 !== fm ? fm : mm.HE), pm(mm, mm.qI.getState(Tm, "collideEntitiesProjectile"), hm, wm)
+         KD = DD.yJ.Vk(zD),
+         rD = DD.yJ.AY(zD),
+         LD = [KD.wU.base[0] + rD.width / 2, KD.wU.base[1] + rD.height / 2, KD.wU.base[2] + rD.width / 2];
+       sD().add(LD, LD, null !== (wD = rD.CU) && void 0 !== wD ? wD : DD.CU), AD(DD, DD.yJ.getState(zD, "collideEntitiesProjectile"), pD, LD)
```

#### 4480. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37264` → after: `L36693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36693) · [Before (L37264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37264)

```diff
-       let hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : mm.qI.rV(Tm.lG);
+       let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : DD.yJ.PJ(zD.cW);
```

#### 4481. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37271-L37272` → after: `L36700-L36701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36700-L36701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36700-L36701) · [Before (L37271-L37272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37271-L37272)

```diff
-         if (!mm.qI.Pmm(hm.lG, "collideEntities")) continue;
-         if (!hm.ufm) continue;
+         if (!DD.yJ.aDD(pD.cW, "collideEntities")) continue;
+         if (!pD.cpD) continue;
```

#### 4482. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37274` → after: `L36703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36703) · [Before (L37274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37274)

```diff
-         if (wm = Tm._lastPos, Dm = Rm[Am], (wm[0] >= Dm[0][0] && wm[0] <= Dm[1][0] && wm[1] >= Dm[0][1] && wm[1] <= Dm[1][1] && wm[2] >= Dm[0][2] && wm[2] <= Dm[1][2] || Math.abs(pm) <= am) && (Tm.callback(hm.lG), !mm.qI.Pmm(Tm.lG, "collideEntitiesProjectile"))) break
+         if (LD = zD._lastPos, cD = RD[sD], (LD[0] >= cD[0][0] && LD[0] <= cD[1][0] && LD[1] >= cD[0][1] && LD[1] <= cD[1][1] && LD[2] >= cD[0][2] && LD[2] <= cD[1][2] || Math.abs(AD) <= KD) && (zD.callback(pD.cW), !DD.yJ.aDD(zD.cW, "collideEntitiesProjectile"))) break
```

#### 4483. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37281` → after: `L36710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36710) · [Before (L37281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37281)

```diff
-       const Tm = mm.qI.sG("collideEntities");
+       const zD = DD.yJ.rW("collideEntities");
```

#### 4484. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37284-L37286` → after: `L36713-L36715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36713-L36715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36713-L36715) · [Before (L37284-L37286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37284-L37286)

```diff
-         const xm = mm.qI.uB(Tm[am].lG),
-           wm = Tm[am].lfm / 2,
-           Dm = Tm[am].Mfm / 2;
+         const rD = DD.yJ.AY(zD[KD].cW),
+           LD = zD[KD].rpD / 2,
+           cD = zD[KD].LpD / 2;
```

#### 4485. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37288-L37290` → after: `L36717-L36719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36717-L36719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36717-L36719) · [Before (L37288-L37290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37288-L37290)

```diff
-           [xm.zfm[0] - wm, xm.zfm[1] - Dm, xm.zfm[2] - wm],
-           [xm.zfm[3] + wm, xm.zfm[4] + Dm, xm.zfm[5] + wm]
-         ], Am().add(Rm[am][0], Rm[am][0], null !== (fm = xm.HE) && void 0 !== fm ? fm : mm.HE), Am().add(Rm[am][1], Rm[am][1], null !== (hm = xm.HE) && void 0 !== hm ? hm : mm.HE)
+           [rD.ewD[0] - LD, rD.ewD[1] - cD, rD.ewD[2] - LD],
+           [rD.ewD[3] + LD, rD.ewD[4] + cD, rD.ewD[5] + LD]
+         ], sD().add(RD[KD][0], RD[KD][0], null !== (wD = rD.CU) && void 0 !== wD ? wD : DD.CU), sD().add(RD[KD][1], RD[KD][1], null !== (pD = rD.CU) && void 0 !== pD ? pD : DD.CU)
```

#### 4486. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37295` → after: `L36724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36724) · [Before (L37295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37295)

```diff
-   37745: (mm, Tm, fm) => {
+   37661: (DD, zD, wD) => {
```

#### 4487. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37297-L37298` → after: `L36726-L36727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36726-L36727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36726-L36727) · [Before (L37297-L37298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37297-L37298)

```diff
-       e: () => im,
-       f: () => Rm
+       c: () => gD,
+       g: () => RD
```

#### 4488. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37300-L37302` → after: `L36729-L36731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36729-L36731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36729-L36731) · [Before (L37300-L37302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37300-L37302)

```diff
-     var hm = fm(37734),
-       Am = fm(6451),
-       am = fm(6449);
+     var pD = wD(37646),
+       sD = wD(6520),
+       KD = wD(6516);
```

#### 4489. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37305-L37306` → after: `L36734-L36735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36734-L36735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36734-L36735) · [Before (L37305-L37306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37305-L37306)

```diff
-         this.lG = void 0, this.maxSpeed = 4, this.moveForce = 80, this.responsiveness = 20, this.movingFriction = 0, this.standingFriction = 5, this.boatStandingFriction = .4, this.gliderFriction = 0, this.airMoveMult = 1, this.jumpForce = 0, this.jumpTime = 500, this.isGliding = … [truncated]
-           type: Am.m.DEFAULT,
+         this.cW = void 0, this.maxSpeed = 4, this.moveForce = 80, this.responsiveness = 20, this.movingFriction = 0, this.standingFriction = 5, this.boatStandingFriction = .4, this.gliderFriction = 0, this.airMoveMult = 1, this.jumpForce = 0, this.jumpTime = 500, this.isGliding = … [truncated]
+           type: sD.q.DEFAULT,
```

#### 4490. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37312` → after: `L36741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36741) · [Before (L37312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37312)

```diff
-         }, this.fb = 0, this.steeringHeading = 0, this._steeringHeadingPrevTick = 0, this._steeringActiveLastTick = !1, this._lastTickVelocity = [0, 0, 0], this._beenOnSolidGroundSinceBhopBounce = !0, this.movementType = Am.l.NORMAL, this.movementTypeLastTick = Am.l.NORMAL, this. … [truncated]
+         }, this.fb = 0, this.steeringHeading = 0, this._steeringHeadingPrevTick = 0, this._steeringActiveLastTick = !1, this._lastTickVelocity = [0, 0, 0], this._beenOnSolidGroundSinceBhopBounce = !0, this.movementType = sD.o.NORMAL, this.movementTypeLastTick = sD.o.NORMAL, this. … [truncated]
```

#### 4491. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37321` → after: `L36750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36750) · [Before (L37321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37321)

```diff
-         return this.IE.qI.WC(this.lG).atRestY() < 0
+         return this.AU.yJ.Vk(this.cW).atRestY() < 0
```

#### 4492. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37327` → after: `L36756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36756) · [Before (L37327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37327)

```diff
-         return (0, hm.e)(this.IE, this.lG, !1)
+         return (0, pD.h)(this.AU, this.cW, !1)
```

#### 4493. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37330` → after: `L36759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36759) · [Before (L37330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37330)

```diff
-         return mm === Am.l.GLIDING ? this.hitWhilstGliding : this.hitWhilstFloating
+         return DD === sD.o.GLIDING ? this.hitWhilstGliding : this.hitWhilstFloating
```

#### 4494. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37333` → after: `L36762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36762) · [Before (L37333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37333)

```diff
-         mm === Am.l.GLIDING ? this.hitWhilstGliding = Tm : this.hitWhilstFloating = Tm
+         DD === sD.o.GLIDING ? this.hitWhilstGliding = zD : this.hitWhilstFloating = zD
```

#### 4495. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37339` → after: `L36768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36768) · [Before (L37339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37339)

```diff
-       const Tm = mm.qI.mTm(mm.xH);
+       const zD = DD.yJ.gzD(DD.vW);
```

#### 4496. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37348-L37349` → after: `L36777-L36778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36777-L36778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36777-L36778) · [Before (L37348-L37349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37348-L37349)

```diff
-         pI: (Tm, fm) => {
-           fm.IE = mm, wm = fm.isInCobweb, Dm = fm.isInFluid
+         ZJ: (zD, wD) => {
+           wD.AU = DD, LD = wD.isInCobweb, cD = wD.isInFluid
```

#### 4497. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37351` → after: `L36780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36780) · [Before (L37351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37351)

```diff
-         oN: null,
+         hT: null,
```

#### 4498. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37356` → after: `L36785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36785) · [Before (L37356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37356)

```diff
-   37317: (mm, Tm, fm) => {
+   37245: (DD, zD, wD) => {
```

#### 4499. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37358` → after: `L36787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36787) · [Before (L37358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37358)

```diff
-       d: () => hm
+       b: () => pD
```

#### 4500. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37392` → after: `L36821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36821) · [Before (L37392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37392)

```diff
-   37856: (mm, Tm, fm) => {
+   37783: (DD, zD, wD) => {
```

#### 4501. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37395` → after: `L36825-L36826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36825-L36826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36825-L36826) · [Before (L37395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37395)

```diff
-       f: () => xm,
+       g: () => fD,
+       h: () => AD,
```

#### 4502. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37397` → after: `L36828-L36829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36828-L36829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36828-L36829) · [Before (L37397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37397)

```diff
-       l: () => pm,
+       k: () => cD,
+       n: () => UD,
```

#### 4503. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37399-L37402` → after: `L36831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36831) · [Before (L37399-L37402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37399-L37402)

```diff
-       r: () => Dm,
-       t: () => Em,
-       u: () => Ym,
-       x: () => Om
+       t: () => ID
```

#### 4504. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37404-L37406` → after: `L36833-L36835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36833-L36835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36833-L36835) · [Before (L37404-L37406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37404-L37406)

```diff
-     var hm = fm(198),
-       Am = fm(9141),
-       am = fm(37858);
+     var pD = wD(197),
+       sD = wD(9198),
+       KD = wD(37791);
```

#### 4505. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37409` → after: `L36838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36838) · [Before (L37409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37409)

```diff
-       return null !== Tm && void 0 !== Tm ? Tm : mm ? 0 : hm.f.ezBridgeGrowMs
+       return null !== zD && void 0 !== zD ? zD : DD ? 0 : pD.f.ezBridgeGrowMs
```

#### 4506. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37434-L37435` → after: `L36863-L36864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36863-L36864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36863-L36864) · [Before (L37434-L37435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37434-L37435)

```diff
-       const Tm = Am.i[mm];
-       return !!Tm && (!(mm in am.f) && (Tm.model ? "Slab" === Tm.model : !Tm.twoDBlockItem))
+       const zD = sD.l[DD];
+       return !!zD && (!(DD in KD.g) && (zD.model ? "Slab" === zD.model : !zD.twoDBlockItem))
```

#### 4507. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37447` → after: `L36876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36876) · [Before (L37447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37447)

```diff
-       return om(Tm.startedAtMs, Tm.endsAtMs, fm) >= hm ? Tm : mm
+       return fD(zD.startedAtMs, zD.endsAtMs, wD) >= pD ? zD : DD
```

#### 4508. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37461` → after: `L36890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36890) · [Before (L37461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37461)

```diff
-   38261: (mm, Tm, fm) => {
+   38153: (DD, zD, wD) => {
```

#### 4509. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37464-L37465` → after: `L36893-L36894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36893-L36894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36893-L36894) · [Before (L37464-L37465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37464-L37465)

```diff
-       f: () => wm,
-       i: () => im
+       i: () => LD,
+       l: () => gD
```

#### 4510. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37467-L37469` → after: `L36896-L36898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36896-L36898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36896-L36898) · [Before (L37467-L37469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37467-L37469)

```diff
-     var hm = fm(6451),
-       Am = fm(354),
-       am = fm(653);
+     var pD = wD(6520),
+       sD = wD(351),
+       KD = wD(619);
```

#### 4511. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37477` → after: `L36906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36906) · [Before (L37477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37477)

```diff
-       for (let Tm = 0; Tm < am.o; Tm++)
+       for (let zD = 0; zD < KD.k; zD++)
```

#### 4512. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37484` → after: `L36913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36913) · [Before (L37484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37484)

```diff
-       for (let hm = 0; hm < am.o; hm++) {
+       for (let pD = 0; pD < KD.k; pD++) {
```

#### 4513. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37487` → after: `L36916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36916) · [Before (L37487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37487)

```diff
-         if (xm(Am)) Tm += null !== (fm = Am.amount) && void 0 !== fm ? fm : 1
+         if (rD(sD)) zD += null !== (wD = sD.amount) && void 0 !== wD ? wD : 1
```

#### 4514. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37493-L37495` → after: `L36922-L36924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36922-L36924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36922-L36924) · [Before (L37493-L37495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37493-L37495)

```diff
-       if (fm !== hm.l.GLIDING && am !== hm.l.GLIDING) return;
-       const xm = mm.qI.mTm(Tm);
-       if (xm.gliderFuelCooldownEnd = 0, fm === hm.l.GLIDING) {
+       if (wD !== pD.o.GLIDING && KD !== pD.o.GLIDING) return;
+       const rD = DD.yJ.gzD(zD);
+       if (rD.gliderFuelCooldownEnd = 0, wD === pD.o.GLIDING) {
```

#### 4515. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37497-L37498` → after: `L36926-L36927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36926-L36927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36926-L36927) · [Before (L37497-L37498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37497-L37498)

```diff
-         const fm = null === (Dm = mm.qI.KTm(Tm)) || void 0 === Dm ? void 0 : Dm.inventory;
-         fm && null !== wm(fm) && mm.bloxd.startGliderFuelCooldown(Tm, xm, Am.g.getFirecrackerCooldownMultiplier(fm.getItemAtSelectedSlot()))
+         const wD = null === (cD = DD.yJ.bzD(zD)) || void 0 === cD ? void 0 : cD.inventory;
+         wD && null !== LD(wD) && DD.bloxd.startGliderFuelCooldown(zD, rD, sD.e.getFirecrackerCooldownMultiplier(wD.getItemAtSelectedSlot()))
```

#### 4516. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37502` → after: `L36931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36931) · [Before (L37502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37502)

```diff
-   38067: (mm, Tm, fm) => {
+   37982: (DD, zD, wD) => {
```

#### 4517. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37504-L37505` → after: `L36933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36933) · [Before (L37504-L37505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37504-L37505)

```diff
-       c: () => am,
-       g: () => Dm,
+       e: () => KD,
```

#### 4518. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37507` → after: `L36935-L36936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36935-L36936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36935-L36936) · [Before (L37507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37507)

```diff
-       l: () => im,
+       k: () => rD,
+       o: () => gD,
```

#### 4519. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37509-L37510` → after: `L36938-L36939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36938-L36939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36938-L36939) · [Before (L37509-L37510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37509-L37510)

```diff
-       t: () => Rm,
-       w: () => Am
+       r: () => RD,
+       s: () => sD
```

#### 4520. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37512` → after: `L36941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36941) · [Before (L37512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37512)

```diff
-     var hm = fm(4184);
+     var pD = wD(4263);
```

#### 4521. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37515` → after: `L36944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36944) · [Before (L37515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37515)

```diff
-       const Tm = new hm.k(`blockBreakDrop|${mm}`);
+       const zD = new pD.g(`blockBreakDrop|${DD}`);
```

#### 4522. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37520` → after: `L36949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36949) · [Before (L37520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37520)

```diff
-       mm.gravityMultiplier = 2, mm.friction = 4, mm.Ri = .02, mm.GE = 0, mm.fluidDrag = .2
+       DD.gravityMultiplier = 2, DD.friction = 4, DD.Ug = .02, DD.XU = 0, DD.fluidDrag = .2
```

#### 4523. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37545` → after: `L36974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36974) · [Before (L37545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37545)

```diff
-   38576: (mm, Tm, fm) => {
+   38455: (DD, zD, wD) => {
```

#### 4524. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37547-L37548` → after: `L36976-L36977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36976-L36977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36976-L36977) · [Before (L37547-L37548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37547-L37548)

```diff
-       c: () => am,
-       e: () => Rm
+       d: () => KD,
+       g: () => RD
```

#### 4525. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37550-L37551` → after: `L36979-L36980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36979-L36980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36979-L36980) · [Before (L37550-L37551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37550-L37551)

```diff
-     var hm = fm(38570),
-       Am = fm(38578);
+     var pD = wD(38448),
+       sD = wD(38463);
```

#### 4526. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37565-L37568` → after: `L36994-L36997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R36994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L36994-L36997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L36994-L36997) · [Before (L37565-L37568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37565-L37568)

```diff
-         Ym = Math.min(Math.max(pm * mm, xm), Am.g),
-         qm = Math.min(Math.max(Em * mm, wm), Am.c),
-         jm = Math.max(om * Math.min(mm, Am.g / pm), Dm),
-         Vm = Math.max(Om * Math.min(mm, Am.c / Em), im);
+         BD = Math.min(Math.max(AD * DD, rD), sD.d),
+         GD = Math.min(Math.max(UD * DD, LD), sD.b),
+         hD = Math.max(fD * Math.min(DD, sD.d / AD), cD),
+         nD = Math.max(ID * Math.min(DD, sD.b / UD), gD);
```

#### 4527. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37574` → after: `L37003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37003) · [Before (L37574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37574)

```diff
-         shadowSize: am * mm * (null !== (fm = Rm.modelScale) && void 0 !== fm ? fm : 1)
+         shadowSize: KD * DD * (null !== (wD = RD.modelScale) && void 0 !== wD ? wD : 1)
```

#### 4528. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37578` → after: `L37007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37007) · [Before (L37578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37578)

```diff
-   37778: (mm, Tm, fm) => {
+   37710: (DD, zD, wD) => {
```

#### 4529. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37580-L37582` → after: `L37009-L37011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37009-L37011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37009-L37011) · [Before (L37580-L37582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37580-L37582)

```diff
-       c: () => xm,
-       d: () => im,
-       f: () => wm
+       b: () => rD,
+       f: () => gD,
+       g: () => LD
```

#### 4530. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37584` → after: `L37013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37013) · [Before (L37584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37584)

```diff
-     var hm = fm(37783),
+     var pD = wD(37713),
```

#### 4531. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37589` → after: `L37018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37018) · [Before (L37589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37589)

```diff
-       return `${mm}|${Tm}|${fm}`
+       return `${DD}|${zD}|${wD}`
```

#### 4532. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37596` → after: `L37025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37025) · [Before (L37596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37596)

```diff
-     const Dm = fm(198).f.MO;
+     const cD = wD(197).f.CI;
```

#### 4533. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37604` → after: `L37033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37033) · [Before (L37604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37604)

```diff
-   37716: (mm, Tm, fm) => {
+   37624: (DD, zD, wD) => {
```

#### 4534. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37607-L37610` → after: `L37036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37036) · [Before (L37607-L37610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37607-L37610)

```diff
-       c: () => cm,
-       e: () => Sm,
-       d: () => bm,
-       h: () => em,
+       f: () => XD,
```

#### 4535. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37613` → after: `L37040-L37042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37040-L37042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37040-L37042) · [Before (L37613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37613)

```diff
-       n: () => Nm
+       p: () => PD,
+       q: () => dD,
+       s: () => jD
```

#### 4536. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37615-L37617` → after: `L37044-L37046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37044-L37046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37044-L37046) · [Before (L37615-L37617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37615-L37617)

```diff
-     var hm = fm(6451),
-       Am = fm(37721),
-       am = fm(354);
+     var pD = wD(6520),
+       sD = wD(37628),
+       KD = wD(351);
```

#### 4537. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37619` → after: `L37048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37048) · [Before (L37619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37619)

```diff
-         Ri: .25,
+         Ug: .25,
```

#### 4538. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37629` → after: `L37058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37058) · [Before (L37629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37629)

```diff
-         canAutoStepByBlock: Object.fromEntries(am.oc.map((mm => [mm, !0]))),
+         canAutoStepByBlock: Object.fromEntries(KD.tc.map((DD => [DD, !0]))),
```

#### 4539. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37638` → after: `L37067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37067) · [Before (L37638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37638)

```diff
-         speedMultiplierByBlock: Object.fromEntries(am.oc.map((mm => [mm, 40]))),
+         speedMultiplierByBlock: Object.fromEntries(KD.tc.map((DD => [DD, 40]))),
```

#### 4540. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37645-L37646` → after: `L37074-L37075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37074-L37075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37074-L37075) · [Before (L37645-L37646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37645-L37646)

```diff
-         [hm.c.WOOD]: {},
-         [hm.c.OBSIDIAN]: {
+         [pD.i.WOOD]: {},
+         [pD.i.OBSIDIAN]: {
```

#### 4541. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37652` → after: `L37081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37081) · [Before (L37652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37652)

```diff
-         [hm.c.SPEED]: {
+         [pD.i.SPEED]: {
```

#### 4542. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37678` → after: `L37107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37107) · [Before (L37678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37678)

```diff
-         Ri: 2.5,
+         Ug: 2.5,
```

#### 4543. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37709` → after: `L37138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37138) · [Before (L37709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37709)

```diff
-         Ri: 3,
+         Ug: 3,
```

#### 4544. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37748-L37751` → after: `L37177-L37180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37177-L37180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37177-L37180) · [Before (L37748-L37751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37748-L37751)

```diff
-       [hm.g.KART]: {},
-       [hm.g.OFF_ROADER]: pm,
-       [hm.g.CAR]: {
-         Ri: 2.75,
+       [pD.j.KART]: {},
+       [pD.j.OFF_ROADER]: AD,
+       [pD.j.CAR]: {
+         Ug: 2.75,
```

#### 4545. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37776-L37781` → after: `L37205-L37210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37205-L37210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37205-L37210) · [Before (L37776-L37781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37776-L37781)

```diff
-       [hm.g.GOLD_MINING_DRILL]: Em("Gold Mining Drill", 5),
-       [hm.g.IRON_MINING_DRILL]: Em("Iron Mining Drill", 4),
-       [hm.g.DIAMOND_MINING_DRILL]: Em("Diamond Mining Drill", 6),
-       [hm.g.MOONSTONE_MINING_DRILL]: Em("Moonstone Mining Drill", 7),
-       [hm.g.ARMORED_CAR]: {
-         Ri: 4.5,
+       [pD.j.GOLD_MINING_DRILL]: UD("Gold Mining Drill", 5),
+       [pD.j.IRON_MINING_DRILL]: UD("Iron Mining Drill", 4),
+       [pD.j.DIAMOND_MINING_DRILL]: UD("Diamond Mining Drill", 6),
+       [pD.j.MOONSTONE_MINING_DRILL]: UD("Moonstone Mining Drill", 7),
+       [pD.j.ARMORED_CAR]: {
+         Ug: 4.5,
```

#### 4546. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37834` → after: `L37263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37263) · [Before (L37834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37834)

```diff
-           activeMovementType: hm.l.GLIDING,
+           activeMovementType: pD.o.GLIDING,
```

#### 4547. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37841-L37842` → after: `L37270-L37271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37270-L37271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37270-L37271) · [Before (L37841-L37842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37841-L37842)

```diff
-         [hm.i.WOOD]: {},
-         [hm.i.IRON]: {
+         [pD.k.WOOD]: {},
+         [pD.k.IRON]: {
```

#### 4548. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37845` → after: `L37274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37274) · [Before (L37845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37845)

```diff
-         [hm.i.GOLD]: {
+         [pD.k.GOLD]: {
```

#### 4549. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37848` → after: `L37277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37277) · [Before (L37848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37848)

```diff
-         [hm.i.DIAMOND]: {
+         [pD.k.DIAMOND]: {
```

#### 4550. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37857` → after: `L37286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37286) · [Before (L37857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37857)

```diff
-           activeMovementType: hm.l.FLOATING,
+           activeMovementType: pD.o.FLOATING,
```

#### 4551. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37871-L37886` → after: `L37300-L37315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37300-L37315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37300-L37315) · [Before (L37871-L37886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37871-L37886)

```diff
-         [hm.b.YELLOW]: Im("Yellow"),
-         [hm.b.WHITE]: Im("White"),
-         [hm.b.RED]: Im("Red"),
-         [hm.b.PURPLE]: Im("Purple"),
-         [hm.b.PINK]: Im("Pink"),
-         [hm.b.ORANGE]: Im("Orange"),
-         [hm.b.MAGENTA]: Im("Magenta"),
-         [hm.b.LIME]: Im("Lime"),
-         [hm.b.LIGHT_GRAY]: Im("Light Gray"),
-         [hm.b.LIGHT_BLUE]: Im("Light Blue"),
-         [hm.b.GREEN]: Im("Green"),
-         [hm.b.GRAY]: Im("Gray"),
-         [hm.b.CYAN]: Im("Cyan"),
-         [hm.b.BROWN]: Im("Brown"),
-         [hm.b.BLUE]: Im("Blue"),
-         [hm.b.BLACK]: Im("Black")
+         [pD.e.YELLOW]: MD("Yellow"),
+         [pD.e.WHITE]: MD("White"),
+         [pD.e.RED]: MD("Red"),
+         [pD.e.PURPLE]: MD("Purple"),
+         [pD.e.PINK]: MD("Pink"),
+         [pD.e.ORANGE]: MD("Orange"),
+         [pD.e.MAGENTA]: MD("Magenta"),
+         [pD.e.LIME]: MD("Lime"),
+         [pD.e.LIGHT_GRAY]: MD("Light Gray"),
+         [pD.e.LIGHT_BLUE]: MD("Light Blue"),
+         [pD.e.GREEN]: MD("Green"),
+         [pD.e.GRAY]: MD("Gray"),
+         [pD.e.CYAN]: MD("Cyan"),
+         [pD.e.BROWN]: MD("Brown"),
+         [pD.e.BLUE]: MD("Blue"),
+         [pD.e.BLACK]: MD("Black")
```

#### 4552. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37893` → after: `L37322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37322) · [Before (L37893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37893)

```diff
-           icon: `${mm} Balloon`,
+           icon: `${DD} Balloon`,
```

#### 4553. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37899` → after: `L37328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37328) · [Before (L37899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37899)

```diff
-       [hm.n.ROTATION_1]: {
+       [pD.t.ROTATION_1]: {
```

#### 4554. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37902` → after: `L37331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37331) · [Before (L37902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37902)

```diff
-       [hm.n.ROTATION_2]: {
+       [pD.t.ROTATION_2]: {
```

#### 4555. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37905` → after: `L37334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37334) · [Before (L37905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37905)

```diff
-       [hm.n.ROTATION_3]: {
+       [pD.t.ROTATION_3]: {
```

#### 4556. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37908` → after: `L37337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37337) · [Before (L37908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37908)

```diff
-       [hm.n.ROTATION_4]: {
+       [pD.t.ROTATION_4]: {
```

#### 4557. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37912` → after: `L37341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37341) · [Before (L37912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37912)

```diff
-     var Qm = fm(9141),
+     var JD = wD(9198),
```

#### 4558. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37986` → after: `L37415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37415) · [Before (L37986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37986)

```diff
-           Am[xm] = wm === fm ? hm : Tm(wm)
+           sD[rD] = LD === wD ? pD : zD(LD)
```

#### 4559. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37996` → after: `L37425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37425) · [Before (L37996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37996)

```diff
-       return (0, am.vc)(mm) ? null : (0, am.ab)(Qm.m, (Tm => {
+       return (0, KD.Ac)(DD) ? null : (0, KD.bb)(JD.q, (zD => {
```

#### 4560. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L37998` → after: `L37427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37427) · [Before (L37998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L37998)

```diff
-         return null !== (fm = mm[(0, Qm.f)(Tm)]) && void 0 !== fm ? fm : 1
+         return null !== (wD = DD[(0, JD.h)(zD)]) && void 0 !== wD ? wD : 1
```

#### 4561. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38003-L38004` → after: `L37432-L37433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37432-L37433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37432-L37433) · [Before (L38003-L38004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38003-L38004)

```diff
-       return (0, am.vc)(mm) ? null : (0, am.ab)(Qm.m, (Tm => {
-         const fm = mm[(0, Qm.f)(Tm)];
+       return (0, KD.Ac)(DD) ? null : (0, KD.bb)(JD.q, (zD => {
+         const wD = DD[(0, JD.h)(zD)];
```

#### 4562. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38022-L38026` → after: `L37451-L37455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37451-L37455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37451-L37455) · [Before (L38022-L38026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38022-L38026)

```diff
-       [hm.m.DEFAULT]: new Jm(Am.f, {}),
-       [hm.m.BOAT]: new Jm(xm, wm),
-       [hm.m.GLIDER]: new Jm(Ym, qm),
-       [hm.m.BALLOON]: new Jm(jm, Vm),
-       [hm.m.SLEEPING]: new Jm({
+       [pD.q.DEFAULT]: new QD(sD.f, {}),
+       [pD.q.BOAT]: new QD(rD, LD),
+       [pD.q.GLIDER]: new QD(BD, GD),
+       [pD.q.BALLOON]: new QD(hD, nD),
+       [pD.q.SLEEPING]: new QD({
```

#### 4563. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38038-L38039` → after: `L37467-L37468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37467-L37468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37467-L37468) · [Before (L38038-L38039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38038-L38039)

```diff
-       [hm.m.RIDING_MOB]: new Jm({
-         Ri: 1,
+       [pD.q.RIDING_MOB]: new QD({
+         Ug: 1,
```

#### 4564. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38054-L38056` → after: `L37483-L37485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37483-L37485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37483-L37485) · [Before (L38054-L38056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38054-L38056)

```diff
-       [hm.m.CAR]: new Jm(im, om),
-       [hm.m.HOVERCRAFT]: new Jm({
-         Ri: .5,
+       [pD.q.CAR]: new QD(gD, fD),
+       [pD.q.HOVERCRAFT]: new QD({
+         Ug: .5,
```

#### 4565. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38101` → after: `L37530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37530) · [Before (L38101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38101)

```diff
-       return null !== mm.fixedHeading ? mm.fixedHeading : mm.steering ? Tm : fm
+       return null !== DD.fixedHeading ? DD.fixedHeading : DD.steering ? zD : wD
```

#### 4566. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38104` → after: `L37533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37533) · [Before (L38104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38104)

```diff
-   6449: (mm, Tm, fm) => {
+   6516: (DD, zD, wD) => {
```

#### 4567. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38106-L38108` → after: `L37535-L37537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37535-L37537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37535-L37537) · [Before (L38106-L38108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38106-L38108)

```diff
-       b: () => pm,
-       d: () => Am,
-       e: () => Em
+       c: () => AD,
+       e: () => sD,
+       i: () => UD
```

#### 4568. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38110` → after: `L37539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37539) · [Before (L38110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38110)

```diff
-     var hm = fm(6451);
+     var pD = wD(6520);
```

#### 4569. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38113` → after: `L37542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37542) · [Before (L38113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38113)

```diff
-       return mm && Tm === hm.m.DEFAULT
+       return DD && zD === pD.q.DEFAULT
```

#### 4570. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38123` → after: `L37552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37552) · [Before (L38123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38123)

```diff
-         this.JA = 0, this.cA = 0, this.yVelocity = 0
+         this.Vs = 0, this.Ps = 0, this.yVelocity = 0
```

#### 4571. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38126` → after: `L37555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37555) · [Before (L38126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38126)

```diff
-         this.JA = 0, this.cA = 0, this.yVelocity = 0
+         this.Vs = 0, this.Ps = 0, this.yVelocity = 0
```

#### 4572. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38132-L38133` → after: `L37561-L37562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37561-L37562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37561-L37562) · [Before (L38132-L38133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38132-L38133)

```diff
-       mm.JA = Tm ? Math.min(mm.JA + xm / am * Am, xm) : 0, 0 === fm ? mm.cA = 0 : hm ? mm.cA = Am : mm.cA += Am;
-       const pm = Math.min(mm.cA, am) / am,
+       DD.Vs = zD ? Math.min(DD.Vs + rD / KD * sD, rD) : 0, 0 === wD ? DD.Ps = 0 : pD ? DD.Ps = sD : DD.Ps += sD;
+       const AD = Math.min(DD.Ps, KD) / KD,
```

#### 4573. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38138` → after: `L37567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37567) · [Before (L38138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38138)

```diff
-   38578: (mm, Tm, fm) => {
+   38463: (DD, zD, wD) => {
```

#### 4574. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38140-L38141` → after: `L37569-L37570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37569-L37570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37569-L37570) · [Before (L38140-L38141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38140-L38141)

```diff
-       c: () => Am,
-       g: () => hm
+       b: () => sD,
+       d: () => pD
```

#### 4575. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38147` → after: `L37576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37576) · [Before (L38147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38147)

```diff
-   37712: (mm, Tm, fm) => {
+   37620: (DD, zD, wD) => {
```

#### 4576. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38150-L38151` → after: `L37579-L37580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37579-L37580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37579-L37580) · [Before (L38150-L38151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38150-L38151)

```diff
-       i: () => xm,
-       j: () => wm
+       g: () => rD,
+       i: () => LD
```

#### 4577. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38153` → after: `L37582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37582) · [Before (L38153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38153)

```diff
-     var hm = fm(362),
+     var pD = wD(358),
```

#### 4578. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38155` → after: `L37584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37584) · [Before (L38155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38155)

```diff
-       am = fm(354);
+       KD = wD(351);
```

#### 4579. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38158` → after: `L37587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37587) · [Before (L38158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38158)

```diff
-     const Vm = [1, 2, 0, 8, 3, "i", "g", 5, 220, 4, 255, "length", 72, 202, "d", 237, 216, "undefined", void 0, "c", 19, 209, "b", 63, 6, "fromCodePoint", 7, 12, "push", 46, 33554432, 67108864, 68, 67, 122, 91, 8191, 88, 13, 14, "a", 195, !1, 127, 126, 9, "e", 128, 124, 125, !0,  … [truncated]
+     const nD = [0, 1, 8, 255, "length", "b", 2, "d", 67, 48, "undefined", void 0, 32, 4, 69, 141, 63, 6, "fromCodePoint", 7, 12, "push", "a", 120, 191, "i", "g", 91, 5, 8191, 88, 13, 14, 3, "e", "f", null, 10, 101, "h", 119, 9, 81, 44, 110, 180, 175, 102, "PI", 115, 116, 117, "c" … [truncated]
```

#### 4580. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38161-L38164` → after: `L37590-L37595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37590-L37595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37590-L37595) · [Before (L38161-L38164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38161-L38164)

```diff
-       return mm[Vm[11]] = Vm[0], typeof im[mm[Vm[2]]] === Vm[17] ? im[mm[Vm[2]]] = function(...mm) {
-         for (Zm(mm[Vm[11]] = Vm[0], mm[Vm[0]] = ']TCAGmLOalVSH7htE+pu[*i^fxP%{Q06ZIFc}bJ9R~:4`_Dg$zvdn>o/?5&#kWwB)!"8Kj=2sX.,1M3@<NY(|Uryeq;', mm[Vm[1]] = "" + (mm[Vm[2]] || ""), mm[Vm[4]] = mm[Vm[1]].length, mm[Vm[9]] = [], mm[Vm[7]] = Vm[2], mm[-Vm[8]] = Vm[2], mm[Vm[6]] = -Vm[ … [truncated]
-           if (mm[Vm[5]] = mm[Vm[0]].indexOf(mm[Vm[1]][mm[Vm[3]]]), mm[Vm[5]] !== -Vm[0])
-             if (mm[Vm[6]] < Vm[2]) mm[Vm[6]] = mm[Vm[5]];
+       return DD[nD[4]] = nD[1], typeof gD[DD[nD[0]]] === nD[10] ? gD[DD[nD[0]]] = function(DD) {
+         var zD, wD, pD, sD, KD, rD, LD;
+         for (PD(zD = "" + (DD || ""), wD = zD.length, pD = [], sD = nD[0], KD = nD[0], rD = -nD[1]), LD = nD[0]; LD < wD; LD++) {
+           var cD = '|Fw!%Gxf6~L3)=v*2m9s^ongQebJW{Yi_jAB[@a?5t#7T:X0NP+qU.$DylC>c,KHZ"I/h18VukdzE}(];`S4Mp&<ORr'.indexOf(zD[LD]);
+           if (cD !== -nD[1])
+             if (rD < nD[0]) rD = cD;
```

#### 4581. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38166` → after: `L37597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37597) · [Before (L38166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38166)

```diff
-               Zm(mm[Vm[6]] += mm[Vm[5]] * Vm[35], mm[Vm[7]] |= mm[Vm[6]] << mm[-Vm[8]], mm[-Vm[8]] += (mm[Vm[6]] & Vm[36]) > Vm[37] ? Vm[38] : Vm[39]);
+               PD(rD += cD * nD[27], sD |= rD << KD, KD += (rD & nD[29]) > nD[30] ? nD[31] : nD[32]);
```

#### 4582. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38168-L38172` → after: `L37599-L37605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37599-L37605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37599-L37605) · [Before (L38168-L38172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38168-L38172)

```diff
-                 Zm(mm[Vm[9]].push(mm[Vm[7]] & Vm[10]), mm[Vm[7]] >>= Vm[3], mm[-Vm[8]] -= Vm[3])
-               } while (mm[-Vm[8]] > Vm[26]);
-               mm[Vm[6]] = -Vm[0]
-             } return mm[Vm[6]] > -Vm[0] && mm[Vm[9]].push((mm[Vm[7]] | mm[Vm[6]] << mm[-Vm[8]]) & Vm[10]), Km(mm[Vm[9]])
-       }(Rm[mm[Vm[2]]]) : im[mm[Vm[2]]]
+                 PD(pD.push(sD & nD[3]), sD >>= nD[2], KD -= nD[2])
+               } while (KD > nD[19]);
+               rD = -nD[1]
+             }
+         }
+         return rD > -nD[1] && pD.push((sD | rD << KD) & nD[3]), OD(pD)
+       }(RD[DD[nD[0]]]) : gD[DD[nD[0]]]
```

#### 4583. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38175-L38176` → after: `L37608-L37609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37608-L37609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37608-L37609) · [Before (L38175-L38176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38175-L38176)

```diff
-     function Km(...mm) {
-       return mm[Vm[11]] = Vm[0], typeof Em !== Vm[17] && Em ? (new Em).decode(new om(mm[Vm[2]])) : typeof Om !== Vm[17] && Om ? Om.from(mm[Vm[2]]).toString("utf-8") : jm(mm[Vm[2]])
+     function OD(DD) {
+       return typeof UD !== nD[10] && UD ? (new UD).decode(new fD(DD)) : typeof ID !== nD[10] && ID ? ID.from(DD).toString("utf-8") : hD(DD)
```

#### 4584. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38180-L38181` → after: `L37613-L37614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37613-L37614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37613-L37614) · [Before (L38180-L38181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38180-L38181)

```diff
-     Zm(im = {}, Rm = ["*dCM^JK0V#.85sa", "{P,MdMu~1!@BNkEFoonORcJ}Ep[&&zH[)FA", "N!r6y_fnb&u$T", "tB.M7.%Q,#[j!f7", "~K.M[vs&`#y=bG", "/wpZxXQ~U&l!5EXJ_wB1*Ugu()euj}NR`wCd/Yw&IB$1KG}0", 'jousB.BT%hVKPNw}GZGvXkk&#!uAzkyFKwBoLF"f4SF@PJ#+', "uo_13.aDMwGlf20:}46G", "tLB{osIu.+Z@hvfFq … [truncated]
-       Zm(mm[Vm[11]] = Vm[2], mm[Vm[15]] = [function() {
+     PD(gD = {}, RD = ["W7G+b$$&D=AEDSKY#7T}*[FB(.o@>a#b0V9{h.YU9c%hYPcYK$w", 'S"b_0HyXE>nmDSH{8q(UPH?0)KYK6V|7?7Q$4(wYk^a1d88e+|', "J@nfFuLQj)L~qvRALb7uQ5V1dKz6)V&W2@hLbEO;uCO_h!", "vH#_W0bY;~qEm[UWgxC_[zNCRmCPeu|[&v_Ym", "kKzb&UiBE67D?Sh9^)6YSUP0T.b", '=P%+Uu"F', 'z"&f)&7BV^48Aw … [truncated]
+       PD(DD[nD[4]] = nD[0], DD[nD[8]] = [function() {
```

#### 4585. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38189` → after: `L37622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37622) · [Before (L38189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38189)

```diff
-       }], mm[Vm[12]] = Vm[18], mm[-Vm[13]] = []);
+       }], DD[nD[5]] = nD[11], DD[nD[6]] = []);
```

#### 4586. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38191` → after: `L37624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37624) · [Before (L38191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38191)

```diff
-         Zm(mm[Vm[12]] = Object, mm[-Vm[13]][Vm[28]]("".__proto__.constructor.name))
+         PD(DD[nD[5]] = Object, DD[nD[6]][nD[21]]("".__proto__.constructor.name))
```

#### 4587. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38193-L38196` → after: `L37626-L37629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37626-L37629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37626-L37629) · [Before (L38193-L38196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38193-L38196)

```diff
-       mm: for (mm[Vm[14]] = Vm[2]; mm[Vm[14]] < mm[Vm[15]][Vm[11]]; mm[Vm[14]]++) try {
-         for (mm[Vm[12]] = mm[Vm[15]][mm[Vm[14]]](), mm[-Vm[16]] = Vm[2]; mm[-Vm[16]] < mm[-Vm[13]][Vm[11]]; mm[-Vm[16]]++)
-           if (typeof mm[Vm[12]][mm[-Vm[13]][mm[-Vm[16]]]] === Vm[17]) continue mm;
-         return mm[Vm[12]]
+       DD: for (DD[nD[7]] = nD[0]; DD[nD[7]] < DD[nD[8]][nD[4]]; DD[nD[7]]++) try {
+         for (DD[nD[5]] = DD[nD[8]][DD[nD[7]]](), DD[-nD[9]] = nD[0]; DD[-nD[9]] < DD[nD[6]][nD[4]]; DD[-nD[9]]++)
+           if (typeof DD[nD[5]][DD[nD[6]][DD[-nD[9]]]] === nD[10]) continue DD;
+         return DD[nD[5]]
```

#### 4588. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38198-L38200` → after: `L37631-L37633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37631-L37633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37631-L37633) · [Before (L38198-L38200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38198-L38200)

```diff
-       return mm[Vm[12]] || this
-     }() || {}, Em = pm.TextDecoder, om = pm.Uint8Array, Om = pm.XO, Ym = pm.String || String, qm = pm.Array || Array, jm = function(...mm) {
-       return Zm(mm[Vm[11]] = Vm[2], mm[-Vm[29]] = new qm(Vm[47]), mm[Vm[19]] = Ym[Vm[25]] || Ym.fromCharCode, mm[-Vm[20]] = []),
+       return DD[nD[5]] || this
+     }() || {}, UD = AD.TextDecoder, fD = AD.Uint8Array, ID = AD.nI, BD = AD.String || String, GD = AD.Array || Array, hD = function(...DD) {
+       return PD(DD[nD[4]] = nD[0], DD[nD[22]] = new GD(nD[59]), DD[nD[23]] = BD[nD[18]] || BD.fromCharCode, DD[-nD[12]] = []),
```

#### 4589. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38202-L38203` → after: `L37635-L37636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37635-L37636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37635-L37636) · [Before (L38202-L38203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38202-L38203)

```diff
-           for (Zm(Tm[Vm[11]] = Vm[0], Tm[Vm[0]] = Vm[18], Tm[Vm[22]] = Vm[18], Tm[Vm[19]] = Tm[Vm[2]][Vm[11]], mm[-Vm[20]][Vm[11]] = Vm[2]), Tm[-Vm[21]] = Vm[2]; Tm[-Vm[21]] < Tm[Vm[19]];) Zm(Tm[Vm[22]] = Tm[Vm[2]][Tm[-Vm[21]]++], Tm[Vm[22]] <= Vm[43] ? Tm[Vm[0]] = Tm[Vm[22]] : T … [truncated]
-           return mm[-Vm[20]].join("")
+           for (PD(zD[nD[4]] = nD[1], zD[nD[1]] = nD[11], zD[nD[15]] = nD[11], zD[-nD[14]] = zD[nD[0]][nD[4]], DD[-nD[12]][nD[4]] = nD[0]), zD[nD[13]] = nD[0]; zD[nD[13]] < zD[-nD[14]];) PD(zD[nD[15]] = zD[nD[0]][zD[nD[13]]++], zD[nD[15]] <= nD[58] ? zD[nD[1]] = zD[nD[15]] : zD[nD … [truncated]
+           return DD[-nD[12]].join("")
```

#### 4590. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38206-L38209` → after: `L37639-L37642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37639-L37642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37639-L37642) · [Before (L38206-L38209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38206-L38209)

```diff
-     const nm = Am()[Im(Vm[34])](),
-       Jm = Am()[Im(Vm[34])](),
-       cm = Am()[Im(Vm[34])](),
-       zm = Vm[27];
+     const ED = sD()[MD(nD[38])](),
+       QD = sD()[MD(nD[38])](),
+       XD = sD()[MD(nD[38])](),
+       VD = nD[20];
```

#### 4591. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38214` → after: `L37647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37647) · [Before (L38214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38214)

```diff
-     Zm(xm = (...mm) => {
+     PD(rD = (DD, zD, wD, pD, sD, rD, LD, cD, AD) => {
```

#### 4592. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38216-L38221` → after: `L37649-L37652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37649-L37652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37649-L37652) · [Before (L38216-L38221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38216-L38221)

```diff
-         return mm[Vm[11]] = Vm[0], typeof im[mm[Vm[2]]] === Vm[17] ? im[mm[Vm[2]]] = function(mm) {
-           var Tm, fm, hm, Am, am, xm, wm;
-           for (Zm(Tm = "" + (mm || ""), fm = Tm.length, hm = [], Am = Vm[2], am = Vm[2], xm = -Vm[0]), wm = Vm[2]; wm < fm; wm++) {
-             var Dm = 'rDzAc2_^F5|M&]jxQ%JE/Ow+Ul}6y@hmp9RvogSG=d;>kH3.*s?uK:7BTLP0I`f[4tVeZi1<{q#(!"X8b)~$C,WNYan'.indexOf(Tm[wm]);
-             if (Dm !== -Vm[0])
-               if (xm < Vm[2]) xm = Dm;
+         return DD[nD[4]] = nD[1], typeof gD[DD[nD[0]]] === nD[10] ? gD[DD[nD[0]]] = function(...DD) {
+           for (PD(DD[nD[4]] = nD[1], DD[nD[1]] = '>w&yE%t8b!_D4NT#qp9,[Ja5AxX|h{Z)P}mR=@oBMHvizFe^WIUf06+g~*V]Yksnj1$SClQ/`Kr;"cd.2?u(3LOG<:7', DD[nD[5]] = "" + (DD[nD[0]] || ""), DD[-nD[40]] = DD[nD[5]].length, DD[nD[13]] = [], DD[nD[34]] = nD[0], DD[nD[17]] = nD[0], DD[-nD[42]] … [truncated]
+             if (DD[nD[41]] = DD[nD[1]].indexOf(DD[nD[5]][DD[nD[39]]]), DD[nD[41]] !== -nD[1])
+               if (DD[-nD[42]] < nD[0]) DD[-nD[42]] = DD[nD[41]];
```

#### 4593. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38223` → after: `L37654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37654) · [Before (L38223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38223)

```diff
-                 Zm(xm += Dm * Vm[35], Am |= xm << am, am += (xm & Vm[36]) > Vm[37] ? Vm[38] : Vm[39]);
+                 PD(DD[-nD[42]] += DD[nD[41]] * nD[27], DD[nD[34]] |= DD[-nD[42]] << DD[nD[17]], DD[nD[17]] += (DD[-nD[42]] & nD[29]) > nD[30] ? nD[31] : nD[32]);
```

#### 4594. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38225-L38231` → after: `L37656-L37660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37656-L37660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37656-L37660) · [Before (L38225-L38231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38225-L38231)

```diff
-                   Zm(hm.push(Am & Vm[10]), Am >>= Vm[3], am -= Vm[3])
-                 } while (am > Vm[26]);
-                 xm = -Vm[0]
-               }
-           }
-           return xm > -Vm[0] && hm.push((Am | xm << am) & Vm[10]), Km(hm)
-         }(Rm[mm[Vm[2]]]) : im[mm[Vm[2]]]
+                   PD(DD[nD[13]].push(DD[nD[34]] & nD[3]), DD[nD[34]] >>= nD[2], DD[nD[17]] -= nD[2])
+                 } while (DD[nD[17]] > nD[19]);
+                 DD[-nD[42]] = -nD[1]
+               } return DD[-nD[42]] > -nD[1] && DD[nD[13]].push((DD[nD[34]] | DD[-nD[42]] << DD[nD[17]]) & nD[3]), OD(DD[nD[13]])
+         }(RD[DD[nD[0]]]) : gD[DD[nD[0]]]
```

#### 4595. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38233-L38252` → after: `L37662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37662) · [Before (L38233-L38252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38233-L38252)

```diff
-       if (mm[Vm[11]] = Vm[45], Im(123) + "S" in Qm && function(...mm) {
-           Zm(mm[Vm[11]] = Vm[2], mm[Vm[40]] = function(...Tm) {
-             return Zm(Tm[Vm[11]] = Vm[4], Tm[Vm[40]] = {}), Tm[Vm[1]].length !== Tm[Vm[2]].length + Tm[Vm[0]].length ? Vm[42] : mm[Vm[41]](Tm[Vm[2]], Tm[Vm[0]], Tm[Vm[1]], Vm[2], Vm[2], Vm[2], Tm[Vm[40]])
-           }, mm[Vm[41]] = function(...Tm) {
-             return Zm(Tm[Vm[11]] = Vm[26], Tm[Vm[26]] = Vm[42]), Tm[Vm[7]] >= Tm[Vm[1]].length ? Vm[50] : Tm[Vm[24]]["" + Tm[Vm[4]] + Tm[Vm[9]] + Tm[Vm[7]]] !== Vm[18] ? Tm[Vm[24]]["" + Tm[Vm[4]] + Tm[Vm[9]] + Tm[Vm[7]]] : (Tm[Vm[1]][Tm[Vm[7]]] === Tm[Vm[2]][Tm[Vm[4]]] && Tm[Vm[1 … [truncated]
-           }, console.log(mm[Vm[40]]))
-         }(), !mm[Vm[0]][Tm(Vm[48]) + Tm(Vm[49]) + Tm(Vm[44]) + Tm(Vm[43])]) {
-         function Om(...mm) {
-           for (Zm(mm[Vm[11]] = Vm[0], mm[Vm[0]] = '1z4y&}B/)H?oqw{_mlL*QKWkx9!h8+0t3[MA~De]UVF|;Evjs%G>R:ZiJ7ua"2@SCIcd,<rX`YP5$p=g(Nb^#.fTO6n', mm[Vm[22]] = "" + (mm[Vm[2]] || ""), mm[Vm[4]] = mm[Vm[22]].length, mm[-Vm[44]] = [], mm[Vm[46]] = Vm[2], mm[Vm[24]] = Vm[2], mm[Vm[26] … [truncated]
-             if (mm[Vm[45]] = mm[Vm[0]].indexOf(mm[Vm[22]][mm[Vm[3]]]), mm[Vm[45]] !== -Vm[0])
-               if (mm[Vm[26]] < Vm[2]) mm[Vm[26]] = mm[Vm[45]];
-               else {
-                 Zm(mm[Vm[26]] += mm[Vm[45]] * Vm[35], mm[Vm[46]] |= mm[Vm[26]] << mm[Vm[24]], mm[Vm[24]] += (mm[Vm[26]] & Vm[36]) > Vm[37] ? Vm[38] : Vm[39]);
-                 do {
-                   Zm(mm[-Vm[44]].push(mm[Vm[46]] & Vm[10]), mm[Vm[46]] >>= Vm[3], mm[Vm[24]] -= Vm[3])
-                 } while (mm[Vm[24]] > Vm[26]);
- ... (4 more removed lines; see GitHub link above)
+       if (!zD[UD(nD[47]) + UD(103) + UD(104)]) {
```

#### 4596. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38254-L38291` → after: `L37664-L37666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37664-L37666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37664-L37666) · [Before (L38254-L38291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38254-L38291)

```diff
-           return mm[Vm[11]] = Vm[0], typeof im[mm[Vm[2]]] === Vm[17] ? im[mm[Vm[2]]] = Om(Rm[mm[Vm[2]]]) : im[mm[Vm[2]]]
-         }
-         mm[Vm[0]][Tm(Vm[47]) + Ym(129) + Ym(130)] = mm[Vm[26]]
-       }
-       Zm(mm[Vm[0]][Tm(Vm[48]) + Tm(Vm[49]) + Tm(Vm[44]) + Tm(Vm[43])] = Vm[50], mm[Vm[0]][Tm(Vm[48]) + Tm(131) + Tm(132) + Tm(133)] = mm[Vm[0]][Tm(Vm[47]) + Tm(Vm[53]) + Tm(Vm[54])], mm[Vm[51]] = mm[Vm[9]]), mm[Vm[9]] === Vm[2] && mm[Vm[7]] !== Vm[2] && (mm[Vm[51]] = Vm[0]);
-       const fm = mm[Vm[51]] < Vm[2] ? -mm[Vm[7]] : mm[Vm[7]],
-         hm = mm[Vm[9]] !== Vm[2] ? Math[Vm[52]] / Vm[9] : Math[Vm[52]] / Vm[1],
-         Am = mm[Vm[26]] + fm * hm,
-         xm = am[Vm[19]][Tm(136)](mm[Vm[0]][Tm(Vm[47]) + Tm(Vm[53]) + Tm(Vm[54])], Am),
-         wm = mm[Vm[3]] / Vm[66],
-         Dm = xm * (Vm[0] - Math[Tm(137)](-zm * wm)),
-         pm = mm[Vm[4]][Tm(138) + "te"] * wm,
-         Em = am[Vm[19]][Tm(Vm[55])](Dm, -pm, pm);
-       mm[Vm[0]][Tm(Vm[47]) + Tm(Vm[53]) + Tm(Vm[54])] = (mm[Vm[0]][Tm(Vm[47]) + Tm(Vm[53]) + Tm(Vm[54])] + Em) % (Math[Vm[52]] * Vm[1]);
-       const om = am[Vm[19]][Tm(Vm[55])](Math[Tm(Vm[57])](xm) / (Math[Vm[52]] / Vm[1]), Vm[2], Vm[0]);
-       mm[Vm[51]] !== Vm[2] ? Zm(mm[Vm[1]].heading = mm[Vm[51]] > Vm[2] ? mm[Vm[0]][Tm(Vm[47]) + Tm(Vm[53]) + Tm(Vm[54])] : mm[Vm[0]][Tm(Vm[47]) + Tm(Vm[53]) + Tm(Vm[54])] + Math[Vm[52]], mm[Vm[1]][Vm[56]] = mm[Vm[24]] * Math[Tm(Vm[57])](mm[Vm[51]]) * (Vm[0] - mm[Vm[4]][Tm(141) +  … [truncated]
- ... (22 more removed lines; see GitHub link above)
+           for (PD(DD[nD[4]] = nD[1], DD[-nD[43]] = ':Tru)_}DRs>{Bx9w1W3%o4n(q67QfLgN@/d!0MY~El`Oth,$|.;8jb^JFzIkXVPacZ+<"&]AC?SiH5p2GU=[yvmK#e*', DD[nD[5]] = "" + (DD[nD[0]] || ""), DD[nD[33]] = DD[nD[5]].length, DD[nD[7]] = [], DD[nD[46]] = nD[0], DD[nD[17]] = nD[0], DD[nD[45]]  … [truncated]
+             if (DD[nD[44]] = DD[-nD[43]].indexOf(DD[nD[5]][DD[nD[2]]]), DD[nD[44]] !== -nD[1])
+               if (DD[nD[45]] < nD[0]) DD[nD[45]] = DD[nD[44]];
```

#### 4597. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38293` → after: `L37668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37668) · [Before (L38293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38293)

```diff
-                 Zm(xm += im * Vm[35], Am |= xm << am, am += (xm & Vm[36]) > Vm[37] ? Vm[38] : Vm[39]);
+                 PD(DD[nD[45]] += DD[nD[44]] * nD[27], DD[nD[46]] |= DD[nD[45]] << DD[nD[17]], DD[nD[17]] += (DD[nD[45]] & nD[29]) > nD[30] ? nD[31] : nD[32]);
```

#### 4598. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38295-L38300` → after: `L37670-L37673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37670-L37673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37670-L37673) · [Before (L38295-L38300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38295-L38300)

```diff
-                   Zm(hm.push(Am & Vm[10]), Am >>= Vm[3], am -= Vm[3])
-                 } while (am > Vm[26]);
-                 xm = -Vm[0]
-               }
-           }
-           return xm > -Vm[0] && hm.push((Am | xm << am) & Vm[10]), Km(hm)
+                   PD(DD[nD[7]].push(DD[nD[46]] & nD[3]), DD[nD[46]] >>= nD[2], DD[nD[17]] -= nD[2])
+                 } while (DD[nD[17]] > nD[19]);
+                 DD[nD[45]] = -nD[1]
+               } return DD[nD[45]] > -nD[1] && DD[nD[7]].push((DD[nD[46]] | DD[nD[45]] << DD[nD[17]]) & nD[3]), OD(DD[nD[7]])
```

#### 4599. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38304-L38320` → after: `L37677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37677) · [Before (L38304-L38320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38304-L38320)

```diff
-           return typeof im[mm] === Vm[17] ? im[mm] = Tm(Rm[mm]) : im[mm]
-         }
- 
-         function hm(...mm) {
-           mm[Vm[11]] = Vm[0];
-           const Tm = {};
-           for (let fm of mm[Vm[2]].replace(/[^w]/g, "").toLowerCase()) Tm[fm] = Tm[fm] + Vm[0] || Vm[0];
-           return Tm
-         }
- 
-         function Am(...mm) {
-           mm[Vm[11]] = Vm[1];
-           const Tm = buildCharMap(mm[Vm[2]]),
-             fm = buildCharMap(mm[Vm[0]]);
-           for (let hm in Tm)
-             if (Tm[hm] !== fm[hm]) return Vm[42];
- ... (1 more removed lines; see GitHub link above)
+           return typeof gD[DD] === nD[10] ? gD[DD] = XD(RD[DD]) : gD[DD]
```

#### 4600. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38323-L38325` → after: `L37680-L37689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37680-L37689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37680-L37689) · [Before (L38323-L38325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38323-L38325)

```diff
-         function am(...mm) {
-           mm[Vm[11]] = Vm[0];
-           return xm(mm[Vm[2]]) !== 1 / 0
+         function xD() {
+           var DD;
+           PD(DD = function(...zD) {
+             if (PD(zD[nD[4]] = nD[17], zD[nD[22]] = nD[36]), !(zD[nD[28]] < nD[0])) {
+               if (zD[nD[28]] === nD[0]) return zD[nD[0]].push(zD[nD[1]]);
+               for (zD[nD[19]] = zD[nD[6]]; zD[nD[19]] < zD[nD[33]] && !(zD[nD[13]][zD[nD[19]]] > zD[nD[28]]); zD[nD[19]]++) zD[nD[19]] > zD[nD[6]] && zD[nD[13]][zD[nD[19]]] === zD[nD[13]][zD[nD[19]] - nD[1]] || PD(zD[nD[22]] = Array.from(zD[nD[1]]), zD[nD[22]].push(zD[nD[13]][zD[ … [truncated]
+             }
+           }, console.log((function(...zD) {
+             return PD(zD[nD[4]] = nD[6], zD[nD[22]] = [], zD[nD[33]] = zD[nD[0]].length, zD[nD[0]].sort(((DD, zD) => DD - zD)), DD(zD[nD[22]], [], nD[0], zD[nD[33]], zD[nD[0]], zD[nD[1]])), zD[nD[22]]
+           })))
```

#### 4601. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38327-L38346` → after: `L37691-L37705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37691-L37705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37691-L37705) · [Before (L38327-L38346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38327-L38346)

```diff
- 
-         function xm(...mm) {
-           if (mm[Vm[11]] = Vm[0], !mm[Vm[2]]) return -Vm[0];
-           const Tm = xm(mm[Vm[2]].left),
-             fm = xm(mm[Vm[2]].right),
-             hm = Math.abs(Tm - fm);
-           if (Tm === 1 / 0 || fm === 1 / 0 || hm > Vm[0]) return 1 / 0;
-           return Math.max(Tm, fm) + Vm[0]
-         }
-         mm[Vm[11]] = Vm[2], window[fm(145) + fm(146) + fm(147) + "_"] = {
-           buildCharacterMap: hm,
-           isAnagrams: Am,
-           isBalanced: am,
-           getHeightBalanced: xm
-         }
-       }();
- ... (4 more removed lines; see GitHub link above)
+         CD(105) in JD && xD(), zD[CD(106) + CD(107) + CD(108)] = cD
+       }
+       PD(zD[UD(109) + UD(nD[44]) + UD(111) + UD(112)] = !0, zD[UD(nD[47]) + UD(113) + UD(114)] = zD[UD(nD[49]) + UD(nD[50]) + UD(nD[51])]);
+       let fD = sD;
+       sD === nD[0] && rD !== nD[0] && (fD = nD[1]);
+       const ID = cD + (fD < nD[0] ? -rD : rD) * (sD !== nD[0] ? Math[nD[48]] / nD[13] : Math[nD[48]] / nD[6]),
+         BD = KD[nD[52]][UD(118)](zD[UD(nD[49]) + UD(nD[50]) + UD(nD[51])], ID),
+         GD = AD / nD[65],
+         hD = BD * (nD[1] - Math[UD(nD[40])](-VD * GD)),
+         MD = pD[UD(nD[23]) + "te"] * GD,
+         ED = KD[nD[52]][UD(nD[53])](hD, -MD, MD);
+       zD[UD(nD[49]) + UD(nD[50]) + UD(nD[51])] = (zD[UD(nD[49]) + UD(nD[50]) + UD(nD[51])] + ED) % (Math[nD[48]] * nD[6]);
+       const QD = KD[nD[52]][UD(nD[53])](Math[UD(nD[55])](BD) / (Math[nD[48]] / nD[6]), nD[0], nD[1]);
+       fD !== nD[0] ? PD(wD.heading = fD > nD[0] ? zD[UD(nD[49]) + UD(nD[50]) + UD(nD[51])] : zD[UD(nD[49]) + UD(nD[50]) + UD(nD[51])] + Math[nD[48]], wD[nD[54]] = LD * Math[UD(nD[55])](fD) * (nD[1] - pD[UD(123) + UD(124) + UD(125) + UD(nD[51])] * QD)) : wD[nD[54]] = nD[0]
+     }, LD = (...DD) => {
```

#### 4602. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38348-L38351` → after: `L37707-L37729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37707-L37729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37707-L37729) · [Before (L38348-L38351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38348-L38351)

```diff
-         return mm[Vm[11]] = Vm[0], typeof im[mm[Vm[2]]] === Vm[17] ? im[mm[Vm[2]]] = function(...mm) {
-           for (Zm(mm[Vm[11]] = Vm[0], mm[Vm[40]] = 'MCjHrPsTIYfoJUBilnVpNXk3a}F"t!D*EmeSK#89xq_Z.0b(RLOw/$&cA{gh]QWG`z4=1<+6,[^y~;57)v@u>|2?%d:', mm[Vm[22]] = "" + (mm[Vm[2]] || ""), mm[Vm[19]] = mm[Vm[22]].length, mm[Vm[14]] = [], mm[-Vm[62]] = Vm[2], mm[Vm[63]] = Vm[2], mm[Vm[6 … [truncated]
-             if (mm[-Vm[60]] = mm[Vm[40]].indexOf(mm[Vm[22]][mm[Vm[59]]]), mm[-Vm[60]] !== -Vm[0])
-               if (mm[Vm[6]] < Vm[2]) mm[Vm[6]] = mm[-Vm[60]];
+         return DD[nD[4]] = nD[1], typeof gD[DD[nD[0]]] === nD[10] ? gD[DD[nD[0]]] = function(...DD) {
+           for (PD(DD[nD[4]] = nD[1], DD[nD[1]] = 'd.zG9&Q;mOK3gX#oqua?b@eH+r2^yP`U:L=4j"F[VRkJ76,n(Esvh_IY1}ZDw*C{|W5S/Bx!l$cT8fi0Np>MA]%~<)t', DD[nD[6]] = "" + (DD[nD[0]] || ""), DD[nD[52]] = DD[nD[6]].length, DD[nD[7]] = [], DD[nD[34]] = nD[0], DD[nD[35]] = nD[0], DD[nD[19]] =  … [truncated]
+             if (DD[-nD[57]] = DD[nD[1]].indexOf(DD[nD[6]][DD[-nD[56]]]), DD[-nD[57]] !== -nD[1])
+               if (DD[nD[19]] < nD[0]) DD[nD[19]] = DD[-nD[57]];
+               else {
+                 PD(DD[nD[19]] += DD[-nD[57]] * nD[27], DD[nD[34]] |= DD[nD[19]] << DD[nD[35]], DD[nD[35]] += (DD[nD[19]] & nD[29]) > nD[30] ? nD[31] : nD[32]);
+                 do {
+                   PD(DD[nD[7]].push(DD[nD[34]] & nD[3]), DD[nD[34]] >>= nD[2], DD[nD[35]] -= nD[2])
+                 } while (DD[nD[35]] > nD[19]);
+                 DD[nD[19]] = -nD[1]
+               } return DD[nD[19]] > -nD[1] && DD[nD[7]].push((DD[nD[34]] | DD[nD[19]] << DD[nD[35]]) & nD[3]), OD(DD[nD[7]])
+         }(RD[DD[nD[0]]]) : gD[DD[nD[0]]]
+       }
+       DD[nD[4]] = nD[6];
+       const wD = DD[nD[1]][zD(126) + zD(nD[58]) + zD(nD[59]) + zD(129)],
+         pD = DD[nD[0]].ODD;
+ ... (7 more added lines; see GitHub link above)
```

#### 4603. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38353` → after: `L37731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37731) · [Before (L38353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38353)

```diff
-                 Zm(mm[Vm[6]] += mm[-Vm[60]] * Vm[35], mm[-Vm[62]] |= mm[Vm[6]] << mm[Vm[63]], mm[Vm[63]] += (mm[Vm[6]] & Vm[36]) > Vm[37] ? Vm[38] : Vm[39]);
+                 PD(DD[nD[26]] += DD[nD[41]] * nD[27], DD[nD[61]] |= DD[nD[26]] << DD[nD[35]], DD[nD[35]] += (DD[nD[26]] & nD[29]) > nD[30] ? nD[31] : nD[32]);
```

#### 4604. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38355-L38366` → after: `L37733-L37754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37733-L37754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37733-L37754) · [Before (L38355-L38366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38355-L38366)

```diff
-                   Zm(mm[Vm[14]].push(mm[-Vm[62]] & Vm[10]), mm[-Vm[62]] >>= Vm[3], mm[Vm[63]] -= Vm[3])
-                 } while (mm[Vm[63]] > Vm[26]);
-                 mm[Vm[6]] = -Vm[0]
-               } return mm[Vm[6]] > -Vm[0] && mm[Vm[14]].push((mm[-Vm[62]] | mm[Vm[6]] << mm[Vm[63]]) & Vm[10]), Km(mm[Vm[14]])
-         }(Rm[mm[Vm[2]]]) : im[mm[Vm[2]]]
-       }
-       mm[Vm[11]] = Vm[9], Zm(Am()[Tm(Vm[65])](nm, mm[Vm[2]][Vm[64]][Vm[2]], Vm[2], mm[Vm[2]][Vm[64]][Vm[1]]), Am()[Tm(Vm[65])](Jm, Vm[2], Vm[2], Vm[0]), Am().pa(Jm, Jm, Am()[Tm(157)], mm[Vm[0]]));
-       const fm = Am()[Tm(158)](nm, Jm);
-       Am().Of(cm, nm, Jm, -fm);
-       const hm = mm[Vm[4]] / Vm[66],
-         am = Vm[0] - Math[Tm(159)](-mm[Vm[1]] * hm);
-       Zm(Am()[Tm(160)](cm, cm, -am * mm[Vm[2]].Ri / hm), mm[Vm[2]][Tm(161) + Tm(162)](cm))
+                   PD(DD[-nD[37]].push(DD[nD[61]] & nD[3]), DD[nD[61]] >>= nD[2], DD[nD[35]] -= nD[2])
+                 } while (DD[nD[35]] > nD[19]);
+                 DD[nD[26]] = -nD[1]
+               } return DD[nD[26]] > -nD[1] && DD[-nD[37]].push((DD[nD[61]] | DD[nD[26]] << DD[nD[35]]) & nD[3]), OD(DD[-nD[37]])
+         }(RD[DD]) : gD[DD]
+       }
+       DD[nD[4]] = nD[13], zD(135) + "k" in JD && function() {
+         var DD, zD = function(...zD) {
+           return PD(zD[nD[4]] = nD[6], zD[nD[6]] = [], zD[-nD[62]] = zD[nD[0]].length, zD[nD[0]].sort(((DD, zD) => DD - zD)), DD(zD[nD[6]], [], nD[0], zD[-nD[62]], zD[nD[0]], zD[nD[1]])), zD[nD[6]]
+         };
+         PD(DD = function(...zD) {
+           if (PD(zD[nD[4]] = nD[17], zD[nD[22]] = nD[36]), !(zD[nD[28]] < nD[0])) {
+             if (zD[nD[28]] === nD[0]) return zD[nD[0]].push(zD[nD[1]]);
+             for (zD[nD[5]] = zD[nD[6]]; zD[nD[5]] < zD[nD[33]] && !(zD[nD[13]][zD[nD[5]]] > zD[nD[28]]); zD[nD[5]]++) zD[nD[5]] > zD[nD[6]] && zD[nD[13]][zD[nD[5]]] === zD[nD[13]][zD[nD[5]] - nD[1]] || PD(zD[nD[22]] = Array.from(zD[nD[1]]), zD[nD[22]].push(zD[nD[13]][zD[nD[5]]]), … [truncated]
+           }
+         }, console.log(zD))
+ ... (6 more added lines; see GitHub link above)
```

#### 4605. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38369` → after: `L37757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37757) · [Before (L38369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38369)

```diff
-   38298: (mm, Tm, fm) => {
+   38178: (DD, zD, wD) => {
```

#### 4606. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38371-L38374` → after: `L37759-L37762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37759-L37762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37759-L37762) · [Before (L38371-L38374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38371-L38374)

```diff
-       B: () => zm,
-       E: () => Em,
-       d: () => jm,
-       h: () => Km,
+       b: () => hD,
+       f: () => OD,
+       i: () => QD,
+       k: () => XD,
```

#### 4607. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38378-L38379` → after: `L37766-L37767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37766-L37767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37766-L37767) · [Before (L38378-L38379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38378-L38379)

```diff
-       x: () => pm,
-       z: () => om
+       u: () => VD,
+       v: () => UD
```

#### 4608. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38381-L38386` → after: `L37769-L37774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37769-L37774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37769-L37774) · [Before (L38381-L38386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38381-L38386)

```diff
-     var hm = fm(6451),
-       Am = fm(37154),
-       am = fm(9141);
-     const xm = (0, am.k)("Water"),
-       wm = (0, am.k)("Lava"),
-       Dm = (0, am.k)("Air"),
+     var pD = wD(6520),
+       sD = wD(37037),
+       KD = wD(9198);
+     const rD = (0, KD.p)("Water"),
+       LD = (0, KD.p)("Lava"),
+       cD = (0, KD.p)("Air"),
```

#### 4609. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38389-L38390` → after: `L37777-L37778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37777-L37778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37777-L37778) · [Before (L38389-L38390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38389-L38390)

```diff
-           type: hm.m.CAR,
-           tier: hm.g.KART
+           type: pD.q.CAR,
+           tier: pD.j.KART
```

#### 4610. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38409-L38410` → after: `L37797-L37798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37797-L37798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37797-L37798) · [Before (L38409-L38410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38409-L38410)

```diff
-             type: hm.m.BOAT,
-             tier: hm.c.WOOD
+             type: pD.q.BOAT,
+             tier: pD.i.WOOD
```

#### 4611. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38419-L38420` → after: `L37807-L37808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37807-L37808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37807-L37808) · [Before (L38419-L38420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38419-L38420)

```diff
-             type: hm.m.BOAT,
-             tier: hm.c.OBSIDIAN
+             type: pD.q.BOAT,
+             tier: pD.i.OBSIDIAN
```

#### 4612. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38429-L38430` → after: `L37817-L37818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37817-L37818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37817-L37818) · [Before (L38429-L38430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38429-L38430)

```diff
-             type: hm.m.BOAT,
-             tier: hm.c.SPEED
+             type: pD.q.BOAT,
+             tier: pD.i.SPEED
```

#### 4613. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38439` → after: `L37827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37827) · [Before (L38439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38439)

```diff
-             type: hm.m.HOVERCRAFT,
+             type: pD.q.HOVERCRAFT,
```

#### 4614. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38513-L38514` → after: `L37901-L37902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37901-L37902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37901-L37902) · [Before (L38513-L38514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38513-L38514)

```diff
-             type: hm.m.CAR,
-             tier: hm.g.OFF_ROADER
+             type: pD.q.CAR,
+             tier: pD.j.OFF_ROADER
```

#### 4615. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38531-L38532` → after: `L37919-L37920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37919-L37920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37919-L37920) · [Before (L38531-L38532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38531-L38532)

```diff
-             type: hm.m.CAR,
-             tier: hm.g.GOLD_MINING_DRILL
+             type: pD.q.CAR,
+             tier: pD.j.GOLD_MINING_DRILL
```

#### 4616. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38539-L38540` → after: `L37927-L37928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37927-L37928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37927-L37928) · [Before (L38539-L38540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38539-L38540)

```diff
-             type: hm.m.CAR,
-             tier: hm.g.IRON_MINING_DRILL
+             type: pD.q.CAR,
+             tier: pD.j.IRON_MINING_DRILL
```

#### 4617. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38547-L38548` → after: `L37935-L37936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37935-L37936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37935-L37936) · [Before (L38547-L38548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38547-L38548)

```diff
-             type: hm.m.CAR,
-             tier: hm.g.DIAMOND_MINING_DRILL
+             type: pD.q.CAR,
+             tier: pD.j.DIAMOND_MINING_DRILL
```

#### 4618. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38555-L38556` → after: `L37943-L37944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37943-L37944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37943-L37944) · [Before (L38555-L38556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38555-L38556)

```diff
-             type: hm.m.CAR,
-             tier: hm.g.MOONSTONE_MINING_DRILL
+             type: pD.q.CAR,
+             tier: pD.j.MOONSTONE_MINING_DRILL
```

#### 4619. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38562-L38563` → after: `L37950-L37951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37950-L37951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37950-L37951) · [Before (L38562-L38563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38562-L38563)

```diff
-             type: hm.m.CAR,
-             tier: hm.g.ARMORED_CAR
+             type: pD.q.CAR,
+             tier: pD.j.ARMORED_CAR
```

#### 4620. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38579-L38580` → after: `L37967-L37968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37967-L37968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37967-L37968) · [Before (L38579-L38580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38579-L38580)

```diff
-             type: hm.m.CAR,
-             tier: hm.g.CAR
+             type: pD.q.CAR,
+             tier: pD.j.CAR
```

#### 4621. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38590` → after: `L37978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37978) · [Before (L38590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38590)

```diff
-       for (const Tm of Am.e)
+       for (const zD of sD.d)
```

#### 4622. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38599` → after: `L37987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37987) · [Before (L38599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38599)

```diff
-       if ("solidBlocks" === fm) return !0 !== am.i[Tm].Qo;
+       if ("solidBlocks" === wD) return !0 !== KD.l[zD].Af;
```

#### 4623. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38601` → after: `L37989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R37989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L37989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L37989) · [Before (L38601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38601)

```diff
-       throw new Error(`Unsupported validBlockIds for ${Tm}: ${JSON.stringify(fm)}`)
+       throw new Error(`Unsupported validBlockIds for ${zD}: ${JSON.stringify(wD)}`)
```

#### 4624. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38614-L38615` → after: `L38002-L38003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R38002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L38002-L38003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L38002-L38003) · [Before (L38614-L38615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38614-L38615)

```diff
-             type: hm.m.BALLOON,
-             tier: hm.b.YELLOW
+             type: pD.q.BALLOON,
+             tier: pD.e.YELLOW
```

#### 4625. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38621-L38622` → after: `L38009-L38010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R38009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L38009-L38010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L38009-L38010) · [Before (L38621-L38622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38621-L38622)

```diff
-             type: hm.m.BALLOON,
-             tier: hm.b.WHITE
+             type: pD.q.BALLOON,
+             tier: pD.e.WHITE
```

#### 4626. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38628-L38629` → after: `L38016-L38017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R38016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L38016-L38017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L38016-L38017) · [Before (L38628-L38629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38628-L38629)

```diff
-             type: hm.m.BALLOON,
-             tier: hm.b.RED
+             type: pD.q.BALLOON,
+             tier: pD.e.RED
```

#### 4627. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38635-L38636` → after: `L38023-L38024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R38023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L38023-L38024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L38023-L38024) · [Before (L38635-L38636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38635-L38636)

```diff
-             type: hm.m.BALLOON,
-             tier: hm.b.PURPLE
+             type: pD.q.BALLOON,
+             tier: pD.e.PURPLE
```

#### 4628. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38642-L38643` → after: `L38030-L38031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R38030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L38030-L38031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L38030-L38031) · [Before (L38642-L38643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38642-L38643)

```diff
-             type: hm.m.BALLOON,
-             tier: hm.b.PINK
+             type: pD.q.BALLOON,
+             tier: pD.e.PINK
```

#### 4629. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38649-L38650` → after: `L38037-L38038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R38037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L38037-L38038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L38037-L38038) · [Before (L38649-L38650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38649-L38650)

```diff
-             type: hm.m.BALLOON,
-             tier: hm.b.ORANGE
+             type: pD.q.BALLOON,
+             tier: pD.e.ORANGE
```

#### 4630. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38656-L38657` → after: `L38044-L38045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R38044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L38044-L38045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L38044-L38045) · [Before (L38656-L38657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38656-L38657)

```diff
-             type: hm.m.BALLOON,
-             tier: hm.b.MAGENTA
+             type: pD.q.BALLOON,
+             tier: pD.e.MAGENTA
```

#### 4631. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38663-L38664` → after: `L38051-L38052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R38051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L38051-L38052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L38051-L38052) · [Before (L38663-L38664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38663-L38664)

```diff
-             type: hm.m.BALLOON,
-             tier: hm.b.LIME
+             type: pD.q.BALLOON,
+             tier: pD.e.LIME
```

#### 4632. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38670-L38671` → after: `L38058-L38059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R38058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L38058-L38059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L38058-L38059) · [Before (L38670-L38671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38670-L38671)

```diff
-             type: hm.m.BALLOON,
-             tier: hm.b.LIGHT_GRAY
+             type: pD.q.BALLOON,
+             tier: pD.e.LIGHT_GRAY
```

#### 4633. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38677-L38678` → after: `L38065-L38066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R38065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L38065-L38066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L38065-L38066) · [Before (L38677-L38678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38677-L38678)

```diff
-             type: hm.m.BALLOON,
-             tier: hm.b.LIGHT_BLUE
+             type: pD.q.BALLOON,
+             tier: pD.e.LIGHT_BLUE
```

#### 4634. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38684-L38685` → after: `L38072-L38073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R38072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L38072-L38073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L38072-L38073) · [Before (L38684-L38685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38684-L38685)

```diff
-             type: hm.m.BALLOON,
-             tier: hm.b.GREEN
+             type: pD.q.BALLOON,
+             tier: pD.e.GREEN
```

#### 4635. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38691-L38692` → after: `L38079-L38080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R38079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L38079-L38080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L38079-L38080) · [Before (L38691-L38692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38691-L38692)

```diff
-             type: hm.m.BALLOON,
-             tier: hm.b.GRAY
+             type: pD.q.BALLOON,
+             tier: pD.e.GRAY
```

#### 4636. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38698-L38699` → after: `L38086-L38087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R38086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L38086-L38087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L38086-L38087) · [Before (L38698-L38699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38698-L38699)

```diff
-             type: hm.m.BALLOON,
-             tier: hm.b.CYAN
+             type: pD.q.BALLOON,
+             tier: pD.e.CYAN
```

#### 4637. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38705-L38706` → after: `L38093-L38094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R38093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L38093-L38094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L38093-L38094) · [Before (L38705-L38706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38705-L38706)

```diff
-             type: hm.m.BALLOON,
-             tier: hm.b.BROWN
+             type: pD.q.BALLOON,
+             tier: pD.e.BROWN
```

#### 4638. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38712-L38713` → after: `L38100-L38101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R38100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L38100-L38101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L38100-L38101) · [Before (L38712-L38713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38712-L38713)

```diff
-             type: hm.m.BALLOON,
-             tier: hm.b.BLUE
+             type: pD.q.BALLOON,
+             tier: pD.e.BLUE
```

#### 4639. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38719-L38720` → after: `L38107-L38108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R38107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L38107-L38108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L38107-L38108) · [Before (L38719-L38720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38719-L38720)

```diff
-             type: hm.m.BALLOON,
-             tier: hm.b.BLACK
+             type: pD.q.BALLOON,
+             tier: pD.e.BLACK
```

#### 4640. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38727` → after: `L38115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R38115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L38115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L38115) · [Before (L38727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38727)

```diff
-       return null === mm || void 0 === mm ? null : null !== (Tm = qm[mm]) && void 0 !== Tm ? Tm : null
+       return null === DD || void 0 === DD ? null : null !== (zD = GD[DD]) && void 0 !== zD ? zD : null
```

#### 4641. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38740-L38741` → after: `L38128-L38129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R38128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L38128-L38129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L38128-L38129) · [Before (L38740-L38741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38740-L38741)

```diff
-             type: hm.m.GLIDER,
-             tier: hm.i.WOOD
+             type: pD.q.GLIDER,
+             tier: pD.k.WOOD
```

#### 4642. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38747-L38748` → after: `L38135-L38136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R38135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L38135-L38136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L38135-L38136) · [Before (L38747-L38748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38747-L38748)

```diff
-             type: hm.m.GLIDER,
-             tier: hm.i.IRON
+             type: pD.q.GLIDER,
+             tier: pD.k.IRON
```

#### 4643. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38754-L38755` → after: `L38142-L38143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R38142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L38142-L38143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L38142-L38143) · [Before (L38754-L38755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38754-L38755)

```diff
-             type: hm.m.GLIDER,
-             tier: hm.i.GOLD
+             type: pD.q.GLIDER,
+             tier: pD.k.GOLD
```

#### 4644. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38761-L38762` → after: `L38149-L38150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R38149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L38149-L38150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L38149-L38150) · [Before (L38761-L38762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38761-L38762)

```diff
-             type: hm.m.GLIDER,
-             tier: hm.i.DIAMOND
+             type: pD.q.GLIDER,
+             tier: pD.k.DIAMOND
```

#### 4645. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38769` → after: `L38157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R38157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L38157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L38157) · [Before (L38769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38769)

```diff
-       return null === mm || void 0 === mm ? null : null !== (Tm = Im[mm]) && void 0 !== Tm ? Tm : null
+       return null === DD || void 0 === DD ? null : null !== (zD = MD[DD]) && void 0 !== zD ? zD : null
```

#### 4646. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38783` → after: `L38171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R38171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L38171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L38171) · [Before (L38783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38783)

```diff
-       return mm === hm.m.DEFAULT || function(mm) {
+       return DD === pD.q.DEFAULT || function(DD) {
```

#### 4647. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38788` → after: `L38176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R38176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L38176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L38176) · [Before (L38788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38788)

```diff
-   37233: (mm, Tm, fm) => {
+   37151: (DD, zD, wD) => {
```

#### 4648. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38790-L38793` → after: `L38178-L38181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R38178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L38178-L38181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L38178-L38181) · [Before (L38790-L38793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38790-L38793)

```diff
-       d: () => xm,
-       h: () => am,
-       i: () => hm,
-       k: () => Am
+       b: () => rD,
+       c: () => KD,
+       e: () => pD,
+       h: () => sD
```

#### 4649. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38808` → after: `L38196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R38196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L38196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L38196) · [Before (L38808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38808)

```diff
-   38489: (mm, Tm, fm) => {
+   38375: (DD, zD, wD) => {
```

#### 4650. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38811` → after: `L38199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R38199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L38199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L38199) · [Before (L38811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38811)

```diff
-       f: () => Rm
+       h: () => RD
```

#### 4651. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38827` → after: `L38215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R38215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L38215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L38215) · [Before (L38827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38827)

```diff
-           const wm = Array.isArray(xm) ? xm : am;
+           const LD = Array.isArray(rD) ? rD : KD;
```

#### 4652. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38845` → after: `L38233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R38233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L38233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L38233) · [Before (L38845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38845)

```diff
-       return mm.YC && mm.Ri > 0 && mm.depenetrate && null === mm.nC
+       return DD.Uy && DD.Ug > 0 && DD.depenetrate && null === DD.Iy
```

#### 4653. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38868` → after: `L38256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R38256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L38256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L38256) · [Before (L38868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38868)

```diff
-   37692: (mm, Tm, fm) => {
+   37611: (DD, zD, wD) => {
```

#### 4654. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38871` → after: `L38259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R38259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L38259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L38259) · [Before (L38871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38871)

```diff
-       h: () => xm
+       f: () => rD
```

#### 4655. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38873` → after: `L38261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R38261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L38261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L38261) · [Before (L38873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38873)

```diff
-     var hm = fm(685);
+     var pD = wD(648);
```

#### 4656. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38884` → after: `L38272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R38272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L38272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L38272) · [Before (L38884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38884)

```diff
-         return null !== (Tm = am[this.suffixMapping[mm]]) && void 0 !== Tm ? Tm : []
+         return null !== (zD = KD[this.suffixMapping[DD]]) && void 0 !== zD ? zD : []
```

#### 4657. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38891` → after: `L38279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R38279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L38279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L38279) · [Before (L38891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38891)

```diff
-             id: (0, hm.b)()
+             id: (0, pD.e)()
```

#### 4658. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38903` → after: `L38291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R38291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L38291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L38291) · [Before (L38903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38903)

```diff
-           Tm[fm] = (null !== (im = Tm[fm]) && void 0 !== im ? im : 0) + 1, Tm[fm] >= Dm && Am.splice(Am.indexOf(fm), 1)
+           zD[wD] = (null !== (gD = zD[wD]) && void 0 !== gD ? gD : 0) + 1, zD[wD] >= cD && sD.splice(sD.indexOf(wD), 1)
```

#### 4659. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38942` → after: `L38330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R38330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L38330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L38330) · [Before (L38942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38942)

```diff
-   37315: (mm, Tm, fm) => {
+   37242: (DD, zD, wD) => {
```

#### 4660. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L38944-L39395` → after: `L38332-L38783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R38332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L38332-L38783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L38332-L38783) · [Before (L38944-L39395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L38944-L39395)

```diff
-       "./67/67_Atlas.png": 26935,
-       "./67/67_Model.glb": 33350,
-       "./67/67_Reconstructed.glb": 33353,
-       "./67/variations/0_67_default.png": 26940,
-       "./Armour Collector/Armour Collector_Atlas.png": 26946,
-       "./Armour Collector/Armour Collector_Model.glb": 33362,
-       "./Armour Collector/Armour Collector_Reconstructed.glb": 33366,
-       "./Armour Collector/variations/0_armour collector_default.png": 26954,
-       "./Bear/BearSaddle_Atlas.png": 26961,
-       "./Bear/Bear_Atlas.png": 26965,
-       "./Bear/Bear_Model.glb": 33371,
-       "./Bear/variations/0_bear_default.png": 26968,
-       "./Bobino Musculino/Bobino Musculino_Atlas.png": 26973,
-       "./Bobino Musculino/Bobino Musculino_Model.glb": 33373,
-       "./Bobino Musculino/Bobino Musculino_Reconstructed.glb": 33381,
-       "./Bobino Musculino/variations/0_bobino musculino_default.png": 26976,
- ... (436 more removed lines; see GitHub link above)
+       "./67/67_Atlas.png": 27041,
+       "./67/67_Model.glb": 33241,
+       "./67/67_Reconstructed.glb": 33245,
+       "./67/variations/0_67_default.png": 27044,
+       "./Armour Collector/Armour Collector_Atlas.png": 27046,
+       "./Armour Collector/Armour Collector_Model.glb": 33254,
+       "./Armour Collector/Armour Collector_Reconstructed.glb": 33256,
+       "./Armour Collector/variations/0_armour collector_default.png": 27050,
+       "./Bear/BearSaddle_Atlas.png": 27058,
+       "./Bear/Bear_Atlas.png": 27061,
+       "./Bear/Bear_Model.glb": 33261,
+       "./Bear/variations/0_bear_default.png": 27066,
+       "./Bobino Musculino/Bobino Musculino_Atlas.png": 27068,
+       "./Bobino Musculino/Bobino Musculino_Model.glb": 33267,
+       "./Bobino Musculino/Bobino Musculino_Reconstructed.glb": 33272,
+       "./Bobino Musculino/variations/0_bobino musculino_default.png": 27077,
+ ... (436 more added lines; see GitHub link above)
```

#### 4661. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L39412` → after: `L38800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R38800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L38800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L38800) · [Before (L39412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L39412)

```diff
-     }, Am.resolve = am, mm.exports = Am, Am.id = 37315
+     }, sD.resolve = KD, DD.exports = sD, sD.id = 37242
```

#### 4662. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L39414` → after: `L38802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R38802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L38802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L38802) · [Before (L39414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L39414)

```diff
-   38131: mm => {
+   38047: DD => {
```

#### 4663. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L39417` → after: `L38805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R38805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L38805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L38805) · [Before (L39417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L39417)

```diff
-   38014: (mm, Tm, fm) => {
+   37934: (DD, zD, wD) => {
```

#### 4664. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L39419` → after: `L38807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R38807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L38807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L38807) · [Before (L39419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L39419)

```diff
-       c: () => hm,
+       b: () => pD,
```

#### 4665. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L39421` → after: `L38809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R38809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L38809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L38809) · [Before (L39421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L39421)

```diff
-       h: () => Am,
+       g: () => sD,
```

#### 4666. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L39435` → after: `L38823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R38823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L38823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L38823) · [Before (L39435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L39435)

```diff
-         ni: 512,
+         Qg: 512,
```

#### 4667. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L39453` → after: `L38841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R38841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L38841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/119.js#L38841) · [Before (L39453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/119.js#L39453)

```diff
-         ["held", hm.ni],
+         ["held", pD.Qg],
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/120.js` (mpd96o.85ad4551 → tz47m9.2cb7e113)

- **File**: `bundles/bloxd.io/chunks/js/120.js` (87 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72)

#### 1. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/120.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/120.js#L4)

```diff
-   36698: (mm, Tm, fm) => {
+   36588: (DD, zD, wD) => {
```

#### 2. `bundles/bloxd.io/chunks/js/120.js` (Changed code · before: `L6-L7` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-c887d043d207b891eaa44ac460d82fe42cc36fae5bfc750e753b656cbfeaaf72) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/120.js#L6-L7) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/120.js#L6-L7)

```diff
-       b: () => Ym,
-       c: () => nm
+       e: () => BD,
+       h: () => ED
```
