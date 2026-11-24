# Changed — Bundle Modifications Report (Part 081 / 140)

- **Updated at**: `2026-11-24T17:23 JST`
- **Part**: `81 / 140` (**446** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 080](part-080.md) · [Part 082 →](part-082.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/85.js` (mpd96o.85ad4551 → tz47m9.2cb7e113 · continued)

- **File**: `bundles/bloxd.io/chunks/js/85.js` (2363 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20)

#### 700. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L7744` → after: `L7744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R7744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L7744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L7744) · [Before (L7744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L7744)

```diff
-               for (const fm of [...mm.creates, ...mm.updates, ...mm.deletes])(0, PA.b)(fm) || (fm in Tm ? this.lastLobbySeen[fm] = Tm[fm] : delete this.lastLobbySeen[fm]);
+               for (const wD of [...DD.creates, ...DD.updates, ...DD.deletes])(0, ls.c)(wD) || (wD in zD ? this.lastLobbySeen[wD] = zD[wD] : delete this.lastLobbySeen[wD]);
```

#### 701. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L7757-L7758` → after: `L7757-L7758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R7757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L7757-L7758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L7757-L7758) · [Before (L7757-L7758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L7757-L7758)

```diff
-           for (const fm of Object.keys(mm)) fm in Tm || await (0, LA.x)(this.handle, fm);
-           for (const [fm, hm] of Object.entries(Tm)) mm[fm] !== hm && await (0, LA.K)(this.handle, fm, hm)
+           for (const wD of Object.keys(DD)) wD in zD || await (0, us.z)(this.handle, wD);
+           for (const [wD, pD] of Object.entries(zD)) DD[wD] !== pD && await (0, us.M)(this.handle, wD, pD)
```

#### 702. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L7773` → after: `L7773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R7773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L7773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L7773) · [Before (L7773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L7773)

```diff
-               if (Tm in mm) await (0, LA.K)(this.handle, Tm, mm[Tm]), this.lastSynced = {
+               if (zD in DD) await (0, us.M)(this.handle, zD, DD[zD]), this.lastSynced = {
```

#### 703. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L7781` → after: `L7781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R7781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L7781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L7781) · [Before (L7781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L7781)

```diff
-                 await (0, LA.x)(this.handle, Tm);
+                 await (0, us.z)(this.handle, zD);
```

#### 704. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L7817` → after: `L7817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R7817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L7817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L7817) · [Before (L7817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L7817)

```diff
-         for (const im of Am.creates)(0, PA.b)(im) || (this.bridge.createFile(im, {
+         for (const gD of sD.creates)(0, ls.c)(gD) || (this.bridge.createFile(gD, {
```

#### 705. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L7820` → after: `L7820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R7820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L7820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L7820) · [Before (L7820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L7820)

```diff
-         for (const im of am)(0, PA.b)(im) || (this.bridge.deleteFile(im), await this.bridge.waitForLobbyPath(im, !1));
+         for (const gD of KD)(0, ls.c)(gD) || (this.bridge.deleteFile(gD), await this.bridge.waitForLobbyPath(gD, !1));
```

#### 706. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L7822` → after: `L7822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R7822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L7822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L7822) · [Before (L7822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L7822)

```diff
-           if (this.bridge.createFile(zA.i, {
+           if (this.bridge.createFile(Vs.f, {
```

#### 707. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L7824-L7825` → after: `L7824-L7825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R7824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L7824-L7825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L7824-L7825) · [Before (L7824-L7825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L7824-L7825)

```diff
-             }), await this.bridge.waitForLobbyPath(zA.i, !0), !this.handle) return;
-           await (0, LA.K)(this.handle, zA.i, ""), mm = {
+             }), await this.bridge.waitForLobbyPath(Vs.f, !0), !this.handle) return;
+           await (0, us.M)(this.handle, Vs.f, ""), DD = {
```

#### 708. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L7827` → after: `L7827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R7827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L7827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L7827) · [Before (L7827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L7827)

```diff
-             [zA.i]: ""
+             [Vs.f]: ""
```

#### 709. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L7831` → after: `L7831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R7831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L7831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L7831) · [Before (L7831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L7831)

```diff
-         for (const im of Object.keys(mm))(0, PA.b)(im) || xm[im] !== mm[im] && await gA(this.bridge, im, mm[im]);
+         for (const gD of Object.keys(DD))(0, ls.c)(gD) || rD[gD] !== DD[gD] && await Hs(this.bridge, gD, DD[gD]);
```

#### 710. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L7833` → after: `L7833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R7833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L7833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L7833) · [Before (L7833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L7833)

```diff
-           Dm = fm in wm ? fm : null !== (Tm = (0, kA.e)(wm)) && void 0 !== Tm ? Tm : zA.i;
+           cD = wD in LD ? wD : null !== (zD = (0, Cs.e)(LD)) && void 0 !== zD ? zD : Vs.f;
```

#### 711. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L7841` → after: `L7841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R7841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L7841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L7841) · [Before (L7841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L7841)

```diff
-         for (const xm of Am.creates)(0, PA.b)(xm) || (xm in this.bridge.getLobbyFiles() || (this.bridge.createFile(xm, {
+         for (const rD of sD.creates)(0, ls.c)(rD) || (rD in this.bridge.getLobbyFiles() || (this.bridge.createFile(rD, {
```

#### 712. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L7844-L7845` → after: `L7844-L7845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R7844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L7844-L7845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L7844-L7845) · [Before (L7844-L7845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L7844-L7845)

```diff
-         for (const xm of am)(0, PA.b)(xm) ? await this.bridge.deleteSchematic(xm) : (this.bridge.deleteFile(xm), await this.bridge.waitForLobbyPath(xm, !1));
-         for (const xm of Am.updates)(0, PA.b)(xm) || await gA(this.bridge, xm, mm[xm]);
+         for (const rD of KD)(0, ls.c)(rD) ? await this.bridge.deleteSchematic(rD) : (this.bridge.deleteFile(rD), await this.bridge.waitForLobbyPath(rD, !1));
+         for (const rD of sD.updates)(0, ls.c)(rD) || await Hs(this.bridge, rD, DD[rD]);
```

#### 713. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L7849` → after: `L7849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R7849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L7849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L7849) · [Before (L7849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L7849)

```diff
-     var FA = fm(1214);
+     var DK = wD(1211);
```

#### 714. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L7869` → after: `L7869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R7869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L7869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L7869) · [Before (L7869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L7869)

```diff
-       return await (0, cA.postBinaryWithMetricsCookiesAndCustomResponse)(`${Tm}/code/schematics`, JA.rk.schematics.toBuffer({
+       return await (0, Xs.postBinaryWithMetricsCookiesAndCustomResponse)(`${zD}/code/schematics`, Qs.wk.schematics.toBuffer({
```

#### 715. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L7877` → after: `L7877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R7877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L7877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L7877) · [Before (L7877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L7877)

```diff
-     var fa = fm(36430);
+     var pK = wD(36330);
```

#### 716. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L7891` → after: `L7891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R7891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L7891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L7891) · [Before (L7891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L7891)

```diff
-           mm || am(`data:image/webp;base64,${Tm.previewBase64}`)
+           DD || KD(`data:image/webp;base64,${zD.previewBase64}`)
```

#### 717. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L7901-L7902` → after: `L7901-L7902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R7901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L7901-L7902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L7901-L7902) · [Before (L7901-L7902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L7901-L7902)

```diff
-           alt: `Preview of ${Tm}`
-         }), !hm && !xm && (0, Rm.jsx)(km.c, {
+           alt: `Preview of ${zD}`
+         }), !pD && !rD && (0, RD.jsx)(CD.e, {
```

#### 718. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L7909` → after: `L7909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R7909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L7909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L7909) · [Before (L7909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L7909)

```diff
-           }), (0, Rm.jsx)(om.e, {
+           }), (0, RD.jsx)(fD.f, {
```

#### 719. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L7918` → after: `L7918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R7918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L7918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L7918) · [Before (L7918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L7918)

```diff
-     var Aa = fm(3139);
+     var KK = wD(3128);
```

#### 720. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L7948` → after: `L7948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R7948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L7948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L7948) · [Before (L7948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L7948)

```diff
-         km = Object.keys(null !== (Tm = null === wm || void 0 === wm ? void 0 : wm.assets) && void 0 !== Tm ? Tm : {}).length,
+         CD = Object.keys(null !== (zD = null === LD || void 0 === LD ? void 0 : LD.assets) && void 0 !== zD ? zD : {}).length,
```

#### 721. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L7950-L7951` → after: `L7950-L7951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R7950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L7950-L7951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L7950-L7951) · [Before (L7950-L7951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L7950-L7951)

```diff
-         Sm = bm ? (0, PA.b)(bm) ? null !== wm && void 0 !== wm && wm.assets[bm] && (xm || bm !== fm) ? "A schematic already uses that path." : "" : "Use a relative path ending in .bloxdschem." : "",
-         em = !!bm && !Sm && (xm ? km < PA.c : bm !== fm),
+         TD = xD ? (0, ls.c)(xD) ? null !== LD && void 0 !== LD && LD.assets[xD] && (rD || xD !== wD) ? "A schematic already uses that path." : "" : "Use a relative path ending in .bloxdschem." : "",
+         bD = !!xD && !TD && (rD ? CD < ls.f : xD !== wD),
```

#### 722. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L7964` → after: `L7964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R7964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L7964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L7964) · [Before (L7964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L7964)

```diff
-             if (console.error("Schematic asset operation failed", fm), zm.current) nm(fm instanceof Bm.d ? null !== (Tm = fm.errorMessageForUser) && void 0 !== Tm ? Tm : fm.message : String(fm));
+             if (console.error("Schematic asset operation failed", wD), VD.current) ED(wD instanceof oD.c ? null !== (zD = wD.errorMessageForUser) && void 0 !== zD ? zD : wD.message : String(wD));
```

#### 723. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8015` → after: `L8015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8015) · [Before (L8015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8015)

```diff
-             children: [km >= PA.c && (0, Rm.jsxs)("div", {
+             children: [CD >= ls.f && (0, RD.jsxs)("div", {
```

#### 724. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8017` → after: `L8017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8017) · [Before (L8017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8017)

```diff
-               children: ["Delete a schematic before adding another (", PA.c, " maximum)."]
+               children: ["Delete a schematic before adding another (", ls.f, " maximum)."]
```

#### 725. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8027` → after: `L8027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8027) · [Before (L8027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8027)

```diff
-                   schematics: null !== jm && void 0 !== jm ? jm : [],
+                   schematics: null !== hD && void 0 !== hD ? hD : [],
```

#### 726. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8039` → after: `L8039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8039) · [Before (L8039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8039)

```diff
-                 children: (0, Rm.jsx)(om.e, {
+                 children: (0, RD.jsx)(fD.f, {
```

#### 727. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8050` → after: `L8050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8050) · [Before (L8050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8050)

```diff
-               children: [(0, Rm.jsx)(om.e, {
+               children: [(0, RD.jsx)(fD.f, {
```

#### 728. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8057` → after: `L8057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8057) · [Before (L8057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8057)

```diff
-               }), (0, Rm.jsx)(om.e, {
+               }), (0, RD.jsx)(fD.f, {
```

#### 729. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8063` → after: `L8063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8063) · [Before (L8063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8063)

```diff
-                       const mm = await (0, cA.postJsonWithMetricsCookiesAndJsonResponse)(`${FA.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
+                       const DD = await (0, Xs.postJsonWithMetricsCookiesAndJsonResponse)(`${DK.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
```

#### 730. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8084` → after: `L8084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8084) · [Before (L8084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8084)

```diff
-                 if (fm.size > PA.e) return void nm("The schematic file is too large.");
+                 if (wD.size > ls.g) return void ED("The schematic file is too large.");
```

#### 731. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8109` → after: `L8109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8109) · [Before (L8109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8109)

```diff
-                 children: [(0, Rm.jsx)(om.e, {
+                 children: [(0, RD.jsx)(fD.f, {
```

#### 732. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8120` → after: `L8120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8120) · [Before (L8120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8120)

```diff
-                 }), (0, Rm.jsx)(om.e, {
+                 }), (0, RD.jsx)(fD.f, {
```

#### 733. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8129` → after: `L8129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8129) · [Before (L8129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8129)

```diff
-                 children: [(0, Rm.jsx)(om.e, {
+                 children: [(0, RD.jsx)(fD.f, {
```

#### 734. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8136` → after: `L8136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8136) · [Before (L8136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8136)

```diff
-                 }), (0, Rm.jsx)(om.O, {
+                 }), (0, RD.jsx)(fD.R, {
```

#### 735. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8161` → after: `L8161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8161) · [Before (L8161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8161)

```diff
-         return (0, kA.n)(null === Tm || void 0 === Tm ? void 0 : Tm.worldCodeEngine) && "boolean" === typeof Tm.engineLocked && function(mm) {
+         return (0, Cs.i)(null === zD || void 0 === zD ? void 0 : zD.worldCodeEngine) && "boolean" === typeof zD.engineLocked && function(DD) {
```

#### 736. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8165` → after: `L8165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8165) · [Before (L8165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8165)

```diff
-         }(Tm.fallback) ? Tm : (console.error("[CodeCollab] Malformed engine settings", mm), null)
+         }(zD.fallback) ? zD : (console.error("[CodeCollab] Malformed engine settings", DD), null)
```

#### 737. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8178` → after: `L8178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8178) · [Before (L8178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8178)

```diff
-       } = (0, dm.A)(), {
+       } = (0, tD.E)(), {
```

#### 738. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8199-L8201` → after: `L8199-L8201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8199-L8201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8199-L8201) · [Before (L8199-L8201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8199-L8201)

```diff
-     var Da = fm(4881),
-       ia = fm(4304),
-       Ra = fm(36980);
+     var gK = wD(4954),
+       RK = wD(4395),
+       AK = wD(36835);
```

#### 739. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8222` → after: `L8222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8222) · [Before (L8222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8222)

```diff
-           children: (0, Rm.jsx)(ia.b, {
+           children: (0, RD.jsx)(RK.d, {
```

#### 740. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8243` → after: `L8243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8243) · [Before (L8243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8243)

```diff
-       } = (0, dm.A)(), [xm, wm] = (0, Ra.j)(Ra.e);
+       } = (0, tD.E)(), [rD, LD] = (0, AK.k)(AK.f);
```

#### 741. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8261` → after: `L8261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8261) · [Before (L8261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8261)

```diff
-         }), hm && Ra.e.canChange && (0, Rm.jsx)(pa, {
+         }), pD && AK.f.canChange && (0, RD.jsx)(UK, {
```

#### 742. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8277` → after: `L8277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8277) · [Before (L8277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8277)

```diff
-           children: [(0, Rm.jsx)(Da.h, {
+           children: [(0, RD.jsx)(gK.e, {
```

#### 743. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8286` → after: `L8286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8286) · [Before (L8286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8286)

```diff
-           }), (0, Rm.jsx)(om.v, {
+           }), (0, RD.jsx)(fD.B, {
```

#### 744. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8294-L8295` → after: `L8294-L8295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8294-L8295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8294-L8295) · [Before (L8294-L8295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8294-L8295)

```diff
-     var oa = fm(36986),
-       Oa = fm(36992);
+     var IK = wD(36841),
+       BK = wD(36845);
```

#### 745. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8303` → after: `L8303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8303) · [Before (L8303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8303)

```diff
-       } = (0, dm.A)(), hm = [{
+       } = (0, tD.E)(), pD = [{
```

#### 746. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8320` → after: `L8320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8320) · [Before (L8320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8320)

```diff
-           children: hm.map((mm => (0, Rm.jsx)(om.e, {
+           children: pD.map((DD => (0, RD.jsx)(fD.f, {
```

#### 747. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8323` → after: `L8323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8323) · [Before (L8323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8323)

```diff
-               Tm(), (0, Oa.D)(mm.tutorial)
+               zD(), (0, BK.G)(DD.tutorial)
```

#### 748. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8330-L8332` → after: `L8330-L8332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8330-L8332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8330-L8332) · [Before (L8330-L8332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8330-L8332)

```diff
-     var qa = fm(115),
-       ja = fm(36626),
-       Va = fm(8712);
+     var hK = wD(116),
+       nK = wD(36535),
+       MK = wD(8796);
```

#### 749. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8347` → after: `L8347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8347) · [Before (L8347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8347)

```diff
-       } = (0, dm.A)(), Om = "" !== fm.trim(), Ym = () => {
+       } = (0, tD.E)(), ID = "" !== wD.trim(), BD = () => {
```

#### 750. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8367` → after: `L8367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8367) · [Before (L8367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8367)

```diff
-         }), (0, Rm.jsx)(om.e, {
+         }), (0, RD.jsx)(fD.f, {
```

#### 751. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8372` → after: `L8372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8372) · [Before (L8372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8372)

```diff
-           children: (0, Rm.jsx)(qm.c, {
+           children: (0, RD.jsx)(GD.e, {
```

#### 752. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8385` → after: `L8385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8385) · [Before (L8385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8385)

```diff
-       } = (0, dm.A)(), {
+       } = (0, tD.E)(), {
```

#### 753. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8389` → after: `L8389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8389) · [Before (L8389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8389)

```diff
-       } = (0, Va.n)(), [wm, Dm] = (0, Am.useState)(""), im = (0, Am.useRef)({
+       } = (0, MK.o)(), [LD, cD] = (0, sD.useState)(""), gD = (0, sD.useRef)({
```

#### 754. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8420` → after: `L8420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8420) · [Before (L8420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8420)

```diff
-           maxLength: zm.Vc,
+           maxLength: VD.cd,
```

#### 755. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8422` → after: `L8422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8422) · [Before (L8422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8422)

```diff
-           placeholder: xm ? fm("touchOnly" === (0, qa.d)() ? "codeEditorChat:channelPlaceholderTouch" : "codeEditorChat:channelPlaceholder", {
+           placeholder: rD ? wD("touchOnly" === (0, hK.e)() ? "codeEditorChat:channelPlaceholderTouch" : "codeEditorChat:channelPlaceholder", {
```

#### 756. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8432` → after: `L8432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8432) · [Before (L8432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8432)

```diff
-               Va.c.selectNextChannel(), Tm.current.focus()
+               MK.d.selectNextChannel(), zD.current.focus()
```

#### 757. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8434` → after: `L8434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8434) · [Before (L8434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8434)

```diff
-             children: (0, Rm.jsx)(Jm.b, {
+             children: (0, RD.jsx)(QD.e, {
```

#### 758. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8440` → after: `L8440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8440) · [Before (L8440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8440)

```diff
-             if ("ArrowUp" !== mm.key && "ArrowDown" !== mm.key || !Tm && "" !== wm) "Tab" === mm.key && !mm.shiftKey && xm && (mm.preventDefault(), Va.c.selectNextChannel());
+             if ("ArrowUp" !== DD.key && "ArrowDown" !== DD.key || !zD && "" !== LD) "Tab" === DD.key && !DD.shiftKey && rD && (DD.preventDefault(), MK.d.selectNextChannel());
```

#### 759. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8444` → after: `L8444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8444) · [Before (L8444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8444)

```diff
-               im.current = (0, Va.k)(fm + ("ArrowUp" === mm.key ? 1 : -1)), Dm(im.current.text)
+               gD.current = (0, MK.j)(wD + ("ArrowUp" === DD.key ? 1 : -1)), cD(gD.current.text)
```

#### 760. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8450` → after: `L8450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8450) · [Before (L8450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8450)

```diff
-     var Qa = fm(36997);
+     var EK = wD(36849);
```

#### 761. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8459` → after: `L8459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8459) · [Before (L8459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8459)

```diff
-         oE: fm,
+         KU: wD,
```

#### 762. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8470` → after: `L8470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8470) · [Before (L8470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8470)

```diff
-         covers: null !== (Tm = na(fm)) && void 0 !== Tm ? Tm : am ? "narrow" : void 0,
+         covers: null !== (zD = QK(wD)) && void 0 !== zD ? zD : KD ? "narrow" : void 0,
```

#### 763. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8484-L8486` → after: `L8484-L8486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8484-L8486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8484-L8486) · [Before (L8484-L8486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8484-L8486)

```diff
-     var ca = fm(1950),
-       za = fm(1154),
-       Za = fm(1296);
+     var VK = wD(1977),
+       PK = wD(1119),
+       CK = wD(1309);
```

#### 764. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8493` → after: `L8493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8493) · [Before (L8493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8493)

```diff
-         return null !== (mm = null === (Tm = this.last) || void 0 === Tm ? void 0 : Tm.rect) && void 0 !== mm ? mm : null
+         return null !== (DD = null === (zD = this.last) || void 0 === zD ? void 0 : zD.rect) && void 0 !== DD ? DD : null
```

#### 765. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8537` → after: `L8537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8537) · [Before (L8537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8537)

```diff
-         ]) void 0 === hm ? Tm.removeProperty(fm) : Tm.setProperty(fm, `${hm}px`)
+         ]) void 0 === pD ? zD.removeProperty(wD) : zD.setProperty(wD, `${pD}px`)
```

#### 766. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8539-L8540` → after: `L8539-L8540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8539-L8540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8539-L8540) · [Before (L8539-L8540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8539-L8540)

```diff
-     var Sa = fm(1713),
-       ea = fm(1966);
+     var bK = wD(1737),
+       jK = wD(1985);
```

#### 767. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8547` → after: `L8547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8547) · [Before (L8547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8547)

```diff
-           "Escape" === mm.key ? (mm.stopPropagation(), mm.preventDefault(), Tm()) : (fm = mm.code, Object.entries(BT.r).some((mm => {
+           "Escape" === DD.key ? (DD.stopPropagation(), DD.preventDefault(), zD()) : (wD = DD.code, Object.entries(ez.u).some((DD => {
```

#### 768. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8554` → after: `L8554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8554) · [Before (L8554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8554)

```diff
-         const hm = (0, sm.l)(Tm);
+         const pD = (0, yD.p)(zD);
```

#### 769. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8562` → after: `L8562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8562) · [Before (L8562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8562)

```diff
-       return (0, EA.i)().some((mm => mm !== EA.c))
+       return (0, As.k)().some((DD => DD !== As.b))
```

#### 770. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8577` → after: `L8577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8577) · [Before (L8577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8577)

```diff
-       } = (0, dm.A)(), xm = (0, Am.useRef)(null), wm = (0, Am.useRef)(null);
+       } = (0, tD.E)(), rD = (0, sD.useRef)(null), LD = (0, sD.useRef)(null);
```

#### 771. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8584` → after: `L8584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8584) · [Before (L8584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8584)

```diff
-             mm(xm.current, Xa(null !== fm && void 0 !== fm ? fm : im.gameBridge.lookup("localPos", null), !1));
+             DD(rD.current, iK(null !== wD && void 0 !== wD ? wD : gD.gameBridge.lookup("localPos", null), !1));
```

#### 772. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8588` → after: `L8588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8588) · [Before (L8588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8588)

```diff
-         return fm(), (0, Za.q)(fm)
+         return wD(), (0, CK.w)(wD)
```

#### 773. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8612-L8613` → after: `L8612-L8613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8612-L8613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8612-L8613) · [Before (L8612-L8613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8612-L8613)

```diff
-     var Ha = fm(36999),
-       ya = fm(1473);
+     var WK = wD(36855),
+       NK = wD(1467);
```

#### 774. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8630` → after: `L8630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8630) · [Before (L8630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8630)

```diff
-         const Am = (0, Za.m)((Tm => {
+         const sD = (0, CK.u)((zD => {
```

#### 775. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8637` → after: `L8637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8637) · [Before (L8637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8637)

```diff
-           (Dm = wm) === (Rm = mm) || null !== Dm && null !== Rm && Dm.name === Rm.name && (0, Ha.i)(Dm.pos, Rm.pos) && (0, Ha.i)(Dm.normal, Rm.normal) || (mm = wm, am(wm), im.gameBridge.send("setBlockHighlight", wm))
+           (cD = LD) === (RD = DD) || null !== cD && null !== RD && cD.name === RD.name && (0, WK.f)(cD.pos, RD.pos) && (0, WK.f)(cD.normal, RD.normal) || (DD = LD, KD(LD), gD.gameBridge.send("setBlockHighlight", LD))
```

#### 776. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8652` → after: `L8652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8652) · [Before (L8652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8652)

```diff
-         Rm = Tm ? (0, ya.d)(Dm, "pointerup") : null,
+         RD = zD ? (0, NK.g)(cD, "pointerup") : null,
```

#### 777. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8688` → after: `L8688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8688) · [Before (L8688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8688)

```diff
-       } = (0, dm.A)(), {
+       } = (0, tD.E)(), {
```

#### 778. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8690` → after: `L8690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8690) · [Before (L8690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8690)

```diff
-       } = (0, rm.m)(["isTouchScreen"]), wm = (0, Am.useRef)(null), im = (0, Am.useCallback)((() => {
+       } = (0, ZD.n)(["isTouchScreen"]), LD = (0, sD.useRef)(null), gD = (0, sD.useCallback)((() => {
```

#### 779. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8703` → after: `L8703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8703) · [Before (L8703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8703)

```diff
-           "none" !== Tm && (wm("none"), (0, EA.p)(EA.c), "mouse" === Tm && mm())
+           "none" !== zD && (LD("none"), (0, As.p)(As.b), "mouse" === zD && DD())
```

#### 780. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8705` → after: `L8705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8705) · [Before (L8705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8705)

```diff
-           Ga() ? xm(!0) : (wm("mouse" === mm && "touchOnly" !== (0, qa.d)() ? "mouse" : "touch"), (0, EA.l)(EA.c))
+           SK() ? rD(!0) : (LD("mouse" === DD && "touchOnly" !== (0, hK.e)() ? "mouse" : "touch"), (0, As.o)(As.b))
```

#### 781. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8708` → after: `L8708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8708) · [Before (L8708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8708)

```diff
-           mm && "touch" === hm.current && "touchOnly" !== (0, qa.d)() ? wm("mouse") : mm || "mouse" !== hm.current || Dm()
+           DD && "touch" === pD.current && "touchOnly" !== (0, hK.e)() ? LD("mouse") : DD || "mouse" !== pD.current || cD()
```

#### 782. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8726` → after: `L8726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8726) · [Before (L8726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8726)

```diff
-           "none" !== hm.current && null !== rm.c.get("openInGameMenuName") && (0, EA.p)(EA.c)
+           "none" !== pD.current && null !== ZD.e.get("openInGameMenuName") && (0, As.p)(As.b)
```

#### 783. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8733` → after: `L8733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8733) · [Before (L8733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8733)

```diff
-       }(im), Vm = (0, za.l)(Qa.d);
+       }(gD), nD = (0, PK.p)(EK.d);
```

#### 784. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8744` → after: `L8744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8744) · [Before (L8744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8744)

```diff
-             "none" !== fm.current && ba(null !== (Tm = null === mm || void 0 === mm ? void 0 : mm.rect) && void 0 !== Tm ? Tm : null), (0, Za.s)().setGameView(mm)
+             "none" !== wD.current && TK(null !== (zD = null === DD || void 0 === DD ? void 0 : DD.rect) && void 0 !== zD ? zD : null), (0, CK.D)().setGameView(DD)
```

#### 785. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8747` → after: `L8747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8747) · [Before (L8747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8747)

```diff
-           const Am = (0, Za.l)((() => {
+           const sD = (0, CK.s)((() => {
```

#### 786. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8751` → after: `L8751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8751) · [Before (L8751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8751)

```diff
-             Am(), rm.c.set({
+             sD(), ZD.e.set({
```

#### 787. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8756` → after: `L8756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8756) · [Before (L8756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8756)

```diff
-           hm.current.sync(), ba("none" === Tm ? null : hm.current.rect), rm.c.set({
+           pD.current.sync(), TK("none" === zD ? null : pD.current.rect), ZD.e.set({
```

#### 788. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8770-L8771` → after: `L8770-L8771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8770-L8771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8770-L8771) · [Before (L8770-L8771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8770-L8771)

```diff
-         Om.j.gp("CodeEditorInsertText", {
-           text: `[${mm.join(", ")}]`,
+         ID.l.KG("CodeEditorInsertText", {
+           text: `[${DD.join(", ")}]`,
```

#### 789. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8778` → after: `L8778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8778) · [Before (L8778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8778)

```diff
-         } = (0, Zm.k)("freeCamera"), fm = (0, Am.useRef)(Tm), hm = (0, Am.useRef)(Tm);
+         } = (0, PD.i)("freeCamera"), wD = (0, sD.useRef)(zD), pD = (0, sD.useRef)(zD);
```

#### 790. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8788` → after: `L8788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8788) · [Before (L8788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8788)

```diff
-       }(), km = (0, Dm.g)("hideCoordinates"), bm = (0, Zm.k)("localPlayerAlive"), Sm = !bm || jm;
+       }(), CD = (0, cD.h)("hideCoordinates"), xD = (0, PD.i)("localPlayerAlive"), TD = !xD || hD;
```

#### 791. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8794-L8795` → after: `L8794-L8795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8794-L8795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8794-L8795) · [Before (L8794-L8795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8794-L8795)

```diff
-       const em = zm.on ? om.m : om.e,
-         Nm = Im ? om.m : om.e;
+       const bD = VD.on ? fD.o : fD.f,
+         jD = MD ? fD.o : fD.f;
```

#### 792. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8803` → after: `L8803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8803) · [Before (L8803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8803)

```diff
-           }), "touch" === pm && !Vm && (0, Rm.jsx)(om.e, {
+           }), "touch" === AD && !nD && (0, RD.jsx)(fD.f, {
```

#### 793. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8807` → after: `L8807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8807) · [Before (L8807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8807)

```diff
-           }), !Sm && zm.allowed && !xm && (0, Rm.jsx)(tm.h, {
+           }), !TD && VD.allowed && !rD && (0, RD.jsx)(uD.f, {
```

#### 794. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8815` → after: `L8815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8815) · [Before (L8815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8815)

```diff
-               children: (0, Rm.jsx)(qm.c, {
+               children: (0, RD.jsx)(GD.e, {
```

#### 795. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8819` → after: `L8819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8819) · [Before (L8819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8819)

```diff
-           }), !Sm && hm && (0, Rm.jsx)(tm.h, {
+           }), !TD && pD && (0, RD.jsx)(uD.f, {
```

#### 796. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8828` → after: `L8828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8828) · [Before (L8828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8828)

```diff
-               children: [(0, Rm.jsx)(qm.c, {
+               children: [(0, RD.jsx)(GD.e, {
```

#### 797. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8861-L8862` → after: `L8861-L8862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8861-L8862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8861-L8862) · [Before (L8861-L8862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8861-L8862)

```diff
-             }), (0, Rm.jsx)(om.e, {
-               onClick: sm.d,
+             }), (0, RD.jsx)(fD.f, {
+               onClick: yD.i,
```

#### 798. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8869` → after: `L8869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8869) · [Before (L8869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8869)

```diff
-     var Ma = fm(4970);
+     var eK = wD(5049);
```

#### 799. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8873` → after: `L8873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8873) · [Before (L8873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8873)

```diff
-         oE: Tm,
+         KU: zD,
```

#### 800. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8881` → after: `L8881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8881) · [Before (L8881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8881)

```diff
-       } = (0, dm.A)(), wm = Am ? "ai" : "hidden" !== Tm ? "world" : "code", Dm = [{
+       } = (0, tD.E)(), LD = sD ? "ai" : "hidden" !== zD ? "world" : "code", cD = [{
```

#### 801. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8894` → after: `L8894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8894) · [Before (L8894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8894)

```diff
-         children: (0, Rm.jsx)(Ma.b, {
+         children: (0, RD.jsx)(eK.e, {
```

#### 802. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8905-L8911` → after: `L8905-L8911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8905-L8911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8905-L8911) · [Before (L8905-L8911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8905-L8911)

```diff
-     var Ba = fm(37004),
-       La = fm(37008),
-       va = fm(37013),
-       ta = fm(37016);
-     const Ua = (0, Am.lazy)((() => Promise.all([fm.e(298), fm.e(294), fm.e(297), fm.e(293), fm.e(84), fm.e(296), fm.e(295), fm.e(292)]).then((() => fm(41348))))),
-       da = (0, Am.lazy)((() => Promise.all([fm.e(79), fm.e(82), fm.e(83), fm.e(81), fm.e(300)]).then((() => fm(41523))))),
-       ga = (0, Am.lazy)((() => Promise.all([fm.e(298), fm.e(297), fm.e(84), fm.e(82), fm.e(83), fm.e(81), fm.e(296), fm.e(295), fm.e(80), fm.e(90)]).then((() => fm(41528)))));
+     var aK = wD(36858),
+       uK = wD(36863),
+       vK = wD(36871),
+       tK = wD(36877);
+     const FK = (0, sD.lazy)((() => Promise.all([wD.e(298), wD.e(294), wD.e(297), wD.e(293), wD.e(84), wD.e(296), wD.e(295), wD.e(292)]).then((() => wD(41206))))),
+       YK = (0, sD.lazy)((() => Promise.all([wD.e(79), wD.e(82), wD.e(83), wD.e(81), wD.e(300)]).then((() => wD(41369))))),
+       HK = (0, sD.lazy)((() => Promise.all([wD.e(298), wD.e(297), wD.e(84), wD.e(82), wD.e(83), wD.e(81), wD.e(296), wD.e(295), wD.e(80), wD.e(90)]).then((() => wD(41373)))));
```

#### 803. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8927` → after: `L8927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8927) · [Before (L8927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8927)

```diff
-       return (0, cA.postJsonWithMetricsCookiesAndJsonResponse)(`${Tm}/code/get-lobby-code`, JA.rk["get-lobby-code"].toBuffer({
+       return (0, Xs.postJsonWithMetricsCookiesAndJsonResponse)(`${zD}/code/get-lobby-code`, Qs.wk["get-lobby-code"].toBuffer({
```

#### 804. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8957` → after: `L8957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8957) · [Before (L8957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8957)

```diff
-           Jm = Im.message ? Im : {
+           QD = MD.message ? MD : {
```

#### 805. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8962-L8963` → after: `L8962-L8963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8962-L8963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8962-L8963) · [Before (L8962-L8963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8962-L8963)

```diff
-           [em, Gm] = (0, Ra.j)(Ra.i),
-           [Xm, Pm] = (0, Ra.j)(Ra.c),
+           [bD, dD] = (0, AK.k)(AK.i),
+           [SD, iD] = (0, AK.k)(AK.e),
```

#### 806. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8979` → after: `L8979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8979) · [Before (L8979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8979)

```diff
-           } = (0, rm.m)(["openInGameMenuName", "openEverythingMenuName", "worldPanelHud"]),
+           } = (0, ZD.n)(["openInGameMenuName", "openEverythingMenuName", "worldPanelHud"]),
```

#### 807. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8984` → after: `L8984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8984) · [Before (L8984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8984)

```diff
-           mT("IO")
+           qD("sI")
```

#### 808. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8989` → after: `L8989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8989) · [Before (L8989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8989)

```diff
-           null === mm || "IO" === mm && ("makeReport" === gm || "makeDiscordReport" === gm) || "store" === mm && null !== Wm || (Lm.current = null, null === gm && null === Wm ? pm ? (Um.current = Af.current, Om.j.gp("EditLobbyCode", Ym)) : Om.j.gp("EditCodeBlock", {
+           null === DD || "sI" === DD && ("makeReport" === FD || "makeDiscordReport" === FD) || "store" === DD && null !== YD || (aD.current = null, null === FD && null === YD ? AD ? (vD.current = pw.current, ID.l.KG("EditLobbyCode", BD)) : ID.l.KG("EditCodeBlock", {
```

#### 809. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L8992` → after: `L8992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R8992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L8992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L8992) · [Before (L8992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L8992)

```diff
-           }) : (0, Oa.y)())
+           }) : (0, BK.w)())
```

#### 810. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9003` → after: `L9003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9003) · [Before (L9003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9003)

```diff
-             Tx = mm, Om.j.gp("CodeEditorAiHelperShown", mm)
+             wr = DD, ID.l.KG("CodeEditorAiHelperShown", DD)
```

#### 811. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9005-L9006` → after: `L9005-L9006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9005-L9006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9005-L9006) · [Before (L9005-L9006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9005-L9006)

```diff
-         }(), [hT, AT] = (0, Am.useState)(null), [aT, xT] = (0, Am.useState)([]), [wT, DT] = (0, Am.useState)(0), [iT, RT] = (0, Am.useState)(0), [pT, ET] = (0, Am.useState)(""), OT = (0, Am.useRef)(null), [YT, qT] = (0, Am.useState)(pm ? ta.c : null), jT = pm || null !== Ym, VT = … [truncated]
-           [zA.i]: ""
+         }(), [wz, pz] = (0, sD.useState)(null), [sz, Kz] = (0, sD.useState)([]), [rz, Lz] = (0, sD.useState)(0), [cz, gz] = (0, sD.useState)(0), [Rz, Az] = (0, sD.useState)(""), fz = (0, sD.useRef)(null), [Iz, Bz] = (0, sD.useState)(AD ? tK.f : null), Gz = AD || null !== BD, hz = … [truncated]
+           [Vs.f]: ""
```

#### 812. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9012` → after: `L9012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9012) · [Before (L9012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9012)

```diff
-           mm.revision < tT.current.revision || (tT.current = mm, vT(mm), nm(mm.startupError ? `Schematics could not load: ${mm.startupError}` : ""), null === (Tm = jf.current) || void 0 === Tm || Tm.onLobbyFilesChanged({
+           DD.revision < uz.current.revision || (uz.current = DD, az(DD), ED(DD.startupError ? `Schematics could not load: ${DD.startupError}` : ""), null === (zD = Gw.current) || void 0 === zD || zD.onLobbyFilesChanged({
```

#### 813. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9016` → after: `L9016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9016) · [Before (L9016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9016)

```diff
-         }), []), [dT, gT] = (0, Am.useState)(zA.i), [WT, FT] = (0, Am.useState)(null), [mf, Tf] = (0, Am.useState)(null), ff = (0, Am.useRef)(!1), hf = (0, Am.useRef)(null), Af = (0, Am.useRef)(dT);
+         }), []), [tz, Fz] = (0, sD.useState)(Vs.f), [Yz, Hz] = (0, sD.useState)(null), [qz, Dw] = (0, sD.useState)(null), zw = (0, sD.useRef)(!1), ww = (0, sD.useRef)(null), pw = (0, sD.useRef)(tz);
```

#### 814. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9028-L9029` → after: `L9028-L9029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9028-L9029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9028-L9029) · [Before (L9028-L9029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9028-L9029)

```diff
-           [of, Of] = (0, Am.useState)(!1),
-           Yf = (0, LA.q)(),
+           [Uw, fw] = (0, sD.useState)(!1),
+           Iw = (0, us.n)(),
```

#### 815. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9046-L9048` → after: `L9046-L9048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9046-L9048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9046-L9048) · [Before (L9046-L9048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9046-L9048)

```diff
-               va: ZA.b.Leave,
-               Ua: (0, ZA.u)(hf.current),
-               Fx: !!mm || null
+               zr: Ps.c.Leave,
+               wr: (0, Ps.p)(ww.current),
+               wL: !!DD || null
```

#### 816. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9057-L9058` → after: `L9057-L9058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9057-L9058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9057-L9058) · [Before (L9057-L9058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9057-L9058)

```diff
-               va: ZA.b.Join,
-               Ua: (0, ZA.u)(Tm)
+               zr: Ps.c.Join,
+               wr: (0, Ps.p)(zD)
```

#### 817. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9072` → after: `L9072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9072) · [Before (L9072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9072)

```diff
-                   qf.current = qf.current.filter((mm => mm !== Am)), fm(new Error(`Timed out joining ${mm}`))
+                   Bw.current = Bw.current.filter((DD => DD !== sD)), wD(new Error(`Timed out joining ${DD}`))
```

#### 818. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9085-L9086` → after: `L9085-L9086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9085-L9086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9085-L9086) · [Before (L9085-L9086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9085-L9086)

```diff
-               if (Date.now() - hm > fm) throw new Error(`Timed out waiting for lobby path ${mm} present=${Tm}`);
-               await (0, Qh.L)(50), Am = mm in Rf.current
+               if (Date.now() - pD > wD) throw new Error(`Timed out waiting for lobby path ${DD} present=${zD}`);
+               await (0, Mp.H)(50), sD = DD in gw.current
```

#### 819. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9091-L9092` → after: `L9091-L9092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9091-L9092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9091-L9092) · [Before (L9091-L9092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9091-L9092)

```diff
-               fm = zA.i in Tm && zA.j in Tm;
-             if (!(0, kA.l)(mm) || fm) {
+               wD = Vs.f in zD && Vs.g in zD;
+             if (!(0, Cs.g)(DD) || wD) {
```

#### 820. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9095` → after: `L9095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9095) · [Before (L9095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9095)

```diff
-                 const Am = fm && (0, kA.l)(mm) ? mm === zA.i ? zA.j : zA.i : null !== (hm = (0, kA.e)(Tm)) && void 0 !== hm ? hm : zA.i;
+                 const sD = wD && (0, Cs.g)(DD) ? DD === Vs.f ? Vs.g : Vs.f : null !== (pD = (0, Cs.e)(zD)) && void 0 !== pD ? pD : Vs.f;
```

#### 821. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9102-L9103` → after: `L9102-L9103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9102-L9103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9102-L9103) · [Before (L9102-L9103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9102-L9103)

```diff
-                 va: ZA.b.DeleteFile,
-                 Ua: (0, ZA.u)({
+                 zr: Ps.c.DeleteFile,
+                 wr: (0, Ps.p)({
```

#### 822. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9107` → after: `L9107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9107) · [Before (L9107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9107)

```diff
-                 mw: mm
+                 pL: DD
```

#### 823. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9115-L9116` → after: `L9115-L9116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9115-L9116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9115-L9116) · [Before (L9115-L9116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9115-L9116)

```diff
-             const fm = GA.e[mm],
-               hm = fm && Tm in fm.files ? Tm : "index.ts";
+             const wD = Ss.h[DD],
+               pD = wD && zD in wD.files ? zD : "index.ts";
```

#### 824. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9136` → after: `L9136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9136) · [Before (L9136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9136)

```diff
-               bf(null !== (xm = (0, kA.e)(mm)) && void 0 !== xm ? xm : zA.i)
+               Pw(null !== (rD = (0, Cs.e)(DD)) && void 0 !== rD ? rD : Vs.f)
```

#### 825. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9179-L9180` → after: `L9179-L9180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9179-L9180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9179-L9180) · [Before (L9179-L9180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9179-L9180)

```diff
-               va: ZA.b.Submit,
-               Ua: (0, ZA.u)(hf.current),
+               zr: Ps.c.Submit,
+               wr: (0, Ps.p)(ww.current),
```

#### 826. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9182` → after: `L9182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9182) · [Before (L9182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9182)

```diff
-                 Fa: "keepOpen"
+                 Lr: "keepOpen"
```

#### 827. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9189-L9192` → after: `L9189-L9192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9189-L9192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9189-L9192) · [Before (L9189-L9192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9189-L9192)

```diff
-             (0, bA.o)(mm) ? (im.gameBridge.send("sendCodeCollab", {
-               va: ZA.b.ReloadAsVariation,
-               Ua: (0, ZA.u)(hf.current),
-               Fa: mm
+             (0, xs.p)(DD) ? (gD.gameBridge.send("sendCodeCollab", {
+               zr: Ps.c.ReloadAsVariation,
+               wr: (0, Ps.p)(ww.current),
+               Lr: DD
```

#### 828. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9200-L9201` → after: `L9200-L9201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9200-L9201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9200-L9201) · [Before (L9200-L9201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9200-L9201)

```diff
-               va: ZA.b.SetEngine,
-               Ua: (0, ZA.u)({
+               zr: Ps.c.SetEngine,
+               wr: (0, Ps.p)({
```

#### 829. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9205` → after: `L9205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9205) · [Before (L9205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9205)

```diff
-               Fa: mm
+               Lr: DD
```

#### 830. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9212-L9213` → after: `L9212-L9213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9212-L9213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9212-L9213) · [Before (L9212-L9213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9212-L9213)

```diff
-                 const fm = (0, kA.s)(Rf.current, Af.current),
-                   hm = Math.min(MT.v, Math.max(0, MT.z - fm)),
+                 const wD = (0, Cs.n)(gw.current, pw.current),
+                   pD = Math.min(kz.x, Math.max(0, kz.E - wD)),
```

#### 831. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9226-L9227` → after: `L9226-L9227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9226-L9227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9226-L9227) · [Before (L9226-L9227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9226-L9227)

```diff
-             [zA.i]: ""
-           }), HT(null), gT(zA.i), FT(null), Tf(null), pf.current = null, Ef.current = null, null === (Tm = jf.current) || void 0 === Tm || Tm.stopContinuousSync(), am(), Jf(zA.i))
+             [Vs.f]: ""
+           }), iz(null), Fz(Vs.f), Hz(null), Dw(null), Rw.current = null, Aw.current = null, null === (zD = Gw.current) || void 0 === zD || zD.stopContinuousSync(), KD(), Ew(Vs.f))
```

#### 832. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9240-L9243` → after: `L9240-L9243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9240-L9243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9240-L9243) · [Before (L9240-L9243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9240-L9243)

```diff
-                 hm = (0, ZA.u)(mm);
-               OT.current !== hm && (OT.current = hm, xT([]), RT(wT)), qT((0, ta.b)(hm, [Tm[0], Tm[1], Tm[2]], !!fm)), hf.current = mm, im.gameBridge.send("sendCodeCollab", {
-                 va: ZA.b.Join,
-                 Ua: (0, ZA.u)(mm)
+                 pD = (0, Ps.p)(DD);
+               fz.current !== pD && (fz.current = pD, Kz([]), gz(rz)), Bz((0, tK.d)(pD, [zD[0], zD[1], zD[2]], !!wD)), ww.current = DD, gD.gameBridge.send("sendCodeCollab", {
+                 zr: Ps.c.Join,
+                 wr: (0, Ps.p)(DD)
```

#### 833. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9247` → after: `L9247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9247) · [Before (L9247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9247)

```diff
-           const Tm = hf.current ? (0, ZA.u)(hf.current) : null;
+           const zD = ww.current ? (0, Ps.p)(ww.current) : null;
```

#### 834. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9252` → after: `L9252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9252) · [Before (L9252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9252)

```diff
-             clientID: (0, NA.b)()
+             clientID: (0, ds.e)()
```

#### 835. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9256` → after: `L9256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9256) · [Before (L9256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9256)

```diff
-           const fm = hf.current ? (0, ZA.u)(hf.current) : null;
+           const wD = ww.current ? (0, Ps.p)(ww.current) : null;
```

#### 836. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9267-L9268` → after: `L9267-L9268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9267-L9268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9267-L9268) · [Before (L9267-L9268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9267-L9268)

```diff
-           const Am = mm.type === ZA.f.Joined ? (0, ZA.k)(mm.docKey) : null,
-             am = pm && "lobby" === (null === (Tm = hf.current) || void 0 === Tm ? void 0 : Tm.kind) && (0, kA.l)(hf.current.path) && "lobby" === (null === Am || void 0 === Am ? void 0 : Am.kind) && (0, kA.l)(Am.path);
+           const sD = DD.type === Ps.f.Joined ? (0, Ps.h)(DD.docKey) : null,
+             KD = AD && "lobby" === (null === (zD = ww.current) || void 0 === zD ? void 0 : zD.kind) && (0, Cs.g)(ww.current.path) && "lobby" === (null === sD || void 0 === sD ? void 0 : sD.kind) && (0, Cs.g)(sD.path);
```

#### 837. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9276` → after: `L9276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9276) · [Before (L9276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9276)

```diff
-                     qm = (0, NA.b)(),
+                     GD = (0, ds.e)(),
```

#### 838. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9283` → after: `L9283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9283) · [Before (L9283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9283)

```diff
-                     nm = null !== (xm = (0, ZA.k)(mm.docKey)) && void 0 !== xm ? xm : hf.current;
+                     ED = null !== (rD = (0, Ps.h)(DD.docKey)) && void 0 !== rD ? rD : ww.current;
```

#### 839. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9296-L9297` → after: `L9296-L9297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9296-L9297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9296-L9297) · [Before (L9296-L9297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9296-L9297)

```diff
-                     const Am = null !== (fm = Tm.code) && void 0 !== fm ? fm : "",
-                       am = null !== (hm = Tm.collabVersion) && void 0 !== hm ? hm : 0;
+                     const sD = null !== (wD = zD.code) && void 0 !== wD ? wD : "",
+                       KD = null !== (pD = zD.collabVersion) && void 0 !== pD ? pD : 0;
```

#### 840. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9335` → after: `L9335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9335) · [Before (L9335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9335)

```diff
-                   })) : (0, cA.postJsonWithMetricsCookiesAndJsonResponse)(`${Vm}/code/get-code-block`, JA.rk["get-code-block"].toBuffer({
+                   })) : (0, Xs.postJsonWithMetricsCookiesAndJsonResponse)(`${nD}/code/get-code-block`, Qs.wk["get-code-block"].toBuffer({
```

#### 841. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9356` → after: `L9356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9356) · [Before (L9356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9356)

```diff
-               hm && pm && "keptOpen" === mm.updates && Om.j.gp("CodeEditorKeepEdits");
+               pD && AD && "keptOpen" === DD.updates && ID.l.KG("CodeEditorKeepEdits");
```

#### 842. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9359` → after: `L9359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9359) · [Before (L9359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9359)

```diff
-               if (!pm || "close" === mm.updates) return (0, va.e)(), void(hm && wm());
+               if (!AD || "close" === DD.updates) return (0, vK.f)(), void(pD && LD());
```

#### 843. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9365` → after: `L9365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9365) · [Before (L9365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9365)

```diff
-                 em = bm && (Sm || bm.toPath in km || (0, kA.l)(bm.toPath)) ? bm.toPath : Af.current in km ? Af.current : null !== (Dm = (0, kA.e)(km)) && void 0 !== Dm ? Dm : zA.i;
+                 bD = xD && (TD || xD.toPath in CD || (0, Cs.g)(xD.toPath)) ? xD.toPath : pw.current in CD ? pw.current : null !== (cD = (0, Cs.e)(CD)) && void 0 !== cD ? cD : Vs.f;
```

#### 844. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9369` → after: `L9369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9369) · [Before (L9369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9369)

```diff
-           Nm.featureFlags.canSeePlayerWrittenText && hm && ff.current && (VT || (nf(), pm ? Om.j.gp("EditLobbyCode", Ym) : Om.j.gp("EditCodeBlock", {
+           jD.featureFlags.canSeePlayerWrittenText && pD && zw.current && (hz || (Jw(), AD ? ID.l.KG("EditLobbyCode", BD) : ID.l.KG("EditCodeBlock", {
```

#### 845. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9381` → after: `L9381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9381) · [Before (L9381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9381)

```diff
-           hm && VT && ("docsButton" === JT && Hm ? (0, Oa.d)("docsButton") : JT && Oa.e.includes(JT) && !Hm && (ym(!0), fT(!1)))
+           pD && hz && ("docsButton" === Ez && lD ? (0, BK.f)("docsButton") : Ez && BK.h.includes(Ez) && !lD && (WD(!0), zz(!1)))
```

#### 846. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9387` → after: `L9387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9387) · [Before (L9387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9387)

```diff
-           hm && VT && jT && ("aiHelperButton" === ZT && TT ? (0, Oa.d)("aiHelperButton") : ZT && Oa.b.includes(ZT) && !TT && (fT(!0), ym(!1)))
+           pD && hz && Gz && ("aiHelperButton" === Vz && Dz ? (0, BK.f)("aiHelperButton") : Vz && BK.b.includes(Vz) && !Dz && (zz(!0), WD(!1)))
```

#### 847. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9391-L9392` → after: `L9391-L9392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9391-L9392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9391-L9392) · [Before (L9391-L9392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9391-L9392)

```diff
-           return (0, Oa.B)(mm, !0), () => {
-             (0, Oa.B)(mm, !1)
+           return (0, BK.y)(DD, !0), () => {
+             (0, BK.y)(DD, !1)
```

#### 848. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9396` → after: `L9396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9396) · [Before (L9396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9396)

```diff
-             kT.current ? kT.current = !1 : (0, Oa.y)()
+             Pz.current ? Pz.current = !1 : (0, BK.w)()
```

#### 849. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9403-L9404` → after: `L9403-L9404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9403-L9404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9403-L9404) · [Before (L9403-L9404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9403-L9404)

```diff
-         } = (0, dm.A)(), Mf = !TT && wT > iT, uf = Mf ? om.O : om.v, Bf = (0, Am.useCallback)(((mm, Tm) => {
-           Om.j.gp("CodeEditorGoToLine", {
+         } = (0, tD.E)(), yw = !Dz && rz > cz, kw = yw ? fD.R : fD.B, mw = (0, sD.useCallback)(((DD, zD) => {
+           ID.l.KG("CodeEditorGoToLine", {
```

#### 850. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9415` → after: `L9415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9415) · [Before (L9415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9415)

```diff
-             return BA(mm).then((mm => {
+             return as(DD).then((DD => {
```

#### 851. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9466-L9467` → after: `L9466-L9467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9466-L9467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9466-L9467) · [Before (L9466-L9467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9466-L9467)

```diff
-               va: ZA.b.CreateFile,
-               Ua: (0, ZA.u)({
+               zr: Ps.c.CreateFile,
+               wr: (0, Ps.p)({
```

#### 852. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9471` → after: `L9471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9471) · [Before (L9471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9471)

```diff
-               mw: mm
+               pL: DD
```

#### 853. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9475` → after: `L9475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9475) · [Before (L9475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9475)

```diff
-             const fm = (0, ZA.u)({
+             const wD = (0, Ps.p)({
```

#### 854. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9483-L9486` → after: `L9483-L9486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9483-L9486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9483-L9486) · [Before (L9483-L9486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9483-L9486)

```diff
-               va: ZA.b.RenameFile,
-               Ua: fm,
-               mw: mm,
-               Tw: Tm
+               zr: Ps.c.RenameFile,
+               wr: wD,
+               pL: DD,
+               sL: zD
```

#### 855. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9510` → after: `L9510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9510) · [Before (L9510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9510)

```diff
-             return (0, LA.g)(mm, Tm)
+             return (0, us.c)(DD, zD)
```

#### 856. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9526` → after: `L9526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9526) · [Before (L9526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9526)

```diff
-             return void 0 !== hm && "codeBlock" === (null === Am || void 0 === Am ? void 0 : Am.kind) && (!(null === (fm = If.current) || void 0 === fm || !fm.call(If, (0, ZA.u)(Am), hm)) && (Em.current = hm, ET(hm), !0))
+             return void 0 !== pD && "codeBlock" === (null === sD || void 0 === sD ? void 0 : sD.kind) && (!(null === (wD = nw.current) || void 0 === wD || !wD.call(nw, (0, Ps.p)(sD), pD)) && (UD.current = pD, Az(pD), !0))
```

#### 857. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9531-L9533` → after: `L9531-L9533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9531-L9533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9531-L9533) · [Before (L9531-L9533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9531-L9533)

```diff
-               const fm = await mx(zA.i);
-               return !1 === fm.canSeeCode ? null : null !== (mm = fm.files) && void 0 !== mm ? mm : {
-                 [zA.i]: null !== (Tm = fm.code) && void 0 !== Tm ? Tm : ""
+               const wD = await zr(Vs.f);
+               return !1 === wD.canSeeCode ? null : null !== (DD = wD.files) && void 0 !== DD ? DD : {
+                 [Vs.f]: null !== (zD = wD.code) && void 0 !== zD ? zD : ""
```

#### 858. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9543` → after: `L9543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9543) · [Before (L9543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9543)

```diff
-             Om.j.gp("CodeEditorGoToLine", {
+             ID.l.KG("CodeEditorGoToLine", {
```

#### 859. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9554-L9556` → after: `L9554-L9556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9554-L9556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9554-L9556) · [Before (L9554-L9556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9554-L9556)

```diff
-             const fm = (0, Nm.isTouchscreen)() ? "open World Code again" : `press ${null!==(mm=null===(Tm=BT.r.OpenCodeEditor)||void 0===Tm?void 0:Tm[0])&&void 0!==mm?mm:"F8"}`,
-               hm = pm ? `\ud83e\udd16 Try out your change, then ${fm} to tell the AI Helper how it went.` : "\ud83e\udd16 Click the code block to try your change, then open it again to tell the AI Helper how it went.";
-             Om.j.gp("chat", {
+             const wD = (0, jD.isTouchscreen)() ? "open World Code again" : `press ${null!==(DD=null===(zD=ez.u.OpenCodeEditor)||void 0===zD?void 0:zD[0])&&void 0!==DD?DD:"F8"}`,
+               pD = AD ? `\ud83e\udd16 Try out your change, then ${wD} to tell the AI Helper how it went.` : "\ud83e\udd16 Click the code block to try your change, then open it again to tell the AI Helper how it went.";
+             ID.l.KG("chat", {
```

#### 860. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9560` → after: `L9560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9560) · [Before (L9560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9560)

```diff
-                   color: zm.J.cyanUiText
+                   color: VD.I.cyanUiText
```

#### 861. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9568` → after: `L9568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9568) · [Before (L9568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9568)

```diff
-             pm || !Tm || im.gameBridge.lookup("codeBlockClickable", Tm) ? (0, va.f)(mm, {
+             AD || !zD || gD.gameBridge.lookup("codeBlockClickable", zD) ? (0, vK.g)(DD, {
```

#### 862. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9570` → after: `L9570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9570) · [Before (L9570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9570)

```diff
-                 Xf(), Om.j.gp("chat", {
+                 jw(), ID.l.KG("chat", {
```

#### 863. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9574` → after: `L9574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9574) · [Before (L9574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9574)

```diff
-                       color: zm.J.cyanUiText
+                       color: VD.I.cyanUiText
```

#### 864. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9582` → after: `L9582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9582) · [Before (L9582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9582)

```diff
-                 (0, sm.n)() || (pm ? Om.j.gp("EditLobbyCode", Tm) : Om.j.gp("EditCodeBlock", {
+                 (0, yD.q)() || (AD ? ID.l.KG("EditLobbyCode", zD) : ID.l.KG("EditCodeBlock", {
```

#### 865. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9596` → after: `L9596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9596) · [Before (L9596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9596)

```diff
-             Om.j.gp("WorldCodeAiDraft", {
+             ID.l.KG("WorldCodeAiDraft", {
```

#### 866. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9599` → after: `L9599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9599) · [Before (L9599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9599)

```diff
-             }), fh.current(), Om.j.gp("EditLobbyCode", Ym)
+             }), Dp.current(), ID.l.KG("EditLobbyCode", BD)
```

#### 867. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9602` → after: `L9602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9602) · [Before (L9602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9602)

```diff
-             fh.current(), mm.codeBlock ? Om.j.gp("EditCodeBlock", {
+             Dp.current(), DD.codeBlock ? ID.l.KG("EditCodeBlock", {
```

#### 868. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9605` → after: `L9605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9605) · [Before (L9605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9605)

```diff
-             }) : Om.j.gp("EditLobbyCode", Ym)
+             }) : ID.l.KG("EditLobbyCode", BD)
```

#### 869. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9610` → after: `L9610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9610) · [Before (L9610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9610)

```diff
-         const ah = !!VT && !!JT && Oa.e.includes(JT),
+         const pp = !!hz && !!Ez && BK.h.includes(Ez),
```

#### 870. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9619` → after: `L9619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9619) · [Before (L9619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9619)

```diff
-             oE: Dh,
+             KU: rp,
```

#### 871. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9630` → after: `L9630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9630) · [Before (L9630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9630)

```diff
-               Dm.current = null, wm((mm => "hidden" === mm ? mm : (0, Qa.d)() ? "hidden" : "shown"))
+               cD.current = null, LD((DD => "hidden" === DD ? DD : (0, EK.d)() ? "hidden" : "shown"))
```

#### 872. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9651` → after: `L9651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9651) · [Before (L9651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9651)

```diff
-               oE: xm,
+               KU: rD,
```

#### 873. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9677` → after: `L9677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9677) · [Before (L9677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9677)

```diff
-           const fm = Array.isArray(Tm) ? Tm : [Tm],
+           const wD = Array.isArray(zD) ? zD : [zD],
```

#### 874. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9680` → after: `L9680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9680) · [Before (L9680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9680)

```diff
-               return (null === mm || void 0 === mm || null === (Tm = mm.style) || void 0 === Tm ? void 0 : Tm.color) === zm.J.redUiText
+               return (null === DD || void 0 === DD || null === (zD = DD.style) || void 0 === zD ? void 0 : zD.color) === VD.I.redUiText
```

#### 875. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9684-L9685` → after: `L9684-L9685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9684-L9685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9684-L9685) · [Before (L9684-L9685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9684-L9685)

```diff
-               const fm = null !== (Tm = null === mm || void 0 === mm ? void 0 : mm.str) && void 0 !== Tm ? Tm : mm;
-               return "string" === typeof fm ? fm : ""
+               const wD = null !== (zD = null === DD || void 0 === DD ? void 0 : DD.str) && void 0 !== zD ? zD : DD;
+               return "string" === typeof wD ? wD : ""
```

#### 876. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9687` → after: `L9687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9687) · [Before (L9687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9687)

```diff
-           hm && /world code|error/i.test(Am) && (xT((mm => [...mm, Am].slice(-10))), DT((mm => mm + 1)), (0, va.c)(Am))
+           pD && /world code|error/i.test(sD) && (Kz((DD => [...DD, sD].slice(-10))), Lz((DD => DD + 1)), (0, vK.e)(sD))
```

#### 877. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9700` → after: `L9700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9700) · [Before (L9700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9700)

```diff
-             Hi: "//export",
+             lg: "//export",
```

#### 878. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9719` → after: `L9719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9719) · [Before (L9719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9719)

```diff
-             Yf ? of ? jh() : qh() : mA.NotificationProvider.showAlertPopup({
+             Iw ? Uw ? Bp() : Ip() : qp.NotificationProvider.showAlertPopup({
```

#### 879. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9724` → after: `L9724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9724) · [Before (L9724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9724)

```diff
-           }), [Yf, of, qh, jh]),
+           }), [Iw, Uw, Ip, Bp]),
```

#### 880. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9726` → after: `L9726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9726) · [Before (L9726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9726)

```diff
-         return (0, Rm.jsxs)(xm.d, {
+         return (0, RD.jsxs)(rD.c, {
```

#### 881. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9737` → after: `L9737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9737) · [Before (L9737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9737)

```diff
-           children: [(0, Rm.jsx)(oa.b, {
+           children: [(0, RD.jsx)(IK.d, {
```

#### 882. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9742` → after: `L9742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9742) · [Before (L9742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9742)

```diff
-           }), (0, Rm.jsx)(oa.b, {
+           }), (0, RD.jsx)(IK.d, {
```

#### 883. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9767` → after: `L9767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9767) · [Before (L9767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9767)

```diff
-               children: [(0, Rm.jsx)(tm.h, {
+               children: [(0, RD.jsx)(uD.f, {
```

#### 884. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9771` → after: `L9771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9771) · [Before (L9771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9771)

```diff
-                 children: (0, Rm.jsx)(oa.e, {
+                 children: (0, RD.jsx)(IK.h, {
```

#### 885. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9776` → after: `L9776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9776) · [Before (L9776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9776)

```diff
-                   children: (0, Rm.jsx)(om.m, {
+                   children: (0, RD.jsx)(fD.o, {
```

#### 886. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9780` → after: `L9780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9780) · [Before (L9780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9780)

```diff
-                       "exportButton" === KT && ((0, Oa.d)("exportButton"), kT.current = !0), bT.current = !0, Gf()
+                       "exportButton" === Mz && ((0, BK.f)("exportButton"), Pz.current = !0), Cz.current = !0, bw()
```

#### 887. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9787` → after: `L9787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9787) · [Before (L9787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9787)

```diff
-                 oE: Dh,
+                 KU: rp,
```

#### 888. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9795` → after: `L9795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9795) · [Before (L9795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9795)

```diff
-               children: [VT && (0, Rm.jsx)(tm.h, {
+               children: [hz && (0, RD.jsx)(uD.f, {
```

#### 889. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9798` → after: `L9798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9798) · [Before (L9798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9798)

```diff
-                 children: (0, Rm.jsx)(oa.e, {
+                 children: (0, RD.jsx)(IK.h, {
```

#### 890. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9803` → after: `L9803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9803) · [Before (L9803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9803)

```diff
-                   children: (0, Rm.jsx)(om.e, {
+                   children: (0, RD.jsx)(fD.f, {
```

#### 891. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9807` → after: `L9807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9807) · [Before (L9807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9807)

```diff
-                       (0, Oa.d)("helpButton"), mA.NotificationProvider.showCustomPopup({
+                       (0, BK.f)("helpButton"), qp.NotificationProvider.showCustomPopup({
```

#### 892. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9816` → after: `L9816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9816) · [Before (L9816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9816)

```diff
-                       children: (0, Rm.jsx)(qm.c, {
+                       children: (0, RD.jsx)(GD.e, {
```

#### 893. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9822` → after: `L9822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9822) · [Before (L9822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9822)

```diff
-               }), (0, Rm.jsx)(tm.h, {
+               }), (0, RD.jsx)(uD.f, {
```

#### 894. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9829` → after: `L9829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9829) · [Before (L9829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9829)

```diff
-                   children: (0, Rm.jsx)(om.j, {
+                   children: (0, RD.jsx)(fD.k, {
```

#### 895. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9836` → after: `L9836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9836) · [Before (L9836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9836)

```diff
-             peers: null !== (Tm = null === rT || void 0 === rT ? void 0 : rT.peers) && void 0 !== Tm ? Tm : []
+             peers: null !== (zD = null === Nz || void 0 === Nz ? void 0 : Nz.peers) && void 0 !== zD ? zD : []
```

#### 896. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9866-L9867` → after: `L9866-L9867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9866-L9867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9866-L9867) · [Before (L9866-L9867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9866-L9867)

```diff
-               directoryLinked: of,
-               pluginNames: null !== vf && void 0 !== vf ? vf : fx,
+               directoryLinked: Uw,
+               pluginNames: null !== ow && void 0 !== ow ? ow : pr,
```

#### 897. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9875-L9876` → after: `L9875-L9876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9875-L9876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9875-L9876) · [Before (L9875-L9876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9875-L9876)

```diff
-                   va: ZA.b.CreateFile,
-                   Ua: (0, ZA.u)({
+                   zr: Ps.c.CreateFile,
+                   wr: (0, Ps.p)({
```

#### 898. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9880` → after: `L9880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9880) · [Before (L9880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9880)

```diff
-                   mw: mm
+                   pL: DD
```

#### 899. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9888-L9889` → after: `L9888-L9889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9888-L9889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9888-L9889) · [Before (L9888-L9889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9888-L9889)

```diff
-                   va: ZA.b.RenameFile,
-                   Ua: (0, ZA.u)({
+                   zr: Ps.c.RenameFile,
+                   wr: (0, Ps.p)({
```

#### 900. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9893-L9894` → after: `L9893-L9894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9893-L9894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9893-L9894) · [Before (L9893-L9894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9893-L9894)

```diff
-                   mw: mm,
-                   Tw: Tm
+                   pL: DD,
+                   sL: zD
```

#### 901. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9898` → after: `L9898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9898) · [Before (L9898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9898)

```diff
-                 const [fm] = (0, kA.p)([Af.current], mm, Tm);
+                 const [wD] = (0, Cs.m)([pw.current], DD, zD);
```

#### 902. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9903-L9904` → after: `L9903-L9904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9903-L9904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9903-L9904) · [Before (L9903-L9904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9903-L9904)

```diff
-                   va: ZA.b.RenameFolder,
-                   Ua: (0, ZA.u)({
+                   zr: Ps.c.RenameFolder,
+                   wr: (0, Ps.p)({
```

#### 903. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9908-L9909` → after: `L9908-L9909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9908-L9909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9908-L9909) · [Before (L9908-L9909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9908-L9909)

```diff
-                   mw: mm,
-                   Tw: Tm
+                   pL: DD,
+                   sL: zD
```

#### 904. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9925` → after: `L9925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9925) · [Before (L9925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9925)

```diff
-                 children: (0, Rm.jsx)(km.c, {})
+                 children: (0, RD.jsx)(CD.e, {})
```

#### 905. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9930-L9931` → after: `L9930-L9931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9930-L9931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9930-L9931) · [Before (L9930-L9931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9930-L9931)

```diff
-                 files: pm ? lT : void 0,
-                 activePath: pm ? dT : void 0,
+                 files: AD ? yz : void 0,
+                 activePath: AD ? tz : void 0,
```

#### 906. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9934` → after: `L9934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9934) · [Before (L9934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9934)

```diff
-                 pluginSource: WT && mf ? null === (fm = GA.e[WT]) || void 0 === fm ? void 0 : fm.files[mf] : void 0,
+                 pluginSource: Yz && qz ? null === (wD = Ss.h[Yz]) || void 0 === wD ? void 0 : wD.files[qz] : void 0,
```

#### 907. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9954` → after: `L9954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9954) · [Before (L9954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9954)

```diff
-               oE: Dh,
+               KU: rp,
```

#### 908. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9970` → after: `L9970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9970) · [Before (L9970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9970)

```diff
-                     children: (0, Rm.jsx)(km.c, {})
+                     children: (0, RD.jsx)(CD.e, {})
```

#### 909. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9983` → after: `L9983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9983) · [Before (L9983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9983)

```diff
-                     children: (0, Rm.jsx)(km.c, {})
+                     children: (0, RD.jsx)(CD.e, {})
```

#### 910. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9987-L9989` → after: `L9987-L9989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9987-L9989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9987-L9989) · [Before (L9987-L9989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9987-L9989)

```diff
-                     chatKey: `${yT.gameNameWithVariation}/${yT.lobbyName}/aiHelper`,
-                     historyKey: `${yT.gameNameWithVariation}/${yT.lobbyName}/${YT.key}`,
-                     files: YT.codeBlock ? gf : lT,
+                     chatKey: `${lz.gameNameWithVariation}/${lz.lobbyName}/aiHelper`,
+                     historyKey: `${lz.gameNameWithVariation}/${lz.lobbyName}/${Iz.key}`,
+                     files: Iz.codeBlock ? tw : yz,
```

#### 911. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9995` → after: `L9995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9995) · [Before (L9995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9995)

```diff
-                     applyFiles: YT.codeBlock ? Uf : tf,
+                     applyFiles: Iz.codeBlock ? uw : aw,
```

#### 912. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L9999-L10001` → after: `L9999-L10001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R9999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L9999-L10001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L9999-L10001) · [Before (L9999-L10001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L9999-L10001)

```diff
-                     goToLine: YT.codeBlock ? Wf : Bf,
-                     openWorldCode: YT.codeBlock ? hh : void 0,
-                     readWorldCode: YT.codeBlock ? df : void 0,
+                     goToLine: Iz.codeBlock ? Fw : mw,
+                     openWorldCode: Iz.codeBlock ? zp : void 0,
+                     readWorldCode: Iz.codeBlock ? vw : void 0,
```

#### 913. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L10004` → after: `L10004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R10004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L10004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L10004) · [Before (L10004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L10004)

```diff
-                     openTarget: VT ? Ah : void 0,
+                     openTarget: hz ? wp : void 0,
```

#### 914. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L10019` → after: `L10019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R10019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L10019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L10019) · [Before (L10019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L10019)

```diff
-             children: [(0, Rm.jsx)(tm.h, {
+             children: [(0, RD.jsx)(uD.f, {
```

#### 915. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L10022` → after: `L10022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R10022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L10022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L10022) · [Before (L10022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L10022)

```diff
-               children: (0, Rm.jsx)(om.e, {
+               children: (0, RD.jsx)(fD.f, {
```

#### 916. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L10028` → after: `L10028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R10028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L10028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L10028) · [Before (L10028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L10028)

```diff
-                 children: (0, Rm.jsx)(qm.c, {
+                 children: (0, RD.jsx)(GD.e, {
```

#### 917. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L10032` → after: `L10032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R10032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L10032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L10032) · [Before (L10032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L10032)

```diff
-             }), (0, Rm.jsx)(tm.h, {
+             }), (0, RD.jsx)(uD.f, {
```

#### 918. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L10035` → after: `L10035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R10035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L10035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L10035) · [Before (L10035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L10035)

```diff
-               children: (0, Rm.jsx)(om.m, {
+               children: (0, RD.jsx)(fD.o, {
```

#### 919. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L10043` → after: `L10043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R10043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L10043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L10043) · [Before (L10043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L10043)

```diff
-             }), (0, Rm.jsx)(tm.h, {
+             }), (0, RD.jsx)(uD.f, {
```

#### 920. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L10047` → after: `L10047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R10047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L10047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L10047) · [Before (L10047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L10047)

```diff
-               children: (0, Rm.jsx)(oa.e, {
+               children: (0, RD.jsx)(IK.h, {
```

#### 921. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L10054-L10055` → after: `L10054-L10055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R10054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L10054-L10055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L10054-L10055) · [Before (L10054-L10055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L10054-L10055)

```diff
-                 onPrevious: Hm && "welcome" === nT ? rf : void 0,
-                 children: (0, Rm.jsx)(om.v, {
+                 onPrevious: lD && "welcome" === Jz ? Ww : void 0,
+                 children: (0, RD.jsx)(fD.B, {
```

#### 922. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L10058` → after: `L10058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R10058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L10058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L10058) · [Before (L10058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L10058)

```diff
-                     (0, Oa.d)(Hm ? "hideDocsButton" : "docsButton"), ym(!Hm), fT(!1)
+                     (0, BK.f)(lD ? "hideDocsButton" : "docsButton"), WD(!lD), zz(!1)
```

#### 923. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L10063` → after: `L10063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R10063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L10063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L10063) · [Before (L10063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L10063)

```diff
-             }), jT && (0, Rm.jsx)(oa.e, {
+             }), Gz && (0, RD.jsx)(IK.h, {
```

#### 924. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L10070` → after: `L10070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R10070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L10070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L10070) · [Before (L10070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L10070)

```diff
-               onPrevious: TT && "welcome" === zT ? sf : void 0,
+               onPrevious: Dz && "welcome" === Xz ? Nw : void 0,
```

#### 925. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L10074` → after: `L10074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R10074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L10074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L10074) · [Before (L10074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L10074)

```diff
-                   (0, Oa.d)(TT ? "hideAiHelperButton" : "aiHelperButton"), fT(!TT), ym(!1)
+                   (0, BK.f)(Dz ? "hideAiHelperButton" : "aiHelperButton"), zz(!Dz), WD(!1)
```

#### 926. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L10078` → after: `L10078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R10078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L10078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L10078) · [Before (L10078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L10078)

```diff
-             }), Bm && (0, Rm.jsx)(tm.h, {
+             }), oD && (0, RD.jsx)(uD.f, {
```

#### 927. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L10081` → after: `L10081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R10081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L10081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L10081) · [Before (L10081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L10081)

```diff
-               children: (0, Rm.jsx)(om.v, {
+               children: (0, RD.jsx)(fD.B, {
```

#### 928. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L10088` → after: `L10088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R10088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L10088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L10088) · [Before (L10088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L10088)

```diff
-             }), (0, Rm.jsx)(tm.h, {
+             }), (0, RD.jsx)(uD.f, {
```

#### 929. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L10091` → after: `L10091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R10091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L10091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L10091) · [Before (L10091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L10091)

```diff
-               children: (0, Rm.jsx)(om.v, {
+               children: (0, RD.jsx)(fD.B, {
```

#### 930. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L10096` → after: `L10096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R10096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L10096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L10096) · [Before (L10096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L10096)

```diff
-             }), (0, Rm.jsx)(tm.h, {
+             }), (0, RD.jsx)(uD.f, {
```

#### 931. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L10099` → after: `L10099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R10099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L10099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L10099) · [Before (L10099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L10099)

```diff
-               children: (0, Rm.jsx)(om.e, {
+               children: (0, RD.jsx)(fD.f, {
```

#### 932. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L10102` → after: `L10102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R10102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L10102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L10102) · [Before (L10102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L10102)

```diff
-                   Om.j.gp("FormatCode")
+                   ID.l.KG("FormatCode")
```

#### 933. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L10106` → after: `L10106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R10106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L10106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L10106) · [Before (L10106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L10106)

```diff
-             }), (0, Rm.jsx)(tm.h, {
+             }), (0, RD.jsx)(uD.f, {
```

#### 934. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L10109` → after: `L10109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R10109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L10109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L10109) · [Before (L10109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L10109)

```diff
-               children: (0, Rm.jsx)(om.e, {
+               children: (0, RD.jsx)(fD.f, {
```

#### 935. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L10126` → after: `L10126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R10126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L10126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L10126) · [Before (L10126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L10126)

```diff
-             }), (0, Rm.jsx)(tm.h, {
+             }), (0, RD.jsx)(uD.f, {
```

#### 936. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L10129` → after: `L10129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R10129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L10129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L10129) · [Before (L10129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L10129)

```diff
-               children: (0, Rm.jsx)(om.e, {
+               children: (0, RD.jsx)(fD.f, {
```

#### 937. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L10136` → after: `L10136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R10136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L10136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L10136) · [Before (L10136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L10136)

```diff
-             }), !pm && (0, Rm.jsx)(tm.h, {
+             }), !AD && (0, RD.jsx)(uD.f, {
```

#### 938. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L10140` → after: `L10140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R10140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L10140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L10140) · [Before (L10140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L10140)

```diff
-               children: (0, Rm.jsx)(oa.e, {
+               children: (0, RD.jsx)(IK.h, {
```

#### 939. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L10147` → after: `L10147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R10147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L10147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L10147) · [Before (L10147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L10147)

```diff
-                 children: (0, Rm.jsx)(om.v, {
+                 children: (0, RD.jsx)(fD.B, {
```

#### 940. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L10150` → after: `L10150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R10150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L10150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L10150) · [Before (L10150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L10150)

```diff
-                     "worldCodeButton" === KT && ((0, Oa.d)("worldCodeButton"), kT.current = !0), Gf(), Om.j.gp("EditLobbyCode", Ym)
+                     "worldCodeButton" === Mz && ((0, BK.f)("worldCodeButton"), Pz.current = !0), bw(), ID.l.KG("EditLobbyCode", BD)
```

#### 941. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L10155` → after: `L10155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R10155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L10155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L10155) · [Before (L10155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L10155)

```diff
-             }), (CT || wf || jT) && (0, Rm.jsx)(tm.h, {
+             }), (Wz || rw || Gz) && (0, RD.jsx)(uD.f, {
```

#### 942. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L10158` → after: `L10158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R10158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L10158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L10158) · [Before (L10158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L10158)

```diff
-               children: (0, Rm.jsx)(om.e, {
+               children: (0, RD.jsx)(fD.f, {
```

#### 943. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L10163` → after: `L10163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R10163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L10163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L10163) · [Before (L10163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L10163)

```diff
-                 children: (0, Rm.jsx)(qm.c, {
+                 children: (0, RD.jsx)(GD.e, {
```

#### 944. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L10168` → after: `L10168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R10168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L10168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L10168) · [Before (L10168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L10168)

```diff
-           }), GT && (0, Rm.jsx)(fA.b, {
+           }), jz && (0, RD.jsx)(zs.e, {
```

#### 945. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L10198` → after: `L10198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R10198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L10198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L10198) · [Before (L10198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L10198)

```diff
-       } = (0, rm.m)(["openEverythingMenuName", "openInGameMenuName"]), fm = (0, Zm.k)("fullInventory"), am = (0, Am.useRef)(null), xm = (0, eT.l)();
+       } = (0, ZD.n)(["openEverythingMenuName", "openInGameMenuName"]), wD = (0, PD.i)("fullInventory"), KD = (0, sD.useRef)(null), rD = (0, Tz.g)();
```

#### 946. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L10202` → after: `L10202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R10202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L10202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L10202) · [Before (L10202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L10202)

```diff
-         const fm = rm.c.get("openInGameMenuName");
+         const wD = ZD.e.get("openInGameMenuName");
```

#### 947. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L10204` → after: `L10204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R10204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L10204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L10204) · [Before (L10204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L10204)

```diff
-         const Am = null !== (Tm = mm.split("|")[1]) && void 0 !== Tm ? Tm : null;
+         const sD = null !== (zD = DD.split("|")[1]) && void 0 !== zD ? zD : null;
```

#### 948. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L10207` → after: `L10207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R10207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L10207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L10207) · [Before (L10207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L10207)

```diff
-         am.current !== wm && (am.current = wm), null !== hm && (0, EA.p)(EA.c, {
+         KD.current !== LD && (KD.current = LD), null !== pD && (0, As.p)(As.b, {
```

#### 949. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L10209` → after: `L10209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R10209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L10209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L10209) · [Before (L10209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L10209)

```diff
-         }), rm.c.set({
+         }), ZD.e.set({
```

#### 950. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L10214` → after: `L10214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R10214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L10214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L10214) · [Before (L10214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L10214)

```diff
-           Om.j.gp("toggleMenu", mm)
+           ID.l.KG("toggleMenu", DD)
```

#### 951. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L10232` → after: `L10232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R10232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L10232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L10232) · [Before (L10232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L10232)

```diff
-           rm.c.set({
+           ZD.e.set({
```

#### 952. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L10240` → after: `L10240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R10240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L10240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L10240) · [Before (L10240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L10240)

```diff
-           (0, EA.p)(EA.c, {
+           (0, As.p)(As.b, {
```

#### 953. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L10242` → after: `L10242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R10242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L10242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L10242) · [Before (L10242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L10242)

```diff
-           }), pm.current = ax.has(Tm) ? null !== (mm = rm.c.get("openEverythingMenuName")) && void 0 !== mm ? mm : pm.current : null, rm.c.set({
+           }), AD.current = rr.has(zD) ? null !== (DD = ZD.e.get("openEverythingMenuName")) && void 0 !== DD ? DD : AD.current : null, ZD.e.set({
```

#### 954. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L10247` → after: `L10247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R10247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L10247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L10247) · [Before (L10247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L10247)

```diff
-           pm.current = null, null !== mm && null === rm.c.get("openEverythingMenuName") && rm.c.set({
+           AD.current = null, null !== DD && null === ZD.e.get("openEverythingMenuName") && ZD.e.set({
```

#### 955. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L10249` → after: `L10249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R10249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L10249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L10249) · [Before (L10249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L10249)

```diff
-           }), am.current = null, (0, EA.l)(EA.c)
+           }), KD.current = null, (0, As.o)(As.b)
```

#### 956. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L10254` → after: `L10254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R10254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L10254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L10254) · [Before (L10254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L10254)

```diff
-         children: [(0, Rm.jsx)(hm.f, {
+         children: [(0, RD.jsx)(pD.i, {
```

#### 957. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L10319` → after: `L10319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R10319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L10319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L10319) · [Before (L10319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L10319)

```diff
-   36584: (mm, Tm, fm) => {
+   36502: (DD, zD, wD) => {
```

#### 958. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L10321` → after: `L10321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R10321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L10321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L10321) · [Before (L10321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L10321)

```diff
-       d: () => nx
+       b: () => Qr
```

#### 959. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L10323-L10325` → after: `L10323-L10325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R10323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L10323-L10325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L10323-L10325) · [Before (L10323-L10325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L10323-L10325)

```diff
-     fm(36588);
-     var hm = fm(59),
-       Am = fm(1080),
+     wD(36506);
+     var pD = wD(58),
+       sD = wD(1044),
```

#### 960. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L10327-L10330` → after: `L10327-L10330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R10327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L10327-L10330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L10327-L10330) · [Before (L10327-L10330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L10327-L10330)

```diff
-       xm = fm(3714),
-       wm = fm(1449),
-       Dm = fm(1884),
-       im = fm(1135);
+       rD = wD(3744),
+       LD = wD(1442),
+       cD = wD(1895),
+       gD = wD(1096);
```

#### 961. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L10351` → after: `L10351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R10351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L10351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L10351) · [Before (L10351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L10351)

```diff
-       })), (0, hm.useEffect)((() => ((0, xm.d)((() => {
+       })), (0, pD.useEffect)((() => ((0, rD.b)((() => {
```

#### 962. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L10359` → after: `L10359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R10359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L10359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L10359) · [Before (L10359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L10359)

```diff
-         children: (0, im.jsx)(Dm.b, {
+         children: (0, gD.jsx)(cD.e, {
```

#### 963. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L10364-L10367` → after: `L10364-L10367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R10364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L10364-L10367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L10364-L10367) · [Before (L10364-L10367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L10364-L10367)

```diff
-     var pm = fm(2317),
-       Em = fm(1905),
-       om = fm(1519),
-       Om = fm(2400);
+     var AD = wD(2343),
+       UD = wD(1925),
+       fD = wD(1511),
+       ID = wD(2410);
```

#### 964. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L10385-L10398` → after: `L10385-L10398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R10385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L10385-L10398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L10385-L10398) · [Before (L10385-L10398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L10385-L10398)

```diff
-     var qm = fm(1160),
-       jm = fm(3112),
-       Vm = fm(339),
-       Im = fm(2391),
-       Km = fm(31),
-       Qm = fm(1928),
-       nm = fm(37),
-       Jm = fm(1946),
-       cm = fm(23),
-       zm = fm(1950),
-       Zm = fm(1389),
-       km = fm(8770),
-       bm = fm(1984),
-       Sm = fm(1208);
+     var GD = wD(1127),
+       hD = wD(3089),
+       nD = wD(338),
+       MD = wD(2402),
+       OD = wD(25),
+       JD = wD(1956),
+       ED = wD(35),
+       QD = wD(1973),
+       XD = wD(20),
+       VD = wD(1977),
+       PD = wD(1383),
+       CD = wD(8830),
+       xD = wD(1998),
+       TD = wD(1200);
```

#### 965. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L10405-L10407` → after: `L10405-L10407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R10405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L10405-L10407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L10405-L10407) · [Before (L10405-L10407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L10405-L10407)

```diff
-       } = (0, cm.m)(["isTouchScreen", "loadingOverlayVisible", "openInGameMenuName", "openEverythingMenuName"]), xm = (0, Zm.t)();
-       (0, jm.c)();
-       const wm = (0, Im.g)("showBasicMovementControls"),
+       } = (0, XD.n)(["isTouchScreen", "loadingOverlayVisible", "openInGameMenuName", "openEverythingMenuName"]), rD = (0, PD.o)();
+       (0, hD.d)();
+       const LD = (0, MD.h)("showBasicMovementControls"),
```

#### 966. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L10428` → after: `L10428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R10428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L10428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L10428) · [Before (L10428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L10428)

```diff
-             Rm("movement" === Dm && (0, Zm.h)() ? "padActions" : "done")
+             RD("movement" === cD && (0, PD.f)() ? "padActions" : "done")
```

#### 967. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L10433` → after: `L10433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R10433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L10433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L10433) · [Before (L10433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L10433)

```diff
-       }), [om, Dm]), nm.g.getItem(Vm.Gb) > 2 ? (0, im.jsx)(Pm, {
+       }), [fD, cD]), ED.h.getItem(nD.vb) > 2 ? (0, gD.jsx)(iD, {
```

#### 968. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L10456` → after: `L10456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R10456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L10456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L10456) · [Before (L10456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L10456)

```diff
-       const mm = (0, Zm.t)();
+       const DD = (0, PD.o)();
```

#### 969. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L10490` → after: `L10490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R10490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L10490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L10490) · [Before (L10490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L10490)

```diff
-       } = (0, Sm.A)(), hm = (0, Im.g)("useInventory");
+       } = (0, TD.E)(), pD = (0, MD.h)("useInventory");
```

#### 970. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L10533` → after: `L10533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R10533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L10533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L10533) · [Before (L10533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L10533)

```diff
-       } = (0, cm.m)(["isTouchScreen"]), Am = (0, Zm.t)(), am = (0, bm.d)("OpenShop"), [xm, wm] = (0, hm.useState)(!1), Dm = `SeenShopControls|${(0,Jm.g)("connectedGame",(mm=>mm.gameNameWithVariation))}`, Rm = () => (!(0, Zm.h)() || null !== (0, km.b)("OpenShop")) && !nm.g.getItem … [truncated]
+       } = (0, XD.n)(["isTouchScreen"]), sD = (0, PD.o)(), KD = (0, xD.c)("OpenShop"), [rD, LD] = (0, pD.useState)(!1), cD = `SeenShopControls|${(0,QD.g)("connectedGame",(DD=>DD.gameNameWithVariation))}`, RD = () => (!(0, PD.f)() || null !== (0, CD.c)("OpenShop")) && !ED.h.getItem … [truncated]
```

#### 971. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L10538` → after: `L10538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R10538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L10538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L10538) · [Before (L10538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L10538)

```diff
-         const Tm = Km.j.subscribe("showShopTutorial", (() => {
+         const zD = OD.l.subscribe("showShopTutorial", (() => {
```

#### 972. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L10542` → after: `L10542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R10542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L10542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L10542) · [Before (L10542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L10542)

```diff
-           clearTimeout(mm), Km.j.unsubscribe(Tm)
+           clearTimeout(DD), OD.l.unsubscribe(zD)
```

#### 973. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L10546` → after: `L10546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R10546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L10546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L10546) · [Before (L10546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L10546)

```diff
-       return (0, Im.c)("currencyAmounts", (mm => {
+       return (0, MD.g)("currencyAmounts", (DD => {
```

#### 974. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L10549` → after: `L10549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R10549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L10549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L10549) · [Before (L10549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L10549)

```diff
-           const hm = Qm.b.get("shopInfo");
+           const pD = JD.e.get("shopInfo");
```

#### 975. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L10573-L10574` → after: `L10573-L10574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R10573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L10573-L10574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L10573-L10574) · [Before (L10573-L10574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L10573-L10574)

```diff
-     var Hm = fm(1362),
-       ym = fm(1089);
+     var lD = wD(1366),
+       WD = wD(1057);
```

#### 976. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L10576` → after: `L10576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R10576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L10576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L10576) · [Before (L10576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L10576)

```diff
-       return (0, jm.c)(), (0, im.jsx)(rm, {})
+       return (0, hD.d)(), (0, gD.jsx)(ZD, {})
```

#### 977. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L10586` → after: `L10586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R10586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L10586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L10586) · [Before (L10586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L10586)

```diff
-         this.sub = Km.j.subscribe("TopRightHelper", (mm => {
+         this.sub = OD.l.subscribe("TopRightHelper", (DD => {
```

#### 978. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L10593` → after: `L10593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R10593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L10593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L10593) · [Before (L10593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L10593)

```diff
-         Km.j.unsubscribe(this.sub), clearTimeout(this.slideOutTimeout), clearTimeout(this.hidingMessageTimeout)
+         OD.l.unsubscribe(this.sub), clearTimeout(this.slideOutTimeout), clearTimeout(this.hidingMessageTimeout)
```

#### 979. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L10634` → after: `L10634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R10634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L10634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L10634) · [Before (L10634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L10634)

```diff
-             children: (0, im.jsx)(ym.c, {
+             children: (0, gD.jsx)(WD.e, {
```

#### 980. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L10650-L10652` → after: `L10650-L10652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R10650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L10650-L10652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L10650-L10652) · [Before (L10650-L10652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L10650-L10652)

```diff
-     var sm = fm(36596),
-       lm = fm(1406);
-     const Mm = (0, lm.k)((mm => mm.PadSneakChip));
+     var yD = wD(36508),
+       kD = wD(1394);
+     const mD = (0, kD.h)((DD => DD.PadSneakChip));
```

#### 981. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L10691-L10698` → after: `L10691-L10698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R10691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L10691-L10698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L10691-L10698) · [Before (L10691-L10698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L10691-L10698)

```diff
-     var tm = fm(36616),
-       Um = fm(4210),
-       dm = fm(2364),
-       gm = fm(2373),
-       Wm = fm(36672),
-       Fm = fm(4763),
-       mT = fm(1469),
-       TT = fm(653);
+     var uD = wD(36529),
+       vD = wD(4295),
+       tD = wD(2382),
+       FD = wD(2389),
+       YD = wD(36575),
+       HD = wD(4832),
+       qD = wD(1461),
+       Dz = wD(619);
```

#### 982. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L10708` → after: `L10708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R10708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L10708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L10708) · [Before (L10708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L10708)

```diff
-       return wm < 8 ? (mm.style.display = "none", null) : (mm.style.transform = `translate(${xm-Tm.left}px, ${wm-Tm.top}px)`, {
+       return LD < 8 ? (DD.style.display = "none", null) : (DD.style.transform = `translate(${rD-zD.left}px, ${LD-zD.top}px)`, {
```

#### 983. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L10728` → after: `L10728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R10728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L10728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L10728) · [Before (L10728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L10728)

```diff
-     var aT = fm(8824);
+     var sz = wD(8883);
```

#### 984. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L10788` → after: `L10788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R10788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L10788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L10788) · [Before (L10788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L10788)

```diff
-     var RT = fm(1286);
+     var gz = wD(1299);
```

#### 985. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L10803-L10806` → after: `L10803-L10806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R10803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L10803-L10806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L10803-L10806) · [Before (L10803-L10806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L10803-L10806)

```diff
-           charging: `${xm}Charging`,
-           armed: `${xm}Armed`,
-           ready: `${xm}Ready`,
-           locked: `${xm}Locked`
+           charging: `${rD}Charging`,
+           armed: `${rD}Armed`,
+           ready: `${rD}Ready`,
+           locked: `${rD}Locked`
```

#### 986. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L10852` → after: `L10852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R10852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L10852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L10852) · [Before (L10852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L10852)

```diff
-       }), [mm]), (0, Jm.e)("localPlayerAliveSet", (() => {
+       }), [DD]), (0, QD.c)("localPlayerAliveSet", (() => {
```

#### 987. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L10857-L10859` → after: `L10857-L10859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R10857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L10857-L10859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L10857-L10859) · [Before (L10857-L10859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L10857-L10859)

```diff
-     var ET = fm(2436),
-       oT = fm(2455),
-       OT = fm(1152),
+     var Az = wD(2428),
+       Uz = wD(2454),
+       fz = wD(1116),
```

#### 988. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L10861` → after: `L10861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R10861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L10861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L10861) · [Before (L10861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L10861)

```diff
-       qT = fm(2466);
+       Bz = wD(2471);
```

#### 989. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L10896` → after: `L10896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R10896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L10896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L10896) · [Before (L10896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L10896)

```diff
-       return `path("${hm.map((mm=>`M${Am(mm.left)} ${Am(mm.top)}H${Am(mm.right)}V${Am(mm.bottom)}H${Am(mm.left)}Z`)).join("")}")`
+       return `path("${pD.map((DD=>`M${sD(DD.left)} ${sD(DD.top)}H${sD(DD.right)}V${sD(DD.bottom)}H${sD(DD.left)}Z`)).join("")}")`
```

#### 990. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L10917-L10918` → after: `L10917-L10918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R10917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L10917-L10918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L10917-L10918) · [Before (L10917-L10918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L10917-L10918)

```diff
-     var IT = fm(8842),
-       KT = fm(36653);
+     var nz = wD(8894),
+       Mz = wD(36561);
```

#### 991. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L10928` → after: `L10928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R10928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L10928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L10928) · [Before (L10928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L10928)

```diff
-         hm = (0, Wm.g)(mm);
+         pD = (0, YD.h)(DD);
```

#### 992. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L10964` → after: `L10964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R10964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L10964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L10964) · [Before (L10964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L10964)

```diff
-       return 0 === Tm.width && 0 === Tm.height || "visible" !== getComputedStyle(mm).visibility ? [] : [(0, IT.l)(Tm, 44)]
+       return 0 === zD.width && 0 === zD.height || "visible" !== getComputedStyle(DD).visibility ? [] : [(0, nz.q)(zD, 44)]
```

#### 993. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L10975` → after: `L10975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R10975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L10975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L10975) · [Before (L10975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L10975)

```diff
-           const hm = Array.from(document.querySelectorAll(qT.b)),
+           const pD = Array.from(document.querySelectorAll(Bz.d)),
```

#### 994. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L10997` → after: `L10997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R10997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L10997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L10997) · [Before (L10997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L10997)

```diff
-           attributeFilter: ["class", KT.e]
+           attributeFilter: ["class", Mz.i]
```

#### 995. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L10999` → after: `L10999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R10999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L10999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L10999) · [Before (L10999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L10999)

```diff
-         const Dm = [(0, Km.m)(YT.e, hm), (0, Km.m)(qT.n, hm), (0, Km.m)(qT.e, hm)];
+         const cD = [(0, OD.o)(Iz.e, pD), (0, OD.o)(Bz.s, pD), (0, OD.o)(Bz.f, pD)];
```

#### 996. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L11007` → after: `L11007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R11007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L11007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L11007) · [Before (L11007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L11007)

```diff
-     var cT = fm(4341);
+     var Qz = wD(4436);
```

#### 997. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L11033-L11035` → after: `L11033-L11035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R11033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L11033-L11035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L11033-L11035) · [Before (L11033-L11035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L11033-L11035)

```diff
-         } = (0, Sm.A)(),
-         Qm = (0, cT.m)(Am),
-         nm = (0, cm.m)(["notchSize"]).notchSize,
+         } = (0, TD.E)(),
+         JD = (0, Qz.o)(sD),
+         ED = (0, XD.n)(["notchSize"]).notchSize,
```

#### 998. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L11038-L11039` → after: `L11038-L11039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R11038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L11038-L11039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L11038-L11039) · [Before (L11038-L11039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L11038-L11039)

```diff
-         Zm = (0, oT.f)(),
-         [km, bm, em] = "pinned" === Am ? ET.m : null !== (Tm = Zm.hudElements.joystick) && void 0 !== Tm ? Tm : ET.m,
+         PD = (0, Uz.i)(),
+         [CD, xD, bD] = "pinned" === sD ? Az.k : null !== (zD = PD.hudElements.joystick) && void 0 !== zD ? zD : Az.k,
```

#### 999. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L11041` → after: `L11041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R11041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L11041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L11041) · [Before (L11041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L11041)

```diff
-         Gm = Math.max(cT.k, cT.l * em);
+         dD = Math.max(Qz.j, Qz.n * bD);
```

#### 1000. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L11074` → after: `L11074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R11074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L11074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L11074) · [Before (L11074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L11074)

```diff
-         jm.current = fT(qm.current, mm, 80, hT(`.TouchInventoryKey, ${qT.b}`)), Vm.current = null !== jm.current && AT(Im.current, jm.current)
+         hD.current = zz(GD.current, DD, 80, wz(`.TouchInventoryKey, ${Bz.d}`)), nD.current = null !== hD.current && pz(MD.current, hD.current)
```

#### 1001. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L11081` → after: `L11081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R11081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L11081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L11081) · [Before (L11081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L11081)

```diff
-         } = window, fm = (0, qT.B)(Nm, mm, Tm, (0, qT.G)(nm, mm, Tm), zm.current);
+         } = window, wD = (0, Bz.D)(jD, DD, zD, (0, Bz.J)(ED, DD, zD), VD.current);
```

#### 1002. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L11089` → after: `L11089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R11089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L11089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L11089) · [Before (L11089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L11089)

```diff
-         Rm.current.style.transform = `translate(${mm.x-Gm}px, ${mm.y-Gm}px)`
+         RD.current.style.transform = `translate(${DD.x-dD}px, ${DD.y-dD}px)`
```

#### 1003. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L11098` → after: `L11098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R11098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L11098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L11098) · [Before (L11098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L11098)

```diff
-           } = window, fm = Hm(), hm = Jm * mm / 100 + fm.left, Am = wm.current.offsetHeight || Tm, am = ((0, OT.c)(mm, Tm) ? cT.g : cT.c) + fm.bottom;
+           } = window, wD = lD(), pD = QD * DD / 100 + wD.left, sD = LD.current.offsetHeight || zD, KD = ((0, fz.d)(DD, zD) ? Qz.g : Qz.e) + wD.bottom;
```

#### 1004. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L11132` → after: `L11132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R11132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L11132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L11132) · [Before (L11132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L11132)

```diff
-         if (null === om.current || null === Om.current || (0, TT.H)(Tm)) return;
+         if (null === fD.current || null === ID.current || (0, Dz.B)(zD)) return;
```

#### 1005. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L11141-L11142` → after: `L11141-L11142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R11141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L11141-L11142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L11141-L11142) · [Before (L11141-L11142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L11141-L11142)

```diff
-           Ym = am && Em > 0 ? am(Em) / Em : 1;
-         pm.current.style.transform = `translate(calc(-50% + ${im}px), calc(-50% + ${Rm}px))`;
+           BD = KD && UD > 0 ? KD(UD) / UD : 1;
+         AD.current.style.transform = `translate(calc(-50% + ${gD}px), calc(-50% + ${RD}px))`;
```

#### 1006. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L11163` → after: `L11163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R11163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L11163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L11163) · [Before (L11163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L11163)

```diff
-           zm.current = (0, qT.L)(document)
+           VD.current = (0, Bz.O)(document)
```

#### 1007. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L11229` → after: `L11229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R11229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L11229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L11229) · [Before (L11229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L11229)

```diff
-           width: `max(35vw, calc(${Jm+100*km}vw + ${Hm().left+cT.i+Gm+24}px))`
+           width: `max(35vw, calc(${QD+100*CD}vw + ${lD().left+Qz.i+dD+24}px))`
```

#### 1008. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L11294` → after: `L11294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R11294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L11294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L11294) · [Before (L11294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L11294)

```diff
-               children: [(0, im.jsx)(ym.c, {
+               children: [(0, gD.jsx)(WD.e, {
```

#### 1009. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L11302-L11303` → after: `L11302-L11303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R11302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L11302-L11303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L11302-L11303) · [Before (L11302-L11303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L11302-L11303)

```diff
-               width: `${Gm}px`,
-               height: `${Gm}px`
+               width: `${dD}px`,
+               height: `${dD}px`
```

#### 1010. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L11323-L11324` → after: `L11323-L11324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R11323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L11323-L11324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L11323-L11324) · [Before (L11323-L11324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L11323-L11324)

```diff
-       return (0, hm.useLayoutEffect)((() => (Wm.k.set(mm, fm.current, Tm), () => {
-         Wm.k.set(mm, null)
+       return (0, pD.useLayoutEffect)((() => (YD.j.set(DD, wD.current, zD), () => {
+         YD.j.set(DD, null)
```

#### 1011. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L11344-L11345` → after: `L11344-L11345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R11344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L11344-L11345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L11344-L11345) · [Before (L11344-L11345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L11344-L11345)

```diff
-         return (0, hm.useEffect)((() => (Km.j.gp(YT.e), () => {
-           Km.j.gp(YT.e)
+         return (0, pD.useEffect)((() => (OD.l.KG(Iz.e), () => {
+           OD.l.KG(Iz.e)
```

#### 1012. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L11348` → after: `L11348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R11348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L11348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L11348) · [Before (L11348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L11348)

```diff
-           className: am()("TouchKeyHit", `TouchSlot${fm}`, Dm, {
+           className: KD()("TouchKeyHit", `TouchSlot${wD}`, cD, {
```

#### 1013. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L11367` → after: `L11367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R11367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L11367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L11367) · [Before (L11367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L11367)

```diff
-         Tm.current && (Tm.current = !1, (0, gm.C)(mm, !1, {
+         zD.current && (zD.current = !1, (0, FD.y)(DD, !1, {
```

#### 1014. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L11380` → after: `L11380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R11380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L11380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L11380) · [Before (L11380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L11380)

```diff
-         }, `${mm.id}:${Am}`)
+         }, `${DD.id}:${sD}`)
```

#### 1015. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L11383` → after: `L11383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R11383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L11383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L11383) · [Before (L11383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L11383)

```diff
-     var lT = fm(36663);
+     var yz = wD(36570);
```

#### 1016. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L11472-L11473` → after: `L11472-L11473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R11472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L11472-L11473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L11472-L11473) · [Before (L11472-L11473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L11472-L11473)

```diff
-       } = (0, Sm.A)(), Am = "round" === (0, ET.hb)().hudShape, am = (0, hm.useRef)(!1);
-       rT(dm.v.Jump, am);
+       } = (0, TD.E)(), sD = "round" === (0, Az.Y)().hudShape, KD = (0, pD.useRef)(!1);
+       Nz(tD.r.Jump, KD);
```

#### 1017. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L11482` → after: `L11482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R11482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L11482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L11482) · [Before (L11482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L11482)

```diff
-           am.current = mm, (0, gm.C)(dm.v.Jump, mm, Tm)
+           KD.current = DD, (0, FD.y)(tD.r.Jump, DD, zD)
```

#### 1018. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L11489` → after: `L11489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R11489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L11489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L11489) · [Before (L11489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L11489)

```diff
-           am.current && (xm.current && (0, mT.i)(xm.current, !1), Om(!1, mm))
+           KD.current && (rD.current && (0, qD.e)(rD.current, !1), ID(!1, DD))
```

#### 1019. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L11508` → after: `L11508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R11508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L11508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L11508) · [Before (L11508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L11508)

```diff
-             if (pm.current = fT(Dm.current, hm, 16, hT(`.TouchKeyHit:not(.JumpKey) > .TouchKey, .TouchInventoryKey, ${qT.b}`)), null === pm.current) return void qm.current.suspend();
+             if (AD.current = zz(cD.current, pD, 16, wz(`.TouchKeyHit:not(.JumpKey) > .TouchKey, .TouchInventoryKey, ${Bz.d}`)), null === AD.current) return void GD.current.suspend();
```

#### 1020. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L11534` → after: `L11534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R11534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L11534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L11534) · [Before (L11534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L11534)

```diff
-           return null === Tm ? null !== (fm = qm.current) && void 0 !== fm && fm.locked ? null : "lifted" : vT(mm, Tm) ? "lifted" : (0, lT.g)(mm.nativeEvent.touches, Tm.id) ? null : "dropped"
+           return null === zD ? null !== (wD = GD.current) && void 0 !== wD && wD.locked ? null : "lifted" : az(DD, zD) ? "lifted" : (0, yz.f)(DD.nativeEvent.touches, zD.id) ? null : "dropped"
```

#### 1021. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L11541` → after: `L11541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R11541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L11541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L11541) · [Before (L11541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L11541)

```diff
-           Vm.onTouchStart(mm), (0, mT.i)(mm.currentTarget, !0), null === Rm.current || (0, lT.g)(mm.nativeEvent.touches, Rm.current.id) || jm();
+           nD.onTouchStart(DD), (0, qD.e)(DD.currentTarget, !0), null === RD.current || (0, yz.f)(DD.nativeEvent.touches, RD.current.id) || hD();
```

#### 1022. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L11566` → after: `L11566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R11566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L11566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L11566) · [Before (L11566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L11566)

```diff
-           null !== fm && ("dropped" !== fm ? (Rm.current = null, null !== (Tm = qm.current) && void 0 !== Tm && Tm.lift() ? (0, mT.i)(mm.currentTarget, !1) : Ym(mm.nativeEvent)) : jm(mm.nativeEvent))
+           null !== wD && ("dropped" !== wD ? (RD.current = null, null !== (zD = GD.current) && void 0 !== zD && zD.lift() ? (0, qD.e)(DD.currentTarget, !1) : BD(DD.nativeEvent)) : hD(DD.nativeEvent))
```

#### 1023. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L11571` → after: `L11571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R11571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L11571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L11571) · [Before (L11571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L11571)

```diff
-         children: [(0, im.jsx)(ym.c, {
+         children: [(0, gD.jsx)(WD.e, {
```

#### 1024. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L11576` → after: `L11576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R11576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L11576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L11576) · [Before (L11576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L11576)

```diff
-             children: (0, im.jsx)(ym.c, {
+             children: (0, gD.jsx)(WD.e, {
```

#### 1025. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L11595` → after: `L11595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R11595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L11595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L11595) · [Before (L11595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L11595)

```diff
-             children: [(0, im.jsx)(ym.c, {
+             children: [(0, gD.jsx)(WD.e, {
```

#### 1026. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L11628` → after: `L11628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R11628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L11628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L11628) · [Before (L11628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L11628)

```diff
-               this.followed.set(hm, Dm), (0, mT.i)(xm.element, !0), gT(Dm, Am, am)
+               this.followed.set(pD, cD), (0, qD.e)(rD.element, !0), Fz(cD, sD, KD)
```

#### 1027. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L11655` → after: `L11655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R11655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L11655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L11655) · [Before (L11655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L11655)

```diff
-         for (const Tm of [...this.followed.keys()])(0, lT.g)(mm, Tm) || this.release(Tm)
+         for (const zD of [...this.followed.keys()])(0, yz.f)(DD, zD) || this.release(zD)
```

#### 1028. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L11666` → after: `L11666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R11666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L11666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L11666) · [Before (L11666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L11666)

```diff
-         (0, mT.i)(Tm.hit, !1);
+         (0, qD.e)(zD.hit, !1);
```

#### 1029. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L11689` → after: `L11689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R11689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L11689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L11689) · [Before (L11689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L11689)

```diff
-       hm.style.translate = `${wm*im}px ${Dm*im}px`
+       pD.style.translate = `${LD*gD}px ${cD*gD}px`
```

#### 1030. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L11692-L11693` → after: `L11692-L11693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R11692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L11692-L11693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L11692-L11693) · [Before (L11692-L11693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L11692-L11693)

```diff
-       const mm = (0, Um.j)(),
-         Tm = (0, Zm.t)();
+       const DD = (0, vD.l)(),
+         zD = (0, PD.o)();
```

#### 1031. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L11698` → after: `L11698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R11698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L11698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L11698) · [Before (L11698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L11698)

```diff
-       (0, Wm.l)(mm.x, mm.y)
+       (0, YD.n)(DD.x, DD.y)
```

#### 1032. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L11706-L11708` → after: `L11706-L11708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R11706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L11706-L11708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L11706-L11708) · [Before (L11706-L11708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L11706-L11708)

```diff
-           } = (0, cm.m)(["clientEscMenuOptions"]).clientEscMenuOptions;
-         return (0, hm.useEffect)((() => ((0, Fm.h)(dm.w.TouchControls, dm.w.TouchControls), () => {
-           (0, Fm.h)(dm.w.TouchControls, 0), (0, Wm.l)(0, 0)
+           } = (0, XD.n)(["clientEscMenuOptions"]).clientEscMenuOptions;
+         return (0, pD.useEffect)((() => ((0, HD.j)(tD.s.TouchControls, tD.s.TouchControls), () => {
+           (0, HD.j)(tD.s.TouchControls, 0), (0, YD.n)(0, 0)
```

#### 1033. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L11717` → after: `L11717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R11717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L11717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L11717) · [Before (L11717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L11717)

```diff
-             speedCurve: fm ? bT : void 0,
+             speedCurve: wD ? Cz : void 0,
```

#### 1034. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L11726` → after: `L11726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R11726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L11726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L11726) · [Before (L11726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L11726)

```diff
-           } = (0, cm.m)(["clientEscMenuOptions"]),
+           } = (0, XD.n)(["clientEscMenuOptions"]),
```

#### 1035. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L11728-L11729` → after: `L11728-L11729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R11728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L11728-L11729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L11728-L11729) · [Before (L11728-L11729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L11728-L11729)

```diff
-         return (0, hm.useEffect)((() => new dT(Wm.k).start()), []), (0, hm.useEffect)((() => {
-           Km.j.gp(YT.e)
+         return (0, pD.useEffect)((() => new tz(YD.j).start()), []), (0, pD.useEffect)((() => {
+           OD.l.KG(Iz.e)
```

#### 1036. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L11746` → after: `L11746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R11746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L11746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L11746) · [Before (L11746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L11746)

```diff
-         (0, mT.i)(fm.currentTarget, Tm), mm(Tm, fm.nativeEvent)
+         (0, qD.e)(wD.currentTarget, zD), DD(zD, wD.nativeEvent)
```

#### 1037. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L11756-L11757` → after: `L11756-L11757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R11756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L11756-L11757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L11756-L11757) · [Before (L11756-L11757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L11756-L11757)

```diff
-       const mm = (0, Im.g)("canCrouch"),
-         Tm = (0, Jm.k)("crouching"),
+       const DD = (0, MD.h)("canCrouch"),
+         zD = (0, QD.i)("crouching"),
```

#### 1038. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L11759` → after: `L11759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R11759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L11759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L11759) · [Before (L11759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L11759)

```diff
-       rT(dm.v.Crouch, fm);
+       Nz(tD.r.Crouch, wD);
```

#### 1039. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L11761` → after: `L11761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R11761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L11761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L11761) · [Before (L11761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L11761)

```diff
-           fm.current = mm, (0, gm.C)(dm.v.Crouch, mm, Tm)
+           wD.current = DD, (0, FD.y)(tD.r.Crouch, DD, zD)
```

#### 1040. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L11765` → after: `L11765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R11765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L11765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L11765) · [Before (L11765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L11765)

```diff
-           fm.current && (am.current && (0, mT.i)(am.current, !1), Am(!1, {
+           wD.current && (KD.current && (0, qD.e)(KD.current, !1), sD(!1, {
```

#### 1041. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L11780` → after: `L11780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R11780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L11780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L11780) · [Before (L11780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L11780)

```diff
-         children: (0, im.jsx)(ym.c, {
+         children: (0, gD.jsx)(WD.e, {
```

#### 1042. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L11820` → after: `L11820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R11820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L11820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L11820) · [Before (L11820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L11820)

```diff
-         render: fm => (0, im.jsx)(of, {
+         render: wD => (0, gD.jsx)(Uw, {
```

#### 1043. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L11828` → after: `L11828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R11828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L11828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L11828) · [Before (L11828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L11828)

```diff
-     function of(mm) {
+     function Uw(DD) {
```

#### 1044. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L11840` → after: `L11840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R11840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L11840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L11840) · [Before (L11840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L11840)

```diff
-           (0, gm.C)(dm.v.Fly, mm, Tm)
+           (0, FD.y)(tD.r.Fly, DD, zD)
```

#### 1045. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L11842` → after: `L11842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R11842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L11842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L11842) · [Before (L11842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L11842)

```diff
-         children: (0, im.jsx)(ym.c, {
+         children: (0, gD.jsx)(WD.e, {
```

#### 1046. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L11856` → after: `L11856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R11856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L11856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L11856) · [Before (L11856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L11856)

```diff
-       } = (0, Sm.A)(), {
+       } = (0, TD.E)(), {
```

#### 1047. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L11860` → after: `L11860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R11860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L11860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L11860) · [Before (L11860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L11860)

```diff
-       } = (0, Jm.k)("heldItemAim"), Rm = (0, Jm.k)("gliderBoostFuel"), {
+       } = (0, QD.i)("heldItemAim"), RD = (0, QD.i)("gliderBoostFuel"), {
```

#### 1048. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L11863` → after: `L11863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R11863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L11863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L11863) · [Before (L11863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L11863)

```diff
-       } = (0, Jm.k)("flight"), om = (0, Im.g)("touchscreenActionButton"), Om = xm ? Af : om, Ym = wm ? {
+       } = (0, QD.i)("flight"), fD = (0, MD.h)("touchscreenActionButton"), ID = rD ? pw : fD, BD = LD ? {
```

#### 1049. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L11870` → after: `L11870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R11870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L11870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L11870) · [Before (L11870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L11870)

```diff
-       } : null, jm = null !== Ym && void 0 !== Ym ? Ym : qm, Vm = null !== (Tm = null === (fm = xm ? Ym : null !== qm && void 0 !== qm ? qm : Ym) || void 0 === fm ? void 0 : fm.icon) && void 0 !== Tm ? Tm : Df, Km = [!Am && jm ? pf(Wm.c.Action2, jm.icon, hm, jm.label) : null, xm  … [truncated]
+       } : null, hD = null !== BD && void 0 !== BD ? BD : GD, nD = null !== (zD = null === (wD = rD ? BD : null !== GD && void 0 !== GD ? GD : BD) || void 0 === wD ? void 0 : wD.icon) && void 0 !== zD ? zD : Lw, OD = [!sD && hD ? Rw(YD.d.Action2, hD.icon, pD, hD.label) : null, rD  … [truncated]
```

#### 1050. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L11873` → after: `L11873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R11873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L11873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L11873) · [Before (L11873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L11873)

```diff
-           code: Wm.c.Action1,
+           code: YD.d.Action1,
```

#### 1051. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L11880` → after: `L11880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R11880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L11880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L11880) · [Before (L11880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L11880)

```diff
-             code: Wm.c.Attack,
+             code: YD.d.Attack,
```

#### 1052. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L11886` → after: `L11886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R11886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L11886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L11886) · [Before (L11886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L11886)

```diff
-             code: Wm.c.Use,
+             code: YD.d.Use,
```

#### 1053. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L11893` → after: `L11893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R11893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L11893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L11893) · [Before (L11893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L11893)

```diff
-           code: Wm.c.Boost,
+           code: YD.d.Boost,
```

#### 1054. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L11922` → after: `L11922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R11922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L11922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L11922) · [Before (L11922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L11922)

```diff
-         children: (0, im.jsx)(Dm.b, {
+         children: (0, gD.jsx)(cD.e, {
```

#### 1055. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L11927-L11929` → after: `L11927-L11929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R11927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L11927-L11929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L11927-L11929) · [Before (L11927-L11929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L11927-L11929)

```diff
-     var qf = fm(4192),
-       jf = fm(3001),
-       Vf = fm(685);
+     var Bw = wD(4272),
+       Gw = wD(2998),
+       hw = wD(648);
```

#### 1056. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L11931` → after: `L11931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R11931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L11931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L11931) · [Before (L11931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L11931)

```diff
-       (0, jm.c)();
+       (0, hD.d)();
```

#### 1057. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L11933` → after: `L11933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R11933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L11933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L11933) · [Before (L11933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L11933)

```diff
-         Tm = (0, jf.c)(),
+         zD = (0, Gw.e)(),
```

#### 1058. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L11940` → after: `L11940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R11940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L11940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L11940) · [Before (L11940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L11940)

```diff
-         const xm = (0, Vf.b)(),
+         const rD = (0, hw.e)(),
```

#### 1059. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L11946` → after: `L11946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R11946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L11946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L11946) · [Before (L11946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L11946)

```diff
-           Ga: hm,
+           kK: pD,
```

#### 1060. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L11948` → after: `L11948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R11948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L11948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L11948) · [Before (L11948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L11948)

```diff
-           Xa: am
+           mK: KD
```

#### 1061. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L11952-L11953` → after: `L11952-L11953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R11952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L11952-L11953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L11952-L11953) · [Before (L11952-L11953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L11952-L11953)

```diff
-           Ga: hm,
-           Xa: am,
+           kK: pD,
+           mK: KD,
```

#### 1062. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L11958` → after: `L11958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R11958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L11958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L11958) · [Before (L11958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L11958)

```diff
-       return (0, Jm.e)("shotDamageToShow", (mm => {
+       return (0, QD.c)("shotDamageToShow", (DD => {
```

#### 1063. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L11975-L11976` → after: `L11975-L11976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R11975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L11975-L11976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L11975-L11976) · [Before (L11975-L11976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L11975-L11976)

```diff
-           Ga: hm,
-           Xa: wm
+           kK: pD,
+           mK: LD
```

#### 1064. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L11980-L11981` → after: `L11980-L11981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R11980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L11980-L11981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L11980-L11981) · [Before (L11980-L11981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L11980-L11981)

```diff
-           Ga: hm,
-           Xa: wm
+           kK: pD,
+           mK: LD
```

#### 1065. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L11986-L11987` → after: `L11986-L11987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R11986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L11986-L11987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L11986-L11987) · [Before (L11986-L11987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L11986-L11987)

```diff
-             Ga: Tm,
-             Xa: hm
+             kK: zD,
+             mK: pD
```

#### 1066. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L12015` → after: `L12015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R12015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L12015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L12015) · [Before (L12015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L12015)

```diff
-           Ga: fm,
+           kK: wD,
```

#### 1067. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L12017` → after: `L12017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R12017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L12017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L12017) · [Before (L12017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L12017)

```diff
-           Xa: Am
+           mK: sD
```

#### 1068. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L12029-L12030` → after: `L12029-L12030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R12029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L12029-L12030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L12029-L12030) · [Before (L12029-L12030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L12029-L12030)

```diff
-             Ga: hm,
-             Xa: Am,
+             kK: pD,
+             mK: sD,
```

#### 1069. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L12044-L12045` → after: `L12044-L12045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R12044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L12044-L12045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L12044-L12045) · [Before (L12044-L12045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L12044-L12045)

```diff
-               transform: `translate(${mm.pos.x}vw, ${mm.pos.y}vh)`,
-               transition: `transform ${Am}ms ease-out`
+               transform: `translate(${DD.pos.x}vw, ${DD.pos.y}vh)`,
+               transition: `transform ${sD}ms ease-out`
```

#### 1070. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L12048` → after: `L12048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R12048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L12048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L12048) · [Before (L12048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L12048)

```diff
-               children: (0, im.jsx)(Dm.b, {
+               children: (0, gD.jsx)(cD.e, {
```

#### 1071. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L12083` → after: `L12083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R12083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L12083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L12083) · [Before (L12083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L12083)

```diff
-     var Qf = fm(36681);
+     var Ow = wD(36577);
```

#### 1072. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L12086` → after: `L12086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R12086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L12086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L12086) · [Before (L12086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L12086)

```diff
-       const mm = (0, Jm.k)("health");
+       const DD = (0, QD.i)("health");
```

#### 1073. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L12089` → after: `L12089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R12089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L12089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L12089) · [Before (L12089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L12089)

```diff
-         children: [(0, im.jsx)(Qf.b, {
+         children: [(0, gD.jsx)(Ow.d, {
```

#### 1074. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L12114` → after: `L12114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R12114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L12114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L12114) · [Before (L12114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L12114)

```diff
-       return (0, jm.f)(), null === Tm || null === fm || Tm === hm || fm === hm ? null : (0, im.jsx)("div", {
+       return (0, hD.e)(), null === zD || null === wD || zD === pD || wD === pD ? null : (0, gD.jsx)("div", {
```

#### 1075. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L12119` → after: `L12119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R12119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L12119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L12119) · [Before (L12119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L12119)

```diff
-             className: `BottomScreenStatBar ${am}`,
+             className: `BottomScreenStatBar ${KD}`,
```

#### 1076. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L12121` → after: `L12121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R12121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L12121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L12121) · [Before (L12121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L12121)

```diff
-               transform: `scaleX(${Math.max(Tm/fm,0)})`,
+               transform: `scaleX(${Math.max(zD/wD,0)})`,
```

#### 1077. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L12126` → after: `L12126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R12126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L12126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L12126) · [Before (L12126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L12126)

```diff
-             children: [(0, im.jsx)(ym.c, {
+             children: [(0, gD.jsx)(WD.e, {
```

#### 1078. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L12128` → after: `L12128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R12128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L12128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L12128) · [Before (L12128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L12128)

```diff
-             }), ` ${Math.ceil(Tm)}/${fm}`]
+             }), ` ${Math.ceil(zD)}/${wD}`]
```

#### 1079. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L12133-L12146` → after: `L12133-L12146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R12133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L12133-L12146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L12133-L12146) · [Before (L12133-L12146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L12133-L12146)

```diff
-     var zf = fm(34283),
-       Zf = fm(4471),
-       kf = fm(1329),
-       bf = fm(2738),
-       Sf = fm(1454),
-       ef = fm(1309),
-       Nf = fm(3423),
-       Gf = fm(2979),
-       Xf = fm(2109),
-       Pf = fm(800),
-       Hf = fm(3471),
-       yf = fm(135),
-       Cf = fm(1681),
-       rf = fm(34203);
+     var Qw = wD(34206),
+       Xw = wD(4552),
+       Vw = wD(1339),
+       Pw = wD(2748),
+       Cw = wD(1447),
+       xw = wD(1324),
+       Tw = wD(3424),
+       bw = wD(2962),
+       jw = wD(2116),
+       dw = wD(760),
+       Sw = wD(3473),
+       iw = wD(128),
+       lw = wD(1702),
+       Ww = wD(34139);
```

#### 1080. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L12156` → after: `L12156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R12156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L12156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L12156) · [Before (L12156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L12156)

```diff
-       } = (0, Sm.A)(), xm = (0, Zm.t)(), {
+       } = (0, TD.E)(), rD = (0, PD.o)(), {
```

#### 1081. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L12158` → after: `L12158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R12158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L12158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L12158) · [Before (L12158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L12158)

```diff
-       } = (0, cm.m)(["mobilePushNotificationsCanAsk"]), [Dm, Rm] = (0, hm.useState)(null), [pm, Em] = (0, hm.useState)(!1), [om, Om] = (0, hm.useState)(null);
+       } = (0, XD.n)(["mobilePushNotificationsCanAsk"]), [cD, RD] = (0, pD.useState)(null), [AD, UD] = (0, pD.useState)(!1), [fD, ID] = (0, pD.useState)(null);
```

#### 1082. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L12165` → after: `L12165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R12165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L12165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L12165) · [Before (L12165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L12165)

```diff
-           return (0, rf.b)().then((Tm => {
+           return (0, Ww.e)().then((zD => {
```

#### 1083. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L12173` → after: `L12173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R12173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L12173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L12173) · [Before (L12173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L12173)

```diff
-           Ym && !Am && (0, rf.h)()
+           BD && !sD && (0, Ww.k)()
```

#### 1084. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L12176` → after: `L12176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R12176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L12176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L12176) · [Before (L12176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L12176)

```diff
-           (0, rf.h)(), Em(!0)
+           (0, Ww.k)(), UD(!0)
```

#### 1085. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L12178` → after: `L12178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R12178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L12178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L12178) · [Before (L12178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L12178)

```diff
-         jm = Cf.e.supports("notifications") ? "app" : "browser";
+         hD = lw.c.supports("notifications") ? "app" : "browser";
```

#### 1086. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L12186` → after: `L12186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R12186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L12186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L12186) · [Before (L12186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L12186)

```diff
-           children: [(0, im.jsx)(ym.c, {
+           children: [(0, gD.jsx)(WD.e, {
```

#### 1087. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L12191` → after: `L12191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R12191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L12191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L12191) · [Before (L12191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L12191)

```diff
-           children: [(0, im.jsx)(Sf.e, {
+           children: [(0, gD.jsx)(Cw.f, {
```

#### 1088. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L12217` → after: `L12217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R12217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L12217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L12217) · [Before (L12217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L12217)

```diff
-     var lf = fm(354);
+     var Zw = wD(351);
```

#### 1089. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L12224` → after: `L12224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R12224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L12224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L12224) · [Before (L12224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L12224)

```diff
-       return null !== fm ? fm : null !== hm ? Tm(`lifeform:${(0,lf.ue)(hm)}`) : null
+       return null !== wD ? wD : null !== pD ? zD(`lifeform:${(0,Zw.ue)(pD)}`) : null
```

#### 1090. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L12226-L12227` → after: `L12226-L12227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R12226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L12226-L12227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L12226-L12227) · [Before (L12226-L12227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L12226-L12227)

```diff
-     var uf = fm(3433),
-       Bf = fm(3437);
+     var kw = wD(3432),
+       mw = wD(3435);
```

#### 1091. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L12238` → after: `L12238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R12238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L12238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L12238) · [Before (L12238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L12238)

```diff
-         const fm = (0, jm.c)(),
+         const wD = (0, hD.d)(),
```

#### 1092. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L12242` → after: `L12242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R12242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L12242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L12242) · [Before (L12242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L12242)

```diff
-           } = (0, Sm.A)(),
+           } = (0, TD.E)(),
```

#### 1093. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L12245-L12246` → after: `L12245-L12246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R12245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L12245-L12246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L12245-L12246) · [Before (L12245-L12246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L12245-L12246)

```diff
-           } = (0, cm.m)(["loadingOverlayVisible"]),
-           Rm = (0, Zm.t)(),
+           } = (0, XD.n)(["loadingOverlayVisible"]),
+           RD = (0, PD.o)(),
```

#### 1094. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L12250-L12253` → after: `L12250-L12253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R12250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L12250-L12253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L12250-L12253) · [Before (L12250-L12253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L12250-L12253)

```diff
-           nm = (0, jf.c)(),
-           zm = (0, Im.g)("respawnButtonText"),
-           km = (0, Im.g)("usePlayAgainButton"),
-           bm = (0, Im.g)("useRespawnButton"),
+           ED = (0, Gw.e)(),
+           VD = (0, MD.h)("respawnButtonText"),
+           CD = (0, MD.h)("usePlayAgainButton"),
+           xD = (0, MD.h)("useRespawnButton"),
```

#### 1095. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L12256-L12257` → after: `L12256-L12257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R12256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L12256-L12257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L12256-L12257) · [Before (L12256-L12257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L12256-L12257)

```diff
-           } = (0, Jm.k)("connectedGame"),
-           Nm = (0, hm.useRef)(Qm.b.get("secsToRespawn")),
+           } = (0, QD.i)("connectedGame"),
+           jD = (0, pD.useRef)(JD.e.get("secsToRespawn")),
```

#### 1096. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L12259-L12260` → after: `L12259-L12260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R12259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L12259-L12260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L12259-L12260) · [Before (L12259-L12260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L12259-L12260)

```diff
-           Xm = (0, hm.useRef)(Qm.b.get("secsToRespawn")),
-           Pm = (0, hm.useRef)(Qm.b.get("autoRespawn")),
+           SD = (0, pD.useRef)(JD.e.get("secsToRespawn")),
+           iD = (0, pD.useRef)(JD.e.get("autoRespawn")),
```

#### 1097. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L12268` → after: `L12268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R12268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L12268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L12268) · [Before (L12268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L12268)

```diff
-         (0, Im.c)("secsToRespawn", (mm => {
+         (0, MD.g)("secsToRespawn", (DD => {
```

#### 1098. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L12270` → after: `L12270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R12270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L12270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L12270) · [Before (L12270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L12270)

```diff
-         })), (0, Im.c)("autoRespawn", (mm => {
+         })), (0, MD.g)("autoRespawn", (DD => {
```

#### 1099. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L12276` → after: `L12276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R12276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L12276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L12276) · [Before (L12276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L12276)

```diff
-         (0, Jm.e)("localPlayerAliveSet", tm), (0, wm.g)(Gf.m, (mm => {
+         (0, QD.c)("localPlayerAliveSet", uD), (0, LD.g)(bw.q, (DD => {
```

#### 1100. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L12293` → after: `L12293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R12293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L12293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L12293) · [Before (L12293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L12293)

```diff
-         (0, Jm.e)("kill", (mm => {
+         (0, QD.c)("kill", (DD => {
```

#### 1101. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L12324` → after: `L12324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R12324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L12324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L12324) · [Before (L12324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L12324)

```diff
-               Nm.current = Math.max(Nm.current - 1, 0), nm(), Nm.current <= 0 && (clearInterval(Hm.current), Hm.current = null, Qm.b.get("autoRespawn") && Wm())
+               jD.current = Math.max(jD.current - 1, 0), ED(), jD.current <= 0 && (clearInterval(lD.current), lD.current = null, JD.e.get("autoRespawn") && YD())
```

#### 1102. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L12332` → after: `L12332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R12332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L12332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L12332) · [Before (L12332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L12332)

```diff
-               Qm.b.get("autoRespawn") ? mm() : (0, ef.ab)((() => {
+               JD.e.get("autoRespawn") ? DD() : (0, xw.gb)((() => {
```

#### 1103. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L12339` → after: `L12339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R12339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L12339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L12339) · [Before (L12339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L12339)

```diff
-             return null === (mm = (0, Pf.o)(em)) || void 0 === mm ? void 0 : mm.otherGameLinksOnRespawnPage
+             return null === (DD = (0, dw.m)(bD)) || void 0 === DD ? void 0 : DD.otherGameLinksOnRespawnPage
```

#### 1104. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L12344-L12345` → after: `L12344-L12345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R12344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L12344-L12345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L12344-L12345) · [Before (L12344-L12345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L12344-L12345)

```diff
-           hT = Rm && dm && null !== (mm = null === (Tm = (0, lm.g)()) || void 0 === Tm ? void 0 : Tm.getBoundButton("menuConfirm")) && void 0 !== mm ? mm : null,
-           AT = mm => mT ? mm : xm("respawnPage:actionInSeconds", {
+           wz = RD && tD && null !== (DD = null === (zD = (0, kD.g)()) || void 0 === zD ? void 0 : zD.getBoundButton("menuConfirm")) && void 0 !== DD ? DD : null,
+           pz = DD => qD ? DD : rD("respawnPage:actionInSeconds", {
```

#### 1105. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L12349` → after: `L12349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R12349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L12349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L12349) · [Before (L12349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L12349)

```diff
-         return (0, im.jsx)(zf.c, {
+         return (0, gD.jsx)(Qw.d, {
```

#### 1106. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L12353` → after: `L12353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R12353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L12353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L12353) · [Before (L12353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L12353)

```diff
-           children: (0, im.jsx)(Nf.c, {
+           children: (0, gD.jsx)(Tw.d, {
```

#### 1107. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L12356` → after: `L12356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R12356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L12356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L12356) · [Before (L12356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L12356)

```diff
-             children: (0, im.jsxs)(Zf.d, {
+             children: (0, gD.jsxs)(Xw.c, {
```

#### 1108. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L12366-L12367` → after: `L12366-L12367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R12366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L12366-L12367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L12366-L12367) · [Before (L12366-L12367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L12366-L12367)

```diff
-               children: [(0, yf.g)() && (0, im.jsx)(Sf.d, {
-                 onClick: Xf.b,
+               children: [(0, iw.m)() && (0, gD.jsx)(Cw.d, {
+                 onClick: jw.e,
```

#### 1109. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L12377` → after: `L12377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R12377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L12377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L12377) · [Before (L12377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L12377)

```diff
-                     children: fm[0] > 925 && (0, im.jsx)(bf.c, {
+                     children: wD[0] > 925 && (0, gD.jsx)(Pw.e, {
```

#### 1110. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L12401` → after: `L12401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R12401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L12401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L12401) · [Before (L12401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L12401)

```diff
-                           children: [(0, im.jsx)(ym.c, {
+                           children: [(0, gD.jsx)(WD.e, {
```

#### 1111. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L12407` → after: `L12407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R12407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L12407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L12407) · [Before (L12407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L12407)

```diff
-                           children: [null === hT && (Gm.current ? xm("respawnPage:pressAnywhereToContinue") : mT ? xm("respawnPage:respawning") : AT(xm("general:respawn"))), null !== hT && (0, im.jsx)(uf.e, {
+                           children: [null === wz && (dD.current ? rD("respawnPage:pressAnywhereToContinue") : qD ? rD("respawnPage:respawning") : pz(rD("general:respawn"))), null !== wz && (0, gD.jsx)(kw.b, {
```

#### 1112. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L12409` → after: `L12409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R12409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L12409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L12409) · [Before (L12409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L12409)

```diff
-                               button: uf.f
+                               button: kw.c
```

#### 1113. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L12423` → after: `L12423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R12423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L12423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L12423) · [Before (L12423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L12423)

```diff
-                           children: [km && (0, im.jsx)(Sf.m, {
+                           children: [CD && (0, gD.jsx)(Cw.o, {
```

#### 1114. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L12427-L12429` → after: `L12427-L12429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R12427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L12427-L12429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L12427-L12429) · [Before (L12427-L12429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L12427-L12429)

```diff
-                               (0, ef.ab)((() => {
-                                 (0, cm.l)("inGameReplay");
-                                 const mm = (0, kf.e)(em);
+                               (0, xw.gb)((() => {
+                                 (0, XD.k)("inGameReplay");
+                                 const DD = (0, Vw.c)(bD);
```

#### 1115. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L12436` → after: `L12436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R12436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L12436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L12436) · [Before (L12436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L12436)

```diff
-                           }), bm && (0, im.jsx)(Sf.e, {
+                           }), xD && (0, gD.jsx)(Cw.f, {
```

#### 1116. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L12444` → after: `L12444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R12444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L12444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L12444) · [Before (L12444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L12444)

```diff
-                           }), !(0, yf.g)() && (0, im.jsx)(Sf.O, {
+                           }), !(0, iw.m)() && (0, gD.jsx)(Cw.R, {
```

#### 1117. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L12446` → after: `L12446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R12446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L12446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L12446) · [Before (L12446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L12446)

```diff
-                             onClick: Xf.b,
+                             onClick: jw.e,
```

#### 1118. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L12458` → after: `L12458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R12458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L12458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L12458) · [Before (L12458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L12458)

```diff
-                             children: Fm.map((mm => (0, im.jsx)(Hf.f, {
+                             children: HD.map((DD => (0, gD.jsx)(Sw.g, {
```

#### 1119. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L12469-L12470` → after: `L12469-L12470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R12469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L12469-L12470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L12469-L12470) · [Before (L12469-L12470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L12469-L12470)

```diff
-                                 (0, cm.l)("inGameReplay");
-                                 const Tm = (0, kf.e)(mm);
+                                 (0, XD.k)("inGameReplay");
+                                 const zD = (0, Vw.c)(DD);
```

#### 1120. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L12489` → after: `L12489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R12489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L12489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L12489) · [Before (L12489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L12489)

```diff
-                   children: (0, im.jsx)(bf.c, {
+                   children: (0, gD.jsx)(Pw.e, {
```

#### 1121. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L12509` → after: `L12509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R12509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L12509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L12509) · [Before (L12509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L12509)

```diff
-     var tf = fm(36698);
+     var aw = wD(36588);
```

#### 1122. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L12557` → after: `L12557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R12557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L12557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L12557) · [Before (L12557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L12557)

```diff
-             Zh: Am,
+             Qp: sD,
```

#### 1123. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L12561-L12562` → after: `L12561-L12562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R12561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L12561-L12562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L12561-L12562) · [Before (L12561-L12562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L12561-L12562)

```diff
-           null === (hm = Tm.current) || void 0 === hm || hm.cancel(), xm.classList.remove("HitmarkerCrit"), am ? (xm.style.left = `${am.x}%`, xm.style.top = `${am.y}%`) : (xm.style.left = "50%", xm.style.top = "50%"), xm.style.rotate = 16 * (Math.random() - .5) + "deg", Am && xm. … [truncated]
-           const wm = xm.animate(Am ? df : Uf, Am ? Wf : gf);
+           null === (pD = zD.current) || void 0 === pD || pD.cancel(), rD.classList.remove("HitmarkerCrit"), KD ? (rD.style.left = `${KD.x}%`, rD.style.top = `${KD.y}%`) : (rD.style.left = "50%", rD.style.top = "50%"), rD.style.rotate = 16 * (Math.random() - .5) + "deg", sD && rD. … [truncated]
+           const LD = rD.animate(sD ? vw : uw, sD ? Fw : tw);
```

#### 1124. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L12569` → after: `L12569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R12569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L12569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L12569) · [Before (L12569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L12569)

```diff
-             Zh: Tm
+             Qp: zD
```

#### 1125. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L12572` → after: `L12572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R12572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L12572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L12572) · [Before (L12572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L12572)

```diff
-             Zh: Tm
+             Qp: zD
```

#### 1126. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L12576` → after: `L12576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R12576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L12576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L12576) · [Before (L12576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L12576)

```diff
-             Zh: Tm,
+             Qp: zD,
```

#### 1127. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L12580-L12581` → after: `L12580-L12581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R12580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L12580-L12581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L12580-L12581) · [Before (L12580-L12581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L12580-L12581)

```diff
-             Zh: Tm,
-             screenPos: cm.c.get("isTouchScreen") ? hm : void 0
+             Qp: zD,
+             screenPos: XD.e.get("isTouchScreen") ? pD : void 0
```

#### 1128. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L12585` → after: `L12585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R12585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L12585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L12585) · [Before (L12585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L12585)

```diff
-             Zh: Tm,
+             Qp: zD,
```

#### 1129. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L12589` → after: `L12589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R12589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L12589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L12589) · [Before (L12589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L12589)

```diff
-             Zh: Tm,
+             Qp: zD,
```

#### 1130. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L12617` → after: `L12617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R12617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L12617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L12617) · [Before (L12617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L12617)

```diff
-       })), (0, Jm.e)("localPlayerAliveSet", (Tm => {
+       })), (0, QD.c)("localPlayerAliveSet", (zD => {
```

#### 1131. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L12621-L12622` → after: `L12621-L12622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R12621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L12621-L12622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L12621-L12622) · [Before (L12621-L12622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L12621-L12622)

```diff
-     var Th = fm(1893),
-       fh = fm(36717),
+     var qw = wD(1915),
+       Dp = wD(36599),
```

#### 1132. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L12624-L12628` → after: `L12624-L12628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R12624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L12624-L12628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L12624-L12628) · [Before (L12624-L12628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L12624-L12628)

```diff
-       Ah = fm(2006),
-       ah = fm(1992),
-       xh = fm(3301),
-       wh = fm(34308);
-     const Dh = lf.he ? 7e7 : 7e3,
+       wp = wD(2015),
+       pp = wD(2004),
+       sp = wD(3288),
+       Kp = wD(34218);
+     const rp = Zw.de ? 7e7 : 7e3,
```

#### 1133. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L12632` → after: `L12632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R12632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L12632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L12632) · [Before (L12632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L12632)

```diff
-       const Tm = (0, xh.c)(mm);
+       const zD = (0, sp.e)(DD);
```

#### 1134. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L12637` → after: `L12637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R12637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L12637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L12637) · [Before (L12637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L12637)

```diff
-       if (!mm) return console.error(`Killfeed colour was ${mm}`), ih;
+       if (!DD) return console.error(`Killfeed colour was ${DD}`), Lp;
```

#### 1135. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L12641` → after: `L12641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R12641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L12641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L12641) · [Before (L12641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L12641)

```diff
-         return console.warn(`Killfeed colour ${mm} is not a colour`), ih
+         return console.warn(`Killfeed colour ${DD} is not a colour`), Lp
```

#### 1136. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L12647-L12648` → after: `L12647-L12648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R12647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L12647-L12648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L12647-L12648) · [Before (L12647-L12648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L12647-L12648)

```diff
-       } = (0, Sm.A)(), Tm = (0, hm.useRef)([]), fm = (0, jf.c)();
-       return (0, Jm.e)("kill", (function(hm) {
+       } = (0, TD.E)(), zD = (0, pD.useRef)([]), wD = (0, Gw.e)();
+       return (0, QD.c)("kill", (function(pD) {
```

#### 1137. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L12666-L12667` → after: `L12666-L12667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R12666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L12666-L12667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L12666-L12667) · [Before (L12666-L12667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L12666-L12667)

```diff
-               killer: (0, Ah.h)(xm.realName, pm),
-               dead: (0, Ah.h)(wm.realName, pm)
+               killer: (0, wp.e)(rD.realName, AD),
+               dead: (0, wp.e)(LD.realName, AD)
```

#### 1138. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L12675` → after: `L12675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R12675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L12675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L12675) · [Before (L12675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L12675)

```diff
-             reactId: `${null!==(Am=xm.id)&&void 0!==Am?Am:xm.shownName}|${null!==(am=wm.id)&&void 0!==am?am:wm.shownName}|${Date.now()}`,
+             reactId: `${null!==(sD=rD.id)&&void 0!==sD?sD:rD.shownName}|${null!==(KD=LD.id)&&void 0!==KD?KD:LD.shownName}|${Date.now()}`,
```

#### 1139. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L12707` → after: `L12707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R12707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L12707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L12707) · [Before (L12707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L12707)

```diff
-               background: `linear-gradient(90deg, ${xm} calc(100% - 10rem), ${wm} 100%)`
+               background: `linear-gradient(90deg, ${rD} calc(100% - 10rem), ${LD} 100%)`
```

#### 1140. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L12715` → after: `L12715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R12715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L12715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L12715) · [Before (L12715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L12715)

```diff
-             }), Rm.killer && (0, im.jsx)(ah.d, {}), (0, im.jsx)("div", {
+             }), RD.killer && (0, gD.jsx)(pp.c, {}), (0, gD.jsx)("div", {
```

#### 1141. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L12727` → after: `L12727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R12727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L12727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L12727) · [Before (L12727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L12727)

```diff
-             }), Am ? (0, im.jsx)(ym.c, {
+             }), sD ? (0, gD.jsx)(WD.e, {
```

#### 1142. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L12733` → after: `L12733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R12733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L12733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L12733) · [Before (L12733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L12733)

```diff
-             }), Rm.dead && (0, im.jsx)(ah.d, {})]
+             }), RD.dead && (0, gD.jsx)(pp.c, {})]
```

#### 1143. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L12738-L12739` → after: `L12738-L12739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R12738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L12738-L12739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L12738-L12739) · [Before (L12738-L12739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L12738-L12739)

```diff
-     var oh = fm(36768),
-       Oh = fm(1164),
+     var Ap = wD(36646),
+       Up = wD(1138),
```

#### 1144. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L12741-L12743` → after: `L12741-L12743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R12741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L12741-L12743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L12741-L12743) · [Before (L12741-L12743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L12741-L12743)

```diff
-       qh = fm(3409),
-       jh = fm(36775),
-       Vh = fm(1296);
+       Ip = wD(3405),
+       Bp = wD(36650),
+       Gp = wD(1309);
```

#### 1145. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L12754` → after: `L12754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R12754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L12754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/85.js#L12754) · [Before (L12754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/85.js#L12754)

```diff
-             Ih: wm
+             hp: LD
```
