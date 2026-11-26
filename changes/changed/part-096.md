# Changed — Bundle Modifications Report (Part 096 / 146)

- **Updated at**: `2026-11-26T17:59 JST`
- **Part**: `96 / 146` (**400** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 095](part-095.md) · [Part 097 →](part-097.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/88.js` (fo1voe.f743fbcf → pxmq3aq.c63b303d · continued)

- **File**: `bundles/bloxd.io/chunks/js/88.js` (4637 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d)

#### 2195. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L16551` → after: `L15845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR15845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L15845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L15845) · [Before (L16551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L16551)

```diff
-         return null !== (rM = null === (iM = nM(MM)) || void 0 === iM ? void 0 : iM.facing.heading) && void 0 !== rM ? rM : MM.camera.heading
+         return null !== (eV = null === (xV = QV(VV)) || void 0 === xV ? void 0 : xV.facing.heading) && void 0 !== eV ? eV : VV.camera.heading
```

#### 2196. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L16556-L16557` → after: `L15850-L15851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR15850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L15850-L15851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L15850-L15851) · [Before (L16556-L16557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L16556-L16557)

```diff
-         if (!iM) return SM().copy(rM, MM.camera.eT());
-         const OM = (0, jM.b)(iM.facing.heading, iM.facing.pitch);
+         if (!xV) return YV().copy(eV, VV.camera.L_());
+         const JV = (0, UV.e)(xV.facing.heading, xV.facing.pitch);
```

#### 2197. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L16568-L16569` → after: `L15862-L15863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR15862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L15862-L15863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L15862-L15863) · [Before (L16568-L16569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L16568-L16569)

```diff
-         MM.hU.eZ(MM.camera.rK, MM.hU.names.mG, {
-           zh: iM.followEntity,
+         VV.sF.WC(VV.camera.J_, VV.sF.names.HA, {
+           zk: xV.followEntity,
```

#### 2198. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L16571-L16573` → after: `L15865-L15867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR15865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L15865-L15867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L15865-L15867) · [Before (L16571-L16573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L16571-L16573)

```diff
-           diM: iM.diM
-         }), MM.camera.zK = iM.savedZoomDistance, MM.camera.hK = iM.savedZoomDistance;
-         const SM = MM.CL.JV().yV;
+           iJV: xV.iJV
+         }), VV.camera.y_ = xV.savedZoomDistance, VV.camera.p_ = xV.savedZoomDistance;
+         const YV = VV.gZ.K9().I9;
```

#### 2199. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L16577` → after: `L15871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR15871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L15871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L15871) · [Before (L16577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L16577)

```diff
-         return null !== (rM = null === (iM = nM(MM)) || void 0 === iM ? void 0 : iM.savedZoomDistance) && void 0 !== rM ? rM : 0
+         return null !== (eV = null === (xV = QV(VV)) || void 0 === xV ? void 0 : xV.savedZoomDistance) && void 0 !== eV ? eV : 0
```

#### 2200. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L16580` → after: `L15874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR15874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L15874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L15874) · [Before (L16580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L16580)

```diff
-         return null !== (rM = null === (iM = nM(MM)) || void 0 === iM ? void 0 : iM.savedRigShift) && void 0 !== rM ? rM : PM
+         return null !== (eV = null === (xV = QV(VV)) || void 0 === xV ? void 0 : xV.savedRigShift) && void 0 !== eV ? eV : pV
```

#### 2201. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L16583-L16584` → after: `L15877-L15878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR15877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L15877-L15878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L15877-L15878) · [Before (L16583-L16584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L16583-L16584)

```diff
-           OM = iM && MM.hU.jK(iM.followEntity);
-         return !!OM && (iM.diM ? iM.diM(rM, !0, iM.followOffset) : SM().copy(rM, iM.followOffset), SM().add(rM, OM.bq, rM), !0)
+           JV = xV && VV.sF.U_(xV.followEntity);
+         return !!JV && (xV.iJV ? xV.iJV(eV, !0, xV.followOffset) : YV().copy(eV, xV.followOffset), YV().add(eV, JV.P_, eV), !0)
```

#### 2202. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L16593` → after: `L15887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR15887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L15887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L15887) · [Before (L16593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L16593)

```diff
-         return null !== (rM = null === (iM = nM(MM)) || void 0 === iM ? void 0 : iM.facing.pitch) && void 0 !== rM ? rM : MM.camera.pitch
+         return null !== (eV = null === (xV = QV(VV)) || void 0 === xV ? void 0 : xV.facing.pitch) && void 0 !== eV ? eV : VV.camera.pitch
```

#### 2203. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L16597` → after: `L15891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR15891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L15891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L15891) · [Before (L16597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L16597)

```diff
-         return mM(MM) ? LM(MM, rM) : SM().copy(rM, MM.camera.eT())
+         return vV(VV) ? ZV(VV, eV) : YV().copy(eV, VV.camera.L_())
```

#### 2204. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L16606` → after: `L15900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR15900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L15900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L15900) · [Before (L16606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L16606)

```diff
-         rM(MM) ? MM.hU.setPosition(MM.camera.rK, OM) : iM(MM, {
+         eV(VV) ? VV.sF.setPosition(VV.camera.J_, JV) : xV(VV, {
```

#### 2205. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L16611` → after: `L15905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR15905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L15905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L15905) · [Before (L16611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L16611)

```diff
-         const nM = MM.hU.grM(MM.eD);
+         const QV = VV.sF.HxV(VV.bD);
```

#### 2206. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L16616` → after: `L15910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR15910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L15910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L15910) · [Before (L16616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L16616)

```diff
-   38751: (MM, rM, iM) => {
+   38923: (VV, eV, xV) => {
```

#### 2207. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L16618-L16620` → after: `L15912-L15914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR15912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L15912-L15914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L15912-L15914) · [Before (L16618-L16620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L16618-L16620)

```diff
-       c: () => mM,
-       d: () => nM,
-       g: () => QM
+       e: () => vV,
+       h: () => QV,
+       j: () => nV
```

#### 2208. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L16622` → after: `L15916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR15916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L15916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L15916) · [Before (L16622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L16622)

```diff
-     var OM = iM(9816);
+     var JV = xV(9820);
```

#### 2209. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L16631` → after: `L15925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR15925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L15925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L15925) · [Before (L16631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L16631)

```diff
-         dd: OM
+         ME: JV
```

#### 2210. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L16663` → after: `L15957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR15957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L15957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L15957) · [Before (L16663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L16663)

```diff
-     const LM = (0, OM.l)("Water");
+     const ZV = (0, JV.n)("Water");
```

#### 2211. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L16666` → after: `L15960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR15960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L15960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L15960) · [Before (L16666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L16666)

```diff
-       return (rM, iM, OM) => MM.uL.qB(rM, iM, OM) ? "ground" : MM.uL.i5(rM, iM, OM) ? MM.uL.YB(rM, iM, OM) === LM ? "ground" : "hazard" : "empty"
+       return (eV, xV, JV) => VV.cZ.I3(eV, xV, JV) ? "ground" : VV.cZ.kVV(eV, xV, JV) ? VV.cZ.K3(eV, xV, JV) === ZV ? "ground" : "hazard" : "empty"
```

#### 2212. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L16669` → after: `L15963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR15963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L15963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L15963) · [Before (L16669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L16669)

```diff
-   39435: (MM, rM, iM) => {
+   39588: (VV, eV, xV) => {
```

#### 2213. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L16671` → after: `L15965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR15965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L15965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L15965) · [Before (L16671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L16671)

```diff
-       e: () => WM
+       d: () => RV
```

#### 2214. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L16673-L16674` → after: `L15967-L15968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR15967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L15967-L15968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L15967-L15968) · [Before (L16673-L16674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L16673-L16674)

```diff
-     var OM = iM(39230),
-       SM = iM(347),
+     var JV = xV(39367),
+       YV = xV(380),
```

#### 2215. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L16676-L16684` → after: `L15970-L15978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR15970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L15970-L15978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L15970-L15978) · [Before (L16676-L16684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L16676-L16684)

```diff
-       aM = iM(181),
-       PM = iM(39439),
-       nM = iM(39258),
-       QM = iM(37699),
-       zM = iM(37705),
-       LM = iM(4069),
-       mM = iM(4129),
-       HM = iM(613),
-       hM = iM(4577);
+       yV = xV(206),
+       pV = xV(39596),
+       QV = xV(39396),
+       nV = xV(37925),
+       wV = xV(37930),
+       ZV = xV(4098),
+       vV = xV(4163),
+       rV = xV(648),
+       kV = xV(4642);
```

#### 2216. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L16708` → after: `L16002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16002) · [Before (L16708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L16708)

```diff
-           blendMode: hM.d.Standard
+           blendMode: kV.g.Standard
```

#### 2217. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L16711` → after: `L16005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16005) · [Before (L16711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L16711)

```diff
-           MM.playParticleEffect(rM, PM ? iM : null)
+           VV.playParticleEffect(eV, pV ? xV : null)
```

#### 2218. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L16773-L16775` → after: `L16067-L16069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16067-L16069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16067-L16069) · [Before (L16773-L16775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L16773-L16775)

```diff
-     var lM = iM(340),
-       EM = iM(620),
-       UM = iM(332);
+     var jV = xV(378),
+       qV = xV(654),
+       tV = xV(375);
```

#### 2219. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L16802` → after: `L16096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16096) · [Before (L16802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L16802)

```diff
-         fm: 2.5,
+         Sv: 2.5,
```

#### 2220. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L16833` → after: `L16127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16127) · [Before (L16833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L16833)

```diff
-           blendMode: hM.d.OneOne
+           blendMode: kV.g.OneOne
```

#### 2221. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L16952` → after: `L16246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16246) · [Before (L16952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L16952)

```diff
-           fm: 0,
+           Sv: 0,
```

#### 2222. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L16970` → after: `L16264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16264) · [Before (L16970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L16970)

```diff
-           fm: 0,
+           Sv: 0,
```

#### 2223. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L16990` → after: `L16284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16284) · [Before (L16990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L16990)

```diff
-           fm: 0,
+           Sv: 0,
```

#### 2224. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17049` → after: `L16343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16343) · [Before (L17049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17049)

```diff
-         ...Object.fromEntries(EM.w.map((MM => [(0, UM.Ub)(MM), {
+         ...Object.fromEntries(qV.s.map((VV => [(0, tV.Vb)(VV), {
```

#### 2225. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17169` → after: `L16463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16463) · [Before (L17169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17169)

```diff
-         ...Object.fromEntries(lM.e.map((MM => [MM, uM]))),
+         ...Object.fromEntries(jV.i.map((VV => [VV, zV]))),
```

#### 2226. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17174` → after: `L16468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16468) · [Before (L17174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17174)

```diff
-           fm: 0,
+           Sv: 0,
```

#### 2227. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17183` → after: `L16477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16477) · [Before (L17183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17183)

```diff
-           fm: 0,
+           Sv: 0,
```

#### 2228. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17209` → after: `L16503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16503) · [Before (L17209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17209)

```diff
-           fm: .05,
+           Sv: .05,
```

#### 2229. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17225` → after: `L16519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16519) · [Before (L17225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17225)

```diff
-         this.bloxd = MM, this.eId = rM, this.Cm = void 0, this.type = void 0, this.spawnTime = void 0, this.distToPlayerInterval = void 0, this.autoRemoveTimeout = void 0, this.Cm = MM.Cm, this.type = (0, OM.e)(iM).item, this.spawnTime = Date.now()
+         this.bloxd = VV, this.eId = eV, this.iv = void 0, this.type = void 0, this.spawnTime = void 0, this.distToPlayerInterval = void 0, this.autoRemoveTimeout = void 0, this.iv = VV.iv, this.type = (0, JV.g)(xV).item, this.spawnTime = Date.now()
```

#### 2230. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17229` → after: `L16523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16523) · [Before (L17229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17229)

```diff
-         this.Cm.hU.deleteEntity(this.eId)
+         this.iv.sF.deleteEntity(this.eId)
```

#### 2231. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17236` → after: `L16530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16530) · [Before (L17236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17236)

```diff
-           Cm: rM
+           iv: eV
```

#### 2232. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17238` → after: `L16532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16532) · [Before (L17238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17238)

```diff
-           hU: iM
+           sF: xV
```

#### 2233. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17243` → after: `L16537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16537) · [Before (L17243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17243)

```diff
-         iM.add([MM.x, MM.y, MM.z], SM, jM, null, null, !1, !1, this.eId), iM.eZ(this.eId, iM.names.smoothToServerPos);
+         xV.add([VV.x, VV.y, VV.z], YV, UV, null, null, !1, !1, this.eId), xV.WC(this.eId, xV.names.smoothToServerPos);
```

#### 2234. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17246-L17249` → after: `L16540-L16543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16540-L16543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16540-L16543) · [Before (L17246-L17249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17246-L17249)

```diff
-         } = (0, OM.e)(MM.type);
-         if (null !== aM && OM.d.includes(this.type)) {
-           if (aM === rM.IMM) return;
-           const MM = rM.rY[rM.eD][aM];
+         } = (0, JV.g)(VV.type);
+         if (null !== yV && JV.c.includes(this.type)) {
+           if (yV === eV.vxV) return;
+           const VV = eV.YL[eV.bD][yV];
```

#### 2235. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17252` → after: `L16546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16546) · [Before (L17252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17252)

```diff
-         iM.eZ(this.eId, "doOnFirstTick", {
+         xV.WC(this.eId, "doOnFirstTick", {
```

#### 2236. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17254` → after: `L16548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16548) · [Before (L17254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17254)

```diff
-             iM.eZ(this.eId, "hidingMeshManager", {
+             xV.WC(this.eId, "hidingMeshManager", {
```

#### 2237. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17256` → after: `L16550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16550) · [Before (L17256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17256)

```diff
-                 iM.eZ(this.eId, iM.names.mesh, {
+                 xV.WC(this.eId, xV.names.mesh, {
```

#### 2238. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17258` → after: `L16552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16552) · [Before (L17258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17258)

```diff
-                   QPM: !1
+                   zQV: !1
```

#### 2239. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17262` → after: `L16556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16556) · [Before (L17262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17262)

```diff
-                 iM.bZ(this.eId, iM.names.mesh)
+                 xV.gC(this.eId, xV.names.mesh)
```

#### 2240. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17273` → after: `L16567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16567) · [Before (L17273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17273)

```diff
-           Cm: OM
+           iv: JV
```

#### 2241. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17275-L17276` → after: `L16569-L16570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16569-L16570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16569-L16570) · [Before (L17275-L17276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17275-L17276)

```diff
-           hU: SM
-         } = OM, hM = OM.eD, lM = this.getSpawnPos(hM), EM = {
+           sF: YV
+         } = JV, kV = JV.bD, jV = this.getSpawnPos(kV), qV = {
```

#### 2242. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17282` → after: `L16576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16576) · [Before (L17282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17282)

```diff
-               } = RM[this.type], nM = SM.XE(this.eId), lM = this.bloxd.getClosestSolidBlock(nM), [EM, UM, GM] = nM;
+               } = GV[this.type], QV = YV.YF(this.eId), jV = this.bloxd.getClosestSolidBlock(QV), [qV, tV, FV] = QV;
```

#### 2243. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17286-L17289` → after: `L16580-L16583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16580-L16583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16580-L16583) · [Before (L17286-L17289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17286-L17289)

```diff
-                 return void(0, LM.sendColyMessage)(mM.Cg, {
-                   jz: this.eId,
-                   gz: nM,
-                   uz: MM
+                 return void(0, ZV.sendColyMessage)(vV.wg, {
+                   bw: this.eId,
+                   aw: QV,
+                   ow: VV
```

#### 2244. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17292` → after: `L16586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16586) · [Before (L17292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17292)

```diff
-               const CM = null !== (MM = PM.type) && void 0 !== MM ? MM : JM.Boom;
+               const TV = null !== (VV = pV.type) && void 0 !== VV ? VV : bV.Boom;
```

#### 2245. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17294` → after: `L16588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16588) · [Before (L17294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17294)

```diff
-               const eM = SM.XE(hM),
+               const PV = YV.YF(kV),
```

#### 2246. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17299` → after: `L16593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16593) · [Before (L17299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17299)

```diff
-               jM().RQ(eM, bM) < wM + 1 && QM.e.play((0, zM.f)("cannonFire"), null !== (gM = null !== (uM = PM.volume) && void 0 !== uM ? uM : RM[this.type].volume) && void 0 !== gM ? gM : 1, bM, wM, tM).rate(.8 + .2 * Math.random());
+               UV().Dn(PV, AV) < NV + 1 && nV.d.play((0, wV.f)("cannonFire"), null !== (MV = null !== (zV = pV.volume) && void 0 !== zV ? zV : GV[this.type].volume) && void 0 !== MV ? MV : 1, AV, NV, XV).rate(.8 + .2 * Math.random());
```

#### 2247. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17303` → after: `L16597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16597) · [Before (L17303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17303)

```diff
-                 if (jM().set(dM, 0, 0, 0), nM && !HM.j.includes(iM) && "Mesh" !== iM) return {
+                 if (UV().set(EV, 0, 0, 0), QV && !rV.m.includes(xV) && "Mesh" !== xV) return {
```

#### 2248. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17307` → after: `L16601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16601) · [Before (L17307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17307)

```diff
-                 const QM = MM.bloxd.isClient ? [...MM.hU.XE(rM)] : MM.room.api.XE(rM);
+                 const nV = VV.bloxd.isClient ? [...VV.sF.YF(eV)] : VV.room.api.YF(eV);
```

#### 2249. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17313` → after: `L16607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16607) · [Before (L17313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17313)

```diff
-                   const SM = MM.hU.Av(rM);
+                   const YV = VV.sF.uH(eV);
```

#### 2250. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17315` → after: `L16609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16609) · [Before (L17315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17315)

```diff
-                   SM && (jM = SM.hm.vec[1] / 2);
+                   YV && (UV = YV.Xv.vec[1] / 2);
```

#### 2251. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17322` → after: `L16616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16616) · [Before (L17322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17322)

```diff
-                   return OM >= PM ? aM : jM + (OM - iM) / (PM - iM) * (aM - jM)
+                   return JV >= pV ? yV : UV + (JV - xV) / (pV - xV) * (yV - UV)
```

#### 2252. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17332-L17336` → after: `L16626-L16630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16626-L16630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16626-L16630) · [Before (L17332-L17336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17332-L17336)

```diff
-               }(this.Cm, hM, "Player", CM, null !== (rM = null === (iM = PM.knockbackFactor) || void 0 === iM ? void 0 : iM.terrain) && void 0 !== rM ? rM : 1, 2 * PM.power, bM, PM.ignoreProjectiles);
-               jM().scale(WM, WM, 1 / aM.f.clientTicksPerSecond), SM.Av(OM.eD).applyImpulse([WM[0], WM[1], WM[2]]), (0, LM.sendColyMessage)(mM.Cg, {
-                 jz: this.eId,
-                 gz: nM,
-                 uz: WM
+               }(this.iv, kV, "Player", TV, null !== (eV = null === (xV = pV.knockbackFactor) || void 0 === xV ? void 0 : xV.terrain) && void 0 !== eV ? eV : 1, 2 * pV.power, AV, pV.ignoreProjectiles);
+               UV().scale(RV, RV, 1 / yV.f.clientTicksPerSecond), YV.uH(JV.bD).applyImpulse([RV[0], RV[1], RV[2]]), (0, ZV.sendColyMessage)(vV.wg, {
+                 bw: this.eId,
+                 aw: QV,
+                 ow: RV
```

#### 2253. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17342` → after: `L16636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16636) · [Before (L17342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17342)

```diff
-           SM.eZ(this.eId, "doOnFirstTick", {
+           YV.WC(this.eId, "doOnFirstTick", {
```

#### 2254. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17351-L17356` → after: `L16645-L16650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16645-L16650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16645-L16650) · [Before (L17351-L17356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17351-L17356)

```diff
-         this.eId = SM.add(lM, GM, CM, null, null, !0, !1).toString(), (0, LM.sendColyMessage)(mM.Gg, {
-             jz: this.eId,
-             az: this.type,
-             Pz: MM,
-             na: this.Cm.camera.sK
-           }), QM.e.play((0, zM.f)("bow"), .6 * (null !== (rM = RM[this.type].volume) && void 0 !== rM ? rM : 1)).rate(.6 + .2 * Math.random()), SM.eZ(this.eId, "doOnFirstTick", {
+         this.eId = YV.add(jV, FV, TV, null, null, !0, !1).toString(), (0, ZV.sendColyMessage)(vV.yg, {
+             bw: this.eId,
+             Ew: this.type,
+             Bw: VV,
+             ny: this.iv.camera.r_
+           }), nV.d.play((0, wV.f)("bow"), .6 * (null !== (eV = GV[this.type].volume) && void 0 !== eV ? eV : 1)).rate(.6 + .2 * Math.random()), YV.WC(this.eId, "doOnFirstTick", {
```

#### 2255. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17358` → after: `L16652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16652) · [Before (L17358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17358)

```diff
-               SM.eZ(this.eId, "hidingMeshManager", {
+               YV.WC(this.eId, "hidingMeshManager", {
```

#### 2256. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17360` → after: `L16654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16654) · [Before (L17360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17360)

```diff
-                   SM.eZ(this.eId, SM.names.mesh, {
+                   YV.WC(this.eId, YV.names.mesh, {
```

#### 2257. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17362` → after: `L16656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16656) · [Before (L17362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17362)

```diff
-                     QPM: !0
+                     zQV: !0
```

#### 2258. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17366` → after: `L16660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16660) · [Before (L17366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17366)

```diff
-                   SM.bZ(this.eId, SM.names.mesh)
+                   YV.gC(this.eId, YV.names.mesh)
```

#### 2259. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17374-L17375` → after: `L16668-L16669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16668-L16669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16668-L16669) · [Before (L17374-L17375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17374-L17375)

```diff
-             jM().sqrDist(SM.XE(this.eId), SM.XE(hM)) > 1e4 && ((0, LM.sendColyMessage)(mM.Hg, {
-               jz: this.eId
+             UV().sqrDist(YV.YF(this.eId), YV.YF(kV)) > 1e4 && ((0, ZV.sendColyMessage)(vV.Cg, {
+               bw: this.eId
```

#### 2260. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17378-L17379` → after: `L16672-L16673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16672-L16673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16672-L16673) · [Before (L17378-L17379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17378-L17379)

```diff
-             (0, LM.sendColyMessage)(mM.Hg, {
-               jz: this.eId
+             (0, ZV.sendColyMessage)(vV.Cg, {
+               bw: this.eId
```

#### 2261. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17381` → after: `L16675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16675) · [Before (L17381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17381)

```diff
-           }), null !== (iM = RM[this.type].autoRemoveAfterTime) && void 0 !== iM ? iM : 6e4, this.eId), SM.eZ(this.eId, "collideTerrain", {
+           }), null !== (xV = GV[this.type].autoRemoveAfterTime) && void 0 !== xV ? xV : 6e4, this.eId), YV.WC(this.eId, "collideTerrain", {
```

#### 2262. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17384` → after: `L16678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16678) · [Before (L17384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17384)

```diff
-               (0, nM.EPM)(SM.getState(this.eId, "physics"), SM.jK(this.eId)), SM.sPM(this.eId, SM.jK(this.eId));
+               (0, QV.cQV)(YV.getState(this.eId, "physics"), YV.U_(this.eId)), YV.IQV(this.eId, YV.U_(this.eId));
```

#### 2263. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17386-L17387` → after: `L16680-L16681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16680-L16681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16680-L16681) · [Before (L17386-L17387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17386-L17387)

```diff
-                 OM = SM.Av(this.eId);
-               jM().length(OM.dd) > .1 && iM && ((0, PM.i)(this.Cm, this.eId), !SM.BMM(this.eId, "collideTerrain")) || (null === (MM = (rM = EM[this.type]).onHitTerrain) || void 0 === MM || MM.call(rM), iM && UM())
+                 JV = YV.uH(this.eId);
+               UV().length(JV.ME) > .1 && xV && ((0, pV.e)(this.iv, this.eId), !YV.wxV(this.eId, "collideTerrain")) || (null === (VV = (eV = qV[this.type]).onHitTerrain) || void 0 === VV || VV.call(eV), xV && tV())
```

#### 2264. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17389` → after: `L16683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16683) · [Before (L17389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17389)

```diff
-           }), SM.eZ(this.eId, "collideEntitiesProjectile", {
+           }), YV.WC(this.eId, "collideEntitiesProjectile", {
```

#### 2265. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17396-L17397` → after: `L16690-L16691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16690-L16691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16690-L16691) · [Before (L17396-L17397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17396-L17397)

```diff
-             const zM = MM.hU.Av(rM),
-               LM = jM().copy(zM.dd, OM),
+             const wV = VV.sF.uH(eV),
+               ZV = UV().copy(wV.ME, JV),
```

#### 2266. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17399-L17400` → after: `L16693-L16694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16693-L16694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16693-L16694) · [Before (L17399-L17400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17399-L17400)

```diff
-             jM().normalize(LM, LM), jM().scale(LM, LM, mM.speed * nM), zM.gravityMultiplier = (null !== (SM = mM.gravityMult) && void 0 !== SM ? SM : 1) * QM, zM.vz = .02, zM.fm = (null !== (aM = mM.fm) && void 0 !== aM ? aM : .1) * zM.vz, zM.fluidDrag = null !== (PM = mM.fluidDr … [truncated]
-           }(this.Cm, this.eId, this.type, this.Cm.camera.sK)
+             UV().normalize(ZV, ZV), UV().scale(ZV, ZV, vV.speed * QV), wV.gravityMultiplier = (null !== (YV = vV.gravityMult) && void 0 !== YV ? YV : 1) * nV, wV.eZ = .02, wV.Sv = (null !== (yV = vV.Sv) && void 0 !== yV ? yV : .1) * wV.eZ, wV.fluidDrag = null !== (pV = vV.fluidDr … [truncated]
+           }(this.iv, this.eId, this.type, this.iv.camera.r_)
```

#### 2267. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17404` → after: `L16698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16698) · [Before (L17404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17404)

```diff
-         if ("torso" === RM[this.type].spawnOffset) rM = jM().clone(this.Cm.hU.XE(MM)), rM[1] += aM.f.jy / 2;
+         if ("torso" === GV[this.type].spawnOffset) eV = UV().clone(this.iv.sF.YF(VV)), eV[1] += yV.f.nB / 2;
```

#### 2268. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17411-L17412` → after: `L16705-L16706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16705-L16706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16705-L16706) · [Before (L17411-L17412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17411-L17412)

```diff
-           width: null !== (MM = null !== (rM = null === (iM = RM[this.type]) || void 0 === iM ? void 0 : iM.collisionWidth) && void 0 !== rM ? rM : null === (OM = RM[this.type]) || void 0 === OM ? void 0 : OM.collisionHeight) && void 0 !== MM ? MM : .1,
-           height: null !== (SM = null !== (jM = null === (aM = RM[this.type]) || void 0 === aM ? void 0 : aM.collisionHeight) && void 0 !== jM ? jM : null === (PM = RM[this.type]) || void 0 === PM ? void 0 : PM.collisionWidth) && void 0 !== SM ? SM : .1
+           width: null !== (VV = null !== (eV = null === (xV = GV[this.type]) || void 0 === xV ? void 0 : xV.collisionWidth) && void 0 !== eV ? eV : null === (JV = GV[this.type]) || void 0 === JV ? void 0 : JV.collisionHeight) && void 0 !== VV ? VV : .1,
+           height: null !== (YV = null !== (UV = null === (yV = GV[this.type]) || void 0 === yV ? void 0 : yV.collisionHeight) && void 0 !== UV ? UV : null === (pV = GV[this.type]) || void 0 === pV ? void 0 : pV.collisionWidth) && void 0 !== YV ? YV : .1
```

#### 2269. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17417` → after: `L16711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16711) · [Before (L17417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17417)

```diff
-   38558: (MM, rM, iM) => {
+   38750: (VV, eV, xV) => {
```

#### 2270. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17419` → after: `L16713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16713) · [Before (L17419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17419)

```diff
-       d: () => jM,
+       c: () => UV,
```

#### 2271. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17421-L17422` → after: `L16715-L16716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16715-L16716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16715-L16716) · [Before (L17421-L17422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17421-L17422)

```diff
-       j: () => SM,
-       m: () => PM
+       h: () => YV,
+       k: () => pV
```

#### 2272. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17424` → after: `L16718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16718) · [Before (L17424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17424)

```diff
-     var OM = iM(3063);
+     var JV = xV(3093);
```

#### 2273. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17428-L17429` → after: `L16722-L16723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16722-L16723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16722-L16723) · [Before (L17428-L17429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17428-L17429)

```diff
-       const SM = (0, OM.f)();
-       return null !== (rM = null === (iM = SM.rY[SM.eD][MM]) || void 0 === iM ? void 0 : iM.canAttack) && void 0 !== rM && rM || aM(MM)
+       const YV = (0, JV.d)();
+       return null !== (eV = null === (xV = YV.YL[YV.bD][VV]) || void 0 === xV ? void 0 : xV.canAttack) && void 0 !== eV && eV || yV(VV)
```

#### 2274. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17434-L17435` → after: `L16728-L16729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16728-L16729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16728-L16729) · [Before (L17434-L17435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17434-L17435)

```diff
-       const SM = (0, OM.f)();
-       return null !== (rM = null === (iM = SM.rY[SM.eD][MM]) || void 0 === iM ? void 0 : iM.interactionPrompt) && void 0 !== rM ? rM : null
+       const YV = (0, JV.d)();
+       return null !== (eV = null === (xV = YV.YL[YV.bD][VV]) || void 0 === xV ? void 0 : xV.interactionPrompt) && void 0 !== eV ? eV : null
```

#### 2275. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17441-L17442` → after: `L16735-L16736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16735-L16736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16735-L16736) · [Before (L17441-L17442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17441-L17442)

```diff
-       const SM = (0, OM.f)();
-       return null !== (rM = null === (iM = SM.rY[SM.eD][MM]) || void 0 === iM ? void 0 : iM.interactable) && void 0 !== rM && rM
+       const YV = (0, JV.d)();
+       return null !== (eV = null === (xV = YV.YL[YV.bD][VV]) || void 0 === xV ? void 0 : xV.interactable) && void 0 !== eV && eV
```

#### 2276. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17448-L17449` → after: `L16742-L16743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16742-L16743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16742-L16743) · [Before (L17448-L17449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17448-L17449)

```diff
-           const MM = (0, OM.f)(),
-             rM = MM.rY[MM.eD];
+           const VV = (0, JV.d)(),
+             eV = VV.YL[VV.bD];
```

#### 2277. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17456` → after: `L16750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16750) · [Before (L17456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17456)

```diff
-       const jM = null !== MM && void 0 !== MM ? MM : OM.j.localPlayerPickActionHelper;
+       const UV = null !== VV && void 0 !== VV ? VV : JV.e.localPlayerPickActionHelper;
```

#### 2278. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17458-L17460` → after: `L16752-L16754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16752-L16754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16752-L16754) · [Before (L17458-L17460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17458-L17460)

```diff
-       const PM = (0, OM.f)(),
-         nM = null !== (iM = jM.getPickEntityResult(null !== (SM = null !== rM && void 0 !== rM ? rM : PM.qMM) && void 0 !== SM ? SM : PM.camera.eT())) && void 0 !== iM ? iM : null;
-       return aM(nM) ? nM : null
+       const pV = (0, JV.d)(),
+         QV = null !== (xV = UV.getPickEntityResult(null !== (YV = null !== eV && void 0 !== eV ? eV : pV.kxV) && void 0 !== YV ? YV : pV.camera.L_())) && void 0 !== xV ? xV : null;
+       return yV(QV) ? QV : null
```

#### 2279. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17463` → after: `L16757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16757) · [Before (L17463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17463)

```diff
-   38104: (MM, rM, iM) => {
+   38332: (VV, eV, xV) => {
```

#### 2280. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17465` → after: `L16759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16759) · [Before (L17465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17465)

```diff
-       b: () => zM
+       c: () => wV
```

#### 2281. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17467-L17469` → after: `L16761-L16763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16761-L16763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16761-L16763) · [Before (L17467-L17469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17467-L17469)

```diff
-     var OM = iM(4577),
-       SM = iM(38097),
-       jM = iM(38111);
+     var JV = xV(4642),
+       YV = xV(38328),
+       UV = xV(38340);
```

#### 2282. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17473` → after: `L16767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16767) · [Before (L17473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17473)

```diff
-         this.Cm = MM, this.now = rM, this.animations = new Map, this.warned = new Set
+         this.iv = VV, this.now = eV, this.animations = new Map, this.warned = new Set
```

#### 2283. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17482` → after: `L16776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16776) · [Before (L17482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17482)

```diff
-         "clip" === (null === LM || void 0 === LM ? void 0 : LM.kind) && (null === zM || void 0 === zM || null === (mM = zM.getRigController()) || void 0 === mM || mM.stopClip(LM.HS));
+         "clip" === (null === ZV || void 0 === ZV ? void 0 : ZV.kind) && (null === wV || void 0 === wV || null === (vV = wV.getRigController()) || void 0 === vV || vV.stopClip(ZV.tY));
```

#### 2284. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17484-L17485` → after: `L16778-L16779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16778-L16779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16778-L16779) · [Before (L17484-L17485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17484-L17485)

```diff
-           LS: OM,
-           mS: Math.max(jM, 0),
+           jY: JV,
+           qY: Math.max(UV, 0),
```

#### 2285. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17493` → after: `L16787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16787) · [Before (L17493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17493)

```diff
-         if (null === zM || void 0 === zM || zM.stopAnimation(rM), null === nM || rM !== SM.e.Custom) return void this.forget(MM, rM);
+         if (null === wV || void 0 === wV || wV.stopAnimation(eV), null === QV || eV !== YV.h.Custom) return void this.forget(VV, eV);
```

#### 2286. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17496-L17497` → after: `L16790-L16791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16790-L16791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16790-L16791) · [Before (L17496-L17497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17496-L17497)

```diff
-           HS: nM,
-           hS: Math.max(QM, 0),
+           tY: QV,
+           FY: Math.max(nV, 0),
```

#### 2287. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17501` → after: `L16795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16795) · [Before (L17501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17501)

```diff
-         const JM = null !== (PM = null === zM || void 0 === zM ? void 0 : zM.getRigController()) && void 0 !== PM ? PM : null;
+         const bV = null !== (pV = null === wV || void 0 === wV ? void 0 : wV.getRigController()) && void 0 !== pV ? pV : null;
```

#### 2288. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17512-L17513` → after: `L16806-L16807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16806-L16807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16806-L16807) · [Before (L17512-L17513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17512-L17513)

```diff
-             mS: PM,
-             LS: nM,
+             qY: pV,
+             jY: QV,
```

#### 2289. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17521` → after: `L16815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16815) · [Before (L17521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17521)

```diff
-         const OM = null === (iM = this.animations.get(MM)) || void 0 === iM ? void 0 : iM.get(SM.e.Custom);
+         const JV = null === (xV = this.animations.get(VV)) || void 0 === xV ? void 0 : xV.get(YV.h.Custom);
```

#### 2290. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17526` → after: `L16820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16820) · [Before (L17526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17526)

```diff
-         return [...null !== (rM = null === (iM = this.animations.get(MM)) || void 0 === iM ? void 0 : iM.keys()) && void 0 !== rM ? rM : []]
+         return [...null !== (eV = null === (xV = this.animations.get(VV)) || void 0 === xV ? void 0 : xV.keys()) && void 0 !== eV ? eV : []]
```

#### 2291. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17530` → after: `L16824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16824) · [Before (L17530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17530)

```diff
-         for (const [OM, SM] of null !== (iM = this.animations.get(MM)) && void 0 !== iM ? iM : []) {
+         for (const [JV, YV] of null !== (xV = this.animations.get(VV)) && void 0 !== xV ? xV : []) {
```

#### 2292. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17534` → after: `L16828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16828) · [Before (L17534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17534)

```diff
-             mS: SM.mS
+             qY: YV.qY
```

#### 2293. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17536-L17537` → after: `L16830-L16831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16830-L16831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16830-L16831) · [Before (L17536-L17537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17536-L17537)

```diff
-             HS: SM.HS,
-             mS: SM.mS
+             tY: YV.tY,
+             qY: YV.qY
```

#### 2294. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17550` → after: `L16844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16844) · [Before (L17550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17550)

```diff
-             if (null === OM || void 0 === OM || OM.stopAnimation(rM), "clip" === SM.kind) null === OM || void 0 === OM || null === (MM = OM.getRigController()) || void 0 === MM || MM.stopClip(SM.HS)
+             if (null === JV || void 0 === JV || JV.stopAnimation(eV), "clip" === YV.kind) null === JV || void 0 === JV || null === (VV = JV.getRigController()) || void 0 === VV || VV.stopClip(YV.tY)
```

#### 2295. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17557` → after: `L16851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16851) · [Before (L17557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17557)

```diff
-         return null !== (rM = this.Cm.hU.getState(MM, "animator")) && void 0 !== rM ? rM : null
+         return null !== (eV = this.iv.sF.getState(VV, "animator")) && void 0 !== eV ? eV : null
```

#### 2296. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17569-L17572` → after: `L16863-L16866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16863-L16866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16863-L16866) · [Before (L17569-L17572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17569-L17572)

```diff
-           HS: iM,
-           LS: OM,
-           mS: SM,
-           hS: jM,
+           tY: xV,
+           jY: JV,
+           qY: YV,
+           FY: UV,
```

#### 2297. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17575` → after: `L16869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16869) · [Before (L17575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17575)

```diff
-         "noClip" === nM ? this.warnOnce(`${iM}|${QM}`, `Can't play "${iM}": ${QM} has no clip by that name`) : "ambiguous" === nM && this.warnOnce(`${iM}|${QM}`, `Can't play "${iM}" on ${QM}: several clips are called that, so give its full name`)
+         "noClip" === QV ? this.warnOnce(`${xV}|${nV}`, `Can't play "${xV}": ${nV} has no clip by that name`) : "ambiguous" === QV && this.warnOnce(`${xV}|${nV}`, `Can't play "${xV}" on ${nV}: several clips are called that, so give its full name`)
```

#### 2298. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17586` → after: `L16880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16880) · [Before (L17586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17586)

```diff
-         this.now = rM, this.animations = void 0, this.attachments = new Map, this.attachmentGenerations = new Map, this.nextAttachmentGeneration = 0, this.particleSystemUpdates = new Map, this.effects = new Map, this.floating = new Map, this.li = new Set, this.healthFracs = new M … [truncated]
+         this.now = eV, this.animations = void 0, this.attachments = new Map, this.attachmentGenerations = new Map, this.nextAttachmentGeneration = 0, this.particleSystemUpdates = new Map, this.effects = new Map, this.floating = new Map, this.Xx = new Set, this.healthFracs = new M … [truncated]
```

#### 2299. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17589` → after: `L16883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16883) · [Before (L17589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17589)

```diff
-         LM(this.attachments, MM).set(rM.Kr, rM)
+         ZV(this.attachments, VV).set(eV.Oe, eV)
```

#### 2300. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17596` → after: `L16890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16890) · [Before (L17596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17596)

```diff
-         return [...null !== (rM = null === (iM = this.attachments.get(MM)) || void 0 === iM ? void 0 : iM.values()) && void 0 !== rM ? rM : []]
+         return [...null !== (eV = null === (xV = this.attachments.get(VV)) || void 0 === xV ? void 0 : xV.values()) && void 0 !== eV ? eV : []]
```

#### 2301. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17614` → after: `L16908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16908) · [Before (L17614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17614)

```diff
-         SM || (SM = Object.create(null), this.particleSystemUpdates.set(MM, SM)), (0, OM.o)(SM[rM] ??= {}, iM)
+         YV || (YV = Object.create(null), this.particleSystemUpdates.set(VV, YV)), (0, JV.l)(YV[eV] ??= {}, xV)
```

#### 2302. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17636` → after: `L16930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16930) · [Before (L17636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17636)

```diff
-         return null !== (rM = this.effects.get(MM)) && void 0 !== rM ? rM : PM
+         return null !== (eV = this.effects.get(VV)) && void 0 !== eV ? eV : pV
```

#### 2303. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17644` → after: `L16938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16938) · [Before (L17644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17644)

```diff
-           ai: rM ? iM : null
+           kx: eV ? xV : null
```

#### 2304. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17651` → after: `L16945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16945) · [Before (L17651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17651)

```diff
-         rM ? this.li.add(MM) : this.li.delete(MM)
+         eV ? this.Xx.add(VV) : this.Xx.delete(VV)
```

#### 2305. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17654` → after: `L16948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16948) · [Before (L17654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17654)

```diff
-         return this.li.has(MM)
+         return this.Xx.has(VV)
```

#### 2306. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17661` → after: `L16955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16955) · [Before (L17661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17661)

```diff
-         return null !== (rM = this.healthFracs.get(MM)) && void 0 !== rM ? rM : null
+         return null !== (eV = this.healthFracs.get(VV)) && void 0 !== eV ? eV : null
```

#### 2307. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17664` → after: `L16958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16958) · [Before (L17664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17664)

```diff
-         this.animations.remove(MM), this.attachments.delete(MM), this.attachmentGenerations.delete(MM), this.particleSystemUpdates.delete(MM), this.effects.delete(MM), this.floating.delete(MM), this.li.delete(MM), this.healthFracs.delete(MM)
+         this.animations.remove(VV), this.attachments.delete(VV), this.attachmentGenerations.delete(VV), this.particleSystemUpdates.delete(VV), this.effects.delete(VV), this.floating.delete(VV), this.Xx.delete(VV), this.healthFracs.delete(VV)
```

#### 2308. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17667` → after: `L16961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16961) · [Before (L17667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17667)

```diff
-         this.animations.clear(), this.attachments.clear(), this.attachmentGenerations.clear(), this.particleSystemUpdates.clear(), this.effects.clear(), this.floating.clear(), this.li.clear(), this.healthFracs.clear()
+         this.animations.clear(), this.attachments.clear(), this.attachmentGenerations.clear(), this.particleSystemUpdates.clear(), this.effects.clear(), this.floating.clear(), this.Xx.clear(), this.healthFracs.clear()
```

#### 2309. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17680-L17683` → after: `L16974-L16977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16974-L16977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16974-L16977) · [Before (L17680-L17683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17680-L17683)

```diff
-               Kr: rM,
-               qr: iM,
-               Tr: OM,
-               Vr: SM
+               Oe: eV,
+               Vx: xV,
+               Jx: JV,
+               Yx: YV
```

#### 2310. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17686-L17688` → after: `L16980-L16982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16980-L16982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16980-L16982) · [Before (L17686-L17688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17686-L17688)

```diff
-               qr: iM,
-               Tr: OM,
-               Vr: SM
+               Vx: xV,
+               Jx: JV,
+               Yx: YV
```

#### 2311. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17692` → after: `L16986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16986) · [Before (L17692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17692)

```diff
-           aG: JSON.parse(JSON.stringify(null !== (rM = this.particleSystemUpdates.get(MM)) && void 0 !== rM ? rM : {})),
+           lT: JSON.parse(JSON.stringify(null !== (eV = this.particleSystemUpdates.get(VV)) && void 0 !== eV ? eV : {})),
```

#### 2312. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17694-L17696` → after: `L16988-L16990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16988-L16990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16988-L16990) · [Before (L17694-L17696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17694-L17696)

```diff
-           floating: null !== (iM = this.floating.get(MM)) && void 0 !== iM ? iM : null,
-           li: this.li.has(MM),
-           fj: this.getHealthFrac(MM)
+           floating: null !== (xV = this.floating.get(VV)) && void 0 !== xV ? xV : null,
+           Xx: this.Xx.has(VV),
+           cU: this.getHealthFrac(VV)
```

#### 2313. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17700` → after: `L16994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR16994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L16994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L16994) · [Before (L17700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17700)

```diff
-         return this.animations.retainedTypes(MM).length > 0 || this.attachments.has(MM) || this.attachmentGenerations.has(MM) || this.particleSystemUpdates.has(MM) || this.effects.has(MM) || this.floating.has(MM) || this.li.has(MM) || this.healthFracs.has(MM)
+         return this.animations.retainedTypes(VV).length > 0 || this.attachments.has(VV) || this.attachmentGenerations.has(VV) || this.particleSystemUpdates.has(VV) || this.effects.has(VV) || this.floating.has(VV) || this.Xx.has(VV) || this.healthFracs.has(VV)
```

#### 2314. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17720` → after: `L17014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17014) · [Before (L17720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17720)

```diff
-   39083: (MM, rM, iM) => {
+   39243: (VV, eV, xV) => {
```

#### 2315. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17722-L17724` → after: `L17016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17016) · [Before (L17722-L17724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17722-L17724)

```diff
-       b: () => Jr,
-       d: () => tr,
-       f: () => wr,
+       e: () => be,
```

#### 2316. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17726` → after: `L17018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17018) · [Before (L17726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17726)

```diff
-       l: () => gr,
+       m: () => Ne,
```

#### 2317. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17728` → after: `L17020-L17022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17020-L17022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17020-L17022) · [Before (L17728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17728)

```diff
-       r: () => Gr,
+       q: () => Me,
+       s: () => Ee,
+       t: () => Fe,
```

#### 2318. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17730` → after: `L17024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17024) · [Before (L17730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17730)

```diff
-       x: () => Rr,
+       v: () => Ge,
```

#### 2319. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17733-L17760` → after: `L17027-L17054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17027-L17054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17027-L17054) · [Before (L17733-L17760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17733-L17760)

```diff
-     var OM = iM(38167),
-       SM = iM(38034),
-       jM = iM(4069),
-       aM = iM(37722),
-       PM = iM(39092),
-       nM = iM(39101),
-       QM = iM(38010),
-       zM = iM(38104),
-       LM = iM(38724),
-       mM = iM(38634),
-       HM = iM(613),
-       hM = iM(143),
-       JM = iM(39132),
-       dM = iM(2362),
-       yM = iM(2762),
-       lM = iM(2370),
- ... (12 more removed lines; see GitHub link above)
+     var JV = xV(38387),
+       YV = xV(38263),
+       UV = xV(4098),
+       yV = xV(37943),
+       pV = xV(39245),
+       QV = xV(39251),
+       nV = xV(38251),
+       wV = xV(38332),
+       ZV = xV(38892),
+       vV = xV(38805),
+       rV = xV(648),
+       kV = xV(165),
+       bV = xV(39281),
+       EV = xV(2385),
+       BV = xV(2822),
+       jV = xV(2393),
+ ... (12 more added lines; see GitHub link above)
```

#### 2320. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17762-L17768` → after: `L17056-L17062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17056-L17062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17056-L17062) · [Before (L17762-L17768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17762-L17768)

```diff
-       sM = iM(2067);
-     var DM = iM(22),
-       kM = iM(3563),
-       ZM = iM(625),
-       oM = iM(3571),
-       fM = iM(38149),
-       YM = iM(3614);
+       gV = xV(2080);
+     var DV = xV(32),
+       iV = xV(3584),
+       CV = xV(657),
+       aV = xV(3586),
+       oV = xV(38380),
+       cV = xV(3630);
```

#### 2321. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17770-L17792` → after: `L17064-L17086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17064-L17086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17064-L17086) · [Before (L17770-L17792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17770-L17792)

```diff
-     var AM = iM(3063),
-       xM = iM(38019),
-       vM = iM(38565),
-       FM = iM(39105),
-       BM = iM(38130),
-       XM = iM(39109),
-       IM = iM(39126),
-       KM = iM(38287),
-       qM = iM(38294),
-       TM = iM(38984),
-       VM = iM(38832),
-       cM = iM(38275),
-       Mr = iM(38205),
-       rr = iM(38253),
-       ir = iM(38128),
-       Or = iM(39136),
- ... (7 more removed lines; see GitHub link above)
+     var lV = xV(3093),
+       LV = xV(38254),
+       fV = xV(38758),
+       mV = xV(39260),
+       KV = xV(38368),
+       HV = xV(39266),
+       uV = xV(39277),
+       sV = xV(38493),
+       SV = xV(38497),
+       IV = xV(39173),
+       dV = xV(39003),
+       OV = xV(38479),
+       Ve = xV(38411),
+       ee = xV(38466),
+       xe = xV(38363),
+       Je = xV(39284),
+ ... (7 more added lines; see GitHub link above)
```

#### 2322. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17795` → after: `L17089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17089) · [Before (L17795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17795)

```diff
-         this.Cm = MM, this.vehicleEId = null, this.previousHeading = 0
+         this.iv = VV, this.vehicleEId = null, this.previousHeading = 0
```

#### 2323. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17803` → after: `L17097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17097) · [Before (L17803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17803)

```diff
-           hU: SM,
+           sF: YV,
```

#### 2324. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17805` → after: `L17099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17099) · [Before (L17805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17805)

```diff
-           eD: aM,
+           bD: yV,
```

#### 2325. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17807-L17809` → after: `L17101-L17103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17101-L17103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17101-L17103) · [Before (L17807-L17809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17807-L17809)

```diff
-         } = this.Cm, nM = null === (MM = SM.grM(aM)) || void 0 === MM ? void 0 : MM.ridingVehicleEId, QM = nM && (null === (rM = SM.ziM(aM)) || void 0 === rM ? void 0 : rM.zh) === nM, zM = (null === (iM = SM.ziM(jM.rK)) || void 0 === iM ? void 0 : iM.zh) === aM;
-         if (!QM || !zM || null !== jM.Qq || null !== (OM = PM.client) && void 0 !== OM && OM.isReplayMode()) return this.reset(), 0;
-         const LM = (0, zr.getCaughtUpMeshRotation)(this.Cm, nM);
+         } = this.iv, QV = null === (VV = YV.HxV(yV)) || void 0 === VV ? void 0 : VV.ridingVehicleEId, nV = QV && (null === (eV = YV.zJV(yV)) || void 0 === eV ? void 0 : eV.zk) === QV, wV = (null === (xV = YV.zJV(UV.J_)) || void 0 === xV ? void 0 : xV.zk) === yV;
+         if (!nV || !wV || null !== UV.B_ || null !== (JV = pV.client) && void 0 !== JV && JV.isReplayMode()) return this.reset(), 0;
+         const ZV = (0, we.getCaughtUpMeshRotation)(this.iv, QV);
```

#### 2326. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17812` → after: `L17106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17106) · [Before (L17812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17812)

```diff
-           HM = this.vehicleEId === nM ? wM.d.computeShortestRotation(this.previousHeading, mM) : 0;
+           rV = this.vehicleEId === QV ? NV.b.computeShortestRotation(this.previousHeading, vV) : 0;
```

#### 2327. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17816-L17818` → after: `L17110-L17112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17110-L17112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17110-L17112) · [Before (L17816-L17818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17816-L17818)

```diff
-     var mr = iM(38558),
-       Hr = iM(39064),
-       hr = iM(5041);
+     var ve = xV(38750),
+       re = xV(39227),
+       ke = xV(5150);
```

#### 2328. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17821-L17822` → after: `L17115-L17116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17115-L17116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17115-L17116) · [Before (L17821-L17822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17821-L17822)

```diff
-       Hr.i.setPlayerRigCheck((MM => HM.j.includes(MM) && pr(MM))), (0, rr.k)(), await kM.e.requiredAssetsAreGenerated();
-       const rM = kM.e.getGenerationFailure();
+       re.d.setPlayerRigCheck((VV => rV.m.includes(VV) && We(VV))), (0, ee.l)(), await iV.b.requiredAssetsAreGenerated();
+       const eV = iV.b.getGenerationFailure();
```

#### 2329. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17824` → after: `L17118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17118) · [Before (L17824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17824)

```diff
-       const iM = MM.CL.Hk();
+       const xV = VV.gZ.dD();
```

#### 2330. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17826-L17830` → after: `L17120-L17124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17120-L17124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17120-L17124) · [Before (L17826-L17830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17826-L17830)

```diff
-       const SM = await Promise.all(HM.j.map((MM => {
-           const rM = OM.then((() => (0, hr.t)(`lifeform ${MM}`)));
-           return OM = rM, rM.then((() => lr(MM, iM))).then((MM => (DM.i.Tz("matchmakeAndPlayStepCompleted", {
-             step: hM.n.SETUP_LIFEFORMS,
-             totalSubSteps: HM.j.length
+       const YV = await Promise.all(rV.m.map((VV => {
+           const eV = JV.then((() => (0, ke.m)(`lifeform ${VV}`)));
+           return JV = eV, eV.then((() => je(VV, xV))).then((VV => (DV.h.QZ("matchmakeAndPlayStepCompleted", {
+             step: kV.i.SETUP_LIFEFORMS,
+             totalSubSteps: rV.m.length
```

#### 2331. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17834-L17835` → after: `L17128-L17129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17128-L17129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17128-L17129) · [Before (L17834-L17835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17834-L17835)

```diff
-       for (let jM = 0; jM < HM.j.length; jM++) {
-         aM[HM.j[jM]] = SM[jM]
+       for (let UV = 0; UV < rV.m.length; UV++) {
+         yV[rV.m[UV]] = YV[UV]
```

#### 2332. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17837` → after: `L17131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17131) · [Before (L17837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17837)

```diff
-       return Jr = aM, await (0, hr.t)("local player"),
+       return be = yV, await (0, ke.m)("local player"),
```

#### 2333. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17841-L17842` → after: `L17135-L17136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17135-L17136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17135-L17136) · [Before (L17841-L17842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17841-L17842)

```diff
-               hU: iM,
-               eD: OM
+               sF: xV,
+               bD: JV
```

#### 2334. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17844-L17847` → after: `L17138-L17141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17138-L17141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17138-L17141) · [Before (L17844-L17847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17844-L17847)

```diff
-           Gr(rM, MM, OM), (0, BM.r)(MM, OM), iM.eZ(OM, iM.names.movementInputs), iM.eZ(OM, iM.names.movement), iM.eZ(OM, iM.names.updateServerOfMovement), iM.eZ(OM, iM.names.playerCameraAdjustment), iM.eZ(OM, iM.names.crouchingHandler), iM.eZ(OM, "stepSoundOnWalk"), iM.eZ(OM, "pl … [truncated]
-           const SM = iM.Av(OM);
-           SM.alwaysApplyHorizFriction = !0, SM.fm = 0;
-           const aM = iM.ziM(MM.camera.rK),
+           Fe(eV, VV, JV), (0, KV.w)(VV, JV), xV.WC(JV, xV.names.movementInputs), xV.WC(JV, xV.names.movement), xV.WC(JV, xV.names.updateServerOfMovement), xV.WC(JV, xV.names.playerCameraAdjustment), xV.WC(JV, xV.names.crouchingHandler), xV.WC(JV, "stepSoundOnWalk"), xV.WC(JV, "pl … [truncated]
+           const YV = xV.uH(JV);
+           YV.alwaysApplyHorizFriction = !0, YV.Sv = 0;
+           const yV = xV.zJV(VV.camera.J_),
```

#### 2335. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17849` → after: `L17143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17143) · [Before (L17849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17849)

```diff
-           MM.camera.zq = () => PM.zq(), aM.diM = (rM, SM, jM) => {
+           VV.camera.j_ = () => pV.j_(), yV.iJV = (eV, YV, UV) => {
```

#### 2336. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17851-L17853` → after: `L17145-L17147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17145-L17147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17145-L17147) · [Before (L17851-L17853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17851-L17853)

```diff
-             const aM = iM.grM(OM).ridingVehicleEId;
-             if (aM && !iM.BMM(OM, iM.names.mG)) {
-               const jM = iM.grM(OM).meshOffset,
+             const yV = xV.HxV(JV).ridingVehicleEId;
+             if (yV && !xV.wxV(JV, xV.names.HA)) {
+               const UV = xV.HxV(JV).meshOffset,
```

#### 2337. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17860` → after: `L17154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17154) · [Before (L17860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17860)

```diff
-             (0, LM.tickMovementInputsPrePhysics)(MM, rM), iM.BMM(OM, iM.names.mG) || (0, mM.tickMovementPrePhysics)(MM, rM)
+             (0, ZV.tickMovementInputsPrePhysics)(VV, eV), xV.wxV(JV, xV.names.HA) || (0, vV.tickMovementPrePhysics)(VV, eV)
```

#### 2338. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17866` → after: `L17160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17160) · [Before (L17866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17866)

```diff
-             PM.reset(), WM().set(SM.dd, 0, 0, 0), WM().set(SM.HA, 0, 0, 0), WM().set(SM.JA, 0, 0, 0), MM.bloxd.takeHeldPlayerBodySize(OM), iM.DPM(OM, iM.names.movement), iM.DPM(OM, iM.names.moveState);
+             pV.reset(), RV().set(YV.ME, 0, 0, 0), RV().set(YV.YH, 0, 0, 0), RV().set(YV.UH, 0, 0, 0), VV.bloxd.takeHeldPlayerBodySize(JV), xV.dQV(JV, xV.names.movement), xV.dQV(JV, xV.names.moveState);
```

#### 2339. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17870-L17871` → after: `L17164-L17165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17164-L17165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17164-L17165) · [Before (L17870-L17871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17870-L17871)

```diff
-                   Zk: rM,
-                   kiM: SM,
+                   pC: eV,
+                   VYV: YV,
```

#### 2340. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17878-L17880` → after: `L17172-L17174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17172-L17174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17172-L17174) · [Before (L17878-L17880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17878-L17880)

```diff
-               if (iM.DPM(OM, MM, {
-                   Zk: rM,
-                   kiM: SM,
+               if (xV.dQV(JV, VV, {
+                   pC: eV,
+                   VYV: YV,
```

#### 2341. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17883-L17885` → after: `L17177-L17179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17177-L17179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17177-L17179) · [Before (L17883-L17885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17883-L17885)

```diff
-                 }), iM.DPM(OM, "animator", {
-                   Zk: rM,
-                   kiM: SM,
+                 }), xV.dQV(JV, "animator", {
+                   pC: eV,
+                   VYV: YV,
```

#### 2342. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17887` → after: `L17181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17181) · [Before (L17887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17887)

```diff
-                 }), iM.BMM(OM, "rigAnimation")) {
+                 }), xV.wxV(JV, "rigAnimation")) {
```

#### 2343. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17891` → after: `L17185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17185) · [Before (L17891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17891)

```diff
-                 iM.DPM(OM, "rigAnimation", {
+                 xV.dQV(JV, "rigAnimation", {
```

#### 2344. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17893` → after: `L17187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17187) · [Before (L17893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17893)

```diff
-                   Zk: rM
+                   pC: eV
```

#### 2345. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17897-L17898` → after: `L17191-L17192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17191-L17192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17191-L17192) · [Before (L17897-L17898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17897-L17898)

```diff
-             iM.DPM(OM, iM.names.meshAttachments)
-           })), iM.eZ(OM, iM.names.cameraShake), iM.eZ(OM, "forcedCameraTransition"),
+             xV.dQV(JV, xV.names.meshAttachments)
+           })), xV.WC(JV, xV.names.cameraShake), xV.WC(JV, "forcedCameraTransition"),
```

#### 2346. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17900-L17902` → after: `L17194-L17196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17194-L17196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17194-L17196) · [Before (L17900-L17902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17900-L17902)

```diff
-               const rM = MM.eD;
-               sM.d.subscribe("useInventory", (iM => {
-                 if (!0 === iM && !MM.hU.WrM(rM)) {
+               const eV = VV.bD;
+               gV.c.subscribe("useInventory", (xV => {
+                 if (!0 === xV && !VV.sF.IxV(eV)) {
```

#### 2347. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17904-L17905` → after: `L17198-L17199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17198-L17199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17198-L17199) · [Before (L17904-L17905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17904-L17905)

```diff
-                     const OM = MM.hU.RrM(rM);
-                     DM.i.Tz("updatedInventory", OM.getItems())
+                     const JV = VV.sF.sxV(eV);
+                     DV.h.QZ("updatedInventory", JV.getItems())
```

#### 2348. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17907` → after: `L17201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17201) · [Before (L17907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17907)

```diff
-                   MM.hU.eZ(rM, MM.hU.names.inventory, {
+                   VV.sF.WC(eV, VV.sF.names.inventory, {
```

#### 2349. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17910-L17915` → after: `L17204-L17209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17204-L17209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17204-L17209) · [Before (L17910-L17915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17910-L17915)

```diff
-                   }), MM.hU.prM(MM.eD).inCreative = MM.aU.creative, DM.i.Tz("playerInventoryComponentChanged")
-                 }!1 === iM && MM.hU.WrM(rM) && (MM.hU.bZ(rM, MM.hU.names.inventory), DM.i.Tz("playerInventoryComponentChanged"))
-               })), sM.d.subscribe("creative", (iM => {
-                 MM.hU.BMM(rM, "inventory") && (MM.hU.prM(MM.eD).inCreative = iM)
-               })), DM.i.subscribe("leaveGame", (() => {
-                 MM.hU.WrM(rM) && MM.hU.bZ(rM, MM.hU.names.inventory)
+                   }), VV.sF.SxV(VV.bD).inCreative = VV.mF.creative, DV.h.QZ("playerInventoryComponentChanged")
+                 }!1 === xV && VV.sF.IxV(eV) && (VV.sF.gC(eV, VV.sF.names.inventory), DV.h.QZ("playerInventoryComponentChanged"))
+               })), gV.c.subscribe("creative", (xV => {
+                 VV.sF.wxV(eV, "inventory") && (VV.sF.SxV(VV.bD).inCreative = xV)
+               })), DV.h.subscribe("leaveGame", (() => {
+                 VV.sF.IxV(eV) && VV.sF.gC(eV, VV.sF.names.inventory)
```

#### 2350. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17923` → after: `L17217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17217) · [Before (L17923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17923)

```diff
-               hU: OM
+               sF: JV
```

#### 2351. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17925` → after: `L17219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17219) · [Before (L17925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17925)

```diff
-           sM.d.subscribe("numClosestPlayersVisible", (iM => {
+           gV.c.subscribe("numClosestPlayersVisible", (xV => {
```

#### 2352. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17928-L17929` → after: `L17222-L17223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17222-L17223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17222-L17223) · [Before (L17928-L17929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17928-L17929)

```diff
-               const rM = MM.hU.iZ("genericLifeformState");
-               for (const MM of rM) MM.meshEnabledCombinator.removeBoolean("closestVisibleX"), OM.getState(MM.HZ, OM.names.tL).enabledCombinator.removeBoolean("closestVisibleX")
+               const eV = VV.sF.tC("genericLifeformState");
+               for (const VV of eV) VV.meshEnabledCombinator.removeBoolean("closestVisibleX"), JV.getState(VV.zC, JV.names.aZ).enabledCombinator.removeBoolean("closestVisibleX")
```

#### 2353. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17940` → after: `L17234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17234) · [Before (L17940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17940)

```diff
-             const PM = OM.XE(MM.eD);
+             const pV = JV.YF(VV.bD);
```

#### 2354. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17942` → after: `L17236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17236) · [Before (L17942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17942)

```diff
-             const nM = OM.iZ("genericLifeformState");
+             const QV = JV.tC("genericLifeformState");
```

#### 2355. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17944` → after: `L17238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17238) · [Before (L17944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17944)

```diff
-             iM.length = nM.length, iM.sort(((MM, rM) => WM().RQ(OM.XE(MM.HZ), PM) - WM().RQ(OM.XE(rM.HZ), PM)));
+             xV.length = QV.length, xV.sort(((VV, eV) => RV().Dn(JV.YF(VV.zC), pV) - RV().Dn(JV.YF(eV.zC), pV)));
```

#### 2356. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17946` → after: `L17240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17240) · [Before (L17946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17946)

```diff
-             for (const SM of iM) SM.HZ !== MM.eD && (QM < rM ? (SM.meshEnabledCombinator.setBooleanType("closestVisibleX", !0), OM.getState(SM.HZ, OM.names.tL).enabledCombinator.setBooleanType("closestVisibleX", !0), QM++) : (SM.meshEnabledCombinator.setBooleanType("closestVisibl … [truncated]
+             for (const YV of xV) YV.zC !== VV.bD && (nV < eV ? (YV.meshEnabledCombinator.setBooleanType("closestVisibleX", !0), JV.getState(YV.zC, JV.names.aZ).enabledCombinator.setBooleanType("closestVisibleX", !0), nV++) : (YV.meshEnabledCombinator.setBooleanType("closestVisibl … [truncated]
```

#### 2357. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17948-L17950` → after: `L17242-L17244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17242-L17244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17242-L17244) · [Before (L17948-L17950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17948-L17950)

```diff
-           MM.on("bL", (function(rM) {
-             const iM = OM.XE(MM.eD),
-               PM = WM().RQ(iM, SM);
+           VV.on("iZ", (function(eV) {
+             const xV = JV.YF(VV.bD),
+               pV = RV().Dn(xV, YV);
```

#### 2358. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17980` → after: `L17274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17274) · [Before (L17980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17980)

```diff
-         PM = null !== (iM = aM.meshMetadata.lifeformTypeForModelOverride) && void 0 !== iM ? iM : MM,
+         pV = null !== (xV = yV.meshMetadata.lifeformTypeForModelOverride) && void 0 !== xV ? xV : VV,
```

#### 2359. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17984-L17985` → after: `L17278-L17279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17278-L17279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17278-L17279) · [Before (L17984-L17985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17984-L17985)

```diff
-         for (const MM of JM.d) nM.push(dM.e[MM][(0, yM.c)(MM)].atlasIdx);
-         QM = lM.h
+         for (const VV of bV.c) QV.push(EV.e[VV][(0, BV.b)(VV)].atlasIdx);
+         nV = jV.c
```

#### 2360. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17988-L17989` → after: `L17282-L17283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17282-L17283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17282-L17283) · [Before (L17988-L17989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17988-L17989)

```diff
-           iM = (0, EM.e)(rM, "default");
-         for (nM.push(iM.atlasIdx1), nM.push(iM.atlasIdx2), nM.push(iM.atlasIdx3); QM * QM < UM.q[rM].length;) QM *= 2
+           xV = (0, qV.d)(eV, "default");
+         for (QV.push(xV.atlasIdx1), QV.push(xV.atlasIdx2), QV.push(xV.atlasIdx3); nV * nV < tV.l[eV].length;) nV *= 2
```

#### 2361. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L17999` → after: `L17293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17293) · [Before (L17999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L17999)

```diff
-         } = (0, Sr.b)(MM), OM = (0, RM.h)() || !1, SM = null !== (rM = iM.lifeformTypeForModelOverride) && void 0 !== rM ? rM : MM, jM = OM ? kM.e.getModel(`${SM}_Model`, oM.d.LIFEFORM) : null, aM = jM && !jM.notFound;
+         } = (0, Ye.b)(VV), JV = (0, GV.h)() || !1, YV = null !== (eV = xV.lifeformTypeForModelOverride) && void 0 !== eV ? eV : VV, UV = JV ? iV.b.getModel(`${YV}_Model`, aV.e.LIFEFORM) : null, yV = UV && !UV.notFound;
```

#### 2362. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18003-L18005` → after: `L17297-L17299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17297-L17299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17297-L17299) · [Before (L18003-L18005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18003-L18005)

```diff
-           PM = kM.e.getTexture("Player_Atlas", MM).url
-         } else PM = kM.e.getTexture(`${MM}_Atlas`, oM.f.LIFEFORM_ATLAS).url;
-         let nM = aM ? jM.url : (0, BM.o)(SM, `${SM}_Model.glb`);
+           pV = iV.b.getTexture("Player_Atlas", VV).url
+         } else pV = iV.b.getTexture(`${VV}_Atlas`, aV.f.LIFEFORM_ATLAS).url;
+         let QV = yV ? UV.url : (0, KV.p)(YV, `${YV}_Model.glb`);
```

#### 2363. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18007` → after: `L17301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17301) · [Before (L18007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18007)

```diff
-         const QM = (0, GM.e)(SM),
+         const nV = (0, FV.b)(YV),
```

#### 2364. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18011` → after: `L17305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17305) · [Before (L18011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18011)

```diff
-               OM = (0, BM.o)(MM, `${MM}${NM}`)
+               JV = (0, KV.p)(VV, `${VV}${hV}`)
```

#### 2365. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18015-L18021` → after: `L17309-L17315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17309-L17315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17309-L17315) · [Before (L18015-L18021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18015-L18021)

```diff
-             const SM = (0, YM.g)(OM);
-             if (!SM) return console.error(`Pre-reconstructed GLB for ${MM} is no longer base64-inlined - cannot verify its build hash. Falling back to runtime reconstruction.`), null;
-             const jM = (0, YM.g)(rM);
-             if (!jM) return console.error(`GLB for ${MM} is no longer base64-inlined - cannot verify the pre-reconstructed build hash. Falling back to runtime reconstruction.`), null;
-             const aM = (0, YM.e)(SM.base64),
-               PM = (0, fM.l)(iM, jM.base64);
-             if ((0, fM.H)(aM) !== PM) return console.error(`Stale pre-reconstructed model for ${MM} - re-run \`npm run buildMeshes\`. Falling back to runtime reconstruction.`), null;
+             const YV = (0, cV.h)(JV);
+             if (!YV) return console.error(`Pre-reconstructed GLB for ${VV} is no longer base64-inlined - cannot verify its build hash. Falling back to runtime reconstruction.`), null;
+             const UV = (0, cV.h)(eV);
+             if (!UV) return console.error(`GLB for ${VV} is no longer base64-inlined - cannot verify the pre-reconstructed build hash. Falling back to runtime reconstruction.`), null;
+             const yV = (0, cV.b)(YV.base64),
+               pV = (0, oV.i)(xV, UV.base64);
+             if ((0, oV.z)(yV) !== pV) return console.error(`Stale pre-reconstructed model for ${VV} - re-run \`npm run buildMeshes\`. Falling back to runtime reconstruction.`), null;
```

#### 2366. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18030` → after: `L17324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17324) · [Before (L18030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18030)

```diff
-       await (0, hr.t)(`lifeform ${MM} materials`);
+       await (0, ke.m)(`lifeform ${VV} materials`);
```

#### 2367. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18048` → after: `L17342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17342) · [Before (L18048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18048)

```diff
-           return (0, Mr.d)({
+           return (0, Ve.e)({
```

#### 2368. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18050` → after: `L17344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17344) · [Before (L18050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18050)

```diff
-             YJ: iM,
+             yE: xV,
```

#### 2369. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18052` → after: `L17346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17346) · [Before (L18052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18052)

```diff
-               transparencyMode: jr.c.MATERIAL_OPAQUE,
+               transparencyMode: Ue.d.MATERIAL_OPAQUE,
```

#### 2370. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18057` → after: `L17351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17351) · [Before (L18057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18057)

```diff
-                 samplingMode: Pr.i.nearest,
+                 samplingMode: pe.h.nearest,
```

#### 2371. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18067` → after: `L17361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17361) · [Before (L18067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18067)

```diff
-               (0, nr.r)(MM, TM.d, {
+               (0, Qe.q)(VV, IV.b, {
```

#### 2372. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18069` → after: `L17363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17363) · [Before (L18069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18069)

```diff
-               }), (0, qM.b)(MM, (0, AM.f)().CL), (0, cM.b)(MM), (0, nr.r)(MM, VM.e), (0, nr.J)(MM)
+               }), (0, SV.e)(VV, (0, lV.d)().gZ), (0, OV.b)(VV), (0, Qe.q)(VV, dV.g), (0, Qe.M)(VV)
```

#### 2373. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18073` → after: `L17367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17367) · [Before (L18073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18073)

```diff
-         }(`${MM}ArmourMaterial`, iM, rM), tM = iM.textureOffsets, gM = iM.isArmourVisibleByDefault
+         }(`${VV}ArmourMaterial`, xV, eV), XV = xV.textureOffsets, MV = xV.isArmourVisibleByDefault
```

#### 2374. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18075` → after: `L17369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17369) · [Before (L18075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18075)

```diff
-       const uM = (0, GM.e)(PM);
+       const zV = (0, FV.b)(pV);
```

#### 2375. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18077` → after: `L17371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17371) · [Before (L18077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18077)

```diff
-         const SM = await (0, rr.g)(iM, OM, {}).catch((MM => (console.error(`Failed to parse pre-reconstructed model for ${rM} - falling back to runtime reconstruction.`, MM, ...null !== MM && void 0 !== MM && MM.innerError ? [MM.innerError] : []), null)));
+         const YV = await (0, ee.f)(xV, JV, {}).catch((VV => (console.error(`Failed to parse pre-reconstructed model for ${eV} - falling back to runtime reconstruction.`, VV, ...null !== VV && void 0 !== VV && VV.innerError ? [VV.innerError] : []), null)));
```

#### 2376. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18079-L18081` → after: `L17373-L17375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17373-L17375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17373-L17375) · [Before (L18079-L18081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18079-L18081)

```diff
-         await (0, hr.t)(`lifeform ${MM} model`), SM.addAllToScene();
-         const jM = (0, Or.e)(SM, OM);
-         if (!jM) return SM.dispose(), console.error(`Corrupt pre-reconstructed model for ${rM} (no __root__) - falling back to runtime reconstruction.`), null;
+         await (0, ke.m)(`lifeform ${VV} model`), YV.addAllToScene();
+         const UV = (0, Je.g)(YV, JV);
+         if (!UV) return YV.dispose(), console.error(`Corrupt pre-reconstructed model for ${eV} (no __root__) - falling back to runtime reconstruction.`), null;
```

#### 2377. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18085` → after: `L17379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17379) · [Before (L18085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18085)

```diff
-         const iM = await (0, rr.g)("", rM, {
+         const xV = await (0, ee.f)("", eV, {
```

#### 2378. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18088` → after: `L17382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17382) · [Before (L18088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18088)

```diff
-         await (0, hr.t)(`lifeform ${MM} model`), pM = uM ? Or.d.reconstructModel(iM, uM.reconstructionSchema, rM, LM) : {
+         await (0, ke.m)(`lifeform ${VV} model`), WV = zV ? Je.c.reconstructModel(xV, zV.reconstructionSchema, eV, ZV) : {
```

#### 2379. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18093-L18094` → after: `L17387-L17388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17387-L17388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17387-L17388) · [Before (L18093-L18094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18093-L18094)

```diff
-       await (0, hr.t)(`lifeform ${MM} meshes`);
-       const WM = (0, AM.f)(),
+       await (0, ke.m)(`lifeform ${VV} meshes`);
+       const RV = (0, lV.d)(),
```

#### 2380. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18096` → after: `L17390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17390) · [Before (L18096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18096)

```diff
-           CL: sM
+           gZ: gV
```

#### 2381. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18098-L18099` → after: `L17392-L17393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17392-L17393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17392-L17393) · [Before (L18098-L18099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18098-L18099)

```diff
-         DM = sM.Dk,
-         xM = jM || !sM.MJ;
+         DV = gV.YC,
+         LV = UV || !gV.jb;
```

#### 2382. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18102-L18103` → after: `L17396-L17397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17396-L17397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17396-L17397) · [Before (L18102-L18103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18102-L18103)

```diff
-         const MM = (0, BM.g)(SM) ? wM : null !== (vM = null !== HM && void 0 !== HM && HM.includes(SM.name) ? bM : null) && void 0 !== vM ? vM : eM;
-         MM && xM && (jM ? rM.JOM(SM, !1) : sM.Vk(SM)), (0, fM.v)(SM) || (0, fM.E)(SM, 1 / 512), SM.Yk(), SM.material = MM, SM.sideOrientation = jr.c.CounterClockWiseSideOrientation, (0, ar.f)(SM) ? null !== hM && void 0 !== hM && hM.includes(SM.name) && (SM.noSunShadowVertices =  … [truncated]
+         const VV = (0, KV.j)(YV) ? NV : null !== (fV = null !== rV && void 0 !== rV && rV.includes(YV.name) ? AV : null) && void 0 !== fV ? fV : PV;
+         VV && LV && (UV ? eV.gYV(YV, !1) : gV.bC(YV)), (0, oV.l)(YV) || (0, oV.v)(YV, 1 / 512), YV.nC(), YV.material = VV, YV.sideOrientation = Ue.d.CounterClockWiseSideOrientation, (0, ye.f)(YV) ? null !== kV && void 0 !== kV && kV.includes(YV.name) && (YV.noSunShadowVertices =  … [truncated]
```

#### 2383. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18106` → after: `L17400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17400) · [Before (L18106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18106)

```diff
-         ((0, ar.f)(SM) ? !SM.material : !SM.Hk().meshes.includes(SM)) && 0 === SM.getChildMeshes().length && SM.kR(!1)
+         ((0, ye.f)(YV) ? !YV.material : !YV.dD().meshes.includes(YV)) && 0 === YV.getChildMeshes().length && YV.pW(!1)
```

#### 2384. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18112` → after: `L17406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17406) · [Before (L18112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18112)

```diff
-           "ArmLeftMesh" === JM.name && JM.translate(SM.sh.LeftReadOnly, MM), "ArmRightMesh" === JM.name && JM.translate(SM.sh.RightReadOnly, MM), "HeadMesh" === JM.name && JM.translate(SM.sh.DownReadOnly, MM), "LegLeftMesh" === JM.name && JM.translate(SM.sh.UpReadOnly, MM), "LegR … [truncated]
+           "ArmLeftMesh" === bV.name && bV.translate(YV.Ik.LeftReadOnly, VV), "ArmRightMesh" === bV.name && bV.translate(YV.Ik.RightReadOnly, VV), "HeadMesh" === bV.name && bV.translate(YV.Ik.DownReadOnly, VV), "LegLeftMesh" === bV.name && bV.translate(YV.Ik.UpReadOnly, VV), "LegR … [truncated]
```

#### 2385. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18119` → after: `L17413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17413) · [Before (L18119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18119)

```diff
-         for (const SM of IM) SM.material && sM.Vk(SM);
+         for (const YV of uV) YV.material && gV.bC(YV);
```

#### 2386. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18121-L18122` → after: `L17415-L17416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17415-L17416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17415-L17416) · [Before (L18121-L18122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18121-L18122)

```diff
-         const MM = (0, BM.o)("Player", "cape_cuboid_18_12.glb").replace("model/gltf-binary;", ""),
-           iM = await (0, rr.c)("", rM, {
+         const VV = (0, KV.p)("Player", "cape_cuboid_18_12.glb").replace("model/gltf-binary;", ""),
+           xV = await (0, ee.b)("", eV, {
```

#### 2387. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18128-L18130` → after: `L17422-L17424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17422-L17424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17422-L17424) · [Before (L18128-L18130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18128-L18130)

```diff
-           } = rM.aY();
-           if (SM.sh.DistanceSquared(MM.minimum, MM.maximum)) {
-             (0, fM.v)(rM) || (0, fM.E)(rM, 1 / 128), rM.name = "Cape", rM.UL = rM.UL.scale(.12), rM.AJ = !1, FM = rM;
+           } = eV.qL();
+           if (YV.Ik.DistanceSquared(VV.minimum, VV.maximum)) {
+             (0, oV.l)(eV) || (0, oV.v)(eV, 1 / 128), eV.name = "Cape", eV.WZ = eV.WZ.scale(.12), eV.QE = !1, mV = eV;
```

#### 2388. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18137` → after: `L17431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17431) · [Before (L18137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18137)

```diff
-           YJ: rM,
+           yE: eV,
```

#### 2389. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18143` → after: `L17437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17437) · [Before (L18143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18143)

```diff
-           meshGroupsWithDifferentAtlases: Object.fromEntries(Object.entries(null !== (OM = aM.meshMetadata.meshGroupsWithDifferentAtlases) && void 0 !== OM ? OM : {}).map((rM => {
+           meshGroupsWithDifferentAtlases: Object.fromEntries(Object.entries(null !== (JV = yV.meshMetadata.meshGroupsWithDifferentAtlases) && void 0 !== JV ? JV : {}).map((eV => {
```

#### 2390. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18146` → after: `L17440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17440) · [Before (L18146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18146)

```diff
-               numTexturesInAtlas: "default" === OM.numTexturesInAtlas ? "Player" === PM ? QM : UM.q[MM].length : OM.numTexturesInAtlas
+               numTexturesInAtlas: "default" === JV.numTexturesInAtlas ? "Player" === pV ? nV : tV.l[VV].length : JV.numTexturesInAtlas
```

#### 2391. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18150` → after: `L17444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17444) · [Before (L18150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18150)

```diff
-         Qr = jM ? `${MM}Preview` : MM;
+         ne = UV ? `${VV}Preview` : VV;
```

#### 2392. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18152` → after: `L17446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17446) · [Before (L18152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18152)

```diff
-         vL: 32,
+         Jv: 32,
```

#### 2393. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18176` → after: `L17470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17470) · [Before (L18176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18176)

```diff
-       }), DM.setPickableForType(Qr, !jM), DM.setCullableForType(Qr, !jM), (0, ir.n)(XM), {
+       }), DV.setPickableForType(ne, !UV), DV.setCullableForType(ne, !UV), (0, xe.o)(HV), {
```

#### 2394. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18184-L18186` → after: `L17478-L17480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17478-L17480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17478-L17480) · [Before (L18184-L18186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18184-L18186)

```diff
-       return (0, Mr.d)({
-         name: `${MM}SpriteSheet${jM?"":"WithVisibleBackFaces"}`,
-         YJ: rM,
+       return (0, Ve.e)({
+         name: `${VV}SpriteSheet${UV?"":"WithVisibleBackFaces"}`,
+         yE: eV,
```

#### 2395. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18194` → after: `L17488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17488) · [Before (L18194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18194)

```diff
-             samplingMode: Pr.i.nearest
+             samplingMode: pe.h.nearest
```

#### 2396. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18205` → after: `L17499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17499) · [Before (L18205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18205)

```diff
-           (0, IM.b)(MM, OM, OM, SM), (0, nr.r)(MM, KM.c), (0, qM.b)(MM, (0, AM.f)().CL), (0, cM.b)(MM), (0, nr.J)(MM)
+           (0, uV.e)(VV, JV, JV, YV), (0, Qe.q)(VV, sV.e), (0, SV.e)(VV, (0, lV.d)().gZ), (0, OV.b)(VV), (0, Qe.M)(VV)
```

#### 2397. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18215-L18217` → after: `L17509-L17511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17509-L17511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17509-L17511) · [Before (L18215-L18217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18215-L18217)

```diff
-       const jM = (0, AM.f)().CL.Dk,
-         aM = SM ? `${MM}Preview` : MM;
-       if (!jM.hasType(aM)) throw new Error(`Thin instance manager not set up for ${MM}`);
+       const UV = (0, lV.d)().gZ.YC,
+         yV = YV ? `${VV}Preview` : VV;
+       if (!UV.hasType(yV)) throw new Error(`Thin instance manager not set up for ${VV}`);
```

#### 2398. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18219` → after: `L17513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17513) · [Before (L18219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18219)

```diff
-       iM && jM.kR(PM, !0);
+       xV && UV.pW(pV, !0);
```

#### 2399. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18223` → after: `L17517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17517) · [Before (L18223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18223)

```diff
-       return jM.setGroupEnabled(PM, "armour", nM), nM && jM.setGroup(PM, "armour", "aArmourTint", 1, 1, 1, 0), Jr[MM].meshApi.updateMeshOverlayColour(PM, new OM.d(0, 0, 0, 0)), Jr[MM].meshApi.updateMeshLightLevels(PM, Qr.c), jM.getScale(PM).scaleInPlace(rM), jM.setDirty(PM, 0), P … [truncated]
+       return UV.setGroupEnabled(pV, "armour", QV), QV && UV.setGroup(pV, "armour", "aArmourTint", 1, 1, 1, 0), be[VV].meshApi.updateMeshOverlayColour(pV, new JV.c(0, 0, 0, 0)), be[VV].meshApi.updateMeshLightLevels(pV, ne.d), UV.getScale(pV).scaleInPlace(eV), UV.setDirty(pV, 0), p … [truncated]
```

#### 2400. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18229` → after: `L17523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17523) · [Before (L18229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18229)

```diff
-         hU: GM
+         sF: FV
```

#### 2401. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18232` → after: `L17526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17526) · [Before (L18232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18232)

```diff
-       } = (0, Sr.b)(MM), uM = rM.CL.Dk, RM = Ur(MM), pM = uM.lD(RM, 0);
+       } = (0, Ye.b)(VV), zV = eV.gZ.YC, GV = te(VV), WV = zV.rD(GV, 0);
```

#### 2402. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18234` → after: `L17528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17528) · [Before (L18234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18234)

```diff
-       "humanoidMesh" === gM.type ? (kM = CM.p, ZM = CM.n) : (kM = CM.j, ZM = CM.g), GM.eZ(iM, GM.names.moveState), GM.eZ(iM, "genericLifeformState"), GM.eZ(iM, "genericLifeform", {
+       "humanoidMesh" === MV.type ? (iV = TV.p, CV = TV.m) : (iV = TV.i, CV = TV.g), FV.WC(xV, FV.names.moveState), FV.WC(xV, "genericLifeformState"), FV.WC(xV, "genericLifeform", {
```

#### 2403. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18236-L18238` → after: `L17530-L17532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17530-L17532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17530-L17532) · [Before (L18236-L18238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18236-L18238)

```diff
-           Zk: RM,
-           kiM: pM
-         }), GM.eZ(iM, "QG"), GM.eZ(iM, "meshRotation", {
+           pC: GV,
+           VYV: WV
+         }), FV.WC(xV, "JA"), FV.WC(xV, "meshRotation", {
```

#### 2404. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18244` → after: `L17538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17538) · [Before (L18244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18244)

```diff
-           modelYRotationOffset: null !== (SM = gM.modelYRotationOffset) && void 0 !== SM ? SM : 0
+           modelYRotationOffset: null !== (YV = MV.modelYRotationOffset) && void 0 !== YV ? YV : 0
```

#### 2405. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18247` → after: `L17541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17541) · [Before (L18247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18247)

```diff
-           const iM = MM.hU.KrM(rM),
+           const xV = VV.sF.rJV(eV),
```

#### 2406. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18249` → after: `L17543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17543) · [Before (L18249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18249)

```diff
-             SM = MM.aU.showPlayersInUnloadedChunks || !1;
+             YV = VV.mF.showPlayersInUnloadedChunks || !1;
```

#### 2407. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18253` → after: `L17547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17547) · [Before (L18253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18253)

```diff
-           MM.hU.eZ(rM, "inLoadedChunk", {
+           VV.sF.WC(eV, "inLoadedChunk", {
```

#### 2408. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18255` → after: `L17549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17549) · [Before (L18255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18255)

```diff
-               jM = SM, aM || (OM.setBooleanType("inLoadedChunk", SM), rM !== MM.eD && (iM.isLifeformMeshEnabled = SM))
+               UV = YV, yV || (JV.setBooleanType("inLoadedChunk", YV), eV !== VV.bD && (xV.isLifeformMeshEnabled = YV))
```

#### 2409. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18258-L18259` → after: `L17552-L17553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17552-L17553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17552-L17553) · [Before (L18258-L18259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18258-L18259)

```diff
-           const PM = sM.d.subscribe("showPlayersInUnloadedChunks", (SM => {
-               aM = SM, aM ? (OM.setBooleanType("inLoadedChunk", !0), iM.isLifeformMeshEnabled = !0) : (OM.setBooleanType("inLoadedChunk", jM), rM !== MM.eD && (iM.isLifeformMeshEnabled = jM))
+           const pV = gV.c.subscribe("showPlayersInUnloadedChunks", (YV => {
+               yV = YV, yV ? (JV.setBooleanType("inLoadedChunk", !0), xV.isLifeformMeshEnabled = !0) : (JV.setBooleanType("inLoadedChunk", UV), eV !== VV.bD && (xV.isLifeformMeshEnabled = UV))
```

#### 2410. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18261-L18262` → after: `L17555-L17556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17555-L17556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17555-L17556) · [Before (L18261-L18262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18261-L18262)

```diff
-             nM = DM.i.subscribe(`lifeformDisposed|${rM}`, (() => {
-               PM(), DM.i.unsubscribe(nM)
+             QV = DV.h.subscribe(`lifeformDisposed|${eV}`, (() => {
+               pV(), DV.h.unsubscribe(QV)
```

#### 2411. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18264-L18266` → after: `L17558-L17560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17558-L17560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17558-L17560) · [Before (L18264-L18266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18264-L18266)

```diff
-         }(rM, iM), GM.eZ(iM, "updateWalkingState", {
-           Zk: RM,
-           kiM: pM,
+         }(eV, xV), FV.WC(xV, "updateWalkingState", {
+           pC: GV,
+           VYV: WV,
```

#### 2412. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18268-L18277` → after: `L17562-L17571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17562-L17571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17562-L17571) · [Before (L18268-L18277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18268-L18277)

```diff
-         }), GM.eZ(iM, GM.names[gM.type], {
-           Zk: RM,
-           kiM: pM,
-           heldItemPositionParams: null !== (jM = gM.heldItemPositionParams) && void 0 !== jM ? jM : {},
-           maxWalkingAngleOverride: null !== (LM = gM.walkingLegSwingAngle) && void 0 !== LM ? LM : null
-         }), GM.eZ(iM, "animator", {
-           Zk: RM,
-           kiM: pM,
-           modelLifeformType: null !== (mM = gM.lifeformTypeForModelOverride) && void 0 !== mM ? mM : MM
-         }), Hr.i.hasAnimation(MM) && GM.eZ(iM, "rigAnimation", {
+         }), FV.WC(xV, FV.names[MV.type], {
+           pC: GV,
+           VYV: WV,
+           heldItemPositionParams: null !== (UV = MV.heldItemPositionParams) && void 0 !== UV ? UV : {},
+           maxWalkingAngleOverride: null !== (ZV = MV.walkingLegSwingAngle) && void 0 !== ZV ? ZV : null
+         }), FV.WC(xV, "animator", {
+           pC: GV,
+           VYV: WV,
+           modelLifeformType: null !== (vV = MV.lifeformTypeForModelOverride) && void 0 !== vV ? vV : VV
+         }), re.d.hasAnimation(VV) && FV.WC(xV, "rigAnimation", {
```

#### 2413. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18279` → after: `L17573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17573) · [Before (L18279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18279)

```diff
-           Zk: RM
+           pC: GV
```

#### 2414. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18283-L18284` → after: `L17577-L17578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17577-L17578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17577-L17578) · [Before (L18283-L18284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18283-L18284)

```diff
-             hU: OM
-           } = rM, SM = (0, Sr.b)(MM), jM = OM.KrM(iM), nM = OM.getState(iM, OM.names.tL);
+             sF: JV
+           } = eV, YV = (0, Ye.b)(VV), UV = JV.rJV(xV), QV = JV.getState(xV, JV.names.aZ);
```

#### 2415. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18287` → after: `L17581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17581) · [Before (L18287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18287)

```diff
-               jM.meshEnabledCombinator.setBooleanType(MM, rM), OM.getState(iM, OM.names.tL).enabledCombinator.setBooleanType(MM, rM)
+               UV.meshEnabledCombinator.setBooleanType(VV, eV), JV.getState(xV, JV.names.aZ).enabledCombinator.setBooleanType(VV, eV)
```

#### 2416. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18290` → after: `L17584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17584) · [Before (L18290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18290)

```diff
-               const jM = OM.getState((0, aM.e)(iM), SM.meshMetadata.type);
+               const UV = JV.getState((0, yV.c)(xV), YV.meshMetadata.type);
```

#### 2417. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18292` → after: `L17586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17586) · [Before (L18292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18292)

```diff
-                 rM.CL.Dk.setVisibility(jM.Zk, MM)
+                 eV.gZ.YC.setVisibility(UV.pC, VV)
```

#### 2418. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18296` → after: `L17590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17590) · [Before (L18296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18296)

```diff
-                 const SM = OM.GrM(iM);
+                 const YV = JV.hxV(xV);
```

#### 2419. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18299` → after: `L17593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17593) · [Before (L18299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18299)

```diff
-                     Zk: iM
+                     pC: xV
```

#### 2420. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18302-L18303` → after: `L17596-L17597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17596-L17597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17596-L17597) · [Before (L18302-L18303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18302-L18303)

```diff
-                     rM.CL.Dk.kR(iM, MM)
-                   } else SM.mesh.name !== tM.b.SKYBOX && (SM.mesh.isVisible = MM)
+                     eV.gZ.YC.pW(xV, VV)
+                   } else YV.mesh.name !== XV.d.SKYBOX && (YV.mesh.isVisible = VV)
```

#### 2421. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18306` → after: `L17600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17600) · [Before (L18306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18306)

```diff
-               OM.getState(iM, OM.names.tL).enabledCombinator.setBooleanType("visible", MM)
+               JV.getState(xV, JV.names.aZ).enabledCombinator.setBooleanType("visible", VV)
```

#### 2422. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18309-L18310` → after: `L17603-L17604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17603-L17604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17603-L17604) · [Before (L18309-L18310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18309-L18310)

```diff
-               const jM = (0, PM.c)("meshScaling", OM),
-                 nM = rM.hU.getState((0, aM.e)(iM), SM.meshMetadata.type);
+               const UV = (0, pV.e)("meshScaling", JV),
+                 QV = eV.sF.getState((0, yV.c)(xV), YV.meshMetadata.type);
```

#### 2423. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18312` → after: `L17606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17606) · [Before (L18312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18312)

```diff
-               const QM = (0, AM.f)().CL.Dk,
+               const nV = (0, lV.d)().gZ.YC,
```

#### 2424. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18314` → after: `L17608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17608) · [Before (L18314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18314)

```diff
-                   Zk: zM
+                   pC: wV
```

#### 2425. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18317` → after: `L17611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17611) · [Before (L18317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18317)

```diff
-               const LM = rM.hU.getState((0, aM.e)(iM), "animator"),
+               const ZV = eV.sF.getState((0, yV.c)(xV), "animator"),
```

#### 2426. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18319` → after: `L17613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17613) · [Before (L18319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18319)

```diff
-                 hM = mM ? HM.m : QM.getNodeNames(zM);
+                 kV = vV ? rV.p : nV.getNodeNames(wV);
```

#### 2427. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18324` → after: `L17618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17618) · [Before (L18324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18324)

```diff
-                   iM = null !== (JM = jM[MM]) && void 0 !== JM ? JM : [1, 1, 1];
+                   xV = null !== (bV = UV[VV]) && void 0 !== bV ? bV : [1, 1, 1];
```

#### 2428. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18328-L18331` → after: `L17622-L17625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17622-L17625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17622-L17625) · [Before (L18328-L18331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18328-L18331)

```diff
-             mM = rM.rY[rM.eD][iM];
-           mM && (QM("notDead", (0, PM.c)("_isAlive", mM._isAlive)), QM("canSeeSetting", (0, PM.c)("canSee", mM.canSee)), zM(!mM._invisibleEffect), LM(mM.meshScaling));
-           const hM = DM.i.subscribe(`otherEntitySettingsClientifiedEId|${iM}|_isAlive`, (MM => {
-               QM("notDead", (0, PM.c)("_isAlive", MM))
+             vV = eV.YL[eV.bD][xV];
+           vV && (nV("notDead", (0, pV.e)("_isAlive", vV._isAlive)), nV("canSeeSetting", (0, pV.e)("canSee", vV.canSee)), wV(!vV._invisibleEffect), ZV(vV.meshScaling));
+           const kV = DV.h.subscribe(`otherEntitySettingsClientifiedEId|${xV}|_isAlive`, (VV => {
+               nV("notDead", (0, pV.e)("_isAlive", VV))
```

#### 2429. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18333-L18334` → after: `L17627-L17628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17627-L17628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17627-L17628) · [Before (L18333-L18334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18333-L18334)

```diff
-             JM = DM.i.subscribe(`otherEntitySettingsClientifiedEId|${iM}|canSee`, (MM => {
-               QM("canSeeSetting", (0, PM.c)("canSee", MM))
+             bV = DV.h.subscribe(`otherEntitySettingsClientifiedEId|${xV}|canSee`, (VV => {
+               nV("canSeeSetting", (0, pV.e)("canSee", VV))
```

#### 2430. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18336` → after: `L17630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17630) · [Before (L18336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18336)

```diff
-             dM = DM.i.subscribe(`otherEntitySettingsClientifiedEId|${iM}|_invisibleEffect`, (MM => {
+             EV = DV.h.subscribe(`otherEntitySettingsClientifiedEId|${xV}|_invisibleEffect`, (VV => {
```

#### 2431. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18339` → after: `L17633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17633) · [Before (L18339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18339)

```diff
-             yM = DM.i.subscribe(`otherEntitySettingsClientifiedEId|${iM}|meshScaling`, (MM => {
+             BV = DV.h.subscribe(`otherEntitySettingsClientifiedEId|${xV}|meshScaling`, (VV => {
```

#### 2432. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18343` → after: `L17637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17637) · [Before (L18343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18343)

```diff
-           if (iM === rM.eD) {
+           if (xV === eV.bD) {
```

#### 2433. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18347-L18349` → after: `L17641-L17643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17641-L17643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17641-L17643) · [Before (L18347-L18349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18347-L18349)

```diff
-             lM = DM.i.subscribe(`otherEntitySettingsClientifiedEId|${rM.eD}|_isAlive`, (iM => {
-               const OM = rM.hU.Av(rM.eD);
-               if ((0, PM.c)("_isAlive", iM)) {
+             jV = DV.h.subscribe(`otherEntitySettingsClientifiedEId|${eV.bD}|_isAlive`, (xV => {
+               const JV = eV.sF.uH(eV.bD);
+               if ((0, pV.e)("_isAlive", xV)) {
```

#### 2434. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18352` → after: `L17646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17646) · [Before (L18352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18352)

```diff
-               } else MM.gravityMultiplier = OM.gravityMultiplier, OM.gravityMultiplier = 0, OM.dd[0] = 0, OM.dd[1] = 0, OM.dd[2] = 0, OM.HA[0] = 0, OM.HA[1] = 0, OM.HA[2] = 0, OM.JA[0] = 0, OM.JA[1] = 0, OM.JA[2] = 0
+               } else VV.gravityMultiplier = JV.gravityMultiplier, JV.gravityMultiplier = 0, JV.ME[0] = 0, JV.ME[1] = 0, JV.ME[2] = 0, JV.YH[0] = 0, JV.YH[1] = 0, JV.YH[2] = 0, JV.UH[0] = 0, JV.UH[1] = 0, JV.UH[2] = 0
```

#### 2435. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18355-L18356` → after: `L17649-L17650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17649-L17650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17649-L17650) · [Before (L18355-L18356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18355-L18356)

```diff
-           const EM = DM.i.subscribe(`lifeformDisposed|${iM}`, (() => {
-             DM.i.unsubscribe(hM), DM.i.unsubscribe(JM), DM.i.unsubscribe(dM), DM.i.unsubscribe(yM), DM.i.unsubscribe(lM), DM.i.unsubscribe(EM)
+           const qV = DV.h.subscribe(`lifeformDisposed|${xV}`, (() => {
+             DV.h.unsubscribe(kV), DV.h.unsubscribe(bV), DV.h.unsubscribe(EV), DV.h.unsubscribe(BV), DV.h.unsubscribe(jV), DV.h.unsubscribe(qV)
```

#### 2436. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18358-L18359` → after: `L17652-L17653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17652-L17653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17652-L17653) · [Before (L18358-L18359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18358-L18359)

```diff
-         }(MM, rM, iM), GM.eZ(iM, GM.names.mesh, {
-           nPM: "humanoidMesh" === gM.type ? MM => {
+         }(VV, eV, xV), FV.WC(xV, FV.names.mesh, {
+           MQV: "humanoidMesh" === MV.type ? VV => {
```

#### 2437. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18361` → after: `L17655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17655) · [Before (L18361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18361)

```diff
-             const SM = GM.grM(iM),
+             const YV = FV.HxV(xV),
```

#### 2438. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18365` → after: `L17659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17659) · [Before (L18365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18365)

```diff
-               aM = null !== (OM = SM.ridingVehicleEId) && void 0 !== OM ? OM : null;
+               yV = null !== (JV = YV.ridingVehicleEId) && void 0 !== JV ? JV : null;
```

#### 2439. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18368-L18369` → after: `L17662-L17663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17662-L17663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17662-L17663) · [Before (L18368-L18369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18368-L18369)

```diff
-               const OM = rM.bloxd.getEntityHeading(null !== aM && void 0 !== aM ? aM : iM, !0);
-               WM().Md(MM, jM, WM().ZERO, OM)
+               const JV = eV.bloxd.getEntityHeading(null !== yV && void 0 !== yV ? yV : xV, !0);
+               RV().pk(VV, UV, RV().ZERO, JV)
```

#### 2440. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18373-L18374` → after: `L17667-L17668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17667-L17668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17667-L17668) · [Before (L18373-L18374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18373-L18374)

```diff
-           Zk: RM,
-           kiM: pM,
+           pC: GV,
+           VYV: WV,
```

#### 2441. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18376-L18380` → after: `L17670-L17674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17670-L17674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17670-L17674) · [Before (L18376-L18380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18376-L18380)

```diff
-           AJ: !1,
-           oiM: !1
-         }), GM.eZ(iM, GM.names.cape);
-       const oM = (0, zM.b)(rM).getFloating((0, aM.e)(iM));
-       GM.eZ(iM, "floating", oM ? {
+           QE: !1,
+           xYV: !1
+         }), FV.WC(xV, FV.names.cape);
+       const aV = (0, wV.c)(eV).getFloating((0, yV.c)(xV));
+       FV.WC(xV, "floating", aV ? {
```

#### 2442. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18382` → after: `L17676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17676) · [Before (L18382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18382)

```diff
-         ai: oM.ai
+         kx: aV.kx
```

#### 2443. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18384-L18386` → after: `L17678-L17680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17678-L17680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17678-L17680) · [Before (L18384-L18386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18384-L18386)

```diff
-       const fM = GM.KrM(iM).meshEnabledCombinator.getTotalBooleanVal();
-       if (uM.kR(RM, fM), uM.setEntityId(RM, iM), uM.setPickable(RM, (0, mr.j)(iM)), pr(MM)) {
-         GM.eZ(iM, GM.names.meshAttachments);
+       const oV = FV.rJV(xV).meshEnabledCombinator.getTotalBooleanVal();
+       if (zV.pW(GV, oV), zV.setEntityId(GV, xV), zV.setPickable(GV, (0, ve.h)(xV)), We(VV)) {
+         FV.WC(xV, FV.names.meshAttachments);
```

#### 2444. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18394` → after: `L17688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17688) · [Before (L18394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18394)

```diff
-       if ((0, QM.k)(rM, (0, aM.e)(iM)), "Player" === MM) {
+       if ((0, nV.e)(eV, (0, yV.c)(xV)), "Player" === VV) {
```

#### 2445. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18396-L18397` → after: `L17690-L17691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17690-L17691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17690-L17691) · [Before (L18396-L18397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18396-L18397)

```diff
-         if (nM.e[iM]) {
-           const rM = (0, aM.e)(iM),
+         if (QV.c[xV]) {
+           const eV = (0, yV.c)(xV),
```

#### 2446. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18399` → after: `L17693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17693) · [Before (L18399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18399)

```diff
-           for (const MM of eM.u) nM.e[iM][MM] && OM.updatePlayerCosmetic(rM, RM, MM, nM.e[iM][MM])
+           for (const VV of PV.w) QV.c[xV][VV] && JV.updatePlayerCosmetic(eV, GV, VV, QV.c[xV][VV])
```

#### 2447. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18401-L18402` → after: `L17695-L17696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17695-L17696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17695-L17696) · [Before (L18401-L18402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18401-L18402)

```diff
-         iM === rM.eD || null !== (YM = (0, AM.b)().client) && void 0 !== YM && YM.isReplayMode() || (GM.eZ(iM, "proximityHide"), DM.i.Tz(`otherPlayerTeleported|${iM}`, {
-           pos: rM.hU.XE(iM)
+         xV === eV.bD || null !== (cV = (0, lV.b)().client) && void 0 !== cV && cV.isReplayMode() || (FV.WC(xV, "proximityHide"), DV.h.QZ(`otherPlayerTeleported|${xV}`, {
+           pos: eV.sF.YF(xV)
```

#### 2448. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18405-L18406` → after: `L17699-L17700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17699-L17700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17699-L17700) · [Before (L18405-L18406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18405-L18406)

```diff
-       GM.getState(iM, GM.names.tL).size = bM.d, GM.eZ(iM, "proximityFade", {
-         serverOpacity: null !== (hM = null === (JM = rM.rY[rM.eD][iM]) || void 0 === JM ? void 0 : JM.opacity) && void 0 !== hM ? hM : 1
+       FV.getState(xV, FV.names.aZ).size = AV.c, FV.WC(xV, "proximityFade", {
+         serverOpacity: null !== (kV = null === (bV = eV.YL[eV.bD][xV]) || void 0 === bV ? void 0 : bV.opacity) && void 0 !== kV ? kV : 1
```

#### 2449. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18409-L18410` → after: `L17703-L17704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17703-L17704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17703-L17704) · [Before (L18409-L18410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18409-L18410)

```diff
-       iM === rM.eD && (NM = rM.IMM, DM.i.subscribe("initInfoReceived", (() => {
-         NM = rM.IMM
+       xV === eV.bD && (hV = eV.vxV, DV.h.subscribe("initInfoReceived", (() => {
+         hV = eV.vxV
```

#### 2450. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18412-L18414` → after: `L17706-L17708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17706-L17708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17706-L17708) · [Before (L18412-L18414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18412-L18414)

```diff
-       const xM = (0, AM.b)().Aq(iM);
-       br[(0, aM.e)(iM)] = xM, VM(rM, iM, MM, xM);
-       const vM = DM.i.subscribe("otherEntitySettings|opacity", (MM => {
+       const LV = (0, lV.b)().N_(xV);
+       Ae[(0, yV.c)(xV)] = LV, dV(eV, xV, VV, LV);
+       const fV = DV.h.subscribe("otherEntitySettings|opacity", (VV => {
```

#### 2451. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18420-L18421` → after: `L17714-L17715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17714-L17715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17714-L17715) · [Before (L18420-L18421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18420-L18421)

```diff
-           const jM = rM.hU.riM(iM);
-           jM && (jM.serverOpacity = (0, PM.c)("opacity", SM))
+           const UV = eV.sF.qJV(xV);
+           UV && (UV.serverOpacity = (0, pV.e)("opacity", YV))
```

#### 2452. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18423` → after: `L17717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17717) · [Before (L18423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18423)

```diff
-         BM = DM.i.subscribe(`otherEntitySettingsClientifiedEId|${iM}|_invincible`, (MM => {
+         KV = DV.h.subscribe(`otherEntitySettingsClientifiedEId|${xV}|_invincible`, (VV => {
```

#### 2453. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18428` → after: `L17722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17722) · [Before (L18428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18428)

```diff
-         !MM && GM.BMM(iM, "flashingMeshOverlay") && GM.bZ(iM, "flashingMeshOverlay"), MM && !GM.BMM(iM, "flashingMeshOverlay") && GM.eZ(iM, "flashingMeshOverlay")
+         !VV && FV.wxV(xV, "flashingMeshOverlay") && FV.gC(xV, "flashingMeshOverlay"), VV && !FV.wxV(xV, "flashingMeshOverlay") && FV.WC(xV, "flashingMeshOverlay")
```

#### 2454. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18430-L18431` → after: `L17724-L17725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17724-L17725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17724-L17725) · [Before (L18430-L18431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18430-L18431)

```diff
-       XM(null === (dM = rM.rY[rM.eD][iM]) || void 0 === dM ? void 0 : dM._invincible);
-       const IM = DM.i.subscribe(`otherEntitySettingsClientifiedEId|${iM}|zIndex`, (MM => {
+       HV(null === (EV = eV.YL[eV.bD][xV]) || void 0 === EV ? void 0 : EV._invincible);
+       const uV = DV.h.subscribe(`otherEntitySettingsClientifiedEId|${xV}|zIndex`, (VV => {
```

#### 2455. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18434-L18435` → after: `L17728-L17729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17728-L17729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17728-L17729) · [Before (L18434-L18435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18434-L18435)

```diff
-       uM.setRenderingGroupId(RM, null !== (yM = null === (lM = rM.rY[rM.eD][iM]) || void 0 === lM ? void 0 : lM.zIndex) && void 0 !== yM ? yM : 0);
-       const KM = DM.i.subscribe(`otherEntitySettingsClientifiedEId|${iM}|overlayColour`, (MM => {
+       zV.setRenderingGroupId(GV, null !== (BV = null === (jV = eV.YL[eV.bD][xV]) || void 0 === jV ? void 0 : jV.zIndex) && void 0 !== BV ? BV : 0);
+       const sV = DV.h.subscribe(`otherEntitySettingsClientifiedEId|${xV}|overlayColour`, (VV => {
```

#### 2456. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18442-L18443` → after: `L17736-L17737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17736-L17737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17736-L17737) · [Before (L18442-L18443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18442-L18443)

```diff
-           const rM = (0, wM.X)(MM);
-           SM = new OM.d(rM[0] / 255, rM[1] / 255, rM[2] / 255, .5)
+           const eV = (0, NV.V)(VV);
+           YV = new JV.c(eV[0] / 255, eV[1] / 255, eV[2] / 255, .5)
```

#### 2457. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18445` → after: `L17739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17739) · [Before (L18445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18445)

```diff
-         rM.hU.vrM(iM).overlayColourOverride = SM
+         eV.sF.QJV(xV).overlayColourOverride = YV
```

#### 2458. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18447-L18449` → after: `L17741-L17743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17741-L17743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17741-L17743) · [Before (L18447-L18449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18447-L18449)

```diff
-       qM(null !== (EM = null === (UM = rM.rY[rM.eD][iM]) || void 0 === UM ? void 0 : UM.overlayColour) && void 0 !== EM ? EM : null);
-       const TM = DM.i.subscribe(`entityScale|${iM}`, (OM => {
-         br[(0, aM.e)(iM)] = OM, VM(rM, iM, MM, OM)
+       SV(null !== (qV = null === (tV = eV.YL[eV.bD][xV]) || void 0 === tV ? void 0 : tV.overlayColour) && void 0 !== qV ? qV : null);
+       const IV = DV.h.subscribe(`entityScale|${xV}`, (JV => {
+         Ae[(0, yV.c)(xV)] = JV, dV(eV, xV, VV, JV)
```

#### 2459. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18455` → after: `L17749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17749) · [Before (L18455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18455)

```diff
-           PM = MM.hU.getState((0, aM.e)(rM), jM.meshMetadata.type);
+           pV = VV.sF.getState((0, yV.c)(eV), UV.meshMetadata.type);
```

#### 2460. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18458` → after: `L17752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17752) · [Before (L18458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18458)

```diff
-           Zk: nM
+           pC: QV
```

#### 2461. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18463` → after: `L17757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17757) · [Before (L18463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18463)

```diff
-         } = (0, bM.g)(OM, iM), zM = MM.CL.Dk, LM = (0, aM.e)(rM);
+         } = (0, AV.e)(JV, xV), wV = VV.gZ.YC, ZV = (0, yV.c)(eV);
```

#### 2462. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18466` → after: `L17760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17760) · [Before (L18466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18466)

```diff
-           const MM = zM.lD(nM, 0).scale;
+           const VV = wV.rD(QV, 0).scale;
```

#### 2463. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18469-L18471` → after: `L17763-L17765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17763-L17765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17763-L17765) · [Before (L18469-L18471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18469-L18471)

```diff
-         const HM = OM * (null !== (SM = jM.modelScale) && void 0 !== SM ? SM : 1);
-         MM.hU.getState(LM, "animator").setNodeOwnScale(0, mM[0] * HM, mM[1] * HM, mM[2] * HM);
-         const hM = MM.hU.getState(LM, MM.hU.names.tL);
+         const rV = JV * (null !== (YV = UV.modelScale) && void 0 !== YV ? YV : 1);
+         VV.sF.getState(ZV, "animator").setNodeOwnScale(0, vV[0] * rV, vV[1] * rV, vV[2] * rV);
+         const kV = VV.sF.getState(ZV, VV.sF.names.aZ);
```

#### 2464. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18474-L18475` → after: `L17768-L17769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17768-L17769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17768-L17769) · [Before (L18474-L18475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18474-L18475)

```diff
-       const cM = DM.i.subscribe(`lifeformDisposed|${iM}`, (() => {
-         DM.i.unsubscribe(vM), DM.i.unsubscribe(BM), DM.i.unsubscribe(IM), DM.i.unsubscribe(KM), DM.i.unsubscribe(TM), DM.i.unsubscribe(cM), iM !== rM.eD && delete er[iM]
+       const OV = DV.h.subscribe(`lifeformDisposed|${xV}`, (() => {
+         DV.h.unsubscribe(fV), DV.h.unsubscribe(KV), DV.h.unsubscribe(uV), DV.h.unsubscribe(sV), DV.h.unsubscribe(IV), DV.h.unsubscribe(OV), xV !== eV.bD && delete Pe[xV]
```

#### 2465. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18477` → after: `L17771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17771) · [Before (L18477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18477)

```diff
-       DM.i.Tz(`lifeformSetupFinished|${iM}`)
+       DV.h.QZ(`lifeformSetupFinished|${xV}`)
```

#### 2466. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18483-L18485` → after: `L17777-L17779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17777-L17779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17777-L17779) · [Before (L18483-L18485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18483-L18485)

```diff
-         Xi: iM,
-         Ii: OM,
-         Ki: SM
+         JJ: xV,
+         YJ: JV,
+         UJ: YV
```

#### 2467. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18487-L18489` → after: `L17781-L17783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17781-L17783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17781-L17783) · [Before (L18487-L18489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18487-L18489)

```diff
-       const jM = (0, aM.e)(iM);
-       nM.e[iM] = {
-         ...nM.e[iM],
+       const UV = (0, yV.c)(xV);
+       QV.c[xV] = {
+         ...QV.c[xV],
```

#### 2468. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18491-L18492` → after: `L17785-L17786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17785-L17786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17785-L17786) · [Before (L18491-L18492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18491-L18492)

```diff
-       }, nM.e[jM] = {
-         ...nM.e[jM],
+       }, QV.c[UV] = {
+         ...QV.c[UV],
```

#### 2469. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18495` → after: `L17789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17789) · [Before (L18495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18495)

```diff
-       const PM = (0, AM.f)().hU.crM(jM);
+       const pV = (0, lV.d)().sF.BJV(UV);
```

#### 2470. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18497-L18499` → after: `L17791-L17793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17791-L17793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17791-L17793) · [Before (L18497-L18499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18497-L18499)

```diff
-       const QM = null !== (rM = PM.Zk) && void 0 !== rM ? rM : null;
-       null !== QM && Jr ? Jr.Player.meshApi.updatePlayerCosmetic(jM, PM.Zk, OM, SM) : console.error(`Error: ${jM} not ready for updateIngamePlayerCustomisation, ${null!==QM} ${!!Jr}`)
-     }(0, jM.onGameReset)(nM.h);
+       const nV = null !== (eV = pV.pC) && void 0 !== eV ? eV : null;
+       null !== nV && be ? be.Player.meshApi.updatePlayerCosmetic(UV, pV.pC, JV, YV) : console.error(`Error: ${UV} not ready for updateIngamePlayerCustomisation, ${null!==nV} ${!!be}`)
+     }(0, UV.onGameReset)(QV.f);
```

#### 2471. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18505` → after: `L17799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17799) · [Before (L18505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18505)

```diff
-       return null !== (rM = er[(0, aM.e)(MM)]) && void 0 !== rM ? rM : {}
+       return null !== (eV = Pe[(0, yV.c)(VV)]) && void 0 !== eV ? eV : {}
```

#### 2472. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18510` → after: `L17804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17804) · [Before (L18510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18510)

```diff
-       return null !== (rM = br[(0, aM.e)(MM)]) && void 0 !== rM ? rM : 1
+       return null !== (eV = Ae[(0, yV.c)(VV)]) && void 0 !== eV ? eV : 1
```

#### 2473. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18515` → after: `L17809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17809) · [Before (L18515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18515)

```diff
-       return null !== (rM = null === (iM = er[(0, aM.e)(MM)]) || void 0 === iM || null === (OM = iM.Helmet) || void 0 === OM ? void 0 : OM.itemName) && void 0 !== rM ? rM : null
+       return null !== (eV = null === (xV = Pe[(0, yV.c)(VV)]) || void 0 === xV || null === (JV = xV.Helmet) || void 0 === JV ? void 0 : JV.itemName) && void 0 !== eV ? eV : null
```

#### 2474. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18521-L18522` → after: `L17815-L17816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17815-L17816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17815-L17816) · [Before (L18521-L18522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18521-L18522)

```diff
-       const jM = (0, AM.f)(),
-         PM = (0, aM.e)(MM);
+       const UV = (0, lV.d)(),
+         pV = (0, yV.c)(VV);
```

#### 2475. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18530-L18531` → after: `L17824-L17825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17824-L17825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17824-L17825) · [Before (L18530-L18531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18530-L18531)

```diff
-       const nM = jM.hU.crM(PM);
-       if (null === (null !== (SM = null === nM || void 0 === nM ? void 0 : nM.Zk) && void 0 !== SM ? SM : null) || !Jr) return;
+       const QV = UV.sF.BJV(pV);
+       if (null === (null !== (YV = null === QV || void 0 === QV ? void 0 : QV.pC) && void 0 !== YV ? YV : null) || !be) return;
```

#### 2476. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18535` → after: `L17829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17829) · [Before (L18535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18535)

```diff
-       const LM = iM ? gM.k[iM] : void 0;
+       const ZV = xV ? MV.n[xV] : void 0;
```

#### 2477. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18539-L18540` → after: `L17833-L17834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17833-L17834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17833-L17834) · [Before (L18539-L18540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18539-L18540)

```diff
-         const MM = iM ? (0, gM.i)(iM) : null,
-           SM = iM ? (0, uM.f)(iM) : null;
+         const VV = xV ? (0, MV.m)(xV) : null,
+           YV = xV ? (0, zV.h)(xV) : null;
```

#### 2478. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18549-L18550` → after: `L17843-L17844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17843-L17844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17843-L17844) · [Before (L18549-L18550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18549-L18550)

```diff
-         eD: MM
-       } = (0, AM.f)();
+         bD: VV
+       } = (0, lV.d)();
```

#### 2479. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18555` → after: `L17849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17849) · [Before (L18555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18555)

```diff
-   39117: (MM, rM, iM) => {
+   39274: (VV, eV, xV) => {
```

#### 2480. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18557` → after: `L17851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17851) · [Before (L18557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18557)

```diff
-       b: () => QM
+       e: () => nV
```

#### 2481. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18559-L18563` → after: `L17853-L17857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17853-L17857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17853-L17857) · [Before (L18559-L18563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18559-L18563)

```diff
-     var OM = iM(38167),
-       SM = iM(3063),
-       jM = iM(38451),
-       aM = iM(38034),
-       PM = iM(39126);
+     var JV = xV(38387),
+       YV = xV(3093),
+       UV = xV(38660),
+       yV = xV(38263),
+       pV = xV(39277);
```

#### 2482. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18577` → after: `L17871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17871) · [Before (L18577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18577)

```diff
-           if (void 0 !== iM[nM.name]) nM.sZ("aAtlasIdx1", 1), nM.sZ("aArmourTint", 4), nM.sZ("aEnchantmentColour", 3), nM.sZ("aEnchantmentSpeed", 1), nM.xZ.aAtlasIdx1 = 0, nM.xZ.aArmourTint = new OM.d(1, 1, 1, 0), nM.xZ.aEnchantmentColour = new OM.Color3(0, 0, 0), nM.xZ.aEnchantm … [truncated]
+           if (void 0 !== xV[QV.name]) QV.uC("aAtlasIdx1", 1), QV.uC("aArmourTint", 4), QV.uC("aEnchantmentColour", 3), QV.uC("aEnchantmentSpeed", 1), QV.sC.aAtlasIdx1 = 0, QV.sC.aArmourTint = new JV.c(1, 1, 1, 0), QV.sC.aEnchantmentColour = new JV.Color3(0, 0, 0), QV.sC.aEnchantm … [truncated]
```

#### 2483. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18579-L18581` → after: `L17873-L17875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17873-L17875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17873-L17875) · [Before (L18579-L18581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18579-L18581)

```diff
-             const MM = (0, PM.h)(SM.length);
-             for (let rM = 1; rM <= MM; rM++) nM.sZ((0, PM.c)(rM), 4);
-             for (let rM = 1; rM <= MM; rM++) nM.xZ[(0, PM.c)(rM)] = aM.Vector4.FromArray(SM, 4 * (rM - 1))
+             const VV = (0, pV.o)(YV.length);
+             for (let eV = 1; eV <= VV; eV++) QV.uC((0, pV.h)(eV), 4);
+             for (let eV = 1; eV <= VV; eV++) QV.sC[(0, pV.h)(eV)] = yV.Vector4.FromArray(YV, 4 * (eV - 1))
```

#### 2484. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18583` → after: `L17877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17877) · [Before (L18583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18583)

```diff
-           nM.sZ("aOpacity", 1), nM.xZ.aOpacity = 1, nM.sZ("aLightLevels", 4), nM.xZ.aLightLevels = (0, jM.n)()
+           QV.uC("aOpacity", 1), QV.sC.aOpacity = 1, QV.uC("aLightLevels", 4), QV.sC.aLightLevels = (0, UV.o)()
```

#### 2485. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18587` → after: `L17881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17881) · [Before (L18587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18587)

```diff
-         const iM = (0, SM.f)().CL.Dk;
+         const xV = (0, YV.d)().gZ.YC;
```

#### 2486. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18592` → after: `L17886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17886) · [Before (L18592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18592)

```diff
-         (0, SM.f)().CL.Dk.setGroupEnabled(MM, rM, iM)
+         (0, YV.d)().gZ.YC.setGroupEnabled(VV, eV, xV)
```

#### 2487. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18595-L18596` → after: `L17889-L17890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17889-L17890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17889-L17890) · [Before (L18595-L18596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18595-L18596)

```diff
-         const iM = (0, SM.f)().CL.Dk;
-         iM.set(MM, "aOpacity", rM), iM.mY(MM, "aOpacity", rM)
+         const xV = (0, YV.d)().gZ.YC;
+         xV.set(VV, "aOpacity", eV), xV.RL(VV, "aOpacity", eV)
```

#### 2488. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18599-L18600` → after: `L17893-L17894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17893-L17894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17893-L17894) · [Before (L18599-L18600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18599-L18600)

```diff
-         const iM = (0, SM.f)().CL.Dk;
-         iM.set(MM, "aLightLevels", rM), iM.mY(MM, "aLightLevels", rM)
+         const xV = (0, YV.d)().gZ.YC;
+         xV.set(VV, "aLightLevels", eV), xV.RL(VV, "aLightLevels", eV)
```

#### 2489. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18603` → after: `L17897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17897) · [Before (L18603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18603)

```diff
-         const iM = (0, SM.f)().CL.Dk;
+         const xV = (0, YV.d)().gZ.YC;
```

#### 2490. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18609-L18610` → after: `L17903-L17904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17903-L17904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17903-L17904) · [Before (L18609-L18610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18609-L18610)

```diff
-           } = (0, PM.g)(Number(OM));
-           this.playerAtlasVec4s[MM][SM - 1][jM] = rM[OM], iM.setGroup(MM, "notArmour", `aAtlasIdx${SM}`, this.playerAtlasVec4s[MM][SM - 1])
+           } = (0, pV.l)(Number(JV));
+           this.playerAtlasVec4s[VV][YV - 1][UV] = eV[JV], xV.setGroup(VV, "notArmour", `aAtlasIdx${YV}`, this.playerAtlasVec4s[VV][YV - 1])
```

#### 2491. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18615` → after: `L17909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17909) · [Before (L18615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18615)

```diff
-   39109: (MM, rM, iM) => {
+   39266: (VV, eV, xV) => {
```

#### 2492. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18619` → after: `L17913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17913) · [Before (L18619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18619)

```diff
-     var OM = iM(347),
+     var JV = xV(380),
```

#### 2493. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18621-L18631` → after: `L17915-L17925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17915-L17925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17915-L17925) · [Before (L18621-L18631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18621-L18631)

```diff
-       jM = iM(3601),
-       aM = iM(38839),
-       PM = iM(2362),
-       nM = iM(39117),
-       QM = iM(3063),
-       zM = iM(332),
-       LM = iM(39132),
-       mM = iM(2762),
-       HM = iM(38019),
-       hM = iM(38565),
-       JM = iM(38837);
+       UV = xV(3624),
+       yV = xV(39013),
+       pV = xV(2385),
+       QV = xV(39274),
+       nV = xV(3093),
+       wV = xV(375),
+       ZV = xV(39281),
+       vV = xV(2822),
+       rV = xV(38254),
+       kV = xV(38758),
+       bV = xV(39011);
```

#### 2494. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18633` → after: `L17927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17927) · [Before (L18633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18633)

```diff
-     class yM extends nM.b {
+     class BV extends QV.e {
```

#### 2495. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18640-L18643` → after: `L17934-L17937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17934-L17937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17934-L17937) · [Before (L18640-L18643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18640-L18643)

```diff
-         OM ??= (0, mM.c)(iM);
-         const jM = (0, PM.m)(iM, OM);
-         if (!jM) return void console.error(`Error: ${OM} not a valid cosmetic of type ${iM}`);
-         const aM = (0, QM.f)();
+         JV ??= (0, vV.b)(xV);
+         const UV = (0, pV.h)(xV, JV);
+         if (!UV) return void console.error(`Error: ${JV} not a valid cosmetic of type ${xV}`);
+         const yV = (0, nV.d)();
```

#### 2496. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18645` → after: `L17939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17939) · [Before (L18645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18645)

```diff
-         const zM = LM.d.indexOf(iM);
+         const wV = ZV.c.indexOf(xV);
```

#### 2497. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18648` → after: `L17942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17942) · [Before (L18648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18648)

```diff
-           const MM = null !== (JM = jM.atlasIdx) && void 0 !== JM ? JM : (0, PM.m)(iM, `${iM}_none`).atlasIdx;
+           const VV = null !== (bV = UV.atlasIdx) && void 0 !== bV ? bV : (0, pV.h)(xV, `${xV}_none`).atlasIdx;
```

#### 2498. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18655` → after: `L17949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17949) · [Before (L18655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18655)

```diff
-             hU: rM
+             sF: eV
```

#### 2499. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18668-L18670` → after: `L17962-L17964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17962-L17964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17962-L17964) · [Before (L18668-L18670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18668-L18670)

```diff
-         const nM = (0, QM.f)(),
-           LM = nM.hU.crM(MM);
-         if (!LM) return void console.error(`Error: ${MM} not ready for updatePlayerArmour, ${LM}`);
+         const QV = (0, nV.d)(),
+           ZV = QV.sF.BJV(VV);
+         if (!ZV) return void console.error(`Error: ${VV} not ready for updatePlayerArmour, ${ZV}`);
```

#### 2500. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18672` → after: `L17966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17966) · [Before (L18672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18672)

```diff
-           HM = nM.CL.Dk,
+           rV = QV.gZ.YC,
```

#### 2501. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18674` → after: `L17968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17968) · [Before (L18674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18674)

```diff
-             Zk: hM
+             pC: kV
```

#### 2502. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18680` → after: `L17974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17974) · [Before (L18680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18680)

```diff
-             HM.setNode(hM, MM, "aAtlasIdx1", jM.c[iM]);
+             rV.setNode(kV, VV, "aAtlasIdx1", UV.i[xV]);
```

#### 2503. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18683` → after: `L17977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17977) · [Before (L18683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18683)

```diff
-             const PM = null !== (dM = aM.m[SM]) && void 0 !== dM ? dM : aM.m.None;
+             const pV = null !== (EV = yV.o[YV]) && void 0 !== EV ? EV : yV.o.None;
```

#### 2504. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18685` → after: `L17979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17979) · [Before (L18685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18685)

```diff
-             const nM = null !== (yM = zM.jb[SM]) && void 0 !== yM ? yM : zM.jb.None;
+             const QV = null !== (BV = wV.hb[YV]) && void 0 !== BV ? BV : wV.hb.None;
```

#### 2505. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18692` → after: `L17986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17986) · [Before (L18692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18692)

```diff
-         const iM = (0, QM.f)(),
+         const xV = (0, nV.d)(),
```

#### 2506. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18694` → after: `L17988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17988) · [Before (L18694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18694)

```diff
-             hU: OM
+             sF: JV
```

#### 2507. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18696-L18698` → after: `L17990-L17992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17990-L17992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17990-L17992) · [Before (L18696-L18698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18696-L18698)

```diff
-           jM = MM === iM.eD ? OM.jK(MM).bq : OM.XE(MM),
-           aM = MM === iM.eD ? SM().ZERO : iM.Am,
-           PM = iM.CL.Dk;
+           UV = VV === xV.bD ? JV.U_(VV).P_ : JV.YF(VV),
+           yV = VV === xV.bD ? YV().ZERO : xV.Vr,
+           pV = xV.gZ.YC;
```

#### 2508. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18703` → after: `L17997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR17997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L17997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L17997) · [Before (L18703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18703)

```diff
-           jM = MM.lD(rM, 0);
+           UV = VV.rD(eV, 0);
```

#### 2509. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18731` → after: `L18025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L18025) · [Before (L18731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18731)

```diff
-   39139: (MM, rM, iM) => {
+   39289: (VV, eV, xV) => {
```

#### 2510. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18735-L18742` → after: `L18029-L18036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18029-L18036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L18029-L18036) · [Before (L18735-L18742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18735-L18742)

```diff
-     var OM = iM(39464),
-       SM = iM(39471),
-       jM = iM(37722),
-       aM = iM(39083),
-       PM = iM(39147),
-       nM = iM(22),
-       QM = iM(38130),
-       zM = iM(38558);
+     var JV = xV(39621),
+       YV = xV(39624),
+       UV = xV(37943),
+       yV = xV(39243),
+       pV = xV(39296),
+       QV = xV(32),
+       nV = xV(38368),
+       wV = xV(38750);
```

#### 2511. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18745` → after: `L18039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L18039) · [Before (L18745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18745)

```diff
-         this.bloxd = MM, this.eId = rM, this.lifeformType = void 0, this.Cm = void 0, this.canAttackSub = void 0, this.interactableSub = void 0, this.multilineTextBoxSub = void 0, this.lifeformType = iM, this.Cm = MM.Cm
+         this.bloxd = VV, this.eId = eV, this.lifeformType = void 0, this.iv = void 0, this.canAttackSub = void 0, this.interactableSub = void 0, this.multilineTextBoxSub = void 0, this.lifeformType = xV, this.iv = VV.iv
```

#### 2512. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18749` → after: `L18043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L18043) · [Before (L18749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18749)

```diff
-         !this.bloxd.getEntityName(this.eId) && rM.defaultName && this.bloxd.setEntityName(this.eId, rM.defaultName), this.Cm.hU.add([MM.x, MM.y, MM.z], rM.physicsBodyDimensions.width, rM.physicsBodyDimensions.height, null, null, !1, !0, this.eId), this.Cm.hU.eZ(this.eId, this.Cm. … [truncated]
+         !this.bloxd.getEntityName(this.eId) && eV.defaultName && this.bloxd.setEntityName(this.eId, eV.defaultName), this.iv.sF.add([VV.x, VV.y, VV.z], eV.physicsBodyDimensions.width, eV.physicsBodyDimensions.height, null, null, !1, !0, this.eId), this.iv.sF.WC(this.eId, this.iv. … [truncated]
```

#### 2513. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18752-L18755` → after: `L18046-L18049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18046-L18049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L18046-L18049) · [Before (L18752-L18755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18752-L18755)

```diff
-           const iM = this.Cm.CL.Dk,
-             OM = null !== (MM = null === (rM = this.Cm.hU.GrM(this.eId)) || void 0 === rM ? void 0 : rM.Zk) && void 0 !== MM ? MM : null,
-             SM = (0, zM.j)(this.eId);
-           null === OM && console.error(`Error: ${this.eId} not ready for pickability change to ${SM}`), iM.setPickable(OM, SM)
+           const xV = this.iv.gZ.YC,
+             JV = null !== (VV = null === (eV = this.iv.sF.hxV(this.eId)) || void 0 === eV ? void 0 : eV.pC) && void 0 !== VV ? VV : null,
+             YV = (0, wV.h)(this.eId);
+           null === JV && console.error(`Error: ${this.eId} not ready for pickability change to ${YV}`), xV.setPickable(JV, YV)
```

#### 2514. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18757` → after: `L18051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L18051) · [Before (L18757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18757)

```diff
-         this.canAttackSub = nM.i.subscribe(`otherEntitySettings|${this.eId}|canAttack`, iM), this.interactableSub = nM.i.subscribe(`otherEntitySettings|${this.eId}|interactable`, iM), this.multilineTextBoxSub = (0, QM.r)(this.Cm, this.eId), (0, aM.r)(this.lifeformType, this.Cm, t … [truncated]
+         this.canAttackSub = QV.h.subscribe(`otherEntitySettings|${this.eId}|canAttack`, xV), this.interactableSub = QV.h.subscribe(`otherEntitySettings|${this.eId}|interactable`, xV), this.multilineTextBoxSub = (0, nV.w)(this.iv, this.eId), (0, yV.t)(this.lifeformType, this.iv, t … [truncated]
```

#### 2515. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18760` → after: `L18054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L18054) · [Before (L18760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18760)

```diff
-         const iM = this.Cm.hU.grM(this.eId);
+         const xV = this.iv.sF.HxV(this.eId);
```

#### 2516. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18764-L18765` → after: `L18058-L18059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18058-L18059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L18058-L18059) · [Before (L18764-L18765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18764-L18765)

```diff
-             if ("yRotation" === MM ? iM.heading = rM : void 0 !== iM[MM] && (iM[MM] = rM), "armSwinging" === MM && rM) {
-               const MM = this.Cm.hU.crM(this.eId);
+             if ("yRotation" === VV ? xV.heading = eV : void 0 !== xV[VV] && (xV[VV] = eV), "armSwinging" === VV && eV) {
+               const VV = this.iv.sF.BJV(this.eId);
```

#### 2517. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18767` → after: `L18061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L18061) · [Before (L18767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18767)

```diff
-             } else if ("xRotation" === MM || "yRotation" === MM || "zRotation" === MM)(0, QM.s)(this.Cm, this.eId, MM, rM);
+             } else if ("xRotation" === VV || "yRotation" === VV || "zRotation" === VV)(0, nV.A)(this.iv, this.eId, VV, eV);
```

#### 2518. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18770-L18771` → after: `L18064-L18065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18064-L18065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L18064-L18065) · [Before (L18770-L18771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18770-L18771)

```diff
-               const MM = this.Cm.hU.qrM(this.eId);
-               MM.networkedHeldItemName = rM, (0, PM.updateHeldItemState)(this.Cm, MM)
+               const VV = this.iv.sF.kJV(this.eId);
+               VV.networkedHeldItemName = eV, (0, pV.updateHeldItemState)(this.iv, VV)
```

#### 2519. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18773-L18774` → after: `L18067-L18068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18067-L18068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L18067-L18068) · [Before (L18773-L18774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18773-L18774)

```diff
-               const MM = this.Cm.hU.qrM(this.eId);
-               MM.networkedHeldItemEnchantmentTier = rM, (0, PM.updateHeldItemState)(this.Cm, MM)
+               const VV = this.iv.sF.kJV(this.eId);
+               VV.networkedHeldItemEnchantmentTier = eV, (0, pV.updateHeldItemState)(this.iv, VV)
```

#### 2520. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18780` → after: `L18074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L18074) · [Before (L18780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18780)

```diff
-         this.Cm.hU.deleteEntity(this.eId), nM.i.Tz(`lifeformDisposed|${(0,jM.e)(this.eId)}`), "Player" === this.lifeformType && nM.i.Tz("playerNamesUpdated"), nM.i.unsubscribe(this.canAttackSub), nM.i.unsubscribe(this.interactableSub), nM.i.unsubscribe(this.multilineTextBoxSub)
+         this.iv.sF.deleteEntity(this.eId), QV.h.QZ(`lifeformDisposed|${(0,UV.c)(this.eId)}`), "Player" === this.lifeformType && QV.h.QZ("playerNamesUpdated"), QV.h.unsubscribe(this.canAttackSub), QV.h.unsubscribe(this.interactableSub), QV.h.unsubscribe(this.multilineTextBoxSub)
```

#### 2521. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18783-L18785` → after: `L18077-L18079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18077-L18079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L18077-L18079) · [Before (L18783-L18785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18783-L18785)

```diff
-         this.bloxd.setEntityName(this.eId, MM), this.bloxd.setEntityName((0, jM.e)(this.eId), MM);
-         const rM = this.Cm.hU;
-         if (rM.VrM(this.eId)) nM.i.Tz(`entityNameChanged|${this.eId}`);
+         this.bloxd.setEntityName(this.eId, VV), this.bloxd.setEntityName((0, UV.c)(this.eId), VV);
+         const eV = this.iv.sF;
+         if (eV.EJV(this.eId)) QV.h.QZ(`entityNameChanged|${this.eId}`);
```

#### 2522. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18788` → after: `L18082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L18082) · [Before (L18788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18788)

```diff
-           rM.eZ(this.eId, rM.names.entityName, {
+           eV.WC(this.eId, eV.names.entityName, {
```

#### 2523. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18792` → after: `L18086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L18086) · [Before (L18792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18792)

```diff
-         "Player" === this.lifeformType && nM.i.Tz("playerNamesUpdated")
+         "Player" === this.lifeformType && QV.h.QZ("playerNamesUpdated")
```

#### 2524. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18795-L18801` → after: `L18089-L18095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18089-L18095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L18089-L18095) · [Before (L18795-L18801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18795-L18801)

```diff
-     var mM, HM, hM = iM(39109),
-       JM = iM(620),
-       dM = iM(38506),
-       yM = iM(3063),
-       lM = iM(4069),
-       EM = iM(4129),
-       UM = iM(39055);
+     var vV, rV, kV = xV(39266),
+       bV = xV(654),
+       EV = xV(38706),
+       BV = xV(3093),
+       jV = xV(4098),
+       qV = xV(4163),
+       tV = xV(39225);
```

#### 2525. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18810-L18811` → after: `L18104-L18105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18104-L18105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L18104-L18105) · [Before (L18810-L18811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18810-L18811)

```diff
-           (0, UM.setRigAiState)(this.Cm, this.eId, null !== (iM = JM.m[rM]) && void 0 !== iM ? iM : null)
-         } else "armSwinging" === MM && rM && !this.Cm.hU.crM(this.eId) && (0, UM.playRigAction)(this.Cm, this.eId, dM.n)
+           (0, tV.setRigAiState)(this.iv, this.eId, null !== (xV = bV.i[eV]) && void 0 !== xV ? xV : null)
+         } else "armSwinging" === VV && eV && !this.iv.sF.BJV(this.eId) && (0, tV.playRigAction)(this.iv, this.eId, EV.t)
```

#### 2526. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18815` → after: `L18109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L18109) · [Before (L18815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18815)

```diff
-         return this.Cm.hU.getState(this.eId, MM.meshMetadata.type).Zk
+         return this.iv.sF.getState(this.eId, VV.meshMetadata.type).pC
```

#### 2527. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18818` → after: `L18112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L18112) · [Before (L18818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18818)

```diff
-         aM.b[this.mobType].meshApi.updateVariation(this.getThinObjectId(), this.mobType, MM)
+         yV.e[this.mobType].meshApi.updateVariation(this.getThinObjectId(), this.mobType, VV)
```

#### 2528. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18821-L18840` → after: `L18115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L18115) · [Before (L18821-L18840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18821-L18840)

```diff
-     const CM = [0, 1, 8, 255, "length", "undefined", void 0, "c", "d", 2, "a", 12, 63, 6, "fromCodePoint", 7, "push", 169, null, 18, 91, 8191, 88, 13, 14, 3, "f", 64, 4, 5, "h", 180, "i", "g", "e", !1, 135, 239, 26, 199, 94, !0, 10, 161, 118, "b", 219, 80, 127, 107, 229, 53, 47,  … [truncated]
- 
-     function eM(...MM) {
-       return MM[CM[4]] = CM[1], typeof mM[MM[CM[0]]] === CM[5] ? mM[MM[CM[0]]] = function(MM) {
-         var rM, iM, OM, SM, jM, aM, PM;
-         for (tM(rM = "" + (MM || ""), iM = rM.length, OM = [], SM = CM[0], jM = CM[0], aM = -CM[1]), PM = CM[0]; PM < iM; PM++) {
-           var nM = 'lLKqPOktU!HnRG<poIQh~vSfF[g6zw};u871b"`Ti@/J)X&cVE=N4mY*.5,y_rD{?sW0M+e>(dCx$]Baj23|%Z#9^:A'.indexOf(rM[PM]);
-           if (nM !== -CM[1])
-             if (aM < CM[0]) aM = nM;
-             else {
-               tM(aM += nM * CM[20], SM |= aM << jM, jM += (aM & CM[21]) > CM[22] ? CM[23] : CM[24]);
-               do {
-                 tM(OM.push(SM & CM[3]), SM >>= CM[2], jM -= CM[2])
-               } while (jM > CM[15]);
-               aM = -CM[1]
-             }
- ... (4 more removed lines; see GitHub link above)
+     const TV = [0, 1, 8, 255, "length", 43, 170, "d", "a", 4, "undefined", void 0, 140, 3, "b", 63, 6, "fromCodePoint", 7, 12, "push", 201, 49, 98, 2, 24, 5, !1, !0, "h", "c", 225, 53, 87, 91, "e", 234, 8191, 88, 13, 14, 40, 89, "i", "g", "f", 124, 23, 216, 29, 96, "j", "k", 75,  … [truncated]
```

#### 2529. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18843` → after: `L18118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L18118) · [Before (L18843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18843)

```diff
-       return MM[CM[4]] = CM[1], typeof pM !== CM[5] && pM ? (new pM).decode(new WM(MM[CM[0]])) : typeof sM !== CM[5] && sM ? sM.from(MM[CM[0]]).toString("utf-8") : ZM(MM[CM[0]])
+       return VV[TV[4]] = TV[1], typeof GV !== TV[10] && GV ? (new GV).decode(new WV(VV[TV[0]])) : typeof RV !== TV[10] && RV ? RV.from(VV[TV[0]]).toString("utf-8") : iV(VV[TV[0]])
```

#### 2530. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18851-L18885` → after: `L18126-L18158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18126-L18158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L18126-L18158) · [Before (L18851-L18885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18851-L18885)

```diff
-     tM(mM = {}, HM = ["zYSPExxw|_;;T`h7)ILk8y=&wWcDL", "ADMtDV:+E!&4m($`}w0O", "1k,U]CF&GvJv|<DIFf`4ic}R|Yxpq=|@OQ,un2Gt8R~kDEe`/NEu~", "?d[YCDE1Qhn}Z_kF6CV!k+uROYQxP(}F!P*4%=9tuQ", '<i@N+(bFWpKch=R~8"<$e7)irQ9e/,xT"k*!', 'p"&$R|.ihRu(:jP;tw;!{,I1=hb(P|Rh4>q', 'u_+4qV|1H<hqA[F1U{ … [truncated]
-       var MM, rM, iM, OM = [function() {
-         return globalThis
-       }, function() {
-         return global
-       }, function() {
-         return window
-       }, function() {
-         return new Function("return this")()
-       }];
-       tM(MM = void 0, rM = []);
-       try {
-         tM(MM = Object, rM[CM[16]]("".__proto__.constructor.name))
-       } catch (WM) {}
-       MM: for (iM = CM[0]; iM < OM[CM[4]]; iM++) try {
-         var SM;
- ... (19 more removed lines; see GitHub link above)
+     NV(vV = {}, rV = ['_{])H[pu)k5q@RCIp9k>Z*TDRQ5t:rzTD0W<"`M9VFjD!AA>73x', 'y<)@}u<**|j@jiJl"h3j3![`P*=}RDXhb8*WEr0~q|bsmq2NP5Yt{uhx', "#3M@FDe~h*N}z60JyF{)d[&*&hrEgNXTe,+@c01", "E,xGM#[ZbvLE8H8>x!7zzenZ2Q/THmf898^Q<q]SHZD!JKKh%1", "t|TQ#$llIwX/1$JjGqK<cK1", "]%%3WDYs8h!t)iP,B6 … [truncated]
+         NV(VV[TV[4]] = TV[0], VV[TV[8]] = [function() {
+           return globalThis
+         }, function() {
+           return global
+         }, function() {
+           return window
+         }, function() {
+           return new Function("return this")()
+         }], VV[-TV[5]] = TV[11], VV[-TV[6]] = []);
+         try {
+           NV(VV[-TV[5]] = Object, VV[-TV[6]][TV[20]]("".__proto__.constructor.name))
+         } catch (rV) {}
+         VV: for (VV[TV[7]] = TV[0]; VV[TV[7]] < VV[TV[8]][TV[4]]; VV[TV[7]]++) try {
+           for (VV[-TV[5]] = VV[TV[8]][VV[TV[7]]](), VV[TV[9]] = TV[0]; VV[TV[9]] < VV[-TV[6]][TV[4]]; VV[TV[9]]++)
+             if (typeof VV[-TV[5]][VV[-TV[6]][VV[TV[9]]]] === TV[10]) continue VV;
+ ... (17 more added lines; see GitHub link above)
```

#### 2531. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18887` → after: `L18160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L18160) · [Before (L18887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18887)

```diff
-                 tM(MM[CM[33]] += MM[CM[32]] * CM[20], MM[CM[34]] |= MM[CM[33]] << MM[CM[26]], MM[CM[26]] += (MM[CM[33]] & CM[21]) > CM[22] ? CM[23] : CM[24]);
+                 NV(yV += QV * TV[34], YV |= yV << UV, UV += (yV & TV[37]) > TV[38] ? TV[39] : TV[40]);
```

#### 2532. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18889-L18893` → after: `L18162-L18195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18162-L18195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L18162-L18195) · [Before (L18889-L18893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18889-L18893)

```diff
-                   tM(MM[CM[8]].push(MM[CM[34]] & CM[3]), MM[CM[34]] >>= CM[2], MM[CM[26]] -= CM[2])
-                 } while (MM[CM[26]] > CM[15]);
-                 MM[CM[33]] = -CM[1]
-               } return MM[CM[33]] > -CM[1] && MM[CM[8]].push((MM[CM[34]] | MM[CM[33]] << MM[CM[26]]) & CM[3]), bM(MM[CM[8]])
-         }
+                   NV(JV.push(YV & TV[3]), YV >>= TV[2], UV -= TV[2])
+                 } while (UV > TV[18]);
+                 yV = -TV[1]
+               }
+           }
+           return yV > -TV[1] && JV.push((YV | yV << UV) & TV[3]), PV(JV)
+         }(rV[VV[TV[0]]]) : vV[VV[TV[0]]]
+       }(94) in AV && function(...VV) {
+         NV(VV[TV[4]] = TV[0], VV[TV[8]] = function(...eV) {
+           return eV[TV[4]] = TV[24], VV[TV[23]]({}, eV[TV[0]], eV[TV[1]])
+         }, VV[TV[23]] = function(...eV) {
+           if (NV(eV[TV[4]] = TV[13], eV[TV[8]] = {}), eV[TV[0]][eV[TV[1]] + eV[TV[24]]] !== TV[11]) return eV[TV[0]][eV[TV[1]] + eV[TV[24]]];
+           if (eV[TV[1]] === eV[TV[24]]) return TV[28];
+           for (eV[TV[25]] = TV[0]; eV[TV[25]] < eV[TV[1]].length; eV[TV[25]]++) eV[TV[8]][eV[TV[1]][eV[TV[25]]]] === TV[11] && (eV[TV[8]][eV[TV[1]][eV[TV[25]]]] = TV[0]), eV[TV[8]][eV[TV[24]][eV[TV[25]]]] === TV[11] && (eV[TV[8]][eV[TV[24]][eV[TV[25]]]] = TV[0]), NV(eV[TV[8]][eV[ … [truncated]
+           for (eV[TV[26]] in eV[TV[8]])
+             if (eV[TV[8]][eV[TV[26]]] !== TV[0]) return eV[TV[0]][eV[TV[1]] + eV[TV[24]]] = TV[27], TV[27];
+ ... (18 more added lines; see GitHub link above)
```

#### 2533. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18895-L18912` → after: `L18197-L18214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18197-L18214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L18197-L18214) · [Before (L18895-L18912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18895-L18912)

```diff
-         function rM(...rM) {
-           return rM[CM[4]] = CM[1], typeof mM[rM[CM[0]]] === CM[5] ? mM[rM[CM[0]]] = MM(HM[rM[CM[0]]]) : mM[rM[CM[0]]]
-         }
-         let iM = CM[35];
-         tM(setInterval((() => {
-           if (!iM && (CM[0], yM[CM[26]])()) {
-             function MM(...MM) {
-               for (tM(MM[CM[4]] = CM[1], MM[CM[1]] = 'fRAu;JIw_QUMPY~pmLV/#!`jcd<3nz[G>}ox:%)+q@(=y5Xv0{6geErB".4HO7&?$2iC|bZFK*hW,18^stkS]TDNla9', MM[-CM[36]] = "" + (MM[CM[0]] || ""), MM[-CM[38]] = MM[-CM[36]].length, MM[CM[37]] = [], MM[CM[29]] = CM[0], MM[CM[26]] = CM[0], MM[ … [truncated]
-                 if (MM[CM[39]] = MM[CM[1]].indexOf(MM[-CM[36]][MM[CM[30]]]), MM[CM[39]] !== -CM[1])
-                   if (MM[CM[15]] < CM[0]) MM[CM[15]] = MM[CM[39]];
-                   else {
-                     tM(MM[CM[15]] += MM[CM[39]] * CM[20], MM[CM[29]] |= MM[CM[15]] << MM[CM[26]], MM[CM[26]] += (MM[CM[15]] & CM[21]) > CM[22] ? CM[23] : CM[24]);
-                     do {
-                       tM(MM[CM[37]].push(MM[CM[29]] & CM[3]), MM[CM[29]] >>= CM[2], MM[CM[26]] -= CM[2])
-                     } while (MM[CM[26]] > CM[15]);
-                     MM[CM[15]] = -CM[1]
- ... (2 more removed lines; see GitHub link above)
+           function eV(eV) {
+             return typeof vV[eV] === TV[10] ? vV[eV] = VV(rV[eV]) : vV[eV]
+           }
+           let xV = TV[27];
+           NV(setInterval((() => {
+             if (!xV && (TV[0], BV[TV[7]])()) {
+               function VV(...VV) {
+                 for (NV(VV[TV[4]] = TV[1], VV[TV[8]] = ':7}?,"~2w4.=x<>31|;mRn#_Mh+SAEGBfj{&ec5Yi*FUryJ]TvZpdLHC8Oq`b(aD0X^)/u%ztoNW[l$IPg!V@69kKQs', VV[-TV[41]] = "" + (VV[TV[0]] || ""), VV[-TV[42]] = VV[-TV[41]].length, VV[TV[46]] = [], VV[TV[26]] = TV[0], VV[TV[45]] = TV[0], V … [truncated]
+                   if (VV[TV[43]] = VV[TV[8]].indexOf(VV[-TV[41]][VV[TV[29]]]), VV[TV[43]] !== -TV[1])
+                     if (VV[TV[44]] < TV[0]) VV[TV[44]] = VV[TV[43]];
+                     else {
+                       NV(VV[TV[44]] += VV[TV[43]] * TV[34], VV[TV[26]] |= VV[TV[44]] << VV[TV[45]], VV[TV[45]] += (VV[TV[44]] & TV[37]) > TV[38] ? TV[39] : TV[40]);
+                       do {
+                         NV(VV[TV[46]].push(VV[TV[26]] & TV[3]), VV[TV[26]] >>= TV[2], VV[TV[45]] -= TV[2])
+                       } while (VV[TV[45]] > TV[18]);
+                       VV[TV[44]] = -TV[1]
+ ... (2 more added lines; see GitHub link above)
```

#### 2534. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18914-L18915` → after: `L18216-L18241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18216-L18241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L18216-L18241) · [Before (L18914-L18915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18914-L18915)

```diff
-             function rM(...rM) {
-               return rM[CM[4]] = CM[1], typeof mM[rM[CM[0]]] === CM[5] ? mM[rM[CM[0]]] = MM(HM[rM[CM[0]]]) : mM[rM[CM[0]]]
+               function eV(...eV) {
+                 return eV[TV[4]] = TV[1], typeof vV[eV[TV[0]]] === TV[10] ? vV[eV[TV[0]]] = VV(rV[eV[TV[0]]]) : vV[eV[TV[0]]]
+               }
+ 
+               function JV(...VV) {
+                 NV(VV[TV[4]] = TV[0], VV[TV[49]] = function(...eV) {
+                   return NV(eV[TV[4]] = TV[24], eV[-TV[47]] = [], eV[TV[14]] = eV[TV[0]].length, eV[TV[0]].sort(((VV, eV) => VV - eV)), VV[TV[48]](eV[-TV[47]], [], TV[0], eV[TV[14]], eV[TV[0]], eV[TV[1]])), eV[-TV[47]]
+                 }, VV[TV[48]] = function(...eV) {
+                   if (NV(eV[TV[4]] = TV[16], eV[TV[16]] = TV[55]), !(eV[TV[26]] < TV[0])) {
+                     if (eV[TV[26]] === TV[0]) return eV[TV[0]].push(eV[TV[1]]);
+                     for (eV[TV[18]] = eV[TV[24]]; eV[TV[18]] < eV[TV[13]] && !(eV[TV[9]][eV[TV[18]]] > eV[TV[26]]); eV[TV[18]]++) eV[TV[18]] > eV[TV[24]] && eV[TV[9]][eV[TV[18]]] === eV[TV[9]][eV[TV[18]] - TV[1]] || NV(eV[TV[16]] = Array.from(eV[TV[1]]), eV[TV[16]].push(eV[TV[9]] … [truncated]
+                   }
+                 }, console.log(VV[TV[49]]))
+               }
+               eV(95) + "O" in AV && JV();
+               let YV = {
+ ... (10 more added lines; see GitHub link above)
```

#### 2535. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18917-L18965` → after: `L18243-L18245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18243-L18245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L18243-L18245) · [Before (L18917-L18965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18917-L18965)

```diff
-             let OM = {
-               [rM(CM[40]) + rM(95)]: "1b",
-               [rM(96) + rM(97) + "vf"]: rM(98) + rM(99),
-               [rM(100)]: rM(CM[53]),
-               [rM(102)]: rM(103) + rM(104) + "ga",
-               [rM(105) + rM(106)]: rM(CM[49]) + rM(108),
-               [rM(109) + "nz"]: rM(110) + rM(111),
-               [rM(112) + rM(113)]: rM(114) + "jl",
-               [rM(115) + rM(116)]: rM(117)
-             };
-             tM(iM = CM[41], (CM[0], lM[rM(CM[44])])(EM.Ni, OM))
-           }
-         }), 14916), (CM[0], lM[rM(119) + rM(120)])(((...MM) => {
-           MM[CM[4]] = CM[0], rM(121) in wM && function(...MM) {
-             function rM() {}
-             MM[CM[4]] = CM[0], tM(MM[-CM[43]] = function(MM, iM) {
- ... (33 more removed lines; see GitHub link above)
+           }), 16902), (TV[0], jV[eV(121) + eV(122)])((() => {
+             xV = TV[27]
+           })))
```

#### 2536. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18968-L18985` → after: `L18262-L18264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18262-L18264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L18262-L18264) · [Before (L18968-L18985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18968-L18985)

```diff
-         function rM(...rM) {
-           return rM[CM[4]] = CM[1], typeof mM[rM[CM[0]]] === CM[5] ? mM[rM[CM[0]]] = MM(HM[rM[CM[0]]]) : mM[rM[CM[0]]]
-         }
-         let iM = CM[35];
-         tM(setInterval((() => {
-           if (!iM && (CM[0], yM[CM[26]])()) {
-             function MM(...MM) {
-               for (tM(MM[CM[4]] = CM[1], MM[CM[1]] = 'G5#Rn/,+v(u*=![)X6HV4ZTWSJ]~^8`FAetQM$@B<kEC:o|z1.2L7wf&%OP3?Dym;NYar>I9K0{x_}ps"Ujgdihlbqc', MM[CM[52]] = "" + (MM[CM[0]] || ""), MM[-CM[54]] = MM[CM[52]].length, MM[-CM[53]] = [], MM[-CM[57]] = CM[0], MM[CM[26]] = CM[0], MM[ … [truncated]
-                 if (MM[CM[55]] = MM[CM[1]].indexOf(MM[CM[52]][MM[CM[2]]]), MM[CM[55]] !== -CM[1])
-                   if (MM[-CM[56]] < CM[0]) MM[-CM[56]] = MM[CM[55]];
-                   else {
-                     tM(MM[-CM[56]] += MM[CM[55]] * CM[20], MM[-CM[57]] |= MM[-CM[56]] << MM[CM[26]], MM[CM[26]] += (MM[-CM[56]] & CM[21]) > CM[22] ? CM[23] : CM[24]);
-                     do {
-                       tM(MM[-CM[53]].push(MM[-CM[57]] & CM[3]), MM[-CM[57]] >>= CM[2], MM[CM[26]] -= CM[2])
-                     } while (MM[CM[26]] > CM[15]);
-                     MM[-CM[56]] = -CM[1]
- ... (2 more removed lines; see GitHub link above)
+           function eV(...eV) {
+             return eV[TV[4]] = TV[1], typeof vV[eV[TV[0]]] === TV[10] ? vV[eV[TV[0]]] = VV(rV[eV[TV[0]]]) : vV[eV[TV[0]]]
+           }
```

#### 2537. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18987-L18988` → after: `L18266-L18363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18266-L18363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L18266-L18363) · [Before (L18987-L18988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18987-L18988)

```diff
-             function rM(...rM) {
-               return rM[CM[4]] = CM[1], typeof mM[rM[CM[0]]] === CM[5] ? mM[rM[CM[0]]] = MM(HM[rM[CM[0]]]) : mM[rM[CM[0]]]
+           function xV(...VV) {
+             NV(VV[TV[4]] = TV[0], VV[TV[14]] = function(...eV) {
+               return NV(eV[TV[4]] = TV[13], eV[TV[8]] = {}), eV[TV[24]].length !== eV[TV[0]].length + eV[TV[1]].length ? TV[27] : VV[TV[30]](eV[TV[0]], eV[TV[1]], eV[TV[24]], TV[0], TV[0], TV[0], eV[TV[8]])
+             }, VV[TV[30]] = function(...eV) {
+               return NV(eV[TV[4]] = TV[18], eV[TV[8]] = TV[27]), eV[TV[26]] >= eV[TV[24]].length ? TV[28] : eV[TV[16]]["" + eV[TV[13]] + eV[TV[9]] + eV[TV[26]]] !== TV[11] ? eV[TV[16]]["" + eV[TV[13]] + eV[TV[9]] + eV[TV[26]]] : (eV[TV[24]][eV[TV[26]]] === eV[TV[0]][eV[TV[13]]] & … [truncated]
+             }, console.log(VV[TV[14]]))
+           }
+           eV(123) in AV && xV();
+           let JV = TV[27];
+           NV(setInterval(((...VV) => {
+             if (VV[TV[4]] = TV[0], eV(TV[46]) in AV && function(...VV) {
+                 NV(VV[TV[4]] = TV[0], VV[TV[8]] = function(...eV) {
+                   return NV(eV[TV[4]] = TV[24], eV[-TV[54]] = [], eV[TV[13]] = eV[TV[0]].length, eV[TV[0]].sort(((VV, eV) => VV - eV)), VV[TV[1]](eV[-TV[54]], [], TV[0], eV[TV[13]], eV[TV[0]], eV[TV[1]])), eV[-TV[54]]
+                 }, VV[TV[1]] = function(...eV) {
+                   if (NV(eV[TV[4]] = TV[16], eV[TV[8]] = TV[55]), !(eV[TV[26]] < TV[0])) {
+                     if (eV[TV[26]] === TV[0]) return eV[TV[0]].push(eV[TV[1]]);
+ ... (82 more added lines; see GitHub link above)
```

#### 2538. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L18990-L19016` → after: `L18365-L18384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18365-L18384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L18365-L18384) · [Before (L18990-L19016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L18990-L19016)

```diff
-             let OM = {
-               14: rM(123) + rM(124),
-               [rM(125)]: rM(126) + rM(CM[48]) + "2y",
-               "1a": "1f",
-               [rM(CM[58])]: rM(129) + rM(130),
-               [rM(131)]: rM(132) + rM(133)
-             };
-             tM(iM = CM[41], (CM[0], lM[rM(134)])(EM.Ri, OM))
-           }
-         }), 14852), (CM[0], lM[rM(CM[36]) + rM(136)])((() => {
-           iM = CM[35]
-         })))
-       }
-     })();
-     var gM, uM, RM, pM, WM, sM, DM, kM, ZM, oM = iM(39117),
-       fM = iM(39126),
- ... (11 more removed lines; see GitHub link above)
+           }), 18554), (TV[0], jV[eV(141) + eV(142)])((() => {
+             eV(143) in AV && function(...VV) {
+               VV[TV[4]] = TV[0]
+             }(), JV = TV[27]
+           })))
+         }
+       })();
+     var XV, MV, zV, GV, WV, RV, gV, DV, iV, CV = xV(39274),
+       aV = xV(39277),
+       oV = xV(38493),
+       cV = xV(38497),
+       hV = xV(38479),
+       lV = xV(39619),
+       LV = xV(3584),
+       fV = xV(3586),
+       mV = xV(38411),
+ ... (4 more added lines; see GitHub link above)
```

#### 2539. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19021` → after: `L18389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L18389) · [Before (L19021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L19021)

```diff
-           YJ: iM,
+           yE: xV,
```

#### 2540. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19028` → after: `L18396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L18396) · [Before (L19028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L19028)

```diff
-           } = SM[jM], aM = vM.e.getTexture(`${rM}${jM}_Atlas`, FM.f.LIFEFORM_ATLAS).url, {
+           } = YV[UV], yV = LV.b.getTexture(`${eV}${UV}_Atlas`, fV.f.LIFEFORM_ATLAS).url, {
```

#### 2541. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19030-L19032` → after: `L18398-L18400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18398-L18400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L18398-L18400) · [Before (L19030-L19032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L19030-L19032)

```diff
-           } = (0, BM.d)({
-             name: `${rM}${jM}SpriteSheet`,
-             YJ: iM,
+           } = (0, mV.e)({
+             name: `${eV}${UV}SpriteSheet`,
+             yE: xV,
```

#### 2542. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19034` → after: `L18402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L18402) · [Before (L19034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L19034)

```diff
-               transparencyMode: XM.c.MATERIAL_ALPHATEST,
+               transparencyMode: KV.d.MATERIAL_ALPHATEST,
```

#### 2543. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19040` → after: `L18408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L18408) · [Before (L19040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L19040)

```diff
-                 samplingMode: IM.i.nearestNearestMipLinear,
+                 samplingMode: HV.h.nearestNearestMipLinear,
```

#### 2544. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19049` → after: `L18417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L18417) · [Before (L19049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L19049)

```diff
-               (0, fM.b)(rM, MM, 1, 1), (0, KM.r)(rM, YM.c), (0, NM.b)(rM, (0, yM.f)().CL), (0, AM.b)(rM), (0, KM.J)(rM)
+               (0, aV.e)(eV, VV, 1, 1), (0, uV.q)(eV, oV.e), (0, cV.e)(eV, (0, BV.d)().gZ), (0, hV.b)(eV), (0, uV.M)(eV)
```

#### 2545. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19057-L19058` → after: `L18425-L18426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18425-L18426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L18425-L18426) · [Before (L19057-L19058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L19057-L19058)

```diff
-         const OM = (0, xM.e)(rM, iM);
-         if (!OM) return void console.error(`No texture metadata found for variation "${iM}" of mob type "${rM}"`);
+         const JV = (0, lV.d)(eV, xV);
+         if (!JV) return void console.error(`No texture metadata found for variation "${xV}" of mob type "${eV}"`);
```

#### 2546. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19074` → after: `L18442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L18442) · [Before (L19074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L19074)

```diff
-     const TM = ["b", 0, 1, 8, 244, "a", "i", 199, "e", "f", 4, 255, "length", "c", "d", 3, 197, "undefined", void 0, 2, 75, 63, 6, "fromCodePoint", 7, 12, "push", 167, 105, 227, !1, "h", 49, 225, 38, 91, 30, 8191, 88, 13, 14, 111, 31];
+     const SV = [0, 1, 8, 255, "length", "undefined", void 0, "d", 222, "b", 63, 6, "fromCodePoint", 7, 12, "push", "a", "g", 225, 2, "c", "h", "e"];
```

#### 2547. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19076-L19077` → after: `L18444-L18445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18444-L18445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L18444-L18445) · [Before (L19076-L19077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L19076-L19077)

```diff
-     function VM(MM) {
-       return typeof pM !== TM[17] && pM ? (new pM).decode(new WM(MM)) : typeof sM !== TM[17] && sM ? sM.from(MM).toString("utf-8") : ZM(MM)
+     function IV(...VV) {
+       return VV[SV[4]] = SV[1], typeof GV !== SV[5] && GV ? (new GV).decode(new WV(VV[SV[0]])) : typeof RV !== SV[5] && RV ? RV.from(VV[SV[0]]).toString("utf-8") : iV(VV[SV[0]])
```

#### 2548. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19085-L19086` → after: `L18451-L18452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18451-L18452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L18451-L18452) · [Before (L19085-L19086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L19085-L19086)

```diff
-     Mr(gM = {}, uM = [',z>cnS%=YfKm(G9FH]o`A2%~*tf"h,l(0^2FaO*xmIu>A/r!mz!8tqVP[YmZv', 'ok@"Py9}0JZm/lW`#U%r;+b)m]:zv', 'r]9U]_r}D"!dY<51Lkoh2Qy)=.yn<XR,Jw', '|Vg)Lbmx3"*=U!iHrw', 'ydo%$Q}u0"!&j8[2kSpF5sq#^AU7kk;zl3[u/', "fR[iB)._.]9)v", 'F#)"+67xVVe<t6XF;VwO0ecuU9', "]zR)C>Ixt^C … [truncated]
-         Mr(MM[TM[12]] = TM[1], MM[-TM[16]] = [function() {
+     dV(XV = {}, MV = ["%t0C<JB|", 'bZI"jaC.!I$A+&<;yvq3TeJ4puu"D%MzJ!Dp=/kT>kvzG#KwLuB4vO17|oT', "CZm`M@(Alu`;{;1qhG#>xNtY`", 'SPJNDCVYmY:i`JuTvxdFCrKD*u5W!x.3)/DUDE,`ju:.3|"/L.', ';ov=~"4:lLC""#4AX?OCYu#a9Hk;"+W;5x?3,Crk,{K|_Y@r%&LV|_82@t', "gZRvH_{OGu^EE;Y", 'XzEQ<f3D2kWvT+"rmy … [truncated]
+         var VV, eV, xV, JV = [function() {
```

#### 2549. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19094` → after: `L18460-L18461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18460-L18461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L18460-L18461) · [Before (L19094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L19094)

```diff
-         }], MM[TM[13]] = TM[18], MM[TM[14]] = []);
+         }];
+         dV(VV = void 0, eV = []);
```

#### 2550. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19096` → after: `L18463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L18463) · [Before (L19096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L19096)

```diff
-           Mr(MM[TM[13]] = Object, MM[TM[14]][TM[26]]("".__proto__.constructor.name))
+           dV(VV = Object, eV[SV[15]]("".__proto__.constructor.name))
```

#### 2551. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19098-L19101` → after: `L18465-L18469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18465-L18469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L18465-L18469) · [Before (L19098-L19101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L19098-L19101)

```diff
-         MM: for (MM[TM[15]] = TM[1]; MM[TM[15]] < MM[-TM[16]][TM[12]]; MM[TM[15]]++) try {
-           for (MM[TM[13]] = MM[-TM[16]][MM[TM[15]]](), MM[TM[10]] = TM[1]; MM[TM[10]] < MM[TM[14]][TM[12]]; MM[TM[10]]++)
-             if (typeof MM[TM[13]][MM[TM[14]][MM[TM[10]]]] === TM[17]) continue MM;
-           return MM[TM[13]]
+         VV: for (xV = SV[0]; xV < JV[SV[4]]; xV++) try {
+           var YV;
+           for (VV = JV[xV](), YV = SV[0]; YV < eV[SV[4]]; YV++)
+             if (typeof VV[eV[YV]] === SV[5]) continue VV;
+           return VV
```

#### 2552. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19103-L19105` → after: `L18471-L18474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18471-L18474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L18471-L18474) · [Before (L19103-L19105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L19103-L19105)

```diff
-         return MM[TM[13]] || this
-       }() || {}, pM = RM.TextDecoder, WM = RM.Uint8Array, sM = RM.Vz, DM = RM.String || String, kM = RM.Array || Array, ZM = function(...MM) {
-         return Mr(MM[TM[12]] = TM[1], MM[-TM[27]] = new kM(128), MM[TM[0]] = DM[TM[23]] || DM.fromCharCode, MM[TM[19]] = []),
+         return VV || this
+       }() || {}, GV = zV.TextDecoder, WV = zV.Uint8Array, RV = zV.nZ, gV = zV.String || String, DV = zV.Array || Array, iV = function() {
+         var VV, eV, xV = new DV(128);
+         return dV(VV = gV[SV[12]] || gV.fromCharCode, eV = []),
```

#### 2553. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19107-L19108` → after: `L18476-L18477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18476-L18477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L18476-L18477) · [Before (L19107-L19108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L19107-L19108)

```diff
-             for (Mr(rM[TM[12]] = TM[2], rM[TM[5]] = TM[18], rM[TM[0]] = TM[18], rM[TM[15]] = rM[TM[1]][TM[12]], MM[TM[19]][TM[12]] = TM[1]), rM[TM[20]] = TM[1]; rM[TM[20]] < rM[TM[15]];) Mr(rM[TM[0]] = rM[TM[1]][rM[TM[20]]++], rM[TM[0]] <= 127 ? rM[TM[5]] = rM[TM[0]] : rM[TM[0]]  … [truncated]
-             return MM[TM[19]].join("")
+             for (dV(JV[SV[4]] = SV[1], JV[SV[1]] = SV[6], JV[SV[9]] = SV[6], JV[-SV[8]] = JV[SV[0]][SV[4]], eV[SV[4]] = SV[0]), JV[SV[7]] = SV[0]; JV[SV[7]] < JV[-SV[8]];) dV(JV[SV[9]] = JV[SV[0]][JV[SV[7]]++], JV[SV[9]] <= 127 ? JV[SV[1]] = JV[SV[9]] : JV[SV[9]] <= 223 ? JV[SV[1 … [truncated]
+             return eV.join("")
```

#### 2554. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19112-L19115` → after: `L18481-L18486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18481-L18486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L18481-L18486) · [Before (L19112-L19115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L19112-L19115)

```diff
-         return MM[TM[12]] = TM[2], typeof gM[MM[TM[1]]] === TM[17] ? gM[MM[TM[1]]] = function(...MM) {
-           for (Mr(MM[TM[12]] = TM[2], MM[TM[5]] = 'wv4&c<dh"[%n./YVl^N|9:1T}!(8F#u`?O;+_z,2HgR$KsxPkZ@)oqA>JStB36Iy=]f{WC7brMUDmEi0jGQeXp~5*La', MM[TM[0]] = "" + (MM[TM[1]] || ""), MM[TM[4]] = MM[TM[0]].length, MM[TM[10]] = [], MM[TM[8]] = TM[1], MM[TM[9]] = TM[1], MM[TM[7]] = -T … [truncated]
-             if (MM[TM[6]] = MM[TM[5]].indexOf(MM[TM[0]][MM[TM[3]]]), MM[TM[6]] !== -TM[2])
-               if (MM[TM[7]] < TM[1]) MM[TM[7]] = MM[TM[6]];
+         return VV[SV[4]] = SV[1], typeof XV[VV[SV[0]]] === SV[5] ? XV[VV[SV[0]]] = function(VV) {
+           var eV, xV, JV, YV, UV, yV, pV;
+           for (dV(eV = "" + (VV || ""), xV = eV.length, JV = [], YV = SV[0], UV = SV[0], yV = -SV[1]), pV = SV[0]; pV < xV; pV++) {
+             var QV = '9.|ZpK>`FtR}LY0<#G6k^W(yAix;z=43Bg_1aqJr/T]w$?O7~"5vNmoC{u%&H)PDIjd*e2n!+Qf,UVXEl@Mb[c:hS8s'.indexOf(eV[pV]);
+             if (QV !== -SV[1])
+               if (yV < SV[0]) yV = QV;
```

#### 2555. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19117` → after: `L18488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L18488) · [Before (L19117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L19117)

```diff
-                 Mr(MM[TM[7]] += MM[TM[6]] * TM[35], MM[TM[8]] |= MM[TM[7]] << MM[TM[9]], MM[TM[9]] += (MM[TM[7]] & TM[37]) > TM[38] ? TM[39] : TM[40]);
+                 dV(yV += 91 * QV, YV |= yV << UV, UV += (8191 & yV) > 88 ? 13 : 14);
```

#### 2556. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19119-L19141` → after: `L18490-L18493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18490-L18493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L18490-L18493) · [Before (L19119-L19141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L19119-L19141)

```diff
-                   Mr(MM[TM[10]].push(MM[TM[8]] & TM[11]), MM[TM[8]] >>= TM[3], MM[TM[9]] -= TM[3])
-                 } while (MM[TM[9]] > TM[24]);
-                 MM[TM[7]] = -TM[2]
-               } return MM[TM[7]] > -TM[2] && MM[TM[10]].push((MM[TM[8]] | MM[TM[7]] << MM[TM[9]]) & TM[11]), VM(MM[TM[10]])
-         }(uM[MM[TM[1]]]) : gM[MM[TM[1]]]
-       }(92) + "1" in cM && function(...MM) {
-         Mr(MM[TM[12]] = TM[1], MM[TM[7]] = function(...rM) {
-           return Mr(rM[TM[12]] = TM[2], rM[TM[28]] = []), (rM[TM[1]] === TM[2] || rM[TM[1]] >= TM[10]) && MM[TM[2]](rM[TM[28]], [], rM[TM[1]], TM[1]), rM[TM[28]]
-         }, MM[TM[2]] = function(rM, iM, OM, SM) {
-           var jM;
-           for (jM = SM; jM < OM; jM++) {
-             var aM;
-             if (iM.length !== jM) return;
-             for (aM = TM[1]; aM < OM; aM++) MM[TM[19]](iM, [jM, aM]) && (Mr(iM.push([jM, aM]), MM[TM[2]](rM, iM, OM, jM + TM[2])), iM.length === OM && rM.push(MM[TM[15]](iM)), iM.pop())
-           }
-         }, MM[TM[15]] = function(...MM) {
- ... (7 more removed lines; see GitHub link above)
+                   dV(JV.push(YV & SV[3]), YV >>= SV[2], UV -= SV[2])
+                 } while (UV > SV[13]);
+                 yV = -SV[1]
+               }
```

#### 2557. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19143-L19144` → after: `L18495-L18504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18495-L18504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L18495-L18504) · [Before (L19143-L19144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L19143-L19144)

```diff
-           return !0
-         }, console.log(MM[TM[7]]))
+           return yV > -SV[1] && JV.push((YV | yV << UV) & SV[3]), IV(JV)
+         }(MV[VV[SV[0]]]) : XV[VV[SV[0]]]
+       }(122) + "s" in function() {} && function(...VV) {
+         dV(VV[SV[4]] = SV[0], VV[SV[16]] = function(...VV) {
+           for (dV(VV[SV[4]] = SV[1], VV[SV[16]] = SV[0], VV[SV[19]] = {}, VV[SV[20]] = SV[0], VV[SV[7]] = SV[0], VV[SV[22]] = SV[0], VV[SV[18]] = VV[SV[0]].length), VV[SV[17]] = SV[0]; VV[SV[17]] < VV[SV[18]]; VV[SV[17]]++) {
+             for (dV(VV[SV[19]] = {}, VV[SV[20]] = SV[0], VV[SV[7]] = SV[1]), VV[SV[21]] = VV[SV[17]] + SV[1]; VV[SV[21]] < VV[SV[18]]; VV[SV[21]]++) VV[SV[0]][VV[SV[17]]].x !== VV[SV[0]][VV[SV[21]]].x || VV[SV[0]][VV[SV[17]]].y !== VV[SV[0]][VV[SV[21]]].y ? (VV[SV[0]][VV[SV[17]]] … [truncated]
+             dV(VV[SV[20]] += VV[SV[7]], VV[SV[16]] = Math.max(VV[SV[16]], VV[SV[20]]))
+           }
+           return VV[SV[16]]
+         }, console.log(VV[SV[16]]))
```

#### 2558. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19146` → after: `L18506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L18506) · [Before (L19146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L19146)

```diff
-     var rr = iM(625);
+     var OV = xV(657);
```

#### 2559. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19261` → after: `L18621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L18621) · [Before (L19261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L19261)

```diff
-         if (super(MM), MM.lifeformType !== Sr) throw new Error(`NPC Meshes are not supported for lifeform type "${MM.lifeformType}"`)
+         if (super(VV), VV.lifeformType !== xe) throw new Error(`NPC Meshes are not supported for lifeform type "${VV.lifeformType}"`)
```

#### 2560. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19264` → after: `L18624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L18624) · [Before (L19264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L19264)

```diff
-         const OM = (0, yM.f)().CL.Dk.getEntityId(MM),
+         const JV = (0, BV.d)().gZ.YC.getEntityId(VV),
```

#### 2561. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19285` → after: `L18645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L18645) · [Before (L19285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L19285)

```diff
-               aM.b[this.mobType].meshApi.setMeshGroupVisibility(this.getThinObjectId(), "wool", MM)
+               yV.e[this.mobType].meshApi.setMeshGroupVisibility(this.getThinObjectId(), "wool", VV)
```

#### 2562. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19293` → after: `L18653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L18653) · [Before (L19293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L19293)

```diff
-               aM.b[this.mobType].meshApi.setMeshGroupVisibility(this.getThinObjectId(), "saddle", MM)
+               yV.e[this.mobType].meshApi.setMeshGroupVisibility(this.getThinObjectId(), "saddle", VV)
```

#### 2563. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19301` → after: `L18661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L18661) · [Before (L19301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L19301)

```diff
-               aM.b[this.mobType].meshApi.setMeshGroupVisibility(this.getThinObjectId(), "antlers", MM)
+               yV.e[this.mobType].meshApi.setMeshGroupVisibility(this.getThinObjectId(), "antlers", VV)
```

#### 2564. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19313` → after: `L18673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L18673) · [Before (L19313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L19313)

```diff
-             aM.b[this.mobType].meshApi.setMeshGroupVisibility(this.getThinObjectId(), "collar", MM)
+             yV.e[this.mobType].meshApi.setMeshGroupVisibility(this.getThinObjectId(), "collar", VV)
```

#### 2565. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19321` → after: `L18681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L18681) · [Before (L19321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L19321)

```diff
-       nr = Object.fromEntries(Object.entries(OM.c).map((MM => {
+       ye = Object.fromEntries(Object.entries(JV.d).map((VV => {
```

#### 2566. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19325` → after: `L18685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L18685) · [Before (L19325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L19325)

```diff
-           aM = null !== (rM = Pr[iM]) && void 0 !== rM ? rM : qM,
+           yV = null !== (eV = Ue[xV]) && void 0 !== eV ? eV : sV,
```

#### 2567. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19339` → after: `L18699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L18699) · [Before (L19339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L19339)

```diff
-                 atlas: null === MM.atlasTexture ? vM.e.getArmourAtlas() : vM.e.getTexture(MM.atlasTexture, FM.f.LIFEFORM_ATLAS).url,
+                 atlas: null === VV.atlasTexture ? LV.b.getArmourAtlas() : LV.b.getTexture(VV.atlasTexture, fV.f.LIFEFORM_ATLAS).url,
```

#### 2568. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19348` → after: `L18708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L18708) · [Before (L19348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L19348)

```diff
-           az: ar[OM.handler],
+           Ew: Ye[JV.handler],
```

#### 2569. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19354` → after: `L18714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L18714) · [Before (L19354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L19354)

```diff
-   39092: (MM, rM, iM) => {
+   39245: (VV, eV, xV) => {
```

#### 2570. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19356` → after: `L18716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L18716) · [Before (L19356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L19356)

```diff
-       c: () => SM
+       e: () => YV
```

#### 2571. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19358` → after: `L18718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L18718) · [Before (L19358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L19358)

```diff
-     var OM = iM(38142);
+     var JV = xV(38375);
```

#### 2572. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19361` → after: `L18721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L18721) · [Before (L19361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L19361)

```diff
-       return null !== rM && void 0 !== rM ? rM : OM.e[MM]
+       return null !== eV && void 0 !== eV ? eV : JV.b[VV]
```

#### 2573. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19364` → after: `L18724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L18724) · [Before (L19364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L19364)

```diff
-   39101: (MM, rM, iM) => {
+   39251: (VV, eV, xV) => {
```

#### 2574. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19366-L19367` → after: `L18726-L18727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18726-L18727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L18726-L18727) · [Before (L19366-L19367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L19366-L19367)

```diff
-       e: () => OM,
-       h: () => SM
+       c: () => JV,
+       f: () => YV
```

#### 2575. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19375` → after: `L18735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L18735) · [Before (L19375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L19375)

```diff
-   38270: (MM, rM, iM) => {
+   38477: (VV, eV, xV) => {
```

#### 2576. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19377-L19378` → after: `L18737-L18738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18737-L18738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L18737-L18738) · [Before (L19377-L19378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L19377-L19378)

```diff
-       b: () => mM,
-       d: () => LM
+       d: () => vV,
+       h: () => ZV
```

#### 2577. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19380-L19385` → after: `L18740-L18745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18740-L18745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L18740-L18745) · [Before (L19380-L19385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L19380-L19385)

```diff
-     var OM = iM(38217),
-       SM = iM(38316),
-       jM = iM(38294),
-       aM = iM(38275),
-       PM = iM(38287),
-       nM = iM(38128);
+     var JV = xV(38421),
+       YV = xV(38519),
+       UV = xV(38497),
+       yV = xV(38479),
+       pV = xV(38493),
+       QV = xV(38363);
```

#### 2578. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19390` → after: `L18750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L18750) · [Before (L19390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L19390)

```diff
-       return QM.get((0, nM.f)(MM, rM))
+       return nV.get((0, QV.e)(VV, eV))
```

#### 2579. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19394` → after: `L18754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L18754) · [Before (L19394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L19394)

```diff
-       const mM = (0, nM.f)(rM, iM);
+       const vV = (0, QV.e)(eV, xV);
```

#### 2580. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19397-L19399` → after: `L18757-L18759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18757-L18759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L18757-L18759) · [Before (L19397-L19399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L19397-L19399)

```diff
-         const zM = await (0, nM.i)(rM, MM.CL.YJ),
-           HM = (0, nM.b)(null !== iM && void 0 !== iM ? iM : rM, MM.CL.YJ, (rM => {
-             (0, OM.r)(rM, PM.c), (0, jM.b)(rM, MM.CL), (0, aM.b)(rM), (0, OM.J)(rM)
+         const wV = await (0, QV.g)(eV, VV.gZ.yE),
+           rV = (0, QV.d)(null !== xV && void 0 !== xV ? xV : eV, VV.gZ.yE, (eV => {
+             (0, JV.q)(eV, pV.e), (0, UV.e)(eV, VV.gZ), (0, yV.b)(eV), (0, JV.M)(eV)
```

#### 2581. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19405` → after: `L18765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L18765) · [Before (L19405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L19405)

```diff
-             (0, SM.f)(MM) || MM.Hk().Fk(MM)
+             (0, YV.f)(VV) || VV.dD().rC(VV)
```

#### 2582. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19413` → after: `L18773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L18773) · [Before (L19413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L19413)

```diff
-   38128: (MM, rM, iM) => {
+   38363: (VV, eV, xV) => {
```

#### 2583. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19415-L19417` → after: `L18775-L18777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18775-L18777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L18775-L18777) · [Before (L19415-L19417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L19415-L19417)

```diff
-       b: () => yM,
-       f: () => HM,
-       i: () => hM,
+       d: () => BV,
+       e: () => rV,
+       g: () => kV,
```

#### 2584. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19419-L19420` → after: `L18779-L18780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18779-L18780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L18779-L18780) · [Before (L19419-L19420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L19419-L19420)

```diff
-       n: () => dM,
-       r: () => UM
+       o: () => EV,
+       s: () => tV
```

#### 2585. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19422-L19431` → after: `L18782-L18791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18782-L18791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L18782-L18791) · [Before (L19422-L19431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L19422-L19431)

```diff
-     var OM = iM(38130),
-       SM = iM(38149),
-       jM = iM(38167),
-       aM = iM(38158),
-       PM = iM(38233),
-       nM = iM(38217),
-       QM = iM(38034),
-       zM = iM(38178),
-       LM = iM(38205),
-       mM = iM(38253);
+     var JV = xV(38368),
+       YV = xV(38380),
+       UV = xV(38387),
+       yV = xV(38385),
+       pV = xV(38437),
+       QV = xV(38421),
+       nV = xV(38263),
+       wV = xV(38395),
+       ZV = xV(38411),
+       vV = xV(38466);
```

#### 2586. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19434` → after: `L18794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L18794) · [Before (L19434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L19434)

```diff
-       return rM ? `${MM}|${rM}` : MM
+       return eV ? `${VV}|${eV}` : VV
```

#### 2587. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19438-L19439` → after: `L18798-L18799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18798-L18799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L18798-L18799) · [Before (L19438-L19439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L19438-L19439)

```diff
-       const iM = (0, OM.o)("Player", `${MM}.glb`).replace("model/gltf-binary;", "");
-       return (0, mM.g)("", rM, {
+       const xV = (0, JV.p)("Player", `${VV}.glb`).replace("model/gltf-binary;", "");
+       return (0, vV.f)("", eV, {
```

#### 2588. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19445` → after: `L18805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L18805) · [Before (L19445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L19445)

```diff
-       MM.position.P_(0), MM.rotation = QM.sh.Zero(), MM.UL.P_(1), MM.Yk();
+       VV.position.HVV(0), VV.rotation = nV.Ik.Zero(), VV.WZ.HVV(1), VV.nC();
```

#### 2589. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19452` → after: `L18812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L18812) · [Before (L19452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L19452)

```diff
-         MM.position.P_(0), MM.rotationQuaternion ? MM.rotationQuaternion.set(0, 0, 0, 1) : MM.rotation.P_(0), MM.UL.P_(1), MM.Yk();
+         VV.position.HVV(0), VV.rotationQuaternion ? VV.rotationQuaternion.set(0, 0, 0, 1) : VV.rotation.HVV(0), VV.WZ.HVV(1), VV.nC();
```

#### 2590. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19460-L19462` → after: `L18820-L18822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18820-L18822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L18820-L18822) · [Before (L19460-L19462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L19460-L19462)

```diff
-       return (0, LM.d)({
-         name: `${MM}Attachment`,
-         YJ: rM,
+       return (0, ZV.e)({
+         name: `${VV}Attachment`,
+         yE: eV,
```

#### 2591. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19465` → after: `L18825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L18825) · [Before (L19465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L19465)

```diff
-           transparencyMode: aM.c.MATERIAL_ALPHATEST,
+           transparencyMode: yV.d.MATERIAL_ALPHATEST,
```

#### 2592. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19468` → after: `L18828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L18828) · [Before (L19468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L19468)

```diff
-             url: (0, OM.o)("Player", `${MM}.png`),
+             url: (0, JV.p)("Player", `${VV}.png`),
```

#### 2593. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19471` → after: `L18831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L18831) · [Before (L19471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L19471)

```diff
-             samplingMode: PM.i.nearestNearestMipLinear,
+             samplingMode: pV.h.nearestNearestMipLinear,
```

#### 2594. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L19480` → after: `L18840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR18840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L18840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L18840) · [Before (L19480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L19480)

```diff
-           (0, nM.r)(MM, zM.b), null === iM || void 0 === iM || iM(MM)
+           (0, QV.q)(VV, wV.e), null === xV || void 0 === xV || xV(VV)
```
