# Changed — Bundle Modifications Report (Part 062 / 086)

- **Updated at**: `2026-11-28T01:59 JST`
- **Part**: `62 / 86` (**404** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 061](part-061.md) · [Part 063 →](part-063.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (gw4e3a.937868ec → 1yqdn.8419f1e1 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (359 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d)

#### 135. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1169` → after: `L970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L970) · [Before (L1169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1169)

```diff
-       return AB.u.playerFlags(BB.api.apiView, 0)
+       return MW.z.playerFlags(WW.api.apiView, 0)
```

#### 136. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1173-L1174` → after: `L974-L975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L974-L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L974-L975) · [Before (L1173-L1174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1173-L1174)

```diff
-           const OB = BB.isSessionLive && 0 !== (EB(BB) & AB.Id.FreeCamMoves),
-             GB = BB.freeCameraAllowed() && null === XB.c.get("scriptedCameraFacing");
+           const iW = WW.isSessionLive && 0 !== (fW(WW) & MW.Ud.FreeCamMoves),
+             OW = WW.freeCameraAllowed() && null === VW.d.get("scriptedCameraFacing");
```

#### 137. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1176` → after: `L977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L977) · [Before (L1176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1176)

```diff
-         }), wB[0], (BB => (0, QB.w)(BB)))
+         }), pW[0], (WW => (0, NW.v)(WW)))
```

#### 138. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1181` → after: `L982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L982) · [Before (L1181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1181)

```diff
-           null === (OB = (0, oB.j)()) || void 0 === OB || OB.setFreeCameraMovesFly(BB)
+           null === (iW = (0, PW.f)()) || void 0 === iW || iW.setFreeCameraMovesFly(WW)
```

#### 139. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1186-L1187` → after: `L987-L988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L987-L988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L987-L988) · [Before (L1186-L1187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1186-L1187)

```diff
-           const BB = (0, oB.j)();
-           return null !== BB && void 0 !== BB && BB.isSessionLive && BB.renderFrame.hasView && 0 !== (EB(BB) & AB.Id.FreeCam) ? BB.renderFrame.cameraPosition : null
+           const WW = (0, PW.f)();
+           return null !== WW && void 0 !== WW && WW.isSessionLive && WW.renderFrame.hasView && 0 !== (fW(WW) & MW.Ud.FreeCam) ? WW.renderFrame.cameraPosition : null
```

#### 140. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1190` → after: `L991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L991) · [Before (L1190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1190)

```diff
-     var eB = GB(39896);
+     var qW = OW(40416);
```

#### 141. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1195` → after: `L996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L996) · [Before (L1195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1195)

```diff
-       const BB = (0, oB.j)();
+       const WW = (0, PW.f)();
```

#### 142. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1197-L1204` → after: `L998-L1005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L998-L1005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L998-L1005) · [Before (L1197-L1204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1197-L1204)

```diff
-       const OB = 0 !== (AB.u.playerFlags(BB.api.apiView, 0) & AB.Id.FreeCam);
-       OB !== TB && (TB = OB, (0, eB.d)(OB))
-     }
-     var HB = GB(353),
-       vB = GB(37723),
-       sB = GB(2059);
-     var xB = GB(42039),
-       tB = GB(41652);
+       const iW = 0 !== (MW.z.playerFlags(WW.api.apiView, 0) & MW.Ud.FreeCam);
+       iW !== RW && (RW = iW, (0, qW.e)(iW))
+     }
+     var aW = OW(344),
+       rW = OW(38195),
+       zW = OW(2072);
+     var FW = OW(42513),
+       QW = OW(42165);
```

#### 143. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1215` → after: `L1016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1016) · [Before (L1215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1215)

```diff
-         label: null !== (OB = (0, xB.c)(BB, "interactionPrompt")) && void 0 !== OB ? OB : null
+         label: null !== (iW = (0, FW.c)(WW, "interactionPrompt")) && void 0 !== iW ? iW : null
```

#### 144. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1219-L1220` → after: `L1020-L1021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1020-L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1020-L1021) · [Before (L1219-L1220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1219-L1220)

```diff
-       [AB.vc.Open, {
-         label: yB.e.open
+       [MW.Jc.Open, {
+         label: cW.h.open
```

#### 145. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1222-L1223` → after: `L1023-L1024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1023-L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1023-L1024) · [Before (L1222-L1223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1222-L1223)

```diff
-       [AB.vc.Close, {
-         label: yB.e.close
+       [MW.Jc.Close, {
+         label: cW.h.close
```

#### 146. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1225-L1226` → after: `L1026-L1027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1026-L1027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1026-L1027) · [Before (L1225-L1226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1225-L1226)

```diff
-       [AB.vc.Milk, {
-         label: yB.e.milk
+       [MW.Jc.Milk, {
+         label: cW.h.milk
```

#### 147. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1228-L1229` → after: `L1029-L1030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1029-L1030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1029-L1030) · [Before (L1228-L1229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1228-L1229)

```diff
-       [AB.vc.Shear, {
-         label: yB.e.shear
+       [MW.Jc.Shear, {
+         label: cW.h.shear
```

#### 148. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1231-L1232` → after: `L1032-L1033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1032-L1033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1032-L1033) · [Before (L1231-L1232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1231-L1232)

```diff
-       [AB.vc.Tame, {
-         label: yB.e.tame
+       [MW.Jc.Tame, {
+         label: cW.h.tame
```

#### 149. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1234-L1235` → after: `L1035-L1036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1035-L1036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1035-L1036) · [Before (L1234-L1235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1234-L1235)

```diff
-       [AB.vc.Feed, {
-         label: yB.e.feed
+       [MW.Jc.Feed, {
+         label: cW.h.feed
```

#### 150. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1237-L1238` → after: `L1038-L1039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1038-L1039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1038-L1039) · [Before (L1237-L1238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1237-L1238)

```diff
-       [AB.vc.Ride, {
-         label: yB.e.ride
+       [MW.Jc.Ride, {
+         label: cW.h.ride
```

#### 151. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1243` → after: `L1044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1044) · [Before (L1243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1243)

```diff
-         this.target = BO, this.SM = AB.fd, this.optionName = null, this.pickaxe = new yB.d
+         this.target = Wi, this.NL = MW.nd, this.optionName = null, this.pickaxe = new cW.d
```

#### 152. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1247-L1249` → after: `L1048-L1050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1048-L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1048-L1050) · [Before (L1247-L1249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1247-L1249)

```diff
-         const GB = AB.u.targetBlockId(BB.api.apiView, 0);
-         GB !== this.SM && (this.SM = GB, this.optionName = GB === AB.fd ? null : `${BB.tables.getMetaInfo(GB).rootName}CrosshairText`);
-         const YB = null === this.optionName ? null : null !== (OB = BB.tables.getClientOption(this.optionName)) && void 0 !== OB ? OB : null;
+         const OW = MW.z.targetBlockId(WW.api.apiView, 0);
+         OW !== this.NL && (this.NL = OW, this.optionName = OW === MW.nd ? null : `${WW.tables.getMetaInfo(OW).rootName}CrosshairText`);
+         const mW = null === this.optionName ? null : null !== (iW = WW.tables.getClientOption(this.optionName)) && void 0 !== iW ? iW : null;
```

#### 153. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1252` → after: `L1053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1053) · [Before (L1252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1252)

```diff
-           if (0 === (AB.u.playerFlags(BB.api.apiView, 0) & AB.Id.Breaking) || OB === AB.fd || 0 === OB) return null;
+           if (0 === (MW.z.playerFlags(WW.api.apiView, 0) & MW.Ud.Breaking) || iW === MW.nd || 0 === iW) return null;
```

#### 154. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1258-L1260` → after: `L1059-L1061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1059-L1061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1059-L1061) · [Before (L1258-L1260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1258-L1260)

```diff
-             jB = null === (GB = BB.items.sJ()) || void 0 === GB ? void 0 : GB.name,
-             yB = null !== (YB = QB.getItemStat(oB, "harvestLevel")) && void 0 !== YB ? YB : 0;
-           return (0, HB.Pc)({
+             LW = null === (OW = WW.items.BL()) || void 0 === OW ? void 0 : OW.name,
+             cW = null !== (mW = NW.getItemStat(PW, "harvestLevel")) && void 0 !== mW ? mW : 0;
+           return (0, aW.uc)({
```

#### 155. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1266` → after: `L1067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1067) · [Before (L1266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1266)

```diff
-           }) && null !== (DB = vB.s[yB]) && void 0 !== DB ? DB : null
+           }) && null !== (EW = rW.p[cW]) && void 0 !== EW ? EW : null
```

#### 156. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1271-L1273` → after: `L1072-L1074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1072-L1074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1072-L1074) · [Before (L1271-L1273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1271-L1273)

```diff
-           return GB === AB.vc.Entity ? GO(BB.promptEntity) : GB === AB.vc.TameWith ? {
-             label: (0, yB.w)(BB.tables.nameOfId(BB.interactIcon))
-           } : null !== (OB = YO.get(GB)) && void 0 !== OB ? OB : null
+           return OW === MW.Jc.Entity ? Oi(WW.promptEntity) : OW === MW.Jc.TameWith ? {
+             label: (0, cW.v)(WW.tables.nameOfId(WW.interactIcon))
+           } : null !== (iW = mi.get(OW)) && void 0 !== iW ? iW : null
```

#### 157. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1275` → after: `L1076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1076) · [Before (L1275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1275)

```diff
-         return this.target = (0, sB.k)(this.target, {
+         return this.target = (0, zW.t)(this.target, {
```

#### 158. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1286` → after: `L1087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1087) · [Before (L1286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1286)

```diff
-         return null !== (BB = null === (OB = QO) || void 0 === OB ? void 0 : OB.target) && void 0 !== BB ? BB : BO
+         return null !== (WW = null === (iW = Ni) || void 0 === iW ? void 0 : iW.target) && void 0 !== WW ? WW : Wi
```

#### 159. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1291` → after: `L1092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1092) · [Before (L1291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1291)

```diff
-         const GB = (0, lB.l)((GB => {
+         const OW = (0, lW.k)((OW => {
```

#### 160. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1294` → after: `L1095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1095) · [Before (L1294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1294)

```diff
-           const DB = (0, QB.z)((() => {
+           const EW = (0, NW.x)((() => {
```

#### 161. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1310-L1311` → after: `L1111-L1112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1111-L1112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1111-L1112) · [Before (L1310-L1311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1310-L1311)

```diff
-         health: yB.s,
-         aura: yB.f,
+         health: cW.r,
+         aura: cW.i,
```

#### 162. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1315` → after: `L1116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1116) · [Before (L1315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1315)

```diff
-           const OB = () => 0 !== (AB.u.playerFlags(BB.apiView, 0) & AB.Id.Crouching);
+           const iW = () => 0 !== (MW.z.playerFlags(WW.apiView, 0) & MW.Ud.Crouching);
```

#### 163. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1320` → after: `L1121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1121) · [Before (L1320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1320)

```diff
-               return (0, QB.w)((() => {
+               return (0, NW.v)((() => {
```

#### 164. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1326` → after: `L1127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1127) · [Before (L1326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1326)

```diff
-         }(BB.api).current), !1, (BB => (0, QB.w)(BB))),
+         }(WW.api).current), !1, (WW => (0, NW.v)(WW))),
```

#### 165. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1328-L1331` → after: `L1129-L1132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1129-L1132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1129-L1132) · [Before (L1328-L1331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1328-L1331)

```diff
-           const OB = AB.u.playerFlags(BB.apiView, 0);
-           return (0, yB.o)(0 !== (OB & AB.Id.CanFly), 0 !== (OB & AB.Id.Flying))
-         }(BB.api)), (0, yB.o)(!1, !1), (BB => (0, QB.w)(BB))),
-         gliderBoostFuel: (0, lB.e)((BB => () => AB.u.gliderBoostFuel(BB.api.apiView, 0)), 0, (BB => (0, QB.w)(BB))),
+           const iW = MW.z.playerFlags(WW.apiView, 0);
+           return (0, cW.p)(0 !== (iW & MW.Ud.CanFly), 0 !== (iW & MW.Ud.Flying))
+         }(WW.api)), (0, cW.p)(!1, !1), (WW => (0, NW.v)(WW))),
+         gliderBoostFuel: (0, lW.e)((WW => () => MW.z.gliderBoostFuel(WW.api.apiView, 0)), 0, (WW => (0, NW.v)(WW))),
```

#### 166. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1338` → after: `L1139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1139) · [Before (L1338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1338)

```diff
-         shotDamageToShow: (0, yB.u)((BB => !0 === (0, xB.c)(BB, "showDamageAmounts")))
+         shotDamageToShow: (0, cW.t)((WW => !0 === (0, FW.c)(WW, "showDamageAmounts")))
```

#### 167. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1349` → after: `L1150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1150) · [Before (L1349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1349)

```diff
-           const YB = (0, oB.j)(),
+           const mW = (0, PW.f)(),
```

#### 168. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1351-L1352` → after: `L1152-L1153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1152-L1153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1152-L1153) · [Before (L1351-L1352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1351-L1352)

```diff
-             QB = null === YB || void 0 === YB || null === (BB = YB.items.sJ()) || void 0 === BB || null === (OB = BB.attributes) || void 0 === OB || null === (GB = OB.customAttributes) || void 0 === GB ? void 0 : GB.enchantments;
-           return jO = null !== YB && null !== QB && void 0 !== QB && QB.Momentum ? 0 !== (AB.u.playerFlags(YB.api.apiView, 0) & AB.Id.Breaking) ? Math.max(0, AB.u.momentumFrac(YB.api.apiView, 0)) : Math.max(0, jO - (DB - yO) / 1500) : 0, yO = DB, jO
+             NW = null === mW || void 0 === mW || null === (WW = mW.items.BL()) || void 0 === WW || null === (iW = WW.attributes) || void 0 === iW || null === (OW = iW.customAttributes) || void 0 === OW ? void 0 : OW.enchantments;
+           return Li = null !== mW && null !== NW && void 0 !== NW && NW.Momentum ? 0 !== (MW.z.playerFlags(mW.api.apiView, 0) & MW.Ud.Breaking) ? Math.max(0, MW.z.momentumFrac(mW.api.apiView, 0)) : Math.max(0, Li - (EW - ci) / 1500) : 0, ci = EW, Li
```

#### 169. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1355` → after: `L1156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1156) · [Before (L1355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1355)

```diff
-     var lO = GB(41587);
+     var li = OW(42103);
```

#### 170. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1359` → after: `L1160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1160) · [Before (L1359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1359)

```diff
-         null === (OB = (0, oB.j)()) || void 0 === OB || OB.send(IB.c.LobbyManage, BB)
+         null === (iW = (0, PW.f)()) || void 0 === iW || iW.send(oW.e.LobbyManage, WW)
```

#### 171. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1362-L1367` → after: `L1163-L1168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1163-L1168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1163-L1168) · [Before (L1362-L1367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1362-L1367)

```diff
-     var qO = GB(1238),
-       ZO = GB(37166),
-       NO = GB(9460),
-       RO = GB(1699),
-       WO = GB(2617),
-       AO = GB(5296);
+     var bi = OW(1230),
+       ji = OW(37735),
+       Ui = OW(10027),
+       ki = OW(1729),
+       si = OW(3305),
+       Mi = OW(5560);
```

#### 172. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1375` → after: `L1176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1176) · [Before (L1375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1375)

```diff
-       "inGame" !== XB.c.get("gameState") || (0, RO.u)() || JB.o.tM("ctrlCrouchWithoutFullscreen")
+       "inGame" !== VW.d.get("gameState") || (0, ki.m)() || wW.l.iZ("ctrlCrouchWithoutFullscreen")
```

#### 173. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1381` → after: `L1182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1182) · [Before (L1381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1381)

```diff
-             UO && (UO = !1, JB.o.tM("requestEmoteWheelHoldOpen"))
+             yi && (yi = !1, wW.l.iZ("requestEmoteWheelHoldOpen"))
```

#### 174. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1385` → after: `L1186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1186) · [Before (L1385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1385)

```diff
-           JB.o.tM("toggleFullCoordinateOverlay")
+           wW.l.iZ("toggleFullCoordinateOverlay")
```

#### 175. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1388` → after: `L1189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1189) · [Before (L1388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1388)

```diff
-           (0, ZO.b)() || JB.o.tM("YKeyPressed")
+           (0, ji.e)() || wW.l.iZ("YKeyPressed")
```

#### 176. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1391` → after: `L1192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1192) · [Before (L1391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1391)

```diff
-           (0, ZO.b)() || JB.o.tM("XKeyPressed")
+           (0, ji.e)() || wW.l.iZ("XKeyPressed")
```

#### 177. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1395-L1396` → after: `L1196-L1197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1196-L1197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1196-L1197) · [Before (L1395-L1396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1395-L1396)

```diff
-           JB.o.tM("mouseState", {
-             OM: qO.b.DownFirePrimary,
+           wW.l.iZ("mouseState", {
+             IL: bi.c.DownFirePrimary,
```

#### 178. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1401-L1402` → after: `L1202-L1203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1202-L1203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1202-L1203) · [Before (L1401-L1402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1401-L1402)

```diff
-           JB.o.tM("mouseState", {
-             OM: qO.b.DownFireSecondary,
+           wW.l.iZ("mouseState", {
+             IL: bi.c.DownFireSecondary,
```

#### 179. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1407-L1408` → after: `L1208-L1209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1208-L1209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1208-L1209) · [Before (L1407-L1408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1407-L1408)

```diff
-           JB.o.tM("mouseState", {
-             OM: qO.b.TouchDownLong,
+           wW.l.iZ("mouseState", {
+             IL: bi.c.TouchDownLong,
```

#### 180. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1415` → after: `L1216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1216) · [Before (L1415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1415)

```diff
-           SO(!1), UO ? (UO = !1, (0, NO.b)() || JB.o.tM("requestEmoteWheelHoldOpen")) : JB.o.tM("requestEmoteWheelHoldRelease")
+           Si(!1), yi ? (yi = !1, (0, Ui.d)() || wW.l.iZ("requestEmoteWheelHoldOpen")) : wW.l.iZ("requestEmoteWheelHoldRelease")
```

#### 181. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1419-L1420` → after: `L1220-L1221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1220-L1221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1220-L1221) · [Before (L1419-L1420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1419-L1420)

```diff
-           JB.o.tM("mouseState", {
-             OM: qO.b.UpFirePrimary,
+           wW.l.iZ("mouseState", {
+             IL: bi.c.UpFirePrimary,
```

#### 182. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1425-L1426` → after: `L1226-L1227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1226-L1227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1226-L1227) · [Before (L1425-L1426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1425-L1426)

```diff
-           JB.o.tM("mouseState", {
-             OM: qO.b.UpFireSecondary,
+           wW.l.iZ("mouseState", {
+             IL: bi.c.UpFireSecondary,
```

#### 183. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1431-L1432` → after: `L1232-L1233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1232-L1233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1232-L1233) · [Before (L1431-L1432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1431-L1432)

```diff
-           JB.o.tM("mouseState", {
-             OM: qO.b.UpFirePrimary,
+           wW.l.iZ("mouseState", {
+             IL: bi.c.UpFirePrimary,
```

#### 184. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1441` → after: `L1242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1242) · [Before (L1441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1441)

```diff
-         if ((0, DB.e)()) return;
+         if ((0, EW.d)()) return;
```

#### 185. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1445` → after: `L1246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1246) · [Before (L1445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1445)

```diff
-           if (0 === (BB.flags & WO.c.Synthetic)) {
+           if (0 === (WW.flags & si.e.Synthetic)) {
```

#### 186. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1452-L1457` → after: `L1253-L1258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1253-L1258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1253-L1258) · [Before (L1452-L1457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1452-L1457)

```diff
-     var uO = GB(331),
-       mO = GB(92),
-       IO = GB(31),
-       FO = GB(41897),
-       iO = GB(1350),
-       LO = GB(2643);
+     var ui = OW(327),
+       oi = OW(100),
+       di = OW(39),
+       ei = OW(42394),
+       vi = OW(1351),
+       gi = OW(3323);
```

#### 187. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1462` → after: `L1263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1263) · [Before (L1462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1462)

```diff
-         null === (OB = (0, oB.j)()) || void 0 === OB || OB.send(IB.c.CodeCollab, (0, IB.j)(BB), (0, LO.e)(BB))
+         null === (iW = (0, PW.f)()) || void 0 === iW || iW.send(oW.e.CodeCollab, (0, oW.r)(WW), (0, gi.h)(WW))
```

#### 188. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1465-L1466` → after: `L1266-L1267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1266-L1267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1266-L1267) · [Before (L1465-L1466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1465-L1466)

```diff
-     var XO = GB(39804),
-       wO = GB(9394);
+     var fi = OW(40305),
+       Ci = OW(9957);
```

#### 189. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1472` → after: `L1273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1273) · [Before (L1472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1472)

```diff
-       return "inGame" === XB.c.get("gameState") && !(0, ZO.b)()
+       return "inGame" === VW.d.get("gameState") && !(0, ji.e)()
```

#### 190. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1476` → after: `L1277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1277) · [Before (L1476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1476)

```diff
-           (0, RO.D)(BB, "inventory", (0, lO.k)())
+           (0, ki.t)(WW, "inventory", (0, li.h)())
```

#### 191. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1479` → after: `L1280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1280) · [Before (L1479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1479)

```diff
-           EO && aO() && (0, RO.A)(BB, uO.p.SHOP, !EO.shopIsEmpty(WB.e.get("shopInfo")))
+           Xi && Ri() && (0, ki.s)(WW, ui.m.SHOP, !Xi.shopIsEmpty(sW.d.get("shopInfo")))
```

#### 192. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1482-L1485` → after: `L1283-L1287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1283-L1287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1283-L1287) · [Before (L1482-L1485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1482-L1485)

```diff
-           aO() && (0, RO.A)(BB, uO.p.LOBBY_LEADERBOARD, (0, XO.b)({
-             lobbyLeaderboardInfo: WB.e.get("lobbyLeaderboardInfo"),
-             lobbyManage: WB.e.get("lobbyManage")
-           }))
+           var iW, OW;
+           Ri() && (0, ki.x)(WW, (0, fi.d)({
+             lobbyLeaderboardInfo: sW.d.get("lobbyLeaderboardInfo"),
+             lobbyManage: sW.d.get("lobbyManage")
+           }), null !== (iW = null === (OW = Xi) || void 0 === OW ? void 0 : OW.getClientGameLeaderboardKey()) && void 0 !== iW ? iW : null)
```

#### 193. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1490` → after: `L1292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1292) · [Before (L1490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1490)

```diff
-           GB ? (0, RO.E)(BB, !0, GB) : (0, RO.D)(BB, "retentionFeatures", !(!WB.e.get("_tasks") && !WB.e.get("_availableLeaderboards")))
+           OW ? (0, ki.A)(WW, !0, OW) : (0, ki.t)(WW, "retentionFeatures", !(!sW.d.get("_tasks") && !sW.d.get("_availableLeaderboards")))
```

#### 194. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1493` → after: `L1295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1295) · [Before (L1493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1493)

```diff
-           (0, RO.D)(BB, "inviteLink", mO.featureFlags.canUseInviteLinks)
+           (0, ki.t)(WW, "inviteLink", oi.featureFlags.canUseInviteLinks)
```

#### 195. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1497` → after: `L1299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1299) · [Before (L1497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1497)

```diff
-             const OB = (0, oB.j)(),
+             const iW = (0, PW.f)(),
```

#### 196. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1499-L1501` → after: `L1301-L1303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1301-L1303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1301-L1303) · [Before (L1499-L1501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1499-L1501)

```diff
-               YB = GB ? GB.pR(GB.localId) : null;
-             (0, RO.E)(BB, null !== YB && (0, LO.c)((0, iO.c)()), (() => {
-               (0, LO.h)(YB)
+               mW = OW ? OW.Vk(OW.localId) : null;
+             (0, ki.A)(WW, null !== mW && (0, gi.d)((0, vi.d)()), (() => {
+               (0, gi.i)(mW)
```

#### 197. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1506` → after: `L1308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1308) · [Before (L1506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1506)

```diff
-           JB.o.tM("showUi", !1)
+           wW.l.iZ("showUi", !1)
```

#### 198. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1511` → after: `L1313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1313) · [Before (L1511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1511)

```diff
-           JB.o.tM("showUi", !0)
+           wW.l.iZ("showUi", !0)
```

#### 199. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1516` → after: `L1318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1318) · [Before (L1516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1516)

```diff
-       cO || (cO = !0, GB.e(173).then((() => GB(63844))).then((BB => {
+       Bi || (Bi = !0, OW.e(183).then((() => OW(64355))).then((WW => {
```

#### 200. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1520-L1522` → after: `L1322-L1324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1322-L1324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1322-L1324) · [Before (L1520-L1522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1520-L1522)

```diff
-       })), (0, FO.t)((BB => {
-         BB || !(0, FO.f)() || (0, mO.isMobile)() || !IO.g.getItem("disableFullscreen") || (0, RO.r)() || XB.c.set({
-           openEverythingMenuName: uO.p.SETTINGS
+       })), (0, ei.z)((WW => {
+         WW || !(0, ei.i)() || (0, oi.isMobile)() || !di.i.getItem("disableFullscreen") || (0, ki.l)() || VW.d.set({
+           openEverythingMenuName: ui.m.SETTINGS
```

#### 201. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1531` → after: `L1333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1333) · [Before (L1531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1531)

```diff
-         (0, DB.e)() || (GB ? null === (QB = eO[OB]) || void 0 === QB || QB.call(eO, function(BB) {
+         (0, EW.d)() || (OW ? null === (NW = Gi[iW]) || void 0 === NW || NW.call(Gi, function(WW) {
```

#### 202. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1536` → after: `L1338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1338) · [Before (L1536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1536)

```diff
-               event: (0, wO.b)("inputAction")
+               event: (0, Ci.e)("inputAction")
```

#### 203. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1546-L1548` → after: `L1348-L1350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1348-L1350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1348-L1350) · [Before (L1546-L1548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1546-L1548)

```diff
-     var CO = GB(39730),
-       HO = GB(39720),
-       vO = GB(39713);
+     var ri = OW(40229),
+       zi = OW(40216),
+       Fi = OW(40213);
```

#### 204. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1552` → after: `L1354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1354) · [Before (L1552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1552)

```diff
-         null === (OB = (0, oB.j)()) || void 0 === OB || OB.send(IB.c.CompleteTask, (0, IB.m)(BB))
+         null === (iW = (0, PW.f)()) || void 0 === iW || iW.send(oW.e.CompleteTask, (0, oW.s)(WW))
```

#### 205. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1560-L1562` → after: `L1362-L1364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1362-L1364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1362-L1364) · [Before (L1560-L1562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1560-L1562)

```diff
-         null === (OB = (0, oB.j)()) || void 0 === OB || OB.send(IB.c.GeneralCookieSet, (0, IB.p)({
-           zJ: GB,
-           lJ: YB
+         null === (iW = (0, PW.f)()) || void 0 === iW || iW.send(oW.e.GeneralCookieSet, (0, oW.A)({
+           bt: OW,
+           jt: mW
```

#### 206. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1569` → after: `L1371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1371) · [Before (L1569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1569)

```diff
-           UJ: YB
+           ct: mW
```

#### 207. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1571-L1574` → after: `L1373-L1376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1373-L1376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1373-L1376) · [Before (L1571-L1574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1571-L1574)

```diff
-         null === (OB = (0, oB.j)()) || void 0 === OB || OB.send(IB.c.UiRequestResp, (0, IB.O)({
-           RM: GB,
-           WM: YB,
-           AM: 5
+         null === (iW = (0, PW.f)()) || void 0 === iW || iW.send(oW.e.UiRequestResp, (0, oW.V)({
+           jP: OW,
+           UP: mW,
+           kP: 5
```

#### 208. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1581` → after: `L1383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1383) · [Before (L1581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1581)

```diff
-           UJ: YB
+           ct: mW
```

#### 209. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1583` → after: `L1385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1385) · [Before (L1583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1583)

```diff
-         null === (OB = (0, oB.j)()) || void 0 === OB || OB.send(IB.c.UiRequestResponded, (0, IB.M)({
+         null === (iW = (0, PW.f)()) || void 0 === iW || iW.send(oW.e.UiRequestResponded, (0, oW.U)({
```

#### 210. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1585` → after: `L1387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1387) · [Before (L1585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1585)

```diff
-           UJ: YB
+           ct: mW
```

#### 211. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1595` → after: `L1397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1397) · [Before (L1595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1595)

```diff
-         null === (OB = (0, oB.j)()) || void 0 === OB || OB.send(IB.c.LeaderboardRequest, {
+         null === (iW = (0, PW.f)()) || void 0 === iW || iW.send(oW.e.LeaderboardRequest, {
```

#### 212. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1603` → after: `L1405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1405) · [Before (L1603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1603)

```diff
-     const tO = RB.f.sZ / 2,
+     const iO = kW.f.tU / 2,
```

#### 213. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1614` → after: `L1416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1416) · [Before (L1614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1614)

```diff
-         const BB = (0, oB.j)();
+         const WW = (0, PW.f)();
```

#### 214. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1630` → after: `L1432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1432) · [Before (L1630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1630)

```diff
-           const zB = GB.SM(QB, yB, PB);
+           const xW = OW.NL(NW, cW, ZW);
```

#### 215. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1636-L1637` → after: `L1438-L1439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1438-L1439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1438-L1439) · [Before (L1636-L1637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1636-L1637)

```diff
-         const BB = (0, oB.j)();
-         return null !== BB && 0 !== (AB.u.playerFlags(BB.api.apiView, 0) & AB.Id.DropAhead)
+         const WW = (0, PW.f)();
+         return null !== WW && 0 !== (MW.z.playerFlags(WW.api.apiView, 0) & MW.Ud.DropAhead)
```

#### 216. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1640-L1643` → after: `L1442-L1445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1442-L1445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1442-L1445) · [Before (L1640-L1643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1640-L1643)

```diff
-     var DG = GB(37650),
-       QG = GB(39782),
-       oG = GB(1400),
-       jG = GB(41667);
+     var PO = OW(38107),
+       LO = OW(40287),
+       cO = OW(1422),
+       wO = OW(42176);
```

#### 217. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1665` → after: `L1467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1467) · [Before (L1665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1665)

```diff
-       const oB = () => (GB = (0, sB.k)(GB, BB()), GB);
+       const PW = () => (OW = (0, zW.t)(OW, WW()), OW);
```

#### 218. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1669` → after: `L1471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1471) · [Before (L1669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1669)

```diff
-           const OB = (0, pB.b)((OB => {
+           const iW = (0, AW.e)((iW => {
```

#### 219. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1673-L1675` → after: `L1475-L1477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1475-L1477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1475-L1477) · [Before (L1673-L1675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1673-L1675)

```diff
-           let GB = (0, lB.h)();
-           const jB = (0, QB.z)((() => {
-             const OB = (0, lB.h)();
+           let OW = (0, lW.g)();
+           const LW = (0, NW.x)((() => {
+             const iW = (0, lW.g)();
```

#### 220. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1686` → after: `L1488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1488) · [Before (L1686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1686)

```diff
-           const BB = pB.d.ids(),
+           const WW = AW.i.ids(),
```

#### 221. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1691-L1693` → after: `L1493-L1495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1493-L1495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1493-L1495) · [Before (L1691-L1693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1691-L1693)

```diff
-               name: null !== (GB = pB.d.getName(QB)) && void 0 !== GB ? GB : null,
-               ranks: null !== (YB = pB.d.getSetting(QB, "ranks")) && void 0 !== YB ? YB : PG,
-               cosmetics: null !== (DB = (0, pB.f)(QB)) && void 0 !== DB ? DB : null
+               name: null !== (OW = AW.i.getName(NW)) && void 0 !== OW ? OW : null,
+               ranks: null !== (mW = AW.i.getSetting(NW, "ranks")) && void 0 !== mW ? mW : lO,
+               cosmetics: null !== (EW = (0, AW.m)(NW)) && void 0 !== EW ? EW : null
```

#### 222. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1699` → after: `L1501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1501) · [Before (L1699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1699)

```diff
-             localId: (0, lB.h)()
+             localId: (0, lW.g)()
```

#### 223. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1707` → after: `L1509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1509) · [Before (L1707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1707)

```diff
-           for (const DB of pB.d.ids()) {
+           for (const EW of AW.i.ids()) {
```

#### 224. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1710-L1712` → after: `L1512-L1514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1512-L1514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1512-L1514) · [Before (L1710-L1712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1710-L1712)

```diff
-               colour: null !== (OB = pB.d.getSetting(DB, "colorInLobbyLeaderboard")) && void 0 !== OB ? OB : null,
-               values: null !== (GB = pB.d.getSetting(DB, "lobbyLeaderboardValues")) && void 0 !== GB ? GB : null,
-               tags: null !== (YB = pB.d.getSetting(DB, "lobbyLeaderboardTags")) && void 0 !== YB ? YB : null
+               colour: null !== (iW = AW.i.getSetting(EW, "colorInLobbyLeaderboard")) && void 0 !== iW ? iW : null,
+               values: null !== (OW = AW.i.getSetting(EW, "lobbyLeaderboardValues")) && void 0 !== OW ? OW : null,
+               tags: null !== (mW = AW.i.getSetting(EW, "lobbyLeaderboardTags")) && void 0 !== mW ? mW : null
```

#### 225. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1730` → after: `L1532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1532) · [Before (L1730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1730)

```diff
-           watch: BB => (0, pB.b)((OB => {
+           watch: WW => (0, AW.e)((iW => {
```

#### 226. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1732` → after: `L1534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1534) · [Before (L1732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1732)

```diff
-             const GB = (0, lB.h)();
+             const OW = (0, lW.g)();
```

#### 227. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1735-L1737` → after: `L1537-L1539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1537-L1539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1537-L1539) · [Before (L1735-L1737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1735-L1737)

```diff
-                 nB: OB,
-                 UB: YB,
-                 fB: DB
+                 EE: iW,
+                 NE: mW,
+                 PE: EW
```

#### 228. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1741-L1742` → after: `L1543-L1544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1543-L1544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1543-L1544) · [Before (L1741-L1742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1741-L1742)

```diff
-                 UB: YB,
-                 fB: DB
+                 NE: mW,
+                 PE: EW
```

#### 229. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1748-L1751` → after: `L1550-L1553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1550-L1553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1550-L1553) · [Before (L1748-L1751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1748-L1751)

```diff
-     var qG = GB(3262),
-       ZG = GB(1822),
-       NG = GB(677),
-       RG = GB(41935);
+     var UO = OW(3960),
+       kO = OW(1856),
+       sO = OW(683),
+       MO = OW(42432);
```

#### 230. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1757` → after: `L1559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1559) · [Before (L1757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1757)

```diff
-         null === (OB = (0, oB.j)()) || void 0 === OB || OB.send(IB.c.ShopMenuChanged, (0, IB.I)(BB))
+         null === (iW = (0, PW.f)()) || void 0 === iW || iW.send(oW.e.ShopMenuChanged, (0, oW.P)(WW))
```

#### 231. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1766` → after: `L1568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1568) · [Before (L1766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1766)

```diff
-         null === (OB = (0, oB.j)()) || void 0 === OB || OB.send(IB.c.ItemBought, {
+         null === (iW = (0, PW.f)()) || void 0 === iW || iW.send(oW.e.ItemBought, {
```

#### 232. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1769` → after: `L1571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1571) · [Before (L1769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1769)

```diff
-           shopVersion: WB.e.get("_shopVersion"),
+           shopVersion: sW.d.get("_shopVersion"),
```

#### 233. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1775` → after: `L1577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1577) · [Before (L1775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1775)

```diff
-     var nG = GB(5313);
+     var TO = OW(5575);
```

#### 234. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1780-L1783` → after: `L1582-L1585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1582-L1585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1582-L1585) · [Before (L1780-L1783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1780-L1783)

```diff
-       null !== (GB = (0, oB.j)()) && void 0 !== GB && GB.send(BB, OB) || console.warn(`[bloxd-wasm-client] message ${BB} not sent: no live game or the core's command ring is full`)
-     }(0, qB.g)(mB.hb, (BB => {
-       const OB = (0, FB.h)(mB.hb, BB);
-       void 0 !== OB && JB.o.tM("setDiscordReportKey", OB)
+       null !== (OW = (0, PW.f)()) && void 0 !== OW && OW.send(WW, iW) || console.warn(`[bloxd-wasm-client] message ${WW} not sent: no live game or the core's command ring is full`)
+     }(0, bW.j)(uW.pb, (WW => {
+       const iW = (0, dW.g)(uW.pb, WW);
+       void 0 !== iW && wW.l.iZ("setDiscordReportKey", iW)
```

#### 235. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1787-L1788` → after: `L1589-L1590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1589-L1590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1589-L1590) · [Before (L1787-L1788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1787-L1788)

```diff
-         fG(IB.c.IgnoreUser, (0, IB.s)({
-           nM: BB
+         hO(oW.e.IgnoreUser, (0, oW.B)({
+           Nt: WW
```

#### 236. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1798-L1800` → after: `L1601-L1603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1601-L1603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1601-L1603) · [Before (L1798-L1800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1798-L1800)

```diff
-         fG(IB.c.UserReport, (0, IB.$)({
-           Hy: OB,
-           vy: GB,
+         hO(oW.e.UserReport, (0, oW.gb)({
+           et: iW,
+           vt: OW,
```

#### 237. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1802` → after: `L1605-L1606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1605-L1606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1605-L1606) · [Before (L1802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1802)

```diff
-           Jy: DB
+           PL: NW,
+           gt: mW
```

#### 238. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1811-L1813` → after: `L1615-L1617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1615-L1617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1615-L1617) · [Before (L1811-L1813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1811-L1813)

```diff
-         fG(IB.c.UserReport, (0, IB.$)({
-           Hy: "",
-           vy: OB,
+         hO(oW.e.UserReport, (0, oW.gb)({
+           et: "",
+           vt: iW,
```

#### 239. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1815` → after: `L1619-L1620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1619-L1620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1619-L1620) · [Before (L1815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1815)

```diff
-           Jy: YB
+           PL: mW,
+           gt: []
```

#### 240. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1819` → after: `L1624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1624) · [Before (L1819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1819)

```diff
-         fG(IB.c.ReqDiscordReportKey, (0, IB.B)(BB))
+         hO(oW.e.ReqDiscordReportKey, (0, oW.L)(WW))
```

#### 241. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1827` → after: `L1632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1632) · [Before (L1827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1827)

```diff
-         "customGame" === OB ? fG(IB.c.CustomGameReport, (0, IB.o)({
+         "customGame" === iW ? hO(oW.e.CustomGameReport, (0, oW.w)({
```

#### 242. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1829-L1830` → after: `L1634-L1635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1634-L1635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1634-L1635) · [Before (L1829-L1830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1829-L1830)

```diff
-           Jy: YB
-         })) : fG(IB.c.LobbyReport, (0, IB.u)({
+           PL: mW
+         })) : hO(oW.e.LobbyReport, (0, oW.E)({
```

#### 243. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1832` → after: `L1637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1637) · [Before (L1832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1832)

```diff
-           Jy: YB
+           PL: mW
```

#### 244. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1836` → after: `L1641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1641) · [Before (L1836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1836)

```diff
-         fG(IB.c.UpdateMyCosmetic, (0, IB.Z)(BB))
+         hO(oW.e.UpdateMyCosmetic, (0, oW.db)(WW))
```

#### 245. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1839` → after: `L1644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1644) · [Before (L1839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1839)

```diff
-         !BB || VO ? (0, nG.m)(UG, BB ? UG : 0) : JB.o.tM("requestEmoteWheelHoldRelease")
+         !WW || Ki ? (0, TO.j)(JO, WW ? JO : 0) : wW.l.iZ("requestEmoteWheelHoldRelease")
```

#### 246. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1842-L1844` → after: `L1647-L1649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1647-L1649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1647-L1649) · [Before (L1842-L1844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1842-L1844)

```diff
-     var dG = GB(42042),
-       KG = GB(9927),
-       uG = GB(40400);
+     var nO = OW(42519),
+       uO = OW(5725),
+       oO = OW(40960);
```

#### 247. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1854` → after: `L1659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1659) · [Before (L1854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1854)

```diff
-           const YB = (0, oB.j)();
+           const mW = (0, PW.f)();
```

#### 248. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1862` → after: `L1667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1667) · [Before (L1862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1862)

```diff
-           return (0, uG.e)(((BB, OB, GB) => (yB = QB.getBlockId(BB, OB, GB), 0 !== yB)), DB.cameraPosition, (0, uG.h)((BB => AB.u.viewProj(jB.apiView, 0, BB)), OB, GB, mG), uG.b, IG, FG) ? {
+           return (0, oO.h)(((WW, iW, OW) => (cW = NW.getBlockId(WW, iW, OW), 0 !== cW)), EW.cameraPosition, (0, oO.k)((WW => MW.z.viewProj(LW.apiView, 0, WW)), iW, OW, dO), oO.d, eO, vO) ? {
```

#### 249. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1865` → after: `L1670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1670) · [Before (L1865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1865)

```diff
-             name: (0, KG.d)(yB)
+             name: (0, uO.f)(cW)
```

#### 250. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1872` → after: `L1677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1677) · [Before (L1872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1872)

```diff
-           null === (OB = (0, oB.j)()) || void 0 === OB || OB.setBlockHighlight(BB)
+           null === (iW = (0, PW.f)()) || void 0 === iW || iW.setBlockHighlight(WW)
```

#### 251. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1875-L1880` → after: `L1680-L1685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1680-L1685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1680-L1685) · [Before (L1875-L1880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1875-L1880)

```diff
-     var gG = GB(2034),
-       rG = GB(41924),
-       XG = GB(42045),
-       wG = GB(2072),
-       EG = GB(37083),
-       cG = GB(244);
+     var VO = OW(2047),
+       pO = OW(42427),
+       fO = OW(42528),
+       CO = OW(2077),
+       XO = OW(37640),
+       BO = OW(232);
```

#### 252. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1903` → after: `L1708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1708) · [Before (L1903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1903)

```diff
-       return CG && (0, EG.k)()
+       return rO && (0, XO.f)()
```

#### 253. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1911` → after: `L1716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1716) · [Before (L1911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1911)

```diff
-           if (null !== GB) YY(null !== (OB = GB.icon) && void 0 !== OB ? OB : GB.name, hG)
+           if (null !== OW) Nm(null !== (iW = OW.icon) && void 0 !== iW ? iW : OW.name, qO)
```

#### 254. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1913` → after: `L1718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1718) · [Before (L1913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1913)

```diff
-         for (const BB of [...AB.H, ...bG]) YY(BB, aG);
+         for (const WW of [...MW.P, ...aO]) Nm(WW, RO);
```

#### 255. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1930` → after: `L1735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1735) · [Before (L1930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1930)

```diff
-       !vG || HG || null !== BY || 0 === xG.length || tG >= TG || (BY = (0, cG.b)((() => {
+       !FO || zO || null !== Om || 0 === Wm.length || im >= IO || (Om = (0, BO.d)((() => {
```

#### 256. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1935-L1936` → after: `L1740-L1741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1740-L1741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1740-L1741) · [Before (L1935-L1936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1935-L1936)

```diff
-           if (await (0, EG.q)(), !vG) return void OB.asked.delete(BB);
-           if (!(0, EG.k)()) return void(HG = !0);
+           if (await (0, XO.h)(), !FO) return void iW.asked.delete(WW);
+           if (!(0, XO.f)()) return void(zO = !0);
```

#### 257. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1938` → after: `L1743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1743) · [Before (L1938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1938)

```diff
-             oB = null !== (GB = null === (DB = document.querySelector(OB.icon)) || void 0 === DB ? void 0 : DB.getBoundingClientRect().width) && void 0 !== GB ? GB : 0,
+             PW = null !== (OW = null === (EW = document.querySelector(iW.icon)) || void 0 === EW ? void 0 : EW.getBoundingClientRect().width) && void 0 !== OW ? OW : 0,
```

#### 258. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1940` → after: `L1745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1745) · [Before (L1940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1940)

```diff
-             yB = Math.round((oB > 0 ? oB : OB.fallbackRem * jB) * QB);
+             cW = Math.round((PW > 0 ? PW : iW.fallbackRem * LW) * NW);
```

#### 259. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1945` → after: `L1750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1750) · [Before (L1945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1945)

```diff
-               lineWidth: (0, wG.b)(QB)
+               lineWidth: (0, CO.d)(NW)
```

#### 260. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1957-L1961` → after: `L1762-L1766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1762-L1766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1762-L1766) · [Before (L1957-L1961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1957-L1961)

```diff
-     var oY = GB(4908),
-       jY = GB(4891),
-       yY = GB(42048),
-       JY = GB(3708),
-       MY = GB(3711);
+     var cm = OW(5199),
+       wm = OW(5178),
+       tm = OW(42533),
+       Zm = OW(4454),
+       xm = OW(4459);
```

#### 261. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1977` → after: `L1782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1782) · [Before (L1977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1977)

```diff
-       const OB = null === PY ? void 0 : (0, JY.c)(BB),
+       const iW = null === lm ? void 0 : (0, Zm.b)(WW),
```

#### 262. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1981-L1985` → after: `L1786-L1790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1786-L1790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1786-L1790) · [Before (L1981-L1985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1981-L1985)

```diff
-     var qY = GB(3705),
-       ZY = GB(4882),
-       NY = GB(4901),
-       RY = GB(36997),
-       WY = GB(37e3);
+     var Um = OW(4448),
+       km = OW(5166),
+       sm = OW(5195),
+       Mm = OW(37436),
+       Km = OW(37441);
```

#### 263. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1995` → after: `L1800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1800) · [Before (L1995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1995)

```diff
-       return kY || (kY = !0, (0, NY.o)().then((BB => {
+       return Hm || (Hm = !0, (0, sm.n)().then((WW => {
```

#### 264. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1997` → after: `L1802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1802) · [Before (L1997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1997)

```diff
-       }))), nY ??= Promise.all([(0, qY.d)(), (zY ??= GB.e(1).then((() => GB(63859))).then((BB => {
+       }))), Tm ??= Promise.all([(0, Um.f)(), (Am ??= OW.e(1).then((() => OW(64378))).then((WW => {
```

#### 265. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2004-L2005` → after: `L1809-L1810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1809-L1810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1809-L1810) · [Before (L2004-L2005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2004-L2005)

```diff
-           codes: (0, MY.z)(OB, YB + 1),
-           pool: GB.split(MY.r).map(lY)
+           codes: (0, xm.y)(iW, mW + 1),
+           pool: OW.split(xm.s).map(bm)
```

#### 266. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2009` → after: `L1814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1814) · [Before (L2009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2009)

```diff
-       })), zY), (0, WY.f)(), GB.e(220).then((() => GB(34813)))]).then((BB => {
+       })), Am), (0, Km.d)(), OW.e(224).then((() => OW(35231)))]).then((WW => {
```

#### 267. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2019` → after: `L1824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1824) · [Before (L2019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2019)

```diff
-       return null !== (OB = null === (GB = (0, RY.k)()) || void 0 === GB ? void 0 : GB.textureUrl(BB)) && void 0 !== OB ? OB : VY.itemSpriteUrl(BB)
+       return null !== (iW = null === (OW = (0, Mm.f)()) || void 0 === OW ? void 0 : OW.textureUrl(WW)) && void 0 !== iW ? iW : Ym.itemSpriteUrl(WW)
```

#### 268. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2024` → after: `L1829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1829) · [Before (L2024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2024)

```diff
-       return null !== (OB = null === (GB = (0, RY.k)()) || void 0 === GB ? void 0 : GB.textureUrl(BB)) && void 0 !== OB ? OB : VY.blockTextureUrl(BB)
+       return null !== (iW = null === (OW = (0, Mm.f)()) || void 0 === OW ? void 0 : OW.textureUrl(WW)) && void 0 !== iW ? iW : Ym.blockTextureUrl(WW)
```

#### 269. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2029` → after: `L1834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1834) · [Before (L2029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2029)

```diff
-       return null !== (OB = (0, qY.b)(BB)) && void 0 !== OB ? OB : BB
+       return null !== (iW = (0, Um.b)(WW)) && void 0 !== iW ? iW : WW
```

#### 270. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2034` → after: `L1839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1839) · [Before (L2034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2034)

```diff
-       return null !== (GB = null !== (YB = null !== (DB = uY(BB)) && void 0 !== DB ? DB : null === OB || void 0 === OB ? void 0 : OB.rotated[BB]) && void 0 !== YB ? YB : null === OB || void 0 === OB ? void 0 : OB.animated[BB]) && void 0 !== GB ? GB : VY.notFoundUrl()
+       return null !== (OW = null !== (mW = null !== (EW = om(WW)) && void 0 !== EW ? EW : null === iW || void 0 === iW ? void 0 : iW.rotated[WW]) && void 0 !== mW ? mW : null === iW || void 0 === iW ? void 0 : iW.animated[WW]) && void 0 !== OW ? OW : Ym.notFoundUrl()
```

#### 271. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2038` → after: `L1843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1843) · [Before (L2038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2038)

```diff
-       return void 0 !== (0, JY.c)(BB) ? BB : /^[1-9][0-9]*$/.test(BB) ? (0, JY.g)(Number(BB)) : void 0
+       return void 0 !== (0, Zm.b)(WW) ? WW : /^[1-9][0-9]*$/.test(WW) ? (0, Zm.d)(Number(WW)) : void 0
```

#### 272. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2046` → after: `L1851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1851) · [Before (L2046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2046)

```diff
-         return null !== (GB = void 0 === OB ? null : KY(OB)) && void 0 !== GB ? GB : VY.notFoundUrl()
+         return null !== (OW = void 0 === iW ? null : um(iW)) && void 0 !== OW ? OW : Ym.notFoundUrl()
```

#### 273. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2048` → after: `L1853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1853) · [Before (L2048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2048)

```diff
-       return null !== (OB = VY.particleUrl(BB)) && void 0 !== OB ? OB : VY.notFoundUrl()
+       return null !== (iW = Ym.particleUrl(WW)) && void 0 !== iW ? iW : Ym.notFoundUrl()
```

#### 274. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2052` → after: `L1857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1857) · [Before (L2052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2052)

```diff
-       return "StairsBlock" === BB ? BB : OB ? "SlabBlock" : "CubeBlock"
+       return "StairsBlock" === WW ? WW : iW ? "SlabBlock" : "CubeBlock"
```

#### 275. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2063-L2064` → after: `L1868-L1869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1868-L1869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1868-L1869) · [Before (L2063-L2064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2063-L2064)

```diff
-           const oB = null !== (OB = FY(YB)) && void 0 !== OB ? OB : YB,
-             jB = (0, NY.f)(oB, DB, QB);
+           const PW = null !== (iW = gm(mW)) && void 0 !== iW ? iW : mW,
+             LW = (0, sm.e)(PW, EW, NW);
```

#### 276. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2067` → after: `L1872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1872) · [Before (L2067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2067)

```diff
-             JB = (0, JY.c)(oB),
+             wW = (0, Zm.b)(PW),
```

#### 277. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2071` → after: `L1876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1876) · [Before (L2071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2071)

```diff
-             zB = PB ? await (UY ??= GB.e(228).then((() => GB(34878))).then((BB => (fY && (fY = !1, (0, gG.b)()), {
+             xW = ZW ? await (Jm ??= OW.e(234).then((() => OW(35332))).then((WW => (hm && (hm = !1, (0, VO.b)()), {
```

#### 278. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2082-L2084` → after: `L1887-L1889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1887-L1889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1887-L1889) · [Before (L2082-L2084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2082-L2084)

```diff
-             pB = (0, RY.g)(),
-             qB = 0 === pB ? oB : `${oB}#${pB}`;
-           return (await (0, ZY.c)()).drawBlockIconUrl(qB, DB, QB, (() => lB))
+             AW = (0, Mm.d)(),
+             bW = 0 === AW ? PW : `${PW}#${AW}`;
+           return (await (0, km.e)()).drawBlockIconUrl(bW, EW, NW, (() => lW))
```

#### 279. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2091` → after: `L1896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1896) · [Before (L2091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2091)

```diff
-           if ((0, jY.j)(BB)) return {
+           if ((0, wm.h)(WW)) return {
```

#### 280. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2093` → after: `L1898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1898) · [Before (L2093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2093)

```diff
-             url: null !== (GB = null !== (DB = null === (QB = (0, RY.k)()) || void 0 === QB ? void 0 : QB.textureUrl(BB)) && void 0 !== DB ? DB : VY.ingameIconUrl(BB)) && void 0 !== GB ? GB : VY.notFoundUrl()
+             url: null !== (OW = null !== (EW = null === (NW = (0, Mm.f)()) || void 0 === NW ? void 0 : NW.textureUrl(WW)) && void 0 !== EW ? EW : Ym.ingameIconUrl(WW)) && void 0 !== OW ? OW : Ym.notFoundUrl()
```

#### 281. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2095` → after: `L1900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1900) · [Before (L2095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2095)

```diff
-           if (BB.startsWith(jY.c)) return {
+           if (WW.startsWith(wm.d)) return {
```

#### 282. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2097` → after: `L1902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1902) · [Before (L2097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2097)

```diff
-             url: iY(BB.slice(jY.c.length))
+             url: Dm(WW.slice(wm.d.length))
```

#### 283. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2099-L2101` → after: `L1904-L1906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1904-L1906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1904-L1906) · [Before (L2099-L2101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2099-L2101)

```diff
-           if (0 === (0, JY.k)()) return (0, yY.b)(), YB.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(BB);
-           const oB = null !== (OB = FY(BB)) && void 0 !== OB ? OB : BB,
-             jB = (0, JY.c)(oB),
+           if (0 === (0, Zm.f)()) return (0, tm.e)(), mW.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(WW);
+           const PW = null !== (iW = gm(WW)) && void 0 !== iW ? iW : WW,
+             LW = (0, Zm.b)(PW),
```

#### 284. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2108` → after: `L1913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1913) · [Before (L2108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2108)

```diff
-             return null !== (OB = KY(mY(BB))) && void 0 !== OB ? OB : VY.notFoundUrl()
+             return null !== (iW = um(dm(WW))) && void 0 !== iW ? iW : Ym.notFoundUrl()
```

#### 285. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2110-L2112` → after: `L1915-L1917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1915-L1917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1915-L1917) · [Before (L2110-L2112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2110-L2112)

```diff
-           if ((0, NY.n)(oB) && ! function(BB) {
-               const OB = (0, RY.k)();
-               return null !== OB && (null !== OB.textureUrl(mY(BB)) || (0, NY.e)(BB).some((BB => null !== OB.modelUrl(BB))))
+           if ((0, sm.k)(PW) && ! function(WW) {
+               const iW = (0, Mm.f)();
+               return null !== iW && (null !== iW.textureUrl(dm(WW)) || (0, sm.d)(WW).some((WW => null !== iW.modelUrl(WW))))
```

#### 286. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2116` → after: `L1921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1921) · [Before (L2116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2116)

```diff
-             drawn: (0, NY.j)(oB)
+             drawn: (0, sm.h)(PW)
```

#### 287. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2122` → after: `L1927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1927) · [Before (L2122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2122)

```diff
-           if (void 0 !== jB && "GrayscaleArmour" === SY.itemTypeOf(jB) || Object.hasOwn(oY.e, oB)) {
+           if (void 0 !== LW && "GrayscaleArmour" === ym.itemTypeOf(LW) || Object.hasOwn(cm.b, PW)) {
```

#### 288. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2124` → after: `L1929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1929) · [Before (L2124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2124)

```diff
-             const OB = null !== (MB = (0, oY.g)(BB)) && void 0 !== MB ? MB : (0, oY.g)(oB);
+             const iW = null !== (tW = (0, cm.c)(WW)) && void 0 !== tW ? tW : (0, cm.c)(PW);
```

#### 289. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2137` → after: `L1942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1942) · [Before (L2137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2137)

```diff
-           return void 0 !== FY(BB) || (0, jY.j)(BB) || BB.startsWith(jY.c)
+           return void 0 !== gm(WW) || (0, wm.h)(WW) || WW.startsWith(wm.d)
```

#### 290. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2148` → after: `L1953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1953) · [Before (L2148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2148)

```diff
-           setChunkAddDistance: rG.o,
+           setChunkAddDistance: pO.m,
```

#### 291. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2155-L2156` → after: `L1960-L1961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1960-L1961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1960-L1961) · [Before (L2155-L2156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2155-L2156)

```diff
-           bR: rG.h,
-           drawCallStats: XG.i,
+           YM: pO.f,
+           drawCallStats: fO.f,
```

#### 292. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2159` → after: `L1964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1964) · [Before (L2159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2159)

```diff
-       }), (0, gG.b)(), dY(), CG || (CG = !0, JB.o.subscribe("gameJoined", (() => {
+       }), (0, VO.b)(), nm(), rO || (rO = !0, wW.l.subscribe("gameJoined", (() => {
```

#### 293. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2167` → after: `L1972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1972) · [Before (L2167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2167)

```diff
-       })), JB.o.subscribe("gamePlayable", (() => {
+       })), wW.l.subscribe("gamePlayable", (() => {
```

#### 294. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2173-L2174` → after: `L1978-L1979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1978-L1979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1978-L1979) · [Before (L2173-L2174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2173-L2174)

```diff
-     var wY = GB(633),
-       EY = GB(40406);
+     var Xm = OW(632),
+       Bm = OW(40969);
```

#### 295. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2186-L2187` → after: `L1991-L1992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1991-L1992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1991-L1992) · [Before (L2186-L2187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2186-L2187)

```diff
-           const BB = OB.pR(OB.localId);
-           return null !== BB && void 0 !== BB && BB.every(Number.isFinite) ? BB : null
+           const WW = iW.Vk(iW.localId);
+           return null !== WW && void 0 !== WW && WW.every(Number.isFinite) ? WW : null
```

#### 296. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2189` → after: `L1994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1994) · [Before (L2189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2189)

```diff
-         chunkBlocks: BB => GB.isLoaded(BB[0], BB[1], BB[2]) ? (BB, OB, YB) => GB.SM(BB, OB, YB) : null,
+         chunkBlocks: WW => OW.isLoaded(WW[0], WW[1], WW[2]) ? (WW, iW, mW) => OW.NL(WW, iW, mW) : null,
```

#### 297. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2205-L2207` → after: `L2010-L2012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2010-L2012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2010-L2012) · [Before (L2205-L2207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2205-L2207)

```diff
-             if (null === QB || OB.isLocal(oB) || jB >>> AB.c !== AB.t.Lifeform) continue;
-             const yB = OB.pR(oB),
-               JB = wY.j[jB & AB.g];
+             if (null === NW || iW.isLocal(PW) || LW >>> MW.e !== MW.v.Lifeform) continue;
+             const cW = iW.Vk(PW),
+               wW = Xm.i[LW & MW.g];
```

#### 298. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2210` → after: `L2015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2015) · [Before (L2210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2210)

```diff
-               name: null !== (YB = BB.clientApi.getEntityName(QB)) && void 0 !== YB ? YB : null,
+               name: null !== (mW = WW.clientApi.getEntityName(NW)) && void 0 !== mW ? mW : null,
```

#### 299. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2218` → after: `L2023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2023) · [Before (L2218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2218)

```diff
-           for (let GB = 0; GB < OB.idStr.length; GB++) null !== OB.idStr[GB] && OB.kinds[GB] >>> AB.c === AB.t.Item && BB++;
+           for (let OW = 0; OW < iW.idStr.length; OW++) null !== iW.idStr[OW] && iW.kinds[OW] >>> MW.e === MW.v.Item && WW++;
```

#### 300. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2224-L2225` → after: `L2029-L2030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2029-L2030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2029-L2030) · [Before (L2224-L2225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2224-L2225)

```diff
-         worldCodeAiChunk: BB => Promise.resolve((0, EY.d)(cY((0, oB.j)()), BB)),
-         worldCodeAiGameState: () => Promise.resolve((0, EY.h)(cY((0, oB.j)())))
+         worldCodeAiChunk: WW => Promise.resolve((0, Bm.d)(qm((0, PW.f)()), WW)),
+         worldCodeAiGameState: () => Promise.resolve((0, Bm.e)(qm((0, PW.f)())))
```

#### 301. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2234` → after: `L2039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2039) · [Before (L2234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2234)

```diff
-             return null !== (OB = null === (GB = BB.runtime()) || void 0 === GB ? void 0 : GB.currentViewer) && void 0 !== OB ? OB : null
+             return null !== (iW = null === (OW = WW.runtime()) || void 0 === OW ? void 0 : OW.currentViewer) && void 0 !== iW ? iW : null
```

#### 302. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2256` → after: `L2061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2061) · [Before (L2256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2256)

```diff
-             OB && GB && OB.seek(Math.max(0, Math.min(GB.totalTicks - 1, GB.kP + BB * PB.Cd)))
+             iW && OW && iW.seek(Math.max(0, Math.min(OW.totalTicks - 1, OW.hZ + WW * ZW.Jd)))
```

#### 303. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2262-L2263` → after: `L2067-L2068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2067-L2068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2067-L2068) · [Before (L2262-L2263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2262-L2263)

```diff
-                 GB = null !== (BB = null === OB || void 0 === OB ? void 0 : OB.view) && void 0 !== BB ? BB : null;
-               return null === OB || null === GB || GB.state === PB.sd.None ? (jB = null, null) : (jB = (0, sB.k)(jB, {
+                 OW = null !== (WW = null === iW || void 0 === iW ? void 0 : iW.view) && void 0 !== WW ? WW : null;
+               return null === iW || null === OW || OW.state === ZW.td.None ? (LW = null, null) : (LW = (0, zW.t)(LW, {
```

#### 304. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2265` → after: `L2070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2070) · [Before (L2265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2265)

```diff
-                 kP: GB.kP,
+                 hZ: OW.hZ,
```

#### 305. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2267-L2268` → after: `L2072-L2073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2072-L2073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2072-L2073) · [Before (L2267-L2268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2267-L2268)

```diff
-                 pI: PB.Cd,
-                 playing: GB.state === PB.sd.Playing,
+                 Fv: ZW.Jd,
+                 playing: OW.state === ZW.td.Playing,
```

#### 306. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2277-L2278` → after: `L2082-L2083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2082-L2083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2082-L2083) · [Before (L2277-L2278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2277-L2278)

```diff
-                 GB = null !== (BB = null === OB || void 0 === OB ? void 0 : OB.view) && void 0 !== BB ? BB : null;
-               return null === OB || null === GB || GB.state === PB.sd.None ? (yB = null, null) : (yB = (0, sB.k)(yB, {
+                 OW = null !== (WW = null === iW || void 0 === iW ? void 0 : iW.view) && void 0 !== WW ? WW : null;
+               return null === iW || null === OW || OW.state === ZW.td.None ? (cW = null, null) : (cW = (0, zW.t)(cW, {
```

#### 307. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2288` → after: `L2093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2093) · [Before (L2288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2288)

```diff
-               return null !== (OB = null === (GB = BB.runtime()) || void 0 === GB ? void 0 : GB.recorder.current) && void 0 !== OB ? OB : jG.c.states.replayRecorder.current()
+               return null !== (iW = null === (OW = WW.runtime()) || void 0 === OW ? void 0 : OW.recorder.current) && void 0 !== iW ? iW : wO.c.states.replayRecorder.current()
```

#### 308. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2292` → after: `L2097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2097) · [Before (L2292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2292)

```diff
-               watch: BB => (0, JB.p)("replayViewer|videoExportChanged", (() => {
+               watch: WW => (0, wW.n)("replayViewer|videoExportChanged", (() => {
```

#### 309. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2306` → after: `L2111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2111) · [Before (L2306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2306)

```diff
-             !0 === (null === (YB = oB()) || void 0 === YB ? void 0 : YB.isOpen) && Promise.all([GB.e(111), GB.e(78)]).then((() => GB(63849))).then((GB => {
+             !0 === (null === (mW = PW()) || void 0 === mW ? void 0 : mW.isOpen) && Promise.all([OW.e(113), OW.e(79)]).then((() => OW(64363))).then((OW => {
```

#### 310. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2314` → after: `L2119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2119) · [Before (L2314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2314)

```diff
-                   return null !== (OB = null === (GB = BB.canvas) || void 0 === GB ? void 0 : GB.call(BB)) && void 0 !== OB ? OB : null
+                   return null !== (iW = null === (OW = WW.canvas) || void 0 === OW ? void 0 : OW.call(WW)) && void 0 !== iW ? iW : null
```

#### 311. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2341` → after: `L2146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2146) · [Before (L2341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2341)

```diff
-                   null !== OB && void 0 !== OB && OB.view && OB.setSpeed((0, DG.d)(OB.view.speed, "replaySpeedUp" === BB ? "up" : "down"));
+                   null !== iW && void 0 !== iW && iW.view && iW.setSpeed((0, PO.k)(iW.view.speed, "replaySpeedUp" === WW ? "up" : "down"));
```

#### 312. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2354` → after: `L2159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2159) · [Before (L2354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2354)

```diff
-                 kP: GB,
+                 hZ: OW,
```

#### 313. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2399` → after: `L2204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2204) · [Before (L2399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2399)

```diff
-                 GB.e(130).then((() => GB(39925))).then((OB => {
+                 OW.e(138).then((() => OW(40448))).then((iW => {
```

#### 314. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2430` → after: `L2235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2235) · [Before (L2430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2430)

```diff
-               (0, ZO.f)(OB) && (null === (GB = BB.runtime()) || void 0 === GB || GB.recorder.viewerShown(OB))
+               (0, ji.g)(iW) && (null === (OW = WW.runtime()) || void 0 === OW || OW.recorder.viewerShown(iW))
```

#### 315. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2436` → after: `L2241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2241) · [Before (L2436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2436)

```diff
-                 VB: DB,
+                 RN: EW,
```

#### 316. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2438` → after: `L2243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2243) · [Before (L2438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2438)

```diff
-                 SB: oB
+                 GN: PW
```

#### 317. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2458` → after: `L2263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2263) · [Before (L2458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2458)

```diff
-                 sJ: DB
+                 BL: EW
```

#### 318. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2466` → after: `L2271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2271) · [Before (L2466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2466)

```diff
-               YB = null !== (OB = null === GB || void 0 === GB ? void 0 : GB.view) && void 0 !== OB ? OB : null;
+               mW = null !== (iW = null === OW || void 0 === OW ? void 0 : OW.view) && void 0 !== iW ? iW : null;
```

#### 319. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2469` → after: `L2274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2274) · [Before (L2469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2469)

```diff
-             })(BB) : JG.has(BB) ? RB.replayAction(BB) : "replayPlayPause" === BB ? GB && YB && YB.state !== PB.sd.None && RB.setReplayPlaying(YB.state !== PB.sd.Playing) : "replayChangeCameraMode" === BB ? null === GB || void 0 === GB || GB.cycleCameraMode() : "replayExit" === BB … [truncated]
+             })(WW) : ZO.has(WW) ? kW.replayAction(WW) : "replayPlayPause" === WW ? OW && mW && mW.state !== ZW.td.None && kW.setReplayPlaying(mW.state !== ZW.td.Playing) : "replayChangeCameraMode" === WW ? null === OW || void 0 === OW || OW.cycleCameraMode() : "replayExit" === WW … [truncated]
```

#### 320. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2479` → after: `L2284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2284) · [Before (L2479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2479)

```diff
-               return !0 !== (null === (OB = oB()) || void 0 === OB ? void 0 : OB.isOpen) ? null : null !== (GB = null === (YB = BB.cameraView) || void 0 === YB ? void 0 : YB.call(BB)) && void 0 !== GB ? GB : null
+               return !0 !== (null === (iW = PW()) || void 0 === iW ? void 0 : iW.isOpen) ? null : null !== (OW = null === (mW = WW.cameraView) || void 0 === mW ? void 0 : mW.call(WW)) && void 0 !== OW ? OW : null
```

#### 321. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2490` → after: `L2295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2295) · [Before (L2490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2490)

```diff
-               GB !== AB && (AB = GB, JB.o.tM("connectedGameChanged")), OB.fire()
+               OW !== MW && (MW = OW, wW.l.iZ("connectedGameChanged")), iW.fire()
```

#### 322. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2499-L2500` → after: `L2304-L2305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2304-L2305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2304-L2305) · [Before (L2499-L2500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2499-L2500)

```diff
-                   return void((0, ZO.b)() || RB.saveClip())
-               }(0, QG.b)() || ("replayViewerOpen" !== BB ? BB.startsWith("replay") && ((0, ZO.b)() || !0 === (null === (OB = oB()) || void 0 === OB ? void 0 : OB.inPlayback)) && WB(BB) : ZB("toggle"))
+                   return void((0, ji.e)() || kW.saveClip())
+               }(0, LO.b)() || ("replayViewerOpen" !== WW ? WW.startsWith("replay") && ((0, ji.e)() || !0 === (null === (iW = PW()) || void 0 === iW ? void 0 : iW.inPlayback)) && sW(WW) : jW("toggle"))
```

#### 323. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2505` → after: `L2310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2310) · [Before (L2505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2505)

```diff
-         runtime: DB.l,
+         runtime: EW.n,
```

#### 324. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2508` → after: `L2313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2313) · [Before (L2508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2508)

```diff
-           const OB = null === (BB = (0, oB.j)()) || void 0 === BB ? void 0 : BB.renderFrame;
+           const iW = null === (WW = (0, PW.f)()) || void 0 === WW ? void 0 : WW.renderFrame;
```

#### 325. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2518` → after: `L2323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2323) · [Before (L2518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2518)

```diff
-           return null !== (BB = null === (OB = (GB = (0, QB.O)()).canvas) || void 0 === OB ? void 0 : OB.call(GB)) && void 0 !== BB ? BB : null
+           return null !== (WW = null === (iW = (OW = (0, NW.K)()).canvas) || void 0 === iW ? void 0 : iW.call(OW)) && void 0 !== WW ? WW : null
```

#### 326. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2520` → after: `L2325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2325) · [Before (L2520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2520)

```diff
-         freecam: DB.i
+         freecam: EW.j
```

#### 327. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2525` → after: `L2330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2330) · [Before (L2525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2525)

```diff
-           ...lO.j,
+           ...li.f,
```

#### 328. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2535` → after: `L2339-L2340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2339-L2340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2339-L2340) · [Before (L2535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2535)

```diff
-           ...dG.j,
+           ...JW.b,
+           ...nO.k,
```

#### 329. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2538` → after: `L2343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2343) · [Before (L2538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2538)

```diff
-           ...fB.h
+           ...TW.k
```

#### 330. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2544` → after: `L2349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2349) · [Before (L2544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2544)

```diff
-           ...lO.c,
+           ...li.b,
```

#### 331. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2547` → after: `L2352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2352) · [Before (L2547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2547)

```diff
-           ...fB.d,
+           ...TW.g,
```

#### 332. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2556` → after: `L2361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2361) · [Before (L2556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2556)

```diff
-           ...lO.h,
+           ...li.e,
```

#### 333. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2562` → after: `L2367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2367) · [Before (L2562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2562)

```diff
-           ...dG.n,
+           ...nO.l,
```

#### 334. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2572-L2574` → after: `L2377-L2379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2377-L2379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2377-L2379) · [Before (L2572-L2574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2572-L2574)

```diff
-       (0, jB.f)(qB.i), (0, DB.m)(aY.feed), (0, kB.h)(), xO || (xO = !0, (0, qB.g)(mB.k, (BB => {
-         const OB = (0, FB.h)(mB.k, BB);
-         "string" === typeof OB && Promise.resolve().then((() => GB(4073))).then((BB => {
+       (0, LW.e)(bW.k), (0, EW.q)(Gm.feed), (0, JW.c)(), WO || (WO = !0, (0, bW.j)(uW.g, (WW => {
+         const iW = (0, dW.g)(uW.g, WW);
+         "string" === typeof iW && Promise.resolve().then((() => OW(4866))).then((WW => {
```

#### 335. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2580-L2585` → after: `L2385-L2390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2385-L2390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2385-L2390) · [Before (L2580-L2585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2580-L2585)

```diff
-       })), (0, qB.g)(mB.bb, (BB => {
-         const OB = (0, FB.h)(mB.bb, BB);
-         "number" === typeof OB && JB.o.tM("serverUpdating", Date.now() + OB, !0)
-       })), (0, qB.g)(mB.D, (BB => {
-         const OB = (0, FB.h)(mB.D, BB);
-         if ((0, FB.e)(OB)) {
+       })), (0, bW.j)(uW.kb, (WW => {
+         const iW = (0, dW.g)(uW.kb, WW);
+         "number" === typeof iW && wW.l.iZ("serverUpdating", Date.now() + iW, !0)
+       })), (0, bW.j)(uW.F, (WW => {
+         const iW = (0, dW.g)(uW.F, WW);
+         if ((0, dW.d)(iW)) {
```

#### 336. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2587-L2588` → after: `L2392-L2393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2392-L2393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2392-L2393) · [Before (L2587-L2588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2587-L2588)

```diff
-             BB: BB,
-             OB: GB
+             cN: WW,
+             wN: OW
```

#### 337. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2591-L2592` → after: `L2396-L2397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2396-L2397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2396-L2397) · [Before (L2591-L2592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2591-L2592)

```diff
-             BB: "string" === typeof BB ? BB : null,
-             OB: "string" === typeof GB ? GB : null
+             cN: "string" === typeof WW ? WW : null,
+             wN: "string" === typeof OW ? OW : null
```

#### 338. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2595-L2603` → after: `L2400-L2408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2400-L2408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2400-L2408) · [Before (L2595-L2603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2595-L2603)

```diff
-       })), (0, qB.g)(MB.oc.NewUiRequest, (BB => {
-         const OB = (0, FB.l)(BB);
-         (0, FB.e)(OB) && "number" === typeof OB.id && (0, FB.e)(OB.clientParameters) && (0, vO.d)(OB.id, OB.clientParameters)
-       })), (0, qB.g)(mB.V, (BB => {
-         const OB = (0, FB.h)(mB.V, BB);
-         "number" === typeof OB && (0, vO.f)(OB)
-       })), (0, qB.e)(vO.c), (0, qB.g)(MB.oc.UiRequestPopup, (BB => {
-         const OB = (0, FB.l)(BB);
-         if ((0, FB.e)(OB) && "number" === typeof OB.id && ("string" === typeof OB.text || (0, FB.e)(OB.text) && "string" === typeof OB.text.translationKey)) {
+       })), (0, bW.j)(tW.uc.NewUiRequest, (WW => {
+         const iW = (0, dW.j)(WW);
+         (0, dW.d)(iW) && "number" === typeof iW.id && (0, dW.d)(iW.clientParameters) && (0, Fi.f)(iW.id, iW.clientParameters)
+       })), (0, bW.j)(uW.ab, (WW => {
+         const iW = (0, dW.g)(uW.ab, WW);
+         "number" === typeof iW && (0, Fi.h)(iW)
+       })), (0, bW.i)(Fi.c), (0, bW.j)(tW.uc.UiRequestPopup, (WW => {
+         const iW = (0, dW.j)(WW);
+         if ((0, dW.d)(iW) && "number" === typeof iW.id && ("string" === typeof iW.text || (0, dW.d)(iW.text) && "string" === typeof iW.text.translationKey)) {
```

#### 339. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2608` → after: `L2413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2413) · [Before (L2608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2608)

```diff
-               UJ: OB
+               ct: iW
```

#### 340. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2612-L2617` → after: `L2417-L2422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2417-L2422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2417-L2422) · [Before (L2612-L2617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2612-L2617)

```diff
-       })), (0, qB.g)(MB.oc.TopRightHelper, (BB => {
-         const OB = (0, FB.l)(BB);
-         void 0 !== OB && JB.o.tM("TopRightHelper", OB, !0)
-       })), (0, qB.g)(MB.oc.TaskProgress, (BB => {
-         const OB = (0, FB.l)(BB);
-         (0, FB.e)(OB) && "string" === typeof OB.taskId && "number" === typeof OB.progress && (0, CO.e)({
+       })), (0, bW.j)(tW.uc.TopRightHelper, (WW => {
+         const iW = (0, dW.j)(WW);
+         void 0 !== iW && wW.l.iZ("TopRightHelper", iW, !0)
+       })), (0, bW.j)(tW.uc.TaskProgress, (WW => {
+         const iW = (0, dW.j)(WW);
+         (0, dW.d)(iW) && "string" === typeof iW.taskId && "number" === typeof iW.progress && (0, ri.d)({
```

#### 341. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2621-L2625` → after: `L2426-L2430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2426-L2430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2426-L2430) · [Before (L2621-L2625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2621-L2625)

```diff
-       }))), SG || (SG = !0, (0, qB.g)(mB.t, (BB => {
-         const OB = (0, FB.h)(mB.t, BB);
-         (0, FB.e)(OB) && JB.o.tM("showShopFromServer", {
-           toggle: OB.fO,
-           kO: OB.kO
+       }))), yO || (yO = !0, (0, bW.j)(uW.o, (WW => {
+         const iW = (0, dW.g)(uW.o, WW);
+         (0, dW.d)(iW) && wW.l.iZ("showShopFromServer", {
+           toggle: iW.Hi,
+           ni: iW.ni
```

#### 342. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2627-L2632` → after: `L2432-L2437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2432-L2437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2432-L2437) · [Before (L2627-L2632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2627-L2632)

```diff
-       })), (0, qB.g)(MB.oc.OverShopInfo, (BB => {
-         const OB = (0, FB.l)(BB);
-         (0, FB.e)(OB) && JB.o.tM("overShopInfo", OB.info, !0)
-       })), (0, qB.g)(MB.oc.ShowShopTutorial, (() => {
-         JB.o.tM("showShopTutorial", null, !0)
-       }))), WG || (WG = !0, (0, qB.d)((() => {
+       })), (0, bW.j)(tW.uc.OverShopInfo, (WW => {
+         const iW = (0, dW.j)(WW);
+         (0, dW.d)(iW) && wW.l.iZ("overShopInfo", iW.info, !0)
+       })), (0, bW.j)(tW.uc.ShowShopTutorial, (() => {
+         wW.l.iZ("showShopTutorial", null, !0)
+       }))), KO || (KO = !0, (0, bW.e)((() => {
```

#### 343. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2634-L2641` → after: `L2439-L2446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2439-L2446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2439-L2446) · [Before (L2634-L2641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2634-L2641)

```diff
-         (0, qG.resetLeaveEvents)(), null === (BB = AG) || void 0 === BB || BB(), AG = (0, qB.b)() ? (0, NG.onVisitSessionGameServerConnected)(qB.b) : null, (0, qB.b)() || JB.o.kN()
-       })), (0, qB.g)(MB.oc.SetCookie, (BB => {
-         const OB = (0, FB.l)(BB),
-           GB = (0, iO.c)().gameNameWithVariation;
-         (0, FB.e)(OB) && "string" === typeof OB.key && null !== GB && (0, ZG.setCookie)(GB, OB.key, OB.value)
-       })), (0, qB.g)(MB.oc.LeaveValues, (BB => {
-         const OB = (0, FB.l)(BB);
-         if ((0, FB.e)(OB) && "string" === typeof OB.leaveEventType) {
+         (0, UO.resetLeaveEvents)(), null === (WW = SO) || void 0 === WW || WW(), SO = (0, bW.c)() ? (0, sO.onVisitSessionGameServerConnected)(bW.c) : null, (0, bW.c)() || wW.l.pU()
+       })), (0, bW.j)(tW.uc.SetCookie, (WW => {
+         const iW = (0, dW.j)(WW),
+           OW = (0, vi.d)().gameNameWithVariation;
+         (0, dW.d)(iW) && "string" === typeof iW.key && null !== OW && (0, kO.setCookie)(OW, iW.key, iW.value)
+       })), (0, bW.j)(tW.uc.LeaveValues, (WW => {
+         const iW = (0, dW.j)(WW);
+         if ((0, dW.d)(iW) && "string" === typeof iW.leaveEventType) {
```

#### 344. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2655-L2657` → after: `L2460-L2462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2460-L2462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2460-L2462) · [Before (L2655-L2657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2655-L2657)

```diff
-       })), (0, qB.g)(MB.oc.CustomAnalyticsEvent, (BB => {
-         const OB = (0, FB.l)(BB);
-         if ((0, FB.e)(OB) && "string" === typeof OB.cat1) {
+       })), (0, bW.j)(tW.uc.CustomAnalyticsEvent, (WW => {
+         const iW = (0, dW.j)(WW);
+         if ((0, dW.d)(iW) && "string" === typeof iW.cat1) {
```

#### 345. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2671-L2673` → after: `L2476-L2478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2476-L2478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2476-L2478) · [Before (L2671-L2673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2671-L2673)

```diff
-       })), (0, qB.g)(MB.oc.ProgressionEvent, (BB => {
-         const OB = (0, FB.l)(BB);
-         if ((0, FB.e)(OB)) {
+       })), (0, bW.j)(tW.uc.ProgressionEvent, (WW => {
+         const iW = (0, dW.j)(WW);
+         if ((0, dW.d)(iW)) {
```

#### 346. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2689-L2691` → after: `L2494-L2496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2494-L2496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2494-L2496) · [Before (L2689-L2691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2689-L2691)

```diff
-       })), (0, qB.g)(MB.oc.ResourceEvent, (BB => {
-         const OB = (0, FB.l)(BB);
-         if ((0, FB.e)(OB)) {
+       })), (0, bW.j)(tW.uc.ResourceEvent, (WW => {
+         const iW = (0, dW.j)(WW);
+         if ((0, dW.d)(iW)) {
```

#### 347. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2707-L2709` → after: `L2512-L2514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2512-L2514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2512-L2514) · [Before (L2707-L2709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2707-L2709)

```diff
-       })), (0, qB.g)(MB.oc.LeaderboardResponse, (BB => {
-         const OB = (0, FB.l)(BB);
-         if ((0, FB.e)(OB)) {
+       })), (0, bW.j)(tW.uc.LeaderboardResponse, (WW => {
+         const iW = (0, dW.j)(WW);
+         if ((0, dW.d)(iW)) {
```

#### 348. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2715` → after: `L2520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2520) · [Before (L2715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2715)

```diff
-           JB.o.tM("leaderboardResponse", {
+           wW.l.iZ("leaderboardResponse", {
```

#### 349. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2721-L2730` → after: `L2526-L2535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2526-L2535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2526-L2535) · [Before (L2721-L2730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2721-L2730)

```diff
-       })), (0, qB.g)(mB.z, (BB => {
-         const OB = (0, FB.h)(mB.z, BB);
-         "string" === typeof OB && (0, RG.d)(BB.conn, OB)
-       })), (0, qB.g)(mB.B, (BB => {
-         const OB = (0, FB.h)(mB.B, BB);
-         "string" === typeof OB && console.error(`[logErrorToConsole]: ${OB}`)
-       }))), rB(), (0, dG.c)(), gO || (gO = !0, (0, qB.g)(mB.j, (BB => {
-         const OB = (0, FB.h)(mB.j, BB);
-         void 0 !== OB && (0, LO.i)(OB)
-       }))), bO(), KO(), bB || (bB = !0, (0, QB.w)(CB)), YB.gameBridge.attach(eY), XY()
+       })), (0, bW.j)(uW.z, (WW => {
+         const iW = (0, dW.g)(uW.z, WW);
+         "string" === typeof iW && (0, MO.b)(WW.conn, iW)
+       })), (0, bW.j)(uW.C, (WW => {
+         const iW = (0, dW.g)(uW.C, WW);
+         "string" === typeof iW && console.error(`[logErrorToConsole]: ${iW}`)
+       }))), DW(), (0, nO.c)(), Di || (Di = !0, (0, bW.j)(uW.f, (WW => {
+         const iW = (0, dW.g)(uW.f, WW);
+         void 0 !== iW && (0, gi.k)(iW)
+       }))), ai(), ni(), GW || (GW = !0, (0, NW.v)(IW)), mW.gameBridge.attach(Im), Cm()
```

#### 350. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2733` → after: `L2538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2538) · [Before (L2733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2733)

```diff
-   36997: (BB, OB, GB) => {
+   37441: (WW, iW, OW) => {
```

#### 351. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2735-L2765` → after: `L2540-L2541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2540-L2541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2540-L2541) · [Before (L2735-L2765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2735-L2765)

```diff
-       d: () => MB,
-       g: () => yB,
-       k: () => jB,
-       o: () => JB
-     });
-     var YB = GB(2034);
-     let DB = null,
-       QB = 0;
-     const oB = new Set;
- 
-     function jB() {
-       return DB
-     }
- 
-     function yB() {
-       return QB
- ... (15 more removed lines; see GitHub link above)
+       c: () => PW,
+       d: () => LW
```

#### 352. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2767` → after: `L2543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2543) · [Before (L2767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2767)

```diff
-     var YB = GB(37004);
+     var mW = OW(37444);
```

#### 353. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2772` → after: `L2548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2548) · [Before (L2772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2772)

```diff
-       return DB ??= GB.e(73).then((() => GB(42193))).catch((BB => {
+       return EW ??= OW.e(74).then((() => OW(42663))).catch((WW => {
```

#### 354. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2786` → after: `L2562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2562) · [Before (L2786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2786)

```diff
-   37085: (BB, OB, GB) => {
+   37646: (WW, iW, OW) => {
```

#### 355. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2788` → after: `L2564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2564) · [Before (L2788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2788)

```diff
-       d: () => DB
+       e: () => EW
```

#### 356. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2826` → after: `L2602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2602) · [Before (L2826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2826)

```diff
-           if (OB > 0 && GB.searchParams.set("cache-bust", `${Date.now()}-${OB}`), await this.fetchWhole(GB, BB)) return this.scriptUrl = GB, !0;
+           if (iW > 0 && OW.searchParams.set("cache-bust", `${Date.now()}-${iW}`), await this.fetchWhole(OW, WW)) return this.scriptUrl = OW, !0;
```

#### 357. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2868` → after: `L2644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2644) · [Before (L2868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2868)

```diff
-   37753: (BB, OB, GB) => {
+   38214: (WW, iW, OW) => {
```

#### 358. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L3032` → after: `L2808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2808) · [Before (L3032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L3032)

```diff
-   39741: (BB, OB, GB) => {
+   40242: (WW, iW, OW) => {
```

#### 359. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L3034` → after: `L2810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2810) · [Before (L3034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L3034)

```diff
-       d: () => YB,
+       c: () => mW,
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (1967 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1` → after: `L1`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1) · [Before (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1)

```diff
- /*! For license information please see gw4e3a.procGenWorker.0e0808f4.chunk.js.LICENSE.txt */
+ /*! For license information please see 1yqdn.procGenWorker.f4246b8e.chunk.js.LICENSE.txt */
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L4)

```diff
-       1710: BB => {
+       1738: WW => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L82` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L82) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L82)

```diff
-             return OB === 1 / 0 ? OB : void 0 !== OB ? Math.max(0, Math.ceil(OB - GB())) : 0
+             return iW === 1 / 0 ? iW : void 0 !== iW ? Math.max(0, Math.ceil(iW - OW())) : 0
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L151` → after: `L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L151) · [Before (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L151)

```diff
-       421: BB => {
+       428: WW => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L156` → after: `L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L156) · [Before (L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L156)

```diff
-       389: (BB, OB, GB) => {
+       382: (WW, iW, OW) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L164-L165` → after: `L164-L165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L164-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L164-L165) · [Before (L164-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L164-L165)

```diff
-         var YB = GB(395),
-           DB = GB(397),
+         var mW = OW(387),
+           EW = OW(396),
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L168` → after: `L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L168) · [Before (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L168)

```diff
-       477: BB => {
+       478: WW => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L173` → after: `L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L173) · [Before (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L173)

```diff
-       383: BB => {
+       378: WW => {
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L179` → after: `L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L179) · [Before (L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L179)

```diff
-       403: BB => {
+       406: WW => {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L184` → after: `L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L184) · [Before (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L184)

```diff
-       368: BB => {
+       360: WW => {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L190` → after: `L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L190) · [Before (L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L190)

```diff
-       558: BB => {
+       557: WW => {
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L201-L202` → after: `L201-L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L201-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L201-L202) · [Before (L201-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L201-L202)

```diff
-       509: (BB, OB, GB) => {
-         BB.exports = GB(503)
+       501: (WW, iW, OW) => {
+         WW.exports = OW(497)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L204` → after: `L204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L204) · [Before (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L204)

```diff
-       503: BB => {
+       497: WW => {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L212-L213` → after: `L212-L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L212-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L212-L213) · [Before (L212-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L212-L213)

```diff
-       446: (BB, OB, GB) => {
-         BB.exports = GB(444)
+       454: (WW, iW, OW) => {
+         WW.exports = OW(449)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L215` → after: `L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L215) · [Before (L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L215)

```diff
-       444: BB => {
+       449: WW => {
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L225` → after: `L225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L225) · [Before (L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L225)

```diff
-       375: BB => {
+       369: WW => {
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L228` → after: `L228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L228) · [Before (L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L228)

```diff
-       412: (BB, OB, GB) => {
+       416: (WW, iW, OW) => {
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L238` → after: `L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L238) · [Before (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L238)

```diff
-         var YB = GB(375)
+         var mW = OW(369)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L240` → after: `L240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L240) · [Before (L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L240)

```diff
-       417: BB => {
+       419: WW => {
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L245` → after: `L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L245) · [Before (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L245)

```diff
-       468: BB => {
+       472: WW => {
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L250` → after: `L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L250) · [Before (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L250)

```diff
-       611: (BB, OB, GB) => {
+       610: (WW, iW, OW) => {
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L259` → after: `L259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L259) · [Before (L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L259)

```diff
-         var YB = GB(368)()
+         var mW = OW(360)()
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L261` → after: `L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L261) · [Before (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L261)

```diff
-       395: BB => {
+       387: WW => {
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L267-L268` → after: `L267-L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L267-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L267-L268) · [Before (L267-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L267-L268)

```diff
-       363: (BB, OB, GB) => {
-         var YB = GB(368);
+       352: (WW, iW, OW) => {
+         var mW = OW(360);
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L270` → after: `L270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L270) · [Before (L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L270)

```diff
-           EPSILON: GB(375),
+           EPSILON: OW(369),
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L273-L304` → after: `L273-L304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L273-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L273-L304) · [Before (L273-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L273-L304)

```diff
-           clone: GB(383),
-           angle: GB(389),
-           pp: GB(395),
-           copy: GB(403),
-           set: GB(410),
-           equals: GB(412),
-           exactEquals: GB(417),
-           add: GB(421),
-           subtract: GB(425),
-           sub: GB(427),
-           multiply: GB(432),
-           mul: GB(438),
-           divide: GB(444),
-           div: GB(446),
-           min: GB(452),
-           max: GB(461),
- ... (16 more removed lines; see GitHub link above)
+           clone: OW(378),
+           angle: OW(382),
+           fi: OW(387),
+           copy: OW(406),
+           set: OW(411),
+           equals: OW(416),
+           exactEquals: OW(419),
+           add: OW(428),
+           subtract: OW(431),
+           sub: OW(433),
+           multiply: OW(439),
+           mul: OW(447),
+           divide: OW(449),
+           div: OW(454),
+           min: OW(458),
+           max: OW(465),
+ ... (16 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L306-L307` → after: `L306-L307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L306-L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L306-L307) · [Before (L306-L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L306-L307)

```diff
-           cross: GB(558),
-           lerp: GB(563),
+           cross: OW(557),
+           lerp: OW(565),
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L310-L315` → after: `L310-L315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L310-L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L310-L315) · [Before (L310-L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L310-L315)

```diff
-           transformMat3: GB(583),
-           transformQuat: GB(587),
-           gq: GB(595),
-           sq: GB(603),
-           YZ: GB(607),
-           forEach: GB(611)
+           transformMat3: OW(586),
+           transformQuat: OW(592),
+           cj: OW(595),
+           wj: OW(602),
+           tj: OW(605),
+           forEach: OW(610)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L318` → after: `L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L318) · [Before (L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L318)

```diff
-       554: BB => {
+       551: WW => {
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L323-L324` → after: `L323-L324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L323-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L323-L324) · [Before (L323-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L323-L324)

```diff
-       531: (BB, OB, GB) => {
-         BB.exports = GB(525)
+       525: (WW, iW, OW) => {
+         WW.exports = OW(517)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L326` → after: `L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L326) · [Before (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L326)

```diff
-       525: BB => {
+       517: WW => {
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L334` → after: `L334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L334) · [Before (L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L334)

```diff
-       563: BB => {
+       565: WW => {
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L342` → after: `L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L342) · [Before (L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L342)

```diff
-       461: BB => {
+       465: WW => {
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L347` → after: `L347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L347) · [Before (L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L347)

```diff
-       452: BB => {
+       458: WW => {
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L352-L353` → after: `L352-L353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L352-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L352-L353) · [Before (L352-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L352-L353)

```diff
-       438: (BB, OB, GB) => {
-         BB.exports = GB(432)
+       447: (WW, iW, OW) => {
+         WW.exports = OW(439)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L355` → after: `L355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L355) · [Before (L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L355)

```diff
-       432: BB => {
+       439: WW => {
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L360` → after: `L360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L360) · [Before (L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L360)

```diff
-       548: BB => {
+       544: WW => {
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L365` → after: `L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L365) · [Before (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L365)

```diff
-       397: BB => {
+       396: WW => {
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L395` → after: `L395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L395) · [Before (L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L395)

```diff
-       603: BB => {
+       602: WW => {
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L406` → after: `L406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L406) · [Before (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L406)

```diff
-       607: BB => {
+       605: WW => {
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L417` → after: `L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L417) · [Before (L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L417)

```diff
-       483: BB => {
+       486: WW => {
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L422` → after: `L422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L422) · [Before (L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L422)

```diff
-       489: BB => {
+       488: WW => {
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L427` → after: `L427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L427) · [Before (L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L427)

```diff
-       495: BB => {
+       490: WW => {
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L432` → after: `L432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L432) · [Before (L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L432)

```diff
-       410: BB => {
+       411: WW => {
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L437-L438` → after: `L437-L438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L437-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L437-L438) · [Before (L437-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L437-L438)

```diff
-       522: (BB, OB, GB) => {
-         BB.exports = GB(515)
+       512: (WW, iW, OW) => {
+         WW.exports = OW(506)
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L441` → after: `L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L441) · [Before (L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L441)

```diff
-         BB.exports = GB(536)
+         WW.exports = OW(534)
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L443` → after: `L443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L443) · [Before (L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L443)

```diff
-       515: BB => {
+       506: WW => {
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L451` → after: `L451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L451) · [Before (L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L451)

```diff
-       536: BB => {
+       534: WW => {
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L459-L460` → after: `L459-L460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L459-L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L459-L460) · [Before (L459-L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L459-L460)

```diff
-       427: (BB, OB, GB) => {
-         BB.exports = GB(425)
+       433: (WW, iW, OW) => {
+         WW.exports = OW(431)
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L462` → after: `L462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L462) · [Before (L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L462)

```diff
-       425: BB => {
+       431: WW => {
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L467` → after: `L467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L467) · [Before (L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L467)

```diff
-       583: BB => {
+       586: WW => {
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L484` → after: `L484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L484) · [Before (L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L484)

```diff
-       587: BB => {
+       592: WW => {
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L500` → after: `L500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L500) · [Before (L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L500)

```diff
-       3172: BB => {
+       3897: WW => {
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L506` → after: `L506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L506) · [Before (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L506)

```diff
-       3181: BB => {
+       3902: WW => {
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L516` → after: `L516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L516) · [Before (L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L516)

```diff
-       40775: BB => {
+       41291: WW => {
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L520` → after: `L520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L520) · [Before (L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L520)

```diff
-             for (var oB = DB[QB] = new Array(OB), jB = QB < YB / 2 ? QB : QB + 1, yB = 1; yB <= OB; yB++) {
+             for (var PW = EW[NW] = new Array(iW), LW = NW < mW / 2 ? NW : NW + 1, cW = 1; cW <= iW; cW++) {
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L527-L529` → after: `L527-L529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L527-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L527-L529) · [Before (L527-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L527-L529)

```diff
-       3166: (BB, OB, GB) => {
-         var YB = GB(3172),
-           DB = GB(3181),
+       3891: (WW, iW, OW) => {
+         var mW = OW(3897),
+           EW = OW(3902),
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L674-L677` → after: `L674-L677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L674-L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L674-L677) · [Before (L674-L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L674-L677)

```diff
-       40760: (BB, OB, GB) => {
-         var YB = GB(40763).integer,
-           DB = GB(40765),
-           QB = GB(40767);
+       41274: (WW, iW, OW) => {
+         var mW = OW(41280).integer,
+           EW = OW(41283),
+           NW = OW(41286);
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L741-L744` → after: `L741-L744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L741-L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L741-L744) · [Before (L741-L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L741-L744)

```diff
-       40778: (BB, OB, GB) => {
-         var YB = GB(40763).array,
-           DB = GB(40765),
-           QB = GB(40767);
+       41295: (WW, iW, OW) => {
+         var mW = OW(41280).array,
+           EW = OW(41283),
+           NW = OW(41286);
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L827-L828` → after: `L827-L828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L827-L828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L827-L828) · [Before (L827-L828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L827-L828)

```diff
-       40767: (BB, OB, GB) => {
-         var YB = GB(40775);
+       41286: (WW, iW, OW) => {
+         var mW = OW(41291);
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L847-L849` → after: `L847-L849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L847-L849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L847-L849) · [Before (L847-L849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L847-L849)

```diff
-       40753: (BB, OB, GB) => {
-         var YB = GB(40760),
-           DB = GB(40778);
+       41266: (WW, iW, OW) => {
+         var mW = OW(41274),
+           EW = OW(41295);
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L870` → after: `L870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L870) · [Before (L870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L870)

```diff
-       40765: BB => {
+       41283: WW => {
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L884` → after: `L884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L884) · [Before (L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L884)

```diff
-       40763: BB => {
+       41280: WW => {
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L910-L911` → after: `L910-L911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L910-L911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L910-L911) · [Before (L910-L911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L910-L911)

```diff
-       38383: (BB, OB, GB) => {
-         var YB = GB(38392);
+       38900: (WW, iW, OW) => {
+         var mW = OW(38905);
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L943` → after: `L943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L943) · [Before (L943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L943)

```diff
-       38392: (BB, OB) => {
+       38905: (WW, iW) => {
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L997-L998` → after: `L997-L998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L997-L998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L997-L998) · [Before (L997-L998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L997-L998)

```diff
-       9936: (BB, OB) => {
-         OB.g = function(BB) {
+       5727: (WW, iW) => {
+         iW.d = function(WW) {
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1012` → after: `L1012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R1012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L1012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1012) · [Before (L1012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1012)

```diff
-       40694: (BB, OB, GB) => {
+       41221: (WW, iW, OW) => {
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1014` → after: `L1014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R1014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L1014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1014) · [Before (L1014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1014)

```diff
-           b: () => MO
+           c: () => ti
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1016-L1018` → after: `L1016-L1018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R1016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L1016-L1018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1016-L1018) · [Before (L1016-L1018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1016-L1018)

```diff
-         var YB = GB(40717),
-           DB = GB(40706),
-           QB = GB(40786);
+         var mW = OW(41238),
+           EW = OW(41231),
+           NW = OW(41306);
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1027` → after: `L1027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R1027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L1027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1027) · [Before (L1027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1027)

```diff
-           return oB(`${BB}Wasteland`)
+           return PW(`${WW}Wasteland`)
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1062` → after: `L1062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R1062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L1062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1062) · [Before (L1062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1062)

```diff
-           return 36 * (1 === YB ? BB : OB) + 2 + Math.floor(32 * yB(BB, OB, GB ^ zB ^ YB))
+           return 36 * (1 === mW ? WW : iW) + 2 + Math.floor(32 * cW(WW, iW, OW ^ xW ^ mW))
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1064-L1065` → after: `L1064-L1065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R1064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L1064-L1065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1064-L1065) · [Before (L1064-L1065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1064-L1065)

```diff
-         var ZB = GB(40700),
-           NB = GB(40711);
+         var jW = OW(41228),
+           UW = OW(41236);
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1092` → after: `L1092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R1092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L1092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1092) · [Before (L1092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1092)

```diff
-             BB !== fB && (fB = BB, kB = (0, ZB.e)(BB), dB = jB(BB))
+             WW !== TW && (TW = WW, JW = (0, jW.g)(WW), hW = LW(WW))
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1141` → after: `L1141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R1141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L1141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1141) · [Before (L1141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1141)

```diff
-               return YB > GB && (QB = .25 - QB), BB < 0 && (QB = .5 - QB), OB < 0 ? 1 - QB : QB
+               return mW > OW && (NW = .25 - NW), WW < 0 && (NW = .5 - NW), iW < 0 ? 1 - NW : NW
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1174` → after: `L1174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R1174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L1174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1174) · [Before (L1174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1174)

```diff
-             return GB && IB(GB, BB, OB) ? GB : null
+             return OW && oW(OW, WW, iW) ? OW : null
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1181` → after: `L1181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R1181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L1181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1181) · [Before (L1181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1181)

```diff
-                 if (QB && DB >= QB.floorY - NB.f && YB <= QB.topY + WB) {
+                 if (NW && EW >= NW.floorY - UW.h && mW <= NW.topY + sW) {
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1206` → after: `L1206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R1206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L1206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1206) · [Before (L1206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1206)

```diff
-         var wB = GB(40739);
+         var pW = OW(41256);
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1210` → after: `L1210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R1210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L1210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1210) · [Before (L1210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1210)

```diff
-             this.pP = OB, this.chances = DB, this.mound = QB, this.order = ["deadBush", "rock", "rubble", "dryCactus", "bone", "grass", "tallGrass"], this.ids = void 0, this.salt = void 0, this.sinkholes = void 0, this.salt = GB.salt ^ oB(YB), this.sinkholes = GB.sinkholes;
+             this.jZ = iW, this.chances = EW, this.mound = NW, this.order = ["deadBush", "rock", "rubble", "dryCactus", "bone", "grass", "tallGrass"], this.ids = void 0, this.salt = void 0, this.sinkholes = void 0, this.salt = OW.salt ^ PW(mW), this.sinkholes = OW.sinkholes;
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1231` → after: `L1231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R1231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L1231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1231) · [Before (L1231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1231)

```diff
-               for (let DB = 0; DB < jB.height && yB + DB < this.pP; DB++) yB + DB >= 0 && BB.set(YB - OB, yB + DB, QB - GB, jB.block);
+               for (let EW = 0; EW < LW.height && cW + EW < this.jZ; EW++) cW + EW >= 0 && WW.set(mW - iW, cW + EW, NW - OW, LW.block);
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1238` → after: `L1238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R1238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L1238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1238) · [Before (L1238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1238)

```diff
-               if (MB += null !== (PB = this.chances[zB]) && void 0 !== PB ? PB : 0, JB < MB) return void(EB.has(zB) && this.sinkholes.taking(YB, QB) || this.place(BB, YB - OB, oB + 1 - DB, QB - GB, zB, yB(YB, QB, 1540483477 ^ this.salt)))
+               if (tW += null !== (ZW = this.chances[xW]) && void 0 !== ZW ? ZW : 0, wW < tW) return void(fW.has(xW) && this.sinkholes.taking(mW, NW) || this.place(WW, mW - iW, PW + 1 - EW, NW - OW, xW, cW(mW, NW, 1540483477 ^ this.salt)))
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1243` → after: `L1243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R1243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L1243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1243) · [Before (L1243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1243)

```diff
-                 GB + DB >= 0 && GB + DB < this.pP && BB.set(OB, GB + DB, YB, QB)
+                 OW + EW >= 0 && OW + EW < this.jZ && WW.set(iW, OW + EW, mW, NW)
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1260` → after: `L1260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R1260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L1260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1260) · [Before (L1260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1260)

```diff
-             super.init(), this.floraGenerator = new cB(this.blockMetadata, this.pP, this.noise, this.seed, this.floraChances, ((BB, OB) => this.mound(BB, OB)))
+             super.init(), this.floraGenerator = new CW(this.blockMetadata, this.jZ, this.noise, this.seed, this.floraChances, ((WW, iW) => this.mound(WW, iW)))
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1298` → after: `L1298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R1298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L1298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1298) · [Before (L1298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1298)

```diff
-               return 0 === YB || 1 === YB && yB(BB, OB, GB ^ zB ^ 3) < .5 ? 2 - YB : 0
+               return 0 === mW || 1 === mW && cW(WW, iW, OW ^ xW ^ 3) < .5 ? 2 - mW : 0
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1327` → after: `L1327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R1327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L1327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1327) · [Before (L1327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1327)

```diff
-             })), this.canyon = new DB.h([{
+             })), this.canyon = new EW.i([{
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1330` → after: `L1330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R1330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L1330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1330) · [Before (L1330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1330)

```diff
-             }], `${BB}WastelandCanyon`), this.canyonWarp = new DB.h([{
+             }], `${WW}WastelandCanyon`), this.canyonWarp = new EW.i([{
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1333` → after: `L1333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R1333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L1333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1333) · [Before (L1333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1333)

```diff
-             }], `${BB}WastelandCanyonWarp`), this.canyonMask = new DB.h([{
+             }], `${WW}WastelandCanyonWarp`), this.canyonMask = new EW.i([{
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1336` → after: `L1336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R1336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L1336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1336) · [Before (L1336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1336)

```diff
-             }], `${BB}WastelandCanyonMask`), this.patchNoise = new DB.h([{
+             }], `${WW}WastelandCanyonMask`), this.patchNoise = new EW.i([{
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1342` → after: `L1342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R1342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L1342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1342) · [Before (L1342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1342)

```diff
-             }], `${BB}WastelandPatch`), this.fineNoise = new DB.h([{
+             }], `${WW}WastelandPatch`), this.fineNoise = new EW.i([{
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1348` → after: `L1348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R1348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L1348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1348) · [Before (L1348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1348)

```diff
-             }], `${BB}WastelandFine`)
+             }], `${WW}WastelandFine`)
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1371-L1374` → after: `L1371-L1374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R1371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L1371-L1374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1371-L1374) · [Before (L1371-L1374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1371-L1374)

```diff
-         var TB = GB(4656),
-           bB = GB(641),
-           CB = GB(39845),
-           HB = GB(40728);
+         var RW = OW(2955),
+           GW = OW(643),
+           IW = OW(40358),
+           aW = OW(41244);
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1385` → after: `L1385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R1385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L1385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1385) · [Before (L1385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1385)

```diff
-             return BB.set(0, 0, 0, sB("5BMAAh0CiAEBHQGIAQEdA4gBBB0BiAECHQ8AAoEBAYgBAYEBBIgBAYEBBYgBA4EBDwAFgQEBiAEFfwOBAQOIAQ8AAYIBBYABBX8BgAEBggEBgAEBggEBgAEBggEPAAGCAQWAAQV/AYIBBIABAYIBDwABggEFgAEFfwGAAQEAA4ABAYIBDwABggEFgAEFfwWAAQGCAQ8AAYIBAYABAQAMgAECggEPAAGCAQWAAQKCAQiAAQGCA … [truncated]
+             return WW.set(0, 0, 0, zW("5BMAAh0CiAEBHQGIAQEdA4gBBB0BiAECHQ8AAoEBAYgBAYEBBIgBAYEBBYgBA4EBDwAFgQEBiAEFfwOBAQOIAQ8AAYIBBYABBX8BgAEBggEBgAEBggEBgAEBggEPAAGCAQWAAQV/AYIBBIABAYIBDwABggEFgAEFfwGAAQEAA4ABAYIBDwABggEFgAEFfwWAAQGCAQ8AAYIBAYABAQAMgAECggEPAAGCAQWAAQKCAQiAAQGCA … [truncated]
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1425-L1426` → after: `L1425-L1426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R1425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L1425-L1426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1425-L1426) · [Before (L1425-L1426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1425-L1426)

```diff
-               qualityDistribution: new TB.c([{
-                 value: bB.m.UNCOMMON,
+               qualityDistribution: new RW.f([{
+                 value: GW.i.UNCOMMON,
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1429` → after: `L1429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R1429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L1429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1429) · [Before (L1429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1429)

```diff
-                 value: bB.m.RARE,
+                 value: GW.i.RARE,
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1432` → after: `L1432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R1432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L1432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1432) · [Before (L1432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1432)

```diff
-                 value: bB.m.EPIC,
+                 value: GW.i.EPIC,
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1440` → after: `L1440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R1440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L1440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1440) · [Before (L1440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1440)

```diff
-               mobTypeDistribution: new TB.c([{
+               mobTypeDistribution: new RW.f([{
```

#### 96. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1448` → after: `L1448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R1448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L1448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1448) · [Before (L1448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1448)

```diff
-           return (0, wB.hb)(BB, [{
+           return (0, pW.ib)(WW, [{
```

#### 97. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1451` → after: `L1451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R1451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L1451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1451) · [Before (L1451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1451)

```diff
-           }, ...wB.e.map((BB => ({
+           }, ...pW.d.map((WW => ({
```

#### 98. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1458` → after: `L1458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R1458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L1458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1458) · [Before (L1458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1458)

```diff
-             super(BB, OB, GB, `${QB}DustFlats`, oB, jB, YO(YB.h.MEDIUM, 1.25, BO)), this.key = "dustFlats", this.floraChances = {
+             super(WW, iW, OW, `${NW}DustFlats`, PW, LW, mi(mW.i.MEDIUM, 1.25, Wi)), this.key = "dustFlats", this.floraChances = {
```

#### 99. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1462` → after: `L1462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R1462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L1462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1462) · [Before (L1462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1462)

```diff
-             }, this.deadTreeChance = 3, this.fallenLogChance = 1, this.outcropChance = lB.dustFlats, this.height = void 0, this.treeMinDist = 20, this.topsoilBlockType = this.ids["Dry Grass Block"], this.height = new DB.h([{
+             }, this.deadTreeChance = 3, this.fallenLogChance = 1, this.outcropChance = lW.dustFlats, this.height = void 0, this.treeMinDist = 20, this.topsoilBlockType = this.ids["Dry Grass Block"], this.height = new EW.i([{
```

#### 100. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1468` → after: `L1468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R1468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L1468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1468) · [Before (L1468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1468)

```diff
-             }], `${QB}DustFlatsHeight`)
+             }], `${NW}DustFlatsHeight`)
```

#### 101. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1483` → after: `L1483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R1483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L1483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1483) · [Before (L1483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1483)

```diff
-             super(BB, OB, GB, `${YB}ScorchedMesa`, QB, oB), this.key = "scorchedMesa", this.floraChances = {
+             super(WW, iW, OW, `${mW}ScorchedMesa`, NW, PW), this.key = "scorchedMesa", this.floraChances = {
```

#### 102. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1487` → after: `L1487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R1487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L1487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1487) · [Before (L1487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1487)

```diff
-             }, this.outcropChance = lB.scorchedMesa, this.deadTreeChance = 1, this.strataDepth = 90, this.canyonStrength = 1.3, this.height = void 0, this.bandPalette = void 0, this.treeMinDist = 45, this.topsoilBlockType = this.ids["Red Sand"], this.lowsoilBlockType = this.ids[" … [truncated]
+             }, this.outcropChance = lW.scorchedMesa, this.deadTreeChance = 1, this.strataDepth = 90, this.canyonStrength = 1.3, this.height = void 0, this.bandPalette = void 0, this.treeMinDist = 45, this.topsoilBlockType = this.ids["Red Sand"], this.lowsoilBlockType = this.ids[" … [truncated]
```

#### 103. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1493` → after: `L1493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R1493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L1493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1493) · [Before (L1493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1493)

```diff
-             }], `${YB}ScorchedMesaHeight`);
+             }], `${mW}ScorchedMesaHeight`);
```

#### 104. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1525` → after: `L1525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R1525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L1525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1525) · [Before (L1525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1525)

```diff
-             super(BB, OB, GB, `${YB}ShatteredHighlands`, QB, oB), this.key = "shatteredHighlands", this.floraChances = {
+             super(WW, iW, OW, `${mW}ShatteredHighlands`, NW, PW), this.key = "shatteredHighlands", this.floraChances = {
```

#### 105. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1528` → after: `L1528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R1528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L1528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1528) · [Before (L1528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1528)

```diff
-             }, this.outcropChance = lB.shatteredHighlands, this.deadTreeChance = 2, this.fallenLogChance = 1, this.strataDepth = 24, this.canyonStrength = .3, this.ridge1 = void 0, this.ridge2 = void 0, this.bumps = void 0, this.treeMinDist = 30, this.topsoilBlockType = this.ids[ … [truncated]
+             }, this.outcropChance = lW.shatteredHighlands, this.deadTreeChance = 2, this.fallenLogChance = 1, this.strataDepth = 24, this.canyonStrength = .3, this.ridge1 = void 0, this.ridge2 = void 0, this.bumps = void 0, this.treeMinDist = 30, this.topsoilBlockType = this.ids[ … [truncated]
```

#### 106. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1531` → after: `L1531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R1531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L1531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1531) · [Before (L1531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1531)

```diff
-             }], `${YB}HighlandsRidge1`), this.ridge2 = new DB.h([{
+             }], `${mW}HighlandsRidge1`), this.ridge2 = new EW.i([{
```

#### 107. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1534` → after: `L1534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R1534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L1534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1534) · [Before (L1534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1534)

```diff
-             }], `${YB}HighlandsRidge2`), this.bumps = new DB.h([{
+             }], `${mW}HighlandsRidge2`), this.bumps = new EW.i([{
```

#### 108. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1537` → after: `L1537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R1537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L1537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1537) · [Before (L1537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1537)

```diff
-             }], `${YB}HighlandsBumps`)
+             }], `${mW}HighlandsBumps`)
```

#### 109. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1548` → after: `L1548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R1548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L1548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1548) · [Before (L1548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1548)

```diff
-             return 0 !== DB ? DB : OB > 50 ? this.ids.Stone : OB > 34 ? this.ids["Rocky Dirt"] : this.ids.Dirt
+             return 0 !== EW ? EW : iW > 50 ? this.ids.Stone : iW > 34 ? this.ids["Rocky Dirt"] : this.ids.Dirt
```

#### 110. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1559` → after: `L1559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R1559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L1559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1559) · [Before (L1559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1559)

```diff
-               return null === oB || JB(BB >> 2, OB, GB >> 2, DB) >= .25 ? null : JB(BB, OB, GB, DB) < .65 ? oB : null
+               return null === PW || wW(WW >> 2, iW, OW >> 2, EW) >= .25 ? null : wW(WW, iW, OW, EW) < .65 ? PW : null
```

#### 111. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1566` → after: `L1566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R1566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L1566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1566) · [Before (L1566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1566)

```diff
-             super(BB, OB, GB, `${QB}RuinFields`, oB, jB, YO(YB.h.HIGH, 2.25, OO)), this.key = "ruinFields", this.floraChances = {
+             super(WW, iW, OW, `${NW}RuinFields`, PW, LW, mi(mW.i.HIGH, 2.25, ii)), this.key = "ruinFields", this.floraChances = {
```

#### 112. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1571` → after: `L1571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R1571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L1571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1571) · [Before (L1571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1571)

```diff
-             }, this.outcropChance = lB.ruinFields, this.deadTreeChance = 3, this.fallenLogChance = 2, this.canyonStrength = .45, this.height = void 0, this.treeMinDist = 12, this.topsoilBlockType = this.ids["Overgrown Dry Grass Block"], this.height = new DB.h([{
+             }, this.outcropChance = lW.ruinFields, this.deadTreeChance = 3, this.fallenLogChance = 2, this.canyonStrength = .45, this.height = void 0, this.treeMinDist = 12, this.topsoilBlockType = this.ids["Overgrown Dry Grass Block"], this.height = new EW.i([{
```

#### 113. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1577` → after: `L1577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R1577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L1577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1577) · [Before (L1577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1577)

```diff
-             }], `${QB}RuinFieldsHeight`)
+             }], `${NW}RuinFieldsHeight`)
```

#### 114. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1589` → after: `L1589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R1589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L1589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1589) · [Before (L1589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1589)

```diff
-             super(BB, OB, GB, `${YB}SaltFlats`, QB, oB), this.key = "saltFlats", this.floraChances = {
+             super(WW, iW, OW, `${mW}SaltFlats`, NW, PW), this.key = "saltFlats", this.floraChances = {
```

#### 115. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1592` → after: `L1592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R1592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L1592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1592) · [Before (L1592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1592)

```diff
-             }, this.outcropChance = lB.saltFlats, this.canyonStrength = 0, this.strataDepth = 6, this.height = void 0, this.treeMinDist = null, this.topsoilBlockType = this.ids.Chalk, this.lowsoilBlockType = this.ids.Sand, this.height = new DB.h([{
+             }, this.outcropChance = lW.saltFlats, this.canyonStrength = 0, this.strataDepth = 6, this.height = void 0, this.treeMinDist = null, this.topsoilBlockType = this.ids.Chalk, this.lowsoilBlockType = this.ids.Sand, this.height = new EW.i([{
```

#### 116. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1598` → after: `L1598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R1598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L1598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1598) · [Before (L1598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1598)

```diff
-             }], `${YB}SaltFlatsHeight`)
+             }], `${mW}SaltFlatsHeight`)
```

#### 117. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1616` → after: `L1616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R1616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L1616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1616) · [Before (L1616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1616)

```diff
-             super(BB, OB, GB, `${YB}SurvivorGrove`, QB, oB), this.key = "survivorGrove", this.floraChances = {
+             super(WW, iW, OW, `${mW}SurvivorGrove`, NW, PW), this.key = "survivorGrove", this.floraChances = {
```

#### 118. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1620` → after: `L1620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R1620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L1620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1620) · [Before (L1620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1620)

```diff
-             }, this.mapleTreeChance = 6, this.deadTreeChance = 1, this.canyonStrength = .3, this.outcropChance = lB.survivorGrove, this.height = void 0, this.treeMinDist = 9, this.topsoilBlockType = this.ids["Grass Block"], this.height = new DB.h([{
+             }, this.mapleTreeChance = 6, this.deadTreeChance = 1, this.canyonStrength = .3, this.outcropChance = lW.survivorGrove, this.height = void 0, this.treeMinDist = 9, this.topsoilBlockType = this.ids["Grass Block"], this.height = new EW.i([{
```

#### 119. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1626` → after: `L1626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R1626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L1626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1626) · [Before (L1626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1626)

```diff
-             }], `${YB}SurvivorGroveHeight`)
+             }], `${mW}SurvivorGroveHeight`)
```

#### 120. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1641` → after: `L1641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R1641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L1641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1641) · [Before (L1641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1641)

```diff
-               pP: OB,
+               jZ: iW,
```

#### 121. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1657` → after: `L1657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R1657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L1657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1657) · [Before (L1657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1657)

```diff
-               PB = (0, QB.m)(GB);
+               ZW = (0, NW.k)(OW);
```

#### 122. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1667` → after: `L1667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R1667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L1667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1667) · [Before (L1667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1667)

```diff
-       624: (BB, OB, GB) => {
+       622: (WW, iW, OW) => {
```

#### 123. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1669` → after: `L1669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R1669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L1669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1669) · [Before (L1669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1669)

```diff
-           c: () => YB
+           b: () => mW
```

#### 124. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1677-L1678` → after: `L1677-L1678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R1677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L1677-L1678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1677-L1678) · [Before (L1677-L1678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1677-L1678)

```diff
-               if (void 0 !== GB[BB]) throw new Error(`Duplicate value found in bi-directional table: ${String(BB)}`);
-               GB[BB] = "string" === OB ? YB : Number(YB)
+               if (void 0 !== OW[WW]) throw new Error(`Duplicate value found in bi-directional table: ${String(WW)}`);
+               OW[WW] = "string" === iW ? mW : Number(mW)
```

#### 125. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1690` → after: `L1690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R1690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L1690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1690) · [Before (L1690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1690)

```diff
-       40728: (BB, OB, GB) => {
+       41244: (WW, iW, OW) => {
```

#### 126. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1692` → after: `L1692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R1692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L1692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1692) · [Before (L1692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1692)

```diff
-           e: () => DB
+           c: () => EW
```

#### 127. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1694` → after: `L1694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R1694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L1694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1694) · [Before (L1694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1694)

```diff
-         var YB = GB(39845);
+         var mW = OW(40358);
```

#### 128. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1723` → after: `L1723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R1723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L1723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1723) · [Before (L1723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1723)

```diff
-       39845: (BB, OB, GB) => {
+       40358: (WW, iW, OW) => {
```

#### 129. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1850` → after: `L1850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R1850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L1850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1850) · [Before (L1850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1850)

```diff
-             super(`${YB.name} has been mutated during iteration`)
+             super(`${mW.name} has been mutated during iteration`)
```

#### 130. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1854` → after: `L1854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R1854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L1854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1854) · [Before (L1854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1854)

```diff
-       40783: (BB, OB, GB) => {
+       41304: (WW, iW, OW) => {
```

#### 131. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1856` → after: `L1856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R1856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L1856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1856) · [Before (L1856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1856)

```diff
-           b: () => YB,
+           c: () => mW,
```

#### 132. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1862` → after: `L1862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R1862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L1862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1862) · [Before (L1862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1862)

```diff
-             this.name = BB, this.max = OB, this.idleMs = GB, this.head = new jB(0, null, null), this.size = 0, this.epoch = 0, this.epochStartMs = Date.now(), this.hits = 0, this.misses = 0;
+             this.name = WW, this.max = iW, this.xj = OW, this.head = new LW(0, null, null), this.size = 0, this.epoch = 0, this.epochStartMs = Date.now(), this.hits = 0, this.misses = 0;
```

#### 133. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1894` → after: `L1894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R1894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L1894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1894) · [Before (L1894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1894)

```diff
-             BB - this.epochStartMs >= this.idleMs && (this.dropEntriesIdleSince(this.epoch - 1), this.epoch++, this.epochStartMs = BB)
+             WW - this.epochStartMs >= this.xj && (this.dropEntriesIdleSince(this.epoch - 1), this.epoch++, this.epochStartMs = WW)
```

#### 134. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1924` → after: `L1924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R1924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L1924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1924) · [Before (L1924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1924)

```diff
-           return BB > -QB && BB < QB && OB > -QB && OB < QB ? BB * (2 * QB) + OB : `${BB}|${OB}`
+           return WW > -NW && WW < NW && iW > -NW && iW < NW ? WW * (2 * NW) + iW : `${WW}|${iW}`
```

#### 135. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1936` → after: `L1936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R1936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L1936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1936) · [Before (L1936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1936)

```diff
-       40731: (BB, OB, GB) => {
+       41248: (WW, iW, OW) => {
```

#### 136. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1944` → after: `L1944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R1944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L1944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1944) · [Before (L1944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1944)

```diff
-           e: () => YB
+           c: () => mW
```

#### 137. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1947` → after: `L1947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R1947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L1947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1947) · [Before (L1947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1947)

```diff
-       40739: (BB, OB, GB) => {
+       41256: (WW, iW, OW) => {
```

#### 138. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1949-L1950` → after: `L1949-L1950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R1949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L1949-L1950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1949-L1950) · [Before (L1949-L1950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1949-L1950)

```diff
-           b: () => hB,
-           e: () => kB,
+           c: () => XW,
+           d: () => JW,
```

#### 139. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1953` → after: `L1953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R1953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L1953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1953) · [Before (L1953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1953)

```diff
-           l: () => CB,
+           k: () => IW,
```

#### 140. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1955` → after: `L1955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R1955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L1955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1955) · [Before (L1955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1955)

```diff
-           p: () => mB,
+           o: () => uW,
```

#### 141. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1957` → after: `L1957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R1957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L1957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1957) · [Before (L1957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1957)

```diff
-           t: () => xB,
+           u: () => FW,
```

#### 142. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1959` → after: `L1959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R1959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L1959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1959) · [Before (L1959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1959)

```diff
-           y: () => aB,
+           w: () => BW,
```

#### 143. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1965-L1968` → after: `L1966-L1967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R1966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L1966-L1967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1966-L1967) · [Before (L1965-L1968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1965-L1968)

```diff
-           R: () => LB,
-           S: () => EB,
-           U: () => iB,
-           V: () => HB,
+           Q: () => fW,
+           T: () => eW,
```

#### 144. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1970-L1973` → after: `L1969-L1973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R1969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L1969-L1973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1969-L1973) · [Before (L1970-L1973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1970-L1973)

```diff
-           _: () => TB,
-           cb: () => XB,
-           gb: () => gB,
-           hb: () => KB
+           X: () => rW,
+           $: () => RW,
+           bb: () => VW,
+           eb: () => gW,
+           ib: () => HW
```

#### 145. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1975-L1978` → after: `L1975-L1978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R1975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L1975-L1978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1975-L1978) · [Before (L1975-L1978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1975-L1978)

```diff
-         var YB = GB(40706),
-           DB = GB(641),
-           QB = GB(40744),
-           oB = GB(4656);
+         var mW = OW(41231),
+           EW = OW(643),
+           NW = OW(41259),
+           PW = OW(2955);
```

#### 146. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1985` → after: `L1985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R1985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L1985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1985) · [Before (L1985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L1985)

```diff
-             this.columnRandom = new oB.d(""), this.flowerPatchRandom = new oB.d(""), this.cactusRandom = new oB.d(""), this.blockMetadata = void 0, this.seed = void 0, this.grassChance = void 0, this.tallGrassChance = void 0, this.cornChance = void 0, this.spectralGrassChance = v … [truncated]
+             this.columnRandom = new PW.g(""), this.flowerPatchRandom = new PW.g(""), this.cactusRandom = new PW.g(""), this.blockMetadata = void 0, this.seed = void 0, this.grassChance = void 0, this.tallGrassChance = void 0, this.cornChance = void 0, this.spectralGrassChance = v … [truncated]
```

#### 147. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L2128` → after: `L2128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R2128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L2128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L2128) · [Before (L2128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L2128)

```diff
-             if (jB + 3 >= QB && jB + 1 < QB + this.pP) {
+             if (LW + 3 >= NW && LW + 1 < NW + this.jZ) {
```

#### 148. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L2130` → after: `L2130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R2130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L2130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L2130) · [Before (L2130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L2130)

```diff
-               yB.reseed(`${DB}${oB}${this.seed}flora`);
+               cW.reseed(`${EW}${PW}${this.seed}flora`);
```

#### 149. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L2134` → after: `L2134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R2134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L2134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L2134) · [Before (L2134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L2134)

```diff
-                 0 <= YB && YB < this.pP && BB.set(DB - OB, YB, oB - GB, this.grassId)
+                 0 <= mW && mW < this.jZ && WW.set(EW - iW, mW, PW - OW, this.grassId)
```

#### 150. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L2139` → after: `L2139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R2139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L2139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L2139) · [Before (L2139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L2139)

```diff
-                     0 <= YB && YB < this.pP && BB.set(DB - OB, YB, oB - GB, this.tallGrassId)
+                     0 <= mW && mW < this.jZ && WW.set(EW - iW, mW, PW - OW, this.tallGrassId)
```

#### 151. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L2142` → after: `L2142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R2142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L2142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L2142) · [Before (L2142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L2142)

```diff
-                     0 <= YB && YB < this.pP && BB.set(DB - OB, YB, oB - GB, this.tallGrassTopId)
+                     0 <= mW && mW < this.jZ && WW.set(EW - iW, mW, PW - OW, this.tallGrassTopId)
```

#### 152. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L2149` → after: `L2149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R2149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L2149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L2149) · [Before (L2149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L2149)

```diff
-                     0 <= YB && YB < this.pP && BB.set(DB - OB, YB, oB - GB, this.cornSeedsId)
+                     0 <= mW && mW < this.jZ && WW.set(EW - iW, mW, PW - OW, this.cornSeedsId)
```

#### 153. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L2152` → after: `L2152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R2152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L2152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L2152) · [Before (L2152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L2152)

```diff
-                     0 <= YB && YB < this.pP && BB.set(DB - OB, YB, oB - GB, this.cornPlantId)
+                     0 <= mW && mW < this.jZ && WW.set(EW - iW, mW, PW - OW, this.cornPlantId)
```

#### 154. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L2155` → after: `L2155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R2155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L2155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L2155) · [Before (L2155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L2155)

```diff
-                     0 <= YB && YB < this.pP && BB.set(DB - OB, YB, oB - GB, this.cornPlantId)
+                     0 <= mW && mW < this.jZ && WW.set(EW - iW, mW, PW - OW, this.cornPlantId)
```

#### 155. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L2161` → after: `L2161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R2161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L2161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L2161) · [Before (L2161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L2161)

```diff
-                   0 <= YB && YB < this.pP && BB.set(DB - OB, YB, oB - GB, this.spectralGrassId)
+                   0 <= mW && mW < this.jZ && WW.set(EW - iW, mW, PW - OW, this.spectralGrassId)
```

#### 156. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L2164` → after: `L2164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R2164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L2164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L2164) · [Before (L2164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L2164)

```diff
-                   0 <= YB && YB < this.pP && BB.set(DB - OB, YB, oB - GB, this.pineGrassId)
+                   0 <= mW && mW < this.jZ && WW.set(EW - iW, mW, PW - OW, this.pineGrassId)
```

#### 157. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L2167` → after: `L2167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R2167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L2167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L2167) · [Before (L2167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L2167)

```diff
-                   0 <= YB && YB < this.pP && BB.set(DB - OB, YB, oB - GB, this.pineFernId)
+                   0 <= mW && mW < this.jZ && WW.set(EW - iW, mW, PW - OW, this.pineFernId)
```

#### 158. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L2172` → after: `L2172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R2172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L2172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L2172) · [Before (L2172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L2172)

```diff
-                       0 <= YB && YB < this.pP && BB.set(DB - OB, YB, oB - GB, this.jungleTallGrassId)
+                       0 <= mW && mW < this.jZ && WW.set(EW - iW, mW, PW - OW, this.jungleTallGrassId)
```

#### 159. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L2175` → after: `L2175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R2175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L2175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L2175) · [Before (L2175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L2175)

```diff
-                       0 <= YB && YB < this.pP && BB.set(DB - OB, YB, oB - GB, this.jungleTallGrassTopId)
+                       0 <= mW && mW < this.jZ && WW.set(EW - iW, mW, PW - OW, this.jungleTallGrassTopId)
```

#### 160. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L2181` → after: `L2181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R2181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L2181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L2181) · [Before (L2181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L2181)

```diff
-                     0 <= YB && YB < this.pP && BB.set(DB - OB, YB, oB - GB, this.catnipId)
+                     0 <= mW && mW < this.jZ && WW.set(EW - iW, mW, PW - OW, this.catnipId)
```

#### 161. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L2184` → after: `L2184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R2184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L2184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L2184) · [Before (L2184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L2184)

```diff
-                     0 <= YB && YB < this.pP && BB.set(DB - OB, YB, oB - GB, this.autumnFernId)
+                     0 <= mW && mW < this.jZ && WW.set(EW - iW, mW, PW - OW, this.autumnFernId)
```

#### 162. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L2190` → after: `L2190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R2190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L2190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L2190) · [Before (L2190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L2190)

```diff
-                   MB = (0, YB.B)(JB, DB, oB);
+                   tW = (0, mW.E)(wW, EW, PW);
```

#### 163. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L2193` → after: `L2193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R2193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L2193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L2193) · [Before (L2193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L2193)

```diff
-                   YB.reseed(`${JB[0]}${JB[1]}${this.seed}flowerpatch`);
+                   mW.reseed(`${wW[0]}${wW[1]}${this.seed}flowerpatch`);
```

#### 164. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L2208` → after: `L2208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R2208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L2208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L2208) · [Before (L2208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L2208)

```diff
-               YB.reseed(`${DB}${oB}${this.seed}cactus`);
+               mW.reseed(`${EW}${PW}${this.seed}cactus`);
```

#### 165. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L2212` → after: `L2212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R2212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L2212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L2212) · [Before (L2212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L2212)

```diff
-                   MB = Math.min(jB + JB + 1, QB + this.pP),
+                   tW = Math.min(LW + wW + 1, NW + this.jZ),
```

#### 166. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L2219-L2222` → after: `L2219-L2222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R2219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L2219-L2222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L2219-L2222) · [Before (L2219-L2222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L2219-L2222)

```diff
-         var yB = GB(40717),
-           JB = GB(40728),
-           MB = GB(39845),
-           PB = GB(40731);
+         var cW = OW(41238),
+           wW = OW(41244),
+           tW = OW(40358),
+           ZW = OW(41248);
```

#### 167. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L2228` → after: `L2228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R2228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L2228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L2228) · [Before (L2228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L2228)

```diff
-             if (!(0, DB.Q)(BB)) throw new Error(`Duplicate chunk at ${QB.chunkX}, ${QB.chunkY}, ${QB.chunkZ}`);
+             if (!(0, EW.K)(WW)) throw new Error(`Duplicate chunk at ${NW.chunkX}, ${NW.chunkY}, ${NW.chunkZ}`);
```

#### 168. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L2231` → after: `L2231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R2231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L2231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L2231) · [Before (L2231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L2231)

```diff
-           return new JB.e(BB, {
+           return new wW.c(WW, {
```

#### 169. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L2246` → after: `L2246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R2246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L2246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L2246) · [Before (L2246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L2246)

```diff
-             rle: (0, PB.e)("8BsAAtMBHgAB0wG/BwAB0wEeAAXTARsABdMBoAYAAeAPHwAB4A8fAAHgDx8AAeAPGwAB0wEDAAHgDxsABtMBGQAH0wEZAAbTAdsCAAPTAR0ABNMBGwAF0wGcBAAH0wEYAArTARcAAdMBAwAE0wH4AQAB4A8fAAHgDx8AAeAPAtMBHAAF0wEaAAjTARkAB9MBHQAC0wE6AAEYoQMABNMBAgAB0wEYAAnTARYACtMBFwAC0wEEAALTAbYBAAHg … [truncated]
+             rle: (0, ZW.c)("8BsAAtMBHgAB0wG/BwAB0wEeAAXTARsABdMBoAYAAeAPHwAB4A8fAAHgDx8AAeAPGwAB0wEDAAHgDxsABtMBGQAH0wEZAAbTAdsCAAPTAR0ABNMBGwAF0wGcBAAH0wEYAArTARcAAdMBAwAE0wH4AQAB4A8fAAHgDx8AAeAPAtMBHAAF0wEaAAjTARkAB9MBHQAC0wE6AAEYoQMABNMBAgAB0wEYAAnTARYACtMBFwAC0wEEAALTAbYBAAHg … [truncated]
```

#### 170. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L2251` → after: `L2251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R2251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L2251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L2251) · [Before (L2251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L2251)

```diff
-             rle: (0, PB.e)("gIACAA==")
+             rle: (0, ZW.c)("gIACAA==")
```

#### 171. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L2261` → after: `L2261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R2261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L2261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L2261) · [Before (L2261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L2261)

```diff
-             rle: (0, PB.e)("lAQAAdMBHAAB0wEBAAPTARoABtMB2QIAA9MBHQAG0wGTAwAB0wEeAALTAR4AAtMBKAAB4A8bAAHTAQMAAeAPBQAB0wEVAAXTAQQAAtMBFQAC0wEBAAbTARoABtMB2QIABNMBGwAI0wEaAALTAQIAAdMB0QIAAtMBHQAG0wEaAAbTARsABNMBYwAE0wEFAALTARUACtMBFgAK0wEWAAnTAbcCAArTARYACtMBFwAH0wHQAgAB0wEDAAHTARoA … [truncated]
+             rle: (0, ZW.c)("lAQAAdMBHAAB0wEBAAPTARoABtMB2QIAA9MBHQAG0wGTAwAB0wEeAALTAR4AAtMBKAAB4A8bAAHTAQMAAeAPBQAB0wEVAAXTAQQAAtMBFQAC0wEBAAbTARoABtMB2QIABNMBGwAI0wEaAALTAQIAAdMB0QIAAtMBHQAG0wEaAAbTARsABNMBYwAE0wEFAALTARUACtMBFgAK0wEWAAnTAbcCAArTARYACtMBFwAH0wHQAgAB0wEDAAHTARoA … [truncated]
```

#### 172. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L2266` → after: `L2266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R2266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L2266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L2266) · [Before (L2266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L2266)

```diff
-             rle: (0, PB.e)("gIACAA==")
+             rle: (0, ZW.c)("gIACAA==")
```

#### 173. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L2276` → after: `L2276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R2276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L2276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L2276) · [Before (L2276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L2276)

```diff
-             rle: (0, PB.e)("7wMAAdIBGAAB0gEBAAHSAQQAAtIBFQAB0gECAAHSAQMAAdIBAQAB0gEBAAHSARoAAdIBuwYAAdIBHgAC0gEdAAHSAQEAAtIBHQAC0gEFAAHSAQEAAtIBGwAB0gEBAATSARQAAdIBHgAB0gECAAHSAQIAAeMPAwAC0gEVAAHSAQYAAtIBHAAB0gEBAAHSAQIAAdIB1wUAAtIBGwAC0gEhAALSAR0AAtIBBAAC0gEB4w8EAAHSAQ8ABdIBAwAB … [truncated]
+             rle: (0, ZW.c)("7wMAAdIBGAAB0gEBAAHSAQQAAtIBFQAB0gECAAHSAQMAAdIBAQAB0gEBAAHSARoAAdIBuwYAAdIBHgAC0gEdAAHSAQEAAtIBHQAC0gEFAAHSAQEAAtIBGwAB0gEBAATSARQAAdIBHgAB0gECAAHSAQIAAeMPAwAC0gEVAAHSAQYAAtIBHAAB0gEBAAHSAQIAAdIB1wUAAtIBGwAC0gEhAALSAR0AAtIBBAAC0gEB4w8EAAHSAQ8ABdIBAwAB … [truncated]
```

#### 174. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L2286` → after: `L2286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R2286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L2286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L2286) · [Before (L2286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L2286)

```diff
-             rle: (0, PB.e)("iB4AAdIBAgAB0gEdAAHSAQEAAdIBHAAB0gGeBwAB0gEeAATSAQIAAdIBGQAB4w8BAALSAQIAAdIBGQAG0gEeAAHSAeoFAAHSAQIAAeMPAQAC0gEaAAHSAQIAAdIBAQAB0gEZAAHSARkAAdIBBAAB4w8B0gEZAAHSAQQAAdIBEQAB0gEDAAHSARwABdIBGQAB0gEBAAXSARoACNIBGQAB0gEBAAHSAQEAAtIBHAAB0gEBAAHSAY0FAALSAR0A … [truncated]
+             rle: (0, ZW.c)("iB4AAdIBAgAB0gEdAAHSAQEAAdIBHAAB0gGeBwAB0gEeAATSAQIAAdIBGQAB4w8BAALSAQIAAdIBGQAG0gEeAAHSAeoFAAHSAQIAAeMPAQAC0gEaAAHSAQIAAdIBAQAB0gEZAAHSARkAAdIBBAAB4w8B0gEZAAHSAQQAAdIBEQAB0gEDAAHSARwABdIBGQAB0gEBAAXSARoACNIBGQAB0gEBAAHSAQEAAtIBHAAB0gEBAAHSAY0FAALSAR0A … [truncated]
```

#### 175. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L2291` → after: `L2291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R2291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L2291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L2291) · [Before (L2291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L2291)

```diff
-             rle: (0, PB.e)("gIACAA==")
+             rle: (0, ZW.c)("gIACAA==")
```

#### 176. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L2301` → after: `L2301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R2301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L2301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L2301) · [Before (L2301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L2301)

```diff
-             rle: (0, PB.e)("xQoAAeYP/gcAA/ADnQgAA/AD2wcAAfADBQAB8AMaAAHwAwEAAfADAQAB8AOdBQAB9wMfAAH2Ax8AAfYDHwAB9gMfAAH2Ax8AAfYDHwAB9gMfAAH2Ax8AAfYDHwAB9gMbAAHmDwHwAwIAAfYDAgAB8AMB5g8ZAAXwAx0AAfADvAcAAfADBQAB8AMaAAHwAwEAAfADAQAB8AP8BwAD8APdBwAD8AP+BwAB5g+6tQEA")
+             rle: (0, ZW.c)("xQoAAeYP/gcAA/ADnQgAA/AD2wcAAfADBQAB8AMaAAHwAwEAAfADAQAB8AOdBQAB9wMfAAH2Ax8AAfYDHwAB9gMfAAH2Ax8AAfYDHwAB9gMfAAH2Ax8AAfYDHwAB9gMbAAHmDwHwAwIAAfYDAgAB8AMB5g8ZAAXwAx0AAfADvAcAAfADBQAB8AMaAAHwAwEAAfADAQAB8AP8BwAD8APdBwAD8AP+BwAB5g+6tQEA")
```

#### 177. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L2311` → after: `L2311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R2311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L2311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L2311) · [Before (L2311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L2311)

```diff
-             rle: (0, PB.e)("hgsAAeYP/gcAA/ADnQgAA/AD/QcAA/AD2gcAAfADBwAB8AMYAALwAwEAAfADAQAC8APcBAAB9wMfAAH2Ax8AAfYDHwAB9gMfAAH2Ax8AAfYDHwAB9gMfAAH2Ax8AAfYDHwAB9gMfAAH2Ax8AAfYDGgAB5g8B8AMDAAH2AwMAAfADAeYPFwAH8AMcAAHwA7sHAAHwAwcAAfADGAAC8AMBAAHwAwEAAvAD+wcAA/AD/QcAA/AD3QcAA/AD/gcA … [truncated]
+             rle: (0, ZW.c)("hgsAAeYP/gcAA/ADnQgAA/AD/QcAA/AD2gcAAfADBwAB8AMYAALwAwEAAfADAQAC8APcBAAB9wMfAAH2Ax8AAfYDHwAB9gMfAAH2Ax8AAfYDHwAB9gMfAAH2Ax8AAfYDHwAB9gMfAAH2Ax8AAfYDGgAB5g8B8AMDAAH2AwMAAfADAeYPFwAH8AMcAAHwA7sHAAHwAwcAAfADGAAC8AMBAAHwAwEAAvAD+wcAA/AD/QcAA/AD3QcAA/AD/gcA … [truncated]
```

#### 178. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L2321` → after: `L2321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R2321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L2321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L2321) · [Before (L2321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L2321)

```diff
-             rle: (0, PB.e)("jAIABNABHQAC0AEB5A8B0AHbBwAB5A8F0AEBqA0ZAAHQAQHkDwPQAQHkDwHQARsAAtABnwcAAtABGgABqA0I0AEXAAXQAQEAA9ABEgAC0AEFAALQAQYAAdABAeQPAdABtQEAA9ABHgAB0AG9BQAC0AEB5A8E0AEXAATQAQLkDwHQAQHkDwPQARIAAtABAeQPBNABAwAF0AEPAAXQAQoAAeQPAtABAeQPAdABDQAC0AEOAALQAZQBAAHQAQHk … [truncated]
+             rle: (0, ZW.c)("jAIABNABHQAC0AEB5A8B0AHbBwAB5A8F0AEBqA0ZAAHQAQHkDwPQAQHkDwHQARsAAtABnwcAAtABGgABqA0I0AEXAAXQAQEAA9ABEgAC0AEFAALQAQYAAdABAeQPAdABtQEAA9ABHgAB0AG9BQAC0AEB5A8E0AEXAATQAQLkDwHQAQHkDwPQARIAAtABAeQPBNABAwAF0AEPAAXQAQoAAeQPAtABAeQPAdABDQAC0AEOAALQAZQBAAHQAQHk … [truncated]
```

#### 179. `bundles/preprod.bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L2326` → after: `L2326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1R2326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bf06d508eed67629849d636ebd80e63869c476599b33f8f337f27da0d16b71e1) · [After (L2326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L2326) · [Before (L2326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/procGenWorker.js#L2326)

```diff
-             rle: (0, PB.e)("zUgAA9AB/AcAAdABAagNBNABGwAD0AGdBwAB0AEgAALQARsAAeQPBtABGgAD0AEBCgHQAR0AAtABHgAC0AEfAAHkD7wGAALQAQIKHQAB0AECCgHQARsAAtABAgoC0AEBqA0ZAAHQAQMKAtABGwAC0AEBCgHQAR0AAdABAQoB0AEdAAPQAR4AAeQPnQYAAdABAgoB0AEbAAHQAQHkDwIKAtABGQAD0AECCgPQARkAAtABAwoB0AEcAAPQAR4A … [truncated]
+             rle: (0, ZW.c)("zUgAA9AB/AcAAdABAagNBNABGwAD0AGdBwAB0AEgAALQARsAAeQPBtABGgAD0AEBCgHQAR0AAtABHgAC0AEfAAHkD7wGAALQAQIKHQAB0AECCgHQARsAAtABAgoC0AEBqA0ZAAHQAQMKAtABGwAC0AEBCgHQAR0AAdABAQoB0AEdAAPQAR4AAeQPnQYAAdABAgoB0AEbAAHQAQHkDwIKAtABGQAD0AECCgPQARkAAtABAwoB0AEcAAPQAR4A … [truncated]
```
