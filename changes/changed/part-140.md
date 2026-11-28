# Changed — Bundle Modifications Report (Part 140 / 154)

- **Updated at**: `2026-11-28T21:24 JST`
- **Part**: `140 / 154` (**397** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 139](part-139.md) · [Part 141 →](part-141.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/renderDebug.js` (yteou.5361c997 → welxxc.ffac0572 · continued)

- **File**: `bundles/bloxd.io/chunks/js/renderDebug.js` (120 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9)

#### 45. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L694-L695` → after: `L694-L695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L694-L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderDebug.js#L694-L695) · [Before (L694-L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderDebug.js#L694-L695)

```diff
-                     md = Od.By.length > 8 ? ` (+${Od.By.length-8} ranges)` : "";
-                   cd(`  ${Sd(Od.program)} ${Od.program.terrain} ${Od.call} ${dd}${md} x${Od.instances}${Od.group>=0?` part ${Od.group} chunk ${Od.chunk}`:""} | ${Od.attributes.join(" | ")}`)
+                     Mb = wb.gF.length > 8 ? ` (+${wb.gF.length-8} ranges)` : "";
+                   Qb(`  ${Db(wb.program)} ${wb.program.terrain} ${wb.call} ${bb}${Mb} x${wb.instances}${wb.group>=0?` part ${wb.group} chunk ${wb.chunk}`:""} | ${wb.attributes.join(" | ")}`)
```

#### 46. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L713` → after: `L713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderDebug.js#L713) · [Before (L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderDebug.js#L713)

```diff
-                     Od.push(`${Fd.kind}#${nd(Wd)}: no CPU copy (${Ad.uncopied} pages over the copy budget)`);
+                     wb.push(`${Hb.kind}#${Jb(eb)}: no CPU copy (${fb.uncopied} pages over the copy budget)`);
```

#### 47. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L717` → after: `L717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderDebug.js#L717) · [Before (L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderDebug.js#L717)

```diff
-                     Od.push(FO(`buf#${dd.id}`, dd, fd(Rd, Fd.buffer, 0, dd.bytes.length)));
+                     wb.push(Mw(`buf#${bb.id}`, bb, yb(pb, Hb.buffer, 0, bb.bytes.length)));
```

#### 48. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L722` → after: `L722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderDebug.js#L722) · [Before (L722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderDebug.js#L722)

```diff
-                   Od.push(FO(`tex#${dd.id} (${16===dd.texelBytes?"records":"light"})`, dd, Xd))
+                   wb.push(Mw(`tex#${bb.id} (${16===bb.texelBytes?"records":"light"})`, bb, Vb))
```

#### 49. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L724` → after: `L724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderDebug.js#L724) · [Before (L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderDebug.js#L724)

```diff
-                 for (const Wd of Od) cd(`page readback ${Wd}`)
+                 for (const eb of wb) Qb(`page readback ${eb}`)
```

#### 50. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L727` → after: `L727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderDebug.js#L727) · [Before (L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderDebug.js#L727)

```diff
-               cd(`check failed: ${String(dd)}`)
+               Qb(`check failed: ${String(bb)}`)
```

#### 51. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L740` → after: `L740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderDebug.js#L740) · [Before (L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderDebug.js#L740)

```diff
-     var vO = md(5426);
+     var gw = Mb(5587);
```

#### 52. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L750` → after: `L750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderDebug.js#L750) · [Before (L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderDebug.js#L750)

```diff
-         dd[Od] = Fd, (0, vO.t)(Fd, Wd)
+         bb[wb] = Hb, (0, gw.A)(Hb, eb)
```

#### 53. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L788` → after: `L788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderDebug.js#L788) · [Before (L788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderDebug.js#L788)

```diff
-         Rd = md ? md * Wd : dd.byteLength - Od * Wd;
+         pb = Mb ? Mb * eb : bb.byteLength - wb * eb;
```

#### 54. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L846` → after: `L846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderDebug.js#L846) · [Before (L846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderDebug.js#L846)

```diff
-           Xd = null !== (Od = yO.get(Rd)) && void 0 !== Od ? Od : [];
+           Vb = null !== (wb = Cw.get(pb)) && void 0 !== wb ? wb : [];
```

#### 55. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L857` → after: `L857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderDebug.js#L857) · [Before (L857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderDebug.js#L857)

```diff
-               TO.lost < QO && (TO.lost++, cd(`${Od}${"statusMessage"in dd?`: ${String(dd.statusMessage)}`:""}`))
+               Fw.lost < lw && (Fw.lost++, Qb(`${wb}${"statusMessage"in bb?`: ${String(bb.statusMessage)}`:""}`))
```

#### 56. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L861` → after: `L861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderDebug.js#L861) · [Before (L861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderDebug.js#L861)

```diff
-           const Rd = null !== (md = yO.get(Od)) && void 0 !== md ? md : [];
+           const pb = null !== (Mb = Cw.get(wb)) && void 0 !== Mb ? Mb : [];
```

#### 57. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L866-L867` → after: `L866-L867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L866-L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderDebug.js#L866-L867) · [Before (L866-L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderDebug.js#L866-L867)

```diff
-             const dd = null !== (hd = HO.get(Qd)) && void 0 !== hd ? hd : "";
-             /\bgl_Position\b/.test(dd) ? Xd = dd : Kd = dd
+             const bb = null !== (lb = tw.get(Ib)) && void 0 !== lb ? lb : "";
+             /\bgl_Position\b/.test(bb) ? Vb = bb : gb = bb
```

#### 58. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L871` → after: `L871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderDebug.js#L871) · [Before (L871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderDebug.js#L871)

```diff
-             name: null !== (Wd = null === (Fd = Bd.exec(Xd)) || void 0 === Fd ? void 0 : Fd[1]) && void 0 !== Wd ? Wd : null,
+             name: null !== (eb = null === (Hb = Rb.exec(Vb)) || void 0 === Hb ? void 0 : Hb[1]) && void 0 !== eb ? eb : null,
```

#### 59. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L882` → after: `L882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderDebug.js#L882) · [Before (L882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderDebug.js#L882)

```diff
-               return null !== (md = dd.getShaderInfoLog(Od)) && void 0 !== md ? md : ""
+               return null !== (Mb = bb.getShaderInfoLog(wb)) && void 0 !== Mb ? Mb : ""
```

#### 60. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L884` → after: `L884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderDebug.js#L884) · [Before (L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderDebug.js#L884)

```diff
-             Od.length > 0 && jd(`program ${Sd(vd)} (${vd.terrain}) shader logs:\n${Dd(Od.join("\n"))}`)
+             wb.length > 0 && Gb(`program ${Db(Lb)} (${Lb.terrain}) shader logs:\n${qb(wb.join("\n"))}`)
```

#### 61. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L894` → after: `L894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderDebug.js#L894) · [Before (L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderDebug.js#L894)

```diff
-             const Od = "number" === typeof md[1] ? null : wO(md[1], null !== (Rd = md[3]) && void 0 !== Rd ? Rd : 0, null !== (Xd = md[4]) && void 0 !== Xd ? Xd : 0);
+             const wb = "number" === typeof Mb[1] ? null : hw(Mb[1], null !== (pb = Mb[3]) && void 0 !== pb ? pb : 0, null !== (Vb = Mb[4]) && void 0 !== Vb ? Vb : 0);
```

#### 62. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L896` → after: `L896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderDebug.js#L896) · [Before (L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderDebug.js#L896)

```diff
-             if (JO(dd, "number" === typeof md[1] ? md[1] : null !== (Kd = null === Od || void 0 === Od ? void 0 : Od.length) && void 0 !== Kd ? Kd : 0), Od) null === (hd = ud.get(dd)) || void 0 === hd || hd.bytes.set(Od)
+             if (xw(bb, "number" === typeof Mb[1] ? Mb[1] : null !== (gb = null === wb || void 0 === wb ? void 0 : wb.length) && void 0 !== gb ? gb : 0), wb) null === (lb = Yb.get(bb)) || void 0 === lb || lb.bytes.set(wb)
```

#### 63. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L907` → after: `L907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderDebug.js#L907) · [Before (L907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderDebug.js#L907)

```diff
-             Wd = wO(md[2], null !== (Rd = md[3]) && void 0 !== Rd ? Rd : 0, null !== (Xd = md[4]) && void 0 !== Xd ? Xd : 0);
+             eb = hw(Mb[2], null !== (pb = Mb[3]) && void 0 !== pb ? pb : 0, null !== (Vb = Mb[4]) && void 0 !== Vb ? Vb : 0);
```

#### 64. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L941` → after: `L941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderDebug.js#L941) · [Before (L941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderDebug.js#L941)

```diff
-           let vd = wO(Od[8], null !== (md = Od[9]) && void 0 !== md ? md : 0);
+           let Lb = hw(wb[8], null !== (Mb = wb[9]) && void 0 !== Mb ? Mb : 0);
```

#### 65. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L993` → after: `L993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderDebug.js#L993) · [Before (L993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderDebug.js#L993)

```diff
-       YO[dd] += Wd, gO < 32 && Od.bytes.length >= 1 << 20 && (gO++, jd(`upload ${dd} #${Od.id} +${md} ${Wd} B`))
+       sw[bb] += eb, mw < 32 && wb.bytes.length >= 1 << 20 && (mw++, Gb(`upload ${bb} #${wb.id} +${Mb} ${eb} B`))
```

#### 66. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1006` → after: `L1006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderDebug.js#L1006) · [Before (L1006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderDebug.js#L1006)

```diff
-         Rd = (null !== (Wd = dd.getProgramInfoLog(Od)) && void 0 !== Wd ? Wd : "").trim();
+         pb = (null !== (eb = bb.getProgramInfoLog(wb)) && void 0 !== eb ? eb : "").trim();
```

#### 67. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1008` → after: `L1008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderDebug.js#L1008) · [Before (L1008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderDebug.js#L1008)

```diff
-       null === md.terrain && Fd || (cd(`program ${Sd(md)} ${null!==(Xd=md.terrain)&&void 0!==Xd?Xd:"other"} link ${Fd?"ok":"FAILED"}${Rd?`: ${Dd(Rd,300)}`:""}`), Rd && jd(`program ${Sd(md)} link log:\n${Dd(Rd)}`))
+       null === Mb.terrain && Hb || (Qb(`program ${Db(Mb)} ${null!==(Vb=Mb.terrain)&&void 0!==Vb?Vb:"other"} link ${Hb?"ok":"FAILED"}${pb?`: ${qb(pb,300)}`:""}`), pb && Gb(`program ${Db(Mb)} link log:\n${qb(pb)}`))
```

#### 68. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1016` → after: `L1016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderDebug.js#L1016) · [Before (L1016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderDebug.js#L1016)

```diff
-       const Xd = null !== (Wd = Rd.terrain) && void 0 !== Wd ? Wd : "other",
+       const Vb = null !== (eb = pb.terrain) && void 0 !== eb ? eb : "other",
```

#### 69. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1018` → after: `L1018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderDebug.js#L1018) · [Before (L1018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderDebug.js#L1018)

```diff
-           By: Kd,
+           gF: gb,
```

#### 70. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1024` → after: `L1024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderDebug.js#L1024) · [Before (L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderDebug.js#L1024)

```diff
-                 By: [
+                 gF: [
```

#### 71. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1031` → after: `L1031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderDebug.js#L1031) · [Before (L1031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderDebug.js#L1031)

```diff
-                 By: [
+                 gF: [
```

#### 72. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1037` → after: `L1037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderDebug.js#L1037) · [Before (L1037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderDebug.js#L1037)

```diff
-                 By: [
+                 gF: [
```

#### 73. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1044` → after: `L1044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderDebug.js#L1044) · [Before (L1044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderDebug.js#L1044)

```diff
-                 By: [
+                 gF: [
```

#### 74. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1056` → after: `L1056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderDebug.js#L1056) · [Before (L1056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderDebug.js#L1056)

```diff
-                 By: Rd,
+                 gF: pb,
```

#### 75. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1062` → after: `L1062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderDebug.js#L1062) · [Before (L1062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderDebug.js#L1062)

```diff
-                 By: [], instances: 0
+                 gF: [], instances: 0
```

#### 76. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1066` → after: `L1066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderDebug.js#L1066) · [Before (L1066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderDebug.js#L1066)

```diff
-         vd = "inst" === Rd.terrain ? hd : Kd.reduce(((dd, Od) => {
+         Lb = "inst" === pb.terrain ? lb : gb.reduce(((bb, wb) => {
```

#### 77. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1086` → after: `L1086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderDebug.js#L1086) · [Before (L1086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderDebug.js#L1086)

```diff
-             Fd = Od.getFramebufferAttachmentParameter(Hd.DRAW_FRAMEBUFFER, Hd.DEPTH_ATTACHMENT, Hd.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE) ? `depth ${String(Od.getFramebufferAttachmentParameter(Hd.DRAW_FRAMEBUFFER,Hd.DEPTH_ATTACHMENT,Hd.FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE))} bits type  … [truncated]
+             Hb = wb.getFramebufferAttachmentParameter(Eb.DRAW_FRAMEBUFFER, Eb.DEPTH_ATTACHMENT, Eb.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE) ? `depth ${String(wb.getFramebufferAttachmentParameter(Eb.DRAW_FRAMEBUFFER,Eb.DEPTH_ATTACHMENT,Eb.FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE))} bits type  … [truncated]
```

#### 78. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1089` → after: `L1089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderDebug.js#L1089) · [Before (L1089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderDebug.js#L1089)

```diff
-           return `depth ${null!==(Od=Wd[md])&&void 0!==Od?Od:`0x${md.toString(16)}`} clear ${Rd}${516===md||518===md?" (reverse-Z)":""}, samples ${String(dd.getParameter(Hd.SAMPLES))}, ${Fd}`
+           return `depth ${null!==(wb=eb[Mb])&&void 0!==wb?wb:`0x${Mb.toString(16)}`} clear ${pb}${516===Mb||518===Mb?" (reverse-Z)":""}, samples ${String(bb.getParameter(Eb.SAMPLES))}, ${Hb}`
```

#### 79. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1092` → after: `L1092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderDebug.js#L1092) · [Before (L1092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderDebug.js#L1092)

```diff
-         md !== Hd.NO_ERROR && TO.gl < QO && (TO.gl++, cd(`GL error 0x${md.toString(16)} after program ${Sd(Rd)}'s first terrain draw (${Od})`))
+         Mb !== Eb.NO_ERROR && Fw.gl < lw && (Fw.gl++, Qb(`GL error 0x${Mb.toString(16)} after program ${Db(pb)}'s first terrain draw (${wb})`))
```

#### 80. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1099-L1100` → after: `L1099-L1100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1099-L1100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderDebug.js#L1099-L1100) · [Before (L1099-L1100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderDebug.js#L1099-L1100)

```diff
-     var iO = md(5169),
-       AO = md(5431);
+     var fw = Mb(5354),
+       Aw = Mb(5590);
```

#### 81. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1129-L1131` → after: `L1129-L1131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1129-L1131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderDebug.js#L1129-L1131) · [Before (L1129-L1131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderDebug.js#L1129-L1131)

```diff
-       const md = null !== dd && void 0 !== dd ? dd : {},
-         Wd = null !== Od && void 0 !== Od ? Od : Object.keys(Object.getPrototypeOf(md)).concat(Object.keys(md));
-       return [...new Set(Wd)].filter((dd => "number" === typeof md[dd])).map((dd => `${dd} ${String(md[dd])}`)).join(", ")
+       const Mb = null !== bb && void 0 !== bb ? bb : {},
+         eb = null !== wb && void 0 !== wb ? wb : Object.keys(Object.getPrototypeOf(Mb)).concat(Object.keys(Mb));
+       return [...new Set(eb)].filter((bb => "number" === typeof Mb[bb])).map((bb => `${bb} ${String(Mb[bb])}`)).join(", ")
```

#### 82. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1136` → after: `L1136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderDebug.js#L1136) · [Before (L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderDebug.js#L1136)

```diff
-       const Wd = null !== (md = Od.vertex) && void 0 !== md ? md : {};
+       const eb = null !== (Mb = wb.vertex) && void 0 !== Mb ? Mb : {};
```

#### 83. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1139` → after: `L1139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderDebug.js#L1139) · [Before (L1139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderDebug.js#L1139)

```diff
-         const md = String(null !== (Fd = Wd.entryPoint) && void 0 !== Fd ? Fd : "");
+         const Mb = String(null !== (Hb = eb.entryPoint) && void 0 !== Hb ? Hb : "");
```

#### 84. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1143-L1146` → after: `L1143-L1146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1143-L1146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderDebug.js#L1143-L1146) · [Before (L1143-L1146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderDebug.js#L1143-L1146)

```diff
-           const dd = null !== (Rd = Od.depthStencil) && void 0 !== Rd ? Rd : {},
-             Wd = null !== (Xd = Od.multisample) && void 0 !== Xd ? Xd : {},
-             Fd = String(null !== (Kd = dd.depthCompare) && void 0 !== Kd ? Kd : "");
-           cd(`WebGPU terrain pipeline ${md}: depth ${String(null!==(hd=dd.format)&&void 0!==hd?hd:"none")} ${Fd}${Fd.startsWith("greater")?" (reverse-Z)":""}, MSAA ${String(null!==(vd=Wd.count)&&void 0!==vd?vd:1)}`)
+           const bb = null !== (pb = wb.depthStencil) && void 0 !== pb ? pb : {},
+             eb = null !== (Vb = wb.multisample) && void 0 !== Vb ? Vb : {},
+             Hb = String(null !== (gb = bb.depthCompare) && void 0 !== gb ? gb : "");
+           Qb(`WebGPU terrain pipeline ${Mb}: depth ${String(null!==(lb=bb.format)&&void 0!==lb?lb:"none")} ${Hb}${Hb.startsWith("greater")?" (reverse-Z)":""}, MSAA ${String(null!==(Lb=eb.count)&&void 0!==Lb?Lb:1)}`)
```

#### 85. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1166` → after: `L1166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderDebug.js#L1166) · [Before (L1166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderDebug.js#L1166)

```diff
-       (eO.draws++, "draw" === dd || "drawIndexed" === dd) && (eO.faces += md[0] * (null !== (Wd = md[1]) && void 0 !== Wd ? Wd : 1) / 6);
+       (iw.draws++, "draw" === bb || "drawIndexed" === bb) && (iw.faces += Mb[0] * (null !== (eb = Mb[1]) && void 0 !== eb ? eb : 1) / 6);
```

#### 86. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1170` → after: `L1170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderDebug.js#L1170) · [Before (L1170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderDebug.js#L1170)

```diff
-           return `${Od} ${String(null!==Fd&&void 0!==Fd?Fd:"instances"===Od?1:0)}`
+           return `${wb} ${String(null!==Hb&&void 0!==Hb?Hb:"instances"===wb?1:0)}`
```

#### 87. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1172` → after: `L1172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderDebug.js#L1172) · [Before (L1172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderDebug.js#L1172)

```diff
-         DO.push(`  ${Od} ${dd} ${Wd.join(" ")}`)
+         aw.push(`  ${wb} ${bb} ${eb.join(" ")}`)
```

#### 88. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1184-L1186` → after: `L1184-L1186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1184-L1186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderDebug.js#L1184-L1186) · [Before (L1184-L1186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderDebug.js#L1184-L1186)

```diff
-             const md = null !== (Od = dd.info) && void 0 !== Od ? Od : {};
-             cd(`WebGPU adapter ${["vendor","architecture","device","description"].map((dd=>{var Od;return`${dd} "${String(null!==(Od=md[dd])&&void 0!==Od?Od:"")}"`})).join(" ")}${dd.isFallbackAdapter?" (fallback)":""}`), cd(`WebGPU adapter features ${lO(dd.features)}`), cd(`WebGP … [truncated]
-           }(dd) : cd(`WebGPU requestAdapter(${JSON.stringify(null!==(Od=md[0])&&void 0!==Od?Od:{})}) gave none`);
+             const Mb = null !== (wb = bb.info) && void 0 !== wb ? wb : {};
+             Qb(`WebGPU adapter ${["vendor","architecture","device","description"].map((bb=>{var wb;return`${bb} "${String(null!==(wb=Mb[bb])&&void 0!==wb?wb:"")}"`})).join(" ")}${bb.isFallbackAdapter?" (fallback)":""}`), Qb(`WebGPU adapter features ${dw(bb.features)}`), Qb(`WebGP … [truncated]
+           }(bb) : Qb(`WebGPU requestAdapter(${JSON.stringify(null!==(wb=Mb[0])&&void 0!==wb?wb:{})}) gave none`);
```

#### 89. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1192` → after: `L1192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderDebug.js#L1192) · [Before (L1192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderDebug.js#L1192)

```diff
-           cd(`WebGPU device features ${lO(dd.features)}`), cd(`WebGPU device limits ${CO(dd.limits,rO)}`), dd.addEventListener("uncapturederror", (dd => {
+           Qb(`WebGPU device features ${dw(bb.features)}`), Qb(`WebGPU device limits ${Pw(bb.limits,Ww)}`), bb.addEventListener("uncapturederror", (bb => {
```

#### 90. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1197` → after: `L1197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderDebug.js#L1197) · [Before (L1197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderDebug.js#L1197)

```diff
-               cd(`WebGPU uncaptured ${null!==(Od=null===Fd||void 0===Fd||null===(md=Fd.constructor)||void 0===md?void 0:md.name)&&void 0!==Od?Od:"error"}: ${Dd(String(null!==(Wd=null===Fd||void 0===Fd?void 0:Fd.message)&&void 0!==Wd?Wd:""),600)}`)
+               Qb(`WebGPU uncaptured ${null!==(wb=null===Hb||void 0===Hb||null===(Mb=Hb.constructor)||void 0===Mb?void 0:Mb.name)&&void 0!==wb?wb:"error"}: ${qb(String(null!==(eb=null===Hb||void 0===Hb?void 0:Hb.message)&&void 0!==eb?eb:""),600)}`)
```

#### 91. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1203` → after: `L1203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderDebug.js#L1203) · [Before (L1203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderDebug.js#L1203)

```diff
-             cd(`WebGPU device lost (${String(dd.reason)}): ${Dd(String(null!==(Od=dd.message)&&void 0!==Od?Od:""),600)}`)
+             Qb(`WebGPU device lost (${String(bb.reason)}): ${qb(String(null!==(wb=bb.message)&&void 0!==wb?wb:""),600)}`)
```

#### 92. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1206` → after: `L1206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderDebug.js#L1206) · [Before (L1206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderDebug.js#L1206)

```diff
-           throw cd(`WebGPU requestDevice failed: ${String(dd)}`), dd
+           throw Qb(`WebGPU requestDevice failed: ${String(bb)}`), bb
```

#### 93. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1222` → after: `L1222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderDebug.js#L1222) · [Before (L1222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderDebug.js#L1222)

```diff
-               Od[String(md.type)] = (null !== (Wd = Od[String(md.type)]) && void 0 !== Wd ? Wd : 0) + 1
+               wb[String(Mb.type)] = (null !== (eb = wb[String(Mb.type)]) && void 0 !== eb ? eb : 0) + 1
```

#### 94. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1224-L1225` → after: `L1224-L1225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1224-L1225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderDebug.js#L1224-L1225) · [Before (L1224-L1225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderDebug.js#L1224-L1225)

```diff
-             const Fd = dd.messages.map((dd => `${String(dd.type)} ${String(dd.lineNum)}:${String(dd.linePos)} ${String(dd.message)}`)).join("\n");
-             zO.compile < QO && (zO.compile++, cd(`WebGPU ${md?"terrain ":""}shader module compiled: ${JSON.stringify(Od)}${Fd?` first: ${Dd(Fd.split("\n")[0],300)}`:""}`)), Fd && jd(`WebGPU shader module messages:\n${Dd(Fd)}`)
+             const Hb = bb.messages.map((bb => `${String(bb.type)} ${String(bb.lineNum)}:${String(bb.linePos)} ${String(bb.message)}`)).join("\n");
+             Qw.compile < lw && (Qw.compile++, Qb(`WebGPU ${Mb?"terrain ":""}shader module compiled: ${JSON.stringify(wb)}${Hb?` first: ${qb(Hb.split("\n")[0],300)}`:""}`)), Hb && Gb(`WebGPU shader module messages:\n${qb(Hb)}`)
```

#### 95. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1227` → after: `L1227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderDebug.js#L1227) · [Before (L1227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderDebug.js#L1227)

```diff
-         }(Xd, String(null !== (Od = (null !== (md = Fd[0]) && void 0 !== md ? md : {}).code) && void 0 !== Od ? Od : "")), Xd
+         }(Vb, String(null !== (wb = (null !== (Mb = Hb[0]) && void 0 !== Mb ? Mb : {}).code) && void 0 !== wb ? wb : "")), Vb
```

#### 96. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1231` → after: `L1231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderDebug.js#L1231) · [Before (L1231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderDebug.js#L1231)

```diff
-         return ZO(Rd, null !== (Od = Wd[0]) && void 0 !== Od ? Od : {}), Rd
+         return nw(pb, null !== (wb = eb[0]) && void 0 !== wb ? wb : {}), pb
```

#### 97. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1236` → after: `L1236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderDebug.js#L1236) · [Before (L1236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderDebug.js#L1236)

```diff
-           return ZO(dd, null !== (Od = md[0]) && void 0 !== Od ? Od : {}), dd
+           return nw(bb, null !== (wb = Mb[0]) && void 0 !== wb ? wb : {}), bb
```

#### 98. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1246-L1248` → after: `L1246-L1248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1246-L1248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderDebug.js#L1246-L1248) · [Before (L1246-L1248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderDebug.js#L1246-L1248)

```diff
-             } = null !== Od && void 0 !== Od ? Od : {}, Kd = String(null !== (md = (null !== (Wd = dd.vertex) && void 0 !== Wd ? Wd : {}).entryPoint) && void 0 !== md ? md : "");
-             cd(`WebGPU pipeline "${String(null!==(Fd=dd.label)&&void 0!==Fd?Fd:"")}" ${Kd} rejected (${String(null!==Rd&&void 0!==Rd?Rd:"no reason")}): ${Dd(String(null!==Xd&&void 0!==Xd?Xd:Od),600)}`)
-           }(null !== (Od = md[0]) && void 0 !== Od ? Od : {}, dd), dd
+             } = null !== wb && void 0 !== wb ? wb : {}, gb = String(null !== (Mb = (null !== (eb = bb.vertex) && void 0 !== eb ? eb : {}).entryPoint) && void 0 !== Mb ? Mb : "");
+             Qb(`WebGPU pipeline "${String(null!==(Hb=bb.label)&&void 0!==Hb?Hb:"")}" ${gb} rejected (${String(null!==pb&&void 0!==pb?pb:"no reason")}): ${qb(String(null!==Vb&&void 0!==Vb?Vb:wb),600)}`)
+           }(null !== (wb = Mb[0]) && void 0 !== wb ? wb : {}, bb), bb
```

#### 99. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1252` → after: `L1252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderDebug.js#L1252) · [Before (L1252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderDebug.js#L1252)

```diff
-         const Rd = null !== (Od = Wd[0]) && void 0 !== Od ? Od : {};
+         const pb = null !== (wb = eb[0]) && void 0 !== wb ? wb : {};
```

#### 100. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1254` → after: `L1254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderDebug.js#L1254) · [Before (L1254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderDebug.js#L1254)

```diff
-         cO++ < 3 && cd(`WebGPU canvas ${String(Rd.format)} ${String(null!==(Xd=Rd.colorSpace)&&void 0!==Xd?Xd:"srgb")} alpha ${String(null!==(Kd=Rd.alphaMode)&&void 0!==Kd?Kd:"opaque")}`);
+         Gw++ < 3 && Qb(`WebGPU canvas ${String(pb.format)} ${String(null!==(Vb=pb.colorSpace)&&void 0!==Vb?Vb:"srgb")} alpha ${String(null!==(gb=pb.alphaMode)&&void 0!==gb?gb:"opaque")}`);
```

#### 101. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1266` → after: `L1266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderDebug.js#L1266) · [Before (L1266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderDebug.js#L1266)

```diff
-         ...iO.e
+         ...fw.b
```

#### 102. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1279` → after: `L1279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderDebug.js#L1279) · [Before (L1279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderDebug.js#L1279)

```diff
-         ...iO.e
+         ...fw.b
```

#### 103. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1281-L1283` → after: `L1281-L1283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1281-L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderDebug.js#L1281-L1283) · [Before (L1281-L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderDebug.js#L1281-L1283)

```diff
-         faceCull: "0" === (0, Rd.m)("faceCull") ? "0" : "1",
-         adrenoProbe: null !== (dd = (0, Rd.m)("adrenoProbe")) && void 0 !== dd ? dd : ""
-       }), cd("quality steps off while the topic is on (util/weakGpu.ts): no stepped MSAA or scale, no weak-GPU tier"), qO || "undefined" === typeof window || (qO = !0, "undefined" !== typeof WebGL2RenderingContext && UO(WebGL2RenderingContext.prototype, !0), "undefined" !== typeo … [truncated]
+         faceCull: "0" === (0, pb.k)("faceCull") ? "0" : "1",
+         adrenoProbe: null !== (bb = (0, pb.k)("adrenoProbe")) && void 0 !== bb ? bb : ""
+       }), Qb("quality steps off while the topic is on (util/weakGpu.ts): no stepped MSAA or scale, no weak-GPU tier"), Uw || "undefined" === typeof window || (Uw = !0, "undefined" !== typeof WebGL2RenderingContext && jw(WebGL2RenderingContext.prototype, !0), "undefined" !== typeo … [truncated]
```

#### 104. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1290-L1292` → after: `L1290-L1292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1290-L1292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderDebug.js#L1290-L1292) · [Before (L1290-L1292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderDebug.js#L1290-L1292)

```diff
-       qm(), Rm = null !== (Od = null === dd || void 0 === dd ? void 0 : dd.backend) && void 0 !== Od ? Od : null;
-       const Wd = `, renderer param ${null!==(md=(0,Rd.m)("renderer"))&&void 0!==md?md:"none"}, faceCull ${"0"===Km.faceCull?"off (whole parts)":"on"}, adrenoProbe ${Km.adrenoProbe||"none"}`;
-       cd(`${(0,AO.e)(dd)}${null===dd?"":Wd}`)
+       UM(), HM = null !== (wb = null === bb || void 0 === bb ? void 0 : bb.backend) && void 0 !== wb ? wb : null;
+       const eb = `, renderer param ${null!==(Mb=(0,pb.k)("renderer"))&&void 0!==Mb?Mb:"none"}, faceCull ${"0"===VM.faceCull?"off (whole parts)":"on"}, adrenoProbe ${VM.adrenoProbe||"none"}`;
+       Qb(`${(0,Aw.d)(bb)}${null===bb?"":eb}`)
```

#### 105. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1297-L1298` → after: `L1297-L1298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1297-L1298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderDebug.js#L1297-L1298) · [Before (L1297-L1298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderDebug.js#L1297-L1298)

```diff
-         Od = bm(Nm, dm, Om).then((Od => Ym(`${Math.round((performance.now()-dd)/1e3)} s after playable${Od?"":", no terrain drawn yet"}`)));
-       (0, Fd.c)(cd, (async () => {
+         wb = EM(OM, kw, bM).then((wb => sM(`${Math.round((performance.now()-bb)/1e3)} s after playable${wb?"":", no terrain drawn yet"}`)));
+       (0, Hb.d)(Qb, (async () => {
```

#### 106. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1316` → after: `L1316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderDebug.js#L1316) · [Before (L1316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderDebug.js#L1316)

```diff
-       (hm = !0, cd(`renderer caps ${null!==(dd=Km.caps)&&void 0!==dd?dd:"(not noted)"}; terrain fetch ${null!==(Od=Km.fetch)&&void 0!==Od?Od:"(not noted)"}`), Km.adrenoProbe) && cd(`adrenoProbe ${Km.adrenoProbe} asked; in force (storage fetch only): ${null!==(md=Km.probe)&&void 0 … [truncated]
+       (gM = !0, Qb(`renderer caps ${null!==(bb=VM.caps)&&void 0!==bb?bb:"(not noted)"}; terrain fetch ${null!==(wb=VM.fetch)&&void 0!==wb?wb:"(not noted)"}`), VM.adrenoProbe) && Qb(`adrenoProbe ${VM.adrenoProbe} asked; in force (storage fetch only): ${null!==(Mb=VM.probe)&&void 0 … [truncated]
```

#### 107. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1325` → after: `L1325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderDebug.js#L1325) · [Before (L1325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderDebug.js#L1325)

```diff
-             md.push(`GL ${String(dd.getParameter(dd.VERSION))} | ${String(dd.getParameter(dd.SHADING_LANGUAGE_VERSION))} | ${String(dd.getParameter(dd.VENDOR))} / ${String(dd.getParameter(dd.RENDERER))}`), md.push(`GL unmasked ${Fd} / ${Rd}`);
+             Mb.push(`GL ${String(bb.getParameter(bb.VERSION))} | ${String(bb.getParameter(bb.SHADING_LANGUAGE_VERSION))} | ${String(bb.getParameter(bb.VENDOR))} / ${String(bb.getParameter(bb.RENDERER))}`), Mb.push(`GL unmasked ${Hb} / ${pb}`);
```

#### 108. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1335` → after: `L1335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderDebug.js#L1335) · [Before (L1335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderDebug.js#L1335)

```diff
-             "MAX_UNIFORM_BLOCK_SIZE" in dd && Xd.push(["MAX_UNIFORM_BLOCK_SIZE", dd.MAX_UNIFORM_BLOCK_SIZE], ["MAX_VERTEX_UNIFORM_BLOCKS", dd.MAX_VERTEX_UNIFORM_BLOCKS], ["MAX_SAMPLES", dd.MAX_SAMPLES], ["MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS", dd.MAX_TRANSFORM_FEEDBACK_I … [truncated]
+             "MAX_UNIFORM_BLOCK_SIZE" in bb && Vb.push(["MAX_UNIFORM_BLOCK_SIZE", bb.MAX_UNIFORM_BLOCK_SIZE], ["MAX_VERTEX_UNIFORM_BLOCKS", bb.MAX_VERTEX_UNIFORM_BLOCKS], ["MAX_SAMPLES", bb.MAX_SAMPLES], ["MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS", bb.MAX_TRANSFORM_FEEDBACK_I … [truncated]
```

#### 109. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1339` → after: `L1339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderDebug.js#L1339) · [Before (L1339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderDebug.js#L1339)

```diff
-               return `${md} highp float ${Wd?`${Wd.rangeMin}/${Wd.rangeMax}/${Wd.precision}`:"?"} int ${Fd?`${Fd.rangeMin}/${Fd.rangeMax}/${Fd.precision}`:"?"}`
+               return `${Mb} highp float ${eb?`${eb.rangeMin}/${eb.rangeMax}/${eb.precision}`:"?"} int ${Hb?`${Hb.rangeMin}/${Hb.rangeMax}/${Hb.precision}`:"?"}`
```

#### 110. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1341` → after: `L1341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderDebug.js#L1341) · [Before (L1341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderDebug.js#L1341)

```diff
-             md.push(`GL precision ${Kd(dd.VERTEX_SHADER,"VS")}, ${Kd(dd.FRAGMENT_SHADER,"FS")}`);
+             Mb.push(`GL precision ${gb(bb.VERTEX_SHADER,"VS")}, ${gb(bb.FRAGMENT_SHADER,"FS")}`);
```

#### 111. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1343` → after: `L1343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderDebug.js#L1343) · [Before (L1343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderDebug.js#L1343)

```diff
-             return md.push(`GL context ${JSON.stringify(hd)} drawingBuffer ${dd.drawingBufferWidth}x${dd.drawingBufferHeight}${"drawingBufferFormat"in dd?` format 0x${Number(dd.drawingBufferFormat).toString(16)}`:""}${"drawingBufferColorSpace"in dd?` ${String(dd.drawingBufferColo … [truncated]
+             return Mb.push(`GL context ${JSON.stringify(lb)} drawingBuffer ${bb.drawingBufferWidth}x${bb.drawingBufferHeight}${"drawingBufferFormat"in bb?` format 0x${Number(bb.drawingBufferFormat).toString(16)}`:""}${"drawingBufferColorSpace"in bb?` ${String(bb.drawingBufferColo … [truncated]
```

#### 112. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1350` → after: `L1350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderDebug.js#L1350) · [Before (L1350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderDebug.js#L1350)

```diff
-           cd(`programs: ${Od} live of ${sd.length} linked, ${dd} packed terrain; CPU page copies ${Math.round(Ad.shadowBytes/1048576)} MiB (${Ad.uncopied} over budget)`)
+           Qb(`programs: ${wb} live of ${cb.length} linked, ${bb} packed terrain; CPU page copies ${Math.round(fb.shadowBytes/1048576)} MiB (${fb.uncopied} over budget)`)
```

#### 113. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1363` → after: `L1363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderDebug.js#L1363) · [Before (L1363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderDebug.js#L1363)

```diff
-                 DO = null, cd(`WebGPU draw ranges (${dd}): ${Od.length} terrain draws recorded in a second (first ${tO}; bundles replay without new ones)`);
+                 aw = null, Qb(`WebGPU draw ranges (${bb}): ${wb.length} terrain draws recorded in a second (first ${Lw}; bundles replay without new ones)`);
```

#### 114. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1369` → after: `L1369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderDebug.js#L1369) · [Before (L1369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderDebug.js#L1369)

```diff
-             if (await (0, iO.j)(Km, "slotCheck", ["1"], Wm, Fm), "1" === Km.slotCheck) return void cd(`slot check: no answer in ${Wm} ms (only the storage fetch has one; a later answer logs on its own)`);
+             if (await (0, fw.h)(VM, "slotCheck", ["1"], MM, eM), "1" === VM.slotCheck) return void Qb(`slot check: no answer in ${MM} ms (only the storage fetch has one; a later answer logs on its own)`);
```

#### 115. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1372` → after: `L1372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderDebug.js#L1372) · [Before (L1372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderDebug.js#L1372)

```diff
-         cd(`check (${dd}) done: bloxdDebug.save() downloads it all`)
+         Qb(`check (${bb}) done: bloxdDebug.save() downloads it all`)
```

#### 116. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1374` → after: `L1374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderDebug.js#L1374) · [Before (L1374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderDebug.js#L1374)

```diff
-         cd(`check (${dd}) failed: ${String(Od)}`)
+         Qb(`check (${bb}) failed: ${String(wb)}`)
```

#### 117. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1418-L1419` → after: `L1418-L1419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1418-L1419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderDebug.js#L1418-L1419) · [Before (L1418-L1419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderDebug.js#L1418-L1419)

```diff
-       const Fd = "webgpu" === Rm ? [`terrain ${dd(Od.draws)} draws ${dd(Od.faces)} faces a frame (bundles' replays uncounted)`] : ["inst", "tex", "other"].filter((dd => md[dd].draws > 0)).map((Od => `${Od} ${dd(md[Od].draws)} draws ${dd(md[Od].faces)} faces a frame`));
-       cd(`${tm} frames: ${Fd.join(", ")||"no draws"}; uploaded ${Math.round(Wd.buffer/1024)} KiB to buffers, ${Math.round(Wd.texture/1024)} KiB to data textures`), tm = 0
+       const Hb = "webgpu" === HM ? [`terrain ${bb(wb.draws)} draws ${bb(wb.faces)} faces a frame (bundles' replays uncounted)`] : ["inst", "tex", "other"].filter((bb => Mb[bb].draws > 0)).map((wb => `${wb} ${bb(Mb[wb].draws)} draws ${bb(Mb[wb].faces)} faces a frame`));
+       Qb(`${LM} frames: ${Hb.join(", ")||"no draws"}; uploaded ${Math.round(eb.buffer/1024)} KiB to buffers, ${Math.round(eb.texture/1024)} KiB to data textures`), LM = 0
```

#### 118. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1422` → after: `L1422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderDebug.js#L1422) · [Before (L1422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderDebug.js#L1422)

```diff
-   5431: (dd, Od, md) => {
+   5590: (bb, wb, Mb) => {
```

#### 119. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1425-L1426` → after: `L1425-L1426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1425-L1426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderDebug.js#L1425-L1426) · [Before (L1425-L1426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderDebug.js#L1425-L1426)

```diff
-       const Od = dd.adapter ? `${dd.adapter.vendor}/${dd.adapter.architecture}` : "none";
-       return `backend ${dd.backend}: reason ${dd.reason}, source ${dd.source}, adapter ${Od}`
+       const wb = bb.adapter ? `${bb.adapter.vendor}/${bb.adapter.architecture}` : "none";
+       return `backend ${bb.backend}: reason ${bb.reason}, source ${bb.source}, adapter ${wb}`
```

#### 120. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1429` → after: `L1429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderDebug.js#L1429) · [Before (L1429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderDebug.js#L1429)

```diff
-       e: () => Wd
+       d: () => eb
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/renderLite.js` (yteou.5361c997 → welxxc.ffac0572)

- **File**: `bundles/bloxd.io/chunks/js/renderLite.js` (43 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070)

#### 1. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderLite.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderLite.js#L4)

```diff
-   55073: (dd, Od, md) => {
+   54879: (bb, wb, Mb) => {
```

#### 2. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L8-L19` → after: `L8-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L8-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderLite.js#L8-L19) · [Before (L8-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderLite.js#L8-L19)

```diff
-     var Wd = md(2421),
-       Fd = md(732),
-       Rd = md(145),
-       Xd = md(5571),
-       Kd = md(42991),
-       hd = md(5568),
-       vd = md(42658),
-       Qd = md(42552),
-       td = md(42721),
-       od = md(3903),
-       Nd = md(5169),
-       qd = md(35404);
+     var eb = Mb(2463),
+       Hb = Mb(698),
+       pb = Mb(153),
+       Vb = Mb(5685),
+       gb = Mb(42705),
+       lb = Mb(5678),
+       Lb = Mb(42375),
+       Ib = Mb(42263),
+       Ob = Mb(42441),
+       Ub = Mb(4060),
+       tb = Mb(5354),
+       Cb = Mb(35190);
```

#### 3. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderLite.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderLite.js#L30)

```diff
-         return void 0 === dd || dd === this.noted || Od - this.atMs < md ? null : (this.noted = dd, this.lines++, this.atMs = Od, `${this.label}: ${dd}`)
+         return void 0 === bb || bb === this.noted || wb - this.atMs < Mb ? null : (this.noted = bb, this.lines++, this.atMs = wb, `${this.label}: ${bb}`)
```

#### 4. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L41-L42` → after: `L41-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L41-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderLite.js#L41-L42) · [Before (L41-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderLite.js#L41-L42)

```diff
-             const [md, Wd] = dd.split(":"), Fd = null !== (Od = Hd.get(md.slice(-1))) && void 0 !== Od ? Od : "";
-             return `gl link failed: program row ${parseInt(md)}${Fd}, read ${Wd} ms after issue`
+             const [Mb, eb] = bb.split(":"), Hb = null !== (wb = Eb.get(Mb.slice(-1))) && void 0 !== wb ? wb : "";
+             return `gl link failed: program row ${parseInt(Mb)}${Hb}, read ${eb} ms after issue`
```

#### 5. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L47` → after: `L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderLite.js#L47) · [Before (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderLite.js#L47)

```diff
-         return this.heldLogged || void 0 === dd ? null : (this.heldLogged = !0, `first view by the backstop, draws held for programs ${dd}`)
+         return this.heldLogged || void 0 === bb ? null : (this.heldLogged = !0, `first view by the backstop, draws held for programs ${bb}`)
```

#### 6. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L51-L54` → after: `L51-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L51-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderLite.js#L51-L54) · [Before (L51-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderLite.js#L51-L54)

```diff
-         return [Fd && `${Fd}; tab ${(0,qd.g)(Wd)}`, this.programUse.line(Od, md)].filter((dd => null !== dd))
-       }
-     }
-     var Td = md(5431);
+         return [Hb && `${Hb}; tab ${(0,Cb.f)(eb)}`, this.programUse.line(wb, Mb)].filter((bb => null !== bb))
+       }
+     }
+     var sb = Mb(5590);
```

#### 7. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L93` → after: `L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderLite.js#L93) · [Before (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderLite.js#L93)

```diff
-         return this.logged >= 20 || this.seen.has(dd) ? (this.unlogged++, null) : (this.seen.add(dd), this.logged++, 20 === this.logged ? `(the last event line: later ones are counted in the summaries) ${dd}` : dd)
+         return this.logged >= 20 || this.seen.has(bb) ? (this.unlogged++, null) : (this.seen.add(bb), this.logged++, 20 === this.logged ? `(the last event line: later ones are counted in the summaries) ${bb}` : bb)
```

#### 8. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L102` → after: `L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderLite.js#L102) · [Before (L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderLite.js#L102)

```diff
-       (0, od.k)("renderlite", dd)
+       (0, Ub.j)("renderlite", bb)
```

#### 9. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L109` → after: `L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderLite.js#L109) · [Before (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderLite.js#L109)

```diff
-         }, this.Et = () => {
+         }, this.sO = () => {
```

#### 10. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L112` → after: `L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderLite.js#L112) · [Before (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderLite.js#L112)

```diff
-             Fd = (0, Qd.l)(),
+             Hb = (0, Ib.m)(),
```

#### 11. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L122-L123` → after: `L122-L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L122-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderLite.js#L122-L123) · [Before (L122-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderLite.js#L122-L123)

```diff
-           const td = md.headerWord(Xd.I.GpuTimed),
-             od = md.headerWord(Xd.I.GpuFrameUs),
+           const Ob = Mb.headerWord(Vb.L.GpuTimed),
+             Ub = Mb.headerWord(Vb.L.GpuFrameUs),
```

#### 12. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L129` → after: `L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderLite.js#L129) · [Before (L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderLite.js#L129)

```diff
-           const qd = null !== (dd = null === (Od = (0, vd.S)((0, Wd.A)())) || void 0 === Od ? void 0 : Od.EFd()) && void 0 !== dd ? dd : 0;
+           const Cb = null !== (bb = null === (wb = (0, Lb.O)((0, eb.w)())) || void 0 === wb ? void 0 : wb.KHb()) && void 0 !== bb ? bb : 0;
```

#### 13. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L132-L133` → after: `L132-L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L132-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderLite.js#L132-L133) · [Before (L132-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderLite.js#L132-L133)

```diff
-               Wd = [`${Math.round(md)}s: ${dd.drawn} drawn (${(dd.drawn/md).toFixed(1)}/s), ${dd.paced} paced, ${dd.frames-dd.drawn-dd.paced} skipped`, `gap max ${Math.round(dd.gapMaxMs)} ms, ${dd.longGaps} over 50 ms`, `render cpu ${dd.drawn?(dd.renderUs/dd.drawn/1e3).toFixed(2) … [truncated]
-             null !== Od.gpu && Wd.push(`gpu ${Od.gpu.timed?(Od.gpu.us/Od.gpu.timed/1e3).toFixed(2):"-"} ms mean of ${Od.gpu.timed} timed`);
+               eb = [`${Math.round(Mb)}s: ${bb.drawn} drawn (${(bb.drawn/Mb).toFixed(1)}/s), ${bb.paced} paced, ${bb.frames-bb.drawn-bb.paced} skipped`, `gap max ${Math.round(bb.gapMaxMs)} ms, ${bb.longGaps} over 50 ms`, `render cpu ${bb.drawn?(bb.renderUs/bb.drawn/1e3).toFixed(2) … [truncated]
+             null !== wb.gpu && eb.push(`gpu ${wb.gpu.timed?(wb.gpu.us/wb.gpu.timed/1e3).toFixed(2):"-"} ms mean of ${wb.gpu.timed} timed`);
```

#### 14. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L135-L137` → after: `L135-L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L135-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderLite.js#L135-L137) · [Before (L135-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderLite.js#L135-L137)

```diff
-             Wd.push(null === Fd ? "draws none yet" : `draws ${(0,Kd.b)(Fd)} (terrain ${Fd.terrainOpaque}+${Fd.terrainTransparent}, pack ${Fd.terrainPack}, meshes ${Fd.regular+Fd.thin+Fd.line+Fd.text} (${Fd.text} text, ${Fd.thin} thin, ${Fd.line} line), sky ${Fd.earthSky+Fd.skyMes … [truncated]
-             const Rd = null === Od.gpuBytesBefore ? "" : ` (${Od.gpuBytes>=Od.gpuBytesBefore?"+":"-"}${Yd(Math.abs(Od.gpuBytes-Od.gpuBytesBefore))})`;
-             return Wd.push(`gpu mem ${Yd(Od.gpuBytes)} MiB${Rd}`), Wd.push(`pending ${Od.pending}`, "terrain " + (Od.terrainDrawn ? "drawn" : "not drawn yet")), Od.eventsUnlogged > 0 && Wd.push(`${Od.eventsUnlogged} events unlogged`), Wd.join("; ")
+             eb.push(null === Hb ? "draws none yet" : `draws ${(0,gb.b)(Hb)} (terrain ${Hb.terrainOpaque}+${Hb.terrainTransparent}, pack ${Hb.terrainPack}, meshes ${Hb.regular+Hb.thin+Hb.line+Hb.text} (${Hb.text} text, ${Hb.thin} thin, ${Hb.line} line), sky ${Hb.earthSky+Hb.skyMes … [truncated]
+             const pb = null === wb.gpuBytesBefore ? "" : ` (${wb.gpuBytes>=wb.gpuBytesBefore?"+":"-"}${hb(Math.abs(wb.gpuBytes-wb.gpuBytesBefore))})`;
+             return eb.push(`gpu mem ${hb(wb.gpuBytes)} MiB${pb}`), eb.push(`pending ${wb.pending}`, "terrain " + (wb.terrainDrawn ? "drawn" : "not drawn yet")), wb.eventsUnlogged > 0 && eb.push(`${wb.eventsUnlogged} events unlogged`), eb.join("; ")
```

#### 15. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L141` → after: `L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderLite.js#L141) · [Before (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderLite.js#L141)

```diff
-             census: (0, Kd.f)(Fd.api),
+             census: (0, gb.d)(Hb.api),
```

#### 16. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L144-L145` → after: `L144-L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L144-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderLite.js#L144-L145) · [Before (L144-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderLite.js#L144-L145)

```diff
-             pending: md.headerWord(Xd.I.RenderPending),
-             terrainDrawn: 0 !== (md.headerWord(Xd.I.LoadSteps) & Xd.X.TerrainDrawn),
+             pending: Mb.headerWord(Vb.L.RenderPending),
+             terrainDrawn: 0 !== (Mb.headerWord(Vb.L.LoadSteps) & Vb.$.TerrainDrawn),
```

#### 17. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L149-L150` → after: `L149-L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L149-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderLite.js#L149-L150) · [Before (L149-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderLite.js#L149-L150)

```diff
-           void 0 !== (null === Hd || void 0 === Hd ? void 0 : Hd.meshMaterials) && (wd(`mesh materials ${Hd.meshMaterials}`), delete Hd.meshMaterials), this.gpuBytes = qd, this.windowStart = Rd
-         }, wd(`${(0,Td.e)(dd)}; client ${Fd.y.client} (${Fd.y.reason})`), setInterval(this.Et, 5e3), document.addEventListener("visibilitychange", this.visibilityChanged)
+           void 0 !== (null === Eb || void 0 === Eb ? void 0 : Eb.meshMaterials) && (Xb(`mesh materials ${Eb.meshMaterials}`), delete Eb.meshMaterials), this.gpuBytes = Cb, this.windowStart = pb
+         }, Xb(`${(0,sb.d)(bb)}; client ${Hb.A.client} (${Hb.A.reason})`), setInterval(this.sO, 5e3), document.addEventListener("visibilitychange", this.visibilityChanged)
```

#### 18. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L155` → after: `L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderLite.js#L155) · [Before (L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderLite.js#L155)

```diff
-         this.session = dd, this.frames.frame(Od, md, "drawn" === md ? dd.headerWord(Xd.I.RenderUs) : 0)
+         this.session = bb, this.frames.frame(wb, Mb, "drawn" === Mb ? bb.headerWord(Vb.L.RenderUs) : 0)
```

#### 19. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L164` → after: `L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderLite.js#L164) · [Before (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderLite.js#L164)

```diff
-           if (Wd >= Xd.p.RenderDeviceLost && Wd <= Xd.p.RenderSerialLinks) this.event(`render error ${(0,hd.ae)(Wd)}${null!==(Od=null===(md=(0,td.d)(Wd,Fd))||void 0===md?void 0:md.words)&&void 0!==Od?Od:""} (detail ${Fd})`)
+           if (eb >= Vb.p.RenderDeviceLost && eb <= Vb.p.RenderSerialLinks) this.event(`render error ${(0,lb.ge)(eb)}${null!==(wb=null===(Mb=(0,Ob.e)(eb,Hb))||void 0===Mb?void 0:Mb.words)&&void 0!==wb?wb:""} (detail ${Hb})`)
```

#### 20. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L168` → after: `L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderLite.js#L168) · [Before (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderLite.js#L168)

```diff
-         this.event(`render reload: ${dd?"webgpu":"gl"} ${md}, losses ${Od}${void 0===Wd?"":`: ${Wd}`}`)
+         this.event(`render reload: ${bb?"webgpu":"gl"} ${Mb}, losses ${wb}${void 0===eb?"":`: ${eb}`}`)
```

#### 21. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L172-L173` → after: `L172-L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L172-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderLite.js#L172-L173) · [Before (L172-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderLite.js#L172-L173)

```diff
-           Fd = 3 === (null === Wd || void 0 === Wd ? void 0 : Wd.length) ? `vertex arrays ${Wd[0]}, keyed draws peak ${Wd[1]} (sweep floor ${Wd[2]})` : "vertex arrays unnoted";
-         this.event(`gl context lost ${dd?"in game":"at home"}: ${Fd}, render distance ${null!==md&&void 0!==md?md:"none"}`)
+           Hb = 3 === (null === eb || void 0 === eb ? void 0 : eb.length) ? `vertex arrays ${eb[0]}, keyed draws peak ${eb[1]} (sweep floor ${eb[2]})` : "vertex arrays unnoted";
+         this.event(`gl context lost ${bb?"in game":"at home"}: ${Hb}, render distance ${null!==Mb&&void 0!==Mb?Mb:"none"}`)
```

#### 22. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L181-L183` → after: `L181-L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L181-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderLite.js#L181-L183) · [Before (L181-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderLite.js#L181-L183)

```diff
-         const Fd = null !== Wd && 0 !== Wd.lastError ? `, last error ${(0,hd.ae)(Wd.lastError)} (detail ${Wd.lastErrorDetail})` : "",
-           Rd = md instanceof Error ? `${md.name}: ${md.message}` : null === md || void 0 === md ? "" : String(md);
-         this.event(`core stopped at ${Od}${Fd}${Rd&&`: ${Rd}`}`)
+         const Hb = null !== eb && 0 !== eb.lastError ? `, last error ${(0,lb.ge)(eb.lastError)} (detail ${eb.lastErrorDetail})` : "",
+           pb = Mb instanceof Error ? `${Mb.name}: ${Mb.message}` : null === Mb || void 0 === Mb ? "" : String(Mb);
+         this.event(`core stopped at ${wb}${Hb}${pb&&`: ${pb}`}`)
```

#### 23. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L192` → after: `L192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderLite.js#L192) · [Before (L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderLite.js#L192)

```diff
-         null === Od || Od.isStopped ? this.sampled = null : (this.sampled = Od, this.gpuTimed = Od.headerWord(Xd.I.GpuTimed), this.gpuUs = Od.headerWord(Xd.I.GpuFrameUs))
+         null === wb || wb.isStopped ? this.sampled = null : (this.sampled = wb, this.gpuTimed = wb.headerWord(Vb.L.GpuTimed), this.gpuUs = wb.headerWord(Vb.L.GpuFrameUs))
```

#### 24. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L201` → after: `L201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderLite.js#L201) · [Before (L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderLite.js#L201)

```diff
-         null !== Wd && wd(Wd), void 0 !== (null === Od || void 0 === Od ? void 0 : Od.prejoin) && Od.prejoin !== this.prejoinLogged && (this.prejoinLogged = Od.prejoin, wd(`prejoin ${Od.prejoin}`))
+         null !== eb && Xb(eb), void 0 !== (null === wb || void 0 === wb ? void 0 : wb.prejoin) && wb.prejoin !== this.prejoinLogged && (this.prejoinLogged = wb.prejoin, Xb(`prejoin ${wb.prejoin}`))
```

#### 25. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L206` → after: `L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderLite.js#L206) · [Before (L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderLite.js#L206)

```diff
-         this.gridLogged || void 0 === Od || (this.gridLogged = !0, wd(`gl1 grid ${Od}`))
+         this.gridLogged || void 0 === wb || (this.gridLogged = !0, Xb(`gl1 grid ${wb}`))
```

#### 26. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L213-L215` → after: `L213-L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L213-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderLite.js#L213-L215) · [Before (L213-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderLite.js#L213-L215)

```diff
-           Wd = (0, Rd.y)(),
-           Fd = void 0 === (null === md || void 0 === md ? void 0 : md.parallelCompile) ? "" : `; parallel compile ${md.parallelCompile}`;
-         wd(`renderer gl ${Wd?`${Wd.vendor} / ${Wd.renderer}`:"(not read)"}; terrain fetch ${null!==(dd=null===md||void 0===md?void 0:md.fetch)&&void 0!==dd?dd:"(not noted)"}${Fd}`), wd(`renderer caps ${null!==(Od=null===md||void 0===md?void 0:md.caps)&&void 0!==Od?Od:"(not noted) … [truncated]
+           eb = (0, pb.x)(),
+           Hb = void 0 === (null === Mb || void 0 === Mb ? void 0 : Mb.parallelCompile) ? "" : `; parallel compile ${Mb.parallelCompile}`;
+         Xb(`renderer gl ${eb?`${eb.vendor} / ${eb.renderer}`:"(not read)"}; terrain fetch ${null!==(bb=null===Mb||void 0===Mb?void 0:Mb.fetch)&&void 0!==bb?bb:"(not noted)"}${Hb}`), Xb(`renderer caps ${null!==(wb=null===Mb||void 0===Mb?void 0:Mb.caps)&&void 0!==wb?wb:"(not noted) … [truncated]
```

#### 27. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L221` → after: `L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderLite.js#L221) · [Before (L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderLite.js#L221)

```diff
-       return (0, Nd.i)(), Jd ??= new Ed(dd), Jd
+       return (0, tb.f)(), jb ??= new xb(bb), jb
```

#### 28. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L224` → after: `L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderLite.js#L224) · [Before (L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderLite.js#L224)

```diff
-   5431: (dd, Od, md) => {
+   5590: (bb, wb, Mb) => {
```

#### 29. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L227-L228` → after: `L227-L228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L227-L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderLite.js#L227-L228) · [Before (L227-L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderLite.js#L227-L228)

```diff
-       const Od = dd.adapter ? `${dd.adapter.vendor}/${dd.adapter.architecture}` : "none";
-       return `backend ${dd.backend}: reason ${dd.reason}, source ${dd.source}, adapter ${Od}`
+       const wb = bb.adapter ? `${bb.adapter.vendor}/${bb.adapter.architecture}` : "none";
+       return `backend ${bb.backend}: reason ${bb.reason}, source ${bb.source}, adapter ${wb}`
```

#### 30. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L231` → after: `L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderLite.js#L231) · [Before (L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderLite.js#L231)

```diff
-       e: () => Wd
+       d: () => eb
```

#### 31. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L234-L236` → after: `L234-L236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L234-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderLite.js#L234-L236) · [Before (L234-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderLite.js#L234-L236)

```diff
-   35404: (dd, Od, md) => {
-     function Wd(dd) {
-       return `hidden ${dd.changes} changes, ${Math.round(dd.hiddenMs)} ms`
+   35190: (bb, wb, Mb) => {
+     function eb(bb) {
+       return `hidden ${bb.changes} changes, ${Math.round(bb.hiddenMs)} ms`
```

#### 32. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L240` → after: `L240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderLite.js#L240) · [Before (L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderLite.js#L240)

```diff
-       g: () => Wd
+       f: () => eb
```

#### 33. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L247` → after: `L247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderLite.js#L247) · [Before (L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderLite.js#L247)

```diff
-         this.changes++, document.hidden ? this.hiddenSinceMs = dd : this.hiddenSinceMs >= 0 && (this.hiddenMs += dd - this.hiddenSinceMs, this.hiddenSinceMs = -1)
+         this.changes++, document.hidden ? this.hiddenSinceMs = bb : this.hiddenSinceMs >= 0 && (this.hiddenMs += bb - this.hiddenSinceMs, this.hiddenSinceMs = -1)
```

#### 34. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L257` → after: `L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderLite.js#L257) · [Before (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderLite.js#L257)

```diff
-   42991: (dd, Od, md) => {
+   42705: (bb, wb, Mb) => {
```

#### 35. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L260-L261` → after: `L260-L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L260-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderLite.js#L260-L261) · [Before (L260-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderLite.js#L260-L261)

```diff
-       f: () => Rd,
-       h: () => Kd
+       d: () => pb,
+       g: () => gb
```

#### 36. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L263-L268` → after: `L263-L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L263-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderLite.js#L263-L268) · [Before (L263-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderLite.js#L263-L268)

```diff
-     var Wd = md(42540),
-       Fd = md(42552);
- 
-     function Rd(dd) {
-       if (dd.queries.drawCensus() < Wd.Db.BYTES) return null;
-       const Od = dd.memoryData(dd.scratch(), Wd.Db.BYTES, 4, "the draw census");
+     var eb = Mb(42253),
+       Hb = Mb(42263);
+ 
+     function pb(bb) {
+       if (bb.queries.drawCensus() < eb.tb.BYTES) return null;
+       const wb = bb.memoryData(bb.scratch(), eb.tb.BYTES, 4, "the draw census");
```

#### 37. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L270-L283` → after: `L270-L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L270-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderLite.js#L270-L283) · [Before (L270-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderLite.js#L270-L283)

```diff
-         terrainOpaque: Wd.Db.terrainOpaque(Od, 0),
-         terrainTransparent: Wd.Db.terrainTransparent(Od, 0),
-         terrainPack: Wd.Db.terrainPack(Od, 0),
-         earthSky: Wd.Db.earthSky(Od, 0),
-         skyMeshes: Wd.Db.skyMeshes(Od, 0),
-         regular: Wd.Db.regular(Od, 0),
-         thin: Wd.Db.thin(Od, 0),
-         line: Wd.Db.line(Od, 0),
-         text: Wd.Db.text(Od, 0),
-         particles: Wd.Db.particles(Od, 0),
-         terrainParts: Wd.Db.terrainParts(Od, 0),
-         terrainCompiling: Wd.Db.terrainCompiling(Od, 0),
-         ringCopiesMax: Wd.Db.ringCopiesMax(Od, 0),
-         ringBusyWrites: Wd.Db.ringBusyWrites(Od, 0)
+         terrainOpaque: eb.tb.terrainOpaque(wb, 0),
+         terrainTransparent: eb.tb.terrainTransparent(wb, 0),
+         terrainPack: eb.tb.terrainPack(wb, 0),
+         earthSky: eb.tb.earthSky(wb, 0),
+         skyMeshes: eb.tb.skyMeshes(wb, 0),
+         regular: eb.tb.regular(wb, 0),
+         thin: eb.tb.thin(wb, 0),
+         line: eb.tb.line(wb, 0),
+         text: eb.tb.text(wb, 0),
+         particles: eb.tb.particles(wb, 0),
+         terrainParts: eb.tb.terrainParts(wb, 0),
+         terrainCompiling: eb.tb.terrainCompiling(wb, 0),
+         ringCopiesMax: eb.tb.ringCopiesMax(wb, 0),
+         ringBusyWrites: eb.tb.ringBusyWrites(wb, 0)
```

#### 38. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L303` → after: `L303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderLite.js#L303) · [Before (L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderLite.js#L303)

```diff
-       const dd = (0, Fd.l)();
+       const bb = (0, Hb.m)();
```

#### 39. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L321` → after: `L321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderLite.js#L321) · [Before (L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderLite.js#L321)

```diff
-           value: `${Xd(Od)}`
+           value: `${Vb(wb)}`
```

#### 40. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L324` → after: `L324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderLite.js#L324) · [Before (L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderLite.js#L324)

```diff
-           value: `${md} opaque / ${Wd} transparent (${Fd} shader pack)`
+           value: `${Mb} opaque / ${eb} transparent (${Hb} shader pack)`
```

#### 41. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L327` → after: `L327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderLite.js#L327) · [Before (L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderLite.js#L327)

```diff
-           value: `${vd} / ${Qd}`
+           value: `${Lb} / ${Ib}`
```

#### 42. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L330` → after: `L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderLite.js#L330) · [Before (L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderLite.js#L330)

```diff
-           value: `${od} / ${td}`
+           value: `${Ub} / ${Ob}`
```

#### 43. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L333` → after: `L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderLite.js#L333) · [Before (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderLite.js#L333)

```diff
-           value: `${Kd+hd} / ${Nd}`
+           value: `${gb+lb} / ${tb}`
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/renderProbe.js` (yteou.5361c997 → welxxc.ffac0572)

- **File**: `bundles/bloxd.io/chunks/js/renderProbe.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979aff)

#### 1. `bundles/bloxd.io/chunks/js/renderProbe.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979affR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979aff) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderProbe.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderProbe.js#L4)

```diff
-   55078: (dd, Od, md) => {
+   54887: (bb, wb, Mb) => {
```

#### 2. `bundles/bloxd.io/chunks/js/renderProbe.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979affR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979aff) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderProbe.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderProbe.js#L8-L11)

```diff
-     var Wd = md(708),
-       Fd = md(5030),
-       Rd = md(3903),
-       Xd = md(5169);
+     var eb = Mb(667),
+       Hb = Mb(5215),
+       pb = Mb(4060),
+       Vb = Mb(5354);
```

#### 3. `bundles/bloxd.io/chunks/js/renderProbe.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979affR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979aff) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderProbe.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderProbe.js#L24)

```diff
-       return `${dd}; ${md?`os ${md.os}, gpu ${null!==(Fd=md.gpuFamily)&&void 0!==Fd?Fd:"unknown"} ${null!==(Rd=md.gpuModel)&&void 0!==Rd?Rd:"unknown"}`:"device unknown"}, version ${Wd.c}; ${Od}`
+       return `${bb}; ${Mb?`os ${Mb.os}, gpu ${null!==(Hb=Mb.gpuFamily)&&void 0!==Hb?Hb:"unknown"} ${null!==(pb=Mb.gpuModel)&&void 0!==pb?pb:"unknown"}`:"device unknown"}, version ${eb.e}; ${wb}`
```

#### 4. `bundles/bloxd.io/chunks/js/renderProbe.js` (Changed code · before: `L29` → after: `L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979affR29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979aff) · [After (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderProbe.js#L29) · [Before (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderProbe.js#L29)

```diff
-       const md = null !== (Od = null === dd || void 0 === dd ? void 0 : dd.backend) && void 0 !== Od ? Od : "none";
+       const Mb = null !== (wb = null === bb || void 0 === bb ? void 0 : bb.backend) && void 0 !== wb ? wb : "none";
```

#### 5. `bundles/bloxd.io/chunks/js/renderProbe.js` (Changed code · before: `L31` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979affR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979aff) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderProbe.js#L31) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderProbe.js#L31)

```diff
-         const dd = (0, Xd.i)();
+         const bb = (0, Vb.f)();
```

#### 6. `bundles/bloxd.io/chunks/js/renderProbe.js` (Changed code · before: `L36` → after: `L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979affR36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979aff) · [After (L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderProbe.js#L36) · [Before (L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderProbe.js#L36)

```diff
-         return void(0, Rd.k)("renderprobe", `decode and particle probes not run: the renderer is ${md}, and they read WebGL2's draws`)
+         return void(0, pb.j)("renderprobe", `decode and particle probes not run: the renderer is ${Mb}, and they read WebGL2's draws`)
```

#### 7. `bundles/bloxd.io/chunks/js/renderProbe.js` (Changed code · before: `L38` → after: `L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979affR38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979aff) · [After (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderProbe.js#L38) · [Before (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderProbe.js#L38)

```diff
-       const Wd = (0, Xd.i)();
+       const eb = (0, Vb.f)();
```

#### 8. `bundles/bloxd.io/chunks/js/renderProbe.js` (Changed code · before: `L43-L44` → after: `L43-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979affR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979aff) · [After (L43-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/renderProbe.js#L43-L44) · [Before (L43-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/renderProbe.js#L43-L44)

```diff
-         of vd)(0, Xd.j)(Wd, td, ["1", "pending"], hd, Kd).then((dd => {
-         void 0 !== dd && (0, Rd.k)("renderprobe", Qd(od, dd, (0, Fd.b)(!1)))
+         of Lb)(0, Vb.h)(eb, Ob, ["1", "pending"], lb, gb).then((bb => {
+         void 0 !== bb && (0, pb.j)("renderprobe", Ib(Ub, bb, (0, Hb.c)(!1)))
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/replayHookSkyblock.js` (yteou.5361c997 → welxxc.ffac0572)

- **File**: `bundles/bloxd.io/chunks/js/replayHookSkyblock.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-167b2a1537d745e41bec71b57666dc8cc0cd75ea8461f606342f1eee526a27e9)

#### 1. `bundles/bloxd.io/chunks/js/replayHookSkyblock.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-167b2a1537d745e41bec71b57666dc8cc0cd75ea8461f606342f1eee526a27e9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-167b2a1537d745e41bec71b57666dc8cc0cd75ea8461f606342f1eee526a27e9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/replayHookSkyblock.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/replayHookSkyblock.js#L4)

```diff
-   40249: (dd, Od, md) => {
+   39948: (bb, wb, Mb) => {
```

#### 2. `bundles/bloxd.io/chunks/js/replayHookSkyblock.js` (Changed code · before: `L9-L11` → after: `L9-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-167b2a1537d745e41bec71b57666dc8cc0cd75ea8461f606342f1eee526a27e9R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-167b2a1537d745e41bec71b57666dc8cc0cd75ea8461f606342f1eee526a27e9) · [After (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/replayHookSkyblock.js#L9-L11) · [Before (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/replayHookSkyblock.js#L9-L11)

```diff
-     var Wd = md(699),
-       Fd = md(2991),
-       Rd = md(40251);
+     var eb = Mb(655),
+       Hb = Mb(3059),
+       pb = Mb(39953);
```

#### 3. `bundles/bloxd.io/chunks/js/replayHookSkyblock.js` (Changed code · before: `L14` → after: `L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-167b2a1537d745e41bec71b57666dc8cc0cd75ea8461f606342f1eee526a27e9R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-167b2a1537d745e41bec71b57666dc8cc0cd75ea8461f606342f1eee526a27e9) · [After (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/replayHookSkyblock.js#L14) · [Before (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/replayHookSkyblock.js#L14)

```diff
-       if (dd.metaInfo === Wd.c || "Iron Guardian" === dd.type || "Gold Guardian" === dd.type) return !0;
+       if (bb.metaInfo === eb.b || "Iron Guardian" === bb.type || "Gold Guardian" === bb.type) return !0;
```

#### 4. `bundles/bloxd.io/chunks/js/replayHookSkyblock.js` (Changed code · before: `L20` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-167b2a1537d745e41bec71b57666dc8cc0cd75ea8461f606342f1eee526a27e9R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-167b2a1537d745e41bec71b57666dc8cc0cd75ea8461f606342f1eee526a27e9) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/replayHookSkyblock.js#L20) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/replayHookSkyblock.js#L20)

```diff
-         const Wd = (0, Fd.k)(dd);
+         const eb = (0, Hb.f)(bb);
```

#### 5. `bundles/bloxd.io/chunks/js/replayHookSkyblock.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-167b2a1537d745e41bec71b57666dc8cc0cd75ea8461f606342f1eee526a27e9R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-167b2a1537d745e41bec71b57666dc8cc0cd75ea8461f606342f1eee526a27e9) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/replayHookSkyblock.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/replayHookSkyblock.js#L24)

```diff
-     }(0, Rd.i)("skyblock", ((dd, Od) => {
+     }(0, pb.e)("skyblock", ((bb, wb) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/scrollDebug.js` (yteou.5361c997 → welxxc.ffac0572)

- **File**: `bundles/bloxd.io/chunks/js/scrollDebug.js` (12 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6d)

#### 1. `bundles/bloxd.io/chunks/js/scrollDebug.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/scrollDebug.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/scrollDebug.js#L4)

```diff
-   5438: (dd, Od, md) => {
+   5593: (bb, wb, Mb) => {
```

#### 2. `bundles/bloxd.io/chunks/js/scrollDebug.js` (Changed code · before: `L16-L17` → after: `L16-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6dR16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6d) · [After (L16-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/scrollDebug.js#L16-L17) · [Before (L16-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/scrollDebug.js#L16-L17)

```diff
-     var Wd = md(29),
-       Fd = md(3903);
+     var eb = Mb(26),
+       Hb = Mb(4060);
```

#### 3. `bundles/bloxd.io/chunks/js/scrollDebug.js` (Changed code · before: `L59` → after: `L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6dR59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6d) · [After (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/scrollDebug.js#L59) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/scrollDebug.js#L59)

```diff
-       return `${vd[dd]} ${Od}`
+       return `${Lb[bb]} ${wb}`
```

#### 4. `bundles/bloxd.io/chunks/js/scrollDebug.js` (Changed code · before: `L71` → after: `L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6dR71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6d) · [After (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/scrollDebug.js#L71) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/scrollDebug.js#L71)

```diff
-         return [qd(Fd, `${Rd?`${dd[Fd]} -> ${Od[Fd]}`:String(Od[Fd])}${Xd?` (via ${md[Fd]}..${Wd[Fd]})`:""}`)]
+         return [Cb(Hb, `${pb?`${bb[Hb]} -> ${wb[Hb]}`:String(wb[Hb])}${Vb?` (via ${Mb[Hb]}..${eb[Hb]})`:""}`)]
```

#### 5. `bundles/bloxd.io/chunks/js/scrollDebug.js` (Changed code · before: `L81-L82` → after: `L81-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6dR81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6d) · [After (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/scrollDebug.js#L81-L82) · [Before (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/scrollDebug.js#L81-L82)

```diff
-       const md = (null !== (Od = dd.getAttribute("class")) && void 0 !== Od ? Od : "").trim().replace(/\s+/g, ".").slice(0, 40);
-       return `${dd.tagName.toLowerCase()}${md?`.${md}`:""}`
+       const Mb = (null !== (wb = bb.getAttribute("class")) && void 0 !== wb ? wb : "").trim().replace(/\s+/g, ".").slice(0, 40);
+       return `${bb.tagName.toLowerCase()}${Mb?`.${Mb}`:""}`
```

#### 6. `bundles/bloxd.io/chunks/js/scrollDebug.js` (Changed code · before: `L89` → after: `L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6dR89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6d) · [After (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/scrollDebug.js#L89) · [Before (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/scrollDebug.js#L89)

```diff
-         "auto" !== dd && md.push(`${dd} on ${Td(Wd)}`)
+         "auto" !== bb && Mb.push(`${bb} on ${sb(eb)}`)
```

#### 7. `bundles/bloxd.io/chunks/js/scrollDebug.js` (Changed code · before: `L91` → after: `L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6dR91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6d) · [After (L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/scrollDebug.js#L91) · [Before (L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/scrollDebug.js#L91)

```diff
-       return `${Td(dd)} touch-action ${Od(dd)}${md.length>0?` (${md.join(", ")})`:""}`
+       return `${sb(bb)} touch-action ${wb(bb)}${Mb.length>0?` (${Mb.join(", ")})`:""}`
```

#### 8. `bundles/bloxd.io/chunks/js/scrollDebug.js` (Changed code · before: `L110` → after: `L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6dR110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6d) · [After (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/scrollDebug.js#L110) · [Before (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/scrollDebug.js#L110)

```diff
-           if (this.lines === Kd) return this.capped = !0, void this.deps.log(`further changes unlogged: ${Kd} lines logged`);
+           if (this.lines === gb) return this.capped = !0, void this.deps.log(`further changes unlogged: ${gb} lines logged`);
```

#### 9. `bundles/bloxd.io/chunks/js/scrollDebug.js` (Changed code · before: `L112-L115` → after: `L112-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6dR112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6d) · [After (L112-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/scrollDebug.js#L112-L115) · [Before (L112-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/scrollDebug.js#L112-L115)

```diff
-           const Hd = null === hd ? "no touch yet" : `touch on ${hd.text}, ${Math.round(this.burstStartMs-hd.atMs)} ms before`,
-             pd = null === Fd ? "" : `; inner scroll ${Td(Fd)} scrollTop ${od(Fd.scrollTop,1)}`;
-           this.deps.log(`moved over ${Math.round(dd-this.burstStartMs)} ms; ${Hd}${pd}: ${yd(Wd,md,vd,td)}`)
-         }, this.last = dd.read(), this.low = this.last, this.high = this.last, dd.log(`start: ${Hd(this.last)}`)
+           const Eb = null === lb ? "no touch yet" : `touch on ${lb.text}, ${Math.round(this.burstStartMs-lb.atMs)} ms before`,
+             mb = null === Hb ? "" : `; inner scroll ${sb(Hb)} scrollTop ${Ub(Hb.scrollTop,1)}`;
+           this.deps.log(`moved over ${Math.round(bb-this.burstStartMs)} ms; ${Eb}${mb}: ${Fb(eb,Mb,Lb,Ob)}`)
+         }, this.last = bb.read(), this.low = this.last, this.high = this.last, bb.log(`start: ${Eb(this.last)}`)
```

#### 10. `bundles/bloxd.io/chunks/js/scrollDebug.js` (Changed code · before: `L125` → after: `L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6dR125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6d) · [After (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/scrollDebug.js#L125) · [Before (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/scrollDebug.js#L125)

```diff
-         this.low = bd(this.low, Wd, Math.min), this.high = bd(this.high, Wd, Math.max), this.innerScrolled = null !== dd && void 0 !== dd ? dd : this.innerScrolled
+         this.low = Bb(this.low, eb, Math.min), this.high = Bb(this.high, eb, Math.max), this.innerScrolled = null !== bb && void 0 !== bb ? bb : this.innerScrolled
```

#### 11. `bundles/bloxd.io/chunks/js/scrollDebug.js` (Changed code · before: `L133` → after: `L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6dR133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6d) · [After (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/scrollDebug.js#L133) · [Before (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/scrollDebug.js#L133)

```diff
-         inGame: () => "inGame" === Wd.e.get("gameState"),
+         inGame: () => "inGame" === eb.c.get("gameState"),
```

#### 12. `bundles/bloxd.io/chunks/js/scrollDebug.js` (Changed code · before: `L136` → after: `L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6dR136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6d) · [After (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/scrollDebug.js#L136) · [Before (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/scrollDebug.js#L136)

```diff
-           (0, Fd.k)("scroll", dd)
+           (0, Hb.j)("scroll", bb)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (yteou.5361c997 → welxxc.ffac0572)

- **File**: `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (152 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab)

#### 1. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L4)

```diff
-   41459: (dd, Od, md) => {
+   41226: (bb, wb, Mb) => {
```

#### 2. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L8-L10` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L8-L10) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L8-L10)

```diff
-     var Wd = md(4615),
-       Fd = md(41466),
-       Rd = md(41450);
+     var eb = Mb(4781),
+       Hb = Mb(41231),
+       pb = Mb(41220);
```

#### 3. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L30-L31` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L30-L31) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L30-L31)

```diff
-       let md = Hd(`?${Od}`).slice(1);
-       return md === Od && (md = qd(Od)), md === Od ? dd : encodeURIComponent(md)
+       let Mb = Eb(`?${wb}`).slice(1);
+       return Mb === wb && (Mb = Cb(wb)), Mb === wb ? bb : encodeURIComponent(Mb)
```

#### 4. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L37-L39` → after: `L37-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L37-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L37-L39) · [Before (L37-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L37-L39)

```diff
-         const Rd = (null !== (Fd = Nd(md)) && void 0 !== Fd ? Fd : md).toLowerCase();
-         if (Xd.has(Rd)) return `${Od}${md}=${hd}`;
-         if (Kd.has(Rd) && "" !== Wd) return `${Od}${md}=<masked>`;
+         const pb = (null !== (Hb = tb(Mb)) && void 0 !== Hb ? Hb : Mb).toLowerCase();
+         if (Vb.has(pb)) return `${wb}${Mb}=${lb}`;
+         if (gb.has(pb) && "" !== eb) return `${wb}${Mb}=<masked>`;
```

#### 5. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L41-L42` → after: `L41-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L41-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L41-L42) · [Before (L41-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L41-L42)

```diff
-         return vd === Wd ? dd : `${Od}${md}=${vd}`
-       })).replace(Qd, `$1${hd}`) : dd
+         return Lb === eb ? bb : `${wb}${Mb}=${Lb}`
+       })).replace(Ib, `$1${lb}`) : bb
```

#### 6. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L51` → after: `L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L51) · [Before (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L51)

```diff
-       return od.test(dd) ? hd : Hd(dd)
+       return Ub.test(bb) ? lb : Eb(bb)
```

#### 7. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L75` → after: `L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L75) · [Before (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L75)

```diff
-               md && "object" === typeof md && (Od.type === Wd.b.Plugin && "string" === typeof dd.plugin && dd.plugin.includes("console") ? Yd(md) : pd(md))
+               Mb && "object" === typeof Mb && (wb.type === eb.c.Plugin && "string" === typeof bb.plugin && bb.plugin.includes("console") ? hb(Mb) : mb(Mb))
```

#### 8. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L88` → after: `L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L88) · [Before (L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L88)

```diff
-       return "style" === Wd ? Od.replace(/url\((?:"[^"]*"|'[^']*'|[^)]*)\)/gi, "none") : Ud.has(Wd) && "A" !== md.tagName ? bd(dd, Od) : wd.has(Wd) || Ed.has(Wd) || Wd.startsWith("data-pad-") && !Jd.has(Wd) ? Od : Od.replace(/\S/g, "*")
+       return "style" === eb ? wb.replace(/url\((?:"[^"]*"|'[^']*'|[^)]*)\)/gi, "none") : Kb.has(eb) && "A" !== Mb.tagName ? Bb(bb, wb) : Xb.has(eb) || xb.has(eb) || eb.startsWith("data-pad-") && !jb.has(eb) ? wb : wb.replace(/\S/g, "*")
```

#### 9. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L99-L100` → after: `L99-L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L99-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L99-L100) · [Before (L99-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L99-L100)

```diff
-       const [md = "", ...Wd] = Od.pathname.split("/").slice(1), Fd = `/${md}${Wd.some((dd=>""!==dd))?"/*":""}`;
-       return dd.startsWith("/") ? Fd : `${Od.origin}${Fd}`
+       const [Mb = "", ...eb] = wb.pathname.split("/").slice(1), Hb = `/${Mb}${eb.some((bb=>""!==bb))?"/*":""}`;
+       return bb.startsWith("/") ? Hb : `${wb.origin}${Hb}`
```

#### 10. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L115` → after: `L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L115) · [Before (L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L115)

```diff
-       }(dd.properties.$snapshot_data), ud(dd.properties), "$screen" === dd.event && String(dd.properties.$screen_name).startsWith("custom: ") && (dd.properties.$screen_name = `custom: ${String(dd.properties.game_analytics_id)}`), ud(dd.properties.$set), ud(dd.properties.$set_once … [truncated]
+       }(bb.properties.$snapshot_data), Yb(bb.properties), "$screen" === bb.event && String(bb.properties.$screen_name).startsWith("custom: ") && (bb.properties.$screen_name = `custom: ${String(bb.properties.game_analytics_id)}`), Yb(bb.properties.$set), Yb(bb.properties.$set_once … [truncated]
```

#### 11. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L117` → after: `L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L117) · [Before (L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L117)

```diff
-     const Ad = Wd.h.map((dd => `.${dd}`)).join(", "),
+     const fb = eb.g.map((bb => `.${bb}`)).join(", "),
```

#### 12. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L122` → after: `L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L122) · [Before (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L122)

```diff
-       return null !== Od && void 0 !== Od && Od.closest(Ad) ? dd : dd.replace(/\S/g, "*")
+       return null !== wb && void 0 !== wb && wb.closest(fb) ? bb : bb.replace(/\S/g, "*")
```

#### 13. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L132` → after: `L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L132) · [Before (L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L132)

```diff
-             maskTextFn: dd.showsChat ? nd : null,
+             maskTextFn: bb.showsChat ? Jb : null,
```

#### 14. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L138-L139` → after: `L138-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L138-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L138-L139) · [Before (L138-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L138-L139)

```diff
-             blockSelector: [...rd, (Od = dd.ownOrigins, `img[src^="http"]${Od.map((dd=>`:not([src^="${dd}/"])`)).join("")}`)].join(", "),
-             maskTextSelector: dd.showsChat ? Gd : `${Gd}, ${Ad}`,
+             blockSelector: [...Ab, (wb = bb.ownOrigins, `img[src^="http"]${wb.map((bb=>`:not([src^="${bb}/"])`)).join("")}`)].join(", "),
+             maskTextSelector: bb.showsChat ? Wb : `${Wb}, ${fb}`,
```

#### 15. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L215-L216` → after: `L215-L216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L215-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L215-L216) · [Before (L215-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L215-L216)

```diff
-     var zd = md(708),
-       cd = md(151);
+     var vb = Mb(667),
+       Qb = Mb(160);
```

#### 16. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L241` → after: `L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L241) · [Before (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L241)

```diff
-         panel_entry_reason: null !== (Od = md.recording_reason) && void 0 !== Od ? Od : "unknown",
+         panel_entry_reason: null !== (wb = Mb.recording_reason) && void 0 !== wb ? wb : "unknown",
```

#### 17. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L259` → after: `L259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L259) · [Before (L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L259)

```diff
-       for (const [Wd, Fd] of Object.entries(Od)) md[`${dd}${Wd}`] = Fd;
+       for (const [eb, Hb] of Object.entries(wb)) Mb[`${bb}${eb}`] = Hb;
```

#### 18. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L273` → after: `L273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L273) · [Before (L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L273)

```diff
-           suppressed: null !== (Wd = null === (Fd = md) || void 0 === Fd ? void 0 : Fd.suppressed) && void 0 !== Wd ? Wd : 0
+           suppressed: null !== (eb = null === (Hb = Mb) || void 0 === Hb ? void 0 : Hb.suppressed) && void 0 !== eb ? eb : 0
```

#### 19. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L293` → after: `L293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L293) · [Before (L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L293)

```diff
-       return Wd.pathname = `${Wd.pathname.replace(/\/+$/,"")}/replay/${encodeURIComponent(Od)}`, Wd.searchParams.set("timestamp", String(Math.round(md - 5e3))), Wd.toString()
+       return eb.pathname = `${eb.pathname.replace(/\/+$/,"")}/replay/${encodeURIComponent(wb)}`, eb.searchParams.set("timestamp", String(Math.round(Mb - 5e3))), eb.toString()
```

#### 20. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L308` → after: `L308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L308) · [Before (L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L308)

```diff
-           error_fingerprint: null !== (Fd = Od.fingerprint) && void 0 !== Fd ? Fd : null,
+           error_fingerprint: null !== (Hb = wb.fingerprint) && void 0 !== Hb ? Hb : null,
```

#### 21. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L354` → after: `L354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L354) · [Before (L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L354)

```diff
-           this.unboundKeyPresses.set(md, (null !== (Od = this.unboundKeyPresses.get(md)) && void 0 !== Od ? Od : 0) + Wd)
+           this.unboundKeyPresses.set(Mb, (null !== (wb = this.unboundKeyPresses.get(Mb)) && void 0 !== wb ? wb : 0) + eb)
```

#### 22. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L362` → after: `L362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L362) · [Before (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L362)

```diff
-             first_game: null !== (dd = this.gamesJoined[0]) && void 0 !== dd ? dd : "",
+             first_game: null !== (bb = this.gamesJoined[0]) && void 0 !== bb ? bb : "",
```

#### 23. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L396` → after: `L396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L396) · [Before (L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L396)

```diff
-         const md = null !== (Od = this.firstGame.leftAtMs) && void 0 !== Od ? Od : dd;
+         const Mb = null !== (wb = this.firstGame.leftAtMs) && void 0 !== wb ? wb : bb;
```

#### 24. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L400-L405` → after: `L400-L407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L400-L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L400-L407) · [Before (L400-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L400-L405)

```diff
-     var Md = md(1286),
-       dO = md(1128),
-       OO = md(405),
-       mO = md(1135),
-       WO = md(1122),
-       FO = md(3860),
+     var ob = Mb(1301),
+       Tb = Mb(1129),
+       kb = Mb(382),
+       bw = Mb(1136),
+       ww = Mb(1126),
+       Mw = Mb(4015),
+       ew = Mb(26),
+       Hw = Mb(2142),
```

#### 25. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L407-L417` → after: `L409-L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L409-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L409-L417) · [Before (L407-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L407-L417)

```diff
-       XO = md(2092),
-       KO = md(32),
-       hO = md(1415),
-       vO = md(1361),
-       QO = md(1632),
-       tO = md(2343),
-       oO = md(1765),
-       NO = md(41432),
-       qO = md(107),
-       HO = md(41428),
-       yO = md(1382);
+       Vw = Mb(1447),
+       gw = Mb(1391),
+       lw = Mb(1680),
+       Lw = Mb(2389),
+       Iw = Mb(1821),
+       Ow = Mb(41210),
+       Uw = Mb(110),
+       tw = Mb(41204),
+       Cw = Mb(1415);
```

#### 26. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L431` → after: `L431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L431) · [Before (L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L431)

```diff
-             this.captureError("error", dd.message, dd.filename ? `${dd.filename}:${dd.lineno}:${dd.colno}` : null, Od instanceof Error ? Od.name : null, (0, HO.e)(dd))
+             this.captureError("error", bb.message, bb.filename ? `${bb.filename}:${bb.lineno}:${bb.colno}` : null, wb instanceof Error ? wb.name : null, (0, tw.c)(bb))
```

#### 27. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L434-L435` → after: `L434-L435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L434-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L434-L435) · [Before (L434-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L434-L435)

```diff
-             this.captureError("unhandled_rejection", Od instanceof Error ? Od.message : String(Od), null, Od instanceof Error ? Od.name : null, (0, HO.e)(dd))
-           })), KO.j.subscribe("unrecoverableError", (dd => {
+             this.captureError("unhandled_rejection", wb instanceof Error ? wb.message : String(wb), null, wb instanceof Error ? wb.name : null, (0, tw.c)(bb))
+           })), pw.k.subscribe("unrecoverableError", (bb => {
```

#### 28. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L446` → after: `L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L446) · [Before (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L446)

```diff
-                   Xd = !(null !== Wd && Od.startTime - Wd.endMs < 50) || Od.duration >= 3 * (null !== (md = null === (Fd = Wd) || void 0 === Fd ? void 0 : Fd.durationMs) && void 0 !== md ? md : 0);
+                   Vb = !(null !== eb && wb.startTime - eb.endMs < 50) || wb.duration >= 3 * (null !== (Mb = null === (Hb = eb) || void 0 === Hb ? void 0 : Hb.durationMs) && void 0 !== Mb ? Mb : 0);
```

#### 29. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L452` → after: `L452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L452) · [Before (L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L452)

```diff
-                   mainThreadMs: (0, yO.o)(Od)
+                   mainThreadMs: (0, Cw.n)(wb)
```

#### 30. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L464` → after: `L464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L464) · [Before (L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L464)

```diff
-         const dd = (0, vO.V)().gameRender();
+         const bb = (0, gw.K)().gameRender();
```

#### 31. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L477` → after: `L477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L477) · [Before (L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L477)

```diff
-         const Kd = this.errorThrottle.allow(`${dd}:${Xd}`, Date.now());
+         const gb = this.errorThrottle.allow(`${bb}:${Vb}`, Date.now());
```

#### 32. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L494` → after: `L494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L494) · [Before (L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L494)

```diff
-         (0, oO.m)() || this.quitContext.noteHitch(performance.now()), this.replay.addHitch(Math.round(Od));
+         (0, Iw.q)() || this.quitContext.noteHitch(performance.now()), this.replay.addHitch(Math.round(wb));
```

#### 33. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L497` → after: `L497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L497) · [Before (L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L497)

```diff
-           gh: Math.round(Od),
+           Xl: Math.round(wb),
```

#### 34. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L504-L505` → after: `L504-L505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L504-L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L504-L505) · [Before (L504-L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L504-L505)

```diff
-     var TO = md(7458),
-       pO = md(387);
+     var Fw = Mb(7682),
+       Bw = Mb(366);
```

#### 35. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L578` → after: `L578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L578) · [Before (L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L578)

```diff
-         Od - (null !== md && void 0 !== md ? md : 0) < 3e4 ? this.idleCounted = !1 : !this.idleCounted && Wd && Fd && Rd && (this.idleCounted = !0, this.signal("idle_pointer_locked", 1, 3e4))
+         wb - (null !== Mb && void 0 !== Mb ? Mb : 0) < 3e4 ? this.idleCounted = !1 : !this.idleCounted && eb && Hb && pb && (this.idleCounted = !0, this.signal("idle_pointer_locked", 1, 3e4))
```

#### 36. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L592-L593` → after: `L592-L593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L592-L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L592-L593) · [Before (L592-L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L592-L593)

```diff
-     const EO = TO.h.indexOf("first_input"),
-       JO = TO.h.indexOf("first_move"),
+     const Xw = Fw.e.indexOf("first_input"),
+       xw = Fw.e.indexOf("first_move"),
```

#### 37. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L601` → after: `L601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L601) · [Before (L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L601)

```diff
-         this.replay = dd, this.quitContext = Od, this.deps = md, this.ladder = new YO(TO.d, "first_move"), this.frustration = void 0, this.frustrationThrottle = new ld({
+         this.replay = bb, this.quitContext = wb, this.deps = Mb, this.ladder = new sw(Fw.b, "first_move"), this.frustration = void 0, this.frustrationThrottle = new ub({
```

#### 38. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L613` → after: `L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L613) · [Before (L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L613)

```diff
-         this.reachStep("page_loaded"), KO.j.subscribe("sessionReplayStayOpened", (dd => {
+         this.reachStep("page_loaded"), pw.k.subscribe("sessionReplayStayOpened", (bb => {
```

#### 39. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L615` → after: `L615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L615) · [Before (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L615)

```diff
-         })), KO.j.subscribe("pointerLockUpdate", (dd => {
+         })), pw.k.subscribe("pointerLockUpdate", (bb => {
```

#### 40. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L617` → after: `L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L617) · [Before (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L617)

```diff
-         })), KO.j.subscribe("localBlockMined", (() => {
+         })), pw.k.subscribe("localBlockMined", (() => {
```

#### 41. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L619` → after: `L619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L619) · [Before (L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L619)

```diff
-         })), KO.j.subscribe("blockChangeRefused", (() => {
+         })), pw.k.subscribe("blockChangeRefused", (() => {
```

#### 42. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L621` → after: `L621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L621) · [Before (L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L621)

```diff
-         })), KO.j.subscribe("controlsTutorialShown", (dd => {
+         })), pw.k.subscribe("controlsTutorialShown", (bb => {
```

#### 43. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L623` → after: `L623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L623) · [Before (L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L623)

```diff
-         })), KO.j.subscribe("showShopTouchTutorial", (dd => {
+         })), pw.k.subscribe("showShopTouchTutorial", (bb => {
```

#### 44. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L625` → after: `L625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L625) · [Before (L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L625)

```diff
-         })), KO.j.subscribe("appManagerUpdated|openInGameMenuName", (dd => {
+         })), pw.k.subscribe("appManagerUpdated|openInGameMenuName", (bb => {
```

#### 45. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L627` → after: `L627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L627) · [Before (L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L627)

```diff
-         })), KO.j.subscribe("appManagerUpdated|openEverythingMenuName", (dd => {
+         })), pw.k.subscribe("appManagerUpdated|openEverythingMenuName", (bb => {
```

#### 46. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L631` → after: `L631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L631) · [Before (L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L631)

```diff
-         })), null === (dd = (0, NO.b)()) || void 0 === dd || dd.onUnboundKey((() => {
+         })), null === (bb = (0, Ow.e)()) || void 0 === bb || bb.onUnboundKey((() => {
```

#### 47. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L647` → after: `L647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L647) · [Before (L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L647)

```diff
-           ladder: new YO(TO.h, "first_move"),
+           ladder: new sw(Fw.e, "first_move"),
```

#### 48. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L670` → after: `L670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L670) · [Before (L670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L670)

```diff
-           lastInputAtMs: Math.max(null !== (dd = this.quitContext.getLastInputAtMs()) && void 0 !== dd ? dd : 0, null !== (Od = null === (md = this.currentStay) || void 0 === md ? void 0 : md.playableAtMs) && void 0 !== Od ? Od : 0),
+           lastInputAtMs: Math.max(null !== (bb = this.quitContext.getLastInputAtMs()) && void 0 !== bb ? bb : 0, null !== (wb = null === (Mb = this.currentStay) || void 0 === Mb ? void 0 : Mb.playableAtMs) && void 0 !== wb ? wb : 0),
```

#### 49. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L695` → after: `L695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L695) · [Before (L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L695)

```diff
-         this.everythingMenu = dd, null !== dd && (this.menuOpened(dd, dd === pO.m.SETTINGS ? "first_settings_open" : null), dd === pO.m.SETTINGS && Od && null !== this.currentStay && this.noteFrustration("menu_toggling"))
+         this.everythingMenu = bb, null !== bb && (this.menuOpened(bb, bb === Bw.l.SETTINGS ? "first_settings_open" : null), bb === Bw.l.SETTINGS && wb && null !== this.currentStay && this.noteFrustration("menu_toggling"))
```

#### 50. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L701` → after: `L701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L701) · [Before (L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L701)

```diff
-         const Od = `controls_tutorial_${dd}`;
+         const wb = `controls_tutorial_${bb}`;
```

#### 51. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L730` → after: `L730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L730) · [Before (L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L730)

```diff
-           furthest_step: null !== (dd = this.ladder.furthest) && void 0 !== dd ? dd : "",
+           furthest_step: null !== (bb = this.ladder.furthest) && void 0 !== bb ? bb : "",
```

#### 52. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L735` → after: `L735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L735) · [Before (L735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L735)

```diff
-         null !== this.ladder.reach(dd) && (this.replay.setSessionProperties(this.ladderTags(), !1), this.unsentStepMarkers.push(TO.d.indexOf(dd)), this.sendStepMarkers())
+         null !== this.ladder.reach(bb) && (this.replay.setSessionProperties(this.ladderTags(), !1), this.unsentStepMarkers.push(Fw.b.indexOf(bb)), this.sendStepMarkers())
```

#### 53. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L746` → after: `L746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L746) · [Before (L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L746)

```diff
-           furthestStep: null !== (md = Od.ladder.furthest) && void 0 !== md ? md : void 0,
+           furthestStep: null !== (Mb = wb.ladder.furthest) && void 0 !== Mb ? Mb : void 0,
```

#### 54. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L772` → after: `L772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L772) · [Before (L772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L772)

```diff
-           Wd = null !== (dd = null === (Od = this.currentStay) || void 0 === Od ? void 0 : Od.playableAtMs) && void 0 !== dd ? dd : null;
+           eb = null !== (bb = null === (wb = this.currentStay) || void 0 === wb ? void 0 : wb.playableAtMs) && void 0 !== bb ? bb : null;
```

#### 55. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L780` → after: `L780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L780) · [Before (L780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L780)

```diff
-           signal: TO.g.indexOf(dd)
+           signal: Fw.c.indexOf(bb)
```

#### 56. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L792` → after: `L792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L792) · [Before (L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L792)

```diff
-         if (0 === this.moveSubscriptions.length && (null !== (dd = null === (Od = this.currentStay) || void 0 === Od ? void 0 : Od.ladder.furthestStepIndex) && void 0 !== dd ? dd : 1 / 0) < JO) {
+         if (0 === this.moveSubscriptions.length && (null !== (bb = null === (wb = this.currentStay) || void 0 === wb ? void 0 : wb.ladder.furthestStepIndex) && void 0 !== bb ? bb : 1 / 0) < xw) {
```

#### 57. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L796` → after: `L796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L796) · [Before (L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L796)

```diff
-           this.moveSubscriptions = [KO.j.subscribe("usedKeyboard", dd), KO.j.subscribe("stickMoved", dd)]
+           this.moveSubscriptions = [pw.k.subscribe("usedKeyboard", bb), pw.k.subscribe("stickMoved", bb)]
```

#### 58. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L800` → after: `L800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L800) · [Before (L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L800)

```diff
-         for (const dd of this.moveSubscriptions) KO.j.unsubscribe(dd);
+         for (const bb of this.moveSubscriptions) pw.k.unsubscribe(bb);
```

#### 59. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L809` → after: `L809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L809) · [Before (L809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L809)

```diff
-       return null !== (Od = SO.find((Od => dd.includes(Od)))) && void 0 !== Od ? Od : "none"
+       return null !== (wb = Rw.find((wb => bb.includes(wb)))) && void 0 !== wb ? wb : "none"
```

#### 60. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L863` → after: `L863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L863) · [Before (L863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L863)

```diff
-             return uO(Od.lastHitchAtMs, dd.nowMs, 15e3) && Fd.push("quit_after_hitch"), uO(Od.lastDeathAtMs, dd.nowMs, 15e3) && Fd.push("quit_after_death"), dd.loading ? Fd.push("quit_during_load") : "page" !== dd.quitFrom || dd.inGame && !dd.menuOpen || Fd.push("quit_in_menu"),  … [truncated]
+             return Yw(wb.lastHitchAtMs, bb.nowMs, 15e3) && Hb.push("quit_after_hitch"), Yw(wb.lastDeathAtMs, bb.nowMs, 15e3) && Hb.push("quit_after_death"), bb.loading ? Hb.push("quit_during_load") : "page" !== bb.quitFrom || bb.inGame && !bb.menuOpen || Hb.push("quit_in_menu"),  … [truncated]
```

#### 61. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L867` → after: `L867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L867) · [Before (L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L867)

```diff
-             return uO(Od.lastDeathAtMs, dd, 1e4) || uO(null !== (md = Od.lastErrorAtMs) && void 0 !== md ? md : null, dd, 1e4)
+             return Yw(wb.lastDeathAtMs, bb, 1e4) || Yw(null !== (Mb = wb.lastErrorAtMs) && void 0 !== Mb ? Mb : null, bb, 1e4)
```

#### 62. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L878-L879` → after: `L878-L879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L878-L879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L878-L879) · [Before (L878-L879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L878-L879)

```diff
-         Od.includes("quit_during_load") && (Wd.last_load_step = null !== (Fd = this.lastLoadStep) && void 0 !== Fd ? Fd : "none");
-         null !== dd.gameName && (Wd.game_name_with_variation = dd.gameName, Wd.game_name = (0, OO.Gb)(dd.gameName));
+         wb.includes("quit_during_load") && (eb.last_load_step = null !== (Hb = this.lastLoadStep) && void 0 !== Hb ? Hb : "none");
+         null !== bb.gameName && (eb.game_name_with_variation = bb.gameName, eb.game_name = (0, kb.Zb)(bb.gameName));
```

#### 63. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L988` → after: `L988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L988) · [Before (L988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L988)

```diff
-     var AO = md(7465);
+     var Aw = Mb(7695);
```

#### 64. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1003-L1004` → after: `L1003-L1004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1003-L1004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1003-L1004) · [Before (L1003-L1004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1003-L1004)

```diff
-             in_game: "inGame" === RO.e.get("gameState"),
-             menu_open: (0, oO.m)(),
+             in_game: "inGame" === ew.c.get("gameState"),
+             menu_open: (0, Iw.q)(),
```

#### 65. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1007` → after: `L1007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1007) · [Before (L1007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1007)

```diff
-         })), KO.j.subscribe("leaveGame", (() => {
+         })), pw.k.subscribe("leaveGame", (() => {
```

#### 66. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1015` → after: `L1015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1015) · [Before (L1015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1015)

```diff
-         const Wd = (0, hO.b)().gameNameWithVariation;
+         const eb = (0, Vw.e)().gameNameWithVariation;
```

#### 67. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1017-L1018` → after: `L1017-L1018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1017-L1018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1017-L1018) · [Before (L1017-L1018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1017-L1018)

```diff
-         const Fd = null !== (Od = (0, AO.i)(dd)) && void 0 !== Od ? Od : dd;
-         this.counts.set(Fd, (null !== (md = this.counts.get(Fd)) && void 0 !== md ? md : 0) + 1), this.timer ??= setTimeout((() => {
+         const Hb = null !== (wb = (0, Aw.g)(bb)) && void 0 !== wb ? wb : bb;
+         this.counts.set(Hb, (null !== (Mb = this.counts.get(Hb)) && void 0 !== Mb ? Mb : 0) + 1), this.timer ??= setTimeout((() => {
```

#### 68. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1036` → after: `L1036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1036) · [Before (L1036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1036)

```diff
-           game_name: null === this.game ? null : (0, OO.Gb)(this.game),
+           game_name: null === this.game ? null : (0, kb.Zb)(this.game),
```

#### 69. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1042` → after: `L1042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1042) · [Before (L1042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1042)

```diff
-     var GO = md(180);
+     var Jw = Mb(192);
```

#### 70. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1046` → after: `L1046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1046) · [Before (L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1046)

```diff
-       return null !== (Od = null === (md = GO.l[dd]) || void 0 === md ? void 0 : md.toLowerCase()) && void 0 !== Od ? Od : String(dd)
+       return null !== (wb = null === (Mb = Jw.i[bb]) || void 0 === Mb ? void 0 : Mb.toLowerCase()) && void 0 !== wb ? wb : String(bb)
```

#### 71. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1154` → after: `L1154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1154) · [Before (L1154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1154)

```diff
-         this.replay = dd, this.quitContext = Od, this.settings = RO.e.get("clientEscMenuOptions"), this.pendingSettings = {}, this.settingsTimer = null, this.adRequest = null, this.playingAd = null
+         this.replay = bb, this.quitContext = wb, this.settings = ew.c.get("clientEscMenuOptions"), this.pendingSettings = {}, this.settingsTimer = null, this.adRequest = null, this.playingAd = null
```

#### 72. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1157` → after: `L1157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1157) · [Before (L1157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1157)

```diff
-         KO.j.subscribe("purchaseStarted", (dd => {
+         pw.k.subscribe("purchaseStarted", (bb => {
```

#### 73. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1164` → after: `L1164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1164) · [Before (L1164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1164)

```diff
-         })), KO.j.subscribe("purchaseEnded", (dd => {
+         })), pw.k.subscribe("purchaseEnded", (bb => {
```

#### 74. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1171` → after: `L1171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1171) · [Before (L1171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1171)

```diff
-         })), KO.j.subscribe("adRequested", (dd => {
+         })), pw.k.subscribe("adRequested", (bb => {
```

#### 75. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1181` → after: `L1181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1181) · [Before (L1181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1181)

```diff
-         })), KO.j.subscribe("appManagerUpdated|soundOnFromAd", (dd => {
+         })), pw.k.subscribe("appManagerUpdated|soundOnFromAd", (bb => {
```

#### 76. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1183-L1184` → after: `L1183-L1184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1183-L1184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1183-L1184) · [Before (L1183-L1184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1183-L1184)

```diff
-         })), KO.j.subscribe("appManagerUpdated|clientEscMenuOptions", (dd => {
-           RO.e.isApplyingDefaults ? this.settings = dd : this.onSettingsChanged(dd)
+         })), pw.k.subscribe("appManagerUpdated|clientEscMenuOptions", (bb => {
+           ew.c.isApplyingDefaults ? this.settings = bb : this.onSettingsChanged(bb)
```

#### 77. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1192-L1193` → after: `L1192-L1193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1192-L1193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1192-L1193) · [Before (L1192-L1193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1192-L1193)

```diff
-           ad_kind: null !== (dd = null === Wd || void 0 === Wd ? void 0 : Wd.adKind) && void 0 !== dd ? dd : "unknown",
-           provider: null !== (Od = null === Wd || void 0 === Wd ? void 0 : Wd.provider) && void 0 !== Od ? Od : null,
+           ad_kind: null !== (bb = null === eb || void 0 === eb ? void 0 : eb.adKind) && void 0 !== bb ? bb : "unknown",
+           provider: null !== (wb = null === eb || void 0 === eb ? void 0 : eb.provider) && void 0 !== wb ? wb : null,
```

#### 78. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1210` → after: `L1210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1210) · [Before (L1210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1210)

```diff
-           in_game: "inGame" === RO.e.get("gameState")
+           in_game: "inGame" === ew.c.get("gameState")
```

#### 79. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1228-L1229` → after: `L1228-L1229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1228-L1229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1228-L1229) · [Before (L1228-L1229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1228-L1229)

```diff
-       switch ((0, Md.w)(dd)) {
-         case dO.b.DISCORD_GUILD:
+       switch ((0, ob.o)(bb)) {
+         case Tb.d.DISCORD_GUILD:
```

#### 80. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1231` → after: `L1231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1231) · [Before (L1231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1231)

```diff
-         case dO.b.DISCORD_DM:
+         case Tb.d.DISCORD_DM:
```

#### 81. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1234` → after: `L1234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1234) · [Before (L1234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1234)

```diff
-           return (0, Md.K)(dd) ? "public" : "private"
+           return (0, ob.E)(bb) ? "public" : "private"
```

#### 82. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1252` → after: `L1252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1252) · [Before (L1252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1252)

```diff
-             KO.j.lQ("sessionReplayGameQuit", {
+             pw.k.iI("sessionReplayGameQuit", {
```

#### 83. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1254` → after: `L1254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1254) · [Before (L1254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1254)

```diff
-               gameName: "string" === typeof Wd ? Wd : null
+               gameName: "string" === typeof eb ? eb : null
```

#### 84. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1257-L1258` → after: `L1257-L1258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1257-L1258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1257-L1258) · [Before (L1257-L1258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1257-L1258)

```diff
-           isMenuOpen: oO.m,
-           isJoinAbandoned: tO.g,
+           isMenuOpen: Iw.q,
+           isJoinAbandoned: Lw.d,
```

#### 85. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1263-L1264` → after: `L1263-L1264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1263-L1264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1263-L1264) · [Before (L1263-L1264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1263-L1264)

```diff
-             isTouchScreen: () => RO.e.get("isTouchScreen"),
-             getInputDevice: () => RO.e.get("activeInputDevice"),
+             isTouchScreen: () => ew.c.get("isTouchScreen"),
+             getInputDevice: () => ew.c.get("activeInputDevice"),
```

#### 86. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1268` → after: `L1268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1268) · [Before (L1268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1268)

```diff
-               KO.j.lQ("sessionReplayStayProgress", dd)
+               pw.k.iI("sessionReplayStayProgress", bb)
```

#### 87. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1274` → after: `L1274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1274) · [Before (L1274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1274)

```diff
-         const dd = (0, NO.b)(),
+         const bb = (0, Ow.e)(),
```

#### 88. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1277-L1278` → after: `L1277-L1278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1277-L1278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1277-L1278) · [Before (L1277-L1278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1277-L1278)

```diff
-         const md = RO.e.get("gameState");
-         "inGame" === md ? this.joinConnectedGame() : "loadingScreen" !== md && "findingLobby" !== md || this.leaves.joinStarted(), this.subscribeToGameFlow(), new cO(this.replay, this.leaves.quitContext).start(), this.health.start(), this.trackInput(), this.pageEvents.startFirstI … [truncated]
+         const Mb = ew.c.get("gameState");
+         "inGame" === Mb ? this.joinConnectedGame() : "loadingScreen" !== Mb && "findingLobby" !== Mb || this.leaves.joinStarted(), this.subscribeToGameFlow(), new Gw(this.replay, this.leaves.quitContext).start(), this.health.start(), this.trackInput(), this.pageEvents.startFirstI … [truncated]
```

#### 89. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1281` → after: `L1281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1281) · [Before (L1281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1281)

```diff
-           this.FY()
+           this.Wm()
```

#### 90. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1292` → after: `L1292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1292) · [Before (L1292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1292)

```diff
-           const Wd = null !== (Od = null === (md = this.flows.stay) || void 0 === md ? void 0 : md.playableAtMs) && void 0 !== Od ? Od : null;
+           const eb = null !== (wb = null === (Mb = this.flows.stay) || void 0 === Mb ? void 0 : Mb.playableAtMs) && void 0 !== wb ? wb : null;
```

#### 91. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1301` → after: `L1301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1301) · [Before (L1301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1301)

```diff
-         KO.j.subscribe("joinedGame", (dd => {
+         pw.k.subscribe("joinedGame", (bb => {
```

#### 92. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1306-L1307` → after: `L1306-L1307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1306-L1307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1306-L1307) · [Before (L1306-L1307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1306-L1307)

```diff
-           (0, tO.g)() || this.onJoinedGame(Od, md)
-         })), KO.j.subscribe("leaveGame", (() => {
+           (0, Lw.d)() || this.onJoinedGame(wb, Mb)
+         })), pw.k.subscribe("leaveGame", (() => {
```

#### 93. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1309` → after: `L1309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1309) · [Before (L1309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1309)

```diff
-           const md = null !== (dd = null === (Od = this.flows.stay) || void 0 === Od ? void 0 : Od.name) && void 0 !== dd ? dd : null;
+           const Mb = null !== (bb = null === (wb = this.flows.stay) || void 0 === wb ? void 0 : wb.name) && void 0 !== bb ? bb : null;
```

#### 94. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1311` → after: `L1311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1311) · [Before (L1311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1311)

```diff
-         })), KO.j.subscribe("replayViewer|replayLoaded", (() => {
+         })), pw.k.subscribe("replayViewer|replayLoaded", (() => {
```

#### 95. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1314` → after: `L1314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1314) · [Before (L1314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1314)

```diff
-         })), KO.j.subscribe("matchmakeAndPlayStepCompleted", (dd => {
+         })), pw.k.subscribe("matchmakeAndPlayStepCompleted", (bb => {
```

#### 96. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1319` → after: `L1319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1319) · [Before (L1319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1319)

```diff
-         })), KO.j.subscribe("leftPlayPage", (() => {
+         })), pw.k.subscribe("leftPlayPage", (() => {
```

#### 97. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1321` → after: `L1321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1321) · [Before (L1321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1321)

```diff
-         })), KO.j.subscribe("joinFailed", (dd => {
+         })), pw.k.subscribe("joinFailed", (bb => {
```

#### 98. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1329` → after: `L1329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1329) · [Before (L1329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1329)

```diff
-             game_name_with_variation: (0, hO.b)().requestedGameNameWithVariation,
+             game_name_with_variation: (0, Vw.e)().requestedGameNameWithVariation,
```

#### 99. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1332` → after: `L1332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1332) · [Before (L1332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1332)

```diff
-         })), KO.j.subscribe("kickedForAfk", (() => {
+         })), pw.k.subscribe("kickedForAfk", (() => {
```

#### 100. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1334-L1335` → after: `L1334-L1335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1334-L1335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1334-L1335) · [Before (L1334-L1335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1334-L1335)

```diff
-           this.leaves.kickedForAfk(null !== (dd = null === (Od = this.flows.stay) || void 0 === Od ? void 0 : Od.name) && void 0 !== dd ? dd : null)
-         })), KO.j.subscribe("unwantedLeftGame", (dd => {
+           this.leaves.kickedForAfk(null !== (bb = null === (wb = this.flows.stay) || void 0 === wb ? void 0 : wb.name) && void 0 !== bb ? bb : null)
+         })), pw.k.subscribe("unwantedLeftGame", (bb => {
```

#### 101. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1342` → after: `L1342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1342) · [Before (L1342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1342)

```diff
-         })), KO.j.subscribe("appManagerUpdated|gameState", (dd => {
+         })), pw.k.subscribe("appManagerUpdated|gameState", (bb => {
```

#### 102. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1344` → after: `L1344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1344) · [Before (L1344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1344)

```diff
-             entry_source: RO.e.get("gameEntrySource")
+             entry_source: ew.c.get("gameEntrySource")
```

#### 103. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1348` → after: `L1348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1348) · [Before (L1348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1348)

```diff
-         })), KO.j.subscribe("appManagerUpdated|gameEntrySource", (dd => {
+         })), pw.k.subscribe("appManagerUpdated|gameEntrySource", (bb => {
```

#### 104. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1352` → after: `L1352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1352) · [Before (L1352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1352)

```diff
-         })), KO.j.subscribe("sessionReplayPlayerKill", (dd => {
+         })), pw.k.subscribe("sessionReplayPlayerKill", (bb => {
```

#### 105. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1362` → after: `L1362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1362) · [Before (L1362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1362)

```diff
-         (0, tO.g)() || (0, hO.c)() || (null === this.flows.stay && this.joinConnectedGame(), this.replay.capture("game_playable", {
+         (0, Lw.d)() || (0, Vw.f)() || (null === this.flows.stay && this.joinConnectedGame(), this.replay.capture("game_playable", {
```

#### 106. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1368` → after: `L1368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1368) · [Before (L1368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1368)

```diff
-         if ((0, hO.c)()) return;
+         if ((0, Vw.f)()) return;
```

#### 107. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1372` → after: `L1372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1372) · [Before (L1372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1372)

```diff
-         } = (0, hO.b)();
+         } = (0, Vw.e)();
```

#### 108. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1377-L1379` → after: `L1377-L1379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1377-L1379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1377-L1379) · [Before (L1377-L1379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1377-L1379)

```diff
-         const md = (0, Md.K)(Od),
-           Wd = RO.e.get("gameEntrySource");
-         this.gamesJoined++, this.leaves.gameJoined(), this.flows.gameJoined(this.gamesJoined, dd, "autoReconnect" === Wd || "manualReconnect" === Wd), "inGame" === RO.e.get("gameState") && this.flows.gamePlayable();
+         const Mb = (0, ob.E)(wb),
+           eb = ew.c.get("gameEntrySource");
+         this.gamesJoined++, this.leaves.gameJoined(), this.flows.gameJoined(this.gamesJoined, bb, "autoReconnect" === eb || "manualReconnect" === eb), "inGame" === ew.c.get("gameState") && this.flows.gamePlayable();
```

#### 109. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1382` → after: `L1382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1382) · [Before (L1382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1382)

```diff
-             game_name: (0, OO.Gb)(dd),
+             game_name: (0, kb.Zb)(bb),
```

#### 110. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1385-L1386` → after: `L1385-L1386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1385-L1386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1385-L1386) · [Before (L1385-L1386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1385-L1386)

```diff
-             game_analytics_id: (0, mO.h)(dd, md),
-             is_custom_game: (0, WO.k)(dd),
+             game_analytics_id: (0, bw.f)(bb, Mb),
+             is_custom_game: (0, ww.j)(bb),
```

#### 111. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1395` → after: `L1395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1395) · [Before (L1395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1395)

```diff
-           $screen_name: Rd.is_custom_game ? `custom: ${Rd.game_analytics_id}` : Rd.game_name
+           $screen_name: pb.is_custom_game ? `custom: ${pb.game_analytics_id}` : pb.game_name
```

#### 112. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1445` → after: `L1445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1445) · [Before (L1445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1445)

```diff
-         this.flows.Et();
+         this.flows.sO();
```

#### 113. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1447` → after: `L1447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1447) · [Before (L1447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1447)

```diff
-         this.replay.addFpsSample(Rd && md && this.framesThisTick > 0 ? 1e3 * this.framesThisTick / Od : null);
+         this.replay.addFpsSample(pb && Mb && this.framesThisTick > 0 ? 1e3 * this.framesThisTick / wb : null);
```

#### 114. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1452-L1454` → after: `L1452-L1454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1452-L1454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1452-L1454) · [Before (L1452-L1454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1452-L1454)

```diff
-     var eO = md(1268),
-       IO = md(1253),
-       lO = md(41387);
+     var iw = Mb(1280),
+       uw = Mb(1271),
+       dw = Mb(41161);
```

#### 115. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1470` → after: `L1470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1470) · [Before (L1470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1470)

```diff
-         signal: (0, eO.s)(3e4)
+         signal: (0, iw.t)(3e4)
```

#### 116. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1477` → after: `L1477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1477) · [Before (L1477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1477)

```diff
-         this.uploadToken = dd, this.url = void 0, this.post = void 0, this.isHidden = void 0, this.queue = [], this.retries = [], this.refusedTokens = new Set, this.overflowWarned = !1, this.unloading = !1, this.sendScheduled = !1, this.url = null !== (Od = Fd.url) && void 0 !==  … [truncated]
+         this.uploadToken = bb, this.url = void 0, this.post = void 0, this.isHidden = void 0, this.queue = [], this.retries = [], this.refusedTokens = new Set, this.overflowWarned = !1, this.unloading = !1, this.sendScheduled = !1, this.url = null !== (wb = Hb.url) && void 0 !==  … [truncated]
```

#### 117. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1509-L1510` → after: `L1509-L1510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1509-L1510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1509-L1510) · [Before (L1509-L1510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1509-L1510)

```diff
-           md = (0, lO.e)(JSON.stringify(Od));
-         Od.properties.length > 32768 || Od.event.length > 64 || CO(this.uploadToken) + md > 102400 ? console.warn(`Session replay timeline event ${Od.event.slice(0,64)} is too large for index-server; dropped.`) : (this.queue.push({
+           Mb = (0, dw.g)(JSON.stringify(wb));
+         wb.properties.length > 32768 || wb.event.length > 64 || Pw(this.uploadToken) + Mb > 102400 ? console.warn(`Session replay timeline event ${wb.event.slice(0,64)} is too large for index-server; dropped.`) : (this.queue.push({
```

#### 118. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1554` → after: `L1554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1554) · [Before (L1554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1554)

```diff
-         md.length < dd.events.length && console.error(`Session replay timeline: dropped ${dd.events.length-md.length} events after 3 attempts.`), this.retries.push(...md), this.trimToCap()
+         Mb.length < bb.events.length && console.error(`Session replay timeline: dropped ${bb.events.length-Mb.length} events after 3 attempts.`), this.retries.push(...Mb), this.trimToCap()
```

#### 119. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1565` → after: `L1565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1565) · [Before (L1565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1565)

```diff
-           Wd = await this.post(this.url, md, (0, lO.e)(md)), Wd.ok && (Fd = await Wd.json())
+           eb = await this.post(this.url, Mb, (0, dw.g)(Mb)), eb.ok && (Hb = await eb.json())
```

#### 120. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1569` → after: `L1569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1569) · [Before (L1569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1569)

```diff
-         return null === Fd ? 408 === Wd.status || 429 === Wd.status || Wd.status >= 500 ? "retryLater" : (console.error(`Session replay timeline upload failed with ${Wd.status}; dropped ${dd.events.length} events.`), "dropped") : "rejected" in Fd ? Fd.retryable ? "retryLater" : ( … [truncated]
+         return null === Hb ? 408 === eb.status || 429 === eb.status || eb.status >= 500 ? "retryLater" : (console.error(`Session replay timeline upload failed with ${eb.status}; dropped ${bb.events.length} events.`), "dropped") : "rejected" in Hb ? Hb.retryable ? "retryLater" : ( … [truncated]
```

#### 121. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1572-L1574` → after: `L1572-L1574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1572-L1574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1572-L1574) · [Before (L1572-L1574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1572-L1574)

```diff
-     var MO = md(41405),
-       dm = md(5359),
-       Om = md(1368);
+     var Tw = Mb(41179),
+       kw = Mb(5524),
+       bM = Mb(1400);
```

#### 122. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1606` → after: `L1606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1606) · [Before (L1606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1606)

```diff
-           }(dd.posthog.projectApiKey), Fd.c.init(dd.posthog.projectApiKey, Ld({
+           }(bb.posthog.projectApiKey), Hb.f.init(bb.posthog.projectApiKey, Sb({
```

#### 123. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1613` → after: `L1613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1613) · [Before (L1613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1613)

```diff
-             allowAutomatedBrowsers: (0, dm.d)((0, dm.g)(), !1),
+             allowAutomatedBrowsers: (0, kw.e)((0, kw.h)(), !1),
```

#### 124. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1622` → after: `L1622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1622) · [Before (L1622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1622)

```diff
-           })), Xd && Fd.c.startSessionRecording({
+           })), Vb && Hb.f.startSessionRecording({
```

#### 125. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1624-L1625` → after: `L1624-L1625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1624-L1625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1624-L1625) · [Before (L1624-L1625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1624-L1625)

```diff
-           }), this.expectedSessionId = md.recordingId, Fd.c.onSessionId((dd => {
-             dd !== this.expectedSessionId && console.warn(`Session replay: PostHog session ${dd} differs from recording ${this.expectedSessionId}; events carry recording_id.`)
+           }), this.expectedSessionId = Mb.recordingId, Hb.f.onSessionId((bb => {
+             bb !== this.expectedSessionId && console.warn(`Session replay: PostHog session ${bb} differs from recording ${this.expectedSessionId}; events carry recording_id.`)
```

#### 126. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1638` → after: `L1638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1638) · [Before (L1638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1638)

```diff
-               client_build: zd.c
+               client_build: vb.e
```

#### 127. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1640` → after: `L1640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1640) · [Before (L1640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1640)

```diff
-             Fd.c.register(Wd), null !== dd.videoStatus && Fd.c.register({
+             Hb.f.register(eb), null !== bb.videoStatus && Hb.f.register({
```

#### 128. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1642` → after: `L1642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1642) · [Before (L1642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1642)

```diff
-             }), Fd.c.setPersonProperties(Wd, {
+             }), Hb.f.setPersonProperties(eb, {
```

#### 129. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1646` → after: `L1646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1646) · [Before (L1646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1646)

```diff
-           }(dd, Xd), this.fpsMonitor = new Rd.d({
+           }(bb, Vb), this.fpsMonitor = new pb.c({
```

#### 130. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1650` → after: `L1650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1650) · [Before (L1650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1650)

```diff
-               }), KO.j.lQ("sessionReplayLowFps", {
+               }), pw.k.iI("sessionReplayLowFps", {
```

#### 131. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1659` → after: `L1659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1659) · [Before (L1659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1659)

```diff
-               }), KO.j.lQ("sessionReplayLowFps", {
+               }), pw.k.iI("sessionReplayLowFps", {
```

#### 132. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1664` → after: `L1664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1664) · [Before (L1664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1664)

```diff
-             dashboardHost: null !== (Od = dd.posthog.dashboardHost) && void 0 !== Od ? Od : dd.posthog.apiHost,
+             dashboardHost: null !== (wb = bb.posthog.dashboardHost) && void 0 !== wb ? wb : bb.posthog.apiHost,
```

#### 133. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1666` → after: `L1666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1666) · [Before (L1666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1666)

```diff
-             getSessionId: () => Fd.c.get_session_id(),
+             getSessionId: () => Hb.f.get_session_id(),
```

#### 134. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1675` → after: `L1675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1675) · [Before (L1675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1675)

```diff
-         Fd.c.capture(dd, Od)
+         Hb.f.capture(bb, wb)
```

#### 135. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1678` → after: `L1678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1678) · [Before (L1678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1678)

```diff
-         Fd.c.capture(dd, Od, {
+         Hb.f.capture(bb, wb, {
```

#### 136. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1684` → after: `L1684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1684) · [Before (L1684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1684)

```diff
-         Fd.c.capture(dd, Od, {
+         Hb.f.capture(bb, wb, {
```

#### 137. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1705` → after: `L1705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1705) · [Before (L1705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1705)

```diff
-         Fd.c.register({
+         Hb.f.register({
```

#### 138. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1717` → after: `L1717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1717) · [Before (L1717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1717)

```diff
-         Fd.c.stopSessionRecording(), Fd.c.register({
+         Hb.f.stopSessionRecording(), Hb.f.register({
```

#### 139. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1722` → after: `L1722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1722) · [Before (L1722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1722)

```diff
-         this.stopDomRecording(), Fd.c.set_config({
+         this.stopDomRecording(), Hb.f.set_config({
```

#### 140. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1731` → after: `L1731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1731) · [Before (L1731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1731)

```diff
-         return !(null === (dd = Fd.c.sessionRecording) || void 0 === dd || !dd.started) && (Pd().rrweb.record.takeFullSnapshot(), !0)
+         return !(null === (bb = Hb.f.sessionRecording) || void 0 === bb || !bb.started) && (Nb().rrweb.record.takeFullSnapshot(), !0)
```

#### 141. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1751` → after: `L1751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1751) · [Before (L1751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1751)

```diff
-           epochMs: (0, MO.b)(),
+           epochMs: (0, Tw.e)(),
```

#### 142. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1761` → after: `L1761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1761) · [Before (L1761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1761)

```diff
-         return (!(arguments.length > 2 && void 0 !== arguments[2] && arguments[2]) || Fd.c.sessionRecordingStarted()) && null !== (Od = null === (md = Fd.c.sessionRecording) || void 0 === md ? void 0 : md.tryAddCustomEvent(dd, Wd)) && void 0 !== Od && Od
+         return (!(arguments.length > 2 && void 0 !== arguments[2] && arguments[2]) || Hb.f.sessionRecordingStarted()) && null !== (wb = null === (Mb = Hb.f.sessionRecording) || void 0 === Mb ? void 0 : Mb.tryAddCustomEvent(bb, eb)) && void 0 !== wb && wb
```

#### 143. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1764` → after: `L1764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1764) · [Before (L1764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1764)

```diff
-         this.unregisterGameContext(), this.gameContextKeys = Object.keys(Od), Fd.c.register(Od), this.firstGameJoined || (this.firstGameJoined = !0, Fd.c.setPersonProperties(void 0, {
+         this.unregisterGameContext(), this.gameContextKeys = Object.keys(wb), Hb.f.register(wb), this.firstGameJoined || (this.firstGameJoined = !0, Hb.f.setPersonProperties(void 0, {
```

#### 144. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1781` → after: `L1781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1781) · [Before (L1781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1781)

```diff
-         Fd.c.register(dd), Od && Fd.c.setPersonProperties(dd)
+         Hb.f.register(bb), wb && Hb.f.setPersonProperties(bb)
```

#### 145. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1800-L1801` → after: `L1800-L1801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1800-L1801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1800-L1801) · [Before (L1800-L1801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1800-L1801)

```diff
-         Od !== this.lastTagsJson && (this.lastTagsJson = Od, Fd.c.register(dd), null === this.personUpdateTimer && (this.personUpdateTimer = setTimeout((() => {
-           this.personUpdateTimer = null, Fd.c.setPersonProperties(this.tags.toProperties())
+         wb !== this.lastTagsJson && (this.lastTagsJson = wb, Hb.f.register(bb), null === this.personUpdateTimer && (this.personUpdateTimer = setTimeout((() => {
+           this.personUpdateTimer = null, Hb.f.setPersonProperties(this.tags.toProperties())
```

#### 146. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1805` → after: `L1805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1805) · [Before (L1805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1805)

```diff
-         for (const dd of this.gameContextKeys) Fd.c.unregister(dd);
+         for (const bb of this.gameContextKeys) Hb.f.unregister(bb);
```

#### 147. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1810` → after: `L1810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1810) · [Before (L1810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1810)

```diff
-   41405: (dd, Od, md) => {
+   41179: (bb, wb, Mb) => {
```

#### 148. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1812` → after: `L1812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1812) · [Before (L1812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1812)

```diff
-       b: () => Rd
+       e: () => pb
```

#### 149. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1823` → after: `L1823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1823) · [Before (L1823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1823)

```diff
-   41387: (dd, Od, md) => {
+   41161: (bb, wb, Mb) => {
```

#### 150. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1827` → after: `L1827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1827) · [Before (L1827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1827)

```diff
-       e: () => Fd
+       g: () => Hb
```

#### 151. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1859` → after: `L1859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1859) · [Before (L1859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1859)

```diff
-         return (null !== (Od = this.inFlightLabels.get(dd)) && void 0 !== Od ? Od : 0) > 0
+         return (null !== (wb = this.inFlightLabels.get(bb)) && void 0 !== wb ? wb : 0) > 0
```

#### 152. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1872` → after: `L1872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1872) · [Before (L1872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1872)

```diff
-         void 0 !== dd && this.inFlightLabels.set(dd, (null !== (md = this.inFlightLabels.get(dd)) && void 0 !== md ? md : 0) + Od)
+         void 0 !== bb && this.inFlightLabels.set(bb, (null !== (Mb = this.inFlightLabels.get(bb)) && void 0 !== Mb ? Mb : 0) + wb)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (yteou.5361c997 → welxxc.ffac0572)

- **File**: `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (141 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db)

#### 1. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4)

```diff
-   41452: () => {
+   41223: () => {
```

#### 2. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L26` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L26) · [Before (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L26)

```diff
-           return "symbol" == dd(md) ? md : md + ""
+           return "symbol" == bb(Mb) ? Mb : Mb + ""
```

#### 3. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L114` → after: `L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L114) · [Before (L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L114)

```diff
-       new RegExp(`^${Hd.source}`, "i"), new RegExp(Hd.source, "gi"), "0".repeat(32), "0".repeat(16);
+       new RegExp(`^${Eb.source}`, "i"), new RegExp(Eb.source, "gi"), "0".repeat(32), "0".repeat(16);
```

#### 4. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L179` → after: `L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L179) · [Before (L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L179)

```diff
-         const Wd = `${dd}.${String(md)}`;
+         const eb = `${bb}.${String(Mb)}`;
```

#### 5. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L213` → after: `L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L213) · [Before (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L213)

```diff
-               return "function" == typeof dd ? null !== (Od = dd.__rrweb_layer__) && void 0 !== Od ? Od : dd.__posthog_layer__ : void 0
+               return "function" == typeof bb ? null !== (wb = bb.__rrweb_layer__) && void 0 !== wb ? wb : bb.__posthog_layer__ : void 0
```

#### 6. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L235` → after: `L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L235) · [Before (L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L235)

```diff
-             wd = (null == dd ? void 0 : dd.toString().includes("[native code]")) ? dd : null
+             Xb = (null == bb ? void 0 : bb.toString().includes("[native code]")) ? bb : null
```

#### 7. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L306` → after: `L306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L306) · [Before (L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L306)

```diff
-         }, jd = [], Dd = 0, cd = (Od = dd) && Od > 0 ? Od : null, nd = Sd(), Ld = sd)
+         }, Gb = [], qb = 0, Qb = (wb = bb) && wb > 0 ? wb : null, Jb = Db(), Sb = cb)
```

#### 8. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L317` → after: `L317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L317) · [Before (L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L317)

```diff
-         } : (Gd -= 1) > 0 ? Pd : (Pd.durationMs = Sd() - nd, Pd.deferredStylesheetCount = Dd, ld.deferredCount += Dd, cd = null, rd(Pd.durationMs, Ld) ? Pd : zd = Pd)
+         } : (Wb -= 1) > 0 ? Nb : (Nb.durationMs = Db() - Jb, Nb.deferredStylesheetCount = qb, ub.deferredCount += qb, Qb = null, Ab(Nb.durationMs, Sb) ? Nb : vb = Nb)
```

#### 9. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L408` → after: `L408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L408) · [Before (L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L408)

```diff
-           return "symbol" == RO(Od) ? Od : Od + ""
+           return "symbol" == ew(wb) ? wb : wb + ""
```

#### 10. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L439-L440` → after: `L439-L440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L439-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L439-L440) · [Before (L439-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L439-L440)

```diff
-         const md = ["@import", `url(${JSON.stringify(dd.href)})`];
-         return "" === dd.layerName ? md.push("layer") : dd.layerName && md.push(`layer(${dd.layerName})`), dd.supportsText && md.push(`supports(${dd.supportsText})`), dd.media.length && md.push(dd.media.mediaText), md.join(" ") + ";"
+         const Mb = ["@import", `url(${JSON.stringify(bb.href)})`];
+         return "" === bb.layerName ? Mb.push("layer") : bb.layerName && Mb.push(`layer(${bb.layerName})`), bb.supportsText && Mb.push(`supports(${bb.supportsText})`), bb.media.length && Mb.push(bb.media.mediaText), Mb.join(" ") + ";"
```

#### 11. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L499` → after: `L499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L499) · [Before (L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L499)

```diff
-           return dd && null !== (Od = null === (md = this.getMeta(dd)) || void 0 === md ? void 0 : md.id) && void 0 !== Od ? Od : -1
+           return bb && null !== (wb = null === (Mb = this.getMeta(bb)) || void 0 === Mb ? void 0 : Mb.id) && void 0 !== wb ? wb : -1
```

#### 12. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L501` → after: `L501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L501) · [Before (L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L501)

```diff
-         QFd(dd) {
+         OHb(bb) {
```

#### 13. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L527` → after: `L527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L527) · [Before (L527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L527)

```diff
-           const md = this.QFd(dd);
+           const Mb = this.OHb(bb);
```

#### 14. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L566` → after: `L566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L566) · [Before (L566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L566)

```diff
-         return Wd ? Fd ? Xd && aO.has(wO(md)) ? Wd : "*".repeat(Wd.length) : Rd ? Rd(md, Wd, Od) : Wd : Wd
+         return eb ? Hb ? Vb && zw.has(hw(Mb)) ? eb : "*".repeat(eb.length) : pb ? pb(Mb, eb, wb) : eb : eb
```

#### 15. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L588-L590` → after: `L588-L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L588-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L588-L590) · [Before (L588-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L588-L590)

```diff
-           if (BO.test(Kd) || SO.test(Kd)) return `url(${hd}${Kd}${hd})`;
-           if (sO.test(Kd)) return `url(${hd}${Kd}${hd})`;
-           if ("/" === Kd[0]) return `url(${hd}${function(dd){let Od="";return Od=dd.indexOf("//")>-1?dd.split("/").slice(0,3).join("/"):dd.split("/")[0],Od=Od.split("?")[0],Od}(Od)+Kd}${hd})`;
+           if (rw.test(gb) || Rw.test(gb)) return `url(${lb}${gb}${lb})`;
+           if (Dw.test(gb)) return `url(${lb}${gb}${lb})`;
+           if ("/" === gb[0]) return `url(${lb}${function(bb){let wb="";return wb=bb.indexOf("//")>-1?bb.split("/").slice(0,3).join("/"):bb.split("/")[0],wb=wb.split("?")[0],wb}(wb)+gb}${lb})`;
```

#### 16. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L595` → after: `L595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L595) · [Before (L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L595)

```diff
-           return `url(${hd}${vd.join("/")}${hd})`
+           return `url(${lb}${Lb.join("/")}${lb})`
```

#### 17. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L652-L653` → after: `L652-L653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L652-L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L652-L653) · [Before (L652-L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L652-L653)

```diff
-                   const Xd = Fd.toDataURL(md || "image/webp", null != Wd ? Wd : .4),
-                     Kd = Od.length > Xd.length ? Xd : Od;
+                   const Vb = Hb.toDataURL(Mb || "image/webp", null != eb ? eb : .4),
+                     gb = wb.length > Vb.length ? Vb : wb;
```

#### 18. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L712` → after: `L712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L712) · [Before (L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L712)

```diff
-         }(dd, Wd) : "style" === md ? uO(Wd, DO(dd)) : "object" === Od && "data" === md ? jO(dd, Wd) : Wd : jO(dd, Wd)
+         }(bb, eb) : "style" === Mb ? Yw(eb, aw(bb)) : "object" === wb && "data" === Mb ? qw(bb, eb) : eb : qw(bb, eb)
```

#### 19. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L742` → after: `L742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L742) · [Before (L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L742)

```diff
-               if (Fd.closest(`.${Od}`)) return !0
+               if (Hb.closest(`.${wb}`)) return !0
```

#### 20. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L805` → after: `L805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L805) · [Before (L805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L805)

```diff
-         if (ud >= Vd) return Wm = !0, mm || (mm = !0, console.warn(`[rrweb-snapshot] DOM tree depth exceeded max depth of ${Vd}. Children beyond this depth will not be recorded. This may indicate deeply nested DOM structures.`)), null;
+         if (Yb >= Zb) return MM = !0, wM || (wM = !0, console.warn(`[rrweb-snapshot] DOM tree depth exceeded max depth of ${Zb}. Children beyond this depth will not be recorded. This may indicate deeply nested DOM structures.`)), null;
```

#### 21. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L967` → after: `L967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L967) · [Before (L967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L967)

```diff
-                         console.warn(`Cannot inline img src=${Wd}! Error: ${dd}`)
+                         console.warn(`Cannot inline img src=${eb}! Error: ${bb}`)
```

#### 22. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L987-L990` → after: `L987-L990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L987-L990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L987-L990) · [Before (L987-L990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L987-L990)

```diff
-                     rr_width: `${Od}px`,
-                     rr_height: `${Wd}px`,
-                     rr_left: `${Math.floor(Fd+((null===(Sd=md.defaultView)||void 0===Sd?void 0:Sd.scrollX)||0))}px`,
-                     rr_top: `${Math.floor(Rd+((null===(sd=md.defaultView)||void 0===sd?void 0:sd.scrollY)||0))}px`
+                     rr_width: `${wb}px`,
+                     rr_height: `${eb}px`,
+                     rr_left: `${Math.floor(Hb+((null===(Db=Mb.defaultView)||void 0===Db?void 0:Db.scrollX)||0))}px`,
+                     rr_top: `${Math.floor(pb+((null===(cb=Mb.defaultView)||void 0===cb?void 0:cb.scrollY)||0))}px`
```

#### 23. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L1054` → after: `L1054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR1054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L1054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1054) · [Before (L1054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1054)

```diff
-                     console.warn(`Cannot get CSS styles from text's parentNode. Error: ${Od}`, dd)
+                     console.warn(`Cannot get CSS styles from text's parentNode. Error: ${wb}`, bb)
```

#### 24. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L1114` → after: `L1114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR1114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L1114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1114) · [Before (L1114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1114)

```diff
-                 return null !== (Od = null == Wd ? void 0 : Wd[1]) && void 0 !== Od ? Od : null
+                 return null !== (wb = null == eb ? void 0 : eb[1]) && void 0 !== wb ? wb : null
```

#### 25. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L1413` → after: `L1413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR1413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L1413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1413) · [Before (L1413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1413)

```diff
-           QFd: () => (console.warn(om), null),
+           OHb: () => (console.warn(IM), null),
```

#### 26. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L1500` → after: `L1500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR1500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L1500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1500) · [Before (L1500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1500)

```diff
-         return dd ? dd.nodeType === dd.ELEMENT_NODE ? dd : Bd.parentElement(dd) : null
+         return bb ? bb.nodeType === bb.ELEMENT_NODE ? bb : Rb.parentElement(bb) : null
```

#### 27. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L1554` → after: `L1554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR1554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L1554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1554) · [Before (L1554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1554)

```diff
-           return null !== (Od = this.styleIDMap.get(dd)) && void 0 !== Od ? Od : -1
+           return null !== (wb = this.styleIDMap.get(bb)) && void 0 !== wb ? wb : -1
```

#### 28. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L1586` → after: `L1586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR1586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L1586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1586) · [Before (L1586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1586)

```diff
-         return "boolean" == typeof md ? md : function(dd) {
+         return "boolean" == typeof Mb ? Mb : function(bb) {
```

#### 29. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L1631` → after: `L1631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR1631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1631) · [Before (L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1631)

```diff
-         Am = (dd, Od) => `${dd}@${Od}`,
+         fM = (bb, wb) => `${bb}@${wb}`,
```

#### 30. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L1643` → after: `L1643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR1643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L1643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1643) · [Before (L1643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1643)

```diff
-                 md = Sd() - dd, Wd = Od, Gd > 0 || rd(md, null != Wd ? Wd : sd) || md > Id.slowestBatchMs && (Id.slowestBatchMs = md)
+                 Mb = Db() - bb, eb = wb, Wb > 0 || Ab(Mb, null != eb ? eb : cb) || Mb > ib.slowestBatchMs && (ib.slowestBatchMs = Mb)
```

#### 31. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L1815` → after: `L1815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR1815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L1815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1815) · [Before (L1815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1815)

```diff
-                     Xd = null !== (Od = dd.attributeNamespace) && void 0 !== Od ? Od : null;
+                     Vb = null !== (wb = bb.attributeNamespace) && void 0 !== wb ? wb : null;
```

#### 32. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L1820-L1822` → after: `L1820-L1822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR1820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L1820-L1822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1820-L1822) · [Before (L1820-L1822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1820-L1822)

```diff
-                       if ("http://www.w3.org/1999/xlink" === md) return `xlink:${Od}`;
-                       if ("http://www.w3.org/XML/1998/namespace" === md) return `xml:${Od}`;
-                       if ("http://www.w3.org/2000/xmlns/" === md) return "xmlns" === Od ? Od : `xmlns:${Od}`;
+                       if ("http://www.w3.org/1999/xlink" === Mb) return `xlink:${wb}`;
+                       if ("http://www.w3.org/XML/1998/namespace" === Mb) return `xml:${wb}`;
+                       if ("http://www.w3.org/2000/xmlns/" === Mb) return "xmlns" === wb ? wb : `xmlns:${wb}`;
```

#### 33. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L1824` → after: `L1824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR1824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L1824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1824) · [Before (L1824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1824)

```diff
-                       return Fd ? `${Fd}:${Od}` : Od
+                       return Hb ? `${Hb}:${wb}` : wb
```

#### 34. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L1864` → after: `L1864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR1864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L1864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1864) · [Before (L1864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1864)

```diff
-                         Wd !== Od.style.getPropertyValue(dd) || Fd !== Od.style.getPropertyPriority(dd) ? vd.styleDiff[dd] = "" === Fd ? Wd : [Wd, Fd] : vd._unchangedStyles[dd] = [Wd, Fd]
+                         eb !== wb.style.getPropertyValue(bb) || Hb !== wb.style.getPropertyPriority(bb) ? Lb.styleDiff[bb] = "" === Hb ? eb : [eb, Hb] : Lb._unchangedStyles[bb] = [eb, Hb]
```

#### 35. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L2066` → after: `L2066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR2066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L2066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2066) · [Before (L2066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2066)

```diff
-             const td = `${vd},${Qd}`;
+             const Ob = `${Lb},${Ib}`;
```

#### 36. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L2117` → after: `L2117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR2117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L2117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2117) · [Before (L2117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2117)

```diff
-         Xd = md.getId("#document" === Od.nodeName ? Od : Bd.host(Od));
+         Vb = Mb.getId("#document" === wb.nodeName ? wb : Rb.host(wb));
```

#### 37. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L2383` → after: `L2383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR2383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L2383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2383) · [Before (L2383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2383)

```diff
-                 "radio" === yd && bd && Hd && md.querySelectorAll(`input[type="radio"][name="${bd}"]`).forEach((dd => {
+                 "radio" === Fb && Bb && Eb && Mb.querySelectorAll(`input[type="radio"][name="${Bb}"]`).forEach((bb => {
```

#### 38. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L2552` → after: `L2552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR2552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L2552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2552) · [Before (L2552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2552)

```diff
-                 return Rd.CSSStyleSheet.prototype.insertRule.apply(this, [`${dd} { ${Od} }`, md])
+                 return pb.CSSStyleSheet.prototype.insertRule.apply(this, [`${bb} { ${wb} }`, Mb])
```

#### 39. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L2765` → after: `L2765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR2765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L2765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2765) · [Before (L2765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2765)

```diff
-                   fontSource: "string" == typeof Od ? Od : JSON.stringify(Array.from(new Uint8Array(Od)))
+                   fontSource: "string" == typeof wb ? wb : JSON.stringify(Array.from(new Uint8Array(wb)))
```

#### 40. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L2813` → after: `L2813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR2813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L2813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2813) · [Before (L2813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2813)

```diff
-                 By: Kd
+                 gF: gb
```

#### 41. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L2832` → after: `L2832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR2832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L2832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2832) · [Before (L2832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2832)

```diff
-                   console.warn(`Custom element callback failed for ${Od}`)
+                   console.warn(`Custom element callback failed for ${wb}`)
```

#### 42. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L2838` → after: `L2838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR2838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L2838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2838) · [Before (L2838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2838)

```diff
-           for (const Od of dd.plugins) td(`plugin:${Od.name}`, (() => Od.observer(Od.callback, md, Od.options)))
+           for (const wb of bb.plugins) Ob(`plugin:${wb.name}`, (() => wb.observer(wb.callback, Mb, wb.options)))
```

#### 43. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L2873` → after: `L2873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR2873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L2873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2873) · [Before (L2873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2873)

```diff
-             return "number" != typeof Od || 0 > Od ? Od : null !== (Wd = (md || this.getLocalIdToRemoteIdMap(dd)).get(Od)) && void 0 !== Wd ? Wd : -1
+             return "number" != typeof wb || 0 > wb ? wb : null !== (eb = (Mb || this.getLocalIdToRemoteIdMap(bb)).get(wb)) && void 0 !== eb ? eb : -1
```

#### 44. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L2906` → after: `L2906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR2906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L2906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2906) · [Before (L2906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2906)

```diff
-             return null !== (Od = null !== (md = null === (Wd = this.attachedIframes.get(dd)) || void 0 === Wd ? void 0 : Wd.element) && void 0 !== md ? md : this.iframeElementsById.get(dd)) && void 0 !== Od ? Od : null
+             return null !== (wb = null !== (Mb = null === (eb = this.attachedIframes.get(bb)) || void 0 === eb ? void 0 : eb.element) && void 0 !== Mb ? Mb : this.iframeElementsById.get(bb)) && void 0 !== wb ? wb : null
```

#### 45. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3058` → after: `L3058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR3058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L3058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3058) · [Before (L3058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3058)

```diff
-                     return Od.data.By.forEach((Od => {
+                     return wb.data.gF.forEach((wb => {
```

#### 46. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3092` → after: `L3092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR3092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L3092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3092) · [Before (L3092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3092)

```diff
-               md = (null == Od ? void 0 : Od.element) || this.iframeElementsById.get(dd) || this.mirror.QFd(dd);
+               Mb = (null == wb ? void 0 : wb.element) || this.iframeElementsById.get(bb) || this.mirror.OHb(bb);
```

#### 47. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3159` → after: `L3159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR3159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L3159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3159) · [Before (L3159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3159)

```diff
-             const Rd = null !== (md = null === (Fd = Bd.host(dd)) || void 0 === Fd ? void 0 : Fd.ownerDocument) && void 0 !== md ? md : Od,
+             const pb = null !== (Mb = null === (Hb = Rb.host(bb)) || void 0 === Hb ? void 0 : Hb.ownerDocument) && void 0 !== Mb ? Mb : wb,
```

#### 48. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3334` → after: `L3334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR3334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L3334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3334) · [Before (L3334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3334)

```diff
-                     return Od && "object" == typeof Od ? Od : null
+                     return wb && "object" == typeof wb ? wb : null
```

#### 49. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3343` → after: `L3343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR3343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L3343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3343) · [Before (L3343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3343)

```diff
-                     usage: "number" == typeof Rd.usage ? Rd.usage | Kd : Kd
+                     usage: "number" == typeof pb.usage ? pb.usage | gb : gb
```

#### 50. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3440` → after: `L3440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR3440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L3440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3440) · [Before (L3440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3440)

```diff
-         console.warn(`[replay] canvas capture: ${dd}`, ...md)
+         console.warn(`[replay] canvas capture: ${bb}`, ...Mb)
```

#### 51. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3501` → after: `L3501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR3501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L3501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3501) · [Before (L3501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3501)

```diff
-               return JW(`disabled because the encode worker did not start. ${EW}`, dd), void hd()
+               return xe(`disabled because the encode worker did not start. ${Xe}`, bb), void lb()
```

#### 52. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3506` → after: `L3506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR3506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L3506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3506) · [Before (L3506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3506)

```diff
-               od = !0, JW(`stopped because the encode worker failed. ${EW}`, dd), cancelAnimationFrame(yd), null === (Od = Qd.terminate) || void 0 === Od || Od.call(Qd), this.resetFrameDedup = null
+               Ub = !0, xe(`stopped because the encode worker failed. ${Xe}`, bb), cancelAnimationFrame(Fb), null === (wb = Ib.terminate) || void 0 === wb || wb.call(Ib), this.resetFrameDedup = null
```

#### 53. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3812` → after: `L3812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR3812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L3812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3812) · [Before (L3812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3812)

```diff
-                           if (Od.media && "string" == typeof Od.media.mediaText) return `@media ${Od.media.mediaText} {`;
+                           if (wb.media && "string" == typeof wb.media.mediaText) return `@media ${wb.media.mediaText} {`;
```

#### 54. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3816` → after: `L3816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR3816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L3816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3816) · [Before (L3816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3816)

```diff
-                             return `${dd.selectorText} {${md?" "+md:""}`
+                             return `${bb.selectorText} {${Mb?" "+Mb:""}`
```

#### 55. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3818` → after: `L3818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR3818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L3818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3818) · [Before (L3818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3818)

```diff
-                           if ("containerName" in Od) return "string" != typeof Od.containerQuery || Od.containerName && !TO.test(Od.containerName) ? null : `@container ${Od.containerName?`${Od.containerName} `:""}${Od.containerQuery} {`;
+                           if ("containerName" in wb) return "string" != typeof wb.containerQuery || wb.containerName && !Fw.test(wb.containerName) ? null : `@container ${wb.containerName?`${wb.containerName} `:""}${wb.containerQuery} {`;
```

#### 56. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3827` → after: `L3827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR3827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L3827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3827) · [Before (L3827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3827)

```diff
-                             return "" === Wd || "Object" === Wd || "CSSSupportsRule" === Wd ? `@supports ${Od.conditionText} {` : null
+                             return "" === eb || "Object" === eb || "CSSSupportsRule" === eb ? `@supports ${wb.conditionText} {` : null
```

#### 57. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3829` → after: `L3829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR3829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L3829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3829) · [Before (L3829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3829)

```diff
-                           return "string" == typeof Od.name ? "keyText" in Od.cssRules[0] ? TO.test(Od.name) ? `@keyframes ${Od.name} {` : null : "" === Od.name ? "@layer {" : pO.test(Od.name) ? `@layer ${Od.name} {` : null : null
+                           return "string" == typeof wb.name ? "keyText" in wb.cssRules[0] ? Fw.test(wb.name) ? `@keyframes ${wb.name} {` : null : "" === wb.name ? "@layer {" : Bw.test(wb.name) ? `@layer ${wb.name} {` : null : null
```

#### 58. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3913` → after: `L3913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR3913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L3913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3913) · [Before (L3913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3913)

```diff
-                     let Xd = dd > 0 ? dd : 1;
+                     let Vb = bb > 0 ? bb : 1;
```

#### 59. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3942` → after: `L3942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR3942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L3942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3942) · [Before (L3942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3942)

```diff
-                   text: () => md ? Wd : null,
+                   text: () => Mb ? eb : null,
```

#### 60. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3981` → after: `L3981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR3981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L3981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3981) · [Before (L3981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3981)

```diff
-                   Qd && this.pendingDeferredSheets.delete(Xd), rd(td = Sd() - hd, null != (od = vd) ? od : sd) || (ld.totalMs += td, td > ld.slowestSliceMs && (ld.slowestSliceMs = td))
+                   Ib && this.pendingDeferredSheets.delete(Vb), Ab(Ob = Db() - lb, null != (Ub = Lb) ? Ub : cb) || (ub.totalMs += Ob, Ob > ub.slowestSliceMs && (ub.slowestSliceMs = Ob))
```

#### 61. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L4187` → after: `L4187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR4187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L4187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4187) · [Before (L4187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4187)

```diff
-           } : void 0 !== pd ? pd : {
+           } : void 0 !== mb ? mb : {
```

#### 62. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L4228` → after: `L4228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR4228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L4228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4228) · [Before (L4228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4228)

```diff
-                   const dd = AW.QFd(Wd.node.id);
+                   const bb = fe.OHb(eb.node.id);
```

#### 63. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L4562` → after: `L4562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR4562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L4562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4562) · [Before (L4562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4562)

```diff
-               const md = AW.QFd(Od);
+               const Mb = fe.OHb(wb);
```

#### 64. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L4712` → after: `L4712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR4712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L4712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4712) · [Before (L4712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4712)

```diff
-                 Rd = null !== (dd = null !== (Od = null !== (md = null !== (Wd = Fd.fullscreenElement) && void 0 !== Wd ? Wd : Fd.webkitFullscreenElement) && void 0 !== md ? md : Fd.mozFullScreenElement) && void 0 !== Od ? Od : Fd.msFullscreenElement) && void 0 !== dd ? dd : null … [truncated]
+                 pb = null !== (bb = null !== (wb = null !== (Mb = null !== (eb = Hb.fullscreenElement) && void 0 !== eb ? eb : Hb.webkitFullscreenElement) && void 0 !== Mb ? Mb : Hb.mozFullScreenElement) && void 0 !== wb ? wb : Hb.msFullscreenElement) && void 0 !== bb ? bb : null … [truncated]
```

#### 65. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L4765` → after: `L4765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR4765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L4765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4765) · [Before (L4765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4765)

```diff
-       new RegExp(`^${LW.source}`, "i"), new RegExp(LW.source, "gi"), "0".repeat(32), "0".repeat(16);
+       new RegExp(`^${Se.source}`, "i"), new RegExp(Se.source, "gi"), "0".repeat(32), "0".repeat(16);
```

#### 66. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L4788` → after: `L4788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR4788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L4788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4788) · [Before (L4788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4788)

```diff
-           return "symbol" == zW(Od) ? Od : Od + ""
+           return "symbol" == ve(wb) ? wb : wb + ""
```

#### 67. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L4804` → after: `L4804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR4804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L4804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4804) · [Before (L4804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4804)

```diff
-             return this.functionName ? `${this.functionName} (${this.fileName}:${dd}:${Od})` : `${this.fileName}:${dd}:${Od}`
+             return this.functionName ? `${this.functionName} (${this.fileName}:${bb}:${wb})` : `${this.fileName}:${bb}:${wb}`
```

#### 68. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L4817` → after: `L4817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR4817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L4817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4817) · [Before (L4817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4817)

```diff
-             if (!Od) throw new Error(`Cannot parse given url: ${dd}`);
+             if (!wb) throw new Error(`Cannot parse given url: ${bb}`);
```

#### 69. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L4919` → after: `L4919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR4919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L4919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4919) · [Before (L4919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4919)

```diff
-           Fd.length > 1 && (md += `:eq(${Fd.indexOf(dd)})`), Od = md + (Od ? ">" + Od : ""), dd = Wd
+           Hb.length > 1 && (Mb += `:eq(${Hb.indexOf(bb)})`), wb = Mb + (wb ? ">" + wb : ""), bb = eb
```

#### 70. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L4957` → after: `L4957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR4957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L4957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4957) · [Before (L4957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4957)

```diff
-             return md.stringLengthLimit && Od.length > md.stringLengthLimit && (Od = `${Od.slice(0,md.stringLengthLimit)}...`), Od
+             return Mb.stringLengthLimit && wb.length > Mb.stringLengthLimit && (wb = `${wb.slice(0,Mb.stringLengthLimit)}...`), wb
```

#### 71. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5002` → after: `L5002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR5002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L5002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5002) · [Before (L5002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5002)

```diff
-             Od.reason instanceof Error ? (md = Od.reason, Fd = [MW(`Uncaught (in promise) ${md.name}: ${md.message}`, Wd.stringifyOptions)]) : (md = new Error, Fd = [MW("Uncaught (in promise)", Wd.stringifyOptions), MW(Od.reason, Wd.stringifyOptions)]), dd({
+             wb.reason instanceof Error ? (Mb = wb.reason, Hb = [oe(`Uncaught (in promise) ${Mb.name}: ${Mb.message}`, eb.stringifyOptions)]) : (Mb = new Error, Hb = [oe("Uncaught (in promise)", eb.stringifyOptions), oe(wb.reason, eb.stringifyOptions)]), bb({
```

#### 72. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5064` → after: `L5064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR5064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L5064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5064) · [Before (L5064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5064)

```diff
-                   return "function" == typeof dd ? null !== (Od = dd.__rrweb_layer__) && void 0 !== Od ? Od : dd.__posthog_layer__ : void 0
+                   return "function" == typeof bb ? null !== (wb = bb.__rrweb_layer__) && void 0 !== wb ? wb : bb.__posthog_layer__ : void 0
```

#### 73. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5086` → after: `L5086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR5086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L5086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5086) · [Before (L5086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5086)

```diff
-       const KF = null != mF ? mF : {},
+       const pH = null != bH ? bH : {},
```

#### 74. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5104` → after: `L5104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR5104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L5104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5104) · [Before (L5104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5104)

```diff
-         return Od > md && (Wd.warn("min cannot be greater than max."), Od = md), TF(dd) ? dd > md ? (Wd.warn(" cannot be  greater than max: " + md + ". Using max value instead."), md) : Od > dd ? (Wd.warn(" cannot be less than min: " + Od + ". Using min value instead."), Od) : dd … [truncated]
+         return wb > Mb && (eb.warn("min cannot be greater than max."), wb = Mb), FH(bb) ? bb > Mb ? (eb.warn(" cannot be  greater than max: " + Mb + ". Using max value instead."), Mb) : wb > bb ? (eb.warn(" cannot be less than min: " + wb + ". Using min value instead."), wb) : bb … [truncated]
```

#### 75. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5146` → after: `L5146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR5146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L5146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5146) · [Before (L5146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5146)

```diff
-           }(EF, `Native gzip produced invalid output: ${dd}`)
+           }(XH, `Native gzip produced invalid output: ${bb}`)
```

#### 76. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5245` → after: `L5245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR5245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L5245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5245) · [Before (L5245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5245)

```diff
-               md.error(`You must initialize PostHog before calling ${dd}`)
+               Mb.error(`You must initialize PostHog before calling ${bb}`)
```

#### 77. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5247` → after: `L5247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR5247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L5247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5247) · [Before (L5247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5247)

```diff
-             createLogger: (Od, md) => VF(`${dd} ${Od}`, md)
+             createLogger: (wb, Mb) => YH(`${bb} ${wb}`, Mb)
```

#### 78. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5266` → after: `L5266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR5266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L5266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5266) · [Before (L5266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5266)

```diff
-         } = null != Wd ? Wd : {};
+         } = null != eb ? eb : {};
```

#### 79. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5280` → after: `L5280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR5280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L5280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5280) · [Before (L5280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5280)

```diff
-           if (oF(dd)) return null !== (Od = dd.__posthog_layer__) && void 0 !== Od ? Od : dd.__rrweb_layer__
+           if (IH(bb)) return null !== (wb = bb.__posthog_layer__) && void 0 !== wb ? wb : bb.__rrweb_layer__
```

#### 80. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5347` → after: `L5347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR5347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L5347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5347) · [Before (L5347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5347)

```diff
-             return HF(dd) && dd ? dd : Od
+             return tH(bb) && bb ? bb : wb
```

#### 81. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5374` → after: `L5374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR5374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L5374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5374) · [Before (L5374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5374)

```diff
-         return Math.min(dR, null !== (Od = dd.payloadSizeLimitBytes) && void 0 !== Od ? Od : dR)
+         return Math.min(TH, null !== (wb = bb.payloadSizeLimitBytes) && void 0 !== wb ? wb : TH)
```

#### 82. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5406` → after: `L5406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR5406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L5406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5406) · [Before (L5406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5406)

```diff
-         return HF(Fd) && (Fd = parseInt(Fd)), Fd > md ? `[SessionRecording] ${Wd} body too large to record (${Fd} bytes)` : dd
+         return tH(Hb) && (Hb = parseInt(Hb)), Hb > Mb ? `[SessionRecording] ${eb} body too large to record (${Hb} bytes)` : bb
```

#### 83. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5506` → after: `L5506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR5506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L5506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5506) · [Before (L5506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5506)

```diff
-         return pF(Xd) ? Xd : Rd(Xd)
+         return BH(Vb) ? Vb : pb(Vb)
```

#### 84. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5608` → after: `L5608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR5608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L5608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5608) · [Before (L5608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5608)

```diff
-         return `${BR}: ${dd}`
+         return `${rp}: ${bb}`
```

#### 85. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5612` → after: `L5612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR5612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L5612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5612) · [Before (L5612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5612)

```diff
-         return `[SessionReplay] Body too large to record (> ${dd} bytes)`
+         return `[SessionReplay] Body too large to record (> ${bb} bytes)`
```

#### 86. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5739` → after: `L5739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR5739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L5739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5739) · [Before (L5739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5739)

```diff
-             if (Rd && Xd) return `Content-Type ${Rd} is not supported`;
+             if (pb && Vb) return `Content-Type ${pb} is not supported`;
```

#### 87. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6110` → after: `L6110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR6110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L6110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6110) · [Before (L6110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6110)

```diff
-         return 0 === Od ? qX : (null == dd ? void 0 : dd.get_property(md ? Wd + md : Fd)) === Rd ? oX : NX
+         return 0 === wb ? tV : (null == bb ? void 0 : bb.get_property(Mb ? eb + Mb : Hb)) === pb ? OV : UV
```

#### 88. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6116` → after: `L6116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR6116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L6116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6116) · [Before (L6116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6116)

```diff
-           return "regex" === Od.matching && (null !== (Wd = null == md ? void 0 : md.get(Od.url)) && void 0 !== Wd ? Wd : new RegExp(Od.url)).test(dd)
+           return "regex" === wb.matching && (null !== (eb = null == Mb ? void 0 : Mb.get(wb.url)) && void 0 !== eb ? eb : new RegExp(wb.url)).test(bb)
```

#### 89. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6121` → after: `L6121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR6121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L6121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6121) · [Before (L6121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6121)

```diff
-         return dd.includes("trigger_activated") ? oX : dd.includes("trigger_pending") ? NX : qX
+         return bb.includes("trigger_activated") ? OV : bb.includes("trigger_pending") ? UV : tV
```

#### 90. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6268` → after: `L6268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR6268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L6268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6268) · [Before (L6268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6268)

```diff
-                   Rd = pF(Od) ? !0 === Od : md ? Od === md : !!Od
+                   pb = BH(wb) ? !0 === wb : Mb ? wb === Mb : !!wb
```

#### 91. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6381` → after: `L6381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR6381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L6381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6381) · [Before (L6381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6381)

```diff
-         return Od ? KX : "trigger_activated" === md ? hX : "trigger_pending" === md ? vX : !1 === dd.isSampled ? XX : hX
+         return wb ? VV : "trigger_activated" === Mb ? gV : "trigger_pending" === Mb ? lV : !1 === bb.isSampled ? pV : gV
```

#### 92. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6392` → after: `L6392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR6392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L6392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6392) · [Before (L6392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6392)

```diff
-         return md && "trigger_pending" === Od ? vX : md && "trigger_disabled" === Od || Wd && !dd.isSampled ? XX : !0 === dd.isSampled ? KX : hX
+         return Mb && "trigger_pending" === wb ? lV : Mb && "trigger_disabled" === wb || eb && !bb.isSampled ? pV : !0 === bb.isSampled ? VV : gV
```

#### 93. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6520` → after: `L6520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR6520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L6520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6520) · [Before (L6520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6520)

```diff
-           var Wd = new(dd instanceof AX ? AX : dd instanceof rX ? rX : iX)(md - Od);
+           var eb = new(bb instanceof AV ? AV : bb instanceof WV ? WV : fV)(Mb - wb);
```

#### 94. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6696` → after: `L6696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR6696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L6696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6696) · [Before (L6696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6696)

```diff
-           }, this.vt = dd => this._rrweb.mirror.QFd(dd), this.bt = dd => {
+           }, this.vt = bb => this._rrweb.mirror.OHb(bb), this.bt = bb => {
```

#### 95. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6698` → after: `L6698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR6698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L6698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6698) · [Before (L6698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6698)

```diff
-             return (null !== (Od = null === (md = dd.removes) || void 0 === md ? void 0 : md.length) && void 0 !== Od ? Od : 0) + (null !== (Wd = null === (Fd = dd.attributes) || void 0 === Fd ? void 0 : Fd.length) && void 0 !== Wd ? Wd : 0) + (null !== (Rd = null === (Xd = dd.te … [truncated]
+             return (null !== (wb = null === (Mb = bb.removes) || void 0 === Mb ? void 0 : Mb.length) && void 0 !== wb ? wb : 0) + (null !== (eb = null === (Hb = bb.attributes) || void 0 === Hb ? void 0 : Hb.length) && void 0 !== eb ? eb : 0) + (null !== (pb = null === (Vb = bb.te … [truncated]
```

#### 96. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6728-L6729` → after: `L6728-L6729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR6728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L6728-L6729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6728-L6729) · [Before (L6728-L6729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6728-L6729)

```diff
-             bucketSize: null !== (md = this.it.bucketSize) && void 0 !== md ? md : 100,
-             refillRate: null !== (Wd = this.it.refillRate) && void 0 !== Wd ? Wd : 10,
+             bucketSize: null !== (Mb = this.it.bucketSize) && void 0 !== Mb ? Mb : 100,
+             refillRate: null !== (eb = this.it.refillRate) && void 0 !== eb ? eb : 10,
```

#### 97. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6733` → after: `L6733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR6733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L6733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6733) · [Before (L6733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6733)

```diff
-           }), this.dt = null !== (Fd = this.it.bytesBucketSize) && void 0 !== Fd ? Fd : 0, this.ht = null !== (Rd = this.it.bytesRefillRate) && void 0 !== Rd ? Rd : 25600, this.kt = !Number.isFinite(this.dt) || 0 >= this.dt, this.ct = this.dt;
+           }), this.dt = null !== (Hb = this.it.bytesBucketSize) && void 0 !== Hb ? Hb : 0, this.ht = null !== (pb = this.it.bytesRefillRate) && void 0 !== pb ? pb : 25600, this.kt = !Number.isFinite(this.dt) || 0 >= this.dt, this.ct = this.dt;
```

#### 98. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6735` → after: `L6735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR6735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L6735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6735) · [Before (L6735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6735)

```diff
-           this.xt = TF(Xd) && Number.isFinite(Xd) && Xd > 0 ? Xd : 3e5
+           this.xt = FH(Vb) && Number.isFinite(Vb) && Vb > 0 ? Vb : 3e5
```

#### 99. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6858` → after: `L6858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR6858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L6858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6858) · [Before (L6858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6858)

```diff
-           const Wd = "person" === dd.type ? md : Od,
+           const eb = "person" === bb.type ? Mb : wb,
```

#### 100. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6869` → after: `L6869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR6869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L6869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6869) · [Before (L6869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6869)

```diff
-         return Od ? dd : "!" + dd
+         return wb ? bb : "!" + bb
```

#### 101. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6904` → after: `L6904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR6904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L6904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6904) · [Before (L6904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6904)

```diff
-             return TF(md) ? md : null
+             return FH(Mb) ? Mb : null
```
