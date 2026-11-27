# Changed — Bundle Modifications Report (Part 053 / 126)

- **Updated at**: `2026-11-28T08:15 JST`
- **Part**: `53 / 126` (**381** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 052](part-052.md) · [Part 054 →](part-054.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/295.js` (4udp6d.2845de07 → fl4vv.bd3c59ce · continued)

- **File**: `bundles/bloxd.io/chunks/js/295.js` (72 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617)

#### 11. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L868-L870` → after: `L319-L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L319-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/295.js#L319-L341) · [Before (L868-L870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/295.js#L868-L870)

```diff
-         }, null, aR), (0, yR.l)(null, null, JR, {
-           kind: "field",
-           name: "keysUp",
+         }, null, vr), (0, Zr.k)(rr, null, hr, {
+           kind: "getter",
+           name: "intensityMode",
+           static: !1,
+           private: !1,
+           access: {
+             has: rr => "intensityMode" in rr,
+             get: rr => rr.intensityMode
+           },
+           metadata: Sr
+         }, null, vr), (0, Zr.k)(rr, null, zr, {
+           kind: "getter",
+           name: "radius",
+           static: !1,
+           private: !1,
+           access: {
+ ... (7 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L874-L875` → after: `L345-L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L345-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/295.js#L345-L346) · [Before (L874-L875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/295.js#L874-L875)

```diff
-             has: RR => "keysUp" in RR,
-             get: RR => RR.keysUp,
+             has: rr => "renderPriority" in rr,
+             get: rr => rr.renderPriority,
```

#### 13. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L877` → after: `L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/295.js#L348) · [Before (L877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/295.js#L877)

```diff
-               RR.keysUp = JR
+               rr.renderPriority = Sr
```

#### 14. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L881` → after: `L352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/295.js#L352) · [Before (L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/295.js#L881)

```diff
-         }, LR, nR), (0, yR.l)(null, null, GR, {
+         }, Mr, Gr), (0, Zr.k)(null, null, Qr, {
```

#### 15. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L883` → after: `L354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/295.js#L354) · [Before (L883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/295.js#L883)

```diff
-           name: "keysDown",
+           name: "diffuse",
```

#### 16. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L887-L888` → after: `L358-L359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L358-L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/295.js#L358-L359) · [Before (L887-L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/295.js#L887-L888)

```diff
-             has: RR => "keysDown" in RR,
-             get: RR => RR.keysDown,
+             has: rr => "diffuse" in rr,
+             get: rr => rr.diffuse,
```

#### 17. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L890` → after: `L361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/295.js#L361) · [Before (L890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/295.js#L890)

```diff
-               RR.keysDown = JR
+               rr.diffuse = Sr
```

#### 18. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L894` → after: `L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/295.js#L365) · [Before (L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/295.js#L894)

```diff
-         }, UR, WR), (0, yR.l)(null, null, uR, {
+         }, Or, Lr), (0, Zr.k)(null, null, mr, {
```

#### 19. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L896` → after: `L367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/295.js#L367) · [Before (L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/295.js#L896)

```diff
-           name: "keysLeft",
+           name: "specular",
```

#### 20. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L900-L901` → after: `L371-L372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L371-L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/295.js#L371-L372) · [Before (L900-L901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/295.js#L900-L901)

```diff
-             has: RR => "keysLeft" in RR,
-             get: RR => RR.keysLeft,
+             has: rr => "specular" in rr,
+             get: rr => rr.specular,
```

#### 21. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L903` → after: `L374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/295.js#L374) · [Before (L903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/295.js#L903)

```diff
-               RR.keysLeft = JR
+               rr.specular = Sr
```

#### 22. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L907` → after: `L378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/295.js#L378) · [Before (L907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/295.js#L907)

```diff
-         }, AR, XR), (0, yR.l)(null, null, qR, {
+         }, lr, Xr), (0, Zr.k)(null, null, Nr, {
```

#### 23. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L909` → after: `L380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/295.js#L380) · [Before (L909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/295.js#L909)

```diff
-           name: "keysRight",
+           name: "falloffType",
```

#### 24. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L913-L914` → after: `L384-L385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L384-L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/295.js#L384-L385) · [Before (L913-L914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/295.js#L913-L914)

```diff
-             has: RR => "keysRight" in RR,
-             get: RR => RR.keysRight,
+             has: rr => "falloffType" in rr,
+             get: rr => rr.falloffType,
```

#### 25. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L916` → after: `L387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/295.js#L387) · [Before (L916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/295.js#L916)

```diff
-               RR.keysRight = JR
+               rr.falloffType = Sr
```

#### 26. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L920` → after: `L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/295.js#L391) · [Before (L920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/295.js#L920)

```diff
-         }, MR, BR), (0, yR.l)(null, null, iR, {
+         }, Pr, Hr), (0, Zr.k)(null, null, Ur, {
```

#### 27. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L922` → after: `L393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/295.js#L393) · [Before (L922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/295.js#L922)

```diff
-           name: "keysReset",
+           name: "intensity",
```

#### 28. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L926-L927` → after: `L397-L398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L397-L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/295.js#L397-L398) · [Before (L926-L927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/295.js#L926-L927)

```diff
-             has: RR => "keysReset" in RR,
-             get: RR => RR.keysReset,
+             has: rr => "intensity" in rr,
+             get: rr => rr.intensity,
```

#### 29. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L929` → after: `L400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/295.js#L400) · [Before (L929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/295.js#L929)

```diff
-               RR.keysReset = JR
+               rr.intensity = Sr
```

#### 30. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L933` → after: `L404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/295.js#L404) · [Before (L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/295.js#L933)

```diff
-         }, pR, gR), (0, yR.l)(null, null, fR, {
+         }, qr, Rr), (0, Zr.k)(null, null, Yr, {
```

#### 31. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L935` → after: `L406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/295.js#L406) · [Before (L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/295.js#L935)

```diff
-           name: "keysZoomIn",
+           name: "_renderPriority",
```

#### 32. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L939-L940` → after: `L410-L411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L410-L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/295.js#L410-L411) · [Before (L939-L940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/295.js#L939-L940)

```diff
-             has: RR => "keysZoomIn" in RR,
-             get: RR => RR.keysZoomIn,
+             has: rr => "_renderPriority" in rr,
+             get: rr => rr._renderPriority,
```

#### 33. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L942` → after: `L413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/295.js#L413) · [Before (L942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/295.js#L942)

```diff
-               RR.keysZoomIn = JR
+               rr._renderPriority = Sr
```

#### 34. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L946` → after: `L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/295.js#L417) · [Before (L946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/295.js#L946)

```diff
-         }, bR, vR), (0, yR.l)(null, null, VR, {
+         }, gr, Cr), (0, Zr.k)(null, null, er, {
```

#### 35. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L948` → after: `L419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/295.js#L419) · [Before (L948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/295.js#L948)

```diff
-           name: "keysZoomOut",
+           name: "_shadowEnabled",
```

#### 36. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L952-L953` → after: `L423-L424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L423-L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/295.js#L423-L424) · [Before (L952-L953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/295.js#L952-L953)

```diff
-             has: RR => "keysZoomOut" in RR,
-             get: RR => RR.keysZoomOut,
+             has: rr => "_shadowEnabled" in rr,
+             get: rr => rr._shadowEnabled,
```

#### 37. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L955` → after: `L426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/295.js#L426) · [Before (L955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/295.js#L955)

```diff
-               RR.keysZoomOut = JR
+               rr._shadowEnabled = Sr
```

#### 38. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L959` → after: `L430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/295.js#L430) · [Before (L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/295.js#L959)

```diff
-         }, OR, xR), (0, yR.l)(null, null, KR, {
+         }, kr, Ar), (0, Zr.k)(null, null, Kr, {
```

#### 39. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L961` → after: `L432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/295.js#L432) · [Before (L961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/295.js#L961)

```diff
-           name: "panningSensibility",
+           name: "_excludeWithLayerMask",
```

#### 40. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L965-L966` → after: `L436-L437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L436-L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/295.js#L436-L437) · [Before (L965-L966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/295.js#L965-L966)

```diff
-             has: RR => "panningSensibility" in RR,
-             get: RR => RR.panningSensibility,
+             has: rr => "_excludeWithLayerMask" in rr,
+             get: rr => rr._excludeWithLayerMask,
```

#### 41. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L968` → after: `L439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/295.js#L439) · [Before (L968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/295.js#L968)

```diff
-               RR.panningSensibility = JR
+               rr._excludeWithLayerMask = Sr
```

#### 42. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L972` → after: `L443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/295.js#L443) · [Before (L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/295.js#L972)

```diff
-         }, NR, DR), (0, yR.l)(null, null, wR, {
+         }, Vr, ir), (0, Zr.k)(null, null, yr, {
```

#### 43. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L974` → after: `L445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/295.js#L445) · [Before (L974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/295.js#L974)

```diff
-           name: "zoomingSensibility",
+           name: "_includeOnlyWithLayerMask",
```

#### 44. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L978-L979` → after: `L449-L450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L449-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/295.js#L449-L450) · [Before (L978-L979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/295.js#L978-L979)

```diff
-             has: RR => "zoomingSensibility" in RR,
-             get: RR => RR.zoomingSensibility,
+             has: rr => "_includeOnlyWithLayerMask" in rr,
+             get: rr => rr._includeOnlyWithLayerMask,
```

#### 45. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L981` → after: `L452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/295.js#L452) · [Before (L981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/295.js#L981)

```diff
-               RR.zoomingSensibility = JR
+               rr._includeOnlyWithLayerMask = Sr
```

#### 46. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L985` → after: `L456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/295.js#L456) · [Before (L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/295.js#L985)

```diff
-         }, HR, oR), (0, yR.l)(null, null, rR, {
+         }, wr, cr), (0, Zr.k)(null, null, Br, {
```

#### 47. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L987` → after: `L458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/295.js#L458) · [Before (L987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/295.js#L987)

```diff
-           name: "angularSpeed",
+           name: "_lightmapMode",
```

#### 48. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L991-L992` → after: `L462-L463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L462-L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/295.js#L462-L463) · [Before (L991-L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/295.js#L991-L992)

```diff
-             has: RR => "angularSpeed" in RR,
-             get: RR => RR.angularSpeed,
+             has: rr => "_lightmapMode" in rr,
+             get: rr => rr._lightmapMode,
```

#### 49. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L994` → after: `L465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/295.js#L465) · [Before (L994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/295.js#L994)

```diff
-               RR.angularSpeed = JR
+               rr._lightmapMode = Sr
```

#### 50. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1004-L1008` → after: `L475-L493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L475-L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/295.js#L475-L493) · [Before (L1004-L1008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/295.js#L1004-L1008)

```diff
-       })(), RR
-     })();
-     AR.e.ArcRotateCameraKeyboardMoveInput = pR;
-     var gR = GR(38933),
-       bR = GR(41707);
+       })(), rr.FALLOFF_DEFAULT = pr.b.FALLOFF_DEFAULT, rr.FALLOFF_PHYSICAL = pr.b.FALLOFF_PHYSICAL, rr.FALLOFF_GLTF = pr.b.FALLOFF_GLTF, rr.FALLOFF_STANDARD = pr.b.FALLOFF_STANDARD, rr.LIGHTMAP_DEFAULT = pr.b.LIGHTMAP_DEFAULT, rr.LIGHTMAP_SPECULAR = pr.b.LIGHTMAP_SPECULAR, rr.LIG … [truncated]
+     })()
+   },
+   42060: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       c: () => xr
+     });
+     var Zr = Qr(41872),
+       Wr = Qr(38560),
+       ar = Qr(41875),
+       jr = Qr(38595),
+       Ir = Qr(38587),
+       fr = Qr(41769),
+       Er = Qr(41889);
+     class pr {
+       constructor() {
+ ... (3 more added lines; see GitHub link above)
```

#### 51. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1011` → after: `L496-L500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L496-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/295.js#L496-L500) · [Before (L1011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/295.js#L1011)

```diff
-       let JR, GR, uR, iR = [],
+       let Sr, Qr, xr, mr, Nr, Ur = [],
+         tr = [],
+         hr = [],
+         zr = [],
+         Yr = [],
```

#### 52. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1018-L1019` → after: `L507-L508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L507-L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/295.js#L507-L508) · [Before (L1018-L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/295.js#L1018-L1019)

```diff
-         constructor() {
-           this.wheelPrecision = (0, yR.m)(this, iR, 3), this.zoomToMouseLocation = ((0, yR.m)(this, fR), (0, yR.m)(this, KR, !1)), this.wheelDeltaPercentage = ((0, yR.m)(this, rR), (0, yR.m)(this, eR, 0)), this.customComputeDeltaFromMouseWheel = ((0, yR.m)(this, aR), null), this. … [truncated]
+         static AddNodeConstructor(rr, Sr) {
+           this._NodeConstructors[rr] = Sr
```

#### 53. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1021-L1058` → after: `L510-L533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L510-L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/295.js#L510-L533) · [Before (L1021-L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/295.js#L1021-L1058)

```diff
-         _computeDeltaFromMouseWheelLegacyEvent(RR, JR) {
-           let GR;
-           const yR = .01 * RR * this.wheelDeltaPercentage * JR;
-           return GR = RR > 0 ? yR / (1 + this.wheelDeltaPercentage) : yR * (1 + this.wheelDeltaPercentage), GR
-         }
-         attachControl(RR) {
-           RR = CR.h.BackCompatCameraNoPreventDefault(arguments), this._wheel = JR => {
-             if (JR.type !== VR.c.POINTERWHEEL) return;
-             const GR = JR.event;
-             let yR;
-             const tR = GR.deltaMode === bR.c.DOM_DELTA_LINE ? 40 : 1,
-               uR = -GR.deltaY * tR;
-             if (this.customComputeDeltaFromMouseWheel) yR = this.customComputeDeltaFromMouseWheel(uR, this, GR);
-             else if (this.wheelDeltaPercentage) {
-               if (yR = this._computeDeltaFromMouseWheelLegacyEvent(uR, this.camera.radius), yR > 0) {
-                 const RR = this.zoomToMouseLocation ? this._zoomToMouseRadiusOffset : this.camera.inertialRadiusOffset;
- ... (22 more removed lines; see GitHub link above)
+         static Construct(rr, Sr, Qr, Zr) {
+           const Wr = this._NodeConstructors[rr];
+           return Wr ? Wr(Sr, Qr, Zr) : null
+         }
+         set accessibilityTag(rr) {
+           this._accessibilityTag = rr, this.onAccessibilityTagChangedObservable.notifyObservers(rr)
+         }
+         get accessibilityTag() {
+           return this._accessibilityTag
+         }
+         get doNotSerialize() {
+           return !!this._nodeDataStorage._doNotSerialize || !!this._parentNode && this._parentNode.doNotSerialize
+         }
+         set doNotSerialize(rr) {
+           this._nodeDataStorage._doNotSerialize = rr
+         }
+ ... (8 more added lines; see GitHub link above)
```

#### 54. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1062` → after: `L572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/295.js#L572) · [Before (L1062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/295.js#L1062)

```diff
-           return "ArcRotateCameraMouseWheelInput"
+           return "Node"
```

#### 55. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1064-L1065` → after: `L574-L575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L574-L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/295.js#L574-L575) · [Before (L1064-L1065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/295.js#L1064-L1065)

```diff
-         getSimpleName() {
-           return "mousewheel"
+         set onDispose(rr) {
+           this._onDisposeObserver && this.lC.remove(this._onDisposeObserver), this._onDisposeObserver = this.lC.add(rr)
```

#### 56. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1067-L1070` → after: `L577-L578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L577-L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/295.js#L577-L578) · [Before (L1067-L1070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/295.js#L1067-L1070)

```diff
-         _updateHitPlane() {
-           const RR = this.camera,
-             JR = RR.target.subtract(RR.position);
-           this._hitPlane = gR.c.FromPositionAndNormal(RR.target, JR)
+         get onEnabledStateChangedObservable() {
+           return this._nodeDataStorage._onEnabledStateChangedObservable
```

#### 57. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1072-L1086` → after: `L580-L676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L580-L676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/295.js#L580-L676) · [Before (L1072-L1086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/295.js#L1072-L1086)

```diff
-         _getPosition() {
-           const RR = this.camera,
-             JR = RR.jH(),
-             GR = JR.createPickingRay(JR.pointerX, JR.pointerY, ZR.e.Identity(), RR, !1);
-           0 === RR.targetScreenOffset.x && 0 === RR.targetScreenOffset.y || (this._viewOffset.set(RR.targetScreenOffset.x, RR.targetScreenOffset.y, 0), RR.getViewMatrix().invertToRef(RR._cameraTransformMatrix), this._globalOffset = ZR.r.TransformNormal(this._viewOffset, RR._camer … [truncated]
-           let yR = 0;
-           return this._hitPlane && (yR = GR.intersectsPlane(this._hitPlane) ?? 0), GR.origin.addInPlace(GR.direction.scaleInPlace(yR))
-         }
-         _zoomToMouse(RR) {
-           const JR = this.camera,
-             GR = 1 - JR.inertia,
-             yR = JR.movement.getFrameIndependentInputScale(JR.inertia);
-           if (JR.lowerRadiusLimit) {
-             const tR = JR.lowerRadiusLimit ?? 0;
-             JR.radius - (this._zoomToMouseRadiusOffset + RR * yR) / GR < tR && (RR = ((JR.radius - tR) * GR - this._zoomToMouseRadiusOffset) / yR)
+         get onEffectiveEnabledStateChangedObservable() {
+           var rr;
+           return (rr = this._nodeDataStorage)._onEffectiveEnabledStateChangedObservable ?? (rr._onEffectiveEnabledStateChangedObservable = new jr.d)
+         }
+         get onClonedObservable() {
+           return this._nodeDataStorage._onClonedObservable
+         }
+         constructor(rr) {
+           let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
+             Qr = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
+           this._isDirty = !1, this._nodeDataStorage = new pr, this.name = (0, Zr.m)(this, Ur, void 0), this.id = ((0, Zr.m)(this, tr), (0, Zr.m)(this, hr, void 0)), this.uniqueId = ((0, Zr.m)(this, zr), (0, Zr.m)(this, Yr, void 0)), this.state = ((0, Zr.m)(this, nr), (0, Zr.m)(th … [truncated]
+         }
+         eC() {
+           return this._scene
+         }
+         MU() {
+ ... (81 more added lines; see GitHub link above)
```

#### 58. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1088-L1090` → after: `L678-L716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L678-L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/295.js#L678-L716) · [Before (L1088-L1090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/295.js#L1088-L1090)

```diff
-           if (JR.upperRadiusLimit) {
-             const tR = JR.upperRadiusLimit ?? 0;
-             JR.radius - (this._zoomToMouseRadiusOffset + RR * yR) / GR > tR && (RR = ((JR.radius - tR) * GR - this._zoomToMouseRadiusOffset) / yR)
+         }
+         isDescendantOf(rr) {
+           return !!this.parent && (this.parent === rr || this.parent.isDescendantOf(rr))
+         }
+         _getDescendants(rr) {
+           let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+             Qr = arguments.length > 2 ? arguments[2] : void 0;
+           if (this._children)
+             for (let Zr = 0; Zr < this._children.length; Zr++) {
+               const Wr = this._children[Zr];
+               Qr && !Qr(Wr) || rr.push(Wr), Sr || Wr._getDescendants(rr, !1, Qr)
+             }
+         }
+         getDescendants(rr, Sr) {
+           const Qr = [];
+           return this._getDescendants(Qr, rr, Sr), Qr
+ ... (23 more added lines; see GitHub link above)
```

#### 59. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1097-L1098` → after: `L719-L802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L719-L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/295.js#L719-L802) · [Before (L1097-L1098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/295.js#L1097-L1098)

```diff
-         _zeroIfClose(RR) {
-           Math.abs(RR.x) < wR.c && (RR.x = 0), Math.abs(RR.y) < wR.c && (RR.y = 0), Math.abs(RR.z) < wR.c && (RR.z = 0)
+         deleteAnimationRange(rr) {
+           let Sr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+           for (let Qr = 0, Zr = this.animations.length; Qr < Zr; Qr++) this.animations[Qr] && this.animations[Qr].deleteRange(rr, Sr);
+           this._ranges[rr] = null
+         }
+         getAnimationRange(rr) {
+           return this._ranges[rr] || null
+         }
+         clone(Sr, Qr, Zr) {
+           const Wr = Er.e.Clone((() => new rr(Sr, this.eC())), this);
+           if (Qr && (Wr.parent = Qr), !Zr) {
+             const rr = this.getDescendants(!0);
+             for (let Qr = 0; Qr < rr.length; Qr++) {
+               const Zr = rr[Qr];
+               Zr.clone(Sr + "." + Zr.name, Wr)
+             }
+ ... (68 more added lines; see GitHub link above)
```

#### 60. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1102` → after: `L806-L819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L806-L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/295.js#L806-L819) · [Before (L1102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/295.js#L1102)

```diff
-         JR = [(0, tR.H)()], GR = [(0, tR.H)()], uR = [(0, tR.H)()], (0, yR.l)(null, null, JR, {
+         Sr = [(0, ar.G)()], Qr = [(0, ar.G)()], xr = [(0, ar.G)()], mr = [(0, ar.G)()], Nr = [(0, ar.G)()], (0, Zr.k)(null, null, Sr, {
+           kind: "field",
+           name: "name",
+           static: !1,
+           private: !1,
+           access: {
+             has: rr => "name" in rr,
+             get: rr => rr.name,
+             set: (rr, Sr) => {
+               rr.name = Sr
+             }
+           },
+           metadata: Wr
+         }, Ur, tr), (0, Zr.k)(null, null, Qr, {
```

#### 61. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1104` → after: `L821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/295.js#L821) · [Before (L1104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/295.js#L1104)

```diff
-           name: "wheelPrecision",
+           name: "id",
```

#### 62. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1108-L1109` → after: `L825-L826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L825-L826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/295.js#L825-L826) · [Before (L1108-L1109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/295.js#L1108-L1109)

```diff
-             has: RR => "wheelPrecision" in RR,
-             get: RR => RR.wheelPrecision,
+             has: rr => "id" in rr,
+             get: rr => rr.id,
```

#### 63. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1111` → after: `L828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/295.js#L828) · [Before (L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/295.js#L1111)

```diff
-               RR.wheelPrecision = JR
+               rr.id = Sr
```

#### 64. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1115` → after: `L832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/295.js#L832) · [Before (L1115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/295.js#L1115)

```diff
-         }, iR, fR), (0, yR.l)(null, null, GR, {
+         }, hr, zr), (0, Zr.k)(null, null, xr, {
```

#### 65. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1117` → after: `L834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/295.js#L834) · [Before (L1117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/295.js#L1117)

```diff
-           name: "zoomToMouseLocation",
+           name: "uniqueId",
```

#### 66. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1121-L1122` → after: `L838-L839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L838-L839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/295.js#L838-L839) · [Before (L1121-L1122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/295.js#L1121-L1122)

```diff
-             has: RR => "zoomToMouseLocation" in RR,
-             get: RR => RR.zoomToMouseLocation,
+             has: rr => "uniqueId" in rr,
+             get: rr => rr.uniqueId,
```

#### 67. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1124` → after: `L841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/295.js#L841) · [Before (L1124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/295.js#L1124)

```diff
-               RR.zoomToMouseLocation = JR
+               rr.uniqueId = Sr
```

#### 68. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1128` → after: `L845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/295.js#L845) · [Before (L1128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/295.js#L1128)

```diff
-         }, KR, rR), (0, yR.l)(null, null, uR, {
+         }, Yr, nr), (0, Zr.k)(null, null, mr, {
```

#### 69. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1130` → after: `L847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/295.js#L847) · [Before (L1130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/295.js#L1130)

```diff
-           name: "wheelDeltaPercentage",
+           name: "state",
```

#### 70. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1134-L1135` → after: `L851-L852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L851-L852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/295.js#L851-L852) · [Before (L1134-L1135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/295.js#L1134-L1135)

```diff
-             has: RR => "wheelDeltaPercentage" in RR,
-             get: RR => RR.wheelDeltaPercentage,
+             has: rr => "state" in rr,
+             get: rr => rr.state,
```

#### 71. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1137` → after: `L854-L867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L854-L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/295.js#L854-L867) · [Before (L1137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/295.js#L1137)

```diff
-               RR.wheelDeltaPercentage = JR
+               rr.state = Sr
+             }
+           },
+           metadata: Wr
+         }, er, Kr), (0, Zr.k)(null, null, Nr, {
+           kind: "field",
+           name: "metadata",
+           static: !1,
+           private: !1,
+           access: {
+             has: rr => "metadata" in rr,
+             get: rr => rr.metadata,
+             set: (rr, Sr) => {
+               rr.metadata = Sr
```

#### 72. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1147-L2236` → after: `L877-L880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L877-L880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/295.js#L877-L880) · [Before (L1147-L2236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/295.js#L1147-L2236)

```diff
-       })(), RR
-     })();
-     AR.e.ArcRotateCameraMouseWheelInput = vR;
-     var OR, xR, NR = GR(41407);
-     class DR extends AR.i {
-       constructor(RR) {
-         super(RR)
-       }
-       addMouseWheel() {
-         return this.add(new vR), this
-       }
-       addPointers() {
-         return this.add(new BR), this
-       }
-       addKeyboard() {
-         return this.add(new pR), this
- ... (1074 more removed lines; see GitHub link above)
+       })(), rr._AnimationRangeFactory = (rr, Sr, Qr) => {
+         throw (0, fr.l)("AnimationRange")
+       }, rr._NodeConstructors = {}, rr
+     })()
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/296.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/296.js` (192 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486)

#### 1. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L4)

```diff
-   41925: (RR, JR, GR) => {
+   42949: (rr, Sr, Qr) => {
```

#### 2. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L6)

```diff
-       e: () => tR
+       d: () => Ar
```

#### 3. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L8-L77` → after: `L8-L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L8-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L8-L94) · [Before (L8-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L8-L77)

```diff
-     var yR = GR(41527);
- 
-     function tR(RR) {
-       return class extends RR {
-         constructor() {
-           super(...arguments);
-           const RR = new.target;
-           if (!RR[Symbol.metadata]) {
-             const JR = Object.getPrototypeOf(RR)?.[Symbol.metadata];
-             RR[Symbol.metadata] = JR ? Object.create(JR) : {}
-           }
-           const JR = (0, yR.d)(RR[Symbol.metadata]);
-           JR._imageProcessingConfiguration || (JR._imageProcessingConfiguration = {
-             type: 9,
-             sourceName: void 0
-           })
- ... (54 more removed lines; see GitHub link above)
+     var Zr = Qr(41872),
+       Wr = Qr(41875),
+       ar = Qr(38595),
+       jr = Qr(38560),
+       Ir = Qr(38599),
+       fr = Qr(42060),
+       Er = Qr(42243),
+       pr = Qr(42028),
+       xr = Qr(41787),
+       mr = Qr(38569);
+     class Nr {
+       constructor() {
+         this._zoomStopsAnimation = !1, this._idleRotationSpeed = .05, this._idleRotationWaitTime = 2e3, this._idleRotationSpinupTime = 2e3, this.targetAlpha = null, this._attachedCamera = null, this._isPointerDown = !1, this._lastFrameTime = null, this._lastInteractionTime = -1 / … [truncated]
+       }
+       get name() {
+         return "AutoRotation"
+ ... (71 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L80-L91` → after: `L97-L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L97-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L97-L117) · [Before (L80-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L80-L91)

```diff
-   },
-   41797: (RR, JR, GR) => {
-     GR.d(JR, {
-       b: () => uR,
-       f: () => tR
-     });
-     var yR = GR(41803);
- 
-     function tR(RR) {
-       return class extends RR {
-         constructor() {
-           super(...arguments), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING … [truncated]
+     Qr(42952);
+     class Ur {
+       constructor() {
+         this._easingMode = Ur.EASINGMODE_EASEIN
+       }
+       setEasingMode(rr) {
+         const Sr = Math.min(Math.max(rr, 0), 2);
+         this._easingMode = Sr
+       }
+       getEasingMode() {
+         return this._easingMode
+       }
+       easeInCore(rr) {
+         throw new Error("You must implement this method")
+       }
+       ease(rr) {
+ ... (5 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L95` → after: `L122-L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L122-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L122-L124) · [Before (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L95)

```diff
-     class uR extends yR.b {
+     Ur.EASINGMODE_EASEIN = 0, Ur.EASINGMODE_EASEOUT = 1, Ur.EASINGMODE_EASEINOUT = 2;
+     var tr = Qr(42955);
+     class hr {
```

#### 6. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L97` → after: `L126-L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L126-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L126-L170) · [Before (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L97)

```diff
-         super(), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this. … [truncated]
+         this.transitionDuration = 450, this.lowerRadiusTransitionRange = 2, this.upperRadiusTransitionRange = -2, this._autoTransitionRange = !1, this._attachedCamera = null, this._radiusIsAnimating = !1, this._radiusBounceTransition = null, this._animatables = new Array
+       }
+       get name() {
+         return "Bouncing"
+       }
+       get autoTransitionRange() {
+         return this._autoTransitionRange
+       }
+       set autoTransitionRange(rr) {
+         if (this._autoTransitionRange === rr) return;
+         this._autoTransitionRange = rr;
+         const Sr = this._attachedCamera;
+         Sr && (rr ? this._onMeshTargetChangedObserver = Sr.onMeshTargetChangedObservable.add((rr => {
+           if (rr && (rr.computeWorldMatrix(!0), rr.mG)) {
+             const Sr = rr.mG().diagonalLength;
+             this.lowerRadiusTransitionRange = .05 * Sr, this.upperRadiusTransitionRange = .05 * Sr
+ ... (29 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L100-L112` → after: `L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L173) · [Before (L100-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L100-L112)

```diff
-   },
-   41881: (RR, JR, GR) => {
-     GR.d(JR, {
-       e: () => KR
-     });
-     var yR = GR(41520),
-       tR = GR(41810),
-       uR = GR(41524),
-       ZR = GR(41860),
-       qR = GR(41803),
-       iR = GR(41890),
-       fR = GR(41852);
-     class VR extends qR.b {
+     hr.EasingFunction = new class extends Ur {
```

#### 8. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L114` → after: `L175-L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L175-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L175-L176) · [Before (L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L114)

```diff
-         super(...arguments), this.DETAIL = !1, this.DETAILDIRECTUV = 0, this.DETAIL_NORMALBLENDMETHOD = 0
+         let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
+         super(), this.amplitude = rr
```

#### 9. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L116-L299` → after: `L178-L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L178-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L178-L182) · [Before (L116-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L116-L299)

```diff
-     }
-     let KR = (() => {
-       var RR, JR, GR, qR;
-       let KR, wR, rR, eR, aR, LR, nR = iR.b,
-         UR = [],
-         WR = [],
-         AR = [],
-         CR = [],
-         XR = [],
-         MR = [],
-         BR = [],
-         lR = [],
-         pR = [],
-         gR = [],
-         bR = [],
-         vR = [];
- ... (168 more removed lines; see GitHub link above)
+       easeInCore(rr) {
+         const Sr = Math.max(0, this.amplitude);
+         return Math.pow(rr, 3) - rr * Sr * Math.sin(3.141592653589793 * rr)
+       }
+     }(.3), hr.EasingMode = Ur.EASINGMODE_EASEOUT;
```

#### 10. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L301-L303` → after: `L184-L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L184-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L184-L185) · [Before (L301-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L301-L303)

```diff
-       constructor(RR) {
-         if (this.VERTEXOUTPUT_INVARIANT = !1, this._keys = [], this._isDirty = !0, this._areLightsDirty = !0, this._areLightsDisposed = !1, this._areAttributesDirty = !0, this._areTexturesDirty = !0, this._areFresnelDirty = !0, this._areMiscDirty = !0, this._arePrePassDirty = !0, … [truncated]
-           for (const JR in RR) Object.prototype.hasOwnProperty.call(RR, JR) && this._setDefaultValue(JR)
+       constructor() {
+         this.onTargetFramingAnimationEndObservable = new ar.d, this._mode = zr.FitFrustumSidesMode, this._radiusScale = 1, this._positionScale = .5, this._defaultElevation = .3, this._elevationReturnTime = 1500, this._elevationReturnWaitTime = 1e3, this._zoomStopsAnimation = !1,  … [truncated]
```

#### 11. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L305-L306` → after: `L187-L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L187-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L187-L188) · [Before (L305-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L305-L306)

```diff
-       get isDirty() {
-         return this._isDirty
+       get name() {
+         return "Framing"
```

#### 12. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L308-L309` → after: `L190-L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L190-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L190-L191) · [Before (L308-L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L308-L309)

```diff
-       markAsProcessed() {
-         this._isDirty = !1, this._areAttributesDirty = !1, this._areTexturesDirty = !1, this._areFresnelDirty = !1, this._areLightsDirty = !1, this._areLightsDisposed = !1, this._areMiscDirty = !1, this._arePrePassDirty = !1, this._areImageProcessingDirty = !1
+       set mode(rr) {
+         this._mode = rr
```

#### 13. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L311-L312` → after: `L193-L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L193-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L193-L194) · [Before (L311-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L311-L312)

```diff
-       markAsUnprocessed() {
-         this._isDirty = !0
+       get mode() {
+         return this._mode
```

#### 14. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L314-L315` → after: `L196-L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L196-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L196-L197) · [Before (L314-L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L314-L315)

```diff
-       markAllAsDirty() {
-         this._areTexturesDirty = !0, this._areAttributesDirty = !0, this._areLightsDirty = !0, this._areFresnelDirty = !0, this._areMiscDirty = !0, this._arePrePassDirty = !0, this._areImageProcessingDirty = !0, this._isDirty = !0
+       set radiusScale(rr) {
+         this._radiusScale = rr
```

#### 15. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L317-L318` → after: `L199-L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L199-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L199-L200) · [Before (L317-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L317-L318)

```diff
-       markAsImageProcessingDirty() {
-         this._areImageProcessingDirty = !0, this._isDirty = !0
+       get radiusScale() {
+         return this._radiusScale
```

#### 16. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L320-L322` → after: `L202-L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L202-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L202-L203) · [Before (L320-L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L320-L322)

```diff
-       markAsLightDirty() {
-         let RR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         this._areLightsDirty = !0, this._areLightsDisposed = this._areLightsDisposed || RR, this._isDirty = !0
+       set positionScale(rr) {
+         this._positionScale = rr
```

#### 17. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L324-L325` → after: `L205-L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L205-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L205-L206) · [Before (L324-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L324-L325)

```diff
-       markAsAttributesDirty() {
-         this._areAttributesDirty = !0, this._isDirty = !0
+       get positionScale() {
+         return this._positionScale
```

#### 18. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L327-L328` → after: `L208-L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L208-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L208-L209) · [Before (L327-L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L327-L328)

```diff
-       markAsTexturesDirty() {
-         this._areTexturesDirty = !0, this._isDirty = !0
+       set defaultElevation(rr) {
+         this._defaultElevation = rr
```

#### 19. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L330-L331` → after: `L211-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L211-L212) · [Before (L330-L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L330-L331)

```diff
-       markAsFresnelDirty() {
-         this._areFresnelDirty = !0, this._isDirty = !0
+       get defaultElevation() {
+         return this._defaultElevation
```

#### 20. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L333-L334` → after: `L214-L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L214-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L214-L215) · [Before (L333-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L333-L334)

```diff
-       markAsMiscDirty() {
-         this._areMiscDirty = !0, this._isDirty = !0
+       set elevationReturnTime(rr) {
+         this._elevationReturnTime = rr
```

#### 21. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L336-L337` → after: `L217-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L217-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L217-L218) · [Before (L336-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L336-L337)

```diff
-       markAsPrePassDirty() {
-         this._arePrePassDirty = !0, this._isDirty = !0
+       get elevationReturnTime() {
+         return this._elevationReturnTime
```

#### 22. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L339-L343` → after: `L220-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L220-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L220-L221) · [Before (L339-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L339-L343)

```diff
-       rebuild() {
-         this._keys.length = 0;
-         for (const RR of Object.keys(this)) "_" !== RR[0] && this._keys.push(RR);
-         if (this._externalProperties)
-           for (const RR in this._externalProperties) - 1 === this._keys.indexOf(RR) && this._keys.push(RR)
+       set elevationReturnWaitTime(rr) {
+         this._elevationReturnWaitTime = rr
```

#### 23. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L345-L351` → after: `L223-L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L223-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L223-L224) · [Before (L345-L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L345-L351)

```diff
-       isEqual(RR) {
-         if (this._keys.length !== RR._keys.length) return !1;
-         for (let JR = 0; JR < this._keys.length; JR++) {
-           const GR = this._keys[JR];
-           if (this[GR] !== RR[GR]) return !1
-         }
-         return !0
+       get elevationReturnWaitTime() {
+         return this._elevationReturnWaitTime
```

#### 24. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L353-L358` → after: `L226-L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L226-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L226-L227) · [Before (L353-L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L353-L358)

```diff
-       cloneTo(RR) {
-         this._keys.length !== RR._keys.length && (RR._keys = this._keys.slice(0));
-         for (let JR = 0; JR < this._keys.length; JR++) {
-           const GR = this._keys[JR];
-           RR[GR] = this[GR]
-         }
+       set zoomStopsAnimation(rr) {
+         this._zoomStopsAnimation = rr
```

#### 25. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L360-L375` → after: `L229-L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L229-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L229-L230) · [Before (L360-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L360-L375)

```diff
-       reset() {
-         for (const RR of this._keys) this._setDefaultValue(RR)
-       }
-       _setDefaultValue(RR) {
-         const JR = this._externalProperties?.[RR]?.type ?? typeof this[RR],
-           GR = this._externalProperties?.[RR]?.default;
-         switch (JR) {
-           case "number":
-             this[RR] = GR ?? 0;
-             break;
-           case "string":
-             this[RR] = GR ?? "";
-             break;
-           default:
-             this[RR] = GR ?? !1
-         }
+       get zoomStopsAnimation() {
+         return this._zoomStopsAnimation
```

#### 26. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L377-L389` → after: `L232-L281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L232-L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L232-L281) · [Before (L377-L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L377-L389)

```diff
-       toString() {
-         let RR = "";
-         for (let JR = 0; JR < this._keys.length; JR++) {
-           const GR = this._keys[JR],
-             yR = this[GR];
-           switch (typeof yR) {
-             case "number":
-             case "string":
-               RR += "#define " + GR + " " + yR + "\n";
-               break;
-             default:
-               yR && (RR += "#define " + GR + "\n")
-           }
+       set framingTime(rr) {
+         this._framingTime = rr
+       }
+       get framingTime() {
+         return this._framingTime
+       }
+       get attachedNode() {
+         return this._attachedCamera
+       }
+       init() {}
+       attach(rr) {
+         this._attachedCamera = rr;
+         const Sr = this._attachedCamera.eC();
+         zr.EasingFunction.setEasingMode(zr.EasingMode), this._onPrePointerObservableObserver = Sr.onPrePointerObservable.add((rr => {
+           rr.type !== pr.b.POINTERDOWN ? rr.type === pr.b.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
+         })), this._onMeshTargetChangedObserver = rr.onMeshTargetChangedObservable.add((rr => {
+ ... (34 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L391` → after: `L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L283) · [Before (L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L391)

```diff
-         return RR
+         this.zoomOnBoundingInfo(Zr, Wr, Sr, Qr)
```

#### 28. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L393-L443` → after: `L285-L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L285-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L285-L296) · [Before (L393-L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L393-L443)

```diff
-     }
-   },
-   41906: (RR, JR, GR) => {
-     GR.d(JR, {
-       c: () => qR,
-       d: () => ZR,
-       g: () => uR
-     });
-     var yR, tR = GR(38204);
- 
-     function uR(RR, JR) {
-       let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16777215;
-       const yR = JR(RR);
-       if (!Number.isInteger(yR) || yR < 0 || yR > GR) throw new Error(`Invalid geometry object ID ${yR} for mesh "${RR.name}". Object IDs must be integers between 0 and 0x${GR.toString(16).toUpperCase()}.`);
-       return yR
-     }
- ... (35 more removed lines; see GitHub link above)
+       zoomOnBoundingInfo(rr, Sr) {
+         let Qr, Zr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
+           Wr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
+         if (!this._attachedCamera) return !1;
+         const ar = rr.y,
+           Ir = ar + (Sr.y - ar) * this._positionScale,
+           fr = Sr.subtract(rr).scale(.5);
+         if (!isFinite(Ir)) return !1;
+         if (Zr) Qr = new jr.u(0, Ir, 0);
+         else {
+           const Sr = rr.add(fr);
+           Qr = new jr.u(Sr.x, Ir, Sr.z)
```

#### 29. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L445-L486` → after: `L298-L300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L298-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L298-L300) · [Before (L445-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L445-L486)

```diff
-         yR.objectIdIsRedFormat && (tR += "#define PREPASS_OBJECT_ID_R8\n"), yR._defines = tR + `#define SCENE_MRT_COUNT ${JR.length}\n`
-       }
-       static _PrepareStringDefines(RR, JR) {
-         const GR = qR._Configurations[RR];
-         return !!GR?._defines && (JR.push(GR._defines), !0)
-       }
-       static _BindAttachmentsForEffect(RR, JR) {
-         const GR = qR._Configurations[RR.currentRenderPassId];
-         return !GR?._attachments || (RR.bindAttachments(JR._multiTarget ? GR._attachments : GR._colorAttachments), JR._multiTarget || void 0 !== GR.defines.PREPASS_COLOR_INDEX)
-       }
-       static _RestoreAttachments(RR) {
-         const JR = qR._Configurations[RR.currentRenderPassId];
-         JR?._colorAttachments && RR.bindAttachments(JR._colorAttachments)
-       }
-       static _BindColorAttachments(RR) {
-         const JR = qR._Configurations[RR.currentRenderPassId];
- ... (26 more removed lines; see GitHub link above)
+         this._vectorTransition || (this._vectorTransition = tr.d.CreateAnimation("target", tr.d.ANIMATIONTYPE_VECTOR3, 60, zr.EasingFunction)), this._betaIsAnimating = !0;
+         let Er = tr.d.TransitionTo("target", Qr, this._attachedCamera, this._attachedCamera.eC(), 60, this._vectorTransition, this._framingTime);
+         Er && this._animatables.push(Er);
```

#### 30. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L488-L522` → after: `L302-L308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L302-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L302-L308) · [Before (L488-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L488-L522)

```diff
-         for (let uR = 0; uR < qR.GeometryTextureDescriptions.length; uR++) {
-           const RR = qR.GeometryTextureDescriptions[uR],
-             JR = RR.define,
-             ZR = RR.defineIndex,
-             iR = yR.defines[ZR];
-           void 0 !== iR ? (GR[JR] = !0, GR[ZR] = iR, tR++) : (GR[JR] = !1, delete GR[ZR])
-         }
-         GR.PREPASS_OBJECT_ID_R8 = yR.objectIdIsRedFormat, GR.SCENE_MRT_COUNT = yR._mrtCount ?? tR, GR.BONES_VELOCITY_ENABLED = JR.useBones && JR.computeBonesUsingShaders && JR.skeleton && !JR.skeleton.isUsingTextureForMatrices && -1 === yR.excludedSkinnedMesh.indexOf(JR)
-       }
-       static Bind(RR, JR, GR, yR, tR) {
-         const iR = qR._Configurations[RR];
-         if (!iR) return;
-         const fR = GR.jH(),
-           VR = fR.ke();
-         if (iR.reverseCulling && VR.setStateCullFaceType(fR._mirroredCameraPosition ? tR.cullBackFaces : !tR.cullBackFaces), void 0 !== iR.defines.PREPASS_OBJECT_ID_INDEX) {
-           const RR = iR.objectIdIsRedFormat ? 255 : 16777215;
- ... (19 more removed lines; see GitHub link above)
+         if (this._mode === zr.FitFrustumSidesMode) {
+           const Qr = this._calculateLowerRadiusFromModelBoundingSphere(rr, Sr);
+           this.autoCorrectCameraLimitsAndSensibility && (this._attachedCamera.lowerRadiusLimit = fr.length() + this._attachedCamera.minZ), pr = Qr
+         } else this._mode === zr.IgnoreBoundsSizeMode && (pr = this._calculateLowerRadiusFromModelBoundingSphere(rr, Sr), this.autoCorrectCameraLimitsAndSensibility && null === this._attachedCamera.lowerRadiusLimit && (this._attachedCamera.lowerRadiusLimit = this._attachedCamera. … [truncated]
+         if (this.autoCorrectCameraLimitsAndSensibility) {
+           const Qr = Sr.subtract(rr).length();
+           this._attachedCamera.panningSensibility = 5e3 / Qr, this._attachedCamera.wheelPrecision = 100 / pr
```

#### 31. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L525-L760` → after: `L314-L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L314-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L314-L318) · [Before (L525-L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L525-L760)

```diff
-     }
-     qR.GeometryTextureDescriptions = [{
-       type: 0,
-       name: "IrradianceLegacy",
-       clearType: 0,
-       define: "PREPASS_IRRADIANCE_LEGACY",
-       defineIndex: "PREPASS_IRRADIANCE_LEGACY_INDEX"
-     }, {
-       type: 1,
-       name: "WorldPosition",
-       clearType: 0,
-       define: "PREPASS_POSITION",
-       defineIndex: "PREPASS_POSITION_INDEX"
-     }, {
-       type: 2,
-       name: "Velocity",
- ... (220 more removed lines; see GitHub link above)
+       _calculateLowerRadiusFromModelBoundingSphere(rr, Sr) {
+         const Qr = this._attachedCamera;
+         if (!Qr) return 0;
+         let Zr = Qr._calculateLowerRadiusFromModelBoundingSphere(rr, Sr, this._radiusScale);
+         return Qr.lowerRadiusLimit && this._mode === zr.IgnoreBoundsSizeMode && (Zr = Zr < Qr.lowerRadiusLimit ? Qr.lowerRadiusLimit : Zr), Qr.upperRadiusLimit && (Zr = Zr > Qr.upperRadiusLimit ? Qr.upperRadiusLimit : Zr), Zr
```

#### 32. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L762-L817` → after: `L320-L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L320-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L320-L330) · [Before (L762-L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L762-L817)

```diff
-       _collectPointNames(RR, JR) {
-         if (JR)
-           for (const GR in JR) this._codeInjectionPoints[RR] || (this._codeInjectionPoints[RR] = {}), this._codeInjectionPoints[RR][GR] = !0
-       }
-       _injectCustomCode(RR, JR) {
-         return (GR, yR) => {
-           JR && (yR = JR(GR, yR)), this._uboDeclaration && (yR = yR.replace("#define ADDITIONAL_UBO_DECLARATION", this._uboDeclaration)), this._vertexDeclaration && (yR = yR.replace("#define ADDITIONAL_VERTEX_DECLARATION", this._vertexDeclaration)), this._fragmentDeclaration && ( … [truncated]
-           const tR = this._codeInjectionPoints?.[GR];
-           if (!tR) return yR;
-           let iR = null;
-           for (let JR in tR) {
-             let tR = "";
-             for (const yR of this._activePlugins) {
-               const qR = this._material.shaderLanguage;
-               let fR = yR.getCustomCode(GR, qR)?.[JR];
-               fR && (yR.resolveIncludes && (null === iR && (iR = {
- ... (40 more removed lines; see GitHub link above)
+       _maintainCameraAboveGround() {
+         if (this._elevationReturnTime < 0) return;
+         const rr = xr.c.Now - this._lastInteractionTime,
+           Sr = .5 * Math.PI - this._defaultElevation,
+           Qr = .5 * Math.PI;
+         if (this._attachedCamera && !this._betaIsAnimating && this._attachedCamera.beta > Qr && rr >= this._elevationReturnWaitTime) {
+           this._betaIsAnimating = !0, this.stopAllAnimations(), this._betaTransition || (this._betaTransition = tr.d.CreateAnimation("beta", tr.d.ANIMATIONTYPE_FLOAT, 60, zr.EasingFunction));
+           const rr = tr.d.TransitionTo("beta", Sr, this._attachedCamera, this._attachedCamera.eC(), 60, this._betaTransition, this._elevationReturnTime, (() => {
+             this._clearAnimationLocks(), this.stopAllAnimations()
+           }));
+           rr && this._animatables.push(rr)
```

#### 33. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L821-L830` → after: `L346-L358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L346-L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L346-L358) · [Before (L821-L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L821-L830)

```diff
-     iR._MaterialPluginClassToMainDefine = {}, iR._MaterialPluginCounter = 0;
- 
-     function fR(RR, JR) {
-       return RR.replace(/\$(\d+)/g, ((RR, GR) => {
-         const yR = Number(GR);
-         return yR < JR.length ? JR[yR] : ""
-       }))
-     }
-     var VR = GR(41542),
-       KR = GR(38253);
+     zr.EasingFunction = new class extends Ur {
+       constructor() {
+         let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
+         super(), this.exponent = rr
+       }
+       easeInCore(rr) {
+         return this.exponent <= 0 ? rr : (Math.exp(this.exponent * rr) - 1) / (Math.exp(this.exponent) - 1)
+       }
+     }, zr.EasingMode = Ur.EASINGMODE_EASEINOUT, zr.IgnoreBoundsSizeMode = 0, zr.FitFrustumSidesMode = 1;
+     var Yr = Qr(42057),
+       nr = Qr(42052),
+       er = Qr(42080),
+       Kr = Qr(41950);
```

#### 34. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L833-L839` → after: `L361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L361) · [Before (L833-L839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L833-L839)

```diff
-         let JR, GR, uR, ZR, qR = [],
-           fR = [],
-           KR = [],
-           wR = [],
-           rR = [],
-           eR = [],
-           aR = [],
+         let Sr, Qr = [],
```

#### 35. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L842-L875` → after: `L364-L431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L364-L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L364-L431) · [Before (L842-L875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L842-L875)

```diff
-           isCompatible(RR) {
-             return 0 === RR
-           }
-           _enable(RR) {
-             RR && this._pluginManager._activatePlugin(this)
-           }
-           constructor(RR, JR, GR, tR) {
-             let uR = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
-               ZR = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-               VR = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
-             this.name = (0, yR.m)(this, qR, void 0), this.priority = ((0, yR.m)(this, fR), (0, yR.m)(this, KR, 500)), this.resolveIncludes = ((0, yR.m)(this, wR), (0, yR.m)(this, rR, !1)), this.registerForExtraEvents = ((0, yR.m)(this, eR), (0, yR.m)(this, aR, !1)), this.doNotSer … [truncated]
-               RR.pluginManager = void 0
-             }))), this._pluginDefineNames = tR, this._pluginManager = RR.pluginManager, uR && this._pluginManager._addPlugin(this), ZR && this._enable(!0), this.markAllDefinesAsDirty = RR._dirtyCallbacks[127]
-           }
-           getClassName() {
-             return "MaterialPluginBase"
- ... (18 more removed lines; see GitHub link above)
+           constructor() {
+             this._currentMousePointerIdDown = -1, this.buttons = (0, Zr.m)(this, Qr, [0, 1, 2]), this._pointerInput = (0, Zr.m)(this, ar)
+           }
+           attachControl(rr) {
+             rr = Kr.h.BackCompatCameraNoPreventDefault(arguments);
+             const Sr = this.camera.MU(),
+               Qr = Sr.getInputElement();
+             let Zr = 0,
+               Wr = null;
+             this._pointA = null, this._pointB = null, this._altKey = !1, this._ctrlKey = !1, this._metaKey = !1, this._shiftKey = !1, this._buttonsPressed = 0, this._pointerInput = ar => {
+               const jr = ar.event,
+                 Ir = "touch" === jr.pointerType;
+               if (ar.type !== pr.b.POINTERMOVE && -1 === this.buttons.indexOf(jr.button)) return;
+               const fr = jr.target;
+               if (this._altKey = jr.altKey, this._ctrlKey = jr.ctrlKey, this._metaKey = jr.metaKey, this._shiftKey = jr.shiftKey, this._buttonsPressed = jr.buttons, Sr.isPointerLock) {
+                 const rr = jr.movementX,
+ ... (52 more added lines; see GitHub link above)
```

#### 36. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L878-L2103` → after: `L434-L454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L434-L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L434-L454) · [Before (L878-L2103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L878-L2103)

```diff
-           }
-           prepareDefinesBeforeAttributes(RR, JR, GR) {}
-           prepareDefines(RR, JR, GR) {}
-           hasTexture(RR) {
-             return !1
-           }
-           hasRenderTargetTextures() {
-             return !1
-           }
-           fillRenderTargetTextures(RR) {}
-           getActiveTextures(RR) {}
-           getAnimatables(RR) {}
-           addFallbacks(RR, JR, GR) {
-             return GR
-           }
-           getSamplers(RR) {}
- ... (1210 more removed lines; see GitHub link above)
+             }, this._observer = this.camera.eC()._inputManager._addCameraPointerObserver(this._pointerInput, pr.b.POINTERDOWN | pr.b.POINTERUP | pr.b.POINTERMOVE | pr.b.POINTERDOUBLETAP), this._onLostFocus = () => {
+               this._pointA = this._pointB = null, Zr = 0, Wr = null, this.onLostFocus()
+             }, this._contextMenuBind = rr => this.onContextMenu(rr), Qr && Qr.addEventListener("contextmenu", this._contextMenuBind, !1);
+             const ar = this.camera.eC().MU().getHostWindow();
+             ar && Kr.h.RegisterTopRootEvents(ar, [{
+               name: "blur",
+               handler: this._onLostFocus
+             }])
+           }
+           detachControl() {
+             if (this._onLostFocus) {
+               const rr = this.camera.eC().MU().getHostWindow();
+               rr && Kr.h.UnregisterTopRootEvents(rr, [{
+                 name: "blur",
+                 handler: this._onLostFocus
+               }])
+ ... (5 more added lines; see GitHub link above)
```

#### 37. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2105-L2109` → after: `L456-L479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L456-L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L456-L479) · [Before (L2105-L2109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2105-L2109)

```diff
-             },
-             metadata: JR
-           }, qu, iu), (0, yR.l)(RR, null, XG, {
-             kind: "accessor",
-             name: "twoSidedLighting",
+               this._onLostFocus = null
+             }
+             this._altKey = !1, this._ctrlKey = !1, this._metaKey = !1, this._shiftKey = !1, this._buttonsPressed = 0, this._currentMousePointerIdDown = -1
+           }
+           getClassName() {
+             return "BaseCameraPointersInput"
+           }
+           getSimpleName() {
+             return "pointers"
+           }
+           onDoubleTap(rr, Sr) {}
+           onTouch(rr, Sr, Qr) {}
+           onMultiTouch(rr, Sr, Qr, Zr, Wr, ar) {}
+           onContextMenu(rr) {
+             rr.preventDefault()
+           }
+ ... (8 more added lines; see GitHub link above)
```

#### 38. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2113-L2114` → after: `L483-L484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L483-L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L483-L484) · [Before (L2113-L2114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2113-L2114)

```diff
-               has: RR => "twoSidedLighting" in RR,
-               get: RR => RR.twoSidedLighting,
+               has: rr => "buttons" in rr,
+               get: rr => rr.buttons,
```

#### 39. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2116` → after: `L486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L486) · [Before (L2116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2116)

```diff
-                 RR.twoSidedLighting = JR
+                 rr.buttons = Sr
```

#### 40. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2120-L2122` → after: `L490-L526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L490-L526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L490-L526) · [Before (L2120-L2122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2120-L2122)

```diff
-           }, Ku, wu), (0, yR.l)(RR, null, BG, {
-             kind: "accessor",
-             name: "applyDecalMapAfterDetailMap",
+           }, Qr, ar), jr && Object.defineProperty(rr, Symbol.metadata, {
+             enumerable: !0,
+             configurable: !0,
+             writable: !0,
+             value: jr
+           })
+         })(), rr
+       })(),
+       Br = (() => {
+         var rr;
+         let Sr, Qr, ar, jr = yr,
+           Ir = [],
+           fr = [],
+           Er = [],
+           pr = [],
+           xr = [],
+ ... (21 more added lines; see GitHub link above)
```

#### 41. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2126-L2127` → after: `L530-L531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L530-L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L530-L531) · [Before (L2126-L2127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2126-L2127)

```diff
-               has: RR => "applyDecalMapAfterDetailMap" in RR,
-               get: RR => RR.applyDecalMapAfterDetailMap,
+               has: rr => "pinchZoom" in rr,
+               get: rr => rr.pinchZoom,
```

#### 42. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2129` → after: `L533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L533) · [Before (L2129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2129)

```diff
-                 RR.applyDecalMapAfterDetailMap = JR
+                 rr.pinchZoom = Sr
```

#### 43. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2133` → after: `L537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L537) · [Before (L2133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2133)

```diff
-           }, au, Lu), (0, yR.l)(null, null, tJ, {
+           }, Ir, fr), (0, Zr.k)(null, null, Qr, {
```

#### 44. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2135` → after: `L539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L539) · [Before (L2135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2135)

```diff
-             name: "_diffuseTexture",
+             name: "multiTouchPanning",
```

#### 45. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2139-L2140` → after: `L543-L544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L543-L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L543-L544) · [Before (L2139-L2140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2139-L2140)

```diff
-               has: RR => "_diffuseTexture" in RR,
-               get: RR => RR._diffuseTexture,
+               has: rr => "multiTouchPanning" in rr,
+               get: rr => rr.multiTouchPanning,
```

#### 46. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2142` → after: `L546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L546) · [Before (L2142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2142)

```diff
-                 RR._diffuseTexture = JR
+                 rr.multiTouchPanning = Sr
```

#### 47. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2146` → after: `L550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L550) · [Before (L2146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2146)

```diff
-           }, pG, gG), (0, yR.l)(null, null, ZJ, {
+           }, Er, pr), (0, Zr.k)(null, null, ar, {
```

#### 48. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2148` → after: `L552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L552) · [Before (L2148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2148)

```diff
-             name: "_ambientTexture",
+             name: "multiTouchPanAndZoom",
```

#### 49. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2152-L2153` → after: `L556-L557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L556-L557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L556-L557) · [Before (L2152-L2153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2152-L2153)

```diff
-               has: RR => "_ambientTexture" in RR,
-               get: RR => RR._ambientTexture,
+               has: rr => "multiTouchPanAndZoom" in rr,
+               get: rr => rr.multiTouchPanAndZoom,
```

#### 50. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2155` → after: `L559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L559) · [Before (L2155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2155)

```diff
-                 RR._ambientTexture = JR
+                 rr.multiTouchPanAndZoom = Sr
```

#### 51. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2159` → after: `L563-L653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L563-L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L563-L653) · [Before (L2159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2159)

```diff
-           }, OG, xG), (0, yR.l)(null, null, iJ, {
+           }, xr, mr), Nr && Object.defineProperty(rr, Symbol.metadata, {
+             enumerable: !0,
+             configurable: !0,
+             writable: !0,
+             value: Nr
+           })
+         })(), rr
+       })(),
+       Tr = (() => {
+         var rr;
+         let Sr, Qr, ar, jr, Ir, fr, Er, pr = Br,
+           xr = [],
+           mr = [],
+           Nr = [],
+           Ur = [],
+           tr = [],
+ ... (75 more added lines; see GitHub link above)
```

#### 52. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2161` → after: `L655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L655) · [Before (L2161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2161)

```diff
-             name: "_opacityTexture",
+             name: "buttons",
```

#### 53. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2165-L2166` → after: `L659-L660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L659-L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L659-L660) · [Before (L2165-L2166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2165-L2166)

```diff
-               has: RR => "_opacityTexture" in RR,
-               get: RR => RR._opacityTexture,
+               has: rr => "buttons" in rr,
+               get: rr => rr.buttons,
```

#### 54. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2168` → after: `L662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L662) · [Before (L2168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2168)

```diff
-                 RR._opacityTexture = JR
+                 rr.buttons = Sr
```

#### 55. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2172` → after: `L666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L666) · [Before (L2172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2172)

```diff
-           }, HG, oG), (0, yR.l)(null, null, VJ, {
+           }, xr, mr), (0, Zr.k)(null, null, Qr, {
```

#### 56. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2174` → after: `L668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L668) · [Before (L2174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2174)

```diff
-             name: "_reflectionTexture",
+             name: "angularSensibilityX",
```

#### 57. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2178-L2179` → after: `L672-L673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L672-L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L672-L673) · [Before (L2178-L2179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2178-L2179)

```diff
-               has: RR => "_reflectionTexture" in RR,
-               get: RR => RR._reflectionTexture,
+               has: rr => "angularSensibilityX" in rr,
+               get: rr => rr.angularSensibilityX,
```

#### 58. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2181` → after: `L675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L675) · [Before (L2181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2181)

```diff
-                 RR._reflectionTexture = JR
+                 rr.angularSensibilityX = Sr
```

#### 59. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2185` → after: `L679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L679) · [Before (L2185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2185)

```diff
-           }, IG, mG), (0, yR.l)(null, null, wJ, {
+           }, Nr, Ur), (0, Zr.k)(null, null, ar, {
```

#### 60. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2187` → after: `L681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L681) · [Before (L2187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2187)

```diff
-             name: "_emissiveTexture",
+             name: "angularSensibilityY",
```

#### 61. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2191-L2192` → after: `L685-L686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L685-L686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L685-L686) · [Before (L2191-L2192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2191-L2192)

```diff
-               has: RR => "_emissiveTexture" in RR,
-               get: RR => RR._emissiveTexture,
+               has: rr => "angularSensibilityY" in rr,
+               get: rr => rr.angularSensibilityY,
```

#### 62. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2194` → after: `L688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L688) · [Before (L2194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2194)

```diff
-                 RR._emissiveTexture = JR
+                 rr.angularSensibilityY = Sr
```

#### 63. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2198` → after: `L692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L692) · [Before (L2198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2198)

```diff
-           }, jG, dG), (0, yR.l)(null, null, eJ, {
+           }, tr, hr), (0, Zr.k)(null, null, jr, {
```

#### 64. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2200` → after: `L694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L694) · [Before (L2200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2200)

```diff
-             name: "_specularTexture",
+             name: "pinchPrecision",
```

#### 65. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2204-L2205` → after: `L698-L699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L698-L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L698-L699) · [Before (L2204-L2205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2204-L2205)

```diff
-               has: RR => "_specularTexture" in RR,
-               get: RR => RR._specularTexture,
+               has: rr => "pinchPrecision" in rr,
+               get: rr => rr.pinchPrecision,
```

#### 66. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2207` → after: `L701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L701) · [Before (L2207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2207)

```diff
-                 RR._specularTexture = JR
+                 rr.pinchPrecision = Sr
```

#### 67. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2211` → after: `L705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L705) · [Before (L2211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2211)

```diff
-           }, kG, QG), (0, yR.l)(null, null, LJ, {
+           }, zr, Yr), (0, Zr.k)(null, null, Ir, {
```

#### 68. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2213` → after: `L707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L707) · [Before (L2213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2213)

```diff
-             name: "_bumpTexture",
+             name: "pinchDeltaPercentage",
```

#### 69. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2217-L2218` → after: `L711-L712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L711-L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L711-L712) · [Before (L2217-L2218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2217-L2218)

```diff
-               has: RR => "_bumpTexture" in RR,
-               get: RR => RR._bumpTexture,
+               has: rr => "pinchDeltaPercentage" in rr,
+               get: rr => rr.pinchDeltaPercentage,
```

#### 70. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2220` → after: `L714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L714) · [Before (L2220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2220)

```diff
-                 RR._bumpTexture = JR
+                 rr.pinchDeltaPercentage = Sr
```

#### 71. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2224` → after: `L718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L718) · [Before (L2224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2224)

```diff
-           }, sG, hG), (0, yR.l)(null, null, UJ, {
+           }, nr, er), (0, Zr.k)(null, null, fr, {
```

#### 72. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2226` → after: `L720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L720) · [Before (L2226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2226)

```diff
-             name: "_lightmapTexture",
+             name: "useNaturalPinchZoom",
```

#### 73. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2230-L2231` → after: `L724-L725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L724-L725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L724-L725) · [Before (L2230-L2231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2230-L2231)

```diff
-               has: RR => "_lightmapTexture" in RR,
-               get: RR => RR._lightmapTexture,
+               has: rr => "useNaturalPinchZoom" in rr,
+               get: rr => rr.useNaturalPinchZoom,
```

#### 74. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2233` → after: `L727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L727) · [Before (L2233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2233)

```diff
-                 RR._lightmapTexture = JR
+                 rr.useNaturalPinchZoom = Sr
```

#### 75. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2237` → after: `L731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L731) · [Before (L2237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2237)

```diff
-           }, Gy, yy), (0, yR.l)(null, null, AJ, {
+           }, Kr, yr), (0, Zr.k)(null, null, Er, {
```

#### 76. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2239` → after: `L733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L733) · [Before (L2239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2239)

```diff
-             name: "_refractionTexture",
+             name: "panningSensibility",
```

#### 77. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2243-L2244` → after: `L737-L738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L737-L738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L737-L738) · [Before (L2243-L2244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2243-L2244)

```diff
-               has: RR => "_refractionTexture" in RR,
-               get: RR => RR._refractionTexture,
+               has: rr => "panningSensibility" in rr,
+               get: rr => rr.panningSensibility,
```

#### 78. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2246` → after: `L740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L740) · [Before (L2246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2246)

```diff
-                 RR._refractionTexture = JR
+                 rr.panningSensibility = Sr
```

#### 79. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2250-L2259` → after: `L744-L1471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L744-L1471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L744-L1471) · [Before (L2250-L2259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2250-L2259)

```diff
-           }, Zy, qy), (0, yR.l)(null, null, XJ, {
-             kind: "field",
-             name: "ambientColor",
-             static: !1,
-             private: !1,
-             access: {
-               has: RR => "ambientColor" in RR,
-               get: RR => RR.ambientColor,
-               set: (RR, JR) => {
-                 RR.ambientColor = JR
+           }, Tr, vr), Br && Object.defineProperty(rr, Symbol.metadata, {
+             enumerable: !0,
+             configurable: !0,
+             writable: !0,
+             value: Br
+           })
+         })(), rr.MinimumRadiusForPinch = .001, rr
+       })();
+     er.c.ArcRotateCameraPointersInput = Tr;
+     var vr = Qr(42031);
+     let Or = (() => {
+       var rr;
+       let Sr, Qr, ar, Ir, fr, Er, pr, xr, mr, Nr, Ur, tr = [],
+         hr = [],
+         zr = [],
+         Yr = [],
+ ... (712 more added lines; see GitHub link above)
```

#### 80. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2261-L2272` → after: `L1473-L1607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R1473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L1473-L1607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L1473-L1607) · [Before (L2261-L2272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2261-L2272)

```diff
-             },
-             metadata: JR
-           }, Vy, Ky), (0, yR.l)(null, null, MJ, {
-             kind: "field",
-             name: "diffuseColor",
-             static: !1,
-             private: !1,
-             access: {
-               has: RR => "diffuseColor" in RR,
-               get: RR => RR.diffuseColor,
-               set: (RR, JR) => {
-                 RR.diffuseColor = JR
+             });
+             !rr && Zr ? Sr.inputMap.splice(Sr.inputMap.indexOf(Zr), 1) : rr && !Zr && Sr.addEntry({
+               source: "pointer",
+               button: 0,
+               modifiers: {
+                 ctrl: !0
+               },
+               interaction: "pan"
+             })
+           }
+           get _panningMouseButton() {
+             return this._panningMouseButtonInternal
+           }
+           set _panningMouseButton(rr) {
+             this._panningMouseButtonInternal = rr;
+             const Sr = this.movement.input.getEntry("pointer", "pan", {
+ ... (119 more added lines; see GitHub link above)
```

#### 81. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2274-L2278` → after: `L1609-L1779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R1609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L1609-L1779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L1609-L1779) · [Before (L2274-L2278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2274-L2278)

```diff
-             },
-             metadata: JR
-           }, wy, ry), (0, yR.l)(null, null, BJ, {
-             kind: "field",
-             name: "specularColor",
+           }
+           _checkInputs() {
+             if (this._collisionTriggered) return;
+             this.inputs.checkInputs();
+             let rr = !1;
+             this.movement.computeCurrentFrameDeltas();
+             const Sr = this.movement.rotationDeltaCurrentFrame,
+               Qr = this.movement.zoomDeltaCurrentFrame,
+               Zr = this.movement.panDeltaCurrentFrame;
+             if (0 === Sr.x && 0 === Sr.y && 0 === Qr && 0 === Zr.x && 0 === Zr.y || (rr = !0, 0 === Sr.x && 0 === Sr.y && 0 === Qr || this._applyRotationAndZoomDelta(Sr.x, Sr.y, Qr), 0 === Zr.x && 0 === Zr.y || this._applyPanDelta(Zr.x, Zr.y)), 0 === this._inertialAlphaOffset &&  … [truncated]
+               this._applyPanDelta(this.inertialPanningX, this.inertialPanningY), this.inertialPanningX *= this.panningInertia, this.inertialPanningY *= this.panningInertia;
+               const Sr = this._panningEpsilon;
+               Math.abs(this.inertialPanningX) < Sr && (this.inertialPanningX = 0), Math.abs(this.inertialPanningY) < Sr && (this.inertialPanningY = 0), rr = !0
+             }
+             if (rr) this.stopInterpolation();
+             else if (this._isInterpolating) {
+ ... (155 more added lines; see GitHub link above)
```

#### 82. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2282-L2286` → after: `L1783-L1784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R1783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L1783-L1784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L1783-L1784) · [Before (L2282-L2286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2282-L2286)

```diff
-               has: RR => "specularColor" in RR,
-               get: RR => RR.specularColor,
-               set: (RR, JR) => {
-                 RR.specularColor = JR
-               }
+               has: rr => "inertialAlphaOffset" in rr,
+               get: rr => rr.inertialAlphaOffset
```

#### 83. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2289-L2291` → after: `L1787-L1789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R1787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L1787-L1789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L1787-L1789) · [Before (L2289-L2291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2289-L2291)

```diff
-           }, ey, ay), (0, yR.l)(null, null, lJ, {
-             kind: "field",
-             name: "emissiveColor",
+           }, null, br), (0, Zr.k)(rr, null, er, {
+             kind: "getter",
+             name: "inertialBetaOffset",
```

#### 84. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2295-L2299` → after: `L1793-L1794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R1793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L1793-L1794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L1793-L1794) · [Before (L2295-L2299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2295-L2299)

```diff
-               has: RR => "emissiveColor" in RR,
-               get: RR => RR.emissiveColor,
-               set: (RR, JR) => {
-                 RR.emissiveColor = JR
-               }
+               has: rr => "inertialBetaOffset" in rr,
+               get: rr => rr.inertialBetaOffset
```

#### 85. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2302-L2304` → after: `L1797-L1799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R1797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L1797-L1799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L1797-L1799) · [Before (L2302-L2304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2302-L2304)

```diff
-           }, Ly, ny), (0, yR.l)(null, null, pJ, {
-             kind: "field",
-             name: "specularPower",
+           }, null, br), (0, Zr.k)(rr, null, yr, {
+             kind: "getter",
+             name: "inertialRadiusOffset",
```

#### 86. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2308-L2312` → after: `L1803-L1804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R1803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L1803-L1804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L1803-L1804) · [Before (L2308-L2312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2308-L2312)

```diff
-               has: RR => "specularPower" in RR,
-               get: RR => RR.specularPower,
-               set: (RR, JR) => {
-                 RR.specularPower = JR
-               }
+               has: rr => "inertialRadiusOffset" in rr,
+               get: rr => rr.inertialRadiusOffset
```

#### 87. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2315-L2317` → after: `L1807-L1809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R1807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L1807-L1809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L1807-L1809) · [Before (L2315-L2317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2315-L2317)

```diff
-           }, Uy, Wy), (0, yR.l)(null, null, gJ, {
-             kind: "field",
-             name: "_useAlphaFromDiffuseTexture",
+           }, null, br), (0, Zr.k)(rr, null, Mr, {
+             kind: "getter",
+             name: "panningInertia",
```

#### 88. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2321-L2325` → after: `L1813-L1814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R1813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L1813-L1814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L1813-L1814) · [Before (L2321-L2325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2321-L2325)

```diff
-               has: RR => "_useAlphaFromDiffuseTexture" in RR,
-               get: RR => RR._useAlphaFromDiffuseTexture,
-               set: (RR, JR) => {
-                 RR._useAlphaFromDiffuseTexture = JR
-               }
+               has: rr => "panningInertia" in rr,
+               get: rr => rr.panningInertia
```

#### 89. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2328-L2330` → after: `L1817-L1819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R1817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L1817-L1819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L1817-L1819) · [Before (L2328-L2330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2328-L2330)

```diff
-           }, Ay, Cy), (0, yR.l)(null, null, vJ, {
-             kind: "field",
-             name: "_useEmissiveAsIllumination",
+           }, null, br), (0, Zr.k)(rr, null, Ar, {
+             kind: "getter",
+             name: "zoomToMouseLocation",
```

#### 90. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2334-L2338` → after: `L1823-L1824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R1823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L1823-L1824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L1823-L1824) · [Before (L2334-L2338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2334-L2338)

```diff
-               has: RR => "_useEmissiveAsIllumination" in RR,
-               get: RR => RR._useEmissiveAsIllumination,
-               set: (RR, JR) => {
-                 RR._useEmissiveAsIllumination = JR
-               }
+               has: rr => "zoomToMouseLocation" in rr,
+               get: rr => rr.zoomToMouseLocation
```

#### 91. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2341` → after: `L1827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R1827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L1827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L1827) · [Before (L2341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2341)

```diff
-           }, By, ly), (0, yR.l)(null, null, xJ, {
+           }, null, br), (0, Zr.k)(null, null, Sr, {
```

#### 92. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2343` → after: `L1829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R1829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L1829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L1829) · [Before (L2343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2343)

```diff
-             name: "_linkEmissiveWithDiffuse",
+             name: "alpha",
```

#### 93. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2347-L2348` → after: `L1833-L1834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R1833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L1833-L1834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L1833-L1834) · [Before (L2347-L2348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2347-L2348)

```diff
-               has: RR => "_linkEmissiveWithDiffuse" in RR,
-               get: RR => RR._linkEmissiveWithDiffuse,
+               has: rr => "alpha" in rr,
+               get: rr => rr.alpha,
```

#### 94. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2350` → after: `L1836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R1836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L1836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L1836) · [Before (L2350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2350)

```diff
-                 RR._linkEmissiveWithDiffuse = JR
+                 rr.alpha = Sr
```

#### 95. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2354` → after: `L1840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R1840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L1840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L1840) · [Before (L2354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2354)

```diff
-           }, by, vy), (0, yR.l)(null, null, DJ, {
+           }, Jr, Dr), (0, Zr.k)(null, null, Qr, {
```

#### 96. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2356` → after: `L1842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R1842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L1842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L1842) · [Before (L2356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2356)

```diff
-             name: "_useSpecularOverAlpha",
+             name: "beta",
```

#### 97. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2360-L2361` → after: `L1846-L1847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R1846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L1846-L1847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L1846-L1847) · [Before (L2360-L2361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2360-L2361)

```diff
-               has: RR => "_useSpecularOverAlpha" in RR,
-               get: RR => RR._useSpecularOverAlpha,
+               has: rr => "beta" in rr,
+               get: rr => rr.beta,
```

#### 98. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2363` → after: `L1849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R1849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L1849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L1849) · [Before (L2363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2363)

```diff
-                 RR._useSpecularOverAlpha = JR
+                 rr.beta = Sr
```

#### 99. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2367` → after: `L1853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R1853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L1853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L1853) · [Before (L2367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2367)

```diff
-           }, Ny, Dy), (0, yR.l)(null, null, oJ, {
+           }, dr, sr), (0, Zr.k)(null, null, fr, {
```

#### 100. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2369` → after: `L1855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R1855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L1855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L1855) · [Before (L2369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2369)

```diff
-             name: "_useReflectionOverAlpha",
+             name: "radius",
```

#### 101. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2373-L2374` → after: `L1859-L1860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R1859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L1859-L1860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L1859-L1860) · [Before (L2373-L2374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2373-L2374)

```diff
-               has: RR => "_useReflectionOverAlpha" in RR,
-               get: RR => RR._useReflectionOverAlpha,
+               has: rr => "radius" in rr,
+               get: rr => rr.radius,
```

#### 102. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2376` → after: `L1862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R1862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L1862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L1862) · [Before (L2376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2376)

```diff
-                 RR._useReflectionOverAlpha = JR
+                 rr.radius = Sr
```

#### 103. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2380` → after: `L1866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R1866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L1866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L1866) · [Before (L2380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2380)

```diff
-           }, cy, Py), (0, yR.l)(null, null, PJ, {
+           }, ur, rS), (0, Zr.k)(null, null, pr, {
```

#### 104. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2382` → after: `L1868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R1868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L1868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L1868) · [Before (L2382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2382)

```diff
-             name: "_disableLighting",
+             name: "overrideCloneAlphaBetaRadius",
```

#### 105. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2386-L2387` → after: `L1872-L1873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R1872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L1872-L1873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L1872-L1873) · [Before (L2386-L2387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2386-L2387)

```diff
-               has: RR => "_disableLighting" in RR,
-               get: RR => RR._disableLighting,
+               has: rr => "overrideCloneAlphaBetaRadius" in rr,
+               get: rr => rr.overrideCloneAlphaBetaRadius,
```

#### 106. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2389` → after: `L1875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R1875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L1875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L1875) · [Before (L2389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2389)

```diff
-                 RR._disableLighting = JR
+                 rr.overrideCloneAlphaBetaRadius = Sr
```

#### 107. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2393` → after: `L1879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R1879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L1879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L1879) · [Before (L2393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2393)

```diff
-           }, zy, Sy), (0, yR.l)(null, null, mJ, {
+           }, SS, QS), (0, Zr.k)(null, null, xr, {
```

#### 108. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2395` → after: `L1881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R1881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L1881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L1881) · [Before (L2395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2395)

```diff
-             name: "_useObjectSpaceNormalMap",
+             name: "Xx",
```

#### 109. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2399-L2400` → after: `L1885-L1886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R1885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L1885-L1886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L1885-L1886) · [Before (L2399-L2400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2399-L2400)

```diff
-               has: RR => "_useObjectSpaceNormalMap" in RR,
-               get: RR => RR._useObjectSpaceNormalMap,
+               has: rr => "Xx" in rr,
+               get: rr => rr.Xx,
```

#### 110. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2402` → after: `L1888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R1888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L1888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L1888) · [Before (L2402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2402)

```diff
-                 RR._useObjectSpaceNormalMap = JR
+                 rr.Xx = Sr
```

#### 111. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2406` → after: `L1892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R1892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L1892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L1892) · [Before (L2406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2406)

```diff
-           }, Ey, Yy), (0, yR.l)(null, null, SJ, {
+           }, ZS, WS), (0, Zr.k)(null, null, Ur, {
```

#### 112. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2408` → after: `L1894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R1894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L1894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L1894) · [Before (L2408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2408)

```diff
-             name: "_useParallax",
+             name: "_targetHost",
```

#### 113. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2412-L2413` → after: `L1898-L1899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R1898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L1898-L1899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L1898-L1899) · [Before (L2412-L2413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2412-L2413)

```diff
-               has: RR => "_useParallax" in RR,
-               get: RR => RR._useParallax,
+               has: rr => "_targetHost" in rr,
+               get: rr => rr._targetHost,
```

#### 114. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2415` → after: `L1901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R1901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L1901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L1901) · [Before (L2415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2415)

```diff
-                 RR._useParallax = JR
+                 rr._targetHost = Sr
```

#### 115. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2419` → after: `L1905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R1905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L1905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L1905) · [Before (L2419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2419)

```diff
-           }, Fy, Ty), (0, yR.l)(null, null, dJ, {
+           }, aS, jS), (0, Zr.k)(null, null, Br, {
```

#### 116. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2421` → after: `L1907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R1907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L1907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L1907) · [Before (L2421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2421)

```diff
-             name: "_useParallaxOcclusion",
+             name: "lowerAlphaLimit",
```

#### 117. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2425-L2426` → after: `L1911-L1912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R1911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L1911-L1912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L1911-L1912) · [Before (L2425-L2426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2425-L2426)

```diff
-               has: RR => "_useParallaxOcclusion" in RR,
-               get: RR => RR._useParallaxOcclusion,
+               has: rr => "lowerAlphaLimit" in rr,
+               get: rr => rr.lowerAlphaLimit,
```

#### 118. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2428` → after: `L1914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R1914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L1914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L1914) · [Before (L2428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2428)

```diff
-                 RR._useParallaxOcclusion = JR
+                 rr.lowerAlphaLimit = Sr
```

#### 119. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2432` → after: `L1918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R1918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L1918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L1918) · [Before (L2432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2432)

```diff
-           }, Rt, Jt), (0, yR.l)(null, null, YJ, {
+           }, IS, fS), (0, Zr.k)(null, null, Tr, {
```

#### 120. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2434` → after: `L1920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R1920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L1920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L1920) · [Before (L2434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2434)

```diff
-             name: "parallaxScaleBias",
+             name: "upperAlphaLimit",
```

#### 121. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2438-L2439` → after: `L1924-L1925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R1924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L1924-L1925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L1924-L1925) · [Before (L2438-L2439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2438-L2439)

```diff
-               has: RR => "parallaxScaleBias" in RR,
-               get: RR => RR.parallaxScaleBias,
+               has: rr => "upperAlphaLimit" in rr,
+               get: rr => rr.upperAlphaLimit,
```

#### 122. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2441` → after: `L1927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R1927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L1927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L1927) · [Before (L2441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2441)

```diff
-                 RR.parallaxScaleBias = JR
+                 rr.upperAlphaLimit = Sr
```

#### 123. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2445` → after: `L1931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R1931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L1931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L1931) · [Before (L2445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2445)

```diff
-           }, tt, ut), (0, yR.l)(null, null, kJ, {
+           }, ES, pS), (0, Zr.k)(null, null, vr, {
```

#### 124. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2447` → after: `L1933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R1933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L1933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L1933) · [Before (L2447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2447)

```diff
-             name: "_roughness",
+             name: "lowerBetaLimit",
```

#### 125. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2451-L2452` → after: `L1937-L1938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R1937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L1937-L1938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L1937-L1938) · [Before (L2451-L2452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2451-L2452)

```diff
-               has: RR => "_roughness" in RR,
-               get: RR => RR._roughness,
+               has: rr => "lowerBetaLimit" in rr,
+               get: rr => rr.lowerBetaLimit,
```

#### 126. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2454` → after: `L1940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R1940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L1940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L1940) · [Before (L2454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2454)

```diff
-                 RR._roughness = JR
+                 rr.lowerBetaLimit = Sr
```

#### 127. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2458` → after: `L1944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R1944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L1944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L1944) · [Before (L2458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2458)

```diff
-           }, Zt, qt), (0, yR.l)(null, null, FJ, {
+           }, xS, mS), (0, Zr.k)(null, null, Or, {
```

#### 128. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2460` → after: `L1946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R1946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L1946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L1946) · [Before (L2460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2460)

```diff
-             name: "indexOfRefraction",
+             name: "upperBetaLimit",
```

#### 129. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2464-L2465` → after: `L1950-L1951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R1950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L1950-L1951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L1950-L1951) · [Before (L2464-L2465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2464-L2465)

```diff
-               has: RR => "indexOfRefraction" in RR,
-               get: RR => RR.indexOfRefraction,
+               has: rr => "upperBetaLimit" in rr,
+               get: rr => rr.upperBetaLimit,
```

#### 130. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2467` → after: `L1953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R1953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L1953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L1953) · [Before (L2467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2467)

```diff
-                 RR.indexOfRefraction = JR
+                 rr.upperBetaLimit = Sr
```

#### 131. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2471` → after: `L1957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R1957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L1957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L1957) · [Before (L2471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2471)

```diff
-           }, Vt, Kt), (0, yR.l)(null, null, TJ, {
+           }, NS, US), (0, Zr.k)(null, null, Lr, {
```

#### 132. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2473` → after: `L1959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R1959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L1959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L1959) · [Before (L2473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2473)

```diff
-             name: "invertRefractionY",
+             name: "lowerRadiusLimit",
```

#### 133. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2477-L2478` → after: `L1963-L1964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R1963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L1963-L1964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L1963-L1964) · [Before (L2477-L2478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2477-L2478)

```diff
-               has: RR => "invertRefractionY" in RR,
-               get: RR => RR.invertRefractionY,
+               has: rr => "lowerRadiusLimit" in rr,
+               get: rr => rr.lowerRadiusLimit,
```

#### 134. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2480` → after: `L1966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R1966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L1966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L1966) · [Before (L2480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2480)

```diff
-                 RR.invertRefractionY = JR
+                 rr.lowerRadiusLimit = Sr
```

#### 135. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2484` → after: `L1970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R1970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L1970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L1970) · [Before (L2484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2484)

```diff
-           }, wt, rt), (0, yR.l)(null, null, sJ, {
+           }, tS, hS), (0, Zr.k)(null, null, lr, {
```

#### 136. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2486` → after: `L1972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R1972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L1972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L1972) · [Before (L2486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2486)

```diff
-             name: "alphaCutOff",
+             name: "upperRadiusLimit",
```

#### 137. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2490-L2491` → after: `L1976-L1977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R1976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L1976-L1977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L1976-L1977) · [Before (L2490-L2491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2490-L2491)

```diff
-               has: RR => "alphaCutOff" in RR,
-               get: RR => RR.alphaCutOff,
+               has: rr => "upperRadiusLimit" in rr,
+               get: rr => rr.upperRadiusLimit,
```

#### 138. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2493` → after: `L1979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R1979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L1979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L1979) · [Before (L2493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2493)

```diff
-                 RR.alphaCutOff = JR
+                 rr.upperRadiusLimit = Sr
```

#### 139. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2497` → after: `L1983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R1983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L1983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L1983) · [Before (L2497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2497)

```diff
-           }, et, Lt), (0, yR.l)(null, null, hJ, {
+           }, zS, YS), (0, Zr.k)(null, null, Xr, {
```

#### 140. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2499` → after: `L1985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R1985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L1985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L1985) · [Before (L2499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2499)

```diff
-             name: "_useLightmapAsShadowmap",
+             name: "lowerTargetYLimit",
```

#### 141. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2503-L2504` → after: `L1989-L1990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R1989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L1989-L1990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L1989-L1990) · [Before (L2503-L2504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2503-L2504)

```diff
-               has: RR => "_useLightmapAsShadowmap" in RR,
-               get: RR => RR._useLightmapAsShadowmap,
+               has: rr => "lowerTargetYLimit" in rr,
+               get: rr => rr.lowerTargetYLimit,
```

#### 142. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2506` → after: `L1992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R1992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L1992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L1992) · [Before (L2506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2506)

```diff
-                 RR._useLightmapAsShadowmap = JR
+                 rr.lowerTargetYLimit = Sr
```

#### 143. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2510` → after: `L1996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R1996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L1996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L1996) · [Before (L2510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2510)

```diff
-           }, nt, Ut), (0, yR.l)(null, null, JG, {
+           }, nS, eS), (0, Zr.k)(null, null, Pr, {
```

#### 144. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2512` → after: `L1998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R1998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L1998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L1998) · [Before (L2512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2512)

```diff
-             name: "_diffuseFresnelParameters",
+             name: "inertialPanningX",
```

#### 145. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2516-L2517` → after: `L2002-L2003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R2002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L2002-L2003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L2002-L2003) · [Before (L2516-L2517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2516-L2517)

```diff
-               has: RR => "_diffuseFresnelParameters" in RR,
-               get: RR => RR._diffuseFresnelParameters,
+               has: rr => "inertialPanningX" in rr,
+               get: rr => rr.inertialPanningX,
```

#### 146. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2519` → after: `L2005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R2005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L2005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L2005) · [Before (L2519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2519)

```diff
-                 RR._diffuseFresnelParameters = JR
+                 rr.inertialPanningX = Sr
```

#### 147. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2523` → after: `L2009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R2009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L2009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L2009) · [Before (L2523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2523)

```diff
-           }, Ct, Xt), (0, yR.l)(null, null, yG, {
+           }, KS, yS), (0, Zr.k)(null, null, Hr, {
```

#### 148. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2525` → after: `L2011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R2011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L2011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L2011) · [Before (L2525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2525)

```diff
-             name: "_opacityFresnelParameters",
+             name: "inertialPanningY",
```

#### 149. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2529-L2530` → after: `L2015-L2016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R2015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L2015-L2016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L2015-L2016) · [Before (L2529-L2530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2529-L2530)

```diff
-               has: RR => "_opacityFresnelParameters" in RR,
-               get: RR => RR._opacityFresnelParameters,
+               has: rr => "inertialPanningY" in rr,
+               get: rr => rr.inertialPanningY,
```

#### 150. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2532` → after: `L2018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R2018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L2018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L2018) · [Before (L2532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2532)

```diff
-                 RR._opacityFresnelParameters = JR
+                 rr.inertialPanningY = Sr
```

#### 151. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2536` → after: `L2022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R2022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L2022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L2022) · [Before (L2536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2536)

```diff
-           }, lt, pt), (0, yR.l)(null, null, uG, {
+           }, BS, TS), (0, Zr.k)(null, null, qr, {
```

#### 152. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2538` → after: `L2024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R2024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L2024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L2024) · [Before (L2538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2538)

```diff
-             name: "_reflectionFresnelParameters",
+             name: "pinchToPanMaxDistance",
```

#### 153. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2542-L2543` → after: `L2028-L2029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R2028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L2028-L2029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L2028-L2029) · [Before (L2542-L2543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2542-L2543)

```diff
-               has: RR => "_reflectionFresnelParameters" in RR,
-               get: RR => RR._reflectionFresnelParameters,
+               has: rr => "pinchToPanMaxDistance" in rr,
+               get: rr => rr.pinchToPanMaxDistance,
```

#### 154. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2545` → after: `L2031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R2031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L2031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L2031) · [Before (L2545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2545)

```diff
-                 RR._reflectionFresnelParameters = JR
+                 rr.pinchToPanMaxDistance = Sr
```

#### 155. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2549` → after: `L2035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R2035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L2035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L2035) · [Before (L2549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2549)

```diff
-           }, vt, Ot), (0, yR.l)(null, null, qG, {
+           }, vS, OS), (0, Zr.k)(null, null, gr, {
```

#### 156. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2551` → after: `L2037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R2037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L2037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L2037) · [Before (L2551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2551)

```diff
-             name: "_refractionFresnelParameters",
+             name: "panningDistanceLimit",
```

#### 157. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2555-L2556` → after: `L2041-L2042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R2041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L2041-L2042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L2041-L2042) · [Before (L2555-L2556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2555-L2556)

```diff
-               has: RR => "_refractionFresnelParameters" in RR,
-               get: RR => RR._refractionFresnelParameters,
+               has: rr => "panningDistanceLimit" in rr,
+               get: rr => rr.panningDistanceLimit,
```

#### 158. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2558` → after: `L2044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R2044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L2044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L2044) · [Before (L2558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2558)

```diff
-                 RR._refractionFresnelParameters = JR
+                 rr.panningDistanceLimit = Sr
```

#### 159. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2562` → after: `L2048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R2048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L2048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L2048) · [Before (L2562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2562)

```diff
-           }, Dt, Ht), (0, yR.l)(null, null, fG, {
+           }, LS, lS), (0, Zr.k)(null, null, Cr, {
```

#### 160. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2564` → after: `L2050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R2050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L2050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L2050) · [Before (L2564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2564)

```diff
-             name: "_emissiveFresnelParameters",
+             name: "panningOriginTarget",
```

#### 161. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2568-L2569` → after: `L2054-L2055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R2054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L2054-L2055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L2054-L2055) · [Before (L2568-L2569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2568-L2569)

```diff
-               has: RR => "_emissiveFresnelParameters" in RR,
-               get: RR => RR._emissiveFresnelParameters,
+               has: rr => "panningOriginTarget" in rr,
+               get: rr => rr.panningOriginTarget,
```

#### 162. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2571` → after: `L2057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R2057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L2057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L2057) · [Before (L2571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2571)

```diff
-                 RR._emissiveFresnelParameters = JR
+                 rr.panningOriginTarget = Sr
```

#### 163. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2575` → after: `L2061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R2061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L2061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L2061) · [Before (L2575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2575)

```diff
-           }, Pt, It), (0, yR.l)(null, null, KG, {
+           }, XS, PS), (0, Zr.k)(null, null, Vr, {
```

#### 164. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2577` → after: `L2063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R2063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L2063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L2063) · [Before (L2577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2577)

```diff
-             name: "_useReflectionFresnelFromSpecular",
+             name: "zoomOnFactor",
```

#### 165. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2581-L2582` → after: `L2067-L2068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R2067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L2067-L2068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L2067-L2068) · [Before (L2581-L2582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2581-L2582)

```diff
-               has: RR => "_useReflectionFresnelFromSpecular" in RR,
-               get: RR => RR._useReflectionFresnelFromSpecular,
+               has: rr => "zoomOnFactor" in rr,
+               get: rr => rr.zoomOnFactor,
```

#### 166. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2584` → after: `L2070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R2070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L2070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L2070) · [Before (L2584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2584)

```diff
-                 RR._useReflectionFresnelFromSpecular = JR
+                 rr.zoomOnFactor = Sr
```

#### 167. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2588` → after: `L2074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R2074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L2074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L2074) · [Before (L2588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2588)

```diff
-           }, St, jt), (0, yR.l)(null, null, rG, {
+           }, HS, qS), (0, Zr.k)(null, null, ir, {
```

#### 168. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2590` → after: `L2076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R2076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L2076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L2076) · [Before (L2590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2590)

```diff
-             name: "_useGlossinessFromSpecularMapAlpha",
+             name: "targetScreenOffset",
```

#### 169. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2594-L2595` → after: `L2080-L2081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R2080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L2080-L2081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L2080-L2081) · [Before (L2594-L2595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2594-L2595)

```diff
-               has: RR => "_useGlossinessFromSpecularMapAlpha" in RR,
-               get: RR => RR._useGlossinessFromSpecularMapAlpha,
+               has: rr => "targetScreenOffset" in rr,
+               get: rr => rr.targetScreenOffset,
```

#### 170. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2597` → after: `L2083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R2083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L2083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L2083) · [Before (L2597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2597)

```diff
-                 RR._useGlossinessFromSpecularMapAlpha = JR
+                 rr.targetScreenOffset = Sr
```

#### 171. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2601` → after: `L2087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R2087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L2087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L2087) · [Before (L2601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2601)

```diff
-           }, Yt, kt), (0, yR.l)(null, null, aG, {
+           }, RS, gS), (0, Zr.k)(null, null, wr, {
```

#### 172. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2603` → after: `L2089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R2089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L2089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L2089) · [Before (L2603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2603)

```diff
-             name: "_maxSimultaneousLights",
+             name: "allowUpsideDown",
```

#### 173. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2607-L2608` → after: `L2093-L2094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R2093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L2093-L2094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L2093-L2094) · [Before (L2607-L2608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2607-L2608)

```diff
-               has: RR => "_maxSimultaneousLights" in RR,
-               get: RR => RR._maxSimultaneousLights,
+               has: rr => "allowUpsideDown" in rr,
+               get: rr => rr.allowUpsideDown,
```

#### 174. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2610` → after: `L2096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R2096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L2096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L2096) · [Before (L2610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2610)

```diff
-                 RR._maxSimultaneousLights = JR
+                 rr.allowUpsideDown = Sr
```

#### 175. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2614` → after: `L2100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R2100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L2100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L2100) · [Before (L2614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2614)

```diff
-           }, Tt, st), (0, yR.l)(null, null, nG, {
+           }, CS, MS), (0, Zr.k)(null, null, cr, {
```

#### 176. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2616` → after: `L2102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R2102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L2102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L2102) · [Before (L2616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2616)

```diff
-             name: "_invertNormalMapX",
+             name: "useInputToRestoreState",
```

#### 177. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2620-L2621` → after: `L2106-L2107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R2106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L2106-L2107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L2106-L2107) · [Before (L2620-L2621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2620-L2621)

```diff
-               has: RR => "_invertNormalMapX" in RR,
-               get: RR => RR._invertNormalMapX,
+               has: rr => "useInputToRestoreState" in rr,
+               get: rr => rr.useInputToRestoreState,
```

#### 178. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2623` → after: `L2109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R2109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L2109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L2109) · [Before (L2623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2623)

```diff
-                 RR._invertNormalMapX = JR
+                 rr.useInputToRestoreState = Sr
```

#### 179. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2627` → after: `L2113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R2113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L2113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L2113) · [Before (L2627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2627)

```diff
-           }, Ju, Gu), (0, yR.l)(null, null, WG, {
+           }, GS, kS), (0, Zr.k)(null, null, Fr, {
```

#### 180. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2629` → after: `L2115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R2115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L2115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L2115) · [Before (L2629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2629)

```diff
-             name: "_invertNormalMapY",
+             name: "restoreStateInterpolationFactor",
```

#### 181. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2633-L2634` → after: `L2119-L2120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R2119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L2119-L2120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L2119-L2120) · [Before (L2633-L2634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2633-L2634)

```diff
-               has: RR => "_invertNormalMapY" in RR,
-               get: RR => RR._invertNormalMapY,
+               has: rr => "restoreStateInterpolationFactor" in rr,
+               get: rr => rr.restoreStateInterpolationFactor,
```

#### 182. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2636` → after: `L2122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R2122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L2122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L2122) · [Before (L2636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2636)

```diff
-                 RR._invertNormalMapY = JR
+                 rr.restoreStateInterpolationFactor = Sr
```

#### 183. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2640` → after: `L2126-L2198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R2126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L2126-L2198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L2126-L2198) · [Before (L2640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2640)

```diff
-           }, uu, Zu), (0, yR.l)(null, null, CG, {
+           }, AS, VS), ar && Object.defineProperty(rr, Symbol.metadata, {
+             enumerable: !0,
+             configurable: !0,
+             writable: !0,
+             value: ar
+           })
+         })(), rr
+       })(),
+       Vr = !1;
+     Vr || (Vr = !0, fr.c.AddNodeConstructor("ArcRotateCamera", ((rr, Sr) => () => new Ar(rr, 0, 0, 1, jr.u.Zero(), Sr))), (0, gr.e)("BABYLON.ArcRotateCamera", Ar))
+   },
+   42085: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       b: () => Zr.c
+     });
+     var Zr = Qr(42090);
+ ... (57 more added lines; see GitHub link above)
```

#### 184. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2642` → after: `L2200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R2200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L2200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L2200) · [Before (L2642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2642)

```diff
-             name: "_twoSidedLighting",
+             name: "groundColor",
```

#### 185. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2646-L2647` → after: `L2204-L2205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R2204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L2204-L2205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L2204-L2205) · [Before (L2646-L2647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2646-L2647)

```diff
-               has: RR => "_twoSidedLighting" in RR,
-               get: RR => RR._twoSidedLighting,
+               has: rr => "groundColor" in rr,
+               get: rr => rr.groundColor,
```

#### 186. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2649` → after: `L2207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R2207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L2207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L2207) · [Before (L2649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2649)

```diff
-                 RR._twoSidedLighting = JR
+                 rr.groundColor = Sr
```

#### 187. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2653` → after: `L2211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R2211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L2211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L2211) · [Before (L2653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2653)

```diff
-           }, fu, Vu), (0, yR.l)(null, null, MG, {
+           }, Er, pr), (0, Zr.k)(null, null, Qr, {
```

#### 188. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2655` → after: `L2213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R2213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L2213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L2213) · [Before (L2655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2655)

```diff
-             name: "_applyDecalMapAfterDetailMap",
+             name: "direction",
```

#### 189. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2659-L2660` → after: `L2217-L2218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R2217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L2217-L2218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L2217-L2218) · [Before (L2659-L2660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2659-L2660)

```diff
-               has: RR => "_applyDecalMapAfterDetailMap" in RR,
-               get: RR => RR._applyDecalMapAfterDetailMap,
+               has: rr => "direction" in rr,
+               get: rr => rr.direction,
```

#### 190. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2662` → after: `L2220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R2220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L2220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L2220) · [Before (L2662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2662)

```diff
-                 RR._applyDecalMapAfterDetailMap = JR
+                 rr.direction = Sr
```

#### 191. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2672` → after: `L2230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R2230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L2230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L2230) · [Before (L2672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2672)

```diff
-         })(), RR.ForceGLSL = !1, RR._ShaderLoader = new XR.d((() => [Promise.all([GR.e(635), GR.e(634)]).then((() => GR(53903))), Promise.all([GR.e(640), GR.e(636), GR.e(649), GR.e(639)]).then((() => GR(54075)))]), (() => [Promise.all([GR.e(656), GR.e(651)]).then((() => GR(54222) … [truncated]
+         })(), rr
```

#### 192. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L2677-L2729` → after: `L2235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R2235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L2235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/296.js#L2235) · [Before (L2677-L2729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/296.js#L2677-L2729)

```diff
-       HR || (HR = !0, (0, KR.d)(), (0, gR.f)("BABYLON.StandardMaterial", DR), ZR.g.DefaultMaterialFactory = RR => new DR("default material", RR))
-     }
-     Object.getOwnPropertyDescriptor(DR.prototype, "decalMap") || Object.defineProperty(DR.prototype, "decalMap", (0, bR.e)("StandardMaterial", "decalMap"))
-   },
-   41915: (RR, JR, GR) => {
-     function yR(RR) {
-       return class extends RR {
-         constructor() {
-           super(...arguments), this.MAINUV1 = !1, this.MAINUV2 = !1, this.MAINUV3 = !1, this.MAINUV4 = !1, this.MAINUV5 = !1, this.MAINUV6 = !1, this.UV1 = !1, this.UV2 = !1, this.UV3 = !1, this.UV4 = !1, this.UV5 = !1, this.UV6 = !1
-         }
-       }
-     }
-     GR.d(JR, {
-       c: () => yR
-     })
-   },
- ... (37 more removed lines; see GitHub link above)
+       xr || (xr = !0, fr.c.AddNodeConstructor("Light_Type_3", ((rr, Sr) => () => new pr(rr, ar.u.Zero(), Sr))), (0, Er.e)("BABYLON.HemisphericLight", pr))
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/297.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/297.js` (83 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3)

#### 1. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/297.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/297.js#L4)

```diff
-   41815: (RR, JR, GR) => {
+   42232: (rr, Sr, Qr) => {
```

#### 2. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L6-L16` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/297.js#L6) · [Before (L6-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/297.js#L6-L16)

```diff
-       e: () => yR
-     });
-     class yR {
-       constructor(RR, JR, GR) {
-         this.bu = RR, this.bv = JR, this.distance = GR, this.faceId = 0, this.subMeshId = 0, this._internalSubMeshId = 0
-       }
-     }
-   },
-   41829: (RR, JR, GR) => {
-     GR.d(JR, {
-       c: () => ZR
+       b: () => Wr
```

#### 3. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L18-L65` → after: `L8-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L8-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/297.js#L8-L23) · [Before (L18-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/297.js#L18-L65)

```diff
-     var yR = GR(38217),
-       tR = GR(38204),
-       uR = GR(38213);
-     class ZR {
-       constructor(RR, JR, GR) {
-         this.vectors = (0, yR.c)(8, tR.r.Zero), this.center = tR.r.Zero(), this.centerWorld = tR.r.Zero(), this.extendSize = tR.r.Zero(), this.extendSizeWorld = tR.r.Zero(), this.directions = (0, yR.c)(3, tR.r.Zero), this.vectorsWorld = (0, yR.c)(8, tR.r.Zero), this.minimumWorld  … [truncated]
-       }
-       reConstruct(RR, JR, GR) {
-         const yR = RR.x,
-           uR = RR.y,
-           ZR = RR.z,
-           qR = JR.x,
-           iR = JR.y,
-           fR = JR.z,
-           VR = this.vectors;
-         this.minimum.VJR(yR, uR, ZR), this.maximum.VJR(qR, iR, fR), VR[0].VJR(yR, uR, ZR), VR[1].VJR(qR, iR, fR), VR[2].VJR(qR, uR, ZR), VR[3].VJR(yR, iR, ZR), VR[4].VJR(yR, uR, fR), VR[5].VJR(qR, iR, ZR), VR[6].VJR(yR, iR, fR), VR[7].VJR(qR, uR, fR), JR.addToRef(RR, this.center) … [truncated]
- ... (32 more removed lines; see GitHub link above)
+     var Zr = Qr(41880);
+ 
+     function Wr(rr) {
+       return class extends rr {
+         constructor() {
+           super(...arguments);
+           const rr = new.target;
+           if (!rr[Symbol.metadata]) {
+             const Sr = Object.getPrototypeOf(rr)?.[Symbol.metadata];
+             rr[Symbol.metadata] = Sr ? Object.create(Sr) : {}
+           }
+           const Sr = (0, Zr.d)(rr[Symbol.metadata]);
+           Sr._imageProcessingConfiguration || (Sr._imageProcessingConfiguration = {
+             type: 9,
+             sourceName: void 0
+           })
```

#### 4. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L67-L125` → after: `L25-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L25-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/297.js#L25-L26) · [Before (L67-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/297.js#L67-L125)

```diff
-         tR.r.FromArrayToRef(RR.m, 0, yR[0]), tR.r.FromArrayToRef(RR.m, 4, yR[1]), tR.r.FromArrayToRef(RR.m, 8, yR[2]), this._worldMatrix = RR
-       }
-       isInFrustum(RR) {
-         return ZR.IsInFrustum(this.vectorsWorld, RR)
-       }
-       isCompletelyInFrustum(RR) {
-         return ZR.IsCompletelyInFrustum(this.vectorsWorld, RR)
-       }
-       intersectsPoint(RR) {
-         const JR = this.minimumWorld,
-           GR = this.maximumWorld,
-           yR = JR.x,
-           tR = JR.y,
-           ZR = JR.z,
-           qR = GR.x,
-           iR = GR.y,
- ... (43 more removed lines; see GitHub link above)
+         get imageProcessingConfiguration() {
+           return this._imageProcessingConfiguration
```

#### 5. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L127-L137` → after: `L28-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L28-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/297.js#L28-L29) · [Before (L127-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/297.js#L127-L137)

```diff
-         return !0
-       }
-       static IsInFrustum(RR, JR) {
-         for (let GR = 0; GR < 6; ++GR) {
-           let yR = !0;
-           const tR = JR[GR];
-           for (let JR = 0; JR < 8; ++JR)
-             if (tR.dotCoordinate(RR[JR]) >= 0) {
-               yR = !1;
-               break
-             } if (yR) return !1
+         set imageProcessingConfiguration(rr) {
+           this._attachImageProcessingConfiguration(rr), this._markAllSubMeshesAsImageProcessingDirty && this._markAllSubMeshesAsImageProcessingDirty()
```

#### 6. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L139-L179` → after: `L31-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L31-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/297.js#L31-L76) · [Before (L139-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/297.js#L139-L179)

```diff
-         return !0
-       }
-     }
-     ZR._TmpVector3 = (0, yR.c)(3, tR.r.Zero)
-   },
-   41822: (RR, JR, GR) => {
-     GR.d(JR, {
-       c: () => KR
-     });
-     var yR = GR(38217),
-       tR = GR(38204),
-       uR = GR(41829);
-     class ZR {
-       constructor(RR, JR, GR) {
-         this.center = tR.r.Zero(), this.centerWorld = tR.r.Zero(), this.minimum = tR.r.Zero(), this.maximum = tR.r.Zero(), this.reConstruct(RR, JR, GR)
-       }
- ... (25 more removed lines; see GitHub link above)
+         _attachImageProcessingConfiguration(rr) {
+           rr !== this._imageProcessingConfiguration && (this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), !rr && this.eC ? this._imageProcessingConfiguration = this.e … [truncated]
+             this._markAllSubMeshesAsImageProcessingDirty && this._markAllSubMeshesAsImageProcessingDirty()
+           }))))
+         }
+         get cameraColorCurvesEnabled() {
+           return this.imageProcessingConfiguration.colorCurvesEnabled
+         }
+         set cameraColorCurvesEnabled(rr) {
+           this.imageProcessingConfiguration.colorCurvesEnabled = rr
+         }
+         get cameraColorGradingEnabled() {
+           return this.imageProcessingConfiguration.colorGradingEnabled
+         }
+         set cameraColorGradingEnabled(rr) {
+           this.imageProcessingConfiguration.colorGradingEnabled = rr
+ ... (30 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L296` → after: `L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/297.js#L81) · [Before (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/297.js#L296)

```diff
-   41855: (RR, JR, GR) => {
+   42119: (rr, Sr, Qr) => {
```

#### 8. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L298-L301` → after: `L83-L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L83-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/297.js#L83-L84) · [Before (L298-L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/297.js#L298-L301)

```diff
-       b: () => uR,
-       c: () => iR,
-       g: () => qR,
-       j: () => ZR
+       d: () => ar,
+       g: () => Wr
```

#### 9. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L303-L304` → after: `L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/297.js#L86) · [Before (L303-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/297.js#L303-L304)

```diff
-     var yR = GR(41678),
-       tR = GR(38204);
+     var Zr = Qr(42121);
```

#### 10. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L307-L333` → after: `L89-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L89-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/297.js#L89-L93) · [Before (L307-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/297.js#L307-L333)

```diff
-       -1 === RR.indexOf("vClipPlane") && RR.push("vClipPlane"), -1 === RR.indexOf("vClipPlane2") && RR.push("vClipPlane2"), -1 === RR.indexOf("vClipPlane3") && RR.push("vClipPlane3"), -1 === RR.indexOf("vClipPlane4") && RR.push("vClipPlane4"), -1 === RR.indexOf("vClipPlane5") &&  … [truncated]
-     }
- 
-     function ZR(RR, JR, GR) {
-       const yR = !!(RR.clipPlane ?? JR.clipPlane),
-         tR = !!(RR.clipPlane2 ?? JR.clipPlane2),
-         uR = !!(RR.clipPlane3 ?? JR.clipPlane3),
-         ZR = !!(RR.clipPlane4 ?? JR.clipPlane4),
-         qR = !!(RR.clipPlane5 ?? JR.clipPlane5),
-         iR = !!(RR.clipPlane6 ?? JR.clipPlane6);
-       yR && GR.push("#define CLIPPLANE"), tR && GR.push("#define CLIPPLANE2"), uR && GR.push("#define CLIPPLANE3"), ZR && GR.push("#define CLIPPLANE4"), qR && GR.push("#define CLIPPLANE5"), iR && GR.push("#define CLIPPLANE6")
-     }
- 
-     function qR(RR, JR, GR) {
-       let yR = !1;
-       const tR = !!(RR.clipPlane ?? JR.clipPlane),
- ... (11 more removed lines; see GitHub link above)
+       return class extends rr {
+         constructor() {
+           super(...arguments), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING … [truncated]
+         }
+       }
```

#### 11. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L335-L339` → after: `L95-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L95-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/297.js#L95-L97) · [Before (L335-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/297.js#L335-L339)

```diff
- 
-     function fR(RR, JR, GR) {
-       if (GR) {
-         const uR = yR.d.jH()?.floatingOriginOffset || tR.r.ZeroReadOnly;
-         RR.setFloat4(JR, GR.normal.x, GR.normal.y, GR.normal.z, GR.d + tR.r.Dot(GR.normal, uR))
+     class ar extends Zr.b {
+       constructor() {
+         super(), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this. … [truncated]
```

#### 12. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L343` → after: `L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/297.js#L101) · [Before (L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/297.js#L343)

```diff
-   41873: (RR, JR, GR) => {
+   42198: (rr, Sr, Qr) => {
```

#### 13. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L345` → after: `L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/297.js#L103) · [Before (L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/297.js#L345)

```diff
-       c: () => yR
+       b: () => xr
```

#### 14. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L347` → after: `L105-L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L105-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/297.js#L105-L112) · [Before (L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/297.js#L347)

```diff
-     class yR {
+     var Zr = Qr(41872),
+       Wr = Qr(42130),
+       ar = Qr(41875),
+       jr = Qr(42178),
+       Ir = Qr(42121),
+       fr = Qr(42202),
+       Er = Qr(42167);
+     class pr extends Ir.b {
```

#### 15. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L349-L387` → after: `L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/297.js#L114) · [Before (L349-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/297.js#L349-L387)

```diff
-         this._defines = {}, this._currentRank = 32, this._maxRank = -1, this._mesh = null
-       }
-       unBindMesh() {
-         this._mesh = null
-       }
-       addFallback(RR, JR) {
-         this._defines[RR] || (RR < this._currentRank && (this._currentRank = RR), RR > this._maxRank && (this._maxRank = RR), this._defines[RR] = new Array), this._defines[RR].push(JR)
-       }
-       addCPUSkinningFallback(RR, JR) {
-         this._mesh = JR, RR < this._currentRank && (this._currentRank = RR), RR > this._maxRank && (this._maxRank = RR)
-       }
-       get hasMoreFallbacks() {
-         return this._currentRank <= this._maxRank
-       }
-       reduce(RR, JR) {
-         if (this._mesh && this._mesh.computeBonesUsingShaders && this._mesh.numBoneInfluencers > 0) {
- ... (23 more removed lines; see GitHub link above)
+         super(...arguments), this.DETAIL = !1, this.DETAILDIRECTUV = 0, this.DETAIL_NORMALBLENDMETHOD = 0
```

#### 16. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L407-L441` → after: `L118-L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L118-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/297.js#L118-L134) · [Before (L407-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/297.js#L407-L441)

```diff
-       var RR;
-       let JR, GR, uR, ZR, qR, iR, fR, VR, KR, wR, eR, aR, LR = [];
-       return RR = class {
-         constructor() {
-           this._func = (0, yR.m)(this, LR), this.reset()
-         }
-         reset() {
-           this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = 519, this.opStencilFail = 7680, this.opDepthFail = 7680, this.opStencilDepthPass = 7681, this.backFunc = 519, this.backOpStencilFail = 7680, this.backOpDepthFail = 7680, this.backOpSt … [truncated]
-         }
-         get func() {
-           return this._func
-         }
-         set func(RR) {
-           this._func = RR
-         }
-         get backFunc() {
- ... (19 more removed lines; see GitHub link above)
+       var rr, Sr, Qr, Ir;
+       let xr, mr, Nr, Ur, tr, hr, zr = fr.c,
+         Yr = [],
+         nr = [],
+         er = [],
+         Kr = [],
+         yr = [],
+         Br = [],
+         Tr = [],
+         vr = [],
+         Or = [],
+         Lr = [],
+         lr = [],
+         Xr = [];
+       return rr = class extends zr {
+         get texture() {
+ ... (1 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L443-L444` → after: `L136-L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L136-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/297.js#L136-L137) · [Before (L443-L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/297.js#L443-L444)

```diff
-         set opStencilFail(RR) {
-           this._opStencilFail = RR
+         set texture(rr) {
+           (0, Zr.i)(this, Sr, rr, "f")
```

#### 18. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L446-L447` → after: `L139-L140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L139-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/297.js#L139-L140) · [Before (L446-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/297.js#L446-L447)

```diff
-         get opDepthFail() {
-           return this._opDepthFail
+         get normalBlendMethod() {
+           return (0, Zr.e)(this, Qr, "f")
```

#### 19. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L449-L450` → after: `L142-L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L142-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/297.js#L142-L143) · [Before (L449-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/297.js#L449-L450)

```diff
-         set opDepthFail(RR) {
-           this._opDepthFail = RR
+         set normalBlendMethod(rr) {
+           (0, Zr.i)(this, Qr, rr, "f")
```

#### 20. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L452-L453` → after: `L145-L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L145-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/297.js#L145-L146) · [Before (L452-L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/297.js#L452-L453)

```diff
-         get opStencilDepthPass() {
-           return this._opStencilDepthPass
+         get isEnabled() {
+           return (0, Zr.e)(this, Ir, "f")
```

#### 21. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L455-L456` → after: `L148-L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L148-L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/297.js#L148-L149) · [Before (L455-L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/297.js#L455-L456)

```diff
-         set opStencilDepthPass(RR) {
-           this._opStencilDepthPass = RR
+         set isEnabled(rr) {
+           (0, Zr.i)(this, Ir, rr, "f")
```

#### 22. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L458-L459` → after: `L151-L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L151-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/297.js#L151-L152) · [Before (L458-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/297.js#L458-L459)

```diff
-         get backOpStencilFail() {
-           return this._backOpStencilFail
+         _markAllSubMeshesAsTexturesDirty() {
+           this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
```

#### 23. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L461-L462` → after: `L154-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L154-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/297.js#L154-L155) · [Before (L461-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/297.js#L461-L462)

```diff
-         set backOpStencilFail(RR) {
-           this._backOpStencilFail = RR
+         isCompatible() {
+           return !0
```

#### 24. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L464-L465` → after: `L157-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L157-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/297.js#L157-L159) · [Before (L464-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/297.js#L464-L465)

```diff
-         get backOpDepthFail() {
-           return this._backOpDepthFail
+         constructor(rr) {
+           let ar = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+           super(rr, "DetailMap", 140, new pr, ar), this._texture = null, Sr.set(this, (0, Zr.m)(this, Yr, void 0)), this.diffuseBlendLevel = ((0, Zr.m)(this, nr), (0, Zr.m)(this, er, 1)), this.roughnessBlendLevel = ((0, Zr.m)(this, Kr), (0, Zr.m)(this, yr, 1)), this.bumpLevel = ( … [truncated]
```

#### 25. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L467-L468` → after: `L161-L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L161-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/297.js#L161-L162) · [Before (L467-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/297.js#L467-L468)

```diff
-         set backOpDepthFail(RR) {
-           this._backOpDepthFail = RR
+         isReadyForSubMesh(rr, Sr, Qr) {
+           return !this._isEnabled || !(rr._areTexturesDirty && Sr.texturesEnabled && Qr.getCaps().standardDerivatives && this._texture && jr.d.DetailTextureEnabled && !this._texture.isReady())
```

#### 26. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L470-L471` → after: `L164-L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L164-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/297.js#L164-L169) · [Before (L470-L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/297.js#L470-L471)

```diff
-         get backOpStencilDepthPass() {
-           return this._backOpStencilDepthPass
+         prepareDefines(rr, Sr) {
+           if (this._isEnabled) {
+             rr.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod;
+             const Qr = Sr.MU();
+             rr._areTexturesDirty && (Qr.getCaps().standardDerivatives && this._texture && jr.d.DetailTextureEnabled && this._isEnabled ? ((0, Er.Y)(this._texture, rr, "DETAIL"), rr.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod) : rr.DETAIL = !1)
+           } else rr.DETAIL = !1
```

#### 27. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L473-L474` → after: `L171-L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L171-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/297.js#L171-L174) · [Before (L473-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/297.js#L473-L474)

```diff
-         set backOpStencilDepthPass(RR) {
-           this._backOpStencilDepthPass = RR
+         bindForSubMesh(rr, Sr) {
+           if (!this._isEnabled) return;
+           const Qr = this._material.isFrozen;
+           rr.useUbo && Qr && rr.isSync || this._texture && jr.d.DetailTextureEnabled && (rr.updateFloat4("vDetailInfos", this._texture.coordinatesIndex, this.diffuseBlendLevel, this.bumpLevel, this.roughnessBlendLevel), (0, Er.B)(this._texture, rr, "detail")), Sr.texturesEnabled  … [truncated]
```

#### 28. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L476-L477` → after: `L176-L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L176-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/297.js#L176-L177) · [Before (L476-L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/297.js#L476-L477)

```diff
-         get mask() {
-           return this._mask
+         hasTexture(rr) {
+           return this._texture === rr
```

#### 29. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L479-L480` → after: `L179-L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L179-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/297.js#L179-L180) · [Before (L479-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/297.js#L479-L480)

```diff
-         set mask(RR) {
-           this._mask = RR
+         getActiveTextures(rr) {
+           this._texture && rr.push(this._texture)
```

#### 30. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L482-L483` → after: `L182-L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L182-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/297.js#L182-L183) · [Before (L482-L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/297.js#L482-L483)

```diff
-         get enabled() {
-           return this._enabled
+         getAnimatables(rr) {
+           this._texture && this._texture.animations && this._texture.animations.length > 0 && rr.push(this._texture)
```

#### 31. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L485-L486` → after: `L185-L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L185-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/297.js#L185-L186) · [Before (L485-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/297.js#L485-L486)

```diff
-         set enabled(RR) {
-           this._enabled = RR
+         dispose(rr) {
+           rr && this._texture?.dispose()
```

#### 32. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L489-L498` → after: `L189-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L189-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/297.js#L189-L205) · [Before (L489-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/297.js#L489-L498)

```diff
-           return "MaterialStencilState"
-         }
-         copyTo(RR) {
-           rR.c.Clone((() => RR), this)
-         }
-         serialize() {
-           return rR.c.Serialize(this)
-         }
-         parse(RR, JR, GR) {
-           rR.c.Parse((() => this), RR, JR, GR)
+           return "DetailMapConfiguration"
+         }
+         getSamplers(rr) {
+           rr.push("detailSampler")
+         }
+         getUniforms() {
+           return {
+             ubo: [{
+               name: "vDetailInfos",
+               size: 4,
+               type: "vec4"
+             }, {
+               name: "detailMatrix",
+               size: 16,
+               type: "mat4"
+             }]
+ ... (1 more added lines; see GitHub link above)
```

#### 33. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L500-L534` → after: `L207-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L207-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/297.js#L207-L211) · [Before (L500-L534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/297.js#L500-L534)

```diff
-       }, (() => {
-         const rR = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
-         JR = [(0, tR.H)()], GR = [(0, tR.H)()], uR = [(0, tR.H)()], ZR = [(0, tR.H)()], qR = [(0, tR.H)()], iR = [(0, tR.H)()], fR = [(0, tR.H)()], VR = [(0, tR.H)()], KR = [(0, tR.H)()], wR = [(0, tR.H)()], eR = [(0, tR.H)()], aR = [(0, tR.H)()], (0, yR.l)(RR, null, JR, {
-           kind: "getter",
-           name: "func",
-           static: !1,
-           private: !1,
-           access: {
-             has: RR => "func" in RR,
-             get: RR => RR.func
-           },
-           metadata: rR
-         }, null, LR), (0, yR.l)(RR, null, GR, {
-           kind: "getter",
-           name: "backFunc",
-           static: !1,
- ... (19 more removed lines; see GitHub link above)
+       }, Sr = new WeakMap, Qr = new WeakMap, Ir = new WeakMap, (() => {
+         const Sr = "function" === typeof Symbol && Symbol.metadata ? Object.create(zr[Symbol.metadata] ?? null) : void 0;
+         xr = [(0, ar.z)("detailTexture"), (0, ar.f)("_markAllSubMeshesAsTexturesDirty")], mr = [(0, ar.G)()], Nr = [(0, ar.G)()], Ur = [(0, ar.G)()], tr = [(0, ar.G)(), (0, ar.f)("_markAllSubMeshesAsTexturesDirty")], hr = [(0, ar.G)(), (0, ar.f)("_markAllSubMeshesAsTexturesDirty" … [truncated]
+           kind: "accessor",
+           name: "texture",
```

#### 34. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L538-L569` → after: `L215-L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L215-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/297.js#L215-L219) · [Before (L538-L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/297.js#L538-L569)

```diff
-             has: RR => "funcMask" in RR,
-             get: RR => RR.funcMask
-           },
-           metadata: rR
-         }, null, LR), (0, yR.l)(RR, null, qR, {
-           kind: "getter",
-           name: "opStencilFail",
-           static: !1,
-           private: !1,
-           access: {
-             has: RR => "opStencilFail" in RR,
-             get: RR => RR.opStencilFail
-           },
-           metadata: rR
-         }, null, LR), (0, yR.l)(RR, null, iR, {
-           kind: "getter",
- ... (16 more removed lines; see GitHub link above)
+             has: rr => "texture" in rr,
+             get: rr => rr.texture,
+             set: (rr, Sr) => {
+               rr.texture = Sr
+             }
```

#### 35. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L572-L574` → after: `L222-L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L222-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/297.js#L222-L224) · [Before (L572-L574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/297.js#L572-L574)

```diff
-         }, null, LR), (0, yR.l)(RR, null, VR, {
-           kind: "getter",
-           name: "backOpStencilFail",
+         }, Yr, nr), (0, Zr.k)(rr, null, tr, {
+           kind: "accessor",
+           name: "normalBlendMethod",
```

#### 36. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L578-L579` → after: `L228-L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L228-L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/297.js#L228-L232) · [Before (L578-L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/297.js#L578-L579)

```diff
-             has: RR => "backOpStencilFail" in RR,
-             get: RR => RR.backOpStencilFail
+             has: rr => "normalBlendMethod" in rr,
+             get: rr => rr.normalBlendMethod,
+             set: (rr, Sr) => {
+               rr.normalBlendMethod = Sr
+             }
```

#### 37. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L582-L584` → after: `L235-L237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L235-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/297.js#L235-L237) · [Before (L582-L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/297.js#L582-L584)

```diff
-         }, null, LR), (0, yR.l)(RR, null, KR, {
-           kind: "getter",
-           name: "backOpDepthFail",
+         }, Or, Lr), (0, Zr.k)(rr, null, hr, {
+           kind: "accessor",
+           name: "isEnabled",
```

#### 38. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L588-L589` → after: `L241-L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L241-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/297.js#L241-L245) · [Before (L588-L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/297.js#L588-L589)

```diff
-             has: RR => "backOpDepthFail" in RR,
-             get: RR => RR.backOpDepthFail
+             has: rr => "isEnabled" in rr,
+             get: rr => rr.isEnabled,
+             set: (rr, Sr) => {
+               rr.isEnabled = Sr
+             }
```

#### 39. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L592-L594` → after: `L248-L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L248-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/297.js#L248-L250) · [Before (L592-L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/297.js#L592-L594)

```diff
-         }, null, LR), (0, yR.l)(RR, null, wR, {
-           kind: "getter",
-           name: "backOpStencilDepthPass",
+         }, lr, Xr), (0, Zr.k)(null, null, mr, {
+           kind: "field",
+           name: "diffuseBlendLevel",
```

#### 40. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L598-L599` → after: `L254-L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L254-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/297.js#L254-L258) · [Before (L598-L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/297.js#L598-L599)

```diff
-             has: RR => "backOpStencilDepthPass" in RR,
-             get: RR => RR.backOpStencilDepthPass
+             has: rr => "diffuseBlendLevel" in rr,
+             get: rr => rr.diffuseBlendLevel,
+             set: (rr, Sr) => {
+               rr.diffuseBlendLevel = Sr
+             }
```

#### 41. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L602-L604` → after: `L261-L263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L261-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/297.js#L261-L263) · [Before (L602-L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/297.js#L602-L604)

```diff
-         }, null, LR), (0, yR.l)(RR, null, eR, {
-           kind: "getter",
-           name: "mask",
+         }, er, Kr), (0, Zr.k)(null, null, Nr, {
+           kind: "field",
+           name: "roughnessBlendLevel",
```

#### 42. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L608-L609` → after: `L267-L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L267-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/297.js#L267-L271) · [Before (L608-L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/297.js#L608-L609)

```diff
-             has: RR => "mask" in RR,
-             get: RR => RR.mask
+             has: rr => "roughnessBlendLevel" in rr,
+             get: rr => rr.roughnessBlendLevel,
+             set: (rr, Sr) => {
+               rr.roughnessBlendLevel = Sr
+             }
```

#### 43. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L612-L614` → after: `L274-L276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L274-L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/297.js#L274-L276) · [Before (L612-L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/297.js#L612-L614)

```diff
-         }, null, LR), (0, yR.l)(RR, null, aR, {
-           kind: "getter",
-           name: "enabled",
+         }, yr, Br), (0, Zr.k)(null, null, Ur, {
+           kind: "field",
+           name: "bumpLevel",
```

#### 44. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L618-L619` → after: `L280-L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L280-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/297.js#L280-L284) · [Before (L618-L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/297.js#L618-L619)

```diff
-             has: RR => "enabled" in RR,
-             get: RR => RR.enabled
+             has: rr => "bumpLevel" in rr,
+             get: rr => rr.bumpLevel,
+             set: (rr, Sr) => {
+               rr.bumpLevel = Sr
+             }
```

#### 45. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L622` → after: `L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/297.js#L287) · [Before (L622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/297.js#L622)

```diff
-         }, null, LR), rR && Object.defineProperty(RR, Symbol.metadata, {
+         }, Tr, vr), Sr && Object.defineProperty(rr, Symbol.metadata, {
```

#### 46. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L629-L798` → after: `L294-L349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L294-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/297.js#L294-L349) · [Before (L629-L798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/297.js#L629-L798)

```diff
-     })();
-     var aR = GR(41852),
-       LR = GR(41436),
-       nR = GR(41407);
-     let UR = (() => {
-       var RR;
-       let JR, GR, nR, UR, WR, AR, CR, XR, MR, BR, lR, pR, gR, bR, vR, OR, xR, NR, DR, HR, oR, cR, PR, IR, mR, zR, SR, jR, dR, ER = [],
-         YR = [],
-         kR = [],
-         QR = [],
-         FR = [],
-         TR = [],
-         sR = [],
-         hR = [],
-         RJ = [],
-         JJ = [],
- ... (154 more removed lines; see GitHub link above)
+     })()
+   },
+   42121: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       b: () => Zr
+     });
+     class Zr {
+       constructor(rr) {
+         if (this.VERTEXOUTPUT_INVARIANT = !1, this._keys = [], this._isDirty = !0, this._areLightsDirty = !0, this._areLightsDisposed = !1, this._areAttributesDirty = !0, this._areTexturesDirty = !0, this._areFresnelDirty = !0, this._areMiscDirty = !0, this._arePrePassDirty = !0, … [truncated]
+           for (const Sr in rr) Object.prototype.hasOwnProperty.call(rr, Sr) && this._setDefaultValue(Sr)
+       }
+       get isDirty() {
+         return this._isDirty
+       }
+       markAsProcessed() {
+         this._isDirty = !1, this._areAttributesDirty = !1, this._areTexturesDirty = !1, this._areFresnelDirty = !1, this._areLightsDirty = !1, this._areLightsDisposed = !1, this._areMiscDirty = !1, this._arePrePassDirty = !1, this._areImageProcessingDirty = !1
+ ... (40 more added lines; see GitHub link above)
```

#### 47. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L800-L801` → after: `L351-L357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L351-L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/297.js#L351-L357) · [Before (L800-L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/297.js#L800-L801)

```diff
-         set wireframe(JR) {
-           this.fillMode = JR ? RR.WireFrameFillMode : RR.TriangleFillMode
+         return !0
+       }
+       cloneTo(rr) {
+         this._keys.length !== rr._keys.length && (rr._keys = this._keys.slice(0));
+         for (let Sr = 0; Sr < this._keys.length; Sr++) {
+           const Qr = this._keys[Sr];
+           rr[Qr] = this[Qr]
```

#### 48. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L803-L807` → after: `L359-L388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L359-L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/297.js#L359-L388) · [Before (L803-L807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/297.js#L803-L807)

```diff
-         get pointsCloud() {
-           switch (this._fillMode) {
-             case RR.PointFillMode:
-             case RR.PointListDrawMode:
-               return !0
+       }
+       reset() {
+         for (const rr of this._keys) this._setDefaultValue(rr)
+       }
+       _setDefaultValue(rr) {
+         const Sr = this._externalProperties?.[rr]?.type ?? typeof this[rr],
+           Qr = this._externalProperties?.[rr]?.default;
+         switch (Sr) {
+           case "number":
+             this[rr] = Qr ?? 0;
+             break;
+           case "string":
+             this[rr] = Qr ?? "";
+             break;
+           default:
+             this[rr] = Qr ?? !1
+ ... (14 more added lines; see GitHub link above)
```

#### 49. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L913-L956` → after: `L391-L521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L391-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/297.js#L391-L521) · [Before (L913-L956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/297.js#L913-L956)

```diff
-         getAlphaTestTexture() {
-           return null
-         }
-         markDirty() {
-           let JR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-           const GR = this.jH().meshes;
-           for (const RR of GR)
-             if (RR.XM)
-               for (const GR of RR.XM)
-                 if (GR.he() === this)
-                   for (const RR of GR._drawWrappers) RR && this._materialContext === RR.materialContext && (RR._wasPreviouslyReady = !1, RR._wasPreviouslyUsingInstances = null, RR._forceRebindOnNextCall = JR);
-           JR && this.hGR(RR.AllDirtyFlag)
-         }
-         _preBind(JR) {
-           let GR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
-           const yR = this._scene.ke(),
- ... (28 more removed lines; see GitHub link above)
+         return rr
+       }
+     }
+   },
+   42215: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       b: () => Ir,
+       f: () => jr,
+       h: () => ar
+     });
+     var Zr, Wr = Qr(38560);
+ 
+     function ar(rr, Sr) {
+       let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16777215;
+       const Zr = Sr(rr);
+       if (!Number.isInteger(Zr) || Zr < 0 || Zr > Qr) throw new Error(`Invalid geometry object ID ${Zr} for mesh "${rr.name}". Object IDs must be integers between 0 and 0x${Qr.toString(16).toUpperCase()}.`);
+ ... (115 more added lines; see GitHub link above)
```

#### 50. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L958-L960` → after: `L523-L697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L523-L697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/297.js#L523-L697) · [Before (L958-L960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/297.js#L958-L960)

```diff
-           if (this.disableColorWrite) {
-             const RR = this._scene.ke();
-             this._cachedColorWriteState = RR.getColorWrite(), RR.setColorWrite(!1)
+         }
+       }
+     }
+     Ir.GeometryTextureDescriptions = [{
+       type: 0,
+       name: "IrradianceLegacy",
+       clearType: 0,
+       define: "PREPASS_IRRADIANCE_LEGACY",
+       defineIndex: "PREPASS_IRRADIANCE_LEGACY_INDEX"
+     }, {
+       type: 1,
+       name: "WorldPosition",
+       clearType: 0,
+       define: "PREPASS_POSITION",
+       defineIndex: "PREPASS_POSITION_INDEX"
+     }, {
+ ... (159 more added lines; see GitHub link above)
```

#### 51. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L962-L964` → after: `L699-L702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L699-L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/297.js#L699-L702) · [Before (L962-L964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/297.js#L962-L964)

```diff
-           if (0 !== this.depthFunction) {
-             const RR = this._scene.ke();
-             this._cachedDepthFunctionState = RR.getDepthFunction() || 0, RR.setDepthFunction(this.depthFunction)
+           case 256: {
+             const rr = Sr;
+             for (const Sr of this._activePlugins) Sr.getAnimatables(rr.animatables);
+             break
```

#### 52. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L966-L969` → after: `L704-L710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L704-L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/297.js#L704-L710) · [Before (L966-L969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/297.js#L966-L969)

```diff
-         }
-         unbind() {
-           if (this._scene.getSceneUniformBuffer().unbindEffect(), this._onUnBindObservable && this._onUnBindObservable.notifyObservers(this), 0 !== this.depthFunction) {
-             this._scene.ke().setDepthFunction(this._cachedDepthFunctionState)
+           case 1024: {
+             const rr = Sr;
+             let Qr = !1;
+             for (const Sr of this._activePlugins)
+               if (Qr = Sr.hasTexture(rr.texture), Qr) break;
+             rr.hasTexture = Qr;
+             break
```

#### 53. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L971-L972` → after: `L712-L715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L712-L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/297.js#L712-L715) · [Before (L971-L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/297.js#L971-L972)

```diff
-           if (this.disableDepthWrite) {
-             this._scene.ke().setDepthWrite(this._cachedDepthWriteState)
+           case 2: {
+             const rr = Sr;
+             for (const Sr of this._plugins) Sr.dispose(rr.forceDisposeTextures);
+             break
```

#### 54. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L974-L975` → after: `L717-L724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L717-L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/297.js#L717-L724) · [Before (L974-L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/297.js#L974-L975)

```diff
-           if (this.disableColorWrite) {
-             this._scene.ke().setColorWrite(this._cachedColorWriteState)
+           case 4:
+             Sr.defineNames = this._defineNamesFromPlugins;
+             break;
+           case 128: {
+             const rr = Sr;
+             for (const Sr of this._activePlugins) rr.fallbackRank = Sr.addFallbacks(rr.defines, rr.fallbacks, rr.fallbackRank), Sr.getAttributes(rr.attributes, this._scene, rr.mesh);
+             this._uniformList.length > 0 && rr.uniforms.push(...this._uniformList), this._samplerList.length > 0 && rr.samplers.push(...this._samplerList), this._uboList.length > 0 && rr.uniformBuffersNames.push(...this._uboList), rr.customCode = this._injectCustomCode(rr, rr.cus … [truncated]
+             break
```

#### 55. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L977-L995` → after: `L726-L756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L726-L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/297.js#L726-L756) · [Before (L977-L995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/297.js#L977-L995)

```diff
-         }
-         getAnimatables() {
-           return this._eventInfo.animatables = [], this._callbackPluginEventGeneric(256, this._eventInfo), this._eventInfo.animatables
-         }
-         getActiveTextures() {
-           return this._eventInfo.activeTextures = [], this._callbackPluginEventGeneric(512, this._eventInfo), this._eventInfo.activeTextures
-         }
-         hasTexture(RR) {
-           return this._eventInfo.hasTexture = !1, this._eventInfo.texture = RR, this._callbackPluginEventGeneric(1024, this._eventInfo), this._eventInfo.hasTexture
-         }
-         clone(RR) {
-           return null
-         }
-         _clonePlugins(JR, GR) {
-           const yR = {};
-           if (this._serializePlugins(yR), RR._ParsePlugins(yR, JR, this._scene, GR), this.pluginManager)
- ... (3 more removed lines; see GitHub link above)
+           case 8: {
+             const rr = Sr;
+             this._uboDeclaration = "", this._vertexDeclaration = "", this._fragmentDeclaration = "", this._uniformList = [], this._samplerList = [], this._uboList = [];
+             const Qr = 1 === this._material.shaderLanguage;
+             for (const Sr of this._plugins) {
+               const Zr = Sr.getUniforms(this._material.shaderLanguage);
+               if (Zr) {
+                 if (Zr.ubo)
+                   for (const Sr of Zr.ubo) {
+                     if (Sr.size && Sr.type) {
+                       const Zr = Sr.arraySize ?? 0;
+                       if (rr.ubo.addUniform(Sr.name, Sr.size, Zr), Qr) {
+                         let rr;
+                         switch (Sr.type) {
+                           case "mat4":
+                             rr = "mat4x4f";
+ ... (15 more added lines; see GitHub link above)
```

#### 56. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L998-L1003` → after: `L761-L792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L761-L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/297.js#L761-L792) · [Before (L998-L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/297.js#L998-L1003)

```diff
-         getBindedMeshes() {
-           if (this.meshMap) {
-             const RR = [];
-             for (const JR in this.meshMap) {
-               const GR = this.meshMap[JR];
-               GR && RR.push(GR)
+       }
+       _collectPointNames(rr, Sr) {
+         if (Sr)
+           for (const Qr in Sr) this._codeInjectionPoints[rr] || (this._codeInjectionPoints[rr] = {}), this._codeInjectionPoints[rr][Qr] = !0
+       }
+       _injectCustomCode(rr, Sr) {
+         return (Qr, Zr) => {
+           Sr && (Zr = Sr(Qr, Zr)), this._uboDeclaration && (Zr = Zr.replace("#define ADDITIONAL_UBO_DECLARATION", this._uboDeclaration)), this._vertexDeclaration && (Zr = Zr.replace("#define ADDITIONAL_VERTEX_DECLARATION", this._vertexDeclaration)), this._fragmentDeclaration && ( … [truncated]
+           const Wr = this._codeInjectionPoints?.[Qr];
+           if (!Wr) return Zr;
+           let fr = null;
+           for (let Sr in Wr) {
+             let Wr = "";
+             for (const Zr of this._activePlugins) {
+               const Ir = this._material.shaderLanguage;
+               let Er = Zr.getCustomCode(Qr, Ir)?.[Sr];
+ ... (16 more added lines; see GitHub link above)
```

#### 57. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L1005` → after: `L794-L815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L794-L815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/297.js#L794-L815) · [Before (L1005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/297.js#L1005)

```diff
-             return RR
+             if (Wr.length > 0)
+               if ("!" === Sr.charAt(0)) {
+                 Sr = Sr.substring(1);
+                 let rr = "g";
+                 if ("!" === Sr.charAt(0)) rr = "", Sr = Sr.substring(1);
+                 else {
+                   const Qr = Ir.exec(Sr);
+                   Qr && Qr.length >= 2 && (rr = Qr[1], Sr = Sr.substring(rr.length + 1))
+                 }
+                 rr.indexOf("g") < 0 && (rr += "g");
+                 const Qr = new RegExp(Sr, rr);
+                 let ar = Qr.exec(Zr);
+                 for (; null !== ar;) {
+                   const {
+                     index: rr
+                   } = ar, Sr = Er(Wr, ar);
+ ... (6 more added lines; see GitHub link above)
```

#### 58. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L1007-L1050` → after: `L817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/297.js#L817) · [Before (L1007-L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/297.js#L1007-L1050)

```diff
-           return this._scene.meshes.filter((RR => RR.material === this))
-         }
-         forceCompilation(RR, JR, GR, yR) {
-           const tR = {
-               clipPlane: !1,
-               useInstances: !1,
-               ...GR
-             },
-             uR = this.jH(),
-             ZR = this.allowShaderHotSwapping;
-           this.allowShaderHotSwapping = !1;
-           const qR = () => {
-             if (!this._scene || !this._scene.ke()) return;
-             const GR = uR.clipPlane;
-             if (tR.clipPlane && (uR.clipPlane = new KR.c(0, 0, 0, 1)), this._storeEffectOnSubMeshes) {
-               let GR = !0,
- ... (28 more removed lines; see GitHub link above)
+           return Zr
```

#### 59. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L1052-L1060` → after: `L819-L876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L819-L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/297.js#L819-L876) · [Before (L1052-L1060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/297.js#L1052-L1060)

```diff
-         _markAllSubMeshesAsDirty(RR) {
-           const JR = this.jH();
-           if (JR.blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
-           const GR = JR.meshes;
-           for (const yR of GR)
-             if (yR.XM)
-               for (const GR of yR.XM) {
-                 if ((GR.he() || (JR._hasDefaultMaterial ? JR.defaultMaterial : null)) === this)
-                   for (const JR of GR._drawWrappers) JR && JR.defines && JR.defines.markAllAsDirty && this._materialContext === JR.materialContext && RR(JR.defines)
+       }
+     }
+     fr._MaterialPluginClassToMainDefine = {}, fr._MaterialPluginCounter = 0;
+ 
+     function Er(rr, Sr) {
+       return rr.replace(/\$(\d+)/g, ((rr, Qr) => {
+         const Zr = Number(Qr);
+         return Zr < Sr.length ? Sr[Zr] : ""
+       }))
+     }
+     var pr = Qr(41889),
+       xr = Qr(38609);
+     let mr = (() => {
+         var rr;
+         let Sr, Qr, ar, jr, Ir = [],
+           Er = [],
+ ... (42 more added lines; see GitHub link above)
```

#### 60. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L1108-L1125` → after: `L879-L919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L879-L919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/297.js#L879-L919) · [Before (L1108-L1125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/297.js#L1108-L1125)

```diff
-         }
-         setPrePassRenderer(RR) {
-           return !1
-         }
-         dispose(RR, JR, GR) {
-           const yR = this.jH();
-           if (yR.stopAnimation(this), yR.freeProcessedMaterials(), yR.removeMaterial(this), this._eventInfo.forceDisposeTextures = JR, this._callbackPluginEventGeneric(2, this._eventInfo), this._parentContainer) {
-             const RR = this._parentContainer.materials.indexOf(this);
-             RR > -1 && this._parentContainer.materials.splice(RR, 1), this._parentContainer = null
-           }
-           if (!0 !== GR)
-             if (this.meshMap)
-               for (const tR in this.meshMap) {
-                 const RR = this.meshMap[tR];
-                 this._disposeMeshResources(RR)
-               } else {
- ... (2 more removed lines; see GitHub link above)
+           prepareDefinesBeforeAttributes(rr, Sr, Qr) {}
+           prepareDefines(rr, Sr, Qr) {}
+           hasTexture(rr) {
+             return !1
+           }
+           hasRenderTargetTextures() {
+             return !1
+           }
+           fillRenderTargetTextures(rr) {}
+           getActiveTextures(rr) {}
+           getAnimatables(rr) {}
+           addFallbacks(rr, Sr, Qr) {
+             return Qr
+           }
+           getSamplers(rr) {}
+           getAttributes(rr, Sr, Qr) {}
+ ... (25 more added lines; see GitHub link above)
```

#### 61. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L1127-L1141` → after: `L921-L932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L921-L932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/297.js#L921-L932) · [Before (L1127-L1141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/297.js#L1127-L1141)

```diff
-           this._uniformBuffer.dispose(), this._drawWrapper.effect && (this._storeEffectOnSubMeshes || this._drawWrapper.effect.dispose(), this._drawWrapper.effect = null), this.metadata = null, this.YH.notifyObservers(this), this.YH.clear(), this._onBindObservable && this._onBind … [truncated]
-         }
-         _disposeMeshResources(RR) {
-           if (!RR) return;
-           const JR = RR.geometry,
-             GR = RR._internalAbstractMeshDataInfo._materialForRenderPass;
-           if (this._storeEffectOnSubMeshes) {
-             if (RR.XM && GR)
-               for (const yR of RR.XM) {
-                 const RR = yR._drawWrappers;
-                 for (let tR = 0; tR < RR.length; tR++) {
-                   const uR = RR[tR]?.effect;
-                   if (!uR) continue;
-                   GR[tR] === this && (JR?._releaseVertexArrayObject(uR), yR._removeDrawWrapper(tR, !0, !0))
-                 }
+             },
+             metadata: fr
+           }, Ir, Er), (0, Zr.k)(null, null, Qr, {
+             kind: "field",
+             name: "priority",
+             static: !1,
+             private: !1,
+             access: {
+               has: rr => "priority" in rr,
+               get: rr => rr.priority,
+               set: (rr, Sr) => {
+                 rr.priority = Sr
```

#### 62. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L1143-L1162` → after: `L934-L992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L934-L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/297.js#L934-L992) · [Before (L1143-L1162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/297.js#L1143-L1162)

```diff
-           } else JR?._releaseVertexArrayObject(this._drawWrapper.effect);
-           RR.material !== this || RR.IuR || (RR.material = null)
-         }
-         serialize() {
-           const RR = rR.c.Serialize(this);
-           return RR.stencil = this.stencil.serialize(), RR.uniqueId = this.uniqueId, this._serializePlugins(RR), RR
-         }
-         _serializePlugins(RR) {
-           if (RR.plugins = {}, this.pluginManager)
-             for (const JR of this.pluginManager._plugins) JR.doNotSerialize || (RR.plugins[JR.getClassName()] = JR.serialize())
-         }
-         static ParseAlphaMode(RR, JR) {
-           void 0 !== RR._alphaMode ? JR._alphaMode = Array.isArray(RR._alphaMode) ? [...RR._alphaMode] : [RR._alphaMode] : void 0 !== RR.alphaMode ? JR._alphaMode = Array.isArray(RR.alphaMode) ? [...RR.alphaMode] : [RR.alphaMode] : JR._alphaMode = [2]
-         }
-         static Parse(JR, GR, yR) {
-           if (JR.customType) {
- ... (4 more removed lines; see GitHub link above)
+             },
+             metadata: fr
+           }, xr, mr), (0, Zr.k)(null, null, ar, {
+             kind: "field",
+             name: "resolveIncludes",
+             static: !1,
+             private: !1,
+             access: {
+               has: rr => "resolveIncludes" in rr,
+               get: rr => rr.resolveIncludes,
+               set: (rr, Sr) => {
+                 rr.resolveIncludes = Sr
+               }
+             },
+             metadata: fr
+           }, Nr, Ur), (0, Zr.k)(null, null, jr, {
+ ... (43 more added lines; see GitHub link above)
```

#### 63. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L1164-L1174` → after: `L994-L1001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L994-L1001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/297.js#L994-L1001) · [Before (L1164-L1174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/297.js#L1164-L1174)

```diff
-         static _ParsePlugins(RR, JR, GR, yR) {
-           if (RR.plugins)
-             for (const tR in RR.plugins) {
-               const ZR = RR.plugins[tR];
-               let qR = JR.pluginManager?.getPlugin(ZR.name);
-               if (!qR) {
-                 const RR = uR.h.Instantiate("BABYLON." + tR);
-                 RR && (qR = new RR(JR))
-               }
-               qR?.parse(ZR, GR, yR)
-             }
+       }
+     }
+   },
+   42227: (rr, Sr, Qr) => {
+     function Zr(rr) {
+       return class extends rr {
+         constructor() {
+           super(...arguments), this.PREPASS = !1, this.PREPASS_COLOR = !1, this.PREPASS_COLOR_INDEX = -1, this.PREPASS_IRRADIANCE_LEGACY = !1, this.PREPASS_IRRADIANCE_LEGACY_INDEX = -1, this.PREPASS_IRRADIANCE = !1, this.PREPASS_IRRADIANCE_INDEX = -1, this.PREPASS_ALBEDO = !1, th … [truncated]
```

#### 64. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L1176-L1557` → after: `L1003-L1007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R1003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L1003-L1007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/297.js#L1003-L1007) · [Before (L1176-L1557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/297.js#L1176-L1557)

```diff
-       }, (() => {
-         const uR = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
-         JR = [(0, tR.H)()], GR = [(0, tR.H)()], nR = [(0, tR.H)()], UR = [(0, tR.H)()], WR = [(0, tR.H)()], AR = [(0, tR.H)()], CR = [(0, tR.H)()], XR = [(0, tR.H)("alpha")], MR = [(0, tR.H)("backFaceCulling")], BR = [(0, tR.H)("textureRepetitionMode")], lR = [(0, tR.H)("textureR … [truncated]
-           kind: "getter",
-           name: "pointsCloud",
-           static: !1,
-           private: !1,
-           access: {
-             has: RR => "pointsCloud" in RR,
-             get: RR => RR.pointsCloud
-           },
-           metadata: uR
-         }, null, ER), (0, yR.l)(RR, null, zR, {
-           kind: "getter",
-           name: "fillMode",
-           static: !1,
- ... (366 more removed lines; see GitHub link above)
+       }
+     }
+     Qr.d(Sr, {
+       e: () => Zr
+     })
```

#### 65. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L1559` → after: `L1009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R1009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L1009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/297.js#L1009) · [Before (L1559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/297.js#L1559)

```diff
-   41860: (RR, JR, GR) => {
+   42100: (rr, Sr, Qr) => {
```

#### 66. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L1561` → after: `L1011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R1011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L1011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/297.js#L1011) · [Before (L1561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/297.js#L1561)

```diff
-       b: () => tR
+       StandardMaterial: () => Zr.d
```

#### 67. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L1563-L1716` → after: `L1013-L1014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R1013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L1013-L1014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/297.js#L1013-L1014) · [Before (L1563-L1716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/297.js#L1563-L1716)

```diff
-     var yR = GR(41418);
-     class tR {
-       static get DiffuseTextureEnabled() {
-         return this._DiffuseTextureEnabled
-       }
-       static set DiffuseTextureEnabled(RR) {
-         this._DiffuseTextureEnabled !== RR && (this._DiffuseTextureEnabled = RR, yR.c.MarkAllMaterialsAsDirty(1))
-       }
-       static get BaseWeightTextureEnabled() {
-         return this._BaseWeightTextureEnabled
-       }
-       static set BaseWeightTextureEnabled(RR) {
-         this._BaseWeightTextureEnabled !== RR && (this._BaseWeightTextureEnabled = RR, yR.c.MarkAllMaterialsAsDirty(1))
-       }
-       static get BaseDiffuseRoughnessTextureEnabled() {
-         return this._BaseDiffuseRoughnessTextureEnabled
- ... (138 more removed lines; see GitHub link above)
+     var Zr = Qr(42103);
+     (0, Zr.c)()
```

#### 68. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L1718` → after: `L1016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R1016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L1016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/297.js#L1016) · [Before (L1718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/297.js#L1718)

```diff
-   41852: (RR, JR, GR) => {
+   42103: (rr, Sr, Qr) => {
```

#### 69. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L1720-L1748` → after: `L1018-L1019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R1018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L1018-L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/297.js#L1018-L1019) · [Before (L1720-L1748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/297.js#L1720-L1748)

```diff
-       B: () => AR,
-       F: () => vR,
-       I: () => CR,
-       M: () => gR,
-       N: () => bR,
-       R: () => rR,
-       T: () => wR,
-       X: () => zR,
-       Y: () => oR,
-       Z: () => DR,
-       bb: () => NR,
-       db: () => WR,
-       e: () => xR,
-       eb: () => OR,
-       fb: () => SR,
-       h: () => XR,
- ... (13 more removed lines; see GitHub link above)
+       c: () => Cr,
+       d: () => Rr
```

#### 70. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L1750-L1761` → after: `L1021-L1046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R1021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L1021-L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/297.js#L1021-L1046) · [Before (L1750-L1761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/297.js#L1750-L1761)

```diff
-     var yR = GR(39914),
-       tR = GR(38224),
-       uR = GR(41715),
-       ZR = GR(41855),
-       qR = GR(41860);
- 
-     function iR(RR, JR, GR) {
-       if (!RR || RR.LOGARITHMICDEPTH || RR.indexOf && RR.indexOf("LOGARITHMICDEPTH") >= 0) {
-         const RR = GR.activeCamera;
-         1 === RR.mode && yR.c.Error("Logarithmic depth is not compatible with orthographic cameras!", 20), JR.setFloat("logarithmicDepthConstant", 2 / (Math.log(RR.maxZ + 1) / Math.LN2))
-       }
-     }
+     var Zr = Qr(41872),
+       Wr = Qr(41875),
+       ar = Qr(41960),
+       jr = Qr(41941),
+       Ir = Qr(38684),
+       fr = Qr(41995),
+       Er = Qr(42111),
+       pr = Qr(42119),
+       xr = Qr(41965),
+       mr = Qr(42130),
+       Nr = Qr(42121),
+       Ur = Qr(42184),
+       tr = Qr(42178),
+       hr = Qr(42192),
+       zr = Qr(42198),
+       Yr = Qr(42174),
+ ... (10 more added lines; see GitHub link above)
```

#### 71. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L1763-L1843` → after: `L1048-L1054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R1048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L1048-L1054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/297.js#L1048-L1054) · [Before (L1763-L1843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/297.js#L1763-L1843)

```diff
-         r: 0,
-         g: 0,
-         b: 0
-       },
-       VR = {
-         NUM_MORPH_INFLUENCERS: 0,
-         NORMAL: !1,
-         TANGENT: !1,
-         UV: !1,
-         UV2: !1,
-         COLOR: !1
-       };
- 
-     function KR(RR, JR, GR) {
-       let yR = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-       GR && RR.fogEnabled && (!JR || JR.applyFog) && 0 !== RR.fogMode && (GR.setFloat4("vFogInfos", RR.fogMode, RR.fogStart, RR.fogEnd, RR.fogDensity), yR ? (RR.fogColor.toLinearSpaceToRef(fR, RR.ke().useExactSrgbConversions), GR.setColor3("vFogColor", fR)) : GR.setColor3("vFogCo … [truncated]
- ... (65 more removed lines; see GitHub link above)
+       effect: null,
+       subMesh: null
+     };
+     class Pr extends((0, vr.e)((0, Tr.c)(Nr.b))) {}
+     class Hr extends((0, pr.g)(Pr)) {
+       constructor(rr) {
+         super(rr), this.DIFFUSE = !1, this.DIFFUSEDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.OPACITY = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.REFLECTION = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTU … [truncated]
```

#### 72. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L1847-L2048` → after: `L1057-L1209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R1057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L1057-L1209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/297.js#L1057-L1209) · [Before (L1847-L2048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/297.js#L1847-L2048)

```diff
- 
-     function UR(RR, JR, GR) {
-       let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
-         tR = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-       if (yR && qR.b.ReflectionTextureEnabled) {
-         JR.LODBASEDMICROSFURACE ? GR.setTexture("reflectionSampler", yR) : (GR.setTexture("reflectionSampler", yR._lodTextureMid || yR), GR.setTexture("reflectionSamplerLow", yR._lodTextureLow || yR), GR.setTexture("reflectionSamplerHigh", yR._lodTextureHigh || yR)), JR.USEIRRADI … [truncated]
-         const uR = RR.iblCdfGenerator;
-         tR && uR && GR.setTexture("icdfSampler", uR.getIcdfTexture())
-       }
-     }
- 
-     function WR(RR, JR, GR) {
-       JR._needUVs = !0, JR[GR] = !0, RR.optimizeUVAllocation && RR.getTextureMatrix().isIdentityAs3x2() ? (JR[GR + "DIRECTUV"] = RR.coordinatesIndex + 1, JR["MAINUV" + (RR.coordinatesIndex + 1)] = !0) : JR[GR + "DIRECTUV"] = 0
-     }
- 
-     function AR(RR, JR, GR) {
- ... (186 more removed lines; see GitHub link above)
+     class qr extends((0, Or.b)(Ur.b)) {}
+     let Rr = (() => {
+         var rr, Sr, pr, Nr, Tr, vr, Or, Lr, lr, Pr, Rr, gr, Cr, Mr, Gr, kr, Ar, Vr, ir, wr, cr, Fr, or, br, Jr, Dr, dr, sr, ur, rS, SS, QS, ZS;
+         let WS, aS, jS, IS, fS, ES, pS, xS, mS, NS, US, tS, hS, zS, YS, nS, eS, KS, yS, BS, TS, vS, OS, LS, lS, XS, PS, HS, qS, RS, gS, CS, MS, GS, kS, AS, VS, iS, wS, cS, FS, oS, bS, JS, DS, dS, sS, uS, rQ, SQ, QQ, ZQ, WQ, aQ, jQ, IQ, fQ, EQ, pQ, xQ, mQ, NQ, UQ, tQ, hQ, zQ, YQ,  … [truncated]
+           OQ = [],
+           LQ = [],
+           lQ = [],
+           XQ = [],
+           PQ = [],
+           HQ = [],
+           qQ = [],
+           RQ = [],
+           gQ = [],
+           CQ = [],
+           MQ = [],
+           GQ = [],
+ ... (137 more added lines; see GitHub link above)
```

#### 73. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L2050-L2081` → after: `L1211-L1715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R1211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L1211-L1715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/297.js#L1211-L1715) · [Before (L2050-L2081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/297.js#L2050-L2081)

```diff
-           return GR
-         }(RR, yR);
-       !1 !== uR && (iR = (0, ZR.g)(GR, RR, yR)), yR.DEPTHPREPASS !== !JR.getColorWrite() && (yR.DEPTHPREPASS = !yR.DEPTHPREPASS, iR = !0), yR.INSTANCES !== tR && (yR.INSTANCES = tR, iR = !0), yR.THIN_INSTANCES !== qR && (yR.THIN_INSTANCES = qR, iR = !0), iR && yR.markAsUnprocesse … [truncated]
-     }
-     const cR = 40,
-       PR = 64,
-       IR = new WeakMap,
-       mR = new WeakSet;
- 
-     function zR(RR, JR, GR, tR) {
-       let uR = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
-         ZR = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
-         qR = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
-       if (!JR._areAttributesDirty && JR._needNormals === JR._normals && JR._needUVs === JR._uvs) return !1;
-       JR._normals = JR._needNormals, JR._uvs = JR._needUVs, JR.NORMAL = JR._needNormals && RR.isVerticesDataPresent("normal"), JR._needNormals && RR.isVerticesDataPresent("tangent") && (JR.TANGENT = !0);
-       for (let yR = 1; yR <= 6; ++yR) JR["UV" + yR] = !!JR._needUVs && RR.isVerticesDataPresent(`uv${1===yR?"":yR}`);
- ... (16 more removed lines; see GitHub link above)
+           set diffuseTexture(rr) {
+             (0, Zr.i)(this, Sr, rr, "f")
+           }
+           get ambientTexture() {
+             return (0, Zr.e)(this, pr, "f")
+           }
+           set ambientTexture(rr) {
+             (0, Zr.i)(this, pr, rr, "f")
+           }
+           get opacityTexture() {
+             return (0, Zr.e)(this, Nr, "f")
+           }
+           set opacityTexture(rr) {
+             (0, Zr.i)(this, Nr, rr, "f")
+           }
+           get reflectionTexture() {
+ ... (489 more added lines; see GitHub link above)
```

#### 74. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L2083-L2092` → after: `L1717-L1895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R1717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L1717-L1895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/297.js#L1717-L1895) · [Before (L2083-L2092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/297.js#L2083-L2092)

```diff
-             const ZR = !0 === JR.MULTIVIEW,
-               qR = 2 * JR.BonesPerMesh + (ZR ? 1 : 0);
-             if (IR.get(RR.skeleton) !== qR) {
-               IR.set(RR.skeleton, qR);
-               const GR = tR.ke().getCaps().maxVertexUniformVectors;
-               if (GR && !mR.has(RR.skeleton)) {
-                 const tR = 4 * JR.BonesPerMesh,
-                   uR = ZR ? PR : cR,
-                   qR = Math.max(GR - uR, 0);
-                 (tR > qR || ZR && 3 * tR > GR) && (mR.add(RR.skeleton), yR.c.Warn(`Skeleton "${RR.skeleton.name}": ${RR.skeleton.bones.length} bones stored as vertex uniforms use ${tR} of ~${qR} usable uniform vectors${ZR?" (multiview)":""} on a device reporting ${GR}. This can e … [truncated]
+           })], XS = [(0, Wr.G)("useEmissiveAsIllumination")], PS = [(0, Wr.f)("_markAllSubMeshesAsTexturesDirty")], HS = [(0, Wr.G)("linkEmissiveWithDiffuse")], qS = [(0, Wr.f)("_markAllSubMeshesAsTexturesDirty")], RS = [(0, Wr.G)("useSpecularOverAlpha")], gS = [(0, Wr.f)("_markA … [truncated]
+             kind: "accessor",
+             name: "diffuseTexture",
+             static: !1,
+             private: !1,
+             access: {
+               has: rr => "diffuseTexture" in rr,
+               get: rr => rr.diffuseTexture,
+               set: (rr, Sr) => {
+                 rr.diffuseTexture = Sr
+               }
+             },
+             metadata: Sr
+           }, lQ, XQ), (0, Zr.k)(rr, null, IS, {
+             kind: "accessor",
+             name: "ambientTexture",
+ ... (163 more added lines; see GitHub link above)
```

#### 75. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L2094-L2208` → after: `L1897-L2674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R1897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L1897-L2674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/297.js#L1897-L2674) · [Before (L2094-L2208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/297.js#L2094-L2208)

```diff
-             }
-           }
-         } else JR.NUM_BONE_INFLUENCERS = 0, JR.BonesPerMesh = 0, void 0 !== JR.BONETEXTURE && (JR.BONETEXTURE = !1)
-       }(RR, JR), uR && function(RR, JR) {
-         const GR = RR.morphTargetManager;
-         GR ? (JR.MORPHTARGETS_UV = GR.supportsUVs && JR.UV1, JR.MORPHTARGETS_UV2 = GR.supportsUV2s && JR.UV2, JR.MORPHTARGETS_TANGENT = GR.supportsTangents && JR.TANGENT, JR.MORPHTARGETS_NORMAL = GR.supportsNormals && JR.NORMAL, JR.MORPHTARGETS_POSITION = GR.supportsPositions, JR … [truncated]
-       }(RR, JR), qR && function(RR, JR) {
-         const GR = RR.bakedVertexAnimationManager;
-         JR.BAKED_VERTEX_ANIMATION_TEXTURE = !(!GR || !GR.isEnabled)
-       }(RR, JR), !0
-     }
- 
-     function SR(RR, JR) {
-       if (RR.activeCamera) {
-         const GR = JR.MULTIVIEW;
-         JR.MULTIVIEW = null !== RR.activeCamera.outputRenderTarget && RR.activeCamera.outputRenderTarget.getViewCount() > 1, JR.MULTIVIEW != GR && JR.markAsUnprocessed()
- ... (99 more removed lines; see GitHub link above)
+             },
+             metadata: Sr
+           }, kZ, AZ), (0, Zr.k)(rr, null, kS, {
+             kind: "accessor",
+             name: "disableLighting",
+             static: !1,
+             private: !1,
+             access: {
+               has: rr => "disableLighting" in rr,
+               get: rr => rr.disableLighting,
+               set: (rr, Sr) => {
+                 rr.disableLighting = Sr
+               }
+             },
+             metadata: Sr
+           }, wZ, cZ), (0, Zr.k)(rr, null, VS, {
+ ... (762 more added lines; see GitHub link above)
```

#### 76. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L2210-L2260` → after: `L2676-L2677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R2676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L2676-L2677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/297.js#L2676-L2677) · [Before (L2210-L2260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/297.js#L2210-L2260)

```diff
-     function QR(RR) {
-       let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-         GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
-         yR = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
-         tR = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
-         uR = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
-       RR.addUniform("vReflectionInfos", 2), RR.addUniform("reflectionMatrix", 16), JR && RR.addUniform("vReflectionMicrosurfaceInfos", 3), GR && (RR.addUniform("vReflectionPosition", 3), RR.addUniform("vReflectionSize", 3)), yR && (RR.addUniform("vReflectionFilteringInfo", 2), RR … [truncated]
-     }
-   },
-   41869: (RR, JR, GR) => {
-     GR.d(JR, {
-       d: () => uR
-     });
-     var yR = GR(38204),
-       tR = GR(41810);
-     class uR extends tR.d {
- ... (35 more removed lines; see GitHub link above)
+     function Cr() {
+       gr || (gr = !0, (0, xr.c)(), (0, Lr.e)("BABYLON.StandardMaterial", Rr), jr.f.DefaultMaterialFactory = rr => new Rr("default material", rr))
```

#### 77. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L2263-L2269` → after: `L2681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R2681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L2681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/297.js#L2681) · [Before (L2263-L2269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/297.js#L2263-L2269)

```diff
-   41897: (RR, JR, GR) => {
-     GR.d(JR, {
-       d: () => uR,
-       h: () => tR
-     });
-     const yR = new WeakMap;
- 
+   42219: (rr, Sr, Qr) => {
```

#### 78. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L2271-L2294` → after: `L2683-L2685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R2683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L2683-L2685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/297.js#L2683-L2685) · [Before (L2271-L2294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/297.js#L2271-L2294)

```diff
-       const JR = RR.getVertexBuffers();
-       if (!JR) return null;
-       let GR = yR.get(RR);
-       if (GR) {
-         let RR = !1;
-         for (const yR in JR)
-           if (!GR.has(yR)) {
-             RR = !0;
-             break
-           } if (!RR) return GR
-       } else GR = new Map, yR.set(RR, GR);
-       for (const yR in JR) {
-         const RR = JR[yR];
-         if (RR) {
-           const JR = RR.byteOffset,
-             tR = RR.byteStride,
- ... (8 more removed lines; see GitHub link above)
+       return class extends rr {
+         constructor() {
+           super(...arguments), this.MAINUV1 = !1, this.MAINUV2 = !1, this.MAINUV3 = !1, this.MAINUV4 = !1, this.MAINUV5 = !1, this.MAINUV6 = !1, this.UV1 = !1, this.UV2 = !1, this.UV3 = !1, this.UV4 = !1, this.UV5 = !1, this.UV6 = !1
```

#### 79. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L2311-L2390` → after: `L2691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R2691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L2691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/297.js#L2691) · [Before (L2311-L2390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/297.js#L2311-L2390)

```diff
-     });
-     var yR = GR(41520),
-       tR = GR(38204),
-       uR = GR(41524);
-     let ZR = (() => {
-       var RR;
-       let JR, GR, tR = [];
-       return RR = class {
-         static extractMinAndMaxIndexed(RR, JR, GR, yR, tR, uR) {
-           for (let ZR = GR; ZR < GR + yR; ZR++) {
-             const GR = 3 * JR[ZR],
-               yR = RR[GR],
-               qR = RR[GR + 1],
-               iR = RR[GR + 2];
-             tR.minimizeInPlaceFromFloats(yR, qR, iR), uR.maximizeInPlaceFromFloats(yR, qR, iR)
-           }
- ... (64 more removed lines; see GitHub link above)
+     })
```

#### 80. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L2392` → after: `L2693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R2693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L2693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/297.js#L2693) · [Before (L2392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/297.js#L2392)

```diff
-   41813: (RR, JR, GR) => {
+   42211: (rr, Sr, Qr) => {
```

#### 81. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L2403-L2624` → after: `L2698-L2724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R2698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L2698-L2724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/297.js#L2698-L2724) · [Before (L2403-L2624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/297.js#L2403-L2624)

```diff
-       get materialDefines() {
-         const RR = this._mainDrawWrapperOverride ? this._mainDrawWrapperOverride.defines : this._getDrawWrapper()?.defines;
-         return "string" === typeof RR ? null : RR
-       }
-       set materialDefines(RR) {
-         (this._mainDrawWrapperOverride ?? this._getDrawWrapper(void 0, !0)).defines = RR
-       }
-       _getDrawWrapper(RR) {
-         let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         RR = RR ?? this._engine.currentRenderPassId;
-         let GR = this._drawWrappers[RR];
-         return !GR && JR && (this._drawWrappers[RR] = GR = new iR.c(this._mesh.jH().ke())), GR
-       }
-       _removeDrawWrapper(RR) {
-         let JR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-         (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._drawWrappers[RR]?.dispose(JR), this._drawWrappers[RR] = void 0
- ... (206 more removed lines; see GitHub link above)
+       constructor(rr, Sr) {
+         this._webGL = {
+           load: rr,
+           loaded: !1,
+           loadPromise: null
+         }, this._webGPU = {
+           load: Sr,
+           loaded: !1,
+           loadPromise: null
+         }
+       }
+       getLoadCallback(rr) {
+         const Sr = 1 === rr ? this._webGPU : this._webGL;
+         return Sr.loaded ? void 0 : async () => {
+           await this._loadAsync(Sr)
+         }
+ ... (11 more added lines; see GitHub link above)
```

#### 82. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L2637-L2646` → after: `L2727-L2728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R2727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L2727-L2728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/297.js#L2727-L2728) · [Before (L2637-L2646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/297.js#L2637-L2646)

```diff
-       static CreateFromIndices(RR, JR, GR, yR, tR) {
-         let uR = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
-           ZR = Number.MAX_VALUE,
-           qR = -Number.MAX_VALUE;
-         const iR = (tR || yR).NuR();
-         for (let fR = JR; fR < JR + GR; fR++) {
-           const RR = iR[fR];
-           RR < ZR && (ZR = RR), RR > qR && (qR = RR)
-         }
-         return new VR(RR, ZR, qR - ZR + 1, JR, GR, yR, tR, uR)
+       _completeLoad(rr, Sr) {
+         rr.loaded = Sr, rr.loadPromise = null
```

#### 83. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L2648` → after: `L2730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R2730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L2730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/297.js#L2730) · [Before (L2648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/297.js#L2648)

```diff
-     }(yR = VR.prototype).projectToRef ?? (yR.projectToRef = (0, fR.f)("SubMesh", "projectToRef"))
+     }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/298.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/298.js` (50 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89)

#### 1. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L4` → after: `L4-L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L4-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/298.js#L4-L144) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/298.js#L4)

```diff
-   53584: (RR, JR, GR) => {
+   42142: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       d: () => Zr
+     });
+     class Zr {
+       constructor(rr, Sr, Qr) {
+         this.bu = rr, this.bv = Sr, this.distance = Qr, this.faceId = 0, this.subMeshId = 0, this._internalSubMeshId = 0
+       }
+     }
+   },
+   42155: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       d: () => jr
+     });
+     var Zr = Qr(38576),
+       Wr = Qr(38560),
+ ... (125 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L8-L9` → after: `L148-L389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L148-L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/298.js#L148-L389) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/298.js#L8-L9)

```diff
-     class yR {}
-     yR.AUTOSAMPLERSUFFIX = "Sampler", yR.DISABLEUA = "#define DISABLE_UNIFORMITY_ANALYSIS", yR.ALPHA_DISABLE = 0, yR.ALPHA_ADD = 1, yR.ALPHA_COMBINE = 2, yR.ALPHA_SUBTRACT = 3, yR.ALPHA_MULTIPLY = 4, yR.ALPHA_MAXIMIZED = 5, yR.ALPHA_ONEONE = 6, yR.ALPHA_PREMULTIPLIED = 7, yR.ALPH … [truncated]
+     var Zr = Qr(38576),
+       Wr = Qr(38560),
+       ar = Qr(42155);
+     class jr {
+       constructor(rr, Sr, Qr) {
+         this.center = Wr.u.Zero(), this.centerWorld = Wr.u.Zero(), this.minimum = Wr.u.Zero(), this.maximum = Wr.u.Zero(), this.reConstruct(rr, Sr, Qr)
+       }
+       reConstruct(rr, Sr, Qr) {
+         this.minimum.iH(rr), this.maximum.iH(Sr);
+         const Zr = Wr.u.Distance(rr, Sr);
+         Sr.addToRef(rr, this.center).scaleInPlace(.5), this.radius = .5 * Zr, this._update(Qr || Wr.d.IdentityReadOnly)
+       }
+       scale(rr) {
+         const Sr = jr._TmpVector3,
+           Qr = this.maximum.subtractToRef(this.minimum, Sr[0]),
+           Zr = Qr.length();
+ ... (226 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L11` → after: `L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/298.js#L391) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/298.js#L11)

```diff
-   53562: (RR, JR, GR) => {
+   42130: (rr, Sr, Qr) => {
```

#### 4. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L15-L19` → after: `L395-L405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L395-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/298.js#L395-L405) · [Before (L15-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/298.js#L15-L19)

```diff
-     var yR = GR(41520),
-       tR = GR(41524),
-       uR = GR(38204),
-       ZR = GR(41777),
-       qR = GR(41744);
+     var Zr = Qr(41872),
+       Wr = Qr(41875),
+       ar = Qr(41950),
+       jr = Qr(38595),
+       Ir = Qr(38587),
+       fr = Qr(42134),
+       Er = Qr(41987),
+       pr = Qr(40246),
+       xr = Qr(39264),
+       mr = Qr(42165),
+       Nr = Qr(41889);
```

#### 5. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L22-L24` → after: `L408-L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L408-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/298.js#L408-L409) · [Before (L22-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/298.js#L22-L24)

```diff
-       let JR, GR, iR, fR, VR = ZR.c,
-         KR = [];
-       return RR = class extends VR {
+       let Sr, Qr, ar, jr, Ir, fr, Er, pr, xr, mr, Ur, tr, hr = [];
+       return rr = class {
```

#### 6. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L26` → after: `L411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/298.js#L411) · [Before (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/298.js#L26)

```diff
-           super(...arguments), this._position = (0, yR.m)(this, KR), this._needProjectionMatrixCompute = !0, this._viewMatrix = uR.e.Identity(), this._projectionMatrix = uR.e.Identity()
+           this._func = (0, Zr.m)(this, hr), this.reset()
```

#### 7. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L28-L29` → after: `L413-L414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L413-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/298.js#L413-L414) · [Before (L28-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/298.js#L28-L29)

```diff
-         _setPosition(RR) {
-           this._position = RR
+         reset() {
+           this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = 519, this.opStencilFail = 7680, this.opDepthFail = 7680, this.opStencilDepthPass = 7681, this.backFunc = 519, this.backOpStencilFail = 7680, this.backOpDepthFail = 7680, this.backOpSt … [truncated]
```

#### 8. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L31-L32` → after: `L416-L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L416-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/298.js#L416-L417) · [Before (L31-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/298.js#L31-L32)

```diff
-         get position() {
-           return this._position
+         get func() {
+           return this._func
```

#### 9. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L34-L35` → after: `L419-L420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L419-L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/298.js#L419-L420) · [Before (L34-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/298.js#L34-L35)

```diff
-         set position(RR) {
-           this._setPosition(RR)
+         set func(rr) {
+           this._func = rr
```

#### 10. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L37-L38` → after: `L422-L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L422-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/298.js#L422-L423) · [Before (L37-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/298.js#L37-L38)

```diff
-         _setDirection(RR) {
-           this._direction = RR
+         get backFunc() {
+           return this._backFunc
```

#### 11. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L40-L41` → after: `L425-L426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L425-L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/298.js#L425-L426) · [Before (L40-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/298.js#L40-L41)

```diff
-         get direction() {
-           return this._direction
+         set backFunc(rr) {
+           this._backFunc = rr
```

#### 12. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L43-L44` → after: `L428-L429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L428-L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/298.js#L428-L429) · [Before (L43-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/298.js#L43-L44)

```diff
-         set direction(RR) {
-           this._setDirection(RR)
+         get funcRef() {
+           return this._funcRef
```

#### 13. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L46-L47` → after: `L431-L432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L431-L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/298.js#L431-L432) · [Before (L46-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/298.js#L46-L47)

```diff
-         get shadowMinZ() {
-           return this._shadowMinZ
+         set funcRef(rr) {
+           this._funcRef = rr
```

#### 14. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L49-L50` → after: `L434-L435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L434-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/298.js#L434-L435) · [Before (L49-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/298.js#L49-L50)

```diff
-         set shadowMinZ(RR) {
-           this._shadowMinZ = RR, this.forceProjectionMatrixCompute()
+         get funcMask() {
+           return this._funcMask
```

#### 15. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L52-L53` → after: `L437-L438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L437-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/298.js#L437-L438) · [Before (L52-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/298.js#L52-L53)

```diff
-         get shadowMaxZ() {
-           return this._shadowMaxZ
+         set funcMask(rr) {
+           this._funcMask = rr
```

#### 16. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L55-L56` → after: `L440-L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L440-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/298.js#L440-L441) · [Before (L55-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/298.js#L55-L56)

```diff
-         set shadowMaxZ(RR) {
-           this._shadowMaxZ = RR, this.forceProjectionMatrixCompute()
+         get opStencilFail() {
+           return this._opStencilFail
```

#### 17. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L58-L59` → after: `L443-L444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L443-L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/298.js#L443-L444) · [Before (L58-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/298.js#L58-L59)

```diff
-         computeTransformedInformation() {
-           return !(!this.parent || !this.parent.getWorldMatrix) && (this.transformedPosition || (this.transformedPosition = uR.r.Zero()), uR.r.TransformCoordinatesToRef(this.position, this.parent.getWorldMatrix(), this.transformedPosition), this.direction && (this.transformedDire … [truncated]
+         set opStencilFail(rr) {
+           this._opStencilFail = rr
```

#### 18. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L61-L62` → after: `L446-L447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L446-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/298.js#L446-L447) · [Before (L61-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/298.js#L61-L62)

```diff
-         getDepthScale() {
-           return 50
+         get opDepthFail() {
+           return this._opDepthFail
```

#### 19. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L64-L65` → after: `L449-L450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L449-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/298.js#L449-L450) · [Before (L64-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/298.js#L64-L65)

```diff
-         getShadowDirection(RR) {
-           return this.transformedDirection ? this.transformedDirection : this.direction
+         set opDepthFail(rr) {
+           this._opDepthFail = rr
```

#### 20. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L67-L68` → after: `L452-L453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L452-L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/298.js#L452-L453) · [Before (L67-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/298.js#L67-L68)

```diff
-         getAbsolutePosition() {
-           return this.transformedPosition ? this.transformedPosition : this.position
+         get opStencilDepthPass() {
+           return this._opStencilDepthPass
```

#### 21. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L70-L71` → after: `L455-L456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L455-L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/298.js#L455-L456) · [Before (L70-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/298.js#L70-L71)

```diff
-         setDirectionToTarget(RR) {
-           return this.direction = uR.r.Normalize(RR.subtract(this.position)), this.direction
+         set opStencilDepthPass(rr) {
+           this._opStencilDepthPass = rr
```

#### 22. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L73-L77` → after: `L458-L459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L458-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/298.js#L458-L459) · [Before (L73-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/298.js#L73-L77)

```diff
-         getRotation() {
-           this.direction.normalize();
-           const RR = uR.r.Cross(this.direction, qR.b.Y),
-             JR = uR.r.Cross(RR, this.direction);
-           return uR.r.RotationFromAxis(RR, JR, this.direction)
+         get backOpStencilFail() {
+           return this._backOpStencilFail
```

#### 23. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L79-L80` → after: `L461-L465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L461-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/298.js#L461-L465) · [Before (L79-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/298.js#L79-L80)

```diff
-         needCube() {
-           return !1
+         set backOpStencilFail(rr) {
+           this._backOpStencilFail = rr
+         }
+         get backOpDepthFail() {
+           return this._backOpDepthFail
```

#### 24. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L82-L83` → after: `L467-L468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L467-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/298.js#L467-L468) · [Before (L82-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/298.js#L82-L83)

```diff
-         needProjectionMatrixCompute() {
-           return this._needProjectionMatrixCompute
+         set backOpDepthFail(rr) {
+           this._backOpDepthFail = rr
```

#### 25. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L85-L86` → after: `L470-L471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L470-L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/298.js#L470-L471) · [Before (L85-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/298.js#L85-L86)

```diff
-         forceProjectionMatrixCompute() {
-           this._needProjectionMatrixCompute = !0
+         get backOpStencilDepthPass() {
+           return this._backOpStencilDepthPass
```

#### 26. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L88-L89` → after: `L473-L474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L473-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/298.js#L473-L474) · [Before (L88-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/298.js#L88-L89)

```diff
-         _initCache() {
-           super._initCache(), this._cache.position = uR.r.Zero()
+         set backOpStencilDepthPass(rr) {
+           this._backOpStencilDepthPass = rr
```

#### 27. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L91-L92` → after: `L476-L477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L476-L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/298.js#L476-L477) · [Before (L91-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/298.js#L91-L92)

```diff
-         _isSynchronized() {
-           return !!this._cache.position.equals(this.position)
+         get mask() {
+           return this._mask
```

#### 28. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L94-L95` → after: `L479-L480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L479-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/298.js#L479-L480) · [Before (L94-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/298.js#L94-L95)

```diff
-         computeWorldMatrix(RR) {
-           return !RR && this.isSynchronized() ? (this._currentRenderId = this.jH().getRenderId(), this._worldMatrix) : (this._updateCache(), this._cache.position.vN(this.position), this._worldMatrix || (this._worldMatrix = uR.e.Identity()), uR.e.TranslationToRef(this.position.x,  … [truncated]
+         set mask(rr) {
+           this._mask = rr
```

#### 29. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L97-L98` → after: `L482-L483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L482-L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/298.js#L482-L483) · [Before (L97-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/298.js#L97-L98)

```diff
-         getDepthMinZ(RR) {
-           return void 0 !== this.shadowMinZ ? this.shadowMinZ : RR?.minZ || 0
+         get enabled() {
+           return this._enabled
```

#### 30. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L100-L101` → after: `L485-L486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L485-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/298.js#L485-L486) · [Before (L100-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/298.js#L100-L101)

```diff
-         getDepthMaxZ(RR) {
-           return void 0 !== this.shadowMaxZ ? this.shadowMaxZ : RR?.maxZ || 1e4
+         set enabled(rr) {
+           this._enabled = rr
```

#### 31. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L103-L104` → after: `L488-L489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L488-L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/298.js#L488-L489) · [Before (L103-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/298.js#L103-L104)

```diff
-         setShadowProjectionMatrix(RR, JR, GR) {
-           return this.customProjectionMatrixBuilder ? this.customProjectionMatrixBuilder(JR, GR, RR) : this._setDefaultShadowProjectionMatrix(RR, JR, GR), this
+         getClassName() {
+           return "MaterialStencilState"
```

#### 32. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L106-L107` → after: `L491-L492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L491-L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/298.js#L491-L492) · [Before (L106-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/298.js#L106-L107)

```diff
-         _syncParentEnabledState() {
-           super._syncParentEnabledState(), this.parent && this.parent.getWorldMatrix || (this.transformedPosition = null, this.transformedDirection = null)
+         copyTo(rr) {
+           Nr.e.Clone((() => rr), this)
```

#### 33. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L109-L114` → after: `L494-L495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L494-L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/298.js#L494-L495) · [Before (L109-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/298.js#L109-L114)

```diff
-         getViewMatrix(RR) {
-           const JR = uR.l.Fe[0];
-           let GR = this.position;
-           this.computeTransformedInformation() && (GR = this.transformedPosition), uR.r.NormalizeToRef(this.getShadowDirection(RR), JR), 1 === Math.abs(uR.r.Dot(JR, uR.r.Up())) && (JR.z = 1e-13);
-           const yR = uR.l.Fe[1];
-           return GR.addToRef(JR, yR), uR.e.LookAtLHToRef(GR, yR, uR.r.Up(), this._viewMatrix), this._viewMatrix
+         serialize() {
+           return Nr.e.Serialize(this)
```

#### 34. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L116-L117` → after: `L497-L498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L497-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/298.js#L497-L498) · [Before (L116-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/298.js#L116-L117)

```diff
-         getProjectionMatrix(RR, JR) {
-           return this.setShadowProjectionMatrix(this._projectionMatrix, RR ?? this._viewMatrix, JR ?? []), this._projectionMatrix
+         parse(rr, Sr, Qr) {
+           Nr.e.Parse((() => this), rr, Sr, Qr)
```

#### 35. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L120-L121` → after: `L501-L562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L501-L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/298.js#L501-L562) · [Before (L120-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/298.js#L120-L121)

```diff
-         const uR = "function" === typeof Symbol && Symbol.metadata ? Object.create(VR[Symbol.metadata] ?? null) : void 0;
-         JR = [(0, tR.G)()], GR = [(0, tR.G)()], iR = [(0, tR.H)()], fR = [(0, tR.H)()], (0, yR.l)(RR, null, JR, {
+         const Nr = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
+         Sr = [(0, Wr.G)()], Qr = [(0, Wr.G)()], ar = [(0, Wr.G)()], jr = [(0, Wr.G)()], Ir = [(0, Wr.G)()], fr = [(0, Wr.G)()], Er = [(0, Wr.G)()], pr = [(0, Wr.G)()], xr = [(0, Wr.G)()], mr = [(0, Wr.G)()], Ur = [(0, Wr.G)()], tr = [(0, Wr.G)()], (0, Zr.k)(rr, null, Sr, {
+           kind: "getter",
+           name: "func",
+           static: !1,
+           private: !1,
+           access: {
+             has: rr => "func" in rr,
+             get: rr => rr.func
+           },
+           metadata: Nr
+         }, null, hr), (0, Zr.k)(rr, null, Qr, {
+           kind: "getter",
+           name: "backFunc",
+           static: !1,
+           private: !1,
+ ... (46 more added lines; see GitHub link above)
```

#### 36. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L123` → after: `L564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/298.js#L564) · [Before (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/298.js#L123)

```diff
-           name: "position",
+           name: "opStencilDepthPass",
```

#### 37. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L127-L128` → after: `L568-L569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L568-L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/298.js#L568-L569) · [Before (L127-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/298.js#L127-L128)

```diff
-             has: RR => "position" in RR,
-             get: RR => RR.position
+             has: rr => "opStencilDepthPass" in rr,
+             get: rr => rr.opStencilDepthPass
```

#### 38. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L131` → after: `L572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/298.js#L572) · [Before (L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/298.js#L131)

```diff
-         }, null, KR), (0, yR.l)(RR, null, GR, {
+         }, null, hr), (0, Zr.k)(rr, null, pr, {
```

#### 39. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L133` → after: `L574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/298.js#L574) · [Before (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/298.js#L133)

```diff
-           name: "direction",
+           name: "backOpStencilFail",
```

#### 40. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L137-L138` → after: `L578-L579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L578-L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/298.js#L578-L579) · [Before (L137-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/298.js#L137-L138)

```diff
-             has: RR => "direction" in RR,
-             get: RR => RR.direction
+             has: rr => "backOpStencilFail" in rr,
+             get: rr => rr.backOpStencilFail
```

#### 41. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L141` → after: `L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/298.js#L582) · [Before (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/298.js#L141)

```diff
-         }, null, KR), (0, yR.l)(RR, null, iR, {
+         }, null, hr), (0, Zr.k)(rr, null, xr, {
```

#### 42. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L143` → after: `L584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/298.js#L584) · [Before (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/298.js#L143)

```diff
-           name: "shadowMinZ",
+           name: "backOpDepthFail",
```

#### 43. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L147-L148` → after: `L588-L589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L588-L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/298.js#L588-L589) · [Before (L147-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/298.js#L147-L148)

```diff
-             has: RR => "shadowMinZ" in RR,
-             get: RR => RR.shadowMinZ
+             has: rr => "backOpDepthFail" in rr,
+             get: rr => rr.backOpDepthFail
```

#### 44. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L151` → after: `L592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/298.js#L592) · [Before (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/298.js#L151)

```diff
-         }, null, KR), (0, yR.l)(RR, null, fR, {
+         }, null, hr), (0, Zr.k)(rr, null, mr, {
```
