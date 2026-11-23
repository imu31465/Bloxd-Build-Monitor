# Changed — Bundle Modifications Report (Part 033 / 104)

- **Updated at**: `2026-11-24T00:51 JST`
- **Part**: `33 / 104` (**288** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 032](part-032.md) · [Part 034 →](part-034.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/250.js` (3lwmg.ecbaa066 → w4ddu.56408518 · continued)

- **File**: `bundles/bloxd.io/chunks/js/250.js` (31 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977)

#### 7. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L311-L347` → after: `L174-L259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L174-L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/250.js#L174-L259) · [Before (L311-L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/250.js#L311-L347)

```diff
-         }
-       }
-     }
-     class Sk extends Dk {
-       process(kk, ek, ik) {
-         for (let Dk = 0; Dk < this.children.length; Dk++) {
-           const fk = this.children[Dk];
-           if (fk.isValid(kk)) return fk.process(kk, ek, ik)
-         }
-         return ""
-       }
-     }
-     class bk extends Dk {
-       isValid(kk) {
-         return this.testExpression.isTrue(kk)
-       }
- ... (21 more removed lines; see GitHub link above)
+         }), [xz, zC, Kz, uz, mz, ZC, HC]),
+         {
+           keyHandlers: Tz
+         } = (0, xC.g)({
+           isEnabled: xz,
+           claimedKeyCodes: dC,
+           AN: CC => {
+             hz((zC => function(CC, zC) {
+               const ZC = [Math.sin(CC.heading), 0, Math.cos(CC.heading)],
+                 QC = nz(nz(fz(ZC, zC.forward), fz(zz(CC.heading), zC.right)), [0, zC.up, 0]);
+               return {
+                 ...CC,
+                 position: nz(CC.position, QC)
+               }
+             }(null !== zC && void 0 !== zC ? zC : rz.current.fittedView, CC)))
+           },
+ ... (70 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L349` → after: `L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/250.js#L261) · [Before (L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/250.js#L349)

```diff
-             Mk = Mk.trim(), "" !== Mk && (ik.push(Mk), Mk = "")
+             Gz.current = !1, Sz(document.pointerLockElement === CC)
```

#### 9. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L351-L352` → after: `L263-L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L263-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/250.js#L263-L264) · [Before (L351-L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/250.js#L351-L352)

```diff
-           Sk = kk => {
-             Dk < rk._Stack.length - 1 && (rk._Stack[++Dk] = kk)
+           ZC = () => {
+             Gz.current && (Gz.current = !1, Pz(!1))
```

#### 10. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L354-L572` → after: `L266-L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L266-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/250.js#L266-L275) · [Before (L354-L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/250.js#L354-L572)

```diff
-           bk = () => rk._Stack[Dk],
-           Pk = () => -1 === Dk ? "!!INVALID EXPRESSION!!" : rk._Stack[Dk--];
-         let mk = 0,
-           Mk = "";
-         for (; mk < kk.length;) {
-           const ek = kk.charAt(mk),
-             Kk = mk < kk.length - 1 ? kk.substring(mk, 2 + mk) : "";
-           if ("(" === ek) Mk = "", Sk(ek);
-           else if (")" === ek) {
-             for (fk(); - 1 !== Dk && "(" !== bk();) ik.push(Pk());
-             Pk()
-           } else if (rk._OperatorPriority[Kk] > 1) {
-             for (fk(); - 1 !== Dk && rk._OperatorPriority[bk()] >= rk._OperatorPriority[Kk];) ik.push(Pk());
-             Sk(Kk), mk++
-           } else Mk += ek;
-           mk++
- ... (203 more removed lines; see GitHub link above)
+           QC = zC => {
+             const ZC = !rz.current.canLock && document.activeElement === CC && 0 !== (1 & zC.buttons);
+             if (document.pointerLockElement !== CC && !ZC) return;
+             const QC = rz.current.mouseSensitivity * eC;
+             hz((CC => function(CC, zC, ZC) {
+               const QC = 2 * Math.PI;
+               return {
+                 ...CC,
+                 heading: ((CC.heading + zC) % QC + QC) % QC,
+                 pitch: Math.max(-cC, Math.min(cC, CC.pitch + ZC))
```

#### 11. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L574-L575` → after: `L277-L300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L277-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/250.js#L277-L300) · [Before (L574-L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/250.js#L574-L575)

```diff
-             }
-             continue
+             }(null !== CC && void 0 !== CC ? CC : rz.current.fittedView, zC.movementX * QC, zC.movementY * QC)))
+           };
+         return document.addEventListener("pointerlockchange", zC), document.addEventListener("pointerlockerror", ZC), document.addEventListener("pointermove", QC), () => {
+           document.removeEventListener("pointerlockchange", zC), document.removeEventListener("pointerlockerror", ZC), document.removeEventListener("pointermove", QC), document.pointerLockElement === CC && (0, JC.e)()
+         }
+       }), []), (0, QC.useEffect)((() => {
+         const CC = Fz.current;
+         null !== CC && 0 !== Wz.width && 0 !== Wz.height && (CC.engine.resize(), CC.needsRender = !0)
+       }), [Wz.width, Wz.height]), (0, QC.useEffect)((() => {
+         const CC = Fz.current;
+         null !== CC && (CC.targetFieldOfView = Ez * (Jz ? vC : 1))
+       }), [Ez, Jz]), (0, QC.useEffect)((() => {
+         const CC = Fz.current;
+         null !== CC && function(CC, zC, ZC, QC) {
+           const wC = [],
+             bC = [],
+ ... (8 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L577-L622` → after: `L302-L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L302-L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/250.js#L302-L326) · [Before (L577-L622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/250.js#L577-L622)

```diff
-         }
-         const bk = new Dk;
-         if (bk.line = fk, ek.children.push(bk), "#" === fk[0] && "d" === fk[1]) {
-           const kk = fk.replace(";", "").split(" ");
-           bk.additionalDefineKey = kk[1], 3 === kk.length && (bk.additionalDefineValue = kk[2])
-         }
-       }
-       return !1
-     }
- 
-     function uk(kk, ek, ik, Sk) {
-       const bk = new Dk,
-         rk = new fk;
-       return rk.lineIndex = -1, rk.lines = kk.split("\n"), Fk(rk, bk, Sk), bk.process(ek, ik, Sk)
-     }
- 
- ... (30 more removed lines; see GitHub link above)
+           OC(CC.cells, Float32Array.from(wC), Float32Array.from(bC), bC.length / 4), CC.translucent = {
+             VS: Float32Array.from(nC),
+             colours: Float32Array.from(fC),
+             count: fC.length / 4
+           }, CC.translucentSortedFrom = null, kC(CC), CC.needsRender = !0
+         }(CC, Hz, ZC, HC)
+       }), [Hz, ZC, HC]), (0, QC.useEffect)((() => {
+         const CC = Fz.current;
+         null !== CC && function(CC, zC) {
+           CC.chunkGridOrigin = zC, CC.chunkGridCentre = null, BC(CC)
+         }(CC, uC.min)
+       }), [uC]), (0, QC.useEffect)((() => {
+         const CC = Fz.current;
+         null !== CC && function(CC, zC, ZC) {
+           const QC = [],
+             wC = [];
+ ... (9 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L625-L634` → after: `L329-L387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L329-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/250.js#L329-L387) · [Before (L625-L634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/250.js#L625-L634)

```diff
-           if (rk[4]) {
-             const kk = rk[5];
-             if (-1 !== kk.indexOf("..")) {
-               const Dk = kk.split(".."),
-                 fk = parseInt(Dk[0]);
-               let Sk = parseInt(Dk[1]),
-                 bk = ik.slice(0);
-               ik = "", isNaN(Sk) && (Sk = ek.indexParameters[Dk[1]]);
-               for (let kk = fk; kk < Sk; kk++) ek.supportsUniformBuffers || (bk = bk.replace(pk, ((kk, ek) => ek + "{X}"))), ik += bk.replace(yk, kk.toString()) + "\n"
-             } else ek.supportsUniformBuffers || (ik = ik.replace(pk, ((kk, ek) => ek + "{X}"))), ik = ik.replace(yk, kk)
+           OC(CC.schematicBlocks, Float32Array.from(QC), Float32Array.from(wC), wC.length / 4), CC.needsRender = !0
+         }(CC, sC, uC)
+       }), [sC, uC]), (0, QC.useEffect)((() => {
+         const CC = Fz.current;
+         null !== CC && null !== CC.chunkGrid && (CC.chunkGrid.isVisible = iz, CC.needsRender = !0)
+       }), [iz, uC]), (0, QC.useEffect)((() => {
+         const CC = Fz.current;
+         null !== CC && function(CC, zC, ZC) {
+           const {
+             camera: QC
+           } = CC;
+           QC.position.set(zC.position[0], zC.position[1], zC.position[2]), QC.rotation.set(zC.pitch, zC.heading, 0);
+           const wC = (EC + 1) * gC.f.Ig * Math.sqrt(3);
+           QC.maxZ = Math.max(wC, Math.hypot(...nz(zC.position, fz(wz({
+             min: [0, 0, 0],
+             max: ZC
+ ... (43 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L636-L640` → after: `L389-L425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L389-L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/250.js#L389-L425) · [Before (L636-L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/250.js#L636-L640)

```diff
-           const Dk = [];
-           for (const kk of fk) {
-             const ek = kk.split(rk[0]);
-             for (let kk = 0; kk < ek.length - 1; kk++) Dk.push(ek[kk]), Dk.push(ik);
-             Dk.push(ek[ek.length - 1])
+         }), Nz && (0, IC.jsx)("div", {
+           className: "StudioHeatmap3DUnavailable SmallTextLight",
+           children: LC("3D view isn't available in this browser.")
+         }), xz && (0, IC.jsx)("div", {
+           className: "StudioHeatmap3DCrosshair"
+         }), (0, IC.jsx)("div", {
+           className: "StudioHeatmap3DCoordinates SmallTextLight",
+           children: uz.position.map(((CC, zC) => (CC + Kz[zC]).toFixed(2))).join(" ")
+         }), iz && (0, IC.jsx)(UC, {
+           heading: uz.heading,
+           pitch: uz.pitch,
+           onViewFrom: CC => {
+             const zC = fz(CC, -1),
+               ZC = 0 === zC[1] ? {
+                 heading: Math.atan2(zC[0], zC[2]),
+                 pitch: 0
+ ... (21 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L642-L652` → after: `L427-L447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L427-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/250.js#L427-L447) · [Before (L642-L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/250.js#L642-L652)

```diff
-           fk = Dk, Sk = Sk || ik.indexOf("#include<") >= 0 || ik.indexOf("#include <") >= 0
-         }
-       }
-       Yk.length = 0;
-       const bk = fk.join("");
-       Sk ? Ik(bk.toString(), ek, ik) : ik(bk)
-     }
-     const zk = {
-       loadFile: (kk, ek, ik, Dk, fk, Sk) => {
-         throw (0, xk.k)("FileTools")
-       }
+         }), null !== sz && (0, IC.jsx)("div", {
+           className: "StudioHeatmapMapReadout SmallTextLight",
+           children: null === yC ? LC("studio:heatmapBlockReadout", {
+             x: sz.x,
+             y: sz.y,
+             z: sz.z,
+             count: (0, MC.Z)(sz.value)
+           }) : yC(sz.x, sz.y, sz.z, sz.value)
+         }), (0, IC.jsxs)("div", {
+           className: "StudioHeatmapMapControls",
+           children: [TC, (0, IC.jsx)(GC.O, {
+             active: null === ez,
+             onClick: () => {
+               hz(null)
+             },
+             children: (0, IC.jsx)(RC.c, {
+ ... (5 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L666-L667` → after: `L450-L556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L450-L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/250.js#L450-L556) · [Before (L666-L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/250.js#L666-L667)

```diff
-     function Sk(kk, ek) {
-       return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "") + (ek ? ek + "\n" : "") + kk
+     function UC(CC) {
+       let {
+         heading: zC,
+         pitch: ZC,
+         onViewFrom: wC,
+         onTurn: bC,
+         onFlip: nC
+       } = CC;
+       const {
+         t: fC
+       } = (0, SC.y)(), oC = (0, QC.useRef)(null), qC = Cz({
+         heading: zC,
+         pitch: ZC
+       }), FC = zz(zC), WC = qz(qC, FC), NC = aC + tC + 2, MC = TC.flatMap((CC => [1, -1].map((zC => {
+         const ZC = fz(CC.direction, zC);
+         return {
+ ... (91 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L670-L673` → after: `L559-L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L559-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/250.js#L559-L582) · [Before (L670-L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/250.js#L670-L673)

```diff
-     function bk(kk, ek, ik, Sk, bk, rk, Pk) {
-       const mk = Pk || fk.loadFile;
-       if (!mk) throw (0, Dk.k)("FileTools");
-       return mk(kk, ek, ik, Sk, bk, rk)
+     function BC(CC) {
+       var zC, ZC, QC;
+       const {
+         chunkGridOrigin: wC,
+         camera: bC
+       } = CC;
+       if (null === wC) return;
+       const nC = [bC.position.x, bC.position.y, bC.position.z],
+         fC = [0, 2].map((CC => Math.floor((nC[CC] + wC[CC]) / gC.f.Ig))),
+         oC = CC.chunkGridCentre;
+       if (null !== oC && oC.every(((CC, zC) => CC === fC[zC]))) return;
+       const WC = null === (zC = null === (ZC = CC.chunkGrid) || void 0 === ZC ? void 0 : ZC.isVisible) || void 0 === zC || zC;
+       null === (QC = CC.chunkGrid) || void 0 === QC || QC.dispose();
+       const [MC, SC] = [0, 2].map(((CC, zC) => {
+         const ZC = [];
+         for (let QC = fC[zC] - EC; QC <= fC[zC] + EC + 1; QC++) ZC.push(QC * gC.f.Ig - wC[CC]);
+ ... (8 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L677-L698` → after: `L586-L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L586-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/250.js#L586-L590) · [Before (L677-L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/250.js#L677-L698)

```diff
-       if (kk) return ek ? kk.IS_NDC_HALF_ZRANGE = "" : delete kk.IS_NDC_HALF_ZRANGE, ik ? kk.USE_REVERSE_DEPTHBUFFER = "" : delete kk.USE_REVERSE_DEPTHBUFFER, void(Dk ? kk.USE_EXACT_SRGB_CONVERSIONS = "" : delete kk.USE_EXACT_SRGB_CONVERSIONS);
-       {
-         let kk = "";
-         return ek && (kk += "#define IS_NDC_HALF_ZRANGE"), ik && (kk && (kk += "\n"), kk += "#define USE_REVERSE_DEPTHBUFFER"), Dk && (kk && (kk += "\n"), kk += "#define USE_EXACT_SRGB_CONVERSIONS"), kk
-       }
-     }
- 
-     function Pk(kk, ek) {
-       let ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
-         Dk = arguments.length > 3 ? arguments[3] : void 0;
-       switch (kk) {
-         case 3: {
-           const kk = new Int8Array(ek);
-           return Dk && kk.set(new Int8Array(Dk)), kk
-         }
-         case 0: {
- ... (6 more removed lines; see GitHub link above)
+       CC.E_("matrix", function(CC, zC) {
+         const ZC = new Float32Array(16 * zC);
+         for (let QC = 0; QC < zC; QC++) {
+           const zC = 16 * QC;
+           ZC[zC] = 1, ZC[zC + 5] = 1, ZC[zC + 10] = 1, ZC[zC + 12] = CC[3 * QC], ZC[zC + 13] = CC[3 * QC + 1], ZC[zC + 14] = CC[3 * QC + 2], ZC[zC + 15] = 1
```

#### 19. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L700-L727` → after: `L592-L593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L592-L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/250.js#L592-L593) · [Before (L700-L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/250.js#L700-L727)

```diff
-         case 5:
-         case 8:
-         case 9:
-         case 10:
-         case 2: {
-           const kk = "number" !== typeof ek ? new Uint16Array(ek) : new Uint16Array(ik ? ek / 2 : ek);
-           return Dk && kk.set(new Uint16Array(Dk)), kk
-         }
-         case 6: {
-           const kk = "number" !== typeof ek ? new Int32Array(ek) : new Int32Array(ik ? ek / 4 : ek);
-           return Dk && kk.set(new Int32Array(Dk)), kk
-         }
-         case 7:
-         case 11:
-         case 12:
-         case 13:
- ... (12 more removed lines; see GitHub link above)
+         return ZC
+       }(zC, QC), 16, !0), CC.E_("color", ZC, 4, !0), CC.isVisible = QC > 0
```

#### 20. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L740` → after: `L597-L616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L597-L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/250.js#L597-L616) · [Before (L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/250.js#L740)

```diff
-       if (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || !Dk[kk]) return Dk[kk] = !0, `${kk} needs to be imported before as it contains a side-effect required by your code.`
+       const {
+         camera: zC,
+         translucent: ZC
+       } = CC, QC = [zC.position.x, zC.position.y, zC.position.z], wC = CC.translucentSortedFrom;
+       if (null !== wC && Math.hypot(QC[0] - wC[0], QC[1] - wC[1], QC[2] - wC[2]) < HC) return;
+       CC.translucentSortedFrom = QC;
+       const bC = new Float64Array(ZC.count),
+         nC = new Uint32Array(ZC.count);
+       for (let qC = 0; qC < ZC.count; qC++) {
+         const CC = ZC.VS[3 * qC] - QC[0],
+           zC = ZC.VS[3 * qC + 1] - QC[1],
+           wC = ZC.VS[3 * qC + 2] - QC[2];
+         bC[qC] = CC * CC + zC * zC + wC * wC, nC[qC] = qC
+       }
+       nC.sort(((CC, zC) => bC[zC] - bC[CC]));
+       const fC = new Float32Array(3 * ZC.count),
+ ... (4 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L747-L754` → after: `L620-L624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L620-L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/250.js#L620-L624) · [Before (L747-L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/250.js#L747-L754)

```diff
-       let ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-       const Dk = function() {
-         if ((ik || bk) && 0 === rk) {
-           const ik = `${kk}.${ek}`;
-           Sk[ik] || (Sk[ik] = !0, console.warn(`[Babylon.js] ${ik}() requires a side-effect import. See: https://doc.babylonjs.com/setup/treeshaking`))
-         }
-       };
-       return Dk.__isSideEffectStub = !0, Dk
+       const ZC = (ZC, QC, wC) => new FC.Eg(0 === ZC ? CC[0] : zC[0], 0 === QC ? CC[1] : zC[1], 0 === wC ? CC[2] : zC[2]),
+         QC = [];
+       for (const wC of [0, 1])
+         for (const CC of [0, 1]) QC.push([ZC(0, wC, CC), ZC(1, wC, CC)], [ZC(wC, 0, CC), ZC(wC, 1, CC)], [ZC(wC, CC, 0), ZC(wC, CC, 1)]);
+       return QC
```

#### 22. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L758-L787` → after: `L628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/250.js#L628) · [Before (L758-L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/250.js#L758-L787)

```diff
-       return !!kk && !kk.__isSideEffectStub
-     }
- 
-     function Mk(kk, ek) {
-       return {
-         get() {},
-         set(kk) {
-           Object.defineProperty(this, ek, {
-             value: kk,
-             writable: !0,
-             configurable: !0,
-             enumerable: !0
-           })
-         },
-         configurable: !0,
-         enumerable: !0
- ... (14 more removed lines; see GitHub link above)
+       return [Math.sin(CC.heading) * Math.cos(CC.pitch), -Math.sin(CC.pitch), Math.cos(CC.heading) * Math.cos(CC.pitch)]
```

#### 23. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L791-L823` → after: `L632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/250.js#L632) · [Before (L791-L823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/250.js#L791-L823)

```diff
-       let ek = "",
-         ik = kk.firstChild;
-       for (; ik;) 3 === ik.nodeType && (ek += ik.textContent), ik = ik.nextSibling;
-       return ek
-     }
-     ik.d(ek, {
-       c: () => bk,
-       e: () => Sk,
-       f: () => fk,
-       i: () => Dk
-     })
-   },
-   39617: (kk, ek, ik) => {
-     ik.d(ek, {
-       c: () => Dk,
-       g: () => fk,
- ... (17 more removed lines; see GitHub link above)
+       return [Math.cos(CC), 0, -Math.sin(CC)]
```

#### 24. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L825-L860` → after: `L634-L657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L634-L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/250.js#L634-L657) · [Before (L825-L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/250.js#L825-L860)

```diff
-   },
-   39607: (kk, ek, ik) => {
-     ik.d(ek, {
-       d: () => qk,
-       e: () => yk,
-       f: () => dk,
-       h: () => Fk,
-       k: () => jk,
-       o: () => Ck,
-       q: () => Ak,
-       s: () => Ek,
-       t: () => sk,
-       w: () => Yk
-     });
-     var Dk = ik(39612),
-       fk = ik(39429),
- ... (20 more removed lines; see GitHub link above)
+ 
+     function Zz(CC, zC, ZC) {
+       let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
+         heading: uC,
+         pitch: rC
+       };
+       const wC = [CC.max[0] - CC.min[0], CC.max[1] - CC.min[1], CC.max[2] - CC.min[2]],
+         bC = Cz(QC),
+         nC = zz(QC.heading),
+         fC = qz(bC, nC),
+         oC = Math.tan(ZC / 2),
+         qC = oC * zC;
+       let FC = 1;
+       for (const WC of [-wC[0] / 2, wC[0] / 2])
+         for (const CC of [-wC[1] / 2, wC[1] / 2])
+           for (const zC of [-wC[2] / 2, wC[2] / 2]) {
+ ... (8 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L863-L865` → after: `L660-L669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L660-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/250.js#L660-L669) · [Before (L863-L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/250.js#L863-L865)

```diff
-     class pk extends rk.j {
-       constructor(kk, ek) {
-         super(kk, rk.g.ReadFileError), this.file = ek, this.name = "ReadFileError", rk.c._setPrototypeOf(this, pk.prototype)
+ 
+     function Qz(CC, zC, ZC) {
+       const QC = bz(CC),
+         wC = bz(ZC),
+         bC = nz(CC.position, fz(zC, -1)),
+         nC = [0, 1, 2].reduce(((CC, zC) => nz(CC, fz(wC[zC], oz(bC, QC[zC])))), [0, 0, 0]);
+       return {
+         position: nz(zC, nC),
+         heading: ZC.heading,
+         pitch: ZC.pitch
```

#### 26. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L1186` → after: `L674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/250.js#L674) · [Before (L1186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/250.js#L1186)

```diff
-       return (0, Pk.d)(kk.split(",")[1])
+       return fz(nz(CC.min, CC.max), .5)
```

#### 27. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L1237-L1238` → after: `L677-L680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L677-L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/250.js#L677-L680) · [Before (L1237-L1238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/250.js#L1237-L1238)

```diff
-     function Ek() {
-       vk || (vk = !0, Qk(qk, Ik, yk, Fk, Vk, jk, Ck, Ak, sk, Yk), Mk.b.loadFile = jk, Mk.b.loadImage = Ck, Kk.l.loadFile = jk)
+     function bz(CC) {
+       const zC = Cz(CC),
+         ZC = zz(CC.heading);
+       return [zC, ZC, qz(zC, ZC)]
```

#### 28. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L1249-L1283` → after: `L683-L684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L683-L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/250.js#L683-L684) · [Before (L1249-L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/250.js#L1249-L1283)

```diff
-     function fk() {
-       if (Dk) return Dk;
-       const kk = new ArrayBuffer(4),
-         ek = new Float32Array(kk),
-         ik = new Uint32Array(kk),
-         fk = new Uint32Array(512),
-         Sk = new Uint32Array(512);
-       for (let Dk = 0; Dk < 256; ++Dk) {
-         const kk = Dk - 127;
-         kk < -24 ? (fk[Dk] = 0, fk[256 | Dk] = 32768, Sk[Dk] = 24, Sk[256 | Dk] = 24) : kk < -14 ? (fk[Dk] = 1024 >> -kk - 14, fk[256 | Dk] = 1024 >> -kk - 14 | 32768, Sk[Dk] = -kk - 1, Sk[256 | Dk] = -kk - 1) : kk <= 15 ? (fk[Dk] = kk + 15 << 10, fk[256 | Dk] = kk + 15 << 10 | 3 … [truncated]
-       }
-       const bk = new Uint32Array(2048),
-         rk = new Uint32Array(64),
-         Pk = new Uint32Array(64);
-       for (let Dk = 1; Dk < 1024; ++Dk) {
-         let kk = Dk << 13,
- ... (19 more removed lines; see GitHub link above)
+     function nz(CC, zC) {
+       return [CC[0] + zC[0], CC[1] + zC[1], CC[2] + zC[2]]
```

#### 29. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L1287-L1292` → after: `L687-L688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L687-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/250.js#L687-L688) · [Before (L1287-L1292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/250.js#L1287-L1292)

```diff
-     function bk(kk) {
-       const ek = fk();
-       ek.floatView[0] = kk;
-       const ik = ek.uint32View[0],
-         Dk = ik >> 23 & 511;
-       return ek.baseTable[Dk] + ((8388607 & ik) >> ek.shiftTable[Dk])
+     function fz(CC, zC) {
+       return [CC[0] * zC, CC[1] * zC, CC[2] * zC]
```

#### 30. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L1295-L1338` → after: `L691-L692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L691-L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/250.js#L691-L692) · [Before (L1295-L1338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/250.js#L1295-L1338)

```diff
-     function rk(kk) {
-       const ek = fk();
-       return ek.uint32View[0] = ek.mantissaTable[ek.offsetTable[kk >> 10] + (1023 & kk)] + ek.exponentTable[kk >> 10], ek.floatView[0]
-     }
-   },
-   39620: (kk, ek, ik) => {
-     ik.d(ek, {
-       d: () => Sk,
-       h: () => fk,
-       i: () => Dk
-     });
-     const Dk = kk => {
-         const ek = ArrayBuffer.isView(kk) ? new Uint8Array(kk.buffer, kk.byteOffset, kk.byteLength) : new Uint8Array(kk);
-         return "function" === typeof ek.toBase64 ? ek.toBase64() : function(kk) {
-           const ek = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
-           let ik, Dk, fk, Sk, bk, rk, Pk, mk = "",
- ... (28 more removed lines; see GitHub link above)
+     function oz(CC, zC) {
+       return CC[0] * zC[0] + CC[1] * zC[1] + CC[2] * zC[2]
```

#### 31. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L1341-L1506` → after: `L695-L696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L695-L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/250.js#L695-L696) · [Before (L1341-L1506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/250.js#L1341-L1506)

```diff
-     function Sk(kk, ek, ik) {
-       try {
-         if (kk()) return ek(), !0
-       } catch (Dk) {
-         return ik?.(Dk), !0
-       }
-       return !1
-     }
-     const bk = function(kk, ek, ik) {
-       let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16,
-         fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3e4,
-         bk = arguments.length > 6 ? arguments[6] : void 0;
-       if ((!(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5]) && Sk(kk, ek, ik)) return null;
-       const rk = setInterval((() => {
-         Sk(kk, ek, ik) ? clearInterval(rk) : (fk -= Dk, fk < 0 && (clearInterval(rk), ik?.(new Error("Operation timed out after maximum retries. " + (bk || "")), !0)))
-       }), Dk);
- ... (150 more removed lines; see GitHub link above)
+     function qz(CC, zC) {
+       return [CC[1] * zC[2] - CC[2] * zC[1], CC[2] * zC[0] - CC[0] * zC[2], CC[0] * zC[1] - CC[1] * zC[0]]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/251.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/251.js` (107 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b)

#### 1. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L4` → after: `L4-L1074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L4-L1074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L4-L1074) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L4)

```diff
-   39666: (kk, ek, ik) => {
+   40042: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       d: () => pC,
+       h: () => RC
+     });
+     var QC = ZC(39811),
+       wC = ZC(39818),
+       bC = ZC(39925),
+       nC = ZC(36987),
+       fC = ZC(36963),
+       oC = ZC(40046),
+       qC = ZC(38507),
+       FC = ZC(37002),
+       WC = ZC(39694),
+       NC = ZC(37931),
+       MC = ZC(37590),
+ ... (1055 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L8-L9` → after: `L1078-L3733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR1078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L1078-L3733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L1078-L3733) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L8-L9)

```diff
-     var Dk = ik(38272),
-       fk = ik(36734);
+     var QC = ZC(39721);
+     let wC = !1;
+ 
+     function bC() {
+       wC || (wC = !0, QC.b.prototype.getInputElement = function() {
+         return this._renderingCanvas
+       }, QC.b.prototype.getRenderingCanvasClientRect = function() {
+         return this._renderingCanvas ? this._renderingCanvas.getBoundingClientRect() : null
+       }, QC.b.prototype.getInputElementClientRect = function() {
+         return this._renderingCanvas ? this.getInputElement().getBoundingClientRect() : null
+       }, QC.b.prototype.getAspectRatio = function(CC) {
+         let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         const ZC = CC.viewport;
+         return this.getRenderWidth(zC) * ZC.width / (this.getRenderHeight(zC) * ZC.height)
+       }, QC.b.prototype.getScreenAspectRatio = function() {
+         return this.getRenderWidth(!0) / this.getRenderHeight(!0)
+ ... (2640 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L11-L22` → after: `L3735-L4265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR3735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L3735-L4265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L3735-L4265) · [Before (L11-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L11-L22)

```diff
-       static Instantiate(kk) {
-         if (this.RegisteredExternalClasses && this.RegisteredExternalClasses[kk]) return this.RegisteredExternalClasses[kk];
-         const ek = (0, fk.d)(kk);
-         if (ek) return ek;
-         Dk.b.Warn(kk + " not found, you may have missed an import.");
-         const ik = kk.split(".");
-         let Sk = "undefined" !== typeof window ? window : "undefined" !== typeof globalThis ? globalThis : this;
-         for (let Dk = 0, fk = ik.length; Dk < fk; Dk++) Sk = Sk[ik[Dk]];
-         return "function" !== typeof Sk ? null : Sk
-       }
-     }
-     Sk.RegisteredExternalClasses = {}
+       get boundingBias() {
+         return this._boundingBias
+       }
+       set boundingBias(CC) {
+         this._boundingBias ? this._boundingBias.Av(CC) : this._boundingBias = CC.clone(), this._updateBoundingInfo(!0, null)
+       }
+       static CreateGeometryForMesh(CC) {
+         const zC = new PC(PC.RandomId(), CC.Km());
+         return zC.applyToMesh(CC), zC
+       }
+       get meshes() {
+         return this._meshes
+       }
+       constructor(CC, zC, ZC) {
+         let wC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
+           bC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
+ ... (515 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L24` → after: `L4267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR4267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L4267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L4267) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L24)

```diff
-   39470: (kk, ek, ik) => {
+   40292: (CC, zC, ZC) => {
```

#### 5. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L28` → after: `L4272-L4617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR4272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L4272-L4617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L4272-L4617) · [Before (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L28)

```diff
-     var Dk = ik(39429);
+     var QC = ZC(36963),
+       wC = ZC(38507),
+       bC = ZC(40265),
+       nC = ZC(40224),
+       fC = ZC(38501),
+       oC = ZC(40272),
+       qC = ZC(39959),
+       FC = ZC(37002);
+     class WC extends bC.b {
+       constructor(CC, zC) {
+         super(CC, zC.Km()), this._indexInSourceMeshInstanceArray = -1, this._distanceToCamera = 0, zC.P_(this), this._sourceMesh = zC, this._unIndexed = zC._unIndexed, this.position.Av(zC.position), this.rotation.Av(zC.rotation), this.sq.Av(zC.sq), zC.rotationQuaternion && (this. … [truncated]
+         for (const ZC of zC.getAnimationRanges()) null != ZC && this.createAnimationRange(ZC.name, ZC.from, ZC.to);
+         if (this.infiniteDistance = zC.infiniteDistance, this.setPivotMatrix(zC.getPivotMatrix()), zC.skeleton || zC.morphTargetManager || !zC.hasBoundingInfo) this.refreshBoundingInfo(!0, !0);
+         else {
+           const CC = zC.WE();
+           this.buildBoundingInfo(CC.minimum, CC.maximum)
+ ... (330 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L30-L31` → after: `L4619-L4733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR4619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L4619-L4733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L4619-L4733) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L30-L31)

```diff
-       static get Now() {
-         return (0, Dk.i)() && window.performance && window.performance.now ? window.performance.now() : Date.now()
+       constructor() {
+         this._areNormalsFrozen = !1, this._source = null, this.meshMap = null, this._preActivateId = -1, this._LODLevels = new Array, this._useLODScreenCoverage = !1, this._effectiveMaterial = null, this._forcedInstanceCount = 0, this._overrideRenderingFillMode = null
+       }
+     }
+     const BC = {
+       source: null,
+       parent: null,
+       doNotCloneChildren: !1,
+       clonePhysicsImpostor: !0,
+       cloneThinInstances: !1
+     };
+     class OC extends dC.b {
+       static _GetDefaultSideOrientation(CC) {
+         return CC || OC.FRONTSIDE
+       }
+       get useLODScreenCoverage() {
+ ... (99 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L33-L106` → after: `L4735-L4739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR4735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L4735-L4739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L4735-L4739) · [Before (L33-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L33-L106)

```diff
-     }
-   },
-   39501: (kk, ek, ik) => {
-     function Dk(kk) {
-       let ek = 1;
-       do {
-         ek *= 2
-       } while (ek < kk);
-       return ek === kk
-     }
- 
-     function fk(kk, ek, ik) {
-       return kk * (1 - ik) + ek * ik
-     }
- 
-     function Sk(kk) {
- ... (58 more removed lines; see GitHub link above)
+       get forceWorldMatrixInstancedBufferUpdate() {
+         return this._instanceDataStorage.forceMatrixUpdates
+       }
+       set forceWorldMatrixInstancedBufferUpdate(CC) {
+         this._instanceDataStorage.forceMatrixUpdates = CC
```

#### 8. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L108-L109` → after: `L4741-L4804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR4741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L4741-L4804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L4741-L4804) · [Before (L108-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L108-L109)

```diff
-       static set BaseUrl(kk) {
-         xk.e.BaseUrl = kk
+       _copySource(CC, zC) {
+         let ZC = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
+           QC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+         const wC = this.Km();
+         if (CC._geometry && CC._geometry.applyToMesh(this), AC.e.DeepCopy(CC, this, ["name", "material", "skeleton", "instances", "parent", "uniqueId", "source", "metadata", "morphTargetManager", "yQC", "worldMatrixInstancedBuffer", "previousWorldMatrixInstancedBuffer", "hasLODLe … [truncated]
+           const zC = CC._ranges;
+           for (const CC in zC) Object.prototype.hasOwnProperty.call(zC, CC) && zC[CC] && this.createAnimationRange(CC, zC[CC].from, zC[CC].to)
+         }
+         if (CC.metadata && CC.metadata.clone ? this.metadata = CC.metadata.clone() : this.metadata = CC.metadata, this._internalMetadata = CC._internalMetadata, this.meshBlendingTag = CC.meshBlendingTag, xC.e && xC.e.HasTags(CC) && xC.e.AddTagsTo(this, xC.e.GetTags(CC, !0)), this … [truncated]
+           const wC = CC.getDescendants(!0);
+           for (let CC = 0; CC < wC.length; CC++) {
+             const bC = wC[CC];
+             bC._isMesh ? (BC.parent = this, BC.doNotCloneChildren = zC, BC.clonePhysicsImpostor = ZC, BC.cloneThinInstances = QC, bC.clone(this.name + "." + bC.name, BC)) : bC.clone && bC.clone(this.name + "." + bC.name, this)
+           }
+         }
+         if (CC.morphTargetManager && (this.morphTargetManager = CC.morphTargetManager), (0, sC.b)(wC.getPhysicsEngine)) {
+ ... (48 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L111-L112` → after: `L4806-L4807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR4806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L4806-L4807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L4806-L4807) · [Before (L111-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L111-L112)

```diff
-       static get CleanUrl() {
-         return xk.e.CleanUrl
+       getClassName() {
+         return "Mesh"
```

#### 10. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L114-L115` → after: `L4809-L4810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR4809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L4809-L4810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L4809-L4810) · [Before (L114-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L114-L115)

```diff
-       static set CleanUrl(kk) {
-         xk.e.CleanUrl = kk
+       get _isMesh() {
+         return !0
```

#### 11. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L117-L118` → after: `L4812-L4822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR4812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L4812-L4822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L4812-L4822) · [Before (L117-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L117-L118)

```diff
-       static IsAbsoluteUrl(kk) {
-         return 0 === kk.indexOf("//") || -1 !== kk.indexOf("://") && (-1 !== kk.indexOf(".") && (-1 !== kk.indexOf("/") && (!(kk.indexOf(":") > kk.indexOf("/")) && (kk.indexOf("://") < kk.indexOf(".") || (0 === kk.indexOf("data:") || 0 === kk.indexOf("blob:"))))))
+       toString(CC) {
+         let zC = super.toString(CC);
+         if (zC += ", n vertices: " + this.getTotalVertices(), zC += ", parent: " + (this._waitingParentId ? this._waitingParentId : this.parent ? this.parent.name : "NONE"), this.animations)
+           for (let ZC = 0; ZC < this.animations.length; ZC++) zC += ", animation[0]: " + this.animations[ZC].toString(CC);
+         if (CC)
+           if (this._geometry) {
+             const CC = this.CQC(),
+               ZC = this.getVerticesData(hC.k.PositionKind);
+             ZC && CC && (zC += ", flat shading: " + (ZC.length / 3 === CC.length ? "YES" : "NO"))
+           } else zC += ", flat shading: UNKNOWN";
+         return zC
```

#### 12. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L120-L121` → after: `L4824-L4826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR4824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L4824-L4826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L4824-L4826) · [Before (L120-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L120-L121)

```diff
-       static set ScriptBaseUrl(kk) {
-         xk.e.ScriptBaseUrl = kk
+       _unBindEffect() {
+         super._unBindEffect();
+         for (const CC of this.instances) CC._unBindEffect()
```

#### 13. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L123-L124` → after: `L4828-L4829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR4828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L4828-L4829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L4828-L4829) · [Before (L123-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L123-L124)

```diff
-       static get ScriptBaseUrl() {
-         return xk.e.ScriptBaseUrl
+       get hasLODLevels() {
+         return this._internalMeshDataInfo._LODLevels.length > 0
```

#### 14. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L126-L127` → after: `L4831-L4832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR4831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L4831-L4832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L4831-L4832) · [Before (L126-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L126-L127)

```diff
-       static set CDNBaseUrl(kk) {
-         Dk.ScriptBaseUrl = kk, Dk.AssetBaseUrl = kk
+       getLODLevels() {
+         return this._internalMeshDataInfo._LODLevels
```

#### 15. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L129-L130` → after: `L4834-L4836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR4834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L4834-L4836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L4834-L4836) · [Before (L129-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L129-L130)

```diff
-       static set ScriptPreprocessUrl(kk) {
-         xk.e.ScriptPreprocessUrl = kk
+       _sortLODLevels() {
+         const CC = this._internalMeshDataInfo._useLODScreenCoverage ? -1 : 1;
+         this._internalMeshDataInfo._LODLevels.sort(((zC, ZC) => zC.distanceOrScreenCoverage < ZC.distanceOrScreenCoverage ? CC : zC.distanceOrScreenCoverage > ZC.distanceOrScreenCoverage ? -CC : 0))
```

#### 16. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L132-L133` → after: `L4838-L4841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR4838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L4838-L4841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L4838-L4841) · [Before (L132-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L132-L133)

```diff
-       static get ScriptPreprocessUrl() {
-         return xk.e.ScriptPreprocessUrl
+       addLODLevel(CC, zC) {
+         if (zC && zC._masterMesh) return uC.c.Warn("You cannot use a mesh as LOD level twice"), this;
+         const ZC = new aC(CC, zC);
+         return this._internalMeshDataInfo._LODLevels.push(ZC), zC && (zC._masterMesh = this), this._sortLODLevels(), this
```

#### 17. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L135-L136` → after: `L4843-L4849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR4843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L4843-L4849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L4843-L4849) · [Before (L135-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L135-L136)

```diff
-       static get DefaultRetryStrategy() {
-         return xk.e.DefaultRetryStrategy
+       getLODLevelAtDistance(CC) {
+         const zC = this._internalMeshDataInfo;
+         for (let ZC = 0; ZC < zC._LODLevels.length; ZC++) {
+           const QC = zC._LODLevels[ZC];
+           if (QC.distanceOrScreenCoverage === CC) return QC.mesh
+         }
+         return null
```

#### 18. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L138-L139` → after: `L4851-L4854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR4851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L4851-L4854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L4851-L4854) · [Before (L138-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L138-L139)

```diff
-       static set DefaultRetryStrategy(kk) {
-         xk.e.DefaultRetryStrategy = kk
+       removeLODLevel(CC) {
+         const zC = this._internalMeshDataInfo;
+         for (let ZC = 0; ZC < zC._LODLevels.length; ZC++) zC._LODLevels[ZC].mesh === CC && (zC._LODLevels.splice(ZC, 1), CC && (CC._masterMesh = null));
+         return this._sortLODLevels(), this
```

#### 19. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L141-L142` → after: `L4856-L4880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR4856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L4856-L4880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L4856-L4880) · [Before (L141-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L141-L142)

```diff
-       static get CorsBehavior() {
-         return xk.e.CorsBehavior
+       getLOD(CC, zC) {
+         const ZC = this._internalMeshDataInfo;
+         if (!ZC._LODLevels || 0 === ZC._LODLevels.length) return this;
+         const QC = zC || this.WE().IQC,
+           wC = CC.mode === IC.d.ORTHOGRAPHIC_CAMERA ? CC.minZ : QC.centerWorld.subtract(CC.globalPosition).length();
+         let bC = wC,
+           nC = 1;
+         if (ZC._useLODScreenCoverage) {
+           const zC = CC.screenArea;
+           let ZC = QC.radiusWorld * CC.minZ / wC;
+           ZC = ZC * ZC * Math.PI, bC = ZC / zC, nC = -1
+         }
+         if (nC * ZC._LODLevels[ZC._LODLevels.length - 1].distanceOrScreenCoverage > nC * bC) return this.onLODLevelSelection && this.onLODLevelSelection(bC, this, this), this;
+         for (let fC = 0; fC < ZC._LODLevels.length; fC++) {
+           const CC = ZC._LODLevels[fC];
+           if (nC * CC.distanceOrScreenCoverage < nC * bC) {
+ ... (9 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L144-L145` → after: `L4882-L4883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR4882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L4882-L4883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L4882-L4883) · [Before (L144-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L144-L145)

```diff
-       static set CorsBehavior(kk) {
-         xk.e.CorsBehavior = kk
+       get geometry() {
+         return this._geometry
```

#### 21. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L147-L148` → after: `L4885-L4886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR4885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L4885-L4886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L4885-L4886) · [Before (L147-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L147-L148)

```diff
-       static get UseFallbackTexture() {
-         return Kk.e.UseFallbackTexture
+       getTotalVertices() {
+         return null === this._geometry || void 0 === this._geometry ? 0 : this._geometry.getTotalVertices()
```

#### 22. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L150-L151` → after: `L4888-L4891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR4888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L4888-L4891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L4888-L4891) · [Before (L150-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L150-L151)

```diff
-       static set UseFallbackTexture(kk) {
-         Kk.e.UseFallbackTexture = kk
+       getVerticesData(CC, zC, ZC, QC) {
+         if (!this._geometry) return null;
+         let wC = QC ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[CC]?.getFloatData(this.instances.length + 1, ZC || zC && 1 !== this._geometry.meshes.length);
+         return wC || (wC = this._geometry.getVerticesData(CC, zC, ZC)), wC
```

#### 23. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L153-L154` → after: `L4893-L4894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR4893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L4893-L4894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L4893-L4894) · [Before (L153-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L153-L154)

```diff
-       static get RegisteredExternalClasses() {
-         return Uk.d.RegisteredExternalClasses
+       copyVerticesData(CC, zC) {
+         this._geometry && this._geometry.copyVerticesData(CC, zC)
```

#### 24. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L156-L157` → after: `L4896-L4897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR4896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L4896-L4897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L4896-L4897) · [Before (L156-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L156-L157)

```diff
-       static set RegisteredExternalClasses(kk) {
-         Uk.d.RegisteredExternalClasses = kk
+       getVertexBuffer(CC, zC) {
+         return this._geometry ? (zC ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[CC]) ?? this._geometry.getVertexBuffer(CC) : null
```

#### 25. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L159-L160` → after: `L4899-L4900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR4899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L4899-L4900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L4899-L4900) · [Before (L159-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L159-L160)

```diff
-       static get fallbackTexture() {
-         return Kk.e.FallbackTexture
+       isVerticesDataPresent(CC, zC) {
+         return this._geometry ? !zC && void 0 !== this._userInstancedBuffersStorage?.vertexBuffers[CC] || this._geometry.isVerticesDataPresent(CC) : !!this._delayInfo && -1 !== this._delayInfo.indexOf(CC)
```

#### 26. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L162-L163` → after: `L4902-L4908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR4902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L4902-L4908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L4902-L4908) · [Before (L162-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L162-L163)

```diff
-       static set fallbackTexture(kk) {
-         Kk.e.FallbackTexture = kk
+       isVertexBufferUpdatable(CC, zC) {
+         if (!this._geometry) return !!this._delayInfo && -1 !== this._delayInfo.indexOf(CC);
+         if (!zC) {
+           const zC = this._userInstancedBuffersStorage?.vertexBuffers[CC];
+           if (zC) return zC.isUpdatable()
+         }
+         return this._geometry.isVertexBufferUpdatable(CC)
```

#### 27. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L165-L167` → after: `L4910-L4920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR4910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L4910-L4920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L4910-L4920) · [Before (L165-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L165-L167)

```diff
-       static FetchToRef(kk, ek, ik, Dk, fk, Sk) {
-         const bk = 4 * ((Math.abs(kk) * ik % ik | 0) + (Math.abs(ek) * Dk % Dk | 0) * ik);
-         Sk.r = fk[bk] / 255, Sk.g = fk[bk + 1] / 255, Sk.b = fk[bk + 2] / 255, Sk.a = fk[bk + 3] / 255
+       getVerticesDataKinds(CC) {
+         if (!this._geometry) {
+           const CC = [];
+           if (this._delayInfo)
+             for (const zC of this._delayInfo) CC.push(zC);
+           return CC
+         }
+         const zC = this._geometry.getVerticesDataKinds();
+         if (!CC && this._userInstancedBuffersStorage)
+           for (const ZC in this._userInstancedBuffersStorage.vertexBuffers) - 1 === zC.indexOf(ZC) && zC.push(ZC);
+         return zC
```

#### 28. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L169-L170` → after: `L4922-L4923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR4922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L4922-L4923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L4922-L4923) · [Before (L169-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L169-L170)

```diff
-       static Mix(kk, ek, ik) {
-         return 0
+       getTotalIndices() {
+         return this._geometry ? this._geometry.getTotalIndices() : 0
```

#### 29. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L172-L173` → after: `L4925-L4926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR4925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L4925-L4926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L4925-L4926) · [Before (L172-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L172-L173)

```diff
-       static Instantiate(kk) {
-         return Uk.d.Instantiate(kk)
+       CQC(CC, zC) {
+         return this._geometry ? this._geometry.CQC(CC, zC) : []
```

#### 30. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L175-L176` → after: `L4928-L4929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR4928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L4928-L4929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L4928-L4929) · [Before (L175-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L175-L176)

```diff
-       static SetImmediate(kk) {
-         nk.e.SetImmediate(kk)
+       get isBlocked() {
+         return null !== this._masterMesh && void 0 !== this._masterMesh
```

#### 31. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L178` → after: `L4931-L4971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR4931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L4931-L4971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L4931-L4971) · [Before (L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L178)

```diff
-       static IsExponentOfTwo(kk) {
+       isReady() {
+         let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
+           zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         if (2 === this.delayLoadState) return !1;
+         if (!super.isReady(CC)) return !1;
+         if (!this.Zx || 0 === this.Zx.length) return !0;
+         if (!CC) return !0;
+         const ZC = this.mg(),
+           QC = this.Km(),
+           wC = zC || ZC.getCaps().instancedArrays && (this.instances.length > 0 || this.hasThinInstances);
+         this.computeWorldMatrix();
+         const bC = this.material || QC.defaultMaterial;
+         if (bC)
+           if (bC._storeEffectOnSubMeshes)
+             for (const fC of this.Zx) {
+               const CC = fC.cg();
+ ... (25 more added lines; see GitHub link above)
```

#### 32. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L181-L182` → after: `L4974-L4975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR4974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L4974-L4975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L4974-L4975) · [Before (L181-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L181-L182)

```diff
-       static FloatRound(kk) {
-         return Math.fround(kk)
+       get areNormalsFrozen() {
+         return this._internalMeshDataInfo._areNormalsFrozen
```

#### 33. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L184-L186` → after: `L4977-L4978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR4977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L4977-L4978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L4977-L4978) · [Before (L184-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L184-L186)

```diff
-       static GetFilename(kk) {
-         const ek = kk.lastIndexOf("/");
-         return ek < 0 ? kk : kk.substring(ek + 1)
+       ug() {
+         return this._internalMeshDataInfo._areNormalsFrozen = !0, this
```

#### 34. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L188-L191` → after: `L4980-L4995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR4980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L4980-L4995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L4980-L4995) · [Before (L188-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L188-L191)

```diff
-       static GetFolderPath(kk) {
-         let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         const ik = kk.lastIndexOf("/");
-         return ik < 0 ? ek ? kk : "" : kk.substring(0, ik + 1)
+       unfreezeNormals() {
+         return this._internalMeshDataInfo._areNormalsFrozen = !1, this
+       }
+       set overridenInstanceCount(CC) {
+         this._instanceDataStorage.overridenInstanceCount = CC
+       }
+       _getInstanceDataStorage() {
+         if (this._instanceDataStorage.useMonoDataStorageRenderPass) return this._instanceDataStorage.dataStorageRenderPass;
+         const CC = this._instanceDataStorage.engine.currentRenderPassId;
+         let zC = this._instanceDataStorage.renderPasses[CC];
+         return zC || (zC = new DC, this._instanceDataStorage.renderPasses[CC] = zC), zC
+       }
+       _preActivate() {
+         const CC = this._internalMeshDataInfo,
+           zC = this.Km().getRenderId();
+         return CC._preActivateId === zC || (CC._preActivateId = zC, this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass.visibleInstances = null : this._getInstanceDataStorage().visibleInstances = null), this
```

#### 35. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L193-L194` → after: `L4997-L4999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR4997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L4997-L4999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L4997-L4999) · [Before (L193-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L193-L194)

```diff
-       static ToDegrees(kk) {
-         return 180 * kk / Math.PI
+       _preActivateForIntermediateRendering(CC) {
+         const zC = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
+         return zC.visibleInstances && (zC.visibleInstances.intermediateDefaultRenderId = CC), this
```

#### 36. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L196-L197` → after: `L5001-L5007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5001-L5007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L5001-L5007) · [Before (L196-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L196-L197)

```diff
-       static ToRadians(kk) {
-         return kk * Math.PI / 180
+       _registerInstanceForRenderId(CC, zC) {
+         const ZC = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
+         return ZC.visibleInstances || (ZC.visibleInstances = {
+           defaultRenderId: zC,
+           selfDefaultRenderId: this._renderId,
+           intermediateDefaultRenderId: -1
+         }), ZC.visibleInstances[zC] || (void 0 === ZC.previousRenderId || this._instanceDataStorage.useMonoDataStorageRenderPass && !this._instanceDataStorage.isFrozen || delete ZC.visibleInstances[ZC.previousRenderId], ZC.previousRenderId = zC, ZC.visibleInstances[zC] = new Arra … [truncated]
```

#### 37. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L199-L203` → after: `L5009-L5010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5009-L5010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L5009-L5010) · [Before (L199-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L199-L203)

```diff
-       static SmoothAngleChange(kk, ek) {
-         let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .9;
-         const Dk = this.ToRadians(kk),
-           fk = this.ToRadians(ek);
-         return this.ToDegrees(Math.atan2((1 - ik) * Math.sin(fk) + ik * Math.sin(Dk), (1 - ik) * Math.cos(fk) + ik * Math.cos(Dk)))
+       _afterComputeWorldMatrix() {
+         super._afterComputeWorldMatrix(), this.hasThinInstances && (this.Xg || this.thinInstanceRefreshBoundingInfo(!1))
```

#### 38. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L205-L206` → after: `L5012-L5013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5012-L5013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L5012-L5013) · [Before (L205-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L205-L206)

```diff
-       static MakeArray(kk, ek) {
-         return !0 === ek || void 0 !== kk && null != kk ? Array.isArray(kk) ? kk : [kk] : null
+       _postActivate() {
+         this.edgesShareWithInstances && this.edgesRenderer && this.edgesRenderer.isEnabled && this._renderingGroup && (this._renderingGroup._edgesRenderers.pushNoDuplicate(this.edgesRenderer), this.edgesRenderer.customInstances.push(this.getWorldMatrix()))
```

#### 39. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L208-L209` → after: `L5015-L5048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5015-L5048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L5015-L5048) · [Before (L208-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L208-L209)

```diff
-       static GetPointerPrefix(kk) {
-         return (0, Sk.i)() && !window.PointerEvent ? "mouse" : "pointer"
+       refreshBoundingInfo() {
+         let CC, zC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
+           ZC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         if (this.hasBoundingInfo && this.WE().isLocked) return this;
+         CC = "object" === typeof zC ? zC : {
+           applySkeleton: zC,
+           applyMorph: ZC
+         };
+         const QC = this.geometry ? this.geometry.boundingBias : null;
+         return this._refreshBoundingInfo(this._getData(CC, null, hC.k.PositionKind), QC), this
+       }
+       _createGlobalSubMesh(CC) {
+         const zC = this.getTotalVertices();
+         if (!zC || !this.CQC()) return null;
+         if (this.Zx && this.Zx.length > 0) {
+           const ZC = this.CQC();
+ ... (18 more added lines; see GitHub link above)
```

#### 40. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L211-L212` → after: `L5050-L5058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5050-L5058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L5050-L5058) · [Before (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L211-L212)

```diff
-       static SetCorsBehavior(kk, ek) {
-         (0, xk.w)(kk, ek)
+       subdivide(CC) {
+         if (CC < 1) return;
+         const zC = this.getTotalIndices();
+         let ZC = zC / CC | 0,
+           QC = 0;
+         for (; ZC % 3 !== 0;) ZC++;
+         this.releaseSubMeshes();
+         for (let wC = 0; wC < CC && !(QC >= zC); wC++) mC.d.CreateFromIndices(0, QC, QC + ZC >= zC ? zC - QC : ZC, this, void 0, !1), QC += ZC;
+         this.refreshBoundingInfo(), this.synchronizeInstances()
```

#### 41. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L214-L215` → after: `L5060-L5070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5060-L5070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L5060-L5070) · [Before (L214-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L214-L215)

```diff
-       static SetReferrerPolicyBehavior(kk, ek) {
-         ek.referrerPolicy = kk
+       setVerticesData(CC, zC) {
+         let ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
+           QC = arguments.length > 3 ? arguments[3] : void 0;
+         if (this._geometry) this._geometry.setVerticesData(CC, zC, ZC, QC);
+         else {
+           const QC = new KC.e;
+           QC.set(zC, CC);
+           const wC = this.Km();
+           new YC.c(YC.c.RandomId(), wC, QC, ZC, this)
+         }
+         return this
```

#### 42. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L217-L218` → after: `L5072-L5073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5072-L5073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L5072-L5073) · [Before (L217-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L217-L218)

```diff
-       static get PreprocessUrl() {
-         return xk.e.PreprocessUrl
+       removeVerticesData(CC) {
+         this._geometry && this._geometry.removeVerticesData(CC)
```

#### 43. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L220-L221` → after: `L5075-L5078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5075-L5078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L5075-L5078) · [Before (L220-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L220-L221)

```diff
-       static set PreprocessUrl(kk) {
-         xk.e.PreprocessUrl = kk
+       markVerticesDataAsUpdatable(CC) {
+         let zC = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+         const ZC = this.getVertexBuffer(CC);
+         ZC && ZC.isUpdatable() !== zC && this.setVerticesData(CC, this.getVerticesData(CC), zC)
```

#### 44. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L223-L224` → after: `L5080-L5083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5080-L5083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L5080-L5083) · [Before (L223-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L223-L224)

```diff
-       static LoadImage(kk, ek, ik, Dk, fk, Sk) {
-         return (0, xk.o)(kk, ek, ik, Dk, fk, Sk)
+       setVerticesBuffer(CC) {
+         let zC = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
+           ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+         return this._geometry || (this._geometry = YC.c.CreateGeometryForMesh(this)), this._geometry.setVerticesBuffer(CC, ZC, zC), this
```

#### 45. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L226-L227` → after: `L5085-L5086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5085-L5086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L5085-L5086) · [Before (L226-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L226-L227)

```diff
-       static LoadFile(kk, ek, ik, Dk, fk, Sk) {
-         return (0, xk.k)(kk, ek, ik, Dk, fk, Sk)
+       updateVerticesData(CC, zC, ZC, QC) {
+         return this._geometry ? (QC ? (this.makeGeometryUnique(), this.updateVerticesData(CC, zC, ZC, !1)) : this._geometry.updateVerticesData(CC, zC, ZC), this) : this
```

#### 46. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L229` → after: `L5088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L5088) · [Before (L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L229)

```diff
-       static async LoadFileAsync(kk) {
+       updateMeshPositions(CC) {
```

#### 47. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L231-L237` → after: `L5090-L5105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5090-L5105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L5090-L5105) · [Before (L231-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L231-L237)

```diff
-         return await new Promise(((ik, Dk) => {
-           (0, xk.k)(kk, (kk => {
-             ik(kk)
-           }), void 0, void 0, ek, ((kk, ek) => {
-             Dk(ek)
-           }))
-         }))
+         const ZC = this.getVerticesData(hC.k.PositionKind);
+         if (!ZC) return this;
+         if (CC(ZC), this.updateVerticesData(hC.k.PositionKind, ZC, !1, !1), zC) {
+           const CC = this.CQC(),
+             zC = this.getVerticesData(hC.k.NormalKind);
+           if (!zC) return this;
+           KC.e.ComputeNormals(ZC, CC, zC), this.updateVerticesData(hC.k.NormalKind, zC, !1, !1)
+         }
+         return this
+       }
+       makeGeometryUnique() {
+         if (!this._geometry) return this;
+         if (1 === this._geometry.meshes.length) return this;
+         const CC = this._geometry,
+           zC = this._geometry.copy(YC.c.RandomId());
+         return CC.releaseForMesh(this, !0), zC.applyToMesh(this), this
```

#### 48. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L239-L243` → after: `L5107-L5121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5107-L5121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L5107-L5121) · [Before (L239-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L239-L243)

```diff
-       static GetAssetUrl(kk) {
-         if (!kk) return "";
-         if (Dk.AssetBaseUrl && kk.startsWith(Dk._DefaultAssetsUrl)) {
-           const ek = Dk.AssetBaseUrl.endsWith("/") ? Dk.AssetBaseUrl.slice(0, -1) : Dk.AssetBaseUrl;
-           return kk.replace(Dk._DefaultAssetsUrl, ek)
+       setIndexBuffer(CC, zC, ZC) {
+         let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
+           wC = this._geometry;
+         wC || (wC = new YC.c(YC.c.RandomId(), this.Km(), void 0, void 0, this)), wC.setIndexBuffer(CC, zC, ZC, QC)
+       }
+       setIndices(CC) {
+         let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
+           ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
+           QC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+         if (this._geometry) this._geometry.setIndices(CC, zC, ZC, QC);
+         else {
+           const QC = new KC.e;
+           QC.indices = CC;
+           const wC = this.Km();
+           new YC.c(YC.c.RandomId(), wC, QC, ZC, this, zC)
```

#### 49. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L245` → after: `L5123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L5123) · [Before (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L245)

```diff
-         return kk
+         return this
```

#### 50. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L247-L279` → after: `L5125-L5538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5125-L5538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L5125-L5538) · [Before (L247-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L247-L279)

```diff
-       static GetBabylonScriptURL(kk, ek) {
-         if (!kk) return "";
-         if (kk.startsWith(Dk._DefaultCdnUrl))
-           if (Dk.ScriptBaseUrl) {
-             const ek = Dk.ScriptBaseUrl.endsWith("/") ? Dk.ScriptBaseUrl.slice(0, -1) : Dk.ScriptBaseUrl;
-             kk = kk.replace(Dk._DefaultCdnUrl, ek)
-           } else if (Dk._CdnVersion) {
-           const ek = `${Dk._DefaultCdnUrl}/v${Dk._CdnVersion}`;
-           kk.startsWith(ek) || (kk = kk.replace(Dk._DefaultCdnUrl, ek))
-         }
-         return kk = Dk.ScriptPreprocessUrl(kk), ek && !Dk.IsAbsoluteUrl(kk) && (kk = Dk.GetAbsoluteUrl(kk)), kk
-       }
-       static LoadBabylonScript(kk, ek, ik, fk) {
-         kk = Dk.GetBabylonScriptURL(kk), Dk.LoadScript(kk, ek, ik)
-       }
-       static async LoadBabylonScriptAsync(kk) {
- ... (17 more removed lines; see GitHub link above)
+       updateIndices(CC, zC) {
+         let ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+         return this._geometry ? (this._geometry.updateIndices(CC, zC, ZC), this) : this
+       }
+       toLeftHanded() {
+         return this._geometry ? (this._geometry.toLeftHanded(), this) : this
+       }
+       _bind(CC, zC, ZC) {
+         let QC = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
+         if (!this._geometry) return this;
+         const wC = this.Km().mg();
+         let bC;
+         if (this._unIndexed)
+           if (this._getRenderingFillMode(ZC) === HC.d.WireFrameFillMode) bC = CC._getLinesIndexBuffer(this.CQC(), wC);
+           else bC = null;
+         else switch (this._getRenderingFillMode(ZC)) {
+ ... (398 more added lines; see GitHub link above)
```

#### 51. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L282-L284` → after: `L5541-L5548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5541-L5548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L5541-L5548) · [Before (L282-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L282-L284)

```diff
-       static _LoadScriptWeb(kk, ek, ik, Dk) {
-         let fk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-         if ("function" === typeof importScripts) {
+       _checkDelayState() {
+         const CC = this.Km();
+         return this._geometry ? this._geometry.load(CC) : 4 === this.delayLoadState && (this.delayLoadState = 2, this._queueLoad(CC)), this
+       }
+       _queueLoad(CC) {
+         CC.addPendingData(this);
+         const zC = -1 !== this.delayLoadingFile.indexOf(".babylonbinarymeshdata");
+         return (async () => {
```

#### 52. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L286` → after: `L5550-L5553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5550-L5553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L5550-L5553) · [Before (L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L286)

```diff
-             importScripts(kk), ek && ek()
+             const ZC = await CC._loadDelayedFileAsync(this.delayLoadingFile, zC, !0);
+             ZC instanceof ArrayBuffer ? this._delayLoadingFunction(ZC, this) : this._delayLoadingFunction(JSON.parse(ZC), this);
+             for (const CC of this.instances) CC.refreshBoundingInfo(), CC._syncSubMeshes();
+             this.delayLoadState = 1, CC.removePendingData(this)
```

#### 53. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L288` → after: `L5555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L5555) · [Before (L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L288)

```diff
-             ik?.(`Unable to load script '${kk}' in worker`, Pk)
+             CC.removePendingData(this), CC.GJ || uC.c.Error(`Unable to delay load geometry data for mesh "${this.name}" from "${this.delayLoadingFile}": ${ZC}`)
```

#### 54. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L290` → after: `L5557-L5586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5557-L5586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L5557-L5586) · [Before (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L290)

```diff
-           return
+         })(), this
+       }
+       isInFrustum(CC) {
+         return 2 !== this.delayLoadState && (!!super.isInFrustum(CC) && (this._checkDelayState(), !0))
+       }
+       setMaterialById(CC) {
+         const zC = this.Km().materials;
+         let ZC;
+         for (ZC = zC.length - 1; ZC > -1; ZC--)
+           if (zC[ZC].id === CC) return this.material = zC[ZC], this;
+         const QC = this.Km().multiMaterials;
+         for (ZC = QC.length - 1; ZC > -1; ZC--)
+           if (QC[ZC].id === CC) return this.material = QC[ZC], this;
+         return this
+       }
+       getAnimatables() {
+ ... (14 more added lines; see GitHub link above)
```

#### 55. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L292-L299` → after: `L5588-L5592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5588-L5592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L5588-L5592) · [Before (L292-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L292-L299)

```diff
-         if (!(0, Sk.i)()) return void ik?.(`Cannot load script '${kk}' outside of a window or a worker`);
-         const bk = document.getElementsByTagName("head")[0],
-           rk = document.createElement("script");
-         fk ? (rk.setAttribute("type", "module"), rk.innerText = kk) : (rk.setAttribute("type", "text/javascript"), rk.setAttribute("src", kk)), Dk && (rk.id = Dk), rk.onload = () => {
-           ek && ek()
-         }, rk.onerror = ek => {
-           ik && ik(`Unable to load script '${kk}'`, ek)
-         }, bk.appendChild(rk)
+         if (this.isVerticesDataPresent(hC.k.TangentKind)) {
+           for (ZC = this.getVerticesData(hC.k.TangentKind), wC = 0; wC < ZC.length; wC += 4) iC.r.TransformNormalFromFloatsToRef(ZC[wC], ZC[wC + 1], ZC[wC + 2], CC, QC).normalize().toArray(ZC, wC);
+           this.setVerticesData(hC.k.TangentKind, ZC, this.getVertexBuffer(hC.k.TangentKind).isUpdatable())
+         }
+         return CC.determinant() < 0 && this.flipFaces(), this.releaseSubMeshes(), this.Zx = zC, this
```

#### 56. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L301-L308` → after: `L5594-L5891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5594-L5891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L5594-L5891) · [Before (L301-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L301-L308)

```diff
-       static async LoadScriptAsync(kk, ek) {
-         return await new Promise(((ik, Dk) => {
-           this.LoadScript(kk, (() => {
-             ik()
-           }), ((kk, ek) => {
-             Dk(ek || new Error(kk))
-           }), ek)
-         }))
+       bakeCurrentTransformIntoVertices() {
+         let CC = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
+         return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] && this.makeGeometryUnique(), this.bakeTransformIntoVertices(this.computeWorldMatrix(!0)), this.resetLocalMatrix(CC), this
+       }
+       get _positions() {
+         return this._internalAbstractMeshDataInfo._positions || this._geometry && this._geometry._positions || null
+       }
+       _resetPointsArrayCache() {
+         return this._geometry && this._geometry._resetPointsArrayCache(), this
+       }
+       _generatePointsArray() {
+         return !!this._geometry && this._geometry._generatePointsArray()
+       }
+       clone() {
+         let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
+           zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
+ ... (282 more added lines; see GitHub link above)
```

#### 57. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L310-L314` → after: `L5893-L5926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5893-L5926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L5893-L5926) · [Before (L310-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L310-L314)

```diff
-       static ReadFileAsDataURL(kk, ek, ik) {
-         const Dk = new FileReader,
-           Sk = {
-             onCompleteObservable: new fk.c,
-             abort: () => Dk.abort()
+       serialize() {
+         let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
+         CC.name = this.name, CC.id = this.id, CC.uniqueId = this.uniqueId, CC.type = this.getClassName(), xC.e && xC.e.HasTags(this) && (CC.tags = xC.e.GetTags(this)), CC.position = this.position.VZC(), this.rotationQuaternion ? CC.rotationQuaternion = this.rotationQuaternion.VZC … [truncated]
+         const zC = this._geometry;
+         if (zC && this.Zx) {
+           CC.geometryUniqueId = zC.uniqueId, CC.geometryId = zC.id, CC.Zx = [];
+           for (let zC = 0; zC < this.Zx.length; zC++) {
+             const ZC = this.Zx[zC];
+             CC.Zx.push({
+               materialIndex: ZC.materialIndex,
+               verticesStart: ZC.verticesStart,
+               verticesCount: ZC.verticesCount,
+               indexStart: ZC.indexStart,
+               indexCount: ZC.indexCount
+             })
+           }
+ ... (18 more added lines; see GitHub link above)
```

#### 58. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L316-L320` → after: `L5928-L6012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5928-L6012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L5928-L6012) · [Before (L316-L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L316-L320)

```diff
-         return Dk.onloadend = () => {
-           Sk.onCompleteObservable.notifyObservers(Sk)
-         }, Dk.onload = kk => {
-           ek(kk.target.result)
-         }, Dk.onprogress = ik, Dk.readAsDataURL(kk), Sk
+           if (zC.parent && zC.parent._serializeAsParent(QC), zC.rotationQuaternion ? QC.rotationQuaternion = zC.rotationQuaternion.VZC() : zC.rotation && (QC.rotation = zC.rotation.VZC()), this.Km()._getComponent(TC.b.NAME_PHYSICSENGINE)) {
+             const CC = zC.getPhysicsImpostor?.();
+             CC && (QC.physicsMass = CC.getParam("Mq"), QC.physicsFriction = CC.getParam("friction"), QC.physicsRestitution = CC.getParam("Mq"), QC.physicsImpostor = CC.type)
+           }
+           zC.metadata && (QC.metadata = zC.metadata), zC.actionManager && (QC.actions = zC.actionManager.serialize(zC.name)), CC.instances.push(QC), cC.d.AppendSerializedAnimations(zC, QC), QC.np = zC.serializeAnimationRanges()
+         }
+         if (this._thinInstanceDataStorage.instancesCount && this._thinInstanceDataStorage.matrixData && (CC.thinInstances = {
+             instancesCount: this._thinInstanceDataStorage.instancesCount,
+             matrixData: Array.from(this._thinInstanceDataStorage.matrixData),
+             matrixBufferSize: this._thinInstanceDataStorage.matrixBufferSize,
+             enablePicking: this.AzC
+           }, this._userThinInstanceBuffersStorage)) {
+           const zC = {
+             data: {},
+             sizes: {},
+             strides: {}
+ ... (69 more added lines; see GitHub link above)
```

#### 59. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L322-L323` → after: `L6014-L6030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6014-L6030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L6014-L6030) · [Before (L322-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L322-L323)

```diff
-       static ReadFile(kk, ek, ik, Dk, fk) {
-         return (0, xk.q)(kk, ek, ik, Dk, fk)
+       setPositionsForCPUSkinning() {
+         const CC = this._internalMeshDataInfo;
+         if (!CC._sourcePositions) {
+           const zC = this.getVerticesData(hC.k.PositionKind);
+           if (!zC) return CC._sourcePositions;
+           CC._sourcePositions = new Float32Array(zC), this.isVertexBufferUpdatable(hC.k.PositionKind) || this.setVerticesData(hC.k.PositionKind, zC, !0)
+         }
+         return CC._sourcePositions
+       }
+       setNormalsForCPUSkinning() {
+         const CC = this._internalMeshDataInfo;
+         if (!CC._sourceNormals) {
+           const zC = this.getVerticesData(hC.k.NormalKind);
+           if (!zC) return CC._sourceNormals;
+           CC._sourceNormals = new Float32Array(zC), this.isVertexBufferUpdatable(hC.k.NormalKind) || this.setVerticesData(hC.k.NormalKind, zC, !0)
+         }
+ ... (1 more added lines; see GitHub link above)
```

#### 60. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L325-L327` → after: `L6032-L6071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6032-L6071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L6032-L6071) · [Before (L325-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L325-L327)

```diff
-       static FileAsURL(kk) {
-         const ek = new Blob([kk]);
-         return window.URL.createObjectURL(ek)
+       applySkeleton(CC) {
+         if (!this.geometry) return this;
+         if (this.geometry._softwareSkinningFrameId == this.Km().getFrameId()) return this;
+         if (this.geometry._softwareSkinningFrameId = this.Km().getFrameId(), !this.isVerticesDataPresent(hC.k.PositionKind)) return this;
+         if (!this.isVerticesDataPresent(hC.k.MatricesIndicesKind)) return this;
+         if (!this.isVerticesDataPresent(hC.k.MatricesWeightsKind)) return this;
+         const zC = this.isVerticesDataPresent(hC.k.NormalKind),
+           ZC = this._internalMeshDataInfo;
+         if (!ZC._sourcePositions) {
+           const CC = this.Zx.slice();
+           this.setPositionsForCPUSkinning(), this.Zx = CC
+         }
+         zC && !ZC._sourceNormals && this.setNormalsForCPUSkinning();
+         let QC = this.getVerticesData(hC.k.PositionKind);
+         if (!QC) return this;
+         QC instanceof Float32Array || (QC = new Float32Array(QC));
+ ... (24 more added lines; see GitHub link above)
```

#### 61. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L329-L331` → after: `L6073-L6086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6073-L6086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L6073-L6086) · [Before (L329-L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L329-L331)

```diff
-       static Format(kk) {
-         let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
-         return kk.toFixed(ek)
+       static MinMax(CC) {
+         let zC = null,
+           ZC = null;
+         for (const QC of CC) {
+           const CC = QC.WE().boundingBox;
+           zC && ZC ? (zC.minimizeInPlace(CC.minimumWorld), ZC.maximizeInPlace(CC.maximumWorld)) : (zC = CC.minimumWorld.clone(), ZC = CC.maximumWorld.clone())
+         }
+         return zC && ZC ? {
+           min: zC,
+           max: ZC
+         } : {
+           min: iC.r.Zero(),
+           max: iC.r.Zero()
+         }
```

#### 62. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L333-L334` → after: `L6088-L6090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6088-L6090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L6088-L6090) · [Before (L333-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L333-L334)

```diff
-       static DeepCopy(kk, ek, ik, Dk) {
-         rk.c.DeepCopy(kk, ek, ik, Dk)
+       static Center(CC) {
+         const zC = CC instanceof Array ? OC.MinMax(CC) : CC;
+         return iC.r.Center(zC.min, zC.max)
```

#### 63. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L336-L339` → after: `L6092-L6098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6092-L6098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L6092-L6098) · [Before (L336-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L336-L339)

```diff
-       static IsEmpty(kk) {
-         for (const ek in kk)
-           if (Object.prototype.hasOwnProperty.call(kk, ek)) return !1;
-         return !0
+       static MergeMeshes(CC) {
+         let zC = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
+           ZC = arguments.length > 2 ? arguments[2] : void 0,
+           QC = arguments.length > 3 ? arguments[3] : void 0,
+           wC = arguments.length > 4 ? arguments[4] : void 0,
+           bC = arguments.length > 5 ? arguments[5] : void 0;
+         return (0, JC.l)(OC._MergeMeshesCoroutine(CC, zC, ZC, QC, wC, bC, !1))
```

#### 64. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L341-L342` → after: `L6100-L6127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6100-L6127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L6100-L6127) · [Before (L341-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L341-L342)

```diff
-       static RegisterTopRootEvents(kk, ek) {
-         for (let Dk = 0; Dk < ek.length; Dk++) {
+       static async MergeMeshesAsync(CC) {
+         let zC = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
+           ZC = arguments.length > 2 ? arguments[2] : void 0,
+           QC = arguments.length > 3 ? arguments[3] : void 0,
+           wC = arguments.length > 4 ? arguments[4] : void 0,
+           bC = arguments.length > 5 ? arguments[5] : void 0;
+         return await (0, JC.h)(OC._MergeMeshesCoroutine(CC, zC, ZC, QC, wC, bC, !0), (0, JC.d)())
+       }
+       static * _MergeMeshesCoroutine(CC) {
+         let zC, ZC = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
+           QC = arguments.length > 2 ? arguments[2] : void 0,
+           wC = arguments.length > 3 ? arguments[3] : void 0,
+           bC = arguments.length > 4 ? arguments[4] : void 0,
+           nC = arguments.length > 5 ? arguments[5] : void 0,
+           fC = arguments.length > 6 ? arguments[6] : void 0;
+         if (0 === (CC = CC.filter(Boolean)).length) return null;
+ ... (12 more added lines; see GitHub link above)
```

#### 65. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L344-L347` → after: `L6129-L6167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6129-L6167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L6129-L6167) · [Before (L344-L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L344-L347)

```diff
-           kk.addEventListener(fk.name, fk.handler, !1);
-           try {
-             window.parent && window.parent.addEventListener(fk.name, fk.handler, !1)
-           } catch (ik) {}
+           if (ZC.ZH) return uC.c.Warn("Cannot merge instance meshes."), null;
+           if (NC !== ZC.sideOrientation) return uC.c.Warn("Cannot merge meshes with different sideOrientation values."), null;
+           if (bC || nC) {
+             const CC = WC.reduce(((CC, zC) => Math.max(CC, zC.start + zC.count)), 0);
+             if (nC)
+               if (ZC.material) {
+                 const zC = ZC.material;
+                 if (zC instanceof lC.c) {
+                   for (let CC = 0; CC < zC.r_.length; CC++) qC.indexOf(zC.r_[CC]) < 0 && qC.push(zC.r_[CC]);
+                   for (let QC = 0; QC < ZC.Zx.length; QC++) FC.push(qC.indexOf(zC.r_[ZC.Zx[QC].materialIndex])), WC.push({
+                     start: CC + ZC.Zx[QC].indexStart,
+                     count: ZC.Zx[QC].indexCount
+                   })
+                 } else {
+                   qC.indexOf(zC) < 0 && qC.push(zC);
+                   for (let QC = 0; QC < ZC.Zx.length; QC++) FC.push(qC.indexOf(zC)), WC.push({
+ ... (23 more added lines; see GitHub link above)
```

#### 66. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L350-L356` → after: `L6206-L6216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6206-L6216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L6206-L6216) · [Before (L350-L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L350-L356)

```diff
-       static UnregisterTopRootEvents(kk, ek) {
-         for (let Dk = 0; Dk < ek.length; Dk++) {
-           const fk = ek[Dk];
-           kk.removeEventListener(fk.name, fk.handler);
-           try {
-             kk.parent && kk.parent.removeEventListener(fk.name, fk.handler)
-           } catch (ik) {}
+       P_(CC) {
+         CC._indexInSourceMeshInstanceArray = this.instances.length, this.instances.push(CC)
+       }
+       A_(CC) {
+         const zC = CC._indexInSourceMeshInstanceArray;
+         if (-1 != zC) {
+           if (zC !== this.instances.length - 1) {
+             const CC = this.instances[this.instances.length - 1];
+             this.instances[zC] = CC, CC._indexInSourceMeshInstanceArray = zC
+           }
+           CC._indexInSourceMeshInstanceArray = -1, this.instances.pop()
```

#### 67. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L359-L360` → after: `L6219-L6220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6219-L6220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L6219-L6220) · [Before (L359-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L359-L360)

```diff
-       static async DumpFramebuffer(kk, ek, ik, Dk) {
-         throw (0, mk.k)("DumpTools")
+       _shouldConvertRHS() {
+         return this._scene.useRightHandedSystem && this.sideOrientation === HC.d.CounterClockWiseSideOrientation
```

#### 68. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L362-L363` → after: `L6222-L6224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6222-L6224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L6222-L6224) · [Before (L362-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L362-L363)

```diff
-       static DumpData(kk, ek, ik, Dk) {
-         throw (0, mk.k)("DumpTools")
+       _getRenderingFillMode(CC) {
+         const zC = this.Km();
+         return zC.forcePointsCloud ? HC.d.PointFillMode : zC.forceWireframe ? HC.d.WireFrameFillMode : this.overrideRenderingFillMode ?? CC
```

#### 69. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L365-L366` → after: `L6226-L6227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6226-L6227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L6226-L6227) · [Before (L365-L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L365-L366)

```diff
-       static async DumpDataAsync(kk, ek, ik) {
-         throw (0, mk.k)("DumpTools")
+       setMaterialByID(CC) {
+         return this.setMaterialById(CC)
```

#### 70. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L368-L369` → after: `L6229-L6230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6229-L6230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L6229-L6230) · [Before (L368-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L368-L369)

```diff
-       static _IsOffScreenCanvas(kk) {
-         return void 0 !== kk.convertToBlob
+       static CreateRibbon(CC, zC, ZC, QC, wC, bC, nC, fC, oC) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 71. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L371-L387` → after: `L6232-L6233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6232-L6233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L6232-L6233) · [Before (L371-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L371-L387)

```diff
-       static ToBlob(kk, ek) {
-         let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
-           fk = arguments.length > 3 ? arguments[3] : void 0;
-         Dk._IsOffScreenCanvas(kk) || kk.toBlob || (kk.toBlob = function(kk, ek, ik) {
-           setTimeout((() => {
-             const Dk = atob(this.toDataURL(ek, ik).split(",")[1]),
-               fk = Dk.length,
-               Sk = new Uint8Array(fk);
-             for (let kk = 0; kk < fk; kk++) Sk[kk] = Dk.charCodeAt(kk);
-             kk(new Blob([Sk]))
-           }))
-         }), Dk._IsOffScreenCanvas(kk) ? kk.convertToBlob({
-           type: ik,
-           quality: fk
-         }).then((kk => ek(kk))) : kk.toBlob((function(kk) {
-           ek(kk)
- ... (1 more removed lines; see GitHub link above)
+       static CreateDisc(CC, zC, ZC, QC, wC, bC) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 72. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L389-L404` → after: `L6235-L6236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6235-L6236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L6235-L6236) · [Before (L389-L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L389-L404)

```diff
-       static DownloadBlob(kk, ek) {
-         if ("download" in document.createElement("a")) {
-           if (!ek) {
-             const kk = new Date;
-             ek = "screenshot_" + ((kk.getFullYear() + "-" + (kk.getMonth() + 1)).slice(2) + "-" + kk.getDate() + "_" + kk.getHours() + "-" + ("0" + kk.getMinutes()).slice(-2)) + ".png"
-           }
-           Dk.Download(kk, ek)
-         } else if (kk && "undefined" !== typeof URL) {
-           const ek = URL.createObjectURL(kk),
-             ik = window.open("");
-           if (!ik) return;
-           const Dk = ik.document.createElement("img");
-           Dk.onload = function() {
-             URL.revokeObjectURL(ek)
-           }, Dk.src = ek, ik.document.body.appendChild(Dk)
-         }
+       static CreateBox(CC, zC, ZC, QC, wC) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 73. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L406-L427` → after: `L6238-L6239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6238-L6239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L6238-L6239) · [Before (L406-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L406-L427)

```diff
-       static EncodeScreenshotCanvasData(kk, ek) {
-         let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
-           fk = arguments.length > 3 ? arguments[3] : void 0,
-           Sk = arguments.length > 4 ? arguments[4] : void 0;
-         if ("string" !== typeof fk && ek) {
-           if (ek) {
-             if (Dk._IsOffScreenCanvas(kk)) return void kk.convertToBlob({
-               type: ik,
-               quality: Sk
-             }).then((kk => {
-               const ik = new FileReader;
-               ik.readAsDataURL(kk), ik.onloadend = () => {
-                 const kk = ik.result;
-                 ek(kk)
-               }
-             }));
- ... (6 more removed lines; see GitHub link above)
+       static CreateSphere(CC, zC, ZC, QC, wC, bC) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 74. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L429-L435` → after: `L6241-L6242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6241-L6242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L6241-L6242) · [Before (L429-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L429-L435)

```diff
-       static Download(kk, ek) {
-         if ("undefined" === typeof URL) return;
-         const ik = window.URL.createObjectURL(kk),
-           Dk = document.createElement("a");
-         document.body.appendChild(Dk), Dk.style.display = "none", Dk.href = ik, Dk.download = ek, Dk.addEventListener("click", (() => {
-           Dk.parentElement && Dk.parentElement.removeChild(Dk)
-         })), Dk.click(), window.URL.revokeObjectURL(ik)
+       static CreateHemisphere(CC, zC, ZC, QC) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 75. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L437-L438` → after: `L6244-L6245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6244-L6245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L6244-L6245) · [Before (L437-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L437-L438)

```diff
-       static BackCompatCameraNoPreventDefault(kk) {
-         return "boolean" === typeof kk[0] ? kk[0] : "boolean" === typeof kk[1] && kk[1]
+       static CreateCylinder(CC, zC, ZC, QC, wC, bC, nC, fC, oC) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 76. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L440-L441` → after: `L6247-L6248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6247-L6248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L6247-L6248) · [Before (L440-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L440-L441)

```diff
-       static CreateScreenshot(kk, ek, ik, Dk) {
-         throw (0, mk.k)("ScreenshotTools")
+       static CreateTorus(CC, zC, ZC, QC, wC, bC, nC) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 77. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L443-L444` → after: `L6250-L6251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6250-L6251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L6250-L6251) · [Before (L443-L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L443-L444)

```diff
-       static async CreateScreenshotAsync(kk, ek, ik) {
-         throw (0, mk.k)("ScreenshotTools")
+       static CreateTorusKnot(CC, zC, ZC, QC, wC, bC, nC, fC, oC, qC) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 78. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L446-L447` → after: `L6253-L6254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6253-L6254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L6253-L6254) · [Before (L446-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L446-L447)

```diff
-       static CreateScreenshotUsingRenderTarget(kk, ek, ik, Dk) {
-         throw (0, mk.k)("ScreenshotTools")
+       static CreateLines(CC, zC, ZC, QC, wC) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 79. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L449-L450` → after: `L6256-L6257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6256-L6257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L6256-L6257) · [Before (L449-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L449-L450)

```diff
-       static async CreateScreenshotUsingRenderTargetAsync(kk, ek, ik) {
-         throw (0, mk.k)("ScreenshotTools")
+       static CreateDashedLines(CC, zC, ZC, QC, wC, bC, nC, fC) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 80. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L452-L453` → after: `L6259-L6260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6259-L6260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L6259-L6260) · [Before (L452-L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L452-L453)

```diff
-       static RandomId() {
-         return (0, Hk.b)()
+       static CreatePolygon(CC, zC, ZC, QC, wC, bC, nC) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 81. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L455-L456` → after: `L6262-L6263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6262-L6263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L6262-L6263) · [Before (L455-L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L455-L456)

```diff
-       static IsBase64(kk) {
-         return (0, xk.h)(kk)
+       static ExtrudePolygon(CC, zC, ZC, QC, wC, bC, nC, fC) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 82. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L458-L459` → after: `L6265-L6266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6265-L6266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L6265-L6266) · [Before (L458-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L458-L459)

```diff
-       static DecodeBase64(kk) {
-         return (0, xk.d)(kk)
+       static ExtrudeShape(CC, zC, ZC, QC, wC, bC, nC, fC, oC, qC) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 83. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L461-L462` → after: `L6268-L6269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6268-L6269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L6268-L6269) · [Before (L461-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L461-L462)

```diff
-       static get errorsCount() {
-         return bk.b.errorsCount
+       static ExtrudeShapeCustom(CC, zC, ZC, QC, wC, bC, nC, fC, oC, qC, FC, WC) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 84. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L464-L465` → after: `L6271-L6272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6271-L6272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L6271-L6272) · [Before (L464-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L464-L465)

```diff
-       static Log(kk) {
-         bk.b.Log(kk)
+       static CreateLathe(CC, zC, ZC, QC, wC, bC, nC) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 85. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L467-L468` → after: `L6274-L6275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6274-L6275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L6274-L6275) · [Before (L467-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L467-L468)

```diff
-       static Warn(kk) {
-         bk.b.Warn(kk)
+       static CreatePlane(CC, zC, ZC, QC, wC) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 86. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L470-L471` → after: `L6277-L6278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6277-L6278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L6277-L6278) · [Before (L470-L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L470-L471)

```diff
-       static Error(kk) {
-         bk.b.Error(kk)
+       static CreateGround(CC, zC, ZC, QC, wC, bC) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 87. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L473-L474` → after: `L6280-L6281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6280-L6281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L6280-L6281) · [Before (L473-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L473-L474)

```diff
-       static get LogCache() {
-         return bk.b.LogCache
+       static CreateTiledGround(CC, zC, ZC, QC, wC, bC, nC, fC, oC) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 88. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L476-L477` → after: `L6283-L6284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6283-L6284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L6283-L6284) · [Before (L476-L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L476-L477)

```diff
-       static ClearLogCache() {
-         bk.b.ClearLogCache()
+       static CreateGroundFromHeightMap(CC, zC, ZC, QC, wC, bC, nC, fC, oC, qC, FC) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 89. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L479-L480` → after: `L6286-L6287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6286-L6287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L6286-L6287) · [Before (L479-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L479-L480)

```diff
-       static set LogLevels(kk) {
-         bk.b.LogLevels = kk
+       static CreateTube(CC, zC, ZC, QC, wC, bC, nC, fC, oC, qC) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 90. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L482-L483` → after: `L6289-L6290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6289-L6290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L6289-L6290) · [Before (L482-L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L482-L483)

```diff
-       static set PerformanceLogLevel(kk) {
-         (kk & Dk.PerformanceUserMarkLogLevel) !== Dk.PerformanceUserMarkLogLevel ? (kk & Dk.PerformanceConsoleLogLevel) !== Dk.PerformanceConsoleLogLevel ? (Dk.StartPerformanceCounter = Dk._StartPerformanceCounterDisabled, Dk.EndPerformanceCounter = Dk._EndPerformanceCounterDisab … [truncated]
+       static CreatePolyhedron(CC, zC, ZC) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 91. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L485-L493` → after: `L6292-L6293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6292-L6293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L6292-L6293) · [Before (L485-L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L485-L493)

```diff
-       static _StartPerformanceCounterDisabled(kk, ek) {}
-       static _EndPerformanceCounterDisabled(kk, ek) {}
-       static _StartUserMark(kk) {
-         let ek = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-         if (!Dk._Performance) {
-           if (!(0, Sk.i)()) return;
-           Dk._Performance = window.performance
-         }
-         ek && Dk._Performance.mark && Dk._Performance.mark(kk + "-Begin")
+       static CreateIcoSphere(CC, zC, ZC) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 92. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L495-L496` → after: `L6295-L6296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6295-L6296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L6295-L6296) · [Before (L495-L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L495-L496)

```diff
-       static _EndUserMark(kk) {
-         (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && Dk._Performance.mark && (Dk._Performance.mark(kk + "-End"), Dk._Performance.measure(kk, kk + "-Begin", kk + "-End"))
+       static CreateDecal(CC, zC, ZC, QC, wC, bC) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 93. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L498-L500` → after: `L6298-L6299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6298-L6299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L6298-L6299) · [Before (L498-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L498-L500)

```diff
-       static _StartPerformanceConsole(kk) {
-         let ek = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-         ek && (Dk._StartUserMark(kk, ek), console.time && console.time(kk))
+       static CreateCapsule(CC, zC, ZC) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 94. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L502-L504` → after: `L6301-L6302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6301-L6302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L6301-L6302) · [Before (L502-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L502-L504)

```diff
-       static _EndPerformanceConsole(kk) {
-         let ek = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-         ek && (Dk._EndUserMark(kk, ek), console.timeEnd(kk))
+       static ExtendToGoldberg(CC) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 95. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L506-L511` → after: `L6304-L6394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6304-L6394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L6304-L6394) · [Before (L506-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L506-L511)

```diff
-       static _StartMarkNative(kk) {
-         if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.startPerformanceCounter)
-           if (Dk._NativePerformanceCounterHandles.has(kk)) Dk.Warn(`Performance counter with name ${kk} is already started.`);
-           else {
-             const ek = _native.startPerformanceCounter(kk);
-             Dk._NativePerformanceCounterHandles.set(kk, ek)
+     }
+     OC.FRONTSIDE = KC.e.FRONTSIDE, OC.BACKSIDE = KC.e.BACKSIDE, OC.DOUBLESIDE = KC.e.DOUBLESIDE, OC.DEFAULTSIDE = KC.e.DEFAULTSIDE, OC.NO_CAP = 0, OC.CAP_START = 1, OC.CAP_END = 2, OC.CAP_ALL = 3, OC.NO_FLIP = 0, OC.FLIP_TILE = 1, OC.ROTATE_TILE = 2, OC.FLIP_ROW = 3, OC.ROTATE_RO … [truncated]
+       throw (0, sC.i)("GroundMesh")
+     }, OC._GoldbergMeshParser = (CC, zC) => {
+       throw (0, sC.i)("GoldbergMesh")
+     }, OC._LinesMeshParser = (CC, zC) => {
+       throw (0, sC.i)("LinesMesh")
+     }, OC._GreasedLineMeshParser = (CC, zC) => {
+       throw (0, sC.i)("GreasedLineMesh")
+     }, OC._GreasedLineRibbonMeshParser = (CC, zC) => {
+       throw (0, sC.i)("GreasedLineRibbonMesh")
+     }, OC._TrailMeshParser = (CC, zC) => {
+       throw (0, sC.i)("TrailMesh")
+     }, OC._GaussianSplattingMeshParser = (CC, zC) => {
+       throw (0, sC.i)("GaussianSplattingMesh")
+     }, OC._GaussianSplattingPartProxyMeshParser = (CC, zC) => {
+ ... (75 more added lines; see GitHub link above)
```

#### 96. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L519-L529` → after: `L6397-L6418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6397-L6418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L6397-L6418) · [Before (L519-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L519-L529)

```diff
-       }
-       static get Now() {
-         return Pk.d.Now
-       }
-       static GetClassName(kk) {
-         let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           ik = null;
-         if (!ek && kk.getClassName) ik = kk.getClassName();
-         else {
-           if (kk instanceof Object) {
-             ik = (ek ? kk : Object.getPrototypeOf(kk)).constructor.__bjsclassName__
+         applyToMesh(CC, zC) {
+           return this._applyTo(CC, zC, !1), this
+         }
+         applyToGeometry(CC, zC) {
+           return this._applyTo(CC, zC, !1), this
+         }
+         updateMesh(CC) {
+           return this._update(CC), this
+         }
+         updateGeometry(CC) {
+           return this._update(CC), this
+         }* _applyToCoroutine(CC) {
+           let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+             ZC = arguments.length > 2 ? arguments[2] : void 0;
+           if (this.positions && (CC.setVerticesData(bC.k.PositionKind, this.positions, zC), ZC && (yield)), this.normals && (CC.setVerticesData(bC.k.NormalKind, this.normals, zC), ZC && (yield)), this.tangents && (CC.setVerticesData(bC.k.TangentKind, this.tangents, zC), ZC && (yi … [truncated]
+             const QC = this.positions && this.colors.length === this.positions.length ? 3 : 4;
+ ... (6 more added lines; see GitHub link above)
```

#### 97. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L531` → after: `L6420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L6420) · [Before (L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L531)

```diff
-           ik || (ik = typeof kk)
+           return this
```

#### 98. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L533-L548` → after: `L6422-L6451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6422-L6451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L6422-L6451) · [Before (L533-L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L533-L548)

```diff
-         return ik
-       }
-       static First(kk, ek) {
-         for (const ik of kk)
-           if (ek(ik)) return ik;
-         return null
-       }
-       static getFullClassName(kk) {
-         let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           ik = null,
-           Dk = null;
-         if (!ek && kk.getClassName) ik = kk.getClassName();
-         else {
-           if (kk instanceof Object) {
-             const fk = ek ? kk : Object.getPrototypeOf(kk);
-             ik = fk.constructor.__bjsclassName__, Dk = fk.constructor.__bjsmoduleName__
+         _update(CC, zC, ZC) {
+           return this.positions && CC.updateVerticesData(bC.k.PositionKind, this.positions, zC, ZC), this.normals && CC.updateVerticesData(bC.k.NormalKind, this.normals, zC, ZC), this.tangents && CC.updateVerticesData(bC.k.TangentKind, this.tangents, zC, ZC), this.uvs && CC.updat … [truncated]
+         }
+         static _TransformVector3Coordinates(CC, zC) {
+           let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
+             QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : CC.length;
+           const bC = wC.j.Eg[0],
+             nC = wC.j.Eg[1];
+           for (let fC = ZC; fC < ZC + QC; fC += 3) wC.r.FromArrayToRef(CC, fC, bC), wC.r.TransformCoordinatesToRef(bC, zC, nC), CC[fC] = nC.x, CC[fC + 1] = nC.y, CC[fC + 2] = nC.z
+         }
+         static _TransformVector3Normals(CC, zC) {
+           let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
+             QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : CC.length;
+           const bC = wC.j.Eg[0],
+             nC = wC.j.Eg[1];
+           for (let fC = ZC; fC < ZC + QC; fC += 3) wC.r.FromArrayToRef(CC, fC, bC), wC.r.TransformNormalToRef(bC, zC, nC), CC[fC] = nC.x, CC[fC + 1] = nC.y, CC[fC + 2] = nC.z
+ ... (14 more added lines; see GitHub link above)
```

#### 99. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L552-L563` → after: `L6454-L6878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6454-L6878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L6454-L6878) · [Before (L552-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L552-L563)

```diff
-         return ik ? (null != Dk ? Dk + "." : "") + ik : null
-       }
-       static async DelayAsync(kk) {
-         await new Promise((ek => {
-           setTimeout((() => {
-             ek()
-           }), kk)
-         }))
-       }
-       static IsSafari() {
-         return !!(0, Sk.f)() && /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
-       }
+         transform(zC) {
+           const ZC = zC.determinant() < 0;
+           return this.positions && CC._TransformVector3Coordinates(this.positions, zC), this.normals && CC._TransformVector3Normals(this.normals, zC), this.tangents && CC._TransformVector4Normals(this.tangents, zC), ZC && this.indices && CC._FlipFaces(this.indices), this
+         }
+         splitBasedOnMaterialID() {
+           if (!this.materialInfos || this.materialInfos.length < 2) return [this];
+           const zC = [];
+           for (const ZC of this.materialInfos) {
+             const QC = new CC;
+             if (this.positions && (QC.positions = this.positions.slice(3 * ZC.verticesStart, 3 * (ZC.verticesCount + ZC.verticesStart))), this.normals && (QC.normals = this.normals.slice(3 * ZC.verticesStart, 3 * (ZC.verticesCount + ZC.verticesStart))), this.tangents && (QC.tange … [truncated]
+               QC.indices = [];
+               for (let CC = ZC.indexStart; CC < ZC.indexStart + ZC.indexCount; CC++) QC.indices.push(this.indices[CC] - ZC.verticesStart)
+             }
+             const wC = new MC;
+             wC.indexStart = 0, wC.indexCount = QC.indices ? QC.indices.length : 0, wC.materialIndex = ZC.materialIndex, wC.verticesStart = 0, wC.verticesCount = (QC.positions ? QC.positions.length : 0) / 3, QC.materialInfos = [wC], zC.push(QC)
+           }
+ ... (409 more added lines; see GitHub link above)
```

#### 100. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L566-L568` → after: `L6881-L6887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6881-L6887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L6881-L6887) · [Before (L566-L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L566-L568)

```diff
-     function pk(kk, ek) {
-       return ik => {
-         ik.__bjsclassName__ = kk, ik.__bjsmoduleName__ = null != ek ? ek : null
+     function FC(CC, zC, ZC, QC) {
+       ZC.Q_(Number.POSITIVE_INFINITY), QC.Q_(Number.NEGATIVE_INFINITY);
+       for (let wC = 0; wC < 3 * zC; wC += 3) {
+         const zC = CC[wC],
+           bC = CC[wC + 1],
+           nC = CC[wC + 2];
+         zC < ZC.x && (ZC.x = zC), bC < ZC.y && (ZC.y = bC), nC < ZC.z && (ZC.z = nC), zC > QC.x && (QC.x = zC), bC > QC.y && (QC.y = bC), nC > QC.z && (QC.z = nC)
```

#### 101. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L571-L580` → after: `L6890-L6972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6890-L6972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L6890-L6972) · [Before (L571-L580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L571-L580)

```diff
-     Dk = lk, lk.AssetBaseUrl = "", lk.UseCustomRequestHeaders = !1, lk.CustomRequestHeaders = Mk.d.CustomRequestHeaders, lk.GetDOMTextContent = Sk.c, lk._DefaultCdnUrl = "https://cdn.babylonjs.com", lk._CdnVersion = "9.28.0", lk._DefaultAssetsUrl = "https://assets.babylonjs.com/c … [truncated]
-       const ek = document.createElement("a");
-       return ek.href = kk, ek.href
-     } : "function" === typeof URL && "object" === typeof location ? kk => new URL(kk, location.origin).href : () => {
-       throw new Error("Unable to get absolute URL. Override BABYLON.Tools.GetAbsoluteUrl to a custom implementation for the current context.")
-     }, lk.NoneLogLevel = bk.b.NoneLogLevel, lk.MessageLogLevel = bk.b.MessageLogLevel, lk.WarningLogLevel = bk.b.WarningLogLevel, lk.ErrorLogLevel = bk.b.ErrorLogLevel, lk.AllLogLevel = bk.b.AllLogLevel, lk.IsWindowObjectExist = Sk.i, lk.PerformanceNoneLogLevel = 0, lk.Performanc … [truncated]
-     class yk {
-       constructor(kk, ek, ik) {
-         let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
-         this.iterations = kk, this.index = Dk - 1, this._done = !1, this._fn = ek, this._successCallback = ik
+ 
+     function WC(CC, zC, ZC) {
+       ZC && (CC.x -= CC.x * ZC.x + ZC.y, CC.y -= CC.y * ZC.x + ZC.y, CC.z -= CC.z * ZC.x + ZC.y, zC.x += zC.x * ZC.x + ZC.y, zC.y += zC.y * ZC.x + ZC.y, zC.z += zC.z * ZC.x + ZC.y)
+     }
+ 
+     function NC(CC, zC, ZC, wC, bC) {
+       const nC = QC.j.Eg[7],
+         fC = QC.j.Eg[8];
+       for (let oC = 0; oC < 2; ++oC)
+         for (let qC = 0; qC < 2; ++qC)
+           for (let FC = 0; FC < 2; ++FC) nC.set(oC ? zC.x : CC.x, qC ? zC.y : CC.y, FC ? zC.z : CC.z), QC.r.TransformCoordinatesToRef(nC, ZC, fC), wC.minimizeInPlace(fC), bC.maximizeInPlace(fC)
+     }
+ 
+     function MC(CC, zC, ZC, wC, bC) {
+       const nC = QC.j.Eg[7];
+       for (let fC = 0; fC < 3 * zC; fC += 3) QC.r.TransformCoordinatesFromFloatsToRef(CC[fC], CC[fC + 1], CC[fC + 2], ZC, nC), wC.minimizeInPlace(nC), bC.maximizeInPlace(nC)
+ ... (67 more added lines; see GitHub link above)
```

#### 102. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L582-L583` → after: `L6974-L7027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR6974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L6974-L7027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L6974-L7027) · [Before (L582-L583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L582-L583)

```diff
-       executeNext() {
-         this._done || (this.index + 1 < this.iterations ? (++this.index, this._fn(this)) : this.breakLoop())
+       return this._thinInstanceDataStorage.worldMatrices
+     }, nC.b.prototype.thinInstanceRefreshBoundingInfo = function() {
+       let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
+         zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+         ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
+         wC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+       if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return;
+       const nC = this._thinInstanceDataStorage.boundingVectors;
+       if (CC || !this.rawBoundingInfo) {
+         if (nC.length = 0, wC && function(CC, zC, ZC) {
+             const wC = CC._userThinInstanceBuffersStorage,
+               nC = wC?.data[oC],
+               gC = wC?.strides[oC];
+             if (!nC || !gC || gC < 4 || !qC(CC)) return !1;
+             const SC = CC._thinInstanceDataStorage.matrixData;
+             if (!SC) return !1;
+ ... (38 more added lines; see GitHub link above)
```

#### 103. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L585-L586` → after: `L7029-L7036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7029-L7036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L7029-L7036) · [Before (L585-L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L585-L586)

```diff
-       breakLoop() {
-         this._done = !0, this._successCallback()
+       const gC = this.WE(),
+         SC = this._thinInstanceDataStorage.matrixData;
+       if (0 === nC.length)
+         for (let QC = 0; QC < gC.boundingBox.vectors.length; ++QC) nC.push(gC.boundingBox.vectors[QC].clone());
+       QC.j.Eg[0].Q_(Number.POSITIVE_INFINITY), QC.j.Eg[1].Q_(Number.NEGATIVE_INFINITY);
+       for (let bC = 0; bC < this._thinInstanceDataStorage.instancesCount; ++bC) {
+         QC.b.FromArrayToRef(SC, 16 * bC, QC.j.Matrix[0]);
+         for (let CC = 0; CC < nC.length; ++CC) QC.r.TransformCoordinatesToRef(nC[CC], QC.j.Matrix[0], QC.j.Eg[2]), QC.j.Eg[0].minimizeInPlace(QC.j.Eg[2]), QC.j.Eg[1].maximizeInPlace(QC.j.Eg[2])
```

#### 104. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L588-L590` → after: `L7038-L7058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7038-L7058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L7038-L7058) · [Before (L588-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L588-L590)

```diff
-       static Run(kk, ek, ik) {
-         const Dk = new yk(kk, ek, ik, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
-         return Dk.executeNext(), Dk
+       gC.reConstruct(QC.j.Eg[0], QC.j.Eg[1]), this._updateBoundingInfo()
+     }, nC.b.prototype._thinInstanceRecreateBuffer = function(CC) {
+       let zC = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+       "matrix" === CC ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", this._thinInstanceDataStorage.matrixData, zC)) : "previousMatrix" === CC ? this._scene.needsPreviousWorldMatr … [truncated]
+     }, nC.b.prototype._thinInstanceUpdateBufferSize = function(CC) {
+       let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+       CC === fC.k.ColorKind && (CC = fC.k.ColorInstanceKind);
+       const ZC = "matrix" === CC;
+       if (!ZC && (!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.strides[CC])) return;
+       const QC = ZC ? 16 : this._userThinInstanceBuffersStorage.strides[CC],
+         wC = ZC ? this._thinInstanceDataStorage.matrixBufferSize : this._userThinInstanceBuffersStorage.sizes[CC];
+       let bC = ZC ? this._thinInstanceDataStorage.matrixData : this._userThinInstanceBuffersStorage.data[CC];
+       const nC = (this._thinInstanceDataStorage.instancesCount + zC) * QC;
+       let oC = wC;
+       for (; oC < nC;) oC *= 2;
+       if (!bC || wC != oC) {
+ ... (5 more added lines; see GitHub link above)
```

#### 105. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L592-L601` → after: `L7060-L7477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7060-L7477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L7060-L7477) · [Before (L592-L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L592-L601)

```diff
-       static SyncAsyncForLoop(kk, ek, ik, Dk, fk) {
-         let Sk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
-         return yk.Run(Math.ceil(kk / ek), (Dk => {
-           fk && fk() ? Dk.breakLoop() : setTimeout((() => {
-             for (let Sk = 0; Sk < ek; ++Sk) {
-               const bk = Dk.index * ek + Sk;
-               if (bk >= kk) break;
-               if (ik(bk), fk && fk()) {
-                 Dk.breakLoop();
-                 break
+     }, nC.b.prototype._thinInstanceInitializeUserStorage = function() {
+       this._userThinInstanceBuffersStorage || (this._userThinInstanceBuffersStorage = {
+         data: {},
+         sizes: {},
+         vertexBuffers: {},
+         strides: {}
+       })
+     }, nC.b.prototype._disposeThinInstanceSpecificData = function() {
+       this._thinInstanceDataStorage?.matrixBuffer && (this._thinInstanceDataStorage.matrixBuffer.dispose(), this._thinInstanceDataStorage.matrixBuffer = null), this._thinInstanceDataStorage?.previousMatrixBuffer && (this._thinInstanceDataStorage.previousMatrixBuffer.dispose(), th … [truncated]
+     })
+   },
+   40272: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => GC,
+       e: () => SC
+     });
+ ... (402 more added lines; see GitHub link above)
```

#### 106. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L604-L606` → after: `L7480-L7682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7480-L7682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L7480-L7682) · [Before (L604-L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L604-L606)

```diff
-             Dk.executeNext()
-           }), Sk)
-         }), Dk)
+           }
+           this.sq.L_(1, 1, 1), this.position.L_(0, 0, 0), this.rotation.L_(0, 0, 0), this.rotationQuaternion && (this.rotationQuaternion = WC.f.Identity()), this._worldMatrix = WC.b.Identity()
+         }
+         _afterComputeWorldMatrix() {}
+         registerAfterWorldMatrixUpdate(CC) {
+           return this.onAfterWorldMatrixUpdateObservable.add(CC), this
+         }
+         unregisterAfterWorldMatrixUpdate(CC) {
+           return this.onAfterWorldMatrixUpdateObservable.removeCallback(CC), this
+         }
+         getPositionInCameraSpace() {
+           let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
+           return CC || (CC = this.Km().activeCamera), WC.r.TransformCoordinates(this.getAbsolutePosition(), CC.getViewMatrix())
+         }
+         getDistanceToCamera() {
+           let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
+ ... (187 more added lines; see GitHub link above)
```

#### 107. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L612` → after: `L7689-L7711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR7689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L7689-L7711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/251.js#L7689-L7711) · [Before (L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/251.js#L612)

```diff
-       Yk || (Yk = !0, lk.Mix = wk.l, lk.IsExponentOfTwo = wk.j, Kk.e.FallbackTexture = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBmRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAAQAAAATgAAAAAAAABgAAAAAQAAAGAAAAABcGFpbnQubmV0IDQuMC41AP/bAE … [truncated]
+       PC || (PC = !0, SC.Parse = pC)
+     }(QC = SC.prototype).eT ?? (QC.eT = (0, gC.f)("TransformNode", "eT")), (wC = SC.prototype).applyImpulse ?? (wC.applyImpulse = (0, gC.f)("TransformNode", "applyImpulse")), (bC = SC.prototype).applyAngularImpulse ?? (bC.applyAngularImpulse = (0, gC.f)("TransformNode", "applyAng … [truncated]
+   },
+   40229: (CC, zC, ZC) => {
+     function QC(CC, zC, ZC) {
+       try {
+         const QC = CC.next();
+         QC.done ? zC(QC) : QC.value ? QC.value.then((() => {
+           QC.value = void 0, zC(QC)
+         }), ZC) : zC(QC)
+       } catch (QC) {
+         ZC(QC)
+       }
+     }
+ 
+     function wC() {
+ ... (7 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/252.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/252.js` (112 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f)

#### 1. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4` → after: `L4-L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L4-L312) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L4)

```diff
-   40014: (kk, ek, ik) => {
+   39959: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => fC,
+       e: () => SC,
+       i: () => qC,
+       k: () => oC
+     });
+     var QC = ZC(39742),
+       wC = ZC(38507),
+       bC = ZC(39882),
+       nC = ZC(39783);
+     class fC {
+       get GJ() {
+         return this._isDisposed
+       }
+       constructor(CC, zC, ZC) {
+ ... (293 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L8` → after: `L316-L367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L316-L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L316-L367) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L8)

```diff
-     let Dk = !1
+     var QC = ZC(39663);
+     let wC = !1;
+ 
+     function bC() {
+       wC || (wC = !0, QC.ThinEngine.prototype.updateDynamicIndexBuffer = function(CC, zC) {
+         let ZC;
+         this._currentBoundBuffer[this._gl.ELEMENT_ARRAY_BUFFER] = null, this.bindIndexBuffer(CC), ZC = CC.is32Bits ? zC instanceof Uint32Array ? zC : new Uint32Array(zC) : zC instanceof Uint16Array ? zC : new Uint16Array(zC), this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, ZC, … [truncated]
+       }, QC.ThinEngine.prototype.updateDynamicVertexBuffer = function(CC, zC, ZC, QC) {
+         this.bindArrayBuffer(CC), void 0 === ZC && (ZC = 0);
+         const wC = zC.byteLength || zC.length;
+         void 0 === QC || QC >= wC && 0 === ZC ? zC instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, ZC, new Float32Array(zC)) : this._gl.bufferSubData(this._gl.ARRAY_BUFFER, ZC, zC) : zC instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, ZC, new Floa … [truncated]
+       })
+     }
+   },
+   39756: (CC, zC, ZC) => {
+     ZC.d(zC, {
+ ... (36 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L10` → after: `L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L369) · [Before (L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L10)

```diff
-   39564: (kk, ek, ik) => {
+   39721: (CC, zC, ZC) => {
```

#### 4. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L14-L20` → after: `L373-L378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L373-L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L373-L378) · [Before (L14-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L14-L20)

```diff
-     var Dk = ik(39566),
-       fk = ik(39570),
-       Sk = ik(36726),
-       bk = ik(36698),
-       rk = ik(36722),
-       Pk = ik(37497),
-       mk = ik(39583);
+     var QC = ZC(36987),
+       wC = ZC(39666),
+       bC = ZC(36985),
+       nC = ZC(38507),
+       fC = ZC(36977),
+       oC = ZC(39730);
```

#### 5. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L22-L23` → after: `L380-L382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L380-L382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L380-L382) · [Before (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L22-L23)

```diff
-       get wrapU() {
-         return this._wrapU
+       constructor() {
+         let CC = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
+         this._isDepthTestDirty = !1, this._isDepthMaskDirty = !1, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !1, this._isFrontFaceDirty = !1, CC && this.reset()
```

#### 6. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L25-L26` → after: `L384-L385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L384-L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L384-L385) · [Before (L25-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L25-L26)

```diff
-       set wrapU(kk) {
-         this._wrapU = kk
+       get isDirty() {
+         return this._isDepthFuncDirty || this._isDepthTestDirty || this._isDepthMaskDirty || this._isCullFaceDirty || this._isCullDirty || this._isZOffsetDirty || this._isFrontFaceDirty
```

#### 7. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L28-L29` → after: `L387-L388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L387-L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L387-L388) · [Before (L28-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L28-L29)

```diff
-       get wrapV() {
-         return this._wrapV
+       get zOffset() {
+         return this._zOffset
```

#### 8. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L31-L32` → after: `L390-L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L390-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L390-L391) · [Before (L31-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L31-L32)

```diff
-       set wrapV(kk) {
-         this._wrapV = kk
+       set zOffset(CC) {
+         this._zOffset !== CC && (this._zOffset = CC, this._isZOffsetDirty = !0)
```

#### 9. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L34-L35` → after: `L393-L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L393-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L393-L394) · [Before (L34-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L34-L35)

```diff
-       get coordinatesMode() {
-         return 0
+       get zOffsetUnits() {
+         return this._zOffsetUnits
```

#### 10. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L37-L38` → after: `L396-L397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L396-L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L396-L397) · [Before (L37-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L37-L38)

```diff
-       get isCube() {
-         return !!this._texture && this._texture.isCube
+       set zOffsetUnits(CC) {
+         this._zOffsetUnits !== CC && (this._zOffsetUnits = CC, this._isZOffsetDirty = !0)
```

#### 11. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L40-L41` → after: `L399-L400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L399-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L399-L400) · [Before (L40-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L40-L41)

```diff
-       set isCube(kk) {
-         this._texture && (this._texture.isCube = kk)
+       get cullFace() {
+         return this._cullFace
```

#### 12. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L43-L44` → after: `L402-L403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L402-L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L402-L403) · [Before (L43-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L43-L44)

```diff
-       get is3D() {
-         return !!this._texture && this._texture.is3D
+       set cullFace(CC) {
+         this._cullFace !== CC && (this._cullFace = CC, this._isCullFaceDirty = !0)
```

#### 13. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L46-L47` → after: `L405-L406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L405-L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L405-L406) · [Before (L46-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L46-L47)

```diff
-       set is3D(kk) {
-         this._texture && (this._texture.is3D = kk)
+       get cull() {
+         return this._cull
```

#### 14. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L49-L50` → after: `L408-L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L408-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L408-L409) · [Before (L49-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L49-L50)

```diff
-       get is2DArray() {
-         return !!this._texture && this._texture.is2DArray
+       set cull(CC) {
+         this._cull !== CC && (this._cull = CC, this._isCullDirty = !0)
```

#### 15. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L52-L53` → after: `L411-L412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L411-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L411-L412) · [Before (L52-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L52-L53)

```diff
-       set is2DArray(kk) {
-         this._texture && (this._texture.is2DArray = kk)
+       get depthFunc() {
+         return this._depthFunc
```

#### 16. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L55-L56` → after: `L414-L415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L414-L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L414-L415) · [Before (L55-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L55-L56)

```diff
-       getClassName() {
-         return "ThinTexture"
+       set depthFunc(CC) {
+         this._depthFunc !== CC && (this._depthFunc = CC, this._isDepthFuncDirty = !0)
```

#### 17. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L58-L59` → after: `L417-L418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L417-L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L417-L418) · [Before (L58-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L58-L59)

```diff
-       static _IsRenderTargetWrapper(kk) {
-         return void 0 !== kk?.shareDepth
+       get depthMask() {
+         return this._depthMask
```

#### 18. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L61-L62` → after: `L420-L421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L420-L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L420-L421) · [Before (L61-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L61-L62)

```diff
-       constructor(kk) {
-         this._wrapU = 1, this._wrapV = 1, this.wrapR = 1, this.anisotropicFilteringLevel = 4, this.delayLoadState = 0, this._texture = null, this._engine = null, this._cachedSize = mk.c.Zero(), this._cachedBaseSize = mk.c.Zero(), this._initialSamplingMode = 2, this._texture = Mk. … [truncated]
+       set depthMask(CC) {
+         this._depthMask !== CC && (this._depthMask = CC, this._isDepthMaskDirty = !0)
```

#### 19. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L64-L65` → after: `L423-L424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L423-L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L423-L424) · [Before (L64-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L64-L65)

```diff
-       isReady() {
-         return 4 === this.delayLoadState ? (this.delayLoad(), !1) : !!this._texture && this._texture.isReady
+       get depthTest() {
+         return this._depthTest
```

#### 20. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L67-L69` → after: `L426-L427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L426-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L426-L427) · [Before (L67-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L67-L69)

```diff
-       delayLoad() {}
-       getInternalTexture() {
-         return this._texture
+       set depthTest(CC) {
+         this._depthTest !== CC && (this._depthTest = CC, this._isDepthTestDirty = !0)
```

#### 21. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L71-L76` → after: `L429-L430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L429-L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L429-L430) · [Before (L71-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L71-L76)

```diff
-       getSize() {
-         if (this._texture) {
-           if (this._texture.width) return this._cachedSize.width = this._texture.width, this._cachedSize.height = this._texture.height, this._cachedSize;
-           if (this._texture._size) return this._cachedSize.width = this._texture._size, this._cachedSize.height = this._texture._size, this._cachedSize
-         }
-         return this._cachedSize
+       get frontFace() {
+         return this._frontFace
```

#### 22. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L78-L79` → after: `L432-L433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L432-L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L432-L433) · [Before (L78-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L78-L79)

```diff
-       getBaseSize() {
-         return this.isReady() && this._texture ? this._texture._size ? (this._cachedBaseSize.width = this._texture._size, this._cachedBaseSize.height = this._texture._size, this._cachedBaseSize) : (this._cachedBaseSize.width = this._texture.baseWidth, this._cachedBaseSize.height  … [truncated]
+       set frontFace(CC) {
+         this._frontFace !== CC && (this._frontFace = CC, this._isFrontFaceDirty = !0)
```

#### 23. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L81-L82` → after: `L435-L436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L435-L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L435-L436) · [Before (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L81-L82)

```diff
-       get samplingMode() {
-         return this._texture ? this._texture.samplingMode : this._initialSamplingMode
+       reset() {
+         this._depthMask = !0, this._depthTest = !0, this._depthFunc = null, this._cullFace = null, this._cull = null, this._zOffset = 0, this._zOffsetUnits = 0, this._frontFace = null, this._isDepthTestDirty = !0, this._isDepthMaskDirty = !0, this._isDepthFuncDirty = !1, this._is … [truncated]
```

#### 24. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L84-L86` → after: `L438-L439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L438-L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L438-L439) · [Before (L84-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L84-L86)

```diff
-       updateSamplingMode(kk) {
-         let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         this._texture && this._engine && this._engine.updateTextureSamplingMode(kk, this._texture, this._texture.generateMipMaps && ek)
+       apply(CC) {
+         this.isDirty && (this._isCullDirty && (this.cull ? CC.enable(CC.CULL_FACE) : CC.disable(CC.CULL_FACE), this._isCullDirty = !1), this._isCullFaceDirty && (CC.cullFace(this.cullFace), this._isCullFaceDirty = !1), this._isDepthMaskDirty && (CC.depthMask(this.depthMask), this … [truncated]
```

#### 25. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L88-L89` → after: `L441-L444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L441-L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L441-L444) · [Before (L88-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L88-L89)

```diff
-       releaseInternalTexture() {
-         this._texture && (this._texture.dispose(), this._texture = null)
+     }
+     class FC {
+       get isDirty() {
+         return this._isStencilTestDirty || this._isStencilMaskDirty || this._isStencilFuncDirty || this._isStencilOpDirty
```

#### 26. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L91-L92` → after: `L446-L528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L446-L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L446-L528) · [Before (L91-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L91-L92)

```diff
-       dispose() {
-         this._texture && (this.releaseInternalTexture(), this._engine = null)
+       get func() {
+         return this._func
+       }
+       set func(CC) {
+         this._func !== CC && (this._func = CC, this._isStencilFuncDirty = !0)
+       }
+       get backFunc() {
+         return this._func
+       }
+       set backFunc(CC) {
+         this._backFunc !== CC && (this._backFunc = CC, this._isStencilFuncDirty = !0)
+       }
+       get funcRef() {
+         return this._funcRef
+       }
+       set funcRef(CC) {
+ ... (67 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L95-L139` → after: `L531-L680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L531-L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L531-L680) · [Before (L95-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L95-L139)

```diff
-     var Kk, xk = ik(39585),
-       nk = ik(39447);
-     let Uk = (() => {
-       var kk;
-       let ek, ik, mk, Kk, nk, Uk, Hk, wk, lk, pk, yk, Yk, Lk, Ck, Ak, jk, sk, dk, Vk, Fk, uk, qk, Ik, zk, Qk, vk = Mk,
-         Ek = [],
-         hk = [],
-         ak = [],
-         Wk = [],
-         tk = [],
-         Xk = [],
-         Bk = [],
-         ck = [],
-         Tk = [],
-         Zk = [],
-         Ok = [],
- ... (29 more removed lines; see GitHub link above)
+     class WC {
+       constructor() {
+         this.reset()
+       }
+       reset() {
+         this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = WC.ALWAYS, this.opStencilFail = WC.KEEP, this.opDepthFail = WC.KEEP, this.opStencilDepthPass = WC.REPLACE, this.backFunc = WC.ALWAYS, this.backOpStencilFail = WC.KEEP, this.backOpDepthF … [truncated]
+       }
+       get stencilFunc() {
+         return this.func
+       }
+       set stencilFunc(CC) {
+         this.func = CC
+       }
+       get stencilBackFunc() {
+         return this.backFunc
+       }
+ ... (134 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L141-L142` → after: `L682-L694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L682-L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L682-L694) · [Before (L141-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L141-L142)

```diff
-         get getAlphaFromRGB() {
-           return this._getAlphaFromRGB
+       }
+       _rebuildInternalTextures() {
+         const CC = this._internalTexturesCache.slice();
+         for (const zC of CC) zC._rebuild()
+       }
+       _rebuildRenderTargetWrappers() {
+         const CC = this._renderTargetWrapperCache.slice();
+         for (const zC of CC) zC.textures?.some((CC => 15 === CC.source)) || zC._rebuild()
+       }
+       _rebuildEffects() {
+         for (const CC in this._compiledEffects) {
+           const zC = this._compiledEffects[CC];
+           zC._pipelineContext = null, zC._prepareEffect()
```

#### 29. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L144-L145` → after: `L696-L741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L696-L741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L696-L741) · [Before (L144-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L144-L145)

```diff
-         set coordinatesIndex(kk) {
-           this._coordinatesIndex !== kk && (this._coordinatesIndex = kk, this._scene && this._scene.markAllMaterialsAsDirty(1, (kk => kk.hasTexture(this))))
+         wC.b.ResetCache()
+       }
+       _rebuildGraphicsResources() {
+         this.wipeCaches(!0), this._rebuildEffects(), this._rebuildComputeEffects?.(), this._rebuildBuffers(), this._rebuildInternalTextures(), this._rebuildTextures(), this._rebuildRenderTargetWrappers(), this.wipeCaches(!0)
+       }
+       _flagContextRestored() {
+         nC.c.Warn(this.name + " context successfully restored."), this.Yg.notifyObservers(this), this._contextWasLost = !1
+       }
+       _restoreEngineAfterContextLost(CC) {
+         setTimeout((() => {
+           this._clearEmptyResources();
+           const zC = this._depthCullingState.depthTest,
+             ZC = this._depthCullingState.depthFunc,
+             QC = this._depthCullingState.depthMask,
+             wC = this._stencilState.stencilTest;
+           CC(), this._rebuildGraphicsResources(), this._depthCullingState.depthTest = zC, this._depthCullingState.depthFunc = ZC, this._depthCullingState.depthMask = QC, this._stencilState.stencilTest = wC, this._flagContextRestored()
+ ... (30 more added lines; see GitHub link above)
```

#### 30. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L147-L148` → after: `L743-L773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L743-L773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L743-L773) · [Before (L147-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L147-L148)

```diff
-         get coordinatesIndex() {
-           return this._coordinatesIndex
+         return this._emptyCubeTexture
+       }
+       set framebufferDimensionsObject(CC) {
+         this._framebufferDimensionsObject = CC
+       }
+       get activeRenderLoops() {
+         return this._activeRenderLoops
+       }
+       stopRenderLoop(CC) {
+         if (!CC) return this._activeRenderLoops.length = 0, void this._cancelFrame();
+         const zC = this._activeRenderLoops.indexOf(CC);
+         zC >= 0 && (this._activeRenderLoops.splice(zC, 1), 0 == this._activeRenderLoops.length && this._cancelFrame())
+       }
+       _cancelFrame() {
+         if (this.customAnimationFrameRequester) {
+           if (0 !== this._frameHandler) {
+ ... (15 more added lines; see GitHub link above)
```

#### 31. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L150-L151` → after: `L775-L796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L775-L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L775-L796) · [Before (L150-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L150-L151)

```diff
-         set coordinatesMode(kk) {
-           this._coordinatesMode !== kk && (this._coordinatesMode = kk, this._scene && this._scene.markAllMaterialsAsDirty(1, (kk => kk.hasTexture(this))))
+       }
+       jR() {
+         this.onBeginFrameObservable.notifyObservers(this)
+       }
+       yR() {
+         this._frameId++, this.onEndFrameObservable.notifyObservers(this)
+       }
+       get maxFPS() {
+         return this._maxFPS
+       }
+       set maxFPS(CC) {
+         this._maxFPS = CC, void 0 !== CC && (this._minFrameTime = CC <= 0 ? Number.MAX_VALUE : 1e3 / CC)
+       }
+       _isOverFrameTime(CC) {
+         if (!CC || void 0 === this._maxFPS) return !1;
+         const zC = CC - this._lastFrameTime;
+ ... (6 more added lines; see GitHub link above)
```

#### 32. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L153-L154` → after: `L798-L804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L798-L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L798-L804) · [Before (L153-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L153-L154)

```diff
-         get coordinatesMode() {
-           return this._coordinatesMode
+       }
+       _renderLoop(CC) {
+         this._processFrame(CC), this._activeRenderLoops.length > 0 && 0 === this._frameHandler && this._queueNewFrameForRenderLoop()
+       }
+       _renderFrame() {
+         for (let CC = 0; CC < this._activeRenderLoops.length; CC++) {
+           (0, this._activeRenderLoops[CC])()
```

#### 33. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L156-L184` → after: `L806-L943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L806-L943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L806-L943) · [Before (L156-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L156-L184)

```diff
-         get wrapU() {
-           return this._wrapU
-         }
-         set wrapU(kk) {
-           this._wrapU = kk
-         }
-         get wrapV() {
-           return this._wrapV
-         }
-         set wrapV(kk) {
-           this._wrapV = kk
-         }
-         get isCube() {
-           return this._texture ? this._texture.isCube : this._isCube
-         }
-         set isCube(kk) {
- ... (13 more removed lines; see GitHub link above)
+       }
+       _renderViews() {
+         return !1
+       }
+       _queueNewFrame(CC, zC) {
+         return PC(CC, zC)
+       }
+       _queueNewFrameForRenderLoop() {
+         this.customAnimationFrameRequester ? (this.customAnimationFrameRequester.lg = this._queueNewFrame(this.customAnimationFrameRequester.renderFunction || this._boundRenderFunction, this.customAnimationFrameRequester), this._frameHandler = this.customAnimationFrameRequester.l … [truncated]
+       }
+       runRenderLoop(CC) {
+         -1 === this._activeRenderLoops.indexOf(CC) && (this._activeRenderLoops.push(CC), 1 === this._activeRenderLoops.length && 0 === this._frameHandler && this._queueNewFrameForRenderLoop())
+       }
+       getDepthBuffer() {
+         return this._depthCullingState.depthTest
+       }
+ ... (122 more added lines; see GitHub link above)
```

#### 34. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L186-L187` → after: `L945-L1026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L945-L1026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L945-L1026) · [Before (L186-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L186-L187)

```diff
-         get gammaSpace() {
-           return this._texture ? (null === this._texture._gammaSpace && (this._texture._gammaSpace = this._gammaSpace), this._texture._gammaSpace && !this._texture._useSRGBBuffer) : this._gammaSpace
+         return IC
+       }
+       _rebuildBuffers() {
+         for (const CC of this._uniformBuffers) CC._rebuildAfterContextLost()
+       }
+       get _shouldUseHighPrecisionShader() {
+         return !(!this._caps.highPrecisionShaderSupported || !this._highPrecisionShadersAllowed)
+       }
+       getHostDocument() {
+         return this._renderingCanvas && this._renderingCanvas.ownerDocument ? this._renderingCanvas.ownerDocument : (0, SC.f)() ? document : null
+       }
+       getLoadedTexturesCache() {
+         return this._internalTexturesCache
+       }
+       clearInternalTexturesCache() {
+         this._internalTexturesCache.length = 0
+ ... (66 more added lines; see GitHub link above)
```

#### 35. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L189-L195` → after: `L1028-L1045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1028-L1045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L1028-L1045) · [Before (L189-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L189-L195)

```diff
-         set gammaSpace(kk) {
-           if (this._texture) {
-             if (this._texture._gammaSpace === kk) return;
-             this._texture._gammaSpace = kk
-           } else {
-             if (this._gammaSpace === kk) return;
-             this._gammaSpace = kk
+         if ((0, SC.k)() && (0, SC.f)())
+           if (this._renderingCanvas) {
+             const ZC = this._renderingCanvas.getBoundingClientRect?.();
+             CC = this._renderingCanvas.clientWidth || ZC?.width || this._renderingCanvas.width * this._hardwareScalingLevel || 100, zC = this._renderingCanvas.clientHeight || ZC?.height || this._renderingCanvas.height * this._hardwareScalingLevel || 100
+           } else CC = window.innerWidth, zC = window.innerHeight;
+         else CC = this._renderingCanvas ? this._renderingCanvas.width : 100, zC = this._renderingCanvas ? this._renderingCanvas.height : 100;
+         this.setSize(CC / this._hardwareScalingLevel, zC / this._hardwareScalingLevel, ZC)
+       }
+       setSize(CC, zC) {
+         let ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+         if (!this._renderingCanvas) return !1;
+         if (CC |= 0, zC |= 0, !ZC && this._renderingCanvas.width === CC && this._renderingCanvas.height === zC) return !1;
+         if (this._renderingCanvas.width = CC, this._renderingCanvas.height = zC, this.scenes) {
+           for (let CC = 0; CC < this.scenes.length; CC++) {
+             const zC = this.scenes[CC];
+             for (let CC = 0; CC < zC.cameras.length; CC++) {
+ ... (2 more added lines; see GitHub link above)
```

#### 36. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L197-L206` → after: `L1047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L1047) · [Before (L197-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L197-L206)

```diff
-           this.XF()?.markAllMaterialsAsDirty(1, (kk => kk.hasTexture(this)))
-         }
-         get isRGBD() {
-           return null != this._texture && this._texture._isRGBD
-         }
-         set isRGBD(kk) {
-           kk !== this.isRGBD && (this._texture && (this._texture._isRGBD = kk), this.XF()?.markAllMaterialsAsDirty(1, (kk => kk.hasTexture(this))))
-         }
-         get noMipmap() {
-           return !1
+           this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this)
```

#### 37. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L208-L212` → after: `L1049-L1144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1049-L1144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L1049-L1144) · [Before (L208-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L208-L212)

```diff
-         get lodGenerationOffset() {
-           return this._texture ? this._texture._lodGenerationOffset : 0
-         }
-         set lodGenerationOffset(kk) {
-           this._texture && (this._texture._lodGenerationOffset = kk)
+         return !0
+       }
+       createRawTexture(CC, zC, ZC, QC, wC, bC, nC, fC, oC, qC, FC, WC) {
+         throw (0, MC.i)("engine.rawTexture")
+       }
+       createRawCubeTexture(CC, zC, ZC, QC, wC, bC, nC, fC) {
+         throw (0, MC.i)("engine.rawTexture")
+       }
+       createRawTexture3D(CC, zC, ZC, QC, wC, bC, nC, fC, oC, qC, FC) {
+         throw (0, MC.i)("engine.rawTexture")
+       }
+       createRawTexture2DArray(CC, zC, ZC, QC, wC, bC, nC, fC, oC, qC, FC, WC) {
+         throw (0, MC.i)("engine.rawTexture")
+       }
+       _sharedInit(CC) {
+         this._renderingCanvas = CC
+ ... (80 more added lines; see GitHub link above)
```

#### 38. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L214-L215` → after: `L1146-L1208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1146-L1208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L1146-L1208) · [Before (L214-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L214-L215)

```diff
-         get lodGenerationScale() {
-           return this._texture ? this._texture._lodGenerationScale : 0
+       }
+       static GetCompatibleTextureLoader(CC, zC) {
+         return null
+       }
+     }
+     GC._RenderPassIdCounter = 0, GC._RescalePostProcessFactory = null, GC.CollisionsEpsilon = .001, GC.QueueNewFrame = PC
+   },
+   39674: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       b: () => QC
+     });
+     class QC {
+       static GetShadersRepository() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? QC.ShadersRepository : QC.ShadersRepositoryWGSL
+       }
+       static GetShadersStore() {
+ ... (47 more added lines; see GitHub link above)
```

#### 39. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L217-L218` → after: `L1210-L1230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1210-L1230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L1210-L1230) · [Before (L217-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L217-L218)

```diff
-         set lodGenerationScale(kk) {
-           this._texture && (this._texture._lodGenerationScale = kk)
+         wC.forEach(((CC, zC) => {
+           bC[CC] = zC
+         }));
+         for (const FC of oC.getAttributes(this, nC)) fC.push(FC)
+       }
+       dispose() {
+         this._uniforms = {}, this._isDisposed = !0
+       }
+       _cacheMatrix(CC, zC) {
+         const ZC = this._valueCache[CC],
+           QC = zC.updateFlag;
+         if (void 0 !== ZC && ZC === QC) return !1;
+         const wC = zC.VZC();
+         let bC = this._matrixValueCache[CC];
+         if (void 0 !== ZC && null !== ZC && void 0 !== bC) {
+           let zC = !0;
+ ... (5 more added lines; see GitHub link above)
```

#### 40. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L220-L221` → after: `L1232-L1435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1232-L1435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L1232-L1435) · [Before (L220-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L220-L221)

```diff
-         get linearSpecularLOD() {
-           return !!this._texture && this._texture._linearSpecularLOD
+         return void 0 === bC && (bC = this._matrixValueCache[CC] = new Float32Array(16)), bC.set(wC), this._valueCache[CC] = QC, !0
+       }
+       _cacheFloat2(CC, zC, ZC) {
+         let QC = this._valueCache[CC];
+         if (!QC || 2 !== QC.length) return QC = [zC, ZC], this._valueCache[CC] = QC, !0;
+         let wC = !1;
+         return QC[0] !== zC && (QC[0] = zC, wC = !0), QC[1] !== ZC && (QC[1] = ZC, wC = !0), wC
+       }
+       _cacheFloat3(CC, zC, ZC, QC) {
+         let wC = this._valueCache[CC];
+         if (!wC || 3 !== wC.length) return wC = [zC, ZC, QC], this._valueCache[CC] = wC, !0;
+         let bC = !1;
+         return wC[0] !== zC && (wC[0] = zC, bC = !0), wC[1] !== ZC && (wC[1] = ZC, bC = !0), wC[2] !== QC && (wC[2] = QC, bC = !0), bC
+       }
+       _cacheFloat4(CC, zC, ZC, QC, wC) {
+         let bC = this._valueCache[CC];
+ ... (188 more added lines; see GitHub link above)
```

#### 41. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L223-L224` → after: `L1437-L1439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1437-L1439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L1437-L1439) · [Before (L223-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L223-L224)

```diff
-         set linearSpecularLOD(kk) {
-           this._texture && (this._texture._linearSpecularLOD = kk)
+         if (!zC.getShaderParameter(bC, zC.COMPILE_STATUS)) {
+           const ZC = zC.getShaderInfoLog(bC);
+           if (ZC) throw CC.fragmentCompilationError = ZC, new Error("FRAGMENT SHADER " + ZC)
```

#### 42. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L226-L227` → after: `L1441-L1448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1441-L1448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L1441-L1448) · [Before (L226-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L226-L227)

```diff
-         get irradianceTexture() {
-           return this._texture ? this._texture._irradianceTexture : null
+         const ZC = QC.getProgramInfoLog(nC);
+         if (ZC) throw CC.programLinkError = ZC, new Error(ZC)
+       }
+       if (ZC) {
+         QC.validateProgram(nC);
+         if (!QC.getProgramParameter(nC, QC.VALIDATE_STATUS)) {
+           const zC = QC.getProgramInfoLog(nC);
+           if (zC) throw CC.programValidationError = zC, new Error(zC)
```

#### 43. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L229-L230` → after: `L1450-L1509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1450-L1509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L1450-L1509) · [Before (L229-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L229-L230)

```diff
-         set irradianceTexture(kk) {
-           this._texture && (this._texture._irradianceTexture = kk)
+       }
+       QC.deleteShader(wC), QC.deleteShader(bC), CC.vertexShader = void 0, CC.fragmentShader = void 0, CC.onCompiled && (CC.onCompiled(), CC.onCompiled = void 0)
+     }
+ 
+     function SC(CC, zC, ZC, QC, wC, bC, nC, oC, WC) {
+       let NC = arguments.length > 10 ? arguments[10] : void 0,
+         MC = arguments.length > 11 ? arguments[11] : void 0,
+         gC = arguments.length > 12 ? arguments[12] : void 0;
+       const SC = fC(CC.context);
+       MC || (MC = SC.createRawShaderProgramInjection ?? qC), gC || (gC = SC.createShaderProgramInjection ?? FC);
+       const pC = CC;
+       pC.program = QC ? MC(pC, zC, ZC, pC.context, WC) : gC(pC, zC, ZC, oC, pC.context, WC), pC.program.__SPECTOR_rebuildProgram = nC, NC()
+     }
+ 
+     function pC(CC, zC, ZC, QC, bC, nC) {
+       return PC((0, wC.h)(CC, ZC, QC), zC, bC, nC)
+ ... (44 more added lines; see GitHub link above)
```

#### 44. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L232-L233` → after: `L1511-L1537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1511-L1537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L1511-L1537) · [Before (L232-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L232-L233)

```diff
-         get uid() {
-           return this._uid || (this._uid = (0, Pk.b)()), this._uid
+         return CC
+       }
+     }
+     const FC = /(flat\s)?\s*varying\s*.*/;
+     class WC {
+       constructor() {
+         this.shaderLanguage = 0
+       }
+       attributeProcessor(CC) {
+         return CC.replace("attribute", "in")
+       }
+       varyingCheck(CC, zC) {
+         return FC.test(CC)
+       }
+       varyingProcessor(CC, zC) {
+         return CC.replace("varying", zC ? "in" : "out")
+ ... (11 more added lines; see GitHub link above)
```

#### 45. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L235-L236` → after: `L1539-L1637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1539-L1637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L1539-L1637) · [Before (L235-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L235-L236)

```diff
-         toString() {
-           return this.name
+         return CC
+       }
+     }
+     var NC = ZC(39740),
+       MC = ZC(39747),
+       gC = ZC(39756),
+       SC = ZC(39650),
+       pC = ZC(39692),
+       PC = ZC(39676),
+       GC = ZC(39758),
+       RC = ZC(39735);
+     class AC {}
+     class xC extends bC.b {
+       get name() {
+         return this._name
+       }
+ ... (83 more added lines; see GitHub link above)
```

#### 46. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L238-L239` → after: `L1639-L1655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1639-L1655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L1639-L1655) · [Before (L238-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L238-L239)

```diff
-         getClassName() {
-           return "BaseTexture"
+         this._sharedInit(bC), this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), void 0 !== ZC.useHighPrecisionFloats && (this._highPrecisionShadersAllowed = ZC.useHighPrecisionFloats), this.resize(), this._initGLContext(), this._initFeatures();
+         for (let wC = 0; wC < this._caps.maxVertexAttribs; wC++) this._currentBufferPointers[wC] = new AC;
+         this._shaderProcessor = this.fS > 1 ? new WC : new qC;
+         const nC = `Babylon.js v${xC.Version}`;
+         fC.c.Log(nC + ` - ${this.description}`), this._renderingCanvas && this._renderingCanvas.setAttribute && this._renderingCanvas.setAttribute("data-engine", nC);
+         const oC = (0, wC.z)(this._gl);
+         oC.validateShaderPrograms = this.validateShaderPrograms, oC.parallelShaderCompile = this._caps.parallelShaderCompile
+       }
+       _clearEmptyResources() {
+         this._dummyFramebuffer = null, super._clearEmptyResources()
+       }
+       _getShaderProcessingContext(CC) {
+         return null
+       }
+       areAllEffectsReady() {
+         for (const CC in this._compiledEffects) {
+ ... (1 more added lines; see GitHub link above)
```

#### 47. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L241-L242` → after: `L1657-L1733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1657-L1733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L1657-L1733) · [Before (L241-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L241-L242)

```diff
-         set onDispose(kk) {
-           this._onDisposeObserver && this.ZF.remove(this._onDisposeObserver), this._onDisposeObserver = this.ZF.add(kk)
+         return !0
+       }
+       _initGLContext() {
+         this._caps = {
+           maxTexturesImageUnits: this._gl.getParameter(this._gl.MAX_TEXTURE_IMAGE_UNITS),
+           maxCombinedTexturesImageUnits: this._gl.getParameter(this._gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
+           maxVertexTextureImageUnits: this._gl.getParameter(this._gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
+           maxTextureSize: this._gl.getParameter(this._gl.MAX_TEXTURE_SIZE),
+           maxSamples: this._webGLVersion > 1 ? this._gl.getParameter(this._gl.MAX_SAMPLES) : 1,
+           maxCubemapTextureSize: this._gl.getParameter(this._gl.MAX_CUBE_MAP_TEXTURE_SIZE),
+           maxRenderTextureSize: this._gl.getParameter(this._gl.MAX_RENDERBUFFER_SIZE),
+           maxVertexAttribs: this._gl.getParameter(this._gl.MAX_VERTEX_ATTRIBS),
+           maxVaryingVectors: this._gl.getParameter(this._gl.MAX_VARYING_VECTORS),
+           maxFragmentUniformVectors: this._gl.getParameter(this._gl.MAX_FRAGMENT_UNIFORM_VECTORS),
+           maxVertexUniformVectors: this._gl.getParameter(this._gl.MAX_VERTEX_UNIFORM_VECTORS),
+           shaderFloatPrecision: 0,
+ ... (61 more added lines; see GitHub link above)
```

#### 48. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L244-L245` → after: `L1735-L1738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1735-L1738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L1735-L1738) · [Before (L244-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L244-L245)

```diff
-         get isBlocking() {
-           return !0
+         if (this._webGLVersion > 1) this._caps.depthTextureExtension = !0;
+         else {
+           const CC = this._gl.getExtension("WEBGL_depth_texture");
+           null != CC && (this._caps.depthTextureExtension = !0, this._gl.UNSIGNED_INT_24_8 = CC.UNSIGNED_INT_24_8_WEBGL)
```

#### 49. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L247-L248` → after: `L1740-L1744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1740-L1744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L1740-L1744) · [Before (L247-L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L247-L248)

```diff
-         get loadingError() {
-           return this._loadingError
+         if (this.disableVertexArrayObjects) this._caps.vertexArrayObject = !1;
+         else if (this._webGLVersion > 1) this._caps.vertexArrayObject = !0;
+         else {
+           const CC = this._gl.getExtension("OES_vertex_array_object");
+           null != CC && (this._caps.vertexArrayObject = !0, this._gl.createVertexArray = CC.createVertexArrayOES.bind(CC), this._gl.bindVertexArray = CC.bindVertexArrayOES.bind(CC), this._gl.deleteVertexArray = CC.deleteVertexArrayOES.bind(CC))
```

#### 50. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L250-L251` → after: `L1746-L1749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1746-L1749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L1746-L1749) · [Before (L250-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L250-L251)

```diff
-         get errorObject() {
-           return this._errorObject
+         if (this._webGLVersion > 1) this._caps.instancedArrays = !0;
+         else {
+           const CC = this._gl.getExtension("ANGLE_instanced_arrays");
+           null != CC ? (this._caps.instancedArrays = !0, this._gl.drawArraysInstanced = CC.drawArraysInstancedANGLE.bind(CC), this._gl.drawElementsInstanced = CC.drawElementsInstancedANGLE.bind(CC), this._gl.vertexAttribDivisor = CC.vertexAttribDivisorANGLE.bind(CC)) : this._caps … [truncated]
```

#### 51. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L253-L255` → after: `L1751-L1759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1751-L1759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L1751-L1759) · [Before (L253-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L253-L255)

```diff
-         constructor(ek) {
-           let ik = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
-           super(null), this.uniqueId = ((0, Dk.e)(this, Ek), (0, Dk.e)(this, hk, void 0)), this.name = ((0, Dk.e)(this, ak), (0, Dk.e)(this, Wk, void 0)), this.displayName = ((0, Dk.e)(this, tk), (0, Dk.e)(this, Xk, void 0)), this.metadata = ((0, Dk.e)(this, Bk), (0, Dk.e)(this,  … [truncated]
+         if (this._gl.getShaderPrecisionFormat) {
+           const CC = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.HIGH_FLOAT),
+             zC = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.HIGH_FLOAT);
+           if (CC && zC && (this._caps.highPrecisionShaderSupported = 0 !== CC.precision && 0 !== zC.precision, this._caps.shaderFloatPrecision = Math.min(CC.precision, zC.precision)), !this._shouldUseHighPrecisionShader) {
+             const CC = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.MEDIUM_FLOAT),
+               zC = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.MEDIUM_FLOAT);
+             CC && zC && (this._caps.shaderFloatPrecision = Math.min(CC.precision, zC.precision))
+           }
+           this._caps.shaderFloatPrecision < 10 && (this._caps.shaderFloatPrecision = 10)
```

#### 52. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L257-L258` → after: `L1761-L1764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1761-L1764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L1761-L1764) · [Before (L257-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L257-L258)

```diff
-         XF() {
-           return this._scene
+         if (this._webGLVersion > 1) this._caps.blendMinMax = !0;
+         else {
+           const CC = this._gl.getExtension("EXT_blend_minmax");
+           null != CC && (this._caps.blendMinMax = !0, this._gl.MAX = CC.MAX_EXT, this._gl.MIN = CC.MIN_EXT)
```

#### 53. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L260-L261` → after: `L1766-L1783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1766-L1783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L1766-L1783) · [Before (L260-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L260-L261)

```diff
-         _getEngine() {
-           return this._engine
+         if (!this._caps.supportSRGBBuffers) {
+           if (this._webGLVersion > 1) this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
+             SRGB: WebGL2RenderingContext.SRGB,
+             SRGB8: WebGL2RenderingContext.SRGB8,
+             SRGB8_ALPHA8: WebGL2RenderingContext.SRGB8_ALPHA8
+           };
+           else {
+             const CC = this._gl.getExtension("EXT_sRGB");
+             null != CC && (this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
+               SRGB: CC.SRGB_EXT,
+               SRGB8: CC.SRGB_ALPHA_EXT,
+               SRGB8_ALPHA8: CC.SRGB_ALPHA_EXT
+             })
+           }
+           if (this._creationOptions) {
+             const CC = this._creationOptions.forceSRGBBufferSupportState;
+ ... (2 more added lines; see GitHub link above)
```

#### 54. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L263-L264` → after: `L1785-L1816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1785-L1816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L1785-L1816) · [Before (L263-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L263-L264)

```diff
-         getTextureMatrix() {
-           return bk.b.IdentityReadOnly
+         this._depthCullingState.depthTest = !0, this._depthCullingState.depthFunc = this._gl.LEQUAL, this._depthCullingState.depthMask = !0, this._maxSimultaneousTextures = this._caps.maxCombinedTexturesImageUnits;
+         for (let ZC = 0; ZC < this._maxSimultaneousTextures; ZC++) this._nextFreeTextureSlots.push(ZC);
+         "Mali-G72" === this._glRenderer && (this._caps.disableMorphTargetTexture = !0)
+       }
+       _initFeatures() {
+         this._features = {
+           forceBitmapOverHTMLImageElement: "undefined" === typeof HTMLImageElement,
+           supportRenderAndCopyToLodForFloatTextures: 1 !== this._webGLVersion,
+           supportDepthStencilTexture: 1 !== this._webGLVersion,
+           supportShadowSamplers: 1 !== this._webGLVersion,
+           uniformBufferHardCheckMatrix: !1,
+           allowTexturePrefiltering: 1 !== this._webGLVersion,
+           trackUbosInFrame: !1,
+           checkUbosContentBeforeUpload: !1,
+           supportCSM: 1 !== this._webGLVersion,
+           basisNeedsPOT: 1 === this._webGLVersion,
+ ... (16 more added lines; see GitHub link above)
```

#### 55. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L266-L267` → after: `L1818-L1838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1818-L1838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L1818-L1838) · [Before (L266-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L266-L267)

```diff
-         getReflectionTextureMatrix() {
-           return bk.b.IdentityReadOnly
+       }
+       get fS() {
+         return this._webGLVersion
+       }
+       getClassName() {
+         return "ThinEngine"
+       }
+       _prepareWorkingCanvas() {
+         if (this._workingCanvas) return;
+         this._workingCanvas = this.createCanvas(1, 1);
+         const CC = this._workingCanvas.getContext("2d");
+         CC && (this._workingContext = CC)
+       }
+       getInfo() {
+         return this.getGlInfo()
+       }
+ ... (5 more added lines; see GitHub link above)
```

#### 56. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L269-L270` → after: `L1840-L1866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1840-L1866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L1840-L1866) · [Before (L269-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L269-L270)

```diff
-         getRefractionTextureMatrix() {
-           return this.getReflectionTextureMatrix()
+       }
+       extractDriverInfo() {
+         const CC = this.getGlInfo();
+         return CC && CC.renderer ? CC.renderer : ""
+       }
+       getRenderWidth() {
+         return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferWidth : this._gl.drawingBufferWidth
+       }
+       getRenderHeight() {
+         return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferHeight : this._gl.drawingBufferHeight
+       }
+       clear(CC, zC, ZC) {
+         let QC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
+           wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
+         const bC = this.stencilStateComposer.useStencilGlobalOnly;
+         this.stencilStateComposer.useStencilGlobalOnly = !0, this.applyStates(), this.stencilStateComposer.useStencilGlobalOnly = bC;
+ ... (11 more added lines; see GitHub link above)
```

#### 57. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L272-L273` → after: `L1868-L1874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1868-L1874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L1868-L1874) · [Before (L272-L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L272-L273)

```diff
-         isReadyOrNotBlocking() {
-           return !this.isBlocking || this.isReady() || this.loadingError
+         ZC && (this.BZC ? (this._depthCullingState.depthFunc = this._gl.GEQUAL, this._gl.clearDepth(0)) : this._gl.clearDepth(1), nC |= this._gl.DEPTH_BUFFER_BIT), QC && (this._gl.clearStencil(wC), nC |= this._gl.STENCIL_BUFFER_BIT), this._gl.clear(nC)
+       }
+       _clearColorAttachment(CC, zC, ZC, QC) {
+         if ((0, GC.l)(ZC)) {
+           const ZC = (0, GC.n)(QC),
+             wC = ZC ? xC._TempClearColorUint32 : xC._TempClearColorInt32;
+           return wC[0] = zC.r, wC[1] = zC.g, wC[2] = zC.b, wC[3] = zC.a, void(ZC ? this._gl.clearBufferuiv(this._gl.COLOR, CC, wC) : this._gl.clearBufferiv(this._gl.COLOR, CC, wC))
```

#### 58. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L275-L277` → after: `L1876-L1902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1876-L1902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L1876-L1902) · [Before (L275-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L275-L277)

```diff
-         scale(kk) {}
-         get canRescale() {
-           return !1
+         xC._TempClearColorFloat32[0] = zC.r, xC._TempClearColorFloat32[1] = zC.g, xC._TempClearColorFloat32[2] = zC.b, xC._TempClearColorFloat32[3] = zC.a, this._gl.clearBufferfv(this._gl.COLOR, CC, xC._TempClearColorFloat32)
+       }
+       _viewport(CC, zC, ZC, QC) {
+         CC === this._viewportCached.x && zC === this._viewportCached.y && ZC === this._viewportCached.z && QC === this._viewportCached.w || (this._viewportCached.x = CC, this._viewportCached.y = zC, this._viewportCached.z = ZC, this._viewportCached.w = QC, this._gl.viewport(CC, z … [truncated]
+       }
+       yR() {
+         super.yR(), this._badOS && this.flushFramebuffer()
+       }
+       get performanceMonitor() {
+         throw new Error("Not Supported by ThinEngine")
+       }
+       bindFramebuffer(CC) {
+         let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+           ZC = arguments.length > 2 ? arguments[2] : void 0,
+           QC = arguments.length > 3 ? arguments[3] : void 0,
+           wC = arguments.length > 4 ? arguments[4] : void 0,
+ ... (11 more added lines; see GitHub link above)
```

#### 59. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L279-L288` → after: `L1904-L1987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1904-L1987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L1904-L1987) · [Before (L279-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L279-L288)

```diff
-         _getFromCache(kk, ek, ik, Dk, fk, Sk) {
-           const bk = this._getEngine();
-           if (!bk) return null;
-           const rk = bk._getUseSRGBBuffer(!!fk, ek),
-             Pk = bk.getLoadedTexturesCache();
-           for (let mk = 0; mk < Pk.length; mk++) {
-             const bk = Pk[mk];
-             if ((void 0 === fk || rk === bk._useSRGBBuffer) && (void 0 === Dk || Dk === bk.invertY) && bk.url === kk && bk.generateMipMaps === !ek && (!ik || ik === bk.samplingMode) && (void 0 === Sk || Sk === bk.isCube)) return bk.incrementReferences(), bk
-           }
-           return null
+         oC._MSAAFramebuffer && this._bindUnboundFramebuffer(oC._MSAAFramebuffer), this._cachedViewport && !wC ? this.setViewport(this._cachedViewport, ZC, QC) : (ZC || (ZC = CC.width, bC && (ZC /= Math.pow(2, bC))), QC || (QC = CC.height, bC && (QC /= Math.pow(2, bC))), this._vie … [truncated]
+       }
+       setStateCullFaceType(CC, zC) {
+         const ZC = this.cullBackFaces ?? CC ?? 1 ? this._gl.BACK : this._gl.FRONT;
+         (this._depthCullingState.cullFace !== ZC || zC) && (this._depthCullingState.cullFace = ZC)
+       }
+       setState(CC) {
+         let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+           ZC = arguments.length > 2 ? arguments[2] : void 0,
+           QC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
+           wC = arguments.length > 4 ? arguments[4] : void 0,
+           bC = arguments.length > 5 ? arguments[5] : void 0,
+           nC = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
+         (this._depthCullingState.cull !== CC || ZC) && (this._depthCullingState.cull = CC), this.setStateCullFaceType(wC, ZC), this.setZOffset(zC), this.setZOffsetUnits(nC);
+         const fC = QC ? this._gl.CW : this._gl.CCW;
+         (this._depthCullingState.frontFace !== fC || ZC) && (this._depthCullingState.frontFace = fC), this._stencilStateComposer.stencilMaterial = bC
+ ... (68 more added lines; see GitHub link above)
```

#### 60. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L290-L343` → after: `L1989-L2028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR1989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L1989-L2028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L1989-L2028) · [Before (L290-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L290-L343)

```diff
-         _rebuild() {}
-         clone() {
-           return null
-         }
-         get textureType() {
-           return this._texture && void 0 !== this._texture.type ? this._texture.type : 0
-         }
-         get textureFormat() {
-           return this._texture && void 0 !== this._texture.format ? this._texture.format : 5
-         }
-         _markAllSubMeshesAsTexturesDirty() {
-           const kk = this.XF();
-           kk && kk.markAllMaterialsAsDirty(1)
-         }
-         readPixels() {
-           let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
- ... (38 more removed lines; see GitHub link above)
+         return new Uint16Array(CC)
+       }
+       bindArrayBuffer(CC) {
+         this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(CC, this._gl.ARRAY_BUFFER)
+       }
+       bindUniformBlock(CC, zC, ZC) {
+         const QC = CC.program,
+           wC = this._gl.getUniformBlockIndex(QC, zC);
+         this._gl.uniformBlockBinding(QC, wC, ZC)
+       }
+       bindIndexBuffer(CC) {
+         this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(CC, this._gl.ELEMENT_ARRAY_BUFFER)
+       }
+       _bindBuffer(CC, zC) {
+         (this._vaoRecordInProgress || this._currentBoundBuffer[zC] !== CC) && (this._gl.bindBuffer(zC, CC ? CC.underlyingResource : null), this._currentBoundBuffer[zC] = CC)
+       }
+ ... (24 more added lines; see GitHub link above)
```

#### 61. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L346-L347` → after: `L2031-L2097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR2031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L2031-L2097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L2031-L2097) · [Before (L346-L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L346-L347)

```diff
-         get _lodTextureHigh() {
-           return this._texture ? this._texture._lodTextureHigh : null
+       }
+       recordVertexArrayObject(CC, zC, ZC, QC) {
+         const wC = this._gl.createVertexArray();
+         if (!wC) throw new Error("Unable to create VAO");
+         return this._vaoRecordInProgress = !0, this._gl.bindVertexArray(wC), this._mustWipeVertexAttributes = !0, this._bindVertexBuffersAttributes(CC, ZC, QC), this.bindIndexBuffer(zC), this._vaoRecordInProgress = !1, this._gl.bindVertexArray(null), wC
+       }
+       bindVertexArrayObject(CC, zC) {
+         this._cachedVertexArrayObject !== CC && (this._cachedVertexArrayObject = CC, this._gl.bindVertexArray(CC), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._uintIndicesCurrentlySet = null != zC && zC.is32Bits, this._mustWipeVertexAttributes = !0)
+       }
+       bindBuffersDirectly(CC, zC, ZC, QC, wC) {
+         if (this._cachedVertexBuffers !== CC || this._cachedEffectForVertexBuffers !== wC) {
+           this._cachedVertexBuffers = CC, this._cachedEffectForVertexBuffers = wC;
+           const zC = wC.getAttributesCount();
+           this._unbindVertexArrayObject(), this.unbindAllAttributes();
+           let bC = 0;
+           for (let nC = 0; nC < zC; nC++)
+ ... (51 more added lines; see GitHub link above)
```

#### 62. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L349-L350` → after: `L2099-L2152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR2099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L2099-L2152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L2099-L2152) · [Before (L349-L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L349-L350)

```diff
-         get _lodTextureMid() {
-           return this._texture ? this._texture._lodTextureMid : null
+       }
+       disableInstanceAttributeByName(CC) {
+         if (!this._currentEffect) return;
+         const zC = this._currentEffect.getAttributeLocationByName(CC);
+         this.disableInstanceAttribute(zC)
+       }
+       disableInstanceAttribute(CC) {
+         let zC, ZC = !1;
+         for (; - 1 !== (zC = this._currentInstanceLocations.indexOf(CC));) this._currentInstanceLocations.splice(zC, 1), this._currentInstanceBuffers.splice(zC, 1), ZC = !0;
+         ZC && (this._gl.vertexAttribDivisor(CC, 0), this.disableAttributeByIndex(CC))
+       }
+       disableAttributeByIndex(CC) {
+         this._gl.disableVertexAttribArray(CC), this._vertexAttribArraysEnabled[CC] = !1, this._currentBufferPointers[CC].active = !1
+       }
+       draw(CC, zC, ZC, QC) {
+         this.drawElementsType(CC ? 0 : 1, zC, ZC, QC)
+ ... (38 more added lines; see GitHub link above)
```

#### 63. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L352-L353` → after: `L2154-L2179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR2154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L2154-L2179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L2154-L2179) · [Before (L352-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L352-L353)

```diff
-         get _lodTextureLow() {
-           return this._texture ? this._texture._lodTextureLow : null
+       }
+       _releaseEffect(CC) {
+         this._compiledEffects[CC._key] && delete this._compiledEffects[CC._key];
+         const zC = CC.getPipelineContext();
+         zC && this._deletePipelineContext(zC)
+       }
+       _deletePipelineContext(CC) {
+         const zC = CC;
+         zC && zC.program && (zC.program.__SPECTOR_rebuildProgram = null, (0, PC.p)(zC), this._gl && (this._currentProgram === zC.program && this._setProgram(null), this._gl.deleteProgram(zC.program)))
+       }
+       _getGlobalDefines(CC) {
+         return (0, pC.l)(CC, this.isNDCHalfZRange, this.BZC, this.useExactSrgbConversions)
+       }
+       createEffect(CC, zC, ZC, bC, nC, fC, oC, qC, FC) {
+         let WC = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
+           NC = arguments.length > 10 ? arguments[10] : void 0;
+ ... (10 more added lines; see GitHub link above)
```

#### 64. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L355-L362` → after: `L2181-L2467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR2181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L2181-L2467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L2181-L2467) · [Before (L355-L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L355-L362)

```diff
-         dispose() {
-           if (this._scene) {
-             this._scene.stopAnimation && this._scene.stopAnimation(this), this._scene.removePendingData(this);
-             const kk = this._scene.textures.indexOf(this);
-             if (kk >= 0 && this._scene.textures.splice(kk, 1), this._scene.onTextureRemovedObservable.notifyObservers(this), this._scene = null, this._parentContainer) {
-               const kk = this._parentContainer.textures.indexOf(this);
-               kk > -1 && this._parentContainer.textures.splice(kk, 1), this._parentContainer = null
-             }
+         this._gl && (0, wC.z)(this._gl);
+         const RC = new QC.b(CC, zC, pC ? this : ZC, bC, this, nC, fC, oC, qC, FC, GC, zC.shaderLanguage ?? WC, zC.extraInitializationsAsync ?? NC);
+         return this._compiledEffects[GC] = RC, RC
+       }
+       _getShaderSource(CC) {
+         return this._gl.getShaderSource(CC)
+       }
+       createRawShaderProgram(CC, zC, ZC, QC) {
+         let bC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
+         const nC = (0, wC.z)(this._gl);
+         return nC._contextWasLost = this._contextWasLost, nC.validateShaderPrograms = this.validateShaderPrograms, (0, wC.v)(CC, zC, ZC, QC || this._gl, bC)
+       }
+       createShaderProgram(CC, zC, ZC, QC, bC) {
+         let nC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
+         const fC = (0, wC.z)(this._gl);
+         return fC._contextWasLost = this._contextWasLost, fC.validateShaderPrograms = this.validateShaderPrograms, (0, wC.w)(CC, zC, ZC, QC, bC || this._gl, nC)
+ ... (271 more added lines; see GitHub link above)
```

#### 65. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L364` → after: `L2469-L2477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR2469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L2469-L2477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L2469-L2477) · [Before (L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L364)

```diff
-           this.ZF.notifyObservers(this), this.ZF.clear(), this.metadata = null, super.dispose()
+           return !0
+         }), oC, qC, FC, WC, NC, MC, pC)
+       }
+       _getTexImageParametersForCreateTexture(CC, zC) {
+         let ZC, QC;
+         return 1 === this.fS ? (ZC = this._getInternalFormat(CC, zC), QC = ZC) : (ZC = this._getInternalFormat(CC, !1), QC = this._getRGBABufferInternalSizedFormat(0, CC, zC)), {
+           internalFormat: QC,
+           format: ZC,
+           type: this._gl.UNSIGNED_BYTE
```

#### 66. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L366-L384` → after: `L2479-L2571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR2479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L2479-L2571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L2479-L2571) · [Before (L366-L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L366-L384)

```diff
-         serialize() {
-           let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-           if (!this.name && !kk) return null;
-           const ek = xk.b.Serialize(this);
-           return xk.b.AppendSerializedAnimations(this, ek), ek
-         }
-         static WhenAllReady(kk, ek) {
-           let ik = kk.length;
-           if (0 !== ik)
-             for (let Dk = 0; Dk < kk.length; Dk++) {
-               const fk = kk[Dk];
-               if (fk.isReady()) 0 === --ik && ek();
-               else {
-                 const kk = fk.onLoadObservable;
-                 kk ? kk.addOnce((() => {
-                   0 === --ik && ek()
- ... (3 more removed lines; see GitHub link above)
+       }
+       _rescaleTexture(CC, zC, ZC, QC, wC) {}
+       _unpackFlipY(CC) {
+         this._unpackFlipYCached !== CC && (this._gl.pixelStorei(this._gl.UNPACK_FLIP_Y_WEBGL, CC ? 1 : 0), this.enableUnpackFlipYCached && (this._unpackFlipYCached = CC))
+       }
+       _getUnpackAlignement() {
+         return this._gl.getParameter(this._gl.UNPACK_ALIGNMENT)
+       }
+       _getTextureTarget(CC) {
+         return CC.isCube ? this._gl.TEXTURE_CUBE_MAP : CC.is3D ? this._gl.TEXTURE_3D : CC.is2DArray || CC.isMultiview ? this._gl.TEXTURE_2D_ARRAY : this._gl.TEXTURE_2D
+       }
+       updateTextureSamplingMode(CC, zC) {
+         let ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+         const QC = this._getTextureTarget(zC),
+           wC = this._getSamplingParameters(CC, zC.useMipMaps || ZC);
+         this._setTextureParameterInteger(QC, this._gl.TEXTURE_MAG_FILTER, wC.mag, zC), this._setTextureParameterInteger(QC, this._gl.TEXTURE_MIN_FILTER, wC.min), ZC && wC.hasMipMaps && (zC.generateMipMaps = !0, this._gl.generateMipmap(QC)), this._bindTextureDirectly(QC, null), zC … [truncated]
+ ... (77 more added lines; see GitHub link above)
```

#### 67. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L386-L387` → after: `L2573-L2676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR2573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L2573-L2676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L2573-L2676) · [Before (L386-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L386-L387)

```diff
-         static _IsScene(kk) {
-           return "Scene" === kk.getClassName()
+         if (CC.generateMipMaps) {
+           const bC = CC._hardwareTexture;
+           bC.memoryAllocated || (fC.texStorage2D(CC.isCube ? fC.TEXTURE_CUBE_MAP : fC.TEXTURE_2D, Math.floor(Math.log2(Math.max(ZC, QC))) + 1, zC, CC.width, CC.height), bC.memoryAllocated = !0), this._gl.compressedTexSubImage2D(oC, nC, 0, 0, ZC, QC, zC, wC)
+         } else this._gl.compressedTexImage2D(oC, nC, zC, ZC, QC, 0, wC)
+       }
+       _uploadDataToTextureDirectly(CC, zC) {
+         let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
+           QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
+           wC = arguments.length > 4 ? arguments[4] : void 0,
+           bC = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
+         const nC = this._gl,
+           fC = this._getWebGLTextureType(CC.type),
+           oC = this._getInternalFormat(CC.format),
+           qC = void 0 === wC ? this._getRGBABufferInternalSizedFormat(CC.type, CC.format, CC._useSRGBBuffer) : this._getInternalFormat(wC, CC._useSRGBBuffer);
+         this._unpackFlipY(CC.invertY);
+         let FC = nC.TEXTURE_2D;
+ ... (88 more added lines; see GitHub link above)
```

#### 68. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L389-L500` → after: `L2678-L2948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR2678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L2678-L2948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L2678-L2948) · [Before (L389-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L389-L500)

```diff
-       }, (() => {
-         const Sk = "function" === typeof Symbol && Symbol.metadata ? Object.create(vk[Symbol.metadata] ?? null) : void 0;
-         ek = [(0, fk.I)()], ik = [(0, fk.I)()], mk = [(0, fk.I)()], Kk = [(0, fk.I)()], nk = [(0, fk.I)("hasAlpha")], Uk = [(0, fk.I)("getAlphaFromRGB")], Hk = [(0, fk.I)()], wk = [(0, fk.I)("coordinatesIndex")], lk = [(0, fk.I)()], pk = [(0, fk.I)("coordinatesMode")], yk = [(0,  … [truncated]
-           kind: "getter",
-           name: "wrapU",
-           static: !1,
-           private: !1,
-           access: {
-             has: kk => "wrapU" in kk,
-             get: kk => kk.wrapU
-           },
-           metadata: Sk
-         }, null, Ek), (0, Dk.d)(kk, null, Yk, {
-           kind: "getter",
-           name: "wrapV",
-           static: !1,
- ... (96 more removed lines; see GitHub link above)
+         this._currentEffect = null
+       }
+       _activateCurrentTexture() {
+         this._currentTextureChannel !== this._activeChannel && (this._gl.activeTexture(this._gl.TEXTURE0 + this._activeChannel), this._currentTextureChannel = this._activeChannel)
+       }
+       _bindTextureDirectly(CC, zC) {
+         let ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
+           QC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
+           wC = !1;
+         const bC = zC && zC._associatedChannel > -1;
+         ZC && bC && (this._activeChannel = zC._associatedChannel);
+         if (this._boundTexturesCache[this._activeChannel] !== zC || QC) {
+           if (this._activateCurrentTexture(), zC && zC.isMultiview) throw fC.c.Error(["_bindTextureDirectly called with a multiview texture!", CC, zC]), "_bindTextureDirectly called with a multiview texture!";
+           this._gl.bindTexture(CC, zC?._hardwareTexture?.underlyingResource ?? null), this._boundTexturesCache[this._activeChannel] = zC, zC && (zC._associatedChannel = this._activeChannel)
+         } else ZC && (wC = !0, this._activateCurrentTexture());
+         return bC && !ZC && this._bindSamplerUniformToChannel(zC._associatedChannel, this._activeChannel), wC
+ ... (255 more added lines; see GitHub link above)
```

#### 69. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L502-L513` → after: `L2950-L2975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR2950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L2950-L2975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L2950-L2975) · [Before (L502-L513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L502-L513)

```diff
-           },
-           metadata: Sk
-         }, hk, ak), (0, Dk.d)(null, null, ik, {
-           kind: "field",
-           name: "name",
-           static: !1,
-           private: !1,
-           access: {
-             has: kk => "name" in kk,
-             get: kk => kk.name,
-             set: (kk, ek) => {
-               kk.name = ek
+           case 0:
+             switch (zC) {
+               case 6:
+                 return this._gl.R8;
+               case 7:
+                 return this._gl.RG8;
+               case 4:
+                 return ZC ? this._glSRGBExtensionValues.SRGB8 : this._gl.RGB8;
+               case 5:
+                 return ZC ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8;
+               case 8:
+                 return this._gl.R8UI;
+               case 9:
+                 return this._gl.RG8UI;
+               case 10:
+                 return this._gl.RGB8UI;
+ ... (10 more added lines; see GitHub link above)
```

#### 70. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L515-L526` → after: `L2977-L2994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR2977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L2977-L2994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L2977-L2994) · [Before (L515-L526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L515-L526)

```diff
-           },
-           metadata: Sk
-         }, Wk, tk), (0, Dk.d)(null, null, mk, {
-           kind: "field",
-           name: "displayName",
-           static: !1,
-           private: !1,
-           access: {
-             has: kk => "displayName" in kk,
-             get: kk => kk.displayName,
-             set: (kk, ek) => {
-               kk.displayName = ek
+           case 4:
+             switch (zC) {
+               case 8:
+                 return this._gl.R16I;
+               case 36760:
+                 return this._gl.R16_SNORM_EXT;
+               case 36761:
+                 return this._gl.RG16_SNORM_EXT;
+               case 36762:
+                 return this._gl.RGB16_SNORM_EXT;
+               case 36763:
+                 return this._gl.RGBA16_SNORM_EXT;
+               case 9:
+                 return this._gl.RG16I;
+               case 10:
+                 return this._gl.RGB16I;
+ ... (2 more added lines; see GitHub link above)
```

#### 71. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L528-L617` → after: `L2996-L3013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR2996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L2996-L3013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L2996-L3013) · [Before (L528-L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L528-L617)

```diff
-           },
-           metadata: Sk
-         }, Xk, Bk), (0, Dk.d)(null, null, Kk, {
-           kind: "field",
-           name: "metadata",
-           static: !1,
-           private: !1,
-           access: {
-             has: kk => "metadata" in kk,
-             get: kk => kk.metadata,
-             set: (kk, ek) => {
-               kk.metadata = ek
-             }
-           },
-           metadata: Sk
-         }, ck, Tk), (0, Dk.d)(null, null, nk, {
- ... (74 more removed lines; see GitHub link above)
+           case 5:
+             switch (zC) {
+               case 8:
+                 return this._gl.R16UI;
+               case 33322:
+                 return this._gl.R16_EXT;
+               case 33324:
+                 return this._gl.RG16_EXT;
+               case 32852:
+                 return this._gl.RGB16_EXT;
+               case 32859:
+                 return this._gl.RGBA16_EXT;
+               case 9:
+                 return this._gl.RG16UI;
+               case 10:
+                 return this._gl.RGB16UI;
+ ... (2 more added lines; see GitHub link above)
```

#### 72. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L619-L630` → after: `L3015-L3024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3015-L3024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L3015-L3024) · [Before (L619-L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L619-L630)

```diff
-           },
-           metadata: Sk
-         }, De, fe), (0, Dk.d)(null, null, Lk, {
-           kind: "field",
-           name: "wrapR",
-           static: !1,
-           private: !1,
-           access: {
-             has: kk => "wrapR" in kk,
-             get: kk => kk.wrapR,
-             set: (kk, ek) => {
-               kk.wrapR = ek
+           case 6:
+             switch (zC) {
+               case 8:
+                 return this._gl.R32I;
+               case 9:
+                 return this._gl.RG32I;
+               case 10:
+                 return this._gl.RGB32I;
+               default:
+                 return this._gl.RGBA32I
```

#### 73. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L632-L643` → after: `L3026-L3035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3026-L3035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L3026-L3035) · [Before (L632-L643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L632-L643)

```diff
-           },
-           metadata: Sk
-         }, Se, be), (0, Dk.d)(null, null, Ck, {
-           kind: "field",
-           name: "anisotropicFilteringLevel",
-           static: !1,
-           private: !1,
-           access: {
-             has: kk => "anisotropicFilteringLevel" in kk,
-             get: kk => kk.anisotropicFilteringLevel,
-             set: (kk, ek) => {
-               kk.anisotropicFilteringLevel = ek
+           case 7:
+             switch (zC) {
+               case 8:
+                 return this._gl.R32UI;
+               case 9:
+                 return this._gl.RG32UI;
+               case 10:
+                 return this._gl.RGB32UI;
+               default:
+                 return this._gl.RGBA32UI
```

#### 74. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L645-L656` → after: `L3037-L3046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3037-L3046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L3037-L3046) · [Before (L645-L656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L645-L656)

```diff
-           },
-           metadata: Sk
-         }, re, Pe), (0, Dk.d)(null, null, Vk, {
-           kind: "field",
-           name: "invertZ",
-           static: !1,
-           private: !1,
-           access: {
-             has: kk => "invertZ" in kk,
-             get: kk => kk.invertZ,
-             set: (kk, ek) => {
-               kk.invertZ = ek
+           case 1:
+             switch (zC) {
+               case 6:
+                 return this._gl.R32F;
+               case 7:
+                 return this._gl.RG32F;
+               case 4:
+                 return this._gl.RGB32F;
+               default:
+                 return this._gl.RGBA32F
```

#### 75. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L658-L669` → after: `L3048-L3057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3048-L3057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L3048-L3057) · [Before (L658-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L658-L669)

```diff
-           },
-           metadata: Sk
-         }, me, Me), (0, Dk.d)(null, null, Fk, {
-           kind: "field",
-           name: "lodLevelInAlpha",
-           static: !1,
-           private: !1,
-           access: {
-             has: kk => "lodLevelInAlpha" in kk,
-             get: kk => kk.lodLevelInAlpha,
-             set: (kk, ek) => {
-               kk.lodLevelInAlpha = ek
+           case 2:
+             switch (zC) {
+               case 6:
+                 return this._gl.R16F;
+               case 7:
+                 return this._gl.RG16F;
+               case 4:
+                 return this._gl.RGB16F;
+               default:
+                 return this._gl.RGBA16F
```

#### 76. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L671-L682` → after: `L3059-L3075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3059-L3075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L3059-L3075) · [Before (L671-L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L671-L682)

```diff
-           },
-           metadata: Sk
-         }, Ke, xe), (0, Dk.d)(null, null, Qk, {
-           kind: "field",
-           name: "isRenderTarget",
-           static: !1,
-           private: !1,
-           access: {
-             has: kk => "isRenderTarget" in kk,
-             get: kk => kk.isRenderTarget,
-             set: (kk, ek) => {
-               kk.isRenderTarget = ek
+           case 10:
+             return this._gl.RGB565;
+           case 13:
+             return this._gl.R11F_G11F_B10F;
+           case 14:
+             return this._gl.RGB9_E5;
+           case 8:
+             return this._gl.RGBA4;
+           case 9:
+             return this._gl.RGB5_A1;
+           case 11:
+             switch (zC) {
+               case 5:
+               default:
+                 return this._gl.RGB10_A2;
+               case 11:
+ ... (1 more added lines; see GitHub link above)
```

#### 77. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L684-L694` → after: `L3077-L3195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3077-L3195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L3077-L3195) · [Before (L684-L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L684-L694)

```diff
-           },
-           metadata: Sk
-         }, ne, Ue), Sk && Object.defineProperty(kk, Symbol.metadata, {
-           enumerable: !0,
-           configurable: !0,
-           writable: !0,
-           value: Sk
-         })
-       })(), kk.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4, kk
-     })();
-     (Kk = Uk.prototype).forceSphericalPolynomialsRecompute ?? (Kk.forceSphericalPolynomialsRecompute = (0, nk.i)("BaseTexture", "forceSphericalPolynomialsRecompute")), Object.getOwnPropertyDescriptor(Uk.prototype, "sphericalPolynomial") || Object.defineProperty(Uk.prototype, "sph … [truncated]
+         }
+         return ZC ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8
+       }
+       readPixels(CC, zC, ZC, QC) {
+         let wC = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
+           bC = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
+           nC = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
+         const oC = wC ? 4 : 3,
+           qC = wC ? this._gl.RGBA : this._gl.RGB,
+           FC = ZC * QC * oC;
+         if (nC) {
+           if (nC.length < FC) return fC.c.Error(`Data buffer is too small to store the read pixels (${nC.length} should be more than ${FC})`), Promise.resolve(nC)
+         } else nC = new Uint8Array(FC);
+         return bC && this.flushFramebuffer(), this._gl.readPixels(CC, zC, ZC, QC, qC, this._gl.UNSIGNED_BYTE, nC), Promise.resolve(nC)
+       }
+       static get IsSupportedAsync() {
+ ... (103 more added lines; see GitHub link above)
```

#### 78. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L696` → after: `L3197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L3197) · [Before (L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L696)

```diff
-   40053: (kk, ek, ik) => {
+   40001: (CC, zC, ZC) => {
```

#### 79. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L699` → after: `L3200-L3201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3200-L3201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L3200-L3201) · [Before (L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L699)

```diff
-       f: () => yk
+       g: () => bC,
+       h: () => wC
```

#### 80. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L701-L711` → after: `L3203-L3375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3203-L3375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L3203-L3375) · [Before (L701-L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L701-L711)

```diff
-     var Dk = ik(39566),
-       fk = ik(39570),
-       Sk = ik(36726),
-       bk = ik(36698),
-       rk = ik(39564),
-       Pk = ik(36734),
-       mk = ik(39447),
-       Mk = ik(39458),
-       Kk = ik(39666),
-       xk = ik(37372),
-       nk = ik(39620);
+     class QC {}
+     QC.KEYDOWN = 1, QC.KEYUP = 2;
+     class wC {
+       constructor(CC, zC) {
+         this.type = CC, this.event = zC
+       }
+     }
+     class bC extends wC {
+       get skipOnPointerObservable() {
+         return this.skipOnKeyboardObservable
+       }
+       set skipOnPointerObservable(CC) {
+         this.skipOnKeyboardObservable = CC
+       }
+       constructor(CC, zC) {
+         super(CC, zC), this.type = CC, this.event = zC, this.skipOnKeyboardObservable = !1
+ ... (157 more added lines; see GitHub link above)
```

#### 81. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L713-L735` → after: `L3377-L3476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3377-L3476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L3377-L3476) · [Before (L713-L735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L713-L735)

```diff
-     function Uk(kk, ek) {
-       let ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-       const Dk = ek.width,
-         fk = ek.height;
-       if (kk instanceof Float32Array) {
-         let ek = kk.byteLength / kk.BYTES_PER_ELEMENT;
-         const ik = new Uint8Array(ek);
-         for (; --ek >= 0;) {
-           let Dk = kk[ek];
-           Dk < 0 ? Dk = 0 : Dk > 1 && (Dk = 1), ik[ek] = 255 * Dk
-         }
-         kk = ik
-       }
-       const Sk = document.createElement("canvas");
-       Sk.width = Dk, Sk.height = fk;
-       const bk = Sk.getContext("2d");
- ... (7 more removed lines; see GitHub link above)
+     function wC(CC) {
+       return 8 === CC || 9 === CC || 10 === CC || 11 === CC
+     }
+ 
+     function bC(CC) {
+       return 0 === CC || 5 === CC || 7 === CC || 11 === CC
+     }
+ 
+     function nC(CC) {
+       return 13 === CC || 17 === CC || 18 === CC || 19 === CC
+     }
+     ZC.d(zC, {
+       e: () => nC,
+       i: () => QC,
+       l: () => wC,
+       n: () => bC
+ ... (84 more added lines; see GitHub link above)
```

#### 82. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L737` → after: `L3478-L3515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3478-L3515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L3478-L3515) · [Before (L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L737)

```diff
-       return Sk.toDataURL("image/png")
+       constructor(CC) {
+         let zC = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+         this._wasPreviouslyReady = !1, this._forceRebindOnNextCall = !0, this._wasPreviouslyUsingInstances = null, this.effect = null, this.defines = null, this.drawContext = CC.createDrawContext(), zC && (this.materialContext = CC.createMaterialContext())
+       }
+       setEffect(CC, zC) {
+         let ZC = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
+         ZC || this.effect === CC || this.drawContext?._releaseUniformBufferSlots?.(), this.effect = CC, void 0 !== zC && (this.defines = zC), ZC && this.drawContext?.reset()
+       }
+       dispose() {
+         let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         if (this.effect) {
+           const zC = this.effect;
+           CC ? zC.dispose() : QC.d.SetImmediate((() => {
+             zC.mg().onEndFrameObservable.addOnce((() => {
+               zC.dispose()
+             }))
+ ... (22 more added lines; see GitHub link above)
```

#### 83. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L741-L778` → after: `L3519-L4646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR3519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L3519-L4646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L3519-L4646) · [Before (L741-L778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L741-L778)

```diff
-       let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-         ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-       const Dk = kk.getInternalTexture();
-       if (!Dk) return null;
-       const fk = kk._readPixelsSync(ek, ik);
-       return fk ? Uk(fk, kk.getSize(), Dk.invertY) : null
-     }
-     async function wk(kk) {
-       let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-         ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-       const Dk = kk.getInternalTexture();
-       if (!Dk) return null;
-       const fk = await kk.readPixels(ek, ik);
-       return fk ? Uk(fk, kk.getSize(), Dk.invertY) : null
-     }
-     var lk = ik(40014),
- ... (22 more removed lines; see GitHub link above)
+       const zC = CC._name,
+         ZC = CC.context;
+       if (zC && ZC) {
+         const CC = (0, wC.z)(ZC),
+           QC = CC.cachedPipelines[zC];
+         QC?.dispose(), delete CC.cachedPipelines[zC]
+       }
+     }
+ 
+     function WC(CC, zC, ZC, wC, bC, nC, oC) {
+       let qC, FC;
+       const WC = (0, QC.k)() ? nC?.getHostDocument() : null;
+       qC = "string" === typeof zC ? zC : "string" === typeof zC.vertexSource ? "source:" + zC.vertexSource : "string" === typeof zC.vertexElement ? WC?.getElementById(zC.vertexElement) || zC.vertexElement : zC.vertex || zC, FC = "string" === typeof zC ? zC : "string" === typeof z … [truncated]
+       const MC = [void 0, void 0],
+         gC = () => {
+           if (MC[0] && MC[1]) {
+ ... (1112 more added lines; see GitHub link above)
```

#### 84. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L786-L819` → after: `L4654-L8896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4654-L8896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L4654-L8896) · [Before (L786-L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L786-L819)

```diff
-         return kk = class extends uk {
-           static _CreateVideoTexture(ek, ik, Dk) {
-             arguments.length > 5 && void 0 !== arguments[5] || kk.TRILINEAR_SAMPLINGMODE;
-             throw (0, mk.k)("VideoTexture")
-           }
-           get noMipmap() {
-             return this._noMipmap
-           }
-           get mimeType() {
-             return this._mimeType
-           }
-           set isBlocking(kk) {
-             this._isBlocking = kk
-           }
-           get isBlocking() {
-             return this._isBlocking
- ... (18 more removed lines; see GitHub link above)
+         return CC = class {
+           constructor() {
+             this.colorCurves = (0, QC.n)(this, UC, new IC), this._colorCurvesEnabled = ((0, QC.n)(this, BC), (0, QC.n)(this, OC, !1)), this._colorGradingTexture = ((0, QC.n)(this, kC), (0, QC.n)(this, VC, void 0)), this._colorGradingEnabled = ((0, QC.n)(this, Cz), (0, QC.n)(this, … [truncated]
+           }
+           get colorCurvesEnabled() {
+             return this._colorCurvesEnabled
+           }
+           set colorCurvesEnabled(CC) {
+             this._colorCurvesEnabled !== CC && (this._colorCurvesEnabled = CC, this._updateParameters())
+           }
+           get colorGradingTexture() {
+             return this._colorGradingTexture
+           }
+           set colorGradingTexture(CC) {
+             this._colorGradingTexture !== CC && (this._colorGradingTexture = CC, this._updateParameters())
+           }
+ ... (4227 more added lines; see GitHub link above)
```

#### 85. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L821-L842` → after: `L8898-L8971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR8898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L8898-L8971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L8898-L8971) · [Before (L821-L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L821-L842)

```diff
-             "object" === typeof fk && null !== fk ? (rk = fk.noMipmap ?? !1, bk = fk.invertY ?? !lk.e, Pk = fk.samplingMode ?? kk.TRILINEAR_SAMPLINGMODE, mk = fk.onLoad ?? null, Kk = fk.onError ?? null, xk = fk.buffer ?? null, nk = fk.deleteBuffer ?? !1, Uk = fk.format, Hk = fk.m … [truncated]
-             const Ak = this.XF(),
-               jk = this._getEngine();
-             if (!jk) return;
-             jk.onBeforeTextureInitObservable.notifyObservers(this);
-             const sk = () => {
-                 this._texture && (this._texture._invertVScale && (this.vScale *= -1, this.vOffset += 1), null !== this._texture._cachedWrapU && (this.wrapU = this._texture._cachedWrapU, this._texture._cachedWrapU = null), null !== this._texture._cachedWrapV && (this.wrapV = this. … [truncated]
-               },
-               dk = (ek, ik) => {
-                 this._loadingError = !0, this._errorObject = {
-                   message: ek,
-                   exception: ik
-                 }, Kk && Kk(ek, ik), kk.OnTextureLoadErrorObservable.notifyObservers(this)
-               };
-             if (!this.url && !Lk) return this._delayedOnLoad = sk, void(this._delayedOnError = dk);
-             if (this._texture = Lk ?? this._getFromCache(this.url, rk, Pk, this._invertY, Yk, this.isCube), this._texture)
- ... (6 more removed lines; see GitHub link above)
+             for (const ZC of nC) CC && (CC = ZC.objectRenderer._isFrozen), zC && (zC = null !== ZC.objectRenderer._freezeActiveMeshesCancel);
+             if (CC) return !0;
+             if (!zC) throw new Error("Freezing active meshes was cancelled");
+             return !1
+           }), (() => {
+             this._freezeActiveMeshesCancel = null, this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = bC, this._skipEvaluateActiveMeshesCompletely = CC, zC?.()
+           }), ((CC, zC) => {
+             if (this._freezeActiveMeshesCancel = null, this.unfreezeActiveMeshes(), zC) {
+               const zC = "Scene: Timeout while waiting for meshes to be frozen.";
+               ZC ? ZC(zC) : (CZ.c.Error(zC), CC && CZ.c.Error(CC))
+             } else {
+               const zC = "Scene: An unexpected error occurred while trying to freeze active meshes.";
+               ZC ? ZC(zC) : (CZ.c.Error(zC), CC && (CZ.c.Error(CC), CC.stack && CZ.c.Error(CC.stack)))
+             }
+           })), this
+         }
+ ... (58 more added lines; see GitHub link above)
```

#### 86. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L844-L849` → after: `L8973-L9111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR8973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L8973-L9111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L8973-L9111) · [Before (L844-L849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L844-L849)

```diff
-             else if (Ak && Ak.useDelayedTextureLoading) this.delayLoadState = 4, this._delayedOnLoad = sk, this._delayedOnError = dk;
-             else {
-               try {
-                 this._texture = jk.createTexture(this.url, rk, this._invertY, Ak, Pk, sk, dk, this._buffer, void 0, this._format, this._forcedExtension, Hk, wk, pk, Yk)
-               } catch (Vk) {
-                 throw dk("error loading", Vk), Vk
+               zC._activate(this._renderId, !1) && (zC.ZH ? zC._internalAbstractMeshDataInfo._actAsRegularMesh && (fC = zC) : fC._internalAbstractMeshDataInfo._onlyForInstances = !1, fC._internalAbstractMeshDataInfo._isActive = !0, this._activeMesh(zC, fC)), zC._postActivate()
+             }
+           }
+         }
+         if (this.onAfterActiveMeshesEvaluationObservable.notifyObservers(this), this.particlesEnabled) {
+           this.onBeforeParticlesRenderingObservable.notifyObservers(this);
+           for (let CC = 0; CC < this.Ix.length; CC++) {
+             const zC = this.Ix[CC];
+             if (!zC.isStarted() || !zC.emitter) continue;
+             const ZC = zC.emitter;
+             ZC.position && !ZC.isEnabled() || (this._activeParticleSystems.push(zC), zC.animate(), this._renderingManager.dispatchParticles(zC))
+           }
+           this.onAfterParticlesRenderingObservable.notifyObservers(this)
+         }
+       }
+       _prepareSkeleton(CC) {
+ ... (123 more added lines; see GitHub link above)
```

#### 87. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L854-L888` → after: `L9142-L9189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR9142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L9142-L9189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L9142-L9189) · [Before (L854-L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L854-L888)

```diff
-           updateURL(kk) {
-             let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
-               ik = arguments.length > 2 ? arguments[2] : void 0,
-               Dk = arguments.length > 3 ? arguments[3] : void 0;
-             this.url && (this.releaseInternalTexture(), this.XF().markAllMaterialsAsDirty(1, (kk => kk.hasTexture(this)))), this.name && !this.name.startsWith("data:") || (this.name = kk), this.url = kk, this._buffer = ek, this._forcedExtension = Dk, this.delayLoadState = 4;
-             const fk = this._delayedOnLoad;
-             this._delayedOnLoad = () => {
-               fk ? fk() : this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), ik && ik()
-             }, this.delayLoad()
-           }
-           delayLoad() {
-             if (4 !== this.delayLoadState) return;
-             const kk = this.XF();
-             if (!kk) return;
-             let ek = this.url;
-             !ek && (this.name.indexOf("://") > 0 || this.name.startsWith("data:")) && (ek = this.name), this.delayLoadState = 1, this._texture = this._getFromCache(ek, this._noMipmap, this.samplingMode, this._invertY, this._useSRGBBuffer, this.isCube), this._texture ? this._delay … [truncated]
- ... (19 more removed lines; see GitHub link above)
+       }
+       resetDrawCache(CC) {
+         if (this.meshes)
+           for (const zC of this.meshes) zC.resetDrawCache(CC)
+       }
+       _renderWithFrameGraph() {
+         let CC = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
+           zC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+         if (this.activeCamera = null, this.activeCameras = null, CC)
+           for (const ZC of this.cameras)
+             if (ZC.update(), 0 !== ZC.cameraRigMode)
+               for (let CC = 0; CC < ZC._rigCameras.length; CC++) ZC._rigCameras[CC].update();
+         this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++;
+         try {
+           this._renderWithFrameGraphAfterBeforeRender(zC)
+         } finally {
+ ... (32 more added lines; see GitHub link above)
```

#### 88. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L890-L900` → after: `L9191-L9202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR9191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L9191-L9202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L9191-L9202) · [Before (L890-L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L890-L900)

```diff
-             this._cachedReflectionTextureMatrix || (this._cachedReflectionTextureMatrix = bk.b.Zero()), this._projectionModeMatrix || (this._projectionModeMatrix = bk.b.Zero());
-             const ik = this._cachedReflectionCoordinatesMode !== this.coordinatesMode;
-             switch (this._cachedReflectionUOffset = this.uOffset, this._cachedReflectionVOffset = this.vOffset, this._cachedReflectionUScale = this.uScale, this._cachedReflectionVScale = this.vScale, this._cachedReflectionCoordinatesMode = this.coordinatesMode, this.coordinatesMo … [truncated]
-               case kk.PLANAR_MODE:
-                 bk.b.IdentityToRef(this._cachedReflectionTextureMatrix), this._cachedReflectionTextureMatrix[0] = this.uScale, this._cachedReflectionTextureMatrix[5] = this.vScale, this._cachedReflectionTextureMatrix[12] = this.uOffset, this._cachedReflectionTextureMatrix[13] = t … [truncated]
-                 break;
-               case kk.PROJECTION_MODE: {
-                 bk.b.FromValuesToRef(.5, 0, 0, 0, 0, -.5, 0, 0, 0, 0, 0, 0, .5, .5, 1, 1, this._projectionModeMatrix);
-                 const kk = ek.getProjectionMatrix();
-                 this._cachedReflectionProjectionMatrixId = kk.updateFlag, kk.multiplyToRef(this._projectionModeMatrix, this._cachedReflectionTextureMatrix);
-                 break
+           } else {
+             this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
+             for (let QC = 0; QC < ZC; QC++) {
+               const ZC = zC.data[QC];
+               ZC._internalAbstractMeshDataInfo._wasActiveLastFrame = !1, ZC.isBlocked || (this._totalVertices.addCount(ZC.getTotalVertices(), !1), ZC.isReady() && ZC.isEnabled() && !ZC.sq.hasAZeroComponent && (ZC.computeWorldMatrix(CC), ZC.actionManager && ZC.actionManager.hasSpe … [truncated]
+             }
+             if (this.particlesEnabled)
+               for (let CC = 0; CC < this.Ix.length; CC++) {
+                 const zC = this.Ix[CC];
+                 if (!zC.isStarted() || !zC.emitter) continue;
+                 const ZC = zC.emitter;
+                 ZC.position && !ZC.isEnabled() || (this._activeParticleSystems.push(zC), zC.animate())
```

#### 89. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L902-L903` → after: `L9204-L9252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR9204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L9204-L9252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L9204-L9252) · [Before (L902-L903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L902-L903)

```diff
-               default:
-                 bk.b.IdentityToRef(this._cachedReflectionTextureMatrix)
+           }
+         }
+         this.frameGraph?.execute()
+       }
+       _renderRenderTarget(CC, zC) {
+         let ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
+           QC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+         if (this._intermediateRendering = !0, CC._shouldRender()) {
+           if (this._renderId++, this.activeCamera = zC, !this.activeCamera) throw new Error("Active camera not set");
+           this._engine.setViewport(this.activeCamera.viewport), this.updateTransformMatrix(), CC.render(ZC, QC)
+         }
+         this._intermediateRendering = !1
+       }
+       render() {
+         let CC = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
+           zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+ ... (33 more added lines; see GitHub link above)
```

#### 90. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L905` → after: `L9254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR9254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L9254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L9254) · [Before (L905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L905)

```diff
-             return ik && ek.markAllMaterialsAsDirty(1, (kk => kk.hasTexture(this))), this._cachedReflectionTextureMatrix
+             QC.g.EndPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0), this._renderId++
```

#### 91. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L907-L922` → after: `L9256-L9258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR9256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L9256-L9258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L9256-L9258) · [Before (L907-L922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L907-L922)

```diff
-           clone() {
-             const ek = {
-               noMipmap: this._noMipmap,
-               invertY: this._invertY,
-               samplingMode: this.samplingMode,
-               onLoad: void 0,
-               onError: void 0,
-               buffer: this._texture ? this._texture._buffer : void 0,
-               deleteBuffer: this._deleteBuffer,
-               format: this.textureFormat,
-               mimeType: this.mimeType,
-               loaderOptions: this._loaderOptions,
-               creationFlags: this._creationFlags,
-               useSRGBBuffer: this._useSRGBBuffer
-             };
-             return pk.b.Clone((() => new kk(this._texture ? this._texture.url : null, this.XF(), ek)), this)
+           this._engine.currentRenderPassId = CC?.renderPassId ?? 0, this.activeCamera = CC, this._activeCamera && 22 !== this._activeCamera.cameraRigMode && !this.prePass && this._bindFrameBuffer(this._activeCamera, !1), this.onAfterRenderTargetsRenderObservable.notifyObservers(t … [truncated]
+           for (let zC = 0, ZC = this._beforeClearStage; zC < ZC.length; zC++) {
+             ZC[zC].action()
```

#### 92. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L924-L935` → after: `L9260-L9262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR9260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L9260-L9262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L9260-L9262) · [Before (L924-L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L924-L935)

```diff
-           serialize() {
-             const ek = this.name;
-             kk.SerializeBuffers || this.name.startsWith("data:") && (this.name = ""), this.name.startsWith("data:") && this.url === this.name && (this.url = "");
-             const ik = super.serialize(kk._SerializeInternalTextureUniqueId);
-             if (!ik) return null;
-             if (kk.SerializeBuffers || kk.ForceSerializeBuffers)
-               if ("string" === typeof this._buffer && this._buffer.startsWith("data:")) ik.base64String = this._buffer, ik.name = ik.name.replace("data:", "");
-               else if (this.url && this.url.startsWith("data:") && this._buffer instanceof Uint8Array) {
-               const kk = this.mimeType || "image/png";
-               ik.base64String = `data:${kk};base64,${(0,nk.i)(this._buffer)}`
-             } else(kk.ForceSerializeBuffers || this.url && this.url.startsWith("blob:") || this._forceSerialize) && (ik.base64String = !this._engine || this._engine._features.supportSyncTextureRead ? Hk(this) : wk(this));
-             return ik.invertY = this._invertY, ik.samplingMode = this.samplingMode, ik._creationFlags = this._creationFlags, ik._useSRGBBuffer = this._useSRGBBuffer, kk._SerializeInternalTextureUniqueId && (ik.internalTextureUniqueId = this._texture?.uniqueId), ik.internalTexture … [truncated]
+           this._clearFrameBuffer(this.activeCamera);
+           for (let zC = 0, ZC = this._gatherRenderTargetsStage; zC < ZC.length; zC++) {
+             ZC[zC].action(this._renderTargets)
```

#### 93. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L937-L938` → after: `L9264-L9268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR9264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L9264-L9268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L9264-L9268) · [Before (L937-L938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L937-L938)

```diff
-           getClassName() {
-             return "Texture"
+           if (this.activeCameras && this.activeCameras.length > 0)
+             for (let zC = 0; zC < this.activeCameras.length; zC++) this._processSubCameras(this.activeCameras[zC], zC > 0);
+           else {
+             if (!this.activeCamera) throw new Error("No camera defined");
+             this._processSubCameras(this.activeCamera, !!this.activeCamera.outputRenderTarget)
```

#### 94. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L940-L941` → after: `L9270-L9278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR9270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L9270-L9278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L9270-L9278) · [Before (L940-L941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L940-L941)

```diff
-           dispose() {
-             super.dispose(), this.onLoadObservable.clear(), this._delayedOnLoad = null, this._delayedOnError = null, this._buffer = null
+         }
+         this._inputManager._updateMeshUnderPointer(), this._checkIntersections();
+         for (let ZC = 0, QC = this._afterRenderStage; ZC < QC.length; ZC++) {
+           QC[ZC].action()
+         }
+         if (this.afterRender && this.afterRender(), this.onAfterRenderObservable.notifyObservers(this), this._toBeDisposed.length) {
+           for (let CC = 0; CC < this._toBeDisposed.length; CC++) {
+             const zC = this._toBeDisposed[CC];
+             zC && zC.dispose()
```

#### 95. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L943-L958` → after: `L9280-L9320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR9280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L9280-L9320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L9280-L9320) · [Before (L943-L958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L943-L958)

```diff
-           static Parse(ek, ik, Dk) {
-             if (ek.customType) {
-               const kk = Kk.d.Instantiate(ek.customType).Parse(ek, ik, Dk);
-               return ek.samplingMode && kk.updateSamplingMode && kk._samplingMode && kk._samplingMode !== ek.samplingMode && kk.updateSamplingMode(ek.samplingMode), kk
-             }
-             if (ek.isCube && !ek.isRenderTarget) return kk._CubeTextureParser(ek, ik, Dk);
-             const fk = void 0 !== ek.internalTextureUniqueId;
-             if (!ek.name && !ek.isRenderTarget && !fk) return null;
-             let Sk;
-             if (fk) {
-               const kk = ik.JU().getLoadedTexturesCache();
-               for (const ik of kk)
-                 if (ik.uniqueId === ek.internalTextureUniqueId) {
-                   Sk = ik;
-                   break
-                 }
+           this._toBeDisposed.length = 0
+         }
+         this.dumpNextRenderTargets && (this.dumpNextRenderTargets = !1), this._activeBones.addCount(0, !0), this._activeIndices.addCount(0, !0), this._activeParticles.addCount(0, !0), this._engine.restoreDefaultFramebuffer()
+       }
+       freezeMaterials() {
+         for (let CC = 0; CC < this.materials.length; CC++) this.materials[CC].freeze()
+       }
+       unfreezeMaterials() {
+         for (let CC = 0; CC < this.materials.length; CC++) this.materials[CC].unfreeze()
+       }
+       dispose() {
+         if (this.GJ) return;
+         if (this._isDisposing = !0, this.beforeRender = null, this.afterRender = null, this.metadata = null, this.skeletons.length = 0, this.morphTargetManagers.length = 0, this._transientComponents.length = 0, this._isReadyForMeshStage.clear(), this._beforeEvaluateActiveMeshStag … [truncated]
+           for (const CC of this._activeAnimatables) CC.onAnimationEndObservable.clear(), CC.onAnimationEnd = null;
+           this.stopAllAnimations()
+         }
+ ... (25 more added lines; see GitHub link above)
```

#### 96. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L960-L1044` → after: `L9322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR9322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L9322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L9322) · [Before (L960-L1044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L960-L1044)

```diff
-             const bk = kk => {
-               if (kk && kk._texture && (kk._texture._cachedWrapU = null, kk._texture._cachedWrapV = null, kk._texture._cachedWrapR = null), ek.samplingMode) {
-                 const ik = ek.samplingMode;
-                 kk && kk.samplingMode !== ik && kk.updateSamplingMode(ik)
-               }
-               if (kk && ek.animations)
-                 for (let ik = 0; ik < ek.animations.length; ik++) {
-                   const Dk = ek.animations[ik],
-                     fk = (0, Pk.d)("BABYLON.Animation");
-                   fk && kk.animations.push(fk.Parse(Dk))
-                 }
-               kk && kk._texture && (fk && !Sk && kk._texture._setUniqueId(ek.internalTextureUniqueId), kk._texture.label = ek.internalTextureLabel)
-             };
-             return pk.b.Parse((() => {
-               let fk = !0;
-               if (ek.noMipmap && (fk = !1), ek.mirrorPlane) {
- ... (69 more removed lines; see GitHub link above)
+             CC--
```

#### 97. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1046-L1240` → after: `L9324-L9325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR9324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L9324-L9325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L9324-L9325) · [Before (L1046-L1240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L1046-L1240)

```diff
-         }, (() => {
-           const Sk = "function" === typeof Symbol && Symbol.metadata ? Object.create(uk[Symbol.metadata] ?? null) : void 0;
-           ek = [(0, fk.I)()], ik = [(0, fk.I)()], Uk = [(0, fk.I)()], yk = [(0, fk.I)()], Yk = [(0, fk.I)()], Lk = [(0, fk.I)()], Ck = [(0, fk.I)()], Ak = [(0, fk.I)()], jk = [(0, fk.I)()], sk = [(0, fk.I)()], dk = [(0, fk.I)()], Vk = [(0, fk.I)()], Fk = [(0, fk.I)()], (0, Dk.d)( … [truncated]
-             kind: "getter",
-             name: "isBlocking",
-             static: !1,
-             private: !1,
-             access: {
-               has: kk => "isBlocking" in kk,
-               get: kk => kk.isBlocking
-             },
-             metadata: Sk
-           }, null, qk), (0, Dk.d)(null, null, ek, {
-             kind: "field",
-             name: "url",
-             static: !1,
- ... (179 more removed lines; see GitHub link above)
+         }
+         QC = this._engine._virtualScenes.indexOf(this), QC > -1 && this._engine._virtualScenes.splice(QC, 1), this._engine.wipeCaches(!0), this.Tm.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderTargetsRenderObservable.clea … [truncated]
```

#### 98. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1242-L1243` → after: `L9327-L9331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR9327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L9327-L9331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L9327-L9331) · [Before (L1242-L1243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L1242-L1243)

```diff
-       toString() {
-         return `{W: ${this.width}, H: ${this.height}}`
+       _disposeList(CC, zC) {
+         const ZC = CC.slice(0);
+         zC = zC ?? (CC => CC.dispose());
+         for (const QC of ZC) zC(QC);
+         CC.length = 0
```

#### 99. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1245-L1246` → after: `L9333-L9334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR9333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L9333-L9334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L9333-L9334) · [Before (L1245-L1246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L1245-L1246)

```diff
-       getClassName() {
-         return "Size"
+       get GJ() {
+         return this._isDisposed
```

#### 100. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1248-L1250` → after: `L9336-L9340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR9336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L9336-L9340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L9336-L9340) · [Before (L1248-L1250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L1248-L1250)

```diff
-       getHashCode() {
-         let kk = 0 | this.width;
-         return kk = 397 * kk ^ this.height, kk
+       clearCachedVertexData() {
+         for (let CC = 0; CC < this.meshes.length; CC++) {
+           const zC = this.meshes[CC].geometry;
+           zC && zC.clearCachedData()
+         }
```

#### 101. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1252-L1253` → after: `L9342-L9345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR9342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L9342-L9345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L9342-L9345) · [Before (L1252-L1253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L1252-L1253)

```diff
-       Fs(kk) {
-         this.width = kk.width, this.height = kk.height
+       cleanCachedTextureBuffer() {
+         for (const CC of this.textures) {
+           CC._buffer && (CC._buffer = null)
+         }
```

#### 102. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1255-L1256` → after: `L9347-L9365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR9347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L9347-L9365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L9347-L9365) · [Before (L1255-L1256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L1255-L1256)

```diff
-       Z6(kk, ek) {
-         return this.width = kk, this.height = ek, this
+       getWorldExtends(CC) {
+         const zC = new FC.r(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
+           ZC = new FC.r(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
+         CC = CC || (() => !0);
+         const QC = this.meshes.filter(CC);
+         for (const wC of QC) {
+           if (wC.computeWorldMatrix(!0), !wC.Zx || 0 === wC.Zx.length || wC.infiniteDistance) continue;
+           const CC = wC.WE(),
+             QC = CC.boundingBox.minimumWorld,
+             bC = CC.boundingBox.maximumWorld;
+           FC.r.CheckExtends(QC, zC, ZC), FC.r.CheckExtends(bC, zC, ZC)
+         }
+         return zC.x === Number.MAX_VALUE ? {
+           min: FC.r.Zero(),
+           max: FC.r.Zero()
+         } : {
+ ... (3 more added lines; see GitHub link above)
```

#### 103. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1258-L1259` → after: `L9367-L9413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR9367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L9367-L9413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L9367-L9413) · [Before (L1258-L1259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L1258-L1259)

```diff
-       set(kk, ek) {
-         return this.Z6(kk, ek)
+       createPickingRay(CC, zC, ZC, QC) {
+         throw (0, xC.i)("Ray")
+       }
+       createPickingRayToRef(CC, zC, ZC, QC, wC) {
+         throw (0, xC.i)("Ray")
+       }
+       createPickingRayInCameraSpace(CC, zC, ZC) {
+         throw (0, xC.i)("Ray")
+       }
+       createPickingRayInCameraSpaceToRef(CC, zC, ZC, QC) {
+         throw (0, xC.i)("Ray")
+       }
+       CM(CC, zC, ZC, QC, wC, bC) {
+         const nC = (0, xC.i)("Ray", !0);
+         return nC && CZ.c.Warn(nC), new MC.c
+       }
+ ... (31 more added lines; see GitHub link above)
```

#### 104. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1261-L1262` → after: `L9415-L9558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR9415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L9415-L9558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L9415-L9558) · [Before (L1261-L1262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L1261-L1262)

```diff
-       multiplyByFloats(kk, ek) {
-         return new Dk(this.width * kk, this.height * ek)
+       _getByTags(CC, zC, ZC) {
+         if (void 0 === zC) return CC;
+         const QC = [];
+         for (const wC in CC) {
+           const bC = CC[wC];
+           qC.e && qC.e.MatchesQuery(bC, zC) && (!ZC || ZC(bC)) && QC.push(bC)
+         }
+         return QC
+       }
+       getMeshesByTags(CC, zC) {
+         return this._getByTags(this.meshes, CC, zC)
+       }
+       getCamerasByTags(CC, zC) {
+         return this._getByTags(this.cameras, CC, zC)
+       }
+       getLightsByTags(CC, zC) {
+ ... (128 more added lines; see GitHub link above)
```

#### 105. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1264-L1265` → after: `L9560-L9561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR9560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L9560-L9561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L9560-L9561) · [Before (L1264-L1265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L1264-L1265)

```diff
-       clone() {
-         return new Dk(this.width, this.height)
+       getGeometryByID(CC) {
+         return this.getGeometryById(CC)
```

#### 106. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1267-L1268` → after: `L9563-L9564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR9563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L9563-L9564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L9563-L9564) · [Before (L1267-L1268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L1267-L1268)

```diff
-       equals(kk) {
-         return !!kk && (this.width === kk.width && this.height === kk.height)
+       getMeshByID(CC) {
+         return this.getMeshById(CC)
```

#### 107. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1270-L1271` → after: `L9566-L9567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR9566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L9566-L9567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L9566-L9567) · [Before (L1270-L1271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L1270-L1271)

```diff
-       get surface() {
-         return this.width * this.height
+       getMeshByUniqueID(CC) {
+         return this.getMeshByUniqueId(CC)
```

#### 108. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1273-L1274` → after: `L9569-L9570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR9569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L9569-L9570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L9569-L9570) · [Before (L1273-L1274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L1273-L1274)

```diff
-       static Zero() {
-         return new Dk(0, 0)
+       getLastMeshByID(CC) {
+         return this.getLastMeshById(CC)
```

#### 109. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1276-L1277` → after: `L9572-L9573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR9572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L9572-L9573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L9572-L9573) · [Before (L1276-L1277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L1276-L1277)

```diff
-       add(kk) {
-         return new Dk(this.width + kk.width, this.height + kk.height)
+       getMeshesByID(CC) {
+         return this.getMeshesById(CC)
```

#### 110. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1279-L1280` → after: `L9575-L9576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR9575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L9575-L9576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L9575-L9576) · [Before (L1279-L1280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L1279-L1280)

```diff
-       subtract(kk) {
-         return new Dk(this.width - kk.width, this.height - kk.height)
+       getTransformNodeByID(CC) {
+         return this.getTransformNodeById(CC)
```

#### 111. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1282-L1283` → after: `L9578-L9579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR9578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L9578-L9579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L9578-L9579) · [Before (L1282-L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L1282-L1283)

```diff
-       scale(kk) {
-         return new Dk(this.width * kk, this.height * kk)
+       getTransformNodeByUniqueID(CC) {
+         return this.getTransformNodeByUniqueId(CC)
```

#### 112. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L1285-L1288` → after: `L9581-L9582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR9581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L9581-L9582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/252.js#L9581-L9582) · [Before (L1285-L1288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/252.js#L1285-L1288)

```diff
-       static Lerp(kk, ek, ik) {
-         const fk = kk.width + (ek.width - kk.width) * ik,
-           Sk = kk.height + (ek.height - kk.height) * ik;
-         return new Dk(fk, Sk)
+       getTransformNodesByID(CC) {
+         return this.getTransformNodesById(CC)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/253.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/253.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db)

#### 1. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/253.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/253.js#L2)

```diff
- export const ids = [253];
+ export const ids = [253, 353];
```

#### 2. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L4-L96` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/253.js#L4) · [Before (L4-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/253.js#L4-L96)

```diff
-   39804: (kk, ek, ik) => {
-     ik.d(ek, {
-       e: () => bk,
-       i: () => rk
-     });
-     var Dk = ik(38272),
-       fk = ik(39585),
-       Sk = ik(39782),
-       bk = {};
-     class rk {
-       constructor(kk) {
-         this.attachedToElement = !1, this.attached = {}, this.camera = kk, this.checkInputs = () => {}
-       }
-       add(kk) {
-         const ek = kk.getSimpleName();
-         this.attached[ek] ? Dk.b.Warn("camera input of type " + ek + " already exists on camera") : (this.attached[ek] = kk, kk.camera = this.camera, kk.checkInputs && (this.checkInputs = this._addCheckInputs(kk.checkInputs.bind(kk))), this.attachedToElement && kk.attachControl(t … [truncated]
- ... (77 more removed lines; see GitHub link above)
+   39674: (CC, zC, ZC) => {
```

#### 3. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L100-L511` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/253.js#L8-L10) · [Before (L100-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/253.js#L100-L511)

```diff
-     var Dk = ik(39566),
-       fk = ik(39570),
-       Sk = ik(39458),
-       bk = ik(36698),
-       rk = ik(39564),
-       Pk = ik(40053),
-       mk = ik(36734),
-       Mk = ik(36726),
-       Kk = ik(39585),
-       xk = ik(39391),
-       nk = ik(38272),
-       Uk = ik(39607),
-       Hk = ik(37497),
-       wk = ik(39646);
-     var lk = ik(39467);
-     let pk = !1;
- ... (396 more removed lines; see GitHub link above)
+     class QC {
+       static GetShadersRepository() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? QC.ShadersRepository : QC.ShadersRepositoryWGSL
```

#### 4. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L513-L514` → after: `L12-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L12-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/253.js#L12-L13) · [Before (L513-L514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/253.js#L513-L514)

```diff
-       getClassName() {
-         return "DynamicTexture"
+       static GetShadersStore() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? QC.ShadersStore : QC.ShadersStoreWGSL
```

#### 5. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L516-L575` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/253.js#L15-L16) · [Before (L516-L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/253.js#L516-L575)

```diff
-       get canRescale() {
-         return !0
-       }
-       _recreate(kk) {
-         this._canvas.width = kk.width, this._canvas.height = kk.height, this.releaseInternalTexture(), this._texture = this._getEngine().createDynamicTexture(kk.width, kk.height, this._generateMipMaps, this.samplingMode)
-       }
-       scale(kk) {
-         const ek = this.getSize();
-         ek.width *= kk, ek.height *= kk, this._recreate(ek)
-       }
-       scaleTo(kk, ek) {
-         const ik = this.getSize();
-         ik.width = kk, ik.height = ek, this._recreate(ik)
-       }
-       getContext() {
-         return this._context
- ... (44 more removed lines; see GitHub link above)
+       static GetIncludesShadersStore() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? QC.IncludesShadersStore : QC.IncludesShadersStoreWGSL
```

#### 6. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L579-L581` → after: `L21-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L21-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/253.js#L21-L23) · [Before (L579-L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/253.js#L579-L581)

```diff
-   40727: (kk, ek, ik) => {
-     ik.d(ek, {
-       c: () => fk
+   60938: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       postprocessVertexShader: () => nC
```

#### 7. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L583-L605` → after: `L25-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L25-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/253.js#L25-L31) · [Before (L583-L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/253.js#L583-L605)

```diff
-     var Dk = ik(40053);
-     class fk extends Dk.f {
-       get depth() {
-         return this._depth
-       }
-       constructor(kk, ek, ik, fk, Sk, bk) {
-         let rk = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
-           Pk = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
-           mk = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : Dk.f.TRILINEAR_SAMPLINGMODE,
-           Mk = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
-           Kk = arguments.length > 10 ? arguments[10] : void 0,
-           xk = arguments.length > 11 ? arguments[11] : void 0;
-         super(null, bk, !rk, Pk), this.format = Sk, this._texture = bk.JU().createRawTexture2DArray(kk, ek, ik, fk, Sk, rk, Pk, mk, null, Mk, Kk ?? 0, xk), this._depth = fk, this.is2DArray = !0
-       }
-       update(kk) {
-         this.updateMipLevel(kk, 0)
- ... (7 more removed lines; see GitHub link above)
+     var QC = ZC(39674);
+     const wC = "postprocessVertexShader",
+       bC = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTE … [truncated]
+     QC.b.ShadersStore[wC] || (QC.b.ShadersStore[wC] = bC);
+     const nC = {
+       name: wC,
+       shader: bC
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/254.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/254.js` (48 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6)

#### 1. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/254.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/254.js#L4)

```diff
-   39774: (kk, ek, ik) => {
+   39882: (CC, zC, ZC) => {
```

#### 2. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L6` → after: `L6-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L6-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/254.js#L6-L12) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/254.js#L6)

```diff
-       d: () => dk
+       c: () => NC,
+       g: () => WC,
+       h: () => oC,
+       i: () => MC,
+       k: () => qC,
+       m: () => fC,
+       o: () => FC
```

#### 3. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L8-L41` → after: `L14-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L14-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/254.js#L14-L21) · [Before (L8-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/254.js#L8-L41)

```diff
-     var Dk = ik(39566),
-       fk = ik(39570),
-       Sk = ik(36698),
-       bk = ik(39778),
-       rk = ik(39804),
-       Pk = ik(39751),
-       mk = ik(39662);
-     let Mk = (() => {
-       var kk;
-       let ek, ik, bk, rk, Mk, Kk, xk, nk, Uk, Hk, wk, lk = [],
-         pk = [],
-         yk = [],
-         Yk = [],
-         Lk = [],
-         Ck = [],
-         Ak = [],
- ... (18 more removed lines; see GitHub link above)
+     var QC = ZC(38507),
+       wC = ZC(39889);
+ 
+     function bC(CC, zC, ZC, QC) {
+       switch (zC) {
+         case 5120: {
+           let zC = CC.getInt8(ZC);
+           return QC && (zC = Math.max(zC / 127, -1)), zC
```

#### 4. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L43-L57` → after: `L23-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L23-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/254.js#L23-L25) · [Before (L43-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/254.js#L43-L57)

```diff
-         attachControl(kk) {
-           kk = mk.i.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.XF(), this._engine = this._scene.JU(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
-             this._keys.length = 0
-           })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((ek => {
-             const ik = ek.event;
-             if (!ik.metaKey)
-               if (ek.type === Pk.b.KEYDOWN) {
-                 if (-1 !== this.keysUp.indexOf(ik.keyCode) || -1 !== this.keysDown.indexOf(ik.keyCode) || -1 !== this.keysLeft.indexOf(ik.keyCode) || -1 !== this.keysRight.indexOf(ik.keyCode) || -1 !== this.keysUpward.indexOf(ik.keyCode) || -1 !== this.keysDownward.indexOf(ik.key … [truncated]
-                   -1 === this._keys.indexOf(ik.keyCode) && this._keys.push(ik.keyCode), kk || ik.preventDefault()
-                 }
-               } else if (-1 !== this.keysUp.indexOf(ik.keyCode) || -1 !== this.keysDown.indexOf(ik.keyCode) || -1 !== this.keysLeft.indexOf(ik.keyCode) || -1 !== this.keysRight.indexOf(ik.keyCode) || -1 !== this.keysUpward.indexOf(ik.keyCode) || -1 !== this.keysDownward.indexOf(i … [truncated]
-               const ek = this._keys.indexOf(ik.keyCode);
-               ek >= 0 && this._keys.splice(ek, 1), kk || ik.preventDefault()
-             }
-           })))
+         case 5121: {
+           let zC = CC.getUint8(ZC);
+           return QC && (zC /= 255), zC
```

#### 5. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L59-L60` → after: `L27-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L27-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/254.js#L27-L29) · [Before (L59-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/254.js#L59-L60)

```diff
-         detachControl() {
-           this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserv … [truncated]
+         case 5122: {
+           let zC = CC.getInt16(ZC, !0);
+           return QC && (zC = Math.max(zC / 32767, -1)), zC
```

#### 6. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L62-L77` → after: `L31-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L31-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/254.js#L31-L33) · [Before (L62-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/254.js#L62-L77)

```diff
-         checkInputs() {
-           if (this._onKeyboardObserver) {
-             const kk = this.camera,
-               ek = kk.movement.input,
-               ik = ek.getEntry("keyboard", "translate"),
-               Dk = ek.getEntry("keyboard", "rotate"),
-               fk = Dk?.sensitivity ?? 1,
-               bk = kk._localDirection.Z6(0, 0, 0);
-             for (let Sk = 0; Sk < this._keys.length; Sk++) {
-               const ek = this._keys[Sk]; - 1 !== this.keysLeft.indexOf(ek) ? bk.x -= 1 : -1 !== this.keysUp.indexOf(ek) ? bk.z += 1 : -1 !== this.keysRight.indexOf(ek) ? bk.x += 1 : -1 !== this.keysDown.indexOf(ek) ? bk.z -= 1 : -1 !== this.keysUpward.indexOf(ek) ? bk.y += 1 : -1 … [truncated]
-             }
-             if (ik && (0 !== bk.x || 0 !== bk.y || 0 !== bk.z)) {
-               const ek = kk._computeLocalCameraSpeed() * (ik.sensitivity ?? 1);
-               bk.normalize().scaleInPlace(ek), kk.XF().useRightHandedSystem && (bk.z *= -1), kk.getViewMatrix().invertToRef(kk._cameraTransformMatrix), Sk.o.TransformNormalToRef(bk, kk._cameraTransformMatrix, kk._transformedDirection), kk.cameraDirection.addInPlace(kk._transforme … [truncated]
-             }
-           }
+         case 5123: {
+           let zC = CC.getUint16(ZC, !0);
+           return QC && (zC /= 65535), zC
```

#### 7. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L79-L80` → after: `L35-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L35-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/254.js#L35-L107) · [Before (L79-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/254.js#L79-L80)

```diff
-         getClassName() {
-           return "FreeCameraKeyboardMoveInput"
+         case 5131:
+           return (0, wC.e)(CC.getUint16(ZC, !0));
+         case 5124:
+           return CC.getInt32(ZC, !0);
+         case 5125:
+           return CC.getUint32(ZC, !0);
+         case 5126:
+           return CC.getFloat32(ZC, !0);
+         default:
+           throw new Error(`Invalid component type ${zC}`)
+       }
+     }
+ 
+     function nC(CC, zC, ZC, QC, bC) {
+       switch (zC) {
+         case 5120:
+ ... (57 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L82-L83` → after: `L109-L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L109-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/254.js#L109-L116) · [Before (L82-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/254.js#L82-L83)

```diff
-         _onLostFocus() {
-           this._keys.length = 0
+       } else {
+         const MC = ArrayBuffer.isView(CC) ? new DataView(CC.buffer, CC.byteOffset, CC.byteLength) : new DataView(CC),
+           gC = fC(wC);
+         for (let CC = 0; CC < oC; CC += QC) {
+           for (let CC = 0, ZC = zC; CC < QC; CC++, ZC += gC) WC[CC] = NC[CC] = bC(MC, wC, ZC, qC);
+           FC(NC, CC);
+           for (let CC = 0, ZC = zC; CC < QC; CC++, ZC += gC) WC[CC] !== NC[CC] && nC(MC, wC, ZC, qC, NC[CC]);
+           zC += ZC
```

#### 9. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L85-L86` → after: `L118-L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L118-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/254.js#L118-L133) · [Before (L85-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/254.js#L85-L86)

```diff
-         getSimpleName() {
-           return "keyboard"
+       }
+     }
+ 
+     function qC(CC, zC, ZC, wC, bC, nC, qC, FC) {
+       const WC = zC * fC(ZC),
+         NC = qC * zC;
+       if (5126 !== ZC || bC !== WC) {
+         const QC = new Float32Array(NC);
+         return oC(CC, wC, bC, zC, ZC, NC, nC, ((CC, ZC) => {
+           for (let wC = 0; wC < zC; wC++) QC[ZC + wC] = CC[wC]
+         })), QC
+       }
+       if (!(CC instanceof Array || CC instanceof Float32Array) || 0 !== wC || CC.length !== NC) {
+         if (CC instanceof Array) {
+           const zC = wC / 4;
+           return CC.slice(zC, zC + NC)
```

#### 10. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L88-L90` → after: `L135-L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L135-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/254.js#L135-L137) · [Before (L88-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/254.js#L88-L90)

```diff
-         _getLocalRotation() {
-           const kk = this.camera._calculateHandednessMultiplier();
-           return this.rotationSpeed * this._engine.getDeltaTime() / 1e3 * kk
+         if (ArrayBuffer.isView(CC)) {
+           const zC = CC.byteOffset + wC;
+           return 0 !== (3 & zC) && (QC.c.Warn("Float array must be aligned to 4-bytes border"), FC = !0), FC ? new Float32Array(CC.buffer.slice(zC, zC + NC * Float32Array.BYTES_PER_ELEMENT)) : new Float32Array(CC.buffer, zC, NC)
```

#### 11. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L92-L265` → after: `L139-L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L139-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/254.js#L139-L178) · [Before (L92-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/254.js#L92-L265)

```diff
-       }, (() => {
-         const Sk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
-         ek = [(0, fk.I)()], ik = [(0, fk.I)()], bk = [(0, fk.I)()], rk = [(0, fk.I)()], Mk = [(0, fk.I)()], Kk = [(0, fk.I)()], xk = [(0, fk.I)()], nk = [(0, fk.I)()], Uk = [(0, fk.I)()], Hk = [(0, fk.I)()], wk = [(0, fk.I)()], (0, Dk.d)(null, null, ek, {
-           kind: "field",
-           name: "keysUp",
-           static: !1,
-           private: !1,
-           access: {
-             has: kk => "keysUp" in kk,
-             get: kk => kk.keysUp,
-             set: (kk, ek) => {
-               kk.keysUp = ek
-             }
-           },
-           metadata: Sk
-         }, lk, pk), (0, Dk.d)(null, null, ik, {
- ... (158 more removed lines; see GitHub link above)
+         return new Float32Array(CC, wC, NC)
+       }
+       return FC ? CC.slice() : CC
+     }
+ 
+     function FC(CC, zC, ZC, wC, bC, nC, qC) {
+       const FC = fC(ZC),
+         WC = function(CC) {
+           switch (CC) {
+             case 5120:
+               return Int8Array;
+             case 5121:
+               return Uint8Array;
+             case 5122:
+               return Int16Array;
+             case 5123:
+ ... (24 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L267-L304` → after: `L180-L267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L180-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/254.js#L180-L267) · [Before (L267-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/254.js#L267-L304)

```diff
-         attachControl(kk) {
-           kk = mk.i.BackCompatCameraNoPreventDefault(arguments);
-           const ek = this.camera.JU(),
-             ik = ek.getInputElement();
-           this._pointerInput || (this._pointerInput = Dk => {
-             const fk = Dk.event,
-               Sk = "touch" === fk.pointerType;
-             if (!this.touchEnabled && Sk) return;
-             if (Dk.type !== xk.c.POINTERMOVE && -1 === this.buttons.indexOf(fk.button)) return;
-             const bk = fk.target;
-             if (Dk.type === xk.c.POINTERDOWN) {
-               if (Sk && -1 !== this._activePointerId || !Sk && -1 !== this._currentActiveButton) return;
-               this._activePointerId = fk.pointerId;
-               try {
-                 bk?.setPointerCapture(fk.pointerId)
-               } catch (rk) {} - 1 === this._currentActiveButton && (this._currentActiveButton = fk.button), this._previousPosition = {
- ... (22 more removed lines; see GitHub link above)
+         return new WC(CC.slice(QC, QC + NC))
+       }
+       let MC, gC = wC;
+       ArrayBuffer.isView(CC) ? (MC = CC.buffer, gC += CC.byteOffset) : MC = CC;
+       if (gC + (nC - 1) * bC + zC * FC > MC.byteLength) throw new Error("Last accessed byte is out of bounds.");
+       const SC = zC * FC;
+       if (bC < SC) throw new Error("Byte stride cannot be smaller than the component's byte size.");
+       if (bC !== SC) {
+         const CC = new WC(NC),
+           ZC = new Uint8Array(MC, gC),
+           QC = new Uint8Array(CC.buffer),
+           wC = zC * FC;
+         for (let zC = 0, fC = 0, oC = 0; zC < nC; zC++, fC += bC, oC += wC) QC.set(ZC.subarray(fC, fC + wC), oC);
+         return CC
+       }
+       return 1 !== FC && 0 !== (gC & FC - 1) && (QC.c.Warn("Array must be aligned to border of element size. Data will be copied."), qC = !0), qC ? new WC(MC.slice(gC, gC + NC * FC)) : new WC(MC, gC, NC)
+ ... (72 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L306-L313` → after: `L269-L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L269-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/254.js#L269-L271) · [Before (L306-L313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/254.js#L306-L313)

```diff
-           }), this._onMouseMove = ik => {
-             if (!ek.isPointerLock) return;
-             const Dk = this.camera._calculateHandednessMultiplier();
-             this._applyPointerRotation(ik.movementX * Dk, ik.movementY * Dk), this._previousPosition = null, kk || ik.preventDefault()
-           }, this._observer = this.camera.XF()._inputManager._addCameraPointerObserver(this._pointerInput, xk.c.POINTERDOWN | xk.c.POINTERUP | xk.c.POINTERMOVE), ik && (this._contextMenuBind = kk => this.onContextMenu(kk), ik.addEventListener("contextmenu", this._contextMenuBind, … [truncated]
-         }
-         onContextMenu(kk) {
-           kk.preventDefault()
+             zC.lookForClosingBracketForUniformBuffer && -1 !== this.line.indexOf("}") && (zC.lookForClosingBracketForUniformBuffer = !1, wC.endOfUniformBufferProcessor && (ZC = wC.endOfUniformBufferProcessor(this.line, zC.isFragment, zC.processingContext)))
+           }
+           QC += ZC + "\n"
```

#### 14. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L315-L319` → after: `L273-L308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L273-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/254.js#L273-L308) · [Before (L315-L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/254.js#L315-L319)

```diff
-         detachControl() {
-           if (this._observer) {
-             if (this.camera.XF()._inputManager._removeCameraPointerObserver(this._observer), this._contextMenuBind) {
-               const kk = this.camera.JU().getInputElement();
-               kk && kk.removeEventListener("contextmenu", this._contextMenuBind)
+         for (const wC of this.children) QC += wC.process(CC, zC, ZC);
+         return this.additionalDefineKey && (CC[this.additionalDefineKey] = this.additionalDefineValue || "true", ZC[this.additionalDefineKey] = CC[this.additionalDefineKey]), QC
+       }
+     }
+     class wC {
+       constructor() {
+         this._lines = []
+       }
+       get currentLine() {
+         return this._lines[this.lineIndex]
+       }
+       get canRead() {
+         return this.lineIndex < this._lines.length - 1
+       }
+       set lines(CC) {
+         this._lines.length = 0;
+ ... (20 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L325-L329` → after: `L312-L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L312-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/254.js#L312-L318) · [Before (L325-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/254.js#L325-L329)

```diff
-         getClassName() {
-           return "FreeCameraMouseInput"
-         }
-         getSimpleName() {
-           return "mouse"
+       }
+     }
+     class bC extends QC {
+       process(CC, zC, ZC) {
+         for (let QC = 0; QC < this.children.length; QC++) {
+           const wC = this.children[QC];
+           if (wC.isValid(CC)) return wC.process(CC, zC, ZC)
```

#### 16. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L331-L343` → after: `L320-L349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L320-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/254.js#L320-L349) · [Before (L331-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/254.js#L331-L343)

```diff
-       }, (() => {
-         const mk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
-         ek = [(0, fk.I)()], ik = [(0, fk.I)()], (0, Dk.d)(null, null, ek, {
-           kind: "field",
-           name: "buttons",
-           static: !1,
-           private: !1,
-           access: {
-             has: kk => "buttons" in kk,
-             get: kk => kk.buttons,
-             set: (kk, ek) => {
-               kk.buttons = ek
-             }
+         return ""
+       }
+     }
+     class nC extends QC {
+       isValid(CC) {
+         return this.testExpression.isTrue(CC)
+       }
+     }
+     class fC {
+       isTrue(CC) {
+         return !0
+       }
+       static postfixToInfix(CC) {
+         const zC = [];
+         for (const ZC of CC)
+           if (void 0 === fC._OperatorPriority[ZC]) zC.push(ZC);
+ ... (14 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L345-L356` → after: `L351-L352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L351-L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/254.js#L351-L352) · [Before (L345-L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/254.js#L345-L356)

```diff
-           metadata: mk
-         }, Sk, bk), (0, Dk.d)(null, null, ik, {
-           kind: "field",
-           name: "angularSensibility",
-           static: !1,
-           private: !1,
-           access: {
-             has: kk => "angularSensibility" in kk,
-             get: kk => kk.angularSensibility,
-             set: (kk, ek) => {
-               kk.angularSensibility = ek
-             }
+           bC = CC => {
+             QC < fC._Stack.length - 1 && (fC._Stack[++QC] = CC)
```

#### 18. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L358-L379` → after: `L354-L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L354-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/254.js#L354-L369) · [Before (L358-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/254.js#L358-L379)

```diff
-           metadata: mk
-         }, rk, Pk), mk && Object.defineProperty(kk, Symbol.metadata, {
-           enumerable: !0,
-           configurable: !0,
-           writable: !0,
-           value: mk
-         })
-       })(), kk
-     })();
-     rk.e.FreeCameraMouseInput = nk;
-     var Uk = ik(39758);
-     let Hk = (() => {
-       var kk;
-       let ek, ik, Sk, bk = [],
-         rk = [],
-         Pk = [],
- ... (6 more removed lines; see GitHub link above)
+           nC = () => fC._Stack[QC],
+           oC = () => -1 === QC ? "!!INVALID EXPRESSION!!" : fC._Stack[QC--];
+         let qC = 0,
+           FC = "";
+         for (; qC < CC.length;) {
+           const zC = CC.charAt(qC),
+             WC = qC < CC.length - 1 ? CC.substring(qC, 2 + qC) : "";
+           if ("(" === zC) FC = "", bC(zC);
+           else if (")" === zC) {
+             for (wC(); - 1 !== QC && "(" !== nC();) ZC.push(oC());
+             oC()
+           } else if (fC._OperatorPriority[WC] > 1) {
+             for (wC(); - 1 !== QC && fC._OperatorPriority[nC()] >= fC._OperatorPriority[WC];) ZC.push(oC());
+             bC(WC), qC++
+           } else FC += zC;
+           qC++
```

#### 19. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L381-L390` → after: `L371-L437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L371-L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/254.js#L371-L437) · [Before (L381-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/254.js#L381-L390)

```diff
-         attachControl(kk) {
-           kk = mk.i.BackCompatCameraNoPreventDefault(arguments), this._wheel = ek => {
-             if (ek.type !== xk.c.POINTERWHEEL) return;
-             const ik = ek.event,
-               Dk = ik.deltaMode === Uk.c.DOM_DELTA_LINE ? this._ffMultiplier : 1;
-             this._wheelDeltaX += this.wheelPrecisionX * Dk * ik.deltaX / this._normalize, this._wheelDeltaY -= this.wheelPrecisionY * Dk * ik.deltaY / this._normalize, this._wheelDeltaZ += this.wheelPrecisionZ * Dk * ik.deltaZ / this._normalize, ik.preventDefault && (kk || ik.pre … [truncated]
-           }, this._observer = this.camera.XF()._inputManager._addCameraPointerObserver(this._wheel, xk.c.POINTERWHEEL)
-         }
-         detachControl() {
-           this._observer && (this.camera.XF()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null), this.onChangedObservable && this.onChangedObservable.clear()
+         for (wC(); - 1 !== QC;) "(" === nC() ? oC() : ZC.push(oC());
+         return fC._InfixToPostfixCache.size >= fC.InfixToPostfixCacheLimitSize && fC.ClearCache(), fC._InfixToPostfixCache.set(CC, {
+           result: ZC,
+           accessTime: Date.now()
+         }), ZC
+       }
+       static ClearCache() {
+         const CC = Array.from(fC._InfixToPostfixCache.entries()).sort(((CC, zC) => CC[1].accessTime - zC[1].accessTime));
+         for (let zC = 0; zC < fC.InfixToPostfixCacheCleanupSize; zC++) fC._InfixToPostfixCache.delete(CC[zC][0])
+       }
+     }
+     fC.InfixToPostfixCacheLimitSize = 5e4, fC.InfixToPostfixCacheCleanupSize = 25e3, fC._InfixToPostfixCache = new Map, fC._OperatorPriority = {
+       ")": 0,
+       "(": 1,
+       "||": 2,
+       "&&": 3
+ ... (51 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L392-L397` → after: `L439-L518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L439-L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/254.js#L439-L518) · [Before (L392-L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/254.js#L392-L397)

```diff
-         checkInputs() {
-           this.onChangedObservable.notifyObservers({
-             wheelDeltaX: this._wheelDeltaX,
-             wheelDeltaY: this._wheelDeltaY,
-             wheelDeltaZ: this._wheelDeltaZ
-           }), this._wheelDeltaX = 0, this._wheelDeltaY = 0, this._wheelDeltaZ = 0
+         return zC
+       }
+     }
+     var NC = ZC(39694),
+       MC = ZC(39692);
+     const gC = /defined\s*?\((.+?)\)/g,
+       SC = /defined\s*?\[(.+?)\]/g,
+       pC = /#include\s?<(.+)>(\((.*)\))*(\[(.*)\])*/g,
+       PC = /__decl__/,
+       GC = /light\{X\}.(\w*)/g,
+       RC = /\{X\}/g,
+       AC = [],
+       xC = /(#ifdef)|(#else)|(#elif)|(#endif)|(#ifndef)|(#if)/;
+ 
+     function JC(CC) {
+       CC.processor && CC.processor.initializeShaders && CC.processor.initializeShaders(CC.processingContext)
+ ... (64 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L399-L400` → after: `L520-L532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L520-L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/254.js#L520-L532) · [Before (L399-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/254.js#L399-L400)

```diff
-         getClassName() {
-           return "BaseCameraMouseWheelInput"
+         let QC = ZC[ZC.length - 1];
+         return "string" === typeof QC && (QC = QC.replace(SC, "defined($1)")), "string" === typeof QC ? vC(QC) : QC
+       }(wC), ZC
+     }
+ 
+     function hC(CC, zC, ZC, wC) {
+       let bC;
+       for (; KC(CC, ZC, wC);) {
+         bC = CC.currentLine;
+         const nC = bC.substring(0, 5).toLowerCase();
+         if ("#else" === nC) {
+           const ZC = new QC;
+           return zC.children.push(ZC), void KC(CC, ZC, wC)
```

#### 22. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L402-L403` → after: `L534-L536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L534-L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/254.js#L534-L536) · [Before (L402-L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/254.js#L402-L403)

```diff
-         getSimpleName() {
-           return "mousewheel"
+         if ("#elif" === nC) {
+           const CC = eC(bC, 5);
+           zC.children.push(CC), ZC = CC
```

#### 23. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L405-L442` → after: `L538-L573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L538-L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/254.js#L538-L573) · [Before (L405-L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/254.js#L405-L442)

```diff
-       }, (() => {
-         const mk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
-         ek = [(0, fk.I)()], ik = [(0, fk.I)()], Sk = [(0, fk.I)()], (0, Dk.d)(null, null, ek, {
-           kind: "field",
-           name: "wheelPrecisionX",
-           static: !1,
-           private: !1,
-           access: {
-             has: kk => "wheelPrecisionX" in kk,
-             get: kk => kk.wheelPrecisionX,
-             set: (kk, ek) => {
-               kk.wheelPrecisionX = ek
-             }
-           },
-           metadata: mk
-         }, bk, rk), (0, Dk.d)(null, null, ik, {
- ... (22 more removed lines; see GitHub link above)
+       }
+     }
+ 
+     function KC(CC, zC, ZC) {
+       for (; CC.canRead;) {
+         CC.lineIndex++;
+         const wC = CC.currentLine;
+         if (wC.indexOf("#") >= 0) {
+           const QC = xC.exec(wC);
+           if (QC && QC.length) {
+             switch (QC[0]) {
+               case "#ifdef": {
+                 const QC = new bC;
+                 zC.children.push(QC);
+                 const nC = eC(wC, 6);
+                 QC.children.push(nC), hC(CC, QC, nC, ZC);
+ ... (20 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L444-L491` → after: `L575-L576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L575-L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/254.js#L575-L576) · [Before (L444-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/254.js#L444-L491)

```diff
-           },
-           metadata: mk
-         }, nk, Hk), mk && Object.defineProperty(kk, Symbol.metadata, {
-           enumerable: !0,
-           configurable: !0,
-           writable: !0,
-           value: mk
-         })
-       })(), kk
-     })();
-     var wk;
-     ! function(kk) {
-       kk[kk.MoveRelative = 0] = "MoveRelative", kk[kk.RotateRelative = 1] = "RotateRelative", kk[kk.MoveScene = 2] = "MoveScene"
-     }(wk || (wk = {}));
-     let lk = (() => {
-       var kk;
- ... (32 more removed lines; see GitHub link above)
+             continue
+           }
```

#### 25. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L493-L494` → after: `L578-L581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L578-L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/254.js#L578-L581) · [Before (L493-L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/254.js#L493-L494)

```diff
-         set wheelYRotateRelative(kk) {
-           null === kk && this._wheelYAction !== wk.RotateRelative || (this._wheelYAction = wk.RotateRelative, this._wheelYActionCoordinate = kk)
+         const nC = new QC;
+         if (nC.line = wC, zC.children.push(nC), "#" === wC[0] && "d" === wC[1]) {
+           const CC = wC.replace(";", "").split(" ");
+           nC.additionalDefineKey = CC[1], 3 === CC.length && (nC.additionalDefineValue = CC[2])
```

#### 26. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L496-L497` → after: `L583-L642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L583-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/254.js#L583-L642) · [Before (L496-L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/254.js#L496-L497)

```diff
-         get wheelYRotateRelative() {
-           return this._wheelYAction !== wk.RotateRelative ? null : this._wheelYActionCoordinate
+       }
+       return !1
+     }
+ 
+     function YC(CC, zC, ZC, bC) {
+       const nC = new QC,
+         fC = new wC;
+       return fC.lineIndex = -1, fC.lines = CC.split("\n"), KC(fC, nC, bC), nC.process(zC, ZC, bC)
+     }
+ 
+     function dC(CC, zC) {
+       const ZC = CC.defines,
+         QC = {};
+       for (const wC of ZC) {
+         const CC = wC.replace("#define", "").replace(";", "").trim().split(" ");
+         QC[CC[0]] = CC.length > 1 ? CC[1] : ""
+ ... (44 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L499-L500` → after: `L644-L690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L644-L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/254.js#L644-L690) · [Before (L499-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/254.js#L499-L500)

```diff
-         set wheelZRotateRelative(kk) {
-           null === kk && this._wheelZAction !== wk.RotateRelative || (this._wheelZAction = wk.RotateRelative, this._wheelZActionCoordinate = kk)
+       }
+       AC.length = 0;
+       const nC = wC.join("");
+       bC ? mC(nC.toString(), zC, ZC) : ZC(nC)
+     }
+     const HC = {
+       loadFile: (CC, zC, ZC, QC, wC, bC) => {
+         throw (0, NC.i)("FileTools")
+       }
+     }
+   },
+   39692: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       e: () => wC,
+       h: () => bC,
+       l: () => fC,
+ ... (31 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L502-L503` → after: `L692-L694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L692-L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/254.js#L692-L694) · [Before (L502-L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/254.js#L502-L503)

```diff
-         get wheelZRotateRelative() {
-           return this._wheelZAction !== wk.RotateRelative ? null : this._wheelZActionCoordinate
+         case 0: {
+           const CC = new Uint8Array(zC);
+           return QC && CC.set(new Uint8Array(QC)), CC
```

#### 29. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L505-L506` → after: `L696-L698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L696-L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/254.js#L696-L698) · [Before (L505-L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/254.js#L505-L506)

```diff
-         set wheelXMoveScene(kk) {
-           null === kk && this._wheelXAction !== wk.MoveScene || (this._wheelXAction = wk.MoveScene, this._wheelXActionCoordinate = kk)
+         case 4: {
+           const CC = "number" !== typeof zC ? new Int16Array(zC) : new Int16Array(ZC ? zC / 2 : zC);
+           return QC && CC.set(new Int16Array(QC)), CC
```

#### 30. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L508-L509` → after: `L700-L706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L700-L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/254.js#L700-L706) · [Before (L508-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/254.js#L508-L509)

```diff
-         get wheelXMoveScene() {
-           return this._wheelXAction !== wk.MoveScene ? null : this._wheelXActionCoordinate
+         case 5:
+         case 8:
+         case 9:
+         case 10:
+         case 2: {
+           const CC = "number" !== typeof zC ? new Uint16Array(zC) : new Uint16Array(ZC ? zC / 2 : zC);
+           return QC && CC.set(new Uint16Array(QC)), CC
```

#### 31. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L511-L512` → after: `L708-L710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L708-L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/254.js#L708-L710) · [Before (L511-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/254.js#L511-L512)

```diff
-         set wheelYMoveScene(kk) {
-           null === kk && this._wheelYAction !== wk.MoveScene || (this._wheelYAction = wk.MoveScene, this._wheelYActionCoordinate = kk)
+         case 6: {
+           const CC = "number" !== typeof zC ? new Int32Array(zC) : new Int32Array(ZC ? zC / 4 : zC);
+           return QC && CC.set(new Int32Array(QC)), CC
```

#### 32. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L514-L515` → after: `L712-L719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L712-L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/254.js#L712-L719) · [Before (L514-L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/254.js#L514-L515)

```diff
-         get wheelYMoveScene() {
-           return this._wheelYAction !== wk.MoveScene ? null : this._wheelYActionCoordinate
+         case 7:
+         case 11:
+         case 12:
+         case 13:
+         case 14:
+         case 15: {
+           const CC = "number" !== typeof zC ? new Uint32Array(zC) : new Uint32Array(ZC ? zC / 4 : zC);
+           return QC && CC.set(new Uint32Array(QC)), CC
```

#### 33. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L517-L518` → after: `L721-L723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L721-L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/254.js#L721-L723) · [Before (L517-L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/254.js#L517-L518)

```diff
-         set wheelZMoveScene(kk) {
-           null === kk && this._wheelZAction !== wk.MoveScene || (this._wheelZAction = wk.MoveScene, this._wheelZActionCoordinate = kk)
+         case 1: {
+           const CC = "number" !== typeof zC ? new Float32Array(zC) : new Float32Array(ZC ? zC / 4 : zC);
+           return QC && CC.set(new Float32Array(QC)), CC
```

#### 34. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L520-L521` → after: `L725-L751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L725-L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/254.js#L725-L751) · [Before (L520-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/254.js#L520-L521)

```diff
-         get wheelZMoveScene() {
-           return this._wheelZAction !== wk.MoveScene ? null : this._wheelZActionCoordinate
+       }
+       const wC = new Uint8Array(zC);
+       return QC && wC.set(new Uint8Array(QC)), wC
+     }
+   },
+   39694: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       b: () => qC,
+       d: () => FC,
+       f: () => oC,
+       i: () => wC
+     });
+     const QC = {};
+ 
+     function wC(CC) {
+       if (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || !QC[CC]) return QC[CC] = !0, `${CC} needs to be imported before as it contains a side-effect required by your code.`
+ ... (11 more added lines; see GitHub link above)
```

#### 35. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L523-L529` → after: `L753-L914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L753-L914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/254.js#L753-L914) · [Before (L523-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/254.js#L523-L529)

```diff
-         checkInputs() {
-           if (0 === this._wheelDeltaX && 0 === this._wheelDeltaY && 0 == this._wheelDeltaZ) return;
-           this._moveRelative.A_(0), this._rotateRelative.A_(0), this._moveScene.A_(0), this._updateCamera(), this.camera.XF().useRightHandedSystem && (this._moveRelative.z *= -1);
-           const kk = Sk.b.Zero();
-           this.camera.getViewMatrix().invertToRef(kk);
-           const ek = Sk.o.Zero();
-           Sk.o.TransformNormalToRef(this._moveRelative, kk, ek), this.camera.cameraRotation.x += this._rotateRelative.x / 200, this.camera.cameraRotation.y += this._rotateRelative.y / 200, this.camera.cameraDirection.addInPlace(ek), this.camera.cameraDirection.addInPlace(this._mo … [truncated]
+       };
+       return QC.__isSideEffectStub = !0, QC
+     }
+ 
+     function qC(CC) {
+       return !!CC && !CC.__isSideEffectStub
+     }
+ 
+     function FC(CC, zC) {
+       return {
+         get() {},
+         set(CC) {
+           Object.defineProperty(this, zC, {
+             value: CC,
+             writable: !0,
+             configurable: !0,
+ ... (146 more added lines; see GitHub link above)
```

#### 36. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L531-L532` → after: `L916-L949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L916-L949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/254.js#L916-L949) · [Before (L531-L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/254.js#L531-L532)

```diff
-         _updateCamera() {
-           this._updateCameraProperty(this._wheelDeltaX, this._wheelXAction, this._wheelXActionCoordinate), this._updateCameraProperty(this._wheelDeltaY, this._wheelYAction, this._wheelYActionCoordinate), this._updateCameraProperty(this._wheelDeltaZ, this._wheelZAction, this._whee … [truncated]
+         let NC = !1;
+         if (CC instanceof ArrayBuffer || ArrayBuffer.isView(CC))
+           if ("undefined" !== typeof Blob && "undefined" !== typeof URL) {
+             let zC;
+             zC = CC instanceof ArrayBuffer ? CC : (0, gC.i)(CC), bC = URL.createObjectURL(new Blob([zC], {
+               type: fC
+             })), NC = !0
+           } else bC = `data:${fC};base64,` + (0, oC.i)(CC);
+         else CC instanceof Blob ? (bC = URL.createObjectURL(CC), NC = !0) : (bC = RC.CleanUrl(CC), bC = RC.PreprocessUrl(bC));
+         const MC = zC => {
+           if (ZC) {
+             const QC = bC || CC.toString();
+             ZC(`Error while trying to load image: ${0===QC.indexOf("http")||QC.length<=128?QC:QC.slice(0,128)+"..."}`, zC)
+           }
+         };
+         if (WC?._features.forceBitmapOverHTMLImageElement) return iC(bC, (QC => {
+ ... (18 more added lines; see GitHub link above)
```

#### 37. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L534-L546` → after: `L951-L961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L951-L961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/254.js#L951-L961) · [Before (L534-L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/254.js#L534-L546)

```diff
-         _updateCameraProperty(kk, ek, ik) {
-           if (0 === kk) return;
-           if (null === ek || null === ik) return;
-           let Dk = null;
-           switch (ek) {
-             case wk.MoveRelative:
-               Dk = this._moveRelative;
-               break;
-             case wk.RotateRelative:
-               Dk = this._rotateRelative;
-               break;
-             case wk.MoveScene:
-               Dk = this._moveScene
+         AC(bC, SC);
+         const pC = [],
+           PC = () => {
+             for (const CC of pC) CC.target.removeEventListener(CC.name, CC.handler);
+             pC.length = 0
+           };
+         pC.push({
+           target: SC,
+           name: "load",
+           handler: () => {
+             PC(), zC(SC), NC && SC.src && URL.revokeObjectURL(SC.src)
```
