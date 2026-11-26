# Changed — Bundle Modifications Report (Part 118 / 146)

- **Updated at**: `2026-11-26T17:59 JST`
- **Part**: `118 / 146` (**442** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 117](part-117.md) · [Part 119 →](part-119.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/controller.js` (fo1voe.f743fbcf → pxmq3aq.c63b303d · continued)

- **File**: `bundles/bloxd.io/chunks/js/controller.js` (1024 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2)

#### 626. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7210` → after: `L7114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7114) · [Before (L7210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7210)

```diff
-               OM.classList.toggle("Pressed", SM >= hM.z), (0, hM.N)(rM) && OM.style.setProperty("--trigger-fill", `${Math.round(100*SM)}%`)
+               JV.classList.toggle("Pressed", YV >= kV.C), (0, kV.P)(eV) && JV.style.setProperty("--trigger-fill", `${Math.round(100*YV)}%`)
```

#### 627. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7212-L7213` → after: `L7116-L7117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7116-L7117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7116-L7117) · [Before (L7212-L7213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7212-L7213)

```diff
-             const rM = EP((0, mM.j)());
-             lP(nM.current, MM.leftStick, rM.left.deadzone, MM.values[(0, hM.l)("LS")] >= hM.z), lP(QM.current, MM.rightStick, rM.right.deadzone, MM.values[(0, hM.l)("RS")] >= hM.z)
+             const eV = Bp((0, vV.i)());
+             Ep(QV.current, VV.leftStick, eV.left.deadzone, VV.values[(0, kV.n)("LS")] >= kV.C), Ep(nV.current, VV.rightStick, eV.right.deadzone, VV.values[(0, kV.n)("RS")] >= kV.C)
```

#### 628. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7215` → after: `L7119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7119) · [Before (L7215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7215)

```diff
-           return rM || MM((0, hM.v)()), aM.g.onFrame(MM)
+           return eV || VV((0, kV.z)()), yV.f.onFrame(VV)
```

#### 629. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7224` → after: `L7128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7128) · [Before (L7224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7224)

```diff
-         const dM = Ta.fb.find((MM => MM.value === (null === rM || void 0 === rM ? void 0 : rM.family)));
+         const EV = sy.cb.find((VV => VV.value === (null === eV || void 0 === eV ? void 0 : eV.family)));
```

#### 630. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7244` → after: `L7148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7148) · [Before (L7244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7244)

```diff
-             }), (rM || HM) && (0, YM.jsx)(Da.e, {
+             }), (eV || rV) && (0, cV.jsx)(Ry.f, {
```

#### 631. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7258` → after: `L7162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7162) · [Before (L7258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7258)

```diff
-                 button: Ka.i
+                 button: Hy.g
```

#### 632. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7260` → after: `L7164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7164) · [Before (L7260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7260)

```diff
-               glyph: (0, zM.m)("menuBack")
+               glyph: (0, wV.i)("menuBack")
```

#### 633. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7273-L7274` → after: `L7177-L7178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7177-L7178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7177-L7178) · [Before (L7273-L7274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7273-L7274)

```diff
-               children: hM.X.map((MM => {
-                 const iM = (0, hM.l)(MM);
+               children: kV._.map((VV => {
+                 const xV = (0, kV.n)(VV);
```

#### 634. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7279` → after: `L7183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7183) · [Before (L7279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7279)

```diff
-                   className: (0, hM.N)(iM) ? "ControllerTesterButton ControllerTesterTrigger" : "ControllerTesterButton",
+                   className: (0, kV.P)(xV) ? "ControllerTesterButton ControllerTesterTrigger" : "ControllerTesterButton",
```

#### 635. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7297` → after: `L7201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7201) · [Before (L7297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7297)

```diff
-         } = (0, SM.A)(), rM = (0, mM.q)(), [iM, OM] = (0, ZM.useState)(!1);
+         } = (0, YV.A)(), eV = (0, vV.p)(), [xV, JV] = (0, CV.useState)(!1);
```

#### 636. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7302` → after: `L7206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7206) · [Before (L7302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7302)

```diff
-           }), Ta.ub);
+           }), sy.nb);
```

#### 637. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7313-L7314` → after: `L7217-L7218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7217-L7218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7217-L7218) · [Before (L7313-L7314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7313-L7314)

```diff
-             range: Ta.mb,
-             format: Ta.N
+             range: sy.ib,
+             format: sy.L
```

#### 638. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7318-L7319` → after: `L7222-L7223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7222-L7223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7222-L7223) · [Before (L7318-L7319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7318-L7319)

```diff
-             range: Ta.mb,
-             format: Ta.N
+             range: sy.ib,
+             format: sy.L
```

#### 639. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7323-L7324` → after: `L7227-L7228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7227-L7228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7227-L7228) · [Before (L7323-L7324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7323-L7324)

```diff
-             range: Ta.m,
-             format: Ta.N
+             range: sy.k,
+             format: sy.L
```

#### 640. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7328` → after: `L7232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7232) · [Before (L7328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7328)

```diff
-             options: Ta.bb,
+             options: sy.Z,
```

#### 641. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7331` → after: `L7235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7235) · [Before (L7331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7331)

```diff
-               (0, mM.p)({
+               (0, vV.n)({
```

#### 642. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7335` → after: `L7239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7239) · [Before (L7335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7335)

```diff
-           }), (0, YM.jsx)(Ia.c, {
+           }), (0, cV.jsx)(Ky.e, {
```

#### 643. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7339` → after: `L7243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7243) · [Before (L7339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7339)

```diff
-               (0, mM.p)({
+               (0, vV.n)({
```

#### 644. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7343` → after: `L7247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7247) · [Before (L7343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7343)

```diff
-           }), (0, YM.jsx)(Ia.c, {
+           }), (0, cV.jsx)(Ky.e, {
```

#### 645. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7347` → after: `L7251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7251) · [Before (L7347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7347)

```diff
-               (0, mM.p)({
+               (0, vV.n)({
```

#### 646. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7354-L7355` → after: `L7258-L7259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7258-L7259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7258-L7259) · [Before (L7354-L7355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7354-L7355)

```diff
-             range: Ta.E,
-             format: Ta.I
+             range: sy.C,
+             format: sy.G
```

#### 647. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7361-L7363` → after: `L7265-L7267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7265-L7267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7265-L7267) · [Before (L7361-L7363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7361-L7363)

```diff
-             range: Ta.E,
-             format: Ta.I
-           }), (0, YM.jsx)(Ia.c, {
+             range: sy.C,
+             format: sy.G
+           }), (0, cV.jsx)(Ky.e, {
```

#### 648. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7367` → after: `L7271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7271) · [Before (L7367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7367)

```diff
-               (0, mM.p)({
+               (0, vV.n)({
```

#### 649. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7374` → after: `L7278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7278) · [Before (L7374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7374)

```diff
-             options: Ta.qb,
+             options: sy.jb,
```

#### 650. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7377` → after: `L7281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7281) · [Before (L7377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7377)

```diff
-               (0, mM.p)({
+               (0, vV.n)({
```

#### 651. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7385` → after: `L7289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7289) · [Before (L7385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7385)

```diff
-             options: Ta.fb,
+             options: sy.cb,
```

#### 652. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7388` → after: `L7292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7292) · [Before (L7388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7388)

```diff
-               (0, mM.p)({
+               (0, vV.n)({
```

#### 653. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7392` → after: `L7296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7296) · [Before (L7392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7392)

```diff
-           }), (0, YM.jsx)(Ia.c, {
+           }), (0, cV.jsx)(Ky.e, {
```

#### 654. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7396` → after: `L7300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7300) · [Before (L7396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7396)

```diff
-               (0, mM.p)({
+               (0, vV.n)({
```

#### 655. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7400` → after: `L7304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7304) · [Before (L7400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7400)

```diff
-           }), (0, YM.jsx)(Ia.c, {
+           }), (0, cV.jsx)(Ky.e, {
```

#### 656. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7404` → after: `L7308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7308) · [Before (L7404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7404)

```diff
-               (0, mM.p)({
+               (0, vV.n)({
```

#### 657. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7411-L7413` → after: `L7315-L7317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7315-L7317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7315-L7317) · [Before (L7411-L7413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7411-L7413)

```diff
-             range: Ta.B,
-             format: Ta.N
-           }), (0, YM.jsx)(Ia.c, {
+             range: sy.z,
+             format: sy.L
+           }), (0, cV.jsx)(Ky.e, {
```

#### 658. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7417` → after: `L7321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7321) · [Before (L7417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7417)

```diff
-               (0, mM.p)({
+               (0, vV.n)({
```

#### 659. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7421` → after: `L7325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7325) · [Before (L7421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7421)

```diff
-           }), (0, YM.jsx)(Ia.c, {
+           }), (0, cV.jsx)(Ky.e, {
```

#### 660. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7425` → after: `L7329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7329) · [Before (L7425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7425)

```diff
-               (0, mM.p)({
+               (0, vV.n)({
```

#### 661. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7431-L7433` → after: `L7335-L7337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7335-L7337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7335-L7337) · [Before (L7431-L7433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7431-L7433)

```diff
-               children: [zM.i.map((iM => (0, YM.jsx)(Ia.c, {
-                 label: MM(Ta.Y[iM]),
-                 checked: (0, zM.G)(iM, rM),
+               children: [wV.f.map((xV => (0, cV.jsx)(Ky.e, {
+                 label: VV(sy.W[xV]),
+                 checked: (0, wV.y)(xV, eV),
```

#### 662. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7435` → after: `L7339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7339) · [Before (L7435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7435)

```diff
-                   OM(!(0, zM.T)(iM, MM))
+                   JV(!(0, wV.H)(xV, VV))
```

#### 663. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7451` → after: `L7355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7355) · [Before (L7451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7451)

```diff
-             options: Ta.cb,
+             options: sy.$,
```

#### 664. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7454` → after: `L7358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7358) · [Before (L7454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7454)

```diff
-               (0, mM.p)({
+               (0, vV.n)({
```

#### 665. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7461` → after: `L7365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7365) · [Before (L7461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7461)

```diff
-             options: Ta.W,
+             options: sy.S,
```

#### 666. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7464` → after: `L7368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7368) · [Before (L7464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7464)

```diff
-               (0, mM.p)({
+               (0, vV.n)({
```

#### 667. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7471` → after: `L7375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7375) · [Before (L7471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7471)

```diff
-             options: Ta.gb,
+             options: sy.db,
```

#### 668. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7474` → after: `L7378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7378) · [Before (L7474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7474)

```diff
-               (0, mM.p)({
+               (0, vV.n)({
```

#### 669. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7481` → after: `L7385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7385) · [Before (L7481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7481)

```diff
-             options: Ta.Z,
+             options: sy.Y,
```

#### 670. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7484` → after: `L7388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7388) · [Before (L7484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7484)

```diff
-               (0, mM.p)({
+               (0, vV.n)({
```

#### 671. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7493-L7495` → after: `L7397-L7399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7397-L7399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7397-L7399) · [Before (L7493-L7495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7493-L7495)

```diff
-     (0, SM.b)(OM);
-     for (const tP of (0, jM.o)()) tP.connected ? aM.g.handleConnectionEvent(tP) : aM.g.handleDisconnectionEvent(tP);
-     const CP = () => null !== aM.g.getActivePad(),
+     (0, YV.c)(JV);
+     for (const Ap of (0, UV.q)()) Ap.connected ? yV.f.handleConnectionEvent(Ap) : yV.f.handleDisconnectionEvent(Ap);
+     const tp = () => null !== yV.f.getActivePad(),
```

#### 672. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7505` → after: `L7409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7409) · [Before (L7505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7505)

```diff
-   8729: (MM, rM, iM) => {
+   8792: (VV, eV, xV) => {
```

#### 673. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7507-L7508` → after: `L7411-L7412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7411-L7412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7411-L7412) · [Before (L7507-L7508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7507-L7508)

```diff
-       c: () => nM,
-       e: () => QM
+       e: () => QV,
+       i: () => nV
```

#### 674. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7510-L7511` → after: `L7414-L7415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7414-L7415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7414-L7415) · [Before (L7510-L7511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7510-L7511)

```diff
-     var OM = iM(1494),
-       SM = iM(1489);
+     var JV = xV(1519),
+       YV = xV(1510);
```

#### 675. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7519` → after: `L7423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7423) · [Before (L7519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7519)

```diff
-         const iM = (0, OM.e)(MM);
+         const xV = (0, JV.d)(VV);
```

#### 676. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7522-L7523` → after: `L7426-L7427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7426-L7427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7426-L7427) · [Before (L7522-L7523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7522-L7523)

```diff
-         if ((0, SM.d)(MM)) return "nintendo";
-         const nM = `${MM} ${null!==rM&&void 0!==rM?rM:""}`.toLowerCase();
+         if ((0, YV.e)(VV)) return "nintendo";
+         const QV = `${VV} ${null!==eV&&void 0!==eV?eV:""}`.toLowerCase();
```

#### 677. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7528` → after: `L7432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7432) · [Before (L7528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7528)

```diff
-         return (null === (rM = (0, OM.e)(MM)) || void 0 === rM ? void 0 : rM.vendor) === aM
+         return (null === (eV = (0, JV.d)(VV)) || void 0 === eV ? void 0 : eV.vendor) === yV
```

#### 678. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7531` → after: `L7435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7435) · [Before (L7531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7531)

```diff
-   8776: (MM, rM, iM) => {
+   8831: (VV, eV, xV) => {
```

#### 679. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7533` → after: `L7437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7437) · [Before (L7533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7533)

```diff
-       d: () => QM,
+       c: () => nV,
```

#### 680. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7536` → after: `L7440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7440) · [Before (L7536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7536)

```diff
-     var OM = iM(8723);
+     var JV = xV(8786);
```

#### 681. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7544` → after: `L7448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7448) · [Before (L7544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7544)

```diff
-         this.consumers = new Map, this.activeName = null, this.sQ = new Array(OM.V).fill(!1), this.previousHeld = new Array(OM.V).fill(!1), this.consumedButtons = new Array(OM.V).fill(!1), this.suppressedReleases = new Array(OM.V).fill(!1), this.wakeOwned = new Array(OM.V).fill(! … [truncated]
+         this.consumers = new Map, this.activeName = null, this.hn = new Array(JV.X).fill(!1), this.previousHeld = new Array(JV.X).fill(!1), this.consumedButtons = new Array(JV.X).fill(!1), this.suppressedReleases = new Array(JV.X).fill(!1), this.wakeOwned = new Array(JV.X).fill(! … [truncated]
```

#### 682. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7547` → after: `L7451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7451) · [Before (L7547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7547)

```diff
-         return this.consumers.has(MM.name) && console.warn(`Controller consumer "${MM.name}" registered twice; the newer one replaces it.`), this.consumers.set(MM.name, MM), () => {
+         return this.consumers.has(VV.name) && console.warn(`Controller consumer "${VV.name}" registered twice; the newer one replaces it.`), this.consumers.set(VV.name, VV), () => {
```

#### 683. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7556` → after: `L7460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7460) · [Before (L7556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7556)

```diff
-         return this.sQ[(0, OM.l)(MM)]
+         return this.hn[(0, JV.n)(VV)]
```

#### 684. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7565` → after: `L7469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7469) · [Before (L7565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7565)

```diff
-         this.deactivateCurrent(), this.activeName = null, this.sQ = new Array(OM.V).fill(!1), this.previousHeld = new Array(OM.V).fill(!1), this.consumedButtons.fill(!1), this.suppressedReleases.fill(!1), this.wakeOwned.fill(!1), this.leftStickConsumed = !1, this.rightStickConsum … [truncated]
+         this.deactivateCurrent(), this.activeName = null, this.hn = new Array(JV.X).fill(!1), this.previousHeld = new Array(JV.X).fill(!1), this.consumedButtons.fill(!1), this.suppressedReleases.fill(!1), this.wakeOwned.fill(!1), this.leftStickConsumed = !1, this.rightStickConsum … [truncated]
```

#### 685. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7569-L7570` → after: `L7473-L7474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7473-L7474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7473-L7474) · [Before (L7569-L7570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7569-L7570)

```diff
-         this.lastFrame = MM, this.previousHeld = this.sQ, this.sQ = (0, OM.p)(MM.values, this.previousHeld);
-         for (let jM = 0; jM < OM.V; jM++) this.suppressedReleases[jM] = !this.sQ[jM] && this.consumedButtons[jM], this.sQ[jM] || (this.consumedButtons[jM] = !1), this.wakeOwned[jM] && (this.sQ[jM] ? (this.consumedButtons[jM] = !0, this.wakeOwned[jM] = !1) : MM.values[jM] < OM.T & … [truncated]
+         this.lastFrame = VV, this.previousHeld = this.hn, this.hn = (0, JV.t)(VV.values, this.previousHeld);
+         for (let UV = 0; UV < JV.X; UV++) this.suppressedReleases[UV] = !this.hn[UV] && this.consumedButtons[UV], this.hn[UV] || (this.consumedButtons[UV] = !1), this.wakeOwned[UV] && (this.hn[UV] ? (this.consumedButtons[UV] = !0, this.wakeOwned[UV] = !1) : VV.values[UV] < JV.W & … [truncated]
```

#### 686. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7580` → after: `L7484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7484) · [Before (L7580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7580)

```diff
-             iM = null !== (aM = null === SM || void 0 === SM || null === (PM = SM.peek) || void 0 === PM ? void 0 : PM.call(SM)) && void 0 !== aM ? aM : null,
+             xV = null !== (yV = null === YV || void 0 === YV || null === (pV = YV.peek) || void 0 === pV ? void 0 : pV.call(YV)) && void 0 !== yV ? yV : null,
```

#### 687. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7582` → after: `L7486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7486) · [Before (L7582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7582)

```diff
-             nM = iM && (iM.over === MM || jM) ? iM : null,
+             QV = xV && (xV.over === VV || UV) ? xV : null,
```

#### 688. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7584-L7585` → after: `L7488-L7489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7488-L7489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7488-L7489) · [Before (L7584-L7585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7584-L7585)

```diff
-           this.deactivateCurrent(null !== nM, null !== HM), this.activeName = null !== (zM = null === SM || void 0 === SM ? void 0 : SM.name) && void 0 !== zM ? zM : null, null === MM || this.handOffPending || this.consumeAllHeld();
-           const hM = null === (LM = null !== nM && void 0 !== nM ? nM : HM) || void 0 === LM ? void 0 : LM.stick;
+           this.deactivateCurrent(null !== QV, null !== rV), this.activeName = null !== (wV = null === YV || void 0 === YV ? void 0 : YV.name) && void 0 !== wV ? wV : null, null === VV || this.handOffPending || this.consumeAllHeld();
+           const kV = null === (ZV = null !== QV && void 0 !== QV ? QV : rV) || void 0 === ZV ? void 0 : ZV.stick;
```

#### 689. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7591` → after: `L7495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7495) · [Before (L7591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7591)

```diff
-           for (let SM = 0; SM < OM.V; SM++) this.previousHeld[SM] && !this.sQ[SM] && (this.suppressedReleases[SM] = !0)
+           for (let YV = 0; YV < JV.X; YV++) this.previousHeld[YV] && !this.hn[YV] && (this.suppressedReleases[YV] = !0)
```

#### 690. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7597` → after: `L7501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7501) · [Before (L7597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7597)

```diff
-         for (let SM = 0; SM < OM.V; SM++) {
+         for (let YV = 0; YV < JV.X; YV++) {
```

#### 691. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7599-L7600` → after: `L7503-L7504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7503-L7504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7503-L7504) · [Before (L7599-L7600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7599-L7600)

```diff
-           const jM = OM.X[SM];
-           (null !== (rM = null === (iM = MM.wakePressActs) || void 0 === iM ? void 0 : iM.call(MM, jM)) && void 0 !== rM ? rM : aM.includes(jM)) || (this.sQ[SM] ? this.consumedButtons[SM] = !0 : this.lastFrame.values[SM] >= OM.Q && (this.wakeOwned[SM] = !0))
+           const UV = JV._[YV];
+           (null !== (eV = null === (xV = VV.wakePressActs) || void 0 === xV ? void 0 : xV.call(VV, UV)) && void 0 !== eV ? eV : yV.includes(UV)) || (this.hn[YV] ? this.consumedButtons[YV] = !0 : this.lastFrame.values[YV] >= JV.S && (this.wakeOwned[YV] = !0))
```

#### 692. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7621` → after: `L7525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7525) · [Before (L7621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7621)

```diff
-         for (let SM = 0; SM < OM.V; SM++) this.sQ[SM] && (this.consumedButtons[SM] = !0);
+         for (let YV = 0; YV < JV.X; YV++) this.hn[YV] && (this.consumedButtons[YV] = !0);
```

#### 693. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7632-L7633` → after: `L7536-L7537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7536-L7537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7536-L7537) · [Before (L7632-L7633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7632-L7633)

```diff
-         const rM = (0, OM.l)(MM);
-         this.sQ[rM] && (this.consumedButtons[rM] = !0)
+         const eV = (0, JV.n)(VV);
+         this.hn[eV] && (this.consumedButtons[eV] = !0)
```

#### 694. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7636` → after: `L7540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7540) · [Before (L7636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7636)

```diff
-         const jM = this.sQ,
+         const UV = this.hn,
```

#### 695. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7638-L7639` → after: `L7542-L7543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7542-L7543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7542-L7543) · [Before (L7638-L7639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7638-L7639)

```diff
-           PM = SM ? new Array(OM.V).fill(!0) : [...this.consumedButtons],
-           nM = SM ? PM : [...this.suppressedReleases],
+           pV = YV ? new Array(JV.X).fill(!0) : [...this.consumedButtons],
+           QV = YV ? pV : [...this.suppressedReleases],
```

#### 696. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7646` → after: `L7550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7550) · [Before (L7646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7646)

```diff
-             const rM = (0, OM.l)(MM);
+             const eV = (0, JV.n)(VV);
```

#### 697. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7650` → after: `L7554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7554) · [Before (L7650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7650)

```diff
-             const rM = (0, OM.l)(MM);
+             const eV = (0, JV.n)(VV);
```

#### 698. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7654` → after: `L7558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7558) · [Before (L7654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7654)

```diff
-             const rM = (0, OM.l)(MM);
+             const eV = (0, JV.n)(VV);
```

#### 699. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7658` → after: `L7562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7562) · [Before (L7658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7658)

```diff
-             const iM = (0, OM.l)(rM);
+             const xV = (0, JV.n)(eV);
```

#### 700. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7674` → after: `L7578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7578) · [Before (L7674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7674)

```diff
-   8743: (MM, rM, iM) => {
+   8811: (VV, eV, xV) => {
```

#### 701. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7676-L7677` → after: `L7580-L7582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7580-L7582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7580-L7582) · [Before (L7676-L7677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7676-L7677)

```diff
-       e: () => LM.f,
-       i: () => LM.j,
+       c: () => ZV.f,
+       g: () => ZV.i,
+       i: () => MV,
```

#### 702. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7679-L7681` → after: `L7584-L7585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7584-L7585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7584-L7585) · [Before (L7679-L7681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7679-L7681)

```diff
-       l: () => uM,
-       p: () => RM,
-       q: () => pM
+       n: () => GV,
+       p: () => WV
```

#### 703. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7683-L7692` → after: `L7587-L7596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7587-L7596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7587-L7596) · [Before (L7683-L7692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7683-L7692)

```diff
-     var OM = iM(44),
-       SM = iM(22),
-       jM = iM(1516),
-       aM = iM(30),
-       PM = iM(8752),
-       nM = iM(8723),
-       QM = iM(8738),
-       zM = iM(8717),
-       LM = iM(2120),
-       mM = iM(8760);
+     var JV = xV(62),
+       YV = xV(32),
+       UV = xV(1542),
+       yV = xV(40),
+       pV = xV(8816),
+       QV = xV(8786),
+       nV = xV(8804),
+       wV = xV(8777),
+       ZV = xV(2147),
+       vV = xV(8825);
```

#### 704. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7729` → after: `L7633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7633) · [Before (L7729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7729)

```diff
-       dM = ["auto", ...PM.c],
+       EV = ["auto", ...pV.d],
```

#### 705. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7731-L7733` → after: `L7635-L7637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7635-L7637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7635-L7637) · [Before (L7731-L7733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7731-L7733)

```diff
-       lM = MM => rM => "number" === typeof rM && Number.isFinite(rM) ? (0, mM.A)(rM, MM) : void 0,
-       EM = MM => "boolean" === typeof MM ? MM : void 0,
-       UM = MM => rM => yM(MM, rM) ? rM : void 0,
+       jV = VV => eV => "number" === typeof eV && Number.isFinite(eV) ? (0, vV.w)(eV, VV) : void 0,
+       qV = VV => "boolean" === typeof VV ? VV : void 0,
+       tV = VV => eV => BV(VV, eV) ? eV : void 0,
```

#### 706. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7735-L7737` → after: `L7639-L7641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7639-L7641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7639-L7641) · [Before (L7735-L7737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7735-L7737)

```diff
-         lookSensitivityX: lM(mM.mb),
-         lookSensitivityY: lM(mM.mb),
-         aimLookSensitivity: lM(mM.m),
+         lookSensitivityX: jV(vV.ib),
+         lookSensitivityY: jV(vV.ib),
+         aimLookSensitivity: jV(vV.k),
```

#### 707. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7740-L7742` → after: `L7644-L7646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7644-L7646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7644-L7646) · [Before (L7740-L7742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7740-L7742)

```diff
-         lookCurve: UM(nM.O),
-         lookDeadzone: lM(mM.E),
-         moveDeadzone: lM(mM.E),
+         lookCurve: tV(QV.Q),
+         lookDeadzone: jV(vV.C),
+         moveDeadzone: jV(vV.C),
```

#### 708. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7751` → after: `L7655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7655) · [Before (L7751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7751)

```diff
-         cursorSpeed: lM(mM.B),
+         cursorSpeed: jV(vV.z),
```

#### 709. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7753` → after: `L7657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7657) · [Before (L7753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7753)

```diff
-         buttonRepeat: UM(nM.o),
+         buttonRepeat: tV(QV.r),
```

#### 710. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7762` → after: `L7666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7666) · [Before (L7762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7762)

```diff
-         gyroSensitivity: lM(mM.S),
+         gyroSensitivity: jV(vV.R),
```

#### 711. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7764` → after: `L7668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7668) · [Before (L7764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7764)

```diff
-         gyroButton: UM(nM.X),
+         gyroButton: tV(QV._),
```

#### 712. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7789` → after: `L7693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7693) · [Before (L7789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7789)

```diff
-         for (const [iM, OM] of Object.entries(MM)) Object.prototype.hasOwnProperty.call(QM.c, iM) && yM(nM.X, OM) && (rM[iM] = OM);
+         for (const [xV, JV] of Object.entries(VV)) Object.prototype.hasOwnProperty.call(nV.d, xV) && BV(QV._, JV) && (eV[xV] = JV);
```

#### 713. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7795` → after: `L7699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7699) · [Before (L7795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7795)

```diff
-         0 !== Object.keys(rM).length ? aM.g.setItem(hM, rM) : aM.g.removeItem(hM)
+         0 !== Object.keys(eV).length ? yV.m.setItem(kV, eV) : yV.m.removeItem(kV)
```

#### 714. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7798` → after: `L7702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7702) · [Before (L7798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7798)

```diff
-         const MM = aM.g.getItem(hM),
+         const VV = yV.m.getItem(kV),
```

#### 715. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7800` → after: `L7704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7704) · [Before (L7800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7800)

```diff
-             const rM = "object" === typeof MM && null !== MM ? MM : {},
+             const eV = "object" === typeof VV && null !== VV ? VV : {},
```

#### 716. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7810` → after: `L7714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7714) · [Before (L7810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7810)

```diff
-             return OM.length > 0 && console.warn(`Stored controller settings had invalid values, replaced with defaults: ${OM.join(", ")}`), iM
+             return JV.length > 0 && console.warn(`Stored controller settings had invalid values, replaced with defaults: ${JV.join(", ")}`), xV
```

#### 717. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7835` → after: `L7739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7739) · [Before (L7835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7835)

```diff
-         return "auto" !== iM ? iM : null !== (MM = null === (rM = zM.g.getActivePad()) || void 0 === rM ? void 0 : rM.family) && void 0 !== MM ? MM : "xbox"
+         return "auto" !== xV ? xV : null !== (VV = null === (eV = wV.f.getActivePad()) || void 0 === eV ? void 0 : eV.family) && void 0 !== VV ? VV : "xbox"
```

#### 718. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7846` → after: `L7750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7750) · [Before (L7846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7846)

```diff
-           SM.i.Tz(LM.j, tM), JM.some((rM => MM[rM] !== tM[rM])) && SM.i.Tz(LM.f, tM)
+           YV.h.QZ(ZV.i, XV), bV.some((eV => VV[eV] !== XV[eV])) && YV.h.QZ(ZV.f, XV)
```

#### 719. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7851` → after: `L7755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7755) · [Before (L7851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7851)

```diff
-         return (0, jM.d)(LM.j, rM), MM
+         return (0, UV.g)(ZV.i, eV), VV
```

#### 720. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7854` → after: `L7758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7758) · [Before (L7854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7854)

```diff
-   9255: (MM, rM, iM) => {
+   9274: (VV, eV, xV) => {
```

#### 721. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7856` → after: `L7760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7760) · [Before (L7856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7856)

```diff
-       e: () => SM
+       d: () => YV
```

#### 722. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7861` → after: `L7765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7765) · [Before (L7861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7861)

```diff
-   8717: (MM, rM, iM) => {
+   8777: (VV, eV, xV) => {
```

#### 723. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7864` → after: `L7768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7768) · [Before (L7864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7864)

```diff
-       g: () => EM
+       f: () => qV
```

#### 724. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7866-L7867` → after: `L7770-L7771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7770-L7771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7770-L7771) · [Before (L7866-L7867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7866-L7867)

```diff
-     var OM = iM(8723),
-       SM = iM(8729);
+     var JV = xV(8786),
+       YV = xV(8792);
```

#### 725. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7901` → after: `L7805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7805) · [Before (L7901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7901)

```diff
-         return null !== (iM = MM && (null === (OM = Object.getOwnPropertyDescriptor(MM, rM)) || void 0 === OM ? void 0 : OM.get)) && void 0 !== iM ? iM : null
+         return null !== (xV = VV && (null === (JV = Object.getOwnPropertyDescriptor(VV, eV)) || void 0 === JV ? void 0 : JV.get)) && void 0 !== xV ? xV : null
```

#### 726. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7905` → after: `L7809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7809) · [Before (L7905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7905)

```diff
-         return "string" === typeof rM ? rM : void 0
+         return "string" === typeof eV ? eV : void 0
```

#### 727. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7937-L7938` → after: `L7841-L7842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7841-L7842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7841-L7842) · [Before (L7937-L7938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7937-L7938)

```diff
-     var mM = iM(1482),
-       HM = iM(1489);
+     var vV = xV(1501),
+       rV = xV(1510);
```

#### 728. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7943` → after: `L7847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7847) · [Before (L7943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7943)

```diff
-     var JM = iM(2120);
+     var bV = xV(2147);
```

#### 729. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7946-L7947` → after: `L7850-L7851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7850-L7851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7850-L7851) · [Before (L7946-L7947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7946-L7947)

```diff
-         const rM = new Array(OM.V).fill(0);
-         for (let iM = 0; iM < OM.V && iM < MM.buttons.length; iM++) {
+         const eV = new Array(JV.X).fill(0);
+         for (let xV = 0; xV < JV.X && xV < VV.buttons.length; xV++) {
```

#### 730. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7949` → after: `L7853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7853) · [Before (L7949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7949)

```diff
-           rM[iM] = SM.pressed && !(0, OM.N)(iM) ? Math.max(SM.value, OM.z) : SM.value
+           eV[xV] = YV.pressed && !(0, JV.P)(xV) ? Math.max(YV.value, JV.C) : YV.value
```

#### 731. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7956-L7957` → after: `L7860-L7861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7860-L7861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7860-L7861) · [Before (L7956-L7957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7956-L7957)

```diff
-           x: null !== (iM = MM.axes[rM]) && void 0 !== iM ? iM : 0,
-           y: null !== (OM = MM.axes[rM + 1]) && void 0 !== OM ? OM : 0
+           x: null !== (xV = VV.axes[eV]) && void 0 !== xV ? xV : 0,
+           y: null !== (JV = VV.axes[eV + 1]) && void 0 !== JV ? JV : 0
```

#### 732. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7967` → after: `L7871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7871) · [Before (L7967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7967)

```diff
-         }, this.bL = MM => {
+         }, this.iZ = VV => {
```

#### 733. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7974` → after: `L7878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7878) · [Before (L7974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L7974)

```diff
-             this.anyPadConnected && (this.rafId = requestAnimationFrame(this.bL))
+             this.anyPadConnected && (this.rafId = requestAnimationFrame(this.iZ))
```

#### 734. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8012` → after: `L7916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7916) · [Before (L8012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8012)

```diff
-         return rM && rM.id === this.activeInfo.id ? MM : null
+         return eV && eV.id === this.activeInfo.id ? VV : null
```

#### 735. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8032` → after: `L7936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7936) · [Before (L8032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8032)

```diff
-             sQ: [],
+             hn: [],
```

#### 736. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8042-L8043` → after: `L7946-L7947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7946-L7947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7946-L7947) · [Before (L8042-L8043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8042-L8043)

```diff
-             hM = (0, OM.p)(HM, SM.sQ),
-             JM = SM.sQ,
+             kV = (0, JV.t)(rV, YV.hn),
+             bV = YV.hn,
```

#### 737. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8045` → after: `L7949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7949) · [Before (L8045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8045)

```diff
-           SM.sQ = hM;
+           YV.hn = kV;
```

#### 738. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8061` → after: `L7965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7965) · [Before (L8061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8061)

```diff
-         const HM = null !== (iM = null === (SM = aM) || void 0 === SM ? void 0 : SM.slot.sQ) && void 0 !== iM ? iM : [],
+         const rV = null !== (xV = null === (YV = yV) || void 0 === YV ? void 0 : YV.slot.hn) && void 0 !== xV ? xV : [],
```

#### 739. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8075` → after: `L7979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7979) · [Before (L8075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8075)

```diff
-           const aM = (0, OM.v)(rM);
+           const yV = (0, JV.z)(eV);
```

#### 740. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8082` → after: `L7986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7986) · [Before (L8082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8082)

```diff
-         return rM && (0, HM.f)(rM) ? (MM => {
+         return eV && (0, rV.g)(eV) ? (VV => {
```

#### 741. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8085` → after: `L7989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7989) · [Before (L8085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8085)

```diff
-               return null !== (iM = MM.buttons[rM]) && void 0 !== iM ? iM : hM(!1)
+               return null !== (xV = VV.buttons[eV]) && void 0 !== xV ? xV : kV(!1)
```

#### 742. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8089` → after: `L7993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L7993) · [Before (L8089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8089)

```diff
-               return null !== (iM = MM.axes[rM]) && void 0 !== iM ? iM : 0
+               return null !== (xV = VV.axes[eV]) && void 0 !== xV ? xV : 0
```

#### 743. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8137` → after: `L8041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L8041) · [Before (L8137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8137)

```diff
-         return !(0, mM.h)(MM.id) && ("standard" !== MM.mapping ? (this.warnedNonStandardIds.has(MM.id) || (this.warnedNonStandardIds.add(MM.id), console.warn(`Controller "${MM.id}" has no standard button mapping, so it is ignored.`)), !1) : !this.requireTrustedPads || this.truste … [truncated]
+         return !(0, vV.d)(VV.id) && ("standard" !== VV.mapping ? (this.warnedNonStandardIds.has(VV.id) || (this.warnedNonStandardIds.add(VV.id), console.warn(`Controller "${VV.id}" has no standard button mapping, so it is ignored.`)), !1) : !this.requireTrustedPads || this.truste … [truncated]
```

#### 744. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8143` → after: `L8047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L8047) · [Before (L8143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8143)

```diff
-           family: (0, SM.c)(MM.id, MM.vendorName)
+           family: (0, YV.e)(VV.id, VV.vendorName)
```

#### 745. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8155` → after: `L8059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L8059) · [Before (L8155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8155)

```diff
-         this.running && 0 === this.rafId && (this.lastTimestampMs = 0, this.rafId = requestAnimationFrame(this.bL))
+         this.running && 0 === this.rafId && (this.lastTimestampMs = 0, this.rafId = requestAnimationFrame(this.iZ))
```

#### 746. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8160` → after: `L8064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L8064) · [Before (L8160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8160)

```diff
-   9347: (MM, rM, iM) => {
+   9355: (VV, eV, xV) => {
```

#### 747. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8163-L8165` → after: `L8068-L8069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8068-L8069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L8068-L8069) · [Before (L8163-L8165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8163-L8165)

```diff
-       f: () => aM,
-       g: () => PM,
-       i: () => SM
+       e: () => pV,
+       h: () => YV
```

#### 748. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8167` → after: `L8071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L8071) · [Before (L8167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8167)

```diff
-     var OM = iM(9349);
+     var JV = xV(9363);
```

#### 749. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8176` → after: `L8080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L8080) · [Before (L8176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8176)

```diff
-         for (const jM of null !== (iM = null === (SM = MM.customButtons) || void 0 === SM ? void 0 : SM.filter(OM.d)) && void 0 !== iM ? iM : []) {
+         for (const UV of null !== (xV = null === (YV = VV.customButtons) || void 0 === YV ? void 0 : YV.filter(JV.d)) && void 0 !== xV ? xV : []) {
```

#### 750. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8204` → after: `L8108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L8108) · [Before (L8204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8204)

```diff
-   9264: (MM, rM, iM) => {
+   9281: (VV, eV, xV) => {
```

#### 751. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8206` → after: `L8110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L8110) · [Before (L8206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8206)

```diff
-       c: () => OM
+       b: () => JV
```

#### 752. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8223` → after: `L8127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L8127) · [Before (L8223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8223)

```diff
-   9339: (MM, rM, iM) => {
+   9346: (VV, eV, xV) => {
```

#### 753. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8226-L8228` → after: `L8131-L8132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8131-L8132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L8131-L8132) · [Before (L8226-L8228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8226-L8228)

```diff
-       g: () => HM,
-       j: () => LM,
-       l: () => hM
+       e: () => ZV,
+       f: () => kV
```

#### 754. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8230-L8234` → after: `L8134-L8138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8134-L8138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L8134-L8138) · [Before (L8230-L8234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8230-L8234)

```diff
-     var OM = iM(44),
-       SM = iM(22),
-       jM = iM(1516),
-       aM = iM(9347),
-       PM = iM(9353);
+     var JV = xV(62),
+       YV = xV(32),
+       UV = xV(1542),
+       yV = xV(9355),
+       pV = xV(9372);
```

#### 755. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8238` → after: `L8142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L8142) · [Before (L8238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8238)

```diff
-         (0, aM.g)(nM, MM) || (nM = MM, SM.i.Tz(PM.g, nM))
+         (0, yV.e)(QV, VV) || (QV = VV, YV.h.QZ(pV.e, QV))
```

#### 756. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8242` → after: `L8146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L8146) · [Before (L8242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8242)

```diff
-         return (0, jM.d)(PM.g, rM), MM
+         return (0, UV.g)(pV.e, eV), VV
```

#### 757. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8246` → after: `L8150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L8150) · [Before (L8246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8246)

```diff
-         MM !== mM && (mM = MM, SM.i.Tz(PM.i, MM))
+         VV !== vV && (vV = VV, YV.h.QZ(pV.h, VV))
```

#### 758. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8250` → after: `L8154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L8154) · [Before (L8250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8250)

```diff
-         return (0, jM.d)(PM.i, rM), MM
+         return (0, UV.g)(pV.h, eV), VV
```

#### 759. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8253` → after: `L8157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L8157) · [Before (L8253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8253)

```diff
-   9362: (MM, rM, iM) => {
+   9386: (VV, eV, xV) => {
```

#### 760. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8256` → after: `L8160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L8160) · [Before (L8256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8256)

```diff
-       g: () => PM
+       e: () => pV
```

#### 761. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8258-L8259` → after: `L8162-L8163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8162-L8163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L8162-L8163) · [Before (L8258-L8259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8258-L8259)

```diff
-     var OM = iM(22),
-       SM = iM(9353);
+     var JV = xV(32),
+       YV = xV(9372);
```

#### 762. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8263` → after: `L8167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L8167) · [Before (L8263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8263)

```diff
-         MM !== jM && (jM = MM, OM.i.Tz(SM.k, jM))
+         VV !== UV && (UV = VV, JV.h.QZ(YV.j, UV))
```

#### 763. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8266` → after: `L8170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L8170) · [Before (L8266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8266)

```diff
-   9357: (MM, rM, iM) => {
+   9379: (VV, eV, xV) => {
```

#### 764. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8268-L8269` → after: `L8172-L8173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8172-L8173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L8172-L8173) · [Before (L8268-L8269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8268-L8269)

```diff
-       c: () => PM,
-       g: () => nM
+       e: () => pV,
+       f: () => QV
```

#### 765. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8271-L8272` → after: `L8175-L8176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8175-L8176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L8175-L8176) · [Before (L8271-L8272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8271-L8272)

```diff
-     var OM = iM(22),
-       SM = iM(9353);
+     var JV = xV(32),
+       YV = xV(9372);
```

#### 766. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8280` → after: `L8184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L8184) · [Before (L8280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8280)

```diff
-         }, OM.i.Tz(SM.o, jM))
+         }, JV.h.QZ(YV.l, UV))
```

#### 767. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8283` → after: `L8187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L8187) · [Before (L8283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8283)

```diff
-   9353: (MM, rM, iM) => {
+   9372: (VV, eV, xV) => {
```

#### 768. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8286-L8291` → after: `L8190-L8195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8190-L8195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L8190-L8195) · [Before (L8286-L8291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8286-L8291)

```diff
-       g: () => OM,
-       i: () => SM,
-       k: () => PM,
-       o: () => nM,
-       q: () => QM,
-       t: () => aM
+       e: () => JV,
+       h: () => YV,
+       j: () => pV,
+       l: () => QV,
+       n: () => nV,
+       o: () => yV
```

#### 769. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8301` → after: `L8205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L8205) · [Before (L8301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8301)

```diff
-   9364: (MM, rM, iM) => {
+   9390: (VV, eV, xV) => {
```

#### 770. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8303` → after: `L8207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L8207) · [Before (L8303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8303)

```diff
-       b: () => aM,
+       e: () => yV,
```

#### 771. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8306-L8307` → after: `L8210-L8211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8210-L8211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L8210-L8211) · [Before (L8306-L8307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8306-L8307)

```diff
-     var OM = iM(22),
-       SM = iM(9353);
+     var JV = xV(32),
+       YV = xV(9372);
```

#### 772. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8311` → after: `L8215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L8215) · [Before (L8311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8311)

```diff
-         MM !== jM && (jM = MM, OM.i.Tz(SM.q, jM))
+         VV !== UV && (UV = VV, JV.h.QZ(YV.n, UV))
```

#### 773. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8314` → after: `L8218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L8218) · [Before (L8314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8314)

```diff
-   9425: (MM, rM, iM) => {
+   9435: (VV, eV, xV) => {
```

#### 774. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8316-L8317` → after: `L8220-L8221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8220-L8221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L8220-L8221) · [Before (L8316-L8317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8316-L8317)

```diff
-       c: () => aM,
-       g: () => PM
+       d: () => yV,
+       h: () => pV
```

#### 775. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8319-L8320` → after: `L8223-L8224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8223-L8224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L8223-L8224) · [Before (L8319-L8320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8319-L8320)

```diff
-     var OM = iM(22),
-       SM = iM(9353);
+     var JV = xV(32),
+       YV = xV(9372);
```

#### 776. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8324` → after: `L8228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L8228) · [Before (L8324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8324)

```diff
-         MM !== jM && (jM = MM, OM.i.Tz(SM.t, jM))
+         VV !== UV && (UV = VV, JV.h.QZ(YV.o, UV))
```

#### 777. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8327` → after: `L8231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L8231) · [Before (L8327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8327)

```diff
-   9322: (MM, rM, iM) => {
+   9326: (VV, eV, xV) => {
```

#### 778. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8329` → after: `L8233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L8233) · [Before (L8329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8329)

```diff
-       c: () => OM
+       d: () => JV
```

#### 779. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8346` → after: `L8250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L8250) · [Before (L8346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8346)

```diff
-   8800: (MM, rM, iM) => {
+   8852: (VV, eV, xV) => {
```

#### 780. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8348-L8349` → after: `L8252-L8253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8252-L8253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L8252-L8253) · [Before (L8348-L8349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8348-L8349)

```diff
-       e: () => LM,
-       f: () => mM,
+       d: () => ZV,
+       g: () => vV,
```

#### 781. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8351-L8352` → after: `L8255-L8256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8255-L8256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L8255-L8256) · [Before (L8351-L8352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8351-L8352)

```diff
-       m: () => EM,
-       o: () => lM
+       j: () => qV,
+       n: () => jV
```

#### 782. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8354-L8356` → after: `L8258-L8260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8258-L8260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L8258-L8260) · [Before (L8354-L8356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8354-L8356)

```diff
-     var OM = iM(30),
-       SM = iM(8752),
-       jM = iM(8723);
+     var JV = xV(40),
+       YV = xV(8816),
+       UV = xV(8786);
```

#### 783. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8359` → after: `L8263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L8263) · [Before (L8359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8359)

```diff
-           return iM(8805)
+           return xV(8859)
```

#### 784. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8364` → after: `L8268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L8268) · [Before (L8364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8364)

```diff
-       PM = [...jM.X, "LeftStick", "RightStick"],
+       pV = [...UV._, "LeftStick", "RightStick"],
```

#### 785. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8386` → after: `L8290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L8290) · [Before (L8386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8386)

```diff
-         return null !== (iM = null === (OM = zM[QM[MM]]) || void 0 === OM ? void 0 : OM[rM]) && void 0 !== iM ? iM : 1
+         return null !== (xV = null === (JV = wV[nV[VV]]) || void 0 === JV ? void 0 : JV[eV]) && void 0 !== xV ? xV : 1
```

#### 786. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8389` → after: `L8293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L8293) · [Before (L8389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8389)

```diff
-         const iM = `./${QM[MM]}/${rM}.svg`;
+         const xV = `./${nV[VV]}/${eV}.svg`;
```

#### 787. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8410` → after: `L8314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L8314) · [Before (L8410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8410)

```diff
-         MM !== yM && (yM = MM, OM.g.setItem(dM, MM), JM(MM))
+         VV !== BV && (BV = VV, JV.m.setItem(EV, VV), bV(VV))
```

#### 788. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8413-L8414` → after: `L8317-L8318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8317-L8318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L8317-L8318) · [Before (L8413-L8414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8413-L8414)

```diff
-         const MM = OM.g.getItem(dM);
-         (0, SM.e)(MM) && MM !== yM && (yM = MM, JM(MM))
+         const VV = JV.m.getItem(EV);
+         (0, YV.h)(VV) && VV !== BV && (BV = VV, bV(VV))
```

#### 789. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8417` → after: `L8321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L8321) · [Before (L8417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8417)

```diff
-   9451: (MM, rM, iM) => {
+   9462: (VV, eV, xV) => {
```

#### 790. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8419-L8420` → after: `L8323-L8324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8323-L8324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L8323-L8324) · [Before (L8419-L8420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8419-L8420)

```diff
-       b: () => fM,
-       d: () => YM
+       c: () => oV,
+       e: () => cV
```

#### 791. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8422-L8428` → after: `L8326-L8332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8326-L8332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L8326-L8332) · [Before (L8422-L8428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8422-L8428)

```diff
-     var OM = iM(44),
-       SM = iM(22),
-       jM = iM(1516),
-       aM = iM(8731),
-       PM = iM(8717),
-       nM = iM(8776),
-       QM = iM(8743);
+     var JV = xV(62),
+       YV = xV(32),
+       UV = xV(1542),
+       yV = xV(8796),
+       pV = xV(8777),
+       QV = xV(8831),
+       nV = xV(8811);
```

#### 792. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8453` → after: `L8357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L8357) · [Before (L8453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8453)

```diff
-         return 0 === rM ? zM : HM(MM, 1 / rM)
+         return 0 === eV ? wV : rV(VV, 1 / eV)
```

#### 793. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8608-L8609` → after: `L8512-L8513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8512-L8513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L8512-L8513) · [Before (L8608-L8609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8608-L8609)

```diff
-         aM = null !== (iM = MM.beta) && void 0 !== iM ? iM : 0,
-         PM = null !== (OM = MM.gamma) && void 0 !== OM ? OM : 0;
+         yV = null !== (xV = VV.beta) && void 0 !== xV ? xV : 0,
+         pV = null !== (JV = VV.gamma) && void 0 !== JV ? JV : 0;
```

#### 794. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8613` → after: `L8517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L8517) · [Before (L8613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8613)

```diff
-         z: null !== (SM = MM.alpha) && void 0 !== SM ? SM : 0
+         z: null !== (YV = VV.alpha) && void 0 !== YV ? YV : 0
```

#### 795. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8616` → after: `L8520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L8520) · [Before (L8616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8616)

```diff
-     var wM = iM(9453);
+     var NV = xV(9467);
```

#### 796. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8644` → after: `L8548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L8548) · [Before (L8644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8644)

```diff
-           filters: wM.j
+           filters: NV.l
```

#### 797. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8653` → after: `L8557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L8557) · [Before (L8653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8653)

```diff
-         return (await this.hid.getDevices()).some((MM => null !== (0, wM.e)(MM.vendorId, MM.productId)))
+         return (await this.hid.getDevices()).some((VV => null !== (0, NV.g)(VV.vendorId, VV.productId)))
```

#### 798. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8662` → after: `L8566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L8566) · [Before (L8662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8662)

```diff
-         const rM = (0, wM.e)(MM.vendorId, MM.productId);
+         const eV = (0, NV.g)(VV.vendorId, VV.productId);
```

#### 799. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8690` → after: `L8594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L8594) · [Before (L8690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8690)

```diff
-           console.warn(`Could not turn on motion for ${rM}`, SM), this.controllers.get(MM) === OM && (this.forget(OM), this.onControllersChanged())
+           console.warn(`Could not turn on motion for ${eV}`, YV), this.controllers.get(VV) === JV && (this.forget(JV), this.onControllersChanged())
```

#### 800. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8698-L8700` → after: `L8602-L8604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8602-L8604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L8602-L8604) · [Before (L8698-L8700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8698-L8700)

```diff
-         if ((0, wM.g)(iM))
-           for (const OM of wM.y[iM]) await rM.receiveFeatureReport(OM).catch((MM => {
-             console.debug(`Motion controller feature report ${OM} unavailable`, MM)
+         if ((0, NV.k)(xV))
+           for (const JV of NV.v[xV]) await eV.receiveFeatureReport(JV).catch((VV => {
+             console.debug(`Motion controller feature report ${JV} unavailable`, VV)
```

#### 801. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8708` → after: `L8612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L8612) · [Before (L8708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8708)

```diff
-               of wM.A) await rM.sendReport(wM.E, (0, wM.d)(this.switchPacketCounter++, MM, iM)), await new Promise((MM => {
+               of NV.x) await eV.sendReport(NV.A, (0, NV.e)(this.switchPacketCounter++, VV, xV)), await new Promise((VV => {
```

#### 802. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8718-L8719` → after: `L8622-L8623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8622-L8623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L8622-L8623) · [Before (L8718-L8719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8718-L8719)

```diff
-         if (null !== SM && OM > 0 && (SM = Math.max(.001, Math.min(.017, OM / iM.readings.length))), null === SM && null !== iM.sensorClock && (0, wM.g)(MM.kind)) {
-           const rM = (0, wM.v)(MM.kind, MM.lastClock, iM.sensorClock);
+         if (null !== YV && JV > 0 && (YV = Math.max(.001, Math.min(.017, JV / xV.readings.length))), null === YV && null !== xV.sensorClock && (0, NV.k)(VV.kind)) {
+           const eV = (0, NV.u)(VV.kind, VV.lastClock, xV.sensorClock);
```

#### 803. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8725` → after: `L8629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L8629) · [Before (L8725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8725)

```diff
-             this.sink(aM, null !== (jM = SM) && void 0 !== jM ? jM : OM, `hid${MM.openedOrder}`)
+             this.sink(yV, null !== (UV = YV) && void 0 !== UV ? UV : JV, `hid${VV.openedOrder}`)
```

#### 804. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8729` → after: `L8633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L8633) · [Before (L8729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8729)

```diff
-         const iM = MM => 1e6 * wM.o[MM.kind] + MM.openedOrder;
+         const xV = VV => 1e6 * NV.q[VV.kind] + VV.openedOrder;
```

#### 805. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8735` → after: `L8639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L8639) · [Before (L8735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8735)

```diff
-     var gM = iM(83);
+     var MV = xV(99);
```

#### 806. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8741` → after: `L8645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L8645) · [Before (L8741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8741)

```diff
-         return "number" === typeof rM ? rM : "number" === typeof window.orientation ? window.orientation : 0
+         return "number" === typeof eV ? eV : "number" === typeof window.orientation ? window.orientation : 0
```

#### 807. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8806-L8807` → after: `L8710-L8711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8710-L8711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L8710-L8711) · [Before (L8806-L8807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8806-L8807)

```diff
-         PD: 0,
-         nD: 0
+         uR: 0,
+         eD: 0
```

#### 808. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8816` → after: `L8720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L8720) · [Before (L8816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8816)

```diff
-           const rM = MM.gyroAiming && PM.g.hasConnectedPad();
+           const eV = VV.gyroAiming && pV.f.hasConnectedPad();
```

#### 809. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8828` → after: `L8732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L8732) · [Before (L8828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8828)

```diff
-           SM.i.Tz(sM, this.getStatus())
+           YV.h.QZ(gV, this.getStatus())
```

#### 810. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8832` → after: `L8736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L8736) · [Before (L8832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8832)

```diff
-             return "undefined" !== typeof navigator && window.isSecureContext && null !== (MM = navigator.hid) && void 0 !== MM ? MM : null
+             return "undefined" !== typeof navigator && window.isSecureContext && null !== (VV = navigator.hid) && void 0 !== VV ? VV : null
```

#### 811. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8841-L8843` → after: `L8745-L8747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8745-L8747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L8745-L8747) · [Before (L8841-L8843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8841-L8843)

```diff
-         }), this.publishStatus) : null, SM.i.subscribe(QM.i, this.syncWithSettings), PM.g.onConnectedPadsChanged((() => {
-           this.syncWithSettings((0, QM.j)()), this.publishStatus()
-         })), this.syncWithSettings((0, QM.j)())
+         }), this.publishStatus) : null, YV.h.subscribe(nV.g, this.syncWithSettings), pV.f.onConnectedPadsChanged((() => {
+           this.syncWithSettings((0, nV.i)()), this.publishStatus()
+         })), this.syncWithSettings((0, nV.i)())
```

#### 812. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8855-L8857` → after: `L8759-L8761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8759-L8761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L8759-L8761) · [Before (L8855-L8857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8855-L8857)

```diff
-           controllers: null !== (MM = null === (rM = this.hid) || void 0 === rM ? void 0 : rM.getConnectedKinds()) && void 0 !== MM ? MM : [],
-           phoneMotion: null !== (iM = null === (OM = this.phone) || void 0 === OM ? void 0 : OM.getState()) && void 0 !== iM ? iM : "off",
-           padConnected: PM.g.hasConnectedPad()
+           controllers: null !== (VV = null === (eV = this.hid) || void 0 === eV ? void 0 : eV.getConnectedKinds()) && void 0 !== VV ? VV : [],
+           phoneMotion: null !== (xV = null === (JV = this.phone) || void 0 === JV ? void 0 : JV.getState()) && void 0 !== xV ? xV : "off",
+           padConnected: pV.f.hasConnectedPad()
```

#### 813. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8878` → after: `L8782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L8782) · [Before (L8878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8878)

```diff
-         const iM = (0, QM.j)();
+         const xV = (0, nV.i)();
```

#### 814. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8886` → after: `L8790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L8790) · [Before (L8886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8886)

```diff
-           return "always" === rM || iM("aiming" === rM ? OM : SM)
+           return "always" === eV || xV("aiming" === eV ? JV : YV)
```

#### 815. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8889-L8890` → after: `L8793-L8794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8793-L8794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L8793-L8794) · [Before (L8889-L8890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8889-L8890)

```diff
-           isHeld: MM => nM.d.isButtonHeld(MM),
-           useButton: (0, aM.m)("use"),
+           isHeld: VV => QV.c.isButtonHeld(VV),
+           useButton: (0, yV.i)("use"),
```

#### 816. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8893-L8894` → after: `L8797-L8798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8797-L8798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L8797-L8798) · [Before (L8893-L8894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8893-L8894)

```diff
-           PD: -MM.yawDeg * rM * LM,
-           nD: -MM.pitchDeg * rM * LM
+           uR: -VV.yawDeg * eV * ZV,
+           eD: -VV.pitchDeg * eV * ZV
```

#### 817. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8916` → after: `L8820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L8820) · [Before (L8916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8916)

```diff
-         return (0, jM.d)(sM, rM), (0, OM.useEffect)((() => {
+         return (0, UV.g)(gV, eV), (0, JV.useEffect)((() => {
```

#### 818. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8921` → after: `L8825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L8825) · [Before (L8921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8921)

```diff
-   9453: (MM, rM, iM) => {
+   9467: (VV, eV, xV) => {
```

#### 819. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8928` → after: `L8830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L8830) · [Before (L8928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8928)

```diff
-       j: () => PM,
+       k: () => JV,
```

#### 820. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8933` → after: `L8837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L8837) · [Before (L8933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8933)

```diff
-       y: () => eM
+       x: () => TV
```

#### 821. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8983` → after: `L8887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L8887) · [Before (L8983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L8983)

```diff
-         return null !== (iM = null === (OM = aM.find((iM => iM.vendorId === MM && iM.productId === rM))) || void 0 === OM ? void 0 : OM.kind) && void 0 !== iM ? iM : null
+         return null !== (xV = null === (JV = yV.find((xV => xV.vendorId === VV && xV.productId === eV))) || void 0 === JV ? void 0 : JV.kind) && void 0 !== xV ? xV : null
```

#### 822. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9066` → after: `L8970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L8970) · [Before (L9066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9066)

```diff
-   8785: (MM, rM, iM) => {
+   8836: (VV, eV, xV) => {
```

#### 823. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9074-L9080` → after: `L8977-L8984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8977-L8984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L8977-L8984) · [Before (L9074-L9080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9074-L9080)

```diff
-       m: () => eM,
-       q: () => NM,
-       u: () => HM.t,
-       v: () => HM.y,
-       y: () => FM,
-       A: () => HM.B,
-       D: () => WM
+       l: () => oV,
+       p: () => PV,
+       r: () => hV,
+       u: () => rV.w,
+       w: () => rV.E,
+       x: () => mV,
+       y: () => rV.L,
+       A: () => RV
```

#### 824. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9082-L9087` → after: `L8986-L8992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8986-L8992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L8986-L8992) · [Before (L9082-L9087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9082-L9087)

```diff
-     var OM = iM(44),
-       SM = iM(19),
-       jM = iM(22),
-       aM = iM(1516),
-       PM = iM(1313),
-       nM = iM(8743),
+     var JV = xV(62),
+       YV = xV(27),
+       UV = xV(32),
+       yV = xV(1542),
+       pV = xV(1332),
+       QV = xV(8811),
+       nV = xV(8843),
```

#### 825. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9089-L9096` → after: `L8994-L9000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8994-L9000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L8994-L9000) · [Before (L9089-L9096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9089-L9096)

```diff
-       zM = iM(8729),
-       LM = iM(8717),
-       mM = iM(8800),
-       HM = iM(1464),
-       hM = iM(8723),
-       JM = iM(9255),
-       dM = iM(4735),
-       yM = iM(103);
+       ZV = xV(8777),
+       vV = xV(8852),
+       rV = xV(1473),
+       kV = xV(8786),
+       bV = xV(9274),
+       EV = xV(4807),
+       BV = xV(115);
```

#### 826. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9107` → after: `L9011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9011) · [Before (L9107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9107)

```diff
-     const EM = MM => MM.values.flatMap(((MM, rM) => MM >= hM.Q ? [String(rM)] : [])).join(",") || "none",
+     const qV = VV => VV.values.flatMap(((VV, eV) => VV >= kV.S ? [String(eV)] : [])).join(",") || "none",
```

#### 827. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9109` → after: `L9013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9013) · [Before (L9109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9109)

```diff
-         const aM = (0, HM.d)(),
+         const yV = (0, rV.i)(),
```

#### 828. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9112` → after: `L9016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9016) · [Before (L9112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9112)

```diff
-         Promise.all([Promise.resolve().then((() => iM(3241))), Promise.resolve().then((() => iM(1329))), Promise.resolve().then((() => iM(119)))]).then((iM => {
+         Promise.all([Promise.resolve().then((() => xV(3245))), Promise.resolve().then((() => xV(1353))), Promise.resolve().then((() => xV(138)))]).then((xV => {
```

#### 829. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9120` → after: `L9024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9024) · [Before (L9120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9120)

```diff
-           QM(MM, rM.family, null === jM ? void 0 : Math.round(jM / 1e3)), zM(`touch HUD pad ${MM}`, GM(rM, OM, SM, jM, aM, PM, nM, LM))
+           nV(VV, eV.family, null === UV ? void 0 : Math.round(UV / 1e3)), wV(`touch HUD pad ${VV}`, FV(eV, JV, YV, UV, yV, pV, QV, ZV))
```

#### 830. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9128` → after: `L9032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9032) · [Before (L9128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9128)

```diff
-           pad_mapping: null !== (nM = null === iM || void 0 === iM ? void 0 : iM.mapping) && void 0 !== nM ? nM : "unread",
+           pad_mapping: null !== (QV = null === xV || void 0 === xV ? void 0 : xV.mapping) && void 0 !== QV ? QV : "unread",
```

#### 831. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9139` → after: `L9043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9043) · [Before (L9139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9139)

```diff
-     const CM = MM => !MM.repeat && !(0, JM.e)(MM.key),
+     const TV = VV => !VV.repeat && !(0, bV.d)(VV.key),
```

#### 832. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9153` → after: `L9057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9057) · [Before (L9153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9153)

```diff
-             const SM = MM >= (this.buttonsDown[OM] ? hM.T : hM.Q);
+             const YV = VV >= (this.buttonsDown[JV] ? kV.W : kV.S);
```

#### 833. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9158` → after: `L9062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9062) · [Before (L9158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9158)

```diff
-             Math.hypot(MM.x, MM.y) < (SM ? hM.T : .3) ? this.stickAnchors[OM] = null : (!SM || Math.hypot(MM.x - SM.x, MM.y - SM.y) >= .3) && (this.stickAnchors[OM] = {
+             Math.hypot(VV.x, VV.y) < (YV ? kV.W : .3) ? this.stickAnchors[JV] = null : (!YV || Math.hypot(VV.x - YV.x, VV.y - YV.y) >= .3) && (this.stickAnchors[JV] = {
```

#### 834. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9177` → after: `L9081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9081) · [Before (L9177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9177)

```diff
-       gM = (uM = () => LM.g.getActiveGamepad(), new lM({
+       MV = (zV = () => ZV.f.getActiveGamepad(), new jV({
```

#### 835. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9179` → after: `L9083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9083) · [Before (L9179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9179)

```diff
-         setMayHide: HM.u,
+         setMayHide: rV.A,
```

#### 836. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9181` → after: `L9085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9085) · [Before (L9181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9181)

```diff
-           UM("sQ", MM, rM, uM(), null)
+           tV("hn", VV, eV, zV(), null)
```

#### 837. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9198` → after: `L9102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9102) · [Before (L9198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9198)

```diff
-         if (gM.observe(MM, rM, tM.isStickOffRest()), oM && tM.wasOnlyMoveOn() && !(0, HM.l)()) return !1;
+         if (MV.observe(VV, eV, XV.isStickOffRest()), aV && XV.wasOnlyMoveOn() && !(0, rV.m)()) return !1;
```

#### 838. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9200` → after: `L9104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9104) · [Before (L9200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9200)

```diff
-         const iM = !(0, HM.l)();
+         const xV = !(0, rV.m)();
```

#### 839. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9203` → after: `L9107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9107) · [Before (L9203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9203)

```diff
-         } : null), DM = !1, (0, HM.t)("gamepad"), wM(!0), (0, mM.o)((0, nM.l)()), iM
+         } : null), DV = !1, (0, rV.w)("gamepad"), NV(!0), (0, vV.n)((0, QV.j)()), xV
```

#### 840. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9205` → after: `L9109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9109) · [Before (L9205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9205)

```diff
-       YM = MM => !(0, HM.l)() || MM === RM,
+       cV = VV => !(0, rV.m)() || VV === GV,
```

#### 841. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9210-L9211` → after: `L9114-L9115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9114-L9115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9114-L9115) · [Before (L9210-L9211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9210-L9211)

```diff
-         const MM = SM.d.get("activeInputDevice"),
-           rM = "gamepad" === MM ? LM.g.getActivePad() : null;
+         const VV = YV.b.get("activeInputDevice"),
+           eV = "gamepad" === VV ? ZV.f.getActivePad() : null;
```

#### 842. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9214-L9215` → after: `L9118-L9119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9118-L9119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9118-L9119) · [Before (L9214-L9215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9214-L9215)

```diff
-           inGame: (0, PM.B)(),
-           padMovesMouse: null !== rM && (0, zM.e)(rM.id)
+           inGame: (0, pV.r)(),
+           padMovesMouse: null !== eV && (0, wV.i)(eV.id)
```

#### 843. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9225` → after: `L9129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9129) · [Before (L9225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9225)

```diff
-         const MM = new dM.b,
+         const VV = new EV.c,
```

#### 844. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9227` → after: `L9131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9131) · [Before (L9227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9227)

```diff
-             MM.reset(), oM = !1, (0, HM.t)(rM)
+             VV.reset(), aV = !1, (0, rV.w)(eV)
```

#### 845. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9232` → after: `L9136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9136) · [Before (L9232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9232)

```diff
-                 if ((0, HM.q)(MM), !CM(MM)) return;
+                 if ((0, rV.u)(VV), !TV(VV)) return;
```

#### 846. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9258` → after: `L9162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9162) · [Before (L9258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9258)

```diff
-             if (DM = !0, wM(!1), "keyboardMouse" === SM.d.get("activeInputDevice")) return;
+             if (DV = !0, NV(!1), "keyboardMouse" === YV.b.get("activeInputDevice")) return;
```

#### 847. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9271` → after: `L9175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9175) · [Before (L9271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9271)

```diff
-                 inGame: PM.inGame && (0, QM.c)(),
+                 inGame: pV.inGame && (0, nV.h)(),
```

#### 848. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9284-L9286` → after: `L9188-L9190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9188-L9190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9188-L9190) · [Before (L9284-L9286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9284-L9286)

```diff
-         const LM = jM.i.subscribe("appManagerUpdated|activeInputDevice", nM);
-         return nM(SM.d.get("activeInputDevice")), () => {
-           window.removeEventListener("keydown", iM, zM), window.removeEventListener("pointerdown", iM, zM), window.removeEventListener("wheel", iM, zM), window.removeEventListener("touchstart", OM, zM), window.removeEventListener("pointermove", PM, zM), window.removeEventListener … [truncated]
+         const ZV = UV.h.subscribe("appManagerUpdated|activeInputDevice", QV);
+         return QV(YV.b.get("activeInputDevice")), () => {
+           window.removeEventListener("keydown", xV, wV), window.removeEventListener("pointerdown", xV, wV), window.removeEventListener("wheel", xV, wV), window.removeEventListener("touchstart", JV, wV), window.removeEventListener("pointermove", pV, wV), window.removeEventListener … [truncated]
```

#### 849. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9290-L9294` → after: `L9194-L9198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9194-L9198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9194-L9198) · [Before (L9290-L9294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9290-L9294)

```diff
-         const [MM, rM] = (0, OM.useState)(nM.l);
-         return (0, aM.d)(nM.e, (() => {
-           rM((0, nM.l)())
-         })), (0, aM.d)(LM.c, (() => {
-           rM((0, nM.l)())
+         const [VV, eV] = (0, JV.useState)(QV.j);
+         return (0, yV.g)(QV.c, (() => {
+           eV((0, QV.j)())
+         })), (0, yV.g)(ZV.c, (() => {
+           eV((0, QV.j)())
```

#### 850. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9298` → after: `L9202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9202) · [Before (L9298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9298)

```diff
-   8752: (MM, rM, iM) => {
+   8816: (VV, eV, xV) => {
```

#### 851. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9300-L9301` → after: `L9204-L9205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9204-L9205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9204-L9205) · [Before (L9300-L9301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9300-L9301)

```diff
-       c: () => OM,
-       e: () => SM
+       d: () => JV,
+       h: () => YV
```

#### 852. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9306` → after: `L9210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9210) · [Before (L9306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9306)

```diff
-   9301: (MM, rM, iM) => {
+   9315: (VV, eV, xV) => {
```

#### 853. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9309-L9311` → after: `L9213-L9215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9213-L9215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9213-L9215) · [Before (L9309-L9311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9309-L9311)

```diff
-       i: () => jM,
-       j: () => nM,
-       n: () => PM
+       g: () => UV,
+       k: () => QV,
+       o: () => pV
```

#### 854. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9313-L9314` → after: `L9217-L9218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9217-L9218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9217-L9218) · [Before (L9313-L9314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9313-L9314)

```diff
-     var OM = iM(1516),
-       SM = iM(1474);
+     var JV = xV(1542),
+       YV = xV(1493);
```

#### 855. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9332` → after: `L9236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9236) · [Before (L9332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9332)

```diff
-         return (0, OM.e)(jM, null !== (MM = null === (rM = (0, SM.d)()) || void 0 === rM ? void 0 : rM.getInventoryCursorState()) && void 0 !== MM ? MM : aM)
+         return (0, JV.j)(UV, null !== (VV = null === (eV = (0, YV.e)()) || void 0 === eV ? void 0 : eV.getInventoryCursorState()) && void 0 !== VV ? VV : yV)
```

#### 856. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9336` → after: `L9240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9240) · [Before (L9336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9336)

```diff
-         return null !== (MM = null === (rM = (0, SM.d)()) || void 0 === rM ? void 0 : rM.isPadSteppingSlots()) && void 0 !== MM && MM
+         return null !== (VV = null === (eV = (0, YV.e)()) || void 0 === eV ? void 0 : eV.isPadSteppingSlots()) && void 0 !== VV && VV
```

#### 857. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9339` → after: `L9243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9243) · [Before (L9339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9339)

```diff
-   9293: (MM, rM, iM) => {
+   9306: (VV, eV, xV) => {
```

#### 858. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9345-L9347` → after: `L9251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9251) · [Before (L9345-L9347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9345-L9347)

```diff
-       p: () => jM,
-       r: () => zM,
-       t: () => LM
+       o: () => ZV
```

#### 859. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9372` → after: `L9276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9276) · [Before (L9372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9372)

```diff
-         return null !== (iM = null !== (OM = MM.find((MM => MM.element === rM))) && void 0 !== OM ? OM : MM.find((MM => MM.element.contains(rM)))) && void 0 !== iM ? iM : null
+         return null !== (xV = null !== (JV = VV.find((VV => VV.element === eV))) && void 0 !== JV ? JV : VV.find((VV => VV.element.contains(eV)))) && void 0 !== xV ? xV : null
```

#### 860. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9375` → after: `L9279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9279) · [Before (L9375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9375)

```diff
-   9310: (MM, rM, iM) => {
+   9318: (VV, eV, xV) => {
```

#### 861. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9377-L9378` → after: `L9281-L9282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9281-L9282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9281-L9282) · [Before (L9377-L9378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9377-L9378)

```diff
-       b: () => jM,
-       c: () => aM
+       d: () => UV,
+       f: () => yV
```

#### 862. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9380` → after: `L9284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9284) · [Before (L9380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9380)

```diff
-     var OM = iM(44);
+     var JV = xV(62);
```

#### 863. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9384` → after: `L9288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9288) · [Before (L9384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9384)

```diff
-         return null !== (rM = null === (iM = SM.get(MM)) || void 0 === iM ? void 0 : iM.current) && void 0 !== rM ? rM : null
+         return null !== (eV = null === (xV = YV.get(VV)) || void 0 === xV ? void 0 : xV.current) && void 0 !== eV ? eV : null
```

#### 864. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9400` → after: `L9304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9304) · [Before (L9400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9400)

```diff
-   9419: (MM, rM, iM) => {
+   9428: (VV, eV, xV) => {
```

#### 865. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9403-L9404` → after: `L9308-L9309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9308-L9309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9308-L9309) · [Before (L9403-L9404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9403-L9404)

```diff
-       h: () => QM,
-       j: () => LM,
+       g: () => ZV,
+       i: () => wV,
```

#### 866. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9406-L9407` → after: `L9311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9311) · [Before (L9406-L9407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9406-L9407)

```diff
-       o: () => nM,
-       r: () => HM
+       q: () => rV
```

#### 867. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9409-L9412` → after: `L9313-L9316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9313-L9316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9313-L9316) · [Before (L9409-L9412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9409-L9412)

```diff
-     var OM = iM(22),
-       SM = iM(2120),
-       jM = iM(1474),
-       aM = iM(1464);
+     var JV = xV(32),
+       YV = xV(2147),
+       UV = xV(1493),
+       yV = xV(1473);
```

#### 868. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9415` → after: `L9319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9319) · [Before (L9415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9415)

```diff
-         return (0, aM.l)() && null !== (rM = null === (iM = (0, jM.d)()) || void 0 === iM ? void 0 : iM.getGlyphForNoaAction(MM)) && void 0 !== rM ? rM : null
+         return (0, yV.m)() && null !== (eV = null === (xV = (0, UV.e)()) || void 0 === xV ? void 0 : xV.getGlyphForNoaAction(VV)) && void 0 !== eV ? eV : null
```

#### 869. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9420` → after: `L9324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9324) · [Before (L9420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9420)

```diff
-         return null !== (rM = null === (iM = (0, jM.d)()) || void 0 === iM ? void 0 : iM.getPadGlyphIconName(MM)) && void 0 !== rM ? rM : `${nM}xbox/${MM}`
+         return null !== (eV = null === (xV = (0, UV.e)()) || void 0 === xV ? void 0 : xV.getPadGlyphIconName(VV)) && void 0 !== eV ? eV : `${QV}xbox/${VV}`
```

#### 870. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9425` → after: `L9329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9329) · [Before (L9425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9425)

```diff
-         return zM(MM) && null !== (rM = null === (iM = (0, jM.d)()) || void 0 === iM ? void 0 : iM.getPadGlyphIconUrl(MM)) && void 0 !== rM ? rM : null
+         return wV(VV) && null !== (eV = null === (xV = (0, UV.e)()) || void 0 === xV ? void 0 : xV.getPadGlyphIconUrl(VV)) && void 0 !== eV ? eV : null
```

#### 871. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9427` → after: `L9331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9331) · [Before (L9427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9427)

```diff
-       mM = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", aM.c, SM.f, SM.d],
+       vV = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", yV.e, YV.f, YV.d],
```

#### 872. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9429` → after: `L9333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9333) · [Before (L9429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9429)

```diff
-         const rM = mM.map((rM => OM.i.subscribe(rM, MM)));
+         const eV = vV.map((eV => JV.h.subscribe(eV, VV)));
```

#### 873. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9431` → after: `L9335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9335) · [Before (L9431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9431)

```diff
-           for (const MM of rM) OM.i.unsubscribe(MM)
+           for (const VV of eV) JV.h.unsubscribe(VV)
```

#### 874. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9435` → after: `L9339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9339) · [Before (L9435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9435)

```diff
-   9279: (MM, rM, iM) => {
+   9293: (VV, eV, xV) => {
```

#### 875. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9438` → after: `L9342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9342) · [Before (L9438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9438)

```diff
-       g: () => OM
+       f: () => JV
```

#### 876. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9443` → after: `L9347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9347) · [Before (L9443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9443)

```diff
-   8792: (MM, rM, iM) => {
+   8843: (VV, eV, xV) => {
```

#### 877. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9445-L9448` → after: `L9349-L9352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9349-L9352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9349-L9352) · [Before (L9445-L9448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9445-L9448)

```diff
-       b: () => QM,
-       c: () => zM,
-       d: () => nM,
-       e: () => PM
+       e: () => nV,
+       h: () => wV,
+       l: () => QV,
+       o: () => pV
```

#### 878. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9450-L9452` → after: `L9354-L9356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9354-L9356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9354-L9356) · [Before (L9450-L9452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9450-L9452)

```diff
-     var OM = iM(19),
-       SM = iM(1717),
-       jM = iM(1835);
+     var JV = xV(27),
+       YV = xV(1725),
+       UV = xV(1840);
```

#### 879. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9454` → after: `L9358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9358) · [Before (L9454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9454)

```diff
-       PM = (MM, rM) => (aM.has(MM) && console.warn(`Gameplay blocker "${MM}" registered twice; the newer one replaces it.`), aM.set(MM, rM), () => {
+       pV = (VV, eV) => (yV.has(VV) && console.warn(`Gameplay blocker "${VV}" registered twice; the newer one replaces it.`), yV.set(VV, eV), () => {
```

#### 880. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9457` → after: `L9361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9361) · [Before (L9457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9457)

```diff
-       nM = () => (0, jM.e)(document.activeElement),
+       QV = () => (0, UV.b)(document.activeElement),
```

#### 881. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9466` → after: `L9370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9370) · [Before (L9466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9466)

```diff
-         return "inGame" === OM.d.get("gameState") && (!(0, SM.r)() && (!nM() && null === QM(MM)))
+         return "inGame" === JV.b.get("gameState") && (!(0, YV.n)() && (!QV() && null === nV(VV)))
```

#### 882. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9469` → after: `L9373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9373) · [Before (L9469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9469)

```diff
-   8723: (MM, rM, iM) => {
+   8786: (VV, eV, xV) => {
```

#### 883. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9474` → after: `L9376-L9377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9376-L9377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9376-L9377) · [Before (L9474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9474)

```diff
-       G: () => UM,
+       F: () => qV,
+       H: () => GV,
```

#### 884. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9476-L9477` → after: `L9379-L9380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9379-L9380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9379-L9380) · [Before (L9476-L9477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9476-L9477)

```diff
-       N: () => dM,
-       O: () => QM,
+       M: () => BV,
+       P: () => EV,
```

#### 885. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9479-L9480` → after: `L9382-L9383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9382-L9383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9382-L9383) · [Before (L9479-L9480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9479-L9480)

```diff
-       T: () => HM,
-       V: () => SM,
+       S: () => vV,
+       W: () => rV,
```

#### 886. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9483-L9492` → after: `L9387-L9396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9387-L9396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9387-L9396) · [Before (L9483-L9492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9483-L9492)

```diff
-       b: () => WM,
-       e: () => uM,
-       eb: () => pM,
-       h: () => zM,
-       hb: () => GM,
-       i: () => nM,
-       l: () => PM,
-       o: () => bM,
-       p: () => lM,
-       s: () => eM,
+       d: () => RV,
+       db: () => MV,
+       f: () => zV,
+       fb: () => WV,
+       gb: () => FV,
+       j: () => wV,
+       k: () => QV,
+       n: () => pV,
+       r: () => AV,
+       t: () => jV,
```

#### 887. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9537` → after: `L9441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9441) · [Before (L9537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9537)

```diff
-           return "linear" === rM ? iM : iM * iM
+           return "linear" === eV ? xV : xV * xV
```

#### 888. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9578` → after: `L9482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9482) · [Before (L9578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9578)

```diff
-         this.readTiming = MM, this.sQ = !1, this.timing = null, this.nextFireMs = 0
+         this.readTiming = VV, this.hn = !1, this.timing = null, this.nextFireMs = 0
```

#### 889. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9581` → after: `L9485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9485) · [Before (L9581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9581)

```diff
-         return MM ? this.sQ ? !!(this.timing && rM >= this.nextFireMs) && (this.nextFireMs = rM + this.timing.intervalMs, !0) : (this.sQ = !0, this.timing = this.readTiming(), this.nextFireMs = rM + (null !== (iM = null === (OM = this.timing) || void 0 === OM ? void 0 : OM.initia … [truncated]
+         return VV ? this.hn ? !!(this.timing && eV >= this.nextFireMs) && (this.nextFireMs = eV + this.timing.intervalMs, !0) : (this.hn = !0, this.timing = this.readTiming(), this.nextFireMs = eV + (null !== (xV = null === (JV = this.timing) || void 0 === JV ? void 0 : JV.initia … [truncated]
```

#### 890. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9585` → after: `L9489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9489) · [Before (L9585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9585)

```diff
-         this.sQ = !1
+         this.hn = !1
```

#### 891. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9601` → after: `L9505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9505) · [Before (L9601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9601)

```diff
-         return MM !== this.direction && (this.timer.reset(), this.direction = MM), this.timer.update(null !== MM, rM) ? MM : null
+         return VV !== this.direction && (this.timer.reset(), this.direction = VV), this.timer.update(null !== VV, eV) ? VV : null
```

#### 892. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9608` → after: `L9512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9512) · [Before (L9608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9608)

```diff
-   9315: (MM, rM, iM) => {
+   9320: (VV, eV, xV) => {
```

#### 893. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9611` → after: `L9515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9515) · [Before (L9611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9611)

```diff
-       f: () => jM
+       e: () => UV
```

#### 894. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9619` → after: `L9523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9523) · [Before (L9619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9619)

```diff
-   9259: (MM, rM, iM) => {
+   9276: (VV, eV, xV) => {
```

#### 895. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9621-L9622` → after: `L9525-L9526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9525-L9526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9525-L9526) · [Before (L9621-L9622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9621-L9622)

```diff
-       d: () => aM,
-       f: () => jM
+       e: () => yV,
+       h: () => UV
```

#### 896. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9624-L9627` → after: `L9528-L9531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9528-L9531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9528-L9531) · [Before (L9624-L9627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9624-L9627)

```diff
-     var OM = iM(8743),
-       SM = iM(8723);
-     const jM = MM => (0, SM.ab)(MM, (0, OM.j)().buttonRepeat),
-       aM = MM => new SM.e((() => jM(MM)))
+     var JV = xV(8811),
+       YV = xV(8786);
+     const UV = VV => (0, YV.db)(VV, (0, JV.i)().buttonRepeat),
+       yV = VV => new YV.f((() => UV(VV)))
```

#### 897. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9629` → after: `L9533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9533) · [Before (L9629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9629)

```diff
-   8767: (MM, rM, iM) => {
+   8828: (VV, eV, xV) => {
```

#### 898. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9631-L9633` → after: `L9535-L9537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9535-L9537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9535-L9537) · [Before (L9631-L9633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9631-L9633)

```diff
-       d: () => nM,
-       g: () => jM,
-       i: () => PM
+       c: () => QV,
+       e: () => UV,
+       h: () => pV
```

#### 899. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9635-L9637` → after: `L9539-L9541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9539-L9541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9539-L9541) · [Before (L9635-L9637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9635-L9637)

```diff
-     var OM = iM(22),
-       SM = iM(8743);
-     const jM = (MM, rM) => "OpenShop" === MM ? "shop" === rM : "OpenLobbyLeaderboard" !== MM || "leaderboard" === rM;
+     var JV = xV(32),
+       YV = xV(8811);
+     const UV = (VV, eV) => "OpenShop" === VV ? "shop" === eV : "OpenLobbyLeaderboard" !== VV || "leaderboard" === eV;
```

#### 900. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9640` → after: `L9544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9544) · [Before (L9640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9640)

```diff
-         MM !== aM && (aM = MM, OM.i.Tz(SM.e, (0, SM.j)()))
+         VV !== yV && (yV = VV, JV.h.QZ(YV.c, (0, YV.i)()))
```

#### 901. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9642` → after: `L9546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9546) · [Before (L9642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9642)

```diff
-       nM = () => ((MM, rM) => "shop" === MM && rM ? "shop" : "leaderboard")((0, SM.j)().leaderboardButton, aM)
+       QV = () => ((VV, eV) => "shop" === VV && eV ? "shop" : "leaderboard")((0, YV.i)().leaderboardButton, yV)
```

#### 902. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9644` → after: `L9548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9548) · [Before (L9644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9644)

```diff
-   8760: (MM, rM, iM) => {
+   8825: (VV, eV, xV) => {
```

#### 903. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9646-L9652` → after: `L9550-L9556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9550-L9556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9550-L9556) · [Before (L9646-L9652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9646-L9652)

```diff
-       A: () => zM,
-       B: () => nM,
-       E: () => PM,
-       F: () => GM,
-       I: () => mM,
-       M: () => HM,
-       N: () => LM,
+       $: () => EV,
+       C: () => pV,
+       D: () => FV,
+       G: () => vV,
+       H: () => rV,
+       L: () => ZV,
+       O: () => tV,
```

#### 904. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9661` → after: `L9566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9566) · [Before (L9661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9661)

```diff
-       fb: () => hM,
+       g: () => MV,
```

#### 905. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9666-L9669` → after: `L9571-L9572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9571-L9572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9571-L9572) · [Before (L9666-L9669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9666-L9669)

```diff
-       m: () => aM,
-       mb: () => jM,
-       p: () => wM,
-       q: () => eM,
+       nb: () => iV,
+       o: () => NV,
```

#### 906. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9672` → after: `L9576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9576) · [Before (L9672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9672)

```diff
-       ub: () => kM,
+       v: () => gV,
```

#### 907. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9674` → after: `L9578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9578) · [Before (L9674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9674)

```diff
-       xb: () => bM
+       z: () => QV
```

#### 908. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9676-L9677` → after: `L9580-L9581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9580-L9581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9580-L9581) · [Before (L9676-L9677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9676-L9677)

```diff
-     var OM = iM(8738),
-       SM = iM(8723);
+     var JV = xV(8804),
+       YV = xV(8786);
```

#### 909. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9709` → after: `L9613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9613) · [Before (L9709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9709)

```diff
-       LM = MM => `${Math.round(MM)}%`,
+       ZV = VV => `${Math.round(VV)}%`,
```

#### 910. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9711` → after: `L9615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9615) · [Before (L9711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9711)

```diff
-       HM = MM => `${MM.toFixed(1)}\xd7`,
+       rV = VV => `${VV.toFixed(1)}\xd7`,
```

#### 911. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9904` → after: `L9808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9808) · [Before (L9904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9904)

```diff
-       WM = SM.X.filter((MM => "Home" !== MM)),
+       RV = YV._.filter((VV => "Home" !== VV)),
```

#### 912. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9915` → after: `L9819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9819) · [Before (L9915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9915)

```diff
-         const OM = rM - (null !== (iM = this.startMs) && void 0 !== iM ? iM : rM) >= 250;
+         const JV = eV - (null !== (xV = this.startMs) && void 0 !== xV ? xV : eV) >= 250;
```

#### 913. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9958` → after: `L9862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9862) · [Before (L9958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9958)

```diff
-           sQ: OM
+           hn: JV
```

#### 914. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9968` → after: `L9872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9872) · [Before (L9968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9968)

```diff
-   9328: (MM, rM, iM) => {
+   9335: (VV, eV, xV) => {
```

#### 915. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9971` → after: `L9875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9875) · [Before (L9971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9971)

```diff
-       e: () => SM
+       g: () => YV
```

#### 916. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9988` → after: `L9892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9892) · [Before (L9988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9988)

```diff
-   5419: (MM, rM, iM) => {
+   5536: (VV, eV, xV) => {
```

#### 917. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9990-L9991` → after: `L9894-L9895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9894-L9895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9894-L9895) · [Before (L9990-L9991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9990-L9991)

```diff
-       b: () => jM,
-       d: () => aM
+       e: () => UV,
+       h: () => yV
```

#### 918. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9993` → after: `L9897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9897) · [Before (L9993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9993)

```diff
-     var OM = iM(44);
+     var JV = xV(62);
```

#### 919. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9998` → after: `L9902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9902) · [Before (L9998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L9998)

```diff
-         return iM && null !== (rM = SM.get(iM)) && void 0 !== rM ? rM : null
+         return xV && null !== (eV = YV.get(xV)) && void 0 !== eV ? eV : null
```

#### 920. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10019` → after: `L9923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9923) · [Before (L10019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10019)

```diff
-   9408: (MM, rM, iM) => {
+   9422: (VV, eV, xV) => {
```

#### 921. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10021` → after: `L9925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9925) · [Before (L10021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10021)

```diff
-       b: () => SM,
+       d: () => YV,
```

#### 922. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10024-L10027` → after: `L9929-L9931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9929-L9931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9929-L9931) · [Before (L10024-L10027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10024-L10027)

```diff
-       l: () => OM,
-       p: () => PM,
-       s: () => QM,
-       w: () => zM
+       n: () => pV,
+       r: () => nV,
+       s: () => wV
```

#### 923. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10040` → after: `L9944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9944) · [Before (L10040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10040)

```diff
-   9403: (MM, rM, iM) => {
+   9420: (VV, eV, xV) => {
```

#### 924. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10042-L10043` → after: `L9946-L9947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9946-L9947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9946-L9947) · [Before (L10042-L10043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10042-L10043)

```diff
-       c: () => jM,
-       f: () => SM
+       e: () => UV,
+       g: () => YV
```

#### 925. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10051` → after: `L9955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9955) · [Before (L10051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10051)

```diff
-   9324: (MM, rM, iM) => {
+   9333: (VV, eV, xV) => {
```

#### 926. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10054-L10056` → after: `L9958-L9959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9958-L9959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9958-L9959) · [Before (L10054-L10056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10054-L10056)

```diff
-       e: () => SM,
-       h: () => aM,
-       j: () => jM,
+       f: () => YV,
+       g: () => yV,
```

#### 927. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10058` → after: `L9961-L9962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9961-L9962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9961-L9962) · [Before (L10058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10058)

```diff
-       m: () => QM
+       o: () => JV,
+       s: () => nV
```

#### 928. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10070` → after: `L9974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9974) · [Before (L10070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10070)

```diff
-   9337: (MM, rM, iM) => {
+   9340: (VV, eV, xV) => {
```

#### 929. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10072-L10073` → after: `L9976-L9977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9976-L9977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9976-L9977) · [Before (L10072-L10073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10072-L10073)

```diff
-       e: () => jM,
-       h: () => SM
+       b: () => UV,
+       d: () => YV
```

#### 930. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10075` → after: `L9979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9979) · [Before (L10075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10075)

```diff
-     var OM = iM(22);
+     var JV = xV(32);
```

#### 931. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10081` → after: `L9985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9985) · [Before (L10081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10081)

```diff
-           "Air" === PM && OM.i.Tz(SM)
+           "Air" === pV && JV.h.QZ(YV)
```

#### 932. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10086` → after: `L9990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9990) · [Before (L10086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10086)

```diff
-   9467: (MM, rM, iM) => {
+   9477: (VV, eV, xV) => {
```

#### 933. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10088-L10089` → after: `L9992-L9993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9992-L9993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9992-L9993) · [Before (L10088-L10089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10088-L10089)

```diff
-       b: () => PM,
-       e: () => nM
+       c: () => pV,
+       g: () => QV
```

#### 934. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10091-L10093` → after: `L9995-L9997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9995-L9997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L9995-L9997) · [Before (L10091-L10093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10091-L10093)

```diff
-     var OM = iM(19),
-       SM = iM(1373),
-       jM = iM(83);
+     var JV = xV(27),
+       YV = xV(1391),
+       UV = xV(99);
```

#### 935. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10148` → after: `L10052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10052) · [Before (L10148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10148)

```diff
-           SM = null !== rM && void 0 !== rM ? rM : OM.pattern;
+           YV = null !== eV && void 0 !== eV ? eV : JV.pattern;
```

#### 936. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10151` → after: `L10055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10055) · [Before (L10151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10151)

```diff
-         jM - this.lastAnyAt < 40 && OM.priority < this.playingPriority || jM - (null !== (iM = this.lastAt.get(MM)) && void 0 !== iM ? iM : -1 / 0) < OM.minGapMs || jM < this.playingUntil && OM.priority < this.playingPriority || (this.lastAt.set(MM, jM), this.lastAnyAt = jM, this … [truncated]
+         UV - this.lastAnyAt < 40 && JV.priority < this.playingPriority || UV - (null !== (xV = this.lastAt.get(VV)) && void 0 !== xV ? xV : -1 / 0) < JV.minGapMs || UV < this.playingUntil && JV.priority < this.playingPriority || (this.lastAt.set(VV, UV), this.lastAnyAt = UV, this … [truncated]
```

#### 937. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10158` → after: `L10062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10062) · [Before (L10158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10158)

```diff
-       enabled: () => PM() && OM.d.get("isTouchScreen") && OM.d.get("clientEscMenuOptions").vibration && !(0, SM.i)()
+       enabled: () => pV() && JV.b.get("isTouchScreen") && JV.b.get("clientEscMenuOptions").vibration && !(0, YV.f)()
```

#### 938. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10161` → after: `L10065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10065) · [Before (L10161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10161)

```diff
-   9331: (MM, rM, iM) => {
+   9338: (VV, eV, xV) => {
```

#### 939. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10163` → after: `L10067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10067) · [Before (L10163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10163)

```diff
-       d: () => SM
+       c: () => YV
```

#### 940. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10165` → after: `L10069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10069) · [Before (L10165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10165)

```diff
-     var OM = iM(1265);
+     var JV = xV(1283);
```

#### 941. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10170` → after: `L10074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10074) · [Before (L10170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10170)

```diff
-         const iM = (0, OM.b)();
+         const xV = (0, JV.d)();
```

#### 942. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10180` → after: `L10084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10084) · [Before (L10180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10180)

```diff
-   9366: (MM, rM, iM) => {
+   9396: (VV, eV, xV) => {
```

#### 943. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10182` → after: `L10086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10086) · [Before (L10182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10182)

```diff
-       d: () => aM
+       c: () => yV
```

#### 944. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10184-L10186` → after: `L10088-L10090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10088-L10090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10088-L10090) · [Before (L10184-L10186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10184-L10186)

```diff
-     var OM = iM(9374),
-       SM = iM(625),
-       jM = iM(119);
+     var JV = xV(9403),
+       YV = xV(657),
+       UV = xV(138);
```

#### 945. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10196` → after: `L10100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10100) · [Before (L10196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10196)

```diff
-             if ((0, OM.i)(rM.items[MM], aM)) return !1
+             if ((0, JV.p)(eV.items[VV], yV)) return !1
```

#### 946. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10201` → after: `L10105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10105) · [Before (L10201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10201)

```diff
-   9374: (MM, rM, iM) => {
+   9403: (VV, eV, xV) => {
```

#### 947. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10222` → after: `L10126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10126) · [Before (L10222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10222)

```diff
-       const SM = null !== (OM = iM.excludedPlayers) && void 0 !== OM ? OM : [rM];
+       const YV = null !== (JV = xV.excludedPlayers) && void 0 !== JV ? JV : [eV];
```

#### 948. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10226-L10229` → after: `L10130-L10133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10130-L10133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10130-L10133) · [Before (L10226-L10229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10226-L10229)

```diff
-       c: () => jM,
-       d: () => SM,
-       g: () => aM,
-       i: () => OM
+       e: () => UV,
+       h: () => YV,
+       l: () => yV,
+       p: () => JV
```

#### 949. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10232-L10233` → after: `L10136-L10233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10136-L10233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10136-L10233) · [Before (L10232-L10233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10232-L10233)

```diff
-   9410: () => {},
-   8814: (MM, rM, iM) => {
+   9424: () => {},
+   8859: (VV, eV, xV) => {
+     var JV = {
+       "./nintendo/A.svg": 8866,
+       "./nintendo/B.svg": 8873,
+       "./nintendo/Down.svg": 8878,
+       "./nintendo/Home.svg": 8884,
+       "./nintendo/LB.svg": 8886,
+       "./nintendo/LS.svg": 8889,
+       "./nintendo/LT.svg": 8897,
+       "./nintendo/Left.svg": 8904,
+       "./nintendo/LeftStick.svg": 8913,
+       "./nintendo/Menu.svg": 8922,
+       "./nintendo/RB.svg": 8930,
+       "./nintendo/RS.svg": 8936,
+       "./nintendo/RT.svg": 8938,
+ ... (82 more added lines; see GitHub link above)
```

#### 950. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10236` → after: `L10236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10236) · [Before (L10236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10236)

```diff
-   8819: (MM, rM, iM) => {
+   8873: (VV, eV, xV) => {
```

#### 951. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10239` → after: `L10239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10239) · [Before (L10239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10239)

```diff
-   8828: (MM, rM, iM) => {
+   8878: (VV, eV, xV) => {
```

#### 952. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10242` → after: `L10242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10242) · [Before (L10242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10242)

```diff
-   8837: (MM, rM, iM) => {
+   8884: (VV, eV, xV) => {
```

#### 953. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10245` → after: `L10245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10245) · [Before (L10245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10245)

```diff
-   8839: (MM, rM, iM) => {
+   8886: (VV, eV, xV) => {
```

#### 954. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10248` → after: `L10248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10248) · [Before (L10248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10248)

```diff
-   8847: (MM, rM, iM) => {
+   8889: (VV, eV, xV) => {
```

#### 955. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10251` → after: `L10251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10251) · [Before (L10251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10251)

```diff
-   8856: (MM, rM, iM) => {
+   8897: (VV, eV, xV) => {
```

#### 956. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10254` → after: `L10254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10254) · [Before (L10254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10254)

```diff
-   8862: (MM, rM, iM) => {
+   8904: (VV, eV, xV) => {
```

#### 957. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10257` → after: `L10257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10257) · [Before (L10257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10257)

```diff
-   8867: (MM, rM, iM) => {
+   8913: (VV, eV, xV) => {
```

#### 958. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10260` → after: `L10260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10260) · [Before (L10260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10260)

```diff
-   8874: (MM, rM, iM) => {
+   8922: (VV, eV, xV) => {
```

#### 959. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10263` → after: `L10263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10263) · [Before (L10263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10263)

```diff
-   8878: (MM, rM, iM) => {
+   8930: (VV, eV, xV) => {
```

#### 960. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10266` → after: `L10266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10266) · [Before (L10266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10266)

```diff
-   8887: (MM, rM, iM) => {
+   8936: (VV, eV, xV) => {
```

#### 961. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10269` → after: `L10269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10269) · [Before (L10269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10269)

```diff
-   8893: (MM, rM, iM) => {
+   8938: (VV, eV, xV) => {
```

#### 962. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10272` → after: `L10272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10272) · [Before (L10272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10272)

```diff
-   8896: (MM, rM, iM) => {
+   8944: (VV, eV, xV) => {
```

#### 963. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10275` → after: `L10275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10275) · [Before (L10275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10275)

```diff
-   8901: (MM, rM, iM) => {
+   8953: (VV, eV, xV) => {
```

#### 964. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10278` → after: `L10278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10278) · [Before (L10278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10278)

```diff
-   8904: (MM, rM, iM) => {
+   8958: (VV, eV, xV) => {
```

#### 965. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10281` → after: `L10281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10281) · [Before (L10281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10281)

```diff
-   8908: (MM, rM, iM) => {
+   8960: (VV, eV, xV) => {
```

#### 966. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10284` → after: `L10284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10284) · [Before (L10284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10284)

```diff
-   8911: (MM, rM, iM) => {
+   8965: (VV, eV, xV) => {
```

#### 967. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10287` → after: `L10287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10287) · [Before (L10287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10287)

```diff
-   8920: (MM, rM, iM) => {
+   8972: (VV, eV, xV) => {
```

#### 968. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10290` → after: `L10290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10290) · [Before (L10290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10290)

```diff
-   8925: (MM, rM, iM) => {
+   8976: (VV, eV, xV) => {
```

#### 969. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10293` → after: `L10293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10293) · [Before (L10293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10293)

```diff
-   8928: (MM, rM, iM) => {
+   8978: (VV, eV, xV) => {
```

#### 970. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10296` → after: `L10296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10296) · [Before (L10296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10296)

```diff
-   8935: (MM, rM, iM) => {
+   8986: (VV, eV, xV) => {
```

#### 971. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10299` → after: `L10299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10299) · [Before (L10299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10299)

```diff
-   8938: (MM, rM, iM) => {
+   8995: (VV, eV, xV) => {
```

#### 972. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10302` → after: `L10302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10302) · [Before (L10302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10302)

```diff
-   8942: (MM, rM, iM) => {
+   8999: (VV, eV, xV) => {
```

#### 973. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10305` → after: `L10305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10305) · [Before (L10305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10305)

```diff
-   8944: (MM, rM, iM) => {
+   9007: (VV, eV, xV) => {
```

#### 974. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10308` → after: `L10308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10308) · [Before (L10308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10308)

```diff
-   8947: (MM, rM, iM) => {
+   9009: (VV, eV, xV) => {
```

#### 975. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10311` → after: `L10311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10311) · [Before (L10311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10311)

```diff
-   8954: (MM, rM, iM) => {
+   9018: (VV, eV, xV) => {
```

#### 976. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10314` → after: `L10314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10314) · [Before (L10314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10314)

```diff
-   8961: (MM, rM, iM) => {
+   9022: (VV, eV, xV) => {
```

#### 977. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10317` → after: `L10317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10317) · [Before (L10317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10317)

```diff
-   8964: (MM, rM, iM) => {
+   9024: (VV, eV, xV) => {
```

#### 978. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10320` → after: `L10320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10320) · [Before (L10320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10320)

```diff
-   8968: (MM, rM, iM) => {
+   9028: (VV, eV, xV) => {
```

#### 979. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10323` → after: `L10323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10323) · [Before (L10323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10323)

```diff
-   8971: (MM, rM, iM) => {
+   9032: (VV, eV, xV) => {
```

#### 980. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10326` → after: `L10326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10326) · [Before (L10326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10326)

```diff
-   8977: (MM, rM, iM) => {
+   9039: (VV, eV, xV) => {
```

#### 981. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10329` → after: `L10329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10329) · [Before (L10329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10329)

```diff
-   8983: (MM, rM, iM) => {
+   9046: (VV, eV, xV) => {
```

#### 982. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10332` → after: `L10332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10332) · [Before (L10332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10332)

```diff
-   8992: (MM, rM, iM) => {
+   9052: (VV, eV, xV) => {
```

#### 983. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10335` → after: `L10335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10335) · [Before (L10335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10335)

```diff
-   8998: (MM, rM, iM) => {
+   9054: (VV, eV, xV) => {
```

#### 984. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10338` → after: `L10338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10338) · [Before (L10338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10338)

```diff
-   9e3: (MM, rM, iM) => {
+   9059: (VV, eV, xV) => {
```

#### 985. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10341` → after: `L10341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10341) · [Before (L10341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10341)

```diff
-   9003: (MM, rM, iM) => {
+   9061: (VV, eV, xV) => {
```

#### 986. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10344` → after: `L10344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10344) · [Before (L10344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10344)

```diff
-   9006: (MM, rM, iM) => {
+   9063: (VV, eV, xV) => {
```

#### 987. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10347` → after: `L10347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10347) · [Before (L10347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10347)

```diff
-   9015: (MM, rM, iM) => {
+   9070: (VV, eV, xV) => {
```

#### 988. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10350` → after: `L10350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10350) · [Before (L10350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10350)

```diff
-   9022: (MM, rM, iM) => {
+   9073: (VV, eV, xV) => {
```

#### 989. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10353` → after: `L10353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10353) · [Before (L10353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10353)

```diff
-   9028: (MM, rM, iM) => {
+   9078: (VV, eV, xV) => {
```

#### 990. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10356` → after: `L10356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10356) · [Before (L10356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10356)

```diff
-   9035: (MM, rM, iM) => {
+   9081: (VV, eV, xV) => {
```

#### 991. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10359` → after: `L10359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10359) · [Before (L10359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10359)

```diff
-   9040: (MM, rM, iM) => {
+   9083: (VV, eV, xV) => {
```

#### 992. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10362` → after: `L10362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10362) · [Before (L10362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10362)

```diff
-   9046: (MM, rM, iM) => {
+   9089: (VV, eV, xV) => {
```

#### 993. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10365` → after: `L10365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10365) · [Before (L10365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10365)

```diff
-   9049: (MM, rM, iM) => {
+   9093: (VV, eV, xV) => {
```

#### 994. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10368` → after: `L10368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10368) · [Before (L10368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10368)

```diff
-   9054: (MM, rM, iM) => {
+   9101: (VV, eV, xV) => {
```

#### 995. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10371` → after: `L10371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10371) · [Before (L10371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10371)

```diff
-   9063: (MM, rM, iM) => {
+   9108: (VV, eV, xV) => {
```

#### 996. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10374` → after: `L10374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10374) · [Before (L10374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10374)

```diff
-   9065: (MM, rM, iM) => {
+   9111: (VV, eV, xV) => {
```

#### 997. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10377` → after: `L10377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10377) · [Before (L10377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10377)

```diff
-   9073: (MM, rM, iM) => {
+   9118: (VV, eV, xV) => {
```

#### 998. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10380` → after: `L10380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10380) · [Before (L10380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10380)

```diff
-   9079: (MM, rM, iM) => {
+   9127: (VV, eV, xV) => {
```

#### 999. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10383` → after: `L10383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10383) · [Before (L10383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10383)

```diff
-   9085: (MM, rM, iM) => {
+   9133: (VV, eV, xV) => {
```

#### 1000. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10386` → after: `L10386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10386) · [Before (L10386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10386)

```diff
-   9093: (MM, rM, iM) => {
+   9142: (VV, eV, xV) => {
```

#### 1001. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10389` → after: `L10389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10389) · [Before (L10389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10389)

```diff
-   9102: (MM, rM, iM) => {
+   9148: (VV, eV, xV) => {
```

#### 1002. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10392` → after: `L10392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10392) · [Before (L10392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10392)

```diff
-   9107: (MM, rM, iM) => {
+   9152: (VV, eV, xV) => {
```

#### 1003. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10395` → after: `L10395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10395) · [Before (L10395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10395)

```diff
-   9116: (MM, rM, iM) => {
+   9160: (VV, eV, xV) => {
```

#### 1004. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10398` → after: `L10398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10398) · [Before (L10398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10398)

```diff
-   9125: (MM, rM, iM) => {
+   9169: (VV, eV, xV) => {
```

#### 1005. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10401` → after: `L10401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10401) · [Before (L10401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10401)

```diff
-   9133: (MM, rM, iM) => {
+   9172: (VV, eV, xV) => {
```

#### 1006. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10404` → after: `L10404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10404) · [Before (L10404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10404)

```diff
-   9142: (MM, rM, iM) => {
+   9178: (VV, eV, xV) => {
```

#### 1007. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10407` → after: `L10407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10407) · [Before (L10407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10407)

```diff
-   9151: (MM, rM, iM) => {
+   9182: (VV, eV, xV) => {
```

#### 1008. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10410` → after: `L10410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10410) · [Before (L10410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10410)

```diff
-   9160: (MM, rM, iM) => {
+   9191: (VV, eV, xV) => {
```

#### 1009. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10413` → after: `L10413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10413) · [Before (L10413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10413)

```diff
-   9163: (MM, rM, iM) => {
+   9194: (VV, eV, xV) => {
```

#### 1010. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10416` → after: `L10416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10416) · [Before (L10416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10416)

```diff
-   9172: (MM, rM, iM) => {
+   9200: (VV, eV, xV) => {
```

#### 1011. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10419` → after: `L10419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10419) · [Before (L10419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10419)

```diff
-   9175: (MM, rM, iM) => {
+   9206: (VV, eV, xV) => {
```

#### 1012. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10422` → after: `L10422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10422) · [Before (L10422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10422)

```diff
-   9182: (MM, rM, iM) => {
+   9209: (VV, eV, xV) => {
```

#### 1013. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10425` → after: `L10425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10425) · [Before (L10425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10425)

```diff
-   9189: (MM, rM, iM) => {
+   9217: (VV, eV, xV) => {
```

#### 1014. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10428` → after: `L10428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10428) · [Before (L10428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10428)

```diff
-   9192: (MM, rM, iM) => {
+   9219: (VV, eV, xV) => {
```

#### 1015. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10431` → after: `L10431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10431) · [Before (L10431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10431)

```diff
-   9197: (MM, rM, iM) => {
+   9223: (VV, eV, xV) => {
```

#### 1016. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10434` → after: `L10434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10434) · [Before (L10434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10434)

```diff
-   9202: (MM, rM, iM) => {
+   9225: (VV, eV, xV) => {
```

#### 1017. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10437` → after: `L10437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10437) · [Before (L10437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10437)

```diff
-   9204: (MM, rM, iM) => {
+   9232: (VV, eV, xV) => {
```

#### 1018. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10440` → after: `L10440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10440) · [Before (L10440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10440)

```diff
-   9213: (MM, rM, iM) => {
+   9238: (VV, eV, xV) => {
```

#### 1019. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10443` → after: `L10443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10443) · [Before (L10443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10443)

```diff
-   9221: (MM, rM, iM) => {
+   9242: (VV, eV, xV) => {
```

#### 1020. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10446` → after: `L10446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10446) · [Before (L10446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10446)

```diff
-   9228: (MM, rM, iM) => {
+   9248: (VV, eV, xV) => {
```

#### 1021. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10449` → after: `L10449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10449) · [Before (L10449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10449)

```diff
-   9237: (MM, rM, iM) => {
+   9255: (VV, eV, xV) => {
```

#### 1022. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10452` → after: `L10452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10452) · [Before (L10452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10452)

```diff
-   9240: (MM, rM, iM) => {
+   9258: (VV, eV, xV) => {
```

#### 1023. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10455` → after: `L10455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10455) · [Before (L10455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10455)

```diff
-   9245: (MM, rM, iM) => {
+   9262: (VV, eV, xV) => {
```

#### 1024. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10458` → after: `L10458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/controller.js#L10458) · [Before (L10458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/controller.js#L10458)

```diff
-   9251: (MM, rM, iM) => {
+   9268: (VV, eV, xV) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/debugDeviceHeader.js` (fo1voe.f743fbcf → pxmq3aq.c63b303d)

- **File**: `bundles/bloxd.io/chunks/js/debugDeviceHeader.js` (16 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00)

#### 1. `bundles/bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L4)

```diff
-   34912: (MM, rM, iM) => {
+   35172: (VV, eV, xV) => {
```

#### 2. `bundles/bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L9-L13)

```diff
-     var OM = iM(656),
-       SM = iM(83),
-       jM = iM(119),
-       aM = iM(114),
-       PM = iM(3674);
+     var JV = xV(686),
+       YV = xV(99),
+       UV = xV(138),
+       yV = xV(134),
+       pV = xV(3697);
```

#### 3. `bundles/bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L18` → after: `L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00) · [After (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L18) · [Before (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L18)

```diff
-         if (null !== MM.appIosVersion) return `${MM.appIosVersion} (the iOS app's)`;
+         if (null !== VV.appIosVersion) return `${VV.appIosVersion} (the iOS app's)`;
```

#### 4. `bundles/bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L20` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L20) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L20)

```diff
-         if (rM) return `${rM[1].replaceAll("_",".")} (the in-app browser's iOS token)`;
+         if (eV) return `${eV[1].replaceAll("_",".")} (the in-app browser's iOS token)`;
```

#### 5. `bundles/bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L25` → after: `L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00) · [After (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L25) · [Before (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L25)

```diff
-         if ("Safari" === iM.name && iM.version) return `${iM.version} (Safari's version, which follows iOS)`;
+         if ("Safari" === xV.name && xV.version) return `${xV.version} (Safari's version, which follows iOS)`;
```

#### 6. `bundles/bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L29` → after: `L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00R29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00) · [After (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L29) · [Before (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L29)

```diff
-         return jM < 18 || 18 === jM && aM < 6 ? `${SM} (user agent)` : `? (the user agent says ${SM}, frozen from iOS 26)`
+         return UV < 18 || 18 === UV && yV < 6 ? `${YV} (user agent)` : `? (the user agent says ${YV}, frozen from iOS 26)`
```

#### 7. `bundles/bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L32)

```diff
-       if (rM) return "windows" === MM.os ? `${rM} (${function(MM){const rM=parseInt(MM,10);if(rM>=13)return"Windows 11";return rM>=1?"Windows 10":"Windows 8.1 or older"}(rM)}, client hints)` : `${rM} (client hints)`;
+       if (eV) return "windows" === VV.os ? `${eV} (${function(VV){const eV=parseInt(VV,10);if(eV>=13)return"Windows 11";return eV>=1?"Windows 10":"Windows 8.1 or older"}(eV)}, client hints)` : `${eV} (client hints)`;
```

#### 8. `bundles/bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L34` → after: `L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00) · [After (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L34) · [Before (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L34)

```diff
-       return iM ? nM.has(iM) ? `${iM} (user agent, which may be frozen)` : `${iM} (user agent)` : "?"
+       return xV ? QV.has(xV) ? `${xV} (user agent, which may be frozen)` : `${xV} (user agent)` : "?"
```

#### 9. `bundles/bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L39` → after: `L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00R39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00) · [After (L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L39) · [Before (L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L39)

```diff
-       const iM = (null !== (rM = MM.fullVersionList) && void 0 !== rM ? rM : []).filter((MM => {
+       const xV = (null !== (eV = VV.fullVersionList) && void 0 !== eV ? eV : []).filter((VV => {
```

#### 10. `bundles/bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L49` → after: `L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00) · [After (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L49) · [Before (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L49)

```diff
-         return `${rM} ${iM}`
+         return `${eV} ${xV}`
```

#### 11. `bundles/bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L51` → after: `L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00) · [After (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L51) · [Before (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L51)

```diff
-       return `${MM.platform} ${MM.platformVersion||"?"}, ${iM.join(", ")||"?"}, ${MM.architecture||"?"} ${MM.bitness||"?"}-bit, model ${MM.model||"?"}, mobile ${MM.mobile}`
+       return `${VV.platform} ${VV.platformVersion||"?"}, ${xV.join(", ")||"?"}, ${VV.architecture||"?"} ${VV.bitness||"?"}-bit, model ${VV.model||"?"}, mobile ${VV.mobile}`
```

#### 12. `bundles/bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L59` → after: `L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00R59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00) · [After (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L59) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L59)

```diff
-       LM = `failed (${String(MM)})`
+       ZV = `failed (${String(VV)})`
```

#### 13. `bundles/bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L63-L64` → after: `L63-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00) · [After (L63-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L63-L64) · [Before (L63-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L63-L64)

```diff
-       const MM = (0, aM.y)(),
-         rM = null !== MM && void 0 !== MM ? MM : (0, aM.o)(),
+       const VV = (0, yV.z)(),
+         eV = null !== VV && void 0 !== VV ? VV : (0, yV.o)(),
```

#### 14. `bundles/bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L66` → after: `L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00R66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00) · [After (L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L66) · [Before (L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L66)

```diff
-       return [rM ? `webgl ${rM.vendor} / ${rM.renderer} (${MM?"the renderer's context":"a probe"})` : "webgl ?", iM ? `webgpu adapter ${iM.vendor||"?"}/${iM.architecture||"?"}` : "webgpu adapter ?"].join("; ")
+       return [eV ? `webgl ${eV.vendor} / ${eV.renderer} (${VV?"the renderer's context":"a probe"})` : "webgl ?", xV ? `webgpu adapter ${xV.vendor||"?"}/${xV.architecture||"?"}` : "webgpu adapter ?"].join("; ")
```

#### 15. `bundles/bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L77` → after: `L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00R77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00) · [After (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L77) · [Before (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L77)

```diff
-           appIosVersion: PM.f,
+           appIosVersion: pV.e,
```

#### 16. `bundles/bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L80-L81` → after: `L80-L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00R80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00) · [After (L80-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L80-L81) · [Before (L80-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L80-L81)

```diff
-         yM = (0, OM.n)(navigator.platform, navigator.maxTouchPoints, jM.siteUsed, (0, SM.getWebGpuSupported)());
-       return [`os ${JM} ${dM}; user agent's ${null!==(MM=HM.os.name)&&void 0!==MM?MM:"?"} ${null!==(rM=HM.os.version)&&void 0!==rM?rM:"?"}, platform ${navigator.platform}, touch points ${navigator.maxTouchPoints}, ${(0,SM.getPlatformType)()}`, `browser ${null!==(iM=HM.browser.nam … [truncated]
+         BV = (0, JV.k)(navigator.platform, navigator.maxTouchPoints, UV.siteUsed, (0, YV.getWebGpuSupported)());
+       return [`os ${bV} ${EV}; user agent's ${null!==(VV=rV.os.name)&&void 0!==VV?VV:"?"} ${null!==(eV=rV.os.version)&&void 0!==eV?eV:"?"}, platform ${navigator.platform}, touch points ${navigator.maxTouchPoints}, ${(0,YV.getPlatformType)()}`, `browser ${null!==(xV=rV.browser.nam … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/diagSink.js` (fo1voe.f743fbcf → pxmq3aq.c63b303d)

- **File**: `bundles/bloxd.io/chunks/js/diagSink.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-4d0a3c380d299ec28ee3c35a2413b65e8370d412f565a21b3f2fdcbea76184a8)

#### 1. `bundles/bloxd.io/chunks/js/diagSink.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-4d0a3c380d299ec28ee3c35a2413b65e8370d412f565a21b3f2fdcbea76184a8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-4d0a3c380d299ec28ee3c35a2413b65e8370d412f565a21b3f2fdcbea76184a8) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/diagSink.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/diagSink.js#L4)

```diff
-   37378: (MM, rM, iM) => {
+   37579: (VV, eV, xV) => {
```

#### 2. `bundles/bloxd.io/chunks/js/diagSink.js` (Changed code · before: `L35` → after: `L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-4d0a3c380d299ec28ee3c35a2413b65e8370d412f565a21b3f2fdcbea76184a8R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-4d0a3c380d299ec28ee3c35a2413b65e8370d412f565a21b3f2fdcbea76184a8) · [After (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/diagSink.js#L35) · [Before (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/diagSink.js#L35)

```diff
-           this.bL()
+           this.iZ()
```

#### 3. `bundles/bloxd.io/chunks/js/diagSink.js` (Changed code · before: `L46` → after: `L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-4d0a3c380d299ec28ee3c35a2413b65e8370d412f565a21b3f2fdcbea76184a8R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-4d0a3c380d299ec28ee3c35a2413b65e8370d412f565a21b3f2fdcbea76184a8) · [After (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/diagSink.js#L46) · [Before (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/diagSink.js#L46)

```diff
-           return OM >= 55296 && OM <= 56319 && iM--, `${rM.slice(0,iM)}...`
+           return JV >= 55296 && JV <= 56319 && xV--, `${eV.slice(0,xV)}...`
```

#### 4. `bundles/bloxd.io/chunks/js/diagSink.js` (Changed code · before: `L80` → after: `L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-4d0a3c380d299ec28ee3c35a2413b65e8370d412f565a21b3f2fdcbea76184a8R80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-4d0a3c380d299ec28ee3c35a2413b65e8370d412f565a21b3f2fdcbea76184a8) · [After (L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/diagSink.js#L80) · [Before (L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/diagSink.js#L80)

```diff
-             for (const rM of iM) this.add(`[dump:${MM}] ${rM}`)
+             for (const eV of xV) this.add(`[dump:${VV}] ${eV}`)
```

#### 5. `bundles/bloxd.io/chunks/js/diagSink.js` (Changed code · before: `L101` → after: `L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-4d0a3c380d299ec28ee3c35a2413b65e8370d412f565a21b3f2fdcbea76184a8R101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-4d0a3c380d299ec28ee3c35a2413b65e8370d412f565a21b3f2fdcbea76184a8) · [After (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/diagSink.js#L101) · [Before (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/diagSink.js#L101)

```diff
-         return null !== (MM = this.deps.storage.getItem(OM)) && void 0 !== MM ? MM : {}
+         return null !== (VV = this.deps.storage.getItem(JV)) && void 0 !== VV ? VV : {}
```

#### 6. `bundles/bloxd.io/chunks/js/diagSink.js` (Changed code · before: `L106` → after: `L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-4d0a3c380d299ec28ee3c35a2413b65e8370d412f565a21b3f2fdcbea76184a8R106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-4d0a3c380d299ec28ee3c35a2413b65e8370d412f565a21b3f2fdcbea76184a8) · [After (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/diagSink.js#L106) · [Before (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/diagSink.js#L106)

```diff
-         return (null === rM || void 0 === rM ? void 0 : rM.day) === MM ? rM : {
+         return (null === eV || void 0 === eV ? void 0 : eV.day) === VV ? eV : {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/errorLogging.js` (fo1voe.f743fbcf → pxmq3aq.c63b303d)

- **File**: `bundles/bloxd.io/chunks/js/errorLogging.js` (106 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50)

#### 1. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/errorLogging.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/errorLogging.js#L4)

```diff
-   7156: (MM, rM, iM) => {
+   7238: (VV, eV, xV) => {
```

#### 2. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L71` → after: `L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/errorLogging.js#L71) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/errorLogging.js#L71)

```diff
-       dL: () => XM,
+       XZ: () => HV,
```

#### 3. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L178` → after: `L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/errorLogging.js#L178) · [Before (L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/errorLogging.js#L178)

```diff
-             if (MM.internalLogger.debug(`Registering public faro reference in the global scope using "${MM.config.globalObjectKey}" key`), MM.config.globalObjectKey in zM) return void MM.internalLogger.warn(`Skipping global registration due to key "${MM.config.globalObjectKey}" b … [truncated]
+             if (VV.internalLogger.debug(`Registering public faro reference in the global scope using "${VV.config.globalObjectKey}" key`), VV.config.globalObjectKey in wV) return void VV.internalLogger.warn(`Skipping global registration due to key "${VV.config.globalObjectKey}" b … [truncated]
```

#### 4. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L193` → after: `L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/errorLogging.js#L193) · [Before (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/errorLogging.js#L193)

```diff
-       return Object.prototype.toString.call(MM) === `[object ${rM}]`
+       return Object.prototype.toString.call(VV) === `[object ${eV}]`
```

#### 5. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L243` → after: `L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/errorLogging.js#L243) · [Before (L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/errorLogging.js#L243)

```diff
-       return CM(MM) ? MM : MM instanceof URL ? MM.href : !XM(MM) && uM(null === MM || void 0 === MM ? void 0 : MM.toString) ? MM.toString() : void 0
+       return TV(VV) ? VV : VV instanceof URL ? VV.href : !HV(VV) && zV(null === VV || void 0 === VV ? void 0 : VV.toString) ? VV.toString() : void 0
```

#### 6. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L256` → after: `L256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/errorLogging.js#L256) · [Before (L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/errorLogging.js#L256)

```diff
-         return null === (rM = JM.internalLogger) || void 0 === rM || rM.info(`Web storage of type ${MM} is not available. Reason: ${iM}`), !1
+         return null === (eV = bV.internalLogger) || void 0 === eV || eV.info(`Web storage of type ${VV} is not available. Reason: ${xV}`), !1
```

#### 7. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L277` → after: `L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/errorLogging.js#L277) · [Before (L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/errorLogging.js#L277)

```diff
-       return MM === VM ? Or : MM === TM && Sr
+       return VV === dV ? Je : VV === IV && Ye
```

#### 8. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L299` → after: `L299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/errorLogging.js#L299) · [Before (L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/errorLogging.js#L299)

```diff
-       return "symbol" == ar(rM) ? rM : rM + ""
+       return "symbol" == ye(eV) ? eV : eV + ""
```

#### 9. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L340` → after: `L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/errorLogging.js#L340) · [Before (L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/errorLogging.js#L340)

```diff
-         })) && void 0 !== iM ? iM : null === SM || void 0 === SM ? void 0 : SM.samplingRate) && void 0 !== rM ? rM : 1,
+         })) && void 0 !== xV ? xV : null === YV || void 0 === YV ? void 0 : YV.samplingRate) && void 0 !== eV ? eV : 1,
```

#### 10. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L434-L435` → after: `L434-L435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L434-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/errorLogging.js#L434-L435) · [Before (L434-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/errorLogging.js#L434-L435)

```diff
-         lastActivity: null !== iM && void 0 !== iM ? iM : aM,
-         started: null !== rM && void 0 !== rM ? rM : aM,
+         lastActivity: null !== xV && void 0 !== xV ? xV : yV,
+         started: null !== eV && void 0 !== eV ? eV : yV,
```

#### 11. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L466` → after: `L466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/errorLogging.js#L466) · [Before (L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/errorLogging.js#L466)

```diff
-         if (nM = Math.min(mM + SM, (null !== (zM = null === JM || void 0 === JM ? void 0 : JM.started) && void 0 !== zM ? zM : mM) + jM, (null !== (LM = null === JM || void 0 === JM ? void 0 : JM.lastActivity) && void 0 !== LM ? LM : mM) + aM), !1 === MM && ur(JM)) {
+         if (QV = Math.min(vV + YV, (null !== (wV = null === bV || void 0 === bV ? void 0 : bV.started) && void 0 !== wV ? wV : vV) + UV, (null !== (ZV = null === bV || void 0 === bV ? void 0 : bV.lastActivity) && void 0 !== ZV ? ZV : vV) + yV), !1 === VV && ze(bV)) {
```

#### 12. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L478` → after: `L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/errorLogging.js#L478) · [Before (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/errorLogging.js#L478)

```diff
-           nM = mM + SM, iM(MM), null === (yM = PM.api) || void 0 === yM || yM.setSession(MM.sessionMeta), null === HM || void 0 === HM || null === (lM = HM.onSessionChange) || void 0 === lM || lM.call(HM, null !== (EM = null === JM || void 0 === JM ? void 0 : JM.sessionMeta) && v … [truncated]
+           QV = vV + YV, xV(VV), null === (BV = pV.api) || void 0 === BV || BV.setSession(VV.sessionMeta), null === rV || void 0 === rV || null === (jV = rV.onSessionChange) || void 0 === jV || jV.call(rV, null !== (qV = null === bV || void 0 === bV ? void 0 : bV.sessionMeta) && v … [truncated]
```

#### 13. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L507` → after: `L507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/errorLogging.js#L507) · [Before (L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/errorLogging.js#L507)

```diff
-             attributes: Dr(zr(zr(zr({}, null === (OM = iM.config.sessionTracking) || void 0 === OM || null === (OM = OM.session) || void 0 === OM ? void 0 : OM.attributes), null !== (SM = null === (jM = iM.metas.value.session) || void 0 === jM ? void 0 : jM.attributes) && void 0  … [truncated]
+             attributes: De(we(we(we({}, null === (JV = xV.config.sessionTracking) || void 0 === JV || null === (JV = JV.session) || void 0 === JV ? void 0 : JV.attributes), null !== (YV = null === (UV = xV.metas.value.session) || void 0 === UV ? void 0 : UV.attributes) && void 0  … [truncated]
```

#### 14. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L512` → after: `L512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/errorLogging.js#L512) · [Before (L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/errorLogging.js#L512)

```diff
-         zM = null !== (aM = null === (PM = iM.metas.value.session) || void 0 === PM ? void 0 : PM.overrides) && void 0 !== aM ? aM : null === rM || void 0 === rM || null === (nM = rM.sessionMeta) || void 0 === nM ? void 0 : nM.overrides;
+         wV = null !== (yV = null === (pV = xV.metas.value.session) || void 0 === pV ? void 0 : pV.overrides) && void 0 !== yV ? yV : null === eV || void 0 === eV || null === (QV = eV.sessionMeta) || void 0 === QV ? void 0 : QV.overrides;
```

#### 15. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L537` → after: `L537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/errorLogging.js#L537) · [Before (L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/errorLogging.js#L537)

```diff
-             rM = Wr(MM ? aM : gr({
+             eV = Re(VV ? yV : Me({
```

#### 16. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L549` → after: `L549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/errorLogging.js#L549) · [Before (L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/errorLogging.js#L549)

```diff
-                 nM = null !== (SM = null !== (jM = OM.serviceName) && void 0 !== jM ? jM : null === (aM = MM.metas.value.app) || void 0 === aM ? void 0 : aM.name) && void 0 !== SM ? SM : "";
+                 QV = null !== (YV = null !== (UV = JV.serviceName) && void 0 !== UV ? UV : null === (yV = VV.metas.value.app) || void 0 === yV ? void 0 : yV.name) && void 0 !== YV ? YV : "";
```

#### 17. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L575` → after: `L575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/errorLogging.js#L575) · [Before (L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/errorLogging.js#L575)

```diff
-       return JSON.stringify(null !== MM && void 0 !== MM ? MM : {}, function() {
+       return JSON.stringify(null !== VV && void 0 !== VV ? VV : {}, function() {
```

#### 18. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L741` → after: `L741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/errorLogging.js#L741) · [Before (L741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/errorLogging.js#L741)

```diff
-             QM = null !== (rM = null === PM || void 0 === PM ? void 0 : PM.overrides) && void 0 !== rM ? rM : null === SM || void 0 === SM ? void 0 : SM.session.overrides;
+             nV = null !== (eV = null === pV || void 0 === pV ? void 0 : pV.overrides) && void 0 !== eV ? eV : null === YV || void 0 === YV ? void 0 : YV.session.overrides;
```

#### 19. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L766` → after: `L766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/errorLogging.js#L766) · [Before (L766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/errorLogging.js#L766)

```diff
-       return (null === MM || void 0 === MM ? void 0 : MM.persistent) ? or : fr
+       return (null === VV || void 0 === VV ? void 0 : VV.persistent) ? ae : oe
```

#### 20. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L801` → after: `L801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/errorLogging.js#L801) · [Before (L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/errorLogging.js#L801)

```diff
-       return "symbol" == Ir(rM) ? rM : rM + ""
+       return "symbol" == ue(eV) ? eV : eV + ""
```

#### 21. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L892` → after: `L892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/errorLogging.js#L892) · [Before (L892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/errorLogging.js#L892)

```diff
-             sessionId: (null === iM || void 0 === iM ? void 0 : iM.reset) ? void 0 : null !== (nM = null === OM || void 0 === OM ? void 0 : OM.id) && void 0 !== nM ? nM : null === (QM = rM.session) || void 0 === QM ? void 0 : QM.id,
+             sessionId: (null === xV || void 0 === xV ? void 0 : xV.reset) ? void 0 : null !== (QV = null === JV || void 0 === JV ? void 0 : JV.id) && void 0 !== QV ? QV : null === (nV = eV.session) || void 0 === nV ? void 0 : nV.id,
```
